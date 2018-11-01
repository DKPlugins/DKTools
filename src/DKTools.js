/*
Title: DKTools
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 6.1.0
Release: 01.11.2018
First release: 13.01.2016
Supported languages: Russian, English
*/

/*ru
Название: DKTools
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 6.1.0
Релиз: 01.11.2018
Первый релиз: 13.01.2016
Поддерживаемые языки: Русский, Английский
*/

/*:
* @plugindesc v.6.1.0 Library for RPG Maker. Made with ♥ by DKPlugins
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 6.1.0
 Release: 01.11.2018
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
 Version of RPG Maker 1.6+

 ### Instructions ###

 ### 1 ### Templates for the filename of the screenshot ###
 %year - Year
 %month - Month
 %day - Day
 %hours - Hours
 %minutes - Minutes
 %seconds - Seconds

 ### 2 ### Grid ###
 Available grid sizes: 64, 48, 32, 16

 ### 2.1 ### Using the ruler ###
 Move the mouse while holding down the middle key

 ### 2.2 ### Color of the ruler ###
 If the color of the ruler is not specified, random color will be selected automatically

 ### Plugin commands ###
 1. Checks for plugins updates from DKPlugins
 DKPluginsCheckUpdates

 ### Elements ###
 DKTools.Utils
 DKTools.Utils.Object
 DKTools.Utils.Number
 DKTools.Utils.String
 DKTools.Utils.Array
 DKTools.Utils.Point
 DKTools.Utils.Rectangle
 DKTools.Utils.WebAudio
 DKTools.Utils.Bitmap
 DKTools.Utils.Event
 DKTools.Utils.Random
 DKTools.IO
 DKTools.IO.Entity
 DKTools.IO.File
 DKTools.IO.Directory
 DKTools.IO.WebStorage
 DKTools.Network
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

 ### Licenses and terms of use ###

 DKTools uses a third-party library "lodash": https://lodash.com/license

 Recent information about the terms of use: https://dk-plugins.ru/terms-of-use

 You can:
 -Free to use the plugin for your commercial and non commercial projects.
 -Translate the plugin to other languages (inform if you do this)
 -Change the plugin code, but you must specify a link to the original plugin

 You can't:
 -Delete or change any information about the plugin (Title, authorship, contact information, version and release)

 * @param Functions
 * @default ---------------------------------

 * @param Check Updates
 * @parent Functions
 * @desc Check updates
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false","Show New Plugins":"false"}

 * @param Debugging Console
 * @parent Functions
 * @desc Debug console
 * @type struct<DebuggingConsole>
 * @default {"Enabled":"false","Open On Error":"false"}

 * @param FPS Meter
 * @parent Functions
 * @desc FPS Meter
 * @type struct<FPSMeter>
 * @default {"Enabled":"false","Mode":"FPS","Theme":"transparent","History":"20"}

 * @param Screen Resolution
 * @parent Functions
 * @desc Screen resolution
 * @type struct<ScreenResolution>
 * @default {"Enabled":"false","Width":"816","Height":"624"}

 * @param Quick Start
 * @parent Functions
 * @desc Quick start
 * @type struct<QuickStart>
 * @default {"Enabled":"false","Scene Name":"Scene_Map","Skip Saves":"false"}

 * @param Quick Load
 * @parent Functions
 * @desc Quick load
 * @type struct<QuickLoad>
 * @default {"Enabled":"false","Key Code":"117"}

 * @param Preload Manager
 * @parent Functions
 * @desc Preloading resources
 * @type struct<PreloadManager>
 * @default {"Enabled":"false","Debugging":"false","Images":"[]"}

 * @param Screenshots
 * @parent Functions
 * @desc Screenshots
 * @type struct<Screenshots>
 * @default {"Enabled":"false","Key Code":"44","Path":"screenshots/","Filename":"%year_%month_%day_%hours_%minutes_%seconds.png","Type":"png","Quality":"0.9"}

 * @param Errors Log
 * @parent Functions
 * @desc Errors logging
 * @type struct<ErrorsLog>
 * @default {"Enabled":"None","Filename":"errors_log.txt","File Size":"10"}

 * @param Tile Size
 * @parent Functions
 * @desc Tile size
 * @type struct<TileSize>
 * @default {"Enabled":"false","Size":"48"}

 * @param Grid
 * @parent Functions
 * @desc Displaying the grid on the screen. Details in the help (2)
 * @type struct<Grid>
 * @default {"Enabled":"false","Key Code":"118","Grid Color":"white","Grid Width":"1","Ruler Color":"","Ruler Width":"3"}

*/

