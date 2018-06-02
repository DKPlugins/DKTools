/*
Title: DKTools
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 3.0.0
Release: 02.06.2018
First release: 13.01.2016
Supported languages: Russian, English
*/

/*ru
Название: DKTools
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 3.0.0
Релиз: 02.06.2018
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.3.0.0 Library for RPG Maker. Made with ♥ by DKPlugins
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 3.0.0
 Release: 02.06.2018
 First release: 13.01.2016
 Supported languages: Russian, English
 Thank you for your support: https://dk-plugins.ru/donate

 ### DKTools on DKPlugins ###
 https://dk-plugins.ru/mv/dktools/

 ### DKTools on GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Online documentation ###
 https://dk-plugins.ru/documentation/DKTools/index.html

 ### Requirements and dependencies ###
 Version of RPG Maker 1.5+

 ### Instructions ###

 ### 1 ### Templates for the filename of the screenshot ###
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
 DKTools.Utils.Event
 DKTools.IO
 DKTools.IO.Entity
 DKTools.IO.File
 DKTools.IO.Directory
 DKTools.IO.WebStorage
 DKTools.ParameterManager
 DKTools.PluginManager
 DKTools.PluginCommandManager
 DKTools.PreloadManager
 DKTools.Audio
 DKTools.Event
 DKTools.Animation
 DKTools.Animation.Action
 DKTools.OptionManager
 DKTools.EventManager
 DKTools.Unit
 DKTools.Unit.Property
 DKTools.Unit.Properties
 DKTools.Unit.Function
 DKTools.Base
 DKTools.Sprite
 DKTools.Sprite.Button
 DKTools.Sprite.Cursor
 DKTools.Sprite.Arrow
 DKTools.Sprite.Selectable
 DKTools.Sprite.ProgressBar
 DKTools.Sprite.ProgressBar.Rectangle
 DKTools.Sprite.ProgressBar.Circle
 DKTools.Sprite.ProgressBar.SemiCircle
 DKTools.Sprite.CheckBox
 DKTools.Viewport
 DKTools.Layout
 DKTools.Window
 DKTools.Window.Selectable
 DKTools.Scene

 ### License and terms of use ###

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (inform if you do this)
 -Change code of plugin, but you must specify a link to the original plugin

 You can't:
 -Delete or change any information about plugin (Title, authorship, contact information, version and release)

 * @param Debugging
 * @default ---------------------------------

 * @param Open Console
 * @parent Debug
 * @text Debug console
 * @desc Open the debug console when the game test starts ?
 * @type boolean
 * @default false

 * @param Show FPS
 * @parent Debug
 * @desc Show the FPS counter when the game starts ?
 * @type boolean
 * @default false

 * @param Functions
 * @default ---------------------------------

 * @param Check Updates
 * @parent Functions
 * @desc Check updates
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false"}

 * @param Screen Resolution
 * @parent Functions
 * @desc Screen settings
 * @type struct<ScreenResolution>
 * @default {"Enabled":"false","Screen Width":"816","Screen Height":"624"}

 * @param Quick Start
 * @parent Functions
 * @desc Quick start
 * @type struct<QuickStart>
 * @default {"Enabled":"false","Scene Name":"Scene_Map","Skip Saves":"false"}

 * @param Quick Load
 * @parent Functions
 * @desc Quick load
 * @type struct<QuickLoad>
 * @default {"Enabled":"false","Key Code":"114"}

 * @param Preload Manager
 * @parent Functions
 * @desc Preloading resources
 * @type struct<PreloadManager>
 * @default {"Enabled":"false","Debugging":"false","Images":"[]"}

 * @param Screenshots
 * @parent Functions
 * @desc Screenshots
 * @type struct<Screenshots>
 * @default {"Enabled":"false","Key Code":"44","Screenshot Path":"screenshots/","Screenshot Filename":"%year_%month_%day_%hours_%minutes_%seconds.png"}

 * @param Errors Log
 * @parent Functions
 * @type struct<ErrorsLog>
 * @default {"Enabled":"None","Filename":"errors_log.txt","File Size":"10"}

*/

/*:ru
* @plugindesc v.3.0.0 Библиотека для RPG Maker. Сделано с ♥ от DKPlugins
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 3.0.0
 Релиз: 02.06.2018
 Первый релиз: 13.01.2016
 Поддерживаемые языки: Русский, Английский
 Спасибо за Вашу поддержку: https://dk-plugins.ru/donate

 ### DKTools на DKPlugins ###
 https://dk-plugins.ru/mv/dktools/

 ### DKTools на GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Онлайн документация ###
 https://dk-plugins.ru/documentation/DKTools/index.html

 ### Требования и зависимости ###
 Версия мейкера 1.5+

 ### Инструкции ###

 ### 1 ### Шаблоны для названия файла скриншота ###
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
 DKTools.Utils.Event
 DKTools.IO
 DKTools.IO.Entity
 DKTools.IO.File
 DKTools.IO.Directory
 DKTools.IO.WebStorage
 DKTools.ParameterManager
 DKTools.PluginManager
 DKTools.PluginCommandManager
 DKTools.PreloadManager
 DKTools.Audio
 DKTools.Event
 DKTools.Animation
 DKTools.Animation.Action
 DKTools.OptionManager
 DKTools.EventManager
 DKTools.Unit
 DKTools.Unit.Property
 DKTools.Unit.Properties
 DKTools.Unit.Function
 DKTools.Base
 DKTools.Sprite
 DKTools.Sprite.Button
 DKTools.Sprite.Cursor
 DKTools.Sprite.Arrow
 DKTools.Sprite.Selectable
 DKTools.Sprite.ProgressBar
 DKTools.Sprite.ProgressBar.Rectangle
 DKTools.Sprite.ProgressBar.Circle
 DKTools.Sprite.ProgressBar.SemiCircle
 DKTools.Sprite.CheckBox
 DKTools.Viewport
 DKTools.Layout
 DKTools.Window
 DKTools.Window.Selectable
 DKTools.Scene

 ### Лицензия и правила использования плагина ###

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (сообщите мне, если Вы перевели плагин на другой язык)
 -Изменять код плагина, но Вы обязаны указать ссылку на оригинальный плагин

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)

 * @param Debugging
 * @text Отладка
 * @default ---------------------------------

 * @param Open Console
 * @text Отладочная консоль
 * @parent Debugging
 * @desc Открыть отладочную консоль при запуске теста игры ?
 * @type boolean
 * @default false

 * @param Show FPS
 * @text Отобразить FPS
 * @parent Debugging
 * @desc Показать счетчик FPS при запуске теста игры ?
 * @type boolean
 * @default false

 * @param Functions
 * @text Функции
 * @default ---------------------------------

 * @param Check Updates
 * @text Проверка обновлений
 * @parent Functions
 * @desc Проверка обновлений
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false"}

 * @param Screen Resolution
 * @text Разрешение экрана
 * @parent Functions
 * @desc Настройки разрешения экрана
 * @type struct<ScreenResolution>
 * @default {"Enabled":"false","Screen Width":"816","Screen Height":"624"}

 * @param Quick Start
 * @text Быстрый старт
 * @parent Functions
 * @desc Быстрый старт
 * @type struct<QuickStart>
 * @default {"Enabled":"false","Scene Name":"Scene_Map","Skip Saves":"false"}

 * @param Quick Load
 * @text Быстрая загрузка
 * @parent Functions
 * @desc Быстрая загрузка игры
 * @type struct<QuickLoad>
 * @default {"Enabled":"false","Key Code":"114"}

 * @param Preload Manager
 * @text Предзагрузка ресурсов
 * @parent Functions
 * @desc Предварительная загрузка ресурсов
 * @type struct<PreloadManager>
 * @default {"Enabled":"false","Debugging":"false","Images":"[]"}

 * @param Screenshots
 * @text Скриншоты
 * @parent Functions
 * @desc Скриншоты
 * @type struct<Screenshots>
 * @default {"Enabled":"false","Key Code":"44","Screenshot Path":"screenshots/","Screenshot Filename":"%year_%month_%day_%hours_%minutes_%seconds.png"}

 * @param Errors Log
 * @text Логирование ошибок
 * @parent Functions
 * @desc Логирование ошибок
 * @type struct<ErrorsLog>
 * @default {"Enabled":"None","Filename":"errors_log.txt","File Size":"10"}

*/

/*~struct~CheckUpdates:

 * @param Enabled
 * @desc Enable automatic update checking ? Information is displayed in the console during the game test
 * @type boolean
 * @default false

 */

/*~struct~CheckUpdates:ru

 * @param Enabled
 * @text Проверка обновлений
 * @desc Включить автоматическую проверку обновлений ? Информация выводится в консоль при тесте игры
 * @type boolean
 * @default false

 */

/*~struct~ScreenResolution:

 * @param Enabled
 * @desc Enable the Screen Resolution function ?
 * @type boolean
 * @default false

 * @param Screen Width
 * @desc Screen Width
 * @type number
 * @min 0
 * @default 816

 * @param Screen Height
 * @desc Screen Height
 * @type number
 * @min 0
 * @default 624

 */

/*~struct~ScreenResolution:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения разрешения экрана ?
 * @type boolean
 * @default false

 * @param Screen Width
 * @text Ширина экрана
 * @desc Ширина экрана
 * @type number
 * @min 0
 * @default 816

 * @param Screen Height
 * @text Высота экрана
 * @desc Высота экрана
 * @type number
 * @min 0
 * @default 624

 */

/*~struct~QuickStart:

 * @param Enabled
 * @desc Enable the Quick Start function ?
 * @type boolean
 * @default false

 * @param Scene Name
 * @desc Name of scene which will be launched instead the title screen. Standard: Scene_Map
 * @default Scene_Map

 * @param Skip Saves
 * @desc Does it need skip the title screen if save files exists?
 * @type boolean
 * @default false

 */

/*~struct~QuickStart:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию быстрого старта ?
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

/*~struct~QuickLoad:

 * @param Enabled
 * @desc Enable the Quick Load function ?
 * @type boolean
 * @default false

 * @param Key Code
 * @desc The key code that is responsible for the quick loading. 114 - F3
 * @type number
 * @default 114

 * @param Savefile ID
 * @desc Savefile number for quick loading. Specify 0 to show the load scene
 * @type number
 * @default 0

 */

/*~struct~QuickLoad:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию быстрой загрузки ?
 * @type boolean
 * @default false

 * @param Key Code
 * @text Код клавиши
 * @desc Код клавиши, которая отвечает за быструю загрузку. 114 - F3
 * @default 114

 * @param Savefile ID
 * @text Файл сохранения
 * @desc Номер файла сохранения для быстрой загрузки. Укажите 0, чтобы показывать экран загрузки
 * @type number
 * @default 0

 */

/*~struct~PreloadManager:

 * @param Enabled
 * @desc Enable the images preloading function ?
 * @type boolean
 * @default false

 * @param Debugging
 * @desc Display preload information in the console ?
 * @type boolean
 * @default false

 * @param Images
 * @desc Preloading images
 * @type struct<PreloadManagerImage>[]
 * @default []

 */

/*~struct~PreloadManager:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию предзагрузки изображений ?
 * @type boolean
 * @default false

 * @param Debugging
 * @text Отладка
 * @desc Выводить информацию о предзагрузке в консоль ?
 * @type boolean
 * @default false

 * @param Images
 * @text Изображения
 * @desc Предзагрузка изображений
 * @type struct<PreloadManagerImage>[]
 * @default []

 */

/*~struct~PreloadManagerImage:

 * @param Path
 * @desc Path to the file (with extension) or directory. For example, img/system/Window.png for file or img/system/ for directory

 * @param Hue
 * @desc Hue
 * @type number
 * @min 0
 * @max 360
 * @default 0

 * @param Caching
 * @desc Image caching
 * @type boolean
 * @default false

 */

/*~struct~PreloadManagerImage:ru

 * @param Path
 * @text Путь
 * @desc Путь к файлу (с расширением) или директории. Например, img/system/Window.png для файла или img/system/ для директории

 * @param Hue
 * @text Оттенок
 * @desc Оттенок
 * @type number
 * @min 0
 * @max 360
 * @default 0

 * @param Caching
 * @text Кэширование
 * @desc Кэширование изображений
 * @type boolean
 * @default false

 */

/*~struct~Screenshots:

 * @param Enabled
 * @desc Enable the Take Screenshot function ?
 * @type boolean
 * @default false

 * @param Key Code
 * @text Key Code
 * @desc The key code that is responsible for saving the screenshot. 44 - PrintScreen
 * @type number
 * @default 44

 * @param Screenshot Path
 * @text Path for saving screenshots
 * @desc Local path for saving screenshots
 * @default screenshots/

 * @param Screenshot Filename
 * @desc The entire list of templates is given in the help (1)
 * @default %year_%month_%day_%hours_%minutes_%seconds.png

 */

/*~struct~Screenshots:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию сохранения скриншота ?
 * @type boolean
 * @default false

 * @param Key Code
 * @text Код клавиши
 * @desc Код клавиши, которая отвечает за сохранение скриншота. 44 - PrintScreen
 * @type number
 * @default 44

 * @param Screenshot Path
 * @text Путь для сохранения скриншотов
 * @desc Локальный путь для сохранения скриншотов
 * @default screenshots/

 * @param Screenshot Filename
 * @text Название файла скриншота
 * @desc Весь список шаблонов приведен в справке (1)
 * @default %year_%month_%day_%hours_%minutes_%seconds.png

 */

/*~struct~ErrorsLog:

 * @param Enabled
 * @desc Enable error logging ?
 * @type select
 * @option None
 * @option Only Test
 * @option Only Game
 * @option Always
 * @default None

 * @param Filename
 * @desc Filename
 * @default errors_log.txt

 * @param File Size
 * @desc Maximum file size in megabytes. If this value is exceeded, the old logs will be deleted.
 * @default 10

 */

/*~struct~ErrorsLog:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию логирования ошибок ?
 * @type select
 * @option Никогда
 * @value None
 * @option Только тест
 * @value Only Test
 * @option Только игра
 * @value Only Game
 * @option Всегда
 * @value Always
 * @default None

 * @param Filename
 * @text Название файла
 * @desc Название файла
 * @default errors_log.txt

 * @param File Size
 * @text Размер файла
 * @desc Максимальный размер файла в мегабайтах. При превышении этого значения старые логи будут удалены.
 * @default 10

 */

'use strict';

//===========================================================================
// Lodash
//===========================================================================

/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
    return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
    return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
    --r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
}function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function k(n,t){return c(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Cn[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
}),r}function B(n,t){return function(r){return n(t(r))}}function L(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function U(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
}var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,kn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",En=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+kn+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Bn={};
    Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object Boolean]"]=Bn["[object DataView]"]=Bn["[object Date]"]=Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object WeakMap]"]=false;
    var Ln={};Ln["[object Arguments]"]=Ln["[object Array]"]=Ln["[object ArrayBuffer]"]=Ln["[object DataView]"]=Ln["[object Boolean]"]=Ln["[object Date]"]=Ln["[object Float32Array]"]=Ln["[object Float64Array]"]=Ln["[object Int8Array]"]=Ln["[object Int16Array]"]=Ln["[object Int32Array]"]=Ln["[object Map]"]=Ln["[object Number]"]=Ln["[object Object]"]=Ln["[object RegExp]"]=Ln["[object Set]"]=Ln["[object String]"]=Ln["[object Symbol]"]=Ln["[object Uint8Array]"]=Ln["[object Uint8ClampedArray]"]=Ln["[object Uint16Array]"]=Ln["[object Uint32Array]"]=true,
        Ln["[object Error]"]=Ln["[object Function]"]=Ln["[object WeakMap]"]=false;var Un,Cn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dn=parseFloat,Mn=parseInt,Tn=typeof global=="object"&&global&&global.Object===Object&&global,$n=typeof self=="object"&&self&&self.Object===Object&&self,Fn=Tn||$n||Function("return this")(),Nn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Pn=Nn&&typeof module=="object"&&module&&!module.nodeType&&module,Zn=Pn&&Pn.exports===Nn,qn=Zn&&Tn.process;
    n:{try{Un=qn&&qn.binding&&qn.binding("util");break n}catch(n){}Un=void 0}var Vn=Un&&Un.isArrayBuffer,Kn=Un&&Un.isDate,Gn=Un&&Un.isMap,Hn=Un&&Un.isRegExp,Jn=Un&&Un.isSet,Yn=Un&&Un.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I",
        "\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C",
        "\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i",
        "\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S",
        "\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe",
        "\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(du(n)&&!of(n)&&!(n instanceof Un)){if(n instanceof On)return n;if(ii.call(n,"__wrapped__"))return $e(n)}return new On(n)}function kn(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Un(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,
        this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Cn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function $n(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new $n;++t<r;)this.add(n[t])}function Pn(n){
        this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=of(n),u=!e&&uf(n),i=!e&&!u&&cf(n),o=!e&&!u&&!i&&pf(n),u=(e=e||u||i||o)?A(n.length,Xu):[],f=u.length;for(r in n)!t&&!ii.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return Ce(Ur(n),pt(t,0,n.length))}function ut(n){return Ce(Ur(n))}function it(n,t,r){(r===T||au(n[t],r))&&(r!==T||t in n)||st(n,t,r);
    }function ot(n,t,r){var e=n[t];ii.call(n,t)&&au(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(au(n[r][0],t))return r;return-1}function ct(n,t,r,e){return eo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,zu(t),n)}function lt(n,t){return n&&Cr(t,Wu(t),n)}function st(n,t,r){"__proto__"==t&&mi?mi(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Vu(e),i=null==n;++r<e;)u[r]=i?T:Iu(n,t[r]);return u;
    }function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!gu(n))return n;if(u=of(n)){if(f=me(n),!c)return Ur(n,f)}else{var s=_o(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(cf(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Ln[s])return i?n:{};f=ke(n,s,c)}}if(o||(o=new Pn),
            i=o.get(n))return i;if(o.set(n,f),hf(n))return n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}),f;if(lf(n))return n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))}),f;var a=l?a?ve:_e:a?Wu:zu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=zu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Yu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ni("Expected a function");
        return yo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,E(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return eo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!ju(o):r(o,f)))var f=o,c=i;
    }return c}function jt(n,t){var r=[];return eo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ee),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&io(n,t,zu)}function At(n,t){return n&&oo(n,t,zu)}function kt(n,t){return i(t,function(t){return pu(n[t])})}function Et(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[De(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
        of(n)?t:a(t,r(n))}function Ot(n){if(null==n)n=n===T?"[object Undefined]":"[object Null]";else if(wi&&wi in Yu(n)){var t=ii.call(n,wi),r=n[wi];try{n[wi]=T;var e=true}catch(n){}var u=ci.call(n);e&&(t?n[wi]=r:delete n[wi]),n=u}else n=ci.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&ii.call(n,t)}function zt(n,t){return null!=n&&t in Yu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Vu(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,E(t))),s=Ui(p.length,s),
        l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Bt(n,t,r){var e={};return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Lt(t,r,e){return r=Sr(r,t),t=2>r.length?t:Et(t,hr(r,0,-1)),r=null==t?t:t[De(qe(r))],null==r?T:n(r,t,e)}function Ut(n){return du(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
        return du(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return du(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!du(n)&&!du(t))t=n!==n&&t!==t;else n:{var i=of(n),o=of(t),f=i?"[object Array]":_o(n),c=o?"[object Array]":_o(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&cf(n)){if(!cf(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Pn),t=i||pf(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
        if(!(1&r)&&(i=a&&ii.call(n,"__wrapped__"),f=o&&ii.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Pn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Pn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:ii.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
        }c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return du(n)&&"[object Map]"==_o(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Yu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
    }else{if(f=new Pn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!gu(n)||fi&&fi in n)&&(pu(n)?si:dn).test(Me(n))}function Nt(n){return du(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return du(n)&&"[object Set]"==_o(n)}function Zt(n){return du(n)&&vu(n.length)&&!!Bn[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?Tu:typeof n=="object"?of(n)?Jt(n[0],n[1]):Ht(n):Pu(n)}function Vt(n){if(!ze(n))return Bi(n);var t,r=[];for(t in Yu(n))ii.call(n,t)&&"constructor"!=t&&r.push(t);
        return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=lu(n)?Vu(n.length):[];return eo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!gu(t)?We(De(n),t):function(r){var e=Iu(r,n);return e===T&&e===t?Ru(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&io(t,function(i,o){if(gu(i)){u||(u=new Pn);var f=u,c="__proto__"==o?T:n[o],a="__proto__"==o?T:t[o],l=f.get(a);
        if(l)it(n,o,l);else{var l=e?e(c,a,o+"",n,t,f):T,s=l===T;if(s){var h=of(a),p=!h&&cf(a),_=!h&&!p&&pf(a),l=a;h||p||_?of(c)?l=c:su(c)?l=Ur(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:bu(a)||uf(a)?(l=c,uf(c)?l=Su(c):(!gu(c)||r&&pu(c))&&(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a)),it(n,o,l)}}else f=e?e("__proto__"==o?T:n[o],i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Wu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[Tu],E(ye())),
        n=Gt(n,function(n){return{a:c(t,function(t){return t(n)}),b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return Ru(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Et(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return Et(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;
        for(n===t&&(t=Ur(t)),r&&(f=c(n,E(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&bi.call(f,a,1),bi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?bi.call(n,u,1):xr(n,u)}}}function ir(n,t){return n+Oi(Mi()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Oi(t/2))&&(n+=n);while(t);return r}function fr(n,t){return bo(Be(n,t,Tu),n+"")}function cr(n){return Qn(Lu(n))}function ar(n,t){
        var r=Lu(n);return Ce(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!gu(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=De(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=gu(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return Ce(Lu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Vu(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return eo(n,function(n,e,u){return r=t(n,e,u),
        !r}),!!r}function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!ju(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return vr(n,t,Tu,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=ju(t),a=t===T;u<i;){var l=Oi((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=ju(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ui(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
        var o=n[r],f=t?t(o):o;if(!r||!au(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:ju(n)?F:+n}function yr(n){if(typeof n=="string")return n;if(of(n))return c(n,yr)+"";if(ju(n))return to?to.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:lo(n))return U(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;
        t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),n=2>t.length?n:Et(n,hr(t,0,-1)),null==n||delete n[De(qe(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Un&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Vu(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));
        return br(wt(i,1),t,r)}function Ar(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function kr(n){return su(n)?n:[]}function Er(n){return typeof n=="function"?n:Tu}function Sr(n,t){return of(n)?n:Ie(n,t)?[n]:xo(Ou(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=vi?vi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new _i(t).set(new _i(n)),
        t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length)}function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=ju(n),o=t!==T,f=null===t,c=t===t,a=ju(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Br(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Li(i-o,0),l=Vu(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];
        return l}function Lr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Li(i-f,0),s=Vu(l+a);for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Ur(n,t){var r=-1,e=n.length;for(t||(t=Vu(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,ho(n),t)}function Mr(n,t){return Cr(n,po(n),t);
    }function Tr(n,r){return function(e,u){var i=of(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o)}}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Yu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!lu(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Yu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){
        var u=-1,i=Yu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break}return t}}function Pr(n,t,r){function e(){return(this&&this!==Fn&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Ou(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Du(Cu(t).replace(En,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){
        case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ro(n.prototype),t=n.apply(r,t);return gu(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Vu(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:L(f,a),
        o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==Fn&&this instanceof u?i:t,this,f)}var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Yu(t);if(!lu(t)){var i=ye(r,3);t=zu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ni("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?so(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
        return function(){var n=arguments,e=n[0];if(o&&1==n.length&&of(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Vu(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Br(y,e,u,_)),i&&(y=Lr(y,i,o,_)),d-=x,_&&d<a)return j=L(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ui(f.length,x),m=Ur(y);w--;){
        var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Fn&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Bt(r,n,t(e))}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
        return r=c(r,E(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Si(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Vu(l+c),h=this&&this!==Fn&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
        e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=mu(t),r===T?(r=t,t=0):r=mu(r),e=e===T?t<r?1:-1:mu(e);var u=-1;r=Li(Si((r-t)/(e||1)),0);for(var i=Vu(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Eu(t),r=Eu(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&go(r,u),r.placeholder=e,Le(r,n,t)}function ie(n){
        var t=Ju[n];return function(n,r){if(n=Eu(n),r=null==r?0:Ui(Au(r),292)){var e=(Ou(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Ou(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=_o(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):k(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ni("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Li(Au(o),0),f=f===T?f:Au(f),a-=u?u.length:0,64&t){
        var l=e,s=u;e=u=T}var h=c?T:so(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Br(e,r,h[4]):r,i[4]=e?L(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Lr(e,r,h[6]):r,i[6]=e?L(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ui(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
        r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Li(i[9]-a,0),!f&&24&t&&(t&=-25),Le((h?fo:go)(t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),i),n,t)}function ce(n,t,r,e){return n===T||au(n,ri[r])&&!ii.call(e,r)?t:n}function ae(n,t,r,e,u,i){return gu(n)&&gu(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return bu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;var c=-1,a=true,l=2&r?new Nn:T;
        for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!i(new _i(n),new _i(t)))break;
        return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return au(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=U),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(no)return no.call(n)==no.call(t)}return false}function pe(n){return bo(Be(n,T,Pe),n+"")}function _e(n){
        return St(n,zu,ho)}function ve(n){return St(n,Wu,po)}function ge(n){for(var t=n.name+"",r=Ki[t],e=ii.call(Ki,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(ii.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||$u,n=n===$u?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
    }function xe(n){for(var t=zu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!gu(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=De(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&vu(u)&&Se(o,u)&&(of(n)||uf(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&ii.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
        return typeof n.constructor!="function"||ze(n)?{}:ro(gi(n))}function ke(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
        case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return no?Yu(no.call(n)):{}}}function Ee(n){return of(n)||uf(n)||!!(xi&&n&&n[xi])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
    }function Oe(n,t,r){if(!gu(r))return false;var e=typeof t;return!!("number"==e?lu(r)&&Se(t,r.length):"string"==e&&t in r)&&au(r[t],n)}function Ie(n,t){if(of(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!ju(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Yu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Un.prototype&&(n===r||(t=so(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ri)}function We(n,t){
        return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Yu(r)))}}function Be(t,r,e){return r=Li(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Li(u.length-r,0),f=Vu(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Vu(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Le(n,t,r){var e=t+"";t=bo;var u,i=Te;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),t(n,e)}function Ue(n){
        var t=0,r=0;return function(){var e=Ci(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function Ce(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function De(n){if(typeof n=="string"||ju(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Me(n){if(null!=n){try{return ui.call(n)}catch(n){}return n+""}return""}function Te(n,t){return r(N,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e);
    }),n.sort()}function $e(n){if(n instanceof Un)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Ur(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Fe(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Au(r),0>r&&(r=Li(e+r,0)),_(n,ye(t,3),r)):-1}function Ne(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=Au(r),u=0>r?Li(e+u,0):Ui(u,e-1)),_(n,ye(t,3),u,true)}function Pe(n){return(null==n?0:n.length)?wt(n,1):[]}function Ze(n){
        return n&&n.length?n[0]:T}function qe(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ve(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ke(n){return null==n?n:Ti.call(n)}function Ge(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(su(n))return t=Li(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function He(t,r){if(!t||!t.length)return[];var e=Ge(t);return null==r?e:c(e,function(t){return n(r,T,t)})}function Je(n){return n=An(n),n.__chain__=true,n}function Ye(n,t){
        return t(n)}function Qe(){return this}function Xe(n,t){return(of(n)?r:eo)(n,ye(t,3))}function nu(n,t){return(of(n)?e:uo)(n,ye(t,3))}function tu(n,t){return(of(n)?c:Gt)(n,ye(t,3))}function ru(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function eu(n,t){var r;if(typeof t!="function")throw new ni("Expected a function");return n=Au(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),r}}function uu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=uu.placeholder,
        n}function iu(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=iu.placeholder,n}function ou(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Ko();if(u(n))return o(n);var r,e=yo;r=n-_,n=t-(n-p),r=g?Ui(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Ko(),r=u(n);if(c=arguments,a=this,p=n,r){if(h===T)return _=n=p,h=yo(i,t),v?e(n):s;if(g)return h=yo(i,t),e(p)}return h===T&&(h=yo(i,t)),
        s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ni("Expected a function");return t=Eu(t)||0,gu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Li(Eu(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&ao(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Ko())},f}function fu(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ni("Expected a function");
        return r.cache=new(fu.Cache||$n),r}function cu(n){if(typeof n!="function")throw new ni("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function au(n,t){return n===t||n!==n&&t!==t}function lu(n){return null!=n&&vu(n.length)&&!pu(n)}function su(n){return du(n)&&lu(n)}function hu(n){if(!du(n))return false;var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!bu(n);
    }function pu(n){return!!gu(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function _u(n){return typeof n=="number"&&n==Au(n)}function vu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function gu(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function du(n){return null!=n&&typeof n=="object"}function yu(n){return typeof n=="number"||du(n)&&"[object Number]"==Ot(n)}function bu(n){return!(!du(n)||"[object Object]"!=Ot(n))&&(n=gi(n),
    null===n||(n=ii.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ui.call(n)==ai))}function xu(n){return typeof n=="string"||!of(n)&&du(n)&&"[object String]"==Ot(n)}function ju(n){return typeof n=="symbol"||du(n)&&"[object Symbol]"==Ot(n)}function wu(n){if(!n)return[];if(lu(n))return xu(n)?M(n):Ur(n);if(ji&&n[ji]){n=n[ji]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=_o(n),("[object Map]"==t?W:"[object Set]"==t?U:Lu)(n)}function mu(n){return n?(n=Eu(n),
        n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Au(n){n=mu(n);var t=n%1;return n===n?t?n-t:n:0}function ku(n){return n?pt(Au(n),0,4294967295):0}function Eu(n){if(typeof n=="number")return n;if(ju(n))return F;if(gu(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=gu(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Mn(n.slice(2),t?2:8):vn.test(n)?F:+n}function Su(n){return Cr(n,Wu(n))}function Ou(n){return null==n?"":yr(n);
    }function Iu(n,t,r){return n=null==n?T:Et(n,t),n===T?r:n}function Ru(n,t){return null!=n&&we(n,t,zt)}function zu(n){return lu(n)?qn(n):Vt(n)}function Wu(n){if(lu(n))n=qn(n,true);else if(gu(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&ii.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in Yu(n))t.push(r);n=t}return n}function Bu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){return t(n,r[0])})}function Lu(n){return null==n?[]:S(n,zu(n));
    }function Uu(n){return Tf(Ou(n).toLowerCase())}function Cu(n){return(n=Ou(n))&&n.replace(xn,Xn).replace(Sn,"")}function Du(n,t,r){return n=Ou(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Mu(n){return function(){return n}}function Tu(n){return n}function $u(n){return qt(typeof n=="function"?n:_t(n,1))}function Fu(n,t,e){var u=zu(t),i=kt(t,u);null!=e||gu(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=kt(t,zu(t)));var o=!(gu(e)&&"chain"in e&&!e.chain),f=pu(n);return r(i,function(r){
        var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Ur(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Nu(){}function Pu(n){return Ie(n)?b(De(n)):rr(n)}function Zu(){return[]}function qu(){return false}mn=null==mn?Fn:rt.defaults(Fn.Object(),mn,rt.pick(Fn,Wn));var Vu=mn.Array,Ku=mn.Date,Gu=mn.Error,Hu=mn.Function,Ju=mn.Math,Yu=mn.Object,Qu=mn.RegExp,Xu=mn.String,ni=mn.TypeError,ti=Vu.prototype,ri=Yu.prototype,ei=mn["__core-js_shared__"],ui=Hu.prototype.toString,ii=ri.hasOwnProperty,oi=0,fi=function(){
        var n=/[^.]+$/.exec(ei&&ei.keys&&ei.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ci=ri.toString,ai=ui.call(Yu),li=Fn._,si=Qu("^"+ui.call(ii).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hi=Zn?mn.Buffer:T,pi=mn.Symbol,_i=mn.Uint8Array,vi=hi?hi.f:T,gi=B(Yu.getPrototypeOf,Yu),di=Yu.create,yi=ri.propertyIsEnumerable,bi=ti.splice,xi=pi?pi.isConcatSpreadable:T,ji=pi?pi.iterator:T,wi=pi?pi.toStringTag:T,mi=function(){try{var n=je(Yu,"defineProperty");
        return n({},"",{}),n}catch(n){}}(),Ai=mn.clearTimeout!==Fn.clearTimeout&&mn.clearTimeout,ki=Ku&&Ku.now!==Fn.Date.now&&Ku.now,Ei=mn.setTimeout!==Fn.setTimeout&&mn.setTimeout,Si=Ju.ceil,Oi=Ju.floor,Ii=Yu.getOwnPropertySymbols,Ri=hi?hi.isBuffer:T,zi=mn.isFinite,Wi=ti.join,Bi=B(Yu.keys,Yu),Li=Ju.max,Ui=Ju.min,Ci=Ku.now,Di=mn.parseInt,Mi=Ju.random,Ti=ti.reverse,$i=je(mn,"DataView"),Fi=je(mn,"Map"),Ni=je(mn,"Promise"),Pi=je(mn,"Set"),Zi=je(mn,"WeakMap"),qi=je(Yu,"create"),Vi=Zi&&new Zi,Ki={},Gi=Me($i),Hi=Me(Fi),Ji=Me(Ni),Yi=Me(Pi),Qi=Me(Zi),Xi=pi?pi.prototype:T,no=Xi?Xi.valueOf:T,to=Xi?Xi.toString:T,ro=function(){
        function n(){}return function(t){return gu(t)?di?di(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=kn.prototype,An.prototype.constructor=An,On.prototype=ro(kn.prototype),On.prototype.constructor=On,Un.prototype=ro(kn.prototype),Un.prototype.constructor=Un,Cn.prototype.clear=function(){this.__data__=qi?qi(null):{},this.size=0},Cn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
        this.size-=n?1:0,n},Cn.prototype.get=function(n){var t=this.__data__;return qi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):ii.call(t,n)?t[n]:T},Cn.prototype.has=function(n){var t=this.__data__;return qi?t[n]!==T:ii.call(t,n)},Cn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=qi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():bi.call(t,n,1),
        --this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},$n.prototype.clear=function(){this.size=0,this.__data__={hash:new Cn,map:new(Fi||Tn),string:new Cn}},$n.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},$n.prototype.get=function(n){return be(this,n).get(n);
    },$n.prototype.has=function(n){return be(this,n).has(n)},$n.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Pn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Pn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Pn.prototype.get=function(n){
        return this.__data__.get(n)},Pn.prototype.has=function(n){return this.__data__.has(n)},Pn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Fi||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new $n(e)}return r.set(n,t),this.size=r.size,this};var eo=Fr(mt),uo=Fr(At,true),io=Nr(),oo=Nr(true),fo=Vi?function(n,t){return Vi.set(n,t),n}:Tu,co=mi?function(n,t){return mi(n,"toString",{configurable:true,enumerable:false,value:Mu(t),writable:true})}:Tu,ao=Ai||function(n){
        return Fn.clearTimeout(n)},lo=Pi&&1/U(new Pi([,-0]))[1]==$?function(n){return new Pi(n)}:Nu,so=Vi?function(n){return Vi.get(n)}:Nu,ho=Ii?function(n){return null==n?[]:(n=Yu(n),i(Ii(n),function(t){return yi.call(n,t)}))}:Zu,po=Ii?function(n){for(var t=[];n;)a(t,ho(n)),n=gi(n);return t}:Zu,_o=Ot;($i&&"[object DataView]"!=_o(new $i(new ArrayBuffer(1)))||Fi&&"[object Map]"!=_o(new Fi)||Ni&&"[object Promise]"!=_o(Ni.resolve())||Pi&&"[object Set]"!=_o(new Pi)||Zi&&"[object WeakMap]"!=_o(new Zi))&&(_o=function(n){
        var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Me(n):"")switch(n){case Gi:return"[object DataView]";case Hi:return"[object Map]";case Ji:return"[object Promise]";case Yi:return"[object Set]";case Qi:return"[object WeakMap]"}return t});var vo=ei?pu:qu,go=Ue(fo),yo=Ei||function(n,t){return Fn.setTimeout(n,t)},bo=Ue(co),xo=function(n){n=fu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
        t.push(e?u.replace(hn,"$1"):r||n)}),t}),jo=fr(function(n,t){return su(n)?yt(n,wt(t,1,su,true)):[]}),wo=fr(function(n,t){var r=qe(t);return su(r)&&(r=T),su(n)?yt(n,wt(t,1,su,true),ye(r,2)):[]}),mo=fr(function(n,t){var r=qe(t);return su(r)&&(r=T),su(n)?yt(n,wt(t,1,su,true),T,r):[]}),Ao=fr(function(n){var t=c(n,kr);return t.length&&t[0]===n[0]?Wt(t):[]}),ko=fr(function(n){var t=qe(n),r=c(n,kr);return t===qe(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),Eo=fr(function(n){var t=qe(n),r=c(n,kr);return(t=typeof t=="function"?t:T)&&r.pop(),
        r.length&&r[0]===n[0]?Wt(r,T,t):[]}),So=fr(Ve),Oo=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Io=fr(function(n){return br(wt(n,1,su,true))}),Ro=fr(function(n){var t=qe(n);return su(t)&&(t=T),br(wt(n,1,su,true),ye(t,2))}),zo=fr(function(n){var t=qe(n),t=typeof t=="function"?t:T;return br(wt(n,1,su,true),T,t)}),Wo=fr(function(n,t){return su(n)?yt(n,t):[]}),Bo=fr(function(n){return mr(i(n,su))}),Lo=fr(function(n){var t=qe(n);return su(t)&&(t=T),
        mr(i(n,su),ye(t,2))}),Uo=fr(function(n){var t=qe(n),t=typeof t=="function"?t:T;return mr(i(n,su),T,t)}),Co=fr(Ge),Do=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return He(n,t)}),Mo=pe(function(n){function t(t){return ht(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Un&&Se(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:Ye,args:[t],thisArg:T}),new On(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(T),
        n})):this.thru(t)}),To=Tr(function(n,t,r){ii.call(n,r)?++n[r]:st(n,r,1)}),$o=Gr(Fe),Fo=Gr(Ne),No=Tr(function(n,t,r){ii.call(n,r)?n[r].push(t):st(n,r,[t])}),Po=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=lu(t)?Vu(t.length):[];return eo(t,function(t){o[++u]=i?n(r,t,e):Lt(t,r,e)}),o}),Zo=Tr(function(n,t,r){st(n,r,t)}),qo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Vo=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
        Xt(n,wt(t,1),[])}),Ko=ki||function(){return Fn.Date.now()},Go=fr(function(n,t,r){var e=1;if(r.length)var u=L(r,de(Go)),e=32|e;return fe(n,e,t,r,u)}),Ho=fr(function(n,t,r){var e=3;if(r.length)var u=L(r,de(Ho)),e=32|e;return fe(t,e,n,r,u)}),Jo=fr(function(n,t){return dt(n,1,t)}),Yo=fr(function(n,t,r){return dt(n,Eu(t)||0,r)});fu.Cache=$n;var Qo=fr(function(t,r){r=1==r.length&&of(r[0])?c(r[0],E(ye())):c(wt(r,1),E(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ui(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
        return n(t,this,u)})}),Xo=fr(function(n,t){return fe(n,32,T,t,L(t,de(Xo)))}),nf=fr(function(n,t){return fe(n,64,T,t,L(t,de(nf)))}),tf=pe(function(n,t){return fe(n,256,T,T,T,t)}),rf=ee(It),ef=ee(function(n,t){return n>=t}),uf=Ut(function(){return arguments}())?Ut:function(n){return du(n)&&ii.call(n,"callee")&&!yi.call(n,"callee")},of=Vu.isArray,ff=Vn?E(Vn):Ct,cf=Ri||qu,af=Kn?E(Kn):Dt,lf=Gn?E(Gn):Tt,sf=Hn?E(Hn):Nt,hf=Jn?E(Jn):Pt,pf=Yn?E(Yn):Zt,_f=ee(Kt),vf=ee(function(n,t){return n<=t}),gf=$r(function(n,t){
        if(ze(t)||lu(t))Cr(t,zu(t),n);else for(var r in t)ii.call(t,r)&&ot(n,r,t[r])}),df=$r(function(n,t){Cr(t,Wu(t),n)}),yf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),bf=$r(function(n,t,r,e){Cr(t,zu(t),n,e)}),xf=pe(ht),jf=fr(function(n,t){n=Yu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Wu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||au(a,ri[c])&&!ii.call(n,c))&&(n[c]=u[c])}return n}),wf=fr(function(t){return t.push(T,ae),n(Sf,T,t)}),mf=Yr(function(n,t,r){
        null!=t&&typeof t.toString!="function"&&(t=ci.call(t)),n[t]=r},Mu(Tu)),Af=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ci.call(t)),ii.call(n,t)?n[t].push(r):n[t]=[r]},ye),kf=fr(Lt),Ef=$r(function(n,t,r){Yt(n,t,r)}),Sf=$r(function(n,t,r,e){Yt(n,t,r,e)}),Of=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),If=pe(function(n,t){return null==n?{}:nr(n,t);
    }),Rf=oe(zu),zf=oe(Wu),Wf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Uu(t):t)}),Bf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Lf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Uf=Zr("toLowerCase"),Cf=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Df=qr(function(n,t,r){return n+(r?" ":"")+Tf(t)}),Mf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Tf=Zr("toUpperCase"),$f=fr(function(t,r){try{return n(t,T,r)}catch(n){return hu(n)?n:new Gu(n)}}),Ff=pe(function(n,t){
        return r(t,function(t){t=De(t),st(n,t,Go(n[t],n))}),n}),Nf=Hr(),Pf=Hr(true),Zf=fr(function(n,t){return function(r){return Lt(r,n,t)}}),qf=fr(function(n,t){return function(r){return Lt(n,r,t)}}),Vf=Xr(c),Kf=Xr(u),Gf=Xr(h),Hf=re(),Jf=re(true),Yf=Qr(function(n,t){return n+t},0),Qf=ie("ceil"),Xf=Qr(function(n,t){return n/t},1),nc=ie("floor"),tc=Qr(function(n,t){return n*t},1),rc=ie("round"),ec=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ni("Expected a function");
        return n=Au(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=ru,An.assign=gf,An.assignIn=df,An.assignInWith=yf,An.assignWith=bf,An.at=xf,An.before=eu,An.bind=Go,An.bindAll=Ff,An.bindKey=Ho,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return of(n)?n:[n]},An.chain=Je,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Li(Au(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Vu(Si(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
        var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Vu(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(of(r)?Ur(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ni("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Mu,
        An.countBy=To,An.create=function(n,t){var r=ro(n);return null==t?r:at(r,t)},An.curry=uu,An.curryRight=iu,An.debounce=ou,An.defaults=jf,An.defaultsDeep=wf,An.defer=Jo,An.delay=Yo,An.difference=jo,An.differenceBy=wo,An.differenceWith=mo,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Au(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Au(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
    },An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=Au(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:Au(e),0>e&&(e+=u),e=r>e?0:ku(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(of(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(tu(n,t),1)},An.flatMapDeep=function(n,t){return wt(tu(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:Au(r),
        wt(tu(n,t),r)},An.flatten=Pe,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:Au(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Nf,An.flowRight=Pf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:kt(n,zu(n))},An.functionsIn=function(n){return null==n?[]:kt(n,Wu(n))},An.groupBy=No,An.initial=function(n){
        return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=Ao,An.intersectionBy=ko,An.intersectionWith=Eo,An.invert=mf,An.invertBy=Af,An.invokeMap=Po,An.iteratee=$u,An.keyBy=Zo,An.keys=zu,An.keysIn=Wu,An.map=tu,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=fu,
        An.merge=Ef,An.mergeWith=Sf,An.method=Zf,An.methodOf=qf,An.mixin=Fu,An.negate=cu,An.nthArg=function(n){return n=Au(n),fr(function(t){return Qt(t,n)})},An.omit=Of,An.omitBy=function(n,t){return Bu(n,cu(ye(t)))},An.once=function(n){return eu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(of(t)||(t=null==t?[]:[t]),r=e?T:r,of(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Vf,An.overArgs=Qo,An.overEvery=Kf,An.overSome=Gf,An.partial=Xo,An.partialRight=nf,An.partition=qo,An.pick=If,An.pickBy=Bu,An.property=Pu,
        An.propertyOf=function(n){return function(t){return null==n?T:Et(n,t)}},An.pull=So,An.pullAll=Ve,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Oo,An.range=Hf,An.rangeRight=Jf,An.rearg=tf,An.reject=function(n,t){return(of(n)?i:jt)(n,cu(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
        u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ni("Expected a function");return t=t===T?t:Au(t),fr(n,t)},An.reverse=Ke,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:Au(t),(of(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(of(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
        r=e):(t=null==t?0:Au(t),r=r===T?e:Au(r)),hr(n,t,r)):[]},An.sortBy=Vo,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Ou(n))&&(typeof t=="string"||null!=t&&!sf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ni("Expected a function");return r=null==r?0:Li(Au(r),0),
        fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:Au(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Au(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
        n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ni("Expected a function");return gu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ou(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Ye,An.toArray=wu,An.toPairs=Rf,An.toPairsIn=zf,An.toPath=function(n){return of(n)?c(n,De):ju(n)?[n]:Ur(xo(Ou(n)))},An.toPlainObject=Su,An.transform=function(n,t,e){var u=of(n),i=u||cf(n)||pf(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:gu(n)&&pu(o)?ro(gi(n)):{};
    }return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return ru(n,1)},An.union=Io,An.unionBy=Ro,An.unionWith=zo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=Ge,An.unzipWith=He,An.update=function(n,t,r){return null==n?n:lr(n,t,Er(r)(Et(n,t)),void 0)},An.updateWith=function(n,t,r,e){
        return e=typeof e=="function"?e:T,null!=n&&(n=lr(n,t,Er(r)(Et(n,t)),e)),n},An.values=Lu,An.valuesIn=function(n){return null==n?[]:S(n,Wu(n))},An.without=Wo,An.words=Du,An.wrap=function(n,t){return Xo(Er(t),n)},An.xor=Bo,An.xorBy=Lo,An.xorWith=Uo,An.zip=Co,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Do,An.entries=Rf,An.entriesIn=zf,An.extend=df,An.extendWith=yf,Fu(An,An),An.add=Yf,An.attempt=$f,An.camelCase=Wf,An.capitalize=Uu,
        An.ceil=Qf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Eu(r),r=r===r?r:0),t!==T&&(t=Eu(t),t=t===t?t:0),pt(Eu(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,zu(t))},An.deburr=Cu,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=Xf,An.endsWith=function(n,t,r){
            n=Ou(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(Au(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=au,An.escape=function(n){return(n=Ou(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Ou(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=of(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=$o,An.findIndex=Fe,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=Fo,An.findLastIndex=Ne,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
        },An.floor=nc,An.forEach=Xe,An.forEachRight=nu,An.forIn=function(n,t){return null==n?n:io(n,ye(t,3),Wu)},An.forInRight=function(n,t){return null==n?n:oo(n,ye(t,3),Wu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Iu,An.gt=rf,An.gte=ef,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=Ru,An.head=Ze,An.identity=Tu,An.includes=function(n,t,r,e){return n=lu(n)?n:Lu(n),r=r&&!e?Au(r):0,e=n.length,0>r&&(r=Li(e+r,0)),xu(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
        },An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Au(r),0>r&&(r=Li(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=mu(t),r===T?(r=t,t=0):r=mu(r),n=Eu(n),n>=Ui(t,r)&&n<Li(t,r)},An.invoke=kf,An.isArguments=uf,An.isArray=of,An.isArrayBuffer=ff,An.isArrayLike=lu,An.isArrayLikeObject=su,An.isBoolean=function(n){return true===n||false===n||du(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=cf,An.isDate=af,An.isElement=function(n){return du(n)&&1===n.nodeType&&!bu(n)},An.isEmpty=function(n){
            if(null==n)return true;if(lu(n)&&(of(n)||typeof n=="string"||typeof n.splice=="function"||cf(n)||pf(n)||uf(n)))return!n.length;var t=_o(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(ii.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=hu,An.isFinite=function(n){return typeof n=="number"&&zi(n)},An.isFunction=pu,
        An.isInteger=_u,An.isLength=vu,An.isMap=lf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return yu(n)&&n!=+n},An.isNative=function(n){if(vo(n))throw new Gu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=yu,An.isObject=gu,An.isObjectLike=du,An.isPlainObject=bu,An.isRegExp=sf,
        An.isSafeInteger=function(n){return _u(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=hf,An.isString=xu,An.isSymbol=ju,An.isTypedArray=pf,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return du(n)&&"[object WeakMap]"==_o(n)},An.isWeakSet=function(n){return du(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Wi.call(n,t)},An.kebabCase=Bf,An.last=qe,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=Au(r),u=0>u?Li(e+u,0):Ui(u,e-1)),
            t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=_(n,d,u,true);return n},An.lowerCase=Lf,An.lowerFirst=Uf,An.lt=_f,An.lte=vf,An.max=function(n){return n&&n.length?xt(n,Tu,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,Tu)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,Tu,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=Zu,An.stubFalse=qu,An.stubObject=function(){return{}},An.stubString=function(){
            return""},An.stubTrue=function(){return true},An.multiply=tc,An.nth=function(n,t){return n&&n.length?Qt(n,Au(t)):T},An.noConflict=function(){return Fn._===this&&(Fn._=li),this},An.noop=Nu,An.now=Ko,An.pad=function(n,t,r){n=Ou(n);var e=(t=Au(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Oi(t),r)+n+ne(Si(t),r))},An.padEnd=function(n,t,r){n=Ou(n);var e=(t=Au(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Ou(n);var e=(t=Au(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n},An.parseInt=function(n,t,r){
            return r||null==t?t=0:t&&(t=+t),Di(Ou(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=mu(n),t===T?(t=n,n=0):t=mu(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Mi(),Ui(n+r*(t-n+Dn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=of(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,eo)},An.reduceRight=function(n,t,r){var e=of(n)?s:j,u=3>arguments.length;
            return e(n,ye(t,4),r,u,uo)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:Au(t),or(Ou(n),t)},An.replace=function(){var n=arguments,t=Ou(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[De(t[e])];i===T&&(e=u,i=r),n=pu(i)?i.call(n):i}return n},An.round=rc,An.runInContext=x,An.sample=function(n){return(of(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;if(lu(n))return xu(n)?D(n):n.length;
            var t=_o(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Cf,An.some=function(n,t,r){var e=of(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&au(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){return vr(n,t,ye(r,2),true);
        },An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(au(n[r],t))return r}return-1},An.startCase=Df,An.startsWith=function(n,t,r){return n=Ou(n),r=null==r?0:pt(Au(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=ec,An.sum=function(n){return n&&n.length?m(n,Tu):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Ou(n),t=yf({},t,e,ce),r=yf({},t.imports,e.imports,ce);var u,i,o=zu(r),f=S(r,o),c=0;
            r=t.interpolate||jn;var a="__p+='";r=Qu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),
                    a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=$f(function(){return Hu(o,l+"return "+a).apply(T,f)}),t.source=a,hu(t))throw t;return t},An.times=function(n,t){if(n=Au(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ui(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=mu,An.toInteger=Au,An.toLength=ku,An.toLower=function(n){
            return Ou(n).toLowerCase()},An.toNumber=Eu,An.toSafeInteger=function(n){return n?pt(Au(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Ou,An.toUpper=function(n){return Ou(n).toUpperCase()},An.trim=function(n,t,r){return(n=Ou(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Ou(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){
            return(n=Ou(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(gu(t))var u="separator"in t?t.separator:u,r="length"in t?Au(t.length):r,e="omission"in t?yr(t.omission):e;n=Ou(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),sf(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=Qu(u.source,Ou(_n.exec(u))+"g")),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Ou(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++oi;return Ou(n)+t},An.upperCase=Mf,An.upperFirst=Tf,An.each=Xe,An.eachRight=nu,An.first=Ze,Fu(An,function(){var n={};return mt(An,function(t,r){ii.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false}),An.VERSION="4.17.5",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){
            An[n].placeholder=An}),r(["drop","take"],function(n,t){Un.prototype[n]=function(r){r=r===T?1:Li(Au(r),0);var e=this.__filtered__&&!t?new Un(this):this.clone();return e.__filtered__?e.__takeCount__=Ui(r,e.__takeCount__):e.__views__.push({size:Ui(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Un.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Un.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({
            iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Un.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Un.prototype[n]=function(){return this.__filtered__?new Un(this):this[r](1)}}),Un.prototype.compact=function(){return this.filter(Tu)},Un.prototype.find=function(n){return this.filter(n).head()},Un.prototype.findLast=function(n){return this.reverse().find(n);
        },Un.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Un(this):this.map(function(r){return Lt(r,n,t)})}),Un.prototype.reject=function(n){return this.filter(cu(ye(n)))},Un.prototype.slice=function(n,t){n=Au(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Un(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=Au(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Un.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Un.prototype.toArray=function(){return this.take(4294967295);
        },mt(Un.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){function t(n){return n=u.apply(An,a([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Un,l=f[0],s=c||of(o);s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false);var h=this.__chain__,p=!!this.__actions__.length,l=i&&!h,c=c&&!p;return!i&&s?(o=c?o:new Un(this),o=n.apply(o,f),o.__actions__.push({
            func:Ye,args:[t],thisArg:T}),new On(o,h)):l&&c?n.apply(this,f):(o=this.thru(t),l?e?o.value()[0]:o.value():o)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ti[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(of(u)?u:[],n)}return this[r](function(r){return t.apply(of(r)?r:[],n)})}}),mt(Un.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";
            (Ki[e]||(Ki[e]=[])).push({name:t,func:r})}}),Ki[Jr(T,2).name]=[{name:"wrapper",func:T}],Un.prototype.clone=function(){var n=new Un(this.__wrapped__);return n.__actions__=Ur(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Ur(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Ur(this.__views__),n},Un.prototype.reverse=function(){if(this.__filtered__){var n=new Un(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n;
        },Un.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=of(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Ui(n,f+s);break;case"takeRight":f=Li(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ui(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=Mo,An.prototype.chain=function(){return Je(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=wu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){for(var t,r=this;r instanceof kn;){
            var e=$e(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Un?(this.__actions__.length&&(n=new Un(this)),n=n.reverse(),n.__actions__.push({func:Ye,args:[Ke],thisArg:T}),new On(n,this.__chain__)):this.thru(Ke)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,ji&&(An.prototype[ji]=Qe),
        An}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Fn._=rt, define(function(){return rt})):Pn?((Pn.exports=rt)._=rt,Nn._=rt):Fn._=rt}).call(this);





//===========================================================================
// Imported
//===========================================================================

/**
 * @global
 * @type {Object}
 */
var Imported = Imported || {};
Imported.DKTools = '3.0.0';





//===========================================================================
// DKTools
//===========================================================================

/**
 * @namespace DKTools
 * @type {Object}
 */
const DKTools = {};

// properties

Object.defineProperties(DKTools, {

    /**
     * Version of DKTools
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools
     */
    version: { value: Imported.DKTools }

});

// classes

/**
 * Sprite class
 *
 * @class DKTools.Sprite
 * @extends DKTools.Base
 *
 * @override
 * @constructor
 *
 * @memberof DKTools
 *
 * @see DKTools.Sprite.prototype.initialize
 */
DKTools.Sprite = function(object, y, width, height) {
	this.initialize.apply(this, arguments);
};

/**
 * Button class
 *
 * @class DKTools.Sprite.Button
 * @extends DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Button.prototype.initialize
 */
DKTools.Sprite.Button = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Cursor class
 *
 * @class DKTools.Sprite.Cursor
 * @extends DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Cursor.prototype.initialize
 */
DKTools.Sprite.Cursor = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Arrow class
 *
 * @class DKTools.Sprite.Arrow
 * @extends DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Arrow.prototype.initialize
 */
DKTools.Sprite.Arrow = function(object, y) {
    this.initialize.apply(this, arguments);
};

/**
 * Selectable class
 *
 * @class DKTools.Sprite.Selectable
 * @extends DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.Selectable.prototype.initialize
 */
DKTools.Sprite.Selectable = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar
 * @extends DKTools.Sprite
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.ProgressBar.prototype.initialize
 */
DKTools.Sprite.ProgressBar = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.Rectangle
 * @extends DKTools.Sprite.ProgressBar
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.Rectangle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.Circle
 * @extends DKTools.Sprite.ProgressBar
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.Circle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Progress bar class
 *
 * @class DKTools.Sprite.ProgressBar.SemiCircle
 * @extends DKTools.Sprite.ProgressBar.Circle
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite.ProgressBar
 *
 * @see DKTools.Sprite.ProgressBar.SemiCircle.prototype.initialize
 */
DKTools.Sprite.ProgressBar.SemiCircle = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

/**
 * Checkbox class
 *
 * @class DKTools.Sprite.CheckBox
 * @extends DKTools.Sprite.Button
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Sprite
 *
 * @see DKTools.Sprite.CheckBox.prototype.initialize
 */
DKTools.Sprite.CheckBox = function(object, y) {
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
 * @memberof DKTools
 *
 * @see DKTools.Viewport.prototype.initialize
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
 * @memberof DKTools
 *
 * @see DKTools.Layout.prototype.initialize
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
 * @memberof DKTools
 *
 * @see DKTools.Window.prototype.initialize
 */
DKTools.Window = function(object, y, width, height) {
	this.initialize.apply(this, arguments);
};

/**
 * Window selectable class
 *
 * @class DKTools.Window.Selectable
 * @extends DKTools.Window
 *
 * @override
 * @constructor
 *
 * @memberof DKTools.Window
 *
 * @see DKTools.Window.Selectable.prototype.initialize
 */
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
 * @memberof DKTools
 */
DKTools.Scene = function() {
	this.initialize.apply(this, arguments);
};





//===========================================================================
// DKTools.Utils
//===========================================================================

/**
 * The static class that defines utility methods
 *
 * @class DKTools.Utils
 * @memberof DKTools
 */
DKTools.Utils = class {

    constructor() {
        return DKTools.Utils;
    };

    /**
     * Initializes the utils
     *
     * @version 3.0.0
     * @static
     */
    static initialize() {

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._saidHello = false;

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

        if (DKToolsParam.get('Check Updates', 'Enabled')) {
            this._checkUpdates();
        }
    };

    /**
     * Displays information about the plugin in the debug console
     *
     * @private
     * @static
     */
    static _sayHello() {
        if (this._saidHello) {
            return;
        }

        if (navigator.userAgent.toLowerCase().indexOf('chrome') >= 0) {
            const args = [`%c %c %c DKTools.js ${DKTools.version} %c  %c  https://www.dk-plugins.ru/  %c \n`,
                'background: #279EE8; padding:5px 0;',
                'background: #279EE8; padding:5px 0;',
                'color: #4CCBF5; background: #030307; padding:5px 0;',
                'background: #279EE8; padding:5px 0;',
                'background: #BDE5F2; padding:5px 0;',
                'background: #279EE8; padding:5px 0;'];

            console.log.apply(console, args);
        } else if (window.console) {
            console.log('DKTools.js ' + DKTools.version + ' - https://www.dk-plugins.ru/');
        }

        this._saidHello = true;
    };

    /**
     * Checks the updates
     *
     * @since 3.0.0
     * @private
     * @static
     */
    static _checkUpdates() {
        if (!this.isNwjs() || !Utils.isOptionValid('test')) {
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/repos/DKPlugins/DKTools/releases');
        xhr.overrideMimeType('application/json');
        xhr.onload = function() {
            if (xhr.status < 400) {
                const response = JSON.parse(xhr.responseText);

                if (response) {
                    const data = response[0];
                    const newestVersion = data['tag_name'];

                    if (newestVersion > DKTools.version) {
                        const args = [`Available a new version of DKTools: ${newestVersion} \n`,
                            `Changelog: ${data['html_url']} \n`,
                            'Download: http://dk-plugins.ru/download/DKTools.js'];

                        console.log.apply(console, args);
                    }
                }
            }
        };
        xhr.send();
    };

    /**
     * Copies properties of one object to another.
     * Handles get/set properties correctly.
     * Doesn't clone sub-objects
     *
     * @static
     * @param {Object} target - A target to copy properties
     * @param {Object} source - The source of properties
     */
    static mixin(target, source) {
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
    static openConsole() {
        if (!this.isNwjs() || !Utils.isOptionValid('test')) {
            return;
        }

        try {
            const window = require('nw.gui').Window.get();

            window.showDevTools(null, function() {
                window.focus();
            });
        } catch(e) {
            console.error('DKTools can not open the console');
        }
    };

    /**
     * Makes a screenshot
     *
     * @static
     */
    static makeScreenshot() {
        if (!DKTools.Utils.isNwjs()) {
            return;
        }

        const date = new Date();
        const snap = SceneManager.snap();
        const urlData = snap._canvas.toDataURL();
        const data = urlData.replace(/^data:image\/png;base64,/, '');
        const path = DKToolsParam.get('Screenshots', 'Screenshot Path');

        let filename = DKToolsParam.get('Screenshots', 'Screenshot Filename');
        filename = filename.replace(/%year/gi, date.getFullYear());
        filename = filename.replace(/%month/gi, date.getMonth() + 1);
        filename = filename.replace(/%day/gi, date.getDate());
        filename = filename.replace(/%hours/gi, date.getHours());
        filename = filename.replace(/%minutes/gi, date.getMinutes());
        filename = filename.replace(/%seconds/gi, date.getSeconds());

        const fullPath = DKTools.IO.normalizePath(path + '/' + filename);

        const file = new DKTools.IO.File(fullPath);

        file.save(data, {
            createDirectory: true,
            options: 'base64',
            callback: function() {
                console.log('The screenshot is saved with the name: ' + filename);
            }
        });
    };

    /**
     * Checks whether the platform is NW.js
     *
     * @static
     * @returns {Boolean} The platform is NW.js
     */
    static isNwjs() {
        return this._isNwjs;
    };

    /**
     * Checks whether the platform is a mobile device.
     *
     * @static
     * @returns {Boolean} The platform is a mobile device
     */
    static isMobileDevice() {
        return this._isMobileDevice;
    };

    /**
     * Checks whether the browser is Mobile Safari
     *
     * @static
     * @returns {Boolean} The browser is Mobile Safari
     */
    static isMobileSafari() {
        return this._isMobileSafari;
    };

    /**
     * Checks whether the browser is Android Chrome
     *
     * @static
     * @returns {Boolean} The browser is Android Chrome
     */
    static isAndroidChrome() {
        return this._isAndroidChrome;
    };

    /**
     * Returns true if the value is array or object Arguments
     *
     * @since 1.1.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is array or object Arguments
     */
    static isArrayLike(value) {
        if (Array.isArray(value)) {
            return true;
        }

        return String(value) === '[object Arguments]';
    };

    /**
     * Returns true if the value is string
     *
     * @since 1.1.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is string
     */
    static isString(value) {
        return !!value && typeof value === 'string';
    };

    /**
     * Returns true if the value is boolean
     *
     * @since 1.1.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is boolean
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    };

    /**
     * Returns true if the value is function
     *
     * @since 1.1.0
     * @static
     * @param {*} value - Value
     * @returns {Boolean} Value is function
     */
    static isFunction(value) {
        return typeof value === 'function';
    };

};





//===========================================================================
// DKTools.Utils.String
//===========================================================================

/**
 * The static class that defines utility methods for String class
 *
 * @class DKTools.Utils.String
 * @memberof DKTools.Utils
 */
DKTools.Utils.String = class {

    constructor() {
        return DKTools.Utils.String;
    };

    /**
     * Splits a string by commas into an array of string
     *
     * @static
     * @param {String} string - String
     *
     * @example
     * var array = DKTools.Utils.String.toStringArray('1, 2, 3');
     * => ['1', '2', '3']
     *
     * var array = DKTools.Utils.String.toStringArray('1,2,3');
     * => ['1', '2', '3']
     *
     * @returns {String[]} Array of strings
     */
    static toStringArray(string) {
        return string.replace(/\s*\,\s*/g, ',').split(',');
    };

    /**
     * Splits a string by commas into an array of numbers
     *
     * @static
     * @param {String} string - String
     *
     * @example
     * var array = DKTools.Utils.String.toNumberArray('1, 2, 3');
     * => [1, 2, 3]
     *
     * var array = DKTools.Utils.String.toNumberArray('1,2,3');
     * => [1, 2, 3]
     *
     * @see DKTools.Utils.String.toStringArray
     * @returns {Number[]} Array of numbers
     */
    static toNumberArray(string) {
        return _.map(this.toStringArray(string), Number);
    };

    /**
     * Splits a string by commas into an array of booleans
     *
     * @static
     * @param {String} string - String
     *
     * @example
     * var array = DKTools.Utils.String.toBooleanArray('1, 2, 3');
     * => [true, true, true]
     *
     * var array = DKTools.Utils.String.toBooleanArray('1,2,');
     * => [true, true, false]
     *
     * @see DKTools.Utils.String.toStringArray
     * @returns {Boolean[]} Array of booleans
     */
    static toBooleanArray(string) {
        return _.map(this.toStringArray(string), Boolean);
    };

};





//===========================================================================
// DKTools.Utils.Array
//===========================================================================

/**
 * The static class that defines utility methods for Array class
 *
 * @class DKTools.Utils.Array
 * @memberof DKTools.Utils
 */
DKTools.Utils.Array = class {

    constructor() {
        return DKTools.Utils.Array;
    };

    /**
     * Checks whether the array contains a given item
     *
     * @static
     *
     * @param {Array} array - The array in which the search is performed
     * @param {*} item - The item to search
     *
     * @example
     * var array = [1, 2];
     * DKTools.Utils.Array.contains(array, 1);
     * => true
     *
     * var array = [1, 2];
     * DKTools.Utils.Array.contains(array, 3);
     * => false
     *
     * @returns {Boolean} Array contains a given item
     */
    static contains(array, item) {
        return _.includes(array, item);
    };

    /**
     * Returns the number of item in the array
     *
     * @static
     *
     * @param {Array} array - The array in which the search is performed
     * @param {*} item - The item to search
     *
     * @example
     * var array = [1, 1, 2];
     * DKTools.Utils.Array.contains(array, 1);
     * => 2
     *
     * @example
     * var array = [1, 1, 2];
     * DKTools.Utils.Array.contains(array, 2);
     * => 1
     *
     * @returns {Number} Number of item in the array
     */
    static count(array, item) {
        return _.size(array) - _.size(_.without(array, item));
    };

    /**
     * Returns the sum of the number of items in the array
     *
     * @static
     *
     * @param {Array} array - The array in which the search is performed
     * @param {Array} items - The items to search
     *
     * @example
     * var array1 = [1, 1, 2];
     * var array2 = [1, 2];
     * DKTools.Utils.Array.counts(array1, array2);
     * => 3
     *
     * @returns {Number} Sum of the number of items in the array
     */
    static counts(array, items) {
        return _.size(array) - _.size(_.difference(array, items));
    };

    /**
     * Removes '', null, undefined and NaN from the array.
     * This method mutates array
     *
     * @static
     * @param {Array} array - The array to compact
     *
     * @example
     * var array = [null, 1, undefined];
     * DKTools.Utils.Array.compact(array);
     * => [1];
     *
     * @returns {Array} Mutated array
     */
    static compact(array) {
        return _.pull(array, '', null, undefined, Number.NaN);
    };

    /**
     * Removes item from the array.
     * This method mutates array
     *
     * @static
     *
     * @param {Array} array - The array to remove
     * @param {*} item - The item to remove
     *
     * @example
     * var array = [1, 2, 3];
     * DKTools.Utils.Array.remove(array, 1);
     * => [2, 3];
     *
     * @returns {Array} Mutated array
     */
    static remove(array, item) {
        return _.pull(array, item);
    };

    /**
     * Inserts the item into the array.
     * This method mutates array
     *
     * @static
     *
     * @param {Array} array - The array to insert
     * @param {*} item - The item to insert
     * @param {Number} [index=0] - The index to insert
     *
     * @example
     * var array = [1, 2, 4];
     * DKTools.Utils.Array.insert(array, 3, 2);
     * => [1, 2, 3, 4];
     */
    static insert(array, item, index) {
        array.splice(index || 0, 0, item);
    };

    /**
     * Checks whether the array is empty
     *
     * @version 2.0.0
     * @static
     * @param {Array} array - The array to check
     * @returns {Boolean} Array is empty
     */
    static isEmpty(array) {
        return _.isEmpty(array);
    };

    /**
     * Checks whether all elements of the array are of type Number
     *
     * @static
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [1, 2];
     * DKTools.Utils.Array.isNumberArray(array);
     * => true
     *
     * var array = ['1', 2];
     * DKTools.Utils.Array.isNumberArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Number
     */
    static isNumberArray(array) {
        return _.every(array, Number.isFinite);
    };

    /**
     * Checks whether all elements of the array are of type Boolean
     *
     * @static
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [true, false];
     * DKTools.Utils.Array.isBooleanArray(array);
     * => true
     *
     * var array = ['1', false];
     * DKTools.Utils.Array.isBooleanArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Boolean
     */
    static isBooleanArray(array) {
        return _.every(array, DKTools.Utils.isBoolean);
    };

    /**
     * Checks whether all elements of the array are of type String
     *
     * @version 2.0.0
     * @static
     * @param {Array} array - The array to check
     *
     * @example
     * var array = ['1', '2'];
     * DKTools.Utils.Array.isStringArray(array);
     * => true
     *
     * var array = ['1', 2];
     * DKTools.Utils.Array.isStringArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type String
     */
    static isStringArray(array) {
        return _.every(array, DKTools.Utils.isString);
    };

    /**
     * Checks whether all elements of the array are of type Bitmap
     *
     * @static
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [new Bitmap()];
     * DKTools.Utils.Array.isBitmapArray(array);
     * => true
     *
     * var array = [new Bitmap(), 2];
     * DKTools.Utils.Array.isBitmapArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Bitmap
     */
    static isBitmapArray(array) {
        return _.every(array, function(item) {
            return item instanceof Bitmap;
        });
    };

    /**
     * Checks whether all elements of the array are of type Sprite
     *
     * @static
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [new Sprite()];
     * DKTools.Utils.Array.isSpriteArray(array);
     * => true
     *
     * var array = [new Sprite(), 2];
     * DKTools.Utils.Array.isSpriteArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Sprite
     */
    static isSpriteArray(array) {
        return _.every(array, function(item) {
            return item instanceof Sprite;
        });
    };

    /**
     * Checks whether all elements of the array are of type Window
     *
     * @static
     * @param {Array} array - The array to check
     *
     * @example
     * var array = [new Window()];
     * DKTools.Utils.Array.isWindowArray(array);
     * => true
     *
     * var array = [new Window(), 2];
     * DKTools.Utils.Array.isWindowArray(array);
     * => false
     *
     * @returns {Boolean} All elements of the array are of type Window
     */
    static isWindowArray(array) {
        return _.every(array, function(item) {
            return item instanceof Window;
        });
    };

    /**
     * Performs a logical operation of the disjunction
     *
     * @static
     * @param {Array} array - The array to perform
     *
     * @example
     * var array = [true, false, false];
     * DKTools.Utils.Array.disjunction(array);
     * => true
     *
     * var array = [false, false];
     * DKTools.Utils.Array.disjunction(array);
     * => false
     *
     * @returns {Boolean} Result of operation
     */
    static disjunction(array) {
        return _.some(array, _.isEqual.bind(this, true));
    };

    /**
     * Performs a logical operation of the conjunction
     *
     * @static
     * @param {Array} array - The array to perform
     *
     * @example
     * var array = [true, true];
     * DKTools.Utils.Array.conjunction(array);
     * => true
     *
     * var array = [true, false];
     * DKTools.Utils.Array.conjunction(array);
     * => false
     *
     * @returns {Boolean} Result of operation
     */
    static conjunction(array) {
        return _.every(array, _.isEqual.bind(this, true));
    };

};





//===========================================================================
// DKTools.Utils.Bitmap
//===========================================================================

/**
 * The static class that defines utility methods for Bitmap class
 *
 * @class DKTools.Utils.Bitmap
 * @memberof DKTools.Utils
 */
DKTools.Utils.Bitmap = class {

    constructor() {
        return DKTools.Utils.Bitmap;
    };

    // load methods

    /**
     * Loads and returns a bitmap
     *
     * @version 3.0.0
     * @static
     *
     * @param {String | Bitmap | Array | Object} object - Path to file or Bitmap or array with parameters or object with parameters
     * @param {String | Object} filename - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Bitmap | null} Bitmap or null
     */
    static load(object, filename, listener, hue, smooth) {
        if (!object) {
            return null;
        } else if (object instanceof Bitmap) {
            return object;
        } else if (DKTools.Utils.isArrayLike(object)) {
            return this.load.apply(this, object);
        } else if (object instanceof Object) {
            return this.load(object.folder, object.filename, object.listener, object.hue, object.smooth);
        } else if (!DKTools.Utils.isString(object)) {
            return null;
        }

        // object - String (folder)
        const folder = DKTools.IO.normalizePath(object + '/');
        const bitmap = ImageManager.loadBitmap(folder, filename, hue, smooth);

        if (DKTools.Utils.isFunction(listener)) {
            bitmap.addLoadListener(listener);
        }

        return bitmap;
    };

    /**
     * Loads the bitmaps and call the callback function when all bitmaps are ready
     *
     * @version 3.0.0
     * @static
     *
     * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
     * @param {Function} onLoadAllBitmaps - Function that is called when all bitmaps are loaded and ready
     * @param {Function} [onLoadSomeBitmaps] - Function that is called when some bitmaps are loaded and ready
     *
     * @example
     * var bitmaps = [];
     * bitmaps[0] = ImageManager.loadSystem('Window');
     * bitmaps[1] = {
     *  folder: 'img/system/',
     *  filename: 'IconSet'
     * };
     *
     * DKTools.Utils.Bitmap.loadBitmaps(bitmaps, function(loadedBitmap, loadedBitmaps, allBitmaps) {
     *     // all loaded bitmaps
     * });
     *
     * @see DKTools.Utils.Bitmap.load
     */
    static loadBitmaps(bitmaps, onLoadAllBitmaps, onLoadSomeBitmaps) {
        if (!DKTools.Utils.isFunction(onLoadAllBitmaps)) {
            return;
        }

        bitmaps = _.map(bitmaps, this.load.bind(this));

        const loadedBitmaps = [];
        let loaded = 0;

        const loadListener = function(index, loadedBitmap) {
            if (!onLoadAllBitmaps) {
                return;
            }

            loadedBitmaps[index] = loadedBitmap;
            loaded++;

            if (DKTools.Utils.isFunction(onLoadSomeBitmaps)) {
                onLoadSomeBitmaps(loadedBitmap, loadedBitmaps, bitmaps);
            }

            if (bitmaps.length === loaded) {
                onLoadAllBitmaps(bitmaps);
                onLoadAllBitmaps = null;
            }
        };

        _.forEach(bitmaps, function(bitmap, index) {
            if (bitmap instanceof Bitmap) {
                bitmap.addLoadListener(loadListener.bind(this, index));
            } else {
                loadListener(index, bitmap);
            }
        }.bind(this));
    };

    // reserve methods

    /**
     * Loads and reserves the bitmap
     *
     * @since 3.0.0
     * @static
     *
     * @param {String | Bitmap | Array | Object} object - Path to file or Bitmap or array with parameters or object with parameters
     * @param {String | Object} filename - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @returns {Bitmap | null} Bitmap or null
     */
    static reserve(object, filename, listener, hue, smooth, reservationId) {
        if (!object) {
            return null;
        } else if (object instanceof Bitmap) {
            return object;
        } else if (DKTools.Utils.isArrayLike(object)) {
            return this.reserve.apply(this, object);
        } else if (object instanceof Object) {
            return this.reserve(object.folder, object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        } else if (!DKTools.Utils.isString(object)) {
            return null;
        }

        // object - String (folder)
        const folder = DKTools.IO.normalizePath(object + '/');
        const bitmap = ImageManager.reserveBitmap(folder, filename, hue, smooth, reservationId);

        if (DKTools.Utils.isFunction(listener)) {
            bitmap.addLoadListener(listener);
        }

        return bitmap;
    };

    /**
     * Loads and reserves the bitmaps and call the callback function when all bitmaps are ready
     *
     * @since 3.0.0
     * @static
     *
     * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
     * @param {Function} onLoadAllBitmaps - Function that is called when all bitmaps are loaded and ready
     * @param {Function} [onLoadSomeBitmaps] - Function that is called when some bitmaps are loaded and ready
     *
     * @example
     * var bitmaps = [];
     * bitmaps[0] = ImageManager.reserveSystem('Window');
     * bitmaps[1] = {
     *  folder: 'img/system/',
     *  filename: 'IconSet'
     * };
     *
     * DKTools.Utils.Bitmap.reserveBitmaps(bitmaps, function(loadedBitmap, loadedBitmaps, allBitmaps) {
     *     // your code here
     * });
     *
     * @see DKTools.Utils.Bitmap.reserve
     */
    static reserveBitmaps(bitmaps, onLoadAllBitmaps, onLoadSomeBitmaps) {
        if (!DKTools.Utils.isFunction(onLoadAllBitmaps)) {
            return;
        }

        bitmaps = _.map(bitmaps, this.reserve.bind(this));

        const loadedBitmaps = [];
        let loaded = 0;

        const loadListener = function(index, loadedBitmap) {
            if (!onLoadAllBitmaps) {
                return;
            }

            loadedBitmaps[index] = loadedBitmap;
            loaded++;

            if (DKTools.Utils.isFunction(onLoadSomeBitmaps)) {
                onLoadSomeBitmaps(loadedBitmap, loadedBitmaps, bitmaps);
            }

            if (bitmaps.length === loaded) {
                onLoadAllBitmaps(bitmaps);
                onLoadAllBitmaps = null;
            }
        };

        _.forEach(bitmaps, function(bitmap, index) {
            if (bitmap instanceof Bitmap) {
                bitmap.addLoadListener(loadListener.bind(this, index));
            } else {
                loadListener(index, bitmap);
            }
        }.bind(this));
    };

    // draw methods

    /**
     * Draws the line to the bitmap
     *
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x1 - The X coordinate of start of the line
     * @param {Number} y1 - The Y coordinate of start of the line
     * @param {Number} x2 - The X coordinate of end of the line
     * @param {Number} y2 - The Y coordinate of end of the line
     * @param {String} [color='white'] - Line color
     * @param {Number} [lineWidth=1] - Line width
     *
     * @see CanvasRenderingContext2D.lineTo
     */
    static drawLine(bitmap, x1, y1, x2, y2, color, lineWidth) {
        const context = bitmap._context;
        context.save();
        context.strokeStyle = color || 'white';
        context.lineWidth = lineWidth || 1;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.restore();
        bitmap._setDirty();
    };

    /**
     * Draws a rectangle without fill
     *
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @param {Number} width - Width of the rectangle
     * @param {Number} height - Height of the rectangle
     * @param {String} [color='white'] - Line color
     * @param {Number} [lineWidth=1] - Line width
     *
     * @see CanvasRenderingContext2D.strokeRect
     */
    static strokeRect(bitmap, x, y, width, height, color, lineWidth) {
        const context = bitmap._context;
        context.save();
        context.strokeStyle = color || 'white';
        context.lineWidth = lineWidth || 1;
        context.strokeRect(x, y, width, height);
        context.restore();
        bitmap._setDirty();
    };

    /**
     * Draws an arc and fills it with color
     *
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @param {Number} radius - Radius of the arc
     * @param {Number} startAngle - Starting angle
     * @param {Number} endAngle - End angle
     * @param {String} [color='white'] - Fill color
     * @param {Boolean} [anticlockwise=false] - Anticlockwise
     *
     * @see CanvasRenderingContext2D.arc
     */
    static fillArc(bitmap, x, y, radius, startAngle, endAngle, color, anticlockwise) {
        const context = bitmap._context;
        context.save();
        context.fillStyle = color || 'white';
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        context.fill();
        context.restore();
        bitmap._setDirty();
    };

    /**
     * Draws an arc without fill
     *
     * @static
     *
     * @param {Bitmap} bitmap - Bitmap
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @param {Number} radius - Radius of the arc
     * @param {Number} startAngle - Starting angle
     * @param {Number} endAngle - End angle
     * @param {String} [color='white'] - Line color
     * @param {Number} [lineWidth=1] - Line width
     * @param {Boolean} [anticlockwise=false] - Anticlockwise
     *
     * @see CanvasRenderingContext2D.arc
     */
    static strokeArc(bitmap, x, y, radius, startAngle, endAngle, color, lineWidth, anticlockwise) {
        const context = bitmap._context;
        context.save();
        context.strokeStyle = color || 'white';
        context.lineWidth = lineWidth || 1;
        context.beginPath();
        context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        context.stroke();
        context.restore();
        bitmap._setDirty();
    };

    // other methods

    /**
     * Clones the bitmap
     *
     * @static
     * @param {Bitmap} bitmap - The bitmap to be cloned
     * @returns {Bitmap | null} Cloned bitmap
     */
    static clone(bitmap) {
        if (!bitmap || bitmap.url) {
            return bitmap;
        }

        const canvas = bitmap.canvas;
        const newBitmap = new Bitmap(canvas.width, canvas.height);
        const newContext = newBitmap.context;

        newContext.drawImage(canvas, 0, 0);
        
        return newBitmap;
    };

};





//===========================================================================
// DKTools.Utils.Point
//===========================================================================

/**
 * The static class that defines utility methods for Point class
 *
 * @class DKTools.Utils.Point
 * @memberof DKTools.Utils
 */
DKTools.Utils.Point = class {

    constructor() {
        return DKTools.Utils.Point;
    };

    /**
     * Converts arguments to Point, if possible
     *
     * @since 2.0.0
     * @static
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} object - The X coordinate or Point or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     *
     * @param {Number} object.x - The X coordinate
     * @param {Number} object.y - The Y coordinate
     *
     * @example
     * var point = DKTools.Utils.Point.toPoint(0, 0);
     * => Point
     * 
     * @example
     * var point = DKTools.Utils.Point.toPoint(new Point(0, 0));
     * => Point
     * 
     * @example
     * var point = DKTools.Utils.Point.toPoint({ x: 0, y: 0 });
     * => Point
     * 
     * @example
     * var point = DKTools.Utils.Point.toPoint();
     * => null
     *
     * @returns {Point | null} Point or null
     */
    static toPoint(object, y) {
        let pointX, pointY;

        if (object instanceof Object) {
            pointX = object.x;
            pointY = object.y;
        } else { // object - Number
            pointX = object;
            pointY = y;
        }

        if (DKTools.Utils.Array.isNumberArray([pointX, pointY])) {
            return new Point(pointX, pointY);
        }

        return null;
    };

    /**
     * Converts the point into an array
     *
     * @since 2.0.0
     * @static
     *
     * @param {PIXI.Point | PIXI.ObservablePoint | Point} point - The point to convert
     *
     * @example
     * var point = new Point(0, 0);
     * DKTools.Utils.Point.toArray(point);
     * => [0, 0]
     *
     * @returns {Number[]} Array with coordinates
     */
    static toArray(point) {
        return [point.x, point.y];
    };

    /**
     * Compares the coordinates of the points
     *
     * @static
     *
     * @param {PIXI.Point | PIXI.ObservablePoint | Point} point1 - The first point to compare
     * @param {PIXI.Point | PIXI.ObservablePoint | Point} point2 - The second point to compare
     *
     * @example
     * var point1 = new Point(0, 0);
     * var point2 = new Point(0, 0);
     * DKTools.Utils.Point.equals(point1, point2);
     * => true
     *
     * var point1 = new Point(0, 0);
     * var point2 = new Point(0, 1);
     * DKTools.Utils.Point.equals(point1, point2);
     * => false
     *
     * @returns {Boolean} Comparison result
     */
    static equals(point1, point2) {
        return point1.x === point2.x && point1.y === point2.y;
    };

    /**
     * Clones the point
     *
     * @static
     * @param {PIXI.Point | PIXI.ObservablePoint | Point} point - The point to be cloned
     * @returns {Point} Cloned point
     */
    static clone(point) {
        const newPoint = new Point();

        newPoint.copy(point);

        return newPoint;
    };

};





//===========================================================================
// DKTools.Utils.Rectangle
//===========================================================================

/**
 * The static class that defines utility methods for Rectangle class
 *
 * @class DKTools.Utils.Rectangle
 * @memberof DKTools.Utils
 */
DKTools.Utils.Rectangle = class {

    constructor() {
        return DKTools.Utils.Rectangle;
    };

    /**
     * Converts arguments to Rectangle, if possible
     *
     * @since 2.0.0
     * @static
     *
     * @param {Number | PIXI.Rectangle | Rectangle | Object} object - The X coordinate or Object
     * @param {Number} [y] - The Y coordinate (if object is Number)
     * @param {Number} [width] - The rectangle width (if object is Number)
     * @param {Number} [height] - ВThe rectangle height (if object is Number)
     *
     * @param {Number} object.x - The X coordinate
     * @param {Number} object.y - The Y coordinate
     * @param {Number} object.width - The rectangle width
     * @param {Number} object.height - The rectangle height
     *
     * @example
     * var rect = DKTools.Utils.Rectangle.toRectangle(0, 0, 0, 0);
     * => Rectangle
     * 
     * @example
     * var rect = DKTools.Utils.Rectangle.toRectangle(new Rectangle(0, 0, 0, 0));
     * => Rectangle
     * 
     * @example
     * var rect = DKTools.Utils.Rectangle.toRectangle({ x: 0, y: 0, width: 0, height: 0});
     * => Rectangle
     * 
     * @example
     * var rect = DKTools.Utils.Rectangle.toRectangle();
     * => null
     *
     * @returns {Rectangle | null} Rectangle or null
     */
    static toRectangle(object, y, width, height) {
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

        if (DKTools.Utils.Array.isNumberArray([frameX, frameY, frameWidth, frameHeight])) {
            return new Rectangle(frameX, frameY, frameWidth, frameHeight);
        }

        return null;
    };

    /**
     * Converts the rect into an array
     *
     * @since 2.0.0
     * @static
     *
     * @param {PIXI.Rectangle | Rectangle} rect - The rectangle to convert
     *
     * @example
     * var rect = new Rectangle(0, 0, 0, 0);
     * DKTools.Utils.Rectangle.toArray(rect);
     * => [0, 0, 0, 0]
     *
     * @returns {Number[]} Array with coordinates, width and height of the rect
     */
    static toArray(rect) {
        return [rect.x, rect.y, rect.width, rect.height];
    };

    /**
     * Compares the coordinates, width and height of the rectangles
     *
     * @static
     *
     * @param {PIXI.Rectangle | Rectangle} rect1 - The first rectangle to compare
     * @param {PIXI.Rectangle | Rectangle} rect2 - The first rectangle to compare
     *
     * @example
     * var rect1 = new Rectangle(0, 0, 0, 0);
     * var rect2 = new Rectangle(0, 0, 0, 0);
     * DKTools.Utils.Rectangle.equals(rect1, rect2);
     * => true
     *
     * var rect1 = new Rectangle(0, 0, 0, 0);
     * var rect2 = new Rectangle(0, 0, 0, 1);
     * DKTools.Utils.Rectangle.equals(rect1, rect2);
     * => false
     *
     * @returns {Boolean} Comparison result
     */
    static equals(rect1, rect2) {
        return rect1.x === rect2.x && rect1.y === rect2.y &&
            rect1.width === rect2.width && rect1.height === rect2.height;
    };

    /**
     * Checks whether the rect is empty (0, 0, 0, 0)
     *
     * @static
     * @param {PIXI.Rectangle | Rectangle} rect - Rectangle to check
     *
     * @example
     * var rect = new Rectangle(0, 0, 100, 100);
     * DKTools.Utils.Rectangle.isEmpty(rect);
     * => false
     *
     * var rect = new Rectangle(0, 0, 0, 0);
     * DKTools.Utils.Rectangle.isEmpty(rect);
     * => true
     *
     * @see DKTools.Utils.Rectangle.equals
     *
     * @returns {Boolean} The rect is empty
     */
    static isEmpty(rect) {
        return this.equals(rect, Rectangle.emptyRectangle);
    };

    /**
     * Clones the rect
     *
     * @static
     * @param {PIXI.Rectangle | Rectangle} rect - The rect to be cloned
     * @returns {Rectangle} Cloned rect
     */
    static clone(rect) {
        const newRect = new Rectangle();

        newRect.copy(rect);

        return newRect;
    };

};





//===========================================================================
// DKTools.Utils.Random
//===========================================================================

/**
 * The static class that defines the functions for a random
 *
 * @class DKTools.Utils.Random
 * @memberof DKTools.Utils
 */
DKTools.Utils.Random = class {

    constructor() {
        return DKTools.Utils.Random;
    };

    /**
     * Returns a random integer not exceeding max
     *
     * @static
     * @param {Number} [max=1] - The maximum value of an integer
     * @returns {Number} Random integer not exceeding max
     */
    static getInt(max) {
        return _.random(0, max || 1);
    };

    /**
     * Returns a random float number not exceeding max
     *
     * @static
     * @param {Number} [max=1] - The maximum value of a float number
     * @returns {Number} Random float number not exceeding max
     */
    static getFloat(max) {
        return _.random(0, max || 1, true);
    };

    /**
     * Returns a random boolean
     *
     * @static
     * @returns {Boolean} Random boolean
     */
    static getBoolean() {
        return this.getInt(1) % 2 === 0;
    };

    /**
     * Returns a random color in rgba format
     *
     * @static
     * @param {Number} [alpha=1] - The color opacity
     * @returns {String} Random color in rgba format
     */
    static getRgbaColor(alpha) {
        const r = this.getInt(255);
        const g = this.getInt(255);
        const b = this.getInt(255);
        let a = 1;

        if (alpha !== undefined) {
            a = alpha;
        }
        
        return 'rgba(%1, %2, %3, %4)'.format(r, g, b, a);
    };

    /**
     * Returns a random color in hex format
     *
     * @static
     * @returns {String} Random color in hex format
     */
    static getHexColor() {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    };

};





//===========================================================================
// DKTools.Utils.Sequence
//===========================================================================

/**
 * The static class that defines the functions for a sequence
 *
 * @class DKTools.Utils.Sequence
 * @memberof DKTools.Utils
 */
DKTools.Utils.Sequence = class {

    constructor() {
        return DKTools.Utils.Sequence;
    };

    /**
     * Generator. Generates a sequence of integers. The number of values is limited by max.
     *
     * @param {Number} [max=Number.MAX_SAFE_INTEGER] - Number of sequence elements
     * @returns {Number} The next value of the sequence
     */
    static *Number(max) {
        max = max || Number.MAX_SAFE_INTEGER;
        let count = 0;

        while (count <= max) {
            yield count++;
        }
    };

    /**
     * Generator. Generates a sequence of booleans.
     *
     * @param [Boolean} [start=false] - The initial value of the sequence
     * @returns {Boolean} The next value of the sequence
     */
    static *Boolean(start) {
        let value = start || false;

        while (true) {
            value = !value;
            yield value;
        }
    };

};





//===========================================================================
// DKTools.Utils.Sequence.Alphabet
//===========================================================================

/**
 * The static class that defines the functions for a sequence of alphabet
 *
 * @class DKTools.Utils.Sequence.Alphabet
 * @memberof DKTools.Utils.Sequence
 */
DKTools.Utils.Sequence.Alphabet = class {

    constructor() {
        return DKTools.Utils.Sequence.Alphabet;
    };

    /**
     * Generator. Generates a sequence of characters of the Russian alphabet
     *
     * @param {Boolean} [upper] - Characters in uppercase
     * @returns {String} The next value of the sequence
     */
    static *ru(upper) {
        let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

        if (upper) {
            alphabet = alphabet.toUpperCase();
        }

        yield* alphabet;
    };

    /**
     * Generator. Generates a sequence of characters of the English alphabet
     *
     * @param {Boolean} [upper] - Characters in uppercase
     * @returns {String} The next value of the sequence
     */
    static *en(upper) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';

        if (upper) {
            alphabet = alphabet.toUpperCase();
        }

        yield* alphabet;
    };

};





//===========================================================================
// DKTools.Utils.Event
//===========================================================================

/**
 * The static class that defines the functions for an events
 *
 * @class DKTools.Utils.Event
 *
 * @since 3.0.0
 * @memberof DKTools
 */
DKTools.Utils.Event = class {

    /**
     * Returns the comments of the current page
     * 
     * @static
     *
     * @param {Number | Game_Event} event - Event ID or Game_Event
     *
     * @returns {String[]} Сomments of the current page
     */
    static getComments(event) {
        if (Number.isFinite(event)) {
            event = $gameMap.events()[event];
        }

        if (!event) {
            return [];
        }

        return _.reduce(event.list(), function(comments, command) {
            if (command.code === 108 || command.code === 408) {
                comments.push(command.parameters[0]);
            }

            return comments;
        }, []);
    };

    /**
     * Returns the comments of the all pages
     * 
     * @static
     * 
     * @param {Number | Game_Event} event - Event ID or Game_Event
     * 
     * @returns {Object} Сomments of the all pages
     */
    static getAllComments(event) {
        if (Number.isFinite(event)) {
            event = $gameMap.events()[event];
        }

        if (!event) {
            return [];
        }

        if (event instanceof Game_Event) {
            event = event.event();
        }

        return _.reduce(event.pages, function(acc, page, index) {
            acc[index + 1] = _.reduce(page.list, function(comments, command) {
                if (command.code === 108 || command.code === 408) {
                    comments.push(command.parameters[0]);
                }

                return comments;
            }, []);

            return acc;
        }, {});
    };

};





//===========================================================================
// DKTools.IO
//===========================================================================

/**
 * File system class
 * 
 * @class DKTools.IO
 * @memberof DKTools
 */
DKTools.IO = class {

    constructor() {
        return DKTools.IO;
    };

    // initialize methods

    /**
     * @static
     */
    static initialize() {
        if (!this.isLocalMode()) {
            return;
        }

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._fs = require('fs');

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._path = require('path');

        const projectPath = this._path.dirname(process.mainModule.filename);

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._projectPath = this._path.join(projectPath, '/');
    };

    // is methods

    /**
     * Returns true if local mode is used
     *
     * @static
     * @returns {Boolean} Local mode is used
     */
    static isLocalMode() {
        return DKTools.Utils.isNwjs();
    };

    /**
     * Returns true if the full path is a file
     *
     * @version 3.0.0
     * @static
     *
     * @param {String} fullPath - Path to file
     *
     * @see DKTools.IO.getAbsolutePath
     * @see DKTools.IO.absolutePathExists
     * @see FileSystem.lstatSync
     *
     * @returns {Boolean} Full path is a file
     */
    static isFile(fullPath) {
        const absolutePath = this.getAbsolutePath(fullPath);

        if (this.absolutePathExists(absolutePath)) {
            return this._fs.lstatSync(absolutePath).isFile();
        }

        return false;
    };

    /**
     * Returns true if the full path is a directory
     *
     * @version 3.0.0
     * @static
     *
     * @param {String} fullPath - Path to directory
     *
     * @see DKTools.IO.getAbsolutePath
     * @see DKTools.IO.absolutePathExists
     * @see FileSystem.lstatSync
     *
     * @returns {Boolean} Full path is a directory
     */
    static isDirectory(fullPath) {
        const absolutePath = this.getAbsolutePath(fullPath);

        if (this.absolutePathExists(absolutePath)) {
            return this._fs.lstatSync(absolutePath).isDirectory();
        }

        return false;
    };

    // other methods

    /**
     * Returns a normalized path
     *
     * @static
     *
     * @param {String} path - Path for normalize
     *
     * @see Path.normalize
     *
     * @returns {String} Normalized path
     */
    static normalizePath(path) {
        return this._path.normalize(path);
    };

    /**
     * Returns the absolute path to file or directory
     *
     * @since 3.0.0
     * @static
     *
     * @param {String} [path] - Path
     *
     * @returns {String} Absolute path to file or directory
     */
    static getAbsolutePath(path) {
        return this.normalizePath(this._path.join(this._projectPath, (path || '')));
    };

    /**
     * Returns true if the absolute path exists
     *
     * @since 3.0.0
     * @static
     *
     * @param {String} path - Path
     *
     * @see FileSystem.existsSync
     *
     * @returns {Boolean} Absolute path exists
     */
    static absolutePathExists(path) {
        return this._fs.existsSync(path);
    };

    /**
     * Returns true if the path exists
     *
     * @version 3.0.0
     * @static
     *
     * @param {String} path - Path
     *
     * @example
     * DKTools.IO.pathExists('img/system/'); // => true
     *
     * @see DKTools.IO.getAbsolutePath
     * @see DKTools.IO.absolutePathExists
     *
     * @returns {Boolean} Path exists
     */
    static pathExists(path) {
        return this.absolutePathExists(this.getAbsolutePath(path));
    };

};

// properties

Object.defineProperties(DKTools.IO, {

    /**
     * File system
     *
     * @readonly
     * @type {FileSystem}
     * @memberof DKTools.IO
     */
    fs: {
        get: function() {
            return this._fs;
        },
        configurable: true
    },

    /**
     * Path
     *
     * @readonly
     * @type {Path}
     * @memberof DKTools.IO
     */
    path: {
        get: function() {
            return this._path;
        },
        configurable: true
    },

    /**
     * Path to the project folder
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.IO
     */
    projectPath: {
        get: function() {
            return this._projectPath;
        },
        configurable: true
    },

    /**
     * Operation completed successfully
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    OK: { value: 0 },

    /**
     * Wait until the asynchronous operation calls the callback function
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    WAIT_FOR_ASYNC_OPERATION: { value: 1 },

    /**
     * Platform is not equal to NW.js
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_NOT_LOCAL_MODE: { value: 2 },

    /**
     * Path does not exist
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_PATH_DOES_NOT_EXIST: { value: 3 },

    /**
     * The callback function is not available for an asynchronous operation
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_CALLBACK_IS_NOT_AVAILABLE: { value: 4 },

    /**
     * Directory already exists
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DIRECTORY_ALREADY_EXISTS: { value: 5 },

    /**
     * Directory is not empty
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DIRECTORY_IS_NOT_EMPTY: { value: 6 },

    /**
     * A new name is missing or a file with this name already exists
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_NEW_NAME_IS_NOT_AVAILABLE: { value: 7 },

    /**
     * A key is missing
     *
     * @readonly
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_KEY_IS_NOT_AVAILABLE: { value: 8 },

});





//===========================================================================
// DKTools.IO.Entity
//===========================================================================

/**
 * Abstract class of entity (file or directory)
 * 
 * @class DKTools.IO.Entity
 * @memberof DKTools.IO
 * 
 * @example
 * var file = new DKTools.IO.File('/index.html');
 *
 * @example
 * var directory = new DKTools.IO.Directory('img/system/');
 */
DKTools.IO.Entity = class {

    constructor() {
        this.initialize.apply(this, arguments);
    };

    // initialize

    /**
     * Initializes the entity
     *
     * @since 3.0.0
     * @override
     *
     * @param {String} fullPath - Path to file
     */
    initialize(fullPath) {
        const data = DKTools.IO.path.parse(fullPath);

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._path = DKTools.IO.normalizePath(data.dir + '/');

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._name = data.name;

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._extension = data.ext;
    };

    // is methods

    /**
     * Returns true if the entity is a file
     *
     * @version 3.0.0
     * @since 2.0.0
     *
     * @returns {Boolean} Entity is a file
     */
    isFile() {
        if (this instanceof DKTools.IO.File) {
            return DKTools.IO.isFile(this.getFullPath());
        }

        return false;
    };

    /**
     * Returns true if the entity is a directory
     *
     * @version 3.0.0
     * @since 2.0.0
     *
     * @returns {Boolean} Entity is a directory
     */
    isDirectory() {
        if (this instanceof DKTools.IO.Directory) {
            return DKTools.IO.isDirectory(this.getFullPath());
        }

        return false;
    };

    // get methods

    /**
     * Returns the path
     *
     * @since 3.0.0
     *
     * @returns {String} Path
     */
    getPath() {
        return this._path;
    };

    /**
     * Returns the name of the entity without an extension
     *
     * @since 3.0.0
     *
     * @returns {String} Name of the entity without an extension
     */
    getName() {
        return this._name;
    };

    /**
     * Returns the extension of the entity
     *
     * @since 3.0.0
     *
     * @returns {String} Extension of the entity
     */
    getExtension() {
        return this._extension;
    };

    /**
     * Returns the full path
     *
     * @version 3.0.0
     *
     * @returns {String} Full Path
     */
    getFullPath() {
        return DKTools.IO.path.join(this.getPath(), '/', this.getFullName());
    };

    /**
     * Returns the full name
     *
     * @since 3.0.0
     *
     * @returns {String} Full name
     */
    getFullName() {
        return this._name + this._extension;
    };

    /**
     * Returns the absolute path
     *
     * @since 3.0.0
     *
     * @returns {String} Absolute path
     */
    getAbsolutePath() {
        return DKTools.IO.getAbsolutePath(this.getFullPath());
    };

    /**
     * Returns a stats
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @version 3.0.0
     * @since 2.0.0
     *
     * @param {Object} [object] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of stat
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see FileSystem.stat
     * @see FileSystem.statSync
     *
     * @returns {Object} Loaded stats
     */
    getStats(object) {
        if (!DKTools.IO.isLocalMode()) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            return { data: fs.statSync(absolutePath), status: DKTools.IO.OK };
        } else {
            if (!DKTools.Utils.isFunction(object.callback)) {
                return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
            }

            fs.stat(absolutePath, function(error, stats) {
                 if (error) {
                     throw error;
                 }

                 object.callback(stats, this);
            });

            return { data: null, status: DKTools.IO.WAIT_FOR_ASYNC_OPERATION };
        }
    };

    // other methods

    /**
     * Returns true if the full path exists
     *
     * @version 3.0.0
     *
     * @returns {Boolean} Full path exists
     */
    exists() {
        return DKTools.IO.absolutePathExists(this.getAbsolutePath());
    };

    /**
     * Renames the file
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE
     *
     * @version 3.0.0
     *
     * @param {Object} object - Options of an operation
     *
     * @param {String} object.newName - New name of file
     * @param {Boolean} [object.sync] - Use synchronous version of rename
     * @param {String | Object} [object.options] - Options for rename or renameSync
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see FileSystem.rename
     * @see FileSystem.renameSync
     *
     * @returns {Number} Code of the result of an operation
     */
    rename(object) {
        if (!DKTools.IO.isLocalMode()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!object.newName) {
            return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const newName = object.newName;
        const oldAbsolutePath = this.getAbsolutePath();
        const newAbsolutePath = DKTools.IO.getAbsolutePath(this._basePath, newName);

        if (!DKTools.IO.absolutePathExists(newAbsolutePath)) {
            if (object.sync) {
                fs.renameSync(oldAbsolutePath, newAbsolutePath);

                this._name = newName;

                return DKTools.IO.OK;
            } else {
                fs.rename(oldAbsolutePath, newAbsolutePath, function(error) {
                    if (error) {
                        throw error;
                    }
                    
                    this._name = newName;

                    object.callback(this);
                }.bind(this));

                return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
            }
        }

        return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
    };

};

// properties

Object.defineProperties(DKTools.IO.Entity.prototype, {

    /**
     * Path of the entity
     *
     * @since 3.0.0
     * @readonly
     * @type {String}
     * @memberof DKTools.IO.Entity.prototype
     */
    path: {
        get: function() {
            return this._path;
        },
        configurable: true
    },

    /**
     * Name of the entity
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.IO.Entity.prototype
     */
    name: {
        get: function() {
            return this._name;
        },
        configurable: true
    },

    /**
     * Extension of the entity
     *
     * @since 3.0.0
     * @readonly
     * @type {String}
     * @memberof DKTools.IO.Entity.prototype
     */
    extension: {
        get: function() {
            return this._extension;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.IO.File
//===========================================================================

/**
 * File class
 * 
 * @class DKTools.IO.File
 * @extends DKTools.IO.Entity
 *
 * @override
 *
 * @memberof DKTools.IO
 */
DKTools.IO.File = class extends DKTools.IO.Entity {

    // is methods

    /**
     * Returns true if an extension of the file is equal to .ogg or .m4a or .rpgmvo
     *
     * @version 3.0.0
     * @returns {Boolean} Extension of the file is equal to .ogg or .m4a or .rpgmvo
     */
    isAudio() {
        return this._extension === '.ogg' || this._extension === '.m4a' || this._extension === '.rpgmvo';
    };

    /**
     * Returns true if an extension of the file is equal to .json
     *
     * @returns {Boolean} Extension of the file is equal to .json
     */
    isJson() {
        return this._extension === '.json';
    };

    /**
     * Returns true if an extension of the file is equal to .png or .rpgmvp
     *
     * @version 3.0.0
     * @returns {Boolean} Extension of the file is equal to .png or .rpgmvp
     */
    isImage() {
        return this._extension === '.png' || this._extension === '.rpgmvp';
    };

    /**
     *  Returns true if an extension of the file is equal to .js
     *
     * @returns {Boolean} Extension of the file is equal to .js
     */
    isScript() {
        return this._extension === '.js';
    };

    /**
     * Returns true if an extension of the file is equal to .mp4 or .webm
     *
     * @returns {Boolean} Extension of the file is equal to .mp4 or .webm
     */
    isVideo() {
        return this._extension === '.mp4' || this._extension === '.webm';
    };

    /**
     * Returns true if an extension of the file is equal to .rpgsave
     *
     * @returns {Boolean} Extension of the file is equal to .rpgsave
     */
    isSave() {
        return this._extension === '.rpgsave';
    };

    // get methods

    /**
     * Returns the directory of the file
     *
     * @returns {DKTools.IO.Directory} Directory of the file
     */
    getDirectory() {
        return new DKTools.IO.Directory(this._path);
    };

    // load methods

    /**
     * Loads a data
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of readFile
     * @param {String | Object} [object.options] - Options for readFile or readFileSync
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean} [object.parse] - Use JSON.parse for a data
     *
     * @see FileSystem.readFile
     * @see FileSystem.readFileSync
     *
     * @returns {Object} Loaded data
     */
    load(object) {
        if (!DKTools.IO.isLocalMode()) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();
        const options = object.options || { encoding: 'utf8' };
        const processData = function(data) {
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

        if (object.sync) {
            const data = fs.readFileSync(absolutePath, options);

            return { data: processData(data), status: DKTools.IO.OK };
        } else if (DKTools.Utils.isFunction(object.callback)) {
            fs.readFile(absolutePath, options, function(error, data) {
                if (error) {
                    throw error;
                }

                object.callback(processData(data), this);
            });

            return { data: null, status: DKTools.IO.WAIT_FOR_ASYNC_OPERATION };
        }

        return {data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};
    };

    /**
     * Loads the audio file
     * 
     * @since 3.0.0
     * @returns {WebAudio | null} Audio file or null
     */
    loadAudio() {
        if (!this.isAudio() || !this.exists()) {
            return null;
        }

        return AudioManager.createBuffer(this.getPath(), this.getName());
    };

    /**
     * Loads the JSON file
     * 
     * @since 3.0.0
     * @returns {Object | null} Object or null
     */
    loadJson() {
        return this.load({ sync: true, parse: true }).data;
    };

    /**
     * Loads and returns a bitmap
     * 
     * @since 3.0.0
     * 
     * @param {Function | Object} object - 
     * @param {Number} [hue] - 
     * @param {Boolean} [smooth] -
     * 
     * @param {Function} [object.listener] - 
     * @param {Number} [object.hue] - 
     * @param {Boolean} [object.smooth] - 
     * 
     * @returns {Bitmap | null} Bitmap or null
     */
    loadBitmap(object, hue, smooth) {
        if (!this.isImage() || !this.exists()) {
            return null;
        }

        if (object instanceof Object) {
            return this.loadBitmap(object.listener, object.hue, object.smooth);
        }

        return DKTools.Utils.Bitmap.load({
            folder: this.getPath(),
            filename: this.getName(),
            listener: object,
            hue,
            smooth
        });
    };

    // reserve methods

    /**
     * Loads, reserves and returns a bitmap
     * 
     * @since 3.0.0
     * 
     * @param {Function | Object} object -
     * @param {Number} [hue] -
     * @param {Boolean} [smooth] -
     * @param {Number} [reservationId] -
     * 
     * @param {Function} [object.listener] -
     * @param {Number} [object.hue] -
     * @param {Boolean} [object.smooth] -
     * @param {Number} [object.reservationId] -
     *
     * @returns {Bitmap | null} Bitmap or null
     */
    reserveBitmap(object, hue, smooth, reservationId) {
        if (!this.isImage() || !this.exists()) {
            return null;
        }

        if (object instanceof Object) {
            return this.reserveBitmap(object.listener, object.hue, object.smooth, object.reservationId);
        }

        return DKTools.Utils.Bitmap.reserve({
            folder: this.getPath(),
            filename: this.getName(),
            listener: object,
            hue,
            smooth,
            reservationId
        });
    };

    // other methods

    /**
     * Saves the data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @version 3.0.0
     *
     * @param {*} data - Data to save
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean} [object.createDirectory] - Create a directory for the file
     * @param {Boolean} [object.sync] - Use synchronous version of writeFile
     * @param {String | Object} [object.options] - Options for writeFile or writeFileSync
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see FileSystem.writeFile
     * @see FileSystem.writeFileSync
     *
     * @returns {Number} Code of the result of an operation
     */
    save(data, object) {
        if (!DKTools.IO.isLocalMode()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();
        const directory = this.getDirectory();

        object = object || {};

        if (object.stringify) {
            data = JSON.stringify(data);
        }

        if (object.compress) {
            data = LZString.compressToBase64(data);
        }

        if (object.createDirectory && !directory.exists()) {
            directory.create();
        }

        if (!directory.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (object.sync) {
            fs.writeFileSync(absolutePath, data, object.options);

            return DKTools.IO.OK;
        } else {
            const callback = object.callback;

            fs.writeFile(absolutePath, data, object.options, function(error) {
                if (error) {
                    throw error;
                }

                if (DKTools.Utils.isFunction(callback)) {
                    callback(this);
                }
            }.bind(this));

            return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
        }
    };

    /**
     * Removes the file
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @version 3.0.0
     *
     * @param {Object} [object] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of unlink
     * @param {String | Object} [object.options] - Options for unlink or unlinkSync
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see FileSystem.unlink
     * @see FileSystem.unlinkSync
     *
     * @returns {Number} Code of the result of an operation
     */
    remove(object) {
        if (!DKTools.IO.isLocalMode()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        object = object || {};

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            fs.unlinkSync(absolutePath);

            return DKTools.IO.OK;
        } else {
            const callback = object.callback;

            fs.unlink(absolutePath, function(error) {
                if (error) {
                    throw error;
                }

                if (DKTools.Utils.isFunction(callback)) {
                    callback(this);
                }
            }.bind(this));

            return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
        }
    };

};





//===========================================================================
// DKTools.IO.Directory
//===========================================================================

/**
 * Directory class
 * 
 * @class DKTools.IO.Directory
 * @extends DKTools.IO.Entity
 *
 * @override
 *
 * @memberof DKTools.IO
 */
DKTools.IO.Directory = class extends DKTools.IO.Entity {

    // static methods

    /**
     * Returns the project directory
     *
     * @static
     * @returns {DKTools.IO.Directory} Project directory
     */
    static getRootDirectory() {
        return new DKTools.IO.Directory('/');
    };

    // is methods

    /**
     * Returns true if the directory does not contain files and other directories
     *
     * @returns {Boolean} Directory does not contain files and other directories
     */
    isEmpty() {
        const data = this.getAll({ sync: true }).data;

        return !data || data.length === 0;
    };

    // get methods

    /**
     * Returns all files and directories
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files and directories (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of readdir
     * @param {String | Object} [object.options] - Options for readdir or readdirSync
     * @param {RegExp} [object.template] - Template for filtering
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see FileSystem.readdir
     * @see FileSystem.readdirSync
     *
     * @returns {Object} All files and directories
     */
    getAll(object) {
        if (!DKTools.IO.isLocalMode()) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        const fs = DKTools.IO.fs;
        const path = this.getFullPath();
        const absolutePath = this.getAbsolutePath();
        const processData = function(names) {
            if (object.template instanceof RegExp) {
                names = _.filter(names, function(name) {
                    return object.template.test(name);
                });
            }

            return _.reduce(names, function(acc, name) {
                const fullPath = DKTools.IO.normalizePath(path + '/' + name);

                if (DKTools.IO.isFile(fullPath)) {
                    acc.push(new DKTools.IO.File(fullPath));
                } else if (DKTools.IO.isDirectory(fullPath)) {
                    acc.push(new DKTools.IO.Directory(fullPath));
                }

                return acc;
            }, []);
        };

        if (object.sync) {
            const names = fs.readdirSync(absolutePath, object.options);

            return { data: processData(names) , status: DKTools.IO.OK };

        } else if (DKTools.Utils.isFunction(object.callback)) {
            fs.readdir(absolutePath, object.options, function(error, names) {
                if (error) {
                    throw error;
                }

                object.callback(processData(names), this);
            }.bind(this));

            return { data: null, status: DKTools.IO.WAIT_FOR_ASYNC_OPERATION };
        }

        return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
    };

    /**
     * Returns all files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of readdir
     * @param {String | Object} [object.options] - Options for readdir or readdirSync
     * @param {RegExp} [object.template] - Template for filtering
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see DKTools.IO.Directory.prototype.getAll
     * @see FileSystem.readdir
     * @see FileSystem.readdirSync
     *
     * @returns {Object} All files
     */
    getFiles(object) {
        const processData = function(entities) {
            return _.filter(entities, function(entity) {
                return entity.isFile();
            });
        };

        if (object.sync) {
            const result = this.getAll(object);

            if (result.status === DKTools.IO.OK) {
                return { data: processData(result.data), status: DKTools.IO.OK };
            }

            return result;
        } else if (DKTools.Utils.isFunction(object.callback)) {
            const callback = object.callback;

            object.callback = function(data, directory) {
                callback(processData(data), directory);
            };

            return this.getAll(object);
        }

        return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
    };

    /**
     * Returns all directories
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of readdir
     * @param {String | Object} [object.options] - Options for readdir or readdirSync
     * @param {RegExp} [object.template] - Template for filtering
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see DKTools.IO.Directory.prototype.getAll
     * @see FileSystem.readdir
     * @see FileSystem.readdirSync
     *
     * @returns {Object} All directories
     */
    getDirectories(object) {
        const processData = function(entities) {
            return _.filter(entities, function(entity) {
                return entity.isDirectory();
            });
        };

        if (object.sync) {
            const result = this.getAll(object);

            if (result.status === DKTools.IO.OK) {
                return { data: processData(result.data), status: DKTools.IO.OK };
            }

            return result;
        } else if (DKTools.Utils.isFunction(object.callback)) {
            const callback = object.callback;

            object.callback = function(data, directory) {
                callback(processData(data), directory);
            };

            return this.getAll(object);
        }

        return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
    };

    /**
     * Returns all audio files
     * 
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     * 
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * 
     * @since 3.0.0
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of readdir
     * @param {String | Object} [object.options] - Options for readdir or readdirSync
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     * 
     * @see DKTools.IO.Directory.prototype.getFiles
     * 
     * @returns {Object} All audio files
     */
    getAudioFiles(object) {
        return this.getFiles({
            sync: object.sync,
            options: object.options,
            template: /(.ogg|.m4a|.rpgmvo)/,
            callback: object.callback
        });
    };

    /**
     * Returns all JSON files
     * 
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     * 
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * 
     * @since 3.0.0
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of readdir
     * @param {String | Object} [object.options] - Options for readdir or readdirSync
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see DKTools.IO.Directory.prototype.getFiles
     *
     * @returns {Object} All JSON files
     */
    getJsonFiles(object) {
        return this.getFiles({
            sync: object.sync,
            options: object.options,
            template: /(.json)/,
            callback: object.callback
        });
    };

    /**
     * Returns all image files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @since 3.0.0
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of readdir
     * @param {String | Object} [object.options] - Options for readdir or readdirSync
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see DKTools.IO.Directory.prototype.getFiles
     *
     * @returns {Object} All image files
     */
    getImageFiles(object) {
        return this.getFiles({
            sync: object.sync,
            options: object.options,
            template: /(.png|.rpgmvp)/,
            callback: object.callback
        });
    };

    /**
     * Returns all video files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * 
     * @since 3.0.0
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of readdir
     * @param {String | Object} [object.options] - Options for readdir or readdirSync
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see DKTools.IO.Directory.prototype.getFiles
     *
     * @returns {Object} All video files
     */
    getVideoFiles(object) {
        return this.getFiles({
            sync: object.sync,
            options: object.options,
            template: /(.webm|.mp4)/,
            callback: object.callback
        });
    };

    // audio methods

    /**
     * Loads the audio files
     *
     * @since 3.0.0
     * 
     * @see DKTools.IO.Directory.prototype.getAudioFiles
     * 
     * @returns {WebAudio[]} Audio files
     */
    loadAudioFiles() {
        const result = this.getAudioFiles({ sync: true });

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return _.map(result.data, function(file) {
            return file.loadAudio();
        });
    };

    // image methods

    /**
     * Loads and returns a bitmaps
     *
     * @since 3.0.0
     *
     * @param {Function | Object} [object] - Function of processing after loading a bitmap or object with parameter
     * @param {Number} [hue] - Hue of bitmap (if object is Object)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is Object)
     * 
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see DKTools.IO.Directory.prototype.getImageFiles
     * @see DKTools.Utils.Bitmap.load
     * 
     * @returns {Bitmap[]} Bitmaps
     */
    loadBitmaps(object, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmaps(object.listener, object.hue, object.smooth);
        }

        const result = this.getImageFiles({ sync: true });

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return _.map(result.data, function(file) {
            return file.loadBitmap(object, hue, smooth);
        });
    };

    /**
     * Loads, reserves and returns a bitmaps
     *
     * @since 3.0.0
     *
     * @param {Function | Object} [object] - Function of processing after loading a bitmap or object with parameter
     * @param {Number} [hue] - Hue of bitmap (if object is Object)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is Object)
     * @param {Number} [reservationId] - Reservation ID (if object is Object)
     * 
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see DKTools.IO.Directory.prototype.getImageFiles
     * @see DKTools.Utils.Bitmap.reserve
     * 
     * @returns {Bitmap[]}
     */
    reserveBitmaps(object, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmaps(object.listener, object.hue, object.smooth, object.reservationId);
        }

        const result = this.getImageFiles({ sync: true });

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return _.map(result.data, function(file) {
            return file.reserveBitmap(object, hue, smooth, reservationId);
        });
    };

    // other methods

    /**
     * Creates the directory
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     * @example
     * var directory = new DKTools.IO.Directory('/', 'saves/');
     * directory.create();
     *
     * @see FileSystem.mkdirSync
     *
     * @returns {Number} Code of the result of an operation
     */
    create() {
        if (!DKTools.IO.isLocalMode()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (this.exists()) {
            return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;
        }

        DKTools.IO.fs.mkdirSync(this.getAbsolutePath());

        return DKTools.IO.OK;
    };

    /**
     * Removes the directory
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.WAIT_FOR_ASYNC_OPERATION
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY
     *
     * @param {Object} [object] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of rmdir
     * @param {Function} [object.callback] - Callback function upon completion of an operation (only for object.sync == false)
     *
     * @see FileSystem.rmdir
     * @see FileSystem.rmdirSync
     *
     * @returns {Number} Code of the result of an operation
     */
    remove(object) {
        if (!DKTools.IO.isLocalMode()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (!this.isEmpty()) {
            return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;
        }

        object = object || {};

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            fs.rmdirSync(absolutePath);

            return DKTools.IO.OK;
        } else {
            fs.rmdir(absolutePath, function(error) {
                if (error) {
                    throw error;
                }

                if (DKTools.Utils.isFunction(object.callback)) {
                    object.callback(this);
                }
            }.bind(this));

            return DKTools.IO.WAIT_FOR_ASYNC_OPERATION;
        }
    };

};





//===========================================================================
// DKTools.IO.WebStorage
//===========================================================================

/**
 * Web storage class
 * 
 * @class DKTools.IO.WebStorage
 * @memberof DKTools.IO
 */
DKTools.IO.WebStorage = class {

    /**
     * Returns true if the key exists
     *
     * @static
     * @param {String} key - Key
     * @returns {Boolean} Key exists
     */
    static exists(key) {
        return localStorage.hasOwnProperty(key);
    };

    /**
     * Loads a data
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data (only if the status is equal to DKTools.IO.OK)
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
     *
     * @static
     *
     * @param {String} key - Key
     * @param {Object} [options] - Options of an operation
     *
     * @param {Boolean} [options.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean} [options.parse] - Use JSON.parse for a data
     *
     * @returns {Object} Loded data
     */
    static load(key, options) {
        if (!this.exists(key)) {
            return { data: null, status: DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE };
        }

        options = options || {};

        let data = localStorage.getItem(key);

        if (data) {
            if (options.decompress) {
                data = LZString.decompressFromBase64(data);
            }

            if (options.parse) {
                data = JSON.parse(data);
            }
        }

        return { data, status: DKTools.IO.OK };
    };

    /**
     * Saves the data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
     *
     * @version 3.0.0
     * @static
     *
     * @param {String} key - Key
     * @param {*} data - Data to save
     * @param options - Options of an operation
     *
     * @param {Boolean} [options.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [options.compress] - Use LZString.compressToBase64 for the data
     *
     * @returns {Number} Code of the result of an operation
     */
    static save(key, data, options) {
        if (key == null || key === '') {
            return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
        }

        options = options || {};

        if (options.stringify) {
            data = JSON.stringify(data);
        }

        if (options.compress) {
            data = LZString.compressToBase64(data);
        }

        localStorage.setItem(key, data);

        return DKTools.IO.OK;
    };

    /**
     * Removes a data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
     *
     * @static
     * @param {String} key - Key
     * @returns {Number} Code of the result of an operation
     */
    static remove(key) {
        if (!this.exists(key)) {
            return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
        }

        localStorage.removeItem(key);

        return DKTools.IO.OK;
    };

    /**
     * Renames a data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE
     *
     * @static
     * @param {String} oldkey - Old key
     * @param {String} newkey - New key
     * @returns {Number} Code of the result of an operation
     */
    static rename(oldKey, newKey) {
        if (!this.exists(oldKey)) {
            return DKTools.IO.ERROR_KEY_IS_NOT_AVAILABLE;
        }

        if (this.exists(newKey) || newKey == null) {
            return DKTools.IO.ERROR_NEW_NAME_IS_NOT_AVAILABLE;
        }

        const data = localStorage.getItem(oldKey);

        localStorage.setItem(newKey, data);
        localStorage.removeItem(oldKey);

        return DKTools.IO.OK;
    };

};





//===========================================================================
// DKTools.ParameterManager
//===========================================================================

/**
 * Class of plugin parameters
 * Manages plugin parameters (supports all types of parameters)
 *
 * @class DKTools.ParameterManager
 * @memberof DKTools
 *
 * @param {String} pluginName - Name of the plugin
 *
 * @example
 * var params = new DKTools.ParameterManager('DKTools');
 *
 * @see DKTools.ParameterManager.prototype.initialize
 */
DKTools.ParameterManager = class {

    constructor() {
        this.initialize.apply(this, arguments);
    };

    // static methods

    /**
     * Parse a string (supports escape characters of the RPG Maker 1.5+)
     *
     * @static
     * @param {String} string - String to parse
     * @returns {Object | String} Parsed string
     */
    static parse(string) {
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

    // methods

    /**
     * Initializes the manager
     * 
     * @version 3.0.0
     * 
     * @param {String} pluginName - Name of the plugin
     */
    initialize(pluginName) {
        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._pluginName = pluginName;

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._initialParams = PluginManager.parameters(pluginName);

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._params = {};

        this.initializeParams();
    };

    /**
     * Initializes plugin parameters
     */
    initializeParams() {
        _.forEach(this._initialParams, function(value, key) {
            this._params[key] = DKTools.ParameterManager.parse(value);
        }.bind(this));
    };

    /**
     * Returns a parameter by its name
     *
     * @version 3.0.0
     *
     * @param {String} parameterName - Name of parameter
     * @param {Number | String | Object} [item] - Index (for an array) or property (for an object) or object with properties to find
     * @param {Object} [options] - Options for finded item
     *
     * @param {String} [options.key] - Key (property) of item
     * @param {Number} [options.index] - Index of item
     *
     * @returns {* | undefined} Parameter by its name or undefined
     */
    get(parameterName, item, options) {
        if (!DKTools.Utils.isString(parameterName)) {
            console.error('Parameter name is not a string!', this._pluginName, parameterName, item, options);

            return undefined;
        }

        let param = this._params[parameterName];

        if (param === undefined) {
            return undefined;
        }

        if (item instanceof Object) {
            param = _.find(param, item);
        } else if (item !== undefined) { // number or string
            param = param[item];
        }

        if (param instanceof Object) {
            if (options instanceof Object) {
                if (options.key !== undefined) {
                    param = param[options.key];
                }

                if (options.index !== undefined) {
                    param = param[options.index];
                }
            } else if (options !== undefined) { // number or string
                param = param[options];
            }
        }

        return param;
    };

};

// properties

Object.defineProperties(DKTools.ParameterManager.prototype, {

    /**
     * Name of the plugin
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.ParameterManager.prototype
     */
    pluginName: {
        get: function() {
            return this._pluginName;
        },
        configurable: true
    },

    /**
     * Parameters obtained using PluginManager.parameters
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.ParameterManager.prototype
     */
    initialParams: {
        get: function() {
            return this._initialParams;
        },
        configurable: true
    },

    /**
     * Parameters of the plugin
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.ParameterManager.prototype
     */
    params: {
        get: function() {
            return this._params;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.PluginManager
//===========================================================================

/**
 * Plugin manager class
 *
 * @class DKTools.PluginManager
 * @memberof DKTools
 */
DKTools.PluginManager = class {

    constructor() {
        return DKTools.PluginManager;
    };

    // initialize methods

    /**
     * Registers a plugins from Imported, which have a version and checks the requirements for the versions of plugins
     *
     * @static
     */
    static initialize() {
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
    static _checkRequirements() {
        _.forEach(this._requirements, function(pluginInfo, pluginName) {
            const maxVersion = _.max(pluginInfo);
            const pluginVersion = this.pluginVersion(pluginName);

            if (pluginVersion === undefined) {
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
     * Returns true if plugin is registered
     *
     * @example
     * DKTools.PluginManager.isRegistered('DKTools'); // => true
     *
     * @static
     * @param {String} pluginName - Name of plugin
     * @returns {Boolean} Plugin is registered
     */
    static isRegistered(pluginName) {
        return !!this._plugins[pluginName];
    };

    /**
     * Returns true if plugin requirement is registered
     *
     * @static
     * @param {String} pluginName - Name of plugin
     * @returns {Boolean} Requirement is registered
     */
    static isRequired(pluginName) {
        return !!this._requirements[pluginName];
    };

    // register methods

    /**
     * Registers a plugin
     *
     * @static
     * @param {String} pluginName - Name of plugin
     * @param {Number | String} version - Version of plugin
     */
    static registerPlugin(pluginName, version) {
        if (!version || this.isRegistered(pluginName) || DKTools.Utils.isBoolean(version)) {
            return;
        }

        this._plugins[pluginName] = version;
    };

    /**
     * Registers a several plugins
     *
     * @static
     * @param {Object[]} plugins - Plugins
     *
     * @see DKTools.PluginManager.registerPlugin
     */
    static registerPlugins(plugins) {
        _.forEach(plugins, function(version, pluginName) {
            this.registerPlugin(pluginName, version);
        }.bind(this));
    };

    // require methods

    /**
     * Registers a requirement of minimum version of plugin
     *
     * @example
     * DKTools.PluginManager.requirePlugin('DKTools', '3.0.0');
     *
     * @static
     * @param {String} pluginName - Name of plugin
     * @param {Number | String} minVersion - Minimum version of plguin
     */
    static requirePlugin(pluginName, minVersion) {
        if (!this._requirements[pluginName]) {
            this._requirements[pluginName] = [];
        }

        this._requirements[pluginName].push(minVersion);
    };

    /**
     * Registers a several requirements of minimum version of plugins
     *
     * @static
     * @param {Object[]} plugins - Plugins
     *
     * @see DKTools.PluginManager.requirePlugin
     */
    static requirePlugins(plugins) {
        _.forEach(plugins, function(version, pluginName) {
            this.requirePlugin(pluginName, version);
        }.bind(this));
    };

    // other methods

    /**
     * Returns a version of plugin
     *
     * @example
     * DKTools.PluginManager.pluginVersion('DKTools'); // => '3.0.0'
     *
     * @static
     * @param {String | String} pluginName - Name of plugin
     * @returns {Number | String | undefined} Version of plugin
     */
    static pluginVersion(pluginName) {
        return this._plugins[pluginName];
    };

};

// properties

Object.defineProperties(DKTools.PluginManager, {

    /**
     * List of registered plugins
     *
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    _plugins: { value: {} },

    /**
     * List of registered requirements
     *
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    _requirements: { value: {} },

    /**
     * List of registered plugins
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    plugins: {
        get: function() {
            return this._plugins;
        },
        configurable: true
    },

    /**
     * List of registered requirements
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    requirements: {
        get: function() {
            return this._requirements;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.PluginCommandManager
//===========================================================================

/**
 * Plugin command manager class
 *
 * @since 3.0.0
 * @class DKTools.PluginCommandManager
 * @memberof DKTools
 */
DKTools.PluginCommandManager = class {

    constructor() {
        return DKTools.PluginCommandManager;
    };

    /**
     * Sets the handler of the plugin command
     *
     * @static
     *
     * @param {String} pluginCommand - Name of the command
     * @param {Function} handler - Handler of the command
     */
    static set(pluginCommand, handler) {
        this._pluginCommands[pluginCommand.toLowerCase()] = handler;
    };

    /**
     * Returns true if the command has the handler
     *
     * @static
     *
     * @param {String} pluginCommand - Name of the command
     *
     * @returns {Boolean} Command has the handler
     */
    static has(pluginCommand) {
        return !!this._pluginCommands[pluginCommand.toLowerCase()];
    };

    /**
     * Processes the handler of the command
     *
     * @static
     *
     * @param {Game_Interpreter} gameInterpreter - Interpreter
     * @param {String} pluginCommand - Name of the command
     * @param {Array} args - Arguments of the command
     */
    static process(gameInterpreter, pluginCommand, args) {
        const handler = this._pluginCommands[pluginCommand.toLowerCase()];

        if (DKTools.Utils.isFunction(handler)) {
            handler.call(gameInterpreter, args);
        }
    };

};

// properties

Object.defineProperties(DKTools.PluginCommandManager, {

    /**
     * Plugin commands
     *
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginCommandManager
     */
    _pluginCommands: { value: {} }

});





//===========================================================================
// DKTools.PreloadManager
//===========================================================================

/**
 * Preload manager class
 * 
 * @class DKTools.PreloadManager
 * 
 * @since 3.0.0
 * @memberof DKTools
 */
DKTools.PreloadManager = class {

    constructor() {
        return DKTools.PreloadManager;
    };

    // initialize methods

    /**
     * Initializes the manager
     * 
     * @static
     */
    static initialize() {
        if (!DKToolsParam.get('Preload Manager', 'Enabled') || !DKTools.IO.isLocalMode()) {
            return;
        }

        this.clearCache();

        _.forEach(DKToolsParam.get('Preload Manager', 'Images'), function(data) {
            this.preload({
                path: data.Path,
                hue: data.Hue,
                caching: data.Caching
            });
        }.bind(this));

        this.start();
    };

    // private methods

    /**
     * Logs the message in the console
     * 
     * @private
     * @static
     * 
     * @param {String} message - Message
     */
    static _log(message) {
        if (!DKToolsParam.get('Preload Manager', 'Enabled') ||
            !DKToolsParam.get('Preload Manager', 'Debugging') ||
            !Utils.isOptionValid('test') || !message) {
                return;
        }

        console.log(message);
    };

    /**
     * Generates a key
     * 
     * @private
     * @static
     * 
     * @param {String} path - Path
     * @param {Number} [hue=0] - Hue
     * 
     * @see ImageManager._generateCacheKey
     * 
     * @returns {String} Generated key
     */
    static _generateKey(path, hue) {
        return ImageManager._generateCacheKey(path, hue || 0);
    };

    // clear methods

    /**
     * Clears the preload queue
     *
     * @static
     */
    static clearQueue() {
        /**
         * @private
         * @readonly
         * @type {Object[]}
         */
        this._queue = [];
    };

    /**
     * Clears the cache
     * 
     * @static
     */
    static clearCache() {
        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._cache = {};
    };

    // get methods

    /**
     * Returns a cached bitmap by key
     * 
     * @static
     * 
     * @param {String} key - Key of the cached bitmap
     * 
     * @see DKTools.PreloadManager._generateCacheKey
     * 
     * @returns {Bitmap | null} Cached bitmap or null
     */
    static getCachedBitmapByKey(key) {
        return this._cache[key] || null;
    };

    /**
     * Returns a cached bitmap by path
     * 
     * @static
     * 
     * @param {String} path - Path of the cached bitmap
     * 
     * @see DKTools.PreloadManager.getCachedBitmapByKey
     * 
     * @returns {Bitmap | null} Cached bitmap or null
     */
    static getCachedBitmapByPath(path) {
        return this.getCachedBitmapByKey(this._generateKey(path));
    };

    // is methods

    /**
     * Returns true if the bitmap is cached by key
     *
     * @static
     *
     * @param {String} key - Key of the cached bitmap
     *
     * @see DKTools.PreloadManager._generateCacheKey
     *
     * @returns {Boolean} Bitmap is cached by key
     */
    static isCachedByKey(key) {
        return !!this._cache[key];
    };

    /**
     * Returns true if the bitmap is cached by path
     *
     * @static
     *
     * @param {String} path - Path of the cached bitmap
     * @param {Number} [hue] - Hue
     *
     * @see DKTools.PreloadManager.isCachedByPath
     *
     * @returns {Boolean} Bitmap is cached by path
     */
    static isCachedByPath(path, hue) {
        return this.isCachedByKey(this._generateKey(path, hue));
    };

    // release methods

    /**
     * Releases the bitmap from a cache by key
     * 
     * @static
     * 
     * @param {String} key - Key of the cached bitmap
     * 
     * @see DKTools.PreloadManager._generateCacheKey
     */
    static releaseBitmapByKey(key) {
        this._cache[key] = null;
    };

    /**
     * Releases the bitmap from a cache by path
     *
     * @static
     *
     * @param {String} path - Path of the cached bitmap
     * 
     * @see DKTools.PreloadManager.releaseByKey
     */
    static releaseBitmapByPath(path, hue) {
        this.releaseByKey(this._generateKey(path, hue));
    };

    // other methods

    /**
     * Processes the loading of a bitmap
     *
     * @private
     * @static
     * @param {Bitmap} bitmap - Bitmap
     */
    static _onBitmapLoad(bitmap) {
        this._loaded++;
        this._log('Loaded image: ' + bitmap.url);
        Graphics.updateLoading();
    };

    /**
     * Adds the object to preload queue
     * 
     * @static
     * 
     * @param {Object} - Object with parameters
     * 
     * @param {String} object.path - Path to file or directory
     * @param {Number} [object.hue] - Hue
     * @param {Boolean} [object.caching] - Caching
     */
    static preload(object) {
        if (!DKToolsParam.get('Preload Manager', 'Enabled') || !DKTools.IO.isLocalMode()) {
            return;
        }

        if (object instanceof Object && DKTools.Utils.isString(object.path)) {
            if (DKTools.IO.isDirectory(object.path)) {
                const directory = new DKTools.IO.Directory(object.path);
                const files = directory.getImageFiles({ sync: true }).data;

                _.forEach(files, function(file) {
                    this._queue.push({
                        path: file.getFullPath(),
                        hue: object.hue,
                        caching: object.caching
                    });
                }.bind(this));
            } else {
                this._queue.push(object);
            }
        }
    };

    /**
     * Starts the preloading
     * 
     * @static
     */
    static start() {
        this._loaded = 0;
        this._skipped = 0;
        this._total = this._queue.length;
        this._startTime = new Date();

        if (!DKToolsParam.get('Preload Manager', 'Enabled') || !DKTools.IO.isLocalMode()) {
            this._finish();
            return;
        }

        this._log('DKTools Preload Manager is running... \n' +
            'Total files to load: ' + this._total);

        const bitmaps = [];

        _.forEach(this._queue, function(data) {
            if (DKTools.IO.isFile(data.path)) {
                const file = new DKTools.IO.File(data.path);

                if (file.isImage()) {
                    const fullPath = file.getFullPath();

                    if (this.isCachedByPath(fullPath, data.hue)) {
                        this._skipped++;
                        this._log('Image already preloaded: ' + fullPath + '. Skipped...');
                        return;
                    }

                    const bitmap = DKTools.Utils.Bitmap.reserve({
                        folder: file.getPath(),
                        filename: file.getName(),
                        hue: data.hue
                    });

                    if (bitmap) {
                        if (data.caching) {
                            this._cache[this._generateKey(bitmap.url, data.hue)] = bitmap;
                        }

                        bitmaps.push(bitmap);
                    } else {
                        this._skipped++;
                        this._log('Cannot load an image: ' + fullPath + '. Skipped...');
                    }
                } else {
                    this._skipped++;
                    this._log('This is not an image: ' + file.getFullPath() + '. Skipped...');
                }
            } else {
                this._skipped++;
                this._log('This is not a file: ' + data.path + '. Skipped...');
            }
        }.bind(this));

        DKTools.Utils.Bitmap.reserveBitmaps(bitmaps, this._finish.bind(this), this._onBitmapLoad.bind(this));
    };

    /**
     * Finishes the preloading
     *
     * @private
     * @static
     * 
     * @see DKTools.PreloadManager.clearQueue
     */
    static _finish() {
        this._finishTime = new Date();

        this.clearQueue();
        this._log('Preloading complete! \n' +
            'Loaded/Skipped/Total: ' + this._loaded + '/' + this._skipped + '/' + this._total + '\n' +
            'Preloading time: ' + (this._finishTime - this._startTime) / 1000 + ' sec');
    };

};

// properties

Object.defineProperties(DKTools.PreloadManager, {

    /**
     * @private
     * @readonly
     * @type {Object[]}
     * @memberof DKTools.PreloadManager 
     */
    _queue: {
        value: [],
        writable: true
    },

    /**
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PreloadManager
     */
    _cache: {
        value: {},
        writable: true
    }

});





//===========================================================================
// DKTools.Audio
//===========================================================================

/**
 * Audio file class
 *
 * @class DKTools.Audio
 *
 * @memberof DKTools
 *
 * @param {DKTools.Audio | Object} object - DKTools.Audio or object with parameters
 *
 * @param {String} object.type - Type of the audio file (bgm, bgs, se, me)
 * @param {String} object.name - Name of the audio file
 * @param {Number} [object.volume] - Volume of the audio file
 * @param {Number} [object.pitch] - Pitch of the audio file
 * @param {Number} [object.pan] - Panorama of the audio file
 * @param {Boolean} [object.loop] - Looping of the audio file
 */
DKTools.Audio = class {

    constructor() {
        this.initialize.apply(this, arguments);
    };

    // initialize methods

    /**
     * @param {DKTools.Audio | Object} object - DKTools.Audio or object with parameters
     *
     * @param {String} object.type - Type of the audio file
     * @param {String} object.name - Name of the audio file
     * @param {Number} [object.volume=this.standardVolume()] - Volume of the audio file
     * @param {Number} [object.pitch=this.standardPitch()] - Pitch of the audio file
     * @param {Number} [object.pan=this.standardPan()] - Panorama of the audio file
     * @param {Boolean} [object.loop=this.standardLoop()] - Looping of the audio file
     */
    initialize(object) {
        object = object || {};

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._type = object.type.toLowerCase();

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._name = object.name;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._volume = (Number.isFinite(object.volume) ? object.volume : this.standardVolume());

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._pitch = (Number.isFinite(object.pitch) ? object.pitch : this.standardPitch());

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._pan = (Number.isFinite(object.pan) ? object.pan : this.standardPan());

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._loop = (DKTools.Utils.isBoolean(object.loop) ? object.loop : this.standardLoop());

        /**
         * @private
         * @readonly
         * @type {WebAudio}
         */
        this._buffer = this._createBuffer();

        /**
         * @private
         * @readonly
         * @type {Number | null}
         */
        this._pausePos = null;
    };

    // standard methods

    /**
     * Returns the standard volume of the audio file
     *
     * @returns {Number} Standard volume of the audio file
     */
    standardVolume() {
        return 90;
    };

    /**
     * Returns the standard pitch of the audio file
     *
     * @returns {Number} Standard pitch of the audio file
     */
    standardPitch() {
        return 100;
    };

    /**
     * Returns the standard panorama of the audio file
     *
     * @returns {Number} Standard panorama of the audio file
     */
    standardPan() {
        return 0;
    };

    /**
     * Returns the standard looping of the audio file
     *
     * @returns {Boolean} Standard looping of the audio file
     */
    standardLoop() {
        return this._type === 'bgm' || this._type === 'bgs';
    };

    // clone methods

    /**
     * Clones the audio file
     *
     * @returns {DKTools.Audio} Cloned audio file
     */
    clone() {
        return new DKTools.Audio(this);
    };

    // is methods

    /**
     * Returns true if the audio file is playing
     *
     * @see WebAudio.prototype.isPlaying
     *
     * @returns {Boolean} Audio file is playing
     */
    isPlaying() {
        return this._buffer.isPlaying();
    };

    /**
     * Returns true if the audio file is paused
     *
     * @returns {Boolean} Audio file is paused
     */
    isPaused() {
        return !this.isPlaying() && this._pausePos != null;
    };

    // audio methods

    /**
     * Plays the audio file
     *
     * @param {Number} [pos = 0] - Playback position
     *
     * @see WebAudio.prototype.play
     */
    play(pos) {
        this._buffer.play(this._loop, pos || 0);
        this._updateBufferParameters();

        this._pausePos = null;
    };

    /**
     * Pauses the audio file
     */
    pause() {
        if (this.isPlaying()) {
            this._pausePos = this.seek();
            this.stop();
        }
    };

    /**
     * Continues playing the audio file
     */
    resume() {
        if (this.isPaused()) {
            this.play(this._pausePos);
        }
    };

    /**
     * Stops the audio file
     *
     * @see WebAudio.prototype.stop
     */
    stop() {
        if (this.isPlaying()) {
            this._buffer.stop();
        }
    };

    /**
     * Returns the current position of the audio file
     *
     * @see WebAudio.prototype.seek
     *
     * @returns {Number} Current position of the audio file
     */
    seek() {
        return this._buffer.seek();
    };

    /**
     * Performs the audio file fade-in
     *
     * @param {Number} [duration=0] - Fade-in time in seconds
     *
     * @see WebAudio.prototype.fadeIn
     */
    fadeIn(duration) {
        this._buffer.fadeIn(duration || 0);
    };

    /**
     * Performs the audio file fade-out
     *
     * @param {Number} [duration=0] - Fade-out time in seconds
     *
     * @see WebAudio.prototype.fadeOut
     */
    fadeOut(duration) {
        this._buffer.fadeOut(duration || 0);
    };

    // other methods

    /**
     * Updates the buffer parameters (volume, pitch and panorama)
     *
     * @private
     */
    _updateBufferParameters() {
        const buffer = this._buffer;
        let configVolume = AudioManager[this._type + 'Volume'];
        
        if (!Number.isFinite(configVolume)) {
            configVolume = 100;
        }

        buffer.volume = configVolume * this._volume / 10000;
        buffer.pitch = this._pitch / 100;
        buffer.pan = this._pan / 100;
    };

    /**
     * Creates the audio buffer
     * Returns the created buffer
     *
     * @version 3.0.0
     * @private
     * @returns {WebAudio} Created buffer
     */
    _createBuffer() {
        return AudioManager.createBuffer(this._type, this._name);
    };

    /**
     * Returns true if the audio files objects are equal
     *
     * @param {DKTools.Audio | Object} object - DKTools.Audio or object with parameters
     *
     * @param {String} object.type - Type of the audio file
     * @param {String} object.name - Name of the audio file
     * @param {Number} object.volume - Volume of the audio file
     * @param {Number} object.pitch - Pitch of the audio file
     * @param {Number} object.pan - Panorama of the audio file
     * @param {Boolean} object.loop - Looping of the audio file
     *
     * @returns {Boolean} Audio files objects are equal
     */
    equals(object) {
        if (!object) {
            return false;
        }

        return this._type === object.type && this._name === object.name &&
            this._volume === object.volume && this._pitch === object.pitch &&
            this._pan === object.pan && this._loop === object.loop;
    };
    
};

// properties

Object.defineProperties(DKTools.Audio.prototype, {

    /**
     * Type of the audio file
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Audio.prototype
     */
    type: {
        get: function() {
            return this._type;
        },
        configurable: true
    },

    /**
     * Name of the audio file
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Audio.prototype
     */
    name: {
        get: function() {
            return this._name;
        },
        configurable: true
    },

    /**
     * Volume of the audio file
     *
     * @type {Number}
     * @memberof DKTools.Audio.prototype
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
     * Pitch of the audio file
     *
     * @type {Number}
     * @memberof DKTools.Audio.prototype
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
     * Panorama of the audio file
     *
     * @type {Number}
     * @memberof DKTools.Audio.prototype
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
     * Looping of the audio file
     *
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Audio.prototype
     */
    loop: {
        get: function() {
            return this._loop;
        },
        configurable: true
    },

    /**
     * Buffer
     *
     * @readonly
     * @type {WebAudio}
     * @memberof DKTools.Audio.prototype
     */
    buffer: {
        get: function() {
            return this._buffer;
        },
        configurable: true
    },

    /**
     * Current position of the audio file
     *
     * @type {Number}
     * @memberof DKTools.Audio.prototype
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





//===========================================================================
// DKTools.Event
//===========================================================================

/**
 * Event class
 *
 * @class DKTools.Event
 *
 * @memberof DKTools
 *
 * @param {Object} [object] - Parameters
 *
 * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - Target of the event
 * @param {String} [object.type] - Type of the event
 * @param {Number} [object.repeatTime] - Time of one repeat
 * @param {Number} [object.repeats] - Amount of repeats
 * @param {Number} [object.remainingPauseTime] - Remaining time of pause
 * @param {Function} [object.onStart] - Handler of the event start
 * @param {Function} [object.onUpdate] - Handler of the event update
 * @param {Function} [object.onPause] - Handler of the event pause
 * @param {Function} [object.onReset] - Handler of the event reset
 * @param {Function} [object.onRepeat] - Handler of the event repeat
 * @param {Function} [object.onSuccess] - Handler of the event success
 * @param {Function} [object.onFail] - Handler of the event fail
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Event = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }
    
    // initialize methods

    /**
     * Initializes the event
     * 
     * @param {Object} [object] - Parameters
     *
     * @param {DKTools.Sprite | DKTools.Window | *} [object.target] - Target of the event
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.repeatTime] - Time of one repeat
     * @param {Number} [object.repeats] - Amount of repeats
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     */
    initialize(object) {
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
        this._repeats = (object.repeats == null ? -1 : object.repeats);

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._remainingPauseTime = object.remainingPauseTime || 0;

        /**
         * @private
         * @readonly
         * @type {Function | null}
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
         * @type {Function | null}
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
        this._onFail = object.onFail;

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._started = false;

        this._resetRemainingTime();
        this._resetRemainingRepeats();
    };

    // _clear methods

    /**
     * Clears the remaining time of the event repeat
     *
     * @since 1.1.0
     * @private
     */
    _clearRemainingTime() {
        this._remainingTime = 0;
    };

    /**
     * Clears the remaining time of the event repeat
     *
     * @since 1.1.0
     * @private
     */
    _clearRemainingRepeats() {
        this._remainingRepeats = 0;
    };

    // _reset methods

    /**
     * Resets the remaining time of the event repeat
     *
     * @private
     */
    _resetRemainingTime() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._remainingTime = this._repeatTime;
    };

    /**
     * Resets the remaining amount of repeats of the event
     *
     * @private
     */
    _resetRemainingRepeats() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._remainingRepeats = this._repeats;
    };

    // _can methods

    /**
     * Returns true if can call on start handler
     *
     * @private
     * @returns {Boolean} Can call on start handler
     */
    _canCallOnStartHandler() {
        return this.hasOnStartHandler() && !this.isStarted();
    };

    /**
     * Returns true if can call on update handler
     *
     * @private
     * @returns {Boolean} Can call on update handler
     */
    _canCallOnUpdateHandler() {
        return this.hasOnUpdateHandler() && this.isUpdated();
    };

    /**
     * Returns true if can call on pause handler
     *
     * @private
     * @returns {Boolean} Can call on pause handler
     */
    _canCallOnPauseHandler() {
        return this.hasOnPauseHandler() && this.isPaused();
    };

    /**
     * Returns true if can call on reset handler
     *
     * @private
     * @returns {Boolean} Can call on reset handler
     */
    _canCallOnResetHandler() {
        return this.hasOnResetHandler();
    };

    /**
     * Returns true if can call on repeat handler
     *
     * @private
     * @returns {Boolean} Can call on repeat handler
     */
    _canCallOnRepeatHandler() {
        return this.hasOnRepeatHandler();
    };

    /**
     * Returns true if can call on success handler
     *
     * @private
     * @returns {Boolean} Can call on success handler
     */
    _canCallOnSuccessHandler() {
        return this.hasOnSuccessHandler() && this.isFinished();
    };

    /**
     * Returns true if can call on failure handler
     *
     * @private
     * @returns {Boolean} Can call on failure handler
     */
    _canCallonFailHandler() {
        return this.hasonFailHandler();
    };

    // _call methods

    /**
     * Calls on start handler
     *
     * @private
     */
    _callOnStartHandler() {
        if (this._canCallOnStartHandler()) {
            this._onStart(this);
        }

        this._started = true;
    };

    /**
     * Calls on update handler
     *
     * @private
     */
    _callOnUpdateHandler() {
        if (this._canCallOnUpdateHandler()) {
            this._onUpdate(this);
        }
    };

    /**
     * Calls on pause handler
     *
     * @private
     */
    _callOnPauseHandler() {
        if (this._canCallOnPauseHandler()) {
            this._onPause(this);
        }
    };

    /**
     * Calls on reset handler
     *
     * @private
     */
    _callOnResetHandler() {
        if (this._canCallOnResetHandler()) {
            this._onReset(this);
        }
    };

    /**
     * Calls on repeat handler
     *
     * @private
     */
    _callOnRepeatHandler() {
        if (this._canCallOnRepeatHandler()) {
            this._onRepeat(this);
        }
    };

    /**
     * Calls on success handler
     *
     * @private
     *
     * @param {Boolean} [forcedSuccess=false]
     */
    _callOnSuccessHandler(forcedSuccess) {
        if (this._canCallOnSuccessHandler() || forcedSuccess) {
            this._onSuccess(this);
        }
    };

    /**
     * Calls on failure handler
     *
     * @private
     */
    _callonFailHandler() {
        if (this._canCallonFailHandler()) {
            this._onFail(this);
        }
    };

    // get methods

    /**
     * Returns the elapsed time
     *
     * @returns {Number} Elapsed time
     */
    getElapsedTime() {
        return this._repeatTime - this._remainingTime;
    };

    /**
     * Returns the elapsed repeats
     *
     * @returns {Number} Elapsed repeats
     */
    getElapsedRepeats() {
        return this._repeats - this._remainingRepeats;
    };

    // has methods

    /**
     * Returns true if the event has the target
     *
     * @returns {Boolean} Event has the target
     */
    hasTarget() {
        return !!this._target;
    };

    /**
     * Returns true if the event has the type
     *
     * @returns {Boolean} Event has the type
     */
    hasType() {
        return !!this._type;
    };

    /**
     * Returns true if the event has the on start handler
     *
     * @returns {Boolean} Event has the on start handler
     */
    hasOnStartHandler() {
        return !!this._onStart;
    };

    /**
     * Returns true if the event has the on update handler
     *
     * @returns {Boolean} Event has the on update handler
     */
    hasOnUpdateHandler() {
        return !!this._onUpdate;
    };

    /**
     * Returns true if the event has the on pause handler
     *
     * @returns {Boolean} Event has the on pause handler
     */
    hasOnPauseHandler() {
        return !!this._onPause;
    };

    /**
     * Returns true if the event has the on reset handler
     *
     * @returns {Boolean} Event has the on reset handler
     */
    hasOnResetHandler() {
        return !!this._onReset;
    };

    /**
     * Returns true if the event has the on repeat handler
     *
     * @returns {Boolean} Event has the on repeat handler
     */
    hasOnRepeatHandler() {
        return !!this._onRepeat;
    };

    /**
     * Returns true if the event has the on success handler
     *
     * @returns {Boolean} Event has the on success handler
     */
    hasOnSuccessHandler() {
        return !!this._onSuccess;
    };

    /**
     * Returns true if the event has the on failure handler
     *
     * @returns {Boolean} Event has the on failure handler
     */
    hasonFailHandler() {
        return !!this._onFail;
    };

    // set methods

    /**
     * Sets the target
     *
     * @param {DKTools.Sprite | DKTools.Window | *} target - Target
     */
    setTarget(target) {
        this._target = target;
    };

    /**
     * Sets the on start handler
     *
     * @param {Function} handler - Handler
     */
    setOnStartHandler(handler) {
        this._onStart = handler;
    };

    /**
     * Sets the on update handler
     *
     * @param {Function} handler - Handler
     */
    setOnUpdateHandler(handler) {
        this._onUpdate = handler;
    };

    /**
     * Sets the on pause handler
     *
     * @param {Function} handler - Handler
     */
    setOnPauseHandler(handler) {
        this._onPause = handler;
    };

    /**
     * Sets the on reset handler
     *
     * @param {Function} handler - Handler
     */
    setOnResetHandler(handler) {
        this._onReset = handler;
    };

    /**
     * Sets the on repeat handler
     *
     * @param {Function} handler - Handler
     */
    setOnRepeatHandler(handler) {
        this._onRepeat = handler;
    };

    /**
     * Sets the on success handler
     *
     * @param {Function} handler - Handler
     */
    setOnSuccessHandler(handler) {
        this._onSuccess = handler;
    };

    /**
     * Sets the on failuer handler
     *
     * @param {Function} handler - Handler
     */
    setonFailHandler(handler) {
        this._onFail = handler;
    };

    // other methods

    /**
     * Pauses the event
     *
     * @param {Number} [duration=-1] - Duration of pause
     */
    pause(duration) {
        this._remainingPauseTime = duration || -1;
    };

    /**
     * Resumes the event
     */
    resume() {
        this._remainingPauseTime = 0;
    };

    /**
     * Removes the event
     */
    remove() {
        if (this.hasTarget()) {
            this._target.removeEvent(this);
        }
    };

    /**
     * Clones the event
     *
     * @returns {DKTools.Event | DKTools.Animation | DKTools.Animation.Action} Cloned event
     */
    clone() {
        return new (this.constructor)(this);
    };

    /**
     * Resets the event
     *
     * @version 1.1.0
     */
    reset() {
        this._resetRemainingTime();
        this._resetRemainingRepeats();
        this._callOnResetHandler();
    };

    /**
     * Repeats the event
     */
    repeat() {
        if (this._remainingRepeats > 0) {
            this._remainingRepeats--;
        }

        this._resetRemainingTime();
        this._callOnRepeatHandler();
    };

    /**
     * Finishes the event
     *
     * @version 1.1.0
     * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
     */
    finish(forcedSuccess) {
        if (this.isFinished() || forcedSuccess) {
            this._callOnSuccessHandler(forcedSuccess);
        } else {
            this._callonFailHandler();
        }

        this._clearRemainingTime();
        this._clearRemainingRepeats();
    };

    /**
     * Stops the event
     *
     * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
     */
    stop(forcedSuccess) {
        this.finish(forcedSuccess);
        this.reset();
    };

    // is methods

    /**
     * Returns true if the event is started
     *
     * @returns {Boolean} Event is started
     */
    isStarted() {
        return this._started;
    };

    /**
     * Returns true if the event is updated
     *
     * @returns {Boolean} Event is updated
     */
    isUpdated() {
        return this.isStarted() && !this.isPaused() && !this.isFinished();
    };

    /**
     * Returns true if the event if finished
     *
     * @returns {Boolean} Event if finished
     */
    isFinished() {
        return this._remainingTime === 0 && this._remainingRepeats === 0;
    };

    /**
     * Returns true if the event is paused
     *
     * @returns {Boolean} Event is paused
     */
    isPaused() {
        return this._remainingPauseTime !== 0;
    };

    /**
     * Returns true if the event is animation
     *
     * @returns {Boolean} Event is animation
     */
    isAnimation() {
        return this instanceof DKTools.Animation;
    };

    /**
     * Returns true if the event is action of an animation
     *
     * @returns {Boolean} Event is action of an animation
     */
    isAnimationAction() {
        return this instanceof DKTools.Animation.Action;
    };

    // add methods

    /**
     * Adds the remaining time to the event
     *
     * @param {Number} time - Time
     */
    addRemainingTime(time) {
        this._remainingTime += time;
    };

    /**
     * Adds the remaining repeats to the event
     *
     * @param {Number} repeats - Repeats
     */
    addRemainingRepeats(repeats) {
        this._remainingRepeats += repeats;
    };

    /**
     * Adds the remaining pause time to the event
     *
     * @param {Number} time - Time
     */
    addRemainingPauseTime(time) {
        this._remainingPauseTime += time;
    };

    // _update methods

    /**
     * Updates the remaining pause time
     *
     * @private
     */
    _updateRemainingPauseTime() {
        if (this._remainingPauseTime > 0) {
            this._remainingPauseTime--;
        }
    };

    /**
     * Updates the pause
     *
     * @private
     */
    _updatePause() {
        this._updateRemainingPauseTime();
        this._callOnPauseHandler();
    };

    /**
     * Updates the remaining time
     *
     * @private
     */
    _updateRemainingTime() {
        if (this._remainingTime > 0) {
            this._remainingTime--;
        }
    };

    /**
     * Updates the remaining repeats
     *
     * @private
     */
    _updateRemainingRepeats() {
        if (!this.isFinished()) {
            if (this._remainingTime === 0) {
                this.repeat();
            } else {
                this._updateRemainingTime();
            }
        }
    };

    /**
     * Updates the event
     *
     * @private
     */
    _update() {
        this._callOnUpdateHandler();
        this._updateRemainingRepeats();
    };

    // update methods

    /**
     * Updates the event
     */
    update() {
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
    
};

// properties

Object.defineProperties(DKTools.Event.prototype, {

    /**
     * Target of the event
     *
     * @readonly
     * @type {DKTools.Sprite | DKTools.Window | *}
     * @memberof DKTools.Event.prototype
     */
    target: {
        get: function() {
            return this._target;
        },
        configurable: true
    },

    /**
     * Type of the event
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Event.prototype
     */
    type: {
        get: function() {
            return this._type;
        },
        configurable: true
    },

    /**
     * Time of one repeat
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Event.prototype
     */
    repeatTime: {
        get: function() {
            return this._duration;
        },
        configurable: true
    },

    /**
     * Amount of repeats
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Event.prototype
     */
    repeats: {
        get: function() {
            return this._repeats;
        },
        configurable: true
    },

    /**
     * Remaining time of current repeat
     *
     * @type {Number}
     * @memberof DKTools.Event.prototype
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
     * Remaining amount of repeats
     *
     * @type {Number}
     * @memberof DKTools.Event.prototype
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
     * Remaining time of pause
     *
     * @type {Number}
     * @memberof DKTools.Event.prototype
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
     * Handler of the event start
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onStart: {
        get: function() {
            return this._onStart;
        },
        configurable: true
    },

    /**
     * Handler of the event update
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onUpdate: {
        get: function() {
            return this._onUpdate;
        },
        configurable: true
    },

    /**
     * Handler of the event pause
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onPause: {
        get: function() {
            return this._onPause;
        },
        configurable: true
    },

    /**
     * Handler of the event reset
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onReset: {
        get: function() {
            return this._onReset;
        },
        configurable: true
    },

    /**
     * Handler of the event repeat
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onRepeat: {
        get: function() {
            return this._onRepeat;
        },
        configurable: true
    },

    /**
     * Handler of the event success
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onSuccess: {
        get: function() {
            return this._onSuccess;
        },
        configurable: true
    },

    /**
     * Handler of the event fail
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Event.prototype
     */
    onFail: {
        get: function() {
            return this._onFail;
        },
        configurable: true
    }

});






//===========================================================================
// DKTools.Animation
//===========================================================================

/**
 * Animation class
 *
 * @class DKTools.Animation
 * @extends DKTools.Event
 *
 * @override
 *
 * @memberof DKTools
 *
 * @param {DKTools.Animation | Object} object - Animation or object with parameters
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Animation = class extends DKTools.Event {

    /**
     * @override
     *
     * @param {DKTools.Animation | Object} [object] - DKTools.Animation or parameters
     *
     * @see DKTools.Event.prototype.initialize
     */
    initialize(object) {

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
     * Returns true if can update the action
     *
     * @private
     * @returns {Boolean} Can update the action
     */
    _canUpdateAction(action) {
        return _.inRange(this.getElapsedTime(), action.startTime, action.endTime);
    };

    // has methods

    /**
     * Returns true if the animation has the action
     *
     * @param {DKTools.Animation.Action} action - Action
     * @returns {Boolean} Animation has the action
     */
    hasAction(action) {
        return DKTools.Utils.Array.contains(this._actions, action);
    };

    /**
     * Returns true if the animation has the actions
     *
     * @returns {Boolean} Animation has the actions
     */
    hasActions() {
        return !DKTools.Utils.Array.isEmpty(this._actions);
    };

    // is methods

    /**
     * Returns true if the animation if finished
     *
     * @version 1.1.0
     * @override
     * @returns {Boolean} Animation if finished
     */
    isFinished() {
        return DKTools.Event.prototype.isFinished.call(this) || !this.hasActions();
    };

    /**
     * Returns true if the action is updated
     *
     * @param {DKTools.Animation.Action} action - Action
     * @returns {Boolean} Action is updated
     */
    isActionUpdated(action) {
        return action.isStarted() && !action.isPaused() && this._canUpdateAction(action);
    };

    /**
     * Returns true if the action is finished
     *
     * @param {DKTools.Animation.Action} action - Action
     * @returns {Boolean} Action is finished
     */
    isActionFinished(action) {
        return action.isStarted() && !action.isPaused() && this.getElapsedTime() >= action.endTime;
    };

    // other methods

    /**
     * Removes the action
     *
     * @param {DKTools.Animation.Action} action - Action
     */
    removeAction(action) {
        if (this.hasAction(action)) {
            DKTools.Utils.Array.remove(this._actions, action);
        }
    };

    /**
     * Resets the animation
     *
     * @override
     */
    reset() {
        this.resetActions();
        DKTools.Event.prototype.reset.call(this);
    };

    /**
     * Repeats the animation
     *
     * @override
     */
    repeat() {
        this.repeatActions();
        DKTools.Event.prototype.repeat.call(this);
    };

    /**
     * Resets the actions
     */
    resetActions() {
        _.forEach(this._actions, function(action) {
            action.reset();
        });
    };

    /**
     * Repeats the actions
     */
    repeatActions() {
        _.forEach(this._actions, function(action) {
            action.repeat();
        });
    };

    // add methods

    /**
     * Adds the action
     *
     * @param {DKTools.Animation.Action} action - Action
     */
    addAction(action) {
        if (!action) {
            return;
        }

        if (!Number.isFinite(action.startTime)) {
            action.startTime = 0;
        }

        if (!Number.isFinite(action.endTime)) {
            action.endTime = this._repeatTime;
        }

        action.setAnimation(this);

        this._actions.push(action);
    };

    /**
     * Adds the actions
     *
     * @param {DKTools.Animation.Action[]} actions - Actions
     */
    addActions(actions) {
        _.forEach(actions, this.addAction.bind(this));
    };

    // _update methods

    /**
     * Updates the action
     *
     * @version 1.1.0
     * @private
     * @param {DKTools.Animation.Action} action - Action
     */
    _updateAction(action) {
        if (this._canUpdateAction(action)) {
            action.update();
        } else if (this.getElapsedTime() === action.endTime && this.isActionFinished(action)) {
            action.finish();
        }
    };

    /**
     * Updates the actions
     *
     * @private
     */
    _updateActions() {
        _.forEach(this._actions, this._updateAction.bind(this));
    };

    /**
     * Updates the animation
     *
     * @private
     * @override
     */
    _update() {
        this._updateActions();
        DKTools.Event.prototype._update.call(this);
    };

};

// properties

Object.defineProperties(DKTools.Animation.prototype, {

    /**
     * Actions of the animation
     *
     * @readonly
     * @type {Array}
     * @memberof DKTools.Animation.prototype
     */
    actions: {
        get: function() {
            return this._actions;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.Animation.Action
//===========================================================================

/**
 * Animation action class
 *
 * @class DKTools.Animation.Action
 * @extends DKTools.Event
 *
 * @override
 *
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 *
 * @see DKTools.Event.prototype.initialize
 */
DKTools.Animation.Action = class extends DKTools.Event {

    // actions

    /**
     * Creates an action to rotate a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Rotation(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const rotation = (this._data - target.rotation) / remainingTime;
            const newRotation = target.rotation + rotation;
            target.setRotation(newRotation);
        }.bind(action));

        return action;
    };

    /**
     * Creates an action to change the opacity of a target
     * Returns the action
     * Only for sprites
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static OpacitySprite(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const opacity = (this._data - target.opacity) / remainingTime;
            const newOpacity = target.opacity + opacity;
            target.setOpacity(newOpacity);
        }.bind(action));

        return action;
    };

    /**
     * Creates an action to change the opacity of a target
     * Returns the action
     * Only for windows
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static OpacityWindow(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
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
     * Creates an action to change the tint of a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Tint(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const tint = (this._data - target.tint) / remainingTime;
            const newTint = target.tint + tint;
            target.setTint(newTint);
        }.bind(action));

        return action;
    };

    /**
     * Creates an action to play a sound
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Sound(object) {
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
     * Creates an action to move a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Move(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
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
     * Creates an action to change the scale of a target
     * Returns the action
     * Only for sprites
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Scale(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
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
     * Creates an action to change the pivot of a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Pivot(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
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
     * Creates an action to change the skew of a target
     * Returns the action
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Skew(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
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
     * Creates an action to change the frame of a target
     * Returns the action
     * Only for sprites
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Frame(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
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
     * Creates an action to change the anchor of a target
     * Returns the action
     * Only for sprites
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Anchor(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
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
     * Creates an action to change the tone of a target
     * Returns the action
     * Only for windows
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Tone(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
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

    /**
     * Creates an action to open a target
     * Returns the action
     * Only for windows
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Open(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const openness = (255 - target.openness) / remainingTime;
            const newOpennes = target.openness + openness;
            target.openness = newOpennes;
        }.bind(action));

        return action;
    };

    /**
     * Creates an action to close a target
     * Returns the action
     * Only for windows
     *
     * @static
     *
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     *
     * @see DKTools.Animation.Action.prototype.initialize
     *
     * @returns {DKTools.Animation.Action} Action
     */
    static Close(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this._target;

            const openness = -target.openness / remainingTime;
            const newOpennes = target.openness + openness;
            target.openness = newOpennes;
        }.bind(action));

        return action;
    };

    // initialize methods

    /**
     * @override
     *
     * @param {Object} object - Parameters
     *
     * @param {Number} object.startTime - Start time of the action
     * @param {Number} object.endTime - End time of the action
     * @param {*} object.data - Data of the action
     *
     * @see DKTools.Event.prototype.initialize
     */
    initialize(object) {
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

    // set methods

    /**
     * Sets the animation
     *
     * @param {DKTools.Animation} animation - Animation
     */
    setAnimation (animation) {
        this._animation = animation;
    };

    // get methods

    /**
     * Returns the elapsed time
     *
     * @override
     * @returns {Number} Elapsed time
     */
    getElapsedTime() {
        return this._animation.getElapsedTime() - this._startTime;
    };

    /**
     * Returns the remaining time
     *
     * @override
     * @returns {Number} Remaining time
     */
    getRemainingTime() {
        return this._endTime - this._animation.getElapsedTime();
    };

    // is methods

    /**
     * Returns true if the action is updated
     *
     * @override
     * @returns {Boolean} Action is updated
     */
    isUpdated() {
        return this._animation.isActionUpdated(this);
    };

    /**
     * Returns true if the action if finished
     *
     * @override
     * @returns {Boolean} Action if finished
     */
    isFinished() {
        return this._animation.isActionFinished(this);
    };

    // other methods

    /**
     * Removes the action
     *
     * @override
     */
    remove() {
        this._animation.removeAction(this);
    };

    /**
     * Resets the action
     *
     * @override
     */
    reset() {
        this._callOnResetHandler();
    };

    /**
     * Repeats the action
     *
     * @override
     */
    repeat() {
        this._callOnRepeatHandler();
    };

};

// properties

Object.defineProperties(DKTools.Animation.Action.prototype, {

    /**
     * Animation
     *
     * @readonly
     * @type {DKTools.Animation}
     * @memberof DKTools.Animation.Action.prototype
     */
    animation: {
        get: function() {
            return this._animation;
        },
        configurable: true
    },

    /**
     * Start time of the action
     *
     * @type {Number}
     * @memberof DKTools.Animation.Action.prototype
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
     * End time of the action
     *
     * @type {Number}
     * @memberof DKTools.Animation.Action.prototype
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
     * Data of the action
     *
     * @readonly
     * @type {*}
     * @memberof DKTools.Animation.Action.prototype
     */
    data: {
        get: function() {
            return this._data;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.OptionManager
//===========================================================================

/**
 * Option manager class
 *
 * @class DKTools.OptionManager
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @see DKTools.OptionManager.prototype.initialize
 */
DKTools.OptionManager = class {

    constructor() {
        this.initialize.apply(this, arguments);
    };

    // initialize methods

    /**
     * Initializes the option manager
     */
    initialize() {
        this.clear();
    };

    // is methods

    /**
     * Returns true if the option is enabled
     *
     * @param {String} option - Name of the option
     * 
     * @see DKTools.Utils.Array.contains
     * 
     * @returns {Boolean} Option is enabled
     */
    isOptionEnabled(option) {
        return DKTools.Utils.Array.contains(this._options, option);
    };

    /**
     * Returns conjunction of the options
     *
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     * 
     * @returns {Boolean} Conjunction of the options
     */
    isOptionsEnabled(object) {
        const options = (arguments.length > 1 ? arguments : object);

        return _.every(options, this.isOptionEnabled.bind(this));
    };

    /**
     * Returns disjunction of the options
     * 
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     *
     * @returns {Boolean} Disjunction of the options
     */
    isSomeOptionsEnabled(object) {
        const options = (arguments.length > 1 ? arguments : object);
      
        return _.some(options, this.isOptionEnabled.bind(this));
    };

    /**
     * Returns true if the option is disabled
     *
     * @param {String} option - Name of the option
     * 
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     * 
     * @returns {Boolean} Option is disabled
     */
    isOptionDisabled(option) {
        return !this.isOptionEnabled(option);
    };

    /**
     * Returns conjunction of the options
     *
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.isOptionDisabled
     * 
     * @returns {Boolean} Conjunction of the options
     */
    isOptionsDisabled(object) {
        const options = (arguments.length > 1 ? arguments : object);

        return _.every(options, this.isOptionDisabled.bind(this));
    };

    /**
     * Returns disjunction of the options
     * 
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isOptionDisabled
     *
     * @returns {Boolean} Disjunction of the options
     */
    isSomeOptionsDisabled(object) {
        const options = (arguments.length > 1 ? arguments : object);

        return _.some(options, this.isOptionDisabled.bind(this));
    };

    /**
     * Returns true if some option is enabled
     * 
     * @returns {Boolean} Some option is enabled
     */
    isSomeOptionEnabled() {
        return this._options.length > 0;
    };

    // listener methods

    /**
     * Adds the listener of change of the option
     *
     * @param {String} option - Name of the option
     * @param {Function} listener - Listener
     */
    addOptionChangeListener(option, listener) {
        if (!this._optionChangeListeners[option]) {
            this._optionChangeListeners[option] = [];
        }

        this._optionChangeListeners[option].push(listener);
    };

    /**
     * Removes the listener of change of the option
     * 
     * @param {String} option - Name of the option
     * @param {Function} listener - Listener
     * 
     * @see DKTools.Utils.Array.remove
     */
    removeOptionChangeListener(option, listener) {
        DKTools.Utils.Array.remove(this._optionChangeListeners[option], listener);
    };

    // enable methods

    /**
     * Turns on the option
     *
     * @param {String} option - Name of the option
     */
    enableOption(option) {
        if (this.isOptionDisabled(option)) {
            this._options.push(option);
            this._onOptionChange(option, true);
        }
    };

    /**
     * Turns on the options
     *
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.enableOption
     */
    enableOptions(object) {
        const options = (arguments.length > 1 ? arguments : object);

        _.forEach(options, this.enableOption.bind(this));
    };

    // disable methods

    /**
     * Turns off the option
     *
     * @param {String} option - Name of the option
     */
    disableOption(option) {
        if (this.isOptionEnabled(option)) {
            DKTools.Utils.Array.remove(this._options, option);
            this._onOptionChange(option, false);
        }
    };

    /**
     * Turns off the options
     *
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.disableOption
     */
    disableOptions(object) {
        const options = (arguments.length > 1 ? arguments : object);

        _.forEach(options, this.disableOption.bind(this));
    };

    // switch methods

    /**
     * Switches the option
     *
     * @param {String} option - Name of the option
     * 
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     * @see DKTools.OptionManager.prototype.disableOption
     * @see DKTools.OptionManager.prototype.enableOption
     */
    switchOption(option) {
        if (this.isOptionEnabled(option)) {
            this.disableOption(option);
        } else {
            this.enableOption(option);
        }
    };

    /**
     * Switches the options
     *
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.switchOption
     */
    switchOptions(object) {
        const options = (arguments.length > 1 ? arguments : object);

        _.forEach(options, this.switchOption.bind(this));
    };

    // other methods

    /**
     * Processes the change of the option
     *
     * @private
     * 
     * @param {String} option - Name of the option
     * @param {Boolean} value - Value of the option
     */
    _onOptionChange(option, value) {
        _.forEach(this._optionChangeListeners[option], function(listener) {
            listener(option, value);
        });
    };

    /**
     * Clears the manager
     */
    clear() {
        /**
         * @private
         * @readonly
         * @type {String[]}
         */
        this._options = [];

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._optionChangeListeners = {};
    };

    /**
     * Clones the manager
     * 
     * @param {Boolean} [cloneListeners=false] - Clone the option change listeners
     * 
     * @returns {DKTools.OptionManager} Cloned manager
     */
    clone(cloneListeners) {
        const optionManager = new DKTools.OptionManager();

        optionManager.enableOptions(this._options);

        if (cloneListeners) {
            _.forEach(this._optionChangeListeners, function(listeners, option) {
                _.forEach(listeners, function(listener) {
                    optionManager.addOptionChangeListener(option, listener);
                });
            });
        }

        return optionManager;
    };

    /**
     * @param {DKTools.OptionManager} optionManager - Option manager
     * 
     * @returns {Boolean} 
     */
    equals(optionManager) {
        return optionManager instanceof DKTools.OptionManager && _.isEqual(this._options, optionManager.options);
    };

};

// properties

Object.defineProperties(DKTools.OptionManager, {

    /**
     * Options
     *
     * @readonly
     * @type {String[]}
     * @memberof DKTools.OptionManager.prototype
     */
    options: {
        get: function() {
            return this._options;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.EventManager
//===========================================================================

/**
 * Event manager class
 *
 * @class DKTools.EventManager
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @see DKTools.EventManager.prototype.initialize
 */
DKTools.EventManager = class {

    constructor() {
        this.initialize.apply(this, arguments);
    };

    // initialize methods

    /**
     * Initializes the event manager
     *
     * @param {DKTools.Sprite | DKTools.Window | DKTools.Scene} target - Target
     */
    initialize(target) {

        /**
         * @private
         * @readonly
         * @type {DKTools.Sprite | DKTools.Window | DKTools.Scene}
         */
        this._target = target;

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._events = {};
    };

    // clear methods
    
    /**
     * Clears the events
     *
     * @param {String[] | String} [object] - Array with event types or event type
     */
    clearEvents(object) {
        if (object) {
            if (Array.isArray(object)) {
                _.forEach(object, function(type) {
                    this._events[type] = [];
                }.bind(this));
            } else { // object - String
                this._events[object] = [];
            }
        } else {
            this._events = {};
        }
    };

    // _check methods

    /**
     * Checks the event
     *
     * @private
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Boolean}
     */
    _checkEvent(event) {
        return event && !event.isFinished();
    };

    /**
     * Checks a container with the events and removes the completed events
     *
     * @private
     * @param {Array} container - Container for the events
     * @returns {Array} Filtered array
     */
    _checkEventsContainer(container) {
        return _.filter(container, this._checkEvent.bind(this));
    };

    /**
     * Checks the events
     *
     * @private
     */
    _checkEvents() {
        _.forEach(this._events, function(container, type) {
            this._events[type] = this._checkEventsContainer(container);
        }.bind(this));
    };

    // remove methods

    /**
     * Removes the event from a container
     * Returns true if the event was removed
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Boolean} Event was removed
     */
    removeEvent(event) {
        const index = this.getEventIndex(event);

        if (index >= 0) {
            const container = this.getEventsContainer(event);
            container[index] = null;
            return true;
        }

        return false;
    };

    // iterate methods

    /**
     * Performs a callback function for the events
     *
     * @param {String} type - Type of the events
     * @param {Function} callback - Event processing function
     */
    iterateEventsContainer(type, callback) {
        const container = this.getEventsContainerByType(type);
        _.forEach(container, callback);
    };

    // is methods

    /**
     * Checks the events for pause
     * Returns the conjunction of pauses of the events
     *
     * @param {String} type - Type of the events
     * @returns {Boolean} Conjunction of pauses of the events
     */
    isEventsPaused(type) {
        const container = this.getEventsContainerByType(type);

        return _.every(container, function(event) {
            return event.isPaused();
        });
    };

    // pause methods

    /**
     * Pauses the events
     *
     * @param {String} type - Type of the events
     * @param {Number} duration - Duration of the pause
     */
    pauseEvents(type, duration) {
        this.iterateEventsContainer(type, function(event) {
            event.pause(duration);
        });
    };

    // resume methods

    /**
     * Resumes the events
     *
     * @param {String} type - Type of the events
     */
    resumeEvents(type) {
        this.iterateEventsContainer(type, function(event) {
            event.resume();
        });
    };

    // finish methods

    /**
     * Finishes the events
     *
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
     *
     * @see DKTools.Event.prototype.finish
     */
    finishEvents(type, forcedSuccess) {
        this.iterateEventsContainer(type, function(event) {
            event.finish(forcedSuccess);
        });
    };

    // stop methods

    /**
     * Stops the events
     *
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
     *
     * @see DKTools.Event.prototype.stop
     */
    stopEvents(type, forcedSuccess) {
        this.iterateEventsContainer(type, function(event) {
            event.stop(forcedSuccess);
        });
    };

    // create methods

    /**
     * Creates a container for the events
     *
     * @param {String} type - Type of the events
     * @returns {Array} Container for the events
     */
    createEventsContainer (type) {
        this._events[type] = [];
        return this._events[type];
    };

    // get methods

    /**
     * Returns a container for the events by event type
     *
     * @param {String} type - Type of the events
     * @returns {Array} Container for the events
     */
    getEventsContainerByType (type) {
        return this._events[type] || this.createEventsContainer(type);
    };

    /**
     * Returns a container for the events by event
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Array} Container for the events
     */
    getEventsContainer(event) {
        return this.getEventsContainerByType(event.type);
    };

    /**
     * Returns an index of the event in its container
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Number} Index of the event in its container
     */
    getEventIndex(event) {
        return this.getEventsContainer(event).indexOf(event);
    };

    /**
     * Returns an array with the all events or events of a certain type
     *
     * @param {String} [type] - Type of the events
     * @returns {Array} Array with the events
     */
    getEvents(type) {
        if (type) {
            return this.getEventsContainerByType(type);
        }

        let events = [];

        _.forEach(this._events, function(container) {
            events = events.concat(container);
        });

        return events;
    };

    /**
     * Returns an array with the all animations or animations of a certain type
     *
     * @param {String} [type] - Type of animation
     * @returns {Array} Array with the animations
     */
    getAnimations(type) {
        return _.filter(this.getEvents(type), function(event) {
            return event instanceof DKTools.Animation;
        });
    };

    // has methods

    /**
     * Checks for existence of the event in the object
     * Returns true if the event exists
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @returns {Boolean} Event exists
     */
    hasEvent(event) {
        return this.getEventIndex(event) >= 0;
    };

    /**
     * Checks for existence of the events of a certain type
     * Returns true if the events exists
     *
     * @param {String} [type] - Type of the events
     * @returns {Boolean} Events exists
     */
    hasEvents(type) {
        return !DKTools.Utils.Array.isEmpty(this.getEvents(type));
    };

    /**
     * Checks for existence of the animation in the object
     * Returns true if the animation exists
     *
     * @param {DKTools.Animation} animation - Animation
     * @returns {Boolean} Animation exists
     */
    hasAnimation(animation) {
        return animation instanceof DKTools.Animation && this.getEventIndex(animation) >= 0;
    };

    /**
     * Checks for existence of the animations of a certain type
     * Returns true if the animations exists
     *
     * @param {String} [type] - Type of the animations
     * @returns {Boolean} Animations exists
     */
    hasAnimations(type) {
        return !DKTools.Utils.Array.isEmpty(this.getAnimations(type));
    };

    // add methods

    /**
     * Adds the event to container
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     */
    addEventToContainer(event) {
        if (!event) {
            return;
        }

        if (!event.hasTarget()) {
            event.setTarget(this._target);
        }

        const container = this.getEventsContainer(event);
        container.push(event);
    };

    /**
     * Adds the event
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.repeatTime] - Time of one repeat
     * @param {Number} [object.repeats] - Amount of repeats
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     *
     * @returns {DKTools.Event} Added event
     */
    addEvent(object) {
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
     * Adds the one time event
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     *
     * @see DKTools.Event
     * @see DKTools.EventManager.prototype.addEvent
     *
     * @returns {DKTools.Event} Added event
     */
    addOneTimeEvent(object) {
        object.repeatTime = 1;
        object.repeats = 0;

        return this.addEvent(object);
    };

    /**
     * Adds the animation
     *
     * @param {DKTools.Animation} animation - Animation to add
     */
    addAnimation(animation) {
        this.addEventToContainer(animation);
    };

    // update methods

    /**
     * Updates the event
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.Event.prototype.update
     */
    updateEvent(event) {
        if (event) {
            event.update();
        }
    };

    /**
     * Updates the events from container
     *
     * @param {String} type - Type of the events
     */
    updateEventsContainer(type) {
        this.iterateEventsContainer(type, this.updateEvent.bind(this));
    };

    /**
     * Updates the manager
     * 
     * @see DKTools.EventManager._checkEvents
     */
    update() {
        this._checkEvents();
    };

};

// properties

Object.defineProperties(DKTools.EventManager, {

    /**
     * Events
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.EventManager.prototype
     */
    events: {
        get: function() {
            return this._events;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.Unit
//===========================================================================

/**
 * Unit class
 * 
 * @class DKTools.Unit
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @see DKTools.Unit.prototype.initialize
 */
DKTools.Unit = class {

    constructor(object) {
        this.initialize.apply(this, arguments);
    };

    /**
     * Initializes the unit
     * 
     * @param {DKTools.Unit | Object} [object={}] - Parameters
     *
     * @param {DKTools.Unit | Number} object.source - Source
     * @param {Function | Number} [object.percents=100] - Percents
     * @param {Function} [object.getValueHandler] - Handler of the getValue
     */
    initialize(object) {
        object = object || {};

        this.setSource(object.source);
        this.setPercents(object.percents);
        this.setGetValueHandler(object.getValueHandler);
    };

    // get methods

    /**
     * @returns {Number}
     */
    getPercents() {
        if (DKTools.Utils.isFunction(this._percents)) {
            return this._percents(this) || 100;
        }

        return this._percents || 100;
    };

    /**
     * Returns the value of the unit
     * 
     * @see DKTools.Unit.prototype.getPercents
     * 
     * @returns {Number} Value of the unit
     */
    getValueBase() {
        const percents = this.getPercents() / 100;

        if (this._source instanceof DKTools.Unit) {
            return this._source.getValue() * percents;
        } else if (Number.isFinite(this._source)) {
            return this._source * percents;
        }

        return 0;
    };

    /**
     * Returns the value of the unit
     * 
     * @see DKTools.Unit.prototype.getValueBase
     * @see DKTools.Utils.isFunction
     * 
     * @returns {Number} Value of the unit
     */
    getValue() {
        let value;

        if (DKTools.Utils.isFunction(this._getValueHandler)) {
            value = this._getValueHandler(this);
        } else {
            value = this.getValueBase();
        }

        return value || 0;
    };

    // set methods

    /**
     * Sets the source
     * 
     * @param {DKTools.Unit | Number} source - Source
     */
    setSource(source) {
        /**
         * @private
         * @readonly
         * @type {DKTools.Unit | Number}
         */
        this._source = source;
    };

    /**
     * Sets the percents
     * 
     * @param {Function | Number} percents - Percents
     */
    setPercents(percents) {
        /**
         * @private
         * @readonly
         * @type {Function | Number}
         */
        this._percents = percents || 100;
    };

    /**
     * Sets the getValue handler
     * 
     * @param {Function} handler - Handler
     */
    setGetValueHandler(handler) {
        /**
         * @private
         * @readonly
         * @type {Function}
         */
        this._getValueHandler = getValueHandler;
    };

    // other methods

    /**
     * Returns value of the unit
     * 
     * @private
     * 
     * @param {DKTools.Unit | Number} unit - Unit
     * 
     * @see DKTools.Unit.prototype.getValue
     * 
     * @returns {Number} Value of the unit
     */
    _getValueFromUnit(unit) {
        if (unit instanceof DKTools.Unit) {
            return unit.getValue();
        }

        return unit;
    };

    /**
     * Clones the unit
     * 
     * @returns {DKTools.Unit} Cloned unit
     */
    clone() {
        return new (this.constructor)(this);
    };

    /**
     * Returns true if the unit equals unit (parameter)
     * 
     * @param {DKTools.Unit} unit - Unit to compare
     * @returns {Boolean} Unit equals unit (parameter)
     */
    equals(unit) {
        if (!unit) {
            return false;
        }

        return this._source === unit.source &&
                this._percents === unit.percents;
    };

    /**
     * Adds the unit (parameter) to this unit
     * Returns this unit
     * 
     * @param {DKTools.Unit | Number} unit - Unit
     * 
     * @see DKTools.Unit.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Unit} This unit
     */
    add(unit) {
        if (!unit) {
            return this;
        }

        const value = this._getValueFromUnit(unit);

        if (!value) {
            return this;
        }

        if (this._source instanceof DKTools.Unit) {
            this._source.add(value);
        } else {
            this._source += value;
        }

        return this;
    };

    /**
     * Subtracts the unit (parameter) to this unit
     * Returns this unit
     * 
     * @param {DKTools.Unit | Number} unit - Unit
     * 
     * @see DKTools.Unit.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Unit} This unit
     */
    sub(unit) {
        if (!unit) {
            return this;
        }

        const value = this._getValueFromUnit(unit);

        if (!value) {
            return this;
        }

        if (this._source instanceof DKTools.Unit) {
            this._source.rem(value);
        } else {
            this._source -= value;
        }
        
        return this;
    };

    /**
     * Multiplies the unit (parameter) to this unit
     * Returns this unit
     * 
     * @param {DKTools.Unit | Number} unit - Unit
     * 
     * @see DKTools.Unit.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Unit} This unit
     */
    mul(unit) {
        if (!unit) {
            return this;
        }

        const value = this._getValueFromUnit(unit);

        if (!value) {
            return this;
        }

        if (this._source instanceof DKTools.Unit) {
            this._source.mul(value);
        } else {
            this._source *= value;
        }

        return this;
    };

    /**
     * Divides the unit (parameter) to this unit
     * Returns this unit
     * 
     * @param {DKTools.Unit | Number} unit - Unit
     * 
     * @see DKTools.Unit.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Unit} This unit
     */
    div(unit) {
        if (!unit) {
            return this;
        }

        const value = this._getValueFromUnit(unit);

        if (!value) {
            return this;
        }

        if (this._source instanceof DKTools.Unit) {
            this._source.div(value);
        } else {
            this._source /= value;
        }

        return this;
    };

};

// properties

Object.defineProperties(DKTools.Unit.prototype, {

    /**
     * Source
     * 
     * @readonly
     * @type {DKTools.Unit | Number}
     * @memberof DKTools.Unit.prototype
     */
    source: {
        get: function() {
            return this._source
        },
        configurable: true
    },

    /**
     * Percents
     * 
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Unit.prototype
     */
    percents: {
        get: function() {
            return this._percents;
        },
        configurable: true
    },

    /**
     * Handler of the getValue
     * 
     * @readonly
     * @type {Function}
     * @memberof DKTools.Unit.prototype
     */
    getValueHandler: {
        get: function() {
            return this._getValueHandler;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.Unit.Property
//===========================================================================

/**
 * @class DKTools.Unit.Property
 * @extends DKTools.Unit
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @see DKTools.Unit.Property.prototype.initialize
 */
DKTools.Unit.Property = class extends DKTools.Unit {

    /**
     * Initializes the unit
     * 
     * @override
     *
     * @param {Object} [object={}] Parameters
     *
     * @param {String} object.property - Property
     *
     * @see DKTools.Unit.prototype.initialize
     */
    initialize(object) {
        object = object || {};

        DKTools.Unit.prototype.initialize.call(this, object);

        this.setProperty(object.property);
    };

    // get methods

    /**
     * Returns the value of the unit
     * 
     * @override
     * 
     * @see DKTools.Unit.Property.prototype.getPercents
     * 
     * @returns {Number} Value of the unit
     */
    getValueBase() {
        if (!(this._source instanceof Object)) {
            return 0;
        }

        const unit = new DKTools.Unit({
            source: this._source[this._property],
            percents: this.getPercents()
        });

        return unit.getValue();
    };

    // set methods

    /**
     * Sets the property
     * 
     * @param {String} property - Property
     */
    setProperty(property) {
        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._property = property;
    };

    // other methods

    /**
     * Returns true if the unit equals unit (parameter)
     * 
     * @override
     * @param {DKTools.Unit} unit - Unit to compare
     * @returns {Boolean} Unit equals unit (parameter)
     */
    equals(unit) {
        if (!unit) {
            return false;
        }

        return _.isEqual(this._source, unit.source) &&
                this._percents === unit.percents &&
                this._property === unit.property;
    };

    /**
     * Adds the unit (parameter) to this unit
     * Returns this unit
     * 
     * @override
     * 
     * @param {DKTools.Unit | Object | Number} unit - Unit
     * 
     * @see DKTools.Unit.Property.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Property} This unit
     */
    add(unit) {
        if (!unit) {
            return this;
        }

        const property = this._property;
        const source = this._source[property];
        let value = this._getValueFromUnit(unit);

        if (value instanceof Object) {
            value = value[property];
        }

        if (!value) {
            return this;
        }

        if (source instanceof DKTools.Unit) {
            source.add(value);
        } else {
            this._source[property] += value;
        }

        return this;
    };

    /**
     * Subtracts the unit (parameter) to this unit
     * Returns this unit
     * 
     * @override
     * 
     * @param {DKTools.Unit | Object | Number} unit - Unit
     * 
     * @see DKTools.Unit.Property.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Property} This unit
     */
    sub(unit) {
        if (!unit) {
            return this;
        }

        const property = this._property;
        const source = this._source[property];
        let value = this._getValueFromUnit(unit);

        if (value instanceof Object) {
            value = value[property];
        }

        if (!value) {
            return this;
        }

        if (source instanceof DKTools.Unit) {
            source.rem(value);
        } else {
            this._source[property] -= value;
        }

        return this;
    };

    /**
     * Multiplies the unit (parameter) to this unit
     * Returns this unit
     * 
     * @override
     * 
     * @param {DKTools.Unit | Object | Number} unit - Unit
     * 
     * @see DKTools.Unit.Property.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Property} This unit
     */
    mul(unit) {
        if (!unit) {
            return this;
        }

        const property = this._property;
        const source = this._source[property];
        let value = this._getValueFromUnit(unit);

        if (value instanceof Object) {
            value = value[property];
        }

        if (!value) {
            return this;
        }

        if (source instanceof DKTools.Unit) {
            source.mul(value);
        } else {
            this._source[property] *= value;
        }

        return this;
    };

    /**
     * Divides the unit (parameter) to this unit
     * Returns this unit
     * 
     * @override
     * 
     * @param {DKTools.Unit | Object | Number} unit - Unit
     * 
     * @see DKTools.Unit.Property.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Property} This unit
     */
    div(unit) {
        if (!unit) {
            return this;
        }

        const property = this._property;
        const source = this._source[property];
        let value = this._getValueFromUnit(unit);

        if (value instanceof Object) {
            value = value[property];
        }

        if (!value) {
            return this;
        }

        if (source instanceof DKTools.Unit) {
            source.div(value);
        } else {
            this._source[property] /= value;
        }

        return this;
    };

};

// properties

Object.defineProperties(DKTools.Unit.Property.prototype, {

    /**
     * Property
     * 
     * @readonly
     * @type {String}
     * @memberof DKTools.Unit.Property.prototype
     */
    property: {
        get: function() {
            return this._property;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.Unit.Properties
//===========================================================================

/**
 * @class DKTools.Unit.Properties
 * @extends DKTools.Unit
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @see DKTools.Unit.Properties.initialize
 */
DKTools.Unit.Properties = class extends DKTools.Unit {

    /**
     * Initializes the unit
     * 
     * @override
     *
     * @param {Object} [object] Parameters
     *
     * @param {String[]} object.properties - Properties
     *
     * @see DKTools.Unit.prototype.initialize
     */
    initialize(object) {
        object = object || {};

        DKTools.Unit.prototype.initialize.call(this, object);

        this.setProperties(object.properties);
    };

    // get methods

    /**
     * Returns the percents
     * 
     * @override
     * @param {String} [property] - Property
     * @returns {Number}
     */
    getPercents(property) {
        if (DKTools.Utils.isFunction(this._percents)) {
            return this._percents(property, this) || 100;
        }

        if (this._percents instanceof Object) {
            if (DKTools.Utils.isFunction(this._percents[property])) {
                return this._percents[property](this) || 100;
            }

            return this._percents[property] || 100;
        }

        return this._percents || 100;
    };

    /**
     * Returns the value of the unit
     * 
     * @override
     * @param {String} [property] - Property
     * @returns {Object | Number} Value of the unit
     */
    getValueBase(property) {
        const handler = function(property) {
            const percents = this.getPercents(property);

            if (this._source[property] instanceof DKTools.Unit) {
                return this._source[property].getValue(property) * percents / 100;
            } else {
                const unit = new DKTools.Unit.Property({
                    source: this._source,
                    property,
                    percents
                });

                return unit.getValue();
            }
        }.bind(this);

        if (property) {
            return handler(property);
        }

        return _.reduce(this._properties, function(acc, property) {
            acc[property] = handler(property);

            return acc;
        }, {});
    };

    /**
     * Returns the value of the unit
     * 
     * @override
     * 
     * @param {String} [property] - Property
     * 
     * @see DKTools.Unit.Properties.prototype.getValueBase
     * @see DKTools.Utils.isFunction
     * 
     * @returns {Number} Value of the unit
     */
    getValue(property) {
        if (DKTools.Utils.isFunction(this._getValueHandler)) {
            return this._getValueHandler(property, this);
        }

        return this.getValueBase(property);
    }

    // set methods

    /**
     * Sets the properties
     * 
     * @param {Function | String[]} properties - Properties
     */
    setProperties(properties) {
        /**
         * @private
         * @readonly
         * @type {Function | String[]}
         */
        this._properties = DKTools.Utils.isFunction(properties) ? properties : _.clone(properties);
    };

    // other methods

    /**
     * Adds the property
     * 
     * @param {String} property - Property
     */
    addProperty(property) {
        if (Array.isArray(this._properties)) {
            this._properties.push(property);
        }
    };

    /**
     * Removes the property
     * 
     * @param {String} property - Property
     */
    removeProperty(property) {
        if (Array.isArray(this._properties)) {
            DKTools.Utils.Array.remove(this._properties, property);
        }
    };

    /**
     * Returns true if the unit equals unit (parameter)
     * 
     * @override
     * @param {DKTools.Unit} unit - Unit to compare
     * @returns {Boolean} Unit equals unit (parameter)
     */
    equals(unit) {
        if (!unit) {
            return false;
        }

        return _.isEqual(this._source, unit.source) &&
                _.isEqual(this._percents, unit.percents) &&
                _.isEqual(this._properties, unit.properties);
    };

    /**
     * Adds the unit (parameter) to this unit
     * Returns this unit
     * 
     * @override
     * 
     * @param {DKTools.Unit | Object | Number} unit - Unit
     * 
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Properties} This unit
     */
    add(unit) {
        if (!unit) {
            return this;
        }

        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        _.forEach(properties, function(property) {
            let value = this._getValueFromUnit(unit);

            if (value instanceof Object) {
                value = value[property];
            }

            if (!value) {
                return;
            }

            if (this._source[property] instanceof DKTools.Unit) {
                this._source[property].add(value);
            } else {
                this._source[property] += value;
            }

        }.bind(this));

        return this;
    };

    /**
     * Subtracts the unit (parameter) to this unit
     * Returns this unit
     * 
     * @override
     * 
     * @param {DKTools.Unit | Object | Number} unit - Unit
     * 
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Properties} This unit
     */
    sub(unit) {
        if (!unit) {
            return this;
        }

        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        _.forEach(properties, function(property) {
            let value = this._getValueFromUnit(unit);

            if (value instanceof Object) {
                value = value[property];
            }

            if (!value) {
                return;
            }

            if (this._source[property] instanceof DKTools.Unit) {
                this._source[property].rem(value);
            } else {
                this._source[property] -= value;
            }

        }.bind(this));

        return this;
    };

    /**
     * Multiplies the unit (parameter) to this unit
     * Returns this unit
     * 
     * @override
     * 
     * @param {DKTools.Unit | Object | Number} unit - Unit
     * 
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Properties} This unit
     */
    mul(unit) {
        if (!unit) {
            return this;
        }

        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        _.forEach(properties, function(property) {
            let value = this._getValueFromUnit(unit);

            if (value instanceof Object) {
                value = value[property];
            }

            if (!value) {
                return;
            }

            if (this._source[property] instanceof DKTools.Unit) {
                this._source[property].mul(value);
            } else {
                this._source[property] *= value;
            }

        }.bind(this));

        return this;
    };

    /**
     * Divides the unit (parameter) to this unit
     * Returns this unit
     * 
     * @override
     * 
     * @param {DKTools.Unit | Object | Number} unit - Unit
     * 
     * @see DKTools.Unit.Properties.prototype._getValueFromUnit
     * 
     * @returns {DKTools.Properties} This unit
     */
    div(unit) {
        if (!unit) {
            return this;
        }

        let properties = this._properties;

        if (DKTools.Utils.isFunction(properties)) {
            properties = properties(this);
        }

        _.forEach(properties, function(property) {
            let value = this._getValueFromUnit(unit);

            if (value instanceof Object) {
                value = value[property];
            }

            if (!value) {
                return;
            }

            if (this._source[property] instanceof DKTools.Unit) {
                this._source[property].div(value);
            } else {
                this._source[property] /= value;
            }

        }.bind(this));

        return this;
    };

};

// properties

Object.defineProperties(DKTools.Unit.Properties.prototype, {

    /**
     * Properties
     * 
     * @readonly
     * @type {Function | String[]}
     * @memberof DKTools.Unit.Properties.prototype
     */
    properties: {
        get: function() {
            return this._properties;
        },
        configurable: true
    }

});





//===========================================================================
// DKTools.Unit.Function
//===========================================================================

/**
 * @class DKTools.Unit.Function
 * @extends DKTools.Unit
 *
 * @since 2.0.0
 * @memberof DKTools
 *
 * @see DKTools.Unit.Function.initialize
 */
DKTools.Unit.Function = class extends DKTools.Unit {

    // get methods

    /**
     * Returns the value of the unit
     * 
     * @override
     * 
     * @see DKTools.Unit.Function.prototype.getPercents
     * 
     * @returns {Number} Value of the unit
     */
    getValueBase() {
        return this._source(this) * this.getPercents() / 100;
    };

    // other methods

    /**
     * Doing nothing
     * 
     * @override
     * @returns {DKTools.Unit.Function} This unit
     */
    add() {
        return this;
    }

    /**
     * Doing nothing
     *
     * @override
     * @returns {DKTools.Unit.Function} This unit
     */
    sub() {
        return this;
    }

    /**
     * Doing nothing
     *
     * @override
     * @returns {DKTools.Unit.Function} This unit
     */
    mul() {
        return this;
    }

    /**
     * Doing nothing
     *
     * @override
     * @returns {DKTools.Unit.Function} This unit
     */
    div() {
        return this;
    }

};





//===========================================================================
// DKTools.Base
//===========================================================================

/**
 * Abstract base class for sprite and window
 *
 * @class DKTools.Base
 *
 * @memberof DKTools
 *
 * @param {Number | Graphics | Object | *} [object] - The X coordinate or Graphics or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - The width of the object (if object is Number)
 * @param {Number} [height] -The height of the object (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - The width of the object
 * @param {Number} [object.height] - The height of the object
 *
 * @see DKTools.Base.prototype.initialize
 * @see DKTools.Base.prototype.setupAll
 */
DKTools.Base = class {

    constructor() {
        throw new Error('This is a static class!');
    };

    // initialize methods

    /**
     * Initializes a class object
     *
     * @param {Number | Graphics | Object | *} [object] - The X coordinate or Graphics or object with parameters
     * @param {Number} [y] - The Y coordinate (if object is Number)
     * @param {Number} [width] - The width of the object (if object is Number)
     * @param {Number | String} [height] - The height of the object (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - The width of the object
     * @param {Number} [object.height] - The height of the object
     *
     * @example
     * var sprite = new DKTools.Sprite(0, 0, 100, 100);
     * => x = 0; y = 0; width = 100; height = 100;
     *
     * @example
     * var sprite = new DKTools.Sprite(Graphics);
     * => x = 0; y = 0; width = Graphics.boxWidth; height = Graphic.boxHeight;
     *
     * @example
     * var sprite = new DKTools.Sprite({ x: 0, y: 0, width: 100, height: 100 });
     * => x = 0; y = 0; width = 100; height = 100;
     *
     * @see DKTools.Base.prototype.setupAll
     */
    initialize(object, y, width, height) {
        let x;

        if (object instanceof Graphics) {
            width = Graphics.boxWidth;
            height = Graphics.boxHeight;
        } else if (object instanceof Object) {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        } else if (Number.isFinite(object)) { // object - Number
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
     * Clears all data
     *
     * @version 2.0.0
     * @private
     * 
     * @see DKTools.Base.prototype._clearWheel
     * @see DKTools.Base.prototype._clearMouseEnterTime
     */
    _clearAll() {
        this._clearWheel();
        this._clearMouseEnterTime();
    };

    /**
     * Clears scrolling of mouse wheel
     *
     * @private
     * 
     * @see DKTools.Base.prototype._clearWheelX
     * @see DKTools.Base.prototype._clearWheelY
     */
    _clearWheel() {
        this._clearWheelX();
        this._clearWheelY();
    };

    /**
     * Clears scrolling of mouse wheel on X axis
     *
     * @private
     */
    _clearWheelX() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._wheelX = 0;
    };

    /**
     * Clears scrolling of mouse wheel on Y axis
     *
     * @private
     */
    _clearWheelY() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._wheelY = 0;
    };

    /**
     * Clears time of mouse enter inside the object
     *
     * @since 2.0.0
     * @private
     */
    _clearMouseEnterTime() {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._mouseEnterTime = 0;
    };

    // clear methods

    /**
     * Clears a rectangle
     * Returns true if bitmap exists
     *
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
     * @param {Number} [y] - The Y coordinate
     * @param {Number} [width] - Width of the rectangle
     * @param {Number} [height] - Height of the rectangle
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number} [object.y] - The Y coordinate
     * @param {Number} [object.width] - Width of the rectangle
     * @param {Number} [object.height] - Height of the rectangle
     *
     * @returns {Boolean} Bitmap exists
     */
    clearRect(object, y, width, height) {
        if (!this.hasBitmap()) {
            return false;
        }

        if (object instanceof Object) {
            return this.clearRect(object.x, object.y, object.width, object.height);
        }

        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();

        // object - Number
        this.bitmap.clearRect(object || 0, y || 0, width, height);

        return true;
    };

    /**
     * Clears a line in the bitmap
     *
     * @param {Number} line - Line to clear
     * 
     * @see DKTools.Base.prototype.getLineRect
     * @see DKTools.Base.prototype.clearRect
     */
    clearLine(line) {
        this.clearRect(this.getLineRect(line));
    };

    /**
     * Clears the bitmap
     * Returns true if bitmap exists
     *
     * @see DKTools.Base.prototype.clearRect
     * 
     * @returns {Boolean} Bitmap exists
     */
    clear() {
        return this.clearRect();
    };

    // _create methods

    /**
     * Creates all
     *
     * @version 2.0.0
     * @private
     * 
     * @see DKTools.Base.prototype._createOptionManager
     * @see DKTools.Base.prototype._createEventManager
     */
    _createAll() {
        this._createOptionManager();
        this._createEventManager();
    };

    /**
     * Creates the option manager
     *
     * @since 2.0.0
     * @private
     * 
     * @see DKTools.OptionManager
     */
    _createOptionManager() {
        /**
         * @private
         * @readonly
         * @type {DKTools.OptionManager}
         */
        this._optionManager = new DKTools.OptionManager();
    };

    /**
     * Creates the event manager
     *
     * @since 2.0.0
     * @private
     * 
     * @see DKTools.EventManager
     */
    _createEventManager() {
        /**
         * @private
         * @readonly
         * @type {DKTools.EventManager}
         */
        this._eventManager = new DKTools.EventManager(this);
    };

    // _setup methods

    /**
     * Sets all data
     *
     * @private
     * 
     * @see DKTools.Base.prototype._setupOptions
     * @see DKTools.Base.prototype._setupEvents
     * @see DKTools.Base.prototype._setupAnimations
     */
    _setupAll() {
        this._setupOptions();
        this._setupEvents();
        this._setupAnimations();
    };

    /**
     * Sets the options
     *
     * @private
     */
    _setupOptions() {
        // to be overriden by plugins
    };

    /**
     * Sets the events
     *
     * @private
     */
    _setupEvents() {
        // to be overriden by plugins
    };

    /**
     * Sets the animations
     *
     * @private
     */
    _setupAnimations() {
        // to be overriden by plugins
    };

    // _add methods

    /**
     * Adds children objects to processing
     *
     * @private
     */
    _addAllChildren() {
        // to be overriden by plugins
    };

    // standard methods

    /**
     * Returns the standard width of the drawing
     *
     * @returns {Number | null} Standard width of the drawing or null
     */
    standardDrawingWidth() {
        if (this.hasBitmap()) {
            return this.bitmap.width;
        } else if (this.isSprite()) {
            return this._bitmapWidth;
        } else if (this.isWindow()) {
            return this.realWidth;
        }

        return null;
    };

    /**
     * Returns the standard height of the drawing
     *
     * @returns {Number | null} Standard height of the drawing or null
     */
    standardDrawingHeight() {
        if (this.hasBitmap()) {
            return this.bitmap.height;
        } else if (this.isSprite()) {
            return this._bitmapHeight;
        } else if (this.isWindow()) {
            return this.realHeight;
        }

        return null;
    };

    /**
     * Returns the standard activity of the object
     *
     * @returns {Boolean} Standard activity of the object
     */
    standardActive() {
        return true;
    };

    /**
     * Returns the standard visibility of the object
     *
     * @returns {Boolean} Standard visibility of the object
     */
    standardVisible() {
        return true;
    };

    /**
     * Returns the standard scale of the object
     *
     * @returns {Point} Standard scale of the object
     */
    standardScale() {
        return new Point(1, 1);
    };

    /**
     * Returns the standard pivot of the object
     *
     * @returns {Point} Standard pivot of the object
     */
    standardPivot() {
        return new Point(0, 0);
    };

    /**
     * Returns the standard skew of the object
     *
     * @returns {Point} Standard skew of the object
     */
    standardSkew() {
        return new Point(0, 0);
    };

    /**
     * Returns the standard rotation of the object
     *
     * @returns {Number} Standard rotation of the object
     */
    standardRotation() {
        return 0;
    };

    /**
     * Returns the standard tint of the object
     *
     * @returns {Number} Standard tint of the object
     */
    standardTint() {
        return 0xFFFFFF;
    };

    /**
     * Returns the standard windowskin
     *
     * @returns {String} Standard windowskin
     */
    standardWindowskin() {
        return 'Window';
    };

    // setup methods

    /**
     * Sets all parameters
     *
     * @param {Object} [object={}] - Parameters
     *
     * @param {Number} [object.id] - The object ID
     * @param {Boolean} [object.visible] - Visibility of the object
     * @param {Boolean} [object.active] - Activity of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Scale of the object
     * @param {PPIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Pivot of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Skew of the object
     * @param {Number} [object.rotation] - Rotation of the object
     * @param {Number} [object.tint] - Tint of the object
     *
     * @param {Number} [object.scale.x] - Scale of the object on X axis
     * @param {Number} [object.scale.y] - Scale of the object on Y axis
     *
     * @param {Number} [object.pivot.x] - Pivot of the object on X axis
     * @param {Number} [object.pivot.y] - Pivot of the object on Y axis
     *
     * @param {Number} [object.skew.x] - Skew of the object on X axis
     * @param {Number} [object.skew.y] - Skew of the object on Y axis
     */
    setupAll(object) {
        object = object || {};
        this.setupId(object.id);
        this.setupActive(object.active);
        this.setupVisible(object.visible);
        this.setupScale(object.scale);
        this.setupPivot(object.pivot);
        this.setupSkew(object.skew);
        this.setupRotation(object.rotation);
        this.setupTint(object.tint);
    };

    /**
     * Sets the size of the object
     *
     * @param {Number | Object} [object] - Width of the object or object with parameters
     * @param {Number} [height] - Height of the object (if object is Object)
     *
     * @param {Number} [object.width] - Width of the object
     * @param {Number} [object.height] - Height of the object
     */
    setupSize(object, height) {
        // to be overriden by plugins
    };

    /**
     * Sets the object ID
     *
     * @param {Number | String | null} [id] - The object ID
     */
    setupId(id) {
        /**
         * @private
         * @readonly
         * @type {Number | String | null}
         */
        this._id = (id == null ? null : id);
    };

    /**
     * Sets the activity of the object
     *
     * @param {Boolean} [active] - Activity of the object
     */
    setupActive(active) {
        /**
         * @type {Boolean}
         */
        this.active = (active == null ? this.standardActive() : active);
    };

    /**
     * Sets the visibility of the object
     *
     * @param {Boolean} [visible] - Visibility of the object
     */
    setupVisible(visible) {
        /**
         * @type {Boolean}
         */
        this.visible = (visible == null ? this.standardVisible() : visible);
    };

    /**
     * Sets the scale of the object
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Scale of the object on X axis or object width parameters
     * @param {Number} [y] - Scale of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Scale of the object on X axis
     * @param {Number} [object.y] - Scale of the object on Y axis
     */
    setupScale(object, y) {
        const scale = DKTools.Utils.Point.toPoint(object, y);
        const newScale = Object.assign(this.standardScale(), scale);

        /**
         * @type {PIXI.ObservablePoint}
         */
        this.scale.copy(newScale);
    };

    /**
     * Sets the pivot of the object
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Pivot of the object on X axis or object with parameters
     * @param {Number} [y] - Pivot of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Pivot of the object on X axis
     * @param {Number} [object.y] - Pivot of the object on Y axis
     */
    setupPivot(object, y) {
        const pivot = DKTools.Utils.Point.toPoint(object, y);
        const newPivot = Object.assign(this.standardPivot(), pivot);

        /**
         * @type {PIXI.ObservablePoint}
         */
        this.pivot.copy(newPivot);
    };

    /**
     * Sets the skew of the object
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Skew of the object on X axis or object with parameters
     * @param {Number} [y] - Skew of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Skew of the object on X axis
     * @param {Number} [object.y] - Skew of the object on Y axis
     */
    setupSkew(object, y) {
        const skew = DKTools.Utils.Point.toPoint(object, y);
        const newSkew = Object.assign(this.standardSkew(), skew);

        /**
         * Перекос объекта
         *
         * @type {PIXI.ObservablePoint}
         */
        this.skew.copy(newSkew);
    };

    /**
     * Sets the rotation of the object
     *
     * @param {Number} [rotation] - Rotation of the object
     */
    setupRotation(rotation) {
        /**
         * @type {Number}
         */
        this.rotation = (rotation == null ? this.standardRotation() : rotation);
    };

    /**
     * Sets the tint of the object
     *
     * @param {Number} [tint] - Tint of the object
     */
    setupTint(tint) {
        /**
         * @type {Number}
         */
        this.tint = (tint == null ? this.standardTint() : tint);
    };

    // set methods

    /**
     * Changes all parameters
     * Returns the number of changed parameters
     *
     * @param {Object} [object] - Parameters
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     * @param {Boolean} [activate=false] - Activates the object
     *
     * @param {Number} [object.id] - The object ID
     * @param {Boolean} [object.visible] - Visibility of the object
     * @param {Boolean} [object.active] - Activity of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.scale] - Scale of the object
     * @param {PPIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pivot] - Pivot of the object
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.skew] - Skew of the object
     * @param {Number} [object.rotation] - Rotation of the object
     * @param {Number} [object.tint] - Tint of the object
     *
     * @param {Number} [object.scale.x] - Scale of the object on X axis
     * @param {Number} [object.scale.y] - Scale of the object on Y axis
     *
     * @param {Number} [object.pivot.x] - Pivot of the object on X axis
     * @param {Number} [object.pivot.y] - Pivot of the object on Y axis
     *
     * @param {Number} [object.skew.x] - Skew of the object on X axis
     * @param {Number} [object.skew.y] - Skew of the object on Y axis
     *
     * @returns {Number} Number of changed parameters
     */
    setAll(object, blockStart, activate) {
        object = object || {};
        let changed = 0;

        if (this.setId(object.id)) {
            changed++;
        }

        if (this.setActive(object.active)) {
            changed++;
        }

        if (this.setVisible(object.visible)) {
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

        if (this.setTint(object.tint)) {
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
     * Changes the object ID
     * Returns true if the change occurred
     *
     * @param {Number | String | null} [id] - The object ID
     * @returns {Boolean} Change occurred
     */
    setId(id) {
        if (this._id === id) {
            return false;
        }

        const lastId = this._id;
        this.setupId(id);

        return this._id !== lastId;
    };

    /**
     * Changes the activity of the object
     *
     * @param {Boolean} [active] - Activity of the object
     * @returns {Boolean} Change occurred
     */
    setActive(active) {
        if (this.active === active) {
            return false;
        }

        const lastActive = this.active;
        this.setupActive(active);

        return lastActive !== this.active;
    };

    /**
     * Changes the visibility of the object
     * Returns true if the change occurred
     *
     * @param {Boolean} [visible] - Visibility of the object
     * @returns {Boolean} Change occurred
     */
    setVisible(visible) {
        if (this.visible === visible) {
            return false;
        }

        const lastVisible = this.visible;
        this.setupVisible(visible);

        return lastVisible !== this.visible;
    };

    /**
     * Changes the scale of the object
     * Returns true if the change occurred
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Scale of the object on X axis or object with parameters
     * @param {Number} [y] - Scale of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Scale of the object on X axis
     * @param {Number} [object.y] - Scale of the object on Y axis
     *
     * @returns {Boolean} Change occurred
     */
    setScale(object, y) {
        if (object instanceof Object) {
            return this.setScale(object.x, object.y);
        }

        // object - Number
        const newScale = DKTools.Utils.Point.toPoint(object, y);

        if (DKTools.Utils.Point.equals(this.scale, newScale)) {
            return false;
        }

        const lastScale = DKTools.Utils.Point.clone(this.scale);
        this.setupScale(newScale);

        return !DKTools.Utils.Point.equals(this.scale, lastScale);
    };

    /**
     * Changes the pivot of the object
     * Returns true if the change occurred
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Pivot of the object on X axis or object with parameters
     * @param {Number} [y] - Pivot of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Pivot of the object on X axis
     * @param {Number} [object.y] - Pivot of the object on Y axis
     *
     * @returns {Boolean} Change occurred
     */
    setPivot(object, y) {
        if (object instanceof Object) {
            return this.setPivot(object.x, object.y);
        }

        // object - Number
        let newPivot = DKTools.Utils.Point.toPoint(object, y);

        if (DKTools.Utils.Point.equals(this.pivot, newPivot)) {
            return false;
        }

        let lastPivot = DKTools.Utils.Point.clone(this.pivot);
        this.setupPivot(newPivot);

        return !DKTools.Utils.Point.equals(this.pivot, lastPivot);
    };

    /**
     * Changes the skew of the object
     * Returns true if the change occurred
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - Skew of the object on X axis or object with parameters
     * @param {Number} [y] - Skew of the object on Y axis (if object is Number)
     *
     * @param {Number} [object.x] - Skew of the object on X axis
     * @param {Number} [object.y] - Skew of the object on Y axis
     *
     * @returns {Boolean} Change occurred
     */
    setSkew(object, y) {
        if (object instanceof Object) {
            return this.setSkew(object.x, object.y);
        }

        // object - Number
        let newSkew = DKTools.Utils.Point.toPoint(object, y);

        if (DKTools.Utils.Point.equals(this.skew, newSkew)) {
            return false;
        }

        let lastSkew = DKTools.Utils.Point.clone(this.skew);
        this.setupSkew(newSkew);

        return !DKTools.Utils.Point.equals(this.skew, lastSkew);
    };

    /**
     * Changes the rotation of the object
     * Returns true if the change occurred
     *
     * @param {Number} [rotation] - Rotation of the object
     * @returns {Boolean} Change occurred
     */
    setRotation(rotation) {
        if (this.rotation === rotation) {
            return false;
        }

        let lastRotation = this.rotation;
        this.setupRotation(rotation);

        return lastRotation !== this.rotation;
    };

    /**
     * Changes the tint of the object
     * Returns true if the change occurred
     *
     * @param {Number} [tint] - Tint of the object
     * @returns {Boolean} Change occurred
     */
    setTint(tint) {
        if (this.tint === tint) {
            return false;
        }

        const lastTint = this.tint;
        this.setupTint(tint);

        return lastTint !== this.tint;
    };

    // start methods

    /**
     * Starts the object
     *
     * @version 1.1.0
     *
     * @param {Boolean} [activate] - Activates the object
     *
     * @see DKTools.Base.prototype.removeAllChildren
     * @see DKTools.Base.prototype.terminateAll
     * @see DKTools.Base.prototype.removeAll
     * @see DKTools.Base.prototype.checkAll
     * @see DKTools.Base.prototype.createAll
     * @see DKTools.Base.prototype.addAllChildren
     * @see DKTools.Base.prototype.startAll
     * @see DKTools.Base.prototype.refreshAll
     * @see DKTools.Base.prototype.updateStartEvents
     * @see DKTools.Base.prototype.activate
     */
    start(activate) {
        this._started = true;
        this.removeAllChildren();
        this.terminateAll();
        this.removeAll();
        this.checkAll();
        this.createAll();
        this.startAll();
        this.addAllChildren();
        this.refreshAll();
        this.updateStartEvents();

        if (activate) {
            this.activate();
        }
    };

    /**
     * Starts all
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateStartAllEvents
     */
    startAll() {
        this.updateStartAllEvents();
    };

    // remove methods

    /**
     * Removes children objects from processing
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateRemoveAllChildrenEvents
     */
    removeAllChildren() {
        this.updateRemoveAllChildrenEvents();
    };

    /**
     * Removes all
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateRemoveAllEvents
     */
    removeAll() {
        this.updateRemoveAllEvents();
    };

    /**
     * Removes the mask
     */
    removeMask() {
        this.mask = null;
    };

    // terminate methods

    /**
     * Terminates the object
     */
    terminate() {
        // to be overriden by plugins
    };

    /**
     * Terminates all
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateTerminateAllEvents
     */
    terminateAll() {
        this.updateTerminateAllEvents();
    };

    // _check methods

    /**
     * Checks the width with the minimum width
     * Returns the normalized width of the object
     *
     * @private
     * 
     * @param {Number} width - Width of the object
     * 
     * @see DKTools.Base.prototype.getMinWidth
     * 
     * @returns {Number} Normalized width of the object
     */
    _checkWidth(width) {
        const minWidth = this.getMinWidth();

        return width ? Math.max(minWidth, width) : minWidth;
    };

    /**
     * Checks the height with the minimum height
     * Returns the normalized height of the object
     *
     * @private
     * 
     * @param {Number} height - Height of the object
     * 
     * @see DKTools.Base.prototype.getMinHeight
     * 
     * @returns {Number} Normalized height of the object
     */
    _checkHeight(height) {
        const minHeight = this.getMinHeight();

        return height ? Math.max(minHeight, height) : minHeight;
    };

    // check methods

    /**
     * Checks all
     *
     * @version 1.1.0
     * 
     * @see DKTools.Base.prototype.updateCheckAllEvents
     * @see DKTools.Base.prototype.checkSize
     */
    checkAll() {
        this.updateCheckAllEvents();
        this.checkSize();
    };

    /**
     * Checks the size of the object
     */
    checkSize() {
        // to be overriden by plugins
    };

    // create methods

    /**
     * Creates all objects
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateCreateAllEvents
     */
    createAll() {
        this.updateCreateAllEvents();
    };

    // add methods

    /**
     * Adds children objects to processing
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.updateAddAllChildrenEvents
     */
    addAllChildren() {
        this.updateAddAllChildrenEvents();
    };

    // refresh methods

    /**
     * Updates and redraws all
     *
     * @version 1.1.0
     *
     * @see DKTools.Base.prototype.updateAll
     * @see DKTools.Base.prototype.canRedrawAll
     * @see DKTools.Base.prototype.redrawAll
     * @see DKTools.Base.prototype.updateRefreshAllEvents
     */
    refreshAll() {
        this.updateAll();

        if (this.canRedrawAll()) {
            this.redrawAll();
        }

        this.updateRefreshAllEvents();
    };

    // redraw methods

    /**
     * Redraws all
     */
    redrawAll() {
        // to be overriden by plugins
    };

    // get methods

    /**
     * Returns a child object by its ID
     *
     * @param {Number | String | *} id - ID of an object
     * @returns {* | undefined} Child object
     */
    getChildById(id) {
        return _.find(this.children, { id });
    };

    /**
     * Returns the width of the text
     *
     * @param {String} text - Text
     * @returns {Number} Width of the text
     */
    getTextWidth(text) {
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
     * Returns the width of the text (special characters are supported)
     *
     * @param {String} text - Text
     * @param {Object} [options] - Options for drawing
     *
     * @see DKTools.Base.prototype.drawTextEx
     *
     * @returns {Number} Width of the text
     */
    getTextWidthEx(text, options) {
        if (text == null) {
            return 0;
        }

        text = String(text);
        options = options || {};

        try {
            options.x = -Number.MAX_SAFE_INTEGER;
            options.y = -Number.MAX_SAFE_INTEGER;

            return this.drawTextEx(text, options);
        } catch(e) {
        }

        return 0;
    };

    /**
     * Returns the height of the text (special characters are supported)
     *
     * @param {String} text - Text
     * @param {Object} [options] - Options for drawing
     *
     * @param {Number} [options.wrap.maxWidth] - Max width of a text line
     * @param {Number} [options.wrap.maxLines] - Max lines
     * @param {Boolean} [options.wrap.breakWords] - Breaks a words for the wrapping
     * 
     * @see DKTools.Base.prototype.textWrap
     * @see DKTools.Base.prototype.calcTextHeight
     *
     * @returns {Number} Height of the text
     */
    getTextHeightEx(text, options) {
        if (text == null) {
            return 0;
        }

        text = String(text);
        options = options || {};

        if (options.wrap) {
            text = this.textWrap(text, options.wrap);
        }

        return this.calcTextHeight({ text, index: 0 }, true);
    };

    /**
     * Returns the color from the windowskin
     *
     * @param {Number} n - Color number
     * 
     * @see DKTools.Base.prototype.hasWindowskin
     * @see DKTools.Base.prototype.standardWindowskin
     * 
     * @returns {String} Color from the windowskin
     */
    getWindowskinTextColor(n) {
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
     * Returns the font height for the line height
     *
     * @param {Number} lineHeight - Line height
     * 
     * @see DKTools.Base.prototype.getLineHeight
     * @see DKTools.Base.prototype.hasBitmap
     * 
     * @returns {Number} Font height for the line height
     */
    getFontHeight(lineHeight) {
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
     * Returns the size of the object (taking into account the scaling)
     *
     * @returns {Object} Size of the object (taking into account the scaling)
     */
    getSize() {
        return { width: this.width, height: this.height };
    };

    /**
     * Returns the real size of the object (not including scaling)
     *
     * @returns {Object} Real size of the object (not including scaling)
     */
    getRealSize() {
        return { width: this.realWidth, height: this.realHeight };
    };

    /**
     * Returns the minimum width of the bitmap
     *
     * @returns {Number} Minimum width of the bitmap
     */
    getMinWidth() {
        return 0;
    };

    /**
     * Returns the minimum height of the bitmap
     *
     * @returns {Number} Minimum height of the bitmap
     */
    getMinHeight() {
        return 0;
    };

    /**
     * Returns the minimum size of the bitmap
     *
     * @returns {Object} Minimum size of the bitmap
     */
    getMinSize() {
        return { width: this.getMinWidth(), height: this.getMinHeight() };
    };

    /**
     * Returns the height of the line
     *
     * @returns {Number} Height of the line
     */
    getLineHeight() {
        try {
            return Window_Base.prototype.lineHeight.call(this);
        } catch (e) {
            return 36;
        }
    };

    /**
     * Returns the maximum of lines
     *
     * @see DKTools.Base.prototype.getLineHeight
     * 
     * @returns {Number} Maximum of lines
     */
    getLines() {
        return this.realHeight / this.getLineHeight();
    };

    /**
     * Returns the number of lines of the text
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     * @param {Boolean} [wrap.breakWords] - Breaks a words for the wrapping
     * 
     * @see DKTools.Base.prototype.textWrap
     *
     * @returns {Number} Number of lines of the text
     */
    getTextLines(text, wrap) {
        if (wrap) {
            text = this.textWrap(text, wrap);
        }

        return text.split('\n').length;
    };

    /**
     * Returns the height of the text
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     * @param {Boolean} [wrap.breakWords] - Breaks a words for the wrapping
     * 
     * @see DKTools.Base.prototype.getTextLines
     * @see DKTools.Base.prototype.getLineHeight
     *
     * @returns {Number} Height of the text
     */
    getTextHeight(text, wrap) {
        return this.getTextLines(text, wrap) * this.getLineHeight();
    };

    /**
     * Returns a rectangle of the line
     *
     * @param {Number | String} line - Line number
     * 
     * @see DKTools.Base.prototype.getLineHeight
     * 
     * @returns {Rectangle} Rectangle of the line
     */
    getLineRect(line) {
        const lineHeight = this.getLineHeight();

        return new Rectangle(0, lineHeight * Number(line), this.realWidth, lineHeight);
    };

    // active methods

    /**
     * Activates the object
     * 
     * @see DKTools.Base.prototype.setActive
     * @see DKTools.Base.prototype.updateActivateEvents
     */
    activate() {
        if (this.setActive(true)) {
            this.updateActivateEvents();
        }
    };

    /**
     * Deactivates the object
     * 
     * @see DKTools.Base.prototype.setActive
     * @see DKTools.Base.prototype.updateDeactivateEvents
     */
    deactivate() {
        if (this.setActive(false)) {
            this.updateDeactivateEvents();
        }
    };

    // visible methods

    /**
     * Shows the object
     *
     * @version 3.0.0
     * @param {Boolean} [activate=false] - Activates the object
     * 
     * @see DKTools.Base.prototype.setVisible
     * @see DKTools.Base.prototype.updateShowEvents
     * @see DKTools.Base.prototype.activate
     */
    show(activate) {
        if (this.setVisible(true)) {
            this.updateShowEvents();
        }

        if (activate) {
            this.activate();
        }
    };

    /**
     * Hides the object
     *
     * @version 3.0.0
     * @param {Boolean} [blockDeactivate] - Blocking deactivates of the object
     * 
     * @see DKTools.Base.prototype.setVisible
     * @see DKTools.Base.prototype.updateHideEvents
     * @see DKTools.Base.prototype.deactivate
     */
    hide(blockDeactivate) {
        if (this.setVisible(false)) {
            this.updateHideEvents();
        }

        if (!blockDeactivate) {
            this.deactivate();
        }
    };

    // clone mthods

    /**
     * Clones the object
     *
     * @version 2.0.0
     *
     * @param {Object} [options] - Options for clone
     *
     * @param {Boolean} [options.cloneTexts] - Clone texts
     * @param {Boolean} [options.cloneOptions] - Clone options
     * @param {Boolean} [options.blockStart] - Blocking the call of the "start" function of cloned object
     * @param {Boolean} [options.activate] - Activate a cloned object
     *
     * @returns {DKTools.Sprite | DKTools.Window | *} Cloned object
     */
    clone(options) {
        options = options || {};

        const clone = new (this.constructor)(this);

        if (options.cloneTexts) {
            _.forEach(this._texts, function(textObj) {
                clone.addText(textObj.text, textObj.options);
            });
        }

        if (options.cloneOptions) {
            clone.enableOptions(this._optionManager.options);
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
     * Returns true if the object can be updated and redrawn
     *
     * @since 1.1.0
     * 
     * @see DKTools.Base.prototype.hasBitmap
     * 
     * @returns {Boolean} Object can be updated and redrawn
     */
    canRedrawAll() {
        return this.hasBitmap();
    };

    // move methods

    /**
     * Moves the object
     *
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or object with parameters
     * @param {Number | String} [y] - The Y coordinate or line number (String)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number | String} [object.y] - The Y coordinate or line number (String)
     *
     * @example
     * var sprite = new DKTools.Sprite();
     * var pos = new Point(100, 100);
     * sprite.move(pos);
     *
     * @example
     * var sprite = new DKTools.Sprite();
     * sprite.move(100, 100);
     *
     * @example
     * var sprite = new DKTools.Sprite();
     * sprite.move(100, '2');
     *
     * @see DKTools.Base.prototype.getLineHeight
     */
    move(object, y) {
        let x = object; // object - Number

        if (object instanceof Object) {
            x = object.x;
            y = object.y;
        }

        if (DKTools.Utils.isString(y)) {
            y = this.getLineHeight() * Number(y);
        }

        this.x = x || 0;
        this.y = y || 0;
    };

    // other methods

    /**
     * Converts the X of the canvas to the local X
     *
     * @param {Number} x - The X of the canvas
     * @returns {Number} Local X
     */
    canvasToLocalX(x) {
        let node = this;

        while (node) {
            x -= node.x;
            node = node.parent;
        }

        return x;
    };

    /**
     * Converts the Y of the canvas to the local Y
     *
     * @param {Number} y - The Y of the canvas
     * @returns {Number} Local Y
     */
    canvasToLocalY(y) {
        let node = this;

        while (node) {
            y -= node.y;
            node = node.parent;
        }

        return y;
    };

    // children methods

    /**
     * Calls the callback function for the child objects
     *
     * @param {Function} callback - Function for the child objects
     */
    iterateChildren(callback) {
        _.forEach(this.children, callback);
    };

    /**
     * Updates the child object
     *
     * @param {*} child - Child object
     */
    updateChild(child) {
        if (child && DKTools.Utils.isFunction(child.update)) {
            child.update();
        }
    };

    /**
     * Updates the child objects
     */
    updateChildren() {
        this.iterateChildren(this.updateChild);
    };

    // has methods

    /**
     * Returns true if the object has the bitmap
     *
     * @returns {Boolean} Object has the bitmap
     */
    hasBitmap() {
        try { // for compatibility with DKTools.Window
            return !!this.bitmap;
        } catch (e) {
            return false;
        }
    };

    /**
     * Returns true if the object has the mask
     *
     * @returns {Boolean} Object has the mask
     */
    hasMask() {
        return !!this.mask;
    };

    /**
     * Returns true if the object has the windowskin
     *
     * @returns {Boolean} Object has the windowskin
     */
    hasWindowskin() {
        return !!this.windowskin;
    };

    // is methods

    /**
     * Returns true if the object is visible
     *
     * @version 2.0.0
     * @returns {Boolean} Object is visible
     */
    isVisible() {
        return this.visible;
    };

    /**
     * Returns true if the object is active
     *
     * @returns {Boolean} Object is active
     */
    isActive() {
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
     * Returns true if the object is visible and active
     *
     * @see DKTools.Base.prototype.isVisible
     * @see DKTools.Base.prototype.isActive
     * 
     * @returns {Boolean} Object is visible and active
     */
    isVisibleAndActive() {
        return this.isVisible() && this.isActive();
    };

    /**
     * Returns true if the object is started
     *
     * @returns {Boolean} Object is started
     */
    isStarted() {
        return this._started;
    };

    /**
     * Returns true if the bitmap is ready
     *
     * @see DKTools.Base.prototype.hasBitmap
     * 
     * @returns {Boolean} Bitmap is ready
     */
    isReady() {
        return this.hasBitmap() && this.bitmap.isReady();
    };

    /**
     * Returns true if the object is busy
     *
     * @see DKTools.Base.prototype.isReady
     * 
     * @returns {Boolean} Object is busy
     */
    isBusy() {
        return !this.isReady();
    };

    /**
     * Returns true if the object is based on DKTools.Sprite
     *
     * @returns {Boolean} Object is based on DKTools.Sprite
     */
    isSprite() {
        return this instanceof DKTools.Sprite;
    };

    /**
     * Returns true if the object is based on DKTools.Sprite.Button
     *
     * @returns {Boolean} Object is based on DKTools.Sprite.Button
     */
    isButton() {
        return this instanceof DKTools.Sprite.Button;
    };

    /**
     * Returns true if the object is based on DKTools.Sprite.Cursor
     *
     * @returns {Boolean} Object is based on DKTools.Sprite.Cursor
     */
    isCursor() {
        return this instanceof DKTools.Sprite.Cursor;
    };

    /**
     * Returns true if the object is based on DKTools.Sprite.Selectable or DKTools.Window.Selectable
     *
     * @returns {Boolean} Object is based on DKTools.Sprite.Selectable or DKTools.Window.Selectable
     */
    isSelectable() {
        return this instanceof DKTools.Sprite.Selectable || this instanceof DKTools.Window.Selectable;
    };

    /**
     * Returns true if the object is based on DKTools.Window
     *
     * @returns {Boolean} Object is based on DKTools.Window
     */
    isWindow() {
        return this instanceof DKTools.Window;
    };

    /**
     * Returns true if the object is based on DKTools.Viewport
     *
     * @returns {Boolean} Object is based on DKTools.Viewport
     */
    isViewport() {
        return this instanceof DKTools.Viewport;
    };

    /**
     * Returns true if the object is based on DKTools.Layout
     *
     * @returns {Boolean} Object is based on DKTools.Layout
     */
    isLayout() {
        return this instanceof DKTools.Layout;
    };

    /**
     * Returns true if the coordinates is inside the object
     *
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     *
     * @returns {Boolean} Coordinates is inside the object
     */
    isInside(x, y) {
        return false;
    };

    /**
     * Returns true if the coordinates is not inside the object
     *
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     *
     * @see DKTools.Base.prototype.isInside
     * 
     * @returns {Boolean} Coordinates are not inside the object
     */
    isOutside(x, y) {
        return !this.isInside(x, y);
    };

    /**
     * Returns true if the mouse is inside the object
     *
     * @see DKTools.Base.prototype.isInside
     * 
     * @returns {Boolean} Mouse is inside the object
     */
    isMouseInside() {
        return this.isInside(TouchInput.mouseX, TouchInput.mouseY);
    };

    /**
     * Returns true if the object has a parent (if parameter is null or undefined)
     * Returns true if the object (parameter) is child of this object
     *
     * @version 2.0.0
     * @param {Sprite | Window} [object] - Object
     * @returns {Boolean} Object (parameter) is child of this object or object has a parent (if parameter is null or undefined)
     */
    isChild(object) {
        return object ? DKTools.Utils.Array.contains(this.children, object) : !!this.parent;
    };

    /**
     * Returns true if the object (parameter) is parent of this object
     *
     * @since 2.0.0
     * @param {Sprite | Window} object - Object
     * @returns {Bboolean} Object (parameter) is parent of this object
     */
    isParent(object) {
        return object && this.parent === object;
    };

    // draw methods

    /**
     * Draws all
     */
    drawAll() {
        // to be overriden by plugins
    };

    /**
     * Draws a text (special characters are supported)
     * Returns the width of the text
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Object} [options.wrap] - Options for text wrap
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pos] - Position of the text
     * @param {Number} [options.x=0] - The X coordinate (if object.pos is undefined or null)
     * @param {Number | String} [options.y=0] - The Y coordinate or line number (String) (if object.pos is undefined or null)
     *
     * @param {Number} [options.wrap.maxWidth] - Max width of a text line
     * @param {Number} [options.wrap.maxLines] - Max lines
     * @param {Boolean} [options.wrap.breakWords] - Breaks a words for the wrapping
     *
     * @param {Number} [object.pos.x=0] - The X coordinate
     * @param {Number | String} [object.pos.y=0] - The Y coordinate or line number (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.textWrap
     * @see DKTools.Base.prototype.convertEscapeCharacters
     * @see DKTools.Base.prototype.calcTextHeight
     * @see DKTools.Base.prototype.processCharacter
     *
     * @returns {Number} Width of the text
     */
    drawTextEx(text, options) {
        text = String(text);
        options = options || {};

        if (!this.hasBitmap() || !text) {
            return 0;
        }

        if (options.wrap) {
            text = this.textWrap(text, options.wrap);
        }

        let x, y;
        if (options.pos instanceof Object) {
            x = options.pos.x;
            y = options.pos.y;
        } else {
            x = options.x;
            y = options.y;
        }

        if (DKTools.Utils.isString(y)) { // line
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
     * Draws a line
     * Returns true if bitmap exists
     *
     * @param {Number | Object} [object=0] - The X coordinate of start of the line or object with parameters
     * @param {Number} [y1=0] - The Y coordinate of start of the line
     * @param {Number} [x2=0] - The X coordinate of end of the line
     * @param {Number} [y2=0] - The Y coordinate of end of the line
     * @param {String} [color'white'] - Line color
     * @param {Number} [lineWidth=1] - Line width
     *
     * @param {Number} [object.x1=0] - The X coordinate of start of the line
     * @param {Number} [object.y1=0] - The Y coordinate of start of the line
     * @param {Number} [object.x2=0] - The X coordinate of end of the line
     * @param {Number} [object.y2=0] - The Y coordinate of end of the line
     * @param {String} [object.color='white'] - Line color
     * @param {Number} [object.lineWidth=1] - Line width
     *
     * @see DKTools.Base.prototype.hasBitmap
     * 
     * @returns {Boolean} Bitmap exists
     */
    drawLine(object, y1, x2, y2, color, lineWidth) {
        if (!this.hasBitmap()) {
            return false;
        }

        if (object instanceof Object) {
            return this.drawLine(object.x1, object.y1, object.x2, object.y2, object.color, object.lineWidth);
        }

        // object - Number
        DKTools.Utils.Bitmap.drawLine(this.bitmap, object || 0, y1 || 0, x2 || 0, y2 || 0, color || 'white', lineWidth || 1);

        return true;
    };

    /**
     * Draws a circle
     * Returns true if bitmap exists
     *
     * @param {String} [color='white'] - Color
     * @param {Number} [radius=1] - Radius of the circle
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object=0] - The X coordinate or Point or object with parameters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     *
     * @param {Number} [object.x=0] - The X coordinate
     * @param {Number} [object.y=0] - The Y coordinate
     *
     * @see DKTools.Base.prototype.hasBitmap
     * 
     * @returns {Boolean} Bitmap exists
     */
    drawCircle(color, radius, object, y) {
        if (!this.hasBitmap()) {
            return false;
        }

        if (object instanceof Object) {
            return this.drawCircle(color, radius, object.x, object.y);
        }

        // object - Number
        this.bitmap.drawCircle(object || 0, y || 0, radius || 1, color || 'white');

        return true;
    };

    /**
     * Draws a bitmap
     * Returns true if bitmap exists
     *
     * @param {Bitmap | Object} object - Bitmap or object with parameters
     * @param {Object} [options] - Options for drawing
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @param {PIXI.Rectangle | Rectangle | Object} [options.source] - Source from bitmap. Rectangle or object with parameters
     * @param {PIXI.Rectangle | Rectangle | Object} [options.destination] - Destination to bitmap. Rectangle or object with parameters
     * @param {Function} [options.callback] - Callback function, which should return an object with source and destination
     *
     * @param {Number} [options.source.x] - The X coordinate
     * @param {Number} [options.source.y] - The Y coordinate
     * @param {Number} [options.source.width] - Width of the rectangle
     * @param {Number} [options.source.height] - Height of the rectangle
     *
     * @param {Number} [options.destination.x] - The X coordinate
     * @param {Number} [options.destination.y] - The Y coordinate
     * @param {Number} [options.destination.width] - Width of the rectangle
     * @param {Number} [options.destination.height] - Height of the rectangle
     *
     * @example
     * Drawing half of the bitmap
     *
     * var sprite = new DKTools.Sprite(0, 0, 200, 200);
     * sprite.start();
     * 
     * sprite.drawBitmap({ folder: 'img/system/', filename: 'Window' }, {
     *      callback: function(bitmap, sprite) { // loaded bitmap, sprite
     *          return {
     *              source: {
     *                  width: bitmap.width / 2,
     *                  height: bitmap.height / 2
     *              }
     *          }
     *      }
     * });
     * 
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Utils.Bitmap.load
     *
     * @returns {Boolean} Bitmap exists
     */
    drawBitmap(object, options) {
        if (!this.hasBitmap() || !object) {
            return false;
        }

        options = options || {};
        const bitmap = DKTools.Utils.Bitmap.load(object);

        if (!bitmap) {
            return false;
        }

        bitmap.addLoadListener(function() {
            let source, destination;

            if (DKTools.Utils.isFunction(options.callback)) {
                const result = options.callback(bitmap, this) || {};

                source = result.source;
                destination = result.destination;
            }

            source = source || options.source || {};
            destination = destination || options.destination || {};

            const sx = source.x || 0;
            const sw = source.width == null ? bitmap.width : source.width;
            let sy = source.y || 0;
            let sh = source.height == null ? bitmap.height : source.height;

            if (DKTools.Utils.isString(sy)) {
                sy = this.getLineHeight() * Number(sy);
            }

            if (DKTools.Utils.isString(sh)) {
                sh = this.getLineHeight() * Number(sh);
            }

            const dx = destination.x || 0;
            const dw = destination.width == null ? sw : destination.width;
            let dy = destination.y || 0;
            let dh = destination.height == null ? sh : destination.height;

            if (DKTools.Utils.isString(dy)) {
                dy = this.getLineHeight() * Number(dy);
            }

            if (DKTools.Utils.isString(dh)) {
                dh = this.getLineHeight() * Number(dh);
            }

            this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);
        }.bind(this));

        return true;
    };

    /**
     * Draws an icon
     * Returns true if bitmap exists
     *
     * @param {Number} iconIndex - Icon index
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object=0] - The X coordinate or Point or object with parameters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     *
     * @param {Number} [object.x=0] - The X coordinate
     * @param {Number} [object.y=0] - The Y coordinate
     *
     * @see DKTools.Base.prototype.hasBitmap
     * 
     * @returns {Boolean} Bitmap exists
     */
    drawIcon(iconIndex, object, y) {
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
        
        this.bitmap.blt(bitmap, sx, sy, pw, ph, object || 0, y || 0); // object - Number

        return true;
    };

    /**
     * Draws a character face
     * Returns true if bitmap exists
     *
     * @param {String} faceName - Face filename
     * @param {Number} faceIndex - Face index
     * @param {Number | PIXI.Rectangle | Rectangle | Object} [object=0] - The X coordinate or Rectangle or object with parameters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     * @param {Number} [width=Window_Base._faceWidth] - Width of the face (if object is Number)
     * @param {Number} [height=Window_Base._faceHeight] - Height of the face (if object is Number)
     *
     * @param {Number} [object.x=0] - The X coordinate
     * @param {Number} [object.y=0] - The Y coordinate
     * @param {Number} [object.width=Window_Base._faceWidth] - Width of the face
     * @param {Number} [object.height=Window_Base._faceHeight] - Height of the face
     * 
     * @see DKTools.Base.prototype.hasBitmap
     *
     * @returns {Boolean} Bitmap exists
     */
    drawFace(faceName, faceIndex, object, y, width, height) {
        if (!this.hasBitmap()) {
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
        const dx = Math.floor(object || 0 + Math.max(width - pw, 0) / 2); // object - Number
        const dy = Math.floor(y || 0 + Math.max(height - ph, 0) / 2);
        const sx = faceIndex % 4 * pw + (pw - sw) / 2;
        const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;

        this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy);

        return true;
    };

    /**
     * Draws a character
     * Returns true if bitmap exists
     *
     * @param {String} characterName - Character filename
     * @param {Number} characterIndex - Character index
     * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object } [object=0] - The X coordinate or Point or object with parameters
     * @param {Number} [y=0] - The Y coordinate (if object is Number)
     *
     * @param {Number} [object.x=0] - The X coordinate
     * @param {Number} [object.y=0] - The Y coordinate
     *
     * @see DKTools.Base.prototype.hasBitmap
     * 
     * @returns {Boolean} Bitmap exists
     */
    drawCharacter(characterName, characterIndex, object, y) {
        if (!this.hasBitmap()) {
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
        
        this.bitmap.blt(bitmap, sx, sy, pw, ph, object || 0 - pw / 2, y || 0 - ph); // object - Number

        return true;
    };

    /**
     * Draws the name of the item
     * Returns true if bitmap exists
     *
     * @version 3.0.0
     * 
     * @param {Object} item - Item
     * @param {Number} [x=0] - The X coordinate
     * @param {Number} [y=0] - The Y coordinate
     * @param {Number} [width=312] - Width of the name
     * 
     * @see DKTools.Base.prototype.drawIcon
     * @see DKTools.Base.prototype.drawText
     * 
     * @returns {Boolean} Bitmap exists
     */
    drawItemName(item, x, y, width) {
        if (!this.hasBitmap()) {
            return false;
        }

        const iconBoxWidth = Window_Base._iconWidth + 4;

        x = x || 0;
        y = y || 0;

        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawText(item.name, {
            x: x + iconBoxWidth,
            y,
            width: width || 312 - iconBoxWidth,
            align: 'left'
        });

        return true;
    };

    // fill methods

    /**
     * Fills a rectangle with color
     * Returns true if bitmap exists
     *
     * @param {Object} [object={}] - Parameters for drawing
     *
     * @param {String} [object.color='white'] - Fill color
     * @param {PIXI.Rectangle | Rectangle | Object} [object.rect] - Rectangle for drawing
     * @param {Number} [object.x=0] - The X coordinate (if object.rect is undefined or null)
     * @param {Number} [object.y=0] - The Y coordinate (if object.rect is undefined or null)
     * @param {Number} [object.width=this.standardDrawingWidth()] - Width of the rectangle (if object.rect is undefined or null)
     * @param {Number} [object.height=this.standardDrawingHeight()] - Height of the rectangle (if object.rect is undefined or null)
     *
     * @param {Number} [object.rect.x=0] - The X coordinate
     * @param {Number} [object.rect.y=0] - The Y coordinate
     * @param {Number} [object.rect.width] - Width of the rectangle
     * @param {Number} [object.rect.height] - Height of the rectangle
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.standardDrawingWidth
     * @see DKTools.Base.prototype.standardDrawingHeight
     * @see Bitmap.prototype.fillRect
     *
     * @returns {Boolean} Bitmap exists
     */
    fillRect(object) {
        if (!this.hasBitmap()) {
            return false;
        }

        let x, y, width, height;

        if (object.rect instanceof Object) {
            x = object.rect.x;
            y = object.rect.y;
            width = object.rect.width;
            height = object.rect.height;
        } else {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();

        this.bitmap.fillRect(x, y, width, height, object.color);

        return true;
    };

    /**
     * Fills the bitmap with color
     * Returns true if bitmap exists
     *
     * @param {String} [color] - Color of fill
     *
     * @see DKTools.Base.prototype.fillRect
     *
     * @returns {Boolean} Bitmap exists
     */
    fillAll(color) {
        return this.fillRect({ color });
    };

    /**
     * Draws an arc and fills it with color
     * Returns true if bitmap exists
     *
     * @param {Object} [object={}] - Parameters for drawing
     *
     * @param {Number} [object.radius=1] - Radius of the arc
     * @param {Number} [object.startAngle=0] - Starting angle
     * @param {Number} [object.endAngle=Math.PI*2] - End angle
     * @param {String} [object.color='white'] - Fill color
     * @param {Boolean} [object.anticlockwise=false] - Draws an anticlockwise
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pos] - Position of the arc
     * @param {Number} [object.x=0] - The X coordinate (if object.pos is undefined or null)
     * @param {Number} [object.y=0] - The Y coordinate (if object.pos is undefined or null)
     *
     * @param {Number} [object.pos.x=0] - The X coordinate
     * @param {Number} [object.pos.y=0] - The Y coordinate
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Utils.Bitmap.fillArc
     *
     * @returns {Boolean} Bitmap exists
     */
    fillArc(object) {
        if (!this.hasBitmap()) {
            return false;
        }

        object = object || {};

        const startAngle = object.startAngle || 0;
        const endAngle = Number.isFinite(object.endAngle) ? object.endAngle : Math.PI * 2;
        const radius = object.radius || 1;
        const color = object.color || 'white';
        const anticlockwise = object.anticlockwise || false;
        let x, y;

        if (object.pos instanceof Object) {
            x = object.pos.x;
            y = object.pos.y;
        } else {
            x = object.x;
            y = object.y;
        }

        DKTools.Utils.Bitmap.fillArc(this.bitmap, x || 0, y || 0, radius, startAngle, endAngle, color, anticlockwise);

        return true;
    };

    // stroke methods

    /**
     * Draws a rectangle without fill
     * Returns true if bitmap exists
     *
     * @param {Object} [object={}] - Parameters for drawing
     *
     * @param {String} [object.color='white'] - Fill color
     * @param {Number} [object.lineWidth=1] - Line width
     * @param {PIXI.Rectangle | Rectangle | Object} [object.rect] - Rectangle for drawing
     * @param {Number} [object.x=0] - The X coordinate (if object.rect is undefined or null)
     * @param {Number} [object.y=0] - The Y coordinate (if object.rect is undefined or null)
     * @param {Number} [object.width=this.standardDrawingWidth()] - Width of the rectangle (if object.rect is undefined or null)
     * @param {Number} [object.height=this.standardDrawingHeight()] - Height of the rectangle (if object.rect is undefined or null)
     *
     * @param {Number} [object.rect.x=0] - The X coordinate
     * @param {Number} [object.rect.y=0] - The Y coordinate
     * @param {Number} [object.rect.width] - Width of the rectangle
     * @param {Number} [object.rect.height] - Height of the rectangle
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.standardDrawingWidth
     * @see DKTools.Base.prototype.standardDrawingHeight
     * @see DKTools.Utils.Bitmap.strokeRect
     *
     * @returns {Boolean} Bitmap exists
     */
    strokeRect(object) {
        if (!this.hasBitmap()) {
            return false;
        }

        let x, y, width, height;

        if (object.rect instanceof Object) {
            x = object.rect.x;
            y = object.rect.y;
            width = object.rect.width;
            height = object.rect.height;
        } else {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();

        DKTools.Utils.Bitmap.strokeRect(this.bitmap, x, y, width, height, object.color, object.lineWidth);

        return true;
    };

    /**
     * Draws an arc without fill
     * Returns true if bitmap exists
     *
     * @param {Object} [object={}] - Parameters for drawing
     *
     * @param {Number} [object.radius=1] - Radius of arc
     * @param {Number} [object.startAngle=0] - Starting angle
     * @param {Number} [object.endAngle=Math.PI*2] - End angle
     * @param {String} [object.color='white'] - Line color
     * @param {Number} [object.lineWidth=1] - Line width
     * @param {Boolean} [object.anticlockwise=false] - Draws an anticlockwise
     * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.pos] - Position of arc
     * @param {Number} [object.x=0] - The X coordinate (if object.pos is undefined or null)
     * @param {Number} [object.y=0] - The Y coordinate (if object.pos is undefined or null)
     *
     * @param {Number} [object.pos.x=0] - The X coordinate
     * @param {Number} [object.pos.y=0] - The Y coordinate
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Utils.Bitmap.strokeArc
     *
     * @returns {Boolean} Bitmap exists
     */
    strokeArc(object) {
        if (!this.hasBitmap()) {
            return false;
        }

        object = object || {};

        const startAngle = object.startAngle || 0;
        const endAngle = Number.isFinite(object.endAngle) ? object.endAngle : Math.PI * 2;
        const radius = object.radius || 1;
        const color = object.color || 'white';
        const lineWidth = object.lineWidth || 1;
        const anticlockwise = object.anticlockwise || false;
        let x, y;

        if (object.pos instanceof Object) {
            x = object.pos.x;
            y = object.pos.y;
        } else {
            x = object.x;
            y = object.y;
        }

        DKTools.Utils.Bitmap.strokeArc(this.bitmap, x || 0, y || 0, radius, startAngle, endAngle, color, lineWidth, anticlockwise);

        return true;
    };

    // gradient methods

    /**
     * Fills a rectangle with a gradient
     * Returns true if bitmap exists
     *
     * @param {String} [object.color1='black'] - First color
     * @param {String} [object.color2='white'] - Second color
     * @param {Boolean} [object.vertical=false] - Vertical gradient
     * @param {Number | String} [object.x=0] - The X coordinate
     * @param {Number | String} [object.y=0] - The Y coordinate or line number (String)
     * @param {Number | String} [object.width=this.standardDrawingWidth()] - Width of the rectangle
     * @param {Number | String} [object.height=this.standardDrawingHeight()] - Height of the rectangle or number of lines (String)
     * @param {PIXI.Rectangle | Rectangle | Object} [object.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height)
     *
     * @param {Number | String} [object.rect.x=0] - The X coordinate
     * @param {Number | String} [object.rect.y=0] - The Y coordinate or line number (String)
     * @param {Number | String} [object.rect.width=this.standardDrawingWidth()] - Width of the rectangle
     * @param {Number | String} [object.rect.height=this.standardDrawingHeight()] - Height of the rectangle or number of lines (String)
     *
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.standardDrawingWidth
     * @see DKTools.Base.prototype.standardDrawingHeight
     * @see Bitmap.prototype.gradientFillRect
     *
     * @returns {Boolean} Bitmap exists
     */
    gradientFillRect(object) {
        if (!this.hasBitmap()) {
            return false;
        }

        const color1 = object.color1 || 'black';
        const color2 = object.color2 || 'white';
        let x, y, width, height;

        if (object.rect instanceof Object) {
            x = object.rect.x;
            y = object.rect.y;
            width = object.rect.width;
            height = object.rect.height;
        } else {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();

        this.bitmap.gradientFillRect(x, y, width, height, color1, color2, object.vertical || false);

        return true;
    };

    /**
     * Fills the bitmap with gradient
     * Returns true if bitmap exists
     *
     * @param {String} [object.color1='black'] - First color
     * @param {String} [object.color2='white'] - Second color
     * @param {Boolean} [vertical=false] - Vertical gradient
     *
     * @see DKTools.Base.prototype.gradientFillRect
     *
     * @returns {Boolean} Bitmap exists
     */
    gradientFillAll(color1, color2, vertical) {
        return this.gradientFillAll({ color1, color2, vartical });
    };

    // draw text ex methods

    /**
     * Makes a text wrap
     *
     * @param {String} text - Text
     * @param {Object} options - Wrap options
     *
     * @param {Number} [options.maxWidth] - Max width of a text line
     * @param {Number} [options.maxLines] - Max lines
     * @param {Boolean} [options.breakWords] - Breaks a words for the wrapping
     * 
     * @see DKTools.Base.prototype.hasBitmap
     * @see DKTools.Base.prototype.getTextWidth
     *
     * @returns {String} Wrapped text
     */
    textWrap(text, options) {
        if (text == null) {
            return '';
        }

        text = String(text);
        options = options || {};

        if (!text) {
            return '';
        }

        const lines = text.split('\n');
        const maxWidth = options.maxWidth || (this.hasBitmap() ? this.bitmap.width : 0);
        const spaceWidth = this.getTextWidth(' ');

        let result = '';
        let newLines = 1;

        for (let i = 0; i < lines.length; i++) {
            const words = lines[i].split(' ');
            let spaceLeft = maxWidth;            

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
    convertEscapeCharacters(text) {
        try {
            return Window_Base.prototype.convertEscapeCharacters.call(this, text);
        } catch(e) {
            text = text.replace(/\\/g, '\x1b');
            text = text.replace(/\x1b\x1b/g, '\\');
            text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
                return $gameVariables.value(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
                return $gameVariables.value(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
                return this.actorName(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
                return this.partyMemberName(parseInt(arguments[1]));
            }.bind(this));
            text = text.replace(/\x1bG/gi, TextManager.currencyUnit);

            return text;
        }
    };

    /**
     * Returns the name of the actor
     *
     * @param {Number} n - Number of the actor
     * @returns {String} Name of the actor
     */
    actorName(n) {
        const actor = n >= 1 ? $gameActors.actor(n) : null;

        return actor ? actor.name() : '';
    };

    /**
     * Returns the name of the actor
     *
     * @param {Number} n - Number of the actor in the party
     * @returns {String} Name of the actor
     */
    partyMemberName(n) {
        const actor = n >= 1 ? $gameParty.members()[n - 1] : null;
        
        return actor ? actor.name() : '';
    };

    /**
     * Makes the font size bigger
     */
    makeFontBigger() {
        if (this.hasBitmap() && this.bitmap.fontSize <= 96) {
            this.bitmap.fontSize += 12;
        }
    };

    /**
     * Makes the font size smaller
     */
    makeFontSmaller() {
        if (this.hasBitmap() && this.bitmap.fontSize >= 24) {
            this.bitmap.fontSize -= 12;
        }
    };

    /**
     * @param {Object} textState -
     * @param {Boolean} all -
     * @returns {Number}
     */
    calcTextHeight(textState, all) {
        if (!textState || !this.hasBitmap()) {
            return 0;
        }

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
    processCharacter(textState) {
        Window_Base.prototype.processCharacter.call(this, textState);
    };

    /**
     * @param {Object} textState
     */
    processNormalCharacter(textState) {
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
    processNewLine(textState) {
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
    processNewPage(textState) {
        Window_Base.prototype.processNewPage.call(this, textState);
    };

    /**
     * @param {String} code
     * @param {Object} textState
     */
    processEscapeCharacter(code, textState) {
        try {
            Window_Base.prototype.processEscapeCharacter.call(this, code, textState);
        } catch(e) {
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
        }
    };

    /**
     * @param {Number} iconIndex
     * @param {Object} textState
     */
    processDrawIcon(iconIndex, textState) {
        Window_Base.prototype.processDrawIcon.call(this, iconIndex, textState);
    };

    /**
     * @param {Object} textState
     */
    obtainEscapeCode(textState) {
        return Window_Base.prototype.obtainEscapeCode.call(this, textState);
    };

    /**
     * @param {Object} textState
     */
    obtainEscapeParam(textState) {
        return Window_Base.prototype.obtainEscapeParam.call(this, textState);
    };

    // load methods

    /**
     * Loads a bitmap from img/animations/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadAnimation(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/animations/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/animations/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/battlebacks1/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadBattleback1(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/battlebacks1/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/battlebacks1/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/battlebacks2/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadBattleback2(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/battlebacks2/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/battlebacks2/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/enemies/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadEnemy(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/enemies/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/enemies/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/characters/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadCharacter(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/characters/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/characters/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/faces/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadFace(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/faces/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/faces/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/parallaxes/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadParallax(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/parallaxes/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/parallaxes/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/pictures/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadPicture(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/pictures/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/pictures/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/sv_actors/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadSvActor(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/sv_actors/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/sv_actors/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/sv_enemies/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadSvEnemy(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/sv_enemies/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/sv_enemies/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/system/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadSystem(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/system/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/system/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/tilesets/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadTileset(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/tilesets/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/tilesets/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/titles1/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadTitle1(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/titles1/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/titles1/', object, listener, hue, smooth);
    };

    /**
     * Loads a bitmap from img/titles2/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadTitle2(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadBitmap('img/titles2/', object.filename, object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadBitmap('img/titles2/', object, listener, hue, smooth);
    };

    /**
     * Loads a windowskin from img/system/
     * Returns true if the bitmap of the object has been changed
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    loadWindowskin(object, listener, hue, smooth) {
        if (object instanceof Object) {
            return this.loadSystem(object.filename || this.standardWindowskin(), object.listener, object.hue, object.smooth);
        }

        // object - String
        return this.loadSystem(object || this.standardWindowskin(), listener, hue, smooth);
    };

    // reserve methods

    /**
     * Loads and reserves a bitmap from img/animations/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     * 
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveAnimation(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/animations/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/animations/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/battlebacks1/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveBattleback1(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/battlebacks1/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/battlebacks1/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/battlebacks2/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     * 
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveBattleback2(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/battlebacks2/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/battlebacks2/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/enemies/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     * 
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveEnemy(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/enemies/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/enemies/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/characters/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveCharacter(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/characters/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/characters/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/faces/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveFace(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/faces/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/faces/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/parallaxes/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveParallax(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/parallaxes/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/parallaxes/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/pictures/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reservePicture(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/pictures/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/pictures/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/sv_actors/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveSvActor(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/sv_actors/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/sv_actors/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/sv_enemies/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveSvEnemy(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/sv_enemies/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/sv_enemies/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/system/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveSystem(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/system/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/system/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/tilesets/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveTileset(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/tilesets/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/tilesets/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/titles1/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveTitle1(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/titles1/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/titles1/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a bitmap from img/titles2/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see DKTools.Base.prototype.reserveBitmap
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveTitle2(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveBitmap('img/titles2/', object.filename, object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveBitmap('img/titles2/', object, listener, hue, smooth, reservationId);
    };

    /**
     * Loads and reserves a windowskin from img/system/
     * Returns true if the bitmap of the object has been changed
     *
     * @version 3.0.0
     *
     * @param {String | Object} object - Name of file or object with parameters
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     * @param {Number} [hue] - Hue of bitmap (if object is String)
     * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
     * @param {Number} [reservationId] - Reservation ID (if object is String)
     *
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @param {Number} [object.hue] - Hue of bitmap
     * @param {Boolean} [object.smooth] - Smooth of bitmap
     * @param {Number} [object.reservationId] - Reservation ID
     *
     * @see DKTools.Base.prototype.standardWindowskin
     * @see DKTools.Base.prototype.reserveSystem
     * @see Bitmap.prototype.addLoadListener
     *
     * @returns {Boolean} Bitmap of the object has been changed
     */
    reserveWindowskin(object, listener, hue, smooth, reservationId) {
        if (object instanceof Object) {
            return this.reserveSystem(object.filename || this.standardWindowskin(), object.listener, object.hue, object.smooth, object.reservationId);
        }

        // object - String
        return this.reserveSystem(object || this.standardWindowskin(), listener, hue, smooth, reservationId);
    };

    // options methods

    /**
     * Clears the options
     *
     * @since 2.0.0
     *
     * @see DKTools.OptionManager.prototype.clear
     */
    clearOptions() {
        this._optionManager.clear();
    };

    /**
     * Returns true if the option is enabled
     *
     * @version 2.0.0
     * 
     * @param {String} option - Name of the option
     * 
     * @see DKTools.OptionManager.prototype.isOptionEnabled
     * 
     * @returns {Boolean} Option is enabled
     */
    isOptionEnabled(option) {
        return this._optionManager.isOptionEnabled(option);
    };

    /**
     * Returns conjunction of the options
     *
     * @version 2.0.0
     * 
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.isOptionsEnabled
     * 
     * @returns {Boolean} Conjunction of the options
     */
    isOptionsEnabled(object) {
        return this._optionManager.isOptionsEnabled.apply(this._optionManager, arguments);
    };

    /**
     * Returns disjunction of the options
     *
     * @since 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isSomeOptionsEnabled
     *
     * @returns {Boolean} Disjunction of the options
     */
    isSomeOptionsEnabled(object) {
        return this._optionManager.isSomeOptionsEnabled.apply(this._optionManager, arguments);
    };

    /**
     * Returns true if the option is disabled
     *
     * @version 2.0.0
     *
     * @param {String} option - Name of the option
     *
     * @see DKTools.OptionManager.prototype.isOptionDisabled
     *
     * @returns {Boolean} Option is disabled
     */
    isOptionDisabled(option) {
        return this._optionManager.isOptionDisabled(option);
    };

    /**
     * Returns conjunction of the options
     *
     * @version 2.0.0
     * 
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.isOptionsDisabled
     * 
     * @returns {Boolean} Conjunction of the options
     */
    isOptionsDisabled(object) {
        return this._optionManager.isOptionsDisabled.apply(this._optionManager, arguments);
    };

    /**
     * Returns disjunction of the options
     *
     * @since 2.0.0
     *
     * @param {String[] | ...String} object - Names of the options
     *
     * @see DKTools.OptionManager.prototype.isSomeOptionsDisabled
     *
     * @returns {Boolean} Disjunction of the options
     */
    isSomeOptionsDisabled(object) {
        return this._optionManager.isSomeOptionsDisabled.apply(this._optionManager, arguments);
    };

    /**
     * Returns true if some option is enabled
     *
     * @since 2.0.0
     *
     * @see DKTools.OptionManager.prototype.isSomeOptionEnabled
     *
     * @returns {Boolean} Some option is enabled
     */
    isSomeOptionEnabled() {
        return this._optionManager.isSomeOptionEnabled();
    };

    /**
     * Adds a listener of change of the option
     *
     * @version 2.0.0
     * 
     * @param {String} option - Name of the option
     * @param {Function} listener - Listener
     * 
     * @see DKTools.OptionManager.prototype.addOptionChangeListener
     */
    addOptionChangeListener(option, listener) {
        this._optionManager.addOptionChangeListener(options, listener);
    };

    /**
     * Removes the listener of change of the option
     * 
     * @since 2.0.0
     * 
     * @param {String} option - Name of the option
     * @param {Function} listener - Listener
     * 
     * @see DKTools.OptionManager.prototype.removeOptionChangeListener
     */
    removeOptionChangeListener(option, listener) {
        this._optionManager.removeOptionsChangeListener(option, listener);
    };

    /**
     * Turns on the option
     *
     * @version 2.0.0
     * 
     * @param {String} option - Name of the option
     * 
     * @see DKTools.OptionManager.prototype.enableOption
     */
    enableOption(option) {
        this._optionManager.enableOption(option);
    };

    /**
     * Turns on the options
     *
     * @version 2.0.0
     * 
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.enableOptions
     */
    enableOptions(object) {
        this._optionManager.enableOptions.apply(this._optionManager, arguments);
    };

    /**
     * Turns off the option
     *
     * @version 2.0.0
     * 
     * @param {String} option - Name of the option
     * 
     * @see DKTools.OptionManager.prototype.disableOption
     */
    disableOption(option) {
        this._optionManager.disableOption(option);
    };

    /**
     * Turns off the options
     *
     * @version 2.0.0
     * 
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.disableOptions
     */
    disableOptions(object) {
        this._optionManager.disableOptions.apply(this._optionManager, arguments);
    };

    /**
     * Switches the option
     *
     * @version 2.0.0
     * 
     * @param {String} option - Name of the option
     * 
     * @see DKTools.OptionManager.prototype.switchOption
     */
    switchOption(option) {
        this._optionManager.switchOption(option);
    };

    /**
     * Switches the options
     *
     * @version 2.0.0
     * 
     * @param {String[] | ...String} object - Names of the options
     * 
     * @see DKTools.OptionManager.prototype.switchOptions
     */
    switchOptions(object) {
        this._optionManager.switchOptions.apply(this._optionManager, arguments);
    };

    // events methods

    /**
     * Clears the events
     *
     * @version 2.0.0
     *
     * @param {String[] | String} object Array with event types or event type
     *
     * @see DKTools.EventManager.prototype.clearEvents
     */
    clearEvents(object) {
        this._eventManager.clearEvents(object);
    };

    /**
     * Removes the event from a container
     * Returns true if the event was removed
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.removeEvent
     *
     * @returns {Boolean} Event was removed
     */
    removeEvent(event) {
        return this._eventManager.removeEvent(event);
    };

    /**
     * Performs a callback function for the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     * @param {Function} callback - Event processing function
     *
     * @see DKTools.EventManager.prototype.iterateEventsContainer
     */
    iterateEventsContainer(type, callback) {
        this._eventManager.iterateEventsContainer(type, callback);
    };

    /**
     * Checks the events for pause
     * Returns the conjunction of pauses of the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.EventManager.prototype.isEventsPaused
     *
     * @returns {Boolean} Conjunction of pauses of the events
     */
    isEventsPaused(type) {
        return this._eventManager.isEventsPaused(type);
    };

    /**
     * Pauses the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     * @param {Number} duration - Duration of pause
     *
     * @see DKTools.EventManager.prototype.pauseEvents
     */
    pauseEvents(type, duration) {
        this._eventManager.pauseEvents(type, duration);
    };

    /**
     * Resumes the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.EventManager.prototype.resumeEvents
     */
    resumeEvents(type) {
        this._eventManager.resumeEvents(type);
    };

    /**
     * Finishes the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
     *
     * @see DKTools.EventManager.prototype.finishEvents
     */
    finishEvents(type, forcedSuccess) {
        this._eventManager.finishEvents(type, forcedSuccess);
    };

    /**
     * Stops the events
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
     *
     * @see DKTools.EventManager.prototype.stopEvents
     */
    stopEvents(type, forcedSuccess) {
        this._eventManager.stopEvents(type, forcedSuccess);
    };

    /**
     * Updates the events
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.update
     * @see DKTools.Base.protoype.updateReadyEvents
     * @see DKTools.Base.protoype.updateUpdateEvents
     * @see DKTools.Base.protoype.updateQueueEvents
     * @see DKTools.Base.protoype.updateWheelEvents
     */
    updateEvents() {
        this._eventManager.update();
        this.updateReadyEvents();
        this.updateUpdateEvents();
        this.updateQueueEvents();
    };

    /**
     * Updates the event
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.updateEvent
     */
    updateEvent(event) {
        this._eventManager.updateEvent(event);
    };

    /**
     * Updates the events from container
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateEventsContainer(type) {
        this._eventManager.updateEventsContainer(type);
    };

    /**
     * Updates the events with type: remove-all-children
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateRemoveAllChildrenEvents() {
        this.updateEventsContainer('remove-all-children');
    };

    /**
     * Updates the events with type: terminate-all-children
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateTerminateAllEvents() {
        this.updateEventsContainer('terminate-all-children');
    };

    /**
     * Updates the events with type: remove-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateRemoveAllEvents() {
        this.updateEventsContainer('remove-all');
    };

    /**
     * Updates the events with type: check-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateCheckAllEvents() {
        this.updateEventsContainer('check-all');
    };

    /**
     * Updates the events with type: create-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateCreateAllEvents() {
        this.updateEventsContainer('create-all');
    };

    /**
     * Updates the events with type: start-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateStartAllEvents() {
        this.updateEventsContainer('start-all');
    };

    /**
     * Updates the events with type: add-all-children
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateAddAllChildrenEvents() {
        this.updateEventsContainer('add-all-children');
    };

    /**
     * Updates the events with type: refresh-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateRefreshAllEvents() {
        this.updateEventsContainer('refresh-all');
    };

    /**
     * Updates the events with type: update-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateUpdateAllEvents() {
        this.updateEventsContainer('update-all');
    };

    /**
     * Updates the events with type: redraw-all
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateRedrawAllEvents() {
        this.updateEventsContainer('redraw-all');
    };

    /**
     * Updates the events with type: start
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateStartEvents() {
        if (this.isStarted()) {
            this.updateEventsContainer('start');
        }
    };

    /**
     * Updates the events with type: ready
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateReadyEvents() {
        if (this.isReady()) {
            this.updateEventsContainer('ready');
        }
    };

    /**
     * Updates the events with type: update
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateUpdateEvents() {
        this.updateEventsContainer('update');
    };

    /**
     * Updates the events with type: queue
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateQueueEvents() {
        const container = this.getEventsContainerByType('queue');
        const event = container[0];
        this.updateEvent(event);
    };

    /**
     * Updates the events with type: activate
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateActivateEvents() {
        this.updateEventsContainer('activate');
    };

    /**
     * Updates the events with type: deactivate
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateDeactivateEvents() {
        this.updateEventsContainer('deactivate');
    };

    /**
     * Updates the events with type: show
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateShowEvents() {
        this.updateEventsContainer('show');
    };

    /**
     * Updates the events with type: hide
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateHideEvents() {
        this.updateEventsContainer('hide');
    };

    /**
     * Updates the events with type: mouse-enter
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseEnterEvents() {
        this.updateEventsContainer('mouse-enter');
    };

    /**
     * Updates the events with type: mouse-inside
     *
     * @since 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseInsideEvents() {
        this.updateEventsContainer('mouse-inside');
    };

    /**
     * Updates the events with type: mouse-move
     *
     * @since 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseMoveEvents() {
        this.updateEventsContainer('mouse-move');
    };

    /**
     * Updates the events with type: mouse-leave
     *
     * @version 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseLeaveEvents() {
        this.updateEventsContainer('mouse-leave');
    };

    /**
     * Updates the events with type: mouse-outside
     *
     * @since 2.0.0
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateMouseOutsideEvents() {
        this.updateEventsContainer('mouse-outside');
    };

    /**
     * Updates the events with type: wheel-X-inside or wheel-X-outside
     *
     * @version 2.0.0
     *
     * @param {String} type Type of the wheel event (inside or outside)
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateWheelXEvents(type) {
        this.updateEventsContainer('wheel-X-' + type);
    };

    /**
     * Updates the events with type: wheel-Y-inside or wheel-Y-outside
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the wheel event (inside or outside)
     *
     * @see DKTools.EventManager.prototype.updateEventsContainer
     */
    updateWheelYEvents(type) {
        this.updateEventsContainer('wheel-Y-' + type);
    };

    /**
     * Returns a container for the events by event type
     *
     * @version 2.0.0
     *
     * @param {String} type - Type of the events
     *
     * @see DKTools.EventManager.prototype.getEventsContainerByType
     *
     * @returns {Array} Container for the events
     */
    getEventsContainerByType(type) {
        return this._eventManager.getEventsContainerByType(type);
    };

    /**
     * Returns a container for the events by event
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.getEventsContainer
     *
     * @returns {Array} Container for the events
     */
    getEventsContainer(event) {
        return this._eventManager.getEventsContainer(event);
    };

    /**
     * Returns an index of the event in its container
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.getEventIndex
     *
     * @returns {Number} Index of the event in its container
     */
    getEventIndex(event) {
        return this._eventManager.getEventIndex(event);
    };

    /**
     * Returns an array with the all events or events of a certain type
     *
     * @version 2.0.0
     *
     * @param {String} [type] - Type of the events
     *
     * @see DKTools.EventManager.prototype.getEvents
     *
     * @returns {Array} Array with the events
     */
    getEvents(type) {
        return this._eventManager.getEvents(type);
    };

    /**
     * Returns an array with the all animations or animations of a certain type
     *
     * @version 2.0.0
     *
     * @param {String} [type] - Type of animation
     *
     * @see DKTools.EventManager.prototype.getAnimations
     *
     * @returns {Array} Array with the animations
     */
    getAnimations(type) {
        return this._eventManager.getAnimations(type);
    };

    /**
     * Checks for existence of the event in the object
     * Returns true if the event exists
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | DKTools.Animation} event - Event
     *
     * @see DKTools.EventManager.prototype.hasEvent
     *
     * @returns {Boolean} Event exists
     */
    hasEvent(event) {
        return this._eventManager.hasEvent(event);
    };

    /**
     * Checks for existence of the events of a certain type
     * Returns true if the events exists
     *
     * @version 2.0.0
     *
     * @param {String} [type] - Type of the Events
     *
     * @see DKTools.EventManager.prototype.hasEvents
     *
     * @returns {Boolean} Events exists
     */
    hasEvents(type) {
        return this._eventManager.hasEvents(type);
    };

    /**
     * Checks for existence of the animation in the object
     * Returns true if the animation exists
     *
     * @version 2.0.0
     *
     * @param {DKTools.Animation} animation - Animation
     *
     * @see DKTools.EventManager.prototype.hasAnimation
     *
     * @returns {Boolean} Animation exists
     */
    hasAnimation(animation) {
        return this._eventManager.hasAnimation(animation);
    };

    /**
     * Checks for existence of the animations of a certain type
     * Returns true if the animations exists
     *
     * @version 2.0.0
     *
     * @param {String} [type] - Type of the animations
     *
     * @see DKTools.EventManager.prototype.hasAnimations
     *
     * @returns {Boolean} Animations exists
     */
    hasAnimations(type) {
        return this._eventManager.hasAnimations(type);
    };

    /**
     * Adds the event
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.repeatTime] - Time of one repeat
     * @param {Number} [object.repeats] - Amount of repeats
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     *
     * @see DKTools.Event
     * @see DKTools.EventManager.prototype.addEvent
     *
     * @returns {DKTools.Event} Added event
     */
    addEvent(object) {
        return this._eventManager.addEvent(object);
    };

    /**
     * Adds the one time event
     *
     * @version 2.0.0
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {String} [object.type] - Type of the event
     * @param {Number} [object.remainingPauseTime] - Remaining time of pause
     * @param {Function} [object.onStart] - Handler of the event start
     * @param {Function} [object.onUpdate] - Handler of the event update
     * @param {Function} [object.onPause] - Handler of the event pause
     * @param {Function} [object.onReset] - Handler of the event reset
     * @param {Function} [object.onRepeat] - Handler of the event repeat
     * @param {Function} [object.onSuccess] - Handler of the event success
     * @param {Function} [object.onFail] - Handler of the event fail
     *
     * @see DKTools.Event
     * @see DKTools.EventManager.prototype.addOneTimeEvent
     *
     * @returns {DKTools.Event} Added event
     */
    addOneTimeEvent(object) {
        return this._eventManager.addOneTimeEvent(object);
    };

    /**
     * Adds the animation
     *
     * @version 2.0.0
     *
     * @param {DKTools.Animation} animation - Animation to add
     *
     * @see DKTools.EventManager.addAnimation
     */
    addAnimation(animation) {
        this._eventManager.addAnimation(animation);
    };

    // process methods

    /**
     * Processes all
     *
     * @version 2.0.0
     *
     * @see DKTools.Base.prototype.processMouse
     * @see DKTools.Base.prototype.processWheel
     */
    processAll() {
        this.processMouse();
        this.processWheel();
    };

    /**
     * Processes a mouse
     *
     * @since 2.0.0
     */
    processMouse() {
        if (this.isOptionEnabled('process-mouse') && this.isVisible() &&
            (this.isActive() || this.isOptionEnabled('process-mouse-ignore-active'))) {
                if (this.isMouseInside()) {
                    if (this._mouseEnterTime === 0) {
                        this.updateMouseEnterEvents();
                    }

                    this.updateMouseInsideEvents();

                    if (TouchInput.isMouseMoved()) {
                        this.updateMouseMoveEvents();
                    }

                    this._mouseEnterTime++;
                } else {
                    if (this._mouseEnterTime > 0) {
                        this.updateMouseLeaveEvents();
                    }

                    this.updateMouseOutsideEvents();
                    this._clearMouseEnterTime();
                }
        } else {
            this._clearMouseEnterTime();
        }
    };

    /**
     * Processes a wheel
     * 
     * @since 2.0.0
     */
    processWheel() {
        this._wheelX = TouchInput.wheelX;
        this._wheelY = TouchInput.wheelY;

        if (this._wheelX !== 0 || this._wheelY !== 0) {
            let type;

            if (this.isMouseInside()) {
                type = 'inside';
            } else {
                type = 'outside';
            }

            if (this._wheelX !== 0) {
                this.updateWheelXEvents(type);
            }

            if (this._wheelY !== 0) {
                this.updateWheelYEvents(type);
            }
        }
    };

    // update methods

    /**
     * Updates all
     *
     * @version 1.1.0
     * 
     * @see DKTools.Base.prototype.updateOpacity
     * @see DKTools.Base.prototype.updateUpdateAllEvents
     */
    updateAll() {
        this.updateOpacity();
        this.updateUpdateAllEvents();
    };

    /**
     * Updates the object
     * 
     * @see DKTools.Base.prototype.updateChildren
     * @see DKTools.Base.prototype.processAll
     * @see DKTools.Base.prototype.updateEvents
     */
    update() {
        this.updateChildren();
        this.processAll();
        this.updateEvents();
    };

    /**
     * Updates the opacity of the object
     */
    updateOpacity() {
        // to be overriden by plugins
    };

    /**
     * Updates input data
     *
     * @see SceneManager.updateInputData
     */
    updateInputData() {
        SceneManager.updateInputData();
    };

};

// properties

Object.defineProperties(DKTools.Base.prototype, {

    /**
     * The object ID
     *
     * @readonly
     * @type {Number | String | null}
     * @memberof DKTools.Base.prototype
     */
    id : {
        get: function() {
            return this._id;
        },
        configurable: true
    },

    /**
     * The X coordinate of mouse inside the object
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    mouseX : {
        get: function() {
            return this.canvasToLocalX(TouchInput.mouseX);
        },
        configurable: true
    },

    /**
     * The Y coordinate of mouse inside the object
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    mouseY : {
        get: function() {
            return this.canvasToLocalY(TouchInput.mouseY);
        },
        configurable: true
    },

    /**
     * Number of pixels scrolling mouse on X axis
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    wheelX: {
        get: function() {
            return this._wheelX;
        },
        configurable: true
    },

    /**
     * Number of pixels scrolling mouse on Y axis
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    wheelY: {
        get: function() {
            return this._wheelY;
        },
        configurable: true
    },

    /**
     * Time of mouse enter inside the object
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Base.prototype
     */
    mouseEnterTime: {
        get: function() {
            return this._mouseEnterTime;
        },
        configurable: true
    }

});




//===========================================================================
// DKTools.Sprite
//===========================================================================

DKTools.Sprite.prototype = Object.create(Sprite.prototype);
DKTools.Utils.mixin(DKTools.Sprite.prototype, DKTools.Base.prototype);
DKTools.Sprite.prototype.constructor = DKTools.Sprite;

/**
 * Counter of created sprites
 *
 * @private
 * @readonly
 * @type {Number}
 * @memberof DKTools.Sprite
 */
DKTools.Sprite._counter = 0;

// properties

Object.defineProperties(DKTools.Sprite.prototype, {

    /**
     * Window skin
     *
     * @readonly
     * @type {Bitmap | null}
     * @memberof DKTools.Sprite.prototype
     */
    windowskin: {
        get: function() {
            return this._windowskin;
        },
        configurable: true
    },

    /**
     * Frame of the sprite
     *
     * @readonly
     * @type {Rectangle}
     * @memberof DKTools.Sprite.prototype
     */
    frame: {
        get: function() {
            return this._frame;
        },
        configurable: true
    },

    /**
     * Real width of the sprite (not including scaling)
     *
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
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
     * Real height of the sprite (not including scaling)
     *
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
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
     * Width of the sprite (taking into account the scaling)
     *
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
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
     * Height of the sprite (taking into account the scaling)
     *
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
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
     * Text font
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.Sprite.prototype
     */
    font: {
        get: function() {
            return this._font;
        },
        configurable: true
    },

    /**
     * Text color
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.prototype
     */
    textColor: {
        get: function() {
            return this._textColor;
        },
        configurable: true
    },

    /**
     * Paint opacity
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.prototype
     */
    paintOpacity: {
        get: function() {
            return this._paintOpacity;
        },
        configurable: true
    },

    /**
     * Fill color
     *
     * @readonly
     * @type {String | null}
     * @memberof DKTools.Sprite.prototype
     */
    fillColor: {
        get: function() {
            return this._fillColor;
        },
        configurable: true
    },

    /**
     * Text align
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.prototype
     */
    align: {
        get: function() {
            return this._align;
        },
        configurable: true
    },

    /**
     * Texts
     *
     * @readonly
     * @type {Object[]}
     * @memberof DKTools.Sprite.prototype
     */
    texts: {
        get: function() {
            return this._texts;
        },
        configurable: true
    },

    /**
     * Graphic folder
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.prototype
     */
    graphicFolder: {
        get: function() {
            return this._graphicFolder;
        },
        configurable: true
    },

    /**
     * Graphic name
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.prototype
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
 * Initializes a class object
 *
 * @version 3.0.0
 *
 * @override
 *
 * @param {Number | DKTools.Sprite | Bitmap | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Sprite or Bitmap or Rectangle or object with properties
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the bitmap (if object is Number)
 * @param {Number} [height] - Height of the bitmap (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the bitmap
 * @param {Number} [object.height] - Height of the bitmap
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see Sprite.prototype.initialize
 * @see DKTools.Base.prototype.initialize
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.prototype.setupSize
 * @see DKTools.Sprite.prototype.setupBitmap
 * @see DKTools.Sprite.prototype.updateBitmap
 */
DKTools.Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);

    if (object instanceof DKTools.Sprite && !object.isStarted() && !object.hasFixedBitmap()) {
        this.setupSize(object._getBitmapWidth(), object._getBitmapHeight());
    } else if (object instanceof Bitmap) {
        this.setupBitmap(object);
    }

    this.updateBitmap();
    DKTools.Sprite._counter++;
};

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 * 
 * @see DKTools.Base.prototype._clearAll
 * @see DKTools.Sprite.prototype._clearTexts
 */
DKTools.Sprite.prototype._clearAll = function() {
    DKTools.Base.prototype._clearAll.call(this);
    this._clearTexts();
};

/**
 * Clears all texts
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
 * Returns the standard font face
 *
 * @returns {String} Standard font face
 */
DKTools.Sprite.prototype.standardFontFace = function() {
    return 'GameFont';
};

/**
 * Returns the standard font size
 *
 * @returns {String} Standard font size
 */
DKTools.Sprite.prototype.standardFontSize = function() {
    return 28;
};

/**
 * Returns the standard font italic
 *
 * @returns {String} Standard font italic
 */
DKTools.Sprite.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Returns the standard font
 *
 * @see DKTools.Sprite.prototype.standardFontFace
 * @see DKTools.Sprite.prototype.standardFontSize
 * @see DKTools.Sprite.prototype.standardFontItalic
 * 
 * @returns {Object} Standard font
 */
DKTools.Sprite.prototype.standardFont = function() {
    return {
        fontFace: this.standardFontFace(),
        fontSize: this.standardFontSize(),
        fontItalic: this.standardFontItalic()
    };
};

/**
 * Returns the standard text color
 *
 * @returns {String} Standard text color
 */
DKTools.Sprite.prototype.standardTextColor = function() {
    return '#ffffff';
};

/**
 * Returns the standard paint opacity
 *
 * @returns {Number} Standard paint opacity
 */
DKTools.Sprite.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Returns the standard fill color
 *
 * @returns {String | null} Standard fill color
 */
DKTools.Sprite.prototype.standardFillColor = function() {
    return null;
};

/**
 * Returns the standard text align
 *
 * @returns {String} Standard text align
 */
DKTools.Sprite.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Returns the standard graphic folder
 *
 * @returns {String} Standard graphic folder
 */
DKTools.Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

/**
 * Returns the standard graphic name
 *
 * @returns {String} standard graphic name
 */
DKTools.Sprite.prototype.standardGraphicName = function() {
    return '';
};

/**
 * Returns the standard opacity
 *
 * @returns {Number} Standard opacity
 */
DKTools.Sprite.prototype.standardOpacity = function() {
	return 255;
};

/**
 * Returns the standard frame
 *
 * @returns {Rectangle} Standard frame
 */
DKTools.Sprite.prototype.standardFrame = function() {
    return new Rectangle(0, 0, this.width, this.height);
};

/**
 * Returns the standard anchor
 *
 * @returns {Point} Standard anchor
 */
DKTools.Sprite.prototype.standardAnchor = function() {
    return new Point(0, 0);
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 *
 * @param {Bitmap | Object} [object.bitmap] - Bitmap or object with parameters
 * @param {Object} [object.font] - Text font
 * @param {String} [object.textColor] - Text color
 * @param {Number} [object.paintOpacity] - Paint opacity
 * @param {String} [object.fillColor] - Fill color
 * @param {String} [object.align] - Text align
 * @param {Number} [object.opacity] - Opacity
 * @param {String} [object.graphicFolder] - Graphic folder
 * @param {String} [object.graphicName] - Graphic name
 * @param {PIXI.Rectangle | Rectangle | Object} [object.frame] - Rectangle or object with parameters
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [object.anchor] - Anchor of the sprite
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @param {Number} [object.frame.x] - The X coordinate
 * @param {Number} [object.frame.y] - The Y coordinate
 * @param {Number} [object.frame.width] - Width of the frame
 * @param {Number} [object.frame.height] - Height of the frame
 *
 * @param {Number} [object.anchor.x] - The X coordinate
 * @param {Number} [object.anchor.y] - The Y coordinate
 *
 * @see DKTools.Base.prototype.setupAll
 * @see DKTools.Sprite.prototype.setupBitmap
 * @see DKTools.Sprite.prototype.setupFont
 * @see DKTools.Sprite.prototype.setupTextColor
 * @see DKTools.Sprite.prototype.setupPaintOpacity
 * @see DKTools.Sprite.prototype.setupFillColor
 * @see DKTools.Sprite.prototype.setupAlign
 * @see DKTools.Sprite.prototype.setupOpacity
 * @see DKTools.Sprite.prototype.setupGraphicFolder
 * @see DKTools.Sprite.prototype.setupGraphicName
 * @see DKTools.Sprite.prototype.setupFrame
 * @see DKTools.Sprite.prototype.setupAnchor
 */
DKTools.Sprite.prototype.setupAll = function(object) {
	object = object || {};
    DKTools.Base.prototype.setupAll.call(this, object);
    this.setupBitmap(object);
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
 * Sets the width of the bitmap
 *
 * @param {Number} [width] - Width of the bitmap
 *
 * @see DKTools.Base.prototype._checkWidth
 */
DKTools.Sprite.prototype.setupWidth = function(width) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
	this._bitmapWidth = this._checkWidth(width);
};

/**
 * Sets the height of the bitmap
 *
 * @param {Number | String} [height] - Height of the bitmap or number of lines
 *
 * @see DKTools.Base.prototype.getLineHeight
 * @see DKTools.Base.prototype._checkHeight
 */
DKTools.Sprite.prototype.setupHeight = function(height) {
    if (DKTools.Utils.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }

    /**
     * @private
     * @readonly
     * @type {Number}
     */
	this._bitmapHeight = this._checkHeight(height);
};

/**
 * Sets the size of the bitmap
 *
 * @param {Number | Object} [object] - Width of the bitmap or object with parameters
 * @param {Number} [height] - Height of the bitmap (if object is Object)
 *
 * @param {Number} [object.width] - Width of the bitmap
 * @param {Number} [object.height] - Height of the bitmap
 *
 * @see DKTools.Sprite.prototype.setupWidth
 * @see DKTools.Sprite.prototype.setupHeight
 */
DKTools.Sprite.prototype.setupSize = function(object, height) {
    if (object instanceof Object) {
        return this.setupSize(object.width, object.height);
    }

    this.setupWidth(object);
    this.setupHeight(height);
};

/**
 * Sets the bitmap
 *
 * @version 2.0.1
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Utils.Bitmap.load
 */
DKTools.Sprite.prototype.setupBitmap = function(object) {
    let bitmap = null;

    if (object instanceof DKTools.Sprite &&
        object.hasFixedBitmap() &&
        object.canCloneFixedBitmap()) {
            bitmap = DKTools.Utils.Bitmap.clone(object.bitmap);
    } else {
        bitmap = DKTools.Utils.Bitmap.load(object);
    }

    if (bitmap) {
        this.bitmap = bitmap;
        this.bitmap.addLoadListener(this.setupSize.bind(this));
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
 * Sets the font of the bitmap
 *
 * @param {Object} [font=this.standardFont()] - Text font
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.standardFont
 */
DKTools.Sprite.prototype.setupFont = function(font) {
    /**
     * @private
     * @readonly
     * @type {Object}
     */
    this._font = Object.assign(this.standardFont(), font);
};

/**
 * Sets the color of the text
 *
 * @param {String} [color=this.standardTextColor()] - Text color
 *
 * @see DKTools.Sprite.prototype.standardTextColor
 */
DKTools.Sprite.prototype.setupTextColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._textColor = color || this.standardTextColor();
};

/**
 * Sets the paint opacity
 *
 * @param {Number} [opacity=this.standardPaintOpacity()] - Paint opacity
 *
 * @see DKTools.Sprite.prototype.standardPaintOpacity
 */
DKTools.Sprite.prototype.setupPaintOpacity = function(opacity) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._paintOpacity = (opacity == null ? this.standardPaintOpacity() : opacity);
};

/**
 * Sets the fill color
 *
 * @param {String} [color=this.standardFillColor()] - Fill color
 *
 * @see DKTools.Sprite.prototype.standardFillColor
 */
DKTools.Sprite.prototype.setupFillColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String | null}
     */
    this._fillColor = (color == null ? this.standardFillColor() : color);
};

/**
 * Sets the align
 *
 * @param {String} [align=this.standardAlign()] - Text align
 *
 * @see DKTools.Sprite.prototype.standardAlign
 */
DKTools.Sprite.prototype.setupAlign = function(align) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._align = align || this.standardAlign();
};

/**
 * Sets the opacity of the sprite
 *
 * @param {Number} [opacity=this.standardOpacity()] - Opacity
 *
 * @see DKTools.Sprite.prototype.standardOpacity
 */
DKTools.Sprite.prototype.setupOpacity = function(opacity) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._opacity = (opacity == null ? this.standardOpacity() : opacity);
};

/**
 * Sets the graphic folder
 *
 * @param {String} [folder=this.standardGraphicFolder()] - Path to folder
 *
 * @see DKTools.Sprite.prototype.standardGraphicFolder
 */
DKTools.Sprite.prototype.setupGraphicFolder = function(folder) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicFolder = (folder == null ? this.standardGraphicFolder() : folder);
};

/**
 * Sets the graphic name
 *
 * @param {String} [graphicName=this.standardGraphicName()] - Graphic name
 *
 * @see DKTools.Sprite.prototype.standardGraphicName
 */
DKTools.Sprite.prototype.setupGraphicName = function(graphicName) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicName = (graphicName == null ? this.standardGraphicName() : graphicName);
};

/**
 * Sets the frame of the sprite
 *
 * @version 1.1.0
 *
 * @param {Number | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the frame (if object is Number)
 * @param {Number} [height] - Height of the frame (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the frame
 * @param {Number} [object.height] - Height of the frame
 *
 * @see DKTools.Utils.Rectangle.toRectangle
 * @see DKTools.Sprite.prototype.standardFrame
 * @see Sprite.prototype.setFrame
 * @see DKTools.Sprite.prototype.hasFixedBitmap
 */
DKTools.Sprite.prototype.setupFrame = function(object, y, width, height) {
    const frame = DKTools.Utils.Rectangle.toRectangle(object, y, width, height);
    const newFrame = Object.assign(this.standardFrame(), frame);
    
    Sprite.prototype.setFrame.call(this, newFrame.x, newFrame.y, newFrame.width, newFrame.height);

    if (this.hasFixedBitmap() && !this.bitmap.isReady()) {
        this._refreshFrame = true;
    }
};

/**
 * Sets the anchor of the sprite
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=this.standardAnchor()] - The X coordinate or Point or object with parameters
 * @param {Number} [y=undefined] - The Y coordinate (is object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.toPoint
 * @see DKTools.Sprite.prototype.standardAnchor
 */
DKTools.Sprite.prototype.setupAnchor = function(object, y) {
    const anchor = DKTools.Utils.Point.toPoint(object, y);
    const newAnchor = Object.assign(this.standardAnchor(), anchor);

    /**
     * @type {PIXI.ObservablePoint}
     */
    this.anchor.copy(newAnchor);
};

/**
 * Sets the mask
 * 
 * @since 2.0.0
 * @param {PIXI.Graphics} [mask] - Mask
 */
DKTools.Sprite.prototype.setupMask = function(mask) {
    this.mask = mask || null;
};

/**
 * Sets the listener on load of graphic
 *
 * @param {Function} listener - Listener
 */
DKTools.Sprite.prototype.setupGraphicLoadListener = function(listener) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._graphicLoadListener = listener || null;
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the sprite
 *
 * @param {Object} [object.font] - Text font
 * @param {String} [object.textColor] - Text color
 * @param {Number} [object.paintOpacity] - Paint opacity
 * @param {String} [object.fillColor] - Fill color
 * @param {String} [object.align] - Text align
 * @param {Number} [object.opacity] - Opacity
 * @param {String} [object.graphicFolder] - Graphic folder
 * @param {String} [object.graphicName] - Graphic name
 *
 * @param {String} [object.font.fontFace] - Название шрифта
 * @param {Number} [object.font.fontSize] - Размер шрифта
 * @param {Boolean} [object.font.fontItalic] - Курсив шрифта
 *
 * @see DKTools.Base.prototype.setAll
 * @see DKTools.Sprite.prototype.setFont
 * @see DKTools.Sprite.prototype.setTextColor
 * @see DKTools.Sprite.prototype.setPaintOpacity
 * @see DKTools.Sprite.prototype.setFillColor
 * @see DKTools.Sprite.prototype.setAlign
 * @see DKTools.Sprite.prototype.setOpacity
 * @see DKTools.Sprite.prototype.setGraphicFolder
 * @see DKTools.Sprite.prototype.setGraphicName
 * @see DKTools.Sprite.prototype.start
 * @see DKTools.Sprite.prototype.activate
 *
 * @returns {Number} Number of changed parameters
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

    if (this.setGraphicFolder(object.graphicFolder), block) {
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
 * Changes the width of the bitmap
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Width of the bitmap
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setWidth = function(width, blockStart) {
    return this.resize(width, this._bitmapHeight, blockStart);
};

/**
 * hanges the width of the bitmap
 * Returns true if the change occurred
 *
 * @param {Number} [height] - Height of the bitmap
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setHeight = function(height, blockStart) {
    return this.resize(this._bitmapWidth, height, blockStart);
};

/**
 * Changes the bitmap
 * Returns true if the change occurred
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Sprite.prototype.setupBitmap
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setBitmap = function(object) {
    if (this.bitmap == object) {
        return false;
    }

    this.setupBitmap(object);

    return true;
};

/**
 * Changes the font of the bitmap
 * Returns true if the change occurred
 *
 * @param {Object} [font] - Text font
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.standardFont
 * @see DKTools.Sprite.prototype.setupFont
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
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
 * Changes the text color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Text color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupTextColor
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setTextColor = function(color, blockRefreshAll) {
    if (this._textColor === color) {
        return false;
    }

    const lastColor = this._textColor;
    this.setupTextColor(color);

    if (this._textColor === lastColor) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the paint opacity
 * Returns true if the change occurred
 *
 * @param {Number} [opacity] - Paint opacity
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupPaintOpacity
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setPaintOpacity = function(opacity, blockRefreshAll) {
    if (this._paintOpacity === opacity) {
        return false;
    }

    const lastOpacity = this._paintOpacity;
    this.setupPaintOpacity(opacity);

    if (this._paintOpacity === lastOpacity) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the fill color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Fill color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupFillColor
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFillColor = function(color, blockRefreshAll) {
    if (this._fillColor === color) {
        return false;
    }

    const lastColor = this._fillColor;
    this.setupFillColor(color);

    if (this._fillColor === lastColor) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the align
 * Returns true if the change occurred
 *
 * @param {String} [align] - Text align
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.setupAlign
 * @see DKTools.Sprite.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setAlign = function(align, blockRefreshAll) {
    if (this._align === align) {
        return false;
    }

    const lastAlign = this._align;
    this.setupAlign(align);

    if (this._align === lastAlign) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the opacity of the sprite
 * Returns true if the change occurred
 *
 * @param {Number} [opacity] - Opacity of the sprite
 * @param {Boolean} [blockUpdateOpacity=false] - Blocking the call of the "updateOpacity" function
 *
 * @see DKTools.Sprite.prototype.setupOpacity
 * @see DKTools.Sprite.prototype.updateOpacity
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setOpacity = function(opacity, blockUpdateOpacity) {
	if (this._opacity === opacity) {
        return false;
    }

    const lastOpacity = this._opacity;
    this.setupOpacity(opacity);
    
	if (this._opacity === lastOpacity) {
	    return false;
    }

	if (!blockUpdateOpacity) {
	    this.updateOpacity();
    }

	return true;
};

/**
 * Changes the graphic folder
 * Returns true if the change occurred
 *
 * @param {String} [graphicName] - Graphic folder
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.setupGraphicFolder
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setGraphicFolder = function(folder, blockStart) {
    if (this._graphicFolder === folder) {
        return false;
    }

    const lastFolder = this._graphicFolder;
    this.setupGraphicFolder(folder);

    if (this._graphicFolder === lastFolder) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Changes the graphic name
 * Returns true if the change occurred
 *
 * @param {String} [graphicName] - Graphic name
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.setupGraphicName
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
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
 * Changes the frame of the sprite
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the frame (if object is Number)
 * @param {Number} [height] - Height of the frame (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the frame
 * @param {Number} [object.height] - Height of the frame
 *
 * @see DKTools.Utils.Rectangle.toRectangle
 * @see DKTools.Utils.Rectangle.equals
 * @see DKTools.Utils.Rectangle.clone
 * @see DKTools.Sprite.prototype.setupFrame
 * @see DKTools.Utils.Rectangle.equals
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFrame = function(object, y, width, height) {
    if (object instanceof Object) {
        return this.setFrame(object.x, object.y, object.width, object.height);
    }

    // object - Number
    const newFrame = DKTools.Utils.Rectangle.toRectangle(object, y, width, height);

    if (DKTools.Utils.Rectangle.equals(this._frame, newFrame)) {
        return false;
    }

    const lastFrame = DKTools.Utils.Rectangle.clone(this._frame);
    this.setupFrame(newFrame);

    return !DKTools.Utils.Rectangle.equals(this._frame, lastFrame);
};

/**
 * Changes the anchor of the sprite
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y=undefined] - The Y coordinate (is object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.toPoint
 * @see DKTools.Utils.Point.clone
 * @see DKTools.Sprite.prototype.setupAnchor
 * @see DKTools.Utils.Point.equals
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setAnchor = function(object, y) {
    if (object instanceof Object) {
        return this.setAnchor(object.x, object.y);
    }

    // object - Number
    const newAnchor = DKTools.Utils.Point.toPoint(object, y);

    if (DKTools.Utils.Point.equals(this.anchor, newAnchor)) {
        return false;
    }

    const lastAnchor = DKTools.Utils.Point.clone(this.anchor);
    this.setupAnchor(newAnchor);

    return !DKTools.Utils.Point.equals(this.anchor, lastAnchor);
};

/**
 * Changes the mask
 * Returns true if the change occurred
 * 
 * @since 2.0.0
 * @param {PIXI.Graphics} [mask] - Mask
 * 
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setMask = function(mask) {
    if (this.mask == mask) {
        return false;
    }

    this.setupMask(mask);

    return true;
};

// remove methods

/**
 * Removes the bitmap
 * 
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.setBitmap
 */
DKTools.Sprite.prototype.removeBitmap = function() {
    if (this.hasBitmap()) {
        this.setBitmap();
    }
};

/**
 * Removes the graphic name
 * 
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.setGraphicName
 */
DKTools.Sprite.prototype.removeGraphicName = function() {
    if (this.hasGraphicName()) {
        this.setGraphicName();
    }
};

/**
 * Removes the text by ID
 *
 * @param {Number | String | *} id - ID of the text
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.prototype.getTextById
 * @see DKTools.Sprite.prototype.refreshAll
 * @see DKTools.Utils.Array.remove
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
 * Checks the size of the sprirte
 * Returns the number of changed parameters
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.getMinWidth
 * @see DKTools.Sprite.prototype.getMinHeight
 * @see DKTools.Sprite.prototype.setupWidth
 * @see DKTools.Sprite.prototype.setupHeight
 *
 * @returns {Number} Number of changed parameters
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
 * Creates all objects
 *
 * @version 2.0.0
 *
 * @override
 *
 * @see DKTools.Base.prototype.createAll
 * @see DKTools.Sprite.prototype.createBitmap
 * @see DKTools.Sprite.prototype.createMask
 */
DKTools.Sprite.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.call(this);
    this.createBitmap();
    this.createMask();
};

/**
 * Loads an image by graphic name (if exists) or create the bitmap (if the fixed bitmap does not exist)
 *
 * @version 1.1.0
 *
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype._loadGraphic
 * @see DKTools.Sprite.prototype.hasFixedBitmap
 * @see DKTools.Sprite.prototype._getBitmapWidth
 * @see DKTools.Sprite.prototype._getBitmapHeight
 * @see Bitmap
 */
DKTools.Sprite.prototype.createBitmap = function() {
    if (this.hasGraphicName()) {
        this._loadGraphic();
    } else if (!this.hasFixedBitmap()) {
        this.bitmap = new Bitmap(this._getBitmapWidth(), this._getBitmapHeight());
    }
};

/**
 * Creates a mask
 * 
 * @since 2.0.0
 * 
 * @see DKTools.Sprite.prototype.createRectMask
 * @see DKTools.Sprite.prototype.createCircleMask
 * @see DKTools.Sprite.prototype.createEllipseMask
 */
DKTools.Sprite.prototype.createMask = function(maskShape) {
    switch (maskShape) {
        case 'rect':
            this.createRectMask();
            break;
        case 'circle':
            this.createCircleMask();
            break;
        case 'ellipse':
            this.createEllipseMask();
            break;
    }
};

/**
 * Creates a mask in the form of a rectangle
 *
 * @since 2.0.0
 * 
 * @see DKTools.Sprite.prototype.setMask
 * @see PIXI.Graphics
 */
DKTools.Sprite.prototype.createRectMask = function() {
    const mask = new PIXI.Graphics();

    mask.beginFill();
    mask.drawRect(this.x, this.y, this.bitmap.width, this.bitmap.height);
    mask.endFill();

    this.setMask(mask);
};

/**
 * Creates a mask in the form of a circle
 *
 * @since 2.0.0
 * 
 * @see DKTools.Sprite.prototype.setMask
 * @see PIXI.Graphics
 */
DKTools.Sprite.prototype.createCircleMask = function() {
    const mask = new PIXI.Graphics();
    const radius = this.bitmap.width / 2;
    const centerX = this.x + radius;
    const centerY = this.y + radius;

    mask.beginFill();
    mask.drawCircle(centerX, centerY, radius);
    mask.endFill();

    this.setMask(mask);
};

/**
 * Creates a mask in the form of an ellipse
 *
 * @since 2.0.0
 * 
 * @see DKTools.Sprite.prototype.setMask
 * @see PIXI.Graphics
 */
DKTools.Sprite.prototype.createEllipseMask = function() {
    const mask = new PIXI.Graphics();
    const width = this.bitmap.width / 2;
    const height = this.bitmap.height / 2;
    const centerX = this.x + width;
    const centerY = this.y + height;

    mask.beginFill();
    mask.drawEllipse(centerX, centerY, width, height);
    mask.endFill();

    this.setMask(mask);
};

// add methods

/**
 * Adds the text
 *
 * @param {String | Number} text - Text
 * @param {Object} options - Options
 * @param {Boolean} [refreshAll=false] - Refreshes all
 *
 * @param {String | Number} [options.id] - ID of the text
 * @param {String} [options.type='drawText'] - Type of the text ('drawText' or 'drawTextEx')
 *
 * @see DKTools.Sprite.prototype.drawTextEx
 * @see DKTools.Sprite.prototype.drawText
 */
DKTools.Sprite.prototype.addText = function(text, options, refreshAll) {
    if (text == null) {
        return;
    }

    text = String(text);
    options = options || {};

    this._texts.push({
        text,
        options,
        id: options.id,
        type: options.type || 'drawText'
    });

    if (refreshAll) {
        this.refreshAll();
    }
};

// redraw methods

/**
 * Redraws all
 *
 * @version 1.1.0
 * @override
 * 
 * @see DKTools.Sprite.prototype.clear
 * @see DKTools.Sprite.prototype.drawAll
 * @see DKTools.Sprite.prototype.updateRedrawAllEvents
 */
DKTools.Sprite.prototype.redrawAll = function() {
    this.clear();
    this.drawAll();
    this.updateRedrawAllEvents();
};

// _get methods

/**
 * Returns the width of the bitmap
 * 
 * @since 2.0.0
 * @private
 * @returns {Number} Width of the bitmap
 */
DKTools.Sprite.prototype._getBitmapWidth = function() {
    return this._bitmapWidth;
};

/**
 * Returns the height of the bitmap
 * 
 * @since 2.0.0
 * @private
 * @returns {Number} Height of the bitmap
 */
DKTools.Sprite.prototype._getBitmapHeight = function() {
    return this._bitmapHeight;
};

// get methods

/**
 * Returns an object of text by its ID
 *
 * @param {Number | String | *} id - ID of object of text
 * @returns {Object} Object of text
 */
DKTools.Sprite.prototype.getTextById = function(id) {
    return _.find(this._texts, { id });
};

/**
 * Returns the current opacity of the sprite
 *
 * @returns {Number} Current opacity of the sprite
 */
DKTools.Sprite.prototype.getCurrentOpacity = function() {
    return this.alpha * 255;
};

// size methods

/**
 * Changes the width and height of the sprite
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Width of the sprite
 * @param {Number | String} [height] - Height of the sprite or number of lines
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Sprite.prototype.isResizable
 * @see DKTools.Sprite.prototype.getMinWidth
 * @see DKTools.Sprite.prototype.getMinHeight
 * @see DKTools.Sprite.prototype.setupSize
 * @see DKTools.Sprite.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.prototype.resize = function(width, height, blockStart) {
    if (!this.isResizable()) {
        return false;
    }

    width = (width == null ? this.getMinWidth() : width);
    height = (height == null ? this.getMinHeight() : height);

    if (DKTools.Utils.isString(height)) {
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
 * Returns true if the sprite can be updated and redrawn
 *
 * @since 1.1.0
 *
 * @override
 *
 * @see DKTools.Base.prototype.canRedrawAll
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.hasFixedBitmap
 *
 * @returns {Boolean} Sprite can be updated and redrawn
 */
DKTools.Sprite.prototype.canRedrawAll = function() {
    return DKTools.Base.prototype.canRedrawAll.call(this) && !this.hasGraphicName() && !this.hasFixedBitmap();
};

/**
 * Returns true if the sprite can clone the fixed bitmap
 *
 * @returns {Boolean} Sprite can clone the fixed bitmap
 */
DKTools.Sprite.prototype.canCloneFixedBitmap = function() {
    return true;
};

// effects methods

/**
 * Changes the tone of the bitmap
 * Returns true if bitmap exists
 *
 * @param {Number[]} tone - Tone (RGB)
 * 
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see Bitmap.prototype.adjustTone
 * 
 * @returns {Boolean} Bitmap exists
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
 * Rotates the hue of the bitmap
 * Returns true if bitmap exists
 *
 * @param {Number} offset - Offset
 * 
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see Bitmap.prototype.rotateHue
 * 
 * @returns {Boolean} Bitmap exists
 */
DKTools.Sprite.prototype.rotateHue = function(offset) {
    if (!this.hasBitmap()) {
        return false;
    }

    this.bitmap.rotateHue(offset);

    return true;
};

/**
 * Imposes a blur effect on the bitmap
 * Returns true if bitmap exists
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see Bitmap.prototype.blur
 * 
 * @returns {Boolean} Bitmap exists
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
 * Changes the font of the bitmap
 *
 * @param {Object} font - Text font
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateFont
 */
DKTools.Sprite.prototype.changeFont = function(font) {
    if (this.hasBitmap()) {
        this.updateFont(font);
    }
};

/**
 * Changes the text color
 *
 * @param {String} textColor - Text color
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateTextColor
 */
DKTools.Sprite.prototype.changeTextColor = function(textColor) {
    if (this.hasBitmap()) {
        this.updateTextColor(textColor);
    }
};

/**
 * Changes the paint opacity
 *
 * @param {Number} paintOpacity - Paint opacity
 *
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updatePaintOpacity
 */
DKTools.Sprite.prototype.changePaintOpacity = function(paintOpacity) {
    if (this.hasBitmap()) {
        this.updatePaintOpacity(paintOpacity);
    }
};

// reset methods

/**
 * Resets all
 *
 * @see DKTools.Sprite.prototype.resetFont
 * @see DKTools.Sprite.prototype.resetTextColor
 * @see DKTools.Sprite.prototype.resetPaintOpacity
 */
DKTools.Sprite.prototype.resetAll = function() {
    this.resetFont();
    this.resetTextColor();
    this.resetPaintOpacity();
};

/**
 * Resets the font
 *
 * @see DKTools.Sprite.prototype.changeFont
 */
DKTools.Sprite.prototype.resetFont = function() {
    this.changeFont(this.font);
};

/**
 * Resets the text color
 *
 * @see DKTools.Sprite.prototype.changeTextColor
 */
DKTools.Sprite.prototype.resetTextColor = function() {
    this.changeTextColor(this.textColor);
};

/**
 * Resets the paint opacity
 *
 * @see DKTools.Sprite.prototype.changePaintOpacity
 */
DKTools.Sprite.prototype.resetPaintOpacity = function() {
    this.changePaintOpacity(this.paintOpacity);
};

// has methods

/**
 * Returns true if the sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 *
 * @since 1.1.0
 * @returns {Boolean} Sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 */
DKTools.Sprite.prototype.hasFixedBitmap = function() {
    return !!this._fixedBitmap;
};

/**
 * Returns true if the sprite has the fill color
 *
 * @returns {Boolean} Sprite has the fill color
 */
DKTools.Sprite.prototype.hasFillColor = function() {
    return !!this._fillColor;
};

/**
 * Returns true if the sprite has the texts
 *
 * @returns {Boolean} Sprite has the texts
 */
DKTools.Sprite.prototype.hasTexts = function() {
    return this._texts.length > 0;
};

/**
 * Returns true if the sprite has the graphic folder
 *
 * @returns {Boolean} Sprite has the graphic folder
 */
DKTools.Sprite.prototype.hasGraphicFolder = function() {
    return !!this._graphicFolder;
};

/**
 * Returns true if the sprite has the graphic name
 *
 * @returns {Boolean} Sprite has the graphic name
 */
DKTools.Sprite.prototype.hasGraphicName = function() {
    return !!this._graphicName;
};

// is methods

/**
 * Returns true if you can change the size of the sprite
 *
 * @version 1.1.0
 * 
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.hasFixedBitmap
 * 
 * @returns {Boolean} You can change the size of the sprite
 */
DKTools.Sprite.prototype.isResizable = function() {
    return !this.hasGraphicName() && !this.hasFixedBitmap();
};

/**
 * Returns true if the coordinates is inside the sprite
 *
 * @override
 *
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 * 
 * @see DKTools.Sprite.prototype.canvasToLocalX
 * @see DKTools.Sprite.prototype.canvasToLocalY
 *
 * @returns {Boolean} Coordinates is inside the sprite
 */
DKTools.Sprite.prototype.isInside = function(x, y) {
    const localX = this.canvasToLocalX(x);
    const localY = this.canvasToLocalY(y);
    const width = this.width;
    const height = this.height;
    const anchor = this.anchor;
    const frame = new Rectangle(-width * anchor.x, -height * anchor.y, width, height);

    return frame.contains(localX, localY);
};

// draw methods

/**
 * Draws all
 *
 * @version 1.1.0
 * @override
 * 
 * @see DKTools.Sprite.prototype.updateFill
 * @see DKTools.Sprite.prototype.drawAllTexts
 * @see DKTools.Sprite.prototype.updateDrawAllEvents
 */
DKTools.Sprite.prototype.drawAll = function() {
    this.updateFill();
    this.drawAllTexts();
    this.updateDrawAllEvents();
};

/**
 * Draws all texts
 */
DKTools.Sprite.prototype.drawAllTexts = function() {
    _.forEach(this._texts, function(obj) {
        this[obj.type](obj.text, obj.options);
    }.bind(this));
};

/**
 * Draws the text
 * Returns true if bitmap exists
 *
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 *
 * @param {Object} [options.font=this.font] - Use custom font
 * @param {String} [options.textColor=this.textColor] - Use custom text color
 * @param {Number} [options.paintOpacity=this.paintOpacity] - Use custom paint opacity
 * @param {String} [options.align=this.align] - Align
 * @param {Boolean} [options.resetFont=false] - Use standard font after drawing the text
 * @param {String} [options.resetTextColor=false] - Use standard text color after drawing the text
 * @param {String} [options.resetPaintOpacity=false] - Use standard paint opacity after drawing the text
 * @param {Number} [options.x=0] - The X coordinate
 * @param {Number | String} [options.y=0] - The Y coordinate or line number (String)
 * @param {Number | String} [options.width=this.standardDrawingWidth()] - Width of the rectangle
 * @param {Number | String} [options.height=this.getLineHeight()] - Height of the rectangle or number of lines (String)
 * @param {PIXI.Point | PIXI.ObservablePoint | Point | Object} [options.pos] - Position of the text (ignores other parameters of position: x, y, width, height)
 * @param {PIXI.Rectangle | Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
 *
 * @param {Number} [options.pos.x=0] - The X coordinate
 * @param {Number | String} [options.pos.y=0] - The Y coordinate or line number (String)
 *
 * @param {Number} [options.rect.x=0] - The X coordinate
 * @param {Number | String} [options.rect.y=0] - The Y coordinate or line number (String)
 * @param {Number | String} [options.rect.width=this.standardDrawingWidth()] - Width of the rectangle
 * @param {Number | String} [options.rect.height=this.getLineHeight()] - Height of the rectangle or number of lines (String)
 *
 * @example
 * var sprite = new DKTools.Sprite(0, 0, 100, 36);
 * sprite.start();
 * sprite.drawText('Text', {
 *      y: '1'
 * });
 *
 * @see DKTools.Base.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.changeFont
 * @see DKTools.Sprite.prototype.changeTextColor
 * @see DKTools.Sprite.prototype.changePaintOpacity
 * @see DKTools.Base.prototype.standardDrawingWidth
 * @see DKTools.Base.prototype.standardDrawingHeight
 * @see DKTools.Base.prototype.getLineHeight
 * @see DKTools.Sprite.prototype.resetFont
 * @see DKTools.Sprite.prototype.resetTextColor
 * @see DKTools.Sprite.prototype.resetPaintOpacity
 * @see Bitmap.prototype.drawText
 *
 * @returns {Boolean} Bitmap exists
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
    const rect = options.rect;

    if (pos instanceof Object) {
        x = pos.x;
        y = pos.y;
    }

    if (rect instanceof Object) {
        x = rect.x;
        y = rect.y;
        width = rect.width;
        height = rect.height;
    }

    if (DKTools.Utils.isString(y)) { // line number
        y = this.getLineHeight() * Number(y);
    }

    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.getLineHeight() * Number(height);
    }

    x = x || 0;
    y = y || 0;
    width = width || this.standardDrawingWidth();
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
 * Loads a bitmap
 * Returns true if the bitmap of the sprite has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Path to file or object with parameters
 * @param {String} filename - Name of file
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Sprite.prototype.setBitmap
 * @see DKTools.Utils.Bitmap.load
 *
 * @returns {Boolean} Bitmap of the sprite has been changed
 */
DKTools.Sprite.prototype.loadBitmap = function(object, filename, listener, hue, smooth) {
    if (object instanceof Object) {
        return this.loadBitmap(object.folder, object.filename, object.listener, object.hue, object.smooth);
    }

    // object - String (folder)
    const bitmap = DKTools.Utils.Bitmap.load(object, filename, hue, smooth);

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
 * Loads and reserves a bitmap
 * Returns true if the bitmap of the sprite has been changed
 *
 * @version 3.0.0
 *
 * @param {String | Object} object - Path to file or object with parameters
 * @param {String} filename - Name of file
 * @param {Function} [listener] - Function of processing after loading a bitmap
 * @param {Number} [hue] - Hue of bitmap
 * @param {Boolean} [smooth] - Smooth of bitmap
 * @param {Number} [reservationId] - Reservation ID
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Sprite.prototype.setBitmap
 * @see DKTools.Utils.Bitmap.reserve
 *
 * @returns {Boolean} Bitmap of the sprite has been changed
 */
DKTools.Sprite.prototype.reserveBitmap = function(object, filename, listener, hue, smooth, reservationId) {
    if (object instanceof Object) {
        return this.reserveBitmap(object.folder, object.filename, object.listener, object.hue, object.smooth, object.reservationId);
    }

    // object - String
    const bitmap = DKTools.Utils.Bitmap.reserve(object, filename, listener, hue, smooth, reservationId)

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
 * Loads the graphic (using graphic folder and graphic name)
 *
 * @private
 *
 * @see DKTools.Sprite.prototype.hasGraphicFolder
 * @see DKTools.Sprite.prototype.hasGraphicName
 * @see DKTools.Sprite.prototype.loadBitmap
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateReadyEvents
 */
DKTools.Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphicFolder() && this.hasGraphicName()) {
        const folder = this.graphicFolder;
        const filename = this.graphicName;
        const listener = this._graphicLoadListener;

        this.loadBitmap(folder, filename);

        if (listener && this.hasBitmap()) {
            this.bitmap.addLoadListener(listener);
        }

        this.updateReadyEvents();
    }
};

// event methods

/**
 * Updates the events with type: draw-all
 *
 * @see DKTools.Sprite.prototype.updateEventsContainer
 */
DKTools.Sprite.prototype.updateDrawAllEvents = function() {
    this.updateEventsContainer('draw-all');
};

// update methods

/**
 * Updates all
 *
 * @override
 * 
 * @see DKTools.Base.prototype.updateAll
 * @see DKTools.Sprite.prototype.updateBitmap
 */
DKTools.Sprite.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.call(this);
    this.updateBitmap();
};

/**
 * Updates the bitmap
 * 
 * @see DKTools.Sprite.prototype.hasBitmap
 * @see DKTools.Sprite.prototype.updateFont
 * @see DKTools.Sprite.prototype.updateTextColor
 * @see DKTools.Sprite.prototype.updatePaintOpacity
 */
DKTools.Sprite.prototype.updateBitmap = function() {
    if (this.hasBitmap()) {
        this.updateFont();
        this.updateTextColor();
        this.updatePaintOpacity();
    }
};

/**
 * Updates the font of the bitmap
 *
 * @param {Object} [font=this.font] - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 */
DKTools.Sprite.prototype.updateFont = function(font) {
    font = font || this.font;

    if (DKTools.Utils.isString(font.fontFace)) {
        this.bitmap.fontFace = font.fontFace;
    }

    if (Number.isFinite(font.fontSize)) {
        this.bitmap.fontSize = font.fontSize;
    }

    this.bitmap.fontItalic = !!font.fontItalic;
};

/**
 * Updates the text color
 *
 * @param {String} [textColor=this.textColor] - Text color
 */
DKTools.Sprite.prototype.updateTextColor = function(textColor) {
    this.bitmap.textColor = textColor || this.textColor;
};

/**
 * Updates the paint opacity
 *
 * @param {Number} [paintOpacity=this.paintOpacity] - Paint opacity
 */
DKTools.Sprite.prototype.updatePaintOpacity = function(paintOpacity) {
    if (Number.isFinite(paintOpacity)) {
        this.bitmap.paintOpacity = paintOpacity;
    } else {
        this.bitmap.paintOpacity = this.paintOpacity;
    }
};

/**
 * Updates the fill of the sprite
 *
 * @see DKTools.Sprite.prototype.hasFillColor
 * @see DKTools.Sprite.prototype.fillAll
 */
DKTools.Sprite.prototype.updateFill = function() {
    if (this.hasFillColor()) {
        this.fillAll(this.fillColor);
    }
};

/**
 * Updates the opacity of the sprite
 *
 * @override
 *
 * @param {Number} [opacity=this._opacity] - Opacity of the sprite
 */
DKTools.Sprite.prototype.updateOpacity = function(opacity) {
    if (!Number.isFinite(opacity)) {
        opacity = this._opacity;
    }

    this.alpha = opacity.clamp(0, 255) / 255;
};





//===========================================================================
// Sprites based on DKTools.Sprite
//===========================================================================





//===========================================================================
// DKTools.Sprite.Button
//===========================================================================

DKTools.Sprite.Button.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Button.prototype.constructor = DKTools.Sprite.Button;

// properties

Object.defineProperties(DKTools.Sprite.Button.prototype, {

    /**
     * Interval of long pressing
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Button.prototype
     */
    longPressInterval: {
        get: function() {
            return this._longPressInterval;
        },
        configurable: true
    },

    /**
     * Mouse press time
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Button.prototype
     */
    mousePressTime: {
        get: function() {
            return this._mousePressTime;
        },
        configurable: true
    },

    /**
     * The X coordinate of press inside the sprite
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Button.prototype
     */
    pressX : {
        get: function() {
            return this.canvasToLocalX(TouchInput.x);
        },
        configurable: true
    },

    /**
     * The Y coordinate of press inside the sprite
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Button.prototype
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
 * Clears all data
 *
 * @version 2.0.0
 * @private
 * @override
 * 
 * @see DKTools.Sprite.prototype._clearAll
 * @see DKTools.Sprite.Button.prototype._clearMousePressTime
 */
DKTools.Sprite.Button.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearMousePressTime();
};

/**
 * Clears pressed time
 *
 * @since 2.0.0
 * @private
 */
DKTools.Sprite.Button.prototype._clearMousePressTime = function() {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._mousePressTime = 0;
};

// _setup methods

/**
 * Sets the events
 *
 * @version 2.0.0
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._setupEvents
 * @see DKTools.Sprite.Button.prototype._setupUpdateButtonStateEvent
 */
DKTools.Sprite.Button.prototype._setupEvents = function() {
    DKTools.Sprite.prototype._setupEvents.call(this);
    this._setupUpdateButtonStateEvent();
};

/**
 * Sets the options
 *
 * @version 2.0.0
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._setupOptions
 * @see DKTools.Sprite.Button.prototype._setupProcessMouseOption
 */
DKTools.Sprite.Button.prototype._setupOptions = function() {
    DKTools.Sprite.prototype._setupOptions.call(this);
    this._setupProcessMouseOption();
};

/**
 * Sets the update event
 *
 * @since 2.0.0
 * @private
 *
 * @see DKTools.Sprite.Button.prototype.addEvent
 * @see DKTools.Sprite.Button.prototype.updateButtonState
 */
DKTools.Sprite.Button.prototype._setupUpdateButtonStateEvent = function() {
    this.addEvent({
        type: 'update',
        onUpdate: this.updateButtonState.bind(this)
    });
};

/**
 * Sets the option process-mouse
 *
 * @since 2.0.0
 * @private
 *
 * @see DKTools.Sprite.Button.prototype.enableOption
 */
DKTools.Sprite.Button.prototype._setupProcessMouseOption = function() {
    this.enableOption('process-mouse');
};

// standard methods

/**
 * Returns the standard activity of the button
 *
 * @override
 * @returns {Boolean} Standard activity of the button
 */
DKTools.Sprite.Button.prototype.standardActive = function() {
    return false;
};

/**
 * Returns the standard interval of long pressing
 *
 * @returns {Number} Standard interval of long pressing
 */
DKTools.Sprite.Button.prototype.standardLongPressInterval = function() {
    return 18;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.longPressInterval] - Interval of long pressing
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.Button.prototype.setupLongPressInterval
 */
DKTools.Sprite.Button.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupLongPressInterval(object.longPressInterval);
};

/**
 * Sets the interval of long pressing
 *
 * @param {Number} [interval=this.standardLongPressInterval()] - Interval of long pressing
 *
 * @see DKTools.Sprite.Button.prototype.standardLongPressInterval
 */
DKTools.Sprite.Button.prototype.setupLongPressInterval = function(interval) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._longPressInterval = interval || this.standardLongPressInterval();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @version 2.0.0
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the button
 *
 * @param {Number} [object.longPressInterval] - Interval of long pressing
 *
 * @see DKTools.Sprite.prototype.setAll
 * @see DKTools.Sprite.Button.prototype.setLongPressInterval
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.Button.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;

    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);

    if (this.setLongPressInterval(object.longPressInterval)) {
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
 * Changes the interval of long pressing
 * Returns true if the change occurred
 *
 * @param {Number} [interval] - Interval of long pressing
 *
 * @see DKTools.Sprite.Button.prototype.setupLongPressInterval
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Button.prototype.setLongPressInterval = function(interval) {
    if (this._longPressInterval === interval) {
        return false;
    }

    const lastInterval = this._longPressInterval;
    this.setupLongPressInterval(interval);

    return this._longPressInterval !== lastInterval;
};

// is methods

/**
 * Returns true if the button is pressed
 *
 * @see DKTools.Sprite.Button.prototype.isLongPressed
 *
 * @returns {Boolean} Button is pressed
 */
DKTools.Sprite.Button.prototype.isPressed = function() {
    return this._mousePressTime > 0 && !this.isLongPressed();
};

/**
 * Returns true if the button is pressed longer than the long press interval
 *
 * @returns {Boolean} Button is pressed longer than the long press interval
 */
DKTools.Sprite.Button.prototype.isLongPressed = function() {
    return this._mousePressTime >= this._longPressInterval;
};

// event methods

/**
 * Updates the events with type: mouse-down-button
 *
 * @since 2.0.0
 *
 * @param {String} button - Mouse button (left, middle or right)
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateMouseDownEvents = function(button) {
    this.updateEventsContainer('mouse-down-' + button);
};

/**
 * Updates the events with type: mouse-up-button
 *
 * @since 2.0.0
 *
 * @param {String} button - Mouse button (left, middle or right)
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateMouseUpEvents = function(button) {
    this.updateEventsContainer('mouse-up-' + button);
};

/**
 * Updates the events with type: mouse-click-button
 *
 * @since 2.0.0
 *
 * @param {String} button - Mouse button (left, middle or right)
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateMouseClickEvents = function(button) {
    this.updateEventsContainer('mouse-click-' + button);
};

/**
 * Updates the events with type: mouse-long-press-button
 *
 * @since 2.0.0
 *
 * @param {String} button - Mouse button (left, middle or right)
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateMouseLongPressEvents = function(button) {
    this.updateEventsContainer('mouse-long-press-' + button);
};

/**
 * Updates the events with type: mouse-long-press-button-started
 *
 * @since 2.0.0
 * 
 * @param {String} button - Mouse button (left, middle or right)
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateMouseLongPressStartedEvents = function(button) {
    this.updateEventsContainer(`mouse-long-press-${button}-started`);
};

/**
 * Updates the events with type: mouse-long-press-button-finished
 *
 * @since 2.0.0
 * 
 * @param {String} button - Mouse button (left, middle or right)
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateMouseLongPressFinishedEvents = function(button) {
    this.updateEventsContainer(`mouse-long-press-${button}-finished`);
};

/**
 * Updates the events with type: state-normal
 *
 * @since 2.0.0
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateStateNormalEvents = function() {
    this.updateEventsContainer('state-normal');
};

/**
 * Updates the events with type: state-pressed
 *
 * @since 2.0.0
 *
 * @see DKTools.Sprite.Button.prototype.updateEventsContainer
 */
DKTools.Sprite.Button.prototype.updateStatePressedEvents = function() {
    this.updateEventsContainer('state-pressed');
};

// process methods

/**
 * Processes all
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.processAll
 * @see DKTools.Sprite.Button.prototype.isOptionDisabled
 * @see DKTools.Sprite.Button.prototype.processMousePress
 */
DKTools.Sprite.Button.prototype.processAll = function() {
    DKTools.Sprite.prototype.processAll.call(this);
    this.processMousePress();
};

/**
 * Processes a mouse press
 *
 * @version 2.0.0
 * 
 * @see DKTools.Sprite.Button.prototype.isVisibleAndActive
 * @see TouchInput.isMousePressed
 * @see DKTools.Sprite.Button.prototype.isMouseInside
 * @see DKTools.Sprite.Button.prototype.isLongPressed
 * @see TouchInput.isLeftButtonPressed
 * @see TouchInput.isMiddleButtonPressed
 * @see TouchInput.isRightButtonPressed
 * @see DKTools.Sprite.Button.prototype.updateMouseLongPressEvents
 * @see DKTools.Sprite.Button.prototype.isPressed
 * @see DKTools.Sprite.Button.prototype.updateMouseClickEvents
 * @see DKTools.Sprite.Button.prototype._clearMousePressTime
 */
DKTools.Sprite.Button.prototype.processMousePress = function() {
    if (this.isVisible() && this.isMouseInside() &&
        (this.isActive() || this.isOptionEnabled('process-mouse-press-ignore-active'))) {
            if (TouchInput.isMousePressed()) {
                this._mousePressTime++;

                let button;

                if (TouchInput.isLeftButtonPressed()) {
                    button = 'left';
                } else if (TouchInput.isMiddleButtonPressed()) {
                    button = 'middle';
                } else if (TouchInput.isRightButtonPressed()) {
                    button = 'right';
                }

                if (button) {
                    this.updateMouseDownEvents(button);

                    if (this.isLongPressed()) {
                        if (this._mousePressTime === this._longPressInterval) {
                            this.updateMouseLongPressStartedEvents(button);
                        }

                        this.updateMouseLongPressEvents(button);
                    }
                }
            } else {
                let button;

                if (TouchInput.isLeftButtonReleased()) {
                    button = 'left';
                } else if (TouchInput.isMiddleButtonReleased()) {
                    button = 'middle';
                } else if (TouchInput.isRightButtonReleased()) {
                    button = 'right';
                }

                if (button) {
                    if (this.isLongPressed()) {
                        this.updateMouseLongPressFinishedEvents(button);
                    } else if (this.isPressed()) {
                        this.updateMouseClickEvents(button);
                    }

                    if (this._mousePressTime > 0) {
                        this.updateMouseUpEvents(button);
                    }
                }

                this._clearMousePressTime();
            }
    } else {
        this._clearMousePressTime();
    }
};

// update methods

/**
 * Updates the button state
 *
 * @see DKTools.Sprite.Button.prototype.isPressed
 * @see DKTools.Sprite.Button.prototype.isLongPressed
 * @see DKTools.Sprite.Button.prototype.updateStatePressedEvents
 * @see DKTools.Sprite.Button.prototype.updateStateNormalEvents
 */
DKTools.Sprite.Button.prototype.updateButtonState = function() {
    if (this._mousePressTime > 0) {
        this.updateStatePressedEvents();
    } else {
        this.updateStateNormalEvents();
    }
};





//===========================================================================
// DKTools.Sprite.Cursor
//===========================================================================

DKTools.Sprite.Cursor.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.Cursor.prototype.constructor = DKTools.Sprite.Cursor;

// properties

Object.defineProperties(DKTools.Sprite.Cursor.prototype, {

    /**
     * Rectangle of the cursor
     *
     * @readonly
     * @type {Rectangle}
     * @memberof DKTools.Sprite.Cursor.prototype
     */
    cursorRect: {
        get: function() {
            return this._cursorRect;
        },
        configurable: true
    },

    /**
     * Blink speed
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Cursor.prototype
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
 * Clears all data
 *
 * @private
 * @override
 * 
 * @see DKTools.Sprite.prototype._clearAll
 * @see DKTools.Sprite.Cursor.prototype._clearAnimationCount
 */
DKTools.Sprite.Cursor.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearAnimationCount();
};

/**
 * Clears the animation count
 *
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
 * Creates all
 *
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._createAll
 * @see DKTools.Sprite.Cursor.prototype._createWindowskin
 */
DKTools.Sprite.Cursor.prototype._createAll = function() {
    DKTools.Sprite.prototype._createAll.call(this);
    this._createWindowskin();
};

/**
 * Creates the window skin
 *
 * @private
 *
 * @see DKTools.Sprite.Cursor.prototype.standardWindowskin
 */
DKTools.Sprite.Cursor.prototype._createWindowskin = function() {
    this._windowskin = ImageManager.loadSystem(this.standardWindowskin());
};

// _setup methods

/**
 * Sets the events
 *
 * @version 2.0.0
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._setupEvents
 * @see DKTools.Sprite.Cursor.prototype._setupUpdateEvent
 */
DKTools.Sprite.Cursor.prototype._setupEvents = function() {
    DKTools.Sprite.prototype._setupEvents.call(this);
    this._setupUpdateCursorAnimationEvent();
};

/**
 * Sets the update event
 *
 * @since 2.0.0
 * @private
 *
 * @see DKTools.Sprite.Cursor.prototype.addEvent
 */
DKTools.Sprite.Cursor.prototype._setupUpdateCursorAnimationEvent = function() {
    this.addEvent({
        type: 'update',
        onUpdate: this.updateCursorAnimation.bind(this)
    });
};

// standard methods

/**
 * Returns the standard rectangle of the cursor
 *
 * @returns {Rectangle} Standard rectangle of the cursor
 */
DKTools.Sprite.Cursor.prototype.standardCursorRect = function() {
    return new Rectangle(0, 0, 0, 0);
};

/**
 * Returns the standard blink speed
 *
 * @returns {Number} Standard blink speed
 */
DKTools.Sprite.Cursor.prototype.standardBlinkSpeed = function() {
    return 8;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {PIXI.Rectangle | Rectangle | Object} [object.cursorRect] - Rectangle of the cursor
 * @param {Number} [object.blinkSpeed] - Blink speed
 *
 * @param {Number} [object.cursorRect.x] - The X coordinate
 * @param {Number} [object.cursorRect.y] - The Y coordinate
 * @param {Number} [object.cursorRect.width] - Width of the rectangle
 * @param {Number} [object.cursorRect.height] - Height of the rectangle
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.Cursor.prototype.setupCursorRect
 * @see DKTools.Sprite.Cursor.prototype.setupBlinkSpeed
 */
DKTools.Sprite.Cursor.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupCursorRect(object.cursorRect);
    this.setupBlinkSpeed(object.blinkSpeed);
}

/**
 * Sets the rectangle of the cursor
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object=this.standardCursorRect()] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the rectangle (if object is Number)
 * @param {Number} [height] - Height of the rectangle (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the rectangle
 * @param {Number} [object.height] - Height of the rectangle
 *
 * @see DKTools.Utils.Rectangle.toRectangle
 * @see DKTools.Sprite.Cursor.prototype.standardCursorRect
 */
DKTools.Sprite.Cursor.prototype.setupCursorRect = function(object, y, width, height) {
    const rect = DKTools.Utils.Rectangle.toRectangle(object, y, width, height);

    /**
     * @private
     * @readonly
     * @type {Rectangle}
     */
    this._cursorRect = Object.assign(this.standardCursorRect(), rect);
};

/**
 * Sets the blink speed
 *
 * @param {Number} [blinkSpeed=this.standardBlinkSpeed()] - Blink speed
 *
 * @see DKTools.Sprite.Cursor.prototype.standardBlinkSpeed
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
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the cursor
 *
 * @param {PIXI.Rectangle | Rectangle | Object} [object.cursorRect] - Rectangle of the cursor
 * @param {Number} [object.blinkSpeed] - Blink speed
 *
 * @param {Number} [object.cursorRect.x] - The X coordinate
 * @param {Number} [object.cursorRect.y] - The Y coordinate
 * @param {Number} [object.cursorRect.width] - Width of the rectangle
 * @param {Number} [object.cursorRect.height] - Height of the rectangle
 *
 * @see DKTools.Sprite.prototype.setAll
 * @see DKTools.Sprite.Cursor.prototype.setCursorRect
 * @see DKTools.Sprite.Cursor.prototype.setBlinkSpeed
 * @see DKTools.Sprite.Cursor.prototype.start
 * @see DKTools.Sprite.Cursor.prototype.activate
 *
 * @returns {Number} Number of changed parameters
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
 * Changes the rectangle of the cursor
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Rectangle | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the rectangle (if object is Number)
 * @param {Number} [height] - Height of the rectangle (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the rectangle
 * @param {Number} [object.height] - Height of the rectangle
 *
 * @see DKTools.Utils.Rectangle.toRectangle
 * @see DKTools.Utils.Rectangle.equals
 * @see DKTools.Sprite.Cursor.prototype.setupCursorRect
 * @see DKTools.Sprite.Cursor.prototype.refreshCursor
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Cursor.prototype.setCursorRect = function(object, y, width, height) {
    if (object instanceof Object) {
        return this.setCursorRect(object.x, object.y, object.width, object.height);
    }

    const newRect = DKTools.Utils.Rectangle.toRectangle(object, y, width, height);

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
 * Changes the blink speed
 * Returns true if the change occurred
 *
 * @param {Number} [blinkSpeed] - Blink speed
 *
 * @see DKTools.Sprite.Cursor.prototype.setupBlinkSpeed
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Cursor.prototype.setBlinkSpeed = function(blinkSpeed) {
    if (this._blinkSpeed === blinkSpeed) {
        return false;
    }

    const lastSpeed = this._blinkSpeed;
    this.setupBlinkSpeed(blinkSpeed);

    return this._blinkSpeed !== lastSpeed;
};

// refresh methods

/**
 * Updates and redraws all
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.refreshAll
 * @see DKTools.Sprite.Cursor.prototype.refreshCursor
 */
DKTools.Sprite.Cursor.prototype.refreshAll = function() {
    DKTools.Sprite.prototype.refreshAll.call(this);
    this.refreshCursor();
};

/**
 * Updates the cursor
 * 
 * @see DKTools.Sprite.Cursor.prototype.move
 * @see DKTools.Sprite.Cursor.prototype.setupBitmap
 */
DKTools.Sprite.Cursor.prototype.refreshCursor = function() {
    const x = this._cursorRect.x;
    const y = this._cursorRect.y;
    const w = this._cursorRect.width;
    const h = this._cursorRect.height;
    const m = 4;
    const ox = 0;
    const oy = 0;
    const parent = this.parent;
    const w2 = Math.min(w, parent.realWidth - x);
    const h2 = Math.min(h, parent.realHeight - y);

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
 * Updates the cursor animation
 *
 * @see DKTools.Sprite.Cursor.prototype.setOpacity
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
// DKTools.Sprite.Arrow
//===========================================================================

DKTools.Sprite.Arrow.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.Arrow.prototype.constructor = DKTools.Sprite.Arrow;

// properties

Object.defineProperties(DKTools.Sprite.Arrow.prototype, {

    /**
     * Type of the arrow
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.Arrow.prototype
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
 * Returns the standard visibility of the arrow
 *
 * @override
 * @returns {Boolean} Standard visibility of the arrow
 */
DKTools.Sprite.Arrow.prototype.standardVisible = function() {
    return false;
};

/**
 * Returns the standard graphic name
 *
 * @override
 *
 * @see DKTools.Base.prototype.standardWindowskin
 *
 * @returns {String} Standard graphic name
 */
DKTools.Sprite.Arrow.prototype.standardGraphicName = function() {
    return this.standardWindowskin();
};

/**
 * Returns the standard anchor
 *
 * @override
 * @returns {Point} Standard anchor
 */
DKTools.Sprite.Arrow.prototype.standardAnchor = function() {
    return new Point(0.5, 0.5);
};

/**
 * Returns the standard type of the arrow
 *
 * @returns {null} Standard type of the arrow
 */
DKTools.Sprite.Arrow.prototype.standardArrowType = function() {
    return null;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 *
 * @param {String} [object.arrowType] - Type of the arrow
 *
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.Arrow.prototype.setupArrowType
 */
DKTools.Sprite.Arrow.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupArrowType(object.arrowType);
};

/**
 * Sets the type of the arrow
 *
 * @param {String} [type] - Type of the arrow
 * 
 * @see DKTools.Sprite.Arrow.prototype.standardArrowType
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
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the arrow
 *
 * @param {String} [object.arrowType] - Type of the arrow
 *
 * @see DKTools.Sprite.Button.prototype.setAll
 * @see DKTools.Sprite.Arrow.prototype.setArrowType
 * @see DKTools.Sprite.Arrow.prototype.start
 * @see DKTools.Sprite.Arrow.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.Arrow.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);

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
 * Changes the type of the arrow
 * Returns true if the change occurred
 *
 * @param {String} [type] - Type of the arrow
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Arrow.prototype.setupArrowType
 * @see DKTools.Sprite.Arrow.prototype.refreshAll
 * 
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Arrow.prototype.setArrowType = function(type, blockRefreshAll) {
    if (this._arrowType === type) {
        return false;
    }

    const lastType = this._arrowType;
    this.setupArrowType(type);

    if (this._arrowType === lastType) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

// refresh methods

/**
 * Updates and redraws all
 *
 * @override
 * 
 * @see DKTools.Sprite.Button.prototype.refreshAll
 * @see DKTools.Sprite.Arrow.prototype.refreshArrow
 */
DKTools.Sprite.Arrow.prototype.refreshAll = function() {
    DKTools.Sprite.Button.prototype.refreshAll.call(this);
    this.refreshArrow();
};

/**
 *  Updates and redraws the arrow
 * 
 * @see DKTools.Sprite.Arrow.prototype.setFrame
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
// DKTools.Sprite.Selectable
//===========================================================================

DKTools.Sprite.Selectable.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.Selectable.prototype.constructor = DKTools.Sprite.Selectable;

// properties

Object.defineProperties(DKTools.Sprite.Selectable.prototype, {

    /**
     * @readonly
     * @type {DKTools.Sprite.Cursor}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorSprite: {
        get: function() {
            return this._cursorSprite;
        },
        configurable: true
    },

    /**
     * Index
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    index: {
        get: function() {
            return this._index;
        },
        configurable: true
    },

    /**
     * Maximum of the columns
     * 
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    maxCols: {
        get: function() {
            return this._maxCols;
        },
        configurable: true
    },

    /**
     * Fixed cursor
     * 
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorFixed: {
        get: function() {
            return this._cursorFixed;
        },
        configurable: true
    },

    /**
     * Cursor all
     * 
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    cursorAll: {
        get: function() {
            return this._cursorAll;
        },
        configurable: true
    },

    /**
     * Horizontal spacing
     * 
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    horizontalSpacing: {
        get: function() {
            return this._horizontalSpacing;
        },
        configurable: true
    },

    /**
     * Vertical spacing
     * 
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    verticalSpacing: {
        get: function() {
            return this._verticalSpacing;
        },
        configurable: true
    },

    /**
     * Text padding
     * 
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    textPadding: {
        get: function() {
            return this._textPadding;
        },
        configurable: true
    },

    /**
     * List of the items
     * 
     * @readonly
     * @type {Object[]}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    /**
     * Handler of draw of the item
     * 
     * @readonly
     * @type {Function | null}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    drawItemHandler: {
        get: function() {
            return this._drawItemHandler;
        },
        configurable: true
    },

    /**
     * Width of the item
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemWidth: {
        get: function() {
            return this._itemWidth;
        },
        configurable: true
    },

    /**
     * Height of the item
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemHeight: {
        get: function() {
            return this._itemHeight;
        },
        configurable: true
    },

    /**
     * Font of the item
     *
     * @readonly
     * @type {Function | Object}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemFont: {
        get: function() {
            return this._itemFont;
        },
        configurable: true
    },

    /**
     * Text color of the item
     * 
     * @readonly
     * @type {Function | String}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemTextColor: {
        get: function() {
            return this._itemTextColor;
        },
        configurable: true
    },

    /**
     * Paint opacity of the item
     * 
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Sprite.Selectable.prototype
     */
    itemPaintOpacity: {
        get: function() {
            return this._itemPaintOpacity;
        },
        configurable: true
    },

    /**
     * Align of the item
     * 
     * @readonly
     * @type {Function | String}
     * @memberof DKTools.Sprite.Selectable.prototype
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
 * Clears all data
 *
 * @private
 * @override
 * 
 * @see DKTools.Sprite.Button.prototype._clearAll
 * @see DKTools.Sprite.Selectable.prototype._clearItems
 * @see DKTools.Sprite.Selectable.prototype._clearHandlers
 * @see DKTools.Sprite.Selectable.prototype._clearTopRow
 * @see DKTools.Sprite.Selectable.prototype._clearTopCol
 */
DKTools.Sprite.Selectable.prototype._clearAll = function() {
    DKTools.Sprite.Button.prototype._clearAll.call(this);
    this._clearItems();
    this._clearHandlers();
    this._clearTopRow();
    this._clearTopCol();
};

/**
 * Clears items
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._clearItems = function() {
    /**
     * @private
     * @readonly
     * @type {Object[]}
     */
    this._items = [];
};

/**
 * Clears the selection handlers
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
 * Clears the top row
 *
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
 * Clears the top col
 *
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
 * Creates all
 *
 * @private
 * @override
 * 
 * @see DKTools.Sprite.Button.prototype._createAll
 * @see DKTools.Sprite.Selectable.prototype._createCursorSprite
 */
DKTools.Sprite.Selectable.prototype._createAll = function() {
    DKTools.Sprite.Button.prototype._createAll.call(this);
    this._createCursorSprite();
};

/**
 * Creates sprite of the cursor
 *
 * @private
 * 
 * @see DKTools.Sprite.Cursor
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
 * Sets the events
 *
 * @version 3.0.0
 * @private
 * @override
 * 
 * @see DKTools.Sprite.Button.prototype._setupEvents
 * @see DKTools.Sprite.Selectable.prototype._setupMouseClickEvent
 * @see DKTools.Sprite.Selectable.prototype._setupMouseLongPressEvent
 * @see DKTools.Sprite.Selectable.prototype._setupMouseHoverEvents
 * @see DKTools.Sprite.Selectable.prototype._setupWheelScrollEvents
 */
DKTools.Sprite.Selectable.prototype._setupEvents = function() {
    DKTools.Sprite.Button.prototype._setupEvents.call(this);
    this._setupMouseClickEvent();
    this._setupMouseLongPressEvent();
    this._setupMouseHoverEvents();
    this._setupWheelScrollEvents();
};

/**
 * Sets the event of the click (mouse-click-left)
 *
 * @private
 * 
 * @see DKTools.Sprite.Selectable.prototype.addEvent
 */
DKTools.Sprite.Selectable.prototype._setupMouseClickEvent = function() {
    this.addEvent({
        type: 'mouse-click-left',
        onUpdate: this._onTouch.bind(this, true)
    });
};

/**
 * Sets the event of the long press (mouse-long-press-left)
 *
 * @private
 * 
 * @see DKTools.Sprite.Selectable.prototype.addEvent
 */
DKTools.Sprite.Selectable.prototype._setupMouseLongPressEvent = function() {
    this.addEvent({
        type: 'mouse-long-press-left',
        onUpdate: this._onTouch.bind(this, false)
    });
};

/**
 * Sets the events of the mouse hover (mouse-enter and mouse-move)
 *
 * @private
 * 
 * @see DKTools.Sprite.Selectable.prototype.addEvent
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
 * Sets the events of the wheel scrolling (wheel-Y-inside and wheel-Y-outside)
 *
 * @private
 * 
 * @see DKTools.Sprite.Selectable.prototype.addEvent
 */
DKTools.Sprite.Selectable.prototype._setupWheelScrollEvents = function() {
    this.addEvent({
        type: 'wheel-Y-inside',
        onUpdate: this.processWheelScroll.bind(this)
    });

    this.addEvent({
        type: 'wheel-Y-outside',
        onUpdate: this.processWheelScroll.bind(this)
    });
};

// _add methods

/**
 * Adds children objects to processing
 *
 * @private
 * @override
 * 
 * @see DKTools.Sprite.Button.prototype._addAllChildren
 * @see DKTools.Sprite.Selectable.prototype._addCursorSprite
 */
DKTools.Sprite.Selectable.prototype._addAllChildren = function() {
    DKTools.Sprite.Button.prototype._addAllChildren.call(this);
    this._addCursorSprite();
};

/**
 * Adds sprite of the cursor to processing
 *
 * @private
 */
DKTools.Sprite.Selectable.prototype._addCursorSprite = function() {
    this.addChild(this._cursorSprite);
};

// standard methods

/**
 * Returns the standard index
 *
 * @returns {Number} Standard index
 */
DKTools.Sprite.Selectable.prototype.standardIndex = function() {
    return 0;
};

/**
 * Returns the standard number of the columns
 *
 * @returns {Number} Standard number of the columns
 */
DKTools.Sprite.Selectable.prototype.standardMaxCols = function() {
    return 1;
};

/**
 * Returns the standard fixed cursor
 *
 * @returns {Boolean} Standard fixed cursor
 */
DKTools.Sprite.Selectable.prototype.standardCursorFixed = function() {
    return false;
};

/**
 * Returns the standard cursor all
 *
 * @returns {Boolean} Standard cursor all
 */
DKTools.Sprite.Selectable.prototype.standardCursorAll = function() {
    return false;
};

/**
 * Returns the standard fixed horizontal position
 * 
 * @returns {Boolean} Standard fixed horizontal position
 */
DKTools.Sprite.Selectable.prototype.standardFixedHorizontal = function() {
    return false;
};

/**
 * Returns the standard horizontal spacing
 *
 * @returns {Number} Standard horizontal spacing
 */
DKTools.Sprite.Selectable.prototype.standardHorizontalSpacing = function() {
    return 0;
};

/**
 * Returns the standard vertical spacing
 *
 * @returns {Number} Standard vertical spacing
 */
DKTools.Sprite.Selectable.prototype.standardVerticalSpacing = function() {
    return 0;
};

/**
 * Returns the standard text padding
 *
 * @returns {Number} Standard text padding
 */
DKTools.Sprite.Selectable.prototype.standardTextPadding = function() {
    return 6;
};

/**
 * Returns the standard list of the items
 *
 * @returns {Array} Standard list of the items
 */
DKTools.Sprite.Selectable.prototype.standardItems = function() {
    return [];
};

/**
 * Returns the standard handler of draw of the item
 *
 * @returns {Function} Standard handler of draw of the item
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
            font,
            textColor,
            paintOpacity,
            align,
            rect,
            resetFont: true,
            resetTextColor: true,
            resetPaintOpacity: true
        });
    }.bind(this);
};

/**
 * Returns the standard item width
 *
 * @returns {Function} Standard item width
 */
DKTools.Sprite.Selectable.prototype.standardItemWidth = function() {
    return function() {
        const spacing = this._horizontalSpacing;
        return Math.floor((this.realWidth + spacing) / this.getMaxCols() - spacing);
    }.bind(this);
};

/**
 * Returns the standard item height
 *
 * @returns {Function} Standard item height
 */
DKTools.Sprite.Selectable.prototype.standardItemHeight = function() {
    return this.getLineHeight();
};

/**
 * Returns the standard item rect
 *
 * @returns {Function} Standard item rect
 */
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
 * Returns the standard item font
 *
 * @returns {Object} Standard item font
 */
DKTools.Sprite.Selectable.prototype.standardItemFont = function() {
    return this.font;
};

/**
 * Returns the standard text color of the item
 *
 * @returns {String} Standard text color of the item
 */
DKTools.Sprite.Selectable.prototype.standardItemTextColor = function() {
    return this.textColor;
};

/**
 * Returns the standard paint opacity of the item
 *
 * @returns {Number} Standard paint opacity of the item
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
 * Returns the standard paint opacity of the enabled item
 *
 * @returns {Number} Standard paint opacity of the enabled item
 */
DKTools.Sprite.Selectable.prototype.standardEnabledItemPaintOpacity = function() {
    return 255;
};

/**
 * Returns the standard paint opacity of the disabled item
 *
 * @returns {Number} Standard paint opacity of the disabled item
 */
DKTools.Sprite.Selectable.prototype.standardDisabledItemPaintOpacity = function() {
    try {
        return Window_Base.prototype.translucentOpacity.call(this);
    } catch(e) {
        return 160;
    }
};

/**
 * Returns the standard item align
 *
 * @returns {String} Standard item align
 */
DKTools.Sprite.Selectable.prototype.standardItemAlign = function() {
    return this.align;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 *
 * @param {Number} [object.index] - Index
 * @param {Number} [object.maxCols] - Number of the columns
 * @param {Boolean} [object.fixedHorizontal] - Fixed horizontal position
 * @param {Boolean} [object.cursorFixed] - Fixed cursor
 * @param {Boolean} [object.cursorAll] - Cursor all
 * @param {Number} [object.horizontalSpacing] - Horizontal spacing
 * @param {Number} [object.verticalSpacing] - Vertical spacing
 * @param {Number} [object.textPadding] - Text padding
 * @param {Object[]} [object.items] - List of the items
 * @param {Function} [object.drawItemHandler] - Handler of draw of the item
 * @param {Function | Number} [object.itemWidth] - Width of the item
 * @param {Function | Number} [object.itemHeight] - Height of the item
 * @param {Function} [object.itemRect] - Rectangle of the item
 * @param {Function | Object} [object.itemFont] - Font of the item
 * @param {Function | String} [object.itemTextColor] - Text color of the item
 * @param {Function | Number} [object.itemPaintOpacity] - Paint opacity of the item
 * @param {Function | String} [object.itemAlign] - Align of the item
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.Selectable.prototype.setupIndex
 * @see DKTools.Sprite.Selectable.prototype.setupMaxCols
 * @see DKTools.Sprite.Selectable.prototype.setupFixedHorizontal
 * @see DKTools.Sprite.Selectable.prototype.setupCursorFixed
 * @see DKTools.Sprite.Selectable.prototype.setupCursorAll
 * @see DKTools.Sprite.Selectable.prototype.setupSpacing
 * @see DKTools.Sprite.Selectable.prototype.setupTextPadding
 * @see DKTools.Sprite.Selectable.prototype.setupItems
 * @see DKTools.Sprite.Selectable.prototype.setupDrawItemHandler
 * @see DKTools.Sprite.Selectable.prototype.setupItemWidth
 * @see DKTools.Sprite.Selectable.prototype.setupItemHeight
 * @see DKTools.Sprite.Selectable.prototype.setupItemRect
 * @see DKTools.Sprite.Selectable.prototype.setupItemFont
 * @see DKTools.Sprite.Selectable.prototype.setupItemTextColor
 * @see DKTools.Sprite.Selectable.prototype.setupItemPaintOpacity
 * @see DKTools.Sprite.Selectable.prototype.setupItemAlign
 */
DKTools.Sprite.Selectable.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupIndex(object.index);
    this.setupMaxCols(object.maxCols);
    this.setupFixedHorizontal(object.fixedHorizontal);
    this.setupCursorFixed(object.cursorFixed);
    this.setupCursorAll(object.cursorAll);
    this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
    this.setupTextPadding(object.textPadding);
    this.setupItems(object.items);
    this.setupDrawItemHandler(object.drawItemHandler);
    this.setupItemWidth(object.itemWidth);
    this.setupItemHeight(object.itemHeight);
    this.setupItemRect(object.itemRect);
    this.setupItemFont(object.itemFont);
    this.setupItemTextColor(object.itemTextColor);
    this.setupItemPaintOpacity(object.itemPaintOpacity);
    this.setupItemAlign(object.itemAlign);
};

/**
 * Sets the index
 *
 * @param {Number} [index=this.standardIndex()] - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.standardIndex
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
 * Sets the number of the columns
 *
 * @param {Number} [cols=this.standardMaxCols()] - Number of the columns
 *
 * @see DKTools.Sprite.Selectable.prototype.standardMaxCols
 */
DKTools.Sprite.Selectable.prototype.setupMaxCols = function(cols) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxCols = cols || this.standardMaxCols();
};

/**
 * Sets the fixed horizontal position
 * 
 * @param {Boolean} [fixedHorizontal=this.standardFixedHorizontal()] - Fixed horizontal position
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardFixedHorizontal
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
 * Sets the fixed cursor
 * 
 * @param {Boolean} [cursorFixed=this.standardCursorFixed()] - Fixed cursor
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardCursorFixed
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
 * Sets the cursor all
 * 
 * @param {Boolean} [cursorAll=this.standardCursorAll()] - Cursor all
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardCursorAll
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
 * Sets the horizontal spacing
 *
 * @param {Number} [spacing=this.standardHorizontalSpacing()] - Horizontal spacing
 *
 * @see DKTools.Sprite.Selectable.prototype.standardHorizontalSpacing
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
 * Sets the vertical spacing
 *
 * @param {Number} [spacing=this.standardVerticalSpacing()] - Vertical spacing
 *
 * @see DKTools.Sprite.Selectable.prototype.standardVerticalSpacing
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
 * Sets the horizontal and vertical spacings
 *
 * @param {Number} [horizontalSpacing] - Horizontal spacing
 * @param {Number} [verticalSpacing] - Vertical spacing
 * 
 * @see DKTools.Sprite.Selectable.prototype.setupHorizontalSpacing
 * @see DKTools.Sprite.Selectable.prototype.setupVerticalSpacing
 */
DKTools.Sprite.Selectable.prototype.setupSpacing = function(horizontalSpacing, verticalSpacing) {
    this.setupHorizontalSpacing(horizontalSpacing);
    this.setupVerticalSpacing(verticalSpacing);
};

/**
 * Sets the text padding
 *
 * @param {Number} [textPadding=this.standardTextPadding()] - Text padding
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardTextPadding
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
 * Sets the list of the items
 *
 * @param {Object[]} items - Items
 * 
 * @param {Function | String} [items[].name] - Item name
 * @param {Function | String} [items[].align] - Item align
 * @param {Function | String} [items[].textColor] - Item text color
 * @param {Function | Object} [items[].font] - Item font
 * @param {Function | Number} [items[].paintOpacity] - Item paint opacity
 * @param {Function | Boolean} [items[].enabled] - Item activity
 * @param {String} [items[].symbol] - Item symbol
 * @param {Function} [items[].handler] - Item handler
 * @param {String} [items[].font.fontFace] - Font face
 * @param {Number} [items[].font.fontSize] - Font size
 * @param {Boolean} [items[].font.fontItalic] - Font italic
 */
DKTools.Sprite.Selectable.prototype.setupItems = function(items) {
    if (items == null) {
        items = this.standardItems();
    }

    _.forEach(items, this._checkItem.bind(this));

    this._items = items;
};

/**
 * Sets the handler of draw of the item
 *
 * @param {Function} [handler=this.standardDrawItemHandler()] - Handler of draw of the item
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardDrawItemHandler
 */
DKTools.Sprite.Selectable.prototype.setupDrawItemHandler = function(handler) {
    /**
     * @private
     * @readonly
     * @type {Function | null}
     */
    this._drawItemHandler = handler || this.standardDrawItemHandler();
};

/**
 * Sets the width of the item
 *
 * @param {Function | Number} [itemWidth=this.standardItemWidth()] - Width of the item
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardItemWidth
 */
DKTools.Sprite.Selectable.prototype.setupItemWidth = function(itemWidth) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._itemWidth = itemWidth || this.standardItemWidth();
};

/**
 * Sets the height of the item
 *
 * @param {Function | Number} [itemHeight=this.standardItemHeight()] - Height of the item
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardItemHeight
 */
DKTools.Sprite.Selectable.prototype.setupItemHeight = function(itemHeight) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._itemHeight = itemHeight || this.standardItemHeight();
};

/**
 * Sets the rectangle of the item
 * 
 * @param {Function} [itemRect=this.standardItemRect()] - Rectangle of the item
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardItemRect
 */
DKTools.Sprite.Selectable.prototype.setupItemRect = function(itemRect) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._itemRect = itemRect || this.standardItemRect();
};

/**
 * Sets the font of the item
 *
 * @param {Function | Object} [itemFont=this.standardItemFont()] - Font of the item
 *
 * @param {String} [itemFont.fontFace] - Font face
 * @param {Number} [itemFont.fontSize] - Font size
 * @param {Boolean} [itemFont.fontItalic] - Font italic
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardItemFont
 */
DKTools.Sprite.Selectable.prototype.setupItemFont = function(itemFont) {
    /**
     * @private
     * @readonly
     * @type {Function | Object}
     */
    this._itemFont = itemFont || this.standardItemFont();
};

/**
 * Sets the text color of the item
 *
 * @param {Function | String} [itemTextColor=this.standardItemTextColor()] - Text color of the item
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardItemTextColor
 */
DKTools.Sprite.Selectable.prototype.setupItemTextColor = function(itemTextColor) {
    /**
     * @private
     * @readonly
     * @type {Function | String}
     */
    this._itemTextColor = itemTextColor || this.standardItemTextColor();
};

/**
 * Sets the paint opacity of the item
 *
 * @param {Function | Number} [itemPaintOpacity=this.standardItemPaintOpacity()] - Paint opacity of the item
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardItemPaintOpacity
 */
DKTools.Sprite.Selectable.prototype.setupItemPaintOpacity = function(itemPaintOpacity) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._itemPaintOpacity = itemPaintOpacity || this.standardItemPaintOpacity();
};

/**
 * Sets the align of the item
 *
 * @param {Function | String} [itemAlign=this.standardItemAlign()] - Align of the item
 * 
 * @see DKTools.Sprite.Selectable.prototype.standardItemAlign
 */
DKTools.Sprite.Selectable.prototype.setupItemAlign = function(itemAlign) {
    /**
     * @private
     * @readonly
     * @type {Function | String}
     */
    this._itemAlign = itemAlign || this.standardItemAlign();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the object
 *
 * @param {Number} [object.index] - Index
 * @param {Number} [object.maxCols] - Number of the columns
 * @param {Boolean} [object.fixedHorizontal] - Fixed horizontal position
 * @param {Boolean} [object.cursorFixed] - Fixed cursor
 * @param {Boolean} [object.cursorAll] - Cursor all
 * @param {Number} [object.horizontalSpacing] - Horizontal spacing
 * @param {Number} [object.verticalSpacing] - Vertical spacing
 * @param {Number} [object.textPadding] - Text padding
 * @param {Object[]} [object.items] - List of the items
 * @param {Function} [object.drawItemHandler] - Handler of draw of the item
 * @param {Function | Number} [object.itemWidth] - Width of the item
 * @param {Function | Number} [object.itemHeight] - Height of the item
 * @param {Function} [object.itemRect] - Rectangle of the item
 * @param {Function | Object} [object.itemFont] - Font of the item
 * @param {Function | String} [object.itemTextColor] - Text color of the item
 * @param {Function | Number} [object.itemPaintOpacity] - Paint opacity of the item
 * @param {Function | String} [object.itemAlign] - Align of the item
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 *
 * @see DKTools.Sprite.Button.prototype.setAll
 * @see DKTools.Sprite.Selectable.prototype.setIndex
 * @see DKTools.Sprite.Selectable.prototype.setMaxCols
 * @see DKTools.Sprite.Selectable.prototype.setFixedHorizontal
 * @see DKTools.Sprite.Selectable.prototype.setCursorFixed
 * @see DKTools.Sprite.Selectable.prototype.setCursorAll
 * @see DKTools.Sprite.Selectable.prototype.setSpacing
 * @see DKTools.Sprite.Selectable.prototype.setTextPadding
 * @see DKTools.Sprite.Selectable.prototype.setItems
 * @see DKTools.Sprite.Selectable.prototype.setDrawItemHandler
 * @see DKTools.Sprite.Selectable.prototype.setItemWidth
 * @see DKTools.Sprite.Selectable.prototype.setItemHeight
 * @see DKTools.Sprite.Selectable.prototype.setItemRect
 * @see DKTools.Sprite.Selectable.prototype.setItemFont
 * @see DKTools.Sprite.Selectable.prototype.setItemTextColor
 * @see DKTools.Sprite.Selectable.prototype.setItemPaintOpacity
 * @see DKTools.Sprite.Selectable.prototype.setItemAlign
 * @see DKTools.Sprite.Selectable.prototype.start
 * @see DKTools.Sprite.Selectable.prototype.activate
 *
 * @returns {Number} Number of changed parameters
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
 * Changes the index
 * Returns true if the change occurred
 *
 * @param {Number} [index] - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupIndex
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 * 
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setIndex = function(index, blockRefreshAll) {
    if (this._index === index) {
        return false;
    }

    const lastIndex = this._index;
    this.setupIndex(index);

    if (this._index === lastIndex) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the number of the columns
 * Returns true if the change occurred
 *
 * @param {Number} [cols] - Number of the columns
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupMaxCols
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 * 
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setMaxCols = function(cols, blockRefreshAll) {
    if (this._maxCols === cols) {
        return false;
    }

    const lastCols = this._maxCols;
    this.setupMaxCols(cols);

    if (this._maxCols === lastCols) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the fixed horizontal position
 * Returns true if the change occurred
 * 
 * @param {Boolean} [fixedHorizontal]
 * @param {Boolean} [blockRefreshAll=false] Blocking the call of the "refreshAll" function
 * 
 * @see DKTools.Sprite.Selectable.prototype.setupFixedHorizontal
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 * 
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setFixedHorizontal = function(fixedHorizontal, blockRefreshAll) {
    if (this._fixedHorizontal === fixedHorizontal) {
        return false;
    }

    const lastFixed = this._fixedHorizontal;
    this.setupFixedHorizontal(fixedHorizontal);

    if (this._fixedHorizontal === lastFixed) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the fixed cursor
 * Returns true if the change occurred
 * 
 * @param {Boolean} [cursorFixed] - Fixed cursor
 * @param {Boolean} [blockRefreshAll=false] Blocking the call of the "refreshAll" function
 * 
 * @see DKTools.Sprite.Selectable.prototype.setupCursorFixed
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 * 
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setCursorFixed = function(cursorFixed, blockRefreshAll) {
    if (this._cursorFixed === cursorFixed) {
        return false;
    }

    const lastFixed = this._cursorFixed;
    this.setupCursorFixed(cursorFixed);

    if (this._cursorFixed === lastFixed) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the cursor all
 * Returns true if the change occurred
 * 
 * @param {Boolean} [cursorAll] - Cursor all
 * @param {Boolean} [blockRefreshAll=false] Blocking the call of the "refreshAll" function
 * 
 * @see DKTools.Sprite.Selectable.prototype.setupCursorAll
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 * 
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setCursorAll = function(cursorAll, blockRefreshAll) {
    if (this._cursorAll === cursorAll) {
        return false;
    }

    const lastAll = this._cursorAll;
    this.setupCursorAll(cursorAll);

    if (this._cursorAll === lastAll) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the horizontal spacing
 * Returns true if the change occurred
 *
 * @param {Number} [spacing] - Horizontal spacing
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupHorizontalSpacing
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setHorizontalSpacing = function(spacing, blockRefreshAll) {
    if (this._horizontalSpacing === spacing) {
        return false;
    }

    const lastSpacing = this._horizontalSpacing;
    this.setupHorizontalSpacing(spacing);

    if (this._horizontalSpacing === lastSpacing) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the vertical spacing
 * Returns true if the change occurred
 *
 * @param {Number} [spacing] - Vertical spacing
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupVerticalSpacing
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setVerticalSpacing = function(spacing, blockRefreshAll) {
    if (this._verticalSpacing === spacing) {
        return false;
    }

    const lastSpacing = this._verticalSpacing;
    this.setupVerticalSpacing(spacing);

    if (this._verticalSpacing === lastSpacing) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the horizontal and vertical spacings
 * Returns the number of changed parameters
 *
 * @param {Number} [horizontalSpacing] - Horizontal spacing
 * @param {Number} [verticalSpacing] - Vertical spacing
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setHorizontalSpacing
 * @see DKTools.Sprite.Selectable.prototype.setVerticalSpacing
 * 
 * @returns {Number} Number of changed parameters
 */
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

/**
 * Changes the text padding
 * Returns true if the change occurred
 *
 * @param {Number} [textPadding] - Text padding
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupTextPadding
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setTextPadding = function(textPadding, blockRefreshAll) {
    if (this._textPadding === textPadding) {
        return false;
    }

    const lastPadding = this._textPadding;
    this.setupTextPadding(textPadding);

    if (this._textPadding === lastPadding) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the items
 * Returns true if the change occurred
 *
 * @param {Object[]} [items] - List of the items
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupItems
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setItems = function(items, blockRefreshAll) {
    if (this._items == items) {
        return false;
    }

    this.setupItems(items);

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the handler of draw of the item
 * Returns true if the change occurred
 *
 * @param {Function} [handler] - Handler of draw of the item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupDrawItemHandler
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setDrawItemHandler = function(handler, blockRefreshAll) {
    if (this._drawItemHandler === handler) {
        return false;
    }

    const lastHandler = this._drawItemHandler;
    this.setupDrawItemHandler(handler);

    if (this._drawItemHandler === lastHandler) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the width of the item
 * Returns true if the change occurred
 *
 * @param {Function | Number} [itemWidth] - Width of the item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupItemWidth
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.Selectable.prototype.setItemWidth = function(itemWidth, blockRefreshAll) {
    if (this._itemWidth === itemWidth) {
        return false;
    }

    const lastWidth = this._itemWidth;
    this.setupItemWidth(itemWidth);

    if (this._itemWidth === lastWidth) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the height of the item
 * Returns true if the change occurred
 *
 * @param {Function | Number} [itemHeight] - Height of the item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupItemHeight
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occured
 */
DKTools.Sprite.Selectable.prototype.setItemHeight = function(itemHeight, blockRefreshAll) {
    if (this._itemHeight === itemHeight) {
        return false;
    }

    const lastHeight = this._itemHeight;
    this.setupItemHeight(itemHeight);

    if (this._itemHeight === lastHeight) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the font of the item
 * Returns true if the change occurred
 *
 * @param {Function | Object} [itemFont] - Font of the item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupItemFont
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occured
 */
DKTools.Sprite.Selectable.prototype.setItemFont = function(itemFont, blockRefreshAll) {
    if (this._itemFont === itemFont) {
        return false;
    }

    const lastFont = this._itemFont;
    this.setupItemFont(itemFont);

    if (this._itemFont === lastFont) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the text color of the item
 * Returns true if the change occurred
 * 
 * @param {Function | String} [itemTextColor] - Text color of the item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupItemTextColor
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occured
 */
DKTools.Sprite.Selectable.prototype.setItemTextColor = function(itemTextColor, blockRefreshAll) {
    if (this._itemTextColor === itemTextColor) {
        return false;
    }

    const lastTextColor = this._itemTextColor;
    this.setupItemTextColor(itemTextColor);

    if (this._itemTextColor === lastTextColor) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the item paint opacity
 * Returns true if the change occurred
 *
 * @param {Function | Number} [itemPaintOpacity] - Paint opacity of the item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupItemPaintOpacity
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occured
 */
DKTools.Sprite.Selectable.prototype.setItemPaintOpacity = function(itemPaintOpacity, blockRefreshAll) {
    if (this._itemPaintOpacity === itemPaintOpacity) {
        return false;
    }

    const lastPaintOpacity = this._itemPaintOpacity;
    this.setupItemPaintOpacity(itemPaintOpacity);

    if (this._itemPaintOpacity === lastPaintOpacity) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the align of the item
 * Returns true if the change occurred
 *
 * @param {Function | String} [itemAlign] - Align of the item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.setupItemAlign
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Boolean} Change occured
 */
DKTools.Sprite.Selectable.prototype.setItemAlign = function(itemAlign, blockRefreshAll) {
    if (this._itemAlign === itemAlign) {
        return false;
    }

    const lastAlign = this._itemAlign;
    this.setupItemAlign(itemAlign);

    if (this._itemAlign === lastAlign) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the top row
 * 
 * @param {Number} row - Row
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxTopRow
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.setTopRow = function(row, blockRefreshAll) {
    const topRow = _.clamp(row, 0, this.getMaxTopRow());

    if (this._topRow !== topRow) {
        this._topRow = topRow;

        if (!blockRefreshAll) {
            this.refreshAll();
        }
    }
};

/**
 * Changes the top column
 * 
 * @param {Number} col - Column
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxTopCol
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.setTopCol = function(col, blockRefreshAll) {
    const topCol = _.clamp(col, 0, this.getMaxTopCol());

    if (this._topCol !== topCol) {
        this._topCol = topCol;

        if (!blockRefreshAll) {
            this.refreshAll();
        }
    }
};

/**
 * Chagnes the bottom row
 * 
 * @param {Number} row - Row
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
 * @see DKTools.Sprite.Selectable.prototype.setTopRow
 */
DKTools.Sprite.Selectable.prototype.setBottomRow = function(row, blockRefreshAll) {
    this.setTopRow(row - (this.getMaxPageRows() - 1), blockRefreshAll);
};

/**
 * Chagnes the bottom column
 * 
 * @param {Number} col - Column
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
 * @see DKTools.Sprite.Selectable.prototype.setTopCol
 */
DKTools.Sprite.Selectable.prototype.setBottomCol = function(col, blockRefreshAll) {
    this.setTopCol(col - (this.getMaxPageCols() - 1), blockRefreshAll);
};

/**
 * Changes the handler of the symbol
 * 
 * @param {String} symbol - Symbol
 * @param {Function} [handler] - Handler
 */
DKTools.Sprite.Selectable.prototype.setHandler = function(symbol, handler) {
    this._handlers[symbol] = handler;
};

/**
 * Changes the cursor rect
 * Returns true if the change occurred
 * 
 * @param {PIXI.Rectangle | Rectangle | Object | Number} object - The X coordinate or Rectangle
 * @param {Number} [y] - The Y coordinate
 * @param {Number} [width] - Width of the rect
 * @param {Number} [height] - Height of the rect
 *
 * @param {Number} object.x - The X coordinate
 * @param {Number} object.y - The Y coordinate
 * @param {Number} object.width - Width of the rect
 * @param {Number} object.height - Height of the rect
 * 
 * @see DKTools.Sprite.Cursor.prototype.setCursorRect
 *
 * @returns {Boolean} Change occured
 */
DKTools.Sprite.Selectable.prototype.setCursorRect = function(object, y, width, height) {
    return this._cursorSprite.setCursorRect(object, y, width, height);
};

// get methods

/**
 * Returns the rectangle of the item by index
 *
 * @param {Number} index - Index
 * @returns {Rectangle} Rectangle of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemRectByIndex = function(index) {
    return this._itemRect(index);
};

/**
 * Returns the rectangle of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 *
 * @returns {Rectangle} Rectangle of the item
 */
DKTools.Sprite.Selectable.prototype.getItemRect = function(item) {
    return this.getItemRectByIndex(this.getItemIndex(item));
};

/**
 * Returns the rectangle of the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 *
 * @returns {Rectangle} Rectangle of the current item (selected item)
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemRect = function() {
    return this.getItemRectByIndex(this._index);
};

/**
 * Returns the rectangle of text of the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 *
 * @returns {Rectangle} Rectangle of text of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemRectForTextByIndex = function(index) {
    const rect = this.getItemRectByIndex(index);
    rect.x += this._textPadding;
    rect.width -= this._textPadding * 2;
    return rect;
};

/**
 * Returns the rectangle of text of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemRectForTextByIndex
 *
 * @returns {Rectangle} Rectangle of text of the item
 */
DKTools.Sprite.Selectable.prototype.getItemRectForText = function(item) {
    return this.getItemRectForTextByIndex(this.getItemIndex(item));
};

/**
 * Returns the width of the item
 *
 * @returns {Number} Width of the item
 */
DKTools.Sprite.Selectable.prototype.getItemWidth = function() {
    if (DKTools.Utils.isFunction(this._itemWidth)) {
        return this._itemWidth();
    }

    return this._itemWidth;
};

/**
 * Returns the height of the item
 *
 * @returns {Number} Height of the item
 */
DKTools.Sprite.Selectable.prototype.getItemHeight = function() {
    if (DKTools.Utils.isFunction(this._itemHeight)) {
        return this._itemHeight();
    } else if (DKTools.Utils.isString(this._itemHeight)) {
        return Number(this._itemHeight) * this.getLineHeight();
    }

    return this._itemHeight;
};

/**
 * Returns the item by index
 *
 * @param {Number} index - Index
 * @returns {Object | null} Item or null
 */
DKTools.Sprite.Selectable.prototype.getItem = function(index) {
    return this._items[index] || null;
};

/**
 * Returns the font of the item by index
 *
 * @param {Number} index - Index
 * @returns {Object} Font of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemFontByIndex = function(index) {
    const item = this.getItem(index);
    const itemFont = item.font || this._itemFont;

    if (DKTools.Utils.isFunction(itemFont)) {
        return itemFont(index);
    }

    return itemFont;
};

/**
 * Returns the font of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemFontByIndex
 *
 * @returns {Object} Font of the item
 */
DKTools.Sprite.Selectable.prototype.getItemFont = function(item) {
    return this.getItemFontByIndex(this.getItemIndex(item));
};

/**
 * Returns the text color of the item by index
 *
 * @param {Number} index - Index
 * @returns {String} Text color of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemTextColorByIndex = function(index) {
    const item = this.getItem(index);
    const itemTextColor = item.textColor || this._itemTextColor;

    if (DKTools.Utils.isFunction(itemTextColor)) {
        return itemTextColor(index);
    }

    return itemTextColor;
};

/**
 * Returns the text color of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemTextColorByIndex
 *
 * @returns {String} Text color of the item
 */
DKTools.Sprite.Selectable.prototype.getItemTextColor = function(item) {
    return this.getItemTextColorByIndex(this.getItemIndex(item));
};

/**
 * Returns the paint opacity of the item by index
 *
 * @param {Number} index - Index
 * @returns {Number} Paint opacity of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemPaintOpacityByIndex = function(index) {
    const item = this.getItem(index);
    const itemPaintOpacity = Number.isFinite(item.paintOpacity) ? item.paintOpacity : this._itemPaintOpacity;

    if (DKTools.Utils.isFunction(itemPaintOpacity)) {
        return itemPaintOpacity(index);
    }

    return itemPaintOpacity;
};

/**
 * Returns the paint opacity of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemPaintOpacityByIndex
 *
 * @returns {Number} Paint opacity of the item
 */
DKTools.Sprite.Selectable.prototype.getItemPaintOpacity = function(item) {
    return this.getItemPaintOpacityByIndex(this.getItemIndex(item));
};

/**
 * Returns the align of the item by index
 *
 * @param {Number} index - Index
 * @returns {String} Align of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemAlignByIndex = function(index) {
    const item = this.getItem(index);
    const itemAlign = item.align || this._itemAlign;

    if (DKTools.Utils.isFunction(itemAlign)) {
        return itemAlign(index);
    }

    return itemAlign;
};

/**
 * Returns the align of the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemAlignByIndex
 *
 * @returns {String} Align of the item by index
 */
DKTools.Sprite.Selectable.prototype.getItemAlign = function(item) {
    return this.getItemAlignByIndex(this.getItemIndex(item));
};

/**
 * Returns the previous index
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 * @returns {Number} Previous index
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
 * Returns the next index
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 * @returns {Number} Next index
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
 * Returns the previous item
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 *
 * @see DKTools.Sprite.Selectable.prototype.getPrevIndex
 * @see DKTools.Sprite.Selectable.prototype.getItem
 *
 * @returns {Object | null} Previous item or null
 */
DKTools.Sprite.Selectable.prototype.getPrevItem = function(wrap) {
    return this.getItem(this.getPrevIndex(wrap));
};

/**
 * Returns the next item
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 *
 * @see DKTools.Sprite.Selectable.prototype.getNextIndex
 * @see DKTools.Sprite.Selectable.prototype.getItem
 *
 * @returns {Object | null} Next item or null
 */
DKTools.Sprite.Selectable.prototype.getNextItem = function(wrap) {
    return this.getItem(this.getNextIndex(wrap));
};

/**
 * Returns the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 *
 * @returns {Object | null} Current item (selected item) or null
 */
DKTools.Sprite.Selectable.prototype.getCurrentItem = function() {
    return this.getItem(this._index);
};

/**
 * Returns the index of the item
 *
 * @param {Object} item - item
 * @returns {Number} Index of the item
 */
DKTools.Sprite.Selectable.prototype.getItemIndex = function(item) {
    return _.indexOf(this._items, item);
};

/**
 * Returns the visible items
 *
 * @returns {Object[]} Visible items
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
 * Returns the name of the item by index
 *
 * @param {Number} index - Index
 * @returns {String | null} Name of the item by index or null
 */
DKTools.Sprite.Selectable.prototype.getItemName = function(index) {
    const item = this.getItem(index);

    if (item) {
        const name = item.name;
        if (DKTools.Utils.isFunction(name)) {
            return name(index);
        }
        return name;
    }

    return null;
};

/**
 * Returns the symbol of the item by index
 *
 * @param {Number} index - Index
 * @returns {String | null} Symbol of the item by index or null
 */
DKTools.Sprite.Selectable.prototype.getItemSymbol = function(index) {
    const item = this.getItem(index);
    return item ? item.symbol : null;
};

/**
 * Returns the ext of the item by index
 *
 * @param {Number} index - Index
 * @returns {* | null} Ext of the item by index or null
 */
DKTools.Sprite.Selectable.prototype.getItemExt = function(index) {
    var item = this.getItem(index);
    return item ? item.ext : null;
};

/**
 * Returns the name of the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemName
 *
 * @returns {String | null} Name of the current item (selected item) or null
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemName = function() {
    return this.getItemName(this._index);
};

/**
 * Returns the symbol of the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemSymbol
 *
 * @returns {String | null} Symbol of the current item (selected item) or null
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemSymbol = function() {
    return this.getItemSymbol(this._index);
};

/**
 * Returns the ext of the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemExt
 *
 * @returns {* | null} Ext of the current item (selected item) or null
 */
DKTools.Sprite.Selectable.prototype.getCurrentItemExt = function() {
    return this.getItemExt(this._index);
};

/**
 * Returns the number of the items
 *
 * @returns {Number} Number of the items
 */
DKTools.Sprite.Selectable.prototype.getMaxItems = function() {
    return this._items.length;
};

/**
 * Returns the maximum number of the rows
 *
 * @returns {Number} Maximum number of the rows
 */
DKTools.Sprite.Selectable.prototype.getMaxRows = function() {
    if (this.isFixedHorizontal()) {
        return 1;
    }

    return Math.max(1, Math.ceil(this.getMaxItems() / this.getMaxCols()));
};

/**
 * Returns the maximum number of the columns
 *
 * @returns {Number} Maximum number of the columns
 */
DKTools.Sprite.Selectable.prototype.getMaxCols = function() {
    return this._maxCols;
};

/**
 * Returns the maximum top row
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxRows
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
 * 
 * @returns {Number} Maximum top row
 */
DKTools.Sprite.Selectable.prototype.getMaxTopRow = function() {
    return Math.max(0, this.getMaxRows() - this.getMaxPageRows());
};

/**
 * Returns the maximum top column
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
 * 
 * @returns {Number} Maximum top column
 */
DKTools.Sprite.Selectable.prototype.getMaxTopCol = function() {
    return Math.max(0, this.getMaxItems() - this.getMaxPageCols());
};

/**
 * Returns the maximum page rows
 * 
 * @see DKTools.Sprite.Selectable.prototype.getItemHeight
 * @see DKTools.Sprite.Selectable.prototype.getMaxRows
 * 
 * @returns {Number} Maximum page rows
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
 * Returns the maximum page columns
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * 
 * @returns {Number} Maximum page columns
 */
DKTools.Sprite.Selectable.prototype.getMaxPageCols = function() {
    return this.getMaxCols();
};

/**
 * Returns the maximum page items
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
 * 
 * @returns {Number} Maximum page items
 */
DKTools.Sprite.Selectable.prototype.getMaxPageItems = function() {
    if (this.isHorizontal()) {
        return this.getMaxPageCols();
    }

    return this.getMaxPageRows() * this.getMaxPageCols();
};

/**
 * Returns the row by index
 *
 * @param {Number} index - Index
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * 
 * @returns {Number} Row by index
 */
DKTools.Sprite.Selectable.prototype.getRowByIndex = function(index) {
    return Math.floor(index / this.getMaxCols());
};

/**
 * Returns the current row
 *
 * @see DKTools.Sprite.Selectable.prototype.getRowByIndex
 * 
 * @returns {Number} Current row
 */
DKTools.Sprite.Selectable.prototype.getCurrentRow = function() {
    return this.getRowByIndex(this._index);
};

/**
 * Returns the row of the item
 *
 * @param {Object} item - Item
 * 
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getRowByIndex
 * 
 * @returns {Number} Row of the item
 */
DKTools.Sprite.Selectable.prototype.getItemRow = function(item) {
    return this.getRowByIndex(this.getItemIndex(item));
};

/**
 * Returns the list of the items by row
 *
 * @param {Number} row - Row
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxRows
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * @see DKTools.Sprite.Selectable.prototype.getRowByIndex
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * 
 * @returns {Object[]} List of the items by row
 */
DKTools.Sprite.Selectable.prototype.getRowItems = function(row) {
    const items = [];

    if (_.inRange(row, 0, this.getMaxRows())) {
        const maxPageItems = this.getMaxPageItems();
        const maxItems = this.getMaxItems();
        let index = row * this.getMaxCols();

        for(let i = 0; i < maxPageItems && index < maxItems && this.getRowByIndex(index) === row; i++, index++) {
            items.push(this.getItem(index));
        }
    }

    return items;
};

/**
 * Returns the column by index
 *
 * @param {Number} index - Index
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * 
 * @returns {Number} Column by index
 */
DKTools.Sprite.Selectable.prototype.getColByIndex = function(index) {
    return Math.floor(index % this.getMaxCols());
};

/**
 * Returns the current column
 *
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getColByIndex
 * 
 * @returns {Number} Current column
 */
DKTools.Sprite.Selectable.prototype.getCurrentCol = function() {
    if (this.isHorizontal()) {
        return this._index;
    }

    return this.getColByIndex(this._index);
};

/**
 * Returns the column of the item
 *
 * @param {Object} item - Item
 * 
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.getColByIndex
 * 
 * @returns {Number} Column of the item
 */
DKTools.Sprite.Selectable.prototype.getItemCol = function(item) {
    return this.getColByIndex(this.getItemIndex(item));
};

/**
 * Returns the list of the items by column
 *
 * @param {Number} col - Column
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.getColByIndex
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * 
 * @returns {Object[]} List of the items by column
 */
DKTools.Sprite.Selectable.prototype.getColItems = function(col) {
    const items = [];

    if (_.inRange(col, 0, this.getMaxCols())) {
        const maxItems = this.getMaxItems();

        for(let index = 0; index < maxItems; index++) {
            if (this.getColByIndex(index) === col) {
                items.push(this.getItem(index));
            }
        }
    }

    return items;
};

/**
 * Returns the top index
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getTopCol
 * @see DKTools.Sprite.Selectable.prototype.getTopRow
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * 
 * @returns {Number} Top index
 */
DKTools.Sprite.Selectable.prototype.getTopIndex = function() {
    if (this.isHorizontal()) {
        return this.getTopCol();
    }

    return this.getTopRow() * this.getMaxCols();
};

/**
 * Returns the top row
 * 
 * @returns {Number} Top row
 */
DKTools.Sprite.Selectable.prototype.getTopRow = function() {
    return this._topRow;
};

/**
 * Returns the top column
 * 
 * @returns {Number} Top column
 */
DKTools.Sprite.Selectable.prototype.getTopCol = function() {
    return this._topCol;
};

/**
 * Returns the bottom row
 * 
 * @see DKTools.Sprite.Selectable.prototype.getTopRow
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
 * 
 * @returns {Number} Bottom row
 */
DKTools.Sprite.Selectable.prototype.getBottomRow = function() {
    return Math.max(0, this.getTopRow() + this.getMaxPageRows() - 1);
};

/**
 * Returns the bottom column
 * 
 * @see DKTools.Sprite.Selectable.prototype.getTopCol
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
 * 
 * @returns {Number} Bottom column
 */
DKTools.Sprite.Selectable.prototype.getBottomCol = function() {
    return Math.max(0, this.getTopCol() + this.getMaxPageCols() - 1);
};

/**
 * Returns the bottom index
 * 
 * @see DKTools.Sprite.Selectable.prototype.getTopIndex
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * 
 * @returns {Number} Bottom index
 */
DKTools.Sprite.Selectable.prototype.getBottomIndex = function() {
    return Math.min(this.getTopIndex() + this.getMaxPageItems(), this.getMaxItems()) - 1;
};

// is methods


/**
 * Returns true if the cursor is fixed
 *
 * @returns {Boolean} Cursor is fixed
 */
DKTools.Sprite.Selectable.prototype.isCursorFixed = function() {
    return this._cursorFixed;
};

/**
 * Returns true if the cursor all
 *
 * @returns {Boolean} Cursor all
 */
DKTools.Sprite.Selectable.prototype.isCursorAll = function() {
    return this._cursorAll;
};

/**
 * Returns true if the fixed horizontal position of the items
 *
 * @returns {Boolean} Fixed horizontal position of the items
 */
DKTools.Sprite.Selectable.prototype.isFixedHorizontal = function() {
    return this._fixedHorizontal;
};

/**
 * Returns true if the position of the items is horizontal
 *
 * @see DKTools.Sprite.Selectable.prototype.isFixedHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
 * 
 * @returns {Boolean} Position of the items is horizontal
 */
DKTools.Sprite.Selectable.prototype.isHorizontal = function() {
    return this.isFixedHorizontal() || this.getMaxPageRows() === 1;
};

/**
 * Returns true if the position of the items is vertical
 *
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * 
 * @returns {Boolean} Position of the items is vertical
 */
DKTools.Sprite.Selectable.prototype.isVertical = function() {
    return !this.isHorizontal();
};

/**
 * Returns true if the cursor can move
 *
 * @see DKTools.Sprite.Selectable.prototype.isVisibleAndActive
 * @see DKTools.Sprite.Selectable.prototype.isCursorFixed
 * @see DKTools.Sprite.Selectable.prototype.isCursorAll
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * 
 * @returns {Boolean} Cursor can move
 */
DKTools.Sprite.Selectable.prototype.isCursorMovable = function() {
    return this.isVisibleAndActive() && !this.isCursorFixed() && !this.isCursorAll() && this.getMaxItems() > 0;
};

/**
 * Returns true if the Ok is enabled
 * 
 * @returns {Boolean} Ok is enabled
 */
DKTools.Sprite.Selectable.prototype.isOkEnabled = function() {
    return true;
};

/**
 * Returns true if the cancel is enabled
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHandled
 * 
 * @returns {Boolean} Cancel is enabled
 */
DKTools.Sprite.Selectable.prototype.isCancelEnabled = function() {
    return this.isHandled('cancel');
};

/**
 * Returns true if the Ok is triggered
 * 
 * @returns {Boolean} Ok is triggered
 */
DKTools.Sprite.Selectable.prototype.isOkTriggered = function() {
    return Input.isRepeated('ok');
};

/**
 * Returns true if the cancel is triggered
 * 
 * @returns {Boolean} Cancel is triggered
 */
DKTools.Sprite.Selectable.prototype.isCancelTriggered = function() {
    return Input.isRepeated('cancel') || TouchInput.isCancelled();
};

/**
 * Returns true if the cursor is visible
 *
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getTopCol
 * @see DKTools.Sprite.Selectable.prototype.getBottomCol
 * @see DKTools.Sprite.Selectable.prototype.getCurrentRow
 * @see DKTools.Sprite.Selectable.prototype.getTopRow
 * @see DKTools.Sprite.Selectable.prototype.getBottomRow
 * 
 * @returns {Boolean} Cursor is visible
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
 * Returns true if the item by index is enabled
 *
 * @param {Number} index - Index
 * 
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * 
 * @returns {Boolean} Item by index is enabled
 */
DKTools.Sprite.Selectable.prototype.isItemEnabled = function(index) {
    const item = this.getItem(index);

    if (item) {
        const enabled = item.enabled;

        if (DKTools.Utils.isFunction(enabled)) {
            return enabled(index);
        }

        return enabled;
    }

    return false;
};

/**
 * Returns true if the current item (selected item) is enabled
 *
 * @see DKTools.Sprite.Selectable.prototype.isItemEnabled
 *
 * @returns {Boolean} Current item (selected item) is enabled
 */
DKTools.Sprite.Selectable.prototype.isCurrentItemEnabled = function() {
    return this.isItemEnabled(this._index);
};

/**
 * Returns true if the symbol is handling
 *
 * @param {String} symbol - Symbol
 * @returns {Boolean} Symbol is handling
 */
DKTools.Sprite.Selectable.prototype.isHandled = function(symbol) {
    return !!this._handlers[symbol];
};

/**
 * Returns true if the item by index is visible
 *
 * @param {Number} index - Index
 * 
 * @see DKTools.Sprite.Selectable.prototype.getTopIndex
 * @see DKTools.Sprite.Selectable.prototype.getBottomIndex
 * 
 * @returns {Boolean} Item by index is visible
 */
DKTools.Sprite.Selectable.prototype.isItemVisibleByIndex = function(index) {
    return _.inRange(index, this.getTopIndex(), this.getBottomIndex() + 1);
};

/**
 * Returns true if the item is visible
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.isItemVisibleByIndex
 *
 * @returns {Boolean} Item is visible
 */
DKTools.Sprite.Selectable.prototype.isItemVisible = function(item) {
    return this.isItemVisibleByIndex(this.getItemIndex(item));
};

// has methods

/**
 * Returns true if the item by index exists
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 *
 * @returns {Boolean} Item by index exists
 */
DKTools.Sprite.Selectable.prototype.hasItemByIndex = function(index) {
    return !!this.getItem(index);
};

/**
 * Returns true if the item exists
 *
 * @param {Object} item - item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.hasItemByIndex
 *
 * @returns {Boolean} Item exists
 */
DKTools.Sprite.Selectable.prototype.hasItem = function(item) {
    return this.hasItemByIndex(this.getItemIndex(item));
};

/**
 * Returns true if the items exists
 *
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 *
 * @returns {Boolean} Items exists
 */
DKTools.Sprite.Selectable.prototype.hasItems = function() {
    return this.getMaxItems() > 0;
};

/**
 * Returns true if the handler of draw of the item exists
 *
 * @returns {Boolean} Handler of draw of the item exists
 */
DKTools.Sprite.Selectable.prototype.hasDrawItemHandler = function() {
    return !!this._drawItemHandler;
};

// active methods

/**
 * Activates the object
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.activate = function() {
    DKTools.Sprite.Button.prototype.activate.call(this);
    this.reselect();
};

/**
 * Deactivates the object
 *
 * @override
 * @param {Boolean} [deselect=false] - Deselects the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.deselect
 */
DKTools.Sprite.Selectable.prototype.deactivate = function(deselect) {
    DKTools.Sprite.Button.prototype.deactivate.call(this);

    if (deselect) {
        this.deselect();
    }
};

// cursor methods

/**
 * Moves the cursor to down
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * @see DKTools.Sprite.Selectable.prototype.getMaxRows
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
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
 * Moves the cursor to up
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * @see DKTools.Sprite.Selectable.prototype.getMaxRows
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
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
 * Moves the cursor to right
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.selectNext
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.cursorRight = function(wrap) {
    const maxItems = this.getMaxItems();

    if (maxItems < 2) {
        return;
    }

    if (this.isVertical()) {
        const index = this._index;
        const maxCols = this.getMaxCols();

        if (maxCols >= 2 && (index < maxItems - 1 || wrap)) {
            this.selectItemByIndex((index + 1) % maxItems);
        }
    } else {
        this.selectNext(wrap);
    }
};

/**
 * Moves the cursor to left
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.selectPrev
 * @see DKTools.Sprite.Selectable.prototype.getMaxCols
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.cursorLeft = function(wrap) {
    const maxItems = this.getMaxItems();

    if (maxItems < 2) {
        return;
    }

    if (this.isVertical()) {
        const index = this._index;
        const maxCols = this.getMaxCols();

        if (maxCols >= 2 && (index > 0 || wrap)) {
            this.selectItemByIndex((index - 1 + maxItems) % maxItems);
        }
    } else {
        this.selectPrev(wrap);        
    }
};

/**
 * Moves the cursor to lower page
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getTopRow
 * @see DKTools.Sprite.Selectable.prototype.getTopCol
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxRows
 * @see DKTools.Sprite.Selectable.prototype.setTopRow
 * @see DKTools.Sprite.Selectable.prototype.setTopCol
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.cursorPagedown = function() {
    if (this.isHorizontal()) {
        const topCol = this.getTopCol();
        const maxPageCols = this.getMaxPageCols();
        const maxItems = this.getMaxItems();

        if (topCol + maxPageCols < maxItems) {
            this.setTopCol(topCol + maxPageCols);
            this.selectItemByIndex(Math.min(this._index + this.getMaxPageItems(), maxItems - 1));
        }
    } else {
        const topRow = this.getTopRow();
        const maxPageRows = this.getMaxPageRows();

        if (topRow + maxPageRows < this.getMaxRows()) {
            this.setTopRow(topRow + maxPageRows);
            this.selectItemByIndex(Math.min(this._index + this.getMaxPageItems(), this.getMaxItems() - 1));
        }
    }
};

/**
 * Moves the cursor to upper page
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.getTopRow
 * @see DKTools.Sprite.Selectable.prototype.getTopCol
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageRows
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageCols
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
 * @see DKTools.Sprite.Selectable.prototype.setTopRow
 * @see DKTools.Sprite.Selectable.prototype.setTopCol
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
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
 * Shows the cursor
 */
DKTools.Sprite.Selectable.prototype.showCursor = function() {
    this._cursorSprite.show(true);
};

/**
 * Hides the cursor
 */
DKTools.Sprite.Selectable.prototype.hideCursor = function() {
    this._cursorSprite.hide();
};

// touch methods

/**
 * @private
 * @param {Boolean} triggered
 * 
 * @see DKTools.Sprite.Selectable.prototype.hitTest
 * @see DKTools.Sprite.Selectable.prototype.isOkEnabled
 * @see DKTools.Sprite.Selectable.prototype.isCursorMovable
 * @see DKTools.Sprite.Selectable.prototype.processOk
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 * @see DKTools.Sprite.Selectable.prototype.playCursorSound
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
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 * 
 * @see DKTools.Sprite.Selectable.prototype.isOutside
 * @see DKTools.Sprite.Selectable.prototype.canvasToLocalX
 * @see DKTools.Sprite.Selectable.prototype.canvasToLocalY
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.getTopIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 * 
 * @returns {Number}
 */
DKTools.Sprite.Selectable.prototype.hitTest = function(x, y) {
    if (this.isOutside(x, y)) {
        return -1;
    }

    const scale = this.scale;
    const localX = this.canvasToLocalX(x);
    const localY = this.canvasToLocalY(y);
    const maxPageItems = this.getMaxPageItems();
    const maxItems = this.getMaxItems();
    let index = this.getTopIndex();

    for (let i = 0; i < maxPageItems && index < maxItems; i++ , index++) {
        const rect = this.getItemRectByIndex(index);

        rect.x *= scale.x;
        rect.y *= scale.y;
        rect.width *= scale.x;
        rect.height *= scale.y;

        if (rect.contains(localX, localY)) {
            return index;
        }
    }

    return -1;
};

// draw methods

/**
 * Draws all
 *
 * @override
 */
DKTools.Sprite.Selectable.prototype.drawAll = function() {
    DKTools.Sprite.Button.prototype.drawAll.call(this);
    this.drawAllItems();
};

/**
 * Draws all items
 * 
 * @see DKTools.Sprite.Selectable.prototype.getMaxPageItems
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.getTopIndex
 * @see DKTools.Sprite.Selectable.prototype.drawItemByIndex
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
 * Draws the item by index
 *
 * @param {Number} index - Index
 * 
 * @see DKTools.Sprite.Selectable.prototype.hasDrawItemHandler
 */
DKTools.Sprite.Selectable.prototype.drawItemByIndex = function(index) {
    if (this.hasDrawItemHandler()) {
        this._drawItemHandler(index);
    }
};

/**
 * Draws the item
 *
 * @param {Object} item - Item
 * 
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.drawItemByIndex
 */
DKTools.Sprite.Selectable.prototype.drawItem = function(item) {
    this.drawItemByIndex(this.getItemIndex(item));
};

/**
 * Clears the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 * @see DKTools.Sprite.Selectable.prototype.clearRect
 */
DKTools.Sprite.Selectable.prototype.clearItemByIndex = function(index) {
    this.clearRect(this.getItemRectByIndex(index));
};

/**
 * Clears the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.clearItemByIndex
 */
DKTools.Sprite.Selectable.prototype.clearItem = function(item) {
    this.clearItemByIndex(this.getItemIndex(item));
};

/**
 * Redraws the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.isItemVisibleByIndex
 * @see DKTools.Sprite.Selectable.prototype.clearItemByIndex
 * @see DKTools.Sprite.Selectable.prototype.drawItemByIndex
 */
DKTools.Sprite.Selectable.prototype.redrawItemByIndex = function(index) {
    if (index >= 0 && this.isItemVisibleByIndex(index)) {
        this.clearItemByIndex(index);
        this.drawItemByIndex(index);
    }
};

/**
 * Redraws the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.redrawItemByIndex
 */
DKTools.Sprite.Selectable.prototype.redrawItem = function(item) {
    this.redrawItemByIndex(this.getItemIndex(item));
};

/**
 * Redraws the current item (selected item)
 *
 * @see DKTools.Sprite.Selectable.prototype.redrawItemByIndex
 */
DKTools.Sprite.Selectable.prototype.redrawCurrentItem = function() {
    this.redrawItemByIndex(this._index);
};

// sound methods

/**
 * Plays "ok" sound
 *
 * @see SoundManager.playOk
 */
DKTools.Sprite.Selectable.prototype.playOkSound = function() {
    SoundManager.playOk();
};

/**
 * Plays "cancel" sound
 *
 * @see SoundManager.playCancel
 */
DKTools.Sprite.Selectable.prototype.playCancelSound = function() {
    SoundManager.playCancel();
};

/**
 * Plays "cursor" sound
 *
 * @see SoundManager.playCursor
 */
DKTools.Sprite.Selectable.prototype.playCursorSound = function() {
    SoundManager.playCursor();
};

/**
 * Plays "buzzer" sound
 *
 * @see SoundManager.playBuzzer
 */
DKTools.Sprite.Selectable.prototype.playBuzzerSound = function() {
    SoundManager.playBuzzer();
};

// call methods

/**
 * Calls the handler of the symbol
 *
 * @param {String} symbol - Symbol
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHandled
 */
DKTools.Sprite.Selectable.prototype.callHandler = function(symbol) {
    if (this.isHandled(symbol)) {
        this._handlers[symbol](this._index);
    }
};

/**
 * Calls the handler of the Ok
 * 
 * @see DKTools.Sprite.Selectable.prototype.getCurrentItemSymbol
 * @see DKTools.Sprite.Selectable.prototype.isHandled
 * @see DKTools.Sprite.Selectable.prototype.callHandler
 * @see DKTools.Sprite.Selectable.prototype.activate
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
 * Calls the handler of the cancel
 * 
 * @see DKTools.Sprite.Selectable.prototype.callHandler
 */
DKTools.Sprite.Selectable.prototype.callCancelHandler = function() {
    this.callHandler('cancel');
};

// event methods

/**
 * Updates the events with type: select
 * 
 * @see DKTools.Sprite.Selectable.prototype.updateEventsContainer
 */
DKTools.Sprite.Selectable.prototype.updateSelectEvents = function() {
    this.updateEventsContainer('select');
};

// select methods

/**
 * Selects the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Sprite.Selectable.prototype.setupIndex
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 * @see DKTools.Sprite.Selectable.prototype.updateSelectEvents
 */
DKTools.Sprite.Selectable.prototype.selectItemByIndex = function(index) {
    this.setupIndex(index);
    this.refreshAll();
    this.updateSelectEvents();
};

/**
 * Selects the item
 *
 * @param {Object} item - Item
 *
 * @see DKTools.Sprite.Selectable.prototype.getItemIndex
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectItem = function(item) {
    this.selectItemByIndex(this.getItemIndex(item));
};

/**
 * Selects the item by symbol
 *
 * @param {String} symbol - Symbol
 *
 * @see DKTools.Sprite.Selectable.prototype.findSymbol
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectSymbol = function(symbol) {
    const index = Math.max(0, this.findSymbol(symbol));
    this.selectItemByIndex(index);
};

/**
 * Selects the item by ext
 *
 * @param {*} ext - Ext of the item
 *
 * @see DKTools.Sprite.Selectable.prototype.findExt
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectExt = function(ext) {
    const index = Math.max(0, this.findExt(ext));
    this.selectItemByIndex(index);
};

/**
 * Deselects the current item (selected item)
 * 
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.deselect = function() {
    this.selectItemByIndex(-1);
};

/**
 * Reselects the current item (selected item)
 * 
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.reselect = function() {
    this.selectItemByIndex(this._index);
};

/**
 * Selects the previous item
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 *
 * @see DKTools.Sprite.Selectable.prototype.getPrevIndex
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectPrev = function(wrap) {
    const index = this.getPrevIndex(wrap);

    if (index >= 0) {
        this.selectItemByIndex(index);
    }
};

/**
 * Selects the next item
 *
 * @param {Boolean} [wrap=false] - Cyclic selection
 *
 * @see DKTools.Sprite.Selectable.prototype.getNextIndex
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.selectNext = function(wrap) {
    const index = this.getNextIndex(wrap);

    if (index >= 0) {
        this.selectItemByIndex(index);
    }
};

// remove methods

/**
 * Removes the handler of the symbol
 *
 * @param {String} symbol - Symbol
 */
DKTools.Sprite.Selectable.prototype.removeHandler = function(symbol) {
    delete this._handlers[symbol];
};

// item methods

/**
 * Checks the item
 * Returns the item
 * 
 * @private
 * 
 * @param {Object} item - Item
 * 
 * @see DKTools.Sprite.Selectable.prototype.setHandler
 * 
 * @returns {Object} Item
 */
DKTools.Sprite.Selectable.prototype._checkItem = function(item) {
    if (item.enabled === undefined) {
        item.enabled = true;
    }

    if (item.ext === undefined) {
        item.ext = null;
    }

    if (item.symbol && item.handler) {
        this.setHandler(item.symbol, item.handler);
    }

    return item;
};

/**
 * Removes the item
 *
 * @param {Object} item - Item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.hasItem
 * @see DKTools.Utils.Array.remove
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Object | null} Removed item or null
 */
DKTools.Sprite.Selectable.prototype.removeItem = function(item, blockRefreshAll) {
    if (!this.hasItem(item)) {
        return null;
    }

    DKTools.Utils.Array.remove(this._items, item);

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return item;
};

/**
 * Removes the item by index
 *
 * @param {Number} index - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * @see DKTools.Sprite.Selectable.prototype.removeItem
 *
 * @returns {Object | null} Removed item or null
 */
DKTools.Sprite.Selectable.prototype.removeItemByIndex = function(index, blockRefreshAll) {
    return this.removeItem(this.getItem(index), blockRefreshAll);
};

/**
 * Removes the items
 *
 * @param {Object[]} items - Items
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.removeItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 *
 * @returns {Object[]} Removed items
 */
DKTools.Sprite.Selectable.prototype.removeItems = function(items, blockRefreshAll) {
    const removed = [];

    _.forEach(items, function(item) {
        const removedItem = this.removeItem(item, true);

        if (removedItem) {
            removed.push(removedItem);
        }
    }.bind(this));

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return removed;
};

/**
 * Inserts the item
 *
 * @param {Object} item - Item
 * @param {Number} [index=0] - Index to insert
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Utils.Array.insert
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.insertItem = function(item, index, blockRefreshAll) {
    DKTools.Utils.Array.insert(this._items, this._checkItem(item), index);

    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Inserts the items
 *
 * @param {Object[]} items - Items
 * @param {Number} [index=0] - Index to insert
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.insertItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.insertItems = function(items, index, blockRefreshAll) {
    items = _.reverse(items);
    _.forEach(items, function(item) {
        this.insertItem(item, index, true);
    }.bind(this));

    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Adds the item
 *
 * @param {Object} item - Item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.insertItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.addItem = function(item, blockRefreshAll) {
    this.insertItem(item, this.getMaxItems() - 1, true);

    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Adds the items
 *
 * @param {Object[]} items - Items
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.addItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.addItems = function(items, blockRefreshAll) {
    _.forEach(items, function(item) {
        this.addItem(item, true);
    }.bind(this));

    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Replaces the item
 *
 * @param {Object} item - Item
 * @param {Number} [index=0] - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.replaceItem = function(item, index, blockRefreshAll) {
    this._items[index || 0] = this._checkItem(item);

    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Enables the item
 *
 * @param {Object} item - Item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.hasItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.enableItem = function(item, blockRefreshAll) {
    if (!this.hasItem(item)) {
        return;
    }

    item.enabled = true;

    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Enables the item by index
 *
 * @param {Number} index - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * @see DKTools.Sprite.Selectable.prototype.enableItem
 */
DKTools.Sprite.Selectable.prototype.enableItemByIndex = function(index, blockRefreshAll) {
    this.enableItem(this.getItem(index), blockRefreshAll);
};

/**
 * Disables the item
 *
 * @param {Object} item - Item
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.hasItem
 * @see DKTools.Sprite.Selectable.prototype.refreshAll
 */
DKTools.Sprite.Selectable.prototype.disableItem = function(item, blockRefreshAll) {
    if (!this.hasItem(item)) {
        return;
    }

    item.enabled = false;

    if (!blockRefreshAll) {
        this.refreshAll();
    }
};

/**
 * Disables the item by index
 *
 * @param {Number} index - Index
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.Selectable.prototype.getItem
 * @see DKTools.Sprite.Selectable.prototype.disableItem
 */
DKTools.Sprite.Selectable.prototype.disableItemByIndex = function(index, blockRefreshAll) {
    this.disableItem(this.getItem(index), blockRefreshAll);
};

// find methods

/**
 * Returns the index of the item by symbol
 *
 * @param {Symbol} symbol - Symbol
 * @returns {Number} Index of the item by symbol
 */
DKTools.Sprite.Selectable.prototype.findSymbol = function(symbol) {
    return _.findIndex(this._items, { symbol });
};

/**
 * Returns the index of the item by ext
 *
 * @param {*} ext - Ext of the item
 * @returns {Number} Index of the item by ext
 */
DKTools.Sprite.Selectable.prototype.findExt = function(ext) {
    return _.findIndex(this._items, { ext });
};

// scroll methods

/**
 * Resets the scroll
 * 
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 */
DKTools.Sprite.Selectable.prototype.resetScroll = function() {
    if (this._index !== 0) {
        this.selectItemByIndex(0);
    }
};

/**
 * Scrolls down
 * 
 * @see DKTools.Sprite.Selectable.prototype.getTopRow
 * @see DKTools.Sprite.Selectable.prototype.getMaxRows
 * @see DKTools.Sprite.Selectable.prototype.cursorDown
 */
DKTools.Sprite.Selectable.prototype.scrollDown = function() {
    if (this.getTopRow() + 1 < this.getMaxRows()) {
        this.cursorDown();
    }
};

/**
 * Scrolls up
 *
 * @version 3.0.0
 *
 * @see DKTools.Sprite.Selectable.prototype.getTopRow
 * @see DKTools.Sprite.Selectable.prototype.cursorUp
 */
DKTools.Sprite.Selectable.prototype.scrollUp = function() {
    if (this.getCurrentRow() > 0) {
        this.cursorUp();
    }
};

/**
 * Scrolls right
 * 
 * @see DKTools.Sprite.Selectable.prototype.getTopCol
 * @see DKTools.Sprite.Selectable.prototype.getMaxItems
 * @see DKTools.Sprite.Selectable.prototype.cursorRight
 */
DKTools.Sprite.Selectable.prototype.scrollRight = function() {
    if (this.getTopCol() + 1 < this.getMaxItems()) {
        this.cursorRight();
    }
};

/**
 * Scrolls left
 *
 * @version 3.0.0
 *
 * @see DKTools.Sprite.Selectable.prototype.getTopCol
 * @see DKTools.Sprite.Selectable.prototype.cursorLeft
 */
DKTools.Sprite.Selectable.prototype.scrollLeft = function() {
    if (this.getCurrentCol() > 0) {
        this.cursorLeft();
    }
};

// process methods

/**
 * Processes all
 *
 * @override
 * 
 * @see DKTools.Sprite.Selectable.prototype.processCursorMove
 * @see DKTools.Sprite.Selectable.prototype.processHandling
 */
DKTools.Sprite.Selectable.prototype.processAll = function() {
    DKTools.Sprite.Button.prototype.processAll.call(this);
    this.processCursorMove();
    this.processHandling();
};

/**
 * Processes the move of the cursor
 * 
 * @see DKTools.Sprite.Selectable.prototype.isCursorMovable
 * @see DKTools.Sprite.Selectable.prototype.isHandled
 * @see DKTools.Sprite.Selectable.prototype.cursorDown
 * @see DKTools.Sprite.Selectable.prototype.cursorUp
 * @see DKTools.Sprite.Selectable.prototype.cursorRight
 * @see DKTools.Sprite.Selectable.prototype.cursorLeft
 * @see DKTools.Sprite.Selectable.prototype.cursorPagedown
 * @see DKTools.Sprite.Selectable.prototype.cursorPageup
 * @see DKTools.Sprite.Selectable.prototype.playCursorSound
 */
DKTools.Sprite.Selectable.prototype.processCursorMove = function() {
    if (!this.isCursorMovable()) {
        return;
    }

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
};

/**
 * Processes the handling
 * 
 * @see DKTools.Sprite.Selectable.prototype.isVisibleAndActive
 * @see DKTools.Sprite.Selectable.prototype.isOkEnabled
 * @see DKTools.Sprite.Selectable.prototype.isOkTriggered
 * @see DKTools.Sprite.Selectable.prototype.isCancelEnabled
 * @see DKTools.Sprite.Selectable.prototype.isCancelTriggered
 * @see DKTools.Sprite.Selectable.prototype.isHandled
 * @see DKTools.Sprite.Selectable.prototype.processOk
 * @see DKTools.Sprite.Selectable.prototype.processCancel
 * @see DKTools.Sprite.Selectable.prototype.processPagedown
 * @see DKTools.Sprite.Selectable.prototype.processPageup
 */
DKTools.Sprite.Selectable.prototype.processHandling = function() {
    if (!this.isVisibleAndActive()) {
        return;
    }

    if (this.isOkEnabled() && this.isOkTriggered()) {
        this.processOk();
    } else if (this.isCancelEnabled() && this.isCancelTriggered()) {
        this.processCancel();
    } else if (this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
        this.processPagedown();
    } else if (this.isHandled('pageup') && Input.isTriggered('pageup')) {
        this.processPageup();
    }
};

/**
 * Processes the hover of the mouse
 * 
 * @see DKTools.Sprite.Selectable.prototype.isOptionEnabled
 * @see DKTools.Sprite.Selectable.prototype.isCursorMovable
 * @see DKTools.Sprite.Selectable.prototype.hitTest
 * @see DKTools.Sprite.Selectable.prototype.selectItemByIndex
 * @see DKTools.Sprite.Selectable.prototype.playCursorSound
 */
DKTools.Sprite.Selectable.prototype.processMouseHover = function() {
    if (this.isOptionEnabled('process-mouse-hover') && this.isCursorMovable()) {
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

/**
 * Processes the scroll of the mouse wheel
 * 
 * @see DKTools.Sprite.Selectable.prototype.isOptionEnabled
 * @see DKTools.Sprite.Selectable.prototype.isVisibleAndActive
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.scrollRight
 * @see DKTools.Sprite.Selectable.prototype.scrollDown
 * @see DKTools.Sprite.Selectable.prototype.scrollLeft
 * @see DKTools.Sprite.Selectable.prototype.scrollUp
 */
DKTools.Sprite.Selectable.prototype.processWheelScroll = function() {
    if (this.isOptionEnabled('process-wheel-scroll') && this.isVisibleAndActive()) {
        const wheelY = this._wheelY;

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

/**
 * Processes ok
 * 
 * @see DKTools.Sprite.Selectable.prototype.isCurrentItemEnabled
 * @see DKTools.Sprite.Selectable.prototype.updateInputData
 * @see DKTools.Sprite.Selectable.prototype.deactivate
 * @see DKTools.Sprite.Selectable.prototype.callOkHandler
 * @see DKTools.Sprite.Selectable.prototype.playOkSound
 * @see DKTools.Sprite.Selectable.prototype.playBuzzerSound
 */
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

/**
 * Processes cancel
 * 
 * @see DKTools.Sprite.Selectable.prototype.playCancelSound
 * @see DKTools.Sprite.Selectable.prototype.updateInputData
 * @see DKTools.Sprite.Selectable.prototype.deactivate
 * @see DKTools.Sprite.Selectable.prototype.callCancelHandler
 */
DKTools.Sprite.Selectable.prototype.processCancel = function() {
    this.playCancelSound();
    this.updateInputData();
    this.deactivate();
    this.callCancelHandler();
};

/**
 * Processes pageup
 * 
 * @see DKTools.Sprite.Selectable.prototype.playCursorSound
 * @see DKTools.Sprite.Selectable.prototype.updateInputData
 * @see DKTools.Sprite.Selectable.prototype.deactivate
 * @see DKTools.Sprite.Selectable.prototype.callHandler
 */
DKTools.Sprite.Selectable.prototype.processPageup = function() {
    this.playCursorSound();
    this.updateInputData();
    this.deactivate();
    this.callHandler('pageup');
};

/**
 * Processes pagedown
 * 
 * @see DKTools.Sprite.Selectable.prototype.playCursorSound
 * @see DKTools.Sprite.Selectable.prototype.updateInputData
 * @see DKTools.Sprite.Selectable.prototype.deactivate
 * @see DKTools.Sprite.Selectable.prototype.callHandler
 */
DKTools.Sprite.Selectable.prototype.processPagedown = function() {
    this.playCursorSound();
    this.updateInputData();
    this.deactivate();
    this.callHandler('pagedown');
};

// update methods

/**
 * Updates all
 *
 * @override
 * 
 * @see DKTools.Sprite.Selectable.prototype.updateCursor
 */
DKTools.Sprite.Selectable.prototype.updateAll = function() {
    DKTools.Sprite.Button.prototype.updateAll.call(this);
    this.updateCursor();
};

/**
 * Updates the cursor
 * 
 * @see DKTools.Sprite.Selectable.prototype.isHorizontal
 * @see DKTools.Sprite.Selectable.prototype.isCursorAll
 * @see DKTools.Sprite.Selectable.prototype.isCursorVisible
 * @see DKTools.Sprite.Selectable.prototype.getCurrentCol
 * @see DKTools.Sprite.Selectable.prototype.getTopCol
 * @see DKTools.Sprite.Selectable.prototype.getBottomCol
 * @see DKTools.Sprite.Selectable.prototype.getMaxRows
 * @see DKTools.Sprite.Selectable.prototype.getItemHeight
 * @see DKTools.Sprite.Selectable.prototype.setTopCol
 * @see DKTools.Sprite.Selectable.prototype.setBottomCol
 * @see DKTools.Sprite.Selectable.prototype.setCursorRect
 * @see DKTools.Sprite.Selectable.prototype.resetScroll
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
 * @see DKTools.Sprite.Selectable.prototype.getItemRectByIndex
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
    } else if (this.isCursorVisible() || !this._cursorSprite.hasBitmap()) {
        const rect = this.getItemRectByIndex(this._index);
        this.setCursorRect(rect);
    } else {
        this.setCursorRect(Rectangle.emptyRectangle);
    }
};





//===========================================================================
// DKTools.Sprite.ProgressBar
//===========================================================================

DKTools.Sprite.ProgressBar.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Sprite.ProgressBar.prototype.constructor = DKTools.Sprite.ProgressBar;

// properties

Object.defineProperties(DKTools.Sprite.ProgressBar.prototype, {

    /**
     * Value step
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    valueStep: {
        get: function() {
            return this._valueStep;
        },
        configurable: true
    },

    /**
     * Maximum value
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    maxValue: {
        get: function() {
            return this._maxValue;
        },
        configurable: true
    },

    /**
     * Value
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    value: {
        get: function() {
            return this._value;
        },
        configurable: true
    },

    /**
     * Background color
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    backgroundColor: {
        get: function() {
            return this._backgroundColor;
        },
        configurable: true
    },

    /**
     * Progress color
     *
     * @readonly
     * @type {String}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    progressColor: {
        get: function() {
            return this._progressColor;
        },
        configurable: true
    },

    /**
     * Handler of draw of the graphic
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    drawGraphicHandler: {
        get: function() {
            return this._drawGraphicHandler;
        },
        configurable: true
    },

    /**
     * Handler of draw of the text
     *
     * @readonly
     * @type {Function}
     * @memberof DKTools.Sprite.ProgressBar.prototype
     */
    drawTextHandler: {
        get: function() {
            return this._drawTextHandler;
        },
        configurable: true
    }

});

// standard methods

/**
 * Returns the standard activity of the progress bar
 *
 * @override
 * @returns {Boolean} Standard activity of the progress bar
 */
DKTools.Sprite.ProgressBar.prototype.standardActive = function() {
    return false;
};

/**
 * Returns the standard value step
 *
 * @returns {Number} Standard value step
 */
DKTools.Sprite.ProgressBar.prototype.standardValueStep = function() {
    return 1;
};

/**
 * Returns the standard maximum value
 *
 * @returns {Number} Standard maximum value
 */
DKTools.Sprite.ProgressBar.prototype.standardMaxValue = function() {
    return 100;
};

/**
 * Returns the standard value
 *
 * @returns {Number} Standard value
 */
DKTools.Sprite.ProgressBar.prototype.standardValue = function() {
    return 0;
};

/**
 * Returns the standard background color
 *
 * @returns {String} Standard background color
 */
DKTools.Sprite.ProgressBar.prototype.standardBackgroundColor = function() {
    return 'grey';
};

/**
 * Returns the standard progress color
 *
 * @returns {String} Standard progress color
 */
DKTools.Sprite.ProgressBar.prototype.standardProgressColor = function() {
    return '#33ccff';
};

/**
 * Returns the standard handler of draw of the graphic
 *
 * @returns {null} Standard handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.prototype.standardDrawGraphicHandler = function() {
    return null;
};

/**
 * Returns the standard handler of draw of the text
 *
 * @returns {null} Standard handler of draw of the text
 */
DKTools.Sprite.ProgressBar.prototype.standardDrawTextHandler = function() {
    return null;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object | null} [object={}] - Parameters
 *
 * @param {Number} [object.valueStep] - Value step
 * @param {Number} [object.maxValue] - Maximum value
 * @param {Number} [object.value] - Value
 * @param {String} [object.backgroundColor] - Background color
 * @param {String} [object.progressColor] - Progress color
 * @param {Function} [object.drawGraphicHandler] - Handler of draw of the graphic
 * @param {Function} [object.drawTextHandler] - Handler of draw of the text
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Sprite.ProgressBar.setupValueStep
 * @see DKTools.Sprite.ProgressBar.setupMaxValue
 * @see DKTools.Sprite.ProgressBar.setupValue
 * @see DKTools.Sprite.ProgressBar.setupBackgroundColor
 * @see DKTools.Sprite.ProgressBar.setupProgressColor
 * @see DKTools.Sprite.ProgressBar.setupDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.setupDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupValueStep(object.valueStep);
    this.setupMaxValue(object.maxValue);
    this.setupValue(object.value);
    this.setupBackgroundColor(object.progressColor);
    this.setupProgressColor(object.progressColor);
    this.setupDrawGraphicHandler(object.drawGraphicHandler);
    this.setupDrawTextHandler(object.drawTextHandler);
};

/**
 * Sets the value step
 *
 * @param {Number} [step=this.standardValueStep()] - Value step
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardValueStep
 */
DKTools.Sprite.ProgressBar.prototype.setupValueStep = function(step) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._valueStep = step || this.standardValueStep();
};

/**
 * Sets the maximum value
 *
 * @param {Number} [max=this.standardMaxValue()] - Maximum value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupMaxValue
 */
DKTools.Sprite.ProgressBar.prototype.setupMaxValue = function(max) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxValue = max || this.standardMaxValue();
};

/**
 * Sets the value
 *
 * @param {Number} [value=this.standardValue()] - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardValue
 */
DKTools.Sprite.ProgressBar.prototype.setupValue = function(value) {
    const max = this._maxValue;
    const newValue = Math.max(0, Math.min(value, max));

    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._value = Number.isNaN(newValue) ? this.standardValue() : newValue;
};

/**
 * Sets the background color
 *
 * @param {String} [color=this.standardBackgroundColor()] - Background color
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor
 */
DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._backgroundColor = color || this.standardBackgroundColor();
};

/**
 * Sets the progress color
 *
 * @param {String} [color=this.standardProgressColor()] - Progress color
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardProgressColor
 */
DKTools.Sprite.ProgressBar.prototype.setupProgressColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._progressColor = color || this.standardProgressColor();
};

/**
 * Sets the handler of draw of the graphic
 *
 * @param {Function} [handler=this.standardDrawGraphicHandler()] - Handler of draw of the graphic
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardDrawGraphicHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupDrawGraphicHandler = function(handler) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._drawGraphicHandler = handler || this.standardDrawGraphicHandler();
};

/**
 * Sets the handler of draw of the text
 *
 * @param {Function} [handler=this.standardDrawTextHandler()] - Handler of draw of the text
 *
 * @see DKTools.Sprite.ProgressBar.prototype.standardDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype.setupDrawTextHandler = function(handler) {
    /**
     * @private
     * @readonly
     * @type {Function}
     */
    this._drawTextHandler = handler || this.standardDrawTextHandler();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the progress bar
 *
 * @param {Number} [object.valueStep] - Value step
 * @param {Number} [object.maxValue] - Maximum value
 * @param {Number} [object.value] - Value
 * @param {String} [object.backgroundColor] - Background color
 * @param {String} [object.progressColor] - Progress color
 * @param {Function} [object.drawGraphicHandler] - Handler of draw of the graphic
 * @param {Function} [object.drawTextHandler] - Handler of draw of the text
 *
 * @see DKTools.Sprite.prototype.setAll
 * @see DKTools.Sprite.ProgressBar.prototype.setValueStep
 * @see DKTools.Sprite.ProgressBar.prototype.setMaxValue
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 * @see DKTools.Sprite.ProgressBar.prototype.setBackgroundColor
 * @see DKTools.Sprite.ProgressBar.prototype.setProgressColor
 * @see DKTools.Sprite.ProgressBar.prototype.setDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.prototype.setDrawTextHandler
 * @see DKTools.Sprite.ProgressBar.prototype.start
 * @see DKTools.Sprite.ProgressBar.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.ProgressBar.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;

    let changed = DKTools.Sprite.prototype.setAll.call(this, object, block);

    if (this.setValueStep(object.valueStep, block)) {
        changed++;
    }

    if (this.setMaxValue(object.maxValue, block)) {
        changed++;
    }

    if (this.setValue(object.value, block)) {
        changed++;
    }

    if (this.setBackgroundColor(object.backgroundColor, block)) {
        changed++;
    }

    if (this.setProgressColor(object.progressColor, block)) {
        changed++;
    }

    if (this.setDrawGraphicHandler(object.drawGraphicHandler, block)) {
        changed++;
    }

    if (this.setDrawTextHandler(object.drawTextHandler, block)) {
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
 * Changes the value step
 * Returns true if the change occurred
 *
 * @param {Number} [step] - Шаг значения
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupValueStep
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setValueStep = function(step, blockRefreshAll) {
    if (this._valueStep === step) {
        return false;
    }

    const lastStep = this._valueStep;
    this.setupValueStep(step);

    if (this._valueStep === lastStep) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the maximum value
 * Returns true if the change occurred
 *
 * @param {Number} [max] - Maximum value
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupMaxValue
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setMaxValue = function(max, blockRefreshAll) {
    if (this._maxValue === max) {
        return false;
    }

    const lastMax = this._maxValue;
    this.setupMaxValue(max);

    if (this._maxValue === lastMax) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the value
 * Returns true if the change occurred
 *
 * @param {Number} [value] - Value
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupValue
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 * @see DKTools.Sprite.ProgressBar.prototype.updateValueEvents
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setValue = function(value, blockRefreshAll) {
    if (this._value === value) {
        return false;
    }

    const lastValue = this._value;
    this.setupValue(value);

    if (this._value === lastValue) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    this.updateValueEvents();

    return true;
};

/**
 * Changes the background color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Background color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupBackgroundColor
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setBackgroundColor = function(color, blockRefreshAll) {
    if (this._backgroundColor === color) {
        return false;
    }

    const lastColor = this._backgroundColor;
    this.setupBackgroundColor(color);

    if (this._backgroundColor === lastColor) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the progress color
 * Returns true if the change occurred
 *
 * @param {String} [color] - Progress color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupProgressColor
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setProgressColor = function(color, blockRefreshAll) {
    if (this._progressColor === color) {
        return false;
    }

    const lastColor = this._progressColor;
    this.setupProgressColor(color);

    if (this._progressColor === lastColor) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the handler of draw of the graphic
 * Returns true if the change occurred
 *
 * @param {Function} [handler] - Handler of draw of the graphic
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setDrawGraphicHandler = function(handler, blockRefreshAll) {
    if (this._drawGraphicHandler === handler) {
        return false;
    }

    this.setupDrawGraphicHandler(handler);

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the handler of draw of the text
 * Returns true if the change occurred
 *
 * @param {Function} [handler] - Handler of draw of the text
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupDrawTextHandler
 * @see DKTools.Sprite.ProgressBar.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.setDrawTextHandler = function(handler, blockRefreshAll) {
    if (this._drawTextHandler === handler) {
        return false;
    }

    this.setupDrawTextHandler(handler);

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

// can methods

/**
 * Returns true if the progress bar can clone the fixed bitmap
 *
 * @override
 * @returns {Boolean} Progress bar can clone the fixed bitmap
 */
DKTools.Sprite.ProgressBar.prototype.canCloneFixedBitmap = function() {
    return false;
};

// is methods

/**
 * Returns true if the progress bar is horizontal
 *
 * @returns {Boolean} Progress bar is horizontal
 */
DKTools.Sprite.ProgressBar.prototype.isHorizontal = function() {
    return this.width > this.height;
};

/**
 * Returns true if the progress bar is vertical
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isHorizontal
 *
 * @returns {Boolean} Progress bar is vertical
 */
DKTools.Sprite.ProgressBar.prototype.isVertical = function() {
    return !this.isHorizontal();
};

/**
 * Returns true if the progress bar is empty
 *
 * @returns {Boolean} Progress bar is empty
 */
DKTools.Sprite.ProgressBar.prototype.isEmpty = function() {
    return this._value === 0;
};

/**
 * Returns true if the progress bar is full
 *
 * @returns {Boolean} Progress bar is full
 */
DKTools.Sprite.ProgressBar.prototype.isFull = function() {
    return this._value === this._maxValue;
};

// events methods

/**
 * Updates the events
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.updateEvents
 * @see DKTools.Sprite.ProgressBar.prototype.updateEmptyEvents
 * @see DKTools.Sprite.ProgressBar.prototype.updateFullEvents
 */
DKTools.Sprite.ProgressBar.prototype.updateEvents = function() {
    DKTools.Sprite.prototype.updateEvents.call(this);
    this.updateEmptyEvents();
    this.updateFullEvents();
};

/**
 * Updates the events with type: value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateValueEvents = function() {
    this.updateEventsContainer('value');
};

/**
 * Updates the events with type: empty
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isEmpty
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateEmptyEvents = function() {
    if (this.isEmpty()) {
        this.updateEventsContainer('empty');
    }
};

/**
 * Updates the events with type: full
 *
 * @see DKTools.Sprite.ProgressBar.prototype.isFull
 * @see DKTools.Sprite.ProgressBar.prototype.updateEventsContainer
 */
DKTools.Sprite.ProgressBar.prototype.updateFullEvents = function() {
    if (this.isFull()) {
        this.updateEventsContainer('full');
    }
};

/**
 * Handler of update of animate the value
 *
 * @private
 *
 * @param {Number} value - Value
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype._updateAnimateValue = function(value, event) {
    const remainingTime = event.remainingTime;
    const newValue = (this._value * (remainingTime - 1) + value) / remainingTime;

    this.setValue(newValue);
};

/**
 * Animates the value
 * Returns the update event
 *
 * @param {Number} value - Value
 * @param {Number} duration - Duration of animation
 *
 * @see DKTools.Sprite.ProgressBar.prototype.addEvent
 * @see DKTools.Sprite.ProgressBar.prototype._updateAnimateValue
 *
 * @returns {DKTools.Event} Update event
 */
DKTools.Sprite.ProgressBar.prototype.animateValue = function(value, duration) {
    return this.addEvent({
        type: 'update',
        repeatTime: duration,
        repeats: 0,
        onUpdate: this._updateAnimateValue.bind(this, value)
    });
};

/**
 * Animates the empty value
 * Returns the update event
 *
 * @param {Number} duration - Duration of animation
 *
 * @see DKTools.Sprite.ProgressBar.prototype.animateValue
 *
 * @returns {DKTools.Event} Update event
 */
DKTools.Sprite.ProgressBar.prototype.animateEmpty = function(duration) {
    return this.animateValue(0, duration);
};

/**
 * Animates the full value
 * Returns the update event
 *
 * @param {Number} duration - Duration of animation
 *
 * @see DKTools.Sprite.ProgressBar.prototype.animateValue
 *
 * @returns {DKTools.Event} Update event
 */
DKTools.Sprite.ProgressBar.prototype.aimateFull = function(duration) {
    return this.animateValue(this._maxValue, duration);
};

// _draw methods

/**
 * Draws the graphic of progress
 *
 * @private
 *
 * @see DKTools.Sprite.ProgressBar.prototype.hasDrawGraphicHandler
 */
DKTools.Sprite.ProgressBar.prototype._drawProgressGraphic = function() {
    if (this.hasDrawGraphicHandler()) {
        this._drawGraphicHandler(this);
    }
};

/**
 * Draws the text of progress
 *
 * @private
 *
 * @see DKTools.Sprite.ProgressBar.prototype.hasDrawTextHandler
 */
DKTools.Sprite.ProgressBar.prototype._drawProgressText = function() {
    if (this.hasDrawTextHandler()) {
        this._drawTextHandler(this);
    }
};

// draw methods

/**
 * Draws all
 *
 * @override
 */
DKTools.Sprite.ProgressBar.prototype.drawAll = function() {
    DKTools.Sprite.prototype.drawAll.call(this);
    this.drawProgress();
};

/**
 * Draws the progress
 *
 * @see DKTools.Sprite.ProgressBar.prototype._drawProgressGraphic
 * @see DKTools.Sprite.ProgressBar.prototype._drawProgressText
 */
DKTools.Sprite.ProgressBar.prototype.drawProgress = function() {
    this._drawProgressGraphic();
    this._drawProgressText();
};

// has methods

/**
 * Returns true if the progress bar has the handler of draw of the graphic
 *
 * @returns {Boolean} Progress bar has the handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.prototype.hasDrawGraphicHandler = function() {
    return !!this._drawGraphicHandler;
};

/**
 * Returns true if the progress bar has the handler of draw of the text
 *
 * @returns {Boolean} Progress bar has the handler of draw of the text
 */
DKTools.Sprite.ProgressBar.prototype.hasDrawTextHandler = function() {
    return !!this._drawTextHandler;
};

// get methods

/**
 * Returns the current value in percent
 *
 * @returns {Number} Current value in percent
 */
DKTools.Sprite.ProgressBar.prototype.getPercents = function() {
    return Math.ceil(this._value / this._maxValue * 100);
};

/**
 * Returns the previous value
 *
 * @returns {Number} Previous value
 */
DKTools.Sprite.ProgressBar.prototype.getPrevValue = function() {
    return Math.max(0, this._value - this._valueStep);
};

/**
 * Returns the next value
 *
 * @returns {Number} Next value
 */
DKTools.Sprite.ProgressBar.prototype.getNextValue = function() {
    return Math.min(this._value + this._valueStep, this._maxValue);
};

// value methods

/**
 * Adds the value
 *
 * @param {Number} value - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.addValue = function(value) {
    if (value) {
        this.setValue(this._value + value);
    }
};

/**
 * Subtracts the value
 *
 * @param {Number} value - Value
 *
 * @see DKTools.Sprite.ProgressBar.prototype.addValue
 */
DKTools.Sprite.ProgressBar.prototype.subValue = function(value) {
    this.addValue(-value);
};

/**
 * Sets the previous value
 * Returns true if the change occurred
 *
 * @see DKTools.Sprite.ProgressBar.prototype.getPrevValue
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.prevValue = function() {
    return this.setValue(this.getPrevValue());
};

/**
 * Sets the next value
 * Returns true if the change occurred
 *
 * @see DKTools.Sprite.ProgressBar.prototype.getNextValue
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.prototype.nextValue = function() {
    return this.setValue(this.getNextValue());
};

/**
 * Makes the progress bar empty
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.makeEmpty = function() {
    this.setValue(0);
};

/**
 * Makes the progress bar full
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setValue
 */
DKTools.Sprite.ProgressBar.prototype.makeFull = function() {
    this.setValue(this._maxValue);
};





//===========================================================================
// DKTools.Sprite.ProgressBar.Rectangle
//===========================================================================

DKTools.Sprite.ProgressBar.Rectangle.prototype = Object.create(DKTools.Sprite.ProgressBar.prototype);
DKTools.Sprite.ProgressBar.Rectangle.prototype.constructor = DKTools.Sprite.ProgressBar.Rectangle;

// standard methods

/**
 * Returns the standard handler of draw of the graphic for horizontal progress bar
 *
 * @returns {Function} Standard handler of draw of the graphic for horizontal progress bar
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardHorizontalDrawGraphicHandler = function() {
    return function() {
        this.fillAll(this._backgroundColor);

        if (!this.isEmpty()) {
            this.fillRect({
                color: this._progressColor,
                width: this._value * this.realWidth / this._maxValue
            });
        }
    }.bind(this);
};

/**
 * Returns the standard handler of draw of the graphic for vertical progress bar
 *
 * @returns {Function} Standard handler of draw of the graphic for vertical progress bar
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardVerticalDrawGraphicHandler = function() {
    return function() {
        this.fillAll(this._backgroundColor);

        if (!this.isEmpty()) {
            const realHeight = this.realHeight;
            const height = this._value * realHeight / this._maxValue;

            this.fillRect({
                color: this._progressColor,
                y: realHeight - height,
                width: this.realWidth,
                height
            });
        }
    }.bind(this);
};

/**
 * Returns the standard handler of draw of the graphic
 *
 * @override
 *
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.isHorizontal
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.standardHorizontalDrawGraphicHandler
 * @see DKTools.Sprite.ProgressBar.Rectangle.prototype.standardVerticalDrawGraphicHandler
 *
 * @returns {Function} Standard handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardDrawGraphicHandler = function() {
    return function(progressBar) {
        let handler;

        if (this.isHorizontal()) {
            handler = this.standardHorizontalDrawGraphicHandler();
        } else {
            handler = this.standardVerticalDrawGraphicHandler();
        }

        if (handler) {
            handler(progressBar);
        }
    }.bind(this);
};

/**
 * Returns the standard handler of draw of the text
 *
 * @override
 * @returns {Function} Standard handler of draw of the text
 */
DKTools.Sprite.ProgressBar.Rectangle.prototype.standardDrawTextHandler = function() {
    return function() {
        const percents = this.getPercents();
        const text = `${percents}%`;

        this.drawText(text, {
            height: this.realHeight
        });
    }.bind(this);
};





//===========================================================================
// DKTools.Sprite.ProgressBar.Circle
//===========================================================================

DKTools.Sprite.ProgressBar.Circle.prototype = Object.create(DKTools.Sprite.ProgressBar.prototype);
DKTools.Sprite.ProgressBar.Circle.prototype.constructor = DKTools.Sprite.ProgressBar.Circle;

// properties

Object.defineProperties(DKTools.Sprite.ProgressBar.Circle.prototype, {

    /**
     * Line width
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Sprite.ProgressBar.Circle.prototype
     */
    lineWidth: {
        get: function() {
            return this._lineWidth;
        },
        configurable: true
    }

});

// standard methods

/**
 * Returns the standard handler of draw of the graphic
 *
 * @override
 * @returns {Function} Standard handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardDrawGraphicHandler = function() {
    return function() {
        const lineWidth = this._lineWidth;
        const realWidth = this.realWidth;
        const radius = (realWidth - lineWidth) / 2;
        const x = radius + lineWidth / 2;
        const y = x;

        this.strokeArc({
            x,
            y,
            radius,
            color: this._backgroundColor,
            lineWidth
        });

        this.strokeArc({
            x,
            y,
            radius,
            startAngle: -Math.PI / 2,
            endAngle: -Math.PI / 2 + Math.PI * 2 * this._value / this._maxValue,
            color: this._progressColor,
            lineWidth
        });
    }.bind(this);
};

/**
 * Returns the standard handler of draw of the text
 *
 * @override
 * @returns {Function} Standard handler of draw of the text
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardDrawTextHandler = function() {
    return function() {
        const percents = this.getPercents();
        const text = `${percents}%`;
        this.drawText(text, { height: this.realHeight });
    }.bind(this);
};

/**
 * Returns the standard line width
 *
 * @returns {Number} Standard line width
 */
DKTools.Sprite.ProgressBar.Circle.prototype.standardLineWidth = function() {
    return 10;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.lineWidth] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setupAll
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.ProgressBar.prototype.setupAll.call(this, object);
    this.setupLineWidth(object.lineWidth);
};

/**
 * Sets the line width
 *
 * @param {Number} [width=this.standardLineWidth()] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.standardLineWidth
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth = function(width) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._lineWidth = width || this.standardLineWidth();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the progress bar
 *
 * @param {Number} [object.lineWidth] - Line width
 *
 * @see DKTools.Sprite.ProgressBar.prototype.setAll
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setLineWidth
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.start
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.ProgressBar.prototype.setAll.call(this, object, block);

    if (this.setLineWidth(object.lineWidth, block)) {
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
 * Changes the line width
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Line width
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.setupLineWidth
 * @see DKTools.Sprite.ProgressBar.Circle.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.ProgressBar.Circle.prototype.setLineWidth = function(width, blockRefreshAll) {
    if (this._lineWidth === width) {
        return false;
    }

    const lastWidth = this._lineWidth;
    this.setupLineWidth(width);

    if (this._lineWidth === lastWidth) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};





//===========================================================================
// DKTools.Sprite.ProgressBar.SemiCircle
//===========================================================================

DKTools.Sprite.ProgressBar.SemiCircle.prototype = Object.create(DKTools.Sprite.ProgressBar.Circle.prototype);
DKTools.Sprite.ProgressBar.SemiCircle.prototype.constructor = DKTools.Sprite.ProgressBar.SemiCircle;

/**
 * Returns the standard handler of draw of the graphic
 *
 * @override
 * @returns {Function} Standard handler of draw of the graphic
 */
DKTools.Sprite.ProgressBar.SemiCircle.prototype.standardDrawGraphicHandler = function() {
    return function() {
        const lineWidth = this._lineWidth;
        const realWidth = this.realWidth;
        const radius = (realWidth - lineWidth) / 2;
        const x = radius + lineWidth / 2;
        const y = this.realHeight;

        this.strokeArc({
            x,
            y,
            radius,
            startAngle: Math.PI,
            color: this._backgroundColor,
            lineWidth
        });

        this.strokeArc({
            x,
            y,
            radius,
            startAngle: Math.PI,
            endAngle: -Math.PI + Math.PI * this._value / this._maxValue,
            color: this._progressColor,
            lineWidth
        });
    }.bind(this);
};





//===========================================================================
// DKTools.Sprite.CheckBox
//===========================================================================

DKTools.Sprite.CheckBox.prototype = Object.create(DKTools.Sprite.Button.prototype);
DKTools.Sprite.CheckBox.prototype.constructor = DKTools.Sprite.CheckBox;

// properties

Object.defineProperties(DKTools.Sprite.CheckBox.prototype, {

    /**
     * Checked
     * 
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Sprite.CheckBox.prototype
     */
    checked: {
        get: function() {
            return this._checked;
        },
        configurable: true
    },

    /**
     * Checked graphic
     * 
     * @readonly
     * @type {Bitmap | String | Object}
     * @memberof DKTools.Sprite.CheckBox.prototype
     */
    checkedGraphic: {
        get: function() {
            return this._checkedGraphic;
        },
        configurable: true
    },

    /**
     * Unchecked graphic
     * 
     * @readonly
     * @type {Bitmap | String | Object}
     * @memberof DKTools.Sprite.CheckBox.prototype
     */
    uncheckedGraphic: {
        get: function() {
            return this._uncheckedGraphic;
        },
        configurable: true
    },

});

// standard methods

/**
 * Returns the stadnard checked
 *
 * @returns {Boolean} Checked
 */
DKTools.Sprite.CheckBox.prototype.standardChecked = function() {
    return false;
};

/**
 * Returns the stadnard checked graphic
 *
 * @returns {null} Checked graphic
 */
DKTools.Sprite.CheckBox.prototype.standardCheckedGraphic = function() {
    return null;
};

/**
 * Returns the stadnard unchecked graphic
 *
 * @returns {null} Unchecked graphic
 */
DKTools.Sprite.CheckBox.prototype.standardUncheckedGraphic = function() {
    return null;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Boolean} [object.checked] - Checked
 * @param {Bitmap | String | Object} [object.checkedGraphic] - Checked graphic
 * @param {Bitmap | String | Object} [object.uncheckedGraphic] - Unchecked graphic
 *
 * @see DKTools.Sprite.Button.prototype.setupAll
 * @see DKTools.Sprite.CheckBox.prototype.setupChecked
 * @see DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupAll = function(object) {
    DKTools.Sprite.Button.prototype.setupAll.call(this, object);
    this.setupChecked(object.checked);
    this.setupCheckedGraphic(object.checkedGraphic);
    this.setupUncheckedGraphic(object.uncheckedGraphic);
};

/**
 * Sets the checked
 *
 * @param {Boolean} [checked=this.standardChecked()] - Checked
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardChecked
 */
DKTools.Sprite.CheckBox.prototype.setupChecked = function(checked) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._checked = checked == null ? this.standardChecked() : checked;
};

/**
 * Sets the checked graphic
 *
 * @param {Bitmap | String | Object} [graphic=this.standardCheckedGraphic()] - Checked graphic
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardCheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic = function(graphic) {
    /**
     * @private
     * @readonly
     * @type {Bitmap | String | Object}
     */
    this._checkedGraphic = graphic || this.standardCheckedGraphic();
};

/**
 * Sets the unchecked graphic
 *
 * @param {Bitmap | String | Object} [graphic=this.standardUncheckedGraphic()] - Unchecked graphic
 *
 * @see DKTools.Sprite.CheckBox.prototype.standardUncheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic = function(graphic) {
    /**
     * @private
     * @readonly
     * @type {Bitmap | String | Object}
     */
    this._uncheckedGraphic = graphic || this.standardUncheckedGraphic();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the check box
 *
 * @param {Boolean} [object.checked] - Checked
 * @param {Bitmap | String | Object} [object.checkedGraphic] - Checked graphic
 * @param {Bitmap | String | Object} [object.uncheckedGraphic] - Unchecked graphic
 *
 * @see DKTools.Sprite.Button.prototype.setAll
 * @see DKTools.Sprite.CheckBox.prototype.setChecked
 * @see DKTools.Sprite.CheckBox.prototype.setCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.setUncheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.start
 * @see DKTools.Sprite.CheckBox.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Sprite.CheckBox.prototype.setAll = function(object, blockStart, activate) {
    object = object || {};
    const block = true;
    let changed = DKTools.Sprite.Button.prototype.setAll.call(this, object, block);

    if (this.setChecked(object.checked, block)) {
        changed++;
    }

    if (this.setCheckedGraphic(object.checkedGraphic, block)) {
        changed++;
    }

    if (this.setUncheckedGraphic(object.uncheckedGraphic, block)) {
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
 * Changes the checked
 * Returns true if the change occurred
 *
 * @param {Boolean} [checked] -
 * @param {Boolean} [blockRefreshAll=false] -
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupChecked
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setChecked = function(checked, blockRefreshAll) {
    if (this._checked === checked) {
        return false;
    }

    const lastChecked = this._checked;
    this.setupChecked(checked);

    if (this._checked === lastChecked) {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the checked graphic
 * Returns true if the change occurred
 *
 * @param {Bitmap | String | Object} [graphic] - Checked graphic
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setCheckedGraphic = function(graphic, blockRefreshAll) {
    const checkedGraphic = this._checkedGraphic;

    if (checkedGraphic == graphic) {
        return false;
    }

    if (checkedGraphic instanceof Bitmap) {
        this.setupCheckedGraphic(graphic);
    } else if (DKTools.Utils.isString(checkedGraphic) || checkedGraphic instanceof Object) {
        const lastGraphic = checkedGraphic;
        this.setupCheckedGraphic(graphic);

        if (_.isEqual(this._checkedGraphic, lastGraphic)) {
            return false;
        }
    } else {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

/**
 * Changes the unchecked graphic
 * Returns true if the change occurred
 *
 * @param {Bitmap | String | Object} [graphic] - Unchecked graphic
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 *
 * @see DKTools.Sprite.CheckBox.prototype.setupUncheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype.refreshAll
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Sprite.CheckBox.prototype.setUncheckedGraphic = function(graphic, blockRefreshAll) {
    const uncheckedGraphic = this._uncheckedGraphic;

    if (uncheckedGraphic == graphic) {
        return false;
    }

    if (uncheckedGraphic instanceof Bitmap) {
        this.setupUncheckedGraphic(graphic);
    } else if (DKTools.Utils.isString(uncheckedGraphic) || uncheckedGraphic instanceof Object) {
        const lastGraphic = uncheckedGraphic;
        this.setupUncheckedGraphic(graphic);

        if (_.isEqual(this._uncheckedGraphic, lastGraphic)) {
            return false;
        }
    } else {
        return false;
    }

    if (!blockRefreshAll) {
        this.refreshAll();
    }

    return true;
};

// _refresh methods

/**
 * Refreshes the checked graphic
 * 
 * @private
 * 
 * @see DKTools.Sprite.CheckBox.prototype.loadBitmap
 */
DKTools.Sprite.CheckBox.prototype._refreshCheckedGraphic = function() {
    let bitmapObject = null;

    if (DKTools.Utils.isString(this._checkedGraphic)) {
        bitmapObject = {
            folder: this._graphicFolder,
            filename: this._checkedGraphic
        };
    } else if (this._checkedGraphic instanceof Object) {
        bitmapObject = this._checkedGraphic;
    }

    if (bitmapObject) {
        this.loadBitmap(bitmapObject);
    }
};

/**
 * Refreshes the unchecked graphic
 * 
 * @private
 * 
 * @see DKTools.Sprite.CheckBox.prototype.loadBitmap
 */
DKTools.Sprite.CheckBox.prototype._refreshUncheckedGraphic = function() {
    let bitmapObject = null;

    if (DKTools.Utils.isString(this._uncheckedGraphic)) {
        bitmapObject = {
            folder: this._graphicFolder,
            filename: this._uncheckedGraphic
        };
    } else if (this._uncheckedGraphic instanceof Object) {
        bitmapObject = this._uncheckedGraphic;
    }

    if (bitmapObject) {
        this.loadBitmap(bitmapObject);
    }
};

/**
 * Refreshes graphic
 * 
 * @private
 * 
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype._refreshCheckedGraphic
 * @see DKTools.Sprite.CheckBox.prototype._refreshUncheckedGraphic
 */
DKTools.Sprite.CheckBox.prototype._refreshGraphic = function() {
    if (this.isChecked()) {
        this._refreshCheckedGraphic();
    } else {
        this._refreshUncheckedGraphic();
    }
};

// refresh methods

/**
 * Updates and redraws all
 *
 * @override
 * 
 * @see DKTools.Sprite.CheckBox.prototype._refreshGraphic
 * @see DKTools.Sprite.Button.prototype.refreshAll
 */
DKTools.Sprite.CheckBox.prototype.refreshAll = function() {
    this._refreshGraphic();
    DKTools.Sprite.Button.prototype.refreshAll.call(this);
};

// is methods

/**
 * Returns true if the checkbox is checked
 * 
 * @returns {Boolean} Checkbox is checked
 */
DKTools.Sprite.CheckBox.prototype.isChecked = function() {
    return this._checked;
};

// event methods

/**
 * Updates the events with type: mouse-click-button
 *
 * @param {String} button - Mouse button
 *
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.Button.prototype.updateMouseClickEvents
 */
DKTools.Sprite.CheckBox.prototype.updateMouseClickEvents = function(button) {
    this.switch();
    DKTools.Sprite.Button.prototype.updateMouseClickEvents.call(this, button);
};

/**
 * Updates the events with type: checked
 *
 * @see DKTools.Sprite.CheckBox.prototype.updateEventsContainer
 */
DKTools.Sprite.CheckBox.prototype.updateCheckedEvents = function() {
    this.updateEventsContainer('checked');
};

/**
 * Updates the events with type: unchecked
 *
 * @see DKTools.Sprite.CheckBox.prototype.updateEventsContainer
 */
DKTools.Sprite.CheckBox.prototype.updateUncheckedEvents = function() {
    this.updateEventsContainer('unchecked');
};

// other methods

/**
 * Switches the checkbox
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.setChecked
 */
DKTools.Sprite.CheckBox.prototype.switch = function() {
    this.setChecked(!this.isChecked());
};

/**
 * Checks the checkbox
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.CheckBox.prototype.updateCheckedEvents
 */
DKTools.Sprite.CheckBox.prototype.check = function() {
    if (!this.isChecked()) {
        this.switch();
        this.updateCheckedEvents();
    }
};

/**
 * Unchecks the checkbox
 *
 * @see DKTools.Sprite.CheckBox.prototype.isChecked
 * @see DKTools.Sprite.CheckBox.prototype.switch
 * @see DKTools.Sprite.CheckBox.prototype.updateUncheckedEvents
 */
DKTools.Sprite.CheckBox.prototype.uncheck = function() {
    if (this.isChecked()) {
        this.switch();
        this.updateUncheckedEvents();
    }
};





//===========================================================================
// DKTools.Viewport
//===========================================================================

DKTools.Viewport.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Viewport.prototype.constructor = DKTools.Viewport;

// properties

Object.defineProperties(DKTools.Viewport.prototype, {

    /**
     * Shape of the mask
     *
     * @readonly
     * @type {PIXI.Graphics}
     * @memberof DKTools.Viewport.prototype
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
 * Returns the standard mask shape
 *
 * @returns {String} Standard mask shape
 */
DKTools.Viewport.prototype.standardMaskShape = function() {
    return 'rect';
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {String} [object.maskShape] - Shape of the mask
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Viewport.prototype.setupMaskShape
 */
DKTools.Viewport.prototype.setupAll = function(object) {
    object = object || {};
    DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupMaskShape(object.maskShape);
};

/**
 * Sets the shape of the mask
 *
 * @param {String} [shape] - Shape of the mask
 * 
 * @see DKTools.Viewport.prototype.standardMaskShape
 */
DKTools.Viewport.prototype.setupMaskShape = function(shape) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._maskShape = shape || this.standardMaskShape();
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the object
 *
 * @param {String} [object.maskShape] - Shape of the mask
 *
 * @see DKTools.Sprite.prototype.setAll
 * @see DKTools.Viewport.prototype.setMaskShape
 * @see DKTools.Viewport.prototype.start
 * @see DKTools.Viewport.prototype.activate
 *
 * @returns {Number} Number of changed parameters
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
 * Changes the shape of the mask
 * Returns true if the change occurred
 *
 * @param {String} [shape] - Shape of the mask
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @returns {Boolean} Change occurred
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
 * Creates all objects
 *
 * @override
 * 
 * @see DKTools.Sprite.prototype.createAll
 * @see DKTools.Viewport.prototype.createMask
 */
DKTools.Viewport.prototype.createAll = function() {
    DKTools.Sprite.prototype.createAll.call(this);
    this.createMask();
};

/**
 * Creates a mask
 * 
 * @version 2.0.0
 * @override
 * 
 * @see DKTools.Sprite.prototype.createMask
 */
DKTools.Viewport.prototype.createMask = function() {
    DKTools.Sprite.prototype.createMask.call(this, this._maskShape);
};

// can methods

/**
 * Returns true if the viewport can clone the fixed bitmap
 *
 * @override
 * @returns {Boolean} Viewport can clone the fixed bitmap
 */
DKTools.Viewport.prototype.canCloneFixedBitmap = function() {
    return false;
};





//===========================================================================
// DKTools.Layout
//===========================================================================

DKTools.Layout.prototype = Object.create(DKTools.Sprite.prototype);
DKTools.Layout.prototype.constructor = DKTools.Layout;

// properties

Object.defineProperties(DKTools.Layout.prototype, {

    /**
     * Number of the columns
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Layout.prototype
     */
    maxCols: {
        get: function() {
            return this._maxCols;
        },
        configurable: true
    },

    /**
     * Items
     *
     * @readonly
     * @type {DKTools.Sprite[] | *}
     * @memberof DKTools.Layout.prototype
     */
    items: {
        get: function() {
            return this._items;
        },
        configurable: true
    },

    /**
     * Height of the row
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Layout.prototype
     */
    rowHeight: {
        get: function() {
            return this._rowHeight;
        },
        configurable: true
    },

    /**
     * Width of the column
     *
     * @readonly
     * @type {Function | Number}
     * @memberof DKTools.Layout.prototype
     */
    colWidth: {
        get: function() {
            return this._colWidth;
        },
        configurable: true
    },

    /**
     * Horizontal spacing
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Layout.prototype
     */
    horizontalSpacing: {
        get: function() {
            return this._horizontalSpacing;
        },
        configurable: true
    },

    /**
     * Vertical spacing
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Layout.prototype
     */
    verticalSpacing: {
        get: function() {
            return this._verticalSpacing;
        },
        configurable: true
    },

    /**
     * Value of the invert
     *
     * @readonly
     * @type {Boolean}
     * @memberof DKTools.Layout.prototype
     */
    inverted: {
        get: function() {
            return this._inverted;
        },
        configurable: true
    }

});

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 *
 * @see DKTools.Sprite.prototype._clearAll
 * @see DKTools.Layout.prototype._clearItems
 */
DKTools.Layout.prototype._clearAll = function() {
    DKTools.Sprite.prototype._clearAll.call(this);
    this._clearItems();
};

/**
 * Clears items
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
 * Clears items
 *
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.removeAllItems
 * @see DKTools.Layout.prototype._clearItems
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.clearItems = function(blockStart) {
    this.removeAllItems();
    this._clearItems();

    if (!blockStart) {
        this.start();
    }
};

// standard methods

/**
 * Returns the standard activity of the layout
 *
 * @override
 * @returns {Boolean} Standard activity of the layout
 */
DKTools.Layout.prototype.standardActive = function() {
    return false;
};

/**
 * Returns the standard number of the columns
 *
 * @returns {Number} Standard number of columns
 */
DKTools.Layout.prototype.standardMaxCols = function() {
    return 1;
};

/**
 * Returns the standard horizontal spacing
 *
 * @returns {Number} Standard horizontal spacing
 */
DKTools.Layout.prototype.standardHorizontalSpacing = function() {
    return 12;
};

/**
 * Returns the standard vertical spacing
 *
 * @returns {Number} Standard vertical spacing
 */
DKTools.Layout.prototype.standardVerticalSpacing = function() {
    return this.getLineHeight() / 2;
};

/**
 * Returns the standard list of the items
 *
 * @returns {Array} Standard list of the items
 */
DKTools.Layout.prototype.standardItems = function() {
    return [];
};

/**
 * Returns the standard height of the row
 *
 * @returns {Function} Standard height of the row
 */
DKTools.Layout.prototype.standardRowHeight = function() {
    return function(row) {
        const items = this.getItemsInRow(row);
        return _.max(_.map(items, 'height'));
    }.bind(this);
};

/**
 * Returns the standard width of the column
 *
 * @returns {Function} Standard width of the column
 */
DKTools.Layout.prototype.standardColWidth = function() {
    return function(col) {
        const items = this.getItemsInCol(col);
        return _.max(_.map(items, 'width'));
    }.bind(this);
};

/**
 * Returns the standard value of the invert
 *
 * @returns {Boolean} Standard value of the invert
 */
DKTools.Layout.prototype.standardInverted = function() {
    return false;
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.maxCols] - Columns
 * @param {Number} [object.horizontalSpacing] - Horizontal spacing
 * @param {Number} [object.verticalSpacing] - Vertical spacing
 * @param {Array} [object.items] - Items
 * @param {Function | Number} [object.rowHeight] - Height of the row
 * @param {Function | Number} [object.colWidth] - Width of the column
 * @param {Boolean} [object.inverted] - Value of the invert
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Layout.prototype.setupMaxCols
 * @see DKTools.Layout.prototype.setupSpacing
 * @see DKTools.Layout.prototype.setupItems
 * @see DKTools.Layout.prototype.setupRowHeight
 * @see DKTools.Layout.prototype.setupColWidth
 * @see DKTools.Layout.prototype.setupInverted
 */
DKTools.Layout.prototype.setupAll = function(object) {
	object = object || {};
	DKTools.Sprite.prototype.setupAll.call(this, object);
    this.setupMaxCols(object.maxCols);
    this.setupSpacing(object.horizontalSpacing, object.verticalSpacing);
    this.setupItems(object.items);
    this.setupRowHeight(object.rowHeight);
    this.setupColWidth(object.colWidth);
    this.setupInverted(object.inverted);
};

/**
 * Sets the number of the columns
 *
 * @param {Number} [cols=this.standardMaxCols()] - Columns
 *
 * @see DKTools.Layout.prototype.standardMaxCols
 */
DKTools.Layout.prototype.setupMaxCols = function(cols) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._maxCols = (cols == null ? this.standardMaxCols() : cols);
};

/**
 * Sets the horizontal spacing
 *
 * @param {Number} [spacing=this.standardHorizontalSpacing()] - Horizontal spacing
 *
 * @see DKTools.Layout.prototype.standardHorizontalSpacing
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
 * Sets the vertical spacing
 *
 * @param {Number} [spacing=this.standardVerticalSpacing()] - Vertical spacing
 *
 * @see DKTools.Layout.prototype.standardVerticalSpacing
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
 * Sets the horizontal and vertical spacing
 *
 * @param {Number} [horizontalSpacing] - Horizontal spacing
 * @param {Number} [verticalSpacing] - Vertical spacing
 *
 * @see DKTools.Layout.prototype.setupHorizontalSpacing
 * @see DKTools.Layout.prototype.setupVerticalSpacing
 */
DKTools.Layout.prototype.setupSpacing = function(horizontalSpacing, verticalSpacing) {
    this.setupHorizontalSpacing(horizontalSpacing);
    this.setupVerticalSpacing(verticalSpacing);
};

/**
 * Sets the items
 *
 * @param {DKTools.Sprite[] | *} [items=this.standardItems()] - Items
 *
 * @see DKTools.Layout.prototype.standardItems
 */
DKTools.Layout.prototype.setupItems = function(items) {
    items = items || this.standardItems();
    _.forEach(items, function(item) {
        this._items.push(item);
    }.bind(this));
};

/**
 * Sets the height of the row
 *
 * @param {Function | Number} [rowHeight=this.standardRowHeight()] - Height of the row
 *
 * @see DKTools.Layout.prototype.standardRowHeight
 */
DKTools.Layout.prototype.setupRowHeight = function(rowHeight) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._rowHeight = rowHeight || this.standardRowHeight();
};

/**
 * Sets the width of the column
 *
 * @param {Function | Number} [colWidth=this.standardColWidth()] - Width of the column
 *
 * @see DKTools.Layout.prototype.standardColWidth
 */
DKTools.Layout.prototype.setupColWidth = function(colWidth) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._colWidth = colWidth || this.standardColWidth();
};

/**
 * Sets the value of the invert
 *
 * @param {Boolean} [inverted=this.standardInverted()] - Value of the ivnert
 *
 * @see DKTools.Layout.prototype.standardInverted
 */
DKTools.Layout.prototype.setupInverted = function(inverted) {
    /**
     * @private
     * @readonly
     * @type {Boolean}
     */
    this._inverted = (inverted == null ? this.standardInverted() : inverted);
};

// set methods

/**
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the layout
 *
 * @param {Number} [object.maxCols] - Columns
 * @param {Number} [object.horizontalSpacing] - Horizontal spacing
 * @param {Number} [object.verticalSpacing] - Vertical spacing
 * @param {Array} [object.items] - Items
 * @param {Function | Number} [object.rowHeight] - Height of the row
 * @param {Function | Number} [object.colWidth] - Width of the column
 * @param {Boolean} [object.inverted] - Value of the invert
 *
 * @see DKTools.Sprite.prototype.setupAll
 * @see DKTools.Layout.prototype.setMaxCols
 * @see DKTools.Layout.prototype.setSpacing
 * @see DKTools.Layout.prototype.setItems
 * @see DKTools.Layout.prototype.setRowHeight
 * @see DKTools.Layout.prototype.setColWidth
 * @see DKTools.Layout.prototype.setInverted
 * @see DKTools.Layout.prototype.start
 * @see DKTools.Layout.prototype.activate
 *
 * @returns {Number} Number of changed parameters
 */
DKTools.Layout.prototype.setAll = function(object, blockStart, activate) {
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

    if (this.setInverted(object.reversed, block)) {
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
 * Changes the number of the columns
 * Returns true if the change occurred
 *
 * @param {Number} [cols] - Columns
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupMaxCols
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
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
 * Changes the horizontal spacing
 * Returns true if the change occurred
 *
 * @param {Number} [scacing] - Horizontal spacing
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupHorizontalSpacing
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setHorizontalSpacing = function(scacing, blockStart) {
    if (this._horizontalSpacing === scacing) {
        return false;
    }

    const lastSpacing = this._horizontalSpacing;
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
 * Changes the vertical spacing
 * Returns true if the change occurred
 *
 * @param {Number} [scacing] - Vertical spacing
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupVerticalSpacing
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setVerticalSpacing = function(scacing, blockStart) {
    if (this._verticalSpacing === scacing) {
        return false;
    }

    const lastSpacing = this._verticalSpacing;
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
 * Changes the horizontal and vertical spacing
 * Returns the number of changed parameters
 *
 * @param {Number} [horizontalSpacing] - Horizontal spacing
 * @param {Number} [verticalSpacing] - Vertical spacing
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setHorizontalSpacing
 * @see DKTools.Layout.prototype.setVerticalSpacing
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Number} Number of changed parameters
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
 * Changes the items
 * Returns true if the change occurred
 *
 * @param {DKTools.Sprite[] | *} [items] - Items
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.removeAllItems
 * @see DKTools.Layout.prototype.setupItems
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setItems = function(items, blockStart) {
    if (this._items == items) {
        return false;
    }

    this.removeAllItems();
    this.setupItems(items);

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Changes the height of the row
 * Returns true if the change occurred
 *
 * @param @param {Function | Number} [rowHeight] - Height of the row
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupRowHeight
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
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

/**
 * Changes the width of the column
 * Returns true if the change occurred
 *
 * @param {Function | Number} [colWidth] - Width of the column
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupColWidth
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
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
 * Changes the value of the invert
 * Returns true if the change occurred
 *
 * @param {Boolean} [inverted] - Value of the invert
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.setupInverted
 * @see DKTools.Layout.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Layout.prototype.setInverted = function(inverted, blockStart) {
    if (this._inverted === inverted) {
        return false;
    }

    const lastReversed = this._inverted;
    this.setupInverted(inverted);

    if (this._inverted === lastReversed) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

// start methods

/**
 * Starts the layout
 *
 * @override
 * 
 * @see DKTools.Sprite.prototype.start
 * @see DKTools.Layout.prototype.isReady
 * @see DKTools.Layout.prototype.addOneTimeEvent
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

// remove methods

/**
 * Removes children objects from processing
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.removeAllChildren
 * @see DKTools.Layout.prototype.removeAllItems
 */
DKTools.Layout.prototype.removeAllChildren = function() {
    DKTools.Sprite.prototype.removeAllChildren.call(this);
    this.removeAllItems();
};

/**
 * Removes items from processing
 *
 * @see DKTools.Layout.prototype.removeChild
 */
DKTools.Layout.prototype.removeAllItems = function() {
    this.removeChild.apply(this, this._items);
};

/**
 * Removes the item
 *
 * @param {DKTools.Sprite | *} item - Item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.hasItem
 * @see DKTools.Layout.prototype.removeChild
 * @see DKTools.Layout.prototype.start
 * @see DKTools.Utils.Array.remove
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

/**
 * Removes the items
 *
 * @param {Array} items - Items
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.removeItem
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.removeItems = function(items, blockStart) {
    _.forEach(items, function(item) {
        this.removeItem(item, true);
    }.bind(this));

    if (!blockStart) {
        this.start();
    }
};

/**
 * Removes the item by index
 *
 * @param {Number} index - Index
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.getItem
 * @see DKTools.Layout.prototype.removeItem
 */
DKTools.Layout.prototype.removeItemByIndex = function(index, blockStart) {
    this.removeItem(this.getItem(index), blockStart);
};

/**
 * Removes the columns
 *
 * @param {Number} cols - Columns
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.addCols
 */
DKTools.Layout.prototype.removeCols = function(cols) {
    if (this.getMaxCols() - cols >= 1) {
        this.addCols(-cols);
    }
};

/**
 * Removes the column
 *
 * @see DKTools.Layout.prototype.removeCols
 */
DKTools.Layout.prototype.removeCol = function() {
    this.removeCols(1);
};

// add methods

/**
 * Adds children objects to processing
 *
 * @override
 * 
 * @see DKTools.Sprite.prototype.addAllChildren
 * @see DKTools.Layout.prototype.addAllItems
 */
DKTools.Layout.prototype.addAllChildren = function() {
    DKTools.Sprite.prototype.addAllChildren.call(this);
    this.addAllItems();
};

/**
 * Adds the itemns to processing
 *
 * @see DKTools.Layout.prototype.addChild
 */
DKTools.Layout.prototype.addAllItems = function() {
    this.addChild.apply(this, this._items);
};

/**
 * Adds the item
 *
 * @param {DKTools.Sprite | *} item - Item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.addItem = function(item, blockStart) {
    if (!(item instanceof DKTools.Sprite)) {
        return;
    }

    this._items.push(item);

    if (!blockStart) {
        this.start();
    }
};

/**
 * Adds the items
 *
 * @param {DKTools.Sprite[] | *} items - Items
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.addItem
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.addItems = function(items, blockStart) {
    _.forEach(items, function(item) {
        this.addItem(item, true);
    }.bind(this));

    if (!blockStart) {
        this.start();
    }
};

/**
 * Adds the columns
 *
 * @param {Number} cols - Columns
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.setMaxCols
 */
DKTools.Layout.prototype.addCols = function(cols) {
    this.setMaxCols(this.getMaxCols() + cols);
};

/**
 * Adds the column
 *
 * @see DKTools.Layout.prototype.addCols
 */
DKTools.Layout.prototype.addCol = function() {
    this.addCols(1);
};

// can methods

/**
 * Returns true if the layout can clone the fixed bitmap
 *
 * @override
 * @returns {Boolean} Layout can clone the fixed bitmap
 */
DKTools.Layout.prototype.canCloneFixedBitmap = function() {
    return false;
};

// _get methods

/**
 * Returns the width of the bitmap
 * 
 * @since 2.0.0
 * @private
 * @override
 * 
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getColWidth
 * 
 * @returns {Number} Width of the bitmap
 */
DKTools.Layout.prototype._getBitmapWidth = function() {
    let width = 0;
    const maxCols = this.getMaxCols();

    for (let i = 1; i <= maxCols; i++) {
        width += this.getColWidth(i) + this._horizontalSpacing;
    }

    return width - this._horizontalSpacing;
};

/**
 * Returns the height of the bitmap
 * 
 * @since 2.0.0
 * @private
 * @override
 * 
 * @see DKTools.Layout.prototype.getMaxRows
 * @see DKTools.Layout.prototype.getRowHeight
 * 
 * @returns {Number} Height of the bitmap
 */
DKTools.Layout.prototype._getBitmapHeight = function() {
    let height = 0;
    const maxRows = this.getMaxRows();

    for (let i = 1; i <= maxRows; i++) {
        height += this.getRowHeight(i) + this._verticalSpacing;
    }

    return height - this._verticalSpacing;
};

// get methods

/**
 * Returns the maximum number of rows
 *
 * @see DKTools.Layout.prototype.getMaxItems
 * @see DKTools.Layout.prototype.getMaxCols
 *
 * @returns {Number} Maximum number of rows
 */
DKTools.Layout.prototype.getMaxRows = function() {
    return Math.max(1, Math.ceil(this.getMaxItems() / this.getMaxCols()));
};

/**
 * Returns the maximum number of columns
 *
 * @returns {Number} Maximum number of columns
 */
DKTools.Layout.prototype.getMaxCols = function() {
    return this._maxCols;
};

/**
 * Returns the items
 *
 * @see DKTools.Layout.prototype.isInverted
 *
 * @returns {DKTools.Sprite[] | *} Items
 */
DKTools.Layout.prototype.getItems = function() {
    if (this.isInverted()) {
        return _.reverse(_.clone(this._items));
    }

    return this._items;
};

/**
 * Returns the number of the items
 *
 * @return {Number} Number of the items
 */
DKTools.Layout.prototype.getMaxItems = function() {
    return this._items.length;
};

/**
 * Returns the index of the item
 *
 * @param {DKTools.Sprite | *} item - Item
 *
 * @see DKTools.Layout.prototype.getItems
 *
 * @returns {Number} Index of the item
 */
DKTools.Layout.prototype.getItemIndex = function(item) {
    return _.indexOf(this.getItems(), item);
};

/**
 * Returns the item by index
 *
 * @param {Number} index - Index
 *
 * @see DKTools.Layout.prototype.getItems
 *
 * @returns {DKTools.Sprite | * | undefined} Item by index or undefined
 */
DKTools.Layout.prototype.getItem = function(index) {
    return this.getItems()[index];
};

/**
 * Returns the items in the row
 *
 * @param {Number} row - Row
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getMaxRows
 * @see DKTools.Layout.prototype.getItem
 *
 * @returns {DKTools.Sprite[] | *} Items in the row
 */
DKTools.Layout.prototype.getItemsInRow = function(row) {
    const items = [];
    const maxCols = this.getMaxCols();

    if (row < 1 || row > this.getMaxRows()) {
        return items;
    }

    const startIndex = maxCols * (row - 1);

    for(let i = 0; i < maxCols; i++) {
        items.push(this.getItem(startIndex + i));
    }

    return items;
};

/**
 * Returns the items in the column
 *
 * @param {Number} col - Column
 *
 * @see DKTools.Layout.prototype.getMaxRows
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getItem
 *
 * @returns {DKTools.Sprite[] | *} Items in the column
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
        items.push(this.getItem(startIndex + maxCols * i));
    }

    return items;
};

/**
 * Returns the height of the row
 *
 * @param {Number} row - Row
 * @returns {Number} Height of the row
 */
DKTools.Layout.prototype.getRowHeight = function(row) {
    if (DKTools.Utils.isFunction(this._rowHeight)) {
        return this._rowHeight(row);
    }

    return this._rowHeight;
};

/**
 * Returns the width of the column
 *
 * @param {Number} col - Column
 * @returns {Number} Width of the column
 */
DKTools.Layout.prototype.getColWidth = function(col) {
    if (DKTools.Utils.isFunction(this._colWidth)) {
        return this._colWidth(col);
    }

    return this._colWidth;
};

/**
 * Returns the Y coordinate of the row
 *
 * @param {Number} row - Row
 *
 * @see DKTools.Layout.prototype.getRowHeight
 *
 * @returns {Number} The Y coordinate of the row
 */
DKTools.Layout.prototype.getRowY = function(row) {
    let y = 0;

    for(let i = 1; i < row; i++) {
        y += this.getRowHeight(i) + this._verticalSpacing;
    }

    return y;
};

/**
 * Returns the X coordinate of the column
 *
 * @param {Number} col - Column
 *
 * @see DKTools.Layout.prototype.getColWidth
 *
 * @returns {Number} The X coordinate of the column
 */
DKTools.Layout.prototype.getColX = function(col) {
    let x = 0;

    for(let i = 1; i < col; i++) {
        x += this.getColWidth(i) + this._horizontalSpacing;
    }

    return x;
};

/**
 * Returns the row of the item
 *
 * @param {DKTools.Sprite | *} item - Item
 *
 * @see DKTools.Layout.prototype.getItemIndex
 * @see DKTools.Layout.prototype.getMaxCols
 *
 * @returns {Number} Row of the item or -1
 */
DKTools.Layout.prototype.getItemRow = function(item) {
    const index = this.getItemIndex(item);

    if (index >= 0) {
        return Math.floor(index / this.getMaxCols()) + 1;
    }

    return -1;
};

/**
 * Returns the column of the item
 *
 * @param {DKTools.Sprite | *} item - Item
 *
 * @see DKTools.Layout.prototype.getItemIndex
 * @see DKTools.Layout.prototype.getMaxCols
 *
 * @returns {Number} Column of the item or -1
 */
DKTools.Layout.prototype.getItemCol = function(item) {
    const index = this.getItemIndex(item);

    if (index >= 0) {
        return (index % this.getMaxCols()) + 1;
    }

    return -1;
};

/**
 * Returns the cell by row and column
 *
 * @param {Number} row - Row
 * @param {Number} col - Col
 *
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getColX
 * @see DKTools.Layout.prototype.getRowY
 * @see DKTools.Layout.prototype.getColWidth
 * @see DKTools.Layout.prototype.getRowHeight
 *
 * @returns {{ item: (DKTools.Sprite | * | undefined), x: Number, y: Number, width: Number, height: Number }}
 */
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
 * Moves the item
 *
 * @param {Number} index - Index
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Layout.prototype.getItem
 */
DKTools.Layout.prototype.moveItem = function(index, object, y) {
    const item = this.getItem(index);

    if (item) {
        item.move(object, y);
    }
};

// invert methods

/**
 * Inverts the layout
 *
 * @see DKTools.Layout.prototype.isInverted
 * @see DKTools.Layout.prototype.setInverted
 */
DKTools.Layout.prototype.invert = function() {
    this.setInverted(!this.isInverted());
};

// is methods

/**
 * Returns true if the layout is empty
 *
 * @see DKTools.Layout.prototype.getMaxItems
 *
 * @returns {Boolean} Layout is empty
 */
DKTools.Layout.prototype.isEmpty = function() {
    return this.getMaxItems() === 0;
};

/**
 * Returns true if the layout is ready
 *
 * @override
 *
 * @see DKTools.Layout.prototype.isEmpty
 *
 * @returns {Boolean} Layout is ready
 */
DKTools.Layout.prototype.isReady = function() {
    return this.isEmpty() || _.every(this._items, function(item) {
        return item.isReady();
    });
};

/**
 * Returns true if the layout is inverted
 *
 * @returns {Boolean} Layout is inverted
 */
DKTools.Layout.prototype.isInverted = function() {
    return this._inverted;
};

/**
 * Returns true if the layout is horizontal
 *
 * @see DKTools.Layout.prototype.getMaxRows
 *
 * @returns {boolean} Layout is horizontal
 */
DKTools.Layout.prototype.isHorizontal = function() {
    return this.getMaxRows() === 1;
};

/**
 * Returns true if the layout is vertical
 *
 * @see DKTools.Layout.prototype.getMaxCols
 *
 * @returns {boolean} Layout is vertical
 */
DKTools.Layout.prototype.isVertical = function() {
    return this.getMaxCols() === 1;
};

// has methods

/**
 * Returns true if the layout has the items
 *
 * @see DKTools.Layout.prototype.isEmpty
 *
 * @returns {Boolean} Layout has the items
 */
DKTools.Layout.prototype.hasItems = function() {
    return !this.isEmpty();
};

/**
 * Returns true if the layout has the item
 *
 * @param {DKTools.Sprite | *} item - Item
 *
 * @see DKTools.Layout.prototype.getItemIndex
 *
 * @returns {Boolean} Layout has the item
 */
DKTools.Layout.prototype.hasItem = function(item) {
    return this.getItemIndex(item) >= 0;
};

// items methods

/**
 * Calls the callback function for the items
 *
 * @param {Function} callback - Function for the items
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.getItems
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.iterateItems = function(callback, start) {
    _.forEach(this.getItems(), callback);

    if (start) {
        this.start();
    }
};

/**
 * Starts the items
 *
 * @param {Boolean} [activate=false] - Activates the item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
 */
DKTools.Layout.prototype.startItems = function(activate, blockStart) {
    const callback = function(item) {
        item.start(activate);
    };
	this.iterateItems(callback, !blockStart);
};

/**
 * Resizes the item
 *
 * @param {DKTools.Sprite | *} item - Item
 * @param {Number} [width] - Width of the item
 * @param {Number} [height] - Height of the item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.hasItem
 * @see DKTools.Layout.prototype.start
 */
DKTools.Layout.prototype.resizeItem = function(item, width, height, blockStart) {
    if (this.hasItem(item) && item.resize(width, height)) {
        if (!blockStart) {
            this.start();
        }
    }
};

/**
 * Resizes the item by index
 *
 * @param {Number} index - Index
 * @param {Number} [width] - Width of the item
 * @param {Number} [height] - Height of the item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.getItem
 * @see DKTools.Layout.prototype.resizeItem
 */
DKTools.Layout.prototype.resizeItemByIndex = function(index, width, height, blockStart) {
    this.resizeItem(this.getItem(index), width, height, blockStart);
};

/**
 * Resizes the items
 *
 * @param {Number} [width] - Width of the item
 * @param {Number} [height] - Height of the item
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @see DKTools.Layout.prototype.resizeItem
 * @see DKTools.Layout.prototype.iterateItems
 */
DKTools.Layout.prototype.resizeItems = function(width, height, blockStart) {
    const callback = function(item) {
        this.resizeItem(item, width, height, true);
    }.bind(this);
	this.iterateItems(callback, !blockStart);
};

/**
 * Activates the items
 *
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
 */
DKTools.Layout.prototype.activateItems = function(start) {
    const callback = function(item) {
        item.activate();
    };
    this.iterateItems(callback, start);
};

/**
 * Deactivates the items
 *
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
 */
DKTools.Layout.prototype.deactivateItems = function(start) {
    const callback = function(item) {
        item.deactivate();
    };
    this.iterateItems(callback, start);
};

/**
 * Shows the items
 *
 * @param {Boolean} [activate=false] - Activates the items
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
 */
DKTools.Layout.prototype.showItems = function(activate, start) {
    const callback = function(item) {
        item.show(activate);
    };
    this.iterateItems(callback, start);
};

/**
 * Hides the items
 *
 * @param {Boolean} [blockDeactivate=false] - Block deactivation of the items
 * @param {Boolean} [start=false] - Call of the "start" function
 *
 * @see DKTools.Layout.prototype.iterateItems
 */
DKTools.Layout.prototype.hideItems = function(blockDeactivate, start) {
    const callback = function(item) {
        item.hide(blockDeactivate);
    };
    this.iterateItems(callback, start);
};

// align methods

/**
 * Aligns the item
 *
 * @param {DKTools.Sprite | * | Number} item - Item or index
 *
 * @see DKTools.Layout.prototype.isReady
 * @see DKTools.Layout.prototype.getItemRow
 * @see DKTools.Layout.prototype.getItemCol
 * @see DKTools.Layout.prototype.getRowHeight
 * @see DKTools.Layout.prototype.getColWidth
 * @see DKTools.Layout.prototype.getColX
 * @see DKTools.Layout.prototype.getRowY
 * @see DKTools.Layout.prototype.addOneTimeEvent
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
 * Aligns the row
 *
 * @param {Number} row - Row
 *
 * @see DKTools.Layout.prototype.getItemsInRow
 * @see DKTools.Layout.prototype.alignItem
 */
DKTools.Layout.prototype.alignRow = function(row) {
    _.forEach(this.getItemsInRow(row), this.alignItem.bind(this));
};

/**
 * Aligns the column
 *
 * @param {Number} col - Column
 *
 * @see DKTools.Layout.prototype.getItemsInCol
 * @see DKTools.Layout.prototype.alignItem
 */
DKTools.Layout.prototype.alignCol = function(col) {
    _.forEach(this.getItemsInCol(col), this.alignItem.bind(this));
};

/**
 * Aligns the items
 *
 * @see DKTools.Layout.prototype.addOneTimeEvent
 * @see DKTools.Layout.prototype.iterateItems
 * @see DKTools.Layout.prototype.alignItem
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
 * Updates all
 *
 * @override
 *
 * @see DKTools.Sprite.prototype.updateAll
 * @see DKTools.Layout.prototype.updateLayout
 */
DKTools.Layout.prototype.updateAll = function() {
    DKTools.Sprite.prototype.updateAll.call(this);
    this.updateLayout();
};

/**
 * Updates the layout
 *
 * @see DKTools.Layout.prototype.getMaxItems
 * @see DKTools.Layout.prototype.getMaxRows
 * @see DKTools.Layout.prototype.getMaxCols
 * @see DKTools.Layout.prototype.getColX
 * @see DKTools.Layout.prototype.getRowY
 * @see DKTools.Layout.prototype.moveItem
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
// DKTools.Window
//===========================================================================

DKTools.Window.prototype = Object.create(Window_Base.prototype);
DKTools.Utils.mixin(DKTools.Window.prototype, DKTools.Base.prototype);
DKTools.Window.prototype.constructor = DKTools.Window;

/**
 * Counter of created windows
 *
 * @private
 * @readonly
 * @type {Number}
 * @memberof DKTools.Window
 */
DKTools.Window._counter = 0;

// properties

Object.defineProperties(DKTools.Window.prototype, {

    /**
     * Real width of the window (not including scaling)
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Window.prototype
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
     * Real height of the window (not including scaling)
     *
     * @readonly
     * @type {Number}
     * @memberof DKTools.Window.prototype
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
     * Width of the window (taking into account scaling)
     *
     * @type {Number}
     * @memberof DKTools.Window.prototype
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
     * Height of the window (taking into account scaling)
     *
     * @type {Number}
     * @memberof DKTools.Window.prototype
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
     * Origin
     *
     * @readonly
     * @type {Point}
     * @memberof DKTools.Window.prototype
     */
    origin: {
        get: function() {
            return this._origin;
        },
        configurable: true
    },

    /**
     * Opacity of the window
     *
     * @type {Number}
     * @memberof DKTools.Window.prototype
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
     * Opacity of the frame
     *
     * @type {Number}
     * @memberof DKTools.Window.prototype
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
     * Opacity of the window
     *
     * @readonly
     * @type {Object}
     * @memberof DKTools.Window.prototype
     */
    opacity: {
        get: function() {
            return this._opacity;
        },
        configurable: true
    },

    /**
     * Tone of the window
     *
     * @readonly
     * @type {Number[]}
     * @memberof DKTools.Window.prototype
     */
    tone: {
        get: function() {
            return this._tone;
        },
        configurable: true
    },

    /**
     * Sprite of the contents
     *
     * @readonly
     * @type {DKTools.Sprite}
     * @memberof DKTools.Window.prototype
     */
    contentsSprite: {
        get: function() {
            return this._windowContentsSprite;
        },
        configurable: true
    },

    /**
     * Sprite of the frame
     *
     * @readonly
     * @type {Sprite}
     * @memberof DKTools.Window.prototype
     */
    frameSprite: {
        get: function() {
            return this._windowFrameSprite;
        },
        configurable: true
    },

    /**
     * Sprite of the background
     *
     * @readonly
     * @type {Sprite}
     * @memberof DKTools.Window.prototype
     */
    backSprite: {
        get: function() {
            return this._windowBackSprite;
        },
        configurable: true
    },

    /**
     * Bitmap of sprite of the contents
     * To support functions from DKTools.Base
     *
     * @type {Bitmap}
     * @memberof DKTools.Window.prototype
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
 * Initializes a class object
 *
 * @override
 *
 * @param {Number | Object} [object] - The X coordinate
 * @param {Number} [y] - The Y coordinate
 * @param {Number} [width] - Width of the window
 * @param {Number} [height] - Height of the window
 *
 * @see PIXI.Container
 * @see DKTools.Base.prototype.initialize
 */
DKTools.Window.prototype.initialize = function(object, y, width, height) {
    PIXI.Container.call(this);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    DKTools.Window._counter++;
};

// _clear methods

/**
 * Clears all data
 *
 * @private
 * @override
 * 
 * @see DKTools.Base.prototype._clearAll
 * @see DKTools.Window.prototype._clearIsWindow
 * @see DKTools.Window.prototype._clearOpenness
 * @see DKTools.Window.prototype._clearPadding
 * @see DKTools.Window.prototype._clearMargin
 * @see DKTools.Window.prototype._clearColorTone
 * @see DKTools.Window.prototype._clearOrigin
 * @see DKTools.Window.prototype._clearArrows
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
 * Clears the "isWindow"
 *
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
 * Clears the openness
 *
 * @private
 * 
 * @see DKTools.Window.prototype.standardOpenness
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
 * Clears the padding
 *
 * @private
 * 
 * @see DKTools.Window.prototype.standardPadding
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
 * Clears the margin
 *
 * @private
 * 
 * @see DKTools.Window.prototype.standardMargin
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
 * Clears the color tone
 *
 * @private
 * 
 * @see DKTools.Window.prototype.standardTone
 */
DKTools.Window.prototype._clearColorTone = function() {
    /**
     * @private
     * @readonly
     * @type {Number[]}
     */
    this._colorTone = this.standardTone();
};

/**
 * Clears the origin
 *
 * @private
 * 
 * @see DKTools.Window.prototype.standardOrigin
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
 * Clears the arrows
 *
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
 * Creates all
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._createAll
 * @see DKTools.Window.prototype._createAllParts
 * @see DKTools.Window.prototype._createWindowskin
 */
DKTools.Window.prototype._createAll = function() {
    DKTools.Base.prototype._createAll.call(this);
    this._createAllParts();
    this._createWindowskin();
};

/**
 * Creates all parts of the window
 *
 * @private
 * @override
 *
 * @see DKTools.Window.prototype._createSpriteContainer
 * @see DKTools.Window.prototype._createBackSprite
 * @see DKTools.Window.prototype._createFrameSprite
 * @see DKTools.Window.prototype._createPauseSignSprite
 */
DKTools.Window.prototype._createAllParts = function() {
    this._createSpriteContainer();
    this._createBackSprite();
    this._createFrameSprite();
    this._createPauseSignSprite();
};

/**
 * Creates the container of the sprites
 *
 * @private
 * 
 * @see PIXI.Container
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
 * Creates the sprite of the background
 *
 * @private
 * 
 * @see DKTools.Window.prototype.needsCreateBackSprite
 * @see DKTools.Window.prototype.standardBackOpacity
 * @see DKTools.Window.prototype.standardBackVisible
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
 * Creates the sprtie of the frame
 *
 * @private
 * 
 * @see DKTools.Window.prototype.needsCreateFrameSprite
 * @see DKTools.Window.prototype.standardFrameVisible
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
 * Creates the sprite of the pause sign
 *
 * @private
 * 
 * @see DKTools.Window.prototype.needsCreatePauseSignSprite
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
 * Creates the window skin
 *
 * @private
 *
 * @see DKTools.Window.prototype.loadWindowskin
 */
DKTools.Window.prototype._createWindowskin = function() {
    this.windowskin = this.loadWindowskin();
};

// _setup methods

/**
 * Sets the events
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._setupEvents
 * @see DKTools.Base.prototype.needsCreateArrowsSprites
 * @see DKTools.Base.prototype._setupCreateArrowsEvent
 */
DKTools.Window.prototype._setupEvents = function() {
    DKTools.Base.prototype._setupEvents.call(this);

    if (this.needsCreateArrowsSprites()) {
        this._setupCreateArrowsEvent();
    }
};

/**
 * Sets the create arrows event
 * 
 * @private
 * 
 * @see DKTools.Window.prototype.addOneTimeEvent
 */
DKTools.Window.prototype._setupCreateArrowsEvent = function() {
     this.addOneTimeEvent({
         type: 'create-all',
         onSuccess: this.createArrows.bind(this)
     });
};

// _add methods

/**
 * Adds children objects to processing
 *
 * @private
 * @override
 *
 * @see DKTools.Base.prototype._addAllChildren
 * @see DKTools.Window.prototype._addAllParts
 */
DKTools.Window.prototype._addAllChildren = function() {
    DKTools.Base.prototype._addAllChildren.call(this);
    this._addAllParts();
};

/**
 * Adds all parts of the window to processing
 *
 * @private
 *
 * @see DKTools.Window.prototype._addSpriteContainer
 * @see DKTools.Window.prototype._addPauseSignSprite
 */
DKTools.Window.prototype._addAllParts = function() {
    this._addSpriteContainer();
    this._addPauseSignSprite();
};

/**
 * Adds the container of the sprites to processing
 *
 * @private
 * 
 * @see DKTools.Window.prototype.hasSpriteContainer
 * @see DKTools.Window.prototype.hasBackSprite
 * @see DKTools.Window.prototype.hasFrameSprite
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
 * Adds the sprite of the contents to processing
 *
 * @private
 * 
 * @see DKTools.Window.prototype.hasContentsSprite
 */
DKTools.Window.prototype._addContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.addChild(this._windowContentsSprite);
    }
};

/**
 * Adds the sprite of the pause sign to processing
 *
 * @private
 * 
 * @see DKTools.Window.prototype.hasPauseSignSprite
 */
DKTools.Window.prototype._addPauseSignSprite = function() {
    if (this.hasPauseSignSprite()) {
        this.addChild(this._windowPauseSignSprite);
    }
};

// standard methods

/**
 * Returns the standard openness of the window
 *
 * @returns {Number} Standard openness of the window
 */
DKTools.Window.prototype.standardOpenness = function() {
    return 255;
};

/**
 * Returns the standard openness speed of the window
 *
 * @returns {Number} Standard openness speed of the window
 */
DKTools.Window.prototype.standardOpennessSpeed = function() {
    return 16;
};

/**
 * Returns the standard margin of the window
 *
 * @returns {Number} Standard margin of the window
 */
DKTools.Window.prototype.standardMargin = function() {
    return 4;
};

/**
 * Returns the standard origin of the window
 *
 * @returns {Point} Standard origin of the window
 */
DKTools.Window.prototype.standardOrigin = function() {
    return new Point(0, 0);
};

/**
 * Returns the standard normal state of the arrow
 *
 * @returns {Function} Standard normal state of the arrow
 */
DKTools.Window.prototype.standardArrowStateNormal = function() {
    return function(event) {
        const arrow = event.target;
        arrow.setScale(1, 1);
        arrow.setOpacity(255);
    };
};

/**
 * Returns the standard pressed state of the arrow
 *
 * @returns {Function} Standard pressed state of the arrow
 */
DKTools.Window.prototype.standardArrowStatePressed = function() {
    return function(event) {
        const arrow = event.target;
        arrow.setScale(0.9, 0.9);
        arrow.setOpacity(160);
    };
};

/**
 * Returns the standard sprite of the contents
 *
 * @returns {DKTools.Sprite} Standard sprite of the contents
 */
DKTools.Window.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite();
};

/**
 * Returns the standard X coordinate of the child
 *
 * @returns {Number} Standard X coordinate of the child
 */
DKTools.Window.prototype.standardChildX = function() {
	return this.standardPadding();
};

/**
 * Returns the standard Y coordinate of the child
 *
 * @returns {Number} Standard Y coordinate of the child
 */
DKTools.Window.prototype.standardChildY = function() {
	return this.standardPadding();
};

/**
 * Returns the standard position of the child
 *
 * @returns {Point} Standard position of the child
 */
DKTools.Window.prototype.standardChildPosition = function() {
    return new Point(this.standardChildX(), this.standardChildY());
};

/**
 * Returns the standard position of the contents
 *
 * @returns {Point} Standard position of the contents
 */
DKTools.Window.prototype.standardContentsPosition = function() {
    return this.standardChildPosition();
};

/**
 * Returns the standard visibility of the background
 *
 * @returns {Boolean} Standard visibility of the background
 */
DKTools.Window.prototype.standardBackVisible = function() {
    return true;
};

/**
 * Returns the standard visibility of the frame
 *
 * @returns {Boolean} Standard visibility of the frame
 */
DKTools.Window.prototype.standardFrameVisible = function() {
    return true;
};

/**
 * Returns the standard width of the contents
 *
 * @returns {Function} Standard width of the contents
 */
DKTools.Window.prototype.standardContentsWidth = function() {
    return function() {
        return this._width - this.standardPadding() * 2;
    }.bind(this);
};

/**
 * Returns the standard height of the contents
 *
 * @returns {Function} Standard height of the contents
 */
DKTools.Window.prototype.standardContentsHeight = function() {
    return function() {
        return this._height - this.standardPadding() * 2;
    }.bind(this);
};

/**
 * Returns the standard opacity of the window
 *
 * @returns {Number} Standard opacity of the window
 */
DKTools.Window.prototype.standardWindowOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity of the contents
 *
 * @returns {Number} Standard opacity of the contents
 */
DKTools.Window.prototype.standardContentsOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity of the frame
 *
 * @returns {Number} Standard opacity of the frame
 */
DKTools.Window.prototype.standardFrameOpacity = function() {
    return 255;
};

/**
 * Returns the standard opacity
 *
 * @see DKTools.Window.prototype.standardWindowOpacity
 * @see DKTools.Window.prototype.standardContentsOpacity
 * @see DKTools.Window.prototype.standardFrameOpacity
 * @see DKTools.Window.prototype.standardBackOpacity
 *
 * @returns {Object} Standard opacity
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
 * Returns the standard tone of the window
 *
 * @returns {Number[]} Standard tone of the window
 */
DKTools.Window.prototype.standardTone = function() {
    try {
        return $gameSystem.windowTone();
    } catch(e) {
    }

    return [0, 0, 0];
};

// setup methods

/**
 * Sets all parameters
 *
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Function | Number} [object.contentsWidth] - Width of thw window
 * @param {Function | Number} [object.contentsHeight] - Height of thw window
 * @param {Object} [object.opacity] - Opacity of the window
 * @param {Number[]} [object.tone] - Tone of the window
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Base.prototype.setupAll
 * @see DKTools.Window.prototype.setupContentsWidth
 * @see DKTools.Window.prototype.setupContentsHeight
 * @see DKTools.Window.prototype.setupContentsSprite
 * @see DKTools.Window.prototype.setupContentsPosition
 * @see DKTools.Window.prototype.setupOpacity
 * @see DKTools.Window.prototype.setupTone
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
 * Sets the width of the window
 *
 * @param {Number} [width] - Width of the window
 * 
 * @see DKTools.Window.prototype._checkWidth
 */
DKTools.Window.prototype.setupWidth = function(width) {
    this.realWidth = this._checkWidth(width);
};

/**
 * Sets the height of the window
 *
 * @param {Number | String} [height] - Height of the window of number of lines (String)
 * 
 * @see DKTools.Window.prototype._checkHeight
 */
DKTools.Window.prototype.setupHeight = function(height) {
    if (DKTools.Utils.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }

    this.realHeight = this._checkHeight(height);
};

/**
 * Sets the size of the window
 *
 * @param {Number | Object} [object] - Width of the window or object with parameters
 * @param {Number | String} [height] - Height of the window or number of lines (String) (if object is Number)
 *
 * @param {Number} [object.width] - Width of the window
 * @param {Number | String} [object.height] - Height of the window or number of lines (String)
 *
 * @see DKTools.Window.prototype.getLineHeight
 * @see DKTools.Window.prototype._checkWidth
 * @see DKTools.Window.prototype._checkHeight
 * @see Window.prototype.move
 */
DKTools.Window.prototype.setupSize = function(object, height) {
    if (object instanceof Object) {
        return this.setupSize(object.width, object.height);
    }

    if (DKTools.Utils.isString(height)) {
        height = this.getLineHeight() * Number(height);
    }

    // object - Number
    object = this._checkWidth(object);
    height = this._checkHeight(height);

    Window.prototype.move.call(this, this.x, this.y, object, height);
};

/**
 * Sets the width of the contents
 *
 * @param {Function | Number} [contentsWidth=this.standardContentsWidth()] - Width of the contents
 *
 * @see DKTools.Window.prototype.standardContentsWidth
 */
DKTools.Window.prototype.setupContentsWidth = function(contentsWidth) {
    this._contentsWidth = contentsWidth || this.standardContentsWidth();
};

/**
 * Sets the height of the contents
 *
 * @param {Function | Number} [contentsHeight=this.standardContentsHeight()] - Height of the contents
 *
 * @see DKTools.Window.prototype.standardContentsHeight
 */
DKTools.Window.prototype.setupContentsHeight = function(contentsHeight) {
    this._contentsHeight = contentsHeight || this.standardContentsHeight();
};

/**
 * Sets the sprite of the contents
 *
 * @param {DKTools.Sprite | *} [contentsSprite=this.standardContentsSprite()] - Sprite of the contents
 *
 * @see DKTools.Window.prototype.standardContentsSprite
 */
DKTools.Window.prototype.setupContentsSprite = function(contentsSprite) {
    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite | *}
     */
    this._windowContentsSprite = contentsSprite || this.standardContentsSprite();
};

/**
 * Sets the position of the contents
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object=this.standardContentsPosition()] - The X coordinate or Point or object with parameters
 * @param {Number} [y=undefined] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.toPoint
 * @see DKTools.Utils.Point.standardContentsPosition
 */
DKTools.Window.prototype.setupContentsPosition = function(object, y) {
    const position = DKTools.Utils.Point.toPoint(object, y);
    const newPosition = Object.assign(this.standardContentsPosition(), position);

    /**
     * @private
     * @readonly
     * @type {Point}
     */
    this._contentsPosition = new Point(newPosition.x, newPosition.y);
};

/**
 * Sets the opacity of the window
 *
 * @param {Object} [opacity=this.standardOpacity()] - Opacity of the window
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Window.prototype.standardOpacity
 */
DKTools.Window.prototype.setupOpacity = function(opacity) {
    /**
     * @private
     * @type {Object}
     */
    this._opacity = Object.assign(this.standardOpacity(), opacity);
};

/**
 * Sets the tone of the window
 *
 * @param {Number[]} [tone=this.standardTone()] - Tone of the window
 *
 * @see DKTools.Window.prototype.standardTone
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
 * Changes all parameters
 * Returns the number of changed parameters
 *
 * @override
 *
 * @param {Object} [object] - Parameters
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @param {Object} [object.opacity] - Opacity of the window
 * @param {Number[]} [object.tone] - Tone of the window
 *
 * @param {Number} [object.opacity.windowOpacity] - Opacity of the window
 * @param {Number} [object.opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [object.opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [object.opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Base.prototype.setAll
 * @see DKTools.Window.prototype.setOpacity
 * @see DKTools.Window.prototype.setTone
 * @see DKTools.Window.prototype.start
 * @see DKTools.Window.prototype.activate
 *
 * @returns {Number} Number of changed parameters
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
 * Changes the width of the window
 * Returns true if the change occurred
 *
 * @param {Number} [width] - Width of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setWidth = function(width, blockStart, activate) {
    return this.resize(width, this._height, blockStart, activate);
};

/**
 * Changes the height of the window
 * Returns true if the change occurred
 *
 * @param {Number} [height] - Height of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.resize
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setHeight = function(height, blockStart, activate) {
    return this.resize(this._width, height, blockStart, activate);
};

/**
 * Changes the sprite of the contents
 * Returns true if the change occurred
 *
 * @param {DKTools.Sprite | *} [contentsSprite]
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.removeContentsSprite
 * @see DKTools.Window.prototype.setupContentsSprite
 * @see DKTools.Window.prototype.addContentsSprite
 * @see DKTools.Window.prototype.activate
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setContentsSprite = function(contentsSprite, blockStart, activate) {
    if (this._windowContentsSprite == contentsSprite) {
        return false;
    }

    // TODO: проверить
    this.removeContentsSprite();
    this.setupContentsSprite(contentsSprite);
    this.addContentsSprite();

    if (!blockStart) {
        this.start();
    }

    if (activate) {
        this.activate();
    }

    return true;
};

/**
 * Changes the position of the contents
 * Returns true if the change occurred
 *
 * @param {Number | PIXI.Point | PIXI.ObservablePoint | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y=undefined] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @see DKTools.Utils.Point.toPoint
 * @see DKTools.Utils.Point.equals
 * @see DKTools.Utils.Point.clone
 * @see DKTools.Window.prototype.setupContentsPosition
 * @see DKTools.Window.prototype._refreshContents
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setContentsPosition = function(object, y) {
    if (object instanceof Object) {
        return this.setContentsPosition(object, y);
    }

    // object - Number
    const newPos = DKTools.Utils.Point.toPoint(object, y);

    if (DKTools.Utils.Point.equals(this._contentsPosition, newPos)) {
        return false;
    }

    const lastPos = DKTools.Utils.Point.clone(this._contentsPosition);
    this.setupContentsPosition(newPos);

    if (!DKTools.Utils.Point.equals(this._contentsPosition, lastPos)) {
        this._refreshContents();
        return true;
    }

    return false;
};

/**
 * Changes the opacity of the window
 * Returns true if the change occurred
 *
 * @param {Object} [opacity] - Opacity of the window
 * {Boolean} [blockUpdateOpacity=false] - Blocking the call of the "updateOpacity" function
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
 *
 * @see DKTools.Window.prototype.setupOpacity
 * @see DKTools.Window.prototype.updateOpacity
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setOpacity = function(opacity, blockUpdateOpacity) {
    if (_.isEqual(this._opacity, Object.assign(this.standardOpacity(), opacity))) {
        return false;
    }

    this.setupOpacity(opacity);

    if (!blockUpdateOpacity) {
        this.updateOpacity();
    }

    return true;
};

/**
 * Changes the tone of the window
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number[]} [tone] - Tone of the window
 * @param {Boolean} [blockUpdateTone=false] - Blocking the call of the "updateTone" function
 *
 * @see DKTools.Window.prototype.setupTone
 * @see DKTools.Window.prototype.updateTone
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.setTone = function(tone, blockUpdateTone) {
    const standardTone = _.clone(this.standardTone());

    if (_.isEqual(this._tone, Object.assign(standardTone, tone))) {
        return false;
    }

    this.setupTone(tone);

    if (!blockUpdateTone) {
        this.updateTone();
    }

    return true;
};

// get methods

/**
 * Returns the minimum width of the window
 *
 * @override
 *
 * @see DKTools.Window.prototype.standardPadding
 * @see DKTools.Base.prototype.getMinWidth
 *
 * @returns {Number} Minimum width of the window
 */
DKTools.Window.prototype.getMinWidth = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.getMinWidth.call(this);
};

/**
 * Returns the minimum height of the window
 *
 * @override
 *
 * @see DKTools.Window.prototype.standardPadding
 * @see DKTools.Base.prototype.getMinHeight
 *
 * @returns {Number} Minimum height of the window
 */
DKTools.Window.prototype.getMinHeight = function() {
    return this.standardPadding() * 2 + DKTools.Base.prototype.getMinHeight.call(this);
};

/**
 * Returns the width of the contents
 *
 * @returns {Number} Width of the contents
 */
DKTools.Window.prototype.getContentsWidth = function() {
    if (DKTools.Utils.isFunction(this._contentsWidth)) {
        return this._contentsWidth();
    }

    return this._contentsWidth;
};

/**
 * Returns the height of the contents
 *
 * @returns {Number} Height of the contents
 */
DKTools.Window.prototype.getContentsHeight = function() {
    if (DKTools.Utils.isFunction(this._contentsHeight)) {
        return this._contentsHeight();
    }

    return this._contentsHeight;
};

/**
 * Returns the size of the contents
 *
 * @see DKTools.Window.prototype.getContentsWidth
 * @see DKTools.Window.prototype.getContentsHeight
 *
 * @returns {Object} Size of the contents
 */
DKTools.Window.prototype.getContentsSize = function() {
    return { width: this.getContentsWidth(), height: this.getContentsHeight() };
};

/**
 * Returns the arrow by ID
 *
 * @param {Number | String} id - ID of the arrow
 * @returns {DKTools.Sprite.Arrow | undefined} Sprite of the arrow or undefined
 */
DKTools.Window.prototype.getArrow = function(id) {
    return _.find(this._arrows, { id });
};

/**
 * Returns the current opacity of the window
 *
 * @returns {Number} Current opacity of the window
 */
DKTools.Window.prototype.getCurrentOpacity = function() {
    return this.windowOpacity;
};

// needs create methods

/**
 * Returns true if needs to create the sprite of the background
 *
 * @returns {Boolean} Needs to create the sprite of the background
 */
DKTools.Window.prototype.needsCreateBackSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the frame
 *
 * @returns {Boolean} Needs to create the sprite of the frame
 */
DKTools.Window.prototype.needsCreateFrameSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprites of the arrows
 *
 * @returns {Boolean} Needs to create the sprites of the arrows
 */
DKTools.Window.prototype.needsCreateArrowsSprites = function() {
    return false;
};

/**
 * Returns true if needs to create the sprite of the down arrow
 *
 * @returns {Boolean} Needs to create the sprite of the down arrow
 */
DKTools.Window.prototype.needsCreateDownArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the up arrow
 *
 * @returns {Boolean} Needs to create the sprite of the up arrow
 */
DKTools.Window.prototype.needsCreateUpArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the left arrow
 *
 * @returns {Boolean} Needs to create the sprite of the left arrow
 */
DKTools.Window.prototype.needsCreateLeftArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the right arrow
 *
 * @returns {Boolean} Needs to create the sprite of the right arrow
 */
DKTools.Window.prototype.needsCreateRightArrowSprite = function() {
    return true;
};

/**
 * Returns true if needs to create the sprite of the pause sign
 *
 * @returns {Boolean} Needs to create the sprite of the pause sign
 */
DKTools.Window.prototype.needsCreatePauseSignSprite = function() {
    return true;
};

// _refresh methods

/**
 * Updates all parts of the window
 *
 * @private
 * @override
 *
 * @see DKTools.Window.prototype._refreshBack
 * @see DKTools.Window.prototype._refreshFrame
 * @see DKTools.Window.prototype._refreshContents
 * @see DKTools.Window.prototype._refreshPauseSign
 */
DKTools.Window.prototype._refreshAllParts = function() {
    this._refreshBack();
    this._refreshFrame();
    this._refreshContents();
    this._refreshPauseSign();
};

/**
 * Updates the background of the window
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshBack
 */
DKTools.Window.prototype._refreshBack = function() {
    if (this.hasBackSprite()) {
        Window.prototype._refreshBack.call(this);
    }
};

/**
 * Updates the frame of the window
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshFrame
 */
DKTools.Window.prototype._refreshFrame = function() {
    if (this.hasFrameSprite()) {
        Window.prototype._refreshFrame.call(this);
    }
};

/**
 * Updates the contents
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
 * Updates the sprite of the pause sign
 *
 * @private
 * @override
 *
 * @see Window.prototype._refreshPauseSign
 */
DKTools.Window.prototype._refreshPauseSign = function() {
    if (this.hasPauseSignSprite()) {
        Window.prototype._refreshPauseSign.call(this);
    }
};

// start methods

/**
 * Starts the window
 *
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Base.prototype.start
 */
DKTools.Window.prototype.start = function(activate) {
    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;
        contentsSprite.resize(this.getContentsWidth(), this.getContentsHeight(), true);
        contentsSprite.start(activate);
    }

    DKTools.Base.prototype.start.call(this, activate);
};

// remove methods

/**
 * Removes children objects from processing
 *
 * @override
 */
DKTools.Window.prototype.removeAllChildren = function() {
    DKTools.Base.prototype.removeAllChildren.call(this);
    this.removeContentsSprite();
};

/**
 * Removes the sprite of the contents from processing
 */
DKTools.Window.prototype.removeContentsSprite = function() {
    if (this.hasContentsSprite()) {
        this.removeChild(this._windowContentsSprite);
    }
};

/**
 * Removes the arrow by ID
 *
 * @param {Number | String} id - ID of the arrow
 *
 * @see DKTools.Window.prototype.getArrow
 * @see DKTools.Utils.Array.remove
 * @see DKTools.Window.prototype.removeChild
 */
DKTools.Window.prototype.removeArrow = function(id) {
    const arrow = this.getArrow(id);

    if (arrow) {
        DKTools.Utils.Array.remove(this._arrows, arrow);
        this.removeChild(arrow);
    }
};

// check methods

/**
 * Checks size of the window
 * Returns the number of changed parameters
 *
 * @override
 *
 * @see DKTools.Window.prototype.getMinWidth
 * @see DKTools.Window.prototype.getMinHeight
 *
 * @returns {Number} Number of changed parameters
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
 * Creates the arrow
 *
 * @version 3.0.0
 * 
 * @param {String} arrowType - Type
 * @param {Number | String | *} id - ID
 * @param {Object} options - Options
 *
 * @param {Number} [options.x] - The X coordinate
 * @param {Number | String} [options.y] - The Y coordinate or line number (String)
 * @param {Function} [options.onMouseDown] -
 * @param {Function} [options.onMouseUp] -
 * @param {Function} [options.onMouseClick] -
 * @param {Function} [options.onMouseLongPress] -
 * @param {Function} [options.onMouseLongPressStarted] -
 * @param {Function} [options.onMouseLongPressFinished] -
 * @param {Function} [options.onStateNormal] -
 * @param {Function} [options.onStatePressed] -
 *
 * @see DKTools.Sprite.Arrow
 * @see DKTools.Event.prototype.onUpdate
 *
 * @returns {DKTools.Sprite.Arrow} Created arrow
 */
DKTools.Window.prototype.createArrow = function(arrowType, id, options) {
    const arrow = new DKTools.Sprite.Arrow({
        x: options.x,
        y: options.y,
        id,
        arrowType
    });

    arrow.start();

    arrow.addEvent({
        type: 'update',
        onUpdate: function(event) {
            if (this.isOpenAndVisible()) {
                arrow.show();
            } else {
                arrow.hide();
            }

            if (DKTools.Utils.isFunction(options.onUpdate)) {
                options.onUpdate(event);
            }
        }.bind(this)
    });

    if (DKTools.Utils.isFunction(options.onMouseDown)) {
        arrow.addEvent({
            type: 'mouse-down-left',
            onUpdate: options.onMouseDown
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseUp)) {
        arrow.addEvent({
            type: 'mouse-up-left',
            onUpdate: options.onMouseUp
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseClick)) {
        arrow.addEvent({
            type: 'mouse-click-left',
            onUpdate: options.onMouseClick
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseLongPress)) {
        arrow.addEvent({
            type: 'mouse-long-press-left',
            onUpdate: options.onMouseLongPress
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseLongPressStarted)) {
        arrow.addEvent({
            type: 'mouse-long-press-left-started',
            onUpdate: options.onMouseLongPressStarted
        });
    }

    if (DKTools.Utils.isFunction(options.onMouseLongPressFinished)) {
        arrow.addEvent({
            type: 'mouse-long-press-left-finished',
            onUpdate: options.onMouseLongPressFinished
        });
    }

    if (DKTools.Utils.isFunction(options.onStateNormal)) {
        arrow.addEvent({
            type: 'state-normal',
            onUpdate: options.onStateNormal
        });
    }

    if (DKTools.Utils.isFunction(options.onStatePressed)) {
        arrow.addEvent({
            type: 'state-pressed',
            onUpdate: options.onStatePressed
        });
    }

    this._arrows.push(arrow);

    this.addChild(arrow);

    return arrow;
};

/**
 * Creates the arrows
 *
 * @version 3.0.0
 *
 * @see DKTools.Window.prototype.needsCreateDownArrowSprite
 * @see DKTools.Window.prototype.needsCreateUpArrowSprite
 * @see DKTools.Window.prototype.needsCreateRightArrowSprite
 * @see DKTools.Window.prototype.needsCreateLeftArrowSprite
 * @see DKTools.Window.prototype.createArrow
 * @see DKTools.Window.prototype.onDownArrowUpdate
 * @see DKTools.Window.prototype.onDownArrowMouseClick
 * @see DKTools.Window.prototype.onDownArrowMouseLongPress
 * @see DKTools.Window.prototype.onUpArrowUpdate
 * @see DKTools.Window.prototype.onUpArrowMouseClick
 * @see DKTools.Window.prototype.onUpArrowMouseLongPress
 * @see DKTools.Window.prototype.onRightArrowUpdate
 * @see DKTools.Window.prototype.onRightArrowMouseClick
 * @see DKTools.Window.prototype.onRightArrowMouseLongPress
 * @see DKTools.Window.prototype.onLeftArrowUpdate
 * @see DKTools.Window.prototype.onLeftArrowMouseClick
 * @see DKTools.Window.prototype.onLeftArrowMouseLongPress
 * @see DKTools.Window.prototype.standardArrowStateNormal
 * @see DKTools.Window.prototype.standardArrowStatePressed
 */
DKTools.Window.prototype.createArrows = function() {
    const w = this._width;
    const h = this._height;
    const q = 12;

    if (this.needsCreateDownArrowSprite()) {
        this.createArrow('down', 'down', {
            x: w / 2,
            y: h - q,
            onUpdate: this.onDownArrowUpdate.bind(this),
            onMouseClick: this.onDownArrowMouseClick.bind(this),
            onMouseLongPress: this.onDownArrowMouseLongPress.bind(this),
            onStateNormal: this.standardArrowStateNormal(),
            onStatePressed: this.standardArrowStatePressed()
        });
    }

    if (this.needsCreateUpArrowSprite()) {
        this.createArrow('up', 'up', {
            x: w / 2,
            y: q,
            onUpdate: this.onUpArrowUpdate.bind(this),
            onMouseClick: this.onUpArrowMouseClick.bind(this),
            onMouseLongPress: this.onUpArrowMouseLongPress.bind(this),
            onStateNormal: this.standardArrowStateNormal(),
            onStatePressed: this.standardArrowStatePressed()
        });
    }

    if (this.needsCreateRightArrowSprite()) {
        this.createArrow('right', 'right', {
            x: w - q,
            y: h / 2,
            onUpdate: this.onRightArrowUpdate.bind(this),
            onMouseClick: this.onRightArrowMouseClick.bind(this),
            onMouseLongPress: this.onRightArrowMouseLongPress.bind(this),
            onStateNormal: this.standardArrowStateNormal(),
            onStatePressed: this.standardArrowStatePressed()
        });
    }

    if (this.needsCreateLeftArrowSprite()) {
        this.createArrow('left', 'left', {
            x: q,
            y: h / 2,
            onUpdate: this.onLeftArrowUpdate.bind(this),
            onMouseClick: this.onLeftArrowMouseClick.bind(this),
            onMouseLongPress: this.onLeftArrowMouseLongPress.bind(this),
            onStateNormal: this.standardArrowStateNormal(),
            onStatePressed: this.standardArrowStatePressed()
        });
    }
};

// add methods

/**
 * Adds children objects to processing
 *
 * @override
 */
DKTools.Window.prototype.addAllChildren = function() {
    DKTools.Base.prototype.addAllChildren.call(this);
    this.addContentsSprite();
};

/**
 * Adds the sprite of the contents to processing
 */
DKTools.Window.prototype.addContentsSprite = function() {
    this._addContentsSprite();
    this._refreshContents();
};

// refresh methods

/**
 * Refreshes the arrows
 *
 * @since 2.0.0
 */
DKTools.Window.prototype.refreshArrows = function() {
    _.forEach(this._arrows, function(arrow) {
        arrow.refreshAll();
    });
};

// redraw methods

/**
 * Redraws all
 *
 * @version 1.1.0
 */
DKTools.Window.prototype.redrawAll = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.redrawAll();
    }
};

// can methods

/**
 * Returns true if the window can be updated and redrawn
 *
 * @since 1.1.0
 * @override
 * @returns {Boolean} Window can be updated and redrawn
 */
DKTools.Window.prototype.canRedrawAll = function() {
    return this.hasContentsSprite() && DKTools.Base.prototype.canRedrawAll.call(this);
};

// draw methods

/**
 * Draws the text
 *
 * @override
 *
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 * @see DKTools.Sprite.prototype.drawText
 */
DKTools.Window.prototype.drawText = function(text, options) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.drawText(text, options);
    }
};

// frame methods

/**
 * Shows the frame
 */
DKTools.Window.prototype.showFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = true;
    }
};

/**
 * Hides the frame
 */
DKTools.Window.prototype.hideFrame = function() {
    if (this.hasFrameSprite()) {
        this._windowFrameSprite.visible = false;
    }
};

// back methods

/**
 * Shows the background
 *
 * @see DKTools.Window.prototype.hasBackSprite
 */
DKTools.Window.prototype.showBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = true;
    }
};

/**
 * Hides the background
 *
 * @see DKTools.Window.prototype.hasBackSprite
 */
DKTools.Window.prototype.hideBack = function() {
    if (this.hasBackSprite()) {
        this._windowBackSprite.visible = false;
    }
};

// contents methods

/**
 * Shows the contents
 *
 * @param {Boolean} [activate=false] - Activates the contents
 *
 * @see DKTools.Window.prototype.hasContentsSprite
 */
DKTools.Window.prototype.showContents = function(activate) {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.show(activate);
    }
};

/**
 * Hides the contents
 */
DKTools.Window.prototype.hideContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.hide();
    }
};

// is method

/**
 * Returns true if the window is open and visible
 *
 * @returns {Boolean} Window is open and visible
 */
DKTools.Window.prototype.isOpenAndVisible = function() {
    return this.isOpen() && this.isVisible();
};

/**
 * Returns true if the window is open and active
 *
 * @returns {Boolean} Window is open and active
 */
DKTools.Window.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.isActive();
};

/**
 * Returns true if the coordinates is inside the window
 *
 * @override
 *
 * @param {Number} x - The X coordinate
 * @param {Number} y - The Y coordinate
 *
 * @returns {Boolean} Coordinates is inside the window
 */
DKTools.Window.prototype.isInside = function(x, y) {
    const localX = this.canvasToLocalX(x);
    const localY = this.canvasToLocalY(y);
    const frame = new Rectangle(0, 0, this.width, this.height);

    return frame.contains(localX, localY);
};

// has methods

/**
 * Returns true if the window has the container of the sprites
 *
 * @returns {Boolean} Window has the container of the sprites
 */
DKTools.Window.prototype.hasSpriteContainer = function() {
    return !!this._windowSpriteContainer;
};

/**
 * Returns true if the window has the sprite of the background
 *
 * @returns {Boolean} Window has the sprite of the background
 */
DKTools.Window.prototype.hasBackSprite = function() {
    return !!this._windowBackSprite;
};

/**
 * Returns true if the window has the sprite of the frame
 *
 * @returns {Boolean} Window has the sprite of the frame
 */
DKTools.Window.prototype.hasFrameSprite = function() {
    return !!this._windowFrameSprite;
};

/**
 * Returns true if the window has the sprite of the contents
 *
 * @returns {Boolean} Window has the sprite of the contents
 */
DKTools.Window.prototype.hasContentsSprite = function() {
    return !!this._windowContentsSprite;
};

/**
 * Returns true if the window has the arrow by ID
 *
 * @param {Number | String | *} id - ID of the arrow
 *
 * @see DKTools.Window.prototype.getArrow
 *
 * @returns {Boolean} Window has the arrow by ID
 */
DKTools.Window.prototype.hasArrow = function(id) {
    return !!this.getArrow(id);
};

/**
 * Returns true if the window has the sprites of the arrows
 *
 * @returns {Boolean} Window has the sprites of the arrows
 */
DKTools.Window.prototype.hasArrowSprites = function() {
    return this.hasUpArrowSprite() && this.hasDownArrowSprite() &&
            this.hasLeftArrowSprite() && this.hasRightArrowSprite();
};

/**
 * Returns true if the window has the sprite of the arrow of up
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of up
 */
DKTools.Window.prototype.hasUpArrowSprite = function() {
    return this.hasArrow('up');
};

/**
 * Returns true if the window has the sprite of the arrow of down
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of down
 */
DKTools.Window.prototype.hasDownArrowSprite = function() {
    return this.hasArrow('down');
};

/**
 * Returns true if the window has the sprite of the arrow of left
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of left
 */
DKTools.Window.prototype.hasLeftArrowSprite = function() {
    return this.hasArrow('left');
};

/**
 * Returns true if the window has the sprite of the arrow of right
 *
 * @see DKTools.Window.prototype.hasArrow
 *
 * @returns {Boolean} Window has the sprite of the arrow of right
 */
DKTools.Window.prototype.hasRightArrowSprite = function() {
    return this.hasArrow('right');
};

/**
 * Returns true if the window has the sprite of the pause sign
 *
 * @returns {Boolean} Window has the sprite of the pause sign
 */
DKTools.Window.prototype.hasPauseSignSprite = function() {
    return !!this._windowPauseSignSprite;
};

/**
 * Returns true if the window has the sprite of the background dimmer
 *
 * @returns {Boolean} Window has the sprite of the background dimmer
 */
DKTools.Window.prototype.hasBackgroundDimmer = function() {
    return !!this._dimmerSprite;
};

// active methods

/**
 * Activates the window
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
 * Deactivates the window
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
 * Changes the size of the window if they are different from the current ones
 * Returns true if the change occurred
 *
 * @override
 *
 * @param {Number} [width] - Width of the window
 * @param {Number} [height] - Height of the window
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @param {Boolean} [activate=false] - Activates the window
 *
 * @see DKTools.Window.prototype.getMinWidth
 * @see DKTools.Window.prototype.getMinHeight
 * @see DKTools.Window.prototype.setupSize
 * @see DKTools.Window.prototype.start
 *
 * @returns {Boolean} Change occurred
 */
DKTools.Window.prototype.resize = function(width, height, blockStart, activate) {
    width = (width == null ? this.getMinWidth() : width);
    height = (height == null ? this.getMinHeight() : height);

    if (DKTools.Utils.isString(height)) {
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
 * Loads and returns a bitmap from img/animations/
 *
 * @method DKTools.Window.prototype.loadAnimation
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/battleback1/
 *
 * @method DKTools.Window.prototype.loadBattleback1
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/battleback2/
 *
 * @method DKTools.Window.prototype.loadBattleback2
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/enemies/
 *
 * @method DKTools.Window.prototype.loadEnemy
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/characters/
 *
 * @method DKTools.Window.prototype.loadCharacter
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/faces/
 *
 * @method DKTools.Window.prototype.loadFace
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/parallaxes/
 *
 * @method DKTools.Window.prototype.loadParallax
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/pictures/
 *
 * @method DKTools.Window.prototype.loadPicture
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/sv_actors/
 *
 * @method DKTools.Window.prototype.loadSvActor
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/sv_enemies/
 *
 * @method DKTools.Window.prototype.loadSvEnemy
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/system/
 *
 * @method DKTools.Window.prototype.loadSystem
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/tilesets/
 *
 * @method DKTools.Window.prototype.loadTileset
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/titles1/
 *
 * @method DKTools.Window.prototype.loadTitle1
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/titles2/
 *
 * @method DKTools.Window.prototype.loadTitle2
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap from img/system/
 *
 * @method DKTools.Window.prototype.loadWindowskin
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Window.prototype.loadSystem
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads and returns a bitmap
 *
 * @param {String | Object} object - Path to file or object with parameters
 * @param {String} filename - Name of file (if object is String)
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 *
 * @see DKTools.Utils.Bitmap.load
 *
 * @returns {Bitmap} Loaded bitmap
 */
DKTools.Window.prototype.loadBitmap = function(object, filename, listener, hue, smooth) {
    return DKTools.Utils.Bitmap.load(object, filename, listener, hue, smooth);
};

// reserve methods

/**
 * Loads, reserves and returns a bitmap from img/animations/
 *
 * @method DKTools.Window.prototype.reserveAnimation
 * 
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/battleback1/
 *
 * @method DKTools.Window.prototype.reserveBattleback1
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/battleback2/
 *
 * @method DKTools.Window.prototype.reserveBattleback2
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/enemies/
 *
 * @method DKTools.Window.prototype.reserveEnemy
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/characters/
 *
 * @method DKTools.Window.prototype.reserveCharacter
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/faces/
 *
 * @method DKTools.Window.prototype.reserveFace
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/parallaxes/
 *
 * @method DKTools.Window.prototype.reserveParallax
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/pictures/
 *
 * @method DKTools.Window.prototype.reservePicture
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/sv_actors/
 *
 * @method DKTools.Window.prototype.reserveSvActor
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/sv_enemies/
 *
 * @method DKTools.Window.prototype.reserveSvEnemy
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/system/
 *
 * @method DKTools.Window.prototype.reserveSystem
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/tilesets/
 *
 * @method DKTools.Window.prototype.reserveTileset
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/titles1/
 *
 * @method DKTools.Window.prototype.loadTitle1
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/titles2/
 *
 * @method DKTools.Window.prototype.loadTitle2
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveBitmap
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap from img/system/
 *
 * @method DKTools.Window.prototype.reserveWindowskin
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Window.prototype.reserveSystem
 *
 * @returns {Bitmap} Loaded bitmap
 */

/**
 * Loads, reserves and returns a bitmap
 * 
 * @param {String | Object} object - Path to file or object with parameters
 * @param {String} filename - Name of file (if object is String)
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 * @param {Number} [hue] - Hue of bitmap (if object is String)
 * @param {Boolean} [smooth] - Smooth of bitmap (if object is String)
 * @param {Number} [reservationId] - Reservation ID (if object is String)
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 * @param {Number} [object.reservationId] - Reservation ID
 *
 * @see DKTools.Utils.Bitmap.reserve
 * 
 * @returns {Bitmap} Loaded bitmap
 */
DKTools.Window.prototype.reserveBitmap = function(object, filename, listener, hue, smooth, reservationId) {
    return DKTools.Utils.Bitmap.reserve(object, filename, listener, hue, smooth, reservationId);
};

// events methods

/**
 * Updates the events with type: open
 */
DKTools.Window.prototype.updateOpenEvents = function() {
    this.updateEventsContainer('open');
};

/**
 * Updates the events with type: close
 */
DKTools.Window.prototype.updateCloseEvents = function() {
    this.updateEventsContainer('close');
};

// arrow methods

/**
 * Callback function that will be processing update of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpArrowUpdate = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing update of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onDownArrowUpdate = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing update of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLeftArrowUpdate = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing update of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onRightArrowUpdate = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing click of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpArrowMouseClick = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing click of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onDownArrowMouseClick = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing click of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLeftArrowMouseClick = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing click of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onRightArrowMouseClick = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing long press of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onUpArrowMouseLongPress = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing long press of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onDownArrowMouseLongPress = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing long press of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onLeftArrowMouseLongPress = function(event) {
    // to be overriden by plugins
};

/**
 * Callback function that will be processing long press of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.prototype.onRightArrowMouseLongPress = function(event) {
    // to be overriden by plugins
};

// _update methods

/**
 * Updates the contents
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
 * Updates the sprite of the pause sign
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
 * Updates all
 *
 * @override
 */
DKTools.Window.prototype.updateAll = function() {
    if (this.hasContentsSprite()) {
        this.updateContents();
    }

    DKTools.Base.prototype.updateAll.call(this);
    this.updateTone();
};

/**
 * Updates the contents
 */
DKTools.Window.prototype.updateContents = function() {
    if (this.hasContentsSprite()) {
        this._windowContentsSprite.updateAll();
    }
};

/**
 * Updates the transform
 *
 * @override
 *
 * @see DKTools.Window.prototype._updateContents
 * @see DKTools.Window.prototype._updatePauseSign
 * @see PIXI.Container.prototype.updateTransform
 */
DKTools.Window.prototype.updateTransform = function() {
    this._updateContents();
    this._updatePauseSign();
    PIXI.Container.prototype.updateTransform.call(this);
};

/**
 * Updates the opaciy of thw window
 *
 * @override
 *
 * @param {Object} [opacity] - Opacity
 *
 * @param {Number} [opacity.windowOpacity] - Opacity of the window
 * @param {Number} [opacity.contentsOpacity] - Opacity of the contents
 * @param {Number} [opacity.frameOpacity] - Opacity of the frame
 * @param {Number} [opacity.backOpacity] - Opacity of the background
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
 * Updates the tone of the window
 *
 * @override
 *
 * @see Window.prototype.setTone
 *
 * @param {Number[]} [tone] - Tone of the window
 */
DKTools.Window.prototype.updateTone = function(tone) {
    tone = tone || this.tone;

    if (this.hasBackSprite()) {
        Window.prototype.setTone.apply(this, tone);
    }
};

/**
 * Updates the opening of the window
 *
 * @override
 */
DKTools.Window.prototype.updateOpen = function() {
	if (!this._opening) {
        return;
    }

    this.openness += this.standardOpennessSpeed();
    
	if (this.isOpen()) {
		this._opening = false;
        this.updateOpenEvents();
	}
};

/**
 * Updates the closing of the window
 *
 * @override
 */
DKTools.Window.prototype.updateClose = function() {
	if (!this._closing) {
        return;
    }

    this.openness -= this.standardOpennessSpeed();
    
	if (this.isClosed()) {
		this._closing = false;
        this.updateCloseEvents();
	}
};

/**
 * Updates the window
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
// DKTools.Window.Selectable
//===========================================================================

DKTools.Window.Selectable.prototype = Object.create(DKTools.Window.prototype);
DKTools.Window.Selectable.prototype.constructor = DKTools.Window.Selectable;

// standard methods

/**
 * Returns the standard sprite of the contents
 *
 * @override
 *
 * @see DKTools.Sprite.Selectable
 *
 * @returns {DKTools.Sprite.Selectable} Standard sprite of the contents
 */
DKTools.Window.Selectable.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite.Selectable();
};

// needs create methods

/**
 * Returns true if needs to create the sprites of the arrows
 *
 * @override
 *
 * @returns {Boolean} Needs to create the sprites of the arrows
 */
DKTools.Window.Selectable.prototype.needsCreateArrowsSprites = function() {
    return true;
};

// arrow methods

/**
 * Callback function that will be processing update of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpArrowUpdate = function(event) {
    const arrow = event.target;
    arrow.hide();

    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        if (this.isChild(contentsSprite) &&
            contentsSprite.isVisible() &&
            contentsSprite.isSelectable() &&
            contentsSprite.isVertical()) {
                if (contentsSprite.getTopRow() > 0) {
                    arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                }
        }
    }
};

/**
 * Callback function that will be processing update of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onDownArrowUpdate = function(event) {
    const arrow = event.target;
    arrow.hide();

    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        if (this.isChild(contentsSprite) &&
            contentsSprite.isVisible() &&
            contentsSprite.isSelectable() &&
            contentsSprite.isVertical()) {
                const topRow = contentsSprite.getTopRow();
                const maxTopRow = contentsSprite.getMaxTopRow();

                if (maxTopRow > 0 && topRow < maxTopRow) {
                    arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                }
        }
    }
};

/**
 * Callback function that will be processing update of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLeftArrowUpdate = function(event) {
    const arrow = event.target;
    arrow.hide();

    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        if (this.isChild(contentsSprite) &&
            contentsSprite.isVisible() &&
            contentsSprite.isSelectable() &&
            contentsSprite.isHorizontal()) {
                if (contentsSprite.getTopCol() > 0) {
                    arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                }
        }
    }
};

/**
 * Callback function that will be processing update of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onRightArrowUpdate = function(event) {
    const arrow = event.target;
    arrow.hide();

    if (this.hasContentsSprite()) {
        const contentsSprite = this._windowContentsSprite;

        if (this.isChild(contentsSprite) &&
            contentsSprite.isVisible() &&
            contentsSprite.isSelectable() &&
            contentsSprite.isHorizontal()) {
                const topCol = contentsSprite.getTopCol();
                const maxTopCol = contentsSprite.getMaxTopCol();

                if (maxTopCol > 0 && topCol < maxTopCol) {
                    arrow.show(this.isVisibleAndActive() && contentsSprite.isActive());
                }
        }
    }
};

/**
 * Callback function that will be processing click of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpArrowMouseClick = function(event) {
    const arrow = event.target;

    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectPrev();
    }
};

/**
 * Callback function that will be processing click of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onDownArrowMouseClick = function(event) {
    const arrow = event.target;

    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectNext();
    }
};

/**
 * Callback function that will be processing click of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLeftArrowMouseClick = function(event) {
    const arrow = event.target;

    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectPrev();
    }
};

/**
 * Callback function that will be processing click of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onRightArrowMouseClick = function(event) {
    const arrow = event.target;

    if (arrow.isVisibleAndActive()) {
        this._windowContentsSprite.selectNext();
    }
};

/**
 * Callback function that will be processing long press of the up arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onUpArrowMouseLongPress = function(event) {
   this.onUpArrowMouseClick(event);
};

/**
 * Callback function that will be processing long press of the down arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onDownArrowMouseLongPress = function(event) {
    this.onDownArrowMouseClick(event);
};

/**
 * Callback function that will be processing long press of the left arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onLeftArrowMouseLongPress = function(event) {
    this.onLeftArrowMouseClick(event);
};

/**
 * Callback function that will be processing long press of the right arrow
 *
 * @param {DKTools.Event} event - Event
 *
 * @see DKTools.Window.prototype.createArrows
 */
DKTools.Window.Selectable.prototype.onRightArrowMouseLongPress = function(event) {
    this.onRightArrowMouseClick(event);
};





//===========================================================================
// DKTools.Scene
//===========================================================================

DKTools.Scene.prototype = Object.create(Scene_Base.prototype);
DKTools.Scene.prototype.constructor = DKTools.Scene;

// initialize

/**
 * Initializes a class object
 *
 * @override
 *
 * @see DKTools.Scene.prototype._clearAll
 * @see DKTools.Scene.prototype._createAll
 * @see DKTools.Scene.prototype._setupAll
 * @see DKTools.Scene.prototype._addAllChildren
 * @see Scene_Base.prototype.initialize
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
 * Clears all data
 *
 * @private
 */
DKTools.Scene.prototype._clearAll = function() {
    // to be overriden by plugins
};

// _create methods

/**
 * Creates all
 *
 * @version 2.0.0
 * @private
 * 
 * @see DKTools.Scene.prototype._createOptionManager
 * @see DKTools.Scene.prototype._createEventManager
 */
DKTools.Scene.prototype._createAll = function() {
    this._createOptionManager();
    this._createEventManager();
};

/**
 * Creates the option manager
 * 
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._createOptionManager = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.OptionManager}
     */
    this._optionManager = new DKTools.OptionManager();
};

/**
 * Creates the event manager
 *
 * @since 2.0.0
 * @private
 * 
 * @see DKTools.EventManager
 */
DKTools.Scene.prototype._createEventManager = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.EventManager}
     */
    this._eventManager = new DKTools.EventManager(this);
};

// _setup methods

/**
 * Sets all data
 *
 * @version 2.0.0
 * @private
 *
 * @see DKTools.Scene.prototype._setupOptions
 * @see DKTools.Scene.prototype._setupEvents
 * @see DKTools.Scene.prototype._setupAnimations
 */
DKTools.Scene.prototype._setupAll = function() {
    this._setupOptions();
    this._setupEvents();
    this._setupAnimations();
};

/**
 * Sets the options
 *
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupOptions = function() {
    // to be overriden by plugins
};

/**
 * Sets the events
 * 
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupEvents = function() {
    // to be overriden by plugins
};

/**
 * Sets the animations
 *
 * @since 2.0.0
 * @private
 */
DKTools.Scene.prototype._setupAnimations = function() {
    // to be overriden by plugins
};

// _add methods

/**
 * Adds children objects to processing
 *
 * @private
 */
DKTools.Scene.prototype._addAllChildren = function() {
    // to be overriden by plugins
};

// create methods

/**
 * Creates all
 *
 * @override
 *
 * @see Scene_Base.prototype.create
 * @see DKTools.Scene.prototype.createBackground
 * @see DKTools.Scene.prototype.createAllSprites
 * @see DKTools.Scene.prototype.createWindowLayer
 * @see DKTools.Scene.prototype.createAllWindows
 * @see DKTools.Scene.prototype.createForeground
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
 * Creates the background
 */
DKTools.Scene.prototype.createBackground = function() {
    // to be overriden by plugins
};

/**
 * Creates all sprites
 */
DKTools.Scene.prototype.createAllSprites = function() {
    // to be overriden by plugins
};

/**
 * Creates all windows
 */
DKTools.Scene.prototype.createAllWindows = function() {
    // to be overriden by plugins
};

/**
 * Creates the foreground
 */
DKTools.Scene.prototype.createForeground = function() {
    // to be overriden by plugins
};

// start methods

/**
 * Starts the scene
 *
 * @override
 */
DKTools.Scene.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startAllSprites();
    this.startAllWindows();
};

/**
 * Starts all sprites
 */
DKTools.Scene.prototype.startAllSprites = function() {
    // to be overriden by plugins
};

/**
 * Starts all windows
 */
DKTools.Scene.prototype.startAllWindows = function() {
    // to be overriden by plugins
};

// remove methods

/**
 * Removes the window from the scene
 *
 * @param {DKTools.Window | *} window - Window to remove
 */
DKTools.Scene.prototype.removeWindow = function(window) {
    if (this.hasWindowLayer() && this.isChild(window)) {
        this._windowLayer.removeChild(window);
    }
};

// has methods

/**
 * Returns true if the scene has the layer of windows
 *
 * @returns {Boolean} Scene has the layer of windows
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

// is methods

/**
 * Returns true if the window has the parent (if parameter is null or undefined)
 * Returns true if the window is an parent of the object (parameter)
 *
 * @param [object=undefined] - Object
 * @returns {Boolean}
 */
DKTools.Scene.prototype.isChild = function(object) {
    if (this.hasWindowLayer() && object instanceof Window) {
        return object.parent === this._windowLayer;
    }

    return object && object.parent === this;
};

// stop methods

/**
 * Stops the scene
 *
 * @override
 *
 * @see Scene_Base.prototype.stop
 * @see DKTools.Scene.prototype.stopAll
 */
DKTools.Scene.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    this.stopAll();
};

/**
 * Stops all
 */
DKTools.Scene.prototype.stopAll = function() {
    // to be overriden by plugins
};

// terminate methods

/**
 * Terminates the scene
 *
 * @override
 *
 * @see Scene_Base.prototype.terminate
 * @see DKTools.Scene.prototype.stopAll
 */
DKTools.Scene.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    this.terminateAll();
};

/**
 * Terminates all
 */
DKTools.Scene.prototype.terminateAll = function() {
    // to be overriden by plugins
};

// option methods

/**
 * Clears the options
 *
 * @since 2.0.0
 *
 * @see DKTools.OptionManager.prototype.clear
 */
DKTools.Scene.prototype.clearOptions = function() {
    this._optionManager.clear();
};

/**
 * Returns true if the option is enabled
 *
 * @since 2.0.0
 * 
 * @param {String} option - Name of the option
 * 
 * @see DKTools.OptionManager.prototype.isOptionEnabled
 * 
 * @returns {Boolean} Option is enabled
 */
DKTools.Scene.prototype.isOptionEnabled = function(option) {
    return this._optionManager.isOptionEnabled(option);
};

/**
 * Returns conjunction of the options
 *
 * @since 2.0.0
 * 
 * @param {String[] | ...String} object - Names of the options
 * 
 * @see DKTools.OptionManager.prototype.isOptionsEnabled
 * 
 * @returns {Boolean} Conjunction of the options
 */
DKTools.Scene.prototype.isOptionsEnabled = function(object) {
    return this._optionManager.isOptionsEnabled(object);
};

/**
 * Returns disjunction of the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.isSomeOptionsEnabled
 *
 * @returns {Boolean} Disjunction of the options
 */
DKTools.Scene.prototype.isSomeOptionsEnabled = function(object) {
    return this._optionManager.isSomeOptionsEnabled(object);
};

/**
 * Returns true if the option is disabled
 *
 * @since 2.0.0
 *
 * @param {String} option - Name of the option
 *
 * @see DKTools.OptionManager.prototype.isOptionDisabled
 *
 * @returns {Boolean} Option is disabled
 */
DKTools.Scene.prototype.isOptionDisabled = function(option) {
    return this._optionManager.isOptionDisabled(option);
};

/**
 * Returns conjunction of the options
 *
 * @since 2.0.0
 * 
 * @param {String[] | ...String} object - Names of the options
 * 
 * @see DKTools.OptionManager.prototype.isOptionsDisabled
 * 
 * @returns {Boolean} Conjunction of the options
 */
DKTools.Scene.prototype.isOptionsDisabled = function(object) {
    return this._optionManager.isOptionsDisabled(object);
};

/**
 * Returns disjunction of the options
 *
 * @since 2.0.0
 *
 * @param {String[] | ...String} object - Names of the options
 *
 * @see DKTools.OptionManager.prototype.isSomeOptionsDisabled
 *
 * @returns {Boolean} Disjunction of the options
 */
DKTools.Scene.prototype.isSomeOptionsDisabled = function(object) {
    return this._optionManager.isSomeOptionsDisabled(object);
};

/**
 * Returns true if some option is enabled
 *
 * @since 2.0.0
 *
 * @see DKTools.OptionManager.prototype.isSomeOptionEnabled
 *
 * @returns {Boolean} Some option is enabled
 */
DKTools.Scene.prototype.isSomeOptionEnabled = function() {
    return this._optionManager.isSomeOptionEnabled();
};

/**
 * Adds a listener of change of the option
 *
 * @since 2.0.0
 * 
 * @param {String} option - Name of the option
 * @param {Function} listener - Listener
 * 
 * @see DKTools.OptionManager.prototype.addOptionChangeListener
 */
DKTools.Scene.prototype.addOptionChangeListener = function(option, listener) {
    this._optionManager.addOptionChangeListener(options, listener);
};

/**
 * Removes the listener of change of the option
 * 
 * @since 2.0.0
 * 
 * @param {String} option - Name of the option
 * @param {Function} listener - Listener
 * 
 * @see DKTools.OptionManager.prototype.removeOptionsChangeListener
 */
DKTools.Scene.prototype.removeOptionChangeListener = function(option, listener) {
    this._optionManager.removeOptionsChangeListener(option, listener);
};

/**
 * Turns on the option
 *
 * @since 2.0.0
 * 
 * @param {String} option - Name of the option
 * 
 * @see DKTools.OptionManager.prototype.enableOption
 */
DKTools.Scene.prototype.enableOption = function(option) {
    this._optionManager.enableOption(option);
};

/**
 * Turns on the options
 *
 * @since 2.0.0
 * 
 * @param {String[] | ...String} object - Names of the options
 * 
 * @see DKTools.OptionManager.prototype.enableOptions
 */
DKTools.Scene.prototype.enableOptions = function(object) {
    this._optionManager.enableOption(object);
};

/**
 * Turns off the option
 *
 * @since 2.0.0
 * 
 * @param {String} option - Name of the option
 * 
 * @see DKTools.OptionManager.prototype.disableOption
 */
DKTools.Scene.prototype.disableOption = function(option) {
    this._optionManager.disableOption(option);
};

/**
 * Turns off the options
 *
 * @since 2.0.0
 * 
 * @param {String[] | ...String} object - Names of the options
 * 
 * @see DKTools.OptionManager.prototype.disableOptions
 */
DKTools.Scene.prototype.disableOptions = function(object) {
    this._optionManager.disableOption(object);
};

/**
 * Switches the option
 *
 * @since 2.0.0
 * 
 * @param {String} option - Name of the option
 * 
 * @see DKTools.OptionManager.prototype.switchOption
 */
DKTools.Scene.prototype.switchOption = function(option) {
    this._optionManager.disableOption(option);
};

/**
 * Switches the options
 *
 * @since 2.0.0
 * 
 * @param {String[] | ...String} object - Names of the options
 * 
 * @see DKTools.OptionManager.prototype.switchOptions
 */
DKTools.Scene.prototype.switchOptions = function(object) {
    this._optionManager.switchOptions(object);
};

// events methods

/**
 * Clears the events
 *
 * @version 2.0.0
 *
 * @param {String[] | String} object Array with event types or event type
 *
 * @see DKTools.EventManager.prototype.clearEvents
 */
DKTools.Scene.prototype.clearEvents = function(object) {
    this._eventManager.clearEvents(object);
};

/**
 * Removes the event from a container
 * Returns true if the event was removed
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.removeEvent
 *
 * @returns {Boolean} Event was removed
 */
DKTools.Scene.prototype.removeEvent = function(event) {
    return this._eventManager.removeEvent(event);
};

/**
 * Performs a callback function for the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 * @param {Function} callback - Event processing function
 *
 * @see DKTools.EventManager.prototype.iterateEventsContainer
 */
DKTools.Scene.prototype.iterateEventsContainer = function(type, callback) {
    this._eventManager.iterateEventsContainer(type, callback);
};

/**
 * Checks the events for pause
 * Returns the conjunction of pauses of the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 *
 * @see DKTools.EventManager.prototype.isEventsPaused
 *
 * @returns {Boolean} Conjunction of pauses of the events
 */
DKTools.Scene.prototype.isEventsPaused = function(type) {
    return this._eventManager.isEventsPaused(type);
};

/**
 * Pauses the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 * @param {Number} duration - Duration of pause
 *
 * @see DKTools.EventManager.prototype.pauseEvents
 */
DKTools.Scene.prototype.pauseEvents = function(type, duration) {
    this._eventManager.pauseEvents(type, duration);
};

/**
 * Resumes the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 *
 * @see DKTools.EventManager.prototype.resumeEvents
 */
DKTools.Scene.prototype.resumeEvents = function(type) {
    this._eventManager.resumeEvents(type);
};

/**
 * Finishes the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
 *
 * @see DKTools.EventManager.prototype.finishEvents
 */
DKTools.Scene.prototype.finishEvents = function(type, forcedSuccess) {
    this._eventManager.finishEvents(type, forcedSuccess);
};

/**
 * Stops the events
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 * @param {Boolean} [forcedSuccess] - Forced success for the finish of the events
 *
 * @see DKTools.EventManager.prototype.stopEvents
 */
DKTools.Scene.prototype.stopEvents = function(type, forcedSuccess) {
    this._eventManager.stopEvents(type, forcedSuccess);
};

/**
 * Updates the events
 *
 * @since 2.0.0
 *
 * @see DKTools.EventManager.prototype.update
 * @see DKTools.Base.protoype.updateReadyEvents
 * @see DKTools.Base.protoype.updateUpdateEvents
 * @see DKTools.Base.protoype.updateQueueEvents
 * @see DKTools.Base.protoype.updateWheelEvents
 */
DKTools.Scene.prototype.updateEvents = function() {
    this._eventManager.update();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateQueueEvents();
};

/**
 * Updates the event
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.updateEvent
 */
DKTools.Scene.prototype.updateEvent = function(event) {
    this._eventManager.updateEvent(event);
};

/**
 * Updates the events from container
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 *
 * @see DKTools.EventManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateEventsContainer = function(type) {
    this._eventManager.updateEventsContainer(type);
};

/**
 * Updates the events with type: ready
 *
 * @since 2.0.0
 *
 * @see DKTools.EventManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this.updateEventsContainer('ready');
    }
};

/**
 * Updates the events with type: update
 *
 * @since 2.0.0
 *
 * @see DKTools.EventManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateUpdateEvents = function() {
    this.updateEventsContainer('update');
};

/**
 * Updates the events with type: queue
 *
 * @since 2.0.0
 *
 * @see DKTools.EventManager.prototype.updateEventsContainer
 */
DKTools.Scene.prototype.updateQueueEvents = function() {
    const container = this.getEventsContainerByType('queue');
    const event = container[0];
    this.updateEvent(event);
};

/**
 * Returns a container for the events by event type
 *
 * @since 2.0.0
 *
 * @param {String} type - Type of the events
 *
 * @see DKTools.EventManager.prototype.getEventsContainerByType
 *
 * @returns {Array} Container for the events
 */
DKTools.Scene.prototype.getEventsContainerByType = function(type) {
    return this._eventManager.getEventsContainerByType(type);
};

/**
 * Returns a container for the events by event
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.getEventsContainer
 *
 * @returns {Array} Container for the events
 */
DKTools.Scene.prototype.getEventsContainer = function(event) {
    return this._eventManager.getEventsContainer(event);
};

/**
 * Returns an index of the event in its container
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.getEventIndex
 *
 * @returns {Number} Index of the event in its container
 */
DKTools.Scene.prototype.getEventIndex = function(event) {
    return this._eventManager.getEventIndex(event);
};

/**
 * Returns an array with the all events or events of a certain type
 *
 * @since 2.0.0
 *
 * @param {String} [type] - Type of the events
 *
 * @see DKTools.EventManager.prototype.getEvents
 *
 * @returns {Array} Array with the events
 */
DKTools.Scene.prototype.getEvents = function(type) {
    return this._eventManager.getEvents(type);
};

/**
 * Returns an array with the all animations or animations of a certain type
 *
 * @since 2.0.0
 *
 * @param {String} [type] - Type of animation
 *
 * @see DKTools.EventManager.prototype.getAnimations
 *
 * @returns {Array} Array with the animations
 */
DKTools.Scene.prototype.getAnimations = function(type) {
    return this._eventManager.getAnimations(type);
};

/**
 * Checks for existence of the event in the object
 * Returns true if the event exists
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | DKTools.Animation} event - Event
 *
 * @see DKTools.EventManager.prototype.hasEvent
 *
 * @returns {Boolean} Event exists
 */
DKTools.Scene.prototype.hasEvent = function(event) {
    return this._eventManager.hasEvent(event);
};

/**
 * Checks for existence of the events of a certain type
 * Returns true if the events exists
 *
 * @since 2.0.0
 *
 * @param {String} [type] - Type of the Events
 *
 * @see DKTools.EventManager.prototype.hasEvents
 *
 * @returns {Boolean} Events exists
 */
DKTools.Scene.prototype.hasEvents = function(type) {
    return this._eventManager.hasEvents(type);
};

/**
 * Checks for existence of the animation in the object
 * Returns true if the animation exists
 *
 * @since 2.0.0
 *
 * @param {DKTools.Animation} animation - Animation
 *
 * @see DKTools.EventManager.prototype.hasAnimation
 *
 * @returns {Boolean} Animation exists
 */
DKTools.Scene.prototype.hasAnimation = function(animation) {
    return this._eventManager.hasAnimation(animation);
};

/**
 * Checks for existence of the animations of a certain type
 * Returns true if the animations exists
 *
 * @since 2.0.0
 *
 * @param {String} [type] - Type of the animations
 *
 * @see DKTools.EventManager.prototype.hasAnimations
 *
 * @returns {Boolean} Animations exists
 */
DKTools.Scene.prototype.hasAnimations = function(type) {
    return this._eventManager.hasAnimations(type);
};

/**
 * Adds the event
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | Object} object - Event or object with parameters for the event
 *
 * @param {String} [object.type] - Type of the event
 * @param {Number} [object.repeatTime] - Time of one repeat
 * @param {Number} [object.repeats] - Amount of repeats
 * @param {Number} [object.remainingPauseTime] - Remaining time of pause
 * @param {Function} [object.onStart] - Handler of the event start
 * @param {Function} [object.onUpdate] - Handler of the event update
 * @param {Function} [object.onPause] - Handler of the event pause
 * @param {Function} [object.onReset] - Handler of the event reset
 * @param {Function} [object.onRepeat] - Handler of the event repeat
 * @param {Function} [object.onSuccess] - Handler of the event success
 * @param {Function} [object.onFail] - Handler of the event fail
 *
 * @see DKTools.Event
 * @see DKTools.EventManager.prototype.addEvent
 *
 * @returns {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addEvent = function(object) {
    return this._eventManager.addEvent(object);
};

/**
 * Adds the one time event
 *
 * @since 2.0.0
 *
 * @param {DKTools.Event | Object} object - Event or object with parameters for the event
 *
 * @param {String} [object.type] - Type of the event
 * @param {Number} [object.remainingPauseTime] - Remaining time of pause
 * @param {Function} [object.onStart] - Handler of the event start
 * @param {Function} [object.onUpdate] - Handler of the event update
 * @param {Function} [object.onPause] - Handler of the event pause
 * @param {Function} [object.onReset] - Handler of the event reset
 * @param {Function} [object.onRepeat] - Handler of the event repeat
 * @param {Function} [object.onSuccess] - Handler of the event success
 * @param {Function} [object.onFail] - Handler of the event fail
 *
 * @see DKTools.Event
 * @see DKTools.EventManager.prototype.addOneTimeEvent
 *
 * @returns {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addOneTimeEvent = function(object) {
    return this._eventManager.addOneTimeEvent(object);
};

/**
 * Adds the animation
 *
 * @since 2.0.0
 *
 * @param {DKTools.Animation} animation - Animation to add
 *
 * @see DKTools.EventManager.addAnimation
 */
DKTools.Scene.prototype.addAnimation = function(animation) {
    this._eventManager.addAnimation(animation);
};

// other methods

/**
 * Calls the callback function for the child objects
 *
 * @param {Function} callback - Function for the child objects
 */
DKTools.Scene.prototype.iterateChildren = function(callback) {
    _.forEach(this.children, callback);
};

// update methods

/**
 * Updates the scene
 *
 * @version 2.0.0
 * @override
 *
 * @see DKTools.Scene.prototype.updateChildren
 * @see DKTools.Scene.prototype.updateFade
 */
DKTools.Scene.prototype.update = function() {
    this.updateChildren();
    this.updateFade();
    this.updateEvents();
};

/**
 * Updates the child object
 *
 * @param {*} child - Child object
 */
DKTools.Scene.prototype.updateChild = function(child) {
    if (child && DKTools.Utils.isFunction(child.update)) {
        child.update();
    }
};

/**
 * Updates the child objects
 *
 * @override
 *
 * @see DKTools.Scene.prototype.iterateChildren
 * @see DKTools.Scene.prototype.updateChild
 */
DKTools.Scene.prototype.updateChildren = function() {
    this.iterateChildren(this.updateChild);
};

/**
 * Updates the events
 * 
 * @since 2.0.0
 */
DKTools.Scene.prototype.updateEvents = function() {
    this._eventManager.update();
};





//===========================================================================
// initialize parameters
//===========================================================================

/**
 * @global
 * @readonly
 * @type {DKTools.ParameterManager}
 */
const DKToolsParam = new DKTools.ParameterManager('DKTools');





//===========================================================================
// window
//===========================================================================

const DKTools_window_onload = window.onload;
window.onload = function() {
    DKTools.Utils.initialize();
    DKTools.IO.initialize();
    DKTools_window_onload.call(this);
    DKTools.PluginManager.initialize();
    DKTools.PreloadManager.initialize();
};





//===========================================================================
// ImageCache
//===========================================================================

const DKTools_ImageCache_get = ImageCache.prototype.get;
ImageCache.prototype.get = function(key) {
    return DKTools_ImageCache_get.call(this, key) || DKTools.PreloadManager.getCachedBitmapByKey(key);
};





//===========================================================================
// Graphics
//===========================================================================

const DKTools_Graphics_initialize = Graphics.initialize;
Graphics.initialize = function(width, height, type) {
    DKTools_Graphics_initialize.call(this, width, height, type);

    if (Utils.isOptionValid('test') && DKToolsParam.get('Show FPS')) {
        this.showFps();
    }
};

const DKTools_Graphics_printLoadingError = Graphics.printLoadingError;
Graphics.printLoadingError = function(url) {
    DKTools_Graphics_printLoadingError.call(this, url);
    SceneManager._logError(`Failed to load: ${url}`);
};





//===========================================================================
// TouchInput
//===========================================================================

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
 * Returns true if the mouse is moving
 *
 * @static
 * @returns {Boolean} Mouse is moving
 */
TouchInput.isMouseMoved = function() {
    return this._mouseMoved;
};

/**
 * Returns true if the mouse is pressed (left, middle or right button)
 *
 * @static
 * @returns {Boolean} Mouse is pressed (left, middle or right button)
 */
TouchInput.isMousePressed = function() {
    return this.isLeftButtonPressed() || this.isMiddleButtonPressed() || this.isRightButtonPressed();
};

/**
 * Returns true if the mouse is released (left, middle or right button is released)
 *
 * @static
 * @returns {Boolean} Mouse is released (left, middle or right button is released)
 */
TouchInput.isMouseReleased = function() {
    return this.isLeftButtonReleased() || this.isMiddleButtonReleased() || this.isRightButtonReleased();
};

/**
 * Returns true if the left mouse button is pressed
 *
 * @static
 * @returns {Boolean} Left mouse button is pressed
 */
TouchInput.isLeftButtonPressed = function() {
    return this._leftButtonPressed;
};

/**
 * Returns true if the left mouse button is released
 *
 * @static
 * @returns {Boolean} Left mouse button is released
 */
TouchInput.isLeftButtonReleased = function() {
    return this._leftButtonReleased;
};

/**
 * Returns true if the middle mouse button is pressed
 *
 * @static
 * @returns {Boolean} Middle mouse button is pressed
 */
TouchInput.isMiddleButtonPressed = function() {
    return this._middleButtonPressed;
};

/**
 * Returns true if the middle mouse button is released
 *
 * @static
 * @returns {Boolean} Middle mouse button is released
 */
TouchInput.isMiddleButtonReleased = function() {
    return this._middleButtonReleased;
};

/**
 * Returns true if the right mouse button is pressed
 *
 * @static
 * @returns {Boolean} Right mouse button is pressed
 */
TouchInput.isRightButtonPressed = function() {
    return this._rightButtonPressed;
};

/**
 * Returns true if the right mouse button is released
 *
 * @static
 * @returns {Boolean} Right mouse button is released
 */
TouchInput.isRightButtonReleased = function() {
    return this._rightButtonReleased;
};

// event methods

const DKTools_TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
TouchInput._onLeftButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onLeftButtonDown.call(this, event);

    if (Graphics.isInsideCanvas(x, y)) {
        this._events.leftButtonPressed = true;
    }
};

const DKTools_TouchInput_onMiddleButtonDown = TouchInput._onMiddleButtonDown;
TouchInput._onMiddleButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMiddleButtonDown.call(this, event);

    if (Graphics.isInsideCanvas(x, y)) {
        this._events.middleButtonPressed = true;
    }
};

const DKTools_TouchInput_onRightButtonDown = TouchInput._onRightButtonDown;
TouchInput._onRightButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onRightButtonDown.call(this, event);

    if (Graphics.isInsideCanvas(x, y)) {
        this._events.rightButtonPressed = true;
    }
};

const DKTools_TouchInput_onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMouseMove.call(this, event);

    if (this._mouseX !== x || this._mouseY !== y) {
        this._events.mouseMoved = true;
        this._mouseX = x;
        this._mouseY = y;
    }
};

const DKTools_TouchInput_onMouseUp = TouchInput._onMouseUp;
TouchInput._onMouseUp = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMouseUp.call(this, event);

    this._events.leftButtonPressed = false;
    this._events.middleButtonPressed = false;
    this._events.rightButtonPressed = false;

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

// properties

Object.defineProperties(TouchInput, {

    /**
     * The X coordinate of the mouse
     *
     * @readonly
     * @type {Number}
     * @memberof TouchInput
     */
    mouseX: {
        get: function() {
            return this._mouseX;
        },
        configurable: true
    },

    /**
     * The Y coordinate of the mouse
     *
     * @readonly
     * @type {Number}
     * @memberof TouchInput
     */
    mouseY: {
        get: function() {
            return this._mouseY;
        },
        configurable: true
    }

});





//===========================================================================
// SceneManager
//===========================================================================

const DKTools_SceneManager_initGraphics = SceneManager.initGraphics;
SceneManager.initGraphics = function() {
    const param = DKToolsParam.get('Screen Resolution');
    const width = param['Screen Width'];
    const height = param['Screen Height'];

    if (param['Enabled']) {
        this._boxWidth = width;
        this._screenWidth = width;
        this._boxHeight = height;
        this._screenHeight = height;

        DKTools_SceneManager_initGraphics.call(this);

        if (DKTools.Utils.isNwjs()) {
            this.updateResolution();
        }
    } else {
        DKTools_SceneManager_initGraphics.call(this);
    }
};

SceneManager.updateResolution = function() {
    const resizeWidth = this._screenWidth - window.innerWidth;
    const resizeHeight = this._screenHeight - window.innerHeight;

    if (!Imported.ScreenResolution && resizeWidth && resizeHeight) {
        window.moveBy(-1 * resizeWidth / 2, -1 * resizeHeight / 2);
        window.resizeBy(resizeWidth, resizeHeight);
    }
};

SceneManager._logError = function(e) {
    if (!e || !DKTools.IO.isLocalMode()) {
        return;
    }

    const param = DKToolsParam.get('Errors Log');
    const enabled = param['Enabled'];

    if (enabled === 'None' ||
        enabled === 'Only Game' && Utils.isOptionValid('test') ||
        enabled === 'Only Test' && !Utils.isOptionValid('test')) {
        return;
    }

    const fs = DKTools.IO.fs;
    const os = require('os');

    if (!fs || !os) {
        return;
    }

    const fileSize = param['File Size'] * 1024 * 1024;
    const filename = param['Filename'];
    const file = new DKTools.IO.File(filename);
    const stats = file.getStats({ sync: true }).data;
    let fileDescription = fs.openSync(filename, 'a');

    if (stats && stats.size > fileSize) {
        fs.closeSync(fileDescription);
        file.remove({ sync: true });
        fileDescription = fs.openSync(filename, 'a');
    }

    if (e instanceof Object) {
        let data = `Date: ${new Date().toString()}` + os.EOL +
            `Name: ${e.name}` + os.EOL +
            `Message: ${e.message}` + os.EOL;

        if (e.filename != undefined) {
            data += `Filename: ${e.filename}` + os.EOL;
        }

        if (e.lineNumber !== undefined) {
            data += `Line: ${e.lineNumber}` + os.EOL;
        }

        if (e.columnNumber !== undefined) {
            data += `Column: ${e.columnNumber}` + os.EOL;
        }

        data += `Stack: ${e.stack}` + os.EOL + os.EOL;

        fs.writeSync(fileDescription, data);
    } else {
        const data = `Date: ${new Date().toString()}` + os.EOL +
            `Error: ${e}` + os.EOL + os.EOL;

        fs.writeSync(fileDescription, data);
    }

    fs.closeSync(fileDescription);
};

const DKTools_SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
    DKTools_SceneManager_onKeyDown.call(this, event);

    if (event.ctrlKey || event.altKey) {
        return;
    }

    const quickLoadKeyCode = DKToolsParam.get('Quick Load', 'Key Code');
    const screenshotKeyCode = DKToolsParam.get('Screenshots', 'Key Code');
    const keyCode = event.keyCode;

    if (keyCode === quickLoadKeyCode &&
        Utils.isOptionValid('test') &&
        DKToolsParam.get('Quick Load', 'Enabled')) {
        const savefileId = DKToolsParam.get('Quick Load', 'Savefile ID');
        const scene = SceneManager._scene;

        if (savefileId > 0) {
            if (DataManager.loadGame(savefileId)) {
                SoundManager.playLoad();

                if (scene instanceof Scene_Base) {
                    scene.fadeOutAll();
                }

                if ($gameSystem.versionId() !== $dataSystem.versionId) {
                    $gamePlayer.reserveTransfer($gameMap.mapId(), $gamePlayer.x, $gamePlayer.y);
                    $gamePlayer.requestMapReload();
                }

                SceneManager.goto(Scene_Map);
            }
        } else if (!(scene instanceof Scene_Load)) {
            SceneManager.push(Scene_Load);
        }
    } else if (keyCode === screenshotKeyCode && DKToolsParam.get('Screenshots', 'Enabled')) {
        DKTools.Utils.makeScreenshot();
    }
};

const DKTools_SceneManager_catchException = SceneManager.catchException;
SceneManager.catchException = function(e) {
    DKTools_SceneManager_catchException.call(this, e);
    this._logError(e);
};

const DKTools_SceneManager_onError = SceneManager.onError;
SceneManager.onError = function(e) {
    DKTools_SceneManager_onError.call(this, e);
    this._logError(e);
};





//===========================================================================
// Scene_Boot
//===========================================================================

const DKTools_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    const quickStart = DKToolsParam.get('Quick Start');

    if (quickStart['Enabled']) {
        DKTools_Scene_Boot_start.call(this);

        if (!DataManager.isBattleTest() && !DataManager.isEventTest() &&
            (quickStart['Skip Saves']) || !DataManager.isAnySavefileExists()) {
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
// Game_Interpreter
//===========================================================================

const DKTools_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    DKTools_Game_Interpreter_pluginCommand.call(this, command, args);
    DKTools.PluginCommandManager.process(this, command, args);
};