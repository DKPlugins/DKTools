/*
Title: DKTools
Author: DK (Denis Kuznetsov)
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 9.0.0
Release: 11.06.2020
First release: 13.01.2016
*/

/*ru
Название: DKTools
Автор: DK (Денис Кузнецов)
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 9.0.0
Релиз: 11.06.2020
Первый релиз: 13.01.2016
*/

/*:
* @plugindesc v.9.0.0 Library for RPG Maker. Made with ♥ by DKPlugins
* @author DK (Denis Kuznetsov)
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DK (Denis Kuznetsov)
 Site: https://dk-plugins.ru
 Version: 9.0.0
 Release: 11.06.2020
 First release: 13.01.2016

 ### Support ###
 Donate: https://dk-plugins.ru/donate
 Become a patron: https://www.patreon.com/dkplugins

 ### DKTools on DKPlugins ###
 https://dk-plugins.ru/mv/dktools/

 ### DKTools on GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Online documentation ###
 https://dk-plugins.ru/documentation/DKTools/index.html

 ### Requirements and dependencies ###
 RPG Maker and project version 1.6+

 ### Instructions ###

 ## Parameters ##

 ### 1 ### File system ###
 File system modes:
 Nwjs + Stamp - Advanced file system mode (all Platforms)
 Nwjs - standard file system mode (PC only)

 In the Nwjs + Stamp mode, each time you start a game test, the plugin scans
 project files and saves data to the file "data/Stamp.json"

 Data can also be updated using the plugin command UpdateFileSystemStamp

 Q. Why do I need Nwjs + Stamp file system mode ?
 A. Browsers and old mobile devices do not provide the ability to check for specific files.
 in a particular directory, and also do not provide a list of files and directories.

 Q. Which mode should I choose ?
 A. Nwjs + Stamp, if your project is designed for all platforms (including browsers and mobile devices).

 ### 1.1 ### Ignored directories ###
 Only applicable for Nwjs + Stamp mode.
 Ignores specified (and nested) directories when scanning project files.

 ## Functions ##

 ### 1 ### Screenshots ###
 Templates for the filename of the screenshot:
 %year - Year
 %month - Month
 %day - Day
 %hours - Hours
 %minutes - Minutes
 %seconds - Seconds

 ### 2 ### Errors logging ###
 If the file size limit is exceeded, the old logs will be renamed
 according to the template: day.month.year_hours.minutes.seconds_filename.

 ### 3 ### Grid ###
 Available grid sizes: 64, 48, 32, 16.
 Switching the grid size is done by pressing the key responsible for the function.

 ### 3.1 ### Using the ruler ###
 Move the mouse while holding down the middle key.

 ### 3.2 ### Color of the ruler ###
 If the color of the ruler is not specified,
 random color will be selected automatically.

 ### Preloading resources ###
 To preload a whole folder with resources or a file with a non-standard path,
 you must specify the "Path" in the "Text" tab instead of the "File" tab.

 ### Plugin commands ###
 1. Checks for plugins updates from DKPlugins
 DKPluginsCheckUpdates

 2. Update file system stamp
 UpdateFileSystemStamp

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
 DKTools.StartupManager
 DKTools.Audio
 DKTools.Event
 DKTools.Animation
 DKTools.Animation.Action
 DKTools.OptionsManager
 DKTools.EventsManager
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

 * @param System
 * @default ---------------------------------

 * @param File System
 * @parent System
 * @desc File system parameters. Details in the help (1)
 * @type struct<FileSystem>
 * @default {"Mode":"0","Ignored Directories":"[\"node_modules\"]"}

 * @param Font Size
 * @parent System
 * @desc Font size
 * @type struct<FontSize>
 * @default {"Enabled":"false","Size":"28"}

 * @param Screen Resolution
 * @parent System
 * @desc Screen resolution
 * @type struct<ScreenResolution>
 * @default {"Enabled":"false","Width":"816","Height":"624"}

 * @param Tile Size
 * @parent System
 * @desc Tile size
 * @type struct<TileSize>
 * @default {"Enabled":"false","Size":"48","Tilesets Folder":"img/tilesets/","Parallaxes Folder":"img/parallaxes/"}

 * @param Cursor Graphic
 * @parent System
 * @desc Cursor graphic
 * @type struct<CursorGraphic>
 * @default {"Enabled":"false","Graphic": ""}

 * @param Preloading
 * @default ---------------------------------

 * @param Initial Preloading
 * @parent Preloading
 * @desc Initial preloading of resources
 * @type struct<PreloadManager>
 * @default {"Enabled":"false","Debugging":"false","Audio Files":"[]","Image Files":"[]","Progress Bar":"{\"Enabled\":\"false\",\"Background\":\"\",\"Progress Bar X\":\"(Graphics.boxWidth - width) * 2 / 4\",\"Progress Bar Y\":\"(Graphics.boxHeight - height) * 2 / 4\",\"Progress Bar Text\":\"Loading: %1\",\"Progress Bar Text Size\":\"28\",\"Progress Bar Style\":\"colors\",\"Colors Style\":\"\",\"Progress Bar Width\":\"Graphics.boxWidth * 2 / 4\",\"Progress Bar Height\":\"48\",\"Progress Bar Background Color\":\"grey\",\"Progress Bar Progress Color\":\"#33ccff\",\"Images Style\":\"\",\"Progress Bar Background Image\":\"\",\"Progress Bar Progress Image\":\"\"}"}

 * @param Maps Preloading
 * @parent Preloading
 * @desc Maps preloading
 * @type struct<MapsPreloading>
 * @default {"Enabled":"false","Debugging":"false","Maps":"[]"}

 * @param Audio Cache Limit
 * @parent Preloading
 * @desc Audio cache limit
 * @type struct<AudioCacheLimit>
 * @default {"Enabled":"false","Limit":"10000000"}

 * @param Image Cache Limit
 * @parent Preloading
 * @desc Image cache limit
 * @type struct<ImageCacheLimit>
 * @default {"Enabled":"false","Limit":"10000000"}

 * @param Windows
 * @default ---------------------------------

 * @param Line Height
 * @parent Windows
 * @desc Sets the line height for a window
 * @type struct<LineHeight>
 * @default {"Enabled":"false","Height":"36"}

 * @param Window Padding
 * @parent Windows
 * @desc Sets the padding for a window
 * @type struct<WindowPadding>
 * @default {"Enabled":"false","Padding":"18"}

 * @param Other
 * @default ---------------------------------

 * @param Check Updates
 * @parent Functions
 * @desc Other
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false","Show New Plugins":"false"}

 * @param Debugging
 * @default ---------------------------------

 * @param Debugging Console
 * @parent Functions
 * @desc Debugging
 * @type struct<DebuggingConsole>
 * @default {"Enabled":"false","Open On Error":"false"}

 * @param FPS Meter
 * @parent Debugging
 * @desc FPS Meter
 * @type struct<FPSMeter>
 * @default {"Enabled":"false","Mode":"FPS","Theme":"transparent","History":"20"}

 * @param Errors Log
 * @parent Debugging
 * @desc Errors logging
 * @type struct<ErrorsLog>
 * @default {"Enabled":"None","Filename":"errors_log.txt","File Size":"10"}

 * @param Print Detailed Error
 * @parent Debugging
 * @desc Detailed error display
 * @type struct<PrintDetailedError>
 * @default {"Enabled":"false","Error Message":"Game has encountered a bug. Please report it.","Restart Message":"Press F5 to restart the game."}

 * @param Grid
 * @parent Debugging
 * @desc Displaying the grid on the screen. Details in the help (2)
 * @type struct<Grid>
 * @default {"Enabled":"false","Key Code":"118","Grid Color":"white","Grid Width":"1","Ruler Color":"","Ruler Width":"3"}

 * @param Functions
 * @default ---------------------------------

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

 * @param Screenshots
 * @parent Functions
 * @desc Screenshots
 * @type struct<Screenshots>
 * @default {"Enabled":"false","Key Code":"44","Path":"screenshots/","Filename":"%year_%month_%day_%hours_%minutes_%seconds.png","Type":"png","Quality":"0.9"}

*/

/*:ru
* @plugindesc v.9.0.0 Библиотека для RPG Maker. Сделано с ♥ от DKPlugins
* @author DK (Денис Кузнецов)
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DK (Денис Кузнецов)
 Сайт: https://dk-plugins.ru
 Версия: 9.0.0
 Релиз: 11.06.2020
 Первый релиз: 13.01.2016

 ### Поддержка ###
 Поддержать: https://dk-plugins.ru/donate
 Стать патроном: https://www.patreon.com/dkplugins

 ### DKTools на DKPlugins ###
 https://dk-plugins.ru/mv/dktools/

 ### DKTools на GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Онлайн документация ###
 https://dk-plugins.ru/documentation/DKTools/index.html

 ### Требования и зависимости ###
 Версия мейкера и проекта 1.6+

 ### Инструкции ###

 ## Параметры ##

 ### 1 ### Файловая система ###
 Режимы работы файловой системы:
 Nwjs + Stamp - Расширенный режим работы файловой системы (все платформы)
 Nwjs - стандартный режим работы файловой системы (только PC)

 В режиме Nwjs + Stamp каждый раз при запуске теста игры плагин сканирует
 файлы проекта и сохраняет данные в файл "data/Stamp.json"

 Данные также могут быть обновлены с помощью команды плагина UpdateFileSystemStamp

 Q. Зачем нужен режим работы Nwjs + Stamp ?
 A. Браузеры и старые мобильные устройства не предоставляют возможность проверять наличие конкретных файлов
 в той или иной директории, а также не предоставляют список файлов и директорий.

 Q. Какой режим выбрать мне ?
 A. Nwjs + Stamp, если Ваш проект расчитан на все платформы (включая браузеры и мобильные устройства).

 ### 1.1 ### Игнорируемые директории ###
 Применяется только для режима Nwjs + Stamp.
 Игнорирует указанные (и вложенные) директории при сканировании файлов проекта.

 ## Функции ##

 ### 1 ### Скриншоты ###
 Шаблоны для названия файла скриншота:
 %year - Год
 %month - Месяц
 %day - День
 %hours - Часы
 %minutes - Минуты
 %seconds - Секунды

 ### 2 ### Логирование ошибок ###
 При превышении лимита размера файла старые логи будут переименованы
 по шаблону: day.month.year_hours.minutes.seconds_filename.

 ### 3 ### Сетка ###
 Доступные размеры сетки: 64, 48, 32, 16
 Переключение размера сетки происходит нажатием клавиши,
 отвечающей за работу функцию.

 ### 3.1 ### Использование линейки ###
 Перемещайте мышь, удерживая среднюю клавишу.

 ### 3.2 ### Цвет линейки ###
 Если не указан цвет линейки, то автоматически будет выбран случайный цвет.

 ### Предзагрузка ресурсов ###
 Чтобы предзагрузить целую папку с ресурсами или файл с нестандартным путем,
 необходимо указывать "Путь" во вкладке "Текст" вместо вкладки "Файл".

 ### Команды плагина ###
 1. Проверить обновления плагинов от DKPlugins
 DKPluginsCheckUpdates

 2. Обновить штамп файловой системы
 UpdateFileSystemStamp

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
 DKTools.StartupManager
 DKTools.Audio
 DKTools.Event
 DKTools.Animation
 DKTools.Animation.Action
 DKTools.OptionsManager
 DKTools.EventsManager
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

 * @param System
 * @text Система
 * @default ---------------------------------

 * @param File System
 * @text Файловая система
 * @parent System
 * @desc Параметры файловой системы. Подробности в справке (1)
 * @type struct<FileSystem>
 * @default {"Mode":"0","Ignored Directories":"[\"node_modules\"]"}

 * @param Font Size
 * @text Размер шрифта
 * @parent System
 * @desc Размер шрифта
 * @type struct<FontSize>
 * @default {"Enabled":"false","Size":"28"}

 * @param Screen Resolution
 * @text Разрешение экрана
 * @parent System
 * @desc Настройки разрешения экрана
 * @type struct<ScreenResolution>
 * @default {"Enabled":"false","Width":"816","Height":"624"}

 * @param Tile Size
 * @text Размер тайла
 * @parent System
 * @desc Размер тайла
 * @type struct<TileSize>
 * @default {"Enabled":"false","Size":"48","Tilesets Folder":"img/tilesets/","Parallaxes Folder":"img/parallaxes/"}

 * @param Cursor Graphic
 * @text Графика курсора
 * @parent System
 * @desc Графика курсора
 * @type struct<CursorGraphic>
 * @default {"Enabled":"false","Graphic": ""}

 * @param Preloading
 * @text Предзагрузка
 * @default ---------------------------------

 * @param Initial Preloading
 * @text Начальная предзагрузка
 * @parent Preloading
 * @desc Начальная предзагрузка
 * @type struct<PreloadManager>
 * @default {"Enabled":"false","Debugging":"false","Audio Files":"[]","Image Files":"[]","Progress Bar":"{\"Enabled\":\"false\",\"Background\":\"\",\"Progress Bar X\":\"(Graphics.boxWidth - width) * 2 / 4\",\"Progress Bar Y\":\"(Graphics.boxHeight - height) * 2 / 4\",\"Progress Bar Text\":\"Загрузка: %1\",\"Progress Bar Text Size\":\"28\",\"Progress Bar Style\":\"colors\",\"Colors Style\":\"\",\"Progress Bar Width\":\"Graphics.boxWidth * 2 / 4\",\"Progress Bar Height\":\"48\",\"Progress Bar Background Color\":\"grey\",\"Progress Bar Progress Color\":\"#33ccff\",\"Images Style\":\"\",\"Progress Bar Background Image\":\"\",\"Progress Bar Progress Image\":\"\"}"}

 * @param Maps Preloading
 * @text Предзагрузка карт
 * @parent Preloading
 * @desc Предварительная загрузка карт
 * @type struct<MapsPreloading>
 * @default {"Enabled":"false","Debugging":"false","Maps":"[]"}

 * @param Audio Cache Limit
 * @text Лимит кэша аудио
 * @parent Preloading
 * @desc Лимит кэша аудио
 * @type struct<AudioCacheLimit>
 * @default {"Enabled":"false","Limit":"10000000"}

 * @param Image Cache Limit
 * @text Лимит кэша изображений
 * @parent Preloading
 * @desc Лимит кэша изображений
 * @type struct<ImageCacheLimit>
 * @default {"Enabled":"false","Limit":"10000000"}

 * @param Windows
 * @text Окна
 * @default ---------------------------------

 * @param Line Height
 * @text Высота строки
 * @parent Windows
 * @desc Устанавливает высоту строки для окна
 * @type struct<LineHeight>
 * @default {"Enabled":"false","Height":"36"}

 * @param Window Padding
 * @text Отступ окна
 * @parent Windows
 * @desc Устанавливает отступ для окна
 * @type struct<WindowPadding>
 * @default {"Enabled":"false","Padding":"18"}

 * @param Other
 * @text Разное
 * @default ---------------------------------

 * @param Check Updates
 * @text Проверка обновлений
 * @parent Other
 * @desc Проверка обновлений
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false","Show New Plugins":"false"}

 * @param Debugging
 * @text Отладка
 * @default ---------------------------------

 * @param Debugging Console
 * @text Отладочная консоль
 * @parent Debugging
 * @desc Отладочная консоль
 * @type struct<DebuggingConsole>
 * @default {"Enabled":"false","Open On Error":"false"}

 * @param FPS Meter
 * @text Счетчик FPS
 * @parent Debugging
 * @desc Счетчик FPS
 * @type struct<FPSMeter>
 * @default {"Enabled":"false","Mode":"FPS","Theme":"transparent","History":"20"}

 * @param Errors Log
 * @text Логирование ошибок
 * @parent Debugging
 * @desc Логирование ошибок
 * @type struct<ErrorsLog>
 * @default {"Enabled":"None","Filename":"errors_log.txt","File Size":"10"}

 * @param Print Detailed Error
 * @text Детальное отображение ошибок
 * @parent Debugging
 * @desc Детальное отображение ошибок
 * @type struct<PrintDetailedError>
 * @default {"Enabled":"false","Error Message":"В игре обнаружена ошибка. Пожалуйста, сообщите об этом.","Restart Message":"Нажмите F5, чтобы перезапустить игру."}

 * @param Grid
 * @text Сетка
 * @parent Debugging
 * @desc Отображение сетки на экране. Подробности в справке (2)
 * @type struct<Grid>
 * @default {"Enabled":"false","Key Code":"118","Grid Color":"white","Grid Width":"1","Ruler Color":"","Ruler Width":"3"}

 * @param Functions
 * @text Функции
 * @default ---------------------------------

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

 * @param Screenshots
 * @text Скриншоты
 * @parent Functions
 * @desc Скриншоты
 * @type struct<Screenshots>
 * @default {"Enabled":"false","Key Code":"44","Path":"screenshots/","Filename":"%year_%month_%day_%hours_%minutes_%seconds.png","Type":"png","Quality":"0.9"}

*/

/*~struct~FileSystem:

 * @param Mode
 * @desc File system mode. Details in the help (1)
 * @type select
 * @option Nwjs + Stamp
 * @value 0
 * @option Nwjs
 * @value 1
 * @default 0

 * @param Ignored Directories
 * @desc Ignored directories. Details in the help (1.1)
 * @type string[]
 * @default ["node_modules"]

*/

/*~struct~FileSystem:ru

 * @param Mode
 * @text Режим работы файловой систмы
 * @desc Режим работы файловой системы. Подробности в справке (1)
 * @type select
 * @option Nwjs + Stamp
 * @value 0
 * @option Nwjs
 * @value 1
 * @default 0

 * @param Ignored Directories
 * @text Игнорируемые директории
 * @desc Игнорируемые директории. Подробности в справке (1.1)
 * @type string[]
 * @default ["node_modules"]

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
 * @desc Mode
 * @type select
 * @option FPS
 * @option Duration
 * @default FPS

 * @param Theme
 * @desc Theme
 * @type select
 * @option transparent
 * @option dark
 * @option light
 * @default transparent

 * @param History
 * @desc Number of entries in history
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
 * @desc Количество записей в истории
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
 * @desc Name of scene which will be launched instead the title screen. Standard: Scene_Title
 * @type combo
 * @option Scene_Map
 * @option Scene_Title
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
 * @desc Название сцены, которая запускается вместо титульного экрана. Стандартно: Scene_Title
 * @type combo
 * @option Scene_Map
 * @option Scene_Title
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
 * @desc Enable resources preloading function ?
 * @type boolean
 * @default false

 * @param Debugging
 * @desc Display preload information in the console ?
 * @type boolean
 * @default false

 * @param Audio Files
 * @desc Preloading audio files
 * @type file[]
 * @dir audio/
 * @default []

 * @param Image Files
 * @desc Preloading image files
 * @type struct<ImagePreloading>[]
 * @default []

 * @param Progress Bar
 * @desc Preloading process display
 * @type struct<PreloadManagerProgressBar>
 * @default {"Enabled":"false","Background":"","Progress Bar X":"(Graphics.boxWidth - width) * 2 / 4","Progress Bar Y":"(Graphics.boxHeight - height) * 2 / 4","Progress Bar Text":"Loading: %1","Progress Bar Text Size":"28","Progress Bar Style":"colors","Colors Style":"","Progress Bar Width":"Graphics.boxWidth * 2 / 4","Progress Bar Height":"48","Progress Bar Background Color":"grey","Progress Bar Progress Color":"#33ccff","Images Style":"","Progress Bar Background Image":"","Progress Bar Progress Image":""}

 */

/*~struct~PreloadManager:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию предзагрузки ресурсов ?
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
 * @type file[]
 * @dir audio/
 * @default []

 * @param Image Files
 * @text Изображения
 * @desc Предзагрузка изображений
 * @type struct<ImagePreloading>[]
 * @default []

 * @param Progress Bar
 * @text Прогресс
 * @desc Отображение процесса предзагрузки
 * @type struct<PreloadManagerProgressBar>
 * @default {"Enabled":"false","Background":"","Progress Bar X":"(Graphics.boxWidth - width) * 2 / 4","Progress Bar Y":"(Graphics.boxHeight - height) * 2 / 4","Progress Bar Text":"Загрузка: %1","Progress Bar Text Size":"28","Progress Bar Style":"colors","Colors Style":"","Progress Bar Width":"Graphics.boxWidth * 2 / 4","Progress Bar Height":"48","Progress Bar Background Color":"grey","Progress Bar Progress Color":"#33ccff","Images Style":"","Progress Bar Background Image":"","Progress Bar Progress Image":""}

 */

/*~struct~PreloadManagerProgressBar:

 * @param Enabled
 * @desc Enable visual display of preloading ?
 * @type boolean
 * @default false

 * @param Background
 * @desc Background picture
 * @type file
 * @dir img/system

 * @param Progress Bar X
 * @desc The X coordinate of the progress bar. Use to substitute: width - width of progress bar, height - height of progress bar
 * @type combo
 * @option (Graphics.boxWidth - width) * 1 / 4
 * @option (Graphics.boxWidth - width) * 2 / 4
 * @option (Graphics.boxWidth - width) * 3 / 4
 * @option (Graphics.boxWidth - width) * 1 / 5
 * @option (Graphics.boxWidth - width) * 1 / 6
 * @option (Graphics.boxWidth - width) * 4 / 5
 * @option (Graphics.boxWidth - width) * 5 / 6
 * @default (Graphics.boxWidth - width) * 2 / 4

 * @param Progress Bar Y
 * @desc The Y coordinate of the progress bar. Use to substitute: width - width of progress bar, height - height of progress bar
 * @type combo
 * @option (Graphics.boxHeight - height) * 1 / 4
 * @option (Graphics.boxHeight - height) * 2 / 4
 * @option (Graphics.boxHeight - height) * 3 / 4
 * @option (Graphics.boxHeight - height) * 1 / 5
 * @option (Graphics.boxHeight - height) * 1 / 6
 * @option (Graphics.boxHeight - height) * 4 / 5
 * @option (Graphics.boxHeight - height) * 5 / 6
 * @default (Graphics.boxHeight - height) * 2 / 4

 * @param Progress Bar Text
 * @desc Progress bar text. Use to substitute: %1 - url, %2 - loaded, %3 - total, %4 - percents
 * @default Loading: %1

 * @param Progress Bar Text Size
 * @desc Progress bar text size
 * @type number
 * @min 1
 * @default 28

 * @param Progress Bar Style
 * @desc Style of the progress bar
 * @type select
 * @option colors
 * @option images
 * @default colors

 * @param Colors Style
 * @text Style "colors"

 * @param Progress Bar Width
 * @parent Colors Style
 * @desc Width of the progress bar
 * @type combo
 * @option Graphics.boxWidth * 1 / 4
 * @option Graphics.boxWidth * 2 / 4
 * @option Graphics.boxWidth * 3 / 4
 * @default Graphics.boxWidth * 2 / 4

 * @param Progress Bar Height
 * @parent Colors Style
 * @desc Height of the progress bar
 * @type combo
 * @option 36
 * @option 42
 * @option 48
 * @default 48

 * @param Progress Bar Background Color
 * @parent Colors Style
 * @desc Progress bar background color
 * @type combo
 * @option grey
 * @default grey

 * @param Progress Bar Progress Color
 * @parent Colors Style
 * @desc Progress bar progress color
 * @type combo
 * @option #33ccff
 * @default #33ccff

 * @param Images Style
 * @text Style "images"

 * @param Progress Bar Background Image
 * @parent Images Style
 * @desc Background image of the progress bar
 * @type file
 * @dir img/system

 * @param Progress Bar Progress Image
 * @parent Images Style
 * @desc Progress image of the progress bar
 * @type file
 * @dir img/system

*/

/*~struct~PreloadManagerProgressBar:ru

 * @param Enabled
 * @text Включено
 * @desc Включить визуальное отображение загрузки ?
 * @type boolean
 * @default false

 * @param Background
 * @text Фоновое изображение
 * @desc Фоновое изображение
 * @type file
 * @dir img/system

 * @param Progress Bar X
 * @text X прогресс бара
 * @desc X прогресс бара. Используйте, чтобы подставить: width - ширина прогресс бара, height - высота прогресс бара
 * @type combo
 * @option (Graphics.boxWidth - width) * 1 / 4
 * @option (Graphics.boxWidth - width) * 2 / 4
 * @option (Graphics.boxWidth - width) * 3 / 4
 * @option (Graphics.boxWidth - width) * 1 / 5
 * @option (Graphics.boxWidth - width) * 1 / 6
 * @option (Graphics.boxWidth - width) * 4 / 5
 * @option (Graphics.boxWidth - width) * 5 / 6
 * @default (Graphics.boxWidth - width) * 2 / 4

 * @param Progress Bar Y
 * @text Y прогресс бара
 * @desc Y прогресс бара. Используйте, чтобы подставить: width - ширина прогресс бара, height - высота прогресс бара
 * @type combo
 * @option (Graphics.boxHeight - height) * 1 / 4
 * @option (Graphics.boxHeight - height) * 2 / 4
 * @option (Graphics.boxHeight - height) * 3 / 4
 * @option (Graphics.boxHeight - height) * 1 / 5
 * @option (Graphics.boxHeight - height) * 1 / 6
 * @option (Graphics.boxHeight - height) * 4 / 5
 * @option (Graphics.boxHeight - height) * 5 / 6
 * @default (Graphics.boxHeight - height) * 2 / 4

 * @param Progress Bar Text
 * @text Текст прогресс бара
 * @desc Текст прогресс бара. Используйте, чтобы подставить: %1 - файл, %2 - загружено, %3 - всего, %4 - проценты
 * @default Загрузка: %1

 * @param Progress Bar Text Size
 * @text Размер текста прогресс бара
 * @desc Размер текста прогресс бара
 * @type number
 * @min 1
 * @default 28

 * @param Progress Bar Style
 * @text Стиль прогресс бара
 * @desc Стиль прогресс бара
 * @type select
 * @option цвета
 * @value colors
 * @option изображения
 * @value images
 * @default colors

 * @param Colors Style
 * @text Стиль "цвета"

 * @param Progress Bar Width
 * @text Ширина прогресс бара
 * @parent Colors Style
 * @desc Ширина прогресс бара
 * @type combo
 * @option Graphics.boxWidth * 1 / 4
 * @option Graphics.boxWidth * 2 / 4
 * @option Graphics.boxWidth * 3 / 4
 * @default Graphics.boxWidth * 2 / 4

 * @param Progress Bar Height
 * @text Высота прогресс бара
 * @parent Colors Style
 * @desc Высота прогресс бара
 * @type combo
 * @option 36
 * @option 42
 * @option 48
 * @default 48

 * @param Progress Bar Background Color
 * @text Фон прогресс бара
 * @parent Colors Style
 * @desc Фон прогресс бара в веб формате
 * @type combo
 * @option grey
 * @default grey

 * @param Progress Bar Progress Color
 * @text Цвет прогресс бара
 * @parent Colors Style
 * @desc Цвет прогресс бара в веб формате
 * @type combo
 * @option #33ccff
 * @default #33ccff

 * @param Images Style
 * @text Стиль "изображения"

 * @param Progress Bar Background Image
 * @text Изображение заднего фона прогресс бара
 * @parent Images Style
 * @desc Изображение заднего фона прогресс бара
 * @type file
 * @dir img/system

 * @param Progress Bar Progress Image
 * @text Изображение прогресса прогресс бара
 * @parent Images Style
 * @desc Изображение прогресса прогресс бара
 * @type file
 * @dir img/system

*/

/*~struct~MapsPreloading:

 * @param Enabled
 * @desc Enable maps preloading function ?
 * @type boolean
 * @default false

 * @param Debugging
 * @desc Display preload information in the console ?
 * @type boolean
 * @default false

 * @param Maps
 * @desc Maps
 * @type struct<MapsPreloadingData>[]
 * @default []

*/

/*~struct~MapsPreloading:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию предзагрузки карт ?
 * @type boolean
 * @default false

 * @param Debugging
 * @text Отладка
 * @desc Выводить информацию о предзагрузке в консоль ?
 * @type boolean
 * @default false

 * @param Maps
 * @text Карты
 * @desc Карты
 * @type struct<MapsPreloadingData>[]
 * @default []

*/

/*~struct~MapsPreloadingData:

 * @param Map Id
 * @desc Map id
 * @type number
 * @min 1
 * @default 1

 * @param Audio Files
 * @desc Preloading audio files
 * @type file[]
 * @dir audio/
 * @default []

 * @param Image Files
 * @desc Preloading image files
 * @type struct<ImagePreloading>[]
 * @default []

*/

/*~struct~MapsPreloadingData:ru

 * @param Map Id
 * @text Номер карты
 * @desc Номер карты
 * @type number
 * @min 1
 * @default 1

 * @param Audio Files
 * @text Звуки
 * @desc Предзагрузка звуков
 * @type file[]
 * @dir audio/
 * @default []

 * @param Image Files
 * @text Изображения
 * @desc Предзагрузка изображений
 * @type struct<ImagePreloading>[]
 * @default []

*/

/*~struct~ImagePreloading:

 * @param Path
 * @desc The path to the file or directory. Details in the help.
 * @type file
 * @dir img/

 * @param Hue
 * @desc Hue
 * @type number
 * @min 0
 * @max 360
 * @default 0

 */

/*~struct~ImagePreloading:ru

 * @param Path
 * @text Путь
 * @desc Путь к файлу или директории. Подробности в справке.
 * @type file
 * @dir img/

 * @param Hue
 * @text Оттенок
 * @desc Оттенок
 * @type number
 * @min 0
 * @max 360
 * @default 0

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
 * @desc Maximum file size in megabytes. Details in the help (2).
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
 * @desc Максимальный размер файла в мегабайтах. Подробности в справке (2).
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

 * @param Tilesets Folder
 * @desc Tilesets folder
 * @default img/tilesets/

 * @param Parallaxes Folder
 * @desc Parallaxes folder
 * @default img/parallaxes/

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

 * @param Tilesets Folder
 * @text Папка тайлсетов
 * @desc Папка тайлсетов
 * @default img/tilesets/

 * @param Parallaxes Folder
 * @text Папка параллакса
 * @desc Папка параллакса
 * @default img/parallaxes/

 */

/*~struct~Grid:

 * @param Enabled
 * @desc Enable the function of displaying the grid ?
 * @type boolean
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
 * @desc Ruler color in Web format. Details in the help (3.2)
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
 * @desc Цвет линейки в Web формате. Подробности в справке (3.2)
 * @default

 * @param Ruler Width
 * @text Ширина линейки
 * @desc Ширина линейки
 * @type number
 * @min 1
 * @default 3

 */

/*~struct~AudioCacheLimit:

 * @param Enabled
 * @desc Enable the audio cache limit function ?
 * @type boolean
 * @default false

 * @param Limit
 * @desc Audio cache limit
 * @type number
 * @min 0
 * @default 10000000

*/

/*~struct~AudioCacheLimit:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения лимита кэша аудио ?
 * @type boolean
 * @default false

 * @param Limit
 * @text Лимит
 * @desc Лимит кэша аудио
 * @type number
 * @min 0
 * @default 10000000

*/

/*~struct~ImageCacheLimit:

 * @param Enabled
 * @desc Enable the image cache limit function ?
 * @type boolean
 * @default false

 * @param Limit
 * @desc Image cache limit
 * @type number
 * @min 0
 * @default 10000000

*/

/*~struct~ImageCacheLimit:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения лимита кэша изображений ?
 * @type boolean
 * @default false

 * @param Limit
 * @text Лимит
 * @desc Лимит кэша изображений
 * @type number
 * @min 0
 * @default 10000000

*/

/*~struct~CursorGraphic:

 * @param Enabled
 * @desc Enable the function to change the cursor graphics ?
 * @type boolean
 * @default false

 * @param Graphic
 * @desc Cursor graphic
 * @type file
 * @dir img/system

*/

/*~struct~CursorGraphic:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения графики курсора ?
 * @type boolean
 * @default false

 * @param Graphic
 * @text Графика
 * @desc Графика курсора
 * @type file
 * @dir img/system

*/

/*~struct~PrintDetailedError:

 * @param Enabled
 * @desc Enable detailed error display ?
 * @type boolean
 * @default false

 * @param Error Message
 * @text Error message
 * @desc Error message
 * @default Game has encountered a bug. Please report it.

 * @param Restart Message
 * @text Game restart message
 * @desc Game restart message
 * @default Press F5 to restart the game.

*/

/*~struct~PrintDetailedError:ru

 * @param Enabled
 * @text Включено
 * @desc Включить детальное отображение ошибок ?
 * @type boolean
 * @default false

 * @param Error Message
 * @text Сообщение об ошибке
 * @desc Сообщение об ошибке
 * @default В игре обнаружена ошибка. Пожалуйста, сообщите об этом.

 * @param Restart Message
 * @text Сообщение о перезапуске игры
 * @desc Сообщение о перезапуске игры
 * @default Нажмите F5, чтобы перезапустить игру.

*/

/*~struct~FontSize:

 * @param Enabled
 * @desc Enable font resizing?
 * @type boolean
 * @default false

 * @param Size
 * @desc Font size
 * @type number
 * @min 1
 * @default 28

*/

/*~struct~FontSize:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения размера шрифта ?
 * @type boolean
 * @default false

 * @param Size
 * @text Размер шрифта
 * @desc Размер шрифта
 * @type number
 * @min 1
 * @default 28

*/

/*~struct~LineHeight:

 * @param Enabled
 * @desc Enable the function to change the line height ?
 * @type boolean
 * @default false

 * @param Height
 * @desc Line height
 * @type number
 * @min 0
 * @default 36

*/

/*~struct~LineHeight:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию для изменения высоты строки ?
 * @type boolean
 * @default false

 * @param Height
 * @text Высота
 * @desc Высота строки
 * @type number
 * @min 0
 * @default 36

*/

/*~struct~WindowPadding:

 * @param Enabled
 * @desc Enable function to change padding of windows ?
 * @type boolean
 * @default false

 * @param Padding
 * @desc Window padding
 * @type number
 * @min 0
 * @default 18

*/

/*~struct~WindowPadding:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения отступа окна ?
 * @type boolean
 * @default false

 * @param Padding
 * @text Отступ
 * @desc Отступ окна
 * @type number
 * @min 0
 * @default 18

*/

!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(module,exports,__webpack_require__){"use strict";(function(module){var __WEBPACK_AMD_DEFINE_RESULT__;window.Imported=window.Imported||{},window.Imported.DKTools="9.0.0",function(){function t(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}function e(t,e,i,s){for(var n=-1,r=null==t?0:t.length;++n<r;){var o=t[n];e(s,o,i(o),t)}return s}function i(t,e){for(var i=-1,s=null==t?0:t.length;++i<s&&!1!==e(t[i],i,t););return t}function s(t,e){for(var i=-1,s=null==t?0:t.length;++i<s;)if(!e(t[i],i,t))return!1;return!0}function n(t,e){for(var i=-1,s=null==t?0:t.length,n=0,r=[];++i<s;){var o=t[i];e(o,i,t)&&(r[n++]=o)}return r}function r(t,e){return!(null==t||!t.length)&&-1<g(t,e,0)}function o(t,e,i){for(var s=-1,n=null==t?0:t.length;++s<n;)if(i(e,t[s]))return!0;return!1}function a(t,e){for(var i=-1,s=null==t?0:t.length,n=Array(s);++i<s;)n[i]=e(t[i],i,t);return n}function l(t,e){for(var i=-1,s=e.length,n=t.length;++i<s;)t[n+i]=e[i];return t}function h(t,e,i,s){var n=-1,r=null==t?0:t.length;for(s&&r&&(i=t[++n]);++n<r;)i=e(i,t[n],n,t);return i}function u(t,e,i,s){var n=null==t?0:t.length;for(s&&n&&(i=t[--n]);n--;)i=e(i,t[n],n,t);return i}function c(t,e){for(var i=-1,s=null==t?0:t.length;++i<s;)if(e(t[i],i,t))return!0;return!1}function p(t,e,i){var s;return i(t,function(t,i,n){if(e(t,i,n))return s=i,!1}),s}function d(t,e,i,s){var n=t.length;for(i+=s?1:-1;s?i--:++i<n;)if(e(t[i],i,t))return i;return-1}function g(t,e,i){if(e==e)t:{--i;for(var s=t.length;++i<s;)if(t[i]===e){t=i;break t}t=-1}else t=d(t,_,i);return t}function f(t,e,i,s){--i;for(var n=t.length;++i<n;)if(s(t[i],e))return i;return-1}function _(t){return t!=t}function m(t,e){var i=null==t?0:t.length;return i?v(t,e)/i:F}function T(t){return function(e){return null==e?B:e[t]}}function y(t){return function(e){return null==t?B:t[e]}}function D(t,e,i,s,n){return n(t,function(t,n,r){i=s?(s=!1,t):e(i,t,n,r)}),i}function v(t,e){for(var i,s=-1,n=t.length;++s<n;){var r=e(t[s]);r!==B&&(i=i===B?r:i+r)}return i}function w(t,e){for(var i=-1,s=Array(t);++i<t;)s[i]=e(i);return s}function S(t){return function(e){return t(e)}}function K(t,e){return a(e,function(e){return t[e]})}function b(t,e){return t.has(e)}function A(t,e){for(var i=-1,s=t.length;++i<s&&-1<g(e,t[i],0););return i}function I(t,e){for(var i=t.length;i--&&-1<g(e,t[i],0););return i}function C(t){return"\\"+Ot[t]}function O(t){var e=-1,i=Array(t.size);return t.forEach(function(t,s){i[++e]=[s,t]}),i}function E(t,e){return function(i){return t(e(i))}}function P(t,e){for(var i=-1,s=t.length,n=0,r=[];++i<s;){var o=t[i];o!==e&&"__lodash_placeholder__"!==o||(t[i]="__lodash_placeholder__",r[n++]=i)}return r}function x(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=t}),i}function M(t){if(Kt.test(t)){for(var e=wt.lastIndex=0;wt.test(t);)++e;t=e}else t=Gt(t);return t}function R(t){return Kt.test(t)?t.match(wt)||[]:t.split("")}var B,L=1/0,F=NaN,k=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],H=/\b__p\+='';/g,U=/\b(__p\+=)''\+/g,W=/(__e\(.*?\)|\b__t\))\+'';/g,j=/&(?:amp|lt|gt|quot|#39);/g,N=/[&<>"']/g,z=RegExp(j.source),V=RegExp(N.source),G=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,X=/<%=([\s\S]+?)%>/g,$=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Y=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Z=/[\\^$.*+?()[\]{}|]/g,Q=RegExp(Z.source),tt=/^\s+|\s+$/g,et=/^\s+/,it=/\s+$/,st=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,nt=/\{\n\/\* \[wrapped with (.+)\] \*/,rt=/,? & /,ot=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,at=/\\(\\)?/g,lt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ht=/\w*$/,ut=/^[-+]0x[0-9a-f]+$/i,ct=/^0b[01]+$/i,pt=/^\[object .+?Constructor\]$/,dt=/^0o[0-7]+$/i,gt=/^(?:0|[1-9]\d*)$/,ft=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_t=/($^)/,mt=/['\n\r\u2028\u2029\\]/g,Tt="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",yt="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+Tt,Dt=RegExp("['’]","g"),vt=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),wt=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])"+Tt,"g"),St=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",yt].join("|"),"g"),Kt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,At="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),It={};It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;var Ct={};Ct["[object Arguments]"]=Ct["[object Array]"]=Ct["[object ArrayBuffer]"]=Ct["[object DataView]"]=Ct["[object Boolean]"]=Ct["[object Date]"]=Ct["[object Float32Array]"]=Ct["[object Float64Array]"]=Ct["[object Int8Array]"]=Ct["[object Int16Array]"]=Ct["[object Int32Array]"]=Ct["[object Map]"]=Ct["[object Number]"]=Ct["[object Object]"]=Ct["[object RegExp]"]=Ct["[object Set]"]=Ct["[object String]"]=Ct["[object Symbol]"]=Ct["[object Uint8Array]"]=Ct["[object Uint8ClampedArray]"]=Ct["[object Uint16Array]"]=Ct["[object Uint32Array]"]=!0,Ct["[object Error]"]=Ct["[object Function]"]=Ct["[object WeakMap]"]=!1;var Ot={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Et=parseFloat,Pt=parseInt,xt="object"==typeof global&&global&&global.Object===Object&&global,Mt="object"==typeof self&&self&&self.Object===Object&&self,Rt=xt||Mt||Function("return this")(),Bt=exports&&!exports.nodeType&&exports,Lt=Bt&&"object"==typeof module&&module&&!module.nodeType&&module,Ft=Lt&&Lt.exports===Bt,kt=Ft&&xt.process,Ht=function(){try{var t=Lt&&Lt.require&&Lt.require("util").types;return t||kt&&kt.binding&&kt.binding("util")}catch(t){}}(),Ut=Ht&&Ht.isArrayBuffer,Wt=Ht&&Ht.isDate,jt=Ht&&Ht.isMap,Nt=Ht&&Ht.isRegExp,zt=Ht&&Ht.isSet,Vt=Ht&&Ht.isTypedArray,Gt=T("length"),qt=y({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Xt=y({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),$t=y({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),Yt=function y(Tt){function yt(t){if(js(t)&&!Po(t)&&!(t instanceof xt)){if(t instanceof Ot)return t;if(Pn.call(t,"__wrapped__"))return gs(t)}return new Ot(t)}function wt(){}function Ot(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=B}function xt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Mt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var s=t[e];this.set(s[0],s[1])}}function Bt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var s=t[e];this.set(s[0],s[1])}}function Lt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var s=t[e];this.set(s[0],s[1])}}function kt(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new Lt;++e<i;)this.add(t[e])}function Ht(t){this.size=(this.__data__=new Bt(t)).size}function Gt(t,e){var i,s=Po(t),n=!s&&Eo(t),r=!s&&!n&&Mo(t),o=!s&&!n&&!r&&ko(t),a=(n=(s=s||n||r||o)?w(t.length,bn):[]).length;for(i in t)!e&&!Pn.call(t,i)||s&&("length"==i||r&&("offset"==i||"parent"==i)||o&&("buffer"==i||"byteLength"==i||"byteOffset"==i)||ts(i,a))||n.push(i);return n}function Jt(t){var e=t.length;return e?t[We(0,e-1)]:B}function Zt(t,e,i){(i===B||Rs(t[e],i))&&(i!==B||e in t)||se(t,e,i)}function Qt(t,e,i){var s=t[e];Pn.call(t,e)&&Rs(s,i)&&(i!==B||e in t)||se(t,e,i)}function te(t,e){for(var i=t.length;i--;)if(Rs(t[i][0],e))return i;return-1}function ee(t,e,i,s){return Or(t,function(t,n,r){e(s,t,i(t),r)}),s}function ie(t,e){return t&&fi(e,sn(e),t)}function se(t,e,i){"__proto__"==e&&$n?$n(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}function ne(t,e){for(var i=-1,s=e.length,n=Tn(s),r=null==t;++i<s;)n[i]=r?B:tn(t,e[i]);return n}function re(t,e,i){return t==t&&(i!==B&&(t=t<=i?t:i),e!==B&&(t=t>=e?t:e)),t}function oe(t,e,s,n,r,o){var a,l=1&e,h=2&e,u=4&e;if(s&&(a=r?s(t,n,r,o):s(t)),a!==B)return a;if(!Ws(t))return t;if(n=Po(t)){if(a=function(t){var e=t.length,i=new t.constructor(e);return e&&"string"==typeof t[0]&&Pn.call(t,"index")&&(i.index=t.index,i.input=t.input),i}(t),!l)return gi(t,a)}else{var c=Ur(t),p="[object Function]"==c||"[object GeneratorFunction]"==c;if(Mo(t))return li(t,l);if("[object Object]"==c||"[object Arguments]"==c||p&&!r){if(a=h||p?{}:Zi(t),!l)return h?function(t,e){return fi(t,Hr(t),e)}(t,function(t,e){return t&&fi(e,nn(e),t)}(a,t)):function(t,e){return fi(t,kr(t),e)}(t,ie(a,t))}else{if(!Ct[c])return r?t:{};a=function(t,e,i){var s=t.constructor;switch(e){case"[object ArrayBuffer]":return hi(t);case"[object Boolean]":case"[object Date]":return new s(+t);case"[object DataView]":return e=i?hi(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ui(t,i);case"[object Map]":return new s;case"[object Number]":case"[object String]":return new s(t);case"[object RegExp]":return(e=new t.constructor(t.source,ht.exec(t))).lastIndex=t.lastIndex,e;case"[object Set]":return new s;case"[object Symbol]":return Ar?Sn(Ar.call(t)):{}}}(t,c,l)}}if(o||(o=new Ht),r=o.get(t))return r;if(o.set(t,a),Fo(t))return t.forEach(function(i){a.add(oe(i,e,s,i,t,o))}),a;if(Bo(t))return t.forEach(function(i,n){a.set(n,oe(i,e,s,n,t,o))}),a;h=u?h?zi:Ni:h?nn:sn;var d=n?B:h(t);return i(d||t,function(i,n){d&&(i=t[n=i]),Qt(a,n,oe(i,e,s,n,t,o))}),a}function ae(t,e,i){var s=i.length;if(null==t)return!s;for(t=Sn(t);s--;){var n=i[s],r=e[n],o=t[n];if(o===B&&!(n in t)||!r(o))return!1}return!0}function le(t,e,i){if("function"!=typeof t)throw new An("Expected a function");return Nr(function(){t.apply(B,i)},e)}function he(t,e,i,s){var n=-1,l=r,h=!0,u=t.length,c=[],p=e.length;if(!u)return c;i&&(e=a(e,S(i))),s?(l=o,h=!1):200<=e.length&&(l=b,h=!1,e=new kt(e));t:for(;++n<u;){var d=t[n],g=null==i?d:i(d);d=s||0!==d?d:0;if(h&&g==g){for(var f=p;f--;)if(e[f]===g)continue t;c.push(d)}else l(e,g,s)||c.push(d)}return c}function ue(t,e){var i=!0;return Or(t,function(t,s,n){return i=!!e(t,s,n)}),i}function ce(t,e,i){for(var s=-1,n=t.length;++s<n;){var r=t[s],o=e(r);if(null!=o&&(a===B?o==o&&!Gs(o):i(o,a)))var a=o,l=r}return l}function pe(t,e){var i=[];return Or(t,function(t,s,n){e(t,s,n)&&i.push(t)}),i}function de(t,e,i,s,n){var r=-1,o=t.length;for(i||(i=Qi),n||(n=[]);++r<o;){var a=t[r];0<e&&i(a)?1<e?de(a,e-1,i,s,n):l(n,a):s||(n[n.length]=a)}return n}function ge(t,e){return t&&Pr(t,e,sn)}function fe(t,e){return t&&xr(t,e,sn)}function _e(t,e){return n(e,function(e){return ks(t[e])})}function me(t,e){for(var i=0,s=(e=oi(e,t)).length;null!=t&&i<s;)t=t[cs(e[i++])];return i&&i==s?t:B}function Te(t,e,i){return e=e(t),Po(t)?e:l(e,i(t))}function ye(t){if(null==t)return t===B?"[object Undefined]":"[object Null]";if(Xn&&Xn in Sn(t)){var e=Pn.call(t,Xn),i=t[Xn];try{t[Xn]=B;var s=!0}catch(t){}var n=Rn.call(t);s&&(e?t[Xn]=i:delete t[Xn]),t=n}else t=Rn.call(t);return t}function De(t,e){return t>e}function ve(t,e){return null!=t&&Pn.call(t,e)}function we(t,e){return null!=t&&e in Sn(t)}function Se(t,e,i){for(var s=i?o:r,n=t[0].length,l=t.length,h=l,u=Tn(l),c=1/0,p=[];h--;){var d=t[h];h&&e&&(d=a(d,S(e))),c=ar(d.length,c),u[h]=!i&&(e||120<=n&&120<=d.length)?new kt(h&&d):B}d=t[0];var g=-1,f=u[0];t:for(;++g<n&&p.length<c;){var _=d[g],m=e?e(_):_;_=i||0!==_?_:0;if(f?!b(f,m):!s(p,m,i)){for(h=l;--h;){var T=u[h];if(T?!b(T,m):!s(t[h],m,i))continue t}f&&f.push(m),p.push(_)}}return p}function Ke(e,i,s){return null==(i=null==(e=2>(i=oi(i,e)).length?e:me(e,Ve(i,0,-1)))?e:e[cs(ys(i))])?B:t(i,e,s)}function be(t){return js(t)&&"[object Arguments]"==ye(t)}function Ae(t,e,i,s,n){if(t===e)return!0;if(null==t||null==e||!js(t)&&!js(e))return t!=t&&e!=e;t:{var r=Po(t),o=Po(e),a=r?"[object Array]":Ur(t),l=o?"[object Array]":Ur(e),h="[object Object]"==(a="[object Arguments]"==a?"[object Object]":a);o="[object Object]"==(l="[object Arguments]"==l?"[object Object]":l);if((l=a==l)&&Mo(t)){if(!Mo(e)){e=!1;break t}r=!0,h=!1}if(l&&!h)n||(n=new Ht),e=r||ko(t)?Wi(t,e,i,s,Ae,n):function(t,e,i,s,n,r,o){switch(i){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!r(new Un(t),new Un(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return Rs(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=O;case"[object Set]":if(a||(a=x),t.size!=e.size&&!(1&s))break;return(i=o.get(t))?i==e:(s|=2,o.set(t,e),e=Wi(a(t),a(e),s,n,r,o),o.delete(t),e);case"[object Symbol]":if(Ar)return Ar.call(t)==Ar.call(e)}return!1}(t,e,a,i,s,Ae,n);else{if(!(1&i)&&(r=h&&Pn.call(t,"__wrapped__"),a=o&&Pn.call(e,"__wrapped__"),r||a)){t=r?t.value():t,e=a?e.value():e,n||(n=new Ht),e=Ae(t,e,i,s,n);break t}if(l)e:if(n||(n=new Ht),r=1&i,a=Ni(t),o=a.length,l=Ni(e).length,o==l||r){for(h=o;h--;){var u=a[h];if(!(r?u in e:Pn.call(e,u))){e=!1;break e}}if((l=n.get(t))&&n.get(e))e=l==e;else{l=!0,n.set(t,e),n.set(e,t);for(var c=r;++h<o;){var p=t[u=a[h]],d=e[u];if(s)var g=r?s(d,p,u,e,t,n):s(p,d,u,t,e,n);if(g===B?p!==d&&!Ae(p,d,i,s,n):!g){l=!1;break}c||(c="constructor"==u)}l&&!c&&((i=t.constructor)!=(s=e.constructor)&&"constructor"in t&&"constructor"in e&&!("function"==typeof i&&i instanceof i&&"function"==typeof s&&s instanceof s)&&(l=!1)),n.delete(t),n.delete(e),e=l}}else e=!1;else e=!1}}return e}function Ie(t,e,i,s){var n=i.length,r=n,o=!s;if(null==t)return!r;for(t=Sn(t);n--;){var a=i[n];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++n<r;){var l=(a=i[n])[0],h=t[l],u=a[1];if(o&&a[2]){if(h===B&&!(l in t))return!1}else{if(a=new Ht,s)var c=s(h,u,l,t,e,a);if(c===B?!Ae(u,h,3,s,a):!c)return!1}}return!0}function Ce(t){return!(!Ws(t)||Mn&&Mn in t)&&(ks(t)?Fn:pt).test(ps(t))}function Oe(t){return"function"==typeof t?t:null==t?cn:"object"==typeof t?Po(t)?Re(t[0],t[1]):Me(t):fn(t)}function Ee(t){if(!ns(t))return rr(t);var e,i=[];for(e in Sn(t))Pn.call(t,e)&&"constructor"!=e&&i.push(e);return i}function Pe(t,e){return t<e}function xe(t,e){var i=-1,s=Bs(t)?Tn(t.length):[];return Or(t,function(t,n,r){s[++i]=e(t,n,r)}),s}function Me(t){var e=$i(t);return 1==e.length&&e[0][2]?rs(e[0][0],e[0][1]):function(i){return i===t||Ie(i,t,e)}}function Re(t,e){return is(t)&&e==e&&!Ws(e)?rs(cs(t),e):function(i){var s=tn(i,t);return s===B&&s===e?en(i,t):Ae(e,s,3)}}function Be(t,e,i,s,n){t!==e&&Pr(e,function(r,o){if(Ws(r)){n||(n=new Ht);var a=n,l=as(t,o),h=as(e,o);if(!(g=a.get(h))){var u=(g=s?s(l,h,o+"",t,e,a):B)===B;if(u){var c=Po(h),p=!c&&Mo(h),d=!c&&!p&&ko(h),g=h;c||p||d?Po(l)?g=l:Ls(l)?g=gi(l):p?(u=!1,g=li(h,!0)):d?(u=!1,g=ui(h,!0)):g=[]:zs(h)||Eo(h)?(g=l,Eo(l)?g=Zs(l):Ws(l)&&!ks(l)||(g=Zi(h))):u=!1}u&&(a.set(h,g),Be(g,h,i,s,a),a.delete(h))}Zt(t,o,g)}else(a=s?s(as(t,o),r,o+"",t,e,n):B)===B&&(a=r),Zt(t,o,a)},nn)}function Le(t,e){var i=t.length;if(i)return ts(e+=0>e?i:0,i)?t[e]:B}function Fe(t,e,i){var s=-1;return e=a(e.length?e:[cn],S(qi())),function(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].c;return t}(t=xe(t,function(t,i,n){return{a:a(e,function(e){return e(t)}),b:++s,c:t}}),function(t,e){var s;t:{s=-1;for(var n=t.a,r=e.a,o=n.length,a=i.length;++s<o;){var l=ci(n[s],r[s]);if(l){if(s>=a){s=l;break t}s=l*("desc"==i[s]?-1:1);break t}}s=t.b-e.b}return s})}function ke(t,e,i){for(var s=-1,n=e.length,r={};++s<n;){var o=e[s],a=me(t,o);i(a,o)&&ze(r,oi(o,t),a)}return r}function He(t,e,i,s){var n=s?f:g,r=-1,o=e.length,l=t;for(t===e&&(e=gi(e)),i&&(l=a(t,S(i)));++r<o;){var h=0,u=e[r];for(u=i?i(u):u;-1<(h=n(l,u,h,s));)l!==t&&Vn.call(l,h,1),Vn.call(t,h,1)}return t}function Ue(t,e){for(var i=t?e.length:0,s=i-1;i--;){var n=e[i];if(i==s||n!==r){var r=n;ts(n)?Vn.call(t,n,1):Qe(t,n)}}return t}function We(t,e){return t+tr(ur()*(e-t+1))}function je(t,e){var i="";if(!t||1>e||9007199254740991<e)return i;do{e%2&&(i+=t),(e=tr(e/2))&&(t+=t)}while(e);return i}function Ne(t,e){return zr(os(t,e,cn),t+"")}function ze(t,e,i,s){if(!Ws(t))return t;for(var n=-1,r=(e=oi(e,t)).length,o=r-1,a=t;null!=a&&++n<r;){var l=cs(e[n]),h=i;if(n!=o){var u=a[l];(h=s?s(u,l,a):B)===B&&(h=Ws(u)?u:ts(e[n+1])?[]:{})}Qt(a,l,h),a=a[l]}return t}function Ve(t,e,i){var s=-1,n=t.length;for(0>e&&(e=-e>n?0:n+e),0>(i=i>n?n:i)&&(i+=n),n=e>i?0:i-e>>>0,e>>>=0,i=Tn(n);++s<n;)i[s]=t[s+e];return i}function Ge(t,e){var i;return Or(t,function(t,s,n){return!(i=e(t,s,n))}),!!i}function qe(t,e,i){var s=0,n=null==t?s:t.length;if("number"==typeof e&&e==e&&2147483647>=n){for(;s<n;){var r=s+n>>>1,o=t[r];null!==o&&!Gs(o)&&(i?o<=e:o<e)?s=r+1:n=r}return n}return Xe(t,e,cn,i)}function Xe(t,e,i,s){e=i(e);for(var n=0,r=null==t?0:t.length,o=e!=e,a=null===e,l=Gs(e),h=e===B;n<r;){var u=tr((n+r)/2),c=i(t[u]),p=c!==B,d=null===c,g=c==c,f=Gs(c);(o?s||g:h?g&&(s||p):a?g&&p&&(s||!d):l?g&&p&&!d&&(s||!f):!d&&!f&&(s?c<=e:c<e))?n=u+1:r=u}return ar(r,4294967294)}function $e(t,e){for(var i=-1,s=t.length,n=0,r=[];++i<s;){var o=t[i],a=e?e(o):o;if(!i||!Rs(a,l)){var l=a;r[n++]=0===o?0:o}}return r}function Ye(t){return"number"==typeof t?t:Gs(t)?F:+t}function Je(t){if("string"==typeof t)return t;if(Po(t))return a(t,Je)+"";if(Gs(t))return Ir?Ir.call(t):"";var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Ze(t,e,i){var s=-1,n=r,a=t.length,l=!0,h=[],u=h;if(i)l=!1,n=o;else if(200<=a){if(n=e?null:Lr(t))return x(n);l=!1,n=b,u=new kt}else u=e?[]:h;t:for(;++s<a;){var c=t[s],p=e?e(c):c;c=i||0!==c?c:0;if(l&&p==p){for(var d=u.length;d--;)if(u[d]===p)continue t;e&&u.push(p),h.push(c)}else n(u,p,i)||(u!==h&&u.push(p),h.push(c))}return h}function Qe(t,e){return null==(t=2>(e=oi(e,t)).length?t:me(t,Ve(e,0,-1)))||delete t[cs(ys(e))]}function ti(t,e,i,s){for(var n=t.length,r=s?n:-1;(s?r--:++r<n)&&e(t[r],r,t););return i?Ve(t,s?0:r,s?r+1:n):Ve(t,s?r+1:0,s?n:r)}function ei(t,e){var i=t;return i instanceof xt&&(i=i.value()),h(e,function(t,e){return e.func.apply(e.thisArg,l([t],e.args))},i)}function ii(t,e,i){var s=t.length;if(2>s)return s?Ze(t[0]):[];for(var n=-1,r=Tn(s);++n<s;)for(var o=t[n],a=-1;++a<s;)a!=n&&(r[n]=he(r[n]||o,t[a],e,i));return Ze(de(r,1),e,i)}function si(t,e,i){for(var s=-1,n=t.length,r=e.length,o={};++s<n;)i(o,t[s],s<r?e[s]:B);return o}function ni(t){return Ls(t)?t:[]}function ri(t){return"function"==typeof t?t:cn}function oi(t,e){return Po(t)?t:is(t,e)?[t]:Vr(Qs(t))}function ai(t,e,i){var s=t.length;return i=i===B?s:i,!e&&i>=s?t:Ve(t,e,i)}function li(t,e){if(e)return t.slice();var i=t.length;i=Wn?Wn(i):new t.constructor(i);return t.copy(i),i}function hi(t){var e=new t.constructor(t.byteLength);return new Un(e).set(new Un(t)),e}function ui(t,e){return new t.constructor(e?hi(t.buffer):t.buffer,t.byteOffset,t.length)}function ci(t,e){if(t!==e){var i=t!==B,s=null===t,n=t==t,r=Gs(t),o=e!==B,a=null===e,l=e==e,h=Gs(e);if(!a&&!h&&!r&&t>e||r&&o&&l&&!a&&!h||s&&o&&l||!i&&l||!n)return 1;if(!s&&!r&&!h&&t<e||h&&i&&n&&!s&&!r||a&&i&&n||!o&&n||!l)return-1}return 0}function pi(t,e,i,s){var n=-1,r=t.length,o=i.length,a=-1,l=e.length,h=or(r-o,0),u=Tn(l+h);for(s=!s;++a<l;)u[a]=e[a];for(;++n<o;)(s||n<r)&&(u[i[n]]=t[n]);for(;h--;)u[a++]=t[n++];return u}function di(t,e,i,s){var n=-1,r=t.length,o=-1,a=i.length,l=-1,h=e.length,u=or(r-a,0),c=Tn(u+h);for(s=!s;++n<u;)c[n]=t[n];for(u=n;++l<h;)c[u+l]=e[l];for(;++o<a;)(s||n<r)&&(c[u+i[o]]=t[n++]);return c}function gi(t,e){var i=-1,s=t.length;for(e||(e=Tn(s));++i<s;)e[i]=t[i];return e}function fi(t,e,i,s){var n=!i;i||(i={});for(var r=-1,o=e.length;++r<o;){var a=e[r],l=s?s(i[a],t[a],a,i,t):B;l===B&&(l=t[a]),n?se(i,a,l):Qt(i,a,l)}return i}function _i(t,i){return function(s,n){var r=Po(s)?e:ee,o=i?i():{};return r(s,t,qi(n,2),o)}}function mi(t){return Ne(function(e,i){var s=-1,n=i.length,r=1<n?i[n-1]:B,o=2<n?i[2]:B;r=3<t.length&&"function"==typeof r?(n--,r):B;for(o&&es(i[0],i[1],o)&&(r=3>n?B:r,n=1),e=Sn(e);++s<n;)(o=i[s])&&t(e,o,s,r);return e})}function Ti(t,e){return function(i,s){if(null==i)return i;if(!Bs(i))return t(i,s);for(var n=i.length,r=e?n:-1,o=Sn(i);(e?r--:++r<n)&&!1!==s(o[r],r,o););return i}}function yi(t){return function(e,i,s){for(var n=-1,r=Sn(e),o=(s=s(e)).length;o--;){var a=s[t?o:++n];if(!1===i(r[a],a,r))break}return e}}function Di(t){return function(e){e=Qs(e);var i=Kt.test(e)?R(e):B,s=i?i[0]:e.charAt(0);return e=i?ai(i,1).join(""):e.slice(1),s[t]()+e}}function vi(t){return function(e){return h(hn(ln(e).replace(Dt,"")),t,"")}}function wi(t){return function(){switch((e=arguments).length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var e,i=Cr(t.prototype);return Ws(e=t.apply(i,e))?e:i}}function Si(e,i,s){var n=wi(e);return function r(){for(var o=arguments.length,a=Tn(o),l=o,h=Gi(r);l--;)a[l]=arguments[l];return(o-=(l=3>o&&a[0]!==h&&a[o-1]!==h?[]:P(a,h)).length)<s?Ri(e,i,Ai,r.placeholder,B,a,l,B,B,s-o):t(this&&this!==Rt&&this instanceof r?n:e,this,a)}}function Ki(t){return function(e,i,s){var n=Sn(e);if(!Bs(e)){var r=qi(i,3);e=sn(e),i=function(t){return r(n[t],t,n)}}return-1<(i=t(e,i,s))?n[r?e[i]:i]:B}}function bi(t){return ji(function(e){var i=e.length,s=i,n=Ot.prototype.thru;for(t&&e.reverse();s--;){if("function"!=typeof(o=e[s]))throw new An("Expected a function");if(n&&!r&&"wrapper"==Vi(o))var r=new Ot([],!0)}for(s=r?s:i;++s<i;){var o,a="wrapper"==(n=Vi(o=e[s]))?Fr(o):B;r=a&&ss(a[0])&&424==a[1]&&!a[4].length&&1==a[9]?r[Vi(a[0])].apply(r,a[3]):1==o.length&&ss(o)?r[n]():r.thru(o)}return function(){var t=(n=arguments)[0];if(r&&1==n.length&&Po(t))return r.plant(t).value();for(var s=0,n=i?e[s].apply(this,n):t;++s<i;)n=e[s].call(this,n);return n}})}function Ai(t,e,i,s,n,r,o,a,l,h){var u=128&e,c=1&e,p=2&e,d=24&e,g=512&e,f=p?B:wi(t);return function _(){for(var m=arguments.length,T=Tn(m),y=m;y--;)T[y]=arguments[y];if(d){var D,v=Gi(_);for(y=T.length,D=0;y--;)T[y]===v&&++D}if(s&&(T=pi(T,s,n,d)),r&&(T=di(T,r,o,d)),m-=D,d&&m<h)return v=P(T,v),Ri(t,e,Ai,_.placeholder,i,T,v,a,l,h-m);if(v=c?i:this,y=p?v[t]:t,m=T.length,a){D=T.length;for(var w=ar(a.length,D),S=gi(T);w--;){var K=a[w];T[w]=ts(K,D)?S[K]:B}}else g&&1<m&&T.reverse();return u&&l<m&&(T.length=l),this&&this!==Rt&&this instanceof _&&(y=f||wi(y)),y.apply(v,T)}}function Ii(t,e){return function(i,s){return function(t,e,i,s){return ge(t,function(t,n,r){e(s,i(t),n,r)}),s}(i,t,e(s),{})}}function Ci(t,e){return function(i,s){var n;if(i===B&&s===B)return e;if(i!==B&&(n=i),s!==B){if(n===B)return s;"string"==typeof i||"string"==typeof s?(i=Je(i),s=Je(s)):(i=Ye(i),s=Ye(s)),n=t(i,s)}return n}}function Oi(e){return ji(function(i){return i=a(i,S(qi())),Ne(function(s){var n=this;return e(i,function(e){return t(e,n,s)})})})}function Ei(t,e){var i=(e=e===B?" ":Je(e)).length;return 2>i?i?je(e,t):e:(i=je(e,Qn(t/M(e))),Kt.test(e)?ai(R(i),0,t).join(""):i.slice(0,t))}function Pi(e,i,s,n){var r=1&i,o=wi(e);return function i(){for(var a=-1,l=arguments.length,h=-1,u=n.length,c=Tn(u+l),p=this&&this!==Rt&&this instanceof i?o:e;++h<u;)c[h]=n[h];for(;l--;)c[h++]=arguments[++a];return t(p,r?s:this,c)}}function xi(t){return function(e,i,s){s&&"number"!=typeof s&&es(e,i,s)&&(i=s=B),e=Xs(e),i===B?(i=e,e=0):i=Xs(i),s=s===B?e<i?1:-1:Xs(s);var n=-1;i=or(Qn((i-e)/(s||1)),0);for(var r=Tn(i);i--;)r[t?i:++n]=e,e+=s;return r}}function Mi(t){return function(e,i){return"string"==typeof e&&"string"==typeof i||(e=Js(e),i=Js(i)),t(e,i)}}function Ri(t,e,i,s,n,r,o,a,l,h){var u=8&e,c=u?o:B;o=u?B:o;var p=u?r:B;return r=u?B:r,4&(e=(e|(u?32:64))&~(u?64:32))||(e&=-4),n=[t,e,n,p,c,r,o,a,l,h],i=i.apply(B,n),ss(t)&&jr(i,n),i.placeholder=s,ls(i,t,e)}function Bi(t){var e=wn[t];return function(t,i){if(t=Js(t),i=null==i?0:ar($s(i),292)){var s=(Qs(t)+"e").split("e");return+((s=(Qs(s=e(s[0]+"e"+(+s[1]+i)))+"e").split("e"))[0]+"e"+(+s[1]-i))}return e(t)}}function Li(t){return function(e){var i=Ur(e);return"[object Map]"==i?O(e):"[object Set]"==i?function(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=[t,t]}),i}(e):function(t,e){return a(e,function(e){return[e,t[e]]})}(e,t(e))}}function Fi(t,e,i,s,n,r,o,a){var l=2&e;if(!l&&"function"!=typeof t)throw new An("Expected a function");var h=s?s.length:0;if(h||(e&=-97,s=n=B),o=o===B?o:or($s(o),0),a=a===B?a:$s(a),h-=n?n.length:0,64&e){var u=s,c=n;s=n=B}var p=l?B:Fr(t);return r=[t,e,i,s,n,u,c,r,o,a],p&&(e=(i=r[1])|(t=p[1]),s=128==t&&8==i||128==t&&256==i&&r[7].length<=p[8]||384==t&&p[7].length<=p[8]&&8==i,131>e||s)&&(1&t&&(r[2]=p[2],e|=1&i?0:4),(i=p[3])&&(s=r[3],r[3]=s?pi(s,i,p[4]):i,r[4]=s?P(r[3],"__lodash_placeholder__"):p[4]),(i=p[5])&&(s=r[5],r[5]=s?di(s,i,p[6]):i,r[6]=s?P(r[5],"__lodash_placeholder__"):p[6]),(i=p[7])&&(r[7]=i),128&t&&(r[8]=null==r[8]?p[8]:ar(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=e),t=r[0],e=r[1],i=r[2],s=r[3],n=r[4],!(a=r[9]=r[9]===B?l?0:t.length:or(r[9]-h,0))&&24&e&&(e&=-25),l=e&&1!=e?8==e||16==e?Si(t,e,a):32!=e&&33!=e||n.length?Ai.apply(B,r):Pi(t,e,i,s):function(t,e,i){var s=1&e,n=wi(t);return function e(){return(this&&this!==Rt&&this instanceof e?n:t).apply(s?i:this,arguments)}}(t,e,i),ls((p?Mr:jr)(l,r),t,e)}function ki(t,e,i,s){return t===B||Rs(t,Cn[i])&&!Pn.call(s,i)?e:t}function Hi(t,e,i,s,n,r){return Ws(t)&&Ws(e)&&(r.set(e,t),Be(t,e,B,Hi,r),r.delete(e)),t}function Ui(t){return zs(t)?B:t}function Wi(t,e,i,s,n,r){var o=1&i,a=t.length;if(a!=(l=e.length)&&!(o&&l>a))return!1;if((l=r.get(t))&&r.get(e))return l==e;var l=-1,h=!0,u=2&i?new kt:B;for(r.set(t,e),r.set(e,t);++l<a;){var p=t[l],d=e[l];if(s)var g=o?s(d,p,l,e,t,r):s(p,d,l,t,e,r);if(g!==B){if(g)continue;h=!1;break}if(u){if(!c(e,function(t,e){if(!b(u,e)&&(p===t||n(p,t,i,s,r)))return u.push(e)})){h=!1;break}}else if(p!==d&&!n(p,d,i,s,r)){h=!1;break}}return r.delete(t),r.delete(e),h}function ji(t){return zr(os(t,B,ms),t+"")}function Ni(t){return Te(t,sn,kr)}function zi(t){return Te(t,nn,Hr)}function Vi(t){for(var e=t.name+"",i=yr[e],s=Pn.call(yr,e)?i.length:0;s--;){var n=i[s],r=n.func;if(null==r||r==t)return n.name}return e}function Gi(t){return(Pn.call(yt,"placeholder")?yt:t).placeholder}function qi(){var t=(t=yt.iteratee||pn)===pn?Oe:t;return arguments.length?t(arguments[0],arguments[1]):t}function Xi(t,e){var i=t.__data__,s=typeof e;return("string"==s||"number"==s||"symbol"==s||"boolean"==s?"__proto__"!==e:null===e)?i["string"==typeof e?"string":"hash"]:i.map}function $i(t){for(var e=sn(t),i=e.length;i--;){var s=e[i],n=t[s];e[i]=[s,n,n==n&&!Ws(n)]}return e}function Yi(t,e){var i=null==t?B:t[e];return Ce(i)?i:B}function Ji(t,e,i){for(var s=-1,n=(e=oi(e,t)).length,r=!1;++s<n;){var o=cs(e[s]);if(!(r=null!=t&&i(t,o)))break;t=t[o]}return r||++s!=n?r:!!(n=null==t?0:t.length)&&Us(n)&&ts(o,n)&&(Po(t)||Eo(t))}function Zi(t){return"function"!=typeof t.constructor||ns(t)?{}:Cr(jn(t))}function Qi(t){return Po(t)||Eo(t)||!!(Gn&&t&&t[Gn])}function ts(t,e){var i=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==i||"symbol"!=i&&gt.test(t))&&-1<t&&0==t%1&&t<e}function es(t,e,i){if(!Ws(i))return!1;var s=typeof e;return!!("number"==s?Bs(i)&&ts(e,i.length):"string"==s&&e in i)&&Rs(i[e],t)}function is(t,e){if(Po(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!Gs(t))||Y.test(t)||!$.test(t)||null!=e&&t in Sn(e)}function ss(t){var e=Vi(t),i=yt[e];return"function"==typeof i&&e in xt.prototype&&(t===i||!!(e=Fr(i))&&t===e[0])}function ns(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Cn)}function rs(t,e){return function(i){return null!=i&&i[t]===e&&(e!==B||t in Sn(i))}}function os(e,i,s){return i=or(i===B?e.length-1:i,0),function(){for(var n=arguments,r=-1,o=or(n.length-i,0),a=Tn(o);++r<o;)a[r]=n[i+r];for(r=-1,o=Tn(i+1);++r<i;)o[r]=n[r];return o[i]=s(a),t(e,this,o)}}function as(t,e){if("__proto__"!=e)return t[e]}function ls(t,e,i){var s=e+"";e=zr;var n,r=ds;return(r=(i=r(n=(n=s.match(nt))?n[1].split(rt):[],i)).length)&&(i[n=r-1]=(1<r?"& ":"")+i[n],i=i.join(2<r?", ":" "),s=s.replace(st,"{\n/* [wrapped with "+i+"] */\n")),e(t,s)}function hs(t){var e=0,i=0;return function(){var s=lr(),n=16-(s-i);if(i=s,0<n){if(800<=++e)return arguments[0]}else e=0;return t.apply(B,arguments)}}function us(t,e){var i=-1,s=(n=t.length)-1;for(e=e===B?n:e;++i<e;){var n,r=t[n=We(i,s)];t[n]=t[i],t[i]=r}return t.length=e,t}function cs(t){if("string"==typeof t||Gs(t))return t;var e=t+"";return"0"==e&&1/t==-L?"-0":e}function ps(t){if(null!=t){try{return En.call(t)}catch(t){}return t+""}return""}function ds(t,e){return i(k,function(i){var s="_."+i[0];e&i[1]&&!r(t,s)&&t.push(s)}),t.sort()}function gs(t){if(t instanceof xt)return t.clone();var e=new Ot(t.__wrapped__,t.__chain__);return e.__actions__=gi(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function fs(t,e,i){var s=null==t?0:t.length;return s?(0>(i=null==i?0:$s(i))&&(i=or(s+i,0)),d(t,qi(e,3),i)):-1}function _s(t,e,i){var s=null==t?0:t.length;if(!s)return-1;var n=s-1;return i!==B&&(n=$s(i),n=0>i?or(s+n,0):ar(n,s-1)),d(t,qi(e,3),n,!0)}function ms(t){return null!=t&&t.length?de(t,1):[]}function Ts(t){return t&&t.length?t[0]:B}function ys(t){var e=null==t?0:t.length;return e?t[e-1]:B}function Ds(t,e){return t&&t.length&&e&&e.length?He(t,e):t}function vs(t){return null==t?t:cr.call(t)}function ws(t){if(!t||!t.length)return[];var e=0;return t=n(t,function(t){if(Ls(t))return e=or(t.length,e),!0}),w(e,function(e){return a(t,T(e))})}function Ss(e,i){if(!e||!e.length)return[];var s=ws(e);return null==i?s:a(s,function(e){return t(i,B,e)})}function Ks(t){return(t=yt(t)).__chain__=!0,t}function bs(t,e){return e(t)}function As(t,e){return(Po(t)?i:Or)(t,qi(e,3))}function Is(t,e){return(Po(t)?function(t,e){for(var i=null==t?0:t.length;i--&&!1!==e(t[i],i,t););return t}:Er)(t,qi(e,3))}function Cs(t,e){return(Po(t)?a:xe)(t,qi(e,3))}function Os(t,e,i){return e=i?B:e,e=t&&null==e?t.length:e,Fi(t,128,B,B,B,B,e)}function Es(t,e){var i;if("function"!=typeof e)throw new An("Expected a function");return t=$s(t),function(){return 0<--t&&(i=e.apply(this,arguments)),1>=t&&(e=B),i}}function Ps(t,e,i){function s(e){var i=l,s=h;return l=h=B,g=e,c=t.apply(s,i)}function n(t){var i=t-d;return t-=g,d===B||i>=e||0>i||_&&t>=u}function r(){var t=yo();if(n(t))return o(t);var i,s=Nr;i=t-g,t=e-(t-d),i=_?ar(t,u-i):t,p=s(r,i)}function o(t){return p=B,m&&l?s(t):(l=h=B,c)}function a(){var t=yo(),i=n(t);if(l=arguments,h=this,d=t,i){if(p===B)return g=t=d,p=Nr(r,e),f?s(t):c;if(_)return p=Nr(r,e),s(d)}return p===B&&(p=Nr(r,e)),c}var l,h,u,c,p,d,g=0,f=!1,_=!1,m=!0;if("function"!=typeof t)throw new An("Expected a function");return e=Js(e)||0,Ws(i)&&(f=!!i.leading,u=(_="maxWait"in i)?or(Js(i.maxWait)||0,e):u,m="trailing"in i?!!i.trailing:m),a.cancel=function(){p!==B&&Br(p),g=0,l=d=h=p=B},a.flush=function(){return p===B?c:o(yo())},a}function xs(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new An("Expected a function");var i=function(){var s=arguments,n=e?e.apply(this,s):s[0],r=i.cache;return r.has(n)?r.get(n):(s=t.apply(this,s),i.cache=r.set(n,s)||r,s)};return i.cache=new(xs.Cache||Lt),i}function Ms(t){if("function"!=typeof t)throw new An("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Rs(t,e){return t===e||t!=t&&e!=e}function Bs(t){return null!=t&&Us(t.length)&&!ks(t)}function Ls(t){return js(t)&&Bs(t)}function Fs(t){if(!js(t))return!1;var e=ye(t);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!zs(t)}function ks(t){return!!Ws(t)&&("[object Function]"==(t=ye(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function Hs(t){return"number"==typeof t&&t==$s(t)}function Us(t){return"number"==typeof t&&-1<t&&0==t%1&&9007199254740991>=t}function Ws(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function js(t){return null!=t&&"object"==typeof t}function Ns(t){return"number"==typeof t||js(t)&&"[object Number]"==ye(t)}function zs(t){return!(!js(t)||"[object Object]"!=ye(t))&&(null===(t=jn(t))||"function"==typeof(t=Pn.call(t,"constructor")&&t.constructor)&&t instanceof t&&En.call(t)==Bn)}function Vs(t){return"string"==typeof t||!Po(t)&&js(t)&&"[object String]"==ye(t)}function Gs(t){return"symbol"==typeof t||js(t)&&"[object Symbol]"==ye(t)}function qs(t){if(!t)return[];if(Bs(t))return Vs(t)?R(t):gi(t);if(qn&&t[qn]){t=t[qn]();for(var e,i=[];!(e=t.next()).done;)i.push(e.value);return i}return("[object Map]"==(e=Ur(t))?O:"[object Set]"==e?x:on)(t)}function Xs(t){return t?(t=Js(t))===L||t===-L?1.7976931348623157e308*(0>t?-1:1):t==t?t:0:0===t?t:0}function $s(t){var e=(t=Xs(t))%1;return t==t?e?t-e:t:0}function Ys(t){return t?re($s(t),0,4294967295):0}function Js(t){if("number"==typeof t)return t;if(Gs(t))return F;if(Ws(t)&&(t=Ws(t="function"==typeof t.valueOf?t.valueOf():t)?t+"":t),"string"!=typeof t)return 0===t?t:+t;t=t.replace(tt,"");var e=ct.test(t);return e||dt.test(t)?Pt(t.slice(2),e?2:8):ut.test(t)?F:+t}function Zs(t){return fi(t,nn(t))}function Qs(t){return null==t?"":Je(t)}function tn(t,e,i){return(t=null==t?B:me(t,e))===B?i:t}function en(t,e){return null!=t&&Ji(t,e,we)}function sn(t){return Bs(t)?Gt(t):Ee(t)}function nn(t){if(Bs(t))t=Gt(t,!0);else if(Ws(t)){var e,i=ns(t),s=[];for(e in t)("constructor"!=e||!i&&Pn.call(t,e))&&s.push(e);t=s}else{if(e=[],null!=t)for(i in Sn(t))e.push(i);t=e}return t}function rn(t,e){if(null==t)return{};var i=a(zi(t),function(t){return[t]});return e=qi(e),ke(t,i,function(t,i){return e(t,i[0])})}function on(t){return null==t?[]:K(t,sn(t))}function an(t){return ua(Qs(t).toLowerCase())}function ln(t){return(t=Qs(t))&&t.replace(ft,qt).replace(vt,"")}function hn(t,e,i){return t=Qs(t),(e=i?B:e)===B?bt.test(t)?t.match(St)||[]:t.match(ot)||[]:t.match(e)||[]}function un(t){return function(){return t}}function cn(t){return t}function pn(t){return Oe("function"==typeof t?t:oe(t,1))}function dn(t,e,s){var n=sn(e),r=_e(e,n);null!=s||Ws(e)&&(r.length||!n.length)||(s=e,e=t,t=this,r=_e(e,sn(e)));var o=!(Ws(s)&&"chain"in s&&!s.chain),a=ks(t);return i(r,function(i){var s=e[i];t[i]=s,a&&(t.prototype[i]=function(){var e=this.__chain__;if(o||e){var i=t(this.__wrapped__);return(i.__actions__=gi(this.__actions__)).push({func:s,args:arguments,thisArg:t}),i.__chain__=e,i}return s.apply(t,l([this.value()],arguments))})}),t}function gn(){}function fn(t){return is(t)?T(cs(t)):function(t){return function(e){return me(e,t)}}(t)}function _n(){return[]}function mn(){return!1}var Tn=(Tt=null==Tt?Rt:Yt.defaults(Rt.Object(),Tt,Yt.pick(Rt,At))).Array,yn=Tt.Date,Dn=Tt.Error,vn=Tt.Function,wn=Tt.Math,Sn=Tt.Object,Kn=Tt.RegExp,bn=Tt.String,An=Tt.TypeError,In=Tn.prototype,Cn=Sn.prototype,On=Tt["__core-js_shared__"],En=vn.prototype.toString,Pn=Cn.hasOwnProperty,xn=0,Mn=function(){var t=/[^.]+$/.exec(On&&On.keys&&On.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Rn=Cn.toString,Bn=En.call(Sn),Ln=Rt._,Fn=Kn("^"+En.call(Pn).replace(Z,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kn=Ft?Tt.Buffer:B,Hn=Tt.Symbol,Un=Tt.Uint8Array,Wn=kn?kn.allocUnsafe:B,jn=E(Sn.getPrototypeOf,Sn),Nn=Sn.create,zn=Cn.propertyIsEnumerable,Vn=In.splice,Gn=Hn?Hn.isConcatSpreadable:B,qn=Hn?Hn.iterator:B,Xn=Hn?Hn.toStringTag:B,$n=function(){try{var t=Yi(Sn,"defineProperty");return t({},"",{}),t}catch(t){}}(),Yn=Tt.clearTimeout!==Rt.clearTimeout&&Tt.clearTimeout,Jn=yn&&yn.now!==Rt.Date.now&&yn.now,Zn=Tt.setTimeout!==Rt.setTimeout&&Tt.setTimeout,Qn=wn.ceil,tr=wn.floor,er=Sn.getOwnPropertySymbols,ir=kn?kn.isBuffer:B,sr=Tt.isFinite,nr=In.join,rr=E(Sn.keys,Sn),or=wn.max,ar=wn.min,lr=yn.now,hr=Tt.parseInt,ur=wn.random,cr=In.reverse,pr=Yi(Tt,"DataView"),dr=Yi(Tt,"Map"),gr=Yi(Tt,"Promise"),fr=Yi(Tt,"Set"),_r=Yi(Tt,"WeakMap"),mr=Yi(Sn,"create"),Tr=_r&&new _r,yr={},Dr=ps(pr),vr=ps(dr),wr=ps(gr),Sr=ps(fr),Kr=ps(_r),br=Hn?Hn.prototype:B,Ar=br?br.valueOf:B,Ir=br?br.toString:B,Cr=function(){function t(){}return function(e){return Ws(e)?Nn?Nn(e):(t.prototype=e,e=new t,t.prototype=B,e):{}}}();yt.templateSettings={escape:G,evaluate:q,interpolate:X,variable:"",imports:{_:yt}},yt.prototype=wt.prototype,yt.prototype.constructor=yt,Ot.prototype=Cr(wt.prototype),Ot.prototype.constructor=Ot,xt.prototype=Cr(wt.prototype),xt.prototype.constructor=xt,Mt.prototype.clear=function(){this.__data__=mr?mr(null):{},this.size=0},Mt.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},Mt.prototype.get=function(t){var e=this.__data__;return mr?"__lodash_hash_undefined__"===(t=e[t])?B:t:Pn.call(e,t)?e[t]:B},Mt.prototype.has=function(t){var e=this.__data__;return mr?e[t]!==B:Pn.call(e,t)},Mt.prototype.set=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=mr&&e===B?"__lodash_hash_undefined__":e,this},Bt.prototype.clear=function(){this.__data__=[],this.size=0},Bt.prototype.delete=function(t){var e=this.__data__;return!(0>(t=te(e,t))||(t==e.length-1?e.pop():Vn.call(e,t,1),--this.size,0))},Bt.prototype.get=function(t){var e=this.__data__;return 0>(t=te(e,t))?B:e[t][1]},Bt.prototype.has=function(t){return-1<te(this.__data__,t)},Bt.prototype.set=function(t,e){var i=this.__data__,s=te(i,t);return 0>s?(++this.size,i.push([t,e])):i[s][1]=e,this},Lt.prototype.clear=function(){this.size=0,this.__data__={hash:new Mt,map:new(dr||Bt),string:new Mt}},Lt.prototype.delete=function(t){return t=Xi(this,t).delete(t),this.size-=t?1:0,t},Lt.prototype.get=function(t){return Xi(this,t).get(t)},Lt.prototype.has=function(t){return Xi(this,t).has(t)},Lt.prototype.set=function(t,e){var i=Xi(this,t),s=i.size;return i.set(t,e),this.size+=i.size==s?0:1,this},kt.prototype.add=kt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},kt.prototype.has=function(t){return this.__data__.has(t)},Ht.prototype.clear=function(){this.__data__=new Bt,this.size=0},Ht.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},Ht.prototype.get=function(t){return this.__data__.get(t)},Ht.prototype.has=function(t){return this.__data__.has(t)},Ht.prototype.set=function(t,e){var i=this.__data__;if(i instanceof Bt){var s=i.__data__;if(!dr||199>s.length)return s.push([t,e]),this.size=++i.size,this;i=this.__data__=new Lt(s)}return i.set(t,e),this.size=i.size,this};var Or=Ti(ge),Er=Ti(fe,!0),Pr=yi(),xr=yi(!0),Mr=Tr?function(t,e){return Tr.set(t,e),t}:cn,Rr=$n?function(t,e){return $n(t,"toString",{configurable:!0,enumerable:!1,value:un(e),writable:!0})}:cn,Br=Yn||function(t){return Rt.clearTimeout(t)},Lr=fr&&1/x(new fr([,-0]))[1]==L?function(t){return new fr(t)}:gn,Fr=Tr?function(t){return Tr.get(t)}:gn,kr=er?function(t){return null==t?[]:(t=Sn(t),n(er(t),function(e){return zn.call(t,e)}))}:_n,Hr=er?function(t){for(var e=[];t;)l(e,kr(t)),t=jn(t);return e}:_n,Ur=ye;(pr&&"[object DataView]"!=Ur(new pr(new ArrayBuffer(1)))||dr&&"[object Map]"!=Ur(new dr)||gr&&"[object Promise]"!=Ur(gr.resolve())||fr&&"[object Set]"!=Ur(new fr)||_r&&"[object WeakMap]"!=Ur(new _r))&&(Ur=function(t){var e=ye(t);if(t=(t="[object Object]"==e?t.constructor:B)?ps(t):"")switch(t){case Dr:return"[object DataView]";case vr:return"[object Map]";case wr:return"[object Promise]";case Sr:return"[object Set]";case Kr:return"[object WeakMap]"}return e});var Wr=On?ks:mn,jr=hs(Mr),Nr=Zn||function(t,e){return Rt.setTimeout(t,e)},zr=hs(Rr),Vr=function(t){var e=(t=xs(t,function(t){return 500===e.size&&e.clear(),t})).cache;return t}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(J,function(t,i,s,n){e.push(s?n.replace(at,"$1"):i||t)}),e}),Gr=Ne(function(t,e){return Ls(t)?he(t,de(e,1,Ls,!0)):[]}),qr=Ne(function(t,e){var i=ys(e);return Ls(i)&&(i=B),Ls(t)?he(t,de(e,1,Ls,!0),qi(i,2)):[]}),Xr=Ne(function(t,e){var i=ys(e);return Ls(i)&&(i=B),Ls(t)?he(t,de(e,1,Ls,!0),B,i):[]}),$r=Ne(function(t){var e=a(t,ni);return e.length&&e[0]===t[0]?Se(e):[]}),Yr=Ne(function(t){var e=ys(t),i=a(t,ni);return e===ys(i)?e=B:i.pop(),i.length&&i[0]===t[0]?Se(i,qi(e,2)):[]}),Jr=Ne(function(t){var e=ys(t),i=a(t,ni);return(e="function"==typeof e?e:B)&&i.pop(),i.length&&i[0]===t[0]?Se(i,B,e):[]}),Zr=Ne(Ds),Qr=ji(function(t,e){var i=null==t?0:t.length,s=ne(t,e);return Ue(t,a(e,function(t){return ts(t,i)?+t:t}).sort(ci)),s}),to=Ne(function(t){return Ze(de(t,1,Ls,!0))}),eo=Ne(function(t){var e=ys(t);return Ls(e)&&(e=B),Ze(de(t,1,Ls,!0),qi(e,2))}),io=Ne(function(t){var e="function"==typeof(e=ys(t))?e:B;return Ze(de(t,1,Ls,!0),B,e)}),so=Ne(function(t,e){return Ls(t)?he(t,e):[]}),no=Ne(function(t){return ii(n(t,Ls))}),ro=Ne(function(t){var e=ys(t);return Ls(e)&&(e=B),ii(n(t,Ls),qi(e,2))}),oo=Ne(function(t){var e="function"==typeof(e=ys(t))?e:B;return ii(n(t,Ls),B,e)}),ao=Ne(ws),lo=Ne(function(t){var e;return Ss(t,e="function"==typeof(e=1<(e=t.length)?t[e-1]:B)?(t.pop(),e):B)}),ho=ji(function(t){var e=t.length,i=e?t[0]:0,s=this.__wrapped__,n=function(e){return ne(e,t)};return!(1<e||this.__actions__.length)&&s instanceof xt&&ts(i)?((s=s.slice(i,+i+(e?1:0))).__actions__.push({func:bs,args:[n],thisArg:B}),new Ot(s,this.__chain__).thru(function(t){return e&&!t.length&&t.push(B),t})):this.thru(n)}),uo=_i(function(t,e,i){Pn.call(t,i)?++t[i]:se(t,i,1)}),co=Ki(fs),po=Ki(_s),go=_i(function(t,e,i){Pn.call(t,i)?t[i].push(e):se(t,i,[e])}),fo=Ne(function(e,i,s){var n=-1,r="function"==typeof i,o=Bs(e)?Tn(e.length):[];return Or(e,function(e){o[++n]=r?t(i,e,s):Ke(e,i,s)}),o}),_o=_i(function(t,e,i){se(t,i,e)}),mo=_i(function(t,e,i){t[i?0:1].push(e)},function(){return[[],[]]}),To=Ne(function(t,e){if(null==t)return[];var i=e.length;return 1<i&&es(t,e[0],e[1])?e=[]:2<i&&es(e[0],e[1],e[2])&&(e=[e[0]]),Fe(t,de(e,1),[])}),yo=Jn||function(){return Rt.Date.now()},Do=Ne(function(t,e,i){var s=1;if(i.length){var n=P(i,Gi(Do));s=32|s}return Fi(t,s,e,i,n)}),vo=Ne(function(t,e,i){var s=3;if(i.length){var n=P(i,Gi(vo));s=32|s}return Fi(e,s,t,i,n)}),wo=Ne(function(t,e){return le(t,1,e)}),So=Ne(function(t,e,i){return le(t,Js(e)||0,i)});xs.Cache=Lt;var Ko=Ne(function(e,i){var s=(i=1==i.length&&Po(i[0])?a(i[0],S(qi())):a(de(i,1),S(qi()))).length;return Ne(function(n){for(var r=-1,o=ar(n.length,s);++r<o;)n[r]=i[r].call(this,n[r]);return t(e,this,n)})}),bo=Ne(function(t,e){return Fi(t,32,B,e,P(e,Gi(bo)))}),Ao=Ne(function(t,e){return Fi(t,64,B,e,P(e,Gi(Ao)))}),Io=ji(function(t,e){return Fi(t,256,B,B,B,e)}),Co=Mi(De),Oo=Mi(function(t,e){return t>=e}),Eo=be(function(){return arguments}())?be:function(t){return js(t)&&Pn.call(t,"callee")&&!zn.call(t,"callee")},Po=Tn.isArray,xo=Ut?S(Ut):function(t){return js(t)&&"[object ArrayBuffer]"==ye(t)},Mo=ir||mn,Ro=Wt?S(Wt):function(t){return js(t)&&"[object Date]"==ye(t)},Bo=jt?S(jt):function(t){return js(t)&&"[object Map]"==Ur(t)},Lo=Nt?S(Nt):function(t){return js(t)&&"[object RegExp]"==ye(t)},Fo=zt?S(zt):function(t){return js(t)&&"[object Set]"==Ur(t)},ko=Vt?S(Vt):function(t){return js(t)&&Us(t.length)&&!!It[ye(t)]},Ho=Mi(Pe),Uo=Mi(function(t,e){return t<=e}),Wo=mi(function(t,e){if(ns(e)||Bs(e))fi(e,sn(e),t);else for(var i in e)Pn.call(e,i)&&Qt(t,i,e[i])}),jo=mi(function(t,e){fi(e,nn(e),t)}),No=mi(function(t,e,i,s){fi(e,nn(e),t,s)}),zo=mi(function(t,e,i,s){fi(e,sn(e),t,s)}),Vo=ji(ne),Go=Ne(function(t,e){t=Sn(t);var i=-1,s=e.length;for((n=2<s?e[2]:B)&&es(e[0],e[1],n)&&(s=1);++i<s;)for(var n,r=nn(n=e[i]),o=-1,a=r.length;++o<a;){var l=r[o],h=t[l];(h===B||Rs(h,Cn[l])&&!Pn.call(t,l))&&(t[l]=n[l])}return t}),qo=Ne(function(e){return e.push(B,Hi),t(Zo,B,e)}),Xo=Ii(function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=Rn.call(e)),t[e]=i},un(cn)),$o=Ii(function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=Rn.call(e)),Pn.call(t,e)?t[e].push(i):t[e]=[i]},qi),Yo=Ne(Ke),Jo=mi(function(t,e,i){Be(t,e,i)}),Zo=mi(function(t,e,i,s){Be(t,e,i,s)}),Qo=ji(function(t,e){var i={};if(null==t)return i;var s=!1;e=a(e,function(e){return e=oi(e,t),s||(s=1<e.length),e}),fi(t,zi(t),i),s&&(i=oe(i,7,Ui));for(var n=e.length;n--;)Qe(i,e[n]);return i}),ta=ji(function(t,e){return null==t?{}:function(t,e){return ke(t,e,function(e,i){return en(t,i)})}(t,e)}),ea=Li(sn),ia=Li(nn),sa=vi(function(t,e,i){return e=e.toLowerCase(),t+(i?an(e):e)}),na=vi(function(t,e,i){return t+(i?"-":"")+e.toLowerCase()}),ra=vi(function(t,e,i){return t+(i?" ":"")+e.toLowerCase()}),oa=Di("toLowerCase"),aa=vi(function(t,e,i){return t+(i?"_":"")+e.toLowerCase()}),la=vi(function(t,e,i){return t+(i?" ":"")+ua(e)}),ha=vi(function(t,e,i){return t+(i?" ":"")+e.toUpperCase()}),ua=Di("toUpperCase"),ca=Ne(function(e,i){try{return t(e,B,i)}catch(t){return Fs(t)?t:new Dn(t)}}),pa=ji(function(t,e){return i(e,function(e){e=cs(e),se(t,e,Do(t[e],t))}),t}),da=bi(),ga=bi(!0),fa=Ne(function(t,e){return function(i){return Ke(i,t,e)}}),_a=Ne(function(t,e){return function(i){return Ke(t,i,e)}}),ma=Oi(a),Ta=Oi(s),ya=Oi(c),Da=xi(),va=xi(!0),wa=Ci(function(t,e){return t+e},0),Sa=Bi("ceil"),Ka=Ci(function(t,e){return t/e},1),ba=Bi("floor"),Aa=Ci(function(t,e){return t*e},1),Ia=Bi("round"),Ca=Ci(function(t,e){return t-e},0);return yt.after=function(t,e){if("function"!=typeof e)throw new An("Expected a function");return t=$s(t),function(){if(1>--t)return e.apply(this,arguments)}},yt.ary=Os,yt.assign=Wo,yt.assignIn=jo,yt.assignInWith=No,yt.assignWith=zo,yt.at=Vo,yt.before=Es,yt.bind=Do,yt.bindAll=pa,yt.bindKey=vo,yt.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Po(t)?t:[t]},yt.chain=Ks,yt.chunk=function(t,e,i){if(e=(i?es(t,e,i):e===B)?1:or($s(e),0),!(i=null==t?0:t.length)||1>e)return[];for(var s=0,n=0,r=Tn(Qn(i/e));s<i;)r[n++]=Ve(t,s,s+=e);return r},yt.compact=function(t){for(var e=-1,i=null==t?0:t.length,s=0,n=[];++e<i;){var r=t[e];r&&(n[s++]=r)}return n},yt.concat=function(){var t=arguments.length;if(!t)return[];for(var e=Tn(t-1),i=arguments[0];t--;)e[t-1]=arguments[t];return l(Po(i)?gi(i):[i],de(e,1))},yt.cond=function(e){var i=null==e?0:e.length,s=qi();return e=i?a(e,function(t){if("function"!=typeof t[1])throw new An("Expected a function");return[s(t[0]),t[1]]}):[],Ne(function(s){for(var n=-1;++n<i;){var r=e[n];if(t(r[0],this,s))return t(r[1],this,s)}})},yt.conforms=function(t){return function(t){var e=sn(t);return function(i){return ae(i,t,e)}}(oe(t,1))},yt.constant=un,yt.countBy=uo,yt.create=function(t,e){var i=Cr(t);return null==e?i:ie(i,e)},yt.curry=function t(e,i,s){return(e=Fi(e,8,B,B,B,B,B,i=s?B:i)).placeholder=t.placeholder,e},yt.curryRight=function t(e,i,s){return(e=Fi(e,16,B,B,B,B,B,i=s?B:i)).placeholder=t.placeholder,e},yt.debounce=Ps,yt.defaults=Go,yt.defaultsDeep=qo,yt.defer=wo,yt.delay=So,yt.difference=Gr,yt.differenceBy=qr,yt.differenceWith=Xr,yt.drop=function(t,e,i){var s=null==t?0:t.length;return s?Ve(t,0>(e=i||e===B?1:$s(e))?0:e,s):[]},yt.dropRight=function(t,e,i){var s=null==t?0:t.length;return s?Ve(t,0,0>(e=s-(e=i||e===B?1:$s(e)))?0:e):[]},yt.dropRightWhile=function(t,e){return t&&t.length?ti(t,qi(e,3),!0,!0):[]},yt.dropWhile=function(t,e){return t&&t.length?ti(t,qi(e,3),!0):[]},yt.fill=function(t,e,i,s){var n=null==t?0:t.length;if(!n)return[];for(i&&"number"!=typeof i&&es(t,e,i)&&(i=0,s=n),n=t.length,0>(i=$s(i))&&(i=-i>n?0:n+i),0>(s=s===B||s>n?n:$s(s))&&(s+=n),s=i>s?0:Ys(s);i<s;)t[i++]=e;return t},yt.filter=function(t,e){return(Po(t)?n:pe)(t,qi(e,3))},yt.flatMap=function(t,e){return de(Cs(t,e),1)},yt.flatMapDeep=function(t,e){return de(Cs(t,e),L)},yt.flatMapDepth=function(t,e,i){return i=i===B?1:$s(i),de(Cs(t,e),i)},yt.flatten=ms,yt.flattenDeep=function(t){return null!=t&&t.length?de(t,L):[]},yt.flattenDepth=function(t,e){return null!=t&&t.length?de(t,e=e===B?1:$s(e)):[]},yt.flip=function(t){return Fi(t,512)},yt.flow=da,yt.flowRight=ga,yt.fromPairs=function(t){for(var e=-1,i=null==t?0:t.length,s={};++e<i;){var n=t[e];s[n[0]]=n[1]}return s},yt.functions=function(t){return null==t?[]:_e(t,sn(t))},yt.functionsIn=function(t){return null==t?[]:_e(t,nn(t))},yt.groupBy=go,yt.initial=function(t){return null!=t&&t.length?Ve(t,0,-1):[]},yt.intersection=$r,yt.intersectionBy=Yr,yt.intersectionWith=Jr,yt.invert=Xo,yt.invertBy=$o,yt.invokeMap=fo,yt.iteratee=pn,yt.keyBy=_o,yt.keys=sn,yt.keysIn=nn,yt.map=Cs,yt.mapKeys=function(t,e){var i={};return e=qi(e,3),ge(t,function(t,s,n){se(i,e(t,s,n),t)}),i},yt.mapValues=function(t,e){var i={};return e=qi(e,3),ge(t,function(t,s,n){se(i,s,e(t,s,n))}),i},yt.matches=function(t){return Me(oe(t,1))},yt.matchesProperty=function(t,e){return Re(t,oe(e,1))},yt.memoize=xs,yt.merge=Jo,yt.mergeWith=Zo,yt.method=fa,yt.methodOf=_a,yt.mixin=dn,yt.negate=Ms,yt.nthArg=function(t){return t=$s(t),Ne(function(e){return Le(e,t)})},yt.omit=Qo,yt.omitBy=function(t,e){return rn(t,Ms(qi(e)))},yt.once=function(t){return Es(2,t)},yt.orderBy=function(t,e,i,s){return null==t?[]:(Po(e)||(e=null==e?[]:[e]),Po(i=s?B:i)||(i=null==i?[]:[i]),Fe(t,e,i))},yt.over=ma,yt.overArgs=Ko,yt.overEvery=Ta,yt.overSome=ya,yt.partial=bo,yt.partialRight=Ao,yt.partition=mo,yt.pick=ta,yt.pickBy=rn,yt.property=fn,yt.propertyOf=function(t){return function(e){return null==t?B:me(t,e)}},yt.pull=Zr,yt.pullAll=Ds,yt.pullAllBy=function(t,e,i){return t&&t.length&&e&&e.length?He(t,e,qi(i,2)):t},yt.pullAllWith=function(t,e,i){return t&&t.length&&e&&e.length?He(t,e,B,i):t},yt.pullAt=Qr,yt.range=Da,yt.rangeRight=va,yt.rearg=Io,yt.reject=function(t,e){return(Po(t)?n:pe)(t,Ms(qi(e,3)))},yt.remove=function(t,e){var i=[];if(!t||!t.length)return i;var s=-1,n=[],r=t.length;for(e=qi(e,3);++s<r;){var o=t[s];e(o,s,t)&&(i.push(o),n.push(s))}return Ue(t,n),i},yt.rest=function(t,e){if("function"!=typeof t)throw new An("Expected a function");return Ne(t,e=e===B?e:$s(e))},yt.reverse=vs,yt.sampleSize=function(t,e,i){return e=(i?es(t,e,i):e===B)?1:$s(e),(Po(t)?function(t,e){return us(gi(t),re(e,0,t.length))}:function(t,e){var i=on(t);return us(i,re(e,0,i.length))})(t,e)},yt.set=function(t,e,i){return null==t?t:ze(t,e,i)},yt.setWith=function(t,e,i,s){return s="function"==typeof s?s:B,null==t?t:ze(t,e,i,s)},yt.shuffle=function(t){return(Po(t)?function(t){return us(gi(t))}:function(t){return us(on(t))})(t)},yt.slice=function(t,e,i){var s=null==t?0:t.length;return s?(i&&"number"!=typeof i&&es(t,e,i)?(e=0,i=s):(e=null==e?0:$s(e),i=i===B?s:$s(i)),Ve(t,e,i)):[]},yt.sortBy=To,yt.sortedUniq=function(t){return t&&t.length?$e(t):[]},yt.sortedUniqBy=function(t,e){return t&&t.length?$e(t,qi(e,2)):[]},yt.split=function(t,e,i){return i&&"number"!=typeof i&&es(t,e,i)&&(e=i=B),(i=i===B?4294967295:i>>>0)?(t=Qs(t))&&("string"==typeof e||null!=e&&!Lo(e))&&(!(e=Je(e))&&Kt.test(t))?ai(R(t),0,i):t.split(e,i):[]},yt.spread=function(e,i){if("function"!=typeof e)throw new An("Expected a function");return i=null==i?0:or($s(i),0),Ne(function(s){var n=s[i];return s=ai(s,0,i),n&&l(s,n),t(e,this,s)})},yt.tail=function(t){var e=null==t?0:t.length;return e?Ve(t,1,e):[]},yt.take=function(t,e,i){return t&&t.length?Ve(t,0,0>(e=i||e===B?1:$s(e))?0:e):[]},yt.takeRight=function(t,e,i){var s=null==t?0:t.length;return s?Ve(t,0>(e=s-(e=i||e===B?1:$s(e)))?0:e,s):[]},yt.takeRightWhile=function(t,e){return t&&t.length?ti(t,qi(e,3),!1,!0):[]},yt.takeWhile=function(t,e){return t&&t.length?ti(t,qi(e,3)):[]},yt.tap=function(t,e){return e(t),t},yt.throttle=function(t,e,i){var s=!0,n=!0;if("function"!=typeof t)throw new An("Expected a function");return Ws(i)&&(s="leading"in i?!!i.leading:s,n="trailing"in i?!!i.trailing:n),Ps(t,e,{leading:s,maxWait:e,trailing:n})},yt.thru=bs,yt.toArray=qs,yt.toPairs=ea,yt.toPairsIn=ia,yt.toPath=function(t){return Po(t)?a(t,cs):Gs(t)?[t]:gi(Vr(Qs(t)))},yt.toPlainObject=Zs,yt.transform=function(t,e,s){var n=Po(t),r=n||Mo(t)||ko(t);if(e=qi(e,4),null==s){var o=t&&t.constructor;s=r?n?new o:[]:Ws(t)&&ks(o)?Cr(jn(t)):{}}return(r?i:ge)(t,function(t,i,n){return e(s,t,i,n)}),s},yt.unary=function(t){return Os(t,1)},yt.union=to,yt.unionBy=eo,yt.unionWith=io,yt.uniq=function(t){return t&&t.length?Ze(t):[]},yt.uniqBy=function(t,e){return t&&t.length?Ze(t,qi(e,2)):[]},yt.uniqWith=function(t,e){return e="function"==typeof e?e:B,t&&t.length?Ze(t,B,e):[]},yt.unset=function(t,e){return null==t||Qe(t,e)},yt.unzip=ws,yt.unzipWith=Ss,yt.update=function(t,e,i){return null!=t&&(t=ze(t,e,(i=ri(i))(me(t,e)),void 0)),t},yt.updateWith=function(t,e,i,s){return s="function"==typeof s?s:B,null!=t&&(t=ze(t,e,(i=ri(i))(me(t,e)),s)),t},yt.values=on,yt.valuesIn=function(t){return null==t?[]:K(t,nn(t))},yt.without=so,yt.words=hn,yt.wrap=function(t,e){return bo(ri(e),t)},yt.xor=no,yt.xorBy=ro,yt.xorWith=oo,yt.zip=ao,yt.zipObject=function(t,e){return si(t||[],e||[],Qt)},yt.zipObjectDeep=function(t,e){return si(t||[],e||[],ze)},yt.zipWith=lo,yt.entries=ea,yt.entriesIn=ia,yt.extend=jo,yt.extendWith=No,dn(yt,yt),yt.add=wa,yt.attempt=ca,yt.camelCase=sa,yt.capitalize=an,yt.ceil=Sa,yt.clamp=function(t,e,i){return i===B&&(i=e,e=B),i!==B&&(i=(i=Js(i))==i?i:0),e!==B&&(e=(e=Js(e))==e?e:0),re(Js(t),e,i)},yt.clone=function(t){return oe(t,4)},yt.cloneDeep=function(t){return oe(t,5)},yt.cloneDeepWith=function(t,e){return oe(t,5,e="function"==typeof e?e:B)},yt.cloneWith=function(t,e){return oe(t,4,e="function"==typeof e?e:B)},yt.conformsTo=function(t,e){return null==e||ae(t,e,sn(e))},yt.deburr=ln,yt.defaultTo=function(t,e){return null==t||t!=t?e:t},yt.divide=Ka,yt.endsWith=function(t,e,i){t=Qs(t),e=Je(e);var s=t.length;s=i=i===B?s:re($s(i),0,s);return 0<=(i-=e.length)&&t.slice(i,s)==e},yt.eq=Rs,yt.escape=function(t){return(t=Qs(t))&&V.test(t)?t.replace(N,Xt):t},yt.escapeRegExp=function(t){return(t=Qs(t))&&Q.test(t)?t.replace(Z,"\\$&"):t},yt.every=function(t,e,i){var n=Po(t)?s:ue;return i&&es(t,e,i)&&(e=B),n(t,qi(e,3))},yt.find=co,yt.findIndex=fs,yt.findKey=function(t,e){return p(t,qi(e,3),ge)},yt.findLast=po,yt.findLastIndex=_s,yt.findLastKey=function(t,e){return p(t,qi(e,3),fe)},yt.floor=ba,yt.forEach=As,yt.forEachRight=Is,yt.forIn=function(t,e){return null==t?t:Pr(t,qi(e,3),nn)},yt.forInRight=function(t,e){return null==t?t:xr(t,qi(e,3),nn)},yt.forOwn=function(t,e){return t&&ge(t,qi(e,3))},yt.forOwnRight=function(t,e){return t&&fe(t,qi(e,3))},yt.get=tn,yt.gt=Co,yt.gte=Oo,yt.has=function(t,e){return null!=t&&Ji(t,e,ve)},yt.hasIn=en,yt.head=Ts,yt.identity=cn,yt.includes=function(t,e,i,s){return t=Bs(t)?t:on(t),i=i&&!s?$s(i):0,s=t.length,0>i&&(i=or(s+i,0)),Vs(t)?i<=s&&-1<t.indexOf(e,i):!!s&&-1<g(t,e,i)},yt.indexOf=function(t,e,i){var s=null==t?0:t.length;return s?(0>(i=null==i?0:$s(i))&&(i=or(s+i,0)),g(t,e,i)):-1},yt.inRange=function(t,e,i){return e=Xs(e),i===B?(i=e,e=0):i=Xs(i),(t=Js(t))>=ar(e,i)&&t<or(e,i)},yt.invoke=Yo,yt.isArguments=Eo,yt.isArray=Po,yt.isArrayBuffer=xo,yt.isArrayLike=Bs,yt.isArrayLikeObject=Ls,yt.isBoolean=function(t){return!0===t||!1===t||js(t)&&"[object Boolean]"==ye(t)},yt.isBuffer=Mo,yt.isDate=Ro,yt.isElement=function(t){return js(t)&&1===t.nodeType&&!zs(t)},yt.isEmpty=function(t){if(null==t)return!0;if(Bs(t)&&(Po(t)||"string"==typeof t||"function"==typeof t.splice||Mo(t)||ko(t)||Eo(t)))return!t.length;var e=Ur(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(ns(t))return!Ee(t).length;for(var i in t)if(Pn.call(t,i))return!1;return!0},yt.isEqual=function(t,e){return Ae(t,e)},yt.isEqualWith=function(t,e,i){var s=(i="function"==typeof i?i:B)?i(t,e):B;return s===B?Ae(t,e,B,i):!!s},yt.isError=Fs,yt.isFinite=function(t){return"number"==typeof t&&sr(t)},yt.isFunction=ks,yt.isInteger=Hs,yt.isLength=Us,yt.isMap=Bo,yt.isMatch=function(t,e){return t===e||Ie(t,e,$i(e))},yt.isMatchWith=function(t,e,i){return i="function"==typeof i?i:B,Ie(t,e,$i(e),i)},yt.isNaN=function(t){return Ns(t)&&t!=+t},yt.isNative=function(t){if(Wr(t))throw new Dn("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ce(t)},yt.isNil=function(t){return null==t},yt.isNull=function(t){return null===t},yt.isNumber=Ns,yt.isObject=Ws,yt.isObjectLike=js,yt.isPlainObject=zs,yt.isRegExp=Lo,yt.isSafeInteger=function(t){return Hs(t)&&-9007199254740991<=t&&9007199254740991>=t},yt.isSet=Fo,yt.isString=Vs,yt.isSymbol=Gs,yt.isTypedArray=ko,yt.isUndefined=function(t){return t===B},yt.isWeakMap=function(t){return js(t)&&"[object WeakMap]"==Ur(t)},yt.isWeakSet=function(t){return js(t)&&"[object WeakSet]"==ye(t)},yt.join=function(t,e){return null==t?"":nr.call(t,e)},yt.kebabCase=na,yt.last=ys,yt.lastIndexOf=function(t,e,i){var s=null==t?0:t.length;if(!s)return-1;var n=s;if(i!==B&&(n=0>(n=$s(i))?or(s+n,0):ar(n,s-1)),e==e)t:{for(i=n+1;i--;)if(t[i]===e){t=i;break t}t=i}else t=d(t,_,n,!0);return t},yt.lowerCase=ra,yt.lowerFirst=oa,yt.lt=Ho,yt.lte=Uo,yt.max=function(t){return t&&t.length?ce(t,cn,De):B},yt.maxBy=function(t,e){return t&&t.length?ce(t,qi(e,2),De):B},yt.mean=function(t){return m(t,cn)},yt.meanBy=function(t,e){return m(t,qi(e,2))},yt.min=function(t){return t&&t.length?ce(t,cn,Pe):B},yt.minBy=function(t,e){return t&&t.length?ce(t,qi(e,2),Pe):B},yt.stubArray=_n,yt.stubFalse=mn,yt.stubObject=function(){return{}},yt.stubString=function(){return""},yt.stubTrue=function(){return!0},yt.multiply=Aa,yt.nth=function(t,e){return t&&t.length?Le(t,$s(e)):B},yt.noConflict=function(){return Rt._===this&&(Rt._=Ln),this},yt.noop=gn,yt.now=yo,yt.pad=function(t,e,i){t=Qs(t);var s=(e=$s(e))?M(t):0;return!e||s>=e?t:Ei(tr(e=(e-s)/2),i)+t+Ei(Qn(e),i)},yt.padEnd=function(t,e,i){t=Qs(t);var s=(e=$s(e))?M(t):0;return e&&s<e?t+Ei(e-s,i):t},yt.padStart=function(t,e,i){t=Qs(t);var s=(e=$s(e))?M(t):0;return e&&s<e?Ei(e-s,i)+t:t},yt.parseInt=function(t,e,i){return i||null==e?e=0:e&&(e=+e),hr(Qs(t).replace(et,""),e||0)},yt.random=function(t,e,i){if(i&&"boolean"!=typeof i&&es(t,e,i)&&(e=i=B),i===B&&("boolean"==typeof e?(i=e,e=B):"boolean"==typeof t&&(i=t,t=B)),t===B&&e===B?(t=0,e=1):(t=Xs(t),e===B?(e=t,t=0):e=Xs(e)),t>e){var s=t;t=e,e=s}return i||t%1||e%1?(i=ur(),ar(t+i*(e-t+Et("1e-"+((i+"").length-1))),e)):We(t,e)},yt.reduce=function(t,e,i){var s=Po(t)?h:D,n=3>arguments.length;return s(t,qi(e,4),i,n,Or)},yt.reduceRight=function(t,e,i){var s=Po(t)?u:D,n=3>arguments.length;return s(t,qi(e,4),i,n,Er)},yt.repeat=function(t,e,i){return e=(i?es(t,e,i):e===B)?1:$s(e),je(Qs(t),e)},yt.replace=function(){var t=arguments,e=Qs(t[0]);return 3>t.length?e:e.replace(t[1],t[2])},yt.result=function(t,e,i){var s=-1,n=(e=oi(e,t)).length;for(n||(n=1,t=B);++s<n;){var r=null==t?B:t[cs(e[s])];r===B&&(s=n,r=i),t=ks(r)?r.call(t):r}return t},yt.round=Ia,yt.runInContext=y,yt.sample=function(t){return(Po(t)?Jt:function(t){return Jt(on(t))})(t)},yt.size=function(t){if(null==t)return 0;if(Bs(t))return Vs(t)?M(t):t.length;var e=Ur(t);return"[object Map]"==e||"[object Set]"==e?t.size:Ee(t).length},yt.snakeCase=aa,yt.some=function(t,e,i){var s=Po(t)?c:Ge;return i&&es(t,e,i)&&(e=B),s(t,qi(e,3))},yt.sortedIndex=function(t,e){return qe(t,e)},yt.sortedIndexBy=function(t,e,i){return Xe(t,e,qi(i,2))},yt.sortedIndexOf=function(t,e){var i=null==t?0:t.length;if(i){var s=qe(t,e);if(s<i&&Rs(t[s],e))return s}return-1},yt.sortedLastIndex=function(t,e){return qe(t,e,!0)},yt.sortedLastIndexBy=function(t,e,i){return Xe(t,e,qi(i,2),!0)},yt.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var i=qe(t,e,!0)-1;if(Rs(t[i],e))return i}return-1},yt.startCase=la,yt.startsWith=function(t,e,i){return t=Qs(t),i=null==i?0:re($s(i),0,t.length),e=Je(e),t.slice(i,i+e.length)==e},yt.subtract=Ca,yt.sum=function(t){return t&&t.length?v(t,cn):0},yt.sumBy=function(t,e){return t&&t.length?v(t,qi(e,2)):0},yt.template=function(t,e,i){var s=yt.templateSettings;i&&es(t,e,i)&&(e=B),t=Qs(t),e=No({},e,s,ki);var n,r,o=sn(i=No({},e.imports,s.imports,ki)),a=K(i,o),l=0;i=e.interpolate||_t;var h="__p+='";i=Kn((e.escape||_t).source+"|"+i.source+"|"+(i===X?lt:_t).source+"|"+(e.evaluate||_t).source+"|$","g");var u="sourceURL"in e?"//# sourceURL="+e.sourceURL+"\n":"";if(t.replace(i,function(e,i,s,o,a,u){return s||(s=o),h+=t.slice(l,u).replace(mt,C),i&&(n=!0,h+="'+__e("+i+")+'"),a&&(r=!0,h+="';"+a+";\n__p+='"),s&&(h+="'+((__t=("+s+"))==null?'':__t)+'"),l=u+e.length,e}),h+="';",(e=e.variable)||(h="with(obj){"+h+"}"),h=(r?h.replace(H,""):h).replace(U,"$1").replace(W,"$1;"),h="function("+(e||"obj")+"){"+(e?"":"obj||(obj={});")+"var __t,__p=''"+(n?",__e=_.escape":"")+(r?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+h+"return __p}",(e=ca(function(){return vn(o,u+"return "+h).apply(B,a)})).source=h,Fs(e))throw e;return e},yt.times=function(t,e){if(1>(t=$s(t))||9007199254740991<t)return[];var i=4294967295,s=ar(t,4294967295);for(t-=4294967295,s=w(s,e=qi(e));++i<t;)e(i);return s},yt.toFinite=Xs,yt.toInteger=$s,yt.toLength=Ys,yt.toLower=function(t){return Qs(t).toLowerCase()},yt.toNumber=Js,yt.toSafeInteger=function(t){return t?re($s(t),-9007199254740991,9007199254740991):0===t?t:0},yt.toString=Qs,yt.toUpper=function(t){return Qs(t).toUpperCase()},yt.trim=function(t,e,i){return(t=Qs(t))&&(i||e===B)?t.replace(tt,""):t&&(e=Je(e))?ai(t=R(t),e=A(t,i=R(e)),i=I(t,i)+1).join(""):t},yt.trimEnd=function(t,e,i){return(t=Qs(t))&&(i||e===B)?t.replace(it,""):t&&(e=Je(e))?ai(t=R(t),0,e=I(t,R(e))+1).join(""):t},yt.trimStart=function(t,e,i){return(t=Qs(t))&&(i||e===B)?t.replace(et,""):t&&(e=Je(e))?ai(t=R(t),e=A(t,R(e))).join(""):t},yt.truncate=function(t,e){var i=30,s="...";if(Ws(e)){var n="separator"in e?e.separator:n;i="length"in e?$s(e.length):i,s="omission"in e?Je(e.omission):s}var r=(t=Qs(t)).length;if(Kt.test(t)){var o=R(t);r=o.length}if(i>=r)return t;if(1>(r=i-M(s)))return s;if(i=o?ai(o,0,r).join(""):t.slice(0,r),n===B)return i+s;if(o&&(r+=i.length-r),Lo(n)){if(t.slice(r).search(n)){var a=i;for(n.global||(n=Kn(n.source,Qs(ht.exec(n))+"g")),n.lastIndex=0;o=n.exec(a);)var l=o.index;i=i.slice(0,l===B?r:l)}}else t.indexOf(Je(n),r)!=r&&(-1<(n=i.lastIndexOf(n))&&(i=i.slice(0,n)));return i+s},yt.unescape=function(t){return(t=Qs(t))&&z.test(t)?t.replace(j,$t):t},yt.uniqueId=function(t){var e=++xn;return Qs(t)+e},yt.upperCase=ha,yt.upperFirst=ua,yt.each=As,yt.eachRight=Is,yt.first=Ts,dn(yt,function(){var t={};return ge(yt,function(e,i){Pn.call(yt.prototype,i)||(t[i]=e)}),t}(),{chain:!1}),yt.VERSION="4.17.11",i("bind bindKey curry curryRight partial partialRight".split(" "),function(t){yt[t].placeholder=yt}),i(["drop","take"],function(t,e){xt.prototype[t]=function(i){i=i===B?1:or($s(i),0);var s=this.__filtered__&&!e?new xt(this):this.clone();return s.__filtered__?s.__takeCount__=ar(i,s.__takeCount__):s.__views__.push({size:ar(i,4294967295),type:t+(0>s.__dir__?"Right":"")}),s},xt.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),i(["filter","map","takeWhile"],function(t,e){var i=e+1,s=1==i||3==i;xt.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:qi(t,3),type:i}),e.__filtered__=e.__filtered__||s,e}}),i(["head","last"],function(t,e){var i="take"+(e?"Right":"");xt.prototype[t]=function(){return this[i](1).value()[0]}}),i(["initial","tail"],function(t,e){var i="drop"+(e?"":"Right");xt.prototype[t]=function(){return this.__filtered__?new xt(this):this[i](1)}}),xt.prototype.compact=function(){return this.filter(cn)},xt.prototype.find=function(t){return this.filter(t).head()},xt.prototype.findLast=function(t){return this.reverse().find(t)},xt.prototype.invokeMap=Ne(function(t,e){return"function"==typeof t?new xt(this):this.map(function(i){return Ke(i,t,e)})}),xt.prototype.reject=function(t){return this.filter(Ms(qi(t)))},xt.prototype.slice=function(t,e){t=$s(t);var i=this;return i.__filtered__&&(0<t||0>e)?new xt(i):(0>t?i=i.takeRight(-t):t&&(i=i.drop(t)),e!==B&&(i=0>(e=$s(e))?i.dropRight(-e):i.take(e-t)),i)},xt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},xt.prototype.toArray=function(){return this.take(4294967295)},ge(xt.prototype,function(t,e){var i=/^(?:filter|find|map|reject)|While$/.test(e),s=/^(?:head|last)$/.test(e),n=yt[s?"take"+("last"==e?"Right":""):e],r=s||/^find/.test(e);n&&(yt.prototype[e]=function(){var e=this.__wrapped__,o=s?[1]:arguments,a=e instanceof xt,h=o[0],u=a||Po(e),c=function(t){return t=n.apply(yt,l([t],o)),s&&p?t[0]:t};u&&i&&"function"==typeof h&&1!=h.length&&(a=u=!1);var p=this.__chain__,d=!!this.__actions__.length;h=r&&!p,a=a&&!d;return!r&&u?(e=a?e:new xt(this),(e=t.apply(e,o)).__actions__.push({func:bs,args:[c],thisArg:B}),new Ot(e,p)):h&&a?t.apply(this,o):(e=this.thru(c),h?s?e.value()[0]:e.value():e)})}),i("pop push shift sort splice unshift".split(" "),function(t){var e=In[t],i=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",s=/^(?:pop|shift)$/.test(t);yt.prototype[t]=function(){var t=arguments;if(s&&!this.__chain__){var n=this.value();return e.apply(Po(n)?n:[],t)}return this[i](function(i){return e.apply(Po(i)?i:[],t)})}}),ge(xt.prototype,function(t,e){var i=yt[e];if(i){var s=i.name+"";(yr[s]||(yr[s]=[])).push({name:e,func:i})}}),yr[Ai(B,2).name]=[{name:"wrapper",func:B}],xt.prototype.clone=function(){var t=new xt(this.__wrapped__);return t.__actions__=gi(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=gi(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=gi(this.__views__),t},xt.prototype.reverse=function(){if(this.__filtered__){var t=new xt(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},xt.prototype.value=function(){var t,e=this.__wrapped__.value(),i=this.__dir__,s=Po(e),n=0>i,r=s?e.length:0;t=0;for(var o=r,a=this.__views__,l=-1,h=a.length;++l<h;){var u=a[l],c=u.size;switch(u.type){case"drop":t+=c;break;case"dropRight":o-=c;break;case"take":o=ar(o,t+c);break;case"takeRight":t=or(t,o-c)}}if(o=(t={start:t,end:o}).start,t=(a=t.end)-o,o=n?a:o-1,l=(a=this.__iteratees__).length,h=0,u=ar(t,this.__takeCount__),!s||!n&&r==t&&u==t)return ei(e,this.__actions__);s=[];t:for(;t--&&h<u;){for(n=-1,r=e[o+=i];++n<l;){c=(p=a[n]).type;var p=(0,p.iteratee)(r);if(2==c)r=p;else if(!p){if(1==c)continue t;break t}}s[h++]=r}return s},yt.prototype.at=ho,yt.prototype.chain=function(){return Ks(this)},yt.prototype.commit=function(){return new Ot(this.value(),this.__chain__)},yt.prototype.next=function(){this.__values__===B&&(this.__values__=qs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?B:this.__values__[this.__index__++]}},yt.prototype.plant=function(t){for(var e,i=this;i instanceof wt;){var s=gs(i);s.__index__=0,s.__values__=B,e?n.__wrapped__=s:e=s;var n=s;i=i.__wrapped__}return n.__wrapped__=t,e},yt.prototype.reverse=function(){var t=this.__wrapped__;return t instanceof xt?(this.__actions__.length&&(t=new xt(this)),(t=t.reverse()).__actions__.push({func:bs,args:[vs],thisArg:B}),new Ot(t,this.__chain__)):this.thru(vs)},yt.prototype.toJSON=yt.prototype.valueOf=yt.prototype.value=function(){return ei(this.__wrapped__,this.__actions__)},yt.prototype.first=yt.prototype.head,qn&&(yt.prototype[qn]=function(){return this}),yt}();Rt._=Yt,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Yt}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}.call(this),window.DKTools={},Object.defineProperties(DKTools,{SITE:{value:"https://dk-plugins.ru"},VERSION:{value:Imported.DKTools}}),DKTools.Sprite=function(t,e,i,s){this.initialize.apply(this,arguments)},DKTools.Window=function(t,e,i,s){this.initialize.apply(this,arguments)},DKTools.Scene=function(){this.initialize.apply(this,arguments)},DKTools.Utils=class{constructor(){return DKTools.Utils}static initialize(){this._saidHello=!1,this._isNwjs=Utils.isNwjs(),this._isTest=!!Utils.isOptionValid("test"),this._isMobileDevice=Utils.isMobileDevice(),this._isMobileSafari=Utils.isMobileSafari(),this._isAndroidChrome=Utils.isAndroidChrome(),this._gridSize=64,this._sayHello(),this.__tileSize(),this.__audioCacheLimit(),this.__imageCacheLimit(),DKToolsParam.get("Debugging Console","Enabled")&&this.openConsole(),DKToolsParam.get("Check Updates","Enabled")&&this._checkUpdates()}static __audioCacheLimit(){const t=DKToolsParam.get("Audio Cache Limit")||{};t.Enabled?AudioCache.limit=t.Limit:AudioCache.limit=1e7}static async _checkUpdates(){if(!this.isNwjs()||!this.isTest())return;let t=[];try{const e=new FormData;e.append("version",DKTools.VERSION),t=await DKTools.Network.fetchJson(`${DKTools.SITE}/plugins.php`,{method:"POST",body:e})}catch(t){return void console.error("DKTools can not check updates")}if(!t||0===t.length)return;const e=DKToolsParam.get("Check Updates","Show New Plugins");t.forEach(t=>{const i=t.version;if(DKTools.PluginManager.isRegistered(t.name)){if(i>DKTools.PluginManager.getVersion(t.name)){const e=[`Available a new version of ${t.name}: ${i} \n`,`Visit site: ${t.url} \n`,`Download: ${DKTools.SITE}/download/${t.name}.js`];console.log.apply(console,e)}}else if(e){const e=[`Try the new plugin: ${t.name} \n`,`Description: ${t.description} \n`,`Visit site: ${t.url} \n`,`Download: ${DKTools.SITE}/download/${t.name}.js`];console.log.apply(console,e)}})}static _getErrorLogData(){const t=SceneManager._scene,e={};if(t&&t.constructor.name&&(e.Scene=t.constructor.name,SceneManager.isCurrentScene(Scene_Map))){const t=$gameMap._interpreter;if(t){if(t._mapId>0&&(e["Map ID"]=t._mapId),t._eventId>0){e["Event ID"]=t._eventId;const i=$gameMap.event(t._eventId);i&&(e["Event Page"]=i._pageIndex+1)}if(t._list&&t._list.length>0){let i=t._list[t._index];i&&0===i.code&&t._index>0&&(i=t._list[t._index-1]),i&&i.code>0&&(e["Last Event Command"]=i.code)}t._params&&t._params.length>0&&(e.Params=JSON.stringify(t._params))}}return e}static __hideGrid(){this._gridSprite&&(SceneManager._scene.removeChild(this._gridSprite),this._gridSprite=null)}static __imageCacheLimit(){const t=DKToolsParam.get("Image Cache Limit")||{};t.Enabled&&(ImageCache.limit=t.Limit)}static isAndroidChrome(){return this._isAndroidChrome}static isArrayLike(t){return!!Array.isArray(t)||"[object Arguments]"===String(t)}static isBoolean(t){return"boolean"==typeof t}static isFunction(t){return"function"==typeof t}static isMobileDevice(){return this._isMobileDevice}static isMobileSafari(){return this._isMobileSafari}static isNumber(t){return Number.isFinite(t)}static isNwjs(){return this._isNwjs}static isString(t){return!!t&&"string"==typeof t}static isTest(){return this._isTest}static async logError(t){if(!t||!this.isNwjs())return;const e=DKToolsParam.get("Errors Log")||{},i=DKTools.Utils.isTest(),s=e.Enabled;if("None"===s||"Only Game"===s&&i||"Only Test"===s&&!i)return;const n=DKTools.IO.fs,r=DKTools.IO.os;if(!n||!r)return;const o=1024*e["File Size"]*1024,a=e.Filename,l=new DKTools.IO.File(a),h=await l.getStatsAsync().then(t=>t.data);if(h&&h.size>o){const t=DKTools.IO.parsePath(a).name,e=new Date,i=String(e.getDate()).padZero(2),s=String(e.getMonth()+1).padZero(2),n=e.getFullYear(),r=String(e.getHours()).padZero(2),o=String(e.getMinutes()).padZero(2),h=String(e.getSeconds()).padZero(2);await l.renameAsync(`${i}.${s}.${n}_${r}.${o}.${h}_${t}`)}const u=await n.openSync(a,"a"),c=this._getErrorLogData();let p=`Date: ${(new Date).toString()}`+r.EOL;_.forEach(c,(t,e)=>{p+=e+": "+t+r.EOL}),t instanceof Object?(p+=`Name: ${t.name}`+r.EOL,p+=`Message: ${t.message}`+r.EOL,void 0!==t.filename&&(p+=`Filename: ${t.filename}`+r.EOL),void 0!==t.lineNumber&&(p+=`Line: ${t.lineNumber}`+r.EOL),void 0!==t.columnNumber&&(p+=`Column: ${t.columnNumber}`+r.EOL),p+=`Stack: ${t.stack}`+r.EOL+r.EOL):p+=`Error: ${t}`+r.EOL+r.EOL,await n.writeSync(u,p),await n.closeSync(u)}static makeScreenshot(){if(!this.isNwjs())return;const t=DKToolsParam.get("Screenshots"),e=t.Path,i=t.Type,s=t.Quality,n=SceneManager.snap().canvas.toDataURL("image/"+i,s),r=new RegExp(`^data:image/${i};base64,`),o=n.replace(r,""),a=new Date;let l=t.Filename;const h=(l=(l=(l=(l=(l=(l=l.replace(/%year/gi,a.getFullYear())).replace(/%month/gi,a.getMonth()+1)).replace(/%day/gi,a.getDate())).replace(/%hours/gi,a.getHours())).replace(/%minutes/gi,a.getMinutes())).replace(/%seconds/gi,a.getSeconds()))+"."+i,u=DKTools.IO.normalizePath(e+"/"+h);new DKTools.IO.File(u).save(o,{createDirectory:!0,options:"base64"}),console.log("The screenshot is saved with the name: "+h)}static mixin(t,e){Object.defineProperties(t,Object.getOwnPropertyDescriptors(e))}static openConsole(){if(this.isTest()&&this.isNwjs())try{const t=__webpack_require__(2).Window.get();t.showDevTools(null,()=>t.focus())}catch(t){this.logError(t),console.error("DKTools can not open the console")}}static __tileSize(){const t=DKToolsParam.get("Tile Size")||{};t.Enabled&&(Tilemap.TILE_WIDTH=t.Size,Tilemap.TILE_HEIGHT=t.Size)}static throwError(t){setTimeout(()=>{throw t},0)}static __quickLoad(){if(!DKTools.Utils.isTest()||!DKToolsParam.get("Quick Load","Enabled"))return;const t=DKToolsParam.get("Quick Load","Savefile ID"),e=SceneManager._scene;t>0?DataManager.loadGame(t)&&(SoundManager.playLoad(),e instanceof Scene_Base&&e.fadeOutAll(),$gameSystem.versionId()!==$dataSystem.versionId&&($gamePlayer.reserveTransfer($gameMap.mapId(),$gamePlayer.x,$gamePlayer.y),$gamePlayer.requestMapReload()),SceneManager.goto(Scene_Map)):e instanceof Scene_Load||SceneManager.push(Scene_Load)}static _sayHello(){if(!this._saidHello){if(navigator.userAgent.toLowerCase().indexOf("chrome")>=0){const t=[`%c %c %c DKTools.js ${DKTools.VERSION} %c  %c  ${DKTools.SITE}  %c \n`,"background: #279EE8; padding:5px 0;","background: #279EE8; padding:5px 0;","color: #4CCBF5; background: #030307; padding:5px 0;","background: #279EE8; padding:5px 0;","background: #BDE5F2; padding:5px 0;","background: #279EE8; padding:5px 0;"];console.log.apply(console,t)}else window.console&&console.log(`DKTools.js ${DKTools.VERSION} - ${DKTools.SITE}`);this._saidHello=!0}}static __showGrid(){if(!DKTools.Utils.isTest()||!DKToolsParam.get("Grid","Enabled"))return;if(this._gridSprite)return void(this._gridSize>=32?(this._gridSize-=16,this._gridSprite.refreshAll()):(this._gridSize=64,this.__hideGrid()));const t=DKToolsParam.get("Grid");let e=null;this._gridSprite=new DKTools.Sprite.Button(Graphics),this._gridSprite.addEvent({type:"draw-all",onUpdate:()=>{const i=Graphics.boxWidth,s=Graphics.boxHeight,n=this._gridSize,r=t["Grid Color"],o=t["Grid Width"];_.times(Math.ceil(i/n),t=>{this._gridSprite.drawLine({x1:n*t,y1:0,x2:n*t,y2:s,color:r,lineWidth:o})}),_.times(Math.ceil(s/n),t=>{this._gridSprite.drawLine({x1:0,y1:n*t,x2:i,y2:n*t,color:r,lineWidth:o})}),e&&this._gridSprite.drawLine({x1:e.x,y1:e.y,x2:TouchInput.mouseX,y2:TouchInput.mouseY,color:e.color,lineWidth:t["Ruler Width"]})}}),this._gridSprite.addEvent({type:"mouse-inside",onUpdate:()=>{const t=TouchInput.mouseX,e=TouchInput.mouseY,s=Graphics.boxWidth,n=Graphics.boxHeight;let r=t+8,o=e+8;r+i.width>s&&(r=t-i.width-8),o+i.height>n&&(o=e-i.height-8),i.move(r,o),i.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-down-middle",onUpdate:()=>{e||(e={x:TouchInput.mouseX,y:TouchInput.mouseY,color:t["Ruler Color"]||DKTools.Utils.Random.getHexColor()}),this._gridSprite.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-up-middle",onUpdate:()=>{e=null,this._gridSprite.refreshAll()}}),this._gridSprite.start(!0);const i=new DKTools.Sprite(0,0,220,"2");i.addEvent({type:"draw-all",onUpdate:()=>{if(e){const t={x:TouchInput.mouseX,y:TouchInput.mouseY},s=Math.floor(DKTools.Utils.Point.getDistance(e,t));i.drawText(`line: ${s} (${e.x}, ${e.y})`,{y:"0",align:"left"})}i.drawText(`x: ${TouchInput.mouseX}, y: ${TouchInput.mouseY}`,{y:"1",align:"left"})}}),i.start(),this._gridSprite.addChild(i),this._gridSprite.updateMouseInsideEvents(),SceneManager._scene.addChild(this._gridSprite)}},DKTools.Utils.Object=class{static toCamelCase(t){return _.reduce(t,(t,e,i)=>({...t,[_.camelCase(i)]:e}),{})}},DKTools.Utils.Number=class{static clamp(t,e,i){return _.clamp(t,e,i)}static inRange(t,e,i){return _.inRange(t,e,i)}},DKTools.Utils.String=class{static toBooleanArray(t){return _.map(this.toStringArray(t),Boolean)}static toNumberArray(t){return _.map(this.toStringArray(t),Number)}static toStringArray(t){return t.trim().replace(/\s*\,\s*/g,",").split(",")}},DKTools.Utils.Array=class{static avg(t){return this.sum(t)/t.length}static compact(t){return _.pull(t,"",null,void 0,Number.NaN)}static conjunction(t){return _.every(t,_.isEqual.bind(this,!0))}static contains(t,e){return _.includes(t,e)}static count(t,e){return _.size(t)-_.size(_.without(t,e))}static counts(t,e){return _.size(t)-_.size(_.difference(t,e))}static disjunction(t){return _.some(t,_.isEqual.bind(this,!0))}static insert(t,e,i=0){t.splice(i,0,e)}static isBitmapArray(t){return _.every(t,t=>t instanceof Bitmap)}static isBooleanArray(t){return _.every(t,t=>DKTools.Utils.isBoolean(t))}static isEmpty(t){return _.isEmpty(t)}static isNumberArray(t){return _.every(t,t=>DKTools.Utils.isNumber(t))}static isSpriteArray(t){return _.every(t,t=>t instanceof Sprite)}static isStringArray(t){return _.every(t,t=>DKTools.Utils.isString(t))}static isWindowArray(t){return _.every(t,t=>t instanceof Window)}static max(t){return Math.max.apply(Math,t)}static min(t){return Math.min.apply(Math,t)}static remove(t,e){return _.pull(t,e)}static sum(t){return _.reduce(t,(t,e)=>t+e,0)}},DKTools.Utils.Point=class{static clone(t=0,e=0){return this.toPoint(t,e)}static equals(t,e=0,i=0){if(0===arguments.length)return!1;const s=this.toPoint(e,i);return(t=this.toPoint(t)).x===s.x&&t.y===s.y}static getDistance(t,e=0,i=0){const s=this.toPoint(e,i);return t=this.toPoint(t),Math.sqrt(Math.pow(t.x-s.x,2)+Math.pow(t.y-s.y,2))}static toArray(t){return[t.x,t.y]}static toPoint(t=0,e=0){const i=this.tryToPoint(t,e);if(null!==i)return i;const s=t=>Number.isFinite(t)?t:0;let n;return t instanceof Object&&(n=t.x,e=t.y),n=s(n),e=s(e),new Point(n,e)}static tryToPoint(t,e){let i,s;return t instanceof Object?(i=t.x,s=t.y):(i=t,s=e),DKTools.Utils.Array.isNumberArray([i,s])?new Point(i,s):null}},DKTools.Utils.Rectangle=class{static clone(t=0,e=0,i=0,s=0){return this.toRectangle(t,e,i,s)}static equals(t,e=0,i=0,s=0,n=0){if(0===arguments.length)return!1;const r=this.toRectangle(e,i,s,n);return(t=this.toRectangle(t)).x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height}static isEmpty(t){return this.equals(t,Rectangle.emptyRectangle)}static toArray(t){return[t.x,t.y,t.width,t.height]}static toRectangle(t=0,e=0,i=0,s=0){const n=this.tryToRectangle(t,e,i,s);if(n)return n;const r=t=>Number.isFinite(t)?t:0;let o;return t instanceof Object&&(o=t.x,e=t.y,i=t.width,s=t.height),o=r(o),e=r(e),i=r(i),s=r(s),new Rectangle(o,e,i,s)}static tryToRectangle(t,e,i,s){let n,r,o,a;return t instanceof Object?(n=t.x,r=t.y,o=t.width,a=t.height):(n=t,r=e,o=i,a=s),DKTools.Utils.Array.isNumberArray([n,r,o,a])?new Rectangle(n,r,o,a):null}},DKTools.Utils.WebAudio=class{static load(t,e,i){if(!t)return null;if(t instanceof WebAudio)return t;if(DKTools.Utils.isArrayLike(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener,t.hue,t.smooth);if(!DKTools.Utils.isString(t))return null;const s=AudioManager.createBuffer(t,e);return DKTools.Utils.isFunction(i)&&s.addLoadListener(i),s}static async loadAsync(t,e,i){return new Promise(s=>{const n=this.load(t,e,i);n?n.addLoadListener(()=>s(n)):s(n)})}static loadBuffers(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=_.map(t,t=>this.load(t));const s=[];let n=0;const r=(r,o)=>{e&&(s[r]=o,n++,DKTools.Utils.isFunction(i)&&i(o,s,t),t.length===n&&(e(t),e=null))};_.forEach(t,(t,e)=>{t instanceof WebAudio?t.addLoadListener(t=>r(e,t)):r(e,t)})}static async loadBuffersAsync(t){const e=_.map(t,t=>this.loadAsync(t));return Promise.all(e)}},DKTools.Utils.Bitmap=class{static clone(t){if(!t||t.url)return t;const e=t.canvas,i=new Bitmap(e.width,e.height);return i.context.drawImage(e,0,0),i}static drawLine(t,e,i,s,n,r="white",o=1){const a=t.context;a.save(),a.strokeStyle=r,a.lineWidth=o,a.beginPath(),a.moveTo(e,i),a.lineTo(s,n),a.stroke(),a.restore(),t._setDirty()}static fillArc(t,e,i,s,n,r,o="white",a=!1){const l=t.context;l.save(),l.fillStyle=o,l.beginPath(),l.arc(e,i,s,n,r,a),l.fill(),l.restore(),t._setDirty()}static getBase64(t){return t&&t.canvas?t.canvas.toDataURL("image/png"):null}static load(t,e,i,s,n){if(!t)return null;if(t instanceof Bitmap)return t;if(DKTools.Utils.isArrayLike(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener,t.hue,t.smooth);if(!DKTools.Utils.isString(t))return null;const r=DKTools.IO.normalizePath(t+"/",!0),o=ImageManager.loadBitmap(r,e,s,n);return DKTools.Utils.isFunction(i)&&o.addLoadListener(i),o}static async loadAsync(t,e,i,s,n){return new Promise(r=>{const o=this.load(t,e,i,s,n);o?o.addLoadListener(()=>r(o)):r(o)})}static loadBitmaps(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=_.map(t,t=>this.load(t));const s=[];let n=0;const r=(r,o)=>{e&&(s[r]=o,n++,DKTools.Utils.isFunction(i)&&i(o,s,t),t.length===n&&(e(t),e=null))};_.forEach(t,(t,e)=>{t instanceof Bitmap?t.addLoadListener(t=>r(e,t)):r(e,t)})}static async loadBitmapsAsync(t){Array.isArray(t)||(t=[t]);const e=_.map(t,t=>this.loadAsync(t));return Promise.all(e)}static reserve(t,e,i,s,n,r){if(!t)return null;if(t instanceof Bitmap)return t;if(DKTools.Utils.isArrayLike(t))return this.reserve.apply(this,t);if(t instanceof Object)return this.reserve(t.folder,t.filename,t.listener,t.hue,t.smooth,t.reservationId);if(!DKTools.Utils.isString(t))return null;const o=DKTools.IO.normalizePath(t+"/",!0),a=ImageManager.reserveBitmap(o,e,s,n,r);return DKTools.Utils.isFunction(i)&&a.addLoadListener(i),a}static async reserveAsync(t,e,i,s,n,r){return new Promise(o=>{const a=this.reserve(t,e,i,s,n,r);a?a.addLoadListener(()=>o(a)):o(a)})}static reserveBitmaps(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=_.map(t,t=>this.reserve(t));const s=[];let n=0;const r=(r,o)=>{e&&(s[r]=o,n++,DKTools.Utils.isFunction(i)&&i(o,s,t),t.length===n&&(e(t),e=null))};_.forEach(t,(t,e)=>{t instanceof Bitmap?t.addLoadListener(t=>r(e,t)):r(e,t)})}static async reserveBitmapsAsync(t){Array.isArray(t)||(t=[t]);const e=_.map(t,t=>this.reserveAsync(t));return Promise.all(e)}static strokeArc(t,e,i,s,n,r,o="white",a=1,l=!1){const h=t.context;h.save(),h.strokeStyle=o,h.lineWidth=a,h.beginPath(),h.arc(e,i,s,n,r,l),h.stroke(),h.restore(),t._setDirty()}static strokeRect(t,e,i,s,n,r="white",o=1){const a=t.context;a.save(),a.strokeStyle=r,a.lineWidth=o,a.strokeRect(e,i,s,n),a.restore(),t._setDirty()}},DKTools.Utils.Event=class{static getAllComments(t){return Number.isFinite(t)&&(t=$gameMap.event(t)),t?(t instanceof Game_Event&&(t=t.event()),_.reduce(t.pages,(t,e,i)=>(t[i+1]=_.reduce(e.list,(t,e)=>(108!==e.code&&408!==e.code||t.push(e.parameters[0]),t),[]),t),{})):[]}static getComments(t){return Number.isFinite(t)&&(t=$gameMap.event(t)),t&&t.page()?_.reduce(t.list(),(t,e)=>(108!==e.code&&408!==e.code||t.push(e.parameters[0]),t),[]):[]}},DKTools.Utils.Random=class{constructor(){return DKTools.Utils.Random}static getBoolean(){return this.getInt(1)%2==0}static getFloat(t=1){return _.random(0,t,!0)}static getHexColor(){return"#"+(16777215*Math.random()<<0).toString(16)}static getInt(t=1){return _.random(0,t)}static getRgbaColor(t=1){const e=this.getInt(255),i=this.getInt(255),s=this.getInt(255);return"rgba(%1, %2, %3, %4)".format(e,i,s,t)}},DKTools.IO=class{constructor(){return DKTools.IO}static initialize(){let t="";this.isLocalMode()&&(this._fs=__webpack_require__(3),this._os=__webpack_require__(4),this._path=__webpack_require__(5),t=this.joinPath(this._path.dirname(process.mainModule.filename),"/")),this._projectPath=t,this._mode=DKToolsParam.get("File System","Mode"),this._stamp={},this._loadStamp(),this._createStamp()}static absolutePathExists(t){if(this.isLocalMode())return this._fs.existsSync(t);if(this.mode===DKTools.IO.MODE_NWJS_STAMP&&t.startsWith(this._projectPath)){if(this.isFile(t))return!0;if(this.isDirectory(t))return!0}return!1}static _createStamp(){if(!DKTools.Utils.isTest()||!this.isLocalMode()||this.mode===DKTools.IO.MODE_NWJS)return;const t=DKToolsParam.get("File System","Ignored Directories").map(t=>new DKTools.IO.Directory(t)),e=DKTools.IO.getRootDirectory(),i=this._stamp;let s=null;const n=e=>{t.some(t=>t.getFullPath()===e.getFullPath())||e.getAllAsync().then(t=>t.data).then(t=>{t.forEach(t=>{t.getStatsAsync().then(t=>t.data).then(e=>{const n=t.getFullPath().substring(1).split("\\");t.isFile()?_.set(i,n,{__stats__:{...e,type:"file"}}):_.set(i,n,{__stats__:{...e,type:"directory"}}),s&&clearTimeout(s),s=setTimeout(()=>{new DKTools.IO.File("data/Stamp.json").saveJsonAsync(i,{compress:!0})})}),t.isDirectory()&&n(t)})})};n(e)}static getRootDirectory(){return new DKTools.IO.Directory}static getAbsolutePath(t){const e=this.joinPath(this._projectPath,t||"");return this.normalizePath(e)}static isLocalMode(){return DKTools.Utils.isNwjs()}static isFile(t){if(this.isLocalMode()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this._fs.lstatSync(e).isFile()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.normalizePath(t).split("\\");if(_.last(e).includes("."))return"file"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static isDirectory(t){if(this.isLocalMode()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this._fs.lstatSync(e).isDirectory()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.normalizePath(t).split("\\").filter(t=>!!t);if(!_.last(e).includes("."))return"directory"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static joinPath(){if(this.isLocalMode())return this._path.join(...arguments);const t=_.filter(arguments,t=>DKTools.Utils.isString(t));let e=t.join("\\");return/^[\\\/]{2}[^\\\/]/.test(t[0])||(e=e.replace(/^[\\\/]{2,}/,"\\")),this.normalizePath(e)}static _loadStamp(){if(this.isLocalMode()||this.mode===DKTools.IO.MODE_NWJS)return;new DKTools.IO.File("data/Stamp.json").loadJson({sync:!0,decompress:!0,onSuccess:t=>{this._stamp=t.data||this._stamp}})}static normalizePath(t,e=!1){if(this.isLocalMode()){const i=this._path.normalize(t);return e?i.replace(/\\/g,"/"):i}const i=this._statPath(t),s=i.isUnc,n=i.isAbsolute;let r=i.device,o=i.tail;const a=/[\\\/]$/.test(o),l=_.filter(o.split(/[\\\/]+/),t=>t&&"."!==t),h=[];for(const t of l)".."===t?h.length>0&&".."!==h[h.length-1]?h.pop():n||h.push(".."):h.push(t);(o=h.join("\\"))||n||(o="."),o&&a&&(o+="\\"),s&&(r="\\\\"+r.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\"));const u=r+(n?"\\":"")+o;return e?u.replace(/\\/g,"/"):u}static parsePath(t){if(this.isLocalMode())return this._path.parse(t);const e=this._splitPath(t);return{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}}static pathExists(t){return this.absolutePathExists(this.getAbsolutePath(t))}static reverseSlashes(t){return t.replace(/\\/g,"/")}static _statPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),i=e[1]||"",s=!!i&&":"!==i[1];return{device:i,isUnc:s,isAbsolute:s||!!e[2],tail:e[3]}}static _splitPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),i=(e[1]||"")+(e[2]||""),s=e[3]||"",n=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/.exec(s);return[i,n[1],n[2],n[3]]}},Object.defineProperties(DKTools.IO,{fs:{get:function(){return this._fs},configurable:!0},os:{get:function(){return this._os},configurable:!0},path:{get:function(){return this._path},configurable:!0},sep:{get:function(){return this.isLocalMode()?this._path.sep:"/"},configurable:!0},projectPath:{get:function(){return this._projectPath},configurable:!0},mode:{get:function(){return this._mode},configurable:!0},stamp:{get:function(){return this._stamp},configurable:!0},OK:{value:0},EXPECT_CALLBACK:{value:1},ERROR_NOT_LOCAL_MODE:{value:2},ERROR_PATH_DOES_NOT_EXIST:{value:3},ERROR_CALLBACK_IS_NOT_AVAILABLE:{value:4},ERROR_DIRECTORY_ALREADY_EXISTS:{value:5},ERROR_DIRECTORY_IS_NOT_EMPTY:{value:6},ERROR_OVERWRITING_IS_NOT_AVAILABLE:{value:7},ERROR_OPTIONS_ARE_NOT_AVAILABLE:{value:8},ERROR_DECOMPRESSING_DATA:{value:9},ERROR_PARSING_DATA:{value:10},MODE_NWJS_STAMP:{value:0},MODE_NWJS:{value:1}}),DKTools.IO.Entity=class{constructor(){this.initialize.apply(this,arguments)}initialize(t=""){const e=DKTools.IO.parsePath(t);this._path=DKTools.IO.normalizePath(e.dir+"/"),this._name=e.name,this._initialExtension=e.ext,this._extension=e.ext}exists(){return DKTools.IO.absolutePathExists(this.getAbsolutePath())}getPath(){return this._path}getName(){return this._name}getExtension(){return this._extension}getFullPath(){return DKTools.IO.joinPath(this.getPath(),"/",this.getFullName())}getFullName(){return this._name+this._extension}getAbsolutePath(){return DKTools.IO.getAbsolutePath(this.getFullPath())}getStats(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!DKTools.IO.isLocalMode()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};if(!DKTools.IO.isLocalMode()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const t=this.getFullPath().split("\\").filter(t=>!!t);return{data:_.get(DKTools.IO.stamp,t.concat("__stats__"),{}),status:DKTools.IO.OK}}const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.stat(i,(e,i)=>{e?this.__processError(e,t.onError):t.onSuccess({data:i,status:DKTools.IO.OK},this)}),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{return{data:e.statSync(i),status:DKTools.IO.OK}}catch(e){this.__processError(e,t.onError)}}async getStatsAsync(){return new Promise((t,e)=>{const i=this.getStats({sync:!1,onSuccess:t,onError:e});i.status!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}hasExtension(){return!!this._extension}isFile(){if(this instanceof DKTools.IO.File){if(DKTools.IO.isLocalMode()){if(Decrypter.hasEncryptedAudio&&this.isAudio()||Decrypter.hasEncryptedImages&&this.isImage()){const t=DKTools.IO.normalizePath(this.getPath()+"/"+Decrypter.extToEncryptExt(this.getFullName()));return DKTools.IO.isFile(t)}return DKTools.IO.isFile(this.getFullPath())}return!!this.hasExtension()}return!1}isDirectory(){return this instanceof DKTools.IO.Directory&&(DKTools.IO.isLocalMode()?DKTools.IO.isDirectory(this.getFullPath()):!this.hasExtension())}__processError(t,e){DKTools.Utils.isFunction(e)?e(t,this):DKTools.Utils.throwError(t)}rename(t,e={}){if(e=e||{},!DKTools.IO.isLocalMode())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const i=DKTools.IO.fs,s=this.getAbsolutePath(),n=DKTools.IO.normalizePath(this._path+"/"+t+this._extension),r=DKTools.IO.getAbsolutePath(n);if(!e.overwrite&&DKTools.IO.absolutePathExists(r))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;if(!e.sync)return i.rename(s,r,i=>{i?this.__processError(i,e.onError):(this._name=t,DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this))}),DKTools.IO.EXPECT_CALLBACK;try{return i.renameSync(s,r),this._name=t,DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async renameAsync(t,e={}){return new Promise((i,s)=>{const n=this.rename(t,{...e,sync:!1,onSuccess:i,onError:s});n!==DKTools.IO.EXPECT_CALLBACK&&i(n)})}},Object.defineProperties(DKTools.IO.Entity.prototype,{path:{get:function(){return this._path},configurable:!0},name:{get:function(){return this._name},configurable:!0},initialExtension:{get:function(){return this._initialExtension},configurable:!0},extension:{get:function(){return this._extension},configurable:!0}}),DKTools.IO.File=class extends DKTools.IO.Entity{initialize(t=""){super.initialize(t),this._detectExtension()}copy(t,e={}){if(!e)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!DKTools.IO.isLocalMode())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const i=DKTools.IO.fs,s=this.getAbsolutePath(),n=new DKTools.IO.File(t).getDirectory();if(e.createDirectory&&!n.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;n.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error(`Failed to create directory: ${n.getFullPath()}`),e.onError)}if(!n.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!e.sync)return i.copyFile(s,t,e.flags,t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return i.copyFileSync(s,t,e.flags),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async copyAsync(t,e={}){return new Promise((i,s)=>{const n=this.copy(t,{...e,sync:!1,onSuccess:i,onError:s});n!==DKTools.IO.EXPECT_CALLBACK&&i(n)})}_detectExtension(){let t=this._extension;this.isAudio()?t=AudioManager.audioFileExt():this.isImage()?t=".png":this.isVideo()&&(t=Graphics.canPlayVideoType("video/webm")&&!DKTools.Utils.isMobileDevice()?".webm":".mp4"),this._extension=t}exists(){if(Decrypter.hasEncryptedAudio&&this.isAudio()||Decrypter.hasEncryptedImages&&this.isImage()){const t=DKTools.IO.normalizePath(this.getPath()+"/"+Decrypter.extToEncryptExt(this.getFullName()));return DKTools.IO.pathExists(t)}return super.exists()}getDirectory(){return new DKTools.IO.Directory(this._path)}getDirectoryName(){return this.getDirectory().getName()}isAudio(){return".ogg"===this._extension||".m4a"===this._extension||".rpgmvo"===this._extension}isJson(){return".json"===this._extension}isTxt(){return".txt"===this._extension}isImage(){return".png"===this._extension||".rpgmvp"===this._extension||".webp"===this._extension}isScript(){return".js"===this._extension}isVideo(){return".webm"===this._extension||".mp4"===this._extension}isSave(){return".rpgsave"===this._extension}load(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};const e=this.getAbsolutePath(),i=e=>{if(e){if(t.decompress)try{e=LZString.decompressFromBase64(e)}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(t.parse)try{e=JSON.parse(e,t.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:e,status:DKTools.IO.OK}};if(DKTools.IO.isLocalMode()){if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const s=DKTools.IO.fs,n=t.options||{encoding:"utf8"};if(t.sync)try{const r=s.readFileSync(e,n);return i(r)}catch(e){this.__processError(e,t.onError)}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};s.readFile(e,n,(e,s)=>{e?this.__processError(e,t.onError):t.onSuccess(i(s),this)})}}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP&&"Stamp.json"!==this.getFullName()&&!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const s=new XMLHttpRequest;s.open("GET",e,!t.sync),s.overrideMimeType(t.mimeType||"application/json"),s.onload=(()=>{4===s.readyState&&(200===s.status?t.onSuccess(i(s.responseText),this):this.__processError(s,t.onError))}),s.onerror=(()=>{this.__processError(s,t.onError)});try{s.send()}catch(t){}}return{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async loadAsync(t={}){return new Promise((e,i)=>{const s=this.load({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}loadAudio(){return this.isAudio()&&(!DKTools.IO.isLocalMode()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.WebAudio.load(this.getDirectoryName(),this.getName()):null}async loadAudioAsync(){return DKTools.Utils.WebAudio.loadAsync(this.loadAudio())}loadJson(t){return t?(t.parse||(t.parse=!0),this.load(t)):{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE}}async loadJsonAsync(t={}){return new Promise((e,i)=>{const s=this.loadJson({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}loadBitmap(t,e,i){return t instanceof Object?this.loadBitmap(t.listener,t.hue,t.smooth):this.isImage()&&(!DKTools.IO.isLocalMode()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.Bitmap.load({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i}):null}async loadBitmapAsync(t,e,i){return DKTools.Utils.Bitmap.loadAsync(this.loadBitmap(t,e,i))}remove(t={}){if(t=t||{},!DKTools.IO.isLocalMode())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.unlink(i,e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.unlinkSync(i),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise((t,e)=>{const i=this.remove({sync:!1,onSuccess:t,onError:e});i!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}reserveBitmap(t,e,i,s){return t instanceof Object?this.reserveBitmap(t.listener,t.hue,t.smooth,t.reservationId):this.isImage()&&this.exists()?DKTools.Utils.Bitmap.reserve({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i,reservationId:s}):null}async reserveBitmapAsync(t,e,i,s){return t instanceof Object?this.reserveBitmapAsync(t.listener,t.hue,t.smooth,t.reservationId):this.isImage()&&this.exists()?DKTools.Utils.Bitmap.reserveAsync({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i,reservationId:s}):null}save(t,e={}){if(!DKTools.IO.isLocalMode())return DKTools.IO.ERROR_NOT_LOCAL_MODE;const i=DKTools.IO.fs,s=this.getAbsolutePath(),n=this.getDirectory();if((e=e||{}).createDirectory&&!n.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;n.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error(`Failed to create directory: ${n.getFullPath()}`),e.onError)}if(!n.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(e.stringify&&(t=JSON.stringify(t,e.stringify.replacer,e.stringify.space)),e.compress&&(t=LZString.compressToBase64(t)),!e.sync)return i.writeFile(s,t,e.options,t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return i.writeFileSync(s,t,e.options),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async saveAsync(t,e={}){return new Promise((i,s)=>{const n=this.save(t,{...e,sync:!1,onSuccess:i,onError:s});n!==DKTools.IO.EXPECT_CALLBACK&&i(n)})}saveJson(t,e={}){return(e=e||{}).stringify||(e.stringify={space:"\t"}),this.save(t,e)}async saveJsonAsync(t,e={}){return new Promise((i,s)=>{const n=this.saveJson(t,{...e,sync:!1,onSuccess:i,onError:s});n!==DKTools.IO.EXPECT_CALLBACK&&i(n)})}},DKTools.IO.Directory=class extends DKTools.IO.Entity{create(t){if(!t)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE;if(!DKTools.IO.isLocalMode())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(this.exists())return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.mkdir(i,t.options,e=>{e?this.__processError(e,t.onError):t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.mkdirSync(i,t.options),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async createAsync(t={}){return new Promise((e,i)=>{const s=this.create({...t,sync:!1,onSuccess:e,onError:i});s!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}createDirectory(t,e){const i=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(i).create(e)}async createDirectoryAsync(t,e={}){const i=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(i).createAsync(e)}findFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!DKTools.IO.isLocalMode())return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,i=[];let s=1,n=0;const r=n=>{_.forEach(n,n=>{if(n.isFile()){const e=n.getFullName();t.template instanceof RegExp&&t.template.test(e)?i.push(n):t.template&&e!==t.template||i.push(n)}else s<e&&n.isDirectory()&&(s++,o(n))})},o=e=>{if(t.sync){const i=e.getAll({sync:!0,options:t.options}).data;r(i)}else e.getAll({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{n++,r(e.data),s===n&&t.onSuccess({data:i,status:DKTools.IO.OK})}})};return o(this),t.sync?{data:i,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findFilesAsync(t={}){return new Promise((e,i)=>{const s=this.findFiles({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}findDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!DKTools.IO.isLocalMode())return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,i=[];let s=1,n=0;const r=n=>{_.forEach(n,n=>{const r=n.getFullName();t.template instanceof RegExp&&t.template.test(r)?i.push(n):t.template&&r!==t.template||i.push(n),s<e&&(s++,o(n))})},o=e=>{if(t.sync){const i=e.getDirectories({sync:!0,options:t.options}).data;r(i)}else e.getDirectories({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{n++,r(e.data),s===n&&t.onSuccess({data:i,status:DKTools.IO.OK})}})};return o(this),t.sync?{data:i,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findDirectoriesAsync(t={}){return new Promise((e,i)=>{const s=this.findDirectories({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}getAll(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!DKTools.IO.isLocalMode()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=this.getFullPath(),i=i=>{return t.template instanceof RegExp?i=i.filter(e=>t.template.test(e)):DKTools.Utils.isString(t.template)&&(i=i.filter(e=>e===t.template)),{data:i.reduce((t,i)=>{const s=DKTools.IO.normalizePath(e+"/"+i);return DKTools.IO.isFile(s)?t.push(new DKTools.IO.File(s)):DKTools.IO.isDirectory(s)&&t.push(new DKTools.IO.Directory(s)),t},[]),status:DKTools.IO.OK}};if(!DKTools.IO.isLocalMode()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.getFullPath().split("\\"),s=_.get(DKTools.IO.stamp,e,{}),n=Object.keys(s);return t.sync?i(n):(t.onSuccess(i(n),this),{data:null,status:DKTools.IO.EXPECT_CALLBACK})}const s=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return s.readdir(n,t.options,(e,s)=>{e?this.__processError(e,t.onError):t.onSuccess(i(s),this)}),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{const e=s.readdirSync(n,t.options);return i(e)}catch(e){this.__processError(e,t.onError)}}async getAllAsync(t={}){return new Promise((e,i)=>{const s=this.getAll({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}getFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>t.filter(t=>t.isFile());if(t.sync){const i=this.getAll(t);return i.status===DKTools.IO.OK?{...i,data:e(i.data)}:i}{const i=t.onSuccess;return t.onSuccess=((t,s)=>{t.status===DKTools.IO.OK?i({...t,data:e(t.data)},s):i(t,s)}),this.getAll(t)}}async getFilesAsync(t={}){return this.getAllAsync(t).then(t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,t=>t.isFile());return{...t,data:e}}return t})}getDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>_.filter(t,t=>t.isDirectory());if(t.sync){const i=this.getAll(t);return i.status===DKTools.IO.OK?{...i,data:e(i.data)}:i}{const i=t.onSuccess;return t.onSuccess=((t,s)=>{t.status===DKTools.IO.OK?i({...t,data:e(t.data)},s):i(t,s)}),this.getAll(t)}}async getDirectoriesAsync(t={}){return this.getAllAsync(t).then(t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,t=>t.isDirectory());return{...t,data:e}}return t})}getAudioFiles(t){return this.getFiles({...t,template:/(.ogg|.rpgmvo)/})}async getAudioFilesAsync(t={}){return new Promise((e,i)=>{const s=this.getAudioFiles({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}getJsonFiles(t){return this.getFiles({...t,template:/(.json)/})}async getJsonFilesAsync(t={}){return new Promise((e,i)=>{const s=this.getJsonFiles({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}getTxtFiles(t){return this.getFiles({...t,template:/(.txt)/})}async getTxtFilesAsync(t={}){return new Promise((e,i)=>{const s=this.getTxtFiles({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}getImageFiles(t){return this.getFiles({...t,template:/(.png|.webp|.rpgmvp)/})}async getImageFilesAsync(t={}){return new Promise((e,i)=>{const s=this.getImageFiles({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}getVideoFiles(t){return this.getFiles({...t,template:/(.webm|.mp4)/})}async getVideoFilesAsync(t={}){return new Promise((e,i)=>{const s=this.getVideoFiles({...t,sync:!1,onSuccess:e,onError:i});s.status!==DKTools.IO.EXPECT_CALLBACK&&e(s)})}getRootDirectory(){return new DKTools.IO.Directory(this.getPath())}isEmpty(){const t=this.getAll({sync:!0}).data;return!t||0===t.length}loadAudioFiles(){const t=this.getAudioFiles({sync:!0});return t.status!==DKTools.IO.OK?[]:_.map(t.data,t=>t.loadAudio())}async loadAudioFilesAsync(){const t=await this.getAudioFilesAsync();if(t.status!==DKTools.IO.OK)return[];const e=_.map(t.data,t=>t.loadAudioAsync());return Promise.all(e)}loadBitmaps(t,e,i){const s=this.getImageFiles({sync:!0});return s.status!==DKTools.IO.OK?[]:_.map(s.data,s=>s.loadBitmap(t,e,i))}async loadBitmapsAsync(t,e,i){const s=await this.getImageFilesAsync();if(s.status!==DKTools.IO.OK)return[];const n=_.map(s.data,s=>s.loadBitmapAsync(t,e,i));return Promise.all(n)}remove(t={}){if(!DKTools.IO.isLocalMode())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!this.isEmpty())return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.rmdir(i,e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.rmdirSync(i),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAync(){return new Promise((t,e)=>{const i=this.remove({sync:!1,onSuccess:t,onError:e});i!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}reserveBitmaps(t,e,i,s){const n=this.getImageFiles({sync:!0});return n.status!==DKTools.IO.OK?[]:_.map(n.data,n=>n.reserveBitmap(t,e,i,s))}async reserveBitmapsAsync(t,e,i,s){const n=await this.getImageFilesAsync();if(n.status!==DKTools.IO.OK)return[];const r=_.map(n.data,n=>n.reserveBitmapAsync(t,e,i,s));return Promise.all(r)}},DKTools.IO.WebStorage=class{static exists(t){return localStorage.hasOwnProperty(t)}static load(t,e={}){if(!this.exists(t))return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};let i=localStorage.getItem(t);if(i){if(e.decompress)try{i=LZString.decompressFromBase64(i)}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(e.parse)try{i=JSON.parse(i,e.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:i,status:DKTools.IO.OK}}static remove(t){return this.exists(t)?(localStorage.removeItem(t),DKTools.IO.OK):DKTools.IO.ERROR_PATH_DOES_NOT_EXIST}static rename(t,e,i=!1){if(!this.exists(t))return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!i&&this.exists(e))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;const s=localStorage.getItem(t);return localStorage.setItem(e,s),localStorage.removeItem(t),DKTools.IO.OK}static save(t,e,i={}){return i=i||{},!_.defaultTo(i.overwrite,!0)&&this.exists(t)?DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE:(i.stringify&&(e=JSON.stringify(e,i.stringify.replacer,i.stringify.space)),i.compress&&(e=LZString.compressToBase64(e)),localStorage.setItem(t,e),DKTools.IO.OK)}},DKTools.Network=class{constructor(){return DKTools.Network}static async fetchFile(t,e={}){return fetch(t,e).then(t=>{if(t.ok)return this._toFile(t);throw t})}static async fetchJson(t,e={}){return e.headers||(e.headers={}),e.headers.Accept="application/json",fetch(t,e).then(t=>{if(t.ok)return this._toJson(t);throw t})}static async _toFile(t){return t.arrayBuffer().catch(()=>null)}static async _toJson(t){return t.json().catch(()=>null)}},DKTools.ParameterManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._pluginName=t,this._params={},this.initializeParams()}initializeParams(){_.forEach(PluginManager.parameters(this._pluginName),(t,e)=>{this._params[e]=DKTools.ParameterManager.parse(t)})}get(t,e,i){if(!DKTools.Utils.isString(t))return void console.error("Parameter name is not a string!",this._pluginName,t,e,i);let s=this._params[t];return void 0!==s?(e instanceof Object?s=_.find(s,e):void 0!==e&&(s=s[e]),s instanceof Object&&(i instanceof Object?(void 0!==i.key&&(s=s[i.key]),void 0!==i.index&&(s=s[i.index])):void 0!==i&&(s=s[i])),s):void 0}static parse(t){try{return DKTools.Utils.isNumber(t)||DKTools.Utils.isBoolean(t)?t:JSON.parse(t,(t,e)=>{if(Array.isArray(e))return _.map(e,t=>this.parse(t));try{return this.parse(e)}catch(t){return e}})}catch(e){return t}}},Object.defineProperties(DKTools.ParameterManager.prototype,{pluginName:{get:function(){return this._pluginName},configurable:!0},params:{get:function(){return this._params},configurable:!0}}),DKTools.PluginManager=class{constructor(){return DKTools.PluginManager}static initialize(){this.registerPlugins(Imported),this._checkRequirements()}static _checkRequirements(){_.forEach(this._requirements,(t,e)=>{const i=_.max(t),s=this.getVersion(e);if(void 0===s){const t='Required to install the plugin "%1". Minimal version: %2'.format(e,i);throw new Error(t)}if(s<i){const t='Required to update the plugin "%1" to minimal version %2 (Installed: %3)'.format(e,i,s);throw new Error(t)}})}static getVersion(t){return this._plugins[t]}static isRegistered(t){return!!this._plugins[t]}static isRequired(t){return!!this._requirements[t]}static registerPlugin(t,e){!e||this.isRegistered(t)||DKTools.Utils.isBoolean(e)||(this._plugins[t]=e)}static registerPlugins(t){_.forEach(t,(t,e)=>{this.registerPlugin(e,t)})}static requirePlugin(t,e){this._requirements[t]||(this._requirements[t]=[]),this._requirements[t].push(e)}static requirePlugins(t){_.forEach(t,(t,e)=>{this.requirePlugin(e,t)})}},Object.defineProperties(DKTools.PluginManager,{_plugins:{value:{}},_requirements:{value:{}},plugins:{get:function(){return this._plugins},configurable:!0},requirements:{get:function(){return this._requirements},configurable:!0}}),DKTools.PluginCommandManager=class{constructor(){return DKTools.PluginCommandManager}static has(t){return!!this._pluginCommands[t.toLowerCase()]}static process(t,e,i){if(!e)throw new Error("Empty plugin command!");const s=this._pluginCommands[e.toLowerCase()];DKTools.Utils.isFunction(s)&&s.call(t,i)}static set(t,e){this._pluginCommands[t.toLowerCase()]=e}},Object.defineProperties(DKTools.PluginCommandManager,{_pluginCommands:{value:{}}}),DKTools.PreloadManager=class{constructor(){return DKTools.PreloadManager}static initialize(){const t=DKToolsParam.get("Initial Preloading")||{};if(!t.Enabled)return void this.start();this.setDebugging(t.Debugging),t["Audio Files"].forEach(t=>{this.preloadAudio({path:"audio/"+t,caching:!0})}),t["Image Files"].forEach(t=>{this.preloadImage({path:"img/"+t.Path,hue:t.Hue,caching:!0})}),this.getTotal()>=30&&console.warn("Too many files to preload! Load only needed files.");let e=!1;(t["Progress Bar"]||{}).Enabled||(e=!0,this.onFileLoad(()=>{Graphics.updateLoading()}),this.onFinish(()=>{Graphics.endLoading()})),e&&this.start()}static clearCache(){this._cache={audio:{},image:{}}}static clearQueue(){this._queue={audio:{},image:{}}}static _finish(){this._finishTime=new Date,this._debugging=!1;const t=(this._finishTime-this._startTime)/1e3,e=this.getTotal();if(e>0&&this._log("Preloading complete! \nLoaded/Skipped/Total: "+this._loaded+"/"+this._skipped+"/"+e+"\nPreloading time: "+t+" sec"),this._finishListeners){const i={loaded:this._loaded,skipped:this._skipped,preloadingTime:t,total:e};for(;this._finishListeners.length>0;){this._finishListeners.shift()(i)}delete this._finishListeners}this._fileLoadListeners&&delete this._fileLoadListeners,this.clearQueue()}static _generateAudioKey(t){return DKTools.IO.normalizePath(t,!0)}static _generateImageKey(t,e=0){return DKTools.IO.normalizePath(ImageManager._generateCacheKey(t,e||0),!0)}static getCachedAudioByKey(t){return this._cache.audio[t]}static getCachedAudioByPath(t){return this.getCachedAudioByKey(this._generateAudioKey(t))}static getCachedImageByKey(t){return this._cache.image[t]}static getCachedImageByPath(t){return this.getCachedImageByKey(this._generateImageKey(t))}static getTotal(){return _.size(this._queue.audio)+_.size(this._queue.image)}static isAudioCachedByKey(t){return!!this._cache.audio[t]}static isAudioCachedByPath(t){return this.isAudioCachedByKey(this._generateAudioKey(t))}static isFinished(){return!!this._finishTime}static isReady(){return this.isFinished()}static isImageCachedByKey(t){return!!this._cache.image[t]}static isImageCachedByPath(t,e){return this.isImageCachedByKey(this._generateImageKey(t,e))}static isStarted(){return!!this._startTime}static _log(t){this._debugging&&t&&console.log(t)}static _onFileLoad(t){if(this._loaded++,this._log(`Loaded ${t instanceof WebAudio?"audio":"image"}: ${t.url}`),this._fileLoadListeners){const e={file:t,loadded:this._loaded,total:this.getTotal()};this._fileLoadListeners.forEach(t=>{t(e)})}}static onFileLoad(t){this._fileLoadListeners||(this._fileLoadListeners=[]),this._fileLoadListeners.push(t)}static onFinish(t){this._finishListeners||(this._finishListeners=[]),this._finishListeners.push(t)}static _preload(t,e){if(e instanceof Object&&DKTools.Utils.isString(e.path)){const i=new DKTools.IO.Directory(e.path);if(i.isDirectory()){if(!DKTools.IO.isLocalMode()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP)throw new Error("Web browsers and mobile phones cannot load directories!");{const s={sync:!0};let n=[];this._files[e.path]?n=this._files[e.path]:("audio"===t?n=i.getAudioFiles(s).data||[]:"image"===t&&(n=i.getImageFiles(s).data||[]),this._files[e.path]=n),n.forEach(i=>{const s=i.getFullPath();this._queue[t][s]||("audio"===t?this._processAudioFile(i,e):"image"===t&&this._processImageFile(i,e))})}}else{let i=e.path;i.includes(".")||("image"===t?i+=".png":"audio"===t&&(i+=".ogg"));const s=new DKTools.IO.File(i),n=s.getFullPath();if(this._queue[t][n])return;s.isFile()?"audio"===t?this._processAudioFile(s,e):"image"===t&&this._processImageFile(s,e):console.error("This is not a file: "+n)}}}static _processAudioFile(t,e){const i=t.getFullPath(),s=DKTools.IO.reverseSlashes(i);if(this._queue.audio[s])return;const n=t.getDirectoryName(),r=t.getName();if(e.caching){if(this.isAudioCachedByPath(s))return this._log("Audio already preloaded: "+s+". Skipped..."),void("se"===n&&AudioManager.isStaticSe({name:r})&&this.releaseAudioByPath(s));if(AudioManager.isLoaded(n,r)){if("se"!==n||!AudioManager.isStaticSe({name:r})){const t=AudioManager.createBuffer(n,r);this._cache.audio[this._generateAudioKey(s)]=t,AudioManager.releaseBuffer(n,r)}return void this._log("Audio already preloaded: "+s+". Skipped...")}}else{const t=AudioManager.isReserved(n,r),e=AudioManager.isLoaded(n,r);if(t||!e||"se"===n&&AudioManager.isStaticSe({name:r})||AudioManager._audioCache.reserve(AudioManager._generateCacheKey(n,r),AudioManager.createBuffer(n,r),AudioManager._defaultReservationId),t||e)return void this._log("Audio already preloaded: "+s+". Skipped...")}this._queue.audio[s]={...e,path:s}}static _processImageFile(t,e){const i=t.getFullPath(),s=DKTools.IO.reverseSlashes(i);if(!this._queue.image[s]){if(e.caching){if(this.isImageCachedByPath(s,e.hue))return void this._log("Image already preloaded: "+s+". Skipped...");if(ImageManager.isLoaded(s,e.hue)){const t=ImageManager.loadNormalBitmap(s,e.hue);return this._cache.image[this._generateImageKey(t.url,e.hue)]=t,ImageManager.releaseBitmap(s),void this._log("Image already preloaded: "+s+". Skipped...")}}else{const t=ImageManager.isReserved(s,e.hue),i=ImageManager.isLoaded(s,e.hue);if(!t&&i&&ImageManager._imageCache.reserve(ImageManager._generateCacheKey(s,e.hue),ImageManager.loadNormalBitmap(s,e.hue),ImageManager._defaultReservationId),t||i)return void this._log("Image already preloaded: "+s+". Skipped...")}this._queue.image[s]={...e,path:s}}}static _processLoadAudioFiles(){const t=[];return _.forEach(this._queue.audio,e=>{const i=new DKTools.IO.File(e.path),s=i.getFullPath();if(i.isFile())if(i.isAudio()){if(this.isAudioCachedByPath(s))return this._skipped++,void this._log("Audio already preloaded: "+s+". Skipped...");const n=i.loadAudio({...e.options});n?(e.caching&&(this._cache.audio[this._generateAudioKey(n.url)]=n),t.push(n)):(this._skipped++,this._log("Cannot load an audio: "+s+". Skipped..."))}else this._skipped++,this._log("This is not an audio: "+s+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")}),t.map(t=>DKTools.Utils.WebAudio.loadAsync(t).then(()=>this._onFileLoad(t)))}static _processLoadImageFiles(){const t=[];return _.forEach(this._queue.image,e=>{const i=new DKTools.IO.File(e.path),s=i.getFullPath();if(i.isFile())if(i.isImage()){if(this.isImageCachedByPath(s,e.hue))return this._skipped++,void this._log("Image already preloaded: "+s+". Skipped...");let n;(n=e.caching?DKTools.Utils.Bitmap.load({...e.options,folder:i.getPath(),filename:i.getName(),hue:e.hue}):DKTools.Utils.Bitmap.reserve({...e.options,folder:i.getPath(),filename:i.getName(),hue:e.hue}))?(e.caching&&(this._cache.image[this._generateImageKey(n.url,e.hue)]=n),t.push(n)):(this._skipped++,this._log("Cannot load an image: "+s+". Skipped..."))}else this._skipped++,this._log("This is not an image: "+s+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")}),t.map(t=>DKTools.Utils.Bitmap.loadAsync(t).then(()=>this._onFileLoad(t)))}static preloadAudio(t){this._preload("audio",t)}static preloadImage(t){this._preload("image",t)}static releaseAudioByKey(t){delete this._cache.audio[t]}static releaseAudioByPath(t){this.releaseAudioByKey(this._generateAudioKey(t))}static releaseImageByKey(t){delete this._cache.image[t]}static releaseImageByPath(t,e){this.releaseImageByKey(this._generateImageKey(t,e))}static setDebugging(t){this._debugging=t||!1}static start(){const t=this.getTotal();if(this._loaded=0,this._skipped=0,this._startTime=new Date,this._finishTime=null,0===t)return Promise.resolve().then(()=>this._finish());this._log("DKTools Preload Manager is running... \nTotal files to load: "+t);const e=Promise.all(this._processLoadAudioFiles()),i=Promise.all(this._processLoadImageFiles());return Promise.all([e,i]).then(()=>this._finish())}},Object.defineProperties(DKTools.PreloadManager,{_queue:{value:{audio:{},image:{}},writable:!0},_cache:{value:{audio:{},image:{}},writable:!0},_files:{value:{}}}),DKTools.PreloadManager.Scene=function(){this.initialize.apply(this,arguments)},DKTools.PreloadManager.Scene.prototype=Object.create(Scene_Base.prototype),DKTools.PreloadManager.Scene.prototype.constructor=DKTools.PreloadManager.Scene,DKTools.PreloadManager.Scene.prototype.initialize=function(){Scene_Base.prototype.initialize.apply(this,arguments),this._params=DKToolsParam.get("Initial Preloading","Progress Bar"),this._total=DKTools.PreloadManager.getTotal(),this._nextScene=Scene_Boot},DKTools.PreloadManager.Scene.prototype.prepare=function(t){this._nextScene=t},DKTools.PreloadManager.Scene.prototype.setupPreloading=function(){Scene_Base.prototype.setupPreloading.apply(this,arguments),"images"===this._params["Progress Bar Style"]&&(this._preloader.add(DKTools.Utils.Bitmap.reserveAsync({folder:"img/system/",filename:this._params["Progress Bar Background Image"]}).then(t=>{this._backgroundBitmap=t})),this._preloader.add(DKTools.Utils.Bitmap.reserveAsync({folder:"img/system/",filename:this._params["Progress Bar Progress Image"]}).then(t=>{this._progressBitmap=t})))},DKTools.PreloadManager.Scene.prototype.isGameFontLoaded=Scene_Boot.prototype.isGameFontLoaded,DKTools.PreloadManager.Scene.prototype.create=function(){0!==this._total?(this._params.Background&&this.createBackground(),this.createProgressBar()):SceneManager.goto(this._nextScene)},DKTools.PreloadManager.Scene.prototype.createBackground=function(){this._background=new Sprite(ImageManager.loadSystem(this._params.Background)),this.addChild(this._background)},DKTools.PreloadManager.Scene.prototype.createProgressBar=function(){const params=this._params,style=params["Progress Bar Style"]||"colors";let width,height;"colors"===style?(width=eval(params["Progress Bar Width"]),height=eval(params["Progress Bar Height"])):(this._backgroundBitmap.width!==this._progressBitmap.width&&console.warn("PreloadManager: different width of background and progress!"),this._backgroundBitmap.height!==this._progressBitmap.height&&console.warn("PreloadManager: different height of background and progress!"),width=Math.max(this._backgroundBitmap.width,this._progressBitmap.width),height=Math.max(this._backgroundBitmap.height,this._progressBitmap.height));const x=eval(params["Progress Bar X"])||0,y=eval(params["Progress Bar Y"])||0;this._progressBar=new DKTools.Sprite.ProgressBar.Rectangle(x,y,width,height),this._progressBar.setupFont({fontSize:params["Progress Bar Text Size"]}),"colors"===style?(this._progressBar.setupBackgroundColor(params["Progress Bar Background Color"]),this._progressBar.setupProgressColor(params["Progress Bar Progress Color"])):(this._progressBar._backgroundBitmap=this._backgroundBitmap,this._progressBar._progressBitmap=this._progressBitmap,this._progressBar.setupDrawGraphicHandler(function(){this.drawBitmap(this._backgroundBitmap),this.drawBitmap(this._progressBitmap,{source:t=>({width:t.width*this.getPercents()/100})})}.bind(this._progressBar))),params["Progress Bar Text"]&&this._progressBar.setupDrawTextHandler(function(){if(!this._data)return;const t=params["Progress Bar Text"].format(...[...this._data,this.getPercents()]);this.drawText(t,{height:this.height})}.bind(this._progressBar)),this._progressBar.setupMaxValue(this._total),this._progressBar.setupValue(0),this._progressBar.start(),this.addChild(this._progressBar)},DKTools.PreloadManager.Scene.prototype.isReady=function(){return Scene_Base.prototype.isReady.apply(this,arguments)&&DKTools.StartupManager.isReady()&&this.isGameFontLoaded()},DKTools.PreloadManager.Scene.prototype.start=function(){const t=this._total,e=t>180?1:Math.ceil(180/t);DKTools.PreloadManager.onFileLoad(t=>{this._progressBar.addEvent({type:"queue",repeats:0,repeatTime:e,onStart:()=>{this._progressBar._data=[t.file.url,t.loaded,t.total],this._progressBar.nextValue()}})}),this._progressBar.addOneTimeEvent({type:"full",onSuccess:()=>{SceneManager.goto(this._nextScene)}}),DKTools.PreloadManager.start()},DKTools.PreloadManager.Scene.prototype.terminate=function(){Scene_Base.prototype.terminate.apply(this,arguments),this._background&&this.removeChild(this._background),this._progressBar&&this.removeChild(this._progressBar)},DKTools.StartupManager=class{static async initialize(){this._isReady=!1,await this.checkErrors(),await this.initializeModules(),this._isReady=!0}static async initializeModules(){}static _checkRPGMakerVersion(){if(Utils.RPGMAKER_VERSION<"1.6.0")throw new Error("Required to update RPG Maker MV to minimal version 1.6.0 (Installed: %1)".format(Utils.RPGMAKER_VERSION))}static _checkWebStorage(){if(!DKTools.IO.isLocalMode()&&!window.hasOwnProperty("localStorage"))throw new Error("Your browser does not support localStorage API")}static async checkErrors(){await this._checkRPGMakerVersion(),await this._checkWebStorage()}static isReady(){return this._isReady}},DKTools.Audio=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){t=t||{},this._id=t.id,this._type=t.type.toLowerCase(),this._name=t.name,this._volume=_.defaultTo(t.volume,this.standardVolume()),this._pitch=_.defaultTo(t.pitch,this.standardPitch()),this._pan=_.defaultTo(t.pan,this.standardPan()),this._loop=_.defaultTo(t.loop,this.standardLoop()),this._buffer=this._createBuffer(),this._pausePos=null}_createBuffer(){return AudioManager.createBuffer(this._type,this._name)}clone(){return new DKTools.Audio(this)}equals(t){return!!t&&(this._type===t.type&&this._name===t.name&&this._volume===t.volume&&this._pitch===t.pitch&&this._pan===t.pan&&this._loop===t.loop)}fadeIn(t=0){this._buffer.fadeIn(t)}fadeOut(t=0){this._buffer.fadeOut(t)}isPaused(){return!this.isPlaying()&&null!=this._pausePos}isPlaying(){return this._buffer.isPlaying()}pause(){this.isPlaying()&&(this._pausePos=this.seek(),this.stop())}play(t=0){this._buffer.play(this._loop,t),this._updateBufferParameters(),this._pausePos=null}resume(){this.isPaused()&&this.play(this._pausePos)}seek(){return this._buffer.seek()}standardLoop(){return"bgm"===this._type||"bgs"===this._type}standardPan(){return 0}standardPitch(){return 100}standardVolume(){return 90}stop(){this.isPlaying()&&this._buffer.stop()}_updateBufferParameters(){const t=this._buffer;let e=AudioManager[this._type+"Volume"];Number.isFinite(e)||(e=100),t.volume=e*this._volume/1e4,t.pitch=this._pitch/100,t.pan=this._pan/100}},Object.defineProperties(DKTools.Audio.prototype,{id:{get:function(){return this._id},configurable:!0},type:{get:function(){return this._type},configurable:!0},name:{get:function(){return this._name},configurable:!0},volume:{get:function(){return this._volume},set:function(t){this._volume!==t&&(this._volume=t,this._updateBufferParameters())},configurable:!0},pitch:{get:function(){return this._pitch},set:function(t){this._pitch!==t&&(this._pitch=t,this._updateBufferParameters())},configurable:!0},pan:{get:function(){return this._pan},set:function(t){this._pan!==t&&(this._pan=t,this._updateBufferParameters())},configurable:!0},loop:{get:function(){return this._loop},configurable:!0},buffer:{get:function(){return this._buffer},configurable:!0},pos:{get:function(){return this.seek()},set:function(t){this.play(t)},configurable:!0}}),DKTools.Event=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){t=t||{},this._id=t.id,this._target=t.target,this._type=t.type,this._repeatTime=t.repeatTime||-1,this._repeats=_.defaultTo(t.repeats,-1),this._remainingPauseTime=t.remainingPauseTime||0,this._onStart=t.onStart,this._onUpdate=t.onUpdate,this._onPause=t.onPause,this._onReset=t.onReset,this._onRepeat=t.onRepeat,this._onSuccess=t.onSuccess,this._onFail=t.onFail,this._started=!1,this._resetRemainingTime(),this._resetRemainingRepeats()}addRemainingPauseTime(t=1){this._remainingPauseTime+=t}addRemainingRepeats(t=1){this._remainingRepeats+=t}addRemainingTime(t=1){this._remainingTime+=t}_callOnPauseHandler(){this._canCallOnPauseHandler()&&this._onPause(this)}_callOnRepeatHandler(){this._canCallOnRepeatHandler()&&this._onRepeat(this)}_callOnResetHandler(){this._canCallOnResetHandler()&&this._onReset(this)}_callOnStartHandler(){this._canCallOnStartHandler()&&this._onStart(this),this._started=!0}_callOnSuccessHandler(t=!1){(this._canCallOnSuccessHandler()||t&&this.hasOnSuccessHandler())&&this._onSuccess(this)}_callOnUpdateHandler(){this._canCallOnUpdateHandler()&&this._onUpdate(this)}_callOnFailHandler(){this._canCallonFailHandler()&&this._onFail(this)}_canCallOnPauseHandler(){return this.hasOnPauseHandler()&&this.isPaused()}_canCallOnRepeatHandler(){return this.hasOnRepeatHandler()}_canCallOnResetHandler(){return this.hasOnResetHandler()}_canCallOnStartHandler(){return this.hasOnStartHandler()&&!this.isStarted()}_canCallOnSuccessHandler(){return this.hasOnSuccessHandler()&&this.isFinished()}_canCallOnUpdateHandler(){return this.hasOnUpdateHandler()&&this.isUpdated()}_canCallonFailHandler(){return this.hasonFailHandler()}_clearRemainingRepeats(){this._remainingRepeats=0}_clearRemainingTime(){this._remainingTime=0}clone(){return new this.constructor(this)}finish(t=!1){this.isFinished()||t?this._callOnSuccessHandler(t):this._callOnFailHandler(),this._clearRemainingTime(),this._clearRemainingRepeats()}getElapsedRepeats(){return this._repeats-this._remainingRepeats}getElapsedTime(){return this._repeatTime-this._remainingTime}hasManager(){return!!this._manager}hasOnPauseHandler(){return!!this._onPause}hasOnRepeatHandler(){return!!this._onRepeat}hasOnResetHandler(){return!!this._onReset}hasOnStartHandler(){return!!this._onStart}hasOnSuccessHandler(){return!!this._onSuccess}hasOnUpdateHandler(){return!!this._onUpdate}hasTarget(){return!!this._target}hasType(){return!!this._type}hasonFailHandler(){return!!this._onFail}isAnimation(){return this instanceof DKTools.Animation}isAnimationAction(){return this instanceof DKTools.Animation.Action}isFinished(){return 0===this._remainingTime&&0===this._remainingRepeats}isPaused(){return 0!==this._remainingPauseTime}isStarted(){return this._started}isUpdated(){return this.isStarted()&&!this.isPaused()&&!this.isFinished()}pause(t=-1){this._remainingPauseTime=t}_resetRemainingRepeats(){this._remainingRepeats=this._repeats}_resetRemainingTime(){this._remainingTime=this._repeatTime}remove(){return!this.hasTarget()||this._target.removeEvent(this)}repeat(){this._remainingRepeats>0&&this._remainingRepeats--,this._resetRemainingTime(),this._callOnRepeatHandler()}reset(){this._resetRemainingTime(),this._resetRemainingRepeats(),this._callOnResetHandler()}resume(){this._remainingPauseTime=0}setManager(t){this._manager=t}setOnPauseHandler(t){this._onPause=t}setOnRepeatHandler(t){this._onRepeat=t}setOnResetHandler(t){this._onReset=t}setOnStartHandler(t){this._onStart=t}setOnSuccessHandler(t){this._onSuccess=t}setOnUpdateHandler(t){this._onUpdate=t}setTarget(t){this._target=t}setonFailHandler(t){this._onFail=t}stop(t=!1){this.finish(t),this.reset()}_update(){this._callOnUpdateHandler(),this._updateRemainingRepeats()}_updatePause(){this._callOnPauseHandler(),this._updateRemainingPauseTime()}_updateRemainingPauseTime(){this._remainingPauseTime>0&&this._remainingPauseTime--}_updateRemainingRepeats(){this.isFinished()||(0===this._remainingTime?this.repeat():this._updateRemainingTime())}_updateRemainingTime(){this._remainingTime>0&&this._remainingTime--}update(){this.isPaused()?this._updatePause():(this._callOnStartHandler(),this._update(),this.isFinished()&&this.finish())}},Object.defineProperties(DKTools.Event.prototype,{id:{get:function(){return this._id},configurable:!0},target:{get:function(){return this._target},configurable:!0},manager:{get:function(){return this._manager},configurable:!0},type:{get:function(){return this._type},configurable:!0},repeatTime:{get:function(){return this._duration},configurable:!0},repeats:{get:function(){return this._repeats},configurable:!0},remainingTime:{get:function(){return this._remainingTime},set:function(t){this._remainingTime=t},configurable:!0},remainingRepeats:{get:function(){return this._remainingRepeats},set:function(t){this._remainingRepeats=t},configurable:!0},remainingPauseTime:{get:function(){return this._remainingPauseTime},set:function(t){this._remainingPauseTime=t},configurable:!0},onStart:{get:function(){return this._onStart},configurable:!0},onUpdate:{get:function(){return this._onUpdate},configurable:!0},onPause:{get:function(){return this._onPause},configurable:!0},onReset:{get:function(){return this._onReset},configurable:!0},onRepeat:{get:function(){return this._onRepeat},configurable:!0},onSuccess:{get:function(){return this._onSuccess},configurable:!0},onFail:{get:function(){return this._onFail},configurable:!0}}),DKTools.Animation=class extends DKTools.Event{initialize(t){this._actions=[],DKTools.Event.prototype.initialize.call(this,t)}addAction(t){t&&(Number.isFinite(t.startTime)||(t.startTime=0),Number.isFinite(t.endTime)||(t.endTime=this._repeatTime),t.setAnimation(this),this._actions.push(t))}addActions(t){_.forEach(t,this.addAction.bind(this))}_canUpdateAction(t){return _.inRange(this.getElapsedTime(),t.startTime,t.endTime)}hasAction(t){return DKTools.Utils.Array.contains(this._actions,t)}hasActions(){return this._actions.length>0}isActionFinished(t){return t.isStarted()&&!t.isPaused()&&this.getElapsedTime()>=t.endTime}isActionUpdated(t){return t.isStarted()&&!t.isPaused()&&this._canUpdateAction(t)}isFinished(){return DKTools.Event.prototype.isFinished.call(this)||!this.hasActions()}removeAction(t){this.hasAction(t)&&DKTools.Utils.Array.remove(this._actions,t)}repeat(){this.repeatActions(),DKTools.Event.prototype.repeat.call(this)}repeatActions(){_.forEach(this._actions,function(t){t.repeat()})}reset(){this.resetActions(),DKTools.Event.prototype.reset.call(this)}resetActions(){_.forEach(this._actions,function(t){t.reset()})}_update(){this._updateActions(),DKTools.Event.prototype._update.call(this)}_updateAction(t){this._canUpdateAction(t)?t.update():this.getElapsedTime()===t.endTime&&this.isActionFinished(t)&&t.finish()}_updateActions(){_.forEach(this._actions,this._updateAction.bind(this))}},Object.defineProperties(DKTools.Animation.prototype,{actions:{get:function(){return this._actions},configurable:!0}}),DKTools.Animation.Action=class extends DKTools.Event{static Anchor(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=this._data,s=e.anchor,n=(i.x-s.x)/t,r=(i.y-s.y)/t,o=s.x+n,a=s.y+r;e.setAnchor(o,a)}.bind(e)),e}static Close(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=-e.openness/t,s=e.openness+i;e.openness=s}.bind(e)),e}static Frame(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=this._data,s=e.frame,n=(i.x-s.x)/t,r=(i.y-s.y)/t,o=(i.width-s.width)/t,a=(i.height-s.height)/t,l=new Rectangle(s.x+n,s.y+r,s.width+o,s.height+a);e.setFrame(l)}.bind(e)),e}static Move(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=(this._data.x-e.x)/t,s=(this._data.y-e.y)/t,n=e.x+i,r=e.y+s;e.move(n,r)}.bind(e)),e}static OpacitySprite(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=(this._data-e.opacity)/t,s=e.opacity+i;e.setOpacity(s)}.bind(e)),e}static OpacityWindow(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=(this._data.windowOpacity-e.windowOpacity)/t,s=(this._data.contentsOpacity-e.contentsOpacity)/t,n=(this._data.frameOpacity-e.frameOpacity)/t,r=(this._data.backOpacity-e.backOpacity)/t,o={windowOpacity:e.windowOpacity+i,contentsOpacity:e.contentsOpacity+s,frameOpacity:e.frameOpacity+n,backOpacity:e.backOpacity+r};e.setOpacity(o)}.bind(e)),e}static Open(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=(255-e.openness)/t;e.openness=e.openness+i}.bind(e)),e}static Pivot(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=this._data,s=e.pivot,n=(i.x-s.x)/t,r=(i.y-s.y)/t,o=s.x+n,a=s.y+r;e.setPivot(o,a)}.bind(e)),e}static Rotation(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=(this._data-e.rotation)/t,s=e.rotation+i;e.setRotation(s)}.bind(e)),e}static Scale(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=this._data,s=e.scale,n=(i.x-s.x)/t,r=(i.y-s.y)/t,o=s.x+n,a=s.y+r;e.setScale(o,a)}.bind(e)),e}static Skew(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=this._data,s=e.skew,n=(i.x-s.x)/t,r=(i.y-s.y)/t,o=s.x+n,a=s.y+r;e.setSkew(o,a)}.bind(e)),e}static Sound(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this._data;t.isPlaying()||t.play()}.bind(e)),e}static Tint(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=(this._data-e.tint)/t,s=e.tint+i;e.setTint(s)}.bind(e)),e}static Tone(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this._target,i=e.tone,s=(this._data[0]-i[0])/t,n=(this._data[1]-i[1])/t,r=(this._data[2]-i[2])/t,o=i[0]+s,a=i[1]+n,l=i[2]+r;e.setTone([o,a,l])}.bind(e)),e}initialize(t){t=t||{},this._animation=null,this._startTime=t.startTime,this._endTime=t.endTime,this._data=t.data,DKTools.Event.prototype.initialize.call(this,t)}getElapsedTime(){return this._animation.getElapsedTime()-this._startTime}getRemainingTime(){return this._endTime-this._animation.getElapsedTime()}isFinished(){return this._animation.isActionFinished(this)}isUpdated(){return this._animation.isActionUpdated(this)}remove(){this._animation.removeAction(this)}repeat(){this._callOnRepeatHandler()}reset(){this._callOnResetHandler()}setAnimation(t){this._animation=t}},Object.defineProperties(DKTools.Animation.Action.prototype,{animation:{get:function(){return this._animation},configurable:!0},startTime:{get:function(){return this._startTime},set:function(t){this._startTime=t},configurable:!0},endTime:{get:function(){return this._endTime},set:function(t){this._endTime=t},configurable:!0},data:{get:function(){return this._data},configurable:!0}}),DKTools.OptionsManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(){this.clear()}addOptionChangeListener(t,e){this._optionChangeListeners[t]||(this._optionChangeListeners[t]=[]),this._optionChangeListeners[t].push(e)}clear(){this._options=[],this._optionChangeListeners={}}clone(t=!1){const e=new DKTools.OptionsManager;return e.enableOptions(this._options),t&&_.forEach(this._optionChangeListeners,(t,i)=>{_.forEach(t,t=>{e.addOptionChangeListener(i,t)})}),e}disableOption(t){this.isOptionEnabled(t)&&(DKTools.Utils.Array.remove(this._options,t),this._onOptionChange(t,!1))}disableOptions(t){const e=arguments.length>1?arguments:t;_.forEach(e,this.disableOption.bind(this))}enableOption(t){this.isOptionDisabled(t)&&(this._options.push(t),this._onOptionChange(t,!0))}enableOptions(t){const e=arguments.length>1?arguments:t;_.forEach(e,this.enableOption.bind(this))}equals(t){return t instanceof DKTools.OptionsManager&&_.isEqual(this._options,t.options)}isOptionDisabled(t){return!this.isOptionEnabled(t)}isOptionEnabled(t){return DKTools.Utils.Array.contains(this._options,t)}isOptionsDisabled(t){const e=arguments.length>1?arguments:t;return _.every(e,this.isOptionDisabled.bind(this))}isOptionsEnabled(t){const e=arguments.length>1?arguments:t;return _.every(e,this.isOptionEnabled.bind(this))}isSomeOptionEnabled(){return this._options.length>0}isSomeOptionsDisabled(t){const e=arguments.length>1?arguments:t;return _.some(e,this.isOptionDisabled.bind(this))}isSomeOptionsEnabled(t){const e=arguments.length>1?arguments:t;return _.some(e,this.isOptionEnabled.bind(this))}_onOptionChange(t,e){_.forEach(this._optionChangeListeners[t],i=>{i(t,e)})}removeOptionChangeListener(t,e){DKTools.Utils.Array.remove(this._optionChangeListeners[t],e)}switchOption(t){this.isOptionEnabled(t)?this.disableOption(t):this.enableOption(t)}switchOptions(t){const e=arguments.length>1?arguments:t;_.forEach(e,this.switchOption.bind(this))}},Object.defineProperties(DKTools.OptionsManager,{options:{get:function(){return this._options},configurable:!0}}),DKTools.EventsManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._target=t,this._events={}}addAnimation(t){return this.addEventToContainer(t)}addEvent(t){let e;return t instanceof DKTools.Event||t instanceof DKTools.Animation?e=t:t instanceof Object&&(e=new DKTools.Event(t)),this.addEventToContainer(e)}addEventToContainer(t){if(!t)return null;return t.hasTarget()||t.setTarget(this._target),t.setManager(this),this.getEventsContainer(t).push(t),t}addOneTimeEvent(t){return t.repeatTime=1,t.repeats=0,this.addEvent(t)}_checkEvent(t){return t&&!t.isFinished()}_checkEvents(){_.forEach(this._events,(t,e)=>{this._events[e]=this._checkEventsContainer(t)})}_checkEventsContainer(t){return _.filter(t,this._checkEvent.bind(this))}clearEvents(t){t?Array.isArray(t)?_.forEach(t,t=>{this._events[t]=[]}):this._events[t]=[]:this._events={}}createEventsContainer(t){return this._events[t]||(this._events[t]=[]),this._events[t]}findAnimation(t,e){return _.find(this.getAnimations(e),{id:t})}findEvent(t,e){return _.find(this.getEvents(e),{id:t})}finishEvents(t,e=!1){this.iterateEventsContainer(t,t=>{t.finish(e)})}getAnimations(t){return this.getEvents(t).filter(t=>t instanceof DKTools.Animation)}getEventIndex(t){return this.getEventsContainer(t).indexOf(t)}getEvents(t){if(t)return this.getEventsContainerByType(t);let e=[];return _.forEach(this._events,t=>{e=e.concat(t)}),e}getEventsContainer(t){return this.getEventsContainerByType(t.type)}getEventsContainerByType(t){return this._events[t]||this.createEventsContainer(t)}hasAnimation(t){return t instanceof DKTools.Animation&&this.getEventIndex(t)>=0}hasAnimations(t){return this.getAnimations(t).length>0}hasEvent(t){return this.getEventIndex(t)>=0}hasEvents(t){return this.getEvents(t).length>0}isEventsPaused(t){const e=this.getEventsContainerByType(t);return _.every(e,t=>t.isPaused())}iterateEventsContainer(t,e){const i=this.getEventsContainerByType(t);_.forEach(i,e)}pauseEvents(t,e=-1){this.iterateEventsContainer(t,t=>{t.pause(e)})}removeEvent(t){const e=this.getEventIndex(t);if(e>=0){return this.getEventsContainer(t)[e]=null,!0}return!1}resumeEvents(t){this.iterateEventsContainer(t,t=>{t.resume()})}stopEvents(t,e=!1){this.iterateEventsContainer(t,t=>{t.stop(e)})}update(){this._checkEvents()}updateEvent(t){t&&t.update()}updateEventsContainer(t){this.iterateEventsContainer(t,this.updateEvent.bind(this))}},Object.defineProperties(DKTools.EventsManager,{events:{get:function(){return this._events},configurable:!0}}),DKTools.Unit=class{constructor(t){this.initialize.apply(this,arguments)}initialize(t){t=t||{},this.setSource(t.source),this.setPercents(t.percents),this.setGetValueHandler(t.getValueHandler)}add(t){if(!t)return this;const e=this._getValueFromUnit(t);return e?(this._source instanceof DKTools.Unit?this._source.add(e):this._source+=e,this):this}clone(){return new this.constructor(this)}div(t){if(!t)return this;const e=this._getValueFromUnit(t);return e?(this._source instanceof DKTools.Unit?this._source.div(e):this._source/=e,this):this}equals(t){return!!t&&(this===t||this._source===t.source&&this._percents===t.percents)}_getValueFromUnit(t){return t instanceof DKTools.Unit?t.getValue():t}getPercents(){if(Number.isFinite(this._percents))return this._percents;if(DKTools.Utils.isFunction(this._percents)){const t=this._percents(this);return Number.isFinite(t)?t:100}return 100}getValue(){let t;return(t=this.hasGetValueHandler()?this._getValueHandler(this):this.getValueBase())||0}getValueBase(){if(!this.hasSource())return Number.NaN;const t=this.getPercents()/100;return 0===t?0:this._source instanceof DKTools.Unit?this._source.getValue()*t:this._source*t}hasGetValueHandler(){return DKTools.Utils.isFunction(this._getValueHandler)}hasPercents(){return DKTools.Utils.isFunction(this._percents)||Number.isFinite(this._percents)}hasSource(){return this._source instanceof DKTools.Unit||Number.isFinite(this._source)}mul(t){if(!t)return this;const e=this._getValueFromUnit(t);return e?(this._source instanceof DKTools.Unit?this._source.mul(e):this._source*=e,this):this}setGetValueHandler(t){this._getValueHandler=t}setPercents(t=100){this._percents=t}setSource(t){this._source=t}sub(t){if(!t)return this;const e=this._getValueFromUnit(t);return e?(this._source instanceof DKTools.Unit?this._source.rem(e):this._source-=e,this):this}},Object.defineProperties(DKTools.Unit.prototype,{source:{get:function(){return this._source},configurable:!0},percents:{get:function(){return this._percents},configurable:!0},getValueHandler:{get:function(){return this._getValueHandler},configurable:!0}}),DKTools.Unit.Property=class extends DKTools.Unit{initialize(t){t=t||{},DKTools.Unit.prototype.initialize.call(this,t),this.setProperty(t.property)}add(t){if(!t)return this;const e=this._property,i=this._source[e];let s=this._getValueFromUnit(t);return s instanceof Object&&(s=s[e]),s?(i instanceof DKTools.Unit?i.add(s):this._source[e]+=s,this):this}div(t){if(!t)return this;const e=this._property,i=this._source[e];let s=this._getValueFromUnit(t);return s instanceof Object&&(s=s[e]),s?(i instanceof DKTools.Unit?i.div(s):this._source[e]/=s,this):this}equals(t){return!!t&&(this===t||_.isEqual(this._source,t.source)&&this._percents===t.percents&&this._property===t.property)}getValueBase(){if(!this.hasSource()||!this.hasProperty())return Number.NaN;return new DKTools.Unit({source:this._source[this._property],percents:this.getPercents()}).getValue()}hasProperty(){return!!this._property}hasSource(){return this._source instanceof Object}mul(t){if(!t)return this;const e=this._property,i=this._source[e];let s=this._getValueFromUnit(t);return s instanceof Object&&(s=s[e]),s?(i instanceof DKTools.Unit?i.mul(s):this._source[e]*=s,this):this}setProperty(t){this._property=t}sub(t){if(!t)return this;const e=this._property,i=this._source[e];let s=this._getValueFromUnit(t);return s instanceof Object&&(s=s[e]),s?(i instanceof DKTools.Unit?i.rem(s):this._source[e]-=s,this):this}},Object.defineProperties(DKTools.Unit.Property.prototype,{property:{get:function(){return this._property},configurable:!0}}),DKTools.Unit.Properties=class extends DKTools.Unit{initialize(t){t=t||{},DKTools.Unit.prototype.initialize.call(this,t),this.setProperties(t.properties)}add(t){if(!t)return this;const e=this._getProperties();return _.forEach(e,e=>{let i=this._getValueFromUnit(t);i instanceof Object&&(i=i[e]),i&&(this._source[e]instanceof DKTools.Unit?this._source[e].add(i):this._source[e]+=i)}),this}addProperty(t){Array.isArray(this._properties)&&this._properties.push(t)}div(t){if(!t)return this;const e=this._getProperties();return _.forEach(e,e=>{let i=this._getValueFromUnit(t);i instanceof Object&&(i=i[e]),i&&(this._source[e]instanceof DKTools.Unit?this._source[e].div(i):this._source[e]/=i)}),this}equals(t){return!!t&&(this===t||_.isEqual(this._source,t.source)&&_.isEqual(this._percents,t.percents)&&_.isEqual(this._properties,t.properties))}_getProperties(){let t=this._properties;return DKTools.Utils.isFunction(t)&&(t=t(this)),Array.isArray(t)?t:[]}getPercents(t){if(Number.isFinite(this._percents))return this._percents;if(DKTools.Utils.isFunction(this._percents)){const e=this._percents(t,this);return Number.isFinite(e)?e:100}if(this._percents instanceof Object){if(DKTools.Utils.isFunction(this._percents[t])){const e=this._percents[t](this);return Number.isFinite(e)?e:100}return Number.isFinite(this._percents[t])?this._percents[t]:100}return 100}getValue(t){return this.hasGetValueHandler()?this._getValueHandler(t,this):this.getValueBase(t)}getValueBase(t){const e=t=>{if(!this.hasSource())return Number.NaN;const e=this._source,i=this.getPercents(t);return 0===i?0:e[t]instanceof DKTools.Unit?e[t].getValue(t)*i/100:new DKTools.Unit.Property({source:e,percents:i,property:t}).getValue()};if(t)return e(t);const i=this._getProperties();return _.reduce(i,(t,i)=>(t[i]=e(i),t),{})}hasProperty(t){return this._getProperties().includes(t)}hasProperties(){return this._getProperties().length>0}hasSource(){return this._source instanceof Object}mul(t){if(!t)return this;const e=this._getProperties();return _.forEach(e,e=>{let i=this._getValueFromUnit(t);i instanceof Object&&(i=i[e]),i&&(this._source[e]instanceof DKTools.Unit?this._source[e].mul(i):this._source[e]*=i)}),this}removeProperty(t){Array.isArray(this._properties)&&DKTools.Utils.Array.remove(this._properties,t)}setProperties(t){this._properties=DKTools.Utils.isFunction(t)?t:_.clone(t)}sub(t){if(!t)return this;const e=this._getProperties();return _.forEach(e,e=>{let i=this._getValueFromUnit(t);i instanceof Object&&(i=i[e]),i&&(this._source[e]instanceof DKTools.Unit?this._source[e].rem(i):this._source[e]-=i)}),this}},Object.defineProperties(DKTools.Unit.Properties.prototype,{properties:{get:function(){return this._properties},configurable:!0}}),DKTools.Unit.Function=class extends DKTools.Unit{add(){return this}div(){return this}getValueBase(){if(!this.hasSource())return Number.NaN;const t=this.getPercents()/100;return 0===t?0:this._source(this)*t}hasSource(){return DKTools.Utils.isFunction(this._source)}mul(){return this}sub(){return this}},DKTools.Base=class{constructor(){throw new Error("This is an abstract class!")}initialize(t,e,i,s){let n;t instanceof Graphics?(i=Graphics.boxWidth,s=Graphics.boxHeight):t instanceof Object?(n=t.x,e=t.y,i=t.width,s=t.height):Number.isFinite(t)&&(n=t),this.move(n,e),this.setupSize(i,s),this._clearAll(),this._createAll(),this._setupAll(),this._addAllChildren(),this.setupAll(t)}_addAllChildren(){}activate(){this.setActive(!0)&&this.updateActivateEvents()}actorName(t){const e=t>=1?$gameActors.actor(t):null;return e?e.name():""}addAllChildren(){this.updateAddAllChildrenEvents()}addAnimation(t){this._eventsManager.addAnimation(t)}addEvent(t){return this._eventsManager.addEvent(t)}addOneTimeEvent(t){return this._eventsManager.addOneTimeEvent(t)}addOptionChangeListener(t,e){this._optionsManager.addOptionChangeListener(t,e)}addFilter(t){t&&(this.filters&&this.filters.length>0?this.filters.push(t):this.filters=[t])}_clearAll(){this._clearMouseEnterTime(),this._clearWheel()}_clearMouseEnterTime(){this._mouseEnterTime=0}_clearWheel(){this._clearWheelX(),this._clearWheelY()}_clearWheelX(){this._wheelX=0}_clearWheelY(){this._wheelY=0}_createAll(){this._createOptionsManager(),this._createEventsManager()}_createEventsManager(){this._eventsManager=new DKTools.EventsManager(this)}_createOptionsManager(){this._optionsManager=new DKTools.OptionsManager}_checkHeight(t){const e=this.getMinHeight();return t?Math.max(e,t):e}_checkWidth(t){const e=this.getMinWidth();return t?Math.max(e,t):e}calcTextHeight(t,e=!1){if(!this.hasBitmap()||!t)return 0;const i=this.bitmap.fontSize,s=t.text.slice(t.index).split("\n"),n=e?s.length:1;let r=0;for(let t=0;t<n;t++){const e=/\x1b[\{\}]/g;let i=this.bitmap.fontSize;for(;;){const n=e.exec(s[t]);if(!n)break;"{"===n[0]&&this.makeFontBigger(),"}"===n[0]&&this.makeFontSmaller(),i<this.bitmap.fontSize&&(i=this.bitmap.fontSize)}r+=i+8}return this.bitmap.fontSize=i,r}canRedrawAll(){return this.hasBitmap()}checkAll(){this.updateCheckAllEvents(),this.checkSize()}checkSize(){}clear(){return this.clearRect()}clearEvents(t){this._eventsManager.clearEvents(t)}clearFilters(){this.filters=null}clearLine(t){return this.clearRect(this.getLineRect(t))}clearOptions(){this._optionsManager.clear()}clearRect(t,e,i,s){if(!this.hasBitmap())return!1;let n=t;return t instanceof Object&&(n=t.x,e=t.y,i=t.width,s=t.height),DKTools.Utils.isString(e)&&(e=this.getLineHeight()*parseFloat(e)),DKTools.Utils.isString(s)&&(e=this.getLineHeight()*parseFloat(s)),n=n||0,e=e||0,i=i||this.standardDrawingWidth(),s=s||this.standardDrawingHeight(),this.bitmap.clearRect(n,e,i,s),!0}clone(t={}){t=t||{};const e=new this.constructor(this);return t.cloneTexts&&_.forEach(this._texts,t=>{e.addText(t.text,{...t.options})}),t.cloneOptions&&e.enableOptions(this._optionsManager.options),t.blockStart||e.start(),t.activate&&e.activate(),e}convertEscapeCharacters(t){try{return Window_Base.prototype.convertEscapeCharacters.call(this,t)}catch(e){return t=(t=(t=(t=(t=(t=(t=t.replace(/\\/g,"")).replace(/\x1b\x1b/g,"\\")).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bN\[(\d+)\]/gi,function(){return this.actorName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bP\[(\d+)\]/gi,function(){return this.partyMemberName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bG/gi,TextManager.currencyUnit)}}createAll(){this.updateCreateAllEvents()}deactivate(){this.setActive(!1)&&this.updateDeactivateEvents()}destroy(t={}){this._clearAll(),this.clearEvents(),this.hide()}disableOption(t){this._optionsManager.disableOption(t)}drawAll(){}drawArrow(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const i=ImageManager.loadSystem(this.standardWindowskin()),s=DKTools.Sprite.Arrow.getRect(t);return this.drawBitmap(i,{...e,source:s})}drawBitmap(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const i=DKTools.Utils.Bitmap.load(t);if(!i||e.sync&&!i.isReady())return!1;let s=!0;return i.addLoadListener(()=>{const t=DKTools.Utils.isFunction,n=DKTools.Utils.isString,r=this.getLineHeight(),{paintOpacity:o,resetPaintOpacity:a}=e;let{source:l,destination:h}=e,u={};t(e.callback)&&(u=e.callback(i,this)),l=l||u.source||{},h=h||u.destination||{},t(l)&&(l=l(i,this)),t(h)&&(h=h(i,this));const c=_.defaultTo(l.x,0),p=_.defaultTo(l.width,i.width);let d=_.defaultTo(l.y,0),g=_.defaultTo(l.height,i.height);const f=_.defaultTo(h.x,0),m=_.defaultTo(h.width,p);let T=_.defaultTo(h.y,0),y=_.defaultTo(h.height,g);0!==p&&0!==g&&0!==m&&0!==y?(n(d)&&(d=r*parseFloat(d)),n(g)&&(g=r*parseFloat(g)),n(T)&&(T=r*parseFloat(T)),n(y)&&(y=r*parseFloat(y)),Number.isFinite(o)&&this.changePaintOpacity(o),this.bitmap.blt(i,c,d,p,g,f,T,m,y),a&&this.resetPaintOpacity()):s=!1}),s}async drawBitmapAsync(t,e={}){if(!t)return!1;const i=await DKTools.Utils.Bitmap.loadAsync(t);return this.drawBitmap(i,e)}drawCharacter(t,e,i={}){if(!this.hasBitmap()||null==t||null==e)return!1;i=i||{};const s=ImageManager.loadCharacter(t),n=ImageManager.isBigCharacter(t),r=s.width/(n?3:12),o=s.height/(n?4:8),a=(e%4*3+1)*r,l=4*Math.floor(e/4)*o,h=new Rectangle(a,l,r,o),u=i.pos;let{x:c,y:p}=i;return u instanceof Object&&(c=u.x,p=u.y),c=c||0,p=p||0,this.drawBitmap(s,{...i,source:h,destination:{x:c,y:p}})}drawCircle(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,radius:i,color:s,paintOpacity:n,resetPaintOpacity:r}=t;let{x:o,y:a}=t;return 0!==i&&(e instanceof Object&&(o=e.x,a=e.y),DKTools.Utils.isString(a)&&(a=this.getLineHeight()*parseFloat(a)),Number.isFinite(n)&&this.changePaintOpacity(n),this.bitmap.drawCircle(o||0,a||0,i||1,s||"white"),r&&this.resetPaintOpacity(),!0)}drawFace(t,e,i={}){if(!this.hasBitmap()||null==t||null==e)return!1;i=i||{};const{pos:s,rect:n}=i;let{x:r,y:o,width:a,height:l}=i;s instanceof Object&&(r=s.x,o=s.y),n instanceof Object&&(r=n.x,o=n.y,a=n.width,l=n.height),a=a||Window_Base._faceWidth,l=l||Window_Base._faceHeight;const h=ImageManager.loadFace(t),u=Window_Base._faceWidth,c=Window_Base._faceHeight,p=Math.min(a,u),d=Math.min(l,c),g=e%4*u+(u-p)/2,f=Math.floor(e/4)*c+(c-d)/2,_=new Rectangle(g,f,p,d);return r=Math.floor((r||0)+Math.max(a-u,0)/2),o=Math.floor((o||0)+Math.max(l-c,0)/2),this.drawBitmap(h,{...i,source:_,destination:{x:r,y:o}})}drawGauge(t={}){if(!this.hasBitmap())return!1;const{pos:e,rect:i,reversed:s,gradient:n,paintOpacity:r,resetPaintOpacity:o}=t;let{x:a,y:l,width:h,height:u,type:c,rate:p,backgroundColor:d,color:g,color1:f,color2:m}=t;if(e instanceof Object&&(a=e.x,l=e.y),i instanceof Object&&(a=i.x,l=i.y,h=i.width,u=i.height),DKTools.Utils.isString(l)&&(l=this.getLineHeight()*parseFloat(l)),DKTools.Utils.isString(u)&&(u=this.getLineHeight()*parseFloat(u)),0===h||0===u)return!1;a=a||0,l=l||0,h=h||this.standardDrawingWidth(),u=u||this.standardDrawingHeight(),d=_.defaultTo(d,"black"),g=_.defaultTo(g,"white"),f=_.defaultTo(f,g),m=_.defaultTo(m,g),c=_.defaultTo(c,"horizontal"),p=_.defaultTo(p,1);const T={x:a,y:l,width:h,height:u};if("horizontal"===c)T.width*=p,s&&(T.x+=h-T.width);else{if("vertical"!==c)return!1;T.height*=p,s&&(T.y+=u-T.height)}return Number.isFinite(r)&&this.changePaintOpacity(r),this.fillRect({x:a,y:l,width:h,height:u,color:d}),this.gradientFillRect({rect:T,color1:f,color2:m,vertical:"vertical"===n}),o&&this.resetPaintOpacity(),!0}drawIcon(t,e={}){if(!this.hasBitmap()||null==t)return!1;const i=ImageManager.loadSystem("IconSet"),s=Window_Base._iconWidth,n=Window_Base._iconHeight,r=t%16*s,o=Math.floor(t/16)*n,a=new Rectangle(r,o,s,n),l=e.pos;let{x:h,y:u}=e;return l instanceof Object&&(h=l.x,u=l.y),this.drawBitmap(i,{...e,source:a,destination:{x:h,y:u}})}drawItemName(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const i=Window_Base._iconWidth+4,{pos:s,iconPos:n,paintOpacity:r,resetPaintOpacity:o}=e;let{x:a,y:l,iconX:h,iconY:u}=e;return s instanceof Object&&(a=s.x,l=s.y),n instanceof Object&&(h=n.x,u=n.y),DKTools.Utils.isString(l)&&(l=this.getLineHeight()*parseFloat(l)),a=a||0,l=l||0,h=_.defaultTo(h,a+2),u=_.defaultTo(u,l+2),Number.isFinite(r)&&this.changePaintOpacity(r),this.drawIcon(t.iconIndex,{x:h,y:u}),this.drawText(t.name,{x:a+i,y:l,width:(e.width||312)-i,height:e.height,align:"left",font:e.font,textColor:e.textColor,resetFont:e.resetFont,resetTextColor:e.resetTextColor}),o&&this.resetPaintOpacity(),!0}drawLine(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos1:e,pos2:i,color:s,lineWidth:n,paintOpacity:r,resetPaintOpacity:o}=t;let{x1:a,y1:l,x2:h,y2:u}=t;return 0!==n&&(e instanceof Object&&(a=e.x,l=e.y),i instanceof Object&&(h=i.x,u=i.y),DKTools.Utils.isString(l)&&(l=this.getLineHeight()*parseFloat(l)),DKTools.Utils.isString(u)&&(u=this.getLineHeight()*parseFloat(u)),Number.isFinite(r)&&this.changePaintOpacity(r),DKTools.Utils.Bitmap.drawLine(this.bitmap,a||0,l||0,h||0,u||0,s,n),o&&this.resetPaintOpacity(),!0)}drawPolygon(t){if(!this.hasBitmap())return!1;t=t||{};const{points:e,paintOpacity:i,resetPaintOpacity:s}=t;if(!Array.isArray(e)||0===e.length)return!1;Number.isFinite(i)&&this.changePaintOpacity(i);for(let i=0;i<e.length-1;i++){const s=e[i],n=e[i+1];this.drawLine({...t,pos1:s,pos2:n})}return s&&this.resetPaintOpacity(),!0}drawTextEx(t,e={}){if(!this.hasBitmap()||""===t||null==t)return 0;t=String(t),(e=e||{}).wrap instanceof Object&&(t=this.textWrap(t,e.wrap));const i=e.pos;let{x:s,y:n,index:r,left:o}=e;i instanceof Object&&(s=i.x,n=i.y),DKTools.Utils.isString(n)&&(n=this.getLineHeight()*parseFloat(n));const a={x:s=_.defaultTo(s,0),y:n=_.defaultTo(n,0),index:r=_.defaultTo(r,0),left:o=_.defaultTo(o,s)};for(a.text=this.convertEscapeCharacters(t),a.height=this.calcTextHeight(a,!1);a.index<a.text.length;)this.processCharacter(a);return a.width||a.x-s}drawWindowskinBack(t={}){if(!this.hasBitmap())return!1;t=t||{};const e=ImageManager.loadSystem(this.standardWindowskin());if(!e)return!1;const i=96,{pos:s,rect:n}=t;let{x:r,y:o,width:a,height:l,tone:h}=t;if(s instanceof Object&&(r=s.x,o=s.y),n instanceof Object&&(r=n.x,o=n.y,a=n.width,l=n.height),0===a||0===l)return!1;try{h=h||$gameSystem.windowTone()}catch(t){}r=r||0,o=o||0,a=a||this.standardDrawingWidth(),l=l||this.standardDrawingHeight(),h=h||[0,0,0];const u=new Bitmap(a,l);u.blt(e,0,0,i,i,0,0,a,l);for(let t=0;t<l;t+=i)for(let s=0;s<a;s+=i)u.blt(e,0,i,i,i,s,t,i,i);return u.adjustTone(...h),this.drawBitmap(u,{...t,source:{width:a,height:l},destination:{x:r,y:o}})}enableOption(t){this._optionsManager.enableOption(t)}enableOptions(t){this._optionsManager.enableOptions.apply(this._optionsManager,arguments)}fillAll(t){return this.fillRect({color:t})}fillArc(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,radius:i,color:s,lineWidth:n,anticlockwise:r,paintOpacity:o,resetPaintOpacity:a}=t;let{x:l,y:h,startAngle:u,endAngle:c}=t;return(!Number.isFinite(u)||!Number.isFinite(c)||u!==c)&&(e instanceof Object&&(l=e.x,h=e.y),DKTools.Utils.isString(h)&&(h=this.getLineHeight()*parseFloat(h)),l=l||0,h=h||0,u=u||0,c=_.defaultTo(c,2*Math.PI),Number.isFinite(o)&&this.changePaintOpacity(o),DKTools.Utils.Bitmap.fillArc(this.bitmap,l,h,i,u,c,s,r),a&&this.resetPaintOpacity(),!0)}fillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,rect:i,paintOpacity:s,resetPaintOpacity:n}=t;let{x:r,y:o,width:a,height:l,color:h}=t;return e instanceof Object&&(r=e.x,o=e.y),i instanceof Object&&(r=i.x,o=i.y,a=i.width,l=i.height),DKTools.Utils.isString(o)&&(o=this.getLineHeight()*parseFloat(o)),DKTools.Utils.isString(l)&&(l=this.getLineHeight()*parseFloat(l)),0!==a&&0!==l&&(r=r||0,o=o||0,a=a||this.standardDrawingWidth(),l=l||this.standardDrawingHeight(),h=h||"white",Number.isFinite(s)&&this.changePaintOpacity(s),this.bitmap.fillRect(r,o,a,l,h),n&&this.resetPaintOpacity(),!0)}findAnimation(t,e){return this._eventsManager.findAnimation(t,e)}findEvent(t,e){return this._eventsManager.findEvent(t,e)}finishEvents(t,e=!1){this._eventsManager.finishEvents(t,e)}getAnimations(t){return this._eventsManager.getAnimations(t)}getChildById(t){return _.find(this.children,{id:t})}getEventIndex(t){return this._eventsManager.getEventIndex(t)}getEvents(t){return this._eventsManager.getEvents(t)}getEventsContainer(t){return this._eventsManager.getEventsContainer(t)}getEventsContainerByType(t){return this._eventsManager.getEventsContainerByType(t)}getFontHeight(t){let e;return(t=t||this.getLineHeight())-(t-.7*(e=this.hasBitmap()?this.bitmap.fontSize:this._font.fontSize))/2}getLineHeight(){try{return Window_Base.prototype.lineHeight.call(this)}catch(t){return 36}}getLineRect(t){const e=this.getLineHeight();return new Rectangle(0,e*parseInt(t),this.width,e)}getLines(){return this.height/this.getLineHeight()}getLocalPoint(t,e){const i=DKTools.Utils.Point.toPoint(t,e);return this.worldTransform.applyInverse(i)}getMinWidth(){return 0}getMinHeight(){return 0}getMinSize(){return{width:this.getMinWidth(),height:this.getMinHeight()}}getRealCenter(){const t=this.getRealSize();return new Point(t.width/2,t.height/2)}getCenter(){const t=this.getSize();return new Point(t.width/2,t.height/2)}getRealSize(){return{width:this.width,height:this.height}}getSize(){return{width:this.width,height:this.height}}getTextHeight(t,e={}){return this.getTextLines(t,e)*this.getLineHeight()}getTextFontHeight(t,e={}){return this.getTextLines(t,e)*this.getFontHeight()}getTextHeightEx(t,e={}){return e instanceof Object&&e.wrap instanceof Object&&(t=this.textWrap(t,e.wrap)),this.calcTextHeight({text:t,index:0},!0)}getTextLines(t,e){return e instanceof Object&&(t=this.textWrap(t,e)),t.split("\n").length}getTextWidth(t){return this.hasBitmap()&&""!==t&&null!=t?this.bitmap.measureTextWidth(String(t)):0}getTextWidthEx(t,e={}){try{return this.drawTextEx(t,{...e,x:-Number.MAX_SAFE_INTEGER,y:-Number.MAX_SAFE_INTEGER})}catch(t){return 0}}getWindowskinTextColor(t){const e=96+t%8*12+6,i=144+12*Math.floor(t/8)+6;if(this.hasWindowskin())return this.windowskin.getPixel(e,i);return ImageManager.loadSystem(this.standardWindowskin()).getPixel(e,i)}gradientFillAll(t="black",e="white",i=!1){return this.gradientFillRect({color1:t,color2:e,vertical:i})}gradientFillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{vertical:e,rect:i,paintOpacity:s,resetPaintOpacity:n}=t;let{color1:r,color2:o,x:a,y:l,width:h,height:u}=t;return i instanceof Object&&(a=i.x,l=i.y,h=i.width,u=i.height),DKTools.Utils.isString(l)&&(l=this.getLineHeight()*parseFloat(l)),DKTools.Utils.isString(u)&&(u=this.getLineHeight()*parseFloat(u)),0!==h&&0!==u&&(a=a||0,l=l||0,h=h||this.standardDrawingWidth(),u=u||this.standardDrawingHeight(),r=r||"black",o=o||"white",Number.isFinite(s)&&this.changePaintOpacity(s),this.bitmap.gradientFillRect(a,l,h,u,r,o,e),n&&this.resetPaintOpacity(),!0)}hasAnimation(t){return this._eventsManager.hasAnimation(t)}hasAnimations(t){return this._eventsManager.hasAnimations(t)}hasBitmap(){return!!this.bitmap}hasEvent(t){return this._eventsManager.hasEvent(t)}hasEvents(t){return this._eventsManager.hasEvents(t)}hasMask(){return!!this.mask}hasParent(){return!!this.parent}hasWindowskin(){return!!this.windowskin}hide(t=!1){this.setVisible(!1)&&this.updateHideEvents(),t||this.deactivate()}isActive(){let t=this;for(;t;){if(!t.visible)return!1;t=t.parent}return this.active}isBusy(){return!this.isReady()}isButton(){return this instanceof DKTools.Sprite.Button}isChild(t){return t?DKTools.Utils.Array.contains(this.children,t):this.hasParent()}isCursor(){return this instanceof DKTools.Sprite.Cursor}isDestroyed(){return this._destroyed}isEventsPaused(t){return this._eventsManager.isEventsPaused(t)}isInside(t,e){const i=this.getLocalPoint(t,e),s=new Rectangle(0,0,this.width,this.height),n=this.mask;if(n&&DKTools.Utils.isFunction(n.containsPoint)&&!n.containsPoint(i))return!1;if(!s.contains(i.x,i.y))return!1;const r=this.hitArea;return!r||r.contains(i.x,i.y)}isLayout(){return this instanceof DKTools.Layout}isMouseInside(){return this.isInside(TouchInput.mouseX,TouchInput.mouseY)}isOptionDisabled(t){return this._optionsManager.isOptionDisabled(t)}isOptionEnabled(t){return this._optionsManager.isOptionEnabled(t)}isOptionsDisabled(t){return this._optionsManager.isOptionsDisabled.apply(this._optionsManager,arguments)}isOptionsEnabled(t){return this._optionsManager.isOptionsEnabled.apply(this._optionsManager,arguments)}isOutside(t,e){return!this.isInside(t,e)}isParent(t){return!!t&&this.parent===t}isReady(){return this.hasBitmap()&&this.bitmap.isReady()}isSelectable(){return this instanceof DKTools.Sprite.Selectable||this instanceof DKTools.Window.Selectable}isSomeOptionEnabled(){return this._optionsManager.isSomeOptionEnabled()}isSomeOptionsDisabled(t){return this._optionsManager.isSomeOptionsDisabled.apply(this._optionsManager,arguments)}isSomeOptionsEnabled(t){return this._optionsManager.isSomeOptionsEnabled.apply(this._optionsManager,arguments)}isSprite(){return this instanceof DKTools.Sprite}isStarted(){return this._started}isTouchInside(){return this.isInside(TouchInput.x,TouchInput.y)}isViewport(){return this instanceof DKTools.Viewport}isVisible(){return this.visible}isVisibleAndActive(){return this.isVisible()&&this.isActive()}isWindow(){return this instanceof DKTools.Window}iterateChildren(t){this.children.forEach(t)}iterateEventsContainer(t,e){this._eventsManager.iterateEventsContainer(t,e)}makeFontBigger(){this.hasBitmap()&&this.bitmap.fontSize<=96&&(this.bitmap.fontSize+=12)}makeFontSmaller(){this.hasBitmap()&&this.bitmap.fontSize>=24&&(this.bitmap.fontSize-=12)}move(t,e){t instanceof Object&&(e=t.y),DKTools.Utils.isString(e)&&(e=this.getLineHeight()*parseFloat(e));const i=DKTools.Utils.Point.toPoint(t,e);this.position.copy(i)}obtainEscapeCode(t){return Window_Base.prototype.obtainEscapeCode.call(this,t)}obtainEscapeParam(t){return Window_Base.prototype.obtainEscapeParam.call(this,t)}partyMemberName(t){const e=t>=1?$gameParty.members()[t-1]:null;return e?e.name():""}pauseEvents(t,e){this._eventsManager.pauseEvents(t,e)}processAll(){DKTools.Utils.isMobileDevice()||(this.processMouse(),this.processWheel())}processCharacter(t){Window_Base.prototype.processCharacter.call(this,t)}processDrawIcon(t,e){this.drawIcon(t,{x:e.x+2,y:e.y+2}),e.x+=Window_Base._iconWidth+4}processEscapeCharacter(t,e){try{const i={...e};Window_Base.prototype.processEscapeCharacter.call(this,t,i),Object.assign(e,i)}catch(i){switch(t){case"C":this.changeTextColor(this.getWindowskinTextColor(this.obtainEscapeParam(e)));break;case"I":this.processDrawIcon(this.obtainEscapeParam(e),e);break;case"{":this.makeFontBigger();break;case"}":this.makeFontSmaller()}}}processMouse(){this._optionsManager.isOptionEnabled("process-mouse")&&this.isVisible()&&(this.isActive()||this._optionsManager.isOptionEnabled("process-mouse-ignore-active"))?this.isMouseInside()?(0===this._mouseEnterTime&&this.updateMouseEnterEvents(),this.updateMouseInsideEvents(),TouchInput.isMouseMoved()&&this.updateMouseMoveEvents(),this._mouseEnterTime++):(this._mouseEnterTime>0&&this.updateMouseLeaveEvents(),this.updateMouseOutsideEvents(),this._clearMouseEnterTime()):this._clearMouseEnterTime()}processNewLine(t){t.width?t.width<t.x&&(t.width=t.x):t.width=t.x,Window_Base.prototype.processNewLine.call(this,t)}processNewPage(t){Window_Base.prototype.processNewPage.call(this,t)}processNormalCharacter(t){const e=t.text[t.index++],i=this.getTextWidth(e);this.drawText(e,{align:"left",pos:t,width:2*i,height:t.height}),t.x+=i}processWheel(){if(this._wheelX=TouchInput.wheelX,this._wheelY=TouchInput.wheelY,0!==this._wheelX||0!==this._wheelY){let t;t=this.isMouseInside()?"inside":"outside",0!==this._wheelX&&this.updateWheelXEvents(t),0!==this._wheelY&&this.updateWheelYEvents(t)}}redrawAll(){}refreshAll(){this.updateAll(),this.canRedrawAll()&&this.redrawAll(),this.updateRefreshAllEvents()}removeAll(){this.updateRemoveAllEvents()}removeAllChildren(){this.updateRemoveAllChildrenEvents()}removeEvent(t){return this._eventsManager.removeEvent(t)}removeFilter(t){this.filters&&t&&(DKTools.Utils.Array.remove(this.filters,t),0===this.filters.length&&(this.filters=null))}removeFromParent(){return!!this.hasParent()&&(this.parent.removeChild(this),!0)}removeMask(){this.mask=null}removeOptionChangeListener(t,e){this._optionsManager.removeOptionChangeListener(t,e)}resumeEvents(t){this._eventsManager.resumeEvents(t)}_setupAll(){this._setupOptions(),this._setupEvents(),this._setupAnimations()}_setupAnimations(){}_setupEvents(){}_setupOptions(){}standardActive(){return!0}standardDrawingWidth(){return this.hasBitmap()?this.bitmap.width:this.isSprite()?this._bitmapWidth:this.isWindow()?this.width:null}standardDrawingHeight(){return this.hasBitmap()?this.bitmap.height:this.isSprite()?this._bitmapHeight:this.isWindow()?this.height:null}standardPivot(){return new Point(0,0)}standardRotation(){return 0}standardScale(){return new Point(1,1)}standardSkew(){return new Point(0,0)}standardTint(){return 16777215}standardVisible(){return!0}standardWindowskin(){return"Window"}setupAll(t={}){t=t||{},this.setupId(t.id),this.setupActive(t.active),this.setupVisible(t.visible),this.setupScale(t.scale),this.setupPivot(t.pivot),this.setupSkew(t.skew),this.setupRotation(t.rotation),this.setupTint(t.tint)}setupActive(t){this.active=_.defaultTo(t,this.standardActive())}setupId(t){this._id=_.defaultTo(t,null)}setupPivot(t,e){const i=DKTools.Utils.Point.tryToPoint(t,e),s=Object.assign(this.standardPivot(),i);this.pivot.copy(s)}setupRotation(t){this.rotation=_.defaultTo(t,this.standardRotation())}setupScale(t,e){const i=DKTools.Utils.Point.tryToPoint(t,e),s=Object.assign(this.standardScale(),i);this.scale.copy(s)}setupSize(t,e){}setupSkew(t,e){const i=DKTools.Utils.Point.tryToPoint(t,e),s=Object.assign(this.standardSkew(),i);this.skew.copy(s)}setupTint(t){this.tint=_.defaultTo(t,this.standardTint())}setupVisible(t){this.visible=_.defaultTo(t,this.standardVisible())}setAll(t={},e=!1,i=!1){t=t||{};let s=0;return this.setId(t.id)&&s++,this.setActive(t.active)&&s++,this.setVisible(t.visible)&&s++,this.setScale(t.scale)&&s++,this.setPivot(t.pivot)&&s++,this.setSkew(t.skew)&&s++,this.setRotation(t.rotation)&&s++,this.setTint(t.tint)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setActive(t){if(this.active===t)return!1;const e=this.active;return this.setupActive(t),this.active!==e}setId(t){if(this._id===t)return!1;const e=this._id;return this.setupId(t),this._id!==e}setPivot(t,e){const i=DKTools.Utils.Point.toPoint(t,e);if(DKTools.Utils.Point.equals(this.pivot,i))return!1;const s=DKTools.Utils.Point.clone(this.pivot);return this.setupPivot(i),!DKTools.Utils.Point.equals(this.pivot,s)}setRotation(t){if(this.rotation===t)return!1;const e=this.rotation;return this.setupRotation(t),this.rotation!==e}setScale(t,e){const i=DKTools.Utils.Point.toPoint(t,e);if(DKTools.Utils.Point.equals(this.scale,i))return!1;const s=DKTools.Utils.Point.clone(this.scale);return this.setupScale(i),!DKTools.Utils.Point.equals(this.scale,s)}setSkew(t,e){const i=DKTools.Utils.Point.toPoint(t,e);if(DKTools.Utils.Point.equals(this.skew,i))return!1;const s=DKTools.Utils.Point.clone(this.skew);return this.setupSkew(i),!DKTools.Utils.Point.equals(this.skew,s)}setTint(t){if(this.tint===t)return!1;const e=this.tint;return this.setupTint(t),this.tint!==e}setVisible(t){if(this.visible===t)return!1;const e=this.visible;return this.setupVisible(t),this.visible!==e}show(t=!1){this.setVisible(!0)&&this.updateShowEvents(),t&&this.activate()}start(t=!1){this._started=!0,this.removeAllChildren(),this.terminateAll(),this.removeAll(),this.checkAll(),this.createAll(),this.startAll(),this.addAllChildren(),this.refreshAll(),this.updateStartEvents(),t&&this.activate()}startAll(){this.updateStartAllEvents()}stopEvents(t,e=!1){this._eventsManager.stopEvents(t,e)}strokeArc(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,radius:i,color:s,lineWidth:n,anticlockwise:r,paintOpacity:o,resetPaintOpacity:a}=t;let{x:l,y:h,startAngle:u,endAngle:c}=t;return e instanceof Object&&(l=e.x,h=e.y),DKTools.Utils.isString(h)&&(h=this.getLineHeight()*parseFloat(h)),Number.isFinite(o)&&this.changePaintOpacity(o),l=l||0,h=h||0,u=u||0,c=_.defaultTo(c,2*Math.PI),DKTools.Utils.Bitmap.strokeArc(this.bitmap,l,h,i,u,c,s,n,r),a&&this.resetPaintOpacity(),!0}strokeRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,rect:i,lineWidth:s,paintOpacity:n,resetPaintOpacity:r}=t;let{x:o,y:a,width:l,height:h,color:u}=t;return e instanceof Object&&(o=e.x,a=pox.y),i instanceof Object&&(o=i.x,a=i.y,l=i.width,h=i.height),DKTools.Utils.isString(a)&&(a=this.getLineHeight()*parseFloat(a)),DKTools.Utils.isString(h)&&(h=this.getLineHeight()*parseFloat(h)),Number.isFinite(n)&&this.changePaintOpacity(n),o=o||0,a=a||0,l=l||this.standardDrawingWidth(),h=h||this.standardDrawingHeight(),u=u||"white",DKTools.Utils.Bitmap.strokeRect(this.bitmap,o,a,l,h,u,s),r&&this.resetPaintOpacity(),!0}terminate(){}terminateAll(){this.updateTerminateAllEvents()}textWrap(t,e={}){if(!this.hasBitmap()||""===t||null==t)return"";t=String(t),e=e||{};const i=t.split("\n"),s=e.maxWidth||this.bitmap.width,n=this.getTextWidth(" ");let r="",o=1;for(let t=0;t<i.length;t++){const a=i[t].split(" ");let l=s;for(let t=0;t<a.length;t++){const i=a[t],h=this.getTextWidth(i);if(e.breakWords&&h>s){const t=i.split("");for(let e=0;e<t.length;e++){const i=this.getTextWidth(t[e]);i>l?(r+="\n"+t[e],l=s-i):(0===e&&(r+=" "),r+=t[e],l-=i)}}else{const a=h+n;if(0===t||a>l){if(t>0){if(e.maxLines===o)return r;r+="\n",o++}r+=i,l=s-h}else l-=a,r+=" "+i}}t<i.length-1&&(r+="\n")}return r}update(){this.updateChildren(),this.processAll(),this.updateEvents()}updateAll(){this.updateOpacity(),this.updateUpdateAllEvents()}updateActivateEvents(){this.updateEventsContainer("activate")}updateAddAllChildrenEvents(){this.updateEventsContainer("add-all-children")}updateCheckAllEvents(){this.updateEventsContainer("check-all")}updateChild(t){t&&DKTools.Utils.isFunction(t.update)&&t.update()}updateChildren(){this.iterateChildren(this.updateChild)}updateCreateAllEvents(){this.updateEventsContainer("create-all")}updateDeactivateEvents(){this.updateEventsContainer("deactivate")}updateEvent(t){this._eventsManager.updateEvent(t)}updateEvents(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()}updateEventsContainer(t){this._eventsManager.updateEventsContainer(t)}updateHideEvents(){this.updateEventsContainer("hide")}updateInputData(){SceneManager.updateInputData()}updateMouseEnterEvents(){this.updateEventsContainer("mouse-enter")}updateMouseInsideEvents(){this.updateEventsContainer("mouse-inside")}updateMouseLeaveEvents(){this.updateEventsContainer("mouse-leave")}updateMouseMoveEvents(){this.updateEventsContainer("mouse-move")}updateMouseOutsideEvents(){this.updateEventsContainer("mouse-outside")}updateOpacity(){}updateQueueEvents(){const t=this.getEventsContainerByType("queue")[0];this.updateEvent(t)}updateReadyEvents(){this.isReady()&&this.updateEventsContainer("ready")}updateRedrawAllEvents(){this.updateEventsContainer("redraw-all")}updateRefreshAllEvents(){this.updateEventsContainer("refresh-all")}updateRemoveAllChildrenEvents(){this.updateEventsContainer("remove-all-children")}updateRemoveAllEvents(){this.updateEventsContainer("remove-all")}updateShowEvents(){this.updateEventsContainer("show")}updateStartAllEvents(){this.updateEventsContainer("start-all")}updateStartEvents(){this.isStarted()&&this.updateEventsContainer("start")}updateTerminateAllEvents(){this.updateEventsContainer("terminate-all-children")}updateUpdateAllEvents(){this.updateEventsContainer("update-all")}updateUpdateEvents(){this.updateEventsContainer("update")}updateWheelXEvents(t){this.updateEventsContainer("wheel-X-"+t)}updateWheelYEvents(t){this.updateEventsContainer("wheel-Y-"+t)}},Object.defineProperties(DKTools.Base.prototype,{id:{get:function(){return this._id},configurable:!0},mouse:{get:function(){return this.getLocalPoint(TouchInput.mouseX,TouchInput.mouseY)},configurable:!0},mouseEnterTime:{get:function(){return this._mouseEnterTime},configurable:!0},touch:{get:function(){return this.getLocalPoint(TouchInput.x,TouchInput.y)},configurable:!0},wheelX:{get:function(){return this._wheelX},configurable:!0},wheelY:{get:function(){return this._wheelY},configurable:!0},eventsManager:{get:function(){return this._eventsManager},configurable:!0},optionsManager:{get:function(){return this._optionsManager},configurable:!0}}),DKTools.Sprite.prototype=Object.create(Sprite.prototype),DKTools.Utils.mixin(DKTools.Sprite.prototype,DKTools.Base.prototype),DKTools.Sprite.prototype.constructor=DKTools.Sprite,Object.defineProperties(DKTools.Sprite.prototype,{contents:{get:function(){return this.bitmap},set:function(t){this.bitmap=t},configurable:!0},windowskin:{get:function(){return this._windowskin},configurable:!0},frame:{get:function(){return this._frame},configurable:!0},realWidth:{get:function(){return this.width},set:function(t){this.width=t},configurable:!0},realHeight:{get:function(){return this.height},set:function(t){this.height=t},configurable:!0},width:{get:function(){return this._frame.width},set:function(t){this._frame.width=t,this._refresh()},configurable:!0},height:{get:function(){return this._frame.height},set:function(t){this._frame.height=t,this._refresh()},configurable:!0},mouse:{get:function(){return this.getLocalPoint(TouchInput.mouseX,TouchInput.mouseY)},configurable:!0},align:{get:function(){return this._align},configurable:!0},font:{get:function(){return this._font},configurable:!0},textColor:{get:function(){return this._textColor},configurable:!0},paintOpacity:{get:function(){return this._paintOpacity},configurable:!0},fillColor:{get:function(){return this._fillColor},configurable:!0},opacity:{get:function(){return this._opacity},configurable:!0},graphicFolder:{get:function(){return this._graphicFolder},configurable:!0},graphicName:{get:function(){return this._graphicName},configurable:!0},texts:{get:function(){return this._texts},configurable:!0}}),DKTools.Sprite.prototype.initialize=function(t,e,i,s){Sprite.prototype.initialize.call(this),DKTools.Base.prototype.initialize.call(this,t,e,i,s),t instanceof DKTools.Sprite&&!t.isStarted()&&!t.hasFixedBitmap()?this.setupSize(t._getBitmapWidth(),t._getBitmapHeight()):t instanceof Bitmap&&this.setupBitmap(t),this.updateBitmap()},DKTools.Sprite.prototype.addText=function(t,e={},i=!1){null!=t&&""!==t&&(t=String(t),e=e||{},this._texts.push({text:t,options:e,id:e.id,type:e.type||"drawText"}),i&&this.refreshAll())},DKTools.Sprite.prototype.adjustTone=function(t){return!(!this.hasBitmap()||!t)&&(Bitmap.prototype.adjustTone.apply(this.bitmap,t),!0)},DKTools.Sprite.prototype.blur=function(){return!!this.hasBitmap()&&(this.bitmap.blur(),!0)},DKTools.Sprite.prototype._clearAll=function(){DKTools.Base.prototype._clearAll.call(this),this._clearTexts()},DKTools.Sprite.prototype._clearTexts=function(){this._texts=[]},DKTools.Sprite.prototype.canCloneFixedBitmap=function(){return!0},DKTools.Sprite.prototype.canRedrawAll=function(){return DKTools.Base.prototype.canRedrawAll.call(this)&&!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype.changeFont=function(t){this.hasBitmap()&&this.updateFont(t)},DKTools.Sprite.prototype.changePaintOpacity=function(t){this.hasBitmap()&&this.updatePaintOpacity(t)},DKTools.Sprite.prototype.changeTextColor=function(t){this.hasBitmap()&&this.updateTextColor(t)},DKTools.Sprite.prototype.checkSize=function(){const t=this.getMinWidth(),e=this.getMinHeight();let i=0;return this._bitmapWidth<t&&(this.setupWidth(t),i++),this._bitmapHeight<e&&(this.setupHeight(e),i++),i},DKTools.Sprite.prototype.createAll=function(){DKTools.Base.prototype.createAll.call(this),this.createBitmap(),this.createMask()},DKTools.Sprite.prototype.createBitmap=function(){this.hasGraphicName()?this._loadGraphic():this.hasFixedBitmap()||(this.bitmap=new Bitmap(this._getBitmapWidth(),this._getBitmapHeight()))},DKTools.Sprite.prototype.createRectMask=function(){const t=new PIXI.Graphics;t.beginFill(),t.drawRect(this.x,this.y,this.bitmap.width,this.bitmap.height),t.endFill(),this.setMask(t)},DKTools.Sprite.prototype.createCircleMask=function(){const t=new PIXI.Graphics,e=this.bitmap.width/2,i=this.x+e,s=this.y+e;t.beginFill(),t.drawCircle(i,s,e),t.endFill(),this.setMask(t)},DKTools.Sprite.prototype.createEllipseMask=function(){const t=new PIXI.Graphics,e=this.bitmap.width/2,i=this.bitmap.height/2,s=this.x+e,n=this.y+i;t.beginFill(),t.drawEllipse(s,n,e,i),t.endFill(),this.setMask(t)},DKTools.Sprite.prototype.createMask=function(t){switch(t){case"rect":this.createRectMask();break;case"circle":this.createCircleMask();break;case"ellipse":this.createEllipseMask()}},DKTools.Sprite.prototype.destroy=function(t){DKTools.Base.prototype.destroy.call(this,t),Sprite.prototype.destroy.call(this,t)},DKTools.Sprite.prototype.drawAll=function(){this.updateFill(),this.drawAllTexts(),this.updateDrawAllEvents()},DKTools.Sprite.prototype.drawAllTexts=function(){_.forEach(this._texts,t=>{this[t.type](t.text,t.options)})},DKTools.Sprite.prototype.drawText=function(t,e={}){if(!this.hasBitmap()||null==t||""===t)return!1;t=String(t),e=e||{};const{pos:i,rect:s,font:n,textColor:r,paintOpacity:o,resetFont:a,resetTextColor:l,resetPaintOpacity:h}=e;let{x:u,y:c,width:p,height:d,align:g}=e;return i instanceof Object&&(u=i.x,c=i.y),s instanceof Object&&(u=s.x,c=s.y,p=s.width,d=s.height),DKTools.Utils.isString(c)&&(c=this.getLineHeight()*parseFloat(c)),DKTools.Utils.isString(d)&&(d=this.getLineHeight()*parseFloat(d)),0!==p&&0!==d&&(u=u||0,c=c||0,p=p||this.standardDrawingWidth(),d=d||this.getLineHeight(),g=g||this.align,n&&this.changeFont(n),r&&this.changeTextColor(r),Number.isFinite(o)&&this.changePaintOpacity(o),this.bitmap.drawText(t,u,c,p,d,g),a&&this.resetFont(),l&&this.resetTextColor(),h&&this.resetPaintOpacity(),!0)},DKTools.Sprite.prototype.findText=function(t){return _.find(this._texts,{id:t})},DKTools.Sprite.prototype._getBitmapHeight=function(){return this._bitmapHeight},DKTools.Sprite.prototype._getBitmapWidth=function(){return this._bitmapWidth},DKTools.Sprite.prototype.getCurrentOpacity=function(){return 255*this.alpha},DKTools.Sprite.prototype.getLocalPoint=function(t,e){const i=DKTools.Base.prototype.getLocalPoint.call(this,t,e),s=this.anchor;return i.x+=this.width*s.x,i.y+=this.height*s.y,i},DKTools.Sprite.prototype.hasFillColor=function(){return!!this._fillColor},DKTools.Sprite.prototype.hasFixedBitmap=function(){return!!this._fixedBitmap},DKTools.Sprite.prototype.hasGraphicFolder=function(){return!!this._graphicFolder},DKTools.Sprite.prototype.hasGraphicName=function(){return!!this._graphicName},DKTools.Sprite.prototype.hasTexts=function(){return this._texts.length>0},DKTools.Sprite.prototype.isResizable=function(){return!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype._loadGraphic=function(){if(this.hasGraphicFolder()&&this.hasGraphicName()){const t=this._graphicFolder,e=this._graphicName,i=this._graphicLoadListener;this.loadBitmap(t,e,i),this.updateReadyEvents()}},DKTools.Sprite.prototype.loadAnimation=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/animations/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/animations/",t,e,i,s)},DKTools.Sprite.prototype.loadBattleback1=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/battlebacks1/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/battlebacks1/",t,e,i,s)},DKTools.Sprite.prototype.loadBattleback2=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/battlebacks2/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/battlebacks2/",t,e,i,s)},DKTools.Sprite.prototype.loadBitmap=function(t,e,i,s,n){if(t instanceof Object)return this.loadBitmap(t.folder,t.filename,t.listener,t.hue,t.smooth);const r=DKTools.Utils.Bitmap.load(t,e,null,s,n);return!!this.setBitmap(r)&&(DKTools.Utils.isFunction(i)&&this.hasBitmap()&&this.bitmap.addLoadListener(i),!0)},DKTools.Sprite.prototype.loadCharacter=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/characters/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/characters/",t,e,i,s)},DKTools.Sprite.prototype.loadEnemy=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/enemies/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/enemies/",t,e,i,s)},DKTools.Sprite.prototype.loadFace=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/faces/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/faces/",t,e,i,s)},DKTools.Sprite.prototype.loadParallax=function(t,e,i,s){return t instanceof Object?this.loadBitmap(ImageManager.PARALLAXES_FOLDER,t.filename,t.listener,t.hue,t.smooth):this.loadBitmap(ImageManager.PARALLAXES_FOLDER,t,e,i,s)},DKTools.Sprite.prototype.loadPicture=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/pictures/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/pictures/",t,e,i,s)},DKTools.Sprite.prototype.loadSvActor=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/sv_actors/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/sv_actors/",t,e,i,s)},DKTools.Sprite.prototype.loadSvEnemy=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/sv_enemies/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/sv_enemies/",t,e,i,s)},DKTools.Sprite.prototype.loadSystem=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/system/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/system/",t,e,i,s)},DKTools.Sprite.prototype.loadTileset=function(t,e,i,s){return t instanceof Object?this.loadBitmap(ImageManager.TILESETS_FOLDER,t.filename,t.listener,t.hue,t.smooth):this.loadBitmap(ImageManager.TILESETS_FOLDER,t,e,i,s)},DKTools.Sprite.prototype.loadTitle1=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/titles1/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/titles1/",t,e,i,s)},DKTools.Sprite.prototype.loadTitle2=function(t,e,i,s){return t instanceof Object?this.loadBitmap("img/titles2/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/titles2/",t,e,i,s)},DKTools.Sprite.prototype.loadWindowskin=function(t,e,i,s){return t instanceof Object?this.loadSystem(t.filename||this.standardWindowskin(),t.listener,t.hue,t.smooth):this.loadSystem(t||this.standardWindowskin(),e,i,s)},DKTools.Sprite.prototype.moveWithAnchor=function(t,e){t instanceof Object&&(e=t.y),DKTools.Utils.isString(e)&&(e=this.getLineHeight()*parseFloat(e));const i=DKTools.Utils.Point.toPoint(t,e),s=this.anchor;this.move(i.x+this.width*s.x,i.y+this.height*s.y)},DKTools.Sprite.prototype.standardAlign=function(){return"center"},DKTools.Sprite.prototype.standardAnchor=function(){return new Point(0,0)},DKTools.Sprite.prototype.standardFillColor=function(){return null},DKTools.Sprite.prototype.standardFont=function(){return{fontFace:this.standardFontFace(),fontItalic:this.standardFontItalic(),fontSize:this.standardFontSize()}},DKTools.Sprite.prototype.standardFontFace=function(){try{return Window_Base.prototype.standardFontFace.call(this)}catch(t){return"GameFont"}},DKTools.Sprite.prototype.standardFontItalic=function(){return!1},DKTools.Sprite.prototype.standardFontSize=function(){try{return Window_Base.prototype.standardFontSize.call(this)}catch(t){return 28}},DKTools.Sprite.prototype.standardFrame=function(){return new Rectangle(0,0,this.width,this.height)},DKTools.Sprite.prototype.standardGraphicFolder=function(){return"img/system/"},DKTools.Sprite.prototype.standardGraphicName=function(){return""},DKTools.Sprite.prototype.standardOpacity=function(){return 255},DKTools.Sprite.prototype.standardPaintOpacity=function(){return 255},DKTools.Sprite.prototype.standardTextColor=function(){return"#ffffff"},DKTools.Sprite.prototype.standardMask=function(){return null},DKTools.Sprite.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupBitmap(t),this.setupFrame(t.frame),this.setupAnchor(t.anchor),this.setupAlign(t.align),this.setupFont(t.font),this.setupTextColor(t.textColor),this.setupPaintOpacity(t.paintOpacity),this.setupFillColor(t.fillColor),this.setupOpacity(t.opacity),this.setupGraphicFolder(t.graphicFolder),this.setupGraphicName(t.graphicName)},DKTools.Sprite.prototype.setupAlign=function(t){this._align=t||this.standardAlign()},DKTools.Sprite.prototype.setupAnchor=function(t,e){const i=DKTools.Utils.Point.tryToPoint(t,e),s=Object.assign(this.standardAnchor(),i);this.anchor.copy(s)},DKTools.Sprite.prototype.setupBitmap=function(t){let e=null;t instanceof DKTools.Sprite&&t.hasFixedBitmap()&&t.canCloneFixedBitmap()?e=DKTools.Utils.Bitmap.clone(t.bitmap):t instanceof Object&&(e=DKTools.Utils.Bitmap.load(t.bitmap||t)),e?(this.bitmap=e,this.bitmap.addLoadListener(this.setupSize.bind(this))):this.bitmap=null,this._fixedBitmap=!!this.bitmap},DKTools.Sprite.prototype.setupFillColor=function(t){this._fillColor=null!==t?_.defaultTo(t,this.standardFillColor()):null},DKTools.Sprite.prototype.setupFont=function(t){this._font=Object.assign(this.standardFont(),t)},DKTools.Sprite.prototype.setupFrame=function(t,e,i,s){const n=DKTools.Utils.Rectangle.tryToRectangle(t,e,i,s),r=Object.assign(this.standardFrame(),n);Sprite.prototype.setFrame.call(this,r.x,r.y,r.width,r.height)},DKTools.Sprite.prototype.setupGraphicFolder=function(t){this._graphicFolder=_.defaultTo(t,this.standardGraphicFolder())},DKTools.Sprite.prototype.setupGraphicLoadListener=function(t){this._graphicLoadListener=t||null},DKTools.Sprite.prototype.setupGraphicName=function(t){this._graphicName=null!==t?_.defaultTo(t,this.standardGraphicName()):null},DKTools.Sprite.prototype.setupHeight=function(t){DKTools.Utils.isString(t)&&(t=this.getLineHeight()*parseFloat(t)),this._bitmapHeight=this._checkHeight(t)},DKTools.Sprite.prototype.setupMask=function(t){this.mask=null!==t?_.defaultTo(t,this.standardMask()):null},DKTools.Sprite.prototype.setupOpacity=function(t){this._opacity=DKTools.Utils.Number.clamp(_.defaultTo(t,this.standardOpacity(),0,255))},DKTools.Sprite.prototype.setupPaintOpacity=function(t){this._paintOpacity=_.defaultTo(t,this.standardPaintOpacity())},DKTools.Sprite.prototype.setupSize=function(t,e){if(t instanceof Object)return this.setupSize(t.width,t.height);this.setupWidth(t),this.setupHeight(e)},DKTools.Sprite.prototype.setupTextColor=function(t){this._textColor=t||this.standardTextColor()},DKTools.Sprite.prototype.setupWidth=function(t){this._bitmapWidth=this._checkWidth(t)},DKTools.Sprite.prototype.setAll=function(t={},e=!1,i=!1){t=t||{};let s=DKTools.Base.prototype.setAll.call(this,t,!0);return this.setAlign(t.align,!0)&&s++,this.setAnchor(t.anchor)&&s++,this.setFont(t.font,!0)&&s++,this.setTextColor(t.textColor,!0)&&s++,this.setPaintOpacity(t.paintOpacity,!0)&&s++,this.setFillColor(t.fillColor,!0)&&s++,this.setOpacity(t.opacity,!0)&&s++,this.setGraphicFolder(t.graphicFolder,!0)&&s++,this.setGraphicName(t.graphicName,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s},DKTools.Sprite.prototype.setAlign=function(t,e=!1){if(this._align===t)return!1;const i=this._align;return this.setupAlign(t),this._align!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setAnchor=function(t,e){const i=DKTools.Utils.Point.toPoint(t,e);if(DKTools.Utils.Point.equals(this.anchor,i))return!1;const s=DKTools.Utils.Point.clone(this.anchor);return this.setupAnchor(i),!DKTools.Utils.Point.equals(this.anchor,s)},DKTools.Sprite.prototype.setBitmap=function(t){return this.bitmap!==t&&(this.setupBitmap(t),!0)},DKTools.Sprite.prototype.setFillColor=function(t,e=!1){if(this._fillColor===t)return!1;const i=this._fillColor;return this.setupFillColor(t),this._fillColor!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setFont=function(t,e=!1){if(_.isEqual(this._font,Object.assign(this.standardFont(),t)))return!1;const i={...this._font};return this.setupFont(t),!_.isEqual(this._font,i)&&(e||this.start(),!0)},DKTools.Sprite.prototype.setFrame=function(t,e,i,s){const n=DKTools.Utils.Rectangle.toRectangle(t,e,i,s);if(DKTools.Utils.Rectangle.equals(this._frame,n))return!1;const r=DKTools.Utils.Rectangle.clone(this._frame);return this.setupFrame(n),!DKTools.Utils.Rectangle.equals(this._frame,r)},DKTools.Sprite.prototype.setGraphicFolder=function(t,e=!1){if(this._graphicFolder===t)return!1;const i=this._graphicFolder;return this.setupGraphicFolder(t),this._graphicFolder!==i&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicName=function(t,e=!1){if(this._graphicName===t)return!1;const i=this._graphicName;return this.setupGraphicName(t),this._graphicName!==i&&(e||this.start(),!0)},DKTools.Sprite.prototype.setHeight=function(t,e=!1){return this.resize(this._getBitmapWidth(),t,e)},DKTools.Sprite.prototype.setMask=function(t){return this.mask!==t&&(this.setupMask(t),!0)},DKTools.Sprite.prototype.setOpacity=function(t,e=!1){if(this._opacity===t)return!1;const i=this._opacity;return this.setupOpacity(t),this._opacity!==i&&(e||this.updateOpacity(),!0)},DKTools.Sprite.prototype.setPaintOpacity=function(t,e=!1){if(this._paintOpacity===t)return!1;const i=this._paintOpacity;return this.setupPaintOpacity(t),this._paintOpacity!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setTextColor=function(t,e=!1){if(this._textColor===t)return!1;const i=this._textColor;return this.setupTextColor(t),this._textColor!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setWidth=function(t,e=!1){return this.resize(t,this._getBitmapHeight(),e)},DKTools.Sprite.prototype.redrawAll=function(){this.clear(),this.drawAll(),this.updateRedrawAllEvents()},DKTools.Sprite.prototype.removeBitmap=function(){this.hasBitmap()&&this.setBitmap(null)},DKTools.Sprite.prototype.removeFillColor=function(){this.hasFillColor()&&this.setFillColor(null)},DKTools.Sprite.prototype.removeGraphicName=function(){this.hasGraphicName()&&this.setGraphicName(null)},DKTools.Sprite.prototype.removeText=function(t,e=!1){const i=this.findText(t);return i?(DKTools.Utils.Array.remove(this._texts,i),e||this.refreshAll(),i):null},DKTools.Sprite.prototype.reserveAnimation=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/animations/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/animations/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveBattleback1=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/battlebacks1/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/battlebacks1/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveBattleback2=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/battlebacks2/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/battlebacks2/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveBitmap=function(t,e,i,s,n,r){if(t instanceof Object)return this.reserveBitmap(t.folder,t.filename,t.listener,t.hue,t.smooth,t.reservationId);const o=DKTools.Utils.Bitmap.reserve(t,e,null,s,n,r);return!!this.setBitmap(o)&&(DKTools.Utils.isFunction(i)&&this.hasBitmap()&&this.bitmap.addLoadListener(i),!0)},DKTools.Sprite.prototype.reserveCharacter=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/characters/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/characters/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveEnemy=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/enemies/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/enemies/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveFace=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/faces/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/faces/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveParallax=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap(ImageManager.PARALLAXES_FOLDER,t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap(ImageManager.PARALLAXES_FOLDER,t,e,i,s,n)},DKTools.Sprite.prototype.reservePicture=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/pictures/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/pictures/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveSvActor=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/sv_actors/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/sv_actors/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveSvEnemy=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/sv_enemies/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/sv_enemies/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveSystem=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/system/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/system/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveTileset=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap(ImageManager.TILESETS_FOLDER,t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap(ImageManager.TILESETS_FOLDER,t,e,i,s,n)},DKTools.Sprite.prototype.reserveTitle1=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/titles1/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/titles1/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveTitle2=function(t,e,i,s,n){return t instanceof Object?this.reserveBitmap("img/titles2/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/titles2/",t,e,i,s,n)},DKTools.Sprite.prototype.reserveWindowskin=function(t,e,i,s,n){return t instanceof Object?this.reserveSystem(t.filename||this.standardWindowskin(),t.listener,t.hue,t.smooth,t.reservationId):this.reserveSystem(t||this.standardWindowskin(),e,i,s,n)},DKTools.Sprite.prototype.resetAll=function(){this.resetFont(),this.resetPaintOpacity(),this.resetTextColor()},DKTools.Sprite.prototype.resetFont=function(){this.changeFont(this.font)},DKTools.Sprite.prototype.resetPaintOpacity=function(){this.changePaintOpacity(this.paintOpacity)},DKTools.Sprite.prototype.resetTextColor=function(){this.changeTextColor(this.textColor)},DKTools.Sprite.prototype.resize=function(t,e,i=!1,s=!1){if(!this.isResizable())return!1;if(t=_.defaultTo(t,this.getMinWidth()),e=_.defaultTo(e,this.getMinHeight()),DKTools.Utils.isString(e)&&(e=this.getLineHeight()*parseFloat(e)),this._bitmapWidth===t&&this._bitmapHeight===e)return!1;const n=this._bitmapWidth,r=this._bitmapHeight;return this.setupSize(t,e),(this._bitmapWidth!==n||this._bitmapHeight!==r)&&(i||this.start(),s&&this.activate(),!0)},DKTools.Sprite.prototype.rotateHue=function(t){return!(!this.hasBitmap()||!t)&&(this.bitmap.rotateHue(t),!0)},DKTools.Sprite.prototype.updateAll=function(){DKTools.Base.prototype.updateAll.call(this),this.updateBitmap()},DKTools.Sprite.prototype.updateBitmap=function(){this.hasBitmap()&&(this.updateFont(),this.updatePaintOpacity(),this.updateTextColor())},DKTools.Sprite.prototype.updateDrawAllEvents=function(){this.updateEventsContainer("draw-all")},DKTools.Sprite.prototype.updateFill=function(){this.hasFillColor()&&this.fillAll(this.fillColor)},DKTools.Sprite.prototype.updateFont=function(t={}){t=t||{},this.bitmap.fontFace=t.fontFace||this.font.fontFace,this.bitmap.fontItalic=!!t.fontItalic,this.bitmap.fontSize=t.fontSize||this.font.fontSize},DKTools.Sprite.prototype.updatePaintOpacity=function(t){Number.isFinite(t)||(t=this.paintOpacity),this.bitmap.paintOpacity=t},DKTools.Sprite.prototype.updateTextColor=function(t){this.bitmap.textColor=t||this.textColor},DKTools.Sprite.prototype.updateOpacity=function(t){Number.isFinite(t)||(t=this.opacity),this.alpha=DKTools.Utils.Number.clamp(t,0,255)/255},DKTools.Sprite.Button=class extends DKTools.Sprite{_clearAll(){super._clearAll(),DKTools.Utils.isMobileDevice()?this._clearTouchPressTime():this._clearMousePressTime()}_clearMousePressTime(){this._mousePressTime=0}_clearTouchPressTime(){this._touchPressTime=0}isLongPressed(){return this._mousePressTime>=this._longPressInterval}isLongTouched(){return this._touchPressTime>=this._longPressInterval}isPressed(){return this._mousePressTime>0&&!this.isLongPressed()}isTouched(){return this._touchPressTime>0&&!this.isLongTouched()}_setupEvents(){super._setupEvents(),this._setupUpdateButtonStateEvent()}_setupOptions(){super._setupOptions(),DKTools.Utils.isMobileDevice()||this._setupProcessMouseOption()}_setupUpdateButtonStateEvent(){this.addEvent({type:"update",onUpdate:this.updateButtonState.bind(this)})}_setupProcessMouseOption(){this.enableOption("process-mouse")}standardActive(){return!1}standardLongPressInterval(){return 18}setupAll(t={}){t=t||{},super.setupAll(t),this.setupLongPressInterval(t.longPressInterval)}setupLongPressInterval(t){this._longPressInterval=t||this.standardLongPressInterval()}setAll(t={},e=!1,i=!1){t=t||{};let s=super.setAll(t,!0);return this.setLongPressInterval(t.longPressInterval)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setLongPressInterval(t){if(this._longPressInterval===t)return!1;const e=this._longPressInterval;return this.setupLongPressInterval(t),this._longPressInterval!==e}processAll(){super.processAll(),DKTools.Utils.isMobileDevice()?this.processTouch():this.processMousePress()}processMousePress(){if(this.isVisible()&&this.isMouseInside()&&(this.isActive()||this._optionsManager.isOptionEnabled("process-mouse-press-ignore-active")))if(TouchInput.isMousePressed()){let t;this._mousePressTime++,TouchInput.isLeftButtonPressed()?t="left":TouchInput.isMiddleButtonPressed()?t="middle":TouchInput.isRightButtonPressed()&&(t="right"),t&&(this.updateMouseDownEvents(t),this.isLongPressed()&&(this._mousePressTime===this._longPressInterval&&this.updateMouseLongPressStartedEvents(t),this.updateMouseLongPressEvents(t)))}else{let t;TouchInput.isLeftButtonReleased()?t="left":TouchInput.isMiddleButtonReleased()?t="middle":TouchInput.isRightButtonReleased()&&(t="right"),t&&(this.isLongPressed()?this.updateMouseLongPressFinishedEvents(t):this.isPressed()&&this.updateMouseClickEvents(t),this._mousePressTime>0&&this.updateMouseUpEvents(t)),this._clearMousePressTime()}else this._clearMousePressTime()}processTouch(){this.isVisible()&&this.isTouchInside()&&(this.isActive()||this._optionsManager.isOptionEnabled("process-touch-ignore-active"))?TouchInput.isScreenPressed()?(this._touchPressTime++,this.updateTouchDownEvents(),this.isLongTouched()&&(this._touchPressTime===this._longPressInterval&&this.updateLongTouchStartedEvents(),this.updateLongTouchEvents())):(this.isLongTouched()?this.updateLongTouchFinishedEvents():this.isTouched()&&this.updateTouchEvents(),this._touchPressTime>0&&this.updateTouchUpEvents(),this._clearTouchPressTime()):this._clearTouchPressTime()}updateButtonState(){DKTools.Utils.isMobileDevice()?this._touchPressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents():this._mousePressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents()}updateLongTouchEvents(){this.updateEventsContainer("long-touch")}updateLongTouchFinishedEvents(){this.updateEventsContainer("long-touch-finished")}updateLongTouchStartedEvents(){this.updateEventsContainer("long-touch-started")}updateMouseDownEvents(t){this.updateEventsContainer("mouse-down-"+t)}updateMouseUpEvents(t){this.updateEventsContainer("mouse-up-"+t)}updateMouseClickEvents(t){this.updateEventsContainer("mouse-click-"+t)}updateMouseLongPressEvents(t){this.updateEventsContainer("mouse-long-press-"+t)}updateMouseLongPressStartedEvents(t){this.updateEventsContainer(`mouse-long-press-${t}-started`)}updateMouseLongPressFinishedEvents(t){this.updateEventsContainer(`mouse-long-press-${t}-finished`)}updateStateNormalEvents(){this.updateEventsContainer("state-normal")}updateStatePressedEvents(){this.updateEventsContainer("state-pressed")}updateTouchEvents(){this.updateEventsContainer("touch")}updateTouchDownEvents(){this.updateEventsContainer("touch-down")}updateTouchUpEvents(){this.updateEventsContainer("touch-up")}},Object.defineProperties(DKTools.Sprite.Button.prototype,{longPressInterval:{get:function(){return this._longPressInterval},configurable:!0},mousePressTime:{get:function(){return this._mousePressTime},configurable:!0},touchPressTime:{get:function(){return this._touchPressTime},configurable:!0}}),DKTools.Sprite.Cursor=class extends DKTools.Sprite{_clearAll(){DKTools.Sprite.prototype._clearAll.call(this),this._clearAnimationCount()}_clearAnimationCount(){this._animationCount=0}_createAll(){DKTools.Sprite.prototype._createAll.call(this),this._createWindowskin()}_createWindowskin(){this._windowskin=ImageManager.loadSystem(this.standardWindowskin())}refreshAll(){DKTools.Sprite.prototype.refreshAll.call(this),this.refreshCursor()}refreshCursor(){const t=this._cursorRect.x,e=this._cursorRect.y,i=this._cursorRect.width,s=this._cursorRect.height,n=this.parent,r=Math.min(i,n.width-t),o=Math.min(s,n.height-e);if(this.move(t,e),i>0&&s>0){const t=this._windowskin,e=new Bitmap(r,o),n=96,a=48;e.blt(t,n+4,n+4,a-8,a-8,4,4,i-8,s-8),e.blt(t,n+4,n,a-8,4,4,0,i-8,4),e.blt(t,n+4,n+a-4,a-8,4,4,0+s-4,i-8,4),e.blt(t,n,n+4,4,a-8,0,4,4,s-8),e.blt(t,n+a-4,n+4,4,a-8,0+i-4,4,4,s-8),e.blt(t,n,n,4,4,0,0,4,4),e.blt(t,n+a-4,n,4,4,0+i-4,0,4,4),e.blt(t,n,n+a-4,4,4,0,0+s-4,4,4),e.blt(t,n+a-4,n+a-4,4,4,0+i-4,0+s-4,4,4),this.setupBitmap(e)}}standardBlinkSpeed(){return 8}standardCursorRect(){return new Rectangle(0,0,0,0)}setupAll(t={}){t=t||{},DKTools.Sprite.prototype.setupAll.call(this,t),this.setupBlinkSpeed(t.blinkSpeed),this.setupCursorRect(t.cursorRect)}setupBlinkSpeed(t){this._blinkSpeed=_.defaultTo(t,this.standardBlinkSpeed())}setupCursorRect(t,e,i,s){const n=DKTools.Utils.Rectangle.tryToRectangle(t,e,i,s);this._cursorRect=Object.assign(this.standardCursorRect(),n)}setAll(t={},e=!1,i=!1){t=t||{};let s=DKTools.Sprite.prototype.setAll.call(this,t,!0);return this.setBlinkSpeed(t.blinkSpeed)&&s++,this.setCursorRect(t.cursorRect)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setBlinkSpeed(t){if(this._blinkSpeed===t)return!1;const e=this._blinkSpeed;return this.setupBlinkSpeed(t),this._blinkSpeed!==e}setCursorRect(t,e,i,s){const n=DKTools.Utils.Rectangle.toRectangle(t,e,i,s);if(DKTools.Utils.Rectangle.equals(this._cursorRect,n))return!1;const r=DKTools.Utils.Rectangle.clone(this._cursorRect);return this.setupCursorRect(n),!DKTools.Utils.Rectangle.equals(this._cursorRect,r)&&(this.refreshCursor(),!0)}processAll(){DKTools.Sprite.prototype.processAll.call(this),this.processCursorAnimation()}processCursorAnimation(){const t=this._animationCount%40;let e=this.parent.getCurrentOpacity();this.parent.isVisibleAndActive()&&(this._animationCount++,e-=t<20?t*this._blinkSpeed:(40-t)*this._blinkSpeed),this.setOpacity(e)}},Object.defineProperties(DKTools.Sprite.Cursor.prototype,{cursorRect:{get:function(){return this._cursorRect},configurable:!0},blinkSpeed:{get:function(){return this._blinkSpeed},configurable:!0}}),DKTools.Sprite.Arrow=class extends DKTools.Sprite.Button{static getRect(t){const e=24,i=12;let s,n,r,o;switch(t){case"up":s=132,n=24,r=e,o=i;break;case"down":s=132,n=60,r=e,o=i;break;case"left":s=120,n=36,r=i,o=e;break;case"right":s=156,n=36,r=i,o=e}return DKTools.Utils.Rectangle.tryToRectangle(s,n,r,o)}refreshAll(){DKTools.Sprite.Button.prototype.refreshAll.call(this),this.refreshArrow()}refreshArrow(){this.setFrame(DKTools.Sprite.Arrow.getRect(this._arrowType))}standardVisible(){return!1}standardGraphicName(){return this.standardWindowskin()}standardAnchor(){return new Point(.5,.5)}standardArrowType(){return null}setupAll(t={}){t=t||{},DKTools.Sprite.Button.prototype.setupAll.call(this,t),this.setupArrowType(t.arrowType)}setupArrowType(t){this._arrowType=t||this.standardArrowType()}setAll(t={},e=!1,i=!1){t=t||{};let s=DKTools.Sprite.Button.prototype.setAll.call(this,t,!0);return this.setArrowType(t.arrowType,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setArrowType(t,e=!1){if(this._arrowType===t)return!1;const i=this._arrowType;return this.setupArrowType(t),this._arrowType!==i&&(e||this.refreshAll(),!0)}},Object.defineProperties(DKTools.Sprite.Arrow.prototype,{arrowType:{get:function(){return this._arrowType},configurable:!0}}),DKTools.Sprite.Selectable=class extends DKTools.Sprite.Button{_addAllChildren(){super._addAllChildren(),this._addCursorSprite()}_addCursorSprite(){this.addChild(this._cursorSprite)}activate(){super.activate(),this.reselect()}addItem(t,e=!1){const i=this.insertItem(t,this.getMaxItems()-1,!0);return e||this.refreshAll(),i}addItems(t,e=!1){const i=_.map(t,t=>this.addItem(t,!0));return e||this.refreshAll(),i}_clearAll(){super._clearAll(),this._clearItems(),this._clearHandlers(),this._clearTopRow(),this._clearTopCol()}_clearItems(){this._items=[]}_clearHandlers(){this._handlers={}}_clearTopRow(){this._topRow=0}_clearTopCol(){this._topCol=0}_createAll(){DKTools.Sprite.Button.prototype._createAll.call(this),this._createCursorSprite()}_createCursorSprite(){this._cursorSprite=new DKTools.Sprite.Cursor}_checkItem(t){return void 0===t.enabled&&(t.enabled=!0),void 0===t.ext&&(t.ext=null),t.symbol&&DKTools.Utils.isFunction(t.handler)&&this.setHandler(t.symbol,t.handler),t}callHandler(t){this.isHandled(t)&&this._handlers[t](this._index,this)}callOkHandler(){const t=this.getCurrentItemSymbol();this.isHandled(t)?this.callHandler(t):this.isHandled("ok")?this.callHandler("ok"):this.activate()}callCancelHandler(){this.callHandler("cancel")}clearItem(t){this.clearRect(this.getItemRect(t))}cursorDown(t=!1){this.hasCursorDownHandler()&&this._cursorDownHandler(t,this)}cursorUp(t=!1){this.hasCursorUpHandler()&&this._cursorUpHandler(t,this)}cursorRight(t=!1){this.hasCursorRightHandler()&&this._cursorRightHandler(t,this)}cursorLeft(t=!1){this.hasCursorLeftHandler()&&this._cursorLeftHandler(t,this)}cursorPageDown(){this.hasCursorPageDownHandler()&&this._cursorPageDownHandler(this)}cursorPageUp(){this.hasCursorPageUpHandler()&&this._cursorPageUpHandler(this)}deactivate(t=!1){super.deactivate(),t&&this.deselect()}deselect(){this.selectItem(-1)}disableItem(t,e=!1){(this.getItem(t)||{}).enabled=!1,e||this.refreshAll()}drawAll(){super.drawAll(),this.drawAllItems()}drawAllItems(){const t=this.getMaxPageItems(),e=this.getMaxItems();let i=this.getTopIndex();for(let s=0;s<t&&i<e;s++,i++)this.drawItem(i)}drawItem(t){const e=this.getItem(t)||{};DKTools.Utils.isFunction(e.drawHandler)?e.drawHandler(t,this):this.hasDrawItemHandler()&&this._itemDrawHandler(t,this)}enableItem(t,e=!1){(this.getItem(t)||{}).enabled=!0,e||this.refreshAll()}findSymbol(t){return _.findIndex(this._items,{symbol:t})}findExt(t){return _.findIndex(this._items,{ext:t})}getItemName(t){const e=this.getItem(t)||{};return DKTools.Utils.isFunction(e.name)?e.name(t,this):e.name}getCurrentItemName(){return this.getItemName(this._index)}getLastItemName(){return this.getItemName(this._lastIndex)}getItemRect(t){const e=(this.getItem(t)||{}).rect||this._itemRect;return DKTools.Utils.isFunction(e)?e(t,this):e}getCurrentItemRect(){return this.getItemRect(this._index)}getLastItemRect(){return this.getItemRect(this._lastIndex)}getItemRectForText(t){const e=this.getItemRect(t);return e.x+=this._textPadding,e.width-=2*this._textPadding,e}getCurrentItemRectForText(){return this.getItemRectForText(this._index)}getLastItemRectForText(){return this.getItemRectForText(this._lastIndex)}getItemWidth(){return DKTools.Utils.isFunction(this._itemWidth)?this._itemWidth(this):this._itemWidth}getItemHeight(){return DKTools.Utils.isFunction(this._itemHeight)?this._itemHeight(this):DKTools.Utils.isString(this._itemHeight)?this.getLineHeight()*parseFloat(this._itemHeight):this._itemHeight}getItem(t){return this._items[t]||null}getItemIndex(t){return _.indexOf(this._items,t)}getItemFont(t){const e=(this.getItem(t)||{}).font||this._itemFont;return DKTools.Utils.isFunction(e)?e(t,this):e}getItemTextColor(t){const e=(this.getItem(t)||{}).textColor||this._itemTextColor;return DKTools.Utils.isFunction(e)?e(t,this):e}getItemPaintOpacity(t){const e=this.getItem(t)||{};return DKTools.Utils.isFunction(e.paintOpacity)?e.paintOpacity(t,this):DKTools.Utils.isNumber(e.paintOpacity)?e.paintOpacity:DKTools.Utils.isFunction(this._itemPaintOpacity)?this._itemPaintOpacity(t,this):this._itemPaintOpacity}getItemAlign(t){const e=(this.getItem(t)||{}).align||this._itemAlign;return DKTools.Utils.isFunction(e)?e(t,this):e}getItemFullInfo(t){const e=this.getItem(t);return{...e,index:t,item:e,name:this.getItemName(t),enabled:this.isItemEnabled(t),handled:this.isItemHandled(t),selected:this.isItemSelected(t),rect:this.getItemRect(t),rectForText:this.getItemRectForText(t),font:this.getItemFont(t),textColor:this.getItemTextColor(t),paintOpacity:this.getItemPaintOpacity(t),align:this.getItemAlign(t)}}getCurrentItemFullInfo(){return this.getItemFullInfo(this._index)}getLastItemFullInfo(){return this.getItemFullInfo(this._lastIndex)}getPrevIndex(t=!1){return this._index>0?this._index-1:t?this.getMaxItems()-1:-1}getNextIndex(t=!1){return this._index<this.getMaxItems()-1?this._index+1:t?0:-1}getPrevItem(t=!1){return this.getItem(this.getPrevIndex(t))}getNextItem(t=!1){return this.getItem(this.getNextIndex(t))}getCurrentItem(){return this.getItem(this._index)}getLastItem(){return this.getItem(this._lastIndex)}getVisibleItems(){const t=this.getMaxPageItems(),e=this.getMaxItems(),i=[];let s=this.getTopIndex();for(let n=0;n<t&&s<e;n++,s++)i.push(this.getItem(s));return i}getItemSymbol(t){const e=this.getItem(t);return e?e.symbol:null}getItemExt(t){const e=this.getItem(t);return e?e.ext:null}getCurrentItemSymbol(){return this.getItemSymbol(this._index)}getLastItemSymbol(){return this.getItemSymbol(this._lastIndex)}getCurrentItemExt(){return this.getItemExt(this._index)}getLastItemExt(){return this.getItemExt(this._lastIndex)}getMaxItems(){return this._items.length}getMaxRows(){return this.isFixedHorizontal()?1:Math.max(1,Math.ceil(this.getMaxItems()/this.getMaxCols()))}getMaxCols(){return this._maxCols}getMaxTopRow(){return Math.max(0,this.getMaxRows()-this.getMaxPageRows())}getMaxTopCol(){return Math.max(0,this.getMaxItems()-this.getMaxPageCols())}getMaxPageRows(){const t=this._verticalSpacing,e=this.getItemHeight(),i=this.getMaxRows();let s=this.height,n=0;for(;n<i;n++){if(n===i-1){if(s-e<0)break}else if(s-e-t<0)break;s-=e+t}return n}getMaxPageCols(){return this.getMaxCols()}getMaxPageItems(){return this.isHorizontal()?this.getMaxPageCols():this.getMaxPageRows()*this.getMaxPageCols()}getRow(t){return Math.floor(t/this.getMaxCols())}getCurrentRow(){return this.getRow(this._index)}getItemRow(t){return this.hasItem(t)?this.getRow(t):-1}getRowItems(t){const e=[];if(DKTools.Utils.Number.inRange(t,0,this.getMaxRows())){const i=this.getMaxPageItems(),s=this.getMaxItems();let n=t*this.getMaxCols();for(let r=0;r<i&&n<s&&this.getRow(n)===t;r++,n++)e.push(this.getItem(n))}return e}getCol(t){return Math.floor(t%this.getMaxCols())}getCurrentCol(){return this.isHorizontal()?this._index:this.getCol(this._index)}getItemCol(t){return this.hasItem(t)?this.getCol(t):-1}getColItems(t){const e=[];if(DKTools.Utils.Number.inRange(t,0,this.getMaxCols())){const i=this.getMaxItems();for(let s=0;s<i;s++)this.getCol(s)===t&&e.push(this.getItem(s))}return e}getTopIndex(){return this.isHorizontal()?this.getTopCol():this.getTopRow()*this.getMaxCols()}getTopRow(){return this._topRow}getTopCol(){return this._topCol}getBottomRow(){return Math.max(0,this.getTopRow()+this.getMaxPageRows()-1)}getBottomCol(){return Math.max(0,this.getTopCol()+this.getMaxPageCols()-1)}getBottomIndex(){return Math.min(this.getTopIndex()+this.getMaxPageItems(),this.getMaxItems())-1}hasItem(t){return!!this.getItem(t)}hasItems(){return this.getMaxItems()>0}hasSymbol(t){return _.includes(this._items,{symbol:t})}hasExt(t){return _.includes(this._items,{ext:t})}hasCursorDownHandler(){return!!this._cursorDownHandler}hasCursorUpHandler(){return!!this._cursorUpHandler}hasCursorRightHandler(){return!!this._cursorRightHandler}hasCursorLeftHandler(){return!!this._cursorLeftHandler}hasCursorPageDownHandler(){return!!this._cursorPageDownHandler}hasCursorPageUpHandler(){return!!this._cursorPageUpHandler}hasDrawItemHandler(){return!!this._itemDrawHandler}hideCursor(){this._cursorSprite.hide()}hitTest(t,e){if(this.isOutside(t,e))return-1;const i=this.scale,s=this.getLocalPoint(t,e),n=this.getMaxPageItems(),r=this.getMaxItems();let o=this.getTopIndex();for(let t=0;t<n&&o<r;t++,o++){const t=this.getItemRect(o);if(t.x*=i.x,t.y*=i.y,t.width*=i.x,t.height*=i.y,t.contains(s.x,s.y))return o}return-1}insertItem(t,e,i=!1){const s=this._checkItem(t);return DKTools.Utils.Array.insert(this._items,s,e),i||this.refreshAll(),s}insertItems(t,e,i=!1){e=e||0;const s=_.map(t,(t,i)=>this.insertItem(t,e+i,!0));return i||this.refreshAll(),s}isCursorFixed(){return this._cursorFixed}isCursorAll(){return this._cursorAll}isFixedHorizontal(){return this._fixedHorizontal}isHorizontal(){return this.isFixedHorizontal()||1===this.getMaxPageRows()}isVertical(){return!this.isHorizontal()}isCursorMovable(){return this.isVisibleAndActive()&&!this.isCursorFixed()&&!this.isCursorAll()&&this.hasItems()}isOkEnabled(){return!0}isCancelEnabled(){return this.isHandled("cancel")}isOkTriggered(){return Input.isRepeated("ok")}isCancelTriggered(){return Input.isRepeated("cancel")||TouchInput.isCancelled()}isCursorVisible(){if(!this._cursorSprite.isVisible())return!1;if(this.isHorizontal()){const t=this.getCurrentCol();return t>=this.getTopCol()&&t<=this.getBottomCol()}const t=this.getCurrentRow();return t>=this.getTopRow()&&t<=this.getBottomRow()}isItemEnabled(t){const e=(this.getItem(t)||{}).enabled;return DKTools.Utils.isFunction(e)?e(t,this):e}isCurrentItemEnabled(){return this.isItemEnabled(this._index)}isItemVisible(t){return DKTools.Utils.Number.inRange(t,this.getTopIndex(),this.getBottomIndex()+1)}isItemSelected(t){return this._index===t}isHandled(t){return!!this._handlers[t]}isItemHandled(t){const e=this.getItem(t)||{};return this.isHandled(e.symbol)||DKTools.Utils.isFunction(e.okHandler)}isCurrentItemHandled(){return this.isItemHandled(this._index)}_onTouch(t=!1){const e=this._index,i=TouchInput.x,s=TouchInput.y,n=this.hitTest(i,s);n>=0&&(this._index===n?t&&this.isOkEnabled()&&this.processOk():this.isCursorMovable()&&this.selectItem(n)),this._index!==e&&this.playCursorSound()}playOkSound(){SoundManager.playOk()}playCancelSound(){SoundManager.playCancel()}playCursorSound(){SoundManager.playCursor()}playBuzzerSound(){SoundManager.playBuzzer()}processAll(){super.processAll(),this.processCursorMove(),this.processHandling()}processCursorMove(){if(!this.isCursorMovable())return;const t=this._index;Input.isRepeated("down")&&this.cursorDown(Input.isTriggered("down")),Input.isRepeated("up")&&this.cursorUp(Input.isTriggered("up")),Input.isRepeated("right")&&this.cursorRight(Input.isTriggered("right")),Input.isRepeated("left")&&this.cursorLeft(Input.isTriggered("left")),Input.isTriggered("pagedown")&&this.cursorPageDown(),Input.isTriggered("pageup")&&this.cursorPageUp(),Input.isTriggered("home")&&this.selectFirstItem(),Input.isTriggered("end")&&this.selectLastItem(),this._index!==t&&this.playCursorSound()}processHandling(){this.isVisibleAndActive()&&(this.isOkEnabled()&&this.isOkTriggered()?this.processOk():this.isCancelEnabled()&&this.isCancelTriggered()&&this.processCancel())}processMouseHover(){if(this._optionsManager.isOptionEnabled("process-mouse-hover")&&this.isCursorMovable()&&TouchInput.date>Input.date){const t=this._index,e=TouchInput.mouseX,i=TouchInput.mouseY,s=this.hitTest(e,i);s>=0&&s!==t&&this.selectItem(s,!0)}}processWheelScroll(){if(this._optionsManager.isOptionEnabled("process-wheel-scroll")&&this.isVisibleAndActive()){const t=this._wheelY,e=this._index;t>0?this.isHorizontal()?this.scrollRight():this.scrollDown():this.isHorizontal()?this.scrollLeft():this.scrollUp(),this._index!==e&&this.playCursorSound()}}processOk(){if(this.isCurrentItemEnabled()){this.playOkSound(),this.updateInputData(),this.deactivate();const t=this.getCurrentItem()||{};DKTools.Utils.isFunction(t.okHandler)?t.okHandler(this._index,this):this.callOkHandler()}else this.playBuzzerSound()}processCancel(){this.playCancelSound(),this.updateInputData(),this.deactivate();const t=this.getCurrentItem();t&&DKTools.Utils.isFunction(t.cancelHandler)?t.cancelHandler(this._index,this):this.callCancelHandler()}redrawItem(t){this.isItemVisible(t)&&(this.clearItem(t),this.drawItem(t))}redrawCurrentItem(){this.redrawItem(this._index)}removeHandler(t){delete this._handlers[t]}removeItem(t,e=!1){const i=this.getItem(t);return i?(DKTools.Utils.Array.remove(this._items,i),e||this.refreshAll(),i):null}removeItems(t,e=!1){const i=_.map(t,t=>this.removeItem(t,!0));return e||this.refreshAll(),i}replaceItem(t,e,i=!1){const s=this._checkItem(t);e=e||0;const n=this._items[e];return this._items[e]=s,i||this.refreshAll(),n}reselect(){this.selectItem(this._index)}resetScroll(){0!==this._index&&this.selectItem(0)}_setupEvents(){super._setupEvents(),DKTools.Utils.isMobileDevice()?(this._setupTouchEvent(),this._setupLongTouchEvent()):(this._setupMouseClickEvent(),this._setupMouseLongPressEvent(),this._setupMouseHoverEvents(),this._setupWheelScrollEvents())}_setupLongTouchEvent(){this.addEvent({type:"long-touch",onUpdate:this._onTouch.bind(this,!1)})}_setupMouseClickEvent(){this.addEvent({type:"mouse-click-left",onUpdate:this._onTouch.bind(this,!0)})}_setupMouseLongPressEvent(){this.addEvent({type:"mouse-long-press-left",onUpdate:this._onTouch.bind(this,!1)})}_setupMouseHoverEvents(){this.addEvent({type:"mouse-enter",onUpdate:this.processMouseHover.bind(this)}),this.addEvent({type:"mouse-move",onUpdate:this.processMouseHover.bind(this)})}_setupTouchEvent(){this.addEvent({type:"touch",onUpdate:this._onTouch.bind(this,!0)})}_setupWheelScrollEvents(){this.addEvent({type:"wheel-Y-inside",onUpdate:this.processWheelScroll.bind(this)}),this.addEvent({type:"wheel-Y-outside",onUpdate:this.processWheelScroll.bind(this)})}standardIndex(){return 0}standardMaxCols(){return 1}standardCursorFixed(){return!1}standardCursorAll(){return!1}standardFixedHorizontal(){return!1}standardHorizontalSpacing(){return 0}standardVerticalSpacing(){return 0}standardTextPadding(){return 6}standardCursorDownHandler(){return t=>{if(this.isHorizontal())return;const e=this._index,i=this.getMaxItems(),s=this.getMaxCols();(e<i-s||t&&i===this.getMaxRows()*s)&&this.selectItem((e+s)%i)}}standardCursorUpHandler(){return t=>{if(this.isHorizontal())return;const e=this._index,i=this.getMaxItems(),s=this.getMaxCols();(e>=s||t&&i===this.getMaxRows()*s)&&this.selectItem((e-s+i)%i)}}standardCursorRightHandler(){return t=>{const e=this.getMaxItems();if(!(e<2))if(this.isVertical()){const i=this._index;this.getMaxCols()>=2&&(i<e-1||t)&&this.selectItem((i+1)%e)}else this.selectNextItem(t)}}standardCursorLeftHandler(){return t=>{const e=this.getMaxItems();if(!(e<2))if(this.isVertical()){const i=this._index;this.getMaxCols()>=2&&(i>0||t)&&this.selectItem((i-1+e)%e)}else this.selectPrevItem(t)}}standardCursorPageDownHandler(){return()=>{if(this.isHorizontal()){const t=this.getTopCol(),e=this.getMaxPageCols(),i=this.getMaxItems();t+e<i&&(this.setTopCol(t+e),this.selectItem(Math.min(this._index+this.getMaxPageItems(),i-1)))}else{const t=this.getTopRow(),e=this.getMaxPageRows();t+e<this.getMaxRows()&&(this.setTopRow(t+e),this.selectItem(Math.min(this._index+this.getMaxPageItems(),this.getMaxItems()-1)))}}}standardCursorPageUpHandler(){return()=>{if(this.isHorizontal()){const t=this.getTopCol();t>0&&(this.setTopCol(t-this.getMaxPageCols()),this.selectItem(Math.max(0,this._index-this.getMaxPageItems())))}else{const t=this.getTopRow();t>0&&(this.setTopRow(t-this.getMaxPageRows()),this.selectItem(Math.max(0,this._index-this.getMaxPageItems())))}}}standardItems(){return[]}standardItemDrawHandler(){return t=>{const e=this.getItemName(t),i=this.getItemFont(t),s=this.getItemTextColor(t),n=this.getItemPaintOpacity(t),r=this.getItemAlign(t),o=this.getItemRectForText(t);this.drawText(e,{font:i,textColor:s,paintOpacity:n,align:r,rect:o,resetFont:!0,resetTextColor:!0,resetPaintOpacity:!0})}}standardItemWidth(){return()=>Math.floor((this.width+this._horizontalSpacing)/this.getMaxCols()-this._horizontalSpacing)}standardItemHeight(){return this.getLineHeight()}standardItemRect(){return t=>{const e=new Rectangle(0,0,this.getItemWidth(),this.getItemHeight()),i=this.getMaxCols();return this.isHorizontal()?(e.x=(t-this.getTopCol())*(e.width+this._horizontalSpacing),e.y=0):(e.x=t%i*(e.width+this._horizontalSpacing),e.y=(Math.floor(t/i)-this.getTopRow())*(e.height+this._verticalSpacing)),e}}standardItemFont(){return()=>this.font}standardItemTextColor(){return()=>this.textColor}standardItemPaintOpacity(){return t=>this.isItemEnabled(t)?this.standardEnabledItemPaintOpacity():this.standardDisabledItemPaintOpacity()}standardEnabledItemPaintOpacity(){return 255}standardDisabledItemPaintOpacity(){try{return Window_Base.prototype.translucentOpacity.call(this)}catch(t){return 160}}standardItemAlign(){return this.align}setupAll(t={}){t=t||{},super.setupAll(t),this.setupIndex(t.index),this.setupMaxCols(t.maxCols),this.setupFixedHorizontal(t.fixedHorizontal),this.setupCursorFixed(t.cursorFixed),this.setupCursorAll(t.cursorAll),this.setupCursorDownHandler(t.cursorDownHandler),this.setupCursorUpHandler(t.cursorUpHandler),this.setupCursorRightHandler(t.cursorRightHandler),this.setupCursorLeftHandler(t.cursorLeftHandler),this.setupCursorPageDownHandler(t.cursorPageDownHandler),this.setupCursorPageUpHandler(t.cursorPageUpHandler),this.setupSpacing(t.horizontalSpacing,t.verticalSpacing),this.setupTextPadding(t.textPadding),this.setupItems(t.items),this.setupItemDrawHandler(t.drawItemHandler),this.setupItemWidth(t.itemWidth),this.setupItemHeight(t.itemHeight),this.setupItemRect(t.itemRect),this.setupItemFont(t.itemFont),this.setupItemTextColor(t.itemTextColor),this.setupItemPaintOpacity(t.itemPaintOpacity),this.setupItemAlign(t.itemAlign)}setupIndex(t){this._lastIndex=this._index,this._index=_.defaultTo(t,this.standardIndex())}setupMaxCols(t){this._maxCols=t||this.standardMaxCols()}setupFixedHorizontal(t){this._fixedHorizontal=_.defaultTo(t,this.standardFixedHorizontal())}setupCursorFixed(t){this._cursorFixed=_.defaultTo(t,this.standardCursorFixed())}setupCursorAll(t){this._cursorAll=_.defaultTo(t,this.standardCursorAll())}setupCursorDownHandler(t){this._cursorDownHandler=t||this.standardCursorDownHandler()}setupCursorUpHandler(t){this._cursorUpHandler=t||this.standardCursorUpHandler()}setupCursorRightHandler(t){this._cursorRightHandler=t||this.standardCursorRightHandler()}setupCursorLeftHandler(t){this._cursorLeftHandler=t||this.standardCursorLeftHandler()}setupCursorPageDownHandler(t){this._cursorPageDownHandler=t||this.standardCursorPageDownHandler()}setupCursorPageUpHandler(t){this._cursorPageUpHandler=t||this.standardCursorPageUpHandler()}setupHorizontalSpacing(t){this._horizontalSpacing=_.defaultTo(t,this.standardHorizontalSpacing())}setupVerticalSpacing(t){this._verticalSpacing=_.defaultTo(t,this.standardVerticalSpacing())}setupSpacing(t,e){this.setupHorizontalSpacing(t),this.setupVerticalSpacing(e)}setupTextPadding(t){this._textPadding=_.defaultTo(t,this.standardTextPadding())}setupItems(t){this._items=_.map(t||this.standardItems(),t=>this._checkItem(t))}setupItemDrawHandler(t){this._itemDrawHandler=t||this.standardItemDrawHandler()}setupItemWidth(t){this._itemWidth=t||this.standardItemWidth()}setupItemHeight(t){this._itemHeight=t||this.standardItemHeight()}setupItemRect(t){this._itemRect=t||this.standardItemRect()}setupItemFont(t){this._itemFont=t||this.standardItemFont()}setupItemTextColor(t){this._itemTextColor=t||this.standardItemTextColor()}setupItemPaintOpacity(t){this._itemPaintOpacity=t||this.standardItemPaintOpacity()}setupItemAlign(t){this._itemAlign=t||this.standardItemAlign()}setAll(t={},e=!1,i=!1){t=t||{};let s=super.setAll(t,!0);return this.setIndex(t.index,!0)&&s++,this.setMaxCols(t.maxCols,!0)&&s++,this.setFixedHorizontal(t.fixedHorizontal,!0)&&s++,this.setCursorFixed(t.cursorFixed,!0)&&s++,this.setCursorAll(t.cursorAll,!0)&&s++,this.setCursorDownHandler(t.cursorDownHandler,!0)&&s++,this.setCursorUpHandler(t.cursorUpHandler,!0)&&s++,this.setCursorRightHandler(t.cursorRightHandler,!0)&&s++,this.setCursorLeftHandler(t.cursorLeftHandler,!0)&&s++,this.setCursorPageDownHandler(t.cursorPageDownHandler,!0)&&s++,this.setCursorPageUpHandler(t.cursorPageUpHandler,!0)&&s++,s+=this.setSpacing(t.horizontalSpacing,t.verticalSpacing,!0),this.setTextPadding(t.textPadding,!0)&&s++,this.setItems(t.items,!0)&&s++,this.setItemDrawHandler(t.drawItemHandler,!0)&&s++,this.setItemWidth(t.itemWidth,!0)&&s++,this.setItemHeight(t.itemHeight,!0)&&s++,this.setItemRect(t.itemRect,!0)&&s++,this.setItemFont(t.itemFont,!0)&&s++,this.setItemTextColor(t.itemTextColor,!0)&&s++,this.setItemPaintOpacity(t.itemPaintOpacity,!0)&&s++,this.setItemAlign(t.itemAlign,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setIndex(t,e=!1){return this._index!==t&&(this.setupIndex(t),this._index!==this._lastIndex&&(e||this.refreshAll(),!0))}setMaxCols(t,e=!1){if(this._maxCols===t)return!1;const i=this._maxCols;return this.setupMaxCols(t),this._maxCols!==i&&(e||this.refreshAll(),!0)}setFixedHorizontal(t,e=!1){if(this._fixedHorizontal===t)return!1;const i=this._fixedHorizontal;return this.setupFixedHorizontal(t),this._fixedHorizontal!==i&&(e||this.refreshAll(),!0)}setCursorFixed(t,e=!1){if(this._cursorFixed===t)return!1;const i=this._cursorFixed;return this.setupCursorFixed(t),this._cursorFixed!==i&&(e||this.refreshAll(),!0)}setCursorAll(t,e=!1){if(this._cursorAll===t)return!1;const i=this._cursorAll;return this.setupCursorAll(t),this._cursorAll!==i&&(e||this.refreshAll(),!0)}setCursorDownHandler(t,e=!1){if(this._cursorDownHandler===t)return!1;const i=this._cursorDownHandler;return this.setupCursorDownHandler(t),this._cursorDownHandler!==i&&(e||this.refreshAll(),!0)}setCursorUpHandler(t,e=!1){if(this._cursorUpHandler===t)return!1;const i=this._cursorUpHandler;return this.setupCursorUpHandler(t),this._cursorUpHandler!==i&&(e||this.refreshAll(),!0)}setCursorRightHandler(t,e=!1){if(this._cursorRightHandler===t)return!1;const i=this._cursorRightHandler;return this.setupCursorRightHandler(t),this._cursorRightHandler!==i&&(e||this.refreshAll(),!0)}setCursorLeftHandler(t,e=!1){if(this._cursorLeftHandler===t)return!1;const i=this._cursorLeftHandler;return this.setupCursorLeftHandler(t),this._cursorLeftHandler!==i&&(e||this.refreshAll(),!0)}setCursorPageDownHandler(t,e=!1){if(this._cursorPageDownHandler===t)return!1;const i=this._cursorPageDownHandler;return this.setupCursorPageDownHandler(t),this._cursorPageDownHandler!==i&&(e||this.refreshAll(),!0)}setCursorPageUpHandler(t,e=!1){if(this._cursorPageUpHandler===t)return!1;const i=this._cursorPageUpHandler;return this.setupCursorPageUpHandler(t),this._cursorPageUpHandler!==i&&(e||this.refreshAll(),!0)}setHorizontalSpacing(t,e=!1){if(this._horizontalSpacing===t)return!1;const i=this._horizontalSpacing;return this.setupHorizontalSpacing(t),this._horizontalSpacing!==i&&(e||this.refreshAll(),!0)}setVerticalSpacing(t,e=!1){if(this._verticalSpacing===t)return!1;const i=this._verticalSpacing;return this.setupVerticalSpacing(t),this._verticalSpacing!==i&&(e||this.refreshAll(),!0)}setSpacing(t,e,i=!1){let s=0;return this.setHorizontalSpacing(t,!0)&&s++,this.setVerticalSpacing(e,!0)&&s++,s>0&&!i&&this.refreshAll(),s}setTextPadding(t,e=!1){if(this._textPadding===t)return!1;const i=this._textPadding;return this.setupTextPadding(t),this._textPadding!==i&&(e||this.refreshAll(),!0)}setItems(t,e=!1){return this._items!=t&&(this.setupItems(t),e||this.refreshAll(),!0)}setItemDrawHandler(t,e=!1){if(this._itemDrawHandler===t)return!1;const i=this._itemDrawHandler;return this.setupItemDrawHandler(t),this._itemDrawHandler!==i&&(e||this.refreshAll(),!0)}setItemWidth(t,e=!1){if(this._itemWidth===t)return!1;const i=this._itemWidth;return this.setupItemWidth(t),this._itemWidth!==i&&(e||this.refreshAll(),!0)}setItemHeight(t,e=!1){if(this._itemHeight===t)return!1;const i=this._itemHeight;return this.setupItemHeight(t),this._itemHeight!==i&&(e||this.refreshAll(),!0)}setItemFont(t,e=!1){if(this._itemFont===t)return!1;const i=this._itemFont;return this.setupItemFont(t),this._itemFont!==i&&(e||this.refreshAll(),!0)}setItemTextColor(t,e=!1){if(this._itemTextColor===t)return!1;const i=this._itemTextColor;return this.setupItemTextColor(t),this._itemTextColor!==i&&(e||this.refreshAll(),!0)}setItemPaintOpacity(t,e=!1){if(this._itemPaintOpacity===t)return!1;const i=this._itemPaintOpacity;return this.setupItemPaintOpacity(t),this._itemPaintOpacity!==i&&(e||this.refreshAll(),!0)}setItemAlign(t,e=!1){if(this._itemAlign===t)return!1;const i=this._itemAlign;return this.setupItemAlign(t),this._itemAlign!==i&&(e||this.refreshAll(),!0)}setTopRow(t,e=!1){const i=DKTools.Utils.Number.clamp(t,0,this.getMaxTopRow());this._topRow!==i&&(this._topRow=i,e||this.refreshAll())}setTopCol(t,e=!1){const i=DKTools.Utils.Number.clamp(t,0,this.getMaxTopCol());this._topCol!==i&&(this._topCol=i,e||this.refreshAll())}setBottomRow(t,e=!1){this.setTopRow(t-(this.getMaxPageRows()-1),e)}setBottomCol(t,e=!1){this.setTopCol(t-(this.getMaxPageCols()-1),e)}setHandler(t,e){this._handlers[t]=e}setCursorRect(t,e,i,s){return this._cursorSprite.setCursorRect(t,e,i,s)}showCursor(){this._cursorSprite.show(!0)}selectFirstItem(t=!1){this.selectItem(0,t)}selectItem(t,e=!1){const i=this.getItem(t);this.setupIndex(t),this.refreshAll(),e&&this.playCursorSound(),i&&DKTools.Utils.isFunction(i.selectHandler)&&i.selectHandler(t,this),this.updateSelectEvents()}selectSymbol(t){const e=Math.max(0,this.findSymbol(t));this.selectItem(e)}selectExt(t){const e=Math.max(0,this.findExt(t));this.selectItem(e)}selectPrevItem(t=!1,e=!1){const i=this.getPrevIndex(t);i>=0&&this.selectItem(i,e)}selectNextItem(t=!1,e=!1){const i=this.getNextIndex(t);i>=0&&this.selectItem(i,e)}selectLastItem(t=!1){this.selectItem(this.getMaxItems()-1,t)}scrollDown(){this.getTopRow()+1<this.getMaxRows()&&this.cursorDown()}scrollUp(){this.getCurrentRow()>0&&this.cursorUp()}scrollRight(){this.getTopCol()+1<this.getMaxItems()&&this.cursorRight()}scrollLeft(){this.getCurrentCol()>0&&this.cursorLeft()}updateAll(){super.updateAll(),this.updateCursor()}updateCursor(){if(this.isHorizontal()){const t=this.getCurrentCol();t<this.getTopCol()?this.setTopCol(t):t>this.getBottomCol()&&this.setBottomCol(t)}else{const t=this.getCurrentRow();t<this.getTopRow()?this.setTopRow(t):t>this.getBottomRow()&&this.setBottomRow(t)}if(this.isCursorAll()){const t=this.getMaxRows()*this.getItemHeight();this.setCursorRect(0,0,this.width,t),this.resetScroll()}else if(this.isCursorVisible()||!this._cursorSprite.hasBitmap()){const t=this.getItemRect(this._index);this.setCursorRect(t)}else this.setCursorRect(Rectangle.emptyRectangle)}updateSelectEvents(){this.updateEventsContainer("select")}},Object.defineProperties(DKTools.Sprite.Selectable.prototype,{cursorSprite:{get:function(){return this._cursorSprite},configurable:!0},lastIndex:{get:function(){return this._lastIndex},configurable:!0},index:{get:function(){return this._index},configurable:!0},maxCols:{get:function(){return this._maxCols},configurable:!0},cursorFixed:{get:function(){return this._cursorFixed},configurable:!0},cursorAll:{get:function(){return this._cursorAll},configurable:!0},cursorDownHandler:{get:function(){return this._cursorDownHandler},configurable:!0},cursorUpHandler:{get:function(){return this._cursorUpHandler},configurable:!0},cursorRightHandler:{get:function(){return this._cursorRightHandler},configurable:!0},cursorLeftHandler:{get:function(){return this._cursorLeftHandler},configurable:!0},cursorPageDownHandler:{get:function(){return this._cursorPageDownHandler},configurable:!0},cursorPageUpHandler:{get:function(){return this._cursorPageUpHandler},configurable:!0},horizontalSpacing:{get:function(){return this._horizontalSpacing},configurable:!0},verticalSpacing:{get:function(){return this._verticalSpacing},configurable:!0},textPadding:{get:function(){return this._textPadding},configurable:!0},items:{get:function(){return this._items},configurable:!0},itemDrawHandler:{get:function(){return this._itemDrawHandler},configurable:!0},itemWidth:{get:function(){return this._itemWidth},configurable:!0},itemHeight:{get:function(){return this._itemHeight},configurable:!0},itemFont:{get:function(){return this._itemFont},configurable:!0},itemTextColor:{get:function(){return this._itemTextColor},configurable:!0},itemPaintOpacity:{get:function(){return this._itemPaintOpacity},configurable:!0},itemAlign:{get:function(){return this._itemAlign},configurable:!0}}),DKTools.Sprite.ProgressBar=class extends DKTools.Sprite{addValue(t){t&&this.setValue(this._value+t)}aimateFull(t){return this.animateValue(this._maxValue,t)}animateEmpty(t){return this.animateValue(this._minValue,t)}animateValue(t,e){return this.addEvent({type:"update",repeatTime:e,repeats:0,onUpdate:this._updateAnimateValue.bind(this,DKTools.Utils.Number.clamp(t,this._minValue,this._maxValue))})}canCloneFixedBitmap(){return!1}checkAll(){super.checkAll(),this.checkValue()}checkValue(){this._value<this._minValue&&(this._value=this._minValue),this._value>this._maxValue&&(this._value=this._maxValue)}_drawProgressGraphic(){this.hasDrawGraphicHandler()&&this._drawGraphicHandler(this)}_drawProgressText(){this.hasDrawTextHandler()&&this._drawTextHandler(this)}drawAll(){DKTools.Sprite.prototype.drawAll.call(this),this.drawProgress()}drawProgress(){this._drawProgressGraphic(),this._drawProgressText()}_getElapsed(){return Math.abs(this._value-this._minValue)}getElapsedSteps(){return this._getElapsed()/this._valueStep}getNextValue(){return Math.min(this._value+this._valueStep,this._maxValue)}getPercents(){return DKTools.Utils.Number.clamp(Math.abs(Math.ceil(100*this._getElapsed()/this.getRange())),0,100)}getPrevValue(){return Math.max(this._minValue,this._value-this._valueStep)}getRange(){return this._maxValue-this._minValue}getRemainingSteps(){return this.getSteps()-this.getElapsedSteps()}getSteps(){return this.getRange()/this._valueStep}hasDrawGraphicHandler(){return!!this._drawGraphicHandler}hasDrawTextHandler(){return!!this._drawTextHandler}isEmpty(){return this._value===this._minValue}isFull(){return this._value===this._maxValue}isHorizontal(){return this.width>this.height}isVertical(){return!this.isHorizontal()}makeEmpty(){this.setValue(this._minValue)}makeFull(){this.setValue(this._maxValue)}nextValue(){return this.setValue(this.getNextValue())}prevValue(){return this.setValue(this.getPrevValue())}setAll(t={},e=!1,i=!1){t=t||{};let s=DKTools.Sprite.prototype.setAll.call(this,t,!0);return this.setValueStep(t.valueStep,!0)&&s++,this.setMaxValue(t.maxValue,!0)&&s++,this.setMinValue(t.minValue,!0)&&s++,this.setValue(t.value,!0)&&s++,this.setBackgroundColor(t.backgroundColor,!0)&&s++,this.setProgressColor(t.progressColor,!0)&&s++,this.setDrawGraphicHandler(t.drawGraphicHandler,!0)&&s++,this.setDrawTextHandler(t.drawTextHandler,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setBackgroundColor(t,e=!1){if(this._backgroundColor===t)return!1;const i=this._backgroundColor;return this.setupBackgroundColor(t),this._backgroundColor!==i&&(e||this.refreshAll(),!0)}setDrawGraphicHandler(t,e=!1){return this._drawGraphicHandler!==t&&(this.setupDrawGraphicHandler(t),e||this.refreshAll(),!0)}setDrawTextHandler(t,e=!1){return this._drawTextHandler!==t&&(this.setupDrawTextHandler(t),e||this.refreshAll(),!0)}setMaxValue(t,e=!1){if(this._maxValue===t)return!1;const i=this._maxValue;return this.setupMaxValue(t),this._maxValue!==i&&(e||this.refreshAll(),!0)}setMinValue(t,e=!1){if(this._minValue===t)return!1;const i=this._minValue;return this.setupMinValue(t),this._minValue!==i&&(e||this.refreshAll(),!0)}setProgressColor(t,e=!1){if(this._progressColor===t)return!1;const i=this._progressColor;return this.setupProgressColor(t),this._progressColor!==i&&(e||this.refreshAll(),!0)}setValue(t,e=!1){if(this._value===t)return!1;const i=this._value;return this.setupValue(t),this._value!==i&&(e||this.refreshAll(),this.updateValueEvents(),!0)}setValueStep(t,e=!1){if(this._valueStep===t)return!1;const i=this._valueStep;return this.setupValueStep(t),this._valueStep!==i&&(e||this.refreshAll(),!0)}setupAll(t={}){t=t||{},DKTools.Sprite.prototype.setupAll.call(this,t),this.setupValueStep(t.valueStep),this.setupMaxValue(t.maxValue),this.setupMinValue(t.minValue),this.setupValue(t.value),this.setupBackgroundColor(t.progressColor),this.setupProgressColor(t.progressColor),this.setupDrawGraphicHandler(t.drawGraphicHandler),this.setupDrawTextHandler(t.drawTextHandler)}setupBackgroundColor(t){this._backgroundColor=t||this.standardBackgroundColor()}setupDrawGraphicHandler(t){this._drawGraphicHandler=t||this.standardDrawGraphicHandler()}setupDrawTextHandler(t){this._drawTextHandler=t||this.standardDrawTextHandler()}setupMaxValue(t){this._maxValue=_.defaultTo(t,this.standardMaxValue())}setupMinValue(t){this._minValue=_.defaultTo(t,this.standardMinValue())}setupProgressColor(t){this._progressColor=t||this.standardProgressColor()}setupValue(t){const e=this._minValue,i=this._maxValue,s=DKTools.Utils.Number.clamp(t,e,i);this._value=_.defaultTo(s,this.standardValue())}setupValueStep(t){this._valueStep=t||this.standardValueStep()}standardActive(){return!1}standardBackgroundColor(){return"grey"}standardDrawGraphicHandler(){return null}standardDrawTextHandler(){return null}standardMaxValue(){return 100}standardMinValue(){return 0}standardProgressColor(){return"#33ccff"}standardValue(){return 0}standardValueStep(){return 1}subValue(t){this.addValue(-t)}_updateAnimateValue(t,e){const i=e.remainingTime,s=(this._value*(i-1)+t)/i;this.setValue(s)}updateEmptyEvents(){this.isEmpty()&&this.updateEventsContainer("empty")}updateEvents(){DKTools.Sprite.prototype.updateEvents.call(this),this.updateEmptyEvents(),this.updateFullEvents()}updateFullEvents(){this.isFull()&&this.updateEventsContainer("full")}updateValueEvents(){this.updateEventsContainer("value")}},Object.defineProperties(DKTools.Sprite.ProgressBar.prototype,{valueStep:{get:function(){return this._valueStep},configurable:!0},maxValue:{get:function(){return this._maxValue},configurable:!0},minValue:{get:function(){return this._minValue},configurable:!0},value:{get:function(){return this._value},configurable:!0},backgroundColor:{get:function(){return this._backgroundColor},configurable:!0},progressColor:{get:function(){return this._progressColor},configurable:!0},drawGraphicHandler:{get:function(){return this._drawGraphicHandler},configurable:!0},drawTextHandler:{get:function(){return this._drawTextHandler},configurable:!0}}),DKTools.Sprite.ProgressBar.Rectangle=class extends DKTools.Sprite.ProgressBar{standardDrawGraphicHandler(){return()=>{let t=this.standardVerticalDrawGraphicHandler();this.isHorizontal()&&(t=this.standardHorizontalDrawGraphicHandler()),DKTools.Utils.isFunction(t)&&t(this)}}standardDrawTextHandler(){return()=>{const t=`${this.getPercents()}%`;this.drawText(t,{height:this.height})}}standardHorizontalDrawGraphicHandler(){return()=>{this.drawGauge({backgroundColor:this._backgroundColor,color:this._progressColor,rate:this._value/this._maxValue})}}standardVerticalDrawGraphicHandler(){return()=>{this.drawGauge({backgroundColor:this._backgroundColor,color:this._progressColor,rate:this._value/this._maxValue,type:"vertical",reversed:!0})}}},DKTools.Sprite.ProgressBar.Circle=class extends DKTools.Sprite.ProgressBar{setAll(t={},e=!1,i=!1){t=t||{};let s=DKTools.Sprite.ProgressBar.prototype.setAll.call(this,t,!0);return this.setLineWidth(t.lineWidth,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setLineWidth(t,e=!1){if(this._lineWidth===t)return!1;const i=this._lineWidth;return this.setupLineWidth(t),this._lineWidth!==i&&(e||this.refreshAll(),!0)}setupAll(t={}){t=t||{},DKTools.Sprite.ProgressBar.prototype.setupAll.call(this,t),this.setupLineWidth(t.lineWidth)}setupLineWidth(t){this._lineWidth=t||this.standardLineWidth()}standardDrawGraphicHandler(){return()=>{const t=this._lineWidth,e=(this.width-t)/2,i=e+t/2,s=i;this.strokeArc({x:i,y:s,radius:e,color:this._backgroundColor,lineWidth:t}),this.strokeArc({x:i,y:s,radius:e,startAngle:-Math.PI/2,endAngle:-Math.PI/2+2*Math.PI*this._value/this._maxValue,color:this._progressColor,lineWidth:t})}}standardDrawTextHandler(){return()=>{const t=`${this.getPercents()}%`;this.drawText(t,{height:this.height})}}standardLineWidth(){return 10}},Object.defineProperties(DKTools.Sprite.ProgressBar.Circle.prototype,{lineWidth:{get:function(){return this._lineWidth},configurable:!0}}),DKTools.Sprite.ProgressBar.SemiCircle=class extends DKTools.Sprite.ProgressBar.Circle{standardDrawGraphicHandler(){return()=>{const t=this._lineWidth,e=(this.width-t)/2,i=e+t/2,s=this.height;this.strokeArc({x:i,y:s,radius:e,startAngle:Math.PI,color:this._backgroundColor,lineWidth:t}),this.strokeArc({x:i,y:s,radius:e,startAngle:Math.PI,endAngle:-Math.PI+Math.PI*this._value/this._maxValue,color:this._progressColor,lineWidth:t})}}},DKTools.Sprite.CheckBox=class extends DKTools.Sprite.Button{check(){this.isChecked()||(this.switch(),this.updateCheckedEvents())}isChecked(){return this._checked}_refreshCheckedGraphic(){let t=null;DKTools.Utils.isString(this._checkedGraphic)?t={folder:this._graphicFolder,filename:this._checkedGraphic}:this._checkedGraphic instanceof Object&&(t=this._checkedGraphic),t&&this.loadBitmap(t)}_refreshGraphic(){this.isChecked()?this._refreshCheckedGraphic():this._refreshUncheckedGraphic()}_refreshUncheckedGraphic(){let t=null;DKTools.Utils.isString(this._uncheckedGraphic)?t={folder:this._graphicFolder,filename:this._uncheckedGraphic}:this._uncheckedGraphic instanceof Object&&(t=this._uncheckedGraphic),t&&this.loadBitmap(t)}refreshAll(){this._refreshGraphic(),DKTools.Sprite.Button.prototype.refreshAll.call(this)}setAll(t={},e=!1,i=!1){t=t||{};let s=DKTools.Sprite.Button.prototype.setAll.call(this,t,!0);return this.setChecked(t.checked,!0)&&s++,this.setCheckedGraphic(t.checkedGraphic,!0)&&s++,this.setUncheckedGraphic(t.uncheckedGraphic,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setChecked(t,e=!1){if(this._checked===t)return!1;const i=this._checked;return this.setupChecked(t),this._checked!==i&&(e||this.refreshAll(),!0)}setCheckedGraphic(t,e=!1){const i=this._checkedGraphic;if(i==t)return!1;if(i instanceof Bitmap)this.setupCheckedGraphic(t);else{if(!(DKTools.Utils.isString(i)||i instanceof Object))return!1;{const e=i;if(this.setupCheckedGraphic(t),_.isEqual(this._checkedGraphic,e))return!1}}return e||this.refreshAll(),!0}setUncheckedGraphic(t,e=!1){const i=this._uncheckedGraphic;if(i==t)return!1;if(i instanceof Bitmap)this.setupUncheckedGraphic(t);else{if(!(DKTools.Utils.isString(i)||i instanceof Object))return!1;{const e=i;if(this.setupUncheckedGraphic(t),_.isEqual(this._uncheckedGraphic,e))return!1}}return e||this.refreshAll(),!0}setupAll(t={}){t=t||{},DKTools.Sprite.Button.prototype.setupAll.call(this,t),this.setupChecked(t.checked),this.setupCheckedGraphic(t.checkedGraphic),this.setupUncheckedGraphic(t.uncheckedGraphic)}setupChecked(t){this._checked=_.defaultTo(t,this.standardChecked())}setupCheckedGraphic(t){this._checkedGraphic=t||this.standardCheckedGraphic()}setupUncheckedGraphic(t){this._uncheckedGraphic=t||this.standardUncheckedGraphic()}standardChecked(){return!1}standardCheckedGraphic(){return null}standardUncheckedGraphic(){return null}switch(){this.setChecked(!this.isChecked())}uncheck(){this.isChecked()&&(this.switch(),this.updateUncheckedEvents())}updateCheckedEvents(){this.updateEventsContainer("checked")}updateMouseClickEvents(t){this.switch(),super.updateMouseClickEvents(t)}updateTouchEvents(){this.switch(),super.updateTouchEvents()}updateUncheckedEvents(){this.updateEventsContainer("unchecked")}},Object.defineProperties(DKTools.Sprite.CheckBox.prototype,{checked:{get:function(){return this._checked},configurable:!0},checkedGraphic:{get:function(){return this._checkedGraphic},configurable:!0},uncheckedGraphic:{get:function(){return this._uncheckedGraphic},configurable:!0}}),DKTools.Viewport=class extends DKTools.Sprite{canCloneFixedBitmap(){return!1}createAll(){DKTools.Sprite.prototype.createAll.call(this),this.createMask()}createMask(){DKTools.Sprite.prototype.createMask.call(this,this._maskShape)}setAll(t={},e=!1,i=!1){t=t||{};let s=DKTools.Sprite.prototype.setAll.call(this,t,!0);return this.setMaskShape(t.maskShape,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setMaskShape(t,e=!1){if(this._maskShape===t)return!1;const i=this._maskShape;return this.setupShape(t),this._maskShape!==i&&(e||this.start(),!0)}setupAll(t={}){t=t||{},DKTools.Sprite.prototype.setupAll.call(this,t),this.setupMaskShape(t.maskShape)}setupMaskShape(t){this._maskShape=t||this.standardMaskShape()}standardMaskShape(){return"rect"}},Object.defineProperties(DKTools.Viewport.prototype,{maskShape:{get:function(){return this._maskShape},configurable:!0}}),DKTools.Layout=class extends DKTools.Sprite{activateItems(t=!1){this.iterateItems(t=>{t.activate()},t)}addAllChildren(){DKTools.Sprite.prototype.addAllChildren.call(this),this.addAllItems()}addAllItems(){this.hasItems()&&this.addChild.apply(this,this._items)}addCol(){this.addCols(1)}addCols(t){this.setMaxCols(this.getMaxCols()+t)}addItem(t,e=!1){return t instanceof DKTools.Sprite?(this._items.push(t),e||this.start(),t):null}addItems(t,e=!1){const i=_.map(t,t=>this.addItem(t,!0));return i.length>0&&!e&&this.start(),i}alignCol(t){_.forEach(this.getItemsInCol(t),this.alignItem.bind(this))}alignItem(t){if(this.isReady()){const e=this.getItemRow(t),i=this.getItemCol(t),s=this.getRowHeight(e),n=this.getColWidth(i),r=this.getColX(i)+(n-t.width)/2,o=this.getRowY(e)+(s-t.height)/2;t.move(r,o)}else this.addOneTimeEvent({type:"ready",onSuccess:this.alignItem.bind(this,t)})}alignItems(){this.addOneTimeEvent({type:"ready",onSuccess:()=>{this.iterateItems(this.alignItem.bind(this))}})}alignRow(t){_.forEach(this.getItemsInRow(t),this.alignItem.bind(this))}_clearAll(){DKTools.Sprite.prototype._clearAll.call(this),this._clearItems()}_clearItems(){this._items=[]}canCloneFixedBitmap(){return!1}clearItems(t=!1){this.removeAllItems(),this._clearItems(),t||this.start()}deactivateItems(t=!1){this.iterateItems(t=>{t.deactivate()},t)}_getBitmapHeight(){let t=0;const e=this.getMaxRows();for(let i=1;i<=e;i++)t+=this.getRowHeight(i)+this._verticalSpacing;return t-this._verticalSpacing}_getBitmapWidth(){let t=0;const e=this.getMaxCols();for(let i=1;i<=e;i++)t+=this.getColWidth(i)+this._horizontalSpacing;return t-this._horizontalSpacing}getCell(t,e){const i=this.getMaxCols()*(t-1)+(e-1);return{item:this.getItem(i),x:this.getColX(e),y:this.getRowY(t),width:this.getColWidth(e),height:this.getRowHeight(t)}}getColWidth(t){return DKTools.Utils.isFunction(this._colWidth)?this._colWidth(t,this):this._colWidth}getColX(t){let e=0;for(let i=1;i<t;i++)e+=this.getColWidth(i)+this._horizontalSpacing;return e}getItem(t){return this.getItems()[t]}getItemCol(t){const e=this.getItemIndex(t);return e>=0?e%this.getMaxCols()+1:-1}getItemIndex(t){return _.indexOf(this.getItems(),t)}getItemRow(t){const e=this.getItemIndex(t);return e>=0?Math.floor(e/this.getMaxCols())+1:-1}getItems(){return this.isInverted()?_.reverse(_.clone(this._items)):this._items}getItemsInCol(t){const e=[],i=this.getMaxRows(),s=this.getMaxCols();if(t<1||t>s)return e;const n=t-1;for(let t=0;t<i;t++)e.push(this.getItem(n+s*t));return e}getItemsInRow(t){const e=[],i=this.getMaxCols();if(t<1||t>this.getMaxRows())return e;const s=i*(t-1);for(let t=0;t<i;t++)e.push(this.getItem(s+t));return e}getMaxCols(){return this._maxCols}getMaxItems(){return this._items.length}getMaxRows(){return Math.max(1,Math.ceil(this.getMaxItems()/this.getMaxCols()))}getRowHeight(t){return DKTools.Utils.isFunction(this._rowHeight)?this._rowHeight(t,this):this._rowHeight}getRowY(t){let e=0;for(let i=1;i<t;i++)e+=this.getRowHeight(i)+this._verticalSpacing;return e}hasItem(t){return this.getItemIndex(t)>=0}hasItems(){return!this.isEmpty()}hideItems(t=!1,e=!1){this.iterateItems(e=>{e.hide(t)},e)}insertItem(t,e,i=!1){return t instanceof DKTools.Sprite?(DKTools.Utils.Array.insert(this._items,t,e),i||this.start(),t):null}insertItems(t,e,i=!1){e=e||0;const s=_.map(t,(t,i)=>this.insertItem(t,e+i,!0));return s.length>0&&!i&&this.start(),s}invert(){this.setInverted(!this.isInverted())}isEmpty(){return 0===this.getMaxItems()}isHorizontal(){return 1===this.getMaxRows()}isInverted(){return this._inverted}isReady(){return this.isEmpty()||_.every(this._items,t=>t.isReady())}isVertical(){return 1===this.getMaxCols()}iterateItems(t,e=!1){_.forEach(this.getItems(),t),e&&this.start()}moveItem(t,e,i){const s=this.getItem(t);s&&s.move(e,i)}removeAllChildren(){DKTools.Sprite.prototype.removeAllChildren.call(this),this.removeAllItems()}removeAllItems(){this.hasItems()&&this.removeChild.apply(this,this._items)}removeCol(){this.removeCols(1)}removeCols(t){this.getMaxCols()-t>=1&&this.addCols(-t)}removeItem(t,e=!1){return Number.isFinite(t)&&(t=this.getItem(t)),this.hasItem(t)?(this.removeChild(t),DKTools.Utils.Array.remove(this._items,t),e||this.start(),t):null}removeItems(t,e=!1){const i=_.map(t,t=>this.removeItem(t,!0));return i.length>0&&!e&&this.start(),i}resizeItem(t,e,i,s=!1){Number.isFinite(t)&&(t=this.getItem(t)),this.hasItem(t)&&t.resize(e,i)&&(s||this.start())}resizeItems(t,e,i=!1){this.iterateItems(i=>{this.resizeItem(i,t,e,!0)},!i)}setAll(t,e=!1,i=!1){t=t||{};let s=DKTools.Sprite.prototype.setAll.call(this,t,!0);return this.setMaxCols(t.maxCols,!0)&&s++,s+=this.setSpacing(t.horizontalSpacing,t.verticalSpacing,!0),this.setItems(t.items,!0)&&s++,this.setRowHeight(t.rowHeight,!0)&&s++,this.setColWidth(t.colWidth,!0)&&s++,this.setInverted(t.reversed,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s}setColWidth(t,e=!1){if(this._colWidth===t)return!1;const i=this._colWidth;return this.setupColWidth(t),this._colWidth!==i&&(e||this.start(),!0)}setHorizontalSpacing(t,e=!1){if(this._horizontalSpacing===t)return!1;const i=this._horizontalSpacing;return this.setupHorizontalSpacing(t),this._horizontalSpacing!==i&&(e||this.start(),!0)}setInverted(t,e=!1){if(this._inverted===t)return!1;const i=this._inverted;return this.setupInverted(t),this._inverted!==i&&(e||this.start(),!0)}setItems(t,e=!1){return this._items!=t&&(this.removeAllItems(),this.setupItems(t),e||this.start(),!0)}setMaxCols(t,e=!1){if(this._maxCols===t)return!1;const i=this._maxCols;return this.setupMaxCols(t),this._maxCols!==i&&(e||this.start(),!0)}setRowHeight(t,e=!1){if(this._rowHeight===t)return!1;const i=this._rowHeight;return this.setupRowHeight(t),this._rowHeight!==i&&(e||this.start(),!0)}setSpacing(t,e,i=!1){let s=0;return this.setHorizontalSpacing(t,!0)&&s++,this.setVerticalSpacing(e,!0)&&s++,s>0&&!i&&this.start(),s}setVerticalSpacing(t,e=!1){if(this._verticalSpacing===t)return!1;const i=this._verticalSpacing;return this.setupVerticalSpacing(t),this._verticalSpacing!==i&&(e||this.start(),!0)}setupAll(t={}){t=t||{},DKTools.Sprite.prototype.setupAll.call(this,t),this.setupMaxCols(t.maxCols),this.setupSpacing(t.horizontalSpacing,t.verticalSpacing),this.setupItems(t.items),this.setupRowHeight(t.rowHeight),this.setupColWidth(t.colWidth),this.setupInverted(t.inverted)}setupColWidth(t){this._colWidth=t||this.standardColWidth()}setupHorizontalSpacing(t){this._horizontalSpacing=_.defaultTo(t,this.standardHorizontalSpacing())}setupInverted(t){this._inverted=_.defaultTo(t,this.standardInverted())}setupItems(t){this._items=_.clone(t||this.standardItems())}setupMaxCols(t){this._maxCols=_.defaultTo(t,this.standardMaxCols())}setupRowHeight(t){this._rowHeight=t||this.standardRowHeight()}setupSpacing(t,e){this.setupHorizontalSpacing(t),this.setupVerticalSpacing(e)}setupVerticalSpacing(t){this._verticalSpacing=_.defaultTo(t,this.standardVerticalSpacing())}showItems(t=!1,e=!1){this.iterateItems(e=>{e.show(t)},e)}standardActive(){return!1}standardColWidth(){return t=>{const e=this.getItemsInCol(t);return _.max(_.map(e,"width"))}}standardHorizontalSpacing(){return 12}standardInverted(){return!1}standardItems(){return[]}standardMaxCols(){return 1}standardRowHeight(){return t=>{const e=this.getItemsInRow(t);return _.max(_.map(e,"height"))}}standardVerticalSpacing(){return this.getLineHeight()/2}start(){this._started=!0,this.isReady()?DKTools.Sprite.prototype.start.call(this):this.addOneTimeEvent({type:"ready",onSuccess:this.start.bind(this)})}startItems(t=!1,e=!1){this.iterateItems(e=>{e.start(t)},!e)}updateAll(){DKTools.Sprite.prototype.updateAll.call(this),this.updateLayout()}updateLayout(){const t=this.getMaxItems(),e=this.getMaxRows(),i=this.getMaxCols();let s=0;for(let n=1;n<=e&&s<t;n++)for(let e=1;e<=i&&s<t;e++){const t=this.getColX(e),i=this.getRowY(n);this.moveItem(s++,t,i)}}},Object.defineProperties(DKTools.Layout.prototype,{maxCols:{get:function(){return this._maxCols},configurable:!0},items:{get:function(){return this._items},configurable:!0},rowHeight:{get:function(){return this._rowHeight},configurable:!0},colWidth:{get:function(){return this._colWidth},configurable:!0},horizontalSpacing:{get:function(){return this._horizontalSpacing},configurable:!0},verticalSpacing:{get:function(){return this._verticalSpacing},configurable:!0},inverted:{get:function(){return this._inverted},configurable:!0}}),DKTools.Window.prototype=Object.create(Window_Base.prototype),DKTools.Utils.mixin(DKTools.Window.prototype,DKTools.Base.prototype),DKTools.Window.prototype.constructor=DKTools.Window,Object.defineProperties(DKTools.Window.prototype,{realWidth:{get:function(){return this.width},set:function(t){this.width=t},configurable:!0},realHeight:{get:function(){return this.height},set:function(t){this.height=t},configurable:!0},width:{get:function(){return this._width},set:function(t){this._width=t,this._refreshAllParts()},configurable:!0},height:{get:function(){return this._height},set:function(t){this._height=t,this._refreshAllParts()},configurable:!0},origin:{get:function(){return this._origin},configurable:!0},windowOpacity:{get:function(){return 255*this._windowSpriteContainer.alpha},set:function(t){this._windowSpriteContainer.alpha=DKTools.Utils.Number.clamp(t,0,255)/255},configurable:!0},frameOpacity:{get:function(){return 255*this._windowFrameSprite.alpha},set:function(t){this._windowFrameSprite.alpha=DKTools.Utils.Number.clamp(t,0,255)/255},configurable:!0},opacity:{get:function(){return this._opacity},configurable:!0},tone:{get:function(){return this._tone},configurable:!0},contentsSprite:{get:function(){return this._windowContentsSprite},configurable:!0},frameSprite:{get:function(){return this._windowFrameSprite},configurable:!0},backSprite:{get:function(){return this._windowBackSprite},configurable:!0},bitmap:{get:function(){return this.contents},set:function(t){this.contents=t},configurable:!0},arrows:{get:function(){return this._arrows},configurable:!0}}),DKTools.Window.prototype.initialize=function(t,e,i,s){PIXI.Container.call(this),DKTools.Base.prototype.initialize.call(this,t,e,i,s)},DKTools.Window.prototype._addAllChildren=function(){DKTools.Base.prototype._addAllChildren.call(this),this._addAllParts()},DKTools.Window.prototype._addAllParts=function(){this._addSpriteContainer(),this._addPauseSignSprite(),this._addArrows()},DKTools.Window.prototype._addSpriteContainer=function(){this.hasSpriteContainer()&&(this.hasBackSprite()&&this._windowSpriteContainer.addChild(this._windowBackSprite),this.hasFrameSprite()&&this._windowSpriteContainer.addChild(this._windowFrameSprite),this.addChild(this._windowSpriteContainer))},DKTools.Window.prototype._addContentsSprite=function(){this.hasContentsSprite()&&this.addChild(this._windowContentsSprite)},DKTools.Window.prototype._addPauseSignSprite=function(){this.hasPauseSignSprite()&&this.addChild(this._windowPauseSignSprite)},DKTools.Window.prototype._addArrows=function(){_.forEach(["up","down","left","right"],t=>{const e=this.findArrow(t);e&&this.addChild(e)})},DKTools.Window.prototype.activate=function(){DKTools.Base.prototype.activate.call(this),this.hasContentsSprite()&&this._windowContentsSprite.activate()},DKTools.Window.prototype.addAllChildren=function(){DKTools.Base.prototype.addAllChildren.call(this),this.addContentsSprite()},DKTools.Window.prototype.addContentsSprite=function(){this._addContentsSprite(),this._refreshContents()},DKTools.Window.prototype._clearAll=function(){DKTools.Base.prototype._clearAll.call(this),this._clearIsWindow(),this._clearOpenness(),this._clearPadding(),this._clearMargin(),this._clearColorTone(),this._clearOrigin(),this._clearArrows()},DKTools.Window.prototype._clearIsWindow=function(){this._isWindow=!0},DKTools.Window.prototype._clearOpenness=function(){this._openness=this.standardOpenness()},DKTools.Window.prototype._clearPadding=function(){this._padding=this.standardPadding()},DKTools.Window.prototype._clearMargin=function(){this._margin=this.standardMargin()},DKTools.Window.prototype._clearColorTone=function(){this._colorTone=this.standardTone()},DKTools.Window.prototype._clearOrigin=function(){this._origin=this.standardOrigin()},DKTools.Window.prototype._clearArrows=function(){this._arrows=[]},DKTools.Window.prototype._createAll=function(){DKTools.Base.prototype._createAll.call(this),this._createAllParts(),this._createWindowskin()},DKTools.Window.prototype._createAllParts=function(){this._createSpriteContainer(),this._createBackSprite(),this._createFrameSprite(),this._createPauseSignSprite(),this._createArrows()},DKTools.Window.prototype._createSpriteContainer=function(){this._windowSpriteContainer=new PIXI.Container},DKTools.Window.prototype._createBackSprite=function(){this.needsCreateBackSprite()&&(this._windowBackSprite=new Sprite,this._windowBackSprite.opacity=this.standardBackOpacity(),this._windowBackSprite.visible=this.standardBackVisible())},DKTools.Window.prototype._createFrameSprite=function(){this.needsCreateFrameSprite()&&(this._windowFrameSprite=new Sprite,this._windowFrameSprite.visible=this.standardFrameVisible())},DKTools.Window.prototype._createPauseSignSprite=function(){this.needsCreatePauseSignSprite()&&(this._windowPauseSignSprite=new Sprite)},DKTools.Window.prototype._createArrows=function(){this.needsCreateArrowsSprites()&&(this.needsCreateUpArrowSprite()&&this.createArrow("up","up",{onUpdate:this.onUpArrowUpdate.bind(this),onMouseClick:this.onUpArrowMouseClick.bind(this),onMouseLongPress:this.onUpArrowMouseLongPress.bind(this),onStateNormal:this.standardArrowStateNormal(),onStatePressed:this.standardArrowStatePressed()}),this.needsCreateDownArrowSprite()&&this.createArrow("down","down",{onUpdate:this.onDownArrowUpdate.bind(this),onMouseClick:this.onDownArrowMouseClick.bind(this),onMouseLongPress:this.onDownArrowMouseLongPress.bind(this),onStateNormal:this.standardArrowStateNormal(),onStatePressed:this.standardArrowStatePressed()}),this.needsCreateLeftArrowSprite()&&this.createArrow("left","left",{onUpdate:this.onLeftArrowUpdate.bind(this),onMouseClick:this.onLeftArrowMouseClick.bind(this),onMouseLongPress:this.onLeftArrowMouseLongPress.bind(this),onStateNormal:this.standardArrowStateNormal(),onStatePressed:this.standardArrowStatePressed()}),this.needsCreateRightArrowSprite()&&this.createArrow("right","right",{onUpdate:this.onRightArrowUpdate.bind(this),onMouseClick:this.onRightArrowMouseClick.bind(this),onMouseLongPress:this.onRightArrowMouseLongPress.bind(this),onStateNormal:this.standardArrowStateNormal(),onStatePressed:this.standardArrowStatePressed()}))},DKTools.Window.prototype._createWindowskin=function(){this.windowskin=DKTools.Utils.Bitmap.load({folder:"img/system",filename:this.standardWindowskin()})},DKTools.Window.prototype.canRedrawAll=function(){return this.hasContentsSprite()&&DKTools.Base.prototype.canRedrawAll.call(this)},DKTools.Window.prototype.changeFont=function(t){this.hasContentsSprite()&&this._windowContentsSprite.changeFont(t)},DKTools.Window.prototype.changeTextColor=function(t){this.hasContentsSprite()&&this._windowContentsSprite.changeTextColor(t)},DKTools.Window.prototype.changePaintOpacity=function(t){this.hasContentsSprite()&&this._windowContentsSprite.changePaintOpacity(t)},DKTools.Window.prototype.checkSize=function(){const t=this.getMinWidth(),e=this.getMinHeight();let i=0;return this._width<t&&(this.setupWidth(t),i++),this._height<e&&(this.setupHeight(e),i++),i},DKTools.Window.prototype.createArrow=function(t,e,i={}){const s=new DKTools.Sprite.Arrow({...i,id:e,arrowType:t});return s.start(),s.addEvent({type:"update",onUpdate:t=>{this.isOpenAndVisible()?s.show():s.hide(),DKTools.Utils.isFunction(i.onUpdate)&&i.onUpdate(t)}}),DKTools.Utils.isFunction(i.onMouseDown)&&s.addEvent({type:"mouse-down-left",onUpdate:i.onMouseDown}),DKTools.Utils.isFunction(i.onMouseUp)&&s.addEvent({type:"mouse-up-left",onUpdate:i.onMouseUp}),DKTools.Utils.isFunction(i.onMouseClick)&&s.addEvent({type:"mouse-click-left",onUpdate:i.onMouseClick}),DKTools.Utils.isFunction(i.onMouseLongPress)&&s.addEvent({type:"mouse-long-press-left",onUpdate:i.onMouseLongPress}),DKTools.Utils.isFunction(i.onMouseLongPressStarted)&&s.addEvent({type:"mouse-long-press-left-started",onUpdate:i.onMouseLongPressStarted}),DKTools.Utils.isFunction(i.onMouseLongPressFinished)&&s.addEvent({type:"mouse-long-press-left-finished",onUpdate:i.onMouseLongPressFinished}),DKTools.Utils.isFunction(i.onStateNormal)&&s.addEvent({type:"state-normal",onUpdate:i.onStateNormal}),DKTools.Utils.isFunction(i.onStatePressed)&&s.addEvent({type:"state-pressed",onUpdate:i.onStatePressed}),this._arrows.push(s),this.addChild(s),s},DKTools.Window.prototype.deactivate=function(){DKTools.Base.prototype.deactivate.call(this),this.hasContentsSprite()&&this._windowContentsSprite.deactivate()},DKTools.Window.prototype.destroy=function(t){DKTools.Base.prototype.destroy.call(this,t),Window_Base.prototype.destroy.call(this,t)},DKTools.Window.prototype.drawText=function(t,e){return!!this.hasContentsSprite()&&this._windowContentsSprite.drawText(t,e)},DKTools.Window.prototype.findArrow=function(t){return _.find(this._arrows,{id:t})},DKTools.Window.prototype.getMinWidth=function(){return 2*this.standardPadding()+DKTools.Base.prototype.getMinWidth.call(this)},DKTools.Window.prototype.getMinHeight=function(){return 2*this.standardPadding()+DKTools.Base.prototype.getMinHeight.call(this)},DKTools.Window.prototype.getContentsWidth=function(){return DKTools.Utils.isFunction(this._contentsWidth)?this._contentsWidth(this):this._contentsWidth},DKTools.Window.prototype.getContentsHeight=function(){return DKTools.Utils.isFunction(this._contentsHeight)?this._contentsHeight(this):this._contentsHeight},DKTools.Window.prototype.getContentsSize=function(){return{width:this.getContentsWidth(),height:this.getContentsHeight()}},DKTools.Window.prototype.getCurrentOpacity=function(){return this.windowOpacity},DKTools.Window.prototype.hasBitmap=function(){return!!this.hasContentsSprite()&&this._windowContentsSprite.hasBitmap()},DKTools.Window.prototype.hasSpriteContainer=function(){return!!this._windowSpriteContainer},DKTools.Window.prototype.hasBackSprite=function(){return!!this._windowBackSprite},DKTools.Window.prototype.hasFrameSprite=function(){return!!this._windowFrameSprite},DKTools.Window.prototype.hasContentsSprite=function(){return!!this._windowContentsSprite},DKTools.Window.prototype.hasArrow=function(t){return!!this.findArrow(t)},DKTools.Window.prototype.hasArrowSprites=function(){return this.hasUpArrowSprite()&&this.hasDownArrowSprite()&&this.hasLeftArrowSprite()&&this.hasRightArrowSprite()},DKTools.Window.prototype.hasUpArrowSprite=function(){return this.hasArrow("up")},DKTools.Window.prototype.hasDownArrowSprite=function(){return this.hasArrow("down")},DKTools.Window.prototype.hasLeftArrowSprite=function(){return this.hasArrow("left")},DKTools.Window.prototype.hasRightArrowSprite=function(){return this.hasArrow("right")},DKTools.Window.prototype.hasPauseSignSprite=function(){return!!this._windowPauseSignSprite},DKTools.Window.prototype.hasBackgroundDimmer=function(){return!!this._dimmerSprite},DKTools.Window.prototype.hideBack=function(){this.hasBackSprite()&&(this._windowBackSprite.visible=!1)},DKTools.Window.prototype.hideContents=function(){this.hasContentsSprite()&&this._windowContentsSprite.hide()},DKTools.Window.prototype.hideFrame=function(){this.hasFrameSprite()&&(this._windowFrameSprite.visible=!1)},DKTools.Window.prototype.isOpenAndVisible=function(){return this.isOpen()&&this.isVisible()},DKTools.Window.prototype.isOpenAndActive=function(){return this.isOpen()&&this.isActive()},DKTools.Window.prototype.needsCreateBackSprite=function(){return!0},DKTools.Window.prototype.needsCreateFrameSprite=function(){return!0},DKTools.Window.prototype.needsCreateArrowsSprites=function(){return!1},DKTools.Window.prototype.needsCreateDownArrowSprite=function(){return!0},DKTools.Window.prototype.needsCreateUpArrowSprite=function(){return!0},DKTools.Window.prototype.needsCreateLeftArrowSprite=function(){return!0},DKTools.Window.prototype.needsCreateRightArrowSprite=function(){return!0},DKTools.Window.prototype.needsCreatePauseSignSprite=function(){return!0},DKTools.Window.prototype.onUpArrowUpdate=function(t){},DKTools.Window.prototype.onDownArrowUpdate=function(t){},DKTools.Window.prototype.onLeftArrowUpdate=function(t){},DKTools.Window.prototype.onRightArrowUpdate=function(t){},DKTools.Window.prototype.onUpArrowMouseClick=function(t){},DKTools.Window.prototype.onDownArrowMouseClick=function(t){},DKTools.Window.prototype.onLeftArrowMouseClick=function(t){},DKTools.Window.prototype.onRightArrowMouseClick=function(t){},DKTools.Window.prototype.onUpArrowMouseLongPress=function(t){},DKTools.Window.prototype.onDownArrowMouseLongPress=function(t){},DKTools.Window.prototype.onLeftArrowMouseLongPress=function(t){},DKTools.Window.prototype.onRightArrowMouseLongPress=function(t){},DKTools.Window.prototype._refreshAllParts=function(){this._refreshBack(),this._refreshFrame(),this._refreshContents(),this._refreshPauseSign(),this._refreshArrows()},DKTools.Window.prototype._refreshBack=function(){this.hasBackSprite()&&Window.prototype._refreshBack.call(this)},DKTools.Window.prototype._refreshFrame=function(){this.hasFrameSprite()&&Window.prototype._refreshFrame.call(this)},DKTools.Window.prototype._refreshContents=function(){if(this.hasContentsSprite()){let t=this._contentsPosition;DKTools.Utils.isFunction(t)&&(t=t(this)),this._windowContentsSprite.move(t)}},DKTools.Window.prototype._refreshPauseSign=function(){this.hasPauseSignSprite()&&Window.prototype._refreshPauseSign.call(this)},DKTools.Window.prototype._refreshArrows=function(){const t={up:this.standardUpArrowPosition(),down:this.standardDownArrowPosition(),left:this.standardLeftArrowPosition(),right:this.standardRightArrowPosition()};_.forEach(t,(t,e)=>{const i=this.findArrow(e);i&&i.move(t)})},DKTools.Window.prototype.redrawAll=function(){this.hasContentsSprite()&&this._windowContentsSprite.redrawAll()},DKTools.Window.prototype.refreshAll=function(){this._refreshAllParts(),DKTools.Base.prototype.refreshAll.call(this)},DKTools.Window.prototype.refreshArrows=function(){_.forEach(this._arrows,t=>{t.refreshAll()})},DKTools.Window.prototype.removeAllChildren=function(){DKTools.Base.prototype.removeAllChildren.call(this),this.removeContentsSprite()},DKTools.Window.prototype.removeContentsSprite=function(){this.hasContentsSprite()&&this.removeChild(this._windowContentsSprite)},DKTools.Window.prototype.removeArrow=function(t){const e=this.findArrow(t);e&&(DKTools.Utils.Array.remove(this._arrows,e),this.removeChild(e))},DKTools.Window.prototype.resetAll=function(){this.hasContentsSprite()&&this._windowContentsSprite.resetAll()},DKTools.Window.prototype.resetFont=function(){this.hasContentsSprite()&&this._windowContentsSprite.resetFont()},DKTools.Window.prototype.resetTextColor=function(){this.hasContentsSprite()&&this._windowContentsSprite.resetTextColor()},DKTools.Window.prototype.resetPaintOpacity=function(){this.hasContentsSprite()&&this._windowContentsSprite.resetPaintOpacity()},DKTools.Window.prototype.resize=function(t,e,i=!1,s=!1){if(t=_.defaultTo(t,this.getMinWidth()),e=_.defaultTo(e,this.getMinHeight()),DKTools.Utils.isString(e)&&(e=this.getLineHeight()*parseFloat(e)),this._width===t&&this._height===e)return!1;const n=this._width,r=this._height;return this.setupSize(t,e),(this._width!==n||this._height!==r)&&(i||this.start(),s&&this.activate(),!0)},DKTools.Window.prototype.standardOpenness=function(){return 255},DKTools.Window.prototype.standardOpennessSpeed=function(){return 16},DKTools.Window.prototype.standardMargin=function(){return 4},DKTools.Window.prototype.standardOrigin=function(){return new Point(0,0)},DKTools.Window.prototype.standardUpArrowPosition=function(){return new Point(this._width/2,12)},DKTools.Window.prototype.standardDownArrowPosition=function(){return new Point(this._width/2,this._height-12)},DKTools.Window.prototype.standardLeftArrowPosition=function(){return new Point(12,this._height/2)},DKTools.Window.prototype.standardRightArrowPosition=function(){return new Point(this._width-12,this._height/2)},DKTools.Window.prototype.standardArrowStateNormal=function(){return t=>{const e=t.target;e.setScale(1,1),e.setOpacity(255)}},DKTools.Window.prototype.standardArrowStatePressed=function(){return t=>{const e=t.target;e.setScale(.9,.9),e.setOpacity(160)}},DKTools.Window.prototype.standardContentsSprite=function(){return new DKTools.Sprite},DKTools.Window.prototype.standardChildX=function(){return this._padding},DKTools.Window.prototype.standardChildY=function(){return this._padding},DKTools.Window.prototype.standardChildPosition=function(){return()=>new Point(this.standardChildX(),this.standardChildY())},DKTools.Window.prototype.standardContentsPosition=function(){return this.standardChildPosition()},DKTools.Window.prototype.standardBackVisible=function(){return!0},DKTools.Window.prototype.standardFrameVisible=function(){return!0},DKTools.Window.prototype.standardContentsWidth=function(){return()=>this._width-2*this._padding},DKTools.Window.prototype.standardContentsHeight=function(){return()=>this._height-2*this._padding},DKTools.Window.prototype.standardWindowOpacity=function(){return 255},DKTools.Window.prototype.standardContentsOpacity=function(){return 255},DKTools.Window.prototype.standardFrameOpacity=function(){return 255},DKTools.Window.prototype.standardOpacity=function(){return{windowOpacity:this.standardWindowOpacity(),contentsOpacity:this.standardContentsOpacity(),frameOpacity:this.standardFrameOpacity(),backOpacity:this.standardBackOpacity()}},DKTools.Window.prototype.standardTone=function(){try{return _.clone($gameSystem.windowTone())}catch(t){return[0,0,0]}},DKTools.Window.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t);let e=t.contentsSprite;t instanceof DKTools.Window&&e instanceof DKTools.Sprite&&(e=e.clone({blockStart:!0})),this.setupPadding(t.padding),this.setupMargin(t.margin),this.setupContentsWidth(t.contentsWidth),this.setupContentsHeight(t.contentsHeight),this.setupContentsSprite(e),this.setupContentsPosition(t.contentsPosition),this.setupOpacity(t.opacity),this.setupTone(t.tone)},DKTools.Window.prototype.setupWidth=function(t){this.width=this._checkWidth(t)},DKTools.Window.prototype.setupHeight=function(t){DKTools.Utils.isString(t)&&(t=this.getLineHeight()*parseFloat(t)),this.height=this._checkHeight(t)},DKTools.Window.prototype.setupSize=function(t,e){if(t instanceof Object)return this.setupSize(t.width,t.height);DKTools.Utils.isString(e)&&(e=this.getLineHeight()*parseFloat(e)),t=this._checkWidth(t),e=this._checkHeight(e),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.prototype.setupPadding=function(t){this._padding=_.defaultTo(t,this.standardPadding())},DKTools.Window.prototype.setupMargin=function(t){this._margin=_.defaultTo(t,this.standardMargin())},DKTools.Window.prototype.setupContentsWidth=function(t){this._contentsWidth=t||this.standardContentsWidth()},DKTools.Window.prototype.setupContentsHeight=function(t){this._contentsHeight=t||this.standardContentsHeight()},DKTools.Window.prototype.setupContentsSprite=function(t){this._windowContentsSprite=t||this.standardContentsSprite()},DKTools.Window.prototype.setupContentsPosition=function(t,e){let i=t;DKTools.Utils.isFunction(t)||(i=DKTools.Utils.Point.tryToPoint(t,e)||this.standardContentsPosition()),this._contentsPosition=i},DKTools.Window.prototype.setupOpacity=function(t){this._opacity=Object.assign(this.standardOpacity(),t)},DKTools.Window.prototype.setupTone=function(t){this._tone=Object.assign(this.standardTone(),t)},DKTools.Window.prototype.setAll=function(t={},e=!1,i=!1){t=t||{};let s=DKTools.Base.prototype.setAll.call(this,t,!0);return this.setPadding(t.padding,!0)&&s++,this.setMargin(t.margin,!0)&&s++,this.setOpacity(t.opacity,!0)&&s++,this.setTone(t.tone,!0)&&s++,s>0&&(e||this.start(),i&&this.activate()),s},DKTools.Window.prototype.setWidth=function(t,e=!1,i=!1){return this.resize(t,this._height,e,i)},DKTools.Window.prototype.setHeight=function(t,e=!1,i=!1){return this.resize(this._width,t,e,i)},DKTools.Window.prototype.setPadding=function(t,e=!1){if(this._padding===t)return!1;const i=this._padding;return this.setupPadding(t),this._padding!==i&&(e||this.start(),!0)},DKTools.Window.prototype.setMargin=function(t,e=!1){if(this._margin===t)return!1;const i=this._margin;return this.setupMargin(padding),this._margin!==i&&(e||this.start(),!0)},DKTools.Window.prototype.setContentsSprite=function(t,e=!1,i=!1){return this._windowContentsSprite!=t&&(this.removeContentsSprite(),this.setupContentsSprite(t),this.addContentsSprite(),e||this.start(),i&&this.activate(),!0)},DKTools.Window.prototype.setContentsPosition=function(t,e){const i=DKTools.Utils.isFunction,s=i(this._contentsPosition),n=i(t);if(s||n){if(this._contentsPosition===t)return!1;this.setupContentsPosition(t,e)}else{const i=DKTools.Utils.Point.toPoint(t,e);if(DKTools.Utils.Point.equals(this._contentsPosition,i))return!1;const s=DKTools.Utils.Point.clone(this._contentsPosition);if(this.setupContentsPosition(i),DKTools.Utils.Point.equals(this._contentsPosition,s))return!1}return this._refreshContents(),!0},DKTools.Window.prototype.setOpacity=function(t,e=!1){if(_.isEqual(this._opacity,Object.assign(this.standardOpacity(),t)))return!1;const i=_.clone(this._opacity);return this.setupOpacity(t),!_.isEqual(this._opacity,i)&&(e||this.updateOpacity(),!0)},DKTools.Window.prototype.setTone=function(t,e=!1){if(_.isEqual(this._tone,Object.assign(this.standardTone(),t)))return!1;const i=_.clone(this._tone);return this.setupTone(t),!_.isEqual(this._tone,i)&&(e||this.updateTone(),!0)},DKTools.Window.prototype.start=function(t=!1){if(this.hasContentsSprite()){const e=this._windowContentsSprite;e.resize(this.getContentsWidth(),this.getContentsHeight(),!0),e.start(t)}DKTools.Base.prototype.start.call(this,t)},DKTools.Window.prototype.showBack=function(){this.hasBackSprite()&&(this._windowBackSprite.visible=!0)},DKTools.Window.prototype.showContents=function(t=!1){this.hasContentsSprite()&&this._windowContentsSprite.show(t)},DKTools.Window.prototype.showFrame=function(){this.hasFrameSprite()&&(this._windowFrameSprite.visible=!0)},DKTools.Window.prototype._updateContents=function(){this.hasContentsSprite()&&Window.prototype._updateContents.call(this)},DKTools.Window.prototype._updatePauseSign=function(){this.hasPauseSignSprite()&&Window.prototype._updatePauseSign.call(this)},DKTools.Window.prototype.updateOpenEvents=function(){this.updateEventsContainer("open")},DKTools.Window.prototype.updateCloseEvents=function(){this.updateEventsContainer("close")},DKTools.Window.prototype.updateAll=function(){this.updateContents(),DKTools.Base.prototype.updateAll.call(this),this.updateTone()},DKTools.Window.prototype.updateContents=function(){this.hasContentsSprite()&&this._windowContentsSprite.updateAll()},DKTools.Window.prototype.updateTransform=function(){this._updateContents(),this._updatePauseSign(),PIXI.Container.prototype.updateTransform.call(this)},DKTools.Window.prototype.updateOpacity=function(t={}){t=t||{},this.hasSpriteContainer()&&(this.windowOpacity=_.defaultTo(t.windowOpacity,this.opacity.windowOpacity)),this.hasContentsSprite()&&(this.contentsOpacity=_.defaultTo(t.contentsOpacity,this.opacity.contentsOpacity)),this.hasFrameSprite()&&(this.frameOpacity=_.defaultTo(t.frameOpacity,this.opacity.frameOpacity)),this.hasBackSprite()&&(this.backOpacity=_.defaultTo(t.backOpacity,this.opacity.backOpacity))},DKTools.Window.prototype.updateTone=function(t){t=t||this.tone,this.hasBackSprite()&&Window.prototype.setTone.apply(this,t)},DKTools.Window.prototype.updateOpen=function(){this._opening&&(this.openness+=this.standardOpennessSpeed(),this.isOpen()&&(this._opening=!1,this.updateOpenEvents()))},DKTools.Window.prototype.updateClose=function(){this._closing&&(this.openness-=this.standardOpennessSpeed(),this.isClosed()&&(this._closing=!1,this.updateCloseEvents()))},DKTools.Window.prototype.update=function(){DKTools.Base.prototype.update.call(this),this.updateOpen(),this.updateClose(),this.updateBackgroundDimmer()},DKTools.Window.Selectable=class extends DKTools.Window{needsCreateArrowsSprites(){return!0}onUpArrowUpdate(t){const e=t.target;if(e.hide(),this.hasContentsSprite()){const t=this._windowContentsSprite;this.isChild(t)&&t.isVisible()&&t.isSelectable()&&t.isVertical()&&t.getTopRow()>0&&e.show(this.isVisibleAndActive()&&t.isActive())}}onDownArrowUpdate(t){const e=t.target;if(e.hide(),this.hasContentsSprite()){const t=this._windowContentsSprite;if(this.isChild(t)&&t.isVisible()&&t.isSelectable()&&t.isVertical()){const i=t.getTopRow(),s=t.getMaxTopRow();s>0&&i<s&&e.show(this.isVisibleAndActive()&&t.isActive())}}}onLeftArrowUpdate(t){const e=t.target;if(e.hide(),this.hasContentsSprite()){const t=this._windowContentsSprite;this.isChild(t)&&t.isVisible()&&t.isSelectable()&&t.isHorizontal()&&t.getTopCol()>0&&e.show(this.isVisibleAndActive()&&t.isActive())}}onRightArrowUpdate(t){const e=t.target;if(e.hide(),this.hasContentsSprite()){const t=this._windowContentsSprite;if(this.isChild(t)&&t.isVisible()&&t.isSelectable()&&t.isHorizontal()){const i=t.getTopCol(),s=t.getMaxTopCol();s>0&&i<s&&e.show(this.isVisibleAndActive()&&t.isActive())}}}onUpArrowMouseClick(t){t.target.isVisibleAndActive()&&this._windowContentsSprite.selectPrevItem()}onDownArrowMouseClick(t){t.target.isVisibleAndActive()&&this._windowContentsSprite.selectNextItem()}onLeftArrowMouseClick(t){t.target.isVisibleAndActive()&&this._windowContentsSprite.selectPrevItem()}onRightArrowMouseClick(t){t.target.isVisibleAndActive()&&this._windowContentsSprite.selectNextItem()}onUpArrowMouseLongPress(t){this.onUpArrowMouseClick(t)}onDownArrowMouseLongPress(t){this.onDownArrowMouseClick(t)}onLeftArrowMouseLongPress(t){this.onLeftArrowMouseClick(t)}onRightArrowMouseLongPress(t){this.onRightArrowMouseClick(t)}standardContentsSprite(){return new DKTools.Sprite.Selectable}},DKTools.Scene.prototype=Object.create(Scene_Base.prototype),DKTools.Scene.prototype.constructor=DKTools.Scene,DKTools.Scene.prototype.initialize=function(){this._clearAll(),this._createAll(),this._setupAll(),this._addAllChildren(),Scene_Base.prototype.initialize.call(this)},DKTools.Scene.prototype._addAllChildren=function(){},DKTools.Scene.prototype.addEvent=function(t){return this._eventsManager.addEvent(t)},DKTools.Scene.prototype.addOneTimeEvent=function(t){return this._eventsManager.addOneTimeEvent(t)},DKTools.Scene.prototype.addAnimation=function(t){this._eventsManager.addAnimation(t)},DKTools.Scene.prototype._clearAll=function(){},DKTools.Scene.prototype._createAll=function(){this._createOptionsManager(),this._createEventsManager()},DKTools.Scene.prototype._createOptionsManager=function(){this._optionsManager=new DKTools.OptionsManager},DKTools.Scene.prototype._createEventsManager=function(){this._eventsManager=new DKTools.EventsManager(this)},DKTools.Scene.prototype.create=function(){Scene_Base.prototype.create.call(this),this.createBackground(),this.createAllSprites(),this.createWindowLayer(),this.createAllWindows(),this.createForeground()},DKTools.Scene.prototype.createBackground=function(){},DKTools.Scene.prototype.createAllSprites=function(){},DKTools.Scene.prototype.createAllWindows=function(){},DKTools.Scene.prototype.createForeground=function(){},DKTools.Scene.prototype.destroy=function(t){this._clearAll(),this._eventsManager.clearEvents(),this.deactivate(),Stage.prototype.destroy.call(this,t)},DKTools.Scene.prototype.hasWindowLayer=function(){return!!this._windowLayer},DKTools.Scene.prototype.iterateChildren=function(t){this.children.forEach(t)},DKTools.Scene.prototype.isChild=function(t){return t instanceof Window&&this.hasWindowLayer()?this._windowLayer.children.includes(t):this.children.includes(t)},DKTools.Scene.prototype.isDestroyed=function(){return this._destroyed},DKTools.Scene.prototype.removeWindow=function(t){return!(!this.hasWindowLayer()||!this.isChild(t))&&(this._windowLayer.removeChild(t),!0)},DKTools.Scene.prototype._setupAll=function(){this._setupOptions(),this._setupEvents(),this._setupAnimations()},DKTools.Scene.prototype._setupOptions=function(){},DKTools.Scene.prototype._setupEvents=function(){},DKTools.Scene.prototype._setupAnimations=function(){},DKTools.Scene.prototype.start=function(){Scene_Base.prototype.start.call(this),this.startAllSprites(),this.startAllWindows()},DKTools.Scene.prototype.startAllSprites=function(){},DKTools.Scene.prototype.startAllWindows=function(){},DKTools.Scene.prototype.stop=function(){Scene_Base.prototype.stop.call(this),this.stopAll()},DKTools.Scene.prototype.stopAll=function(){},DKTools.Scene.prototype.terminate=function(){Scene_Base.prototype.terminate.call(this),this.terminateAll()},DKTools.Scene.prototype.terminateAll=function(){},DKTools.Scene.prototype.update=function(){this.updateChildren(),this.updateFade(),this.updateEvents()},DKTools.Scene.prototype.updateChild=function(t){t&&DKTools.Utils.isFunction(t.update)&&t.update()},DKTools.Scene.prototype.updateChildren=function(){this.iterateChildren(this.updateChild)},DKTools.Scene.prototype.updateEvents=function(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()},DKTools.Scene.prototype.updateReadyEvents=function(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")},DKTools.Scene.prototype.updateUpdateEvents=function(){this._eventsManager.updateEventsContainer("update")},DKTools.Scene.prototype.updateQueueEvents=function(){const t=this._eventsManager.getEventsContainerByType("queue")[0];this._eventsManager.updateEvent(t)},DKTools.Scene.Preloader=class{constructor(){this.initialize.apply(this,arguments)}initialize(){this._queue=[],this._finished=!1,this._errors=0}add(t){t instanceof Bitmap?t=DKTools.Utils.Bitmap.reserveAsync(t):t instanceof WebAudio&&(t=DKTools.Utils.WebAudio.loadAsync(t)),t instanceof Promise&&this._queue.push(t)}addMany(t){_.forEach(t,t=>this.add(t))}finish(){this._queue=[],this._finished=!0}hasErrors(){return this._errors>0}isReady(){return this._finished}_onError(){this._errors++}start(){const t=_.map(this._queue,t=>t.catch(t=>{throw this._onError(),t}));Promise.all(t).then(()=>this.finish())}};const DKToolsParam=new DKTools.ParameterManager("DKTools");DKTools.PluginCommandManager.set("DKPluginsCheckUpdates",()=>{DKTools.Utils.openConsole(),DKTools.Utils._checkUpdates()}),DKTools.PluginCommandManager.set("UpdateFileSystemStamp",()=>{DKTools.IO._createStamp()});const DKTools_window_onload=window.onload;window.onload=function(){DKTools.Utils.initialize(),DKTools.IO.initialize(),DKTools.PreloadManager.initialize(),DKTools_window_onload.call(this),DKTools.PluginManager.initialize()},ImageCache.prototype.add=function(t,e){this._items[t]={touch:Date.now(),bitmap:e,key:t}},ImageCache.prototype.reserve=function(t,e,i){this._items[t]={touch:Date.now(),reservationId:i,bitmap:e,key:t},this._truncateCache()};const DKTools_ImageCache_get=ImageCache.prototype.get;ImageCache.prototype.get=function(t){return DKTools_ImageCache_get.call(this,t)||DKTools.PreloadManager.getCachedImageByKey(t)||null},ImageCache.prototype.has=function(t){return!!this._items[t]},ImageCache.prototype.isReserved=function(t,e){const i=this._items[t];return!!i&&(e?i.reservationId===e:i.reservationId>0)},ImageCache.prototype.release=function(t){delete this._items[t]},ImageCache.prototype._truncateCache=function(){const t=this._items,e=Date.now();let i=ImageCache.limit;Object.keys(t).map(e=>t[e]).filter(t=>!this._mustBeHeld(t)).sort((t,e)=>e.touch-t.touch).forEach(s=>{if(DKTools.PreloadManager.isImageCachedByKey(s.key))delete t[s.key];else if(!(s.expiredAt>0&&s.expiredAt>e))if(i>0){const t=s.bitmap;i-=t.width*t.height}else delete t[s.key]})};class AudioCache extends ImageCache{add(t,e){this._items[t]={touch:Date.now(),audio:e,key:t}}get(t){if(this._items[t]){const e=this._items[t];return e.touch=Date.now(),e.audio}return DKTools.PreloadManager.getCachedAudioByKey(t)||null}_mustBeHeld(t){return!(!t.reservationId&&t.audio.isReady())}reserve(t,e,i){this._items[t]={touch:Date.now(),reservationId:i,audio:e,key:t},this._truncateCache()}_truncateCache(){const t=this._items,e=Date.now();let i=AudioCache.limit;Object.keys(t).map(e=>t[e]).filter(t=>!this._mustBeHeld(t)).sort((t,e)=>e.touch-t.touch).forEach(s=>{if(DKTools.PreloadManager.isAudioCachedByKey(s.key))delete t[s.key];else if(!(s.expiredAt>0&&s.expiredAt>e))if(i>0){const t=s.audio;i-=t._totalTime*t._sampleRate}else delete t[s.key]})}}const DKTools_Graphics_initialize=Graphics.initialize;Graphics.initialize=function(t,e,i){DKTools_Graphics_initialize.call(this,t,e,i);const s=DKToolsParam.get("FPS Meter")||{};if(DKTools.Utils.isTest()&&s.Enabled){const t=this._fpsMeter;t&&(this.showFps(),"FPS"===s.Mode?(t.showFps(),this._fpsMeterToggled=!1):(t.showDuration(),this._fpsMeterToggled=!0))}};const DKTools_Graphics_printError=Graphics.printError;Graphics.printError=function(t,e){DKTools_Graphics_printError.call(this,t,e),this._errorPrinter&&this._updateErrorPrinter()};const DKTools_Graphics_createFPSMeter=Graphics._createFPSMeter;Graphics._createFPSMeter=function(){const t=DKToolsParam.get("FPS Meter")||{};t.Enabled?(this._fpsMeter=new FPSMeter({theme:t.Theme,history:t.History,toggleOn:null,graph:1,decimals:0}),this._fpsMeter.hide()):DKTools_Graphics_createFPSMeter.call(this)},Graphics.printDetailedError=function(t){if(!this._errorPrinter)return;const e=t.stack.split(/(?:\r\n|\r|\n)/).map(t=>t.replace(/[\(](.*[\/])/,"("));this._errorPrinter.innerHTML=this._makeDetailedErrorHtml(t.name,t.message,e),this._applyCanvasFilter(),this._clearUpperCanvas()},Graphics._getErrorReferenceInfo=function(){const t=SceneManager._scene,e={};if(t&&t.constructor.name&&(e.Scene=t.constructor.name,SceneManager.isCurrentScene(Scene_Map))){const t=$gameMap._interpreter;if(t){if(t._mapId>0&&(e["Map ID"]=t._mapId),t._eventId>0){e["Event ID"]=t._eventId;const i=$gameMap.event(t._eventId);i&&(e["Event Page"]=i._pageIndex+1)}if(t._list&&t._list.length>0){let i=t._list[t._index];i&&0===i.code&&t._index>0&&(i=t._list[t._index-1]),i&&i.code>0&&(e["Last Event Command"]=i.code)}t._params&&t._params.length>0&&(e.Params=JSON.stringify(t._params))}}return e},Graphics._getErrorMessageForErrorPrint=function(){return DKToolsParam.get("Print Detailed Error","Error Message")},Graphics._getRestartMessageForErrorPrint=function(){return DKToolsParam.get("Print Detailed Error","Restart Message")},Graphics._makeDetailedErrorHtml=function(t,e,i){const s=this._getErrorMessageForErrorPrint(),n=this._getRestartMessageForErrorPrint(),r=this._getErrorReferenceInfo();let o="";return s&&(o='<font color="yellow"><b>'+s+"<br></b></font><br>"),Object.keys(r).length>0&&(o+='<font color="yellow"><b>Reference Information</b></font><br>',_.forEach(r,(t,e)=>{o+='<font color="white">'+e+": "+t+"</font><br>"}),o+="<br>"),o+='<font color="red"><b>'+e+"</b></font><br>",_.forEach(i,t=>{o+='<font color="white">'+t+"</font><br>"}),n&&(o+='<br><font color="yellow"><b>'+n+"</b></font><br><br>"),o};const DKTools_Graphics_updateErrorPrinter=Graphics._updateErrorPrinter;Graphics._updateErrorPrinter=function(){DKTools_Graphics_updateErrorPrinter.call(this),this._errorPrinter&&this._errorShowed&&DKToolsParam.get("Print Detailed Error","Enabled")&&(this._errorPrinter.style.textAlign="left",this._errorPrinter.height=.8*this._height,this._centerElement(this._errorPrinter))},void 0===Input.keyMapper[35]&&(Input.keyMapper[35]="end"),void 0===Input.keyMapper[36]&&(Input.keyMapper[36]="home");const DKTools_TouchInput_initialize=TouchInput.initialize;TouchInput.initialize=function(){DKTools_TouchInput_initialize.call(this);const t=DKToolsParam.get("Cursor Graphic")||{};if(t.Enabled){const e=t.Graphic;e&&(document.body.style.cursor=`url('img/system/${e}.png'), default`)}};const DKTools_TouchInput_clear=TouchInput.clear;TouchInput.clear=function(){DKTools_TouchInput_clear.call(this),this._mouseMoved=!1,this._leftButtonPressed=!1,this._middleButtonPressed=!1,this._rightButtonPressed=!1,this._leftButtonReleased=!1,this._middleButtonReleased=!1,this._rightButtonReleased=!1,this._mouseX=0,this._mouseY=0,this._events.mouseMoved=!1,this._events.leftButtonPressed=!1,this._events.middleButtonPressed=!1,this._events.rightButtonPressed=!1,this._events.leftButtonReleased=!1,this._events.middleButtonReleased=!1,this._events.rightButtonReleased=!1};const DKTools_TouchInput_update=TouchInput.update;TouchInput.update=function(){this._mouseMoved=this._events.mouseMoved,this._leftButtonPressed=this._events.leftButtonPressed,this._middleButtonPressed=this._events.middleButtonPressed,this._rightButtonPressed=this._events.rightButtonPressed,this._leftButtonReleased=this._events.leftButtonReleased,this._middleButtonReleased=this._events.middleButtonReleased,this._rightButtonReleased=this._events.rightButtonReleased,this._events.mouseMoved=!1,this._events.leftButtonReleased=!1,this._events.middleButtonReleased=!1,this._events.rightButtonReleased=!1,DKTools_TouchInput_update.call(this)},TouchInput.isMouseMoved=function(){return this._mouseMoved},TouchInput.isMousePressed=function(){return this.isLeftButtonPressed()||this.isMiddleButtonPressed()||this.isRightButtonPressed()},TouchInput.isMouseReleased=function(){return this.isLeftButtonReleased()||this.isMiddleButtonReleased()||this.isRightButtonReleased()},TouchInput.isLeftButtonPressed=function(){return this._leftButtonPressed},TouchInput.isLeftButtonReleased=function(){return this._leftButtonReleased},TouchInput.isMiddleButtonPressed=function(){return this._middleButtonPressed},TouchInput.isMiddleButtonReleased=function(){return this._middleButtonReleased},TouchInput.isRightButtonPressed=function(){return this._rightButtonPressed},TouchInput.isRightButtonReleased=function(){return this._rightButtonReleased},TouchInput.isScreenPressed=function(){return this._screenPressed};const DKTools_TouchInput_onLeftButtonDown=TouchInput._onLeftButtonDown;TouchInput._onLeftButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onLeftButtonDown.call(this,t),Graphics.isInsideCanvas(e,i)&&(this._events.leftButtonPressed=!0)};const DKTools_TouchInput_onMiddleButtonDown=TouchInput._onMiddleButtonDown;TouchInput._onMiddleButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onMiddleButtonDown.call(this,t),Graphics.isInsideCanvas(e,i)&&(this._events.middleButtonPressed=!0)};const DKTools_TouchInput_onRightButtonDown=TouchInput._onRightButtonDown;TouchInput._onRightButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onRightButtonDown.call(this,t),Graphics.isInsideCanvas(e,i)&&(this._events.rightButtonPressed=!0)};const DKTools_TouchInput_onMouseMove=TouchInput._onMouseMove;TouchInput._onMouseMove=function(t){const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onMouseMove.call(this,t),this._mouseX===e&&this._mouseY===i||(this._events.mouseMoved=!0,this._date=Date.now(),this._mouseX=e,this._mouseY=i)};const DKTools_TouchInput_onMouseUp=TouchInput._onMouseUp;TouchInput._onMouseUp=function(t){const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onMouseUp.call(this,t),this._events.leftButtonPressed=!1,this._events.middleButtonPressed=!1,this._events.rightButtonPressed=!1,Graphics.isInsideCanvas(e,i)&&(0===t.button?this._events.leftButtonReleased=!0:1===t.button?this._events.middleButtonReleased=!0:2===t.button&&(this._events.rightButtonReleased=!0))},Object.defineProperties(TouchInput,{mouseX:{get:function(){return this._mouseX},configurable:!0},mouseY:{get:function(){return this._mouseY},configurable:!0}});const DKTools_Tilemap_initialize=Tilemap.prototype.initialize;Tilemap.prototype.initialize=function(){DKTools_Tilemap_initialize.call(this),this._tileWidth=Tilemap.TILE_WIDTH||this._tileWidth,this._tileHeight=Tilemap.TILE_HEIGHT||this._tileHeight};const DKTools_Tilemap_createLayers_patch19=Tilemap.prototype._createLayers;Tilemap.prototype._createLayers=function(){this._lowerLayer&&this.removeChild(this._lowerLayer),this._upperLayer&&this.removeChild(this._upperLayer),DKTools_Tilemap_createLayers_patch19.apply(this,arguments)};const DKTools_WebAudio_addLoadListener=WebAudio.prototype.addLoadListener;WebAudio.prototype.addLoadListener=function(t){this.isReady()?t(this):DKTools_WebAudio_addLoadListener.call(this,t)},WebAudio.prototype._onLoad=function(){for(;this._loadListeners.length>0;){this._loadListeners.shift()(this)}};const DKTools_DataManager_isDatabaseLoaded=DataManager.isDatabaseLoaded;DataManager.isDatabaseLoaded=function(){return!!DKTools_DataManager_isDatabaseLoaded.call(this)&&(this.__isDatabaseLoaded||(this.__isDatabaseLoaded=!0,this.onDatabaseLoad()),!0)},DataManager.onDatabaseLoad=function(){},Object.defineProperties(ImageManager,{PARALLAXES_FOLDER:{get:function(){if(void 0===this.__parallaxesFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/parallaxes/";if(t.Enabled){const i=t["Parallaxes Folder"];this.__parallaxesFolder__=i?DKTools.IO.normalizePath(i+"/"):e}else this.__parallaxesFolder__=e}return this.__parallaxesFolder__},configurable:!0},TILESETS_FOLDER:{get:function(){if(void 0===this.__tilesetsFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/tilesets/";if(t.Enabled){const i=t["Tilesets Folder"];this.__tilesetsFolder__=i?DKTools.IO.normalizePath(i+"/"):e}else this.__tilesetsFolder__=e}return this.__tilesetsFolder__},configurable:!0}}),ImageManager.loadParallax=function(t,e){return this.loadBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!0)},ImageManager.loadTileset=function(t,e){return this.loadBitmap(ImageManager.TILESETS_FOLDER,t,e,!1)};const DKTools_ImageManager_loadNormalBitmap=ImageManager.loadNormalBitmap;ImageManager.loadNormalBitmap=function(t,e){return DKTools_ImageManager_loadNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e)},ImageManager.reserveParallax=function(t,e,i){return this.reserveBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!1,i)},ImageManager.reserveTileset=function(t,e,i){return this.reserveBitmap(ImageManager.TILESETS_FOLDER,t,e,!1,i)};const DKTools_ImageManager_reserveNormalBitmap=ImageManager.reserveNormalBitmap;ImageManager.reserveNormalBitmap=function(t,e,i){return DKTools_ImageManager_reserveNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e,i)},ImageManager.requestParallax=function(t,e){return this.requestBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!0)},ImageManager.requestTileset=function(t,e){return this.requestBitmap(ImageManager.TILESETS_FOLDER,t,e,!1)};const DKTools_ImageManager_requestNormalBitmap=ImageManager.requestNormalBitmap;ImageManager.requestNormalBitmap=function(t,e){return DKTools_ImageManager_requestNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e)},ImageManager.isLoaded=function(t,e){return this._imageCache.has(this._generateCacheKey(t,e||0))},ImageManager.isReserved=function(t,e,i){const s=this._generateCacheKey(t,e||0);return this._imageCache.isReserved(s,i)||DKTools.PreloadManager.isImageCachedByKey(s)},ImageManager.releaseBitmap=function(t,e){this._imageCache.release(this._generateCacheKey(t,e||0))},AudioManager._audioCache=new AudioCache,AudioManager._generateCacheKey=function(t,e){return DKTools.IO.reverseSlashes(this._path+t+"/"+encodeURIComponent(e)+this.audioFileExt())},AudioManager.createBuffer=function(t,e,i){const s=this._generateCacheKey(t,e);if(this.shouldUseHtml5Audio()&&"bgm"===t)return this._blobUrl?Html5Audio.setup(this._blobUrl):Html5Audio.setup(s),Html5Audio;{let t=this._audioCache.get(s);return t||(t=new WebAudio(s),this._audioCache.reserve(s,t,i||this._defaultReservationId)),t}},AudioManager.releaseReservation=function(t){this._audioCache.releaseReservation(t)},AudioManager.setDefaultReservationId=function(t){this._defaultReservationId=t},AudioManager.isLoaded=function(t,e){return this._audioCache.has(this._generateCacheKey(t,e))},AudioManager.isReserved=function(t,e,i){if("se"===t&&this._staticBuffers.some(t=>t._reservedSeName===e))return!0;const s=this._generateCacheKey(t,e);return this._audioCache.isReserved(s,i)||DKTools.PreloadManager.isAudioCachedByKey(s)},AudioManager.releaseBuffer=function(t,e){this._audioCache.release(this._generateCacheKey(t,e))};const DKTools_SceneManager_initialize=SceneManager.initialize;SceneManager.initialize=async function(){await DKTools_SceneManager_initialize.call(this),await DKTools.StartupManager.initialize(),DKToolsParam.get("Initial Preloading","Enabled")&&DKToolsParam.get("Initial Preloading","Progress Bar",{key:"Enabled"})&&DKTools.PreloadManager.getTotal()>0&&await this.goto(DKTools.PreloadManager.Scene)};const DKTools_SceneManager_initGraphics=SceneManager.initGraphics;SceneManager.initGraphics=function(){const t=DKToolsParam.get("Screen Resolution")||{};if(t.Enabled){const e=t.Width,i=t.Height;this._boxWidth=e,this._screenWidth=e,this._boxHeight=i,this._screenHeight=i,this.updateResolution()}DKTools_SceneManager_initGraphics.call(this)},SceneManager.updateResolution=function(){const t=this._screenWidth-window.innerWidth,e=this._screenHeight-window.innerHeight;0!==t&&0!==e&&(window.moveBy(-1*t/2,-1*e/2),window.resizeBy(t,e))};const DKTools_SceneManager_onKeyDown=SceneManager.onKeyDown;SceneManager.onKeyDown=function(t){if(DKTools_SceneManager_onKeyDown.call(this,t),t.ctrlKey||t.altKey)return;const e=DKToolsParam.get("Quick Load","Key Code"),i=DKToolsParam.get("Screenshots","Key Code"),s=DKToolsParam.get("Grid","Key Code");switch(t.keyCode){case e:DKTools.Utils.__quickLoad();break;case i:DKToolsParam.get("Screenshots","Enabled")&&DKTools.Utils.makeScreenshot();break;case s:DKTools.Utils.__showGrid()}};const DKTools_SceneManager_catchException=SceneManager.catchException;SceneManager.catchException=function(t){DKTools_SceneManager_catchException.call(this,t),t instanceof Error&&DKToolsParam.get("Print Detailed Error","Enabled")&&Graphics.printDetailedError(t),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&DKTools.Utils.openConsole()};const DKTools_SceneManager_onError=SceneManager.onError;SceneManager.onError=function(t){DKTools_SceneManager_onError.call(this,t),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&DKTools.Utils.openConsole()},SceneManager.changeScene=function(){this.isSceneChanging()&&!this.isCurrentSceneBusy()&&(this._scene&&(this._scene.terminate(),this._scene.detachReservation(),this._previousClass=this._scene.constructor),this._scene=this._nextScene,this._scene&&(this._scene.attachReservation(),this._scene.startPreloading(),this._sceneCreated=!1,this._sceneStarted=!1,this._nextScene=null,this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate())),this._exiting&&this.terminate())},SceneManager.updateScene=function(){if(this._scene){if(!this._sceneCreated&&this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate()),this._sceneCreated&&!this._sceneStarted)try{this._scene.isReady()&&(this._scene.start(),this._sceneStarted=!0,this.onSceneStart())}catch(t){console.error(t),DKTools.Utils.logError(t),this._scene.start(),this._sceneStarted=!0,this.onSceneStart()}this.isCurrentSceneStarted()&&this._scene.update()}},SceneManager.isCurrentScene=function(t){return!!this._scene&&this._scene.constructor===t};const DKTools_SceneManager_goto=SceneManager.goto;SceneManager.goto=function(t){DKTools_SceneManager_goto.call(this,t),DKTools.Utils.__hideGrid()};const DKTools_Scene_Base_initialize=Scene_Base.prototype.initialize;Scene_Base.prototype.initialize=function(){DKTools_Scene_Base_initialize.call(this),this._preloader=new DKTools.Scene.Preloader};const DKTools_Scene_Base_attachReservation=Scene_Base.prototype.attachReservation;Scene_Base.prototype.attachReservation=function(){DKTools_Scene_Base_attachReservation.call(this),this._audioReservationId=this._imageReservationId,AudioManager.setDefaultReservationId(this._audioReservationId)};const DKTools_Scene_Base_detachReservation=Scene_Base.prototype.detachReservation;Scene_Base.prototype.detachReservation=function(){DKTools_Scene_Base_detachReservation.call(this),AudioManager.releaseReservation(this._audioReservationId)},Scene_Base.prototype.activate=function(){this._active=!0},Scene_Base.prototype.deactivate=function(){this._active=!1},Scene_Base.prototype.isPreloaded=function(){return this._preloader.isReady()};const DKTools_Scene_Base_isReady=Scene_Base.prototype.isReady;Scene_Base.prototype.isReady=function(){return DKTools_Scene_Base_isReady.call(this)&&this.isPreloaded()},Scene_Base.prototype.setupPreloading=function(){},Scene_Base.prototype.startPreloading=function(){this.setupPreloading(),this._preloader.start()};const DKTools_Scene_Base_terminate=Scene_Base.prototype.terminate;Scene_Base.prototype.terminate=function(){DKTools_Scene_Base_terminate.call(this),this._preloader.finish()};const DKTools_Scene_Boot_isReady=Scene_Boot.prototype.isReady;Scene_Boot.prototype.isReady=function(){return DKTools_Scene_Boot_isReady.call(this)&&DKTools.StartupManager.isReady()};const DKTools_Scene_Boot_start=Scene_Boot.prototype.start;Scene_Boot.prototype.start=function(){const t=DKToolsParam.get("Quick Start")||{};t.Enabled?(DKTools_Scene_Boot_start.call(this),DataManager.isBattleTest()||DataManager.isEventTest()||!t["Skip Saves"]&&DataManager.isAnySavefileExists()||(Scene_Base.prototype.start.call(this),SoundManager.preloadImportantSounds(),this.checkPlayerLocation(),DataManager.setupNewGame(),this.updateDocumentTitle(),SceneManager.goto(window[t["Scene Name"]]))):DKTools_Scene_Boot_start.call(this)},Scene_Map.prototype.setupPreloading=function(){Scene_Base.prototype.setupPreloading.call(this),this._setupMapPreloading()},Scene_Map.prototype._setupMapPreloading=function(){const t=DKToolsParam.get("Maps Preloading")||{};if(!t.Enabled)return;const e=$gamePlayer.isTransferring()?$gamePlayer.newMapId():$gameMap.mapId(),i=_.find(t.Maps,{"Map Id":e});i&&(DKTools.PreloadManager.setDebugging(t.Debugging),i["Audio Files"].forEach(t=>{DKTools.PreloadManager.preloadAudio({path:"audio/"+t})}),i["Image Files"].forEach(t=>{DKTools.PreloadManager.preloadImage({path:"img/"+t.Path,hue:t.Hue})}),0!==DKTools.PreloadManager.getTotal()&&(DKTools.PreloadManager.onFileLoad(()=>{Graphics.updateLoading()}),DKTools.PreloadManager.onFinish(()=>{Graphics.endLoading()}),this._preloader.add(DKTools.PreloadManager.start())))};const DKTools_Scene_Map_isReady=Scene_Map.prototype.isReady;Scene_Map.prototype.isReady=function(){return!!this.isPreloaded()&&DKTools_Scene_Map_isReady.call(this)};const DKTools_Scene_Map_terminate=Scene_Map.prototype.terminate;Scene_Map.prototype.terminate=function(){if(!SceneManager.isNextScene(Scene_Map)){const t=Date.now()+3e4;Object.values(ImageManager._imageCache._items).forEach(e=>{e.reservationId===this._imageReservationId&&(e.expiredAt=t,delete e.reservationId)}),Object.values(AudioManager._audioCache._items).forEach(e=>{e.reservationId===this._audioReservationId&&(e.expiredAt=t,delete e.reservationId)})}DKTools_Scene_Map_terminate.apply(this,arguments)};const DKTools_Game_Map_tileWidth=Game_Map.prototype.tileWidth;Game_Map.prototype.tileWidth=function(){return Tilemap.TILE_WIDTH||DKTools_Game_Map_tileWidth.call(this)};const DKTools_Game_Map_tileHeight=Game_Map.prototype.tileHeight;Game_Map.prototype.tileHeight=function(){return Tilemap.TILE_HEIGHT||DKTools_Game_Map_tileHeight.call(this)};const DKTools_Game_Interpreter_pluginCommand=Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand=function(t,e){DKTools_Game_Interpreter_pluginCommand.call(this,t,e),DKTools.PluginCommandManager.process(this,t,e)},Window_Base.prototype.processNewLine=function(t){t.x=t.left,t.y+=t.height,t.index++,t.height=this.calcTextHeight(t,!1)};const DKTools_Window_Selectable_processCursorMove=Window_Selectable.prototype.processCursorMove;Window_Selectable.prototype.processCursorMove=function(){this.isCursorMovable()&&(Input.isTriggered("home")&&this.select(0),Input.isTriggered("end")&&this.select(Math.max(0,this.maxItems()-1))),DKTools_Window_Selectable_processCursorMove.call(this)},DKToolsParam.get("Font Size","Enabled")&&(Window_Base.prototype.standardFontSize=function(){return DKToolsParam.get("Font Size","Size")},DKTools.Sprite.prototype.standardFontSize=function(){try{return Window_Base.prototype.standardFontSize.call(this)}catch(t){return DKToolsParam.get("Font Size","Size")}}),DKToolsParam.get("Line Height","Enabled")&&(Window_Base.prototype.lineHeight=function(){return DKToolsParam.get("Line Height","Height")},DKTools.Base.prototype.getLineHeight=function(){try{return Window_Base.prototype.lineHeight.call(this)}catch(t){return DKToolsParam.get("Line Height","Height")}},DKTools.Sprite.prototype.getLineHeight=function(){return DKTools.Base.prototype.getLineHeight.call(this)},DKTools.Window.prototype.getLineHeight=function(){return DKTools.Base.prototype.getLineHeight.call(this)}),DKToolsParam.get("Window Padding","Enabled")&&(Window_Base.prototype.standardPadding=function(){return DKToolsParam.get("Window Padding","Padding")})}).call(this,__webpack_require__(1)(module))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){t.exports=require("nw.gui")},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("os")},function(t,e){t.exports=require("path")}]);