/*:ru
* @plugindesc v.6.1.0 Библиотека для RPG Maker. Сделано с ♥ от DKPlugins
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 6.1.0
 Релиз: 01.11.2018
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
 Версия мейкера 1.6+

 ### Инструкции ###

 ### 1 ### Шаблоны для названия файла скриншота ###
 %year - Год
 %month - Месяц
 %day - День
 %hours - Часы
 %minutes - Минуты
 %seconds - Секунды

 ### 2 ### Сетка ###
 Доступные размеры сетки: 64, 48, 32, 16

 ### 2.1 ### Использование линейки ###
 Перемещайте мышь, удерживая среднюю клавишу

 ### 2.2 ### Цвет линейки ###
 Если не указан цвет линейки, то автоматически будет выбран случайный цвет

 ### Команды плагина ###
 1. Проверить обновления плагинов от DKPlugins
 DKPluginsCheckUpdates

 ### Элементы ###
 DKTools.Utils
 DKTools.Utils.Object
 DKTools.Utils.Number
 DKTools.Utils.String
 DKTools.Utils.Array
 DKTools.Utils.Point
 DKTools.Utils.Rectangle
 DKTools.Utils.WebAudio
 DKTools.Utils.Bitmap
 DKTools.Utils.Event
 DKTools.Utils.Random
 DKTools.IO
 DKTools.IO.Entity
 DKTools.IO.File
 DKTools.IO.Directory
 DKTools.IO.WebStorage
 DKTools.Network
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

 ### Лицензии и правила использования плагина ###

 DKTools использует стороннюю библиотеку "lodash": https://lodash.com/license

 Актуальная информация о правилах использования: https://dk-plugins.ru/terms-of-use

 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (сообщите мне, если Вы перевели плагин на другой язык)
 -Изменять код плагина, но Вы обязаны указать ссылку на оригинальный плагин

 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)

 * @param Functions
 * @text Функции
 * @default ---------------------------------

 * @param Check Updates
 * @text Проверка обновлений
 * @parent Functions
 * @desc Проверка обновлений
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false","Show New Plugins":"false"}

 * @param Debugging Console
 * @text Отладочная консоль
 * @parent Functions
 * @desc Отладочная консоль
 * @type struct<DebuggingConsole>
 * @default {"Enabled":"false","Open On Error":"false"}

 * @param FPS Meter
 * @text Счетчик FPS
 * @parent Functions
 * @desc Счетчик FPS
 * @type struct<FPSMeter>
 * @default {"Enabled":"false","Mode":"FPS","Theme":"transparent","History":"20"}

 * @param Screen Resolution
 * @text Разрешение экрана
 * @parent Functions
 * @desc Настройки разрешения экрана
 * @type struct<ScreenResolution>
 * @default {"Enabled":"false","Width":"816","Height":"624"}

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
 * @default {"Enabled":"false","Key Code":"117"}

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
 * @default {"Enabled":"false","Key Code":"44","Path":"screenshots/","Filename":"%year_%month_%day_%hours_%minutes_%seconds.png","Type":"png","Quality":"0.9"}

 * @param Errors Log
 * @text Логирование ошибок
 * @parent Functions
 * @desc Логирование ошибок
 * @type struct<ErrorsLog>
 * @default {"Enabled":"None","Filename":"errors_log.txt","File Size":"10"}

 * @param Tile Size
 * @text Размер тайла
 * @parent Functions
 * @desc Размер тайла
 * @type struct<TileSize>
 * @default {"Enabled":"false","Size":"48"}

 * @param Grid
 * @text Сетка
 * @parent Functions
 * @desc Отображение сетки на экране. Подробности в справке (2)
 * @type struct<Grid>
 * @default {"Enabled":"false","Key Code":"118","Grid Color":"white","Grid Width":"1","Ruler Color":"","Ruler Width":"3"}

*/

/*~struct~CheckUpdates:

 * @param Enabled
 * @desc Enable automatic update checking ? Information is displayed in the console during the game test
 * @type boolean
 * @default false

 * @param Show New Plugins
 * @text Show new plugins
 * @desc Show new plugins ? Information is displayed in the console during the game test
 * @type boolean
 * @default false

 */

/*~struct~CheckUpdates:ru

 * @param Enabled
 * @text Проверка обновлений
 * @desc Включить автоматическую проверку обновлений ? Информация выводится в консоль при тесте игры
 * @type boolean
 * @default false

 * @param Show New Plugins
 * @text Показать новые плагины
 * @desc Показывать новые плагины ? Информация выводится в консоль при тесте игры
 * @type boolean
 * @default false

 */

/*~struct~DebuggingConsole:

 * @param Enabled
 * @desc Open the debug console when the game test starts ?
 * @type boolean
 * @default false

 * @param Open On Error
 * @text Open on error
 * @desc Enable the debugging console when an error is received ?
 * @type boolean
 * @default false

 */

/*~struct~DebuggingConsole:ru

 * @param Enabled
 * @text Включено
 * @desc Открыть отладочную консоль при запуске теста игры ?
 * @type boolean
 * @default false

 * @param Open On Error
 * @text Открытие при ошибке
 * @desc Включить отладочную консоль при получении ошибки ?
 * @type boolean
 * @default false

 */

/*~struct~FPSMeter:

 * @param Enabled
 * @desc Show the FPS counter when the game test starts ?
 * @type boolean
 * @default false

 * @param Mode
 * @desc
 * @type select
 * @option FPS
 * @option Duration
 * @default FPS

 * @param Theme
 * @desc
 * @type select
 * @option transparent
 * @option dark
 * @option light
 * @default transparent

 * @param History
 * @desc
 * @type number
 * @min 5
 * @max 100
 * @default 20

 */

/*~struct~FPSMeter:ru

 * @param Enabled
 * @text Включено
 * @desc Показать счетчик FPS при запуске теста игры ?
 * @type boolean
 * @default false

 * @param Mode
 * @text Режим
 * @desc Режим счетчика FPS
 * @type select
 * @option FPS
 * @option Duration
 * @default FPS

 * @param Theme
 * @text Тема
 * @desc Тема счетчика FPS
 * @type select
 * @option transparent
 * @option dark
 * @option light
 * @default transparent

 * @param History
 * @text История
 * @desc
 * @type number
 * @min 5
 * @max 100
 * @default 20

 */

/*~struct~ScreenResolution:

 * @param Enabled
 * @desc Enable the Screen Resolution function ?
 * @type boolean
 * @default false

 * @param Width
 * @desc Screen width
 * @type number
 * @min 0
 * @default 816

 * @param Height
 * @desc Screen height
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

 * @param Width
 * @text Ширина экрана
 * @desc Ширина экрана
 * @type number
 * @min 0
 * @default 816

 * @param Height
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
 * @desc Пропускать титульный экран, если есть сохранения ?
 * @type boolean
 * @default false

 */

/*~struct~QuickLoad:

 * @param Enabled
 * @desc Enable the Quick Load function ?
 * @type boolean
 * @default false

 * @param Key Code
 * @desc The key code that is responsible for the quick loading. 117 - F6
 * @type number
 * @default 117

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
 * @desc Код клавиши, которая отвечает за быструю загрузку. 117 - F6
 * @default 117

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

 * @param Audio Files
 * @desc Preloading audio files
 * @type struct<PreloadManagerAudio>[]
 * @default []

 * @param Image Files
 * @desc Preloading image files
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

 * @param Audio Files
 * @text Звуки
 * @desc Предзагрузка звуков
 * @type struct<PreloadManagerAudio>[]
 * @default []

 * @param Image Files
 * @text Изображения
 * @desc Предзагрузка изображений
 * @type struct<PreloadManagerImage>[]
 * @default []

 */

/*~struct~PreloadManagerImage:

 * @param Path
 * @desc Path to file (with extension) or directory. For example, img/system/Window.png for file or img/system/ for directory

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

/*~struct~PreloadManagerAudio:

 * @param Path
 * @desc Path to file (with extension) or directory. For example, audio/bgm/Battle1.ogg for file or audio/bgm/ for directory

 * @param Caching
 * @desc Audio caching
 * @type boolean
 * @default false

 */

/*~struct~PreloadManagerAudio:ru

 * @param Path
 * @text Путь
 * @desc Путь к файлу (с расширением) или директории. Например, audio/bgm/Battle1.ogg для файла или audio/bgm/ для директории

 * @param Caching
 * @text Кэширование
 * @desc Кэширование звуков
 * @type boolean
 * @default false

 */

/*~struct~Screenshots:

 * @param Enabled
 * @desc Enable the Screenshots function ?
 * @type boolean
 * @default false

 * @param Key Code
 * @desc The key code that is responsible for saving the screenshot. 122 - F11
 * @type number
 * @default 122

 * @param Path
 * @text Path for saving screenshots
 * @desc Local path for saving screenshots
 * @default screenshots/

 * @param Filename
 * @desc The entire list of templates is given in the help (1)
 * @default %year_%month_%day_%hours_%minutes_%seconds.png

 * @param Type
 * @text Screenshot type
 * @desc Screenshot type
 * @type select
 * @option png
 * @option jpeg
 * @option webp
 * @default png

 * @param Quality
 * @text Screenshot quality
 * @desc Screenshot quality
 * @type select
 * @option 0%
 * @option 10%
 * @option 20%
 * @option 30%
 * @option 40%
 * @option 50%
 * @option 60%
 * @option 70%
 * @option 80%
 * @option 90%
 * @option 100%
 * @default 90%

 */

/*~struct~Screenshots:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию сохранения скриншота ?
 * @type boolean
 * @default false

 * @param Key Code
 * @text Код клавиши
 * @desc Код клавиши, которая отвечает за сохранение скриншота. 122 - F11
 * @type number
 * @default 122

 * @param Path
 * @text Путь для сохранения скриншотов
 * @desc Локальный путь для сохранения скриншотов
 * @default screenshots/

 * @param Filename
 * @text Название файла скриншота
 * @desc Весь список шаблонов приведен в справке (1)
 * @default %year_%month_%day_%hours_%minutes_%seconds.png

 * @param Type
 * @text Тип скриншота
 * @desc Тип скриншота
 * @type select
 * @option png
 * @option jpeg
 * @option webp
 * @default png

 * @param Quality
 * @text Качество скриншота
 * @desc Качество скриншота
 * @type select
 * @option 0%
 * @value 0
 * @option 10%
 * @value 0.1
 * @option 20%
 * @value 0.2
 * @option 30%
 * @value 0.3
 * @option 40%
 * @value 0.4
 * @option 50%
 * @value 0.5
 * @option 60%
 * @value 0.6
 * @option 70%
 * @value 0.7
 * @option 80%
 * @value 0.8
 * @option 90%
 * @value 0.9
 * @option 100%
 * @value 1
 * @default 90%

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

/*~struct~TileSize:

 * @param Enabled
 * @desc Enable the function of resizing tiles ?
 * @type boolean
 * @default false

 * @param Size
 * @desc Tile size
 * @type number
 * @min 1
 * @default 48

 */

/*~struct~TileSize:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения размера тайла ?
 * @type boolean
 * @default false

 * @param Size
 * @text Размер тайла
 * @desc Размер тайла
 * @type number
 * @min 1
 * @default 48

 */

/*~struct~Grid:

 * @param Enabled
 * @type boolean
 * @desc Enable the function of displaying the grid ?
 * @default false

 * @param Key Code
 * @desc The key code that is responsible displaying the grid. 118 - F7
 * @type number
 * @default 118

 * @param Grid Color
 * @desc Grid line color in Web format
 * @default white

 * @param Grid Width
 * @desc Grid line width
 * @type number
 * @min 1
 * @default 1

 * @param Ruler Color
 * @desc Ruler color in Web format. Details in the help (2.2)
 * @default

 * @param Ruler Width
 * @desc Ruler width
 * @type number
 * @min 1
 * @default 3

 */

/*~struct~Grid:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию отображения сетки ?
 * @type boolean
 * @default false

 * @param Key Code
 * @text Код клавиши
 * @desc Код клавиши, которая отвечает за отображение сетки. 118 - F7
 * @type number
 * @default 118

 * @param Grid Color
 * @text Цвет сетки
 * @desc Цвет сетки в Web формате
 * @default white

 * @param Grid Width
 * @text Ширина линии сетки
 * @desc Ширина линии сетки
 * @type number
 * @min 1
 * @default 1

 * @param Ruler Color
 * @text Цвет линейки
 * @desc Цвет линейки в Web формате. Подробности в справке (2.2)
 * @default

 * @param Ruler Width
 * @text Ширина линейки
 * @desc Ширина линейки
 * @type number
 * @min 1
 * @default 3

 */
