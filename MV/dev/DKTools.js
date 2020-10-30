/*
Title: DKTools
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 10.0.1
Release: 23.10.2020
First release: 13.01.2016
*/

/*ru
Название: DKTools
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 10.0.1
Релиз: 23.10.2020
Первый релиз: 13.01.2016
*/

/*:
* @plugindesc v.10.0.1 Advanced project testing and various functions. Made with ♥ by DKPlugins
* @author DKPlugins
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 10.0.1
 Release: 23.10.2020
 First release: 13.01.2016

 ###===========================================================================
 ## Support
 ###===========================================================================
 Donate: https://dk-plugins.ru/donate
 Become a patron: https://www.patreon.com/dkplugins

 ###===========================================================================
 ## Links
 ###===========================================================================

 ### DKTools on DKPlugins ###
 https://dk-plugins.ru/mv/dktools/

 ### DKTools on GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Online documentation ###
 https://dk-plugins.ru/documentation/mv/DKTools/index.html

 ###===========================================================================
 ## Requirements and dependencies
 ###===========================================================================
 RPG Maker and project version 1.6+

 ###===========================================================================
 ## Functions and parameters
 ###===========================================================================

 All functions are disabled by default! Turn them on in settings!

 ###===========================================================================
 ### File system ###
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

 ## Ignored directories ##
 Only applicable for Nwjs + Stamp mode.
 Ignores specified (and nested) directories when scanning project files.

 ###===========================================================================
 ### Font size ###
 Allows you to change the font size.

 ###===========================================================================
 ### Screen resolution ###
 Allows you to change the resolution of the game.

 ###===========================================================================
 ### Tile size ###
 Allows you to change size of the tiles.
 You can also change folders for tilesets and parallax.

 ###===========================================================================
 ### Cursor graphic ###
 Allows you to change graphic of the mouse cursor.

 ###===========================================================================
 ### Max savefiles ###
 Allows you to change the maximum number of save slots.

 ###===========================================================================
 ### Initial preloading ###
 Allows you to preload audio and image files when starting the game.
 Also allows you to display a customizable progress bar,
 allowing you to see the loading progress.

 ## Important ##
 Preload only files you really need, for example, interface elements!
 Do not load images and sounds that are used on the game map!
 Use the "Maps preloading" function for this!

 ## Custom paths ##
 To preload a whole folder with resources or a file with a non-standard path,
 you must specify the "Path" in the "Text" tab instead of the "File" tab.

 ###===========================================================================
 ### Maps preloading ###
 Allows you to preload audio and image files on specific maps.

 ## Custom paths ##
 To preload a whole folder with resources or a file with a non-standard path,
 you must specify the "Path" in the "Text" tab instead of the "File" tab.

 ###===========================================================================
 ### Audio cache limit ###
 Allows you to set the size of the audio cache.
 The size of a single file is defined as duration (seconds) multiplied by sample rate.
 The cache size determines how many audio files can be cached by the game at the same time.

 ###===========================================================================
 ### Image cache limit ###
 Allows you to set the size of the image cache.
 The size of a single file is defined as width multiplied by height.
 The cache size determines how many images the game can cache at the same time.

 ###===========================================================================
 ### Line height of window ###
 Allows you to change the line height of all windows.

 ###===========================================================================
 ### Window padding ###
 Allows you to change the padding from the edge of the window for all windows.

 ###===========================================================================
 ### Mouse hover ###
 Allows you to enable selection of list items by mouse hover.

 ###===========================================================================
 ### Check updates ###
 Allows you to check for updated installed plugins from DKPlugins.
 Information about updates is displayed in the debug console (F8).
 You can also enable the display of information about new plugins.

 ###===========================================================================
 ### Debugging console ###
 Allows you to enable automatic opening of the console at the start of the game,
 or when an error occurs.
 The function works only during testing of the game.

 ###===========================================================================
 ### FPS meter ###
 Allows you to enable the display of the FPS counter at the start of the game.
 You can customize the mode (FPS or ms), theme and size of the FPS history.
 The function works only during testing of the game.

 ###===========================================================================
 ### Error logging ###
 Allows you to enable logging of errors to a text file.
 You can ask the user to send you a file if they have errors.
 By default, the file size is limited to 10 MB. You can customize the size.
 If the file size limit is exceeded, old logs will be renamed by pattern:
 day.month.year_hours.minutes.seconds_filename.
 The error information is appended to the end of the file and contains the following information:
 date, error name, error message, error stack.
 If an error occurred on the game map, additional information will be saved, for example:
 map number, event number, event page, number of the last called command and its parameters.
 If the file size limit is exceeded, the old logs will be renamed
 according to the template: day.month.year_hours.minutes.seconds_filename.

 ###===========================================================================
 ### Detailed error printing ###
 Allows you to customize the detailed display of the error.
 You can customize a message for the user, and specify a message to restart the game.
 For example, you can specify your email, and ask the user to send information about the error.
 If an error occurred on the game map, additional information will be displayed, for example:
 map number, event number, event page, number of the last called command and its parameters.

 ###===========================================================================
 ### Grid and ruler ###
 Allows you to assign a keyboard key to display the grid on the screen.
 The grid can be displayed on any screen of the game,
 also you can customize its size, color and width.
 The grid sizes toggle around by pressing the assigned key.
 When the grid is displayed, the coordinates of the mouse and lines are displayed,
 drawn with a ruler (see below)
 The function works only during testing of the game.

 ## Using the ruler ##
 To use the ruler, move the mouse to the first point of the line.
 Then hold down the middle mouse button (scroll wheel)
 and move the mouse to the end point of the line.
 Line information will be displayed next to the cursor in the following format:
 First line: line: distance between points (X start point, Y start point)
 Second line: coordinates of the mouse (end point)

 ## Ruler color ##
 If the color of the ruler is not specified in the settings,
 then a random color will be automatically selected.

 ###===========================================================================
 ### Quick load ###
 Allows you to assign a keyboard key to quickly load a game from a specified save file.
 The function works only during testing of the game.

 ###===========================================================================
 ### Quick start ###
 Allows you to change the initial screen of the game.
 The default is Scene_Title - the title screen.
 You can specify any scene for quick start, for example, the map screen is Scene_Map.
 You can also choose to ignore save files.
 If ignore save files is not enabled,
 then if there is at least one save, the title screen will be shown.

 ###===========================================================================
 ### Screenshots ###
 Allows you to assign a key to the keyboard for taking screenshots.
 You can customize the image type, quality, specify the folder and file name pattern,
 using the following templates:
 %year - Year
 %month - Month
 %day - Day
 %hours - Hours
 %minutes - Minutes
 %seconds - Seconds

 ###===========================================================================
 ### Command window on the title screen ###
 Allows you to adjust the position and width of the command window on the title screen.

 ###===========================================================================
 ### Exit command on the title screen ###
 Allows you to add an exit command to the command window on the title screen.
 The command is added to the end of the list.

 ###=========================================================================
 ## Hidden functions
 ###=========================================================================
 1. You can select the first and last item in the list using the home and end keys

 ###===========================================================================
 ## Plugin commands
 ###===========================================================================
 1. UpdateFileSystemStamp
 Scans project folders (excluding ignored directories) and builds a tree view
 of project folders and files. This is necessary so that browsers and
 mobile devices can check for the existence of folders and files.

 ###===========================================================================
 ## License and terms of use
 ###===========================================================================
 DKTools uses a third-party library "lodash": https://lodash.com/license

 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 To use the plugin in commercial projects, you must be my subscriber on patreon
 https://www.patreon.com/dkplugins

 * @param System
 * @default ---------------------------------

 * @param File System
 * @parent System
 * @desc File system parameters
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

 * @param Max Savefiles
 * @parent System
 * @desc Maximum number of save slots
 * @type struct<MaxSavefiles>
 * @default {"Enabled":"false","Max Savefiles": "20"}

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

 * @param Mouse Hover
 * @parent Windows
 * @desc Mouse hover to select a list item
 * @type struct<MouseHover>
 * @default {"Enabled":"false"}

 * @param Other
 * @default ---------------------------------

 * @param Check Updates
 * @parent Other
 * @desc Checks for updates of my plugins. Information about updates is displayed in the debugging console.
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false","Show New Plugins":"false"}

 * @param Debugging
 * @default ---------------------------------

 * @param Debugging Console
 * @parent Debugging
 * @desc Ability to open the debug console when starting a game test.
 * @type struct<DebuggingConsole>
 * @default {"Enabled":"false","Open On Error":"false"}

 * @param FPS Meter
 * @parent Debugging
 * @desc FPS Meter
 * @type struct<FPSMeter>
 * @default {"Enabled":"false","Mode":"FPS","Theme":"transparent","History":"20"}

 * @param Errors Log
 * @parent Debugging
 * @desc Errors logging to txt file
 * @type struct<ErrorsLog>
 * @default {"Enabled":"None","Filename":"errors_log.txt","File Size":"10"}

 * @param Print Detailed Error
 * @parent Debugging
 * @desc Detailed error display
 * @type struct<PrintDetailedError>
 * @default {"Enabled":"false","Error Message":"Game has encountered a bug. Please report it.","Restart Message":"Press F5 to restart the game."}

 * @param Grid
 * @text Grid And Ruler
 * @parent Debugging
 * @desc Displaying the grid on the screen
 * @type struct<Grid>
 * @default {"Enabled":"false","Key Code":"118","Grid Sizes":"[\"64\",\"48\",\"32\",\"16\"]","Grid Color":"white","Grid Width":"1","Ruler Color":"","Ruler Width":"3"}

 * @param Quick Load
 * @parent Debugging
 * @desc Quick game loading from save file
 * @type struct<QuickLoad>
 * @default {"Enabled":"false","Key Code":"117"}

 * @param Functions
 * @default ---------------------------------

 * @param Quick Start
 * @parent Functions
 * @desc Quick start
 * @type struct<QuickStart>
 * @default {"Enabled":"false","Scene Name":"Scene_Map","Skip Saves":"false"}

 * @param Screenshots
 * @parent Functions
 * @desc Screenshots
 * @type struct<Screenshots>
 * @default {"Enabled":"false","Key Code":"122","Path":"screenshots/","Filename":"%year_%month_%day_%hours_%minutes_%seconds.png","Type":"png","Quality":"0.9"}

 * @param Title Menu
 * @default ---------------------------------

 * @param Title Menu Command Window
 * @parent Title Menu
 * @desc Command window settings on the title screen
 * @type struct<TitleMenuCommandWindow>
 * @default {"Enabled":"false","X":"(Graphics.boxWidth - this.width) / 2","Y":"Graphics.boxHeight - this.height - 96","Width":"240"}

 * @param Title Menu Exit Command
 * @parent Title Menu
 * @desc Exit command
 * @type struct<TitleMenuExitCommand>
 * @default {"Enabled":"false","Command Name":"Exit"}

*/

/*:ru
* @plugindesc v.10.0.1 Расширенное тестирование проекта и различные функции. Сделано с ♥ от DKPlugins
* @author DKPlugins
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 10.0.1
 Релиз: 23.10.2020
 Первый релиз: 13.01.2016

 ###===========================================================================
 ## Поддержка
 ###===========================================================================
 Поддержать: https://dk-plugins.ru/donate
 Стать патроном: https://www.patreon.com/dkplugins

 ###===========================================================================
 ## Ссылки
 ###===========================================================================

 ### DKTools на DKPlugins ###
 https://dk-plugins.ru/mv/dktools/

 ### DKTools на GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Онлайн документация ###
 https://dk-plugins.ru/documentation/DKTools/index.html

 ###===========================================================================
 ## Требования и зависимости
 ###===========================================================================
 Версия мейкера и проекта 1.6+

 ###===========================================================================
 ## Функции и параметры
 ###===========================================================================

 Все функцию по умолчанию отключены! Включайте их в настройках плагина!

 ###===========================================================================
 ### Файловая система ###
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

 ## Игнорируемые директории ##
 Применяется только для режима Nwjs + Stamp.
 Игнорирует указанные (и вложенные) директории при сканировании файлов проекта.

 ###===========================================================================
 ### Размер шрифта ###
 Позволяет изменить размеры шрифта.

 ###===========================================================================
 ### Разрешение экрана ###
 Позволяет изменить разрешение игры.

 ###===========================================================================
 ### Размера тайла ###
 Позволяет изменить размер тайла.
 Также вы можете изменить папки для тайлсетов и паралакса.

 ###===========================================================================
 ### Графика курсора ###
 Позволяет изменить графику курсора мыши.

 ###===========================================================================
 ### Максимум файлов сохранения ###
 Позволяет изменить максимальное количество слотов сохранения.

 ###===========================================================================
 ### Начальная предзагрузка ###
 Позволяет предварительно загружать аудиофайлы и изображения при запуске игры.
 Также позволяет отображать настраиваемый прогресс бар,
 позволяя вам видеть прогресс загрузки.

 ## Важно ##
 Предзагружайте только действительно необходимые файлы,
 например, элементы интерфейса!
 Не загружайте изображения и звуки, которые используются на карте игры!
 Используйте для этого функцию предзагрузки карт!

 ## Нестандартные пути ##
 Чтобы предзагрузить целую папку с ресурсами или файл с нестандартным путем,
 необходимо указывать "Путь" во вкладке "Текст" вместо вкладки "Файл".

 ###===========================================================================
 ### Предзагрузка карт ###
 Позволяет предзагружать аудиофайлы и изображения на конкретных картах.

 ## Нестандартные пути ##
 Чтобы предзагрузить целую папку с ресурсами или файл с нестандартным путем,
 необходимо указывать "Путь" во вкладке "Текст" вместо вкладки "Файл".

 ###===========================================================================
 ### Лимит кеша аудио ###
 Позволяет задать размер кэша аудио.
 Размер одного файла определяется как длительность (секунды) умноженную на частоту дискретизации.
 Размер кэша определяет сколько аудиофайлов может быть кешировано игрой одновременно.

 ###===========================================================================
 ### Лимит кеша изображений ###
 Позволяет задать размер кэша изображений.
 Размер одного файла определяется как ширина умноженная на высоту.
 Размер кэша определяет сколько изображений может быть кешировано игрой одновременно.

 ###===========================================================================
 ### Высота строки окна ###
 Позволяет изменить высоту строки всех окон.

 ###===========================================================================
 ### Отступ окна ###
 Позволяет изменить отступ от края окна для всех окон.

 ###===========================================================================
 ### Наведение мыши ###
 Позволяет включить выбор элементов списков наведением мыши.

 ###===========================================================================
 ### Проверка обновлений ###
 Позволяет проверить наличие обновление установленных плагинов от DKPlugins.
 Информация об обновлениях выводится в отладочную консоль (F8).
 Вы также можете включить отображение информации о новых плагинах.

 ###===========================================================================
 ### Отладочная консоль ###
 Позволяет включить автоматическое открытие консоли в начале игры, либо
 при появлении ошибки.
 Функция работает только во время тестирования игры.

 ###===========================================================================
 ### Счетчик FPS ###
 Позволяет включить отображение счетчика FPS при старте игры.
 Вы можете настроить режим (FPS or ms), тему и размер истории FPS.
 Функция работает только во время тестирования игры.

 ###===========================================================================
 ### Логирование ошибок ###
 Позволяет включить логирование ошибок в текстовый файл.
 Вы можете попросить пользователя прислать вам файл, если у него возникают ошибки.
 По умолчанию размер файла ограничен 10 МБ. Вы можете настроить размер.
 При превышении лимита размера файла старые логи будут переименованы
 по шаблону: day.month.year.hours.minutes.seconds_filename.
 Информация об ошибке добавляется в конец файла и содержит следующие данные:
 дата, название ошибки, сообщение ошибки, стэк ошибки.
 Если ошибка произошла на карте игры, то будет сохранена дополнительная информация, например:
 номер карты, номер события, страница события, номер последней вызванной команды и ее параметры.

 ###===========================================================================
 ### Детальное отображение ошибок ###
 Позволяет настроить детальное отображение об ошибке.
 Вы можете настроить сообщение для пользователя, и указать сообщение для перезапуска игры.
 Например, вы можете указать вашу почту, и попросить пользователя прислать информацию об ошибке.
 Если ошибка произошла на карте игры, то будет выведена дополнительная информация, например:
 номер карты, номер события, страница события, номер последней вызванной команды и ее параметры.

 ###===========================================================================
 ### Сетка и линейка ###
 Позволяет назначить клавишу клавиатуры для отображения сетки на экране.
 Сетку можно отображать на любом экране игры,
 также вы можете настроить ее размеры, цвет и ширину.
 Размеры сетки переключаются по кругу, нажимая назначенную клавишу.
 Во время отображения сетки отображаются координаты мыши и линии,
 нарисованной с помощью линейки (см. дальше)
 Функция работает только во время тестирования игры.

 ## Использование линейки ##
 Чтобы воспользоваться линейкой, переместите мышь на первую точку линии.
 Далее зажмите серднюю клавишу мыши (колесо прокрутки),
 и переместите мышь на конечную точку линии.
 Рядом с курсором будет отображаться информация о линии в следующем формате:
 Первая строка: line: расстояние между точками (X начальной точки, Y начальной точки)
 Вторая строка: координаты мыши (конечной точки)

 ## Цвет линейки ##
 Если в настройках не указан цвет линейки, то автоматически будет выбран случайный цвет.

 ###===========================================================================
 ### Быстрая загрузка ###
 Позволяет назначить клавишу клавиатуры для быстрой загрузки игры из указанного файла сохранения.
 Функция работает только во время тестирования игры.

 ###===========================================================================
 ### Быстрый старт ###
 Позволяет изменить начальный экран игры.
 По умолчанию используется Scene_Title - титульный экран.
 Вы можете указать любую сцену для быстрого старта, например, экран карты - Scene_Map.
 Вы также можете настроить игнорирование файлов сохранения.
 Если игнорирование файлов сохранения не включено,
 то при наличии хотя бы одного сохранения будет показан титульный экран.

 ###===========================================================================
 ### Скриншоты ###
 Позволяет назначить клавишу клавиатуру для создания скриншотов.
 Вы можете настроить тип изображения, качество, указать папку и шаблон имени файла,
 используя следующие шаблоны:
 %year - Год
 %month - Месяц
 %day - День
 %hours - Часы
 %minutes - Минуты
 %seconds - Секунды

 ###===========================================================================
 ### Окно команд на титульном экране ###
 Позволяет вам настроить положение и ширину окна команд на титульном экране.

 ###===========================================================================
 ### Команда выхода на титульном экране ###
 Позволяет вам добавить команду выхода в окно команд на титульном экране.
 Команда добавляется в конец списка.

 ###=========================================================================
 ## Скрытые функции
 ###=========================================================================
 1. Вы можете выбрать первый и последний элемент списка с помощью клавиш home и end

 ###===========================================================================
 ## Команды плагина
 ###===========================================================================
 1. UpdateFileSystemStamp
 Сканирует папки проекта (за исключением игнорируемых директорий) и
 составляет древовидное представление папок и файлов проекта.
 Это необходимо, чтобы браузеры и мобильные устройства могли проверять
 существование папок и файлов.

 ###===========================================================================
 ## Лицензии и правила использования плагина
 ###===========================================================================
 DKTools использует стороннюю библиотеку "lodash": https://lodash.com/license

 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Для использования плагина в коммерческих проектах необходимо быть моим подписчиком на патреоне
 https://www.patreon.com/dkplugins

 * @param System
 * @text Система
 * @default ---------------------------------

 * @param File System
 * @text Файловая система
 * @parent System
 * @desc Параметры файловой системы
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

 * @param Mouse Hover
 * @text Выбор пунктов списка наведением мыши
 * @parent Windows
 * @desc Выбор пунктов списка при наведении мыши
 * @type struct<MouseHover>
 * @default {"Enabled":"false"}

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
 * @desc Логирование ошибок в текстовый файл
 * @type struct<ErrorsLog>
 * @default {"Enabled":"None","Filename":"errors_log.txt","File Size":"10"}

 * @param Print Detailed Error
 * @text Детальное отображение ошибок
 * @parent Debugging
 * @desc Детальное отображение ошибок
 * @type struct<PrintDetailedError>
 * @default {"Enabled":"false","Error Message":"В игре обнаружена ошибка. Пожалуйста, сообщите об этом.","Restart Message":"Нажмите F5, чтобы перезапустить игру."}

 * @param Grid
 * @text Сетка и линейка
 * @parent Debugging
 * @desc Отображение сетки на экране
 * @type struct<Grid>
 * @default {"Enabled":"false","Key Code":"118","Grid Sizes":"[\"64\",\"48\",\"32\",\"16\"]","Grid Color":"white","Grid Width":"1","Ruler Color":"","Ruler Width":"3"}

 * @param Quick Load
 * @text Быстрая загрузка
 * @parent Debugging
 * @desc Быстрая загрузка игры из файла сохранения
 * @type struct<QuickLoad>
 * @default {"Enabled":"false","Key Code":"117"}

 * @param Functions
 * @text Функции
 * @default ---------------------------------

 * @param Quick Start
 * @text Быстрый старт
 * @parent Functions
 * @desc Быстрый старт
 * @type struct<QuickStart>
 * @default {"Enabled":"false","Scene Name":"Scene_Map","Skip Saves":"false"}

 * @param Screenshots
 * @text Скриншоты
 * @parent Functions
 * @desc Скриншоты
 * @type struct<Screenshots>
 * @default {"Enabled":"false","Key Code":"122","Path":"screenshots/","Filename":"%year_%month_%day_%hours_%minutes_%seconds.png","Type":"png","Quality":"0.9"}

 * @param Title Menu
 * @text Титульный экран
 * @default ---------------------------------

 * @param Title Menu Command Window
 * @text Окно команд титульного экрана
 * @parent Title Menu
 * @desc Параметры окна команд титульного экрана
 * @type struct<TitleMenuCommandWindow>
 * @default {"Enabled":"false","X":"(Graphics.boxWidth - this.width) / 2","Y":"Graphics.boxHeight - this.height - 96","Width":"240"}

 * @param Title Menu Exit Command
 * @text Команда выхода
 * @parent Title Menu
 * @desc Команда выхода
 * @type struct<TitleMenuExitCommand>
 * @default {"Enabled":"false","Command Name":"Выход"}

*/

/*~struct~FileSystem:

 * @param Mode
 * @desc File system mode
 * @type select
 * @option Nwjs + Stamp
 * @value 0
 * @option Nwjs
 * @value 1
 * @default 0

 * @param Ignored Directories
 * @desc Ignored directories
 * @type string[]
 * @default ["node_modules"]

*/

/*~struct~FileSystem:ru

 * @param Mode
 * @text Режим работы файловой систмы
 * @desc Режим работы файловой системы
 * @type select
 * @option Nwjs + Stamp
 * @value 0
 * @option Nwjs
 * @value 1
 * @default 0

 * @param Ignored Directories
 * @text Игнорируемые директории
 * @desc Игнорируемые директории
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
 * @default true

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
 * @default true

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
 * @desc The path to the file or directory
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
 * @desc Путь к файлу или директории
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
 * @desc Maximum file size in megabytes
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
 * @desc Максимальный размер файла в мегабайтах
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

 * @param Grid Sizes
 * @desc Grid sizes
 * @type number[]
 * @min 8
 * @default ["64","48","32","16"]

 * @param Grid Color
 * @desc Grid line color in Web format
 * @default white

 * @param Grid Width
 * @desc Grid line width
 * @type number
 * @min 1
 * @default 1

 * @param Ruler Color
 * @desc Ruler color in Web format
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

 * @param Grid Sizes
 * @text Размеры сетки
 * @desc Размеры сетки
 * @type number[]
 * @min 8
 * @default ["64","48","32","16"]

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
 * @desc Цвет линейки в Web формате
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

/*~struct~MouseHover:

 * @param Enabled
 * @desc Enable mouse hover to select a list item ?
 * @type boolean
 * @default false

*/

/*~struct~MouseHover:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию выбора пункта списка наведением мыши ?
 * @type boolean
 * @default false

*/

/*~struct~TitleMenuCommandWindow:

 * @param Enabled
 * @desc Enable function to change the command window options on the title screen ?
 * @type boolean
 * @default false

 * @param X
 * @desc The X coordinate. Computed value.
 * @default (Graphics.boxWidth - this.width) / 2

 * @param Y
 * @desc The Y coordinate. Computed value.
 * @default Graphics.boxHeight - this.height - 96

 * @param Width
 * @desc The width of the window. Computed value.
 * @default 240

*/

/*~struct~TitleMenuCommandWindow:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения параметров окна команд на титульном экране ?
 * @type boolean
 * @default false

 * @param X
 * @desc Координата Х. Вычисляемое значение.
 * @default (Graphics.boxWidth - this.width) / 2

 * @param Y
 * @desc Координата Y. Вычисляемое значение.
 * @default Graphics.boxHeight - this.height - 96

 * @param Width
 * @text Ширина окна
 * @desc Ширина окна. Вычисляемое значение.
 * @default 240

*/

/*~struct~TitleMenuExitCommand:

 * @param Enabled
 * @desc Enable function to add exit command to title menu ?
 * @type boolean
 * @default false

 * @param Command Name
 * @desc Command name
 * @default Exit

*/

/*~struct~TitleMenuExitCommand:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию добавления команды выхода в титульное меню ?
 * @type boolean
 * @default false

 * @param Command Name
 * @text Название команды
 * @desc Название команды
 * @default Выход

*/

/*~struct~MaxSavefiles:

 * @param Enabled
 * @desc Enable function to change the maximum number of savefiles ?
 * @type boolean
 * @default false

 * @param Max Savefiles
 * @desc Maximum number of save files
 * @type number
 * @min 1
 * @default 20

*/

/*~struct~MaxSavefiles:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию изменения максимального количества файлов сохранения ?
 * @type boolean
 * @default false

 * @param Max Savefiles
 * @text Количество файлов сохранения
 * @desc Максимальное количество файлов сохранения
 * @type number
 * @min 1
 * @default 20

*/

(()=>{"use strict";var __webpack_modules__={372:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;module=__webpack_require__.nmd(module),window.Imported=window.Imported||{},window.Imported.DKTools="10.0.1",function(){function t(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}function e(t,e,i,n){for(var s=-1,o=null==t?0:t.length;++s<o;){var r=t[s];e(n,r,i(r),t)}return n}function i(t,e){for(var i=-1,n=null==t?0:t.length;++i<n&&!1!==e(t[i],i,t););return t}function n(t,e){for(var i=null==t?0:t.length;i--&&!1!==e(t[i],i,t););return t}function s(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(!e(t[i],i,t))return!1;return!0}function o(t,e){for(var i=-1,n=null==t?0:t.length,s=0,o=[];++i<n;){var r=t[i];e(r,i,t)&&(o[s++]=r)}return o}function r(t,e){return!(null==t||!t.length)&&-1<_(t,e,0)}function a(t,e,i){for(var n=-1,s=null==t?0:t.length;++n<s;)if(i(e,t[n]))return!0;return!1}function l(t,e){for(var i=-1,n=null==t?0:t.length,s=Array(n);++i<n;)s[i]=e(t[i],i,t);return s}function u(t,e){for(var i=-1,n=e.length,s=t.length;++i<n;)t[s+i]=e[i];return t}function c(t,e,i,n){var s=-1,o=null==t?0:t.length;for(n&&o&&(i=t[++s]);++s<o;)i=e(i,t[s],s,t);return i}function h(t,e,i,n){var s=null==t?0:t.length;for(n&&s&&(i=t[--s]);s--;)i=e(i,t[s],s,t);return i}function p(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(e(t[i],i,t))return!0;return!1}function d(t,e,i){var n;return i(t,(function(t,i,s){if(e(t,i,s))return n=i,!1})),n}function f(t,e,i,n){var s=t.length;for(i+=n?1:-1;n?i--:++i<s;)if(e(t[i],i,t))return i;return-1}function _(t,e,i){if(e==e)t:{--i;for(var n=t.length;++i<n;)if(t[i]===e){t=i;break t}t=-1}else t=f(t,m,i);return t}function g(t,e,i,n){--i;for(var s=t.length;++i<s;)if(n(t[i],e))return i;return-1}function m(t){return t!=t}function y(t,e){var i=null==t?0:t.length;return i?S(t,e)/i:W}function T(t){return function(e){return null==e?L:e[t]}}function v(t){return function(e){return null==t?L:t[e]}}function D(t,e,i,n,s){return s(t,(function(t,s,o){i=n?(n=!1,t):e(i,t,s,o)})),i}function S(t,e){for(var i,n=-1,s=t.length;++n<s;){var o=e(t[n]);o!==L&&(i=i===L?o:i+o)}return i}function w(t,e){for(var i=-1,n=Array(t);++i<t;)n[i]=e(i);return n}function K(t){return function(e){return t(e)}}function b(t,e){return l(e,(function(e){return t[e]}))}function E(t,e){return t.has(e)}function A(t,e){for(var i=-1,n=t.length;++i<n&&-1<_(e,t[i],0););return i}function O(t,e){for(var i=t.length;i--&&-1<_(e,t[i],0););return i}function I(t){return"\\"+xt[t]}function x(t){var e=-1,i=Array(t.size);return t.forEach((function(t,n){i[++e]=[n,t]})),i}function P(t,e){return function(i){return t(e(i))}}function C(t,e){for(var i=-1,n=t.length,s=0,o=[];++i<n;){var r=t[i];r!==e&&"__lodash_placeholder__"!==r||(t[i]="__lodash_placeholder__",o[s++]=i)}return o}function R(t){var e=-1,i=Array(t.size);return t.forEach((function(t){i[++e]=t})),i}function B(t){if(bt.test(t)){for(var e=wt.lastIndex=0;wt.test(t);)++e;t=e}else t=Xt(t);return t}function M(t){return bt.test(t)?t.match(wt)||[]:t.split("")}var L,F=1/0,W=NaN,j=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],U=/\b__p\+='';/g,N=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,H=/&(?:amp|lt|gt|quot|#39);/g,z=/[&<>"']/g,G=RegExp(H.source),V=RegExp(z.source),X=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,$=/<%=([\s\S]+?)%>/g,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/[\\^$.*+?()[\]{}|]/g,tt=RegExp(Q.source),et=/^\s+|\s+$/g,it=/^\s+/,nt=/\s+$/,st=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ot=/\{\n\/\* \[wrapped with (.+)\] \*/,rt=/,? & /,at=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lt=/\\(\\)?/g,ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ct=/\w*$/,ht=/^[-+]0x[0-9a-f]+$/i,pt=/^0b[01]+$/i,dt=/^\[object .+?Constructor\]$/,ft=/^0o[0-7]+$/i,_t=/^(?:0|[1-9]\d*)$/,gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,mt=/($^)/,yt=/['\n\r\u2028\u2029\\]/g,Tt="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",vt="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+Tt,Dt=RegExp("['’]","g"),St=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),wt=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])"+Tt,"g"),Kt=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",vt].join("|"),"g"),bt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Et=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,At="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Ot={};Ot["[object Float32Array]"]=Ot["[object Float64Array]"]=Ot["[object Int8Array]"]=Ot["[object Int16Array]"]=Ot["[object Int32Array]"]=Ot["[object Uint8Array]"]=Ot["[object Uint8ClampedArray]"]=Ot["[object Uint16Array]"]=Ot["[object Uint32Array]"]=!0,Ot["[object Arguments]"]=Ot["[object Array]"]=Ot["[object ArrayBuffer]"]=Ot["[object Boolean]"]=Ot["[object DataView]"]=Ot["[object Date]"]=Ot["[object Error]"]=Ot["[object Function]"]=Ot["[object Map]"]=Ot["[object Number]"]=Ot["[object Object]"]=Ot["[object RegExp]"]=Ot["[object Set]"]=Ot["[object String]"]=Ot["[object WeakMap]"]=!1;var It={};It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object DataView]"]=It["[object Boolean]"]=It["[object Date]"]=It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object Symbol]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Error]"]=It["[object Function]"]=It["[object WeakMap]"]=!1;var xt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Pt=parseFloat,Ct=parseInt,Rt="object"==typeof global&&global&&global.Object===Object&&global,Bt="object"==typeof self&&self&&self.Object===Object&&self,Mt=Rt||Bt||Function("return this")(),Lt=exports&&!exports.nodeType&&exports,Ft=Lt&&module&&!module.nodeType&&module,Wt=Ft&&Ft.exports===Lt,jt=Wt&&Rt.process,Ut=function(){try{var t=Ft&&Ft.require&&Ft.require("util").types;return t||jt&&jt.binding&&jt.binding("util")}catch(t){}}(),Nt=Ut&&Ut.isArrayBuffer,kt=Ut&&Ut.isDate,Ht=Ut&&Ut.isMap,zt=Ut&&Ut.isRegExp,Gt=Ut&&Ut.isSet,Vt=Ut&&Ut.isTypedArray,Xt=T("length"),qt=v({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),$t=v({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),Yt=v({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),Jt=function v(Tt){function vt(t){if($n(t)&&!Fr(t)&&!(t instanceof Rt)){if(t instanceof xt)return t;if(Fs.call(t,"__wrapped__"))return Dn(t)}return new xt(t)}function wt(){}function xt(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=L}function Rt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Bt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function Lt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function Ft(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function jt(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new Ft;++e<i;)this.add(t[e])}function Ut(t){this.size=(this.__data__=new Lt(t)).size}function Xt(t,e){var i,n=Fr(t),s=!n&&Lr(t),o=!n&&!s&&jr(t),r=!n&&!s&&!o&&zr(t),a=(s=(n=n||s||o||r)?w(t.length,Ps):[]).length;for(i in t)!e&&!Fs.call(t,i)||n&&("length"==i||o&&("offset"==i||"parent"==i)||r&&("buffer"==i||"byteLength"==i||"byteOffset"==i)||an(i,a))||s.push(i);return s}function Zt(t){var e=t.length;return e?t[ze(0,e-1)]:L}function Qt(t,e){return mn(vi(t),le(e,0,t.length))}function te(t){return mn(vi(t))}function ee(t,e,i){(i===L||Nn(t[e],i))&&(i!==L||e in t)||re(t,e,i)}function ie(t,e,i){var n=t[e];Fs.call(t,e)&&Nn(n,i)&&(i!==L||e in t)||re(t,e,i)}function ne(t,e){for(var i=t.length;i--;)if(Nn(t[i][0],e))return i;return-1}function se(t,e,i,n){return Lo(t,(function(t,s,o){e(n,t,i(t),o)})),n}function oe(t,e){return t&&Di(e,us(e),t)}function re(t,e,i){"__proto__"==e&&eo?eo(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}function ae(t,e){for(var i=-1,n=e.length,s=Ks(n),o=null==t;++i<n;)s[i]=o?L:as(t,e[i]);return s}function le(t,e,i){return t==t&&(i!==L&&(t=t<=i?t:i),e!==L&&(t=t>=e?t:e)),t}function ue(t,e,n,s,o,r){var a,l=1&e,u=2&e,c=4&e;if(n&&(a=o?n(t,s,o,r):n(t)),a!==L)return a;if(!qn(t))return t;if(s=Fr(t)){if(a=function(t){var e=t.length,i=new t.constructor(e);return e&&"string"==typeof t[0]&&Fs.call(t,"index")&&(i.index=t.index,i.input=t.input),i}(t),!l)return vi(t,a)}else{var h=Xo(t),p="[object Function]"==h||"[object GeneratorFunction]"==h;if(jr(t))return fi(t,l);if("[object Object]"==h||"[object Arguments]"==h||p&&!o){if(a=u||p?{}:on(t),!l)return u?function(t,e){return Di(t,Vo(t),e)}(t,function(t,e){return t&&Di(e,cs(e),t)}(a,t)):function(t,e){return Di(t,Go(t),e)}(t,oe(a,t))}else{if(!It[h])return o?t:{};a=function(t,e,i){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return _i(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return e=i?_i(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return gi(t,i);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return(e=new t.constructor(t.source,ct.exec(t))).lastIndex=t.lastIndex,e;case"[object Set]":return new n;case"[object Symbol]":return Ro?Is(Ro.call(t)):{}}}(t,h,l)}}if(r||(r=new Ut),o=r.get(t))return o;if(r.set(t,a),Hr(t))return t.forEach((function(i){a.add(ue(i,e,n,i,t,r))})),a;if(Nr(t))return t.forEach((function(i,s){a.set(s,ue(i,e,n,s,t,r))})),a;u=c?u?Yi:$i:u?cs:us;var d=s?L:u(t);return i(d||t,(function(i,s){d&&(i=t[s=i]),ie(a,s,ue(i,e,n,s,t,r))})),a}function ce(t,e,i){var n=i.length;if(null==t)return!n;for(t=Is(t);n--;){var s=i[n],o=e[s],r=t[s];if(r===L&&!(s in t)||!o(r))return!1}return!0}function he(t,e,i){if("function"!=typeof t)throw new Cs("Expected a function");return Yo((function(){t.apply(L,i)}),e)}function pe(t,e,i,n){var s=-1,o=r,u=!0,c=t.length,h=[],p=e.length;if(!c)return h;i&&(e=l(e,K(i))),n?(o=a,u=!1):200<=e.length&&(o=E,u=!1,e=new jt(e));t:for(;++s<c;){var d=t[s],f=null==i?d:i(d);d=n||0!==d?d:0;if(u&&f==f){for(var _=p;_--;)if(e[_]===f)continue t;h.push(d)}else o(e,f,n)||h.push(d)}return h}function de(t,e){var i=!0;return Lo(t,(function(t,n,s){return i=!!e(t,n,s)})),i}function fe(t,e,i){for(var n=-1,s=t.length;++n<s;){var o=t[n],r=e(o);if(null!=r&&(a===L?r==r&&!Qn(r):i(r,a)))var a=r,l=o}return l}function _e(t,e){var i=[];return Lo(t,(function(t,n,s){e(t,n,s)&&i.push(t)})),i}function ge(t,e,i,n,s){var o=-1,r=t.length;for(i||(i=rn),s||(s=[]);++o<r;){var a=t[o];0<e&&i(a)?1<e?ge(a,e-1,i,n,s):u(s,a):n||(s[s.length]=a)}return s}function me(t,e){return t&&Wo(t,e,us)}function ye(t,e){return t&&jo(t,e,us)}function Te(t,e){return o(e,(function(e){return Gn(t[e])}))}function ve(t,e){for(var i=0,n=(e=pi(e,t)).length;null!=t&&i<n;)t=t[yn(e[i++])];return i&&i==n?t:L}function De(t,e,i){return e=e(t),Fr(t)?e:u(e,i(t))}function Se(t){if(null==t)return t===L?"[object Undefined]":"[object Null]";if(to&&to in Is(t)){var e=Fs.call(t,to),i=t[to];try{t[to]=L;var n=!0}catch(t){}var s=Us.call(t);n&&(e?t[to]=i:delete t[to]),t=s}else t=Us.call(t);return t}function we(t,e){return t>e}function Ke(t,e){return null!=t&&Fs.call(t,e)}function be(t,e){return null!=t&&e in Is(t)}function Ee(t,e,i){for(var n=i?a:r,s=t[0].length,o=t.length,u=o,c=Ks(o),h=1/0,p=[];u--;){var d=t[u];u&&e&&(d=l(d,K(e))),h=fo(d.length,h),c[u]=!i&&(e||120<=s&&120<=d.length)?new jt(u&&d):L}d=t[0];var f=-1,_=c[0];t:for(;++f<s&&p.length<h;){var g=d[f],m=e?e(g):g;g=i||0!==g?g:0;if(_?!E(_,m):!n(p,m,i)){for(u=o;--u;){var y=c[u];if(y?!E(y,m):!n(t[u],m,i))continue t}_&&_.push(m),p.push(g)}}return p}function Ae(e,i,n){return null==(i=null==(e=2>(i=pi(i,e)).length?e:ve(e,Je(i,0,-1)))?e:e[yn(En(i))])?L:t(i,e,n)}function Oe(t){return $n(t)&&"[object Arguments]"==Se(t)}function Ie(t,e,i,n,s){if(t===e)return!0;if(null==t||null==e||!$n(t)&&!$n(e))return t!=t&&e!=e;t:{var o,r,a=Fr(t),l=Fr(e),u="[object Object]"==(o="[object Arguments]"==(o=a?"[object Array]":Xo(t))?"[object Object]":o);l="[object Object]"==(r="[object Arguments]"==(r=l?"[object Array]":Xo(e))?"[object Object]":r);if((r=o==r)&&jr(t)){if(!jr(e)){e=!1;break t}a=!0,u=!1}if(r&&!u)s||(s=new Ut),e=a||zr(t)?Xi(t,e,i,n,Ie,s):function(t,e,i,n,s,o,r){switch(i){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!o(new Vs(t),new Vs(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return Nn(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=x;case"[object Set]":if(a||(a=R),t.size!=e.size&&!(1&n))break;return(i=r.get(t))?i==e:(n|=2,r.set(t,e),e=Xi(a(t),a(e),n,s,o,r),r.delete(t),e);case"[object Symbol]":if(Ro)return Ro.call(t)==Ro.call(e)}return!1}(t,e,o,i,n,Ie,s);else{if(!(1&i)&&(a=u&&Fs.call(t,"__wrapped__"),o=l&&Fs.call(e,"__wrapped__"),a||o)){t=a?t.value():t,e=o?e.value():e,s||(s=new Ut),e=Ie(t,e,i,n,s);break t}if(r)e:if(s||(s=new Ut),a=1&i,o=$i(t),l=o.length,r=$i(e).length,l==r||a){for(u=l;u--;){var c=o[u];if(!(a?c in e:Fs.call(e,c))){e=!1;break e}}if((r=s.get(t))&&s.get(e))e=r==e;else{r=!0,s.set(t,e),s.set(e,t);for(var h=a;++u<l;){var p=t[c=o[u]],d=e[c];if(n)var f=a?n(d,p,c,e,t,s):n(p,d,c,t,e,s);if(f===L?p!==d&&!Ie(p,d,i,n,s):!f){r=!1;break}h||(h="constructor"==c)}r&&!h&&((i=t.constructor)!=(n=e.constructor)&&"constructor"in t&&"constructor"in e&&!("function"==typeof i&&i instanceof i&&"function"==typeof n&&n instanceof n)&&(r=!1)),s.delete(t),s.delete(e),e=r}}else e=!1;else e=!1}}return e}function xe(t,e,i,n){var s=i.length,o=s,r=!n;if(null==t)return!o;for(t=Is(t);s--;){var a=i[s];if(r&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++s<o;){var l=(a=i[s])[0],u=t[l],c=a[1];if(r&&a[2]){if(u===L&&!(l in t))return!1}else{if(a=new Ut,n)var h=n(u,c,l,t,e,a);if(h===L?!Ie(c,u,3,n,a):!h)return!1}}return!0}function Pe(t){return!(!qn(t)||js&&js in t)&&(Gn(t)?Hs:dt).test(Tn(t))}function Ce(t){return"function"==typeof t?t:null==t?ms:"object"==typeof t?Fr(t)?Fe(t[0],t[1]):Le(t):Ds(t)}function Re(t){if(!hn(t))return ho(t);var e,i=[];for(e in Is(t))Fs.call(t,e)&&"constructor"!=e&&i.push(e);return i}function Be(t,e){return t<e}function Me(t,e){var i=-1,n=kn(t)?Ks(t.length):[];return Lo(t,(function(t,s,o){n[++i]=e(t,s,o)})),n}function Le(t){var e=en(t);return 1==e.length&&e[0][2]?pn(e[0][0],e[0][1]):function(i){return i===t||xe(i,t,e)}}function Fe(t,e){return un(t)&&e==e&&!qn(e)?pn(yn(t),e):function(i){var n=as(i,t);return n===L&&n===e?ls(i,t):Ie(e,n,3)}}function We(t,e,i,n,s){t!==e&&Wo(e,(function(o,r){if(qn(o)){s||(s=new Ut);var a=s,l=fn(t,r),u=fn(e,r);if(!(f=a.get(u))){var c=(f=n?n(l,u,r+"",t,e,a):L)===L;if(c){var h=Fr(u),p=!h&&jr(u),d=!h&&!p&&zr(u),f=u;h||p||d?Fr(l)?f=l:Hn(l)?f=vi(l):p?(c=!1,f=fi(u,!0)):d?(c=!1,f=gi(u,!0)):f=[]:Jn(u)||Lr(u)?(f=l,Lr(l)?f=os(l):qn(l)&&!Gn(l)||(f=on(u))):c=!1}c&&(a.set(u,f),We(f,u,i,n,a),a.delete(u))}ee(t,r,f)}else(a=n?n(fn(t,r),o,r+"",t,e,s):L)===L&&(a=o),ee(t,r,a)}),cs)}function je(t,e){var i=t.length;if(i)return an(e+=0>e?i:0,i)?t[e]:L}function Ue(t,e,i){var n=-1;return e=l(e.length?e:[ms],K(Qi())),function(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].c;return t}(t=Me(t,(function(t,i,s){return{a:l(e,(function(e){return e(t)})),b:++n,c:t}})),(function(t,e){var n;t:{n=-1;for(var s=t.a,o=e.a,r=s.length,a=i.length;++n<r;){var l=mi(s[n],o[n]);if(l){if(n>=a){n=l;break t}n=l*("desc"==i[n]?-1:1);break t}}n=t.b-e.b}return n}))}function Ne(t,e,i){for(var n=-1,s=e.length,o={};++n<s;){var r=e[n],a=ve(t,r);i(a,r)&&$e(o,pi(r,t),a)}return o}function ke(t,e,i,n){var s=n?g:_,o=-1,r=e.length,a=t;for(t===e&&(e=vi(e)),i&&(a=l(t,K(i)));++o<r;){var u=0,c=e[o];for(c=i?i(c):c;-1<(u=s(a,c,u,n));)a!==t&&Js.call(a,u,1),Js.call(t,u,1)}return t}function He(t,e){for(var i=t?e.length:0,n=i-1;i--;){var s=e[i];if(i==n||s!==o){var o=s;an(s)?Js.call(t,s,1):oi(t,s)}}return t}function ze(t,e){return t+ro(mo()*(e-t+1))}function Ge(t,e){var i="";if(!t||1>e||9007199254740991<e)return i;do{e%2&&(i+=t),(e=ro(e/2))&&(t+=t)}while(e);return i}function Ve(t,e){return Jo(dn(t,e,ms),t+"")}function Xe(t){return Zt(ps(t))}function qe(t,e){var i=ps(t);return mn(i,le(e,0,i.length))}function $e(t,e,i,n){if(!qn(t))return t;for(var s=-1,o=(e=pi(e,t)).length,r=o-1,a=t;null!=a&&++s<o;){var l=yn(e[s]),u=i;if(s!=r){var c=a[l];(u=n?n(c,l,a):L)===L&&(u=qn(c)?c:an(e[s+1])?[]:{})}ie(a,l,u),a=a[l]}return t}function Ye(t){return mn(ps(t))}function Je(t,e,i){var n=-1,s=t.length;for(0>e&&(e=-e>s?0:s+e),0>(i=i>s?s:i)&&(i+=s),s=e>i?0:i-e>>>0,e>>>=0,i=Ks(s);++n<s;)i[n]=t[n+e];return i}function Ze(t,e){var i;return Lo(t,(function(t,n,s){return!(i=e(t,n,s))})),!!i}function Qe(t,e,i){var n=0,s=null==t?n:t.length;if("number"==typeof e&&e==e&&2147483647>=s){for(;n<s;){var o=n+s>>>1,r=t[o];null!==r&&!Qn(r)&&(i?r<=e:r<e)?n=o+1:s=o}return s}return ti(t,e,ms,i)}function ti(t,e,i,n){e=i(e);for(var s=0,o=null==t?0:t.length,r=e!=e,a=null===e,l=Qn(e),u=e===L;s<o;){var c=ro((s+o)/2),h=i(t[c]),p=h!==L,d=null===h,f=h==h,_=Qn(h);(r?n||f:u?f&&(n||p):a?f&&p&&(n||!d):l?f&&p&&!d&&(n||!_):!d&&!_&&(n?h<=e:h<e))?s=c+1:o=c}return fo(o,4294967294)}function ei(t,e){for(var i=-1,n=t.length,s=0,o=[];++i<n;){var r=t[i],a=e?e(r):r;if(!i||!Nn(a,l)){var l=a;o[s++]=0===r?0:r}}return o}function ii(t){return"number"==typeof t?t:Qn(t)?W:+t}function ni(t){if("string"==typeof t)return t;if(Fr(t))return l(t,ni)+"";if(Qn(t))return Bo?Bo.call(t):"";var e=t+"";return"0"==e&&1/t==-F?"-0":e}function si(t,e,i){var n=-1,s=r,o=t.length,l=!0,u=[],c=u;if(i)l=!1,s=a;else if(200<=o){if(s=e?null:Ho(t))return R(s);l=!1,s=E,c=new jt}else c=e?[]:u;t:for(;++n<o;){var h=t[n],p=e?e(h):h;h=i||0!==h?h:0;if(l&&p==p){for(var d=c.length;d--;)if(c[d]===p)continue t;e&&c.push(p),u.push(h)}else s(c,p,i)||(c!==u&&c.push(p),u.push(h))}return u}function oi(t,e){return null==(t=2>(e=pi(e,t)).length?t:ve(t,Je(e,0,-1)))||delete t[yn(En(e))]}function ri(t,e,i,n){for(var s=t.length,o=n?s:-1;(n?o--:++o<s)&&e(t[o],o,t););return i?Je(t,n?0:o,n?o+1:s):Je(t,n?o+1:0,n?s:o)}function ai(t,e){var i=t;return i instanceof Rt&&(i=i.value()),c(e,(function(t,e){return e.func.apply(e.thisArg,u([t],e.args))}),i)}function li(t,e,i){var n=t.length;if(2>n)return n?si(t[0]):[];for(var s=-1,o=Ks(n);++s<n;)for(var r=t[s],a=-1;++a<n;)a!=s&&(o[s]=pe(o[s]||r,t[a],e,i));return si(ge(o,1),e,i)}function ui(t,e,i){for(var n=-1,s=t.length,o=e.length,r={};++n<s;)i(r,t[n],n<o?e[n]:L);return r}function ci(t){return Hn(t)?t:[]}function hi(t){return"function"==typeof t?t:ms}function pi(t,e){return Fr(t)?t:un(t,e)?[t]:Zo(rs(t))}function di(t,e,i){var n=t.length;return i=i===L?n:i,!e&&i>=n?t:Je(t,e,i)}function fi(t,e){if(e)return t.slice();var i=t.length;i=Xs?Xs(i):new t.constructor(i);return t.copy(i),i}function _i(t){var e=new t.constructor(t.byteLength);return new Vs(e).set(new Vs(t)),e}function gi(t,e){return new t.constructor(e?_i(t.buffer):t.buffer,t.byteOffset,t.length)}function mi(t,e){if(t!==e){var i=t!==L,n=null===t,s=t==t,o=Qn(t),r=e!==L,a=null===e,l=e==e,u=Qn(e);if(!a&&!u&&!o&&t>e||o&&r&&l&&!a&&!u||n&&r&&l||!i&&l||!s)return 1;if(!n&&!o&&!u&&t<e||u&&i&&s&&!n&&!o||a&&i&&s||!r&&s||!l)return-1}return 0}function yi(t,e,i,n){var s=-1,o=t.length,r=i.length,a=-1,l=e.length,u=po(o-r,0),c=Ks(l+u);for(n=!n;++a<l;)c[a]=e[a];for(;++s<r;)(n||s<o)&&(c[i[s]]=t[s]);for(;u--;)c[a++]=t[s++];return c}function Ti(t,e,i,n){var s=-1,o=t.length,r=-1,a=i.length,l=-1,u=e.length,c=po(o-a,0),h=Ks(c+u);for(n=!n;++s<c;)h[s]=t[s];for(c=s;++l<u;)h[c+l]=e[l];for(;++r<a;)(n||s<o)&&(h[c+i[r]]=t[s++]);return h}function vi(t,e){var i=-1,n=t.length;for(e||(e=Ks(n));++i<n;)e[i]=t[i];return e}function Di(t,e,i,n){var s=!i;i||(i={});for(var o=-1,r=e.length;++o<r;){var a=e[o],l=n?n(i[a],t[a],a,i,t):L;l===L&&(l=t[a]),s?re(i,a,l):ie(i,a,l)}return i}function Si(t,i){return function(n,s){var o=Fr(n)?e:se,r=i?i():{};return o(n,t,Qi(s,2),r)}}function wi(t){return Ve((function(e,i){var n=-1,s=i.length,o=1<s?i[s-1]:L,r=2<s?i[2]:L;o=3<t.length&&"function"==typeof o?(s--,o):L;for(r&&ln(i[0],i[1],r)&&(o=3>s?L:o,s=1),e=Is(e);++n<s;)(r=i[n])&&t(e,r,n,o);return e}))}function Ki(t,e){return function(i,n){if(null==i)return i;if(!kn(i))return t(i,n);for(var s=i.length,o=e?s:-1,r=Is(i);(e?o--:++o<s)&&!1!==n(r[o],o,r););return i}}function bi(t){return function(e,i,n){for(var s=-1,o=Is(e),r=(n=n(e)).length;r--;){var a=n[t?r:++s];if(!1===i(o[a],a,o))break}return e}}function Ei(t){return function(e){e=rs(e);var i=bt.test(e)?M(e):L,n=i?i[0]:e.charAt(0);return e=i?di(i,1).join(""):e.slice(1),n[t]()+e}}function Ai(t){return function(e){return c(_s(fs(e).replace(Dt,"")),t,"")}}function Oi(t){return function(){switch((e=arguments).length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var e,i=Mo(t.prototype);return qn(e=t.apply(i,e))?e:i}}function Ii(e,i,n){var s=Oi(e);return function o(){for(var r=arguments.length,a=Ks(r),l=r,u=Zi(o);l--;)a[l]=arguments[l];return(r-=(l=3>r&&a[0]!==u&&a[r-1]!==u?[]:C(a,u)).length)<n?Ui(e,i,Ci,o.placeholder,L,a,l,L,L,n-r):t(this&&this!==Mt&&this instanceof o?s:e,this,a)}}function xi(t){return function(e,i,n){var s=Is(e);if(!kn(e)){var o=Qi(i,3);e=us(e),i=function(t){return o(s[t],t,s)}}return-1<(i=t(e,i,n))?s[o?e[i]:i]:L}}function Pi(t){return qi((function(e){var i=e.length,n=i,s=xt.prototype.thru;for(t&&e.reverse();n--;){if("function"!=typeof(r=e[n]))throw new Cs("Expected a function");if(s&&!o&&"wrapper"==Ji(r))var o=new xt([],!0)}for(n=o?n:i;++n<i;){var r,a="wrapper"==(s=Ji(r=e[n]))?zo(r):L;o=a&&cn(a[0])&&424==a[1]&&!a[4].length&&1==a[9]?o[Ji(a[0])].apply(o,a[3]):1==r.length&&cn(r)?o[s]():o.thru(r)}return function(){var t=(s=arguments)[0];if(o&&1==s.length&&Fr(t))return o.plant(t).value();for(var n=0,s=i?e[n].apply(this,s):t;++n<i;)s=e[n].call(this,s);return s}}))}function Ci(t,e,i,n,s,o,r,a,l,u){var c=128&e,h=1&e,p=2&e,d=24&e,f=512&e,_=p?L:Oi(t);return function g(){for(var m=arguments.length,y=Ks(m),T=m;T--;)y[T]=arguments[T];if(d){var v,D=Zi(g);T=y.length;for(v=0;T--;)y[T]===D&&++v}if(n&&(y=yi(y,n,s,d)),o&&(y=Ti(y,o,r,d)),m-=v,d&&m<u)return D=C(y,D),Ui(t,e,Ci,g.placeholder,i,y,D,a,l,u-m);if(D=h?i:this,T=p?D[t]:t,m=y.length,a){v=y.length;for(var S=fo(a.length,v),w=vi(y);S--;){var K=a[S];y[S]=an(K,v)?w[K]:L}}else f&&1<m&&y.reverse();return c&&l<m&&(y.length=l),this&&this!==Mt&&this instanceof g&&(T=_||Oi(T)),T.apply(D,y)}}function Ri(t,e){return function(i,n){return function(t,e,i,n){return me(t,(function(t,s,o){e(n,i(t),s,o)})),n}(i,t,e(n),{})}}function Bi(t,e){return function(i,n){var s;if(i===L&&n===L)return e;if(i!==L&&(s=i),n!==L){if(s===L)return n;"string"==typeof i||"string"==typeof n?(i=ni(i),n=ni(n)):(i=ii(i),n=ii(n)),s=t(i,n)}return s}}function Mi(e){return qi((function(i){return i=l(i,K(Qi())),Ve((function(n){var s=this;return e(i,(function(e){return t(e,s,n)}))}))}))}function Li(t,e){var i=(e=e===L?" ":ni(e)).length;return 2>i?i?Ge(e,t):e:(i=Ge(e,oo(t/B(e))),bt.test(e)?di(M(i),0,t).join(""):i.slice(0,t))}function Fi(e,i,n,s){var o=1&i,r=Oi(e);return function i(){for(var a=-1,l=arguments.length,u=-1,c=s.length,h=Ks(c+l),p=this&&this!==Mt&&this instanceof i?r:e;++u<c;)h[u]=s[u];for(;l--;)h[u++]=arguments[++a];return t(p,o?n:this,h)}}function Wi(t){return function(e,i,n){n&&"number"!=typeof n&&ln(e,i,n)&&(i=n=L),e=es(e),i===L?(i=e,e=0):i=es(i),n=n===L?e<i?1:-1:es(n);var s=-1;i=po(oo((i-e)/(n||1)),0);for(var o=Ks(i);i--;)o[t?i:++s]=e,e+=n;return o}}function ji(t){return function(e,i){return"string"==typeof e&&"string"==typeof i||(e=ss(e),i=ss(i)),t(e,i)}}function Ui(t,e,i,n,s,o,r,a,l,u){var c=8&e;return 4&(e=(e|(c?32:64))&~(c?64:32))||(e&=-4),s=[t,e,s,c?o:L,c?r:L,o=c?L:o,r=c?L:r,a,l,u],i=i.apply(L,s),cn(t)&&$o(i,s),i.placeholder=n,_n(i,t,e)}function Ni(t){var e=Os[t];return function(t,i){if(t=ss(t),i=null==i?0:fo(is(i),292)){var n=(rs(t)+"e").split("e");return+((n=(rs(n=e(n[0]+"e"+(+n[1]+i)))+"e").split("e"))[0]+"e"+(+n[1]-i))}return e(t)}}function ki(t){return function(e){var i=Xo(e);return"[object Map]"==i?x(e):"[object Set]"==i?function(t){var e=-1,i=Array(t.size);return t.forEach((function(t){i[++e]=[t,t]})),i}(e):function(t,e){return l(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function Hi(t,e,i,n,s,o,r,a){var l=2&e;if(!l&&"function"!=typeof t)throw new Cs("Expected a function");var u=n?n.length:0;if(u||(e&=-97,n=s=L),r=r===L?r:po(is(r),0),a=a===L?a:is(a),u-=s?s.length:0,64&e){var c=n,h=s;n=s=L}var p=l?L:zo(t);return o=[t,e,i,n,s,c,h,o,r,a],p&&(e=(i=o[1])|(t=p[1]),n=128==t&&8==i||128==t&&256==i&&o[7].length<=p[8]||384==t&&p[7].length<=p[8]&&8==i,131>e||n)&&(1&t&&(o[2]=p[2],e|=1&i?0:4),(i=p[3])&&(n=o[3],o[3]=n?yi(n,i,p[4]):i,o[4]=n?C(o[3],"__lodash_placeholder__"):p[4]),(i=p[5])&&(n=o[5],o[5]=n?Ti(n,i,p[6]):i,o[6]=n?C(o[5],"__lodash_placeholder__"):p[6]),(i=p[7])&&(o[7]=i),128&t&&(o[8]=null==o[8]?p[8]:fo(o[8],p[8])),null==o[9]&&(o[9]=p[9]),o[0]=p[0],o[1]=e),t=o[0],e=o[1],i=o[2],n=o[3],s=o[4],!(a=o[9]=o[9]===L?l?0:t.length:po(o[9]-u,0))&&24&e&&(e&=-25),l=e&&1!=e?8==e||16==e?Ii(t,e,a):32!=e&&33!=e||s.length?Ci.apply(L,o):Fi(t,e,i,n):function(t,e,i){var n=1&e,s=Oi(t);return function e(){return(this&&this!==Mt&&this instanceof e?s:t).apply(n?i:this,arguments)}}(t,e,i),_n((p?Uo:$o)(l,o),t,e)}function zi(t,e,i,n){return t===L||Nn(t,Bs[i])&&!Fs.call(n,i)?e:t}function Gi(t,e,i,n,s,o){return qn(t)&&qn(e)&&(o.set(e,t),We(t,e,L,Gi,o),o.delete(e)),t}function Vi(t){return Jn(t)?L:t}function Xi(t,e,i,n,s,o){var r=1&i,a=t.length;if(a!=(l=e.length)&&!(r&&l>a))return!1;if((l=o.get(t))&&o.get(e))return l==e;var l=-1,u=!0,c=2&i?new jt:L;for(o.set(t,e),o.set(e,t);++l<a;){var h=t[l],d=e[l];if(n)var f=r?n(d,h,l,e,t,o):n(h,d,l,t,e,o);if(f!==L){if(f)continue;u=!1;break}if(c){if(!p(e,(function(t,e){if(!E(c,e)&&(h===t||s(h,t,i,n,o)))return c.push(e)}))){u=!1;break}}else if(h!==d&&!s(h,d,i,n,o)){u=!1;break}}return o.delete(t),o.delete(e),u}function qi(t){return Jo(dn(t,L,Kn),t+"")}function $i(t){return De(t,us,Go)}function Yi(t){return De(t,cs,Vo)}function Ji(t){for(var e=t.name+"",i=Eo[e],n=Fs.call(Eo,e)?i.length:0;n--;){var s=i[n],o=s.func;if(null==o||o==t)return s.name}return e}function Zi(t){return(Fs.call(vt,"placeholder")?vt:t).placeholder}function Qi(){var t=(t=vt.iteratee||ys)===ys?Ce:t;return arguments.length?t(arguments[0],arguments[1]):t}function tn(t,e){var i=t.__data__,n=typeof e;return("string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?i["string"==typeof e?"string":"hash"]:i.map}function en(t){for(var e=us(t),i=e.length;i--;){var n=e[i],s=t[n];e[i]=[n,s,s==s&&!qn(s)]}return e}function nn(t,e){var i=null==t?L:t[e];return Pe(i)?i:L}function sn(t,e,i){for(var n=-1,s=(e=pi(e,t)).length,o=!1;++n<s;){var r=yn(e[n]);if(!(o=null!=t&&i(t,r)))break;t=t[r]}return o||++n!=s?o:!!(s=null==t?0:t.length)&&Xn(s)&&an(r,s)&&(Fr(t)||Lr(t))}function on(t){return"function"!=typeof t.constructor||hn(t)?{}:Mo(qs(t))}function rn(t){return Fr(t)||Lr(t)||!!(Zs&&t&&t[Zs])}function an(t,e){var i=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==i||"symbol"!=i&&_t.test(t))&&-1<t&&0==t%1&&t<e}function ln(t,e,i){if(!qn(i))return!1;var n=typeof e;return!!("number"==n?kn(i)&&an(e,i.length):"string"==n&&e in i)&&Nn(i[e],t)}function un(t,e){if(Fr(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!Qn(t))||J.test(t)||!Y.test(t)||null!=e&&t in Is(e)}function cn(t){var e=Ji(t),i=vt[e];return"function"==typeof i&&e in Rt.prototype&&(t===i||!!(e=zo(i))&&t===e[0])}function hn(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Bs)}function pn(t,e){return function(i){return null!=i&&i[t]===e&&(e!==L||t in Is(i))}}function dn(e,i,n){return i=po(i===L?e.length-1:i,0),function(){for(var s=arguments,o=-1,r=po(s.length-i,0),a=Ks(r);++o<r;)a[o]=s[i+o];for(o=-1,r=Ks(i+1);++o<i;)r[o]=s[o];return r[i]=n(a),t(e,this,r)}}function fn(t,e){if("__proto__"!=e)return t[e]}function _n(t,e,i){var n=e+"";e=Jo;var s,o=vn;return i=o(s=(s=n.match(ot))?s[1].split(rt):[],i),(o=i.length)&&(i[s=o-1]=(1<o?"& ":"")+i[s],i=i.join(2<o?", ":" "),n=n.replace(st,"{\n/* [wrapped with "+i+"] */\n")),e(t,n)}function gn(t){var e=0,i=0;return function(){var n=_o(),s=16-(n-i);if(i=n,0<s){if(800<=++e)return arguments[0]}else e=0;return t.apply(L,arguments)}}function mn(t,e){var i=-1,n=(s=t.length)-1;for(e=e===L?s:e;++i<e;){var s,o=t[s=ze(i,n)];t[s]=t[i],t[i]=o}return t.length=e,t}function yn(t){if("string"==typeof t||Qn(t))return t;var e=t+"";return"0"==e&&1/t==-F?"-0":e}function Tn(t){if(null!=t){try{return Ls.call(t)}catch(t){}return t+""}return""}function vn(t,e){return i(j,(function(i){var n="_."+i[0];e&i[1]&&!r(t,n)&&t.push(n)})),t.sort()}function Dn(t){if(t instanceof Rt)return t.clone();var e=new xt(t.__wrapped__,t.__chain__);return e.__actions__=vi(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Sn(t,e,i){var n=null==t?0:t.length;return n?(0>(i=null==i?0:is(i))&&(i=po(n+i,0)),f(t,Qi(e,3),i)):-1}function wn(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=n-1;return i!==L&&(s=is(i),s=0>i?po(n+s,0):fo(s,n-1)),f(t,Qi(e,3),s,!0)}function Kn(t){return null!=t&&t.length?ge(t,1):[]}function bn(t){return t&&t.length?t[0]:L}function En(t){var e=null==t?0:t.length;return e?t[e-1]:L}function An(t,e){return t&&t.length&&e&&e.length?ke(t,e):t}function On(t){return null==t?t:yo.call(t)}function In(t){if(!t||!t.length)return[];var e=0;return t=o(t,(function(t){if(Hn(t))return e=po(t.length,e),!0})),w(e,(function(e){return l(t,T(e))}))}function xn(e,i){if(!e||!e.length)return[];var n=In(e);return null==i?n:l(n,(function(e){return t(i,L,e)}))}function Pn(t){return(t=vt(t)).__chain__=!0,t}function Cn(t,e){return e(t)}function Rn(t,e){return(Fr(t)?i:Lo)(t,Qi(e,3))}function Bn(t,e){return(Fr(t)?n:Fo)(t,Qi(e,3))}function Mn(t,e){return(Fr(t)?l:Me)(t,Qi(e,3))}function Ln(t,e,i){return e=i?L:e,e=t&&null==e?t.length:e,Hi(t,128,L,L,L,L,e)}function Fn(t,e){var i;if("function"!=typeof e)throw new Cs("Expected a function");return t=is(t),function(){return 0<--t&&(i=e.apply(this,arguments)),1>=t&&(e=L),i}}function Wn(t,e,i){function n(e){var i=l,n=u;return l=u=L,f=e,h=t.apply(n,i)}function s(t){var i=t-d;return t-=f,d===L||i>=e||0>i||g&&t>=c}function o(){var t=br();if(s(t))return r(t);var i,n=Yo;i=t-f,t=e-(t-d),i=g?fo(t,c-i):t,p=n(o,i)}function r(t){return p=L,m&&l?n(t):(l=u=L,h)}function a(){var t=br(),i=s(t);if(l=arguments,u=this,d=t,i){if(p===L)return f=t=d,p=Yo(o,e),_?n(t):h;if(g)return p=Yo(o,e),n(d)}return p===L&&(p=Yo(o,e)),h}var l,u,c,h,p,d,f=0,_=!1,g=!1,m=!0;if("function"!=typeof t)throw new Cs("Expected a function");return e=ss(e)||0,qn(i)&&(_=!!i.leading,c=(g="maxWait"in i)?po(ss(i.maxWait)||0,e):c,m="trailing"in i?!!i.trailing:m),a.cancel=function(){p!==L&&ko(p),f=0,l=d=u=p=L},a.flush=function(){return p===L?h:r(br())},a}function jn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new Cs("Expected a function");var i=function(){var n=arguments,s=e?e.apply(this,n):n[0],o=i.cache;return o.has(s)?o.get(s):(n=t.apply(this,n),i.cache=o.set(s,n)||o,n)};return i.cache=new(jn.Cache||Ft),i}function Un(t){if("function"!=typeof t)throw new Cs("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Nn(t,e){return t===e||t!=t&&e!=e}function kn(t){return null!=t&&Xn(t.length)&&!Gn(t)}function Hn(t){return $n(t)&&kn(t)}function zn(t){if(!$n(t))return!1;var e=Se(t);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!Jn(t)}function Gn(t){return!!qn(t)&&("[object Function]"==(t=Se(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function Vn(t){return"number"==typeof t&&t==is(t)}function Xn(t){return"number"==typeof t&&-1<t&&0==t%1&&9007199254740991>=t}function qn(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function $n(t){return null!=t&&"object"==typeof t}function Yn(t){return"number"==typeof t||$n(t)&&"[object Number]"==Se(t)}function Jn(t){return!(!$n(t)||"[object Object]"!=Se(t))&&(null===(t=qs(t))||"function"==typeof(t=Fs.call(t,"constructor")&&t.constructor)&&t instanceof t&&Ls.call(t)==Ns)}function Zn(t){return"string"==typeof t||!Fr(t)&&$n(t)&&"[object String]"==Se(t)}function Qn(t){return"symbol"==typeof t||$n(t)&&"[object Symbol]"==Se(t)}function ts(t){if(!t)return[];if(kn(t))return Zn(t)?M(t):vi(t);if(Qs&&t[Qs]){t=t[Qs]();for(var e,i=[];!(e=t.next()).done;)i.push(e.value);return i}return("[object Map]"==(e=Xo(t))?x:"[object Set]"==e?R:ps)(t)}function es(t){return t?(t=ss(t))===F||t===-F?17976931348623157e292*(0>t?-1:1):t==t?t:0:0===t?t:0}function is(t){var e=(t=es(t))%1;return t==t?e?t-e:t:0}function ns(t){return t?le(is(t),0,4294967295):0}function ss(t){if("number"==typeof t)return t;if(Qn(t))return W;if(qn(t)&&(t=qn(t="function"==typeof t.valueOf?t.valueOf():t)?t+"":t),"string"!=typeof t)return 0===t?t:+t;t=t.replace(et,"");var e=pt.test(t);return e||ft.test(t)?Ct(t.slice(2),e?2:8):ht.test(t)?W:+t}function os(t){return Di(t,cs(t))}function rs(t){return null==t?"":ni(t)}function as(t,e,i){return(t=null==t?L:ve(t,e))===L?i:t}function ls(t,e){return null!=t&&sn(t,e,be)}function us(t){return kn(t)?Xt(t):Re(t)}function cs(t){if(kn(t))t=Xt(t,!0);else if(qn(t)){var e,i=hn(t),n=[];for(e in t)("constructor"!=e||!i&&Fs.call(t,e))&&n.push(e);t=n}else{if(e=[],null!=t)for(i in Is(t))e.push(i);t=e}return t}function hs(t,e){if(null==t)return{};var i=l(Yi(t),(function(t){return[t]}));return e=Qi(e),Ne(t,i,(function(t,i){return e(t,i[0])}))}function ps(t){return null==t?[]:b(t,us(t))}function ds(t){return ga(rs(t).toLowerCase())}function fs(t){return(t=rs(t))&&t.replace(gt,qt).replace(St,"")}function _s(t,e,i){return t=rs(t),(e=i?L:e)===L?Et.test(t)?t.match(Kt)||[]:t.match(at)||[]:t.match(e)||[]}function gs(t){return function(){return t}}function ms(t){return t}function ys(t){return Ce("function"==typeof t?t:ue(t,1))}function Ts(t,e,n){var s=us(e),o=Te(e,s);null!=n||qn(e)&&(o.length||!s.length)||(n=e,e=t,t=this,o=Te(e,us(e)));var r=!(qn(n)&&"chain"in n&&!n.chain),a=Gn(t);return i(o,(function(i){var n=e[i];t[i]=n,a&&(t.prototype[i]=function(){var e=this.__chain__;if(r||e){var i=t(this.__wrapped__);return(i.__actions__=vi(this.__actions__)).push({func:n,args:arguments,thisArg:t}),i.__chain__=e,i}return n.apply(t,u([this.value()],arguments))})})),t}function vs(){}function Ds(t){return un(t)?T(yn(t)):function(t){return function(e){return ve(e,t)}}(t)}function Ss(){return[]}function ws(){return!1}var Ks=(Tt=null==Tt?Mt:Jt.defaults(Mt.Object(),Tt,Jt.pick(Mt,At))).Array,bs=Tt.Date,Es=Tt.Error,As=Tt.Function,Os=Tt.Math,Is=Tt.Object,xs=Tt.RegExp,Ps=Tt.String,Cs=Tt.TypeError,Rs=Ks.prototype,Bs=Is.prototype,Ms=Tt["__core-js_shared__"],Ls=As.prototype.toString,Fs=Bs.hasOwnProperty,Ws=0,js=function(){var t=/[^.]+$/.exec(Ms&&Ms.keys&&Ms.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Us=Bs.toString,Ns=Ls.call(Is),ks=Mt._,Hs=xs("^"+Ls.call(Fs).replace(Q,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),zs=Wt?Tt.Buffer:L,Gs=Tt.Symbol,Vs=Tt.Uint8Array,Xs=zs?zs.allocUnsafe:L,qs=P(Is.getPrototypeOf,Is),$s=Is.create,Ys=Bs.propertyIsEnumerable,Js=Rs.splice,Zs=Gs?Gs.isConcatSpreadable:L,Qs=Gs?Gs.iterator:L,to=Gs?Gs.toStringTag:L,eo=function(){try{var t=nn(Is,"defineProperty");return t({},"",{}),t}catch(t){}}(),io=Tt.clearTimeout!==Mt.clearTimeout&&Tt.clearTimeout,no=bs&&bs.now!==Mt.Date.now&&bs.now,so=Tt.setTimeout!==Mt.setTimeout&&Tt.setTimeout,oo=Os.ceil,ro=Os.floor,ao=Is.getOwnPropertySymbols,lo=zs?zs.isBuffer:L,uo=Tt.isFinite,co=Rs.join,ho=P(Is.keys,Is),po=Os.max,fo=Os.min,_o=bs.now,go=Tt.parseInt,mo=Os.random,yo=Rs.reverse,To=nn(Tt,"DataView"),vo=nn(Tt,"Map"),Do=nn(Tt,"Promise"),So=nn(Tt,"Set"),wo=nn(Tt,"WeakMap"),Ko=nn(Is,"create"),bo=wo&&new wo,Eo={},Ao=Tn(To),Oo=Tn(vo),Io=Tn(Do),xo=Tn(So),Po=Tn(wo),Co=Gs?Gs.prototype:L,Ro=Co?Co.valueOf:L,Bo=Co?Co.toString:L,Mo=function(){function t(){}return function(e){return qn(e)?$s?$s(e):(t.prototype=e,e=new t,t.prototype=L,e):{}}}();vt.templateSettings={escape:X,evaluate:q,interpolate:$,variable:"",imports:{_:vt}},vt.prototype=wt.prototype,vt.prototype.constructor=vt,xt.prototype=Mo(wt.prototype),xt.prototype.constructor=xt,Rt.prototype=Mo(wt.prototype),Rt.prototype.constructor=Rt,Bt.prototype.clear=function(){this.__data__=Ko?Ko(null):{},this.size=0},Bt.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},Bt.prototype.get=function(t){var e=this.__data__;return Ko?"__lodash_hash_undefined__"===(t=e[t])?L:t:Fs.call(e,t)?e[t]:L},Bt.prototype.has=function(t){var e=this.__data__;return Ko?e[t]!==L:Fs.call(e,t)},Bt.prototype.set=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Ko&&e===L?"__lodash_hash_undefined__":e,this},Lt.prototype.clear=function(){this.__data__=[],this.size=0},Lt.prototype.delete=function(t){var e=this.__data__;return!(0>(t=ne(e,t))||(t==e.length-1?e.pop():Js.call(e,t,1),--this.size,0))},Lt.prototype.get=function(t){var e=this.__data__;return 0>(t=ne(e,t))?L:e[t][1]},Lt.prototype.has=function(t){return-1<ne(this.__data__,t)},Lt.prototype.set=function(t,e){var i=this.__data__,n=ne(i,t);return 0>n?(++this.size,i.push([t,e])):i[n][1]=e,this},Ft.prototype.clear=function(){this.size=0,this.__data__={hash:new Bt,map:new(vo||Lt),string:new Bt}},Ft.prototype.delete=function(t){return t=tn(this,t).delete(t),this.size-=t?1:0,t},Ft.prototype.get=function(t){return tn(this,t).get(t)},Ft.prototype.has=function(t){return tn(this,t).has(t)},Ft.prototype.set=function(t,e){var i=tn(this,t),n=i.size;return i.set(t,e),this.size+=i.size==n?0:1,this},jt.prototype.add=jt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},jt.prototype.has=function(t){return this.__data__.has(t)},Ut.prototype.clear=function(){this.__data__=new Lt,this.size=0},Ut.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},Ut.prototype.get=function(t){return this.__data__.get(t)},Ut.prototype.has=function(t){return this.__data__.has(t)},Ut.prototype.set=function(t,e){var i=this.__data__;if(i instanceof Lt){var n=i.__data__;if(!vo||199>n.length)return n.push([t,e]),this.size=++i.size,this;i=this.__data__=new Ft(n)}return i.set(t,e),this.size=i.size,this};var Lo=Ki(me),Fo=Ki(ye,!0),Wo=bi(),jo=bi(!0),Uo=bo?function(t,e){return bo.set(t,e),t}:ms,No=eo?function(t,e){return eo(t,"toString",{configurable:!0,enumerable:!1,value:gs(e),writable:!0})}:ms,ko=io||function(t){return Mt.clearTimeout(t)},Ho=So&&1/R(new So([,-0]))[1]==F?function(t){return new So(t)}:vs,zo=bo?function(t){return bo.get(t)}:vs,Go=ao?function(t){return null==t?[]:(t=Is(t),o(ao(t),(function(e){return Ys.call(t,e)})))}:Ss,Vo=ao?function(t){for(var e=[];t;)u(e,Go(t)),t=qs(t);return e}:Ss,Xo=Se;(To&&"[object DataView]"!=Xo(new To(new ArrayBuffer(1)))||vo&&"[object Map]"!=Xo(new vo)||Do&&"[object Promise]"!=Xo(Do.resolve())||So&&"[object Set]"!=Xo(new So)||wo&&"[object WeakMap]"!=Xo(new wo))&&(Xo=function(t){var e=Se(t);if(t=(t="[object Object]"==e?t.constructor:L)?Tn(t):"")switch(t){case Ao:return"[object DataView]";case Oo:return"[object Map]";case Io:return"[object Promise]";case xo:return"[object Set]";case Po:return"[object WeakMap]"}return e});var qo=Ms?Gn:ws,$o=gn(Uo),Yo=so||function(t,e){return Mt.setTimeout(t,e)},Jo=gn(No),Zo=function(t){var e=(t=jn(t,(function(t){return 500===e.size&&e.clear(),t}))).cache;return t}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Z,(function(t,i,n,s){e.push(n?s.replace(lt,"$1"):i||t)})),e})),Qo=Ve((function(t,e){return Hn(t)?pe(t,ge(e,1,Hn,!0)):[]})),tr=Ve((function(t,e){var i=En(e);return Hn(i)&&(i=L),Hn(t)?pe(t,ge(e,1,Hn,!0),Qi(i,2)):[]})),er=Ve((function(t,e){var i=En(e);return Hn(i)&&(i=L),Hn(t)?pe(t,ge(e,1,Hn,!0),L,i):[]})),ir=Ve((function(t){var e=l(t,ci);return e.length&&e[0]===t[0]?Ee(e):[]})),nr=Ve((function(t){var e=En(t),i=l(t,ci);return e===En(i)?e=L:i.pop(),i.length&&i[0]===t[0]?Ee(i,Qi(e,2)):[]})),sr=Ve((function(t){var e=En(t),i=l(t,ci);return(e="function"==typeof e?e:L)&&i.pop(),i.length&&i[0]===t[0]?Ee(i,L,e):[]})),or=Ve(An),rr=qi((function(t,e){var i=null==t?0:t.length,n=ae(t,e);return He(t,l(e,(function(t){return an(t,i)?+t:t})).sort(mi)),n})),ar=Ve((function(t){return si(ge(t,1,Hn,!0))})),lr=Ve((function(t){var e=En(t);return Hn(e)&&(e=L),si(ge(t,1,Hn,!0),Qi(e,2))})),ur=Ve((function(t){var e="function"==typeof(e=En(t))?e:L;return si(ge(t,1,Hn,!0),L,e)})),cr=Ve((function(t,e){return Hn(t)?pe(t,e):[]})),hr=Ve((function(t){return li(o(t,Hn))})),pr=Ve((function(t){var e=En(t);return Hn(e)&&(e=L),li(o(t,Hn),Qi(e,2))})),dr=Ve((function(t){var e="function"==typeof(e=En(t))?e:L;return li(o(t,Hn),L,e)})),fr=Ve(In),_r=Ve((function(t){var e="function"==typeof(e=1<(e=t.length)?t[e-1]:L)?(t.pop(),e):L;return xn(t,e)})),gr=qi((function(t){var e=t.length,i=e?t[0]:0,n=this.__wrapped__,s=function(e){return ae(e,t)};return!(1<e||this.__actions__.length)&&n instanceof Rt&&an(i)?((n=n.slice(i,+i+(e?1:0))).__actions__.push({func:Cn,args:[s],thisArg:L}),new xt(n,this.__chain__).thru((function(t){return e&&!t.length&&t.push(L),t}))):this.thru(s)})),mr=Si((function(t,e,i){Fs.call(t,i)?++t[i]:re(t,i,1)})),yr=xi(Sn),Tr=xi(wn),vr=Si((function(t,e,i){Fs.call(t,i)?t[i].push(e):re(t,i,[e])})),Dr=Ve((function(e,i,n){var s=-1,o="function"==typeof i,r=kn(e)?Ks(e.length):[];return Lo(e,(function(e){r[++s]=o?t(i,e,n):Ae(e,i,n)})),r})),Sr=Si((function(t,e,i){re(t,i,e)})),wr=Si((function(t,e,i){t[i?0:1].push(e)}),(function(){return[[],[]]})),Kr=Ve((function(t,e){if(null==t)return[];var i=e.length;return 1<i&&ln(t,e[0],e[1])?e=[]:2<i&&ln(e[0],e[1],e[2])&&(e=[e[0]]),Ue(t,ge(e,1),[])})),br=no||function(){return Mt.Date.now()},Er=Ve((function(t,e,i){var n=1;if(i.length){var s=C(i,Zi(Er));n=32|n}return Hi(t,n,e,i,s)})),Ar=Ve((function(t,e,i){var n=3;if(i.length){var s=C(i,Zi(Ar));n=32|n}return Hi(e,n,t,i,s)})),Or=Ve((function(t,e){return he(t,1,e)})),Ir=Ve((function(t,e,i){return he(t,ss(e)||0,i)}));jn.Cache=Ft;var xr=Ve((function(e,i){var n=(i=1==i.length&&Fr(i[0])?l(i[0],K(Qi())):l(ge(i,1),K(Qi()))).length;return Ve((function(s){for(var o=-1,r=fo(s.length,n);++o<r;)s[o]=i[o].call(this,s[o]);return t(e,this,s)}))})),Pr=Ve((function(t,e){return Hi(t,32,L,e,C(e,Zi(Pr)))})),Cr=Ve((function(t,e){return Hi(t,64,L,e,C(e,Zi(Cr)))})),Rr=qi((function(t,e){return Hi(t,256,L,L,L,e)})),Br=ji(we),Mr=ji((function(t,e){return t>=e})),Lr=Oe(function(){return arguments}())?Oe:function(t){return $n(t)&&Fs.call(t,"callee")&&!Ys.call(t,"callee")},Fr=Ks.isArray,Wr=Nt?K(Nt):function(t){return $n(t)&&"[object ArrayBuffer]"==Se(t)},jr=lo||ws,Ur=kt?K(kt):function(t){return $n(t)&&"[object Date]"==Se(t)},Nr=Ht?K(Ht):function(t){return $n(t)&&"[object Map]"==Xo(t)},kr=zt?K(zt):function(t){return $n(t)&&"[object RegExp]"==Se(t)},Hr=Gt?K(Gt):function(t){return $n(t)&&"[object Set]"==Xo(t)},zr=Vt?K(Vt):function(t){return $n(t)&&Xn(t.length)&&!!Ot[Se(t)]},Gr=ji(Be),Vr=ji((function(t,e){return t<=e})),Xr=wi((function(t,e){if(hn(e)||kn(e))Di(e,us(e),t);else for(var i in e)Fs.call(e,i)&&ie(t,i,e[i])})),qr=wi((function(t,e){Di(e,cs(e),t)})),$r=wi((function(t,e,i,n){Di(e,cs(e),t,n)})),Yr=wi((function(t,e,i,n){Di(e,us(e),t,n)})),Jr=qi(ae),Zr=Ve((function(t,e){t=Is(t);var i=-1,n=e.length;for((s=2<n?e[2]:L)&&ln(e[0],e[1],s)&&(n=1);++i<n;)for(var s,o=cs(s=e[i]),r=-1,a=o.length;++r<a;){var l=o[r],u=t[l];(u===L||Nn(u,Bs[l])&&!Fs.call(t,l))&&(t[l]=s[l])}return t})),Qr=Ve((function(e){return e.push(L,Gi),t(sa,L,e)})),ta=Ri((function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=Us.call(e)),t[e]=i}),gs(ms)),ea=Ri((function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=Us.call(e)),Fs.call(t,e)?t[e].push(i):t[e]=[i]}),Qi),ia=Ve(Ae),na=wi((function(t,e,i){We(t,e,i)})),sa=wi((function(t,e,i,n){We(t,e,i,n)})),oa=qi((function(t,e){var i={};if(null==t)return i;var n=!1;e=l(e,(function(e){return e=pi(e,t),n||(n=1<e.length),e})),Di(t,Yi(t),i),n&&(i=ue(i,7,Vi));for(var s=e.length;s--;)oi(i,e[s]);return i})),ra=qi((function(t,e){return null==t?{}:function(t,e){return Ne(t,e,(function(e,i){return ls(t,i)}))}(t,e)})),aa=ki(us),la=ki(cs),ua=Ai((function(t,e,i){return e=e.toLowerCase(),t+(i?ds(e):e)})),ca=Ai((function(t,e,i){return t+(i?"-":"")+e.toLowerCase()})),ha=Ai((function(t,e,i){return t+(i?" ":"")+e.toLowerCase()})),pa=Ei("toLowerCase"),da=Ai((function(t,e,i){return t+(i?"_":"")+e.toLowerCase()})),fa=Ai((function(t,e,i){return t+(i?" ":"")+ga(e)})),_a=Ai((function(t,e,i){return t+(i?" ":"")+e.toUpperCase()})),ga=Ei("toUpperCase"),ma=Ve((function(e,i){try{return t(e,L,i)}catch(t){return zn(t)?t:new Es(t)}})),ya=qi((function(t,e){return i(e,(function(e){e=yn(e),re(t,e,Er(t[e],t))})),t})),Ta=Pi(),va=Pi(!0),Da=Ve((function(t,e){return function(i){return Ae(i,t,e)}})),Sa=Ve((function(t,e){return function(i){return Ae(t,i,e)}})),wa=Mi(l),Ka=Mi(s),ba=Mi(p),Ea=Wi(),Aa=Wi(!0),Oa=Bi((function(t,e){return t+e}),0),Ia=Ni("ceil"),xa=Bi((function(t,e){return t/e}),1),Pa=Ni("floor"),Ca=Bi((function(t,e){return t*e}),1),Ra=Ni("round"),Ba=Bi((function(t,e){return t-e}),0);return vt.after=function(t,e){if("function"!=typeof e)throw new Cs("Expected a function");return t=is(t),function(){if(1>--t)return e.apply(this,arguments)}},vt.ary=Ln,vt.assign=Xr,vt.assignIn=qr,vt.assignInWith=$r,vt.assignWith=Yr,vt.at=Jr,vt.before=Fn,vt.bind=Er,vt.bindAll=ya,vt.bindKey=Ar,vt.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Fr(t)?t:[t]},vt.chain=Pn,vt.chunk=function(t,e,i){if(e=(i?ln(t,e,i):e===L)?1:po(is(e),0),!(i=null==t?0:t.length)||1>e)return[];for(var n=0,s=0,o=Ks(oo(i/e));n<i;)o[s++]=Je(t,n,n+=e);return o},vt.compact=function(t){for(var e=-1,i=null==t?0:t.length,n=0,s=[];++e<i;){var o=t[e];o&&(s[n++]=o)}return s},vt.concat=function(){var t=arguments.length;if(!t)return[];for(var e=Ks(t-1),i=arguments[0];t--;)e[t-1]=arguments[t];return u(Fr(i)?vi(i):[i],ge(e,1))},vt.cond=function(e){var i=null==e?0:e.length,n=Qi();return e=i?l(e,(function(t){if("function"!=typeof t[1])throw new Cs("Expected a function");return[n(t[0]),t[1]]})):[],Ve((function(n){for(var s=-1;++s<i;){var o=e[s];if(t(o[0],this,n))return t(o[1],this,n)}}))},vt.conforms=function(t){return function(t){var e=us(t);return function(i){return ce(i,t,e)}}(ue(t,1))},vt.constant=gs,vt.countBy=mr,vt.create=function(t,e){var i=Mo(t);return null==e?i:oe(i,e)},vt.curry=function t(e,i,n){return(e=Hi(e,8,L,L,L,L,L,i=n?L:i)).placeholder=t.placeholder,e},vt.curryRight=function t(e,i,n){return(e=Hi(e,16,L,L,L,L,L,i=n?L:i)).placeholder=t.placeholder,e},vt.debounce=Wn,vt.defaults=Zr,vt.defaultsDeep=Qr,vt.defer=Or,vt.delay=Ir,vt.difference=Qo,vt.differenceBy=tr,vt.differenceWith=er,vt.drop=function(t,e,i){var n=null==t?0:t.length;return n?Je(t,0>(e=i||e===L?1:is(e))?0:e,n):[]},vt.dropRight=function(t,e,i){var n=null==t?0:t.length;return n?Je(t,0,0>(e=n-(e=i||e===L?1:is(e)))?0:e):[]},vt.dropRightWhile=function(t,e){return t&&t.length?ri(t,Qi(e,3),!0,!0):[]},vt.dropWhile=function(t,e){return t&&t.length?ri(t,Qi(e,3),!0):[]},vt.fill=function(t,e,i,n){var s=null==t?0:t.length;if(!s)return[];for(i&&"number"!=typeof i&&ln(t,e,i)&&(i=0,n=s),s=t.length,0>(i=is(i))&&(i=-i>s?0:s+i),0>(n=n===L||n>s?s:is(n))&&(n+=s),n=i>n?0:ns(n);i<n;)t[i++]=e;return t},vt.filter=function(t,e){return(Fr(t)?o:_e)(t,Qi(e,3))},vt.flatMap=function(t,e){return ge(Mn(t,e),1)},vt.flatMapDeep=function(t,e){return ge(Mn(t,e),F)},vt.flatMapDepth=function(t,e,i){return i=i===L?1:is(i),ge(Mn(t,e),i)},vt.flatten=Kn,vt.flattenDeep=function(t){return null!=t&&t.length?ge(t,F):[]},vt.flattenDepth=function(t,e){return null!=t&&t.length?ge(t,e=e===L?1:is(e)):[]},vt.flip=function(t){return Hi(t,512)},vt.flow=Ta,vt.flowRight=va,vt.fromPairs=function(t){for(var e=-1,i=null==t?0:t.length,n={};++e<i;){var s=t[e];n[s[0]]=s[1]}return n},vt.functions=function(t){return null==t?[]:Te(t,us(t))},vt.functionsIn=function(t){return null==t?[]:Te(t,cs(t))},vt.groupBy=vr,vt.initial=function(t){return null!=t&&t.length?Je(t,0,-1):[]},vt.intersection=ir,vt.intersectionBy=nr,vt.intersectionWith=sr,vt.invert=ta,vt.invertBy=ea,vt.invokeMap=Dr,vt.iteratee=ys,vt.keyBy=Sr,vt.keys=us,vt.keysIn=cs,vt.map=Mn,vt.mapKeys=function(t,e){var i={};return e=Qi(e,3),me(t,(function(t,n,s){re(i,e(t,n,s),t)})),i},vt.mapValues=function(t,e){var i={};return e=Qi(e,3),me(t,(function(t,n,s){re(i,n,e(t,n,s))})),i},vt.matches=function(t){return Le(ue(t,1))},vt.matchesProperty=function(t,e){return Fe(t,ue(e,1))},vt.memoize=jn,vt.merge=na,vt.mergeWith=sa,vt.method=Da,vt.methodOf=Sa,vt.mixin=Ts,vt.negate=Un,vt.nthArg=function(t){return t=is(t),Ve((function(e){return je(e,t)}))},vt.omit=oa,vt.omitBy=function(t,e){return hs(t,Un(Qi(e)))},vt.once=function(t){return Fn(2,t)},vt.orderBy=function(t,e,i,n){return null==t?[]:(Fr(e)||(e=null==e?[]:[e]),Fr(i=n?L:i)||(i=null==i?[]:[i]),Ue(t,e,i))},vt.over=wa,vt.overArgs=xr,vt.overEvery=Ka,vt.overSome=ba,vt.partial=Pr,vt.partialRight=Cr,vt.partition=wr,vt.pick=ra,vt.pickBy=hs,vt.property=Ds,vt.propertyOf=function(t){return function(e){return null==t?L:ve(t,e)}},vt.pull=or,vt.pullAll=An,vt.pullAllBy=function(t,e,i){return t&&t.length&&e&&e.length?ke(t,e,Qi(i,2)):t},vt.pullAllWith=function(t,e,i){return t&&t.length&&e&&e.length?ke(t,e,L,i):t},vt.pullAt=rr,vt.range=Ea,vt.rangeRight=Aa,vt.rearg=Rr,vt.reject=function(t,e){return(Fr(t)?o:_e)(t,Un(Qi(e,3)))},vt.remove=function(t,e){var i=[];if(!t||!t.length)return i;var n=-1,s=[],o=t.length;for(e=Qi(e,3);++n<o;){var r=t[n];e(r,n,t)&&(i.push(r),s.push(n))}return He(t,s),i},vt.rest=function(t,e){if("function"!=typeof t)throw new Cs("Expected a function");return Ve(t,e=e===L?e:is(e))},vt.reverse=On,vt.sampleSize=function(t,e,i){return e=(i?ln(t,e,i):e===L)?1:is(e),(Fr(t)?Qt:qe)(t,e)},vt.set=function(t,e,i){return null==t?t:$e(t,e,i)},vt.setWith=function(t,e,i,n){return n="function"==typeof n?n:L,null==t?t:$e(t,e,i,n)},vt.shuffle=function(t){return(Fr(t)?te:Ye)(t)},vt.slice=function(t,e,i){var n=null==t?0:t.length;return n?(i&&"number"!=typeof i&&ln(t,e,i)?(e=0,i=n):(e=null==e?0:is(e),i=i===L?n:is(i)),Je(t,e,i)):[]},vt.sortBy=Kr,vt.sortedUniq=function(t){return t&&t.length?ei(t):[]},vt.sortedUniqBy=function(t,e){return t&&t.length?ei(t,Qi(e,2)):[]},vt.split=function(t,e,i){return i&&"number"!=typeof i&&ln(t,e,i)&&(e=i=L),(i=i===L?4294967295:i>>>0)?(t=rs(t))&&("string"==typeof e||null!=e&&!kr(e))&&(!(e=ni(e))&&bt.test(t))?di(M(t),0,i):t.split(e,i):[]},vt.spread=function(e,i){if("function"!=typeof e)throw new Cs("Expected a function");return i=null==i?0:po(is(i),0),Ve((function(n){var s=n[i];return n=di(n,0,i),s&&u(n,s),t(e,this,n)}))},vt.tail=function(t){var e=null==t?0:t.length;return e?Je(t,1,e):[]},vt.take=function(t,e,i){return t&&t.length?Je(t,0,0>(e=i||e===L?1:is(e))?0:e):[]},vt.takeRight=function(t,e,i){var n=null==t?0:t.length;return n?Je(t,0>(e=n-(e=i||e===L?1:is(e)))?0:e,n):[]},vt.takeRightWhile=function(t,e){return t&&t.length?ri(t,Qi(e,3),!1,!0):[]},vt.takeWhile=function(t,e){return t&&t.length?ri(t,Qi(e,3)):[]},vt.tap=function(t,e){return e(t),t},vt.throttle=function(t,e,i){var n=!0,s=!0;if("function"!=typeof t)throw new Cs("Expected a function");return qn(i)&&(n="leading"in i?!!i.leading:n,s="trailing"in i?!!i.trailing:s),Wn(t,e,{leading:n,maxWait:e,trailing:s})},vt.thru=Cn,vt.toArray=ts,vt.toPairs=aa,vt.toPairsIn=la,vt.toPath=function(t){return Fr(t)?l(t,yn):Qn(t)?[t]:vi(Zo(rs(t)))},vt.toPlainObject=os,vt.transform=function(t,e,n){var s=Fr(t),o=s||jr(t)||zr(t);if(e=Qi(e,4),null==n){var r=t&&t.constructor;n=o?s?new r:[]:qn(t)&&Gn(r)?Mo(qs(t)):{}}return(o?i:me)(t,(function(t,i,s){return e(n,t,i,s)})),n},vt.unary=function(t){return Ln(t,1)},vt.union=ar,vt.unionBy=lr,vt.unionWith=ur,vt.uniq=function(t){return t&&t.length?si(t):[]},vt.uniqBy=function(t,e){return t&&t.length?si(t,Qi(e,2)):[]},vt.uniqWith=function(t,e){return e="function"==typeof e?e:L,t&&t.length?si(t,L,e):[]},vt.unset=function(t,e){return null==t||oi(t,e)},vt.unzip=In,vt.unzipWith=xn,vt.update=function(t,e,i){return null!=t&&(t=$e(t,e,(i=hi(i))(ve(t,e)),void 0)),t},vt.updateWith=function(t,e,i,n){return n="function"==typeof n?n:L,null!=t&&(t=$e(t,e,(i=hi(i))(ve(t,e)),n)),t},vt.values=ps,vt.valuesIn=function(t){return null==t?[]:b(t,cs(t))},vt.without=cr,vt.words=_s,vt.wrap=function(t,e){return Pr(hi(e),t)},vt.xor=hr,vt.xorBy=pr,vt.xorWith=dr,vt.zip=fr,vt.zipObject=function(t,e){return ui(t||[],e||[],ie)},vt.zipObjectDeep=function(t,e){return ui(t||[],e||[],$e)},vt.zipWith=_r,vt.entries=aa,vt.entriesIn=la,vt.extend=qr,vt.extendWith=$r,Ts(vt,vt),vt.add=Oa,vt.attempt=ma,vt.camelCase=ua,vt.capitalize=ds,vt.ceil=Ia,vt.clamp=function(t,e,i){return i===L&&(i=e,e=L),i!==L&&(i=(i=ss(i))==i?i:0),e!==L&&(e=(e=ss(e))==e?e:0),le(ss(t),e,i)},vt.clone=function(t){return ue(t,4)},vt.cloneDeep=function(t){return ue(t,5)},vt.cloneDeepWith=function(t,e){return ue(t,5,e="function"==typeof e?e:L)},vt.cloneWith=function(t,e){return ue(t,4,e="function"==typeof e?e:L)},vt.conformsTo=function(t,e){return null==e||ce(t,e,us(e))},vt.deburr=fs,vt.defaultTo=function(t,e){return null==t||t!=t?e:t},vt.divide=xa,vt.endsWith=function(t,e,i){t=rs(t),e=ni(e);var n=t.length;n=i=i===L?n:le(is(i),0,n);return 0<=(i-=e.length)&&t.slice(i,n)==e},vt.eq=Nn,vt.escape=function(t){return(t=rs(t))&&V.test(t)?t.replace(z,$t):t},vt.escapeRegExp=function(t){return(t=rs(t))&&tt.test(t)?t.replace(Q,"\\$&"):t},vt.every=function(t,e,i){var n=Fr(t)?s:de;return i&&ln(t,e,i)&&(e=L),n(t,Qi(e,3))},vt.find=yr,vt.findIndex=Sn,vt.findKey=function(t,e){return d(t,Qi(e,3),me)},vt.findLast=Tr,vt.findLastIndex=wn,vt.findLastKey=function(t,e){return d(t,Qi(e,3),ye)},vt.floor=Pa,vt.forEach=Rn,vt.forEachRight=Bn,vt.forIn=function(t,e){return null==t?t:Wo(t,Qi(e,3),cs)},vt.forInRight=function(t,e){return null==t?t:jo(t,Qi(e,3),cs)},vt.forOwn=function(t,e){return t&&me(t,Qi(e,3))},vt.forOwnRight=function(t,e){return t&&ye(t,Qi(e,3))},vt.get=as,vt.gt=Br,vt.gte=Mr,vt.has=function(t,e){return null!=t&&sn(t,e,Ke)},vt.hasIn=ls,vt.head=bn,vt.identity=ms,vt.includes=function(t,e,i,n){return t=kn(t)?t:ps(t),i=i&&!n?is(i):0,n=t.length,0>i&&(i=po(n+i,0)),Zn(t)?i<=n&&-1<t.indexOf(e,i):!!n&&-1<_(t,e,i)},vt.indexOf=function(t,e,i){var n=null==t?0:t.length;return n?(0>(i=null==i?0:is(i))&&(i=po(n+i,0)),_(t,e,i)):-1},vt.inRange=function(t,e,i){return e=es(e),i===L?(i=e,e=0):i=es(i),(t=ss(t))>=fo(e,i)&&t<po(e,i)},vt.invoke=ia,vt.isArguments=Lr,vt.isArray=Fr,vt.isArrayBuffer=Wr,vt.isArrayLike=kn,vt.isArrayLikeObject=Hn,vt.isBoolean=function(t){return!0===t||!1===t||$n(t)&&"[object Boolean]"==Se(t)},vt.isBuffer=jr,vt.isDate=Ur,vt.isElement=function(t){return $n(t)&&1===t.nodeType&&!Jn(t)},vt.isEmpty=function(t){if(null==t)return!0;if(kn(t)&&(Fr(t)||"string"==typeof t||"function"==typeof t.splice||jr(t)||zr(t)||Lr(t)))return!t.length;var e=Xo(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(hn(t))return!Re(t).length;for(var i in t)if(Fs.call(t,i))return!1;return!0},vt.isEqual=function(t,e){return Ie(t,e)},vt.isEqualWith=function(t,e,i){var n=(i="function"==typeof i?i:L)?i(t,e):L;return n===L?Ie(t,e,L,i):!!n},vt.isError=zn,vt.isFinite=function(t){return"number"==typeof t&&uo(t)},vt.isFunction=Gn,vt.isInteger=Vn,vt.isLength=Xn,vt.isMap=Nr,vt.isMatch=function(t,e){return t===e||xe(t,e,en(e))},vt.isMatchWith=function(t,e,i){return i="function"==typeof i?i:L,xe(t,e,en(e),i)},vt.isNaN=function(t){return Yn(t)&&t!=+t},vt.isNative=function(t){if(qo(t))throw new Es("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Pe(t)},vt.isNil=function(t){return null==t},vt.isNull=function(t){return null===t},vt.isNumber=Yn,vt.isObject=qn,vt.isObjectLike=$n,vt.isPlainObject=Jn,vt.isRegExp=kr,vt.isSafeInteger=function(t){return Vn(t)&&-9007199254740991<=t&&9007199254740991>=t},vt.isSet=Hr,vt.isString=Zn,vt.isSymbol=Qn,vt.isTypedArray=zr,vt.isUndefined=function(t){return t===L},vt.isWeakMap=function(t){return $n(t)&&"[object WeakMap]"==Xo(t)},vt.isWeakSet=function(t){return $n(t)&&"[object WeakSet]"==Se(t)},vt.join=function(t,e){return null==t?"":co.call(t,e)},vt.kebabCase=ca,vt.last=En,vt.lastIndexOf=function(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var s=n;if(i!==L&&(s=0>(s=is(i))?po(n+s,0):fo(s,n-1)),e==e)t:{for(i=s+1;i--;)if(t[i]===e){t=i;break t}t=i}else t=f(t,m,s,!0);return t},vt.lowerCase=ha,vt.lowerFirst=pa,vt.lt=Gr,vt.lte=Vr,vt.max=function(t){return t&&t.length?fe(t,ms,we):L},vt.maxBy=function(t,e){return t&&t.length?fe(t,Qi(e,2),we):L},vt.mean=function(t){return y(t,ms)},vt.meanBy=function(t,e){return y(t,Qi(e,2))},vt.min=function(t){return t&&t.length?fe(t,ms,Be):L},vt.minBy=function(t,e){return t&&t.length?fe(t,Qi(e,2),Be):L},vt.stubArray=Ss,vt.stubFalse=ws,vt.stubObject=function(){return{}},vt.stubString=function(){return""},vt.stubTrue=function(){return!0},vt.multiply=Ca,vt.nth=function(t,e){return t&&t.length?je(t,is(e)):L},vt.noConflict=function(){return Mt._===this&&(Mt._=ks),this},vt.noop=vs,vt.now=br,vt.pad=function(t,e,i){t=rs(t);var n=(e=is(e))?B(t):0;return!e||n>=e?t:Li(ro(e=(e-n)/2),i)+t+Li(oo(e),i)},vt.padEnd=function(t,e,i){t=rs(t);var n=(e=is(e))?B(t):0;return e&&n<e?t+Li(e-n,i):t},vt.padStart=function(t,e,i){t=rs(t);var n=(e=is(e))?B(t):0;return e&&n<e?Li(e-n,i)+t:t},vt.parseInt=function(t,e,i){return i||null==e?e=0:e&&(e=+e),go(rs(t).replace(it,""),e||0)},vt.random=function(t,e,i){if(i&&"boolean"!=typeof i&&ln(t,e,i)&&(e=i=L),i===L&&("boolean"==typeof e?(i=e,e=L):"boolean"==typeof t&&(i=t,t=L)),t===L&&e===L?(t=0,e=1):(t=es(t),e===L?(e=t,t=0):e=es(e)),t>e){var n=t;t=e,e=n}return i||t%1||e%1?(i=mo(),fo(t+i*(e-t+Pt("1e-"+((i+"").length-1))),e)):ze(t,e)},vt.reduce=function(t,e,i){var n=Fr(t)?c:D,s=3>arguments.length;return n(t,Qi(e,4),i,s,Lo)},vt.reduceRight=function(t,e,i){var n=Fr(t)?h:D,s=3>arguments.length;return n(t,Qi(e,4),i,s,Fo)},vt.repeat=function(t,e,i){return e=(i?ln(t,e,i):e===L)?1:is(e),Ge(rs(t),e)},vt.replace=function(){var t=arguments,e=rs(t[0]);return 3>t.length?e:e.replace(t[1],t[2])},vt.result=function(t,e,i){var n=-1,s=(e=pi(e,t)).length;for(s||(s=1,t=L);++n<s;){var o=null==t?L:t[yn(e[n])];o===L&&(n=s,o=i),t=Gn(o)?o.call(t):o}return t},vt.round=Ra,vt.runInContext=v,vt.sample=function(t){return(Fr(t)?Zt:Xe)(t)},vt.size=function(t){if(null==t)return 0;if(kn(t))return Zn(t)?B(t):t.length;var e=Xo(t);return"[object Map]"==e||"[object Set]"==e?t.size:Re(t).length},vt.snakeCase=da,vt.some=function(t,e,i){var n=Fr(t)?p:Ze;return i&&ln(t,e,i)&&(e=L),n(t,Qi(e,3))},vt.sortedIndex=function(t,e){return Qe(t,e)},vt.sortedIndexBy=function(t,e,i){return ti(t,e,Qi(i,2))},vt.sortedIndexOf=function(t,e){var i=null==t?0:t.length;if(i){var n=Qe(t,e);if(n<i&&Nn(t[n],e))return n}return-1},vt.sortedLastIndex=function(t,e){return Qe(t,e,!0)},vt.sortedLastIndexBy=function(t,e,i){return ti(t,e,Qi(i,2),!0)},vt.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var i=Qe(t,e,!0)-1;if(Nn(t[i],e))return i}return-1},vt.startCase=fa,vt.startsWith=function(t,e,i){return t=rs(t),i=null==i?0:le(is(i),0,t.length),e=ni(e),t.slice(i,i+e.length)==e},vt.subtract=Ba,vt.sum=function(t){return t&&t.length?S(t,ms):0},vt.sumBy=function(t,e){return t&&t.length?S(t,Qi(e,2)):0},vt.template=function(t,e,i){var n=vt.templateSettings;i&&ln(t,e,i)&&(e=L),t=rs(t),e=$r({},e,n,zi);var s,o,r=us(i=$r({},e.imports,n.imports,zi)),a=b(i,r),l=0;i=e.interpolate||mt;var u="__p+='";i=xs((e.escape||mt).source+"|"+i.source+"|"+(i===$?ut:mt).source+"|"+(e.evaluate||mt).source+"|$","g");var c="sourceURL"in e?"//# sourceURL="+e.sourceURL+"\n":"";if(t.replace(i,(function(e,i,n,r,a,c){return n||(n=r),u+=t.slice(l,c).replace(yt,I),i&&(s=!0,u+="'+__e("+i+")+'"),a&&(o=!0,u+="';"+a+";\n__p+='"),n&&(u+="'+((__t=("+n+"))==null?'':__t)+'"),l=c+e.length,e})),u+="';",(e=e.variable)||(u="with(obj){"+u+"}"),u=(o?u.replace(U,""):u).replace(N,"$1").replace(k,"$1;"),u="function("+(e||"obj")+"){"+(e?"":"obj||(obj={});")+"var __t,__p=''"+(s?",__e=_.escape":"")+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+u+"return __p}",(e=ma((function(){return As(r,c+"return "+u).apply(L,a)}))).source=u,zn(e))throw e;return e},vt.times=function(t,e){if(1>(t=is(t))||9007199254740991<t)return[];var i=4294967295,n=fo(t,4294967295);for(t-=4294967295,n=w(n,e=Qi(e));++i<t;)e(i);return n},vt.toFinite=es,vt.toInteger=is,vt.toLength=ns,vt.toLower=function(t){return rs(t).toLowerCase()},vt.toNumber=ss,vt.toSafeInteger=function(t){return t?le(is(t),-9007199254740991,9007199254740991):0===t?t:0},vt.toString=rs,vt.toUpper=function(t){return rs(t).toUpperCase()},vt.trim=function(t,e,i){return(t=rs(t))&&(i||e===L)?t.replace(et,""):t&&(e=ni(e))?di(t=M(t),e=A(t,i=M(e)),i=O(t,i)+1).join(""):t},vt.trimEnd=function(t,e,i){return(t=rs(t))&&(i||e===L)?t.replace(nt,""):t&&(e=ni(e))?di(t=M(t),0,e=O(t,M(e))+1).join(""):t},vt.trimStart=function(t,e,i){return(t=rs(t))&&(i||e===L)?t.replace(it,""):t&&(e=ni(e))?di(t=M(t),e=A(t,M(e))).join(""):t},vt.truncate=function(t,e){var i=30,n="...";if(qn(e)){var s="separator"in e?e.separator:s;i="length"in e?is(e.length):i,n="omission"in e?ni(e.omission):n}var o=(t=rs(t)).length;if(bt.test(t)){var r=M(t);o=r.length}if(i>=o)return t;if(1>(o=i-B(n)))return n;if(i=r?di(r,0,o).join(""):t.slice(0,o),s===L)return i+n;if(r&&(o+=i.length-o),kr(s)){if(t.slice(o).search(s)){var a=i;for(s.global||(s=xs(s.source,rs(ct.exec(s))+"g")),s.lastIndex=0;r=s.exec(a);)var l=r.index;i=i.slice(0,l===L?o:l)}}else t.indexOf(ni(s),o)!=o&&(-1<(s=i.lastIndexOf(s))&&(i=i.slice(0,s)));return i+n},vt.unescape=function(t){return(t=rs(t))&&G.test(t)?t.replace(H,Yt):t},vt.uniqueId=function(t){var e=++Ws;return rs(t)+e},vt.upperCase=_a,vt.upperFirst=ga,vt.each=Rn,vt.eachRight=Bn,vt.first=bn,Ts(vt,function(){var t={};return me(vt,(function(e,i){Fs.call(vt.prototype,i)||(t[i]=e)})),t}(),{chain:!1}),vt.VERSION="4.17.11",i("bind bindKey curry curryRight partial partialRight".split(" "),(function(t){vt[t].placeholder=vt})),i(["drop","take"],(function(t,e){Rt.prototype[t]=function(i){i=i===L?1:po(is(i),0);var n=this.__filtered__&&!e?new Rt(this):this.clone();return n.__filtered__?n.__takeCount__=fo(i,n.__takeCount__):n.__views__.push({size:fo(i,4294967295),type:t+(0>n.__dir__?"Right":"")}),n},Rt.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),i(["filter","map","takeWhile"],(function(t,e){var i=e+1,n=1==i||3==i;Rt.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:Qi(t,3),type:i}),e.__filtered__=e.__filtered__||n,e}})),i(["head","last"],(function(t,e){var i="take"+(e?"Right":"");Rt.prototype[t]=function(){return this[i](1).value()[0]}})),i(["initial","tail"],(function(t,e){var i="drop"+(e?"":"Right");Rt.prototype[t]=function(){return this.__filtered__?new Rt(this):this[i](1)}})),Rt.prototype.compact=function(){return this.filter(ms)},Rt.prototype.find=function(t){return this.filter(t).head()},Rt.prototype.findLast=function(t){return this.reverse().find(t)},Rt.prototype.invokeMap=Ve((function(t,e){return"function"==typeof t?new Rt(this):this.map((function(i){return Ae(i,t,e)}))})),Rt.prototype.reject=function(t){return this.filter(Un(Qi(t)))},Rt.prototype.slice=function(t,e){t=is(t);var i=this;return i.__filtered__&&(0<t||0>e)?new Rt(i):(0>t?i=i.takeRight(-t):t&&(i=i.drop(t)),e!==L&&(i=0>(e=is(e))?i.dropRight(-e):i.take(e-t)),i)},Rt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Rt.prototype.toArray=function(){return this.take(4294967295)},me(Rt.prototype,(function(t,e){var i=/^(?:filter|find|map|reject)|While$/.test(e),n=/^(?:head|last)$/.test(e),s=vt[n?"take"+("last"==e?"Right":""):e],o=n||/^find/.test(e);s&&(vt.prototype[e]=function(){var e=this.__wrapped__,r=n?[1]:arguments,a=e instanceof Rt,l=r[0],c=a||Fr(e),h=function(t){return t=s.apply(vt,u([t],r)),n&&p?t[0]:t};c&&i&&"function"==typeof l&&1!=l.length&&(a=c=!1);var p=this.__chain__,d=!!this.__actions__.length;l=o&&!p,a=a&&!d;return!o&&c?(e=a?e:new Rt(this),(e=t.apply(e,r)).__actions__.push({func:Cn,args:[h],thisArg:L}),new xt(e,p)):l&&a?t.apply(this,r):(e=this.thru(h),l?n?e.value()[0]:e.value():e)})})),i("pop push shift sort splice unshift".split(" "),(function(t){var e=Rs[t],i=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",n=/^(?:pop|shift)$/.test(t);vt.prototype[t]=function(){var t=arguments;if(n&&!this.__chain__){var s=this.value();return e.apply(Fr(s)?s:[],t)}return this[i]((function(i){return e.apply(Fr(i)?i:[],t)}))}})),me(Rt.prototype,(function(t,e){var i=vt[e];if(i){var n=i.name+"";(Eo[n]||(Eo[n]=[])).push({name:e,func:i})}})),Eo[Ci(L,2).name]=[{name:"wrapper",func:L}],Rt.prototype.clone=function(){var t=new Rt(this.__wrapped__);return t.__actions__=vi(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=vi(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=vi(this.__views__),t},Rt.prototype.reverse=function(){if(this.__filtered__){var t=new Rt(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Rt.prototype.value=function(){var t,e=this.__wrapped__.value(),i=this.__dir__,n=Fr(e),s=0>i,o=n?e.length:0;t=0;for(var r=o,a=this.__views__,l=-1,u=a.length;++l<u;){var c=a[l],h=c.size;switch(c.type){case"drop":t+=h;break;case"dropRight":r-=h;break;case"take":r=fo(r,t+h);break;case"takeRight":t=po(t,r-h)}}if(r=(t={start:t,end:r}).start,t=(a=t.end)-r,r=s?a:r-1,l=(a=this.__iteratees__).length,u=0,c=fo(t,this.__takeCount__),!n||!s&&o==t&&c==t)return ai(e,this.__actions__);n=[];t:for(;t--&&u<c;){for(s=-1,o=e[r+=i];++s<l;){h=(p=a[s]).type;var p=(0,p.iteratee)(o);if(2==h)o=p;else if(!p){if(1==h)continue t;break t}}n[u++]=o}return n},vt.prototype.at=gr,vt.prototype.chain=function(){return Pn(this)},vt.prototype.commit=function(){return new xt(this.value(),this.__chain__)},vt.prototype.next=function(){this.__values__===L&&(this.__values__=ts(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?L:this.__values__[this.__index__++]}},vt.prototype.plant=function(t){for(var e,i=this;i instanceof wt;){var n=Dn(i);n.__index__=0,n.__values__=L,e?s.__wrapped__=n:e=n;var s=n;i=i.__wrapped__}return s.__wrapped__=t,e},vt.prototype.reverse=function(){var t=this.__wrapped__;return t instanceof Rt?(this.__actions__.length&&(t=new Rt(this)),(t=t.reverse()).__actions__.push({func:Cn,args:[On],thisArg:L}),new xt(t,this.__chain__)):this.thru(On)},vt.prototype.toJSON=vt.prototype.valueOf=vt.prototype.value=function(){return ai(this.__wrapped__,this.__actions__)},vt.prototype.first=vt.prototype.head,Qs&&(vt.prototype[Qs]=function(){return this}),vt}();Mt._=Jt,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Jt}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}.call(this),window.DKTools={},Object.defineProperties(DKTools,{SITE:{value:"https://dk-plugins.ru"},VERSION:{value:Imported.DKTools}}),DKTools.Utils=class{constructor(){return DKTools.Utils}static initialize(){this.__tileSize(),this.__audioCacheLimit(),this.__imageCacheLimit(),DKToolsParam.get("Debugging Console","Enabled")&&this.openConsole(),DKToolsParam.get("Check Updates","Enabled")&&this._checkUpdates()}static __audioCacheLimit(){const t=DKToolsParam.get("Audio Cache Limit")||{};t.Enabled?AudioCache.limit=t.Limit:AudioCache.limit=1e7}static async _checkUpdates(){if(!Utils.isNwjs()||!Utils.isTest())return;let t=[];try{const e={version:DKTools.VERSION,maker:Utils.RPGMAKER_NAME},i=Object.entries(e).map(([t,e])=>`${t}=${e}`).join("&");if(t=await DKTools.Network.fetchJson(`${DKTools.SITE}/plugins.php?${i}`)||[],0===t.length)return}catch(t){return void console.error("DKTools can not check updates")}const e=DKToolsParam.get("Check Updates","Show New Plugins");t.forEach(t=>{const i=t.version;if(DKTools.PluginManager.isRegistered(t.name)){if(!DKTools.PluginManager.checkVersion(t.name,i)){const e=DKTools.PluginManager.getVersion(t.name),n=[`Available a new ${t.beta?"beta ":""}version of ${t.name}: ${i}\n`,`Installed: ${e}\n`,"Visit site: "+t.url];t.download_url&&n.push("\nDownload: "+t.download_url),console.log.apply(console,n)}}else if(e){const e=[`Try the new plugin: ${t.name}\n`,`Description: ${t.description}\n`,`Visit site: ${t.url} \n`];t.download_url&&e.push("\nDownload: "+t.download_url),console.log.apply(console,e)}})}static _getErrorLogData(){const t=SceneManager._scene,e={};if(t&&t.constructor.name&&(e.Scene=t.constructor.name,SceneManager.isCurrentScene(Scene_Map))){const t=$gameMap._interpreter;if(t){if(t._mapId>0&&(e["Map ID"]=t._mapId),t._eventId>0){e["Event ID"]=t._eventId;const i=$gameMap.event(t._eventId);i&&(e["Event Page"]=i._pageIndex+1)}if(t._list&&t._list.length>0){let i=t._list[t._index];i&&0===i.code&&t._index>0&&(i=t._list[t._index-1]),i&&i.code>0&&(e["Last Event Command"]=i.code)}t._params&&t._params.length>0&&(e.Params=JSON.stringify(t._params))}}return e}static __hideGrid(){this._gridSprite&&(SceneManager._scene.removeChild(this._gridSprite),this._gridSprite=null)}static __imageCacheLimit(){const t=DKToolsParam.get("Image Cache Limit")||{};t.Enabled&&(ImageCache.limit=t.Limit)}static isFunction(t){return"function"==typeof t}static isString(t){return!!t&&"string"==typeof t}static async logError(t){if(!t||!Utils.isNwjs())return;const e=DKToolsParam.get("Errors Log")||{},i=Utils.isTest(),n=e.Enabled;if("None"===n||"Only Game"===n&&i||"Only Test"===n&&!i)return;const s=DKTools.IO.fs,o=DKTools.IO.os;if(!s||!o)return;const r=1024*e["File Size"]*1024,a=e.Filename,l=new DKTools.IO.File(a),u=await l.getStatsAsync().then(t=>t.data);if(u&&u.size>r){const t=DKTools.IO.parsePath(a).name,e=new Date,i=String(e.getDate()).padZero(2),n=String(e.getMonth()+1).padZero(2),s=e.getFullYear(),o=String(e.getHours()).padZero(2),r=String(e.getMinutes()).padZero(2),u=String(e.getSeconds()).padZero(2);await l.renameAsync(`${i}.${n}.${s}_${o}.${r}.${u}_${t}`)}const c=await s.openSync(a,"a"),h=this._getErrorLogData();let p="Date: "+(new Date).toString()+o.EOL;_.forEach(h,(t,e)=>{p+=e+": "+t+o.EOL}),t instanceof Object?(p+="Name: "+t.name+o.EOL,p+="Message: "+t.message+o.EOL,void 0!==t.filename&&(p+="Filename: "+t.filename+o.EOL),void 0!==t.lineNumber&&(p+="Line: "+t.lineNumber+o.EOL),void 0!==t.columnNumber&&(p+="Column: "+t.columnNumber+o.EOL),p+="Stack: "+t.stack+o.EOL+o.EOL):p+="Error: "+t+o.EOL+o.EOL,await s.writeSync(c,p),await s.closeSync(c)}static makeScreenshot(){if(!Utils.isNwjs())return;const t=DKToolsParam.get("Screenshots"),e=t.Path,i=t.Type,n=t.Quality,s=SceneManager.snap().canvas.toDataURL("image/"+i,n),o=new RegExp(`^data:image/${i};base64,`),r=s.replace(o,""),a=new Date;let l=t.Filename;l=l.replace(/%year/gi,a.getFullYear()),l=l.replace(/%month/gi,a.getMonth()+1),l=l.replace(/%day/gi,a.getDate()),l=l.replace(/%hours/gi,a.getHours()),l=l.replace(/%minutes/gi,a.getMinutes()),l=l.replace(/%seconds/gi,a.getSeconds());const u=l+"."+i,c=DKTools.IO.normalizePath(e+"/"+u);new DKTools.IO.File(c).save(r,{createDirectory:!0,options:"base64",onSuccess:()=>{console.log("The screenshot is saved with the name: "+u)}})}static openConsole(){if(Utils.isTest()&&Utils.isNwjs())try{const t=__webpack_require__(537).Window.get();t.showDevTools(null,()=>t.focus())}catch(t){this.logError(t),console.error("DKTools can not open the console!")}}static __showGrid(){if(!Utils.isTest()||!DKToolsParam.get("Grid","Enabled"))return;const t=DKToolsParam.get("Grid"),e=t["Grid Sizes"]||[64,48,32,16];if(this._gridSprite)return void(this._gridSprite._gridSizeIndex<e.length-1?(this._gridSprite._gridSizeIndex++,this._gridSprite.refreshAll()):this.__hideGrid());let i=null;this._gridSprite=new DKTools.Sprite.Button(Graphics),this._gridSprite._gridSizeIndex=0,this._gridSprite.addEvent({type:"draw-all",onUpdate:()=>{const n=Graphics.boxWidth,s=Graphics.boxHeight,o=t["Grid Color"],r=t["Grid Width"],a=e[this._gridSprite._gridSizeIndex];_.times(Math.ceil(n/a),t=>{this._gridSprite.drawLine({x1:a*t,y1:0,x2:a*t,y2:s,color:o,lineWidth:r})}),_.times(Math.ceil(s/a),t=>{this._gridSprite.drawLine({x1:0,y1:a*t,x2:n,y2:a*t,color:o,lineWidth:r})}),i&&this._gridSprite.drawLine({x1:i.x,y1:i.y,x2:TouchInput.mouseX,y2:TouchInput.mouseY,color:i.color,lineWidth:t["Ruler Width"]})}}),this._gridSprite.addEvent({type:"mouse-inside",onUpdate:()=>{const t=TouchInput.mouseX,e=TouchInput.mouseY,i=Graphics.boxWidth,s=Graphics.boxHeight;let o=t+8,r=e+8;o+n.width>i&&(o=t-n.width-8),r+n.height>s&&(r=e-n.height-8),n.move(o,r),n.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-down-middle",onUpdate:()=>{i||(i={x:TouchInput.mouseX,y:TouchInput.mouseY,color:t["Ruler Color"]||"#"+(16777215*Math.random()<<0).toString(16)}),this._gridSprite.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-up-middle",onUpdate:()=>{i=null,this._gridSprite.refreshAll()}}),this._gridSprite.start(!0);const n=new DKTools.Sprite(0,0,220,"2");n.addEvent({type:"draw-all",onUpdate:()=>{if(i){const t={x:TouchInput.mouseX,y:TouchInput.mouseY},e=Math.floor(Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)));n.drawText(`line: ${e} (${i.x}, ${i.y})`,{y:"0",align:"left"})}n.drawText(`x: ${TouchInput.mouseX}, y: ${TouchInput.mouseY}`,{y:"1",align:"left"})}}),n.start(),this._gridSprite.addChild(n),this._gridSprite.updateMouseInsideEvents(),SceneManager._scene.addChild(this._gridSprite)}static __tileSize(){const t=DKToolsParam.get("Tile Size")||{};t.Enabled&&(Tilemap.TILE_WIDTH=t.Size,Tilemap.TILE_HEIGHT=t.Size)}static throwError(t){setTimeout(()=>{throw t},0)}static __quickLoad(){if(!Utils.isTest()||!DKToolsParam.get("Quick Load","Enabled"))return;const t=DKToolsParam.get("Quick Load","Savefile ID"),e=SceneManager._scene;t>0?DataManager.loadGame(t)&&(SoundManager.playLoad(),e instanceof Scene_Base&&e.fadeOutAll(),$gameSystem.versionId()!==$dataSystem.versionId&&($gamePlayer.reserveTransfer($gameMap.mapId(),$gamePlayer.x,$gamePlayer.y),$gamePlayer.requestMapReload()),SceneManager.goto(Scene_Map)):e instanceof Scene_Load||SceneManager.push(Scene_Load)}},DKTools.Utils.WebAudio=class{static load(t,e,i){if(!t)return null;if(t instanceof WebAudio)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener);if(!DKTools.Utils.isString(t))return null;const n=AudioManager.createBuffer(t,e);return DKTools.Utils.isFunction(i)&&n.addLoadListener(i),n}static async loadAsync(t,e,i){return new Promise(n=>{const s=this.load(t,e,i);s?s.addLoadListener(()=>n(s)):n(s)})}static loadBuffers(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=t.map(t=>this.load(t));const n=[];let s=0;const o=(o,r)=>{e&&(n[o]=r,s++,DKTools.Utils.isFunction(i)&&i(r,n,t),t.length===s&&(e(t),e=null))};t.forEach((t,e)=>{t instanceof WebAudio?t.addLoadListener(t=>o(e,t)):o(e,t)})}static async loadBuffersAsync(t){return Promise.all(t.map(t=>this.loadAsync(t)))}},DKTools.Utils.Bitmap=class{static drawLine(t,e,i,n,s,o="white",r=1){const a=t.context;a.save(),a.strokeStyle=o,a.lineWidth=r,a.beginPath(),a.moveTo(e,i),a.lineTo(n,s),a.stroke(),a.restore(),t._setDirty()}static getBase64(t){return t&&t.canvas?t.canvas.toDataURL("image/png"):null}static load(t,e,i,n,s){if(!t)return null;if(t instanceof Bitmap)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener,t.hue,t.smooth);if(!DKTools.Utils.isString(t))return null;const o=DKTools.IO.normalizePath(t+"/",!0),r=ImageManager.loadBitmap(o,e,n,s);return DKTools.Utils.isFunction(i)&&r.addLoadListener(i),r}static async loadAsync(t,e,i,n,s){return new Promise(o=>{const r=this.load(t,e,i,n,s);r?r.addLoadListener(()=>o(r)):o(r)})}static loadBitmaps(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=t.map(t=>this.load(t));const n=[];let s=0;const o=(o,r)=>{e&&(n[o]=r,s++,DKTools.Utils.isFunction(i)&&i(r,n,t),t.length===s&&(e(t),e=null))};t.forEach((t,e)=>{t instanceof Bitmap?t.addLoadListener(t=>o(e,t)):o(e,t)})}static async loadBitmapsAsync(t){return Promise.all(t.map(t=>this.loadAsync(t)))}static reserve(t,e,i,n,s,o){if(!t)return null;if(t instanceof Bitmap)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.reserve.apply(this,t);if(t instanceof Object)return this.reserve(t.folder,t.filename,t.listener,t.hue,t.smooth,t.reservationId);if(!DKTools.Utils.isString(t))return null;const r=DKTools.IO.normalizePath(t+"/",!0),a=ImageManager.reserveBitmap(r,e,n,s,o);return DKTools.Utils.isFunction(i)&&a.addLoadListener(i),a}static async reserveAsync(t,e,i,n,s,o){return new Promise(r=>{const a=this.reserve(t,e,i,n,s,o);a?a.addLoadListener(()=>r(a)):r(a)})}static reserveBitmaps(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=t.map(t=>this.reserve(t));const n=[];let s=0;const o=(o,r)=>{e&&(n[o]=r,s++,DKTools.Utils.isFunction(i)&&i(r,n,t),t.length===s&&(e(t),e=null))};t.forEach((t,e)=>{t instanceof Bitmap?t.addLoadListener(t=>o(e,t)):o(e,t)})}static async reserveBitmapsAsync(t){return Promise.all(t.map(t=>this.reserveAsync(t)))}},DKTools.IO=class{constructor(){return DKTools.IO}static initialize(){let t="";Utils.isNwjs()&&(this._fs=__webpack_require__(747),this._os=__webpack_require__(87),this._path=__webpack_require__(622),t=this.joinPath(this._path.dirname(process.mainModule.filename),"/")),this._projectPath=t,this._mode=DKToolsParam.get("File System","Mode"),this._stamp={},this._loadStamp(),this._createStamp()}static absolutePathExists(t){if(Utils.isNwjs())return this._fs.existsSync(t);if(this.mode===DKTools.IO.MODE_NWJS_STAMP&&t.startsWith(this._projectPath)){if(this.isFile(t))return!0;if(this.isDirectory(t))return!0}return!1}static async _createStamp(){if(!Utils.isTest()||!Utils.isNwjs()||this.mode===DKTools.IO.MODE_NWJS)return;const t=DKToolsParam.get("File System","Ignored Directories").map(t=>new DKTools.IO.Directory(t)),e=DKTools.IO.getRootDirectory(),i=new DKTools.IO.File("data/Stamp.json"),n={},s=async e=>{const i=await e.getAllAsync().then(t=>t.data);for(const o of i){const i=await o.getStatsAsync().then(t=>t.data),r=o.getFullPath().substring(1).split("\\");o.isFile()?_.set(n,r,{__stats__:{...i,type:"file"}}):_.set(n,r,{__stats__:{...i,type:"directory"}}),o.isDirectory()&&(t.some(t=>t.getFullPath()===e.getFullPath())||await s(o))}};await s(e),await i.saveJsonAsync(n,{compress:!0}),this._stamp=n}static getRootDirectory(){return new DKTools.IO.Directory}static getAbsolutePath(t){const e=this.joinPath(this._projectPath,t||"");return this.normalizePath(e)}static isFile(t){if(Utils.isNwjs()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this._fs.lstatSync(e).isFile()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.normalizePath(t).split("\\");if(_.last(e).includes("."))return"file"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static isDirectory(t){if(Utils.isNwjs()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this._fs.lstatSync(e).isDirectory()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.normalizePath(t).split("\\").filter(t=>!!t);if(!_.last(e).includes("."))return"directory"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static joinPath(){if(Utils.isNwjs())return this._path.join(...arguments);const t=_.filter(arguments,t=>DKTools.Utils.isString(t));let e=t.join("\\");return/^[\\\/]{2}[^\\\/]/.test(t[0])||(e=e.replace(/^[\\\/]{2,}/,"\\")),this.normalizePath(e)}static _loadStamp(){if(Utils.isNwjs()||this.mode===DKTools.IO.MODE_NWJS)return;new DKTools.IO.File("data/Stamp.json").loadJson({sync:!0,decompress:!0,onSuccess:t=>{this._stamp=t.data||this._stamp}})}static normalizePath(t,e=!1){if(Utils.isNwjs()){const i=this._path.normalize(t);return e?i.replace(/\\/g,"/"):i}const i=this._statPath(t),n=i.isUnc,s=i.isAbsolute;let o=i.device,r=i.tail;const a=/[\\\/]$/.test(r),l=_.filter(r.split(/[\\\/]+/),t=>t&&"."!==t),u=[];for(const t of l)".."===t?u.length>0&&".."!==u[u.length-1]?u.pop():s||u.push(".."):u.push(t);r=u.join("\\"),r||s||(r="."),r&&a&&(r+="\\"),n&&(o="\\\\"+o.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\"));const c=o+(s?"\\":"")+r;return e?c.replace(/\\/g,"/"):c}static parsePath(t){if(Utils.isNwjs())return this._path.parse(t);const e=this._splitPath(t);return{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}}static pathExists(t){return this.absolutePathExists(this.getAbsolutePath(t))}static reverseSlashes(t){return t.replace(/\\/g,"/")}static _statPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),i=e[1]||"",n=!!i&&":"!==i[1];return{device:i,isUnc:n,isAbsolute:n||!!e[2],tail:e[3]}}static _splitPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),i=(e[1]||"")+(e[2]||""),n=e[3]||"",s=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/.exec(n);return[i,s[1],s[2],s[3]]}},Object.defineProperties(DKTools.IO,{fs:{get:function(){return this._fs},configurable:!0},os:{get:function(){return this._os},configurable:!0},path:{get:function(){return this._path},configurable:!0},sep:{get:function(){return Utils.isNwjs()?this._path.sep:"/"},configurable:!0},projectPath:{get:function(){return this._projectPath},configurable:!0},mode:{get:function(){return this._mode},configurable:!0},stamp:{get:function(){return this._stamp},configurable:!0},OK:{value:0},EXPECT_CALLBACK:{value:1},ERROR_NOT_LOCAL_MODE:{value:2},ERROR_PATH_DOES_NOT_EXIST:{value:3},ERROR_CALLBACK_IS_NOT_AVAILABLE:{value:4},ERROR_DIRECTORY_ALREADY_EXISTS:{value:5},ERROR_DIRECTORY_IS_NOT_EMPTY:{value:6},ERROR_OVERWRITING_IS_NOT_AVAILABLE:{value:7},ERROR_OPTIONS_ARE_NOT_AVAILABLE:{value:8},ERROR_DECOMPRESSING_DATA:{value:9},ERROR_PARSING_DATA:{value:10},MODE_NWJS_STAMP:{value:0},MODE_NWJS:{value:1}}),DKTools.IO.Entity=class{constructor(){this.initialize.apply(this,arguments)}get path(){return this._path}get name(){return this._name}get initialExtension(){return this._initialExtension}get extension(){return this._extension}initialize(t=""){const e=DKTools.IO.parsePath(t);this._path=DKTools.IO.normalizePath(e.dir+"/"),this._name=e.name,this._initialExtension=e.ext,this._extension=e.ext}exists(){return DKTools.IO.absolutePathExists(this.getAbsolutePath())}getPath(){return this._path}getName(){return this._name}getExtension(){return this._extension}getFullPath(){return DKTools.IO.joinPath(this.getPath(),"/",this.getFullName())}getFullName(){return this._name+this._extension}getAbsolutePath(){return DKTools.IO.getAbsolutePath(this.getFullPath())}getStats(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const t=this.getFullPath().split("\\").filter(t=>!!t);return{data:_.get(DKTools.IO.stamp,t.concat("__stats__"),{}),status:DKTools.IO.OK}}const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.stat(i,(e,i)=>{e?this.__processError(e,t.onError):t.onSuccess({data:i,status:DKTools.IO.OK},this)}),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{return{data:e.statSync(i),status:DKTools.IO.OK}}catch(e){this.__processError(e,t.onError)}}async getStatsAsync(){return new Promise((t,e)=>{const i=this.getStats({sync:!1,onSuccess:t,onError:e});i.status!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}hasExtension(){return!!this._extension}isFile(){if(this instanceof DKTools.IO.File){if(Utils.isNwjs()){if(Decrypter.hasEncryptedAudio&&this.isAudio()||Decrypter.hasEncryptedImages&&this.isImage()){const t=DKTools.IO.normalizePath(this.getPath()+"/"+Decrypter.extToEncryptExt(this.getFullName()));return DKTools.IO.isFile(t)}return DKTools.IO.isFile(this.getFullPath())}return!!this.hasExtension()}return!1}isDirectory(){return this instanceof DKTools.IO.Directory&&(Utils.isNwjs()?DKTools.IO.isDirectory(this.getFullPath()):!this.hasExtension())}__processError(t,e){DKTools.Utils.isFunction(e)?e(t,this):DKTools.Utils.throwError(t)}rename(t,e={}){if(e=e||{},!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const i=DKTools.IO.fs,n=this.getAbsolutePath(),s=DKTools.IO.normalizePath(this._path+"/"+t+this._extension),o=DKTools.IO.getAbsolutePath(s);if(!e.overwrite&&DKTools.IO.absolutePathExists(o))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;if(!e.sync)return i.rename(n,o,i=>{i?this.__processError(i,e.onError):(this._name=t,DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this))}),DKTools.IO.EXPECT_CALLBACK;try{return i.renameSync(n,o),this._name=t,DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async renameAsync(t,e={}){return new Promise((i,n)=>{const s=this.rename(t,{...e,sync:!1,onSuccess:i,onError:n});s!==DKTools.IO.EXPECT_CALLBACK&&i(s)})}},DKTools.IO.File=class extends DKTools.IO.Entity{initialize(t=""){super.initialize(t),this._detectExtension()}copy(t,e={}){if(!e)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const i=DKTools.IO.fs,n=this.getAbsolutePath(),s=new DKTools.IO.File(t).getDirectory();if(e.createDirectory&&!s.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;s.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error("Failed to create directory: "+s.getFullPath()),e.onError)}if(!s.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!e.sync)return i.copyFile(n,t,e.flags,t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return i.copyFileSync(n,t,e.flags),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async copyAsync(t,e={}){return new Promise((i,n)=>{const s=this.copy(t,{...e,sync:!1,onSuccess:i,onError:n});s!==DKTools.IO.EXPECT_CALLBACK&&i(s)})}_detectExtension(){let t=this._extension;this.isAudio()?t=AudioManager.audioFileExt():this.isImage()?t=ImageManager.imageFileExt():this.isVideo()&&(t=Graphics.videoFileExt()),this._extension=t}exists(){if(Decrypter.hasEncryptedAudio&&this.isAudio()||Decrypter.hasEncryptedImages&&this.isImage()){const t=DKTools.IO.normalizePath(this.getPath()+"/"+Decrypter.extToEncryptExt(this.getFullName()));return DKTools.IO.pathExists(t)}return super.exists()}getDirectory(){return new DKTools.IO.Directory(this._path)}getDirectoryName(){return this.getDirectory().getName()}isAudio(){return".ogg"===this._extension||".m4a"===this._extension||".rpgmvo"===this._extension}isJson(){return".json"===this._extension}isTexture(){return".dds"===this._extension}isTxt(){return".txt"===this._extension}isImage(){return".png"===this._extension||".rpgmvp"===this._extension||".webp"===this._extension}isVideo(){return".webm"===this._extension||".mp4"===this._extension}isSave(){return".rpgsave"===this._extension}load(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};const e=this.getAbsolutePath(),i=e=>{if(e){if(t.decompress)try{e=LZString.decompressFromBase64(e)}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(t.parse)try{e=JSON.parse(e,t.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:e,status:DKTools.IO.OK}};if(Utils.isNwjs()){if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const n=DKTools.IO.fs,s=t.options||{encoding:"utf8"};if(t.sync)try{const t=n.readFileSync(e,s);return i(t)}catch(e){this.__processError(e,t.onError)}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};n.readFile(e,s,(e,n)=>{e?this.__processError(e,t.onError):t.onSuccess(i(n),this)})}}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP&&"Stamp.json"!==this.getFullName()&&!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const n=new XMLHttpRequest;n.open("GET",e,!t.sync),n.overrideMimeType(t.mimeType||"application/json"),n.onload=()=>{4===n.readyState&&(200===n.status?t.onSuccess(i(n.responseText),this):this.__processError(n,t.onError))},n.onerror=()=>{this.__processError(n,t.onError)};try{n.send()}catch(t){}}return{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async loadAsync(t={}){return new Promise((e,i)=>{const n=this.load({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}loadAudio(){return this.isAudio()&&(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.WebAudio.load(DKTools.IO.normalizePath(this.getDirectoryName()+"/"),this.getName()):null}async loadAudioAsync(){return DKTools.Utils.WebAudio.loadAsync(this.loadAudio())}loadJson(t){return t?(t.parse||(t.parse=!0),this.load(t)):{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE}}async loadJsonAsync(t={}){return new Promise((e,i)=>{const n=this.loadJson({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}loadBitmap(t,e,i){return t instanceof Object?this.loadBitmap(t.listener,t.hue,t.smooth):this.isImage()&&(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.Bitmap.load({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i}):null}async loadBitmapAsync(t,e,i){return DKTools.Utils.Bitmap.loadAsync(this.loadBitmap(t,e,i))}remove(t={}){if(t=t||{},!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.unlink(i,e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.unlinkSync(i),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise((t,e)=>{const i=this.remove({sync:!1,onSuccess:t,onError:e});i!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}reserveBitmap(t,e,i,n){return t instanceof Object?this.reserveBitmap(t.listener,t.hue,t.smooth,t.reservationId):this.isImage()&&this.exists()?DKTools.Utils.Bitmap.reserve({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i,reservationId:n}):null}async reserveBitmapAsync(t,e,i,n){return t instanceof Object?this.reserveBitmapAsync(t.listener,t.hue,t.smooth,t.reservationId):this.isImage()&&this.exists()?DKTools.Utils.Bitmap.reserveAsync({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i,reservationId:n}):null}save(t,e={}){if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;const i=DKTools.IO.fs,n=this.getAbsolutePath(),s=this.getDirectory();if((e=e||{}).createDirectory&&!s.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;s.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error("Failed to create directory: "+s.getFullPath()),e.onError)}if(!s.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(e.stringify&&(t=JSON.stringify(t,e.stringify.replacer,e.stringify.space)),e.compress&&(t=LZString.compressToBase64(t)),!e.sync)return i.writeFile(n,t,e.options,t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return i.writeFileSync(n,t,e.options),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async saveAsync(t,e={}){return new Promise((i,n)=>{const s=this.save(t,{...e,sync:!1,onSuccess:i,onError:n});s!==DKTools.IO.EXPECT_CALLBACK&&i(s)})}saveJson(t,e={}){return(e=e||{}).stringify||(e.stringify={space:"\t"}),this.save(t,e)}async saveJsonAsync(t,e={}){return new Promise((i,n)=>{const s=this.saveJson(t,{...e,sync:!1,onSuccess:i,onError:n});s!==DKTools.IO.EXPECT_CALLBACK&&i(s)})}},DKTools.IO.Directory=class extends DKTools.IO.Entity{create(t){if(!t)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE;if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(this.exists())return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.mkdir(i,t.options,e=>{e?this.__processError(e,t.onError):t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.mkdirSync(i,t.options),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async createAsync(t={}){return new Promise((e,i)=>{const n=this.create({...t,sync:!1,onSuccess:e,onError:i});n!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}createDirectory(t,e){const i=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(i).create(e)}async createDirectoryAsync(t,e={}){const i=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(i).createAsync(e)}findFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs())return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,i=[];let n=1,s=0;const o=s=>{_.forEach(s,s=>{if(s.isFile()){const e=s.getFullName();t.template instanceof RegExp&&t.template.test(e)?i.push(s):t.template&&e!==t.template||i.push(s)}else n<e&&s.isDirectory()&&(n++,r(s))})},r=e=>{if(t.sync){const i=e.getAll({sync:!0,options:t.options}).data;o(i)}else e.getAll({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{s++,o(e.data),n===s&&t.onSuccess({data:i,status:DKTools.IO.OK})}})};return r(this),t.sync?{data:i,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findFilesAsync(t={}){return new Promise((e,i)=>{const n=this.findFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}findDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs())return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,i=[];let n=1,s=0;const o=s=>{_.forEach(s,s=>{const o=s.getFullName();t.template instanceof RegExp&&t.template.test(o)?i.push(s):t.template&&o!==t.template||i.push(s),n<e&&(n++,r(s))})},r=e=>{if(t.sync){const i=e.getDirectories({sync:!0,options:t.options}).data;o(i)}else e.getDirectories({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{s++,o(e.data),n===s&&t.onSuccess({data:i,status:DKTools.IO.OK})}})};return r(this),t.sync?{data:i,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findDirectoriesAsync(t={}){return new Promise((e,i)=>{const n=this.findDirectories({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getAll(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=this.getFullPath(),i=i=>{t.template instanceof RegExp?i=i.filter(e=>t.template.test(e)):DKTools.Utils.isString(t.template)&&(i=i.filter(e=>e===t.template));return{data:i.reduce((t,i)=>{const n=DKTools.IO.normalizePath(e+"/"+i);return DKTools.IO.isFile(n)?t.push(new DKTools.IO.File(n)):DKTools.IO.isDirectory(n)&&t.push(new DKTools.IO.Directory(n)),t},[]),status:DKTools.IO.OK}};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.getFullPath().split("\\"),n=_.get(DKTools.IO.stamp,e,{}),s=Object.keys(n);return t.sync?i(s):(t.onSuccess(i(s),this),{data:null,status:DKTools.IO.EXPECT_CALLBACK})}const n=DKTools.IO.fs,s=this.getAbsolutePath();if(!t.sync)return n.readdir(s,t.options,(e,n)=>{e?this.__processError(e,t.onError):t.onSuccess(i(n),this)}),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{const e=n.readdirSync(s,t.options);return i(e)}catch(e){this.__processError(e,t.onError)}}async getAllAsync(t={}){return new Promise((e,i)=>{const n=this.getAll({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>t.filter(t=>t.isFile());if(t.sync){const i=this.getAll(t);return i.status===DKTools.IO.OK?{...i,data:e(i.data)}:i}{const i=t.onSuccess;return t.onSuccess=(t,n)=>{t.status===DKTools.IO.OK?i({...t,data:e(t.data)},n):i(t,n)},this.getAll(t)}}async getFilesAsync(t={}){return this.getAllAsync(t).then(t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,t=>t.isFile());return{...t,data:e}}return t})}getDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>_.filter(t,t=>t.isDirectory());if(t.sync){const i=this.getAll(t);return i.status===DKTools.IO.OK?{...i,data:e(i.data)}:i}{const i=t.onSuccess;return t.onSuccess=(t,n)=>{t.status===DKTools.IO.OK?i({...t,data:e(t.data)},n):i(t,n)},this.getAll(t)}}async getDirectoriesAsync(t={}){return this.getAllAsync(t).then(t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,t=>t.isDirectory());return{...t,data:e}}return t})}getAudioFiles(t){return this.getFiles({...t,template:/(.ogg|.rpgmvo)/})}async getAudioFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getAudioFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getJsonFiles(t){return this.getFiles({...t,template:/(.json)/})}async getJsonFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getJsonFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getTxtFiles(t){return this.getFiles({...t,template:/(.txt)/})}async getTxtFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getTxtFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getImageFiles(t){return this.getFiles({...t,template:/(.png|.webp|.rpgmvp)/})}async getImageFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getImageFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getVideoFiles(t){return this.getFiles({...t,template:/(.webm|.mp4)/})}async getVideoFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getVideoFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getRootDirectory(){return new DKTools.IO.Directory(this.getPath())}isEmpty(){const t=this.getAll({sync:!0}).data;return!t||0===t.length}loadAudioFiles(){const t=this.getAudioFiles({sync:!0});return t.status!==DKTools.IO.OK?[]:t.data.map(t=>t.loadAudio())}async loadAudioFilesAsync(){const t=await this.getAudioFilesAsync();return t.status!==DKTools.IO.OK?[]:Promise.all(t.data.map(t=>t.loadAudioAsync()))}loadBitmaps(t,e,i){const n=this.getImageFiles({sync:!0});return n.status!==DKTools.IO.OK?[]:n.data.map(n=>n.loadBitmap(t,e,i))}async loadBitmapsAsync(t,e,i){const n=await this.getImageFilesAsync();return n.status!==DKTools.IO.OK?[]:Promise.all(n.data.map(n=>n.loadBitmapAsync(t,e,i)))}remove(t={}){if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!this.isEmpty())return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.rmdir(i,e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.rmdirSync(i),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise((t,e)=>{const i=this.remove({sync:!1,onSuccess:t,onError:e});i!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}reserveBitmaps(t,e,i,n){const s=this.getImageFiles({sync:!0});return s.status!==DKTools.IO.OK?[]:_.map(s.data,s=>s.reserveBitmap(t,e,i,n))}async reserveBitmapsAsync(t,e,i,n){const s=await this.getImageFilesAsync();return s.status!==DKTools.IO.OK?[]:Promise.all(s.data.map(s=>s.reserveBitmapAsync(t,e,i,n)))}},DKTools.IO.WebStorage=class{static exists(t){return localStorage.hasOwnProperty(t)}static load(t,e={}){if(!this.exists(t))return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};let i=localStorage.getItem(t);if(i){if(e.decompress)try{i=LZString.decompressFromBase64(i)}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(e.parse)try{i=JSON.parse(i,e.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:i,status:DKTools.IO.OK}}static remove(t){return this.exists(t)?(localStorage.removeItem(t),DKTools.IO.OK):DKTools.IO.ERROR_PATH_DOES_NOT_EXIST}static rename(t,e,i=!1){if(!this.exists(t))return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!i&&this.exists(e))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;const n=localStorage.getItem(t);return localStorage.setItem(e,n),localStorage.removeItem(t),DKTools.IO.OK}static save(t,e,i={}){i=i||{};return!_.defaultTo(i.overwrite,!0)&&this.exists(t)?DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE:(i.stringify&&(e=JSON.stringify(e,i.stringify.replacer,i.stringify.space)),i.compress&&(e=LZString.compressToBase64(e)),localStorage.setItem(t,e),DKTools.IO.OK)}},DKTools.Network=class{constructor(){return DKTools.Network}static async fetchFile(t,e={}){return fetch(t,e).then(t=>{if(t.ok)return this._toFile(t);throw t})}static async fetchJson(t,e={}){return e.headers||(e.headers={}),e.headers.Accept="application/json",fetch(t,e).then(t=>{if(t.ok)return this._toJson(t);throw t})}static async _toFile(t){return t.arrayBuffer().catch(()=>null)}static async _toJson(t){return t.json().catch(()=>null)}},DKTools.ParameterManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._pluginName=t,this._params={},this.initializeParams()}initializeParams(){_.forEach(PluginManager.parameters(this._pluginName),(t,e)=>{this._params[e]=DKTools.ParameterManager.parse(t)})}change(t,e){_.set(this._params,t,e)}get(t,e,i){if(!DKTools.Utils.isString(t))return void console.error("Parameter name is not a string!",this._pluginName,t,e,i);let n=this._params[t];return void 0!==n?(e instanceof Object?n=_.find(n,e):void 0!==e&&(n=n[e]),n instanceof Object&&(i instanceof Object?(void 0!==i.key&&(n=n[i.key]),void 0!==i.index&&(n=n[i.index])):void 0!==i&&(n=n[i])),n):void 0}static parse(t){try{return"number"==typeof t||"boolean"==typeof t?t:JSON.parse(t,(t,e)=>{if(Array.isArray(e))return e.map(t=>this.parse(t));try{return this.parse(e)}catch(t){return e}})}catch(e){return t}}},DKTools.PluginManager=class{constructor(){return DKTools.PluginManager}static initialize(){this._checkRequirements()}static _checkRequirements(){Object.keys(this._requirements).forEach(t=>{const e=this.getVersion(t),i=this._getMaxVersion(t);if(null===e){const e='Required to install the plugin "%1". Minimal version: %2'.format(t,i);throw new Error(e)}if(!this._compareVersions(e,i)){const n='Required to update the plugin "%1" to minimal version %2 (Installed: %3)'.format(t,i,e);throw new Error(n)}})}static _compareVersions(t,e){if(t===e)return!0;const i=t.split("."),n=e.split(".");for(let t=0;t<i.length;t++){const e=parseInt(i[t]),s=parseInt(n[t]);if(e>s)return!0;if(e<s)return!1}return!0}static checkVersion(t,e){return this._compareVersions(this.getVersion(t),e)}static _getMaxVersion(t){return(this._requirements[t]||[]).slice().sort((t,e)=>this._compareVersions(t,e)?-1:1)[0]}static getVersion(t){const e=Imported[t];return DKTools.Utils.isString(e)?e:null}static isRegistered(t){return DKTools.Utils.isString(this.getVersion(t))}static requirePlugin(t,e){let i;if(this._requirements[t]||(this._requirements[t]=[]),e instanceof Object)i=e[Utils.RPGMAKER_NAME];else{if(!DKTools.Utils.isString(e))return void console.error(`Unknown version type (${t}): ${typeof e}`);i=e}this._requirements[t].push(i)}},Object.defineProperties(DKTools.PluginManager,{_requirements:{value:{}}}),DKTools.PluginCommandManager=class{constructor(){return DKTools.PluginCommandManager}static has(t){return!!this._pluginCommands[t.toLowerCase()]}static process(t,e,i){if(!e)throw new Error("Empty plugin command!");const n=this._pluginCommands[e.toLowerCase()];DKTools.Utils.isFunction(n)&&n.call(t,i)}static set(t,e){this._pluginCommands[t.toLowerCase()]=e}},Object.defineProperties(DKTools.PluginCommandManager,{_pluginCommands:{value:{}}}),DKTools.PreloadManager=class{constructor(){return DKTools.PreloadManager}static initialize(){const t=DKToolsParam.get("Initial Preloading")||{};if(!t.Enabled)return void this.start();this.setDebugging(t.Debugging),t["Audio Files"].forEach(t=>{this.preloadAudio({path:"audio/"+t,caching:!0})}),t["Image Files"].forEach(t=>{this.preloadImage({path:"img/"+t.Path,hue:t.Hue,caching:!0})});this.getTotal()>=30&&console.warn("Too many files to preload! Load only needed files.");let e=!1;(t["Progress Bar"]||{}).Enabled||(e=!0,this.onFileLoad(()=>{Graphics.updateLoading()}),this.onFinish(()=>{Graphics.endLoading()})),e&&this.start()}static clearCache(){this._cache={audio:{},image:{}}}static clearQueue(){this._queue={audio:{},image:{}}}static _finish(){this._finishTime=new Date,this._debugging=!1;const t=(this._finishTime-this._startTime)/1e3,e=this.getTotal();if(e>0&&this._log("Preloading complete! \nLoaded/Skipped/Total: "+this._loaded+"/"+this._skipped+"/"+e+"\nPreloading time: "+t+" sec"),this._finishListeners){const i={loaded:this._loaded,skipped:this._skipped,preloadingTime:t,total:e};for(;this._finishListeners.length>0;){this._finishListeners.shift()(i)}delete this._finishListeners}this._fileLoadListeners&&delete this._fileLoadListeners,this.clearQueue()}static _generateAudioKey(t){return DKTools.IO.normalizePath(t,!0)}static _generateImageKey(t,e=0){return DKTools.IO.normalizePath(ImageManager._generateCacheKey(t,e||0),!0)}static getCachedAudioByKey(t){return this._cache.audio[t]}static getCachedAudioByPath(t){return this.getCachedAudioByKey(this._generateAudioKey(t))}static getCachedImageByKey(t){return this._cache.image[t]}static getCachedImageByPath(t){return this.getCachedImageByKey(this._generateImageKey(t))}static getTotal(){return _.size(this._queue.audio)+_.size(this._queue.image)}static isAudioCachedByKey(t){return!!this._cache.audio[t]}static isAudioCachedByPath(t){return this.isAudioCachedByKey(this._generateAudioKey(t))}static isFinished(){return!!this._finishTime}static isReady(){return this.isFinished()}static isImageCachedByKey(t){return!!this._cache.image[t]}static isImageCachedByPath(t,e){return this.isImageCachedByKey(this._generateImageKey(t,e))}static isStarted(){return!!this._startTime}static _log(t){this._debugging&&t&&console.log(t)}static _onFileLoad(t){if(this._loaded++,this._log(`Loaded ${t instanceof WebAudio?"audio":"image"}: ${t.url}`),this._fileLoadListeners){const e={file:t,loadded:this._loaded,total:this.getTotal()};this._fileLoadListeners.forEach(t=>{t(e)})}}static onFileLoad(t){this._fileLoadListeners||(this._fileLoadListeners=[]),this._fileLoadListeners.push(t)}static onFinish(t){this._finishListeners||(this._finishListeners=[]),this._finishListeners.push(t)}static _preload(t,e){if(e instanceof Object&&DKTools.Utils.isString(e.path)){const i=new DKTools.IO.Directory(e.path);if(i.isDirectory()){if(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP)throw new Error("Web browsers and mobile phones cannot load directories!");{const n={sync:!0};let s=[];this._files[e.path]?s=this._files[e.path]:("audio"===t?s=i.getAudioFiles(n).data||[]:"image"===t&&(s=i.getImageFiles(n).data||[]),this._files[e.path]=s),s.forEach(i=>{const n=i.getFullPath();this._queue[t][n]||("audio"===t?this._processAudioFile(i,e):"image"===t&&this._processImageFile(i,e))})}}else{let i=e.path;i.includes(".")||("image"===t?i+=".png":"audio"===t&&(i+=".ogg"));const n=new DKTools.IO.File(i),s=n.getFullPath();if(this._queue[t][s])return;n.isFile()?"audio"===t?this._processAudioFile(n,e):"image"===t&&this._processImageFile(n,e):console.error("This is not a file: "+s)}}}static _processAudioFile(t,e){const i=t.getFullPath(),n=DKTools.IO.reverseSlashes(i);if(this._queue.audio[n])return;const s=t.getDirectoryName(),o=t.getName();if(e.caching){if(this.isAudioCachedByPath(n))return this._log("Audio already preloaded: "+n+". Skipped..."),void("se"===s&&AudioManager.isStaticSe({name:o})&&this.releaseAudioByPath(n));if(AudioManager.isLoaded(s,o)){if("se"!==s||!AudioManager.isStaticSe({name:o})){const t=AudioManager.createBuffer(s,o);this._cache.audio[this._generateAudioKey(n)]=t,AudioManager.releaseBuffer(s,o)}return void this._log("Audio already preloaded: "+n+". Skipped...")}}else{const t=AudioManager.isReserved(s,o),e=AudioManager.isLoaded(s,o);if(t||!e||"se"===s&&AudioManager.isStaticSe({name:o})||AudioManager._audioCache.reserve(AudioManager._generateCacheKey(s,o),AudioManager.createBuffer(s,o),AudioManager._defaultReservationId),t||e)return void this._log("Audio already preloaded: "+n+". Skipped...")}this._queue.audio[n]={...e,path:n}}static _processImageFile(t,e){const i=t.getFullPath(),n=DKTools.IO.reverseSlashes(i);if(!this._queue.image[n]){if(e.caching){if(this.isImageCachedByPath(n,e.hue))return void this._log("Image already preloaded: "+n+". Skipped...");if(ImageManager.isLoaded(n,e.hue)){const t=ImageManager.loadNormalBitmap(n,e.hue);return this._cache.image[this._generateImageKey(t.url,e.hue)]=t,ImageManager.releaseBitmap(n),void this._log("Image already preloaded: "+n+". Skipped...")}}else{const t=ImageManager.isReserved(n,e.hue),i=ImageManager.isLoaded(n,e.hue);if(!t&&i&&ImageManager._imageCache.reserve(ImageManager._generateCacheKey(n,e.hue),ImageManager.loadNormalBitmap(n,e.hue),ImageManager._defaultReservationId),t||i)return void this._log("Image already preloaded: "+n+". Skipped...")}this._queue.image[n]={...e,path:n}}}static _processLoadAudioFiles(){const t=[];return _.forEach(this._queue.audio,e=>{const i=new DKTools.IO.File(e.path),n=i.getFullPath();if(i.isFile())if(i.isAudio()){if(this.isAudioCachedByPath(n))return this._skipped++,void this._log("Audio already preloaded: "+n+". Skipped...");const s=i.loadAudio({...e.options});s?(e.caching&&(this._cache.audio[this._generateAudioKey(s.url)]=s),t.push(s)):(this._skipped++,this._log("Cannot load an audio: "+n+". Skipped..."))}else this._skipped++,this._log("This is not an audio: "+n+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")}),t.map(t=>DKTools.Utils.WebAudio.loadAsync(t).then(()=>this._onFileLoad(t)))}static _processLoadImageFiles(){const t=[];return _.forEach(this._queue.image,e=>{const i=new DKTools.IO.File(e.path),n=i.getFullPath();if(i.isFile())if(i.isImage()){if(this.isImageCachedByPath(n,e.hue))return this._skipped++,void this._log("Image already preloaded: "+n+". Skipped...");let s;s=e.caching?DKTools.Utils.Bitmap.load({...e.options,folder:i.getPath(),filename:i.getName(),hue:e.hue}):DKTools.Utils.Bitmap.reserve({...e.options,folder:i.getPath(),filename:i.getName(),hue:e.hue}),s?(e.caching&&(this._cache.image[this._generateImageKey(s.url,e.hue)]=s),t.push(s)):(this._skipped++,this._log("Cannot load an image: "+n+". Skipped..."))}else this._skipped++,this._log("This is not an image: "+n+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")}),t.map(t=>DKTools.Utils.Bitmap.loadAsync(t).then(()=>this._onFileLoad(t)))}static preloadAudio(t){this._preload("audio",t)}static preloadImage(t){this._preload("image",t)}static releaseAudioByKey(t){delete this._cache.audio[t]}static releaseAudioByPath(t){this.releaseAudioByKey(this._generateAudioKey(t))}static releaseImageByKey(t){delete this._cache.image[t]}static releaseImageByPath(t,e){this.releaseImageByKey(this._generateImageKey(t,e))}static setDebugging(t){this._debugging=t||!1}static start(){const t=this.getTotal();if(this._loaded=0,this._skipped=0,this._startTime=new Date,this._finishTime=null,0===t)return Promise.resolve().then(()=>this._finish());this._log("DKTools Preload Manager is running... \nTotal files to load: "+t);const e=Promise.all(this._processLoadAudioFiles()),i=Promise.all(this._processLoadImageFiles());return Promise.all([e,i]).then(()=>this._finish())}},Object.defineProperties(DKTools.PreloadManager,{_queue:{value:{audio:{},image:{}},writable:!0},_cache:{value:{audio:{},image:{}},writable:!0},_files:{value:{}}}),DKTools.PreloadManager.Scene=function(){this.initialize.apply(this,arguments)},DKTools.PreloadManager.Scene.prototype=Object.create(Scene_Base.prototype),DKTools.PreloadManager.Scene.prototype.constructor=DKTools.PreloadManager.Scene,DKTools.PreloadManager.Scene.prototype.initialize=function(){Scene_Base.prototype.initialize.apply(this,arguments),this._params=DKToolsParam.get("Initial Preloading","Progress Bar"),this._total=DKTools.PreloadManager.getTotal(),this._nextScene=Scene_Boot,this._counter=0},DKTools.PreloadManager.Scene.prototype.prepare=function(t){this._nextScene=t},DKTools.PreloadManager.Scene.prototype.setupPreloading=function(){Scene_Base.prototype.setupPreloading.apply(this,arguments),"images"===this._params["Progress Bar Style"]&&(this._preloader.add(DKTools.Utils.Bitmap.reserveAsync({folder:"img/system/",filename:this._params["Progress Bar Background Image"]}).then(t=>{this._backgroundBitmap=t})),this._preloader.add(DKTools.Utils.Bitmap.reserveAsync({folder:"img/system/",filename:this._params["Progress Bar Progress Image"]}).then(t=>{this._progressBitmap=t})))},DKTools.PreloadManager.Scene.prototype.isGameFontLoaded=Scene_Boot.prototype.isGameFontLoaded,DKTools.PreloadManager.Scene.prototype.create=function(){0!==this._total?(this._params.Background&&this.createBackground(),this.createProgressBar()):SceneManager.goto(this._nextScene)},DKTools.PreloadManager.Scene.prototype.createBackground=function(){this._background=new Sprite(ImageManager.loadSystem(this._params.Background)),this.addChild(this._background)},DKTools.PreloadManager.Scene.prototype.createProgressBar=function(){const params=this._params,style=params["Progress Bar Style"]||"colors";let width,height;"colors"===style?(width=eval(params["Progress Bar Width"]),height=eval(params["Progress Bar Height"])):(this._backgroundBitmap.width!==this._progressBitmap.width&&console.warn("PreloadManager: different width of background and progress!"),this._backgroundBitmap.height!==this._progressBitmap.height&&console.warn("PreloadManager: different height of background and progress!"),width=Math.max(this._backgroundBitmap.width,this._progressBitmap.width),height=Math.max(this._backgroundBitmap.height,this._progressBitmap.height));const x=eval(params["Progress Bar X"])||0,y=eval(params["Progress Bar Y"])||0;this._progressBar=new DKTools.Sprite(x,y,width,height),this._progressBar.setupFont({fontSize:params["Progress Bar Text Size"]}),"colors"===style?this._progressBar.addEvent({type:"draw-all",onUpdate:()=>{this._progressBar.fillAll(params["Progress Bar Background Color"]),this._progressBar.fillRect({width:this._progressBar.width*this._counter/this._total,color:params["Progress Bar Progress Color"]})}}):this._progressBar.addEvent({type:"draw-all",onUpdate:()=>{this._progressBar.drawBitmap(this._backgroundBitmap),this._progressBar.drawBitmap(this._progressBitmap,{source:t=>({width:t.width*this._counter/this._total})})}}),params["Progress Bar Text"]&&this._progressBar.addEvent({type:"draw-all",onUpdate:()=>{if(!this._progressBar.progressData)return;const t=params["Progress Bar Text"].format(...this._progressBar.progressData,Math.floor(100*this._counter/this._total).clamp(0,100));this._progressBar.drawText(t,{height:this._progressBar.height})}}),this._progressBar.start(),this.addChild(this._progressBar)},DKTools.PreloadManager.Scene.prototype.isReady=function(){return Scene_Base.prototype.isReady.apply(this,arguments)&&DKTools.StartupManager.isReady()&&this.isGameFontLoaded()},DKTools.PreloadManager.Scene.prototype.start=function(){const t=this._total,e=t>180?1:Math.ceil(180/t);DKTools.PreloadManager.onFileLoad(t=>{this._progressBar.addEvent({type:"queue",repeats:0,repeatTime:e,onStart:()=>{this._counter++,this._progressBar.progressData=[t.file.url,t.loaded,t.total],this._progressBar.refreshAll()}})}),this._progressBar.addEvent({type:"update",onUpdate:()=>{this._counter>=t&&SceneManager.goto(this._nextScene)}}),DKTools.PreloadManager.start()},DKTools.StartupManager=class{static async initialize(){this._isReady=!1,await this.checkErrors(),await this.initializeModules(),this._isReady=!0}static async initializeModules(){}static _checkRPGMakerVersion(){if(Utils.RPGMAKER_VERSION<"1.6.0")throw new Error("Required to update RPG Maker MV to minimal version 1.6.0 (Installed: %1)".format(Utils.RPGMAKER_VERSION))}static _checkWebStorage(){if(!Utils.isNwjs()&&!window.hasOwnProperty("localStorage"))throw new Error("Your browser does not support localStorage API")}static async checkErrors(){await this._checkRPGMakerVersion(),await this._checkWebStorage()}static isReady(){return this._isReady}},DKTools.Event=class{constructor(){this.initialize.apply(this,arguments)}get id(){return this._id}get target(){return this._target}get manager(){return this._manager}get type(){return this._type}get repeatTime(){return this._repeatTime}get repeats(){return this._repeats}get remainingTime(){return this._remainingTime}set remainingTime(t){this._remainingTime=t}get remainingRepeats(){return this._remainingRepeats}set remainingRepeats(t){this._remainingRepeats=t}get remainingPauseTime(){return this._remainingPauseTime}set remainingPauseTime(t){this._remainingPauseTime=t}initialize(t){t=t||{},this._id=t.id,this._target=t.target,this._type=t.type,this._repeatTime=t.repeatTime||-1,this._repeats=_.defaultTo(t.repeats,-1),this._remainingPauseTime=t.remainingPauseTime||0,this._onStart=t.onStart,this._onUpdate=t.onUpdate,this._onPause=t.onPause,this._onReset=t.onReset,this._onRepeat=t.onRepeat,this._onSuccess=t.onSuccess,this._onFail=t.onFail,this._started=!1,this._resetRemainingTime(),this._resetRemainingRepeats()}_callOnPauseHandler(){this._canCallOnPauseHandler()&&this._onPause(this)}_callOnRepeatHandler(){this._canCallOnRepeatHandler()&&this._onRepeat(this)}_callOnResetHandler(){this._canCallOnResetHandler()&&this._onReset(this)}_callOnStartHandler(){this._canCallOnStartHandler()&&this._onStart(this),this._started=!0}_callOnSuccessHandler(t=!1){(this._canCallOnSuccessHandler()||t&&this.hasOnSuccessHandler())&&this._onSuccess(this)}_callOnUpdateHandler(t){this._canCallOnUpdateHandler()&&this._onUpdate(this,t)}_callOnFailHandler(){this._canCallOnFailHandler()&&this._onFail(this)}_canCallOnPauseHandler(){return this.hasOnPauseHandler()&&this.isPaused()}_canCallOnRepeatHandler(){return this.hasOnRepeatHandler()}_canCallOnResetHandler(){return this.hasOnResetHandler()}_canCallOnStartHandler(){return this.hasOnStartHandler()&&!this.isStarted()}_canCallOnSuccessHandler(){return this.hasOnSuccessHandler()&&this.isFinished()}_canCallOnUpdateHandler(){return this.hasOnUpdateHandler()&&this.isUpdated()}_canCallOnFailHandler(){return this.hasOnFailHandler()}_clearRemainingRepeats(){this._remainingRepeats=0}_clearRemainingTime(){this._remainingTime=0}finish(t=!1){this.isFinished()||t?this._callOnSuccessHandler(t):this._callOnFailHandler(),this._clearRemainingTime(),this._clearRemainingRepeats()}getElapsedRepeats(){return this._repeats-this._remainingRepeats}getElapsedTime(){return this._repeatTime-this._remainingTime}hasManager(){return!!this._manager}hasOnFailHandler(){return!!this._onFail}hasOnPauseHandler(){return!!this._onPause}hasOnRepeatHandler(){return!!this._onRepeat}hasOnResetHandler(){return!!this._onReset}hasOnStartHandler(){return!!this._onStart}hasOnSuccessHandler(){return!!this._onSuccess}hasOnUpdateHandler(){return!!this._onUpdate}hasTarget(){return!!this._target}hasType(){return!!this._type}isAnimation(){return this instanceof DKTools.Animation}isAnimationAction(){return this instanceof DKTools.Animation.Action}isFinished(){return 0===this._remainingTime&&0===this._remainingRepeats}isPaused(){return 0!==this._remainingPauseTime}isStarted(){return this._started}isUpdated(){return this.isStarted()&&!this.isPaused()&&!this.isFinished()}pause(t=-1){this._remainingPauseTime=t}_resetRemainingRepeats(){this._remainingRepeats=this._repeats}_resetRemainingTime(){this._remainingTime=this._repeatTime}remove(){return!this.hasTarget()||this._target.removeEvent(this)}repeat(){this._remainingRepeats>0&&this._remainingRepeats--,this._resetRemainingTime(),this._callOnRepeatHandler()}reset(){this._resetRemainingTime(),this._resetRemainingRepeats(),this._callOnResetHandler()}resume(){this._remainingPauseTime=0}setManager(t){this._manager=t}setOnFailHandler(t){this._onFail=t}setOnPauseHandler(t){this._onPause=t}setOnRepeatHandler(t){this._onRepeat=t}setOnResetHandler(t){this._onReset=t}setOnStartHandler(t){this._onStart=t}setOnSuccessHandler(t){this._onSuccess=t}setOnUpdateHandler(t){this._onUpdate=t}setTarget(t){this._target=t}stop(t=!1){this.finish(t),this.reset()}_update(t){this._callOnUpdateHandler(t),this._updateRemainingRepeats()}_updatePause(){this._callOnPauseHandler(),this._updateRemainingPauseTime()}_updateRemainingPauseTime(){this._remainingPauseTime>0&&this._remainingPauseTime--}_updateRemainingRepeats(){this.isFinished()||(0===this._remainingTime?this.repeat():this._updateRemainingTime())}_updateRemainingTime(){this._remainingTime>0&&this._remainingTime--}update(t){this.isPaused()?this._updatePause():(this._callOnStartHandler(),this._update(t),this.isFinished()&&this.finish())}},DKTools.Animation=class extends DKTools.Event{get actions(){return this._actions}initialize(t){this._actions=[],super.initialize.apply(this,arguments)}addAction(t){t&&(Number.isFinite(t.startTime)||(t.startTime=0),!Number.isFinite(t.endTime)&&Number.isFinite(this._repeatTime)&&(t.endTime=this._repeatTime),t.setAnimation(this),this._actions.push(t))}addActions(t){t.forEach(t=>{this.addAction(t)})}_canUpdateAction(t){return _.inRange(this.getElapsedTime(),t.startTime,t.endTime)}hasAction(t){return this._actions.includes(t)}hasActions(){return this._actions.length>0}isActionFinished(t){return t.isStarted()&&!t.isPaused()&&this.getElapsedTime()+1>=t.endTime}isActionUpdated(t){return t.isStarted()&&!t.isPaused()&&this._canUpdateAction(t)}isFinished(){return super.isFinished.apply(this,arguments)||!this.hasActions()}removeAction(t){this.hasAction(t)&&_.pull(this._actions,t)}repeat(){this.repeatActions(),super.repeat.apply(this,arguments)}repeatActions(){this._actions.forEach(t=>{t.repeat()})}reset(){this.resetActions(),super.reset.apply(this,arguments)}resetActions(){_.forEach(this._actions,(function(t){t.reset()}))}_update(t){this._updateActions(),super._update.apply(this,arguments)}_updateAction(t){this._canUpdateAction(t)?t.update():this.getElapsedTime()+1===t.endTime&&this.isActionFinished(t)&&t.finish()}_updateActions(){this._actions.forEach(t=>{this._updateAction(t)})}},DKTools.Animation.Action=class extends DKTools.Event{static Frame(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,i=e.frame,n=(this._data.x-i.x)/t,s=(this._data.y-i.y)/t,o=(this._data.width-i.width)/t,r=(this._data.height-i.height)/t,a=new Rectangle(i.x+n,i.y+s,i.width+o,i.height+r);e.setFrame(a.x,a.y,a.width,a.height)}.bind(e)),e.setOnSuccessHandler(function(){this.target.setFrame(this._data.x,this._data.y,this._data.width,this._data.height)}.bind(e)),e}static Move(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,i=(this._data.x-e.x)/t,n=(this._data.y-e.y)/t,s=e.x+i,o=e.y+n;e.position.set(s,o)}.bind(e)),e.setOnSuccessHandler(function(){this.target.position.set(this._data.x,this._data.y)}.bind(e)),e}static Opacity(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target;e.opacity=e.opacity+(this._data-e.opacity)/t}.bind(e)),e.setOnSuccessHandler(function(){this.target.opacity=this._data}.bind(e)),e}static Rotation(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,i=(this._data-e.rotation)/t;e.rotation=e.rotation+i}.bind(e)),e.setOnSuccessHandler(function(){this.target.rotation=this._data}.bind(e)),e}static Scale(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,i=e.scale,n=(this._data.x-i.x)/t,s=(this._data.y-i.y)/t,o=i.x+n,r=i.y+s;e.scale.set(o,r)}.bind(e)),e.setOnSuccessHandler(function(){this.target.scale.set(this._data.x,this._data.y)}.bind(e)),e}get animation(){return this._animation}get startTime(){return this._startTime}set startTime(t){this._startTime=t}get endTime(){return this._endTime}set endTime(t){this._endTime=t}get data(){return this._data}get target(){return this._target||(this._animation?this._animation.target:null)}initialize(t){t=t||{},this._animation=null,this._startTime=t.startTime,this._endTime=t.endTime,this._data=t.data,super.initialize.apply(this,arguments)}getElapsedTime(){return this._animation.getElapsedTime()-this._startTime}getRemainingTime(){return this._endTime-this._animation.getElapsedTime()}isFinished(){return this._animation.isActionFinished(this)}isUpdated(){return this._animation.isActionUpdated(this)}remove(){this._animation.removeAction(this)}repeat(){this._callOnRepeatHandler()}reset(){this._callOnResetHandler()}setAnimation(t){this._animation=t}},DKTools.EventsManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._target=t,this._events={}}addAnimation(t){return this.addEventToContainer(t)}addEvent(t){let e;return t instanceof DKTools.Event||t instanceof DKTools.Animation?e=t:t instanceof Object&&(e=new DKTools.Event(t)),this.addEventToContainer(e)}addEventToContainer(t){if(!t)return null;t.hasTarget()||t.setTarget(this._target),t.setManager(this);return this.getEventsContainerByType(t.type).push(t),t}addOneTimeEvent(t){return t.repeatTime=1,t.repeats=0,this.addEvent(t)}_checkEvent(t){return t&&!t.isFinished()}_checkEvents(){_.forEach(this._events,(t,e)=>{this._events[e]=this._checkEventsContainer(t)})}_checkEventsContainer(t){return t.filter(t=>this._checkEvent(t))}clearEvents(t){t?Array.isArray(t)?t.forEach(t=>{this._events[t]=[]}):this._events[t]=[]:this._events={}}createEventsContainer(t){return this._events[t]||(this._events[t]=[]),this._events[t]}findAnimation(t,e){return this.getAnimations(e).find(e=>e.id===t)}findEvent(t,e){return this.getEvents(e).find(e=>e.id===t)}finishEvents(t,e=!1){this.iterateEventsContainer(t,t=>{t.finish(e)})}getAnimations(t){return this.getEvents(t).filter(t=>t instanceof DKTools.Animation)}getEventIndex(t){return this.getEventsContainerByType(t.type).indexOf(t)}getEvents(t){if(t)return this.getEventsContainerByType(t);let e=[];return Object.values(this._events).forEach(t=>{e=e.concat(t)}),e}getEventsContainerByType(t){return this._events[t]||this.createEventsContainer(t)}hasAnimation(t){return t instanceof DKTools.Animation&&this.getEventIndex(t)>=0}hasAnimations(t){return this.getAnimations(t).length>0}hasEvent(t){return this.getEventIndex(t)>=0}hasEvents(t){return this.getEvents(t).length>0}isEventsPaused(t){return this.getEventsContainerByType(t).every(t=>t.isPaused())}iterateEventsContainer(t,e){this.getEventsContainerByType(t).forEach(e)}pauseEvents(t,e=-1){this.iterateEventsContainer(t,t=>{t.pause(e)})}removeEvent(t){const e=this.getEventIndex(t);if(e>=0){return this.getEventsContainerByType(t.type)[e]=null,!0}return!1}resumeEvents(t){this.iterateEventsContainer(t,t=>{t.resume()})}stopEvents(t,e=!1){this.iterateEventsContainer(t,t=>{t.stop(e)})}update(){this._checkEvents()}updateEventsContainer(t,e){this.iterateEventsContainer(t,t=>{t.update(e)})}},DKTools.Base=class{constructor(){throw new Error("This is an abstract class!")}get mouse(){return this.getLocalPoint(TouchInput.mouseX,TouchInput.mouseY)}get mouseEnterTime(){return this._mouseEnterTime}get touch(){return this.getLocalPoint(TouchInput.x,TouchInput.y)}get wheelX(){return this._wheelX}get wheelY(){return this._wheelY}get eventsManager(){return this._eventsManager}initialize(t,e,i,n){let s;t instanceof Graphics?(i=Graphics.boxWidth,n=Graphics.boxHeight):t instanceof Object?(s=t.x,e=t.y,i=t.width,n=t.height):Number.isFinite(t)&&(s=t),this._clearAll(),this._createEventsManager(),this.move(s,e),this.setupSize(i,n),this.setupAll()}activate(){this.setActive(!0)&&this.updateActivateEvents()}actorName(t){return Window_Base.prototype.actorName.apply(this,arguments)}addAnimation(t){return this._eventsManager.addAnimation(t)}addEvent(t){return this._eventsManager.addEvent(t)}addOneTimeEvent(t){return this._eventsManager.addOneTimeEvent(t)}addFilter(t){if(!t)return;const e=this.filters;e&&e.length>0?(e.push(t),this.filters=e):this.filters=[t]}_clearAll(){this._mouseEnterTime=0,this._wheelX=0,this._wheelY=0}_createEventsManager(){this._eventsManager=new DKTools.EventsManager(this)}calcTextHeight(t,e=!1){return this.hasBitmap()&&t?Window_Base.prototype.calcTextHeight.apply(this,arguments):0}canRedrawAll(){return this.hasBitmap()}checkAll(){this.updateCheckAllEvents()}clear(){return this.clearRect()}clearRect(t,e,i,n){if(!this.hasBitmap())return!1;let s=t;return t instanceof Object&&(s=t.x,e=t.y,i=t.width,n=t.height),DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),DKTools.Utils.isString(n)&&(e=this.lineHeight()*parseFloat(n)),s=s||0,e=e||0,i=i||this.standardDrawingWidth(),n=n||this.standardDrawingHeight(),this.bitmap.clearRect(s,e,i,n),!0}convertEscapeCharacters(t){try{return Window_Base.prototype.convertEscapeCharacters.apply(this,arguments)}catch(e){return t=(t=(t=(t=(t=(t=(t=t.replace(/\\/g,"")).replace(/\x1b\x1b/g,"\\")).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bN\[(\d+)\]/gi,function(){return this.actorName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bP\[(\d+)\]/gi,function(){return this.partyMemberName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bG/gi,TextManager.currencyUnit)}}createAll(){this.updateCreateAllEvents()}deactivate(){this.setActive(!1)&&this.updateDeactivateEvents()}drawAll(){this.updateDrawAllEvents()}drawBitmap(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const i=DKTools.Utils.Bitmap.load(t);if(!i||e.sync&&!i.isReady())return!1;let n=!0;return i.addLoadListener(()=>{const t=DKTools.Utils.isFunction,s=DKTools.Utils.isString,o=this.lineHeight(),{paintOpacity:r,resetPaintOpacity:a}=e;let{source:l,destination:u}=e,c={};t(e.callback)&&(c=e.callback(i,this)),l=l||c.source||{},u=u||c.destination||{},t(l)&&(l=l(i,this)),t(u)&&(u=u(i,this));const h=_.defaultTo(l.x,0),p=_.defaultTo(l.width,i.width);let d=_.defaultTo(l.y,0),f=_.defaultTo(l.height,i.height);const g=_.defaultTo(u.x,0),m=_.defaultTo(u.width,p);let y=_.defaultTo(u.y,0),T=_.defaultTo(u.height,f);0!==p&&0!==f&&0!==m&&0!==T?(s(d)&&(d=o*parseFloat(d)),s(f)&&(f=o*parseFloat(f)),s(y)&&(y=o*parseFloat(y)),s(T)&&(T=o*parseFloat(T)),Number.isFinite(r)&&this.changePaintOpacity(r),this.bitmap.blt(i,h,d,p,f,g,y,m,T),a&&this.resetPaintOpacity()):n=!1}),n}async drawBitmapAsync(t,e={}){if(!t)return!1;const i=await DKTools.Utils.Bitmap.loadAsync(t);return this.drawBitmap(i,e)}drawCharacter(t,e,i={}){if(!this.hasBitmap()||null==t||null==e)return!1;i=i||{};const n=ImageManager.loadCharacter(t),s=ImageManager.isBigCharacter(t),o=n.width/(s?3:12),r=n.height/(s?4:8),a=(e%4*3+1)*o,l=4*Math.floor(e/4)*r,u=new Rectangle(a,l,o,r),c=i.pos;let{x:h,y:p}=i;return c instanceof Object&&(h=c.x,p=c.y),h=h||0,p=p||0,this.drawBitmap(n,{...i,source:u,destination:{x:h,y:p}})}drawCircle(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,radius:i,color:n,paintOpacity:s,resetPaintOpacity:o}=t;let{x:r,y:a}=t;return 0!==i&&(e instanceof Object&&(r=e.x,a=e.y),DKTools.Utils.isString(a)&&(a=this.lineHeight()*parseFloat(a)),Number.isFinite(s)&&this.changePaintOpacity(s),this.bitmap.drawCircle(r||0,a||0,i||1,n||"white"),o&&this.resetPaintOpacity(),!0)}drawFace(t,e,i={}){if(!this.hasBitmap()||null==t||null==e)return!1;i=i||{};const{pos:n,rect:s}=i;let{x:o,y:r,width:a,height:l}=i;n instanceof Object&&(o=n.x,r=n.y),s instanceof Object&&(o=s.x,r=s.y,a=s.width,l=s.height),a=a||Window_Base._faceWidth,l=l||Window_Base._faceHeight;const u=ImageManager.loadFace(t),c=Window_Base._faceWidth,h=Window_Base._faceHeight,p=Math.min(a,c),d=Math.min(l,h),f=e%4*c+(c-p)/2,_=Math.floor(e/4)*h+(h-d)/2,g=new Rectangle(f,_,p,d);return o=Math.floor((o||0)+Math.max(a-c,0)/2),r=Math.floor((r||0)+Math.max(l-h,0)/2),this.drawBitmap(u,{...i,source:g,destination:{x:o,y:r}})}drawGauge(t={}){if(!this.hasBitmap())return!1;const{pos:e,rect:i,reversed:n,gradient:s,paintOpacity:o,resetPaintOpacity:r}=t;let{x:a,y:l,width:u,height:c,type:h,rate:p,backgroundColor:d,color:f,color1:g,color2:m}=t;if(e instanceof Object&&(a=e.x,l=e.y),i instanceof Object&&(a=i.x,l=i.y,u=i.width,c=i.height),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),0===u||0===c)return!1;a=a||0,l=l||0,u=u||this.standardDrawingWidth(),c=c||this.standardDrawingHeight(),d=_.defaultTo(d,"black"),f=_.defaultTo(f,"white"),g=_.defaultTo(g,f),m=_.defaultTo(m,f),h=_.defaultTo(h,"horizontal"),p=_.defaultTo(p,1);const y={x:a,y:l,width:u,height:c};if("horizontal"===h)y.width*=p,n&&(y.x+=u-y.width);else{if("vertical"!==h)return!1;y.height*=p,n&&(y.y+=c-y.height)}return Number.isFinite(o)&&this.changePaintOpacity(o),this.fillRect({x:a,y:l,width:u,height:c,color:d}),this.gradientFillRect({rect:y,color1:g,color2:m,vertical:"vertical"===s}),r&&this.resetPaintOpacity(),!0}drawIcon(t,e={}){if(!this.hasBitmap()||null==t)return!1;const i=ImageManager.loadSystem("IconSet"),n=Window_Base._iconWidth,s=Window_Base._iconHeight,o=t%16*n,r=Math.floor(t/16)*s,a=new Rectangle(o,r,n,s),l=e.pos;let{x:u,y:c}=e;return l instanceof Object&&(u=l.x,c=l.y),this.drawBitmap(i,{...e,source:a,destination:{x:u,y:c}})}drawItemName(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const i=Window_Base._iconWidth+4,{pos:n,iconPos:s,paintOpacity:o,resetPaintOpacity:r}=e;let{x:a,y:l,iconX:u,iconY:c}=e;return n instanceof Object&&(a=n.x,l=n.y),s instanceof Object&&(u=s.x,c=s.y),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),a=a||0,l=l||0,u=_.defaultTo(u,a+2),c=_.defaultTo(c,l+2),Number.isFinite(o)&&this.changePaintOpacity(o),this.drawIcon(t.iconIndex,{x:u,y:c}),this.drawText(t.name,{x:a+i,y:l,width:(e.width||312)-i,height:e.height,align:"left",font:e.font,textColor:e.textColor,resetFont:e.resetFont,resetTextColor:e.resetTextColor}),r&&this.resetPaintOpacity(),!0}drawLine(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos1:e,pos2:i,color:n,lineWidth:s,paintOpacity:o,resetPaintOpacity:r}=t;let{x1:a,y1:l,x2:u,y2:c}=t;return 0!==s&&(e instanceof Object&&(a=e.x,l=e.y),i instanceof Object&&(u=i.x,c=i.y),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),Number.isFinite(o)&&this.changePaintOpacity(o),DKTools.Utils.Bitmap.drawLine(this.bitmap,a||0,l||0,u||0,c||0,n,s),r&&this.resetPaintOpacity(),!0)}drawPolygon(t){if(!this.hasBitmap())return!1;t=t||{};const{points:e,paintOpacity:i,resetPaintOpacity:n}=t;if(!Array.isArray(e)||0===e.length)return!1;Number.isFinite(i)&&this.changePaintOpacity(i);for(let i=0;i<e.length-1;i++){const n=e[i],s=e[i+1];this.drawLine({...t,pos1:n,pos2:s})}return n&&this.resetPaintOpacity(),!0}drawTextEx(t,e={}){if(!this.hasBitmap()||""===t||null==t)return 0;t=String(t),(e=e||{}).wrap instanceof Object&&(t=this.textWrap(t,e.wrap));const i=e.pos;let{x:n,y:s,index:o,left:r}=e;i instanceof Object&&(n=i.x,s=i.y),DKTools.Utils.isString(s)&&(s=this.lineHeight()*parseFloat(s)),n=_.defaultTo(n,0),s=_.defaultTo(s,0),o=_.defaultTo(o,0),r=_.defaultTo(r,n);const a={x:n,y:s,index:o,left:r};for(a.text=this.convertEscapeCharacters(t),a.height=this.calcTextHeight(a,!1);a.index<a.text.length;)this.processCharacter(a);return a.width||a.x-n}fillAll(t){return this.fillRect({color:t})}fillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,rect:i,paintOpacity:n,resetPaintOpacity:s}=t;let{x:o,y:r,width:a,height:l,color:u}=t;return e instanceof Object&&(o=e.x,r=e.y),i instanceof Object&&(o=i.x,r=i.y,a=i.width,l=i.height),DKTools.Utils.isString(r)&&(r=this.lineHeight()*parseFloat(r)),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),0!==a&&0!==l&&(o=o||0,r=r||0,a=a||this.standardDrawingWidth(),l=l||this.standardDrawingHeight(),u=u||"white",Number.isFinite(n)&&this.changePaintOpacity(n),this.bitmap.fillRect(o,r,a,l,u),s&&this.resetPaintOpacity(),!0)}fontHeight(t){let e;return t=t||this.lineHeight(),e=this.hasBitmap()?this.bitmap.fontSize:this._font.fontSize||this.standardFontSize(),t-(t-.7*e)/2}getLocalPoint(t,e){const i=2===arguments.length?new Point(t,e):new Point(t.x,t.y);return this.worldTransform.applyInverse(i)}getWindowskinTextColor(t){const e=96+t%8*12+6,i=144+12*Math.floor(t/8)+6;return this.hasWindowskin()||(this._windowskin=ImageManager.loadSystem(this.standardWindowskin())),this.windowskin.getPixel(e,i)}gradientFillAll(t="black",e="white",i=!1){return this.gradientFillRect({color1:t,color2:e,vertical:i})}gradientFillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{vertical:e,rect:i,paintOpacity:n,resetPaintOpacity:s}=t;let{color1:o,color2:r,x:a,y:l,width:u,height:c}=t;return i instanceof Object&&(a=i.x,l=i.y,u=i.width,c=i.height),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),0!==u&&0!==c&&(a=a||0,l=l||0,u=u||this.standardDrawingWidth(),c=c||this.standardDrawingHeight(),o=o||"black",r=r||"white",Number.isFinite(n)&&this.changePaintOpacity(n),this.bitmap.gradientFillRect(a,l,u,c,o,r,e),s&&this.resetPaintOpacity(),!0)}hasBitmap(){return!!this.bitmap}hasParent(){return!!this.parent}hasWindowskin(){return!!this.windowskin}hide(t=!1){this.setVisible(!1)&&this.updateHideEvents(),t||this.deactivate()}isActive(){let t=this;for(;t;){if(!t.visible)return!1;t=t.parent}return this.active}isBusy(){return!this.isReady()}isChild(t){return t?this.children.includes(t):this.hasParent()}isDestroyed(){return this._destroyed}isInside(t,e){const i=this.getLocalPoint(t,e),n=new Rectangle(0,0,this.width,this.height),s=this.mask;if(s&&DKTools.Utils.isFunction(s.containsPoint)&&!s.containsPoint(i))return!1;if(!n.contains(i.x,i.y))return!1;const o=this.hitArea;return!o||o.contains(i.x,i.y)}isMouseInside(){return this.isInside(TouchInput.mouseX,TouchInput.mouseY)}isOutside(t,e){return!this.isInside(t,e)}isParent(t){return!!t&&this.parent===t}isReady(){return this.hasBitmap()&&this.bitmap.isReady()}isStarted(){return this._started||!1}isTouchInside(){return TouchInput.isScreenPressed()&&this.isInside(TouchInput.x,TouchInput.y)}isVisible(){return this.visible}isVisibleAndActive(){return this.isVisible()&&this.isActive()}makeFontBigger(){this.hasBitmap()&&Window_Base.prototype.makeFontBigger.apply(this,arguments)}makeFontSmaller(){this.hasBitmap()&&Window_Base.prototype.makeFontSmaller.apply(this,arguments)}move(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.position.set(t||0,e||0)}obtainEscapeCode(t){return Window_Base.prototype.obtainEscapeCode.apply(this,arguments)}obtainEscapeParam(t){return Window_Base.prototype.obtainEscapeParam.apply(this,arguments)}partyMemberName(t){return Window_Base.prototype.partyMemberName.apply(this,arguments)}processAll(){Utils.isMobileDevice()||(this.processMouseEvents(),this.processWheelEvents())}processCharacter(t){return Window_Base.prototype.processCharacter.apply(this,arguments)}processDrawIcon(t,e){this.drawIcon(t,{x:e.x+2,y:e.y+2}),e.x+=Window_Base._iconWidth+4}processEscapeCharacter(t,e){try{const i={...e};Window_Base.prototype.processEscapeCharacter.call(this,t,i),Object.assign(e,i)}catch(i){switch(t){case"C":this.changeTextColor(this.getWindowskinTextColor(this.obtainEscapeParam(e)));break;case"I":this.processDrawIcon(this.obtainEscapeParam(e),e);break;case"{":this.makeFontBigger();break;case"}":this.makeFontSmaller()}}}processMouseEvents(){this.isVisibleAndActive()?this.isMouseInside()?(0===this._mouseEnterTime&&this.updateMouseEnterEvents(),this.updateMouseInsideEvents(),TouchInput.isMoved()&&this.updateMouseMoveEvents(),this._mouseEnterTime++):(this._mouseEnterTime>0&&this.updateMouseLeaveEvents(),this.updateMouseOutsideEvents(),this._mouseEnterTime=0):this._mouseEnterTime=0}processNewLine(t){return t.width?t.width<t.x&&(t.width=t.x):t.width=t.x,Window_Base.prototype.processNewLine.call(this,t)}processNewPage(t){Window_Base.prototype.processNewPage.apply(this,arguments)}processNormalCharacter(t){const e=t.text[t.index++],i=this.textWidth(e);this.drawText(e,{align:"left",pos:t,width:2*i,height:t.height}),t.x+=i}processWheelEvents(){if(this._wheelX=TouchInput.wheelX,this._wheelY=TouchInput.wheelY,0!==this._wheelX||0!==this._wheelY){let t;t=this.isMouseInside()?"inside":"outside",0!==this._wheelX&&this.updateWheelXEvents(t),0!==this._wheelY&&this.updateWheelYEvents(t)}}redrawAll(){this.clear(),this.drawAll(),this.updateRedrawAllEvents()}refreshAll(){this.updateAll(),this.canRedrawAll()&&this.redrawAll(),this.updateRefreshAllEvents()}removeAll(){this.updateRemoveAllEvents()}removeEvent(t){return this._eventsManager.removeEvent(t)}removeFilter(t){if(!this.filters||!t)return;const e=this.filters;_.pull(e,t),e.length>0?this.filters=e:0===e.length&&(this.filters=null)}removeFromParent(){return!!this.hasParent()&&(this.parent.removeChild(this),!0)}resize(t,e,i=!1){if(DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.width===t&&this.height===e)return!1;const n=this.width,s=this.height;return this.setupSize(t,e),(this.width!==n||this.height!==s)&&(i||this.start(),!0)}standardActive(){return!0}standardDrawingWidth(){return this.hasBitmap()?this.bitmap.width:this.isSprite()?this._bitmapWidth:this.isWindow()?this.width:0}standardDrawingHeight(){return this.hasBitmap()?this.bitmap.height:this instanceof DKTools.Sprite?this._bitmapHeight:this instanceof DKTools.Window?this.height:0}standardOpacity(){return 255}standardPivot(){return new Point(0,0)}standardRotation(){return 0}standardScale(){return new Point(1,1)}standardSkew(){return new Point(0,0)}standardVisible(){return!0}standardWindowskin(){return"Window"}setupAll(t={}){t=t||{},this.setupActive(t.active),this.setupVisible(t.visible),this.setupScale(t.scale),this.setupPivot(t.pivot),this.setupSkew(t.skew),this.setupRotation(t.rotation),this.setupOpacity(t.opacity)}setupActive(t){this.active=_.defaultTo(t,this.standardActive())}setupPivot(t,e){let i;i=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardPivot(),this.pivot.copy(i)}setupRotation(t){this.rotation=_.defaultTo(t,this.standardRotation())}setupScale(t,e){let i;i=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardScale(),this.scale.copy(i)}setupSize(t,e){}setupSkew(t,e){let i;i=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardSkew(),this.skew.copy(i)}setupVisible(t){this.visible=_.defaultTo(t,this.standardVisible())}setupOpacity(t){this.opacity=_.defaultTo(t,this.standardOpacity())}setActive(t){if(this.active===t)return!1;const e=this.active;return this.setupActive(t),this.active!==e}setVisible(t){if(this.visible===t)return!1;const e=this.visible;return this.setupVisible(t),this.visible!==e}show(t=!1){this.setVisible(!0)&&this.updateShowEvents(),t&&this.activate()}start(t=!1){this._started=!0,this.removeAll(),this.checkAll(),this.createAll(),this.refreshAll(),this.updateStartEvents(),t&&this.activate()}textFontHeight(t,e={}){return this.textLines(t,e)*this.fontHeight()}textLines(t,e){return e instanceof Object&&(t=this.textWrap(t,e)),t.split("\n").length}textWidth(t){return this.hasBitmap()&&""!==t&&null!=t?Window_Base.prototype.textWidth.apply(this,arguments):0}textWidthEx(t,e={}){try{return this.drawTextEx(t,{...e,x:-Number.MAX_SAFE_INTEGER,y:-Number.MAX_SAFE_INTEGER})}catch(t){return 0}}textHeight(t,e={}){return this.textLines(t,e)*this.lineHeight()}textHeightEx(t,e={}){return e instanceof Object&&e.wrap instanceof Object&&(t=this.textWrap(t,e.wrap)),this.calcTextHeight({text:t,index:0},!0)}textWrap(t,e={}){if(!this.hasBitmap()||""===t||null==t)return"";e=e||{};const i=(t=String(t)).split("\n"),n=e.maxWidth||this.bitmap.width,s=this.textWidth(" ");let o="",r=1;for(let t=0;t<i.length;t++){const a=i[t].split(" ");let l=n;for(let t=0;t<a.length;t++){const i=a[t],u=this.textWidthEx(i);let c=u+s;if(0===u&&(c-=s),0===t||c>l){if(t>0){if(e.maxLines===r)return o;o+="\n",r++}o+=i,l=n-u}else l-=c,o+=" "+i}t<i.length-1&&(o+="\n")}return o}update(){this.processAll(),this.updateEvents()}updateAll(){this.updateUpdateAllEvents()}updateChildren(){for(const t of this.children)t&&t.update&&t.update()}updateActivateEvents(){this._eventsManager.updateEventsContainer("activate")}updateCheckAllEvents(){this._eventsManager.updateEventsContainer("check-all")}updateCreateAllEvents(){this._eventsManager.updateEventsContainer("create-all")}updateDeactivateEvents(){this._eventsManager.updateEventsContainer("deactivate")}updateEvents(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()}updateHideEvents(){this._eventsManager.updateEventsContainer("hide")}updateMouseEnterEvents(){this._eventsManager.updateEventsContainer("mouse-enter")}updateMouseInsideEvents(){this._eventsManager.updateEventsContainer("mouse-inside")}updateMouseLeaveEvents(){this._eventsManager.updateEventsContainer("mouse-leave")}updateMouseMoveEvents(){this._eventsManager.updateEventsContainer("mouse-move")}updateMouseOutsideEvents(){this._eventsManager.updateEventsContainer("mouse-outside")}updateQueueEvents(){const t=this._eventsManager.getEventsContainerByType("queue")[0];t&&t.update()}updateReadyEvents(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")}updateRedrawAllEvents(){this._eventsManager.updateEventsContainer("redraw-all")}updateDrawAllEvents(){this._eventsManager.updateEventsContainer("draw-all")}updateRefreshAllEvents(){this._eventsManager.updateEventsContainer("refresh-all")}updateRemoveAllEvents(){this._eventsManager.updateEventsContainer("remove-all")}updateShowEvents(){this._eventsManager.updateEventsContainer("show")}updateStartEvents(){this.isStarted()&&this._eventsManager.updateEventsContainer("start")}updateUpdateAllEvents(){this._eventsManager.updateEventsContainer("update-all")}updateUpdateEvents(){this._eventsManager.updateEventsContainer("update")}updateWheelXEvents(t){this._eventsManager.updateEventsContainer("wheel-X-"+t)}updateWheelYEvents(t){this._eventsManager.updateEventsContainer("wheel-Y-"+t)}},DKTools.Sprite=function(t,e,i,n){this.initialize.apply(this,arguments)},DKTools.Sprite.prototype=Object.create(Sprite.prototype),Object.defineProperties(DKTools.Sprite.prototype,Object.getOwnPropertyDescriptors(DKTools.Base.prototype)),DKTools.Sprite.prototype.constructor=DKTools.Sprite,Object.defineProperties(DKTools.Sprite.prototype,{contents:{get:function(){return this.bitmap},set:function(t){this.bitmap=t},configurable:!0},windowskin:{get:function(){return this._windowskin},configurable:!0},align:{get:function(){return this._align},configurable:!0},font:{get:function(){return this._font},configurable:!0},textColor:{get:function(){return this._textColor},configurable:!0},paintOpacity:{get:function(){return this._paintOpacity},configurable:!0},fillColor:{get:function(){return this._fillColor},configurable:!0},graphicFolder:{get:function(){return this._graphicFolder},configurable:!0},graphicName:{get:function(){return this._graphicName},configurable:!0}}),DKTools.Sprite.prototype.initialize=function(t,e,i,n){Sprite.prototype.initialize.call(this),DKTools.Base.prototype.initialize.apply(this,arguments),t instanceof Bitmap&&this.setupBitmap(t),this.updateBitmap()},DKTools.Sprite.prototype.canRedrawAll=function(){return DKTools.Base.prototype.canRedrawAll.apply(this,arguments)&&!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype.changeFont=function(t){this.hasBitmap()&&this.updateFont(t)},DKTools.Sprite.prototype.changePaintOpacity=function(t){this.hasBitmap()&&this.updatePaintOpacity(t)},DKTools.Sprite.prototype.changeTextColor=function(t){this.hasBitmap()&&this.updateTextColor(t)},DKTools.Sprite.prototype.createAll=function(){DKTools.Base.prototype.createAll.apply(this,arguments),this.createBitmap()},DKTools.Sprite.prototype.createBitmap=function(){this.hasGraphicName()?this._loadGraphic():this.hasFixedBitmap()||(this.bitmap=new Bitmap(this._bitmapWidth,this._bitmapHeight))},DKTools.Sprite.prototype.drawAll=function(){this.updateFill(),DKTools.Base.prototype.drawAll.apply(this,arguments)},DKTools.Sprite.prototype.drawText=function(t,e={}){if(!this.hasBitmap()||null==t||""===t)return!1;t=String(t),e=e||{};const{pos:i,rect:n,font:s,textColor:o,paintOpacity:r,resetFont:a,resetTextColor:l,resetPaintOpacity:u}=e;let{x:c,y:h,width:p,height:d,align:f}=e;return i instanceof Object&&(c=i.x,h=i.y),n instanceof Object&&(c=n.x,h=n.y,p=n.width,d=n.height),DKTools.Utils.isString(h)&&(h=this.lineHeight()*parseFloat(h)),DKTools.Utils.isString(d)&&(d=this.lineHeight()*parseFloat(d)),0!==p&&0!==d&&(c=c||0,h=h||0,p=p||this.standardDrawingWidth(),d=d||this.lineHeight(),f=f||this.align,s&&this.changeFont(s),o&&this.changeTextColor(o),Number.isFinite(r)&&this.changePaintOpacity(r),this.bitmap.drawText(t,c,h,p,d,f),a&&this.resetFont(),l&&this.resetTextColor(),u&&this.resetPaintOpacity(),!0)},DKTools.Sprite.prototype.getLocalPoint=function(t,e){const i=DKTools.Base.prototype.getLocalPoint.apply(this,arguments),n=this.anchor;return i.x+=this.width*n.x,i.y+=this.height*n.y,i},DKTools.Sprite.prototype.hasFillColor=function(){return!!this._fillColor},DKTools.Sprite.prototype.hasFixedBitmap=function(){return!!this._fixedBitmap},DKTools.Sprite.prototype.hasGraphicFolder=function(){return!!this._graphicFolder},DKTools.Sprite.prototype.hasGraphicName=function(){return!!this._graphicName},DKTools.Sprite.prototype.isResizable=function(){return!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype._loadGraphic=function(){if(this.hasGraphicFolder()&&this.hasGraphicName()){const t=this._graphicFolder,e=this._graphicName,i=this._graphicLoadListener;this.loadBitmap(t,e,i),this.updateReadyEvents()}},DKTools.Sprite.prototype.lineHeight=function(){try{return Window_Base.prototype.lineHeight.apply(this,arguments)}catch(t){return 36}},DKTools.Sprite.prototype.loadBitmap=function(t,e,i,n,s){if(t instanceof Object)return this.loadBitmap(t.folder,t.filename,t.listener,t.hue,t.smooth);const o=DKTools.Utils.Bitmap.load(t,e,null,n,s);return!!this.setBitmap(o)&&(DKTools.Utils.isFunction(i)&&this.hasBitmap()&&this.bitmap.addLoadListener(i),!0)},DKTools.Sprite.prototype.loadSystem=function(t,e,i,n){return t instanceof Object?this.loadBitmap("img/system/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/system/",t,e,i,n)},DKTools.Sprite.prototype.loadWindowskin=function(t,e,i,n){return t instanceof Object?this.loadSystem(t.filename||this.standardWindowskin(),t.listener,t.hue,t.smooth):this.loadSystem(t||this.standardWindowskin(),e,i,n)},DKTools.Sprite.prototype.moveWithAnchor=function(t,e){const i=this.anchor;DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.move(t+this.width*i.x,e+this.height*i.y)},DKTools.Sprite.prototype.standardAlign=function(){return"center"},DKTools.Sprite.prototype.standardAnchor=function(){return new Point(0,0)},DKTools.Sprite.prototype.standardFillColor=function(){return null},DKTools.Sprite.prototype.standardFont=function(){return{fontFace:this.standardFontFace(),fontItalic:this.standardFontItalic(),fontSize:this.standardFontSize()}},DKTools.Sprite.prototype.standardFontFace=function(){try{return Window_Base.prototype.standardFontFace.apply(this,arguments)}catch(t){return"GameFont"}},DKTools.Sprite.prototype.standardFontItalic=function(){return!1},DKTools.Sprite.prototype.standardFontSize=function(){try{return Window_Base.prototype.standardFontSize.apply(this,arguments)}catch(t){return 28}},DKTools.Sprite.prototype.standardFrame=function(){return new Rectangle(0,0,this.width,this.height)},DKTools.Sprite.prototype.standardGraphicFolder=function(){return"img/system/"},DKTools.Sprite.prototype.standardGraphicName=function(){return""},DKTools.Sprite.prototype.standardPaintOpacity=function(){return 255},DKTools.Sprite.prototype.standardTextColor=function(){return"#ffffff"},DKTools.Sprite.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupBitmap(t),this.setupFrame(t.frame),this.setupAnchor(t.anchor),this.setupAlign(t.align),this.setupFont(t.font),this.setupTextColor(t.textColor),this.setupPaintOpacity(t.paintOpacity),this.setupFillColor(t.fillColor),this.setupGraphicFolder(t.graphicFolder),this.setupGraphicName(t.graphicName)},DKTools.Sprite.prototype.setupAlign=function(t){this._align=t||this.standardAlign()},DKTools.Sprite.prototype.setupAnchor=function(t,e){let i;i=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardAnchor(),this.anchor.copy(i)},DKTools.Sprite.prototype.setupBitmap=function(t){let e=null;t instanceof Object&&(e=DKTools.Utils.Bitmap.load(t.bitmap||t)),e?(this.bitmap=e,this.bitmap.addLoadListener(this.setupSize.bind(this))):this.bitmap=null,this._fixedBitmap=!!this.bitmap},DKTools.Sprite.prototype.setupFillColor=function(t){this._fillColor=null!==t?_.defaultTo(t,this.standardFillColor()):null},DKTools.Sprite.prototype.setupFont=function(t){this._font=Object.assign(this.standardFont(),t)},DKTools.Sprite.prototype.setupFrame=function(t,e,i,n){let s;s=t instanceof Object?t:4===arguments.length?new Rectangle(t,e,i,n):this.standardFrame(),Sprite.prototype.setFrame.call(this,s.x,s.y,s.width,s.height)},DKTools.Sprite.prototype.setupGraphicFolder=function(t){this._graphicFolder=_.defaultTo(t,this.standardGraphicFolder())},DKTools.Sprite.prototype.setupGraphicLoadListener=function(t){this._graphicLoadListener=t||null},DKTools.Sprite.prototype.setupGraphicName=function(t){this._graphicName=null!==t?_.defaultTo(t,this.standardGraphicName()):null},DKTools.Sprite.prototype.setupPaintOpacity=function(t){this._paintOpacity=_.defaultTo(t,this.standardPaintOpacity())},DKTools.Sprite.prototype.setupTextColor=function(t){this._textColor=t||this.standardTextColor()},DKTools.Sprite.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this._bitmapWidth=t,this._bitmapHeight=e},DKTools.Sprite.prototype.setAlign=function(t,e=!1){if(this._align===t)return!1;const i=this._align;return this.setupAlign(t),this._align!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setBitmap=function(t){return this.bitmap!==t&&(this.setupBitmap(t),!0)},DKTools.Sprite.prototype.setFillColor=function(t,e=!1){if(this._fillColor===t)return!1;const i=this._fillColor;return this.setupFillColor(t),this._fillColor!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setFont=function(t,e=!1){if(_.isEqual(this._font,Object.assign(this.standardFont(),t)))return!1;const i={...this._font};return this.setupFont(t),!_.isEqual(this._font,i)&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicFolder=function(t,e=!1){if(this._graphicFolder===t)return!1;const i=this._graphicFolder;return this.setupGraphicFolder(t),this._graphicFolder!==i&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicName=function(t,e=!1){if(this._graphicName===t)return!1;const i=this._graphicName;return this.setupGraphicName(t),this._graphicName!==i&&(e||this.start(),!0)},DKTools.Sprite.prototype.setPaintOpacity=function(t,e=!1){if(this._paintOpacity===t)return!1;const i=this._paintOpacity;return this.setupPaintOpacity(t),this._paintOpacity!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setTextColor=function(t,e=!1){if(this._textColor===t)return!1;const i=this._textColor;return this.setupTextColor(t),this._textColor!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.removeBitmap=function(){this.hasBitmap()&&this.setBitmap(null)},DKTools.Sprite.prototype.reserveBitmap=function(t,e,i,n,s,o){if(t instanceof Object)return this.reserveBitmap(t.folder,t.filename,t.listener,t.hue,t.smooth,t.reservationId);const r=DKTools.Utils.Bitmap.reserve(t,e,null,n,s,o);return!!this.setBitmap(r)&&(DKTools.Utils.isFunction(i)&&this.hasBitmap()&&this.bitmap.addLoadListener(i),!0)},DKTools.Sprite.prototype.reserveSystem=function(t,e,i,n,s){return t instanceof Object?this.reserveBitmap("img/system/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/system/",t,e,i,n,s)},DKTools.Sprite.prototype.resetAll=function(){this.resetFont(),this.resetPaintOpacity(),this.resetTextColor()},DKTools.Sprite.prototype.resetFont=function(){this.changeFont(this.font)},DKTools.Sprite.prototype.resetPaintOpacity=function(){this.changePaintOpacity(this.paintOpacity)},DKTools.Sprite.prototype.resetTextColor=function(){this.changeTextColor(this.textColor)},DKTools.Sprite.prototype.resize=function(t,e,i=!1){return!!this.isResizable()&&DKTools.Base.prototype.resize.apply(this,arguments)},DKTools.Sprite.prototype.update=function(){DKTools.Base.prototype.update.apply(this,arguments),this.updateChildren()},DKTools.Sprite.prototype.updateAll=function(){DKTools.Base.prototype.updateAll.apply(this,arguments),this.updateBitmap()},DKTools.Sprite.prototype.updateBitmap=function(){this.hasBitmap()&&(this.updateFont(),this.updatePaintOpacity(),this.updateTextColor())},DKTools.Sprite.prototype.updateFill=function(){this.hasFillColor()&&this.fillAll(this.fillColor)},DKTools.Sprite.prototype.updateFont=function(t={}){t=t||{},this.bitmap.fontFace=t.fontFace||this.font.fontFace,this.bitmap.fontItalic=!!t.fontItalic,this.bitmap.fontSize=t.fontSize||this.font.fontSize},DKTools.Sprite.prototype.updatePaintOpacity=function(t){Number.isFinite(t)||(t=this.paintOpacity),this.bitmap.paintOpacity=t},DKTools.Sprite.prototype.updateTextColor=function(t){this.bitmap.textColor=t||this.textColor},DKTools.Sprite.Button=class extends DKTools.Sprite{get longPressInterval(){return this._longPressInterval}get mousePressTime(){return this._mousePressTime}get touchPressTime(){return this._touchPressTime}isLongPressed(){return this._mousePressTime>=this._longPressInterval}isLongTouched(){return this._touchPressTime>=this._longPressInterval}isPressed(){return this._mousePressTime>0&&!this.isLongPressed()}isTouched(){return this._touchPressTime>0&&!this.isLongTouched()}standardActive(){return!1}standardLongPressInterval(){return 18}setupAll(t={}){t=t||{},super.setupAll(t),this.setupLongPressInterval(t.longPressInterval)}setupLongPressInterval(t){this._longPressInterval=t||this.standardLongPressInterval()}processAll(){super.processAll(),Utils.isMobileDevice()?this.processTouch():this.processMousePress()}processMousePress(){if(this.isVisibleAndActive()&&this.isMouseInside())if(TouchInput.isMousePressed()){let t;this._mousePressTime++,TouchInput.isLeftButtonPressed()?t="left":TouchInput.isMiddleButtonPressed()?t="middle":TouchInput.isRightButtonPressed()&&(t="right"),t&&(this.updateMouseDownEvents(t),this.isLongPressed()&&(this._mousePressTime===this._longPressInterval&&this.updateMouseLongPressStartedEvents(t),this.updateMouseLongPressEvents(t)))}else{let t;TouchInput.isLeftButtonReleased()?t="left":TouchInput.isMiddleButtonReleased()?t="middle":TouchInput.isRightButtonReleased()&&(t="right"),t&&(this.isLongPressed()?this.updateMouseLongPressFinishedEvents(t):this.isPressed()&&this.updateMouseClickEvents(t),this._mousePressTime>0&&this.updateMouseUpEvents(t)),this._mousePressTime=0}else this._mousePressTime=0}processTouch(){this.isVisibleAndActive()&&this.isTouchInside()?TouchInput.isScreenPressed()?(this._touchPressTime++,this.updateTouchDownEvents(),this.isLongTouched()&&(this._touchPressTime===this._longPressInterval&&this.updateLongTouchStartedEvents(),this.updateLongTouchEvents())):(this.isLongTouched()?this.updateLongTouchFinishedEvents():this.isTouched()&&this.updateTouchEvents(),this._touchPressTime>0&&this.updateTouchUpEvents(),this._touchPressTime=0):this._touchPressTime=0}update(){super.update.apply(this,arguments),this.updateButtonState()}updateButtonState(){Utils.isMobileDevice()?this._touchPressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents():this._mousePressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents()}updateLongTouchEvents(){this._eventsManager.updateEventsContainer("long-touch")}updateLongTouchFinishedEvents(){this._eventsManager.updateEventsContainer("long-touch-finished")}updateLongTouchStartedEvents(){this._eventsManager.updateEventsContainer("long-touch-started")}updateMouseDownEvents(t){this._eventsManager.updateEventsContainer("mouse-down-"+t)}updateMouseUpEvents(t){this._eventsManager.updateEventsContainer("mouse-up-"+t)}updateMouseClickEvents(t){this._eventsManager.updateEventsContainer("mouse-click-"+t)}updateMouseLongPressEvents(t){this._eventsManager.updateEventsContainer("mouse-long-press-"+t)}updateMouseLongPressStartedEvents(t){this._eventsManager.updateEventsContainer(`mouse-long-press-${t}-started`)}updateMouseLongPressFinishedEvents(t){this._eventsManager.updateEventsContainer(`mouse-long-press-${t}-finished`)}updateStateNormalEvents(){this._eventsManager.updateEventsContainer("state-normal")}updateStatePressedEvents(){this._eventsManager.updateEventsContainer("state-pressed")}updateTouchEvents(){this._eventsManager.updateEventsContainer("touch")}updateTouchDownEvents(){this._eventsManager.updateEventsContainer("touch-down")}updateTouchUpEvents(){this._eventsManager.updateEventsContainer("touch-up")}},DKTools.Window=function(t,e,i,n){this.initialize.apply(this,arguments)},DKTools.Window.prototype=Object.create(Window_Base.prototype),Object.defineProperties(DKTools.Window.prototype,Object.getOwnPropertyDescriptors(DKTools.Base.prototype)),DKTools.Window.prototype.constructor=DKTools.Window,Object.defineProperties(DKTools.Window.prototype,{bitmap:{get:function(){return this.contents},set:function(t){this.contents=t},configurable:!0}}),DKTools.Window.prototype.initialize=function(t,e,i,n){Window_Base.prototype.initialize.apply(this,arguments),DKTools.Base.prototype.initialize.call(this,t,e,i,n),this.createContents()},DKTools.Window.prototype.activate=function(){DKTools.Base.prototype.activate.apply(this,arguments),this._windowContentsSprite instanceof DKTools.Sprite&&this._windowContentsSprite.activate()},DKTools.Window.prototype.deactivate=function(){DKTools.Base.prototype.deactivate.apply(this,arguments),this._windowContentsSprite instanceof DKTools.Sprite&&this._windowContentsSprite.deactivate()},DKTools.Window.prototype.drawText=function(t,e){arguments.length<=2&&this._windowContentsSprite instanceof DKTools.Sprite?this._windowContentsSprite.drawText(t,e):Window_Base.prototype.drawText.apply(this,arguments)},DKTools.Window.prototype.drawTextEx=function(t,e){arguments.length<=2&&this._windowContentsSprite instanceof DKTools.Sprite?DKTools.Base.prototype.drawTextEx.apply(this,arguments):Window_Base.prototype.drawTextEx.apply(this,arguments)},DKTools.Window.prototype.contentsWidth=function(){return DKTools.Utils.isFunction(this._contentsWidth)?this._contentsWidth(this):this._contentsWidth},DKTools.Window.prototype.contentsHeight=function(){return DKTools.Utils.isFunction(this._contentsHeight)?this._contentsHeight(this):this._contentsHeight},DKTools.Window.prototype.createContents=function(){const t=this.contentsWidth(),e=this.contentsHeight();this._windowContentsSprite instanceof DKTools.Sprite?(this._windowContentsSprite.setupSize(t,e),this._windowContentsSprite.start()):this.contents=new Bitmap(t,e),this.resetFontSettings()},DKTools.Window.prototype.hideBack=function(){this._windowBackSprite.visible=!1},DKTools.Window.prototype.hideCursor=function(){this._windowCursorSprite.visible=!1},DKTools.Window.prototype.hideFrame=function(){this._windowFrameSprite.visible=!1},DKTools.Window.prototype.isOpenAndVisible=function(){return this.isOpen()&&this.isVisible()},DKTools.Window.prototype.isOpenAndActive=function(){return this.isOpen()&&this.isActive()},DKTools.Window.prototype.refreshAll=function(){this._refreshAllParts(),DKTools.Base.prototype.refreshAll.apply(this,arguments)},DKTools.Window.prototype.resetFontSettings=function(){this._windowContentsSprite instanceof DKTools.Sprite?(this._windowContentsSprite.resetFont(),this.resetTextColor()):Window_Base.prototype.resetFontSettings.apply(this,arguments)},DKTools.Window.prototype.resetTextColor=function(){this._windowContentsSprite instanceof DKTools.Sprite?this._windowContentsSprite.resetTextColor():Window_Base.prototype.resetTextColor.apply(this,arguments)},DKTools.Window.prototype.resize=function(t,e,i=!1){return DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)+2*this._padding),DKTools.Base.prototype.resize.call(this,t,e,i)},DKTools.Window.prototype.standardOpennessSpeed=function(){return 32},DKTools.Window.prototype.standardContentsSprite=function(){return new DKTools.Sprite},DKTools.Window.prototype.standardContentsWidth=function(){return()=>this._width-2*this._padding},DKTools.Window.prototype.standardContentsHeight=function(){return()=>this._height-2*this._padding},DKTools.Window.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupContentsWidth(t.contentsWidth),this.setupContentsHeight(t.contentsHeight),this.setupContentsSprite(t.contentsSprite)},DKTools.Window.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)+2*this._padding),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.prototype.setupContentsWidth=function(t){this._contentsWidth=t||this.standardContentsWidth()},DKTools.Window.prototype.setupContentsHeight=function(t){this._contentsHeight=t||this.standardContentsHeight()},DKTools.Window.prototype.setupContentsSprite=function(t){this._windowContentsSprite&&this.removeChild(this._windowContentsSprite),this._windowContentsSprite=t||this.standardContentsSprite(),this.addChildAt(this._windowContentsSprite,this.children.indexOf(this._windowCursorSprite))},DKTools.Window.prototype.update=function(){Window_Base.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.prototype.updateAll=function(){this.updateContents(),DKTools.Base.prototype.updateAll.apply(this,arguments)},DKTools.Window.prototype.updateContents=function(){DKTools.Utils.isFunction(this._windowContentsSprite.updateAll)&&this._windowContentsSprite.updateAll()},DKTools.Window.prototype.updateOpen=function(){this._opening&&(this.openness+=this.standardOpennessSpeed(),this.isOpen()&&(this._opening=!1,this.updateOpenEvents()))},DKTools.Window.prototype.updateClose=function(){this._closing&&(this.openness-=this.standardOpennessSpeed(),this.isClosed()&&(this._closing=!1,this.updateCloseEvents()))},DKTools.Window.prototype.updateOpenEvents=function(){this._eventsManager.updateEventsContainer("open")},DKTools.Window.prototype.updateCloseEvents=function(){this._eventsManager.updateEventsContainer("close")},DKTools.Window.Selectable=function(t,e,i,n){this.initialize.apply(this,arguments)},DKTools.Window.Selectable.prototype=Object.create(Window_Selectable.prototype),Object.defineProperties(DKTools.Window.Selectable.prototype,Object.getOwnPropertyDescriptors(DKTools.Window.prototype)),DKTools.Window.Selectable.prototype.constructor=DKTools.Window.Selectable,DKTools.Window.Selectable.prototype.initialize=function(t,e,i,n){this._createEventsManager(),Window_Selectable.prototype.initialize.apply(this,arguments),DKTools.Base.prototype.initialize.apply(this,arguments),this.refreshAll(),this.select(0)},DKTools.Window.Selectable.prototype.addItem=function(t){void 0===t.enabled&&(t.enabled=!0),t.symbol&&DKTools.Utils.isFunction(t.handler)&&this.setHandler(t.symbol,t.handler),this._list.push(t)},DKTools.Window.Selectable.prototype.bottomCol=function(){return Math.max(0,this.topCol()+this.maxCols()-1)},DKTools.Window.Selectable.prototype._createAllParts=function(){Window_Selectable.prototype._createAllParts.apply(this,arguments),this._leftArrowSprite=new Sprite,this._rightArrowSprite=new Sprite,this.addChild(this._leftArrowSprite),this.addChild(this._rightArrowSprite)},DKTools.Window.Selectable.prototype.callHandler=function(t){this.isHandled(t)&&this._handlers[t](this._index,this)},DKTools.Window.Selectable.prototype.callOkHandler=function(){const t=this.currentSymbol();this.isHandled(t)?this.callHandler(t):this.isHandled("ok")?this.callHandler("ok"):this.activate()},DKTools.Window.Selectable.prototype.col=function(){return this.isHorizontal()?this._index:Math.floor(this._index%this.maxCols())},DKTools.Window.Selectable.prototype.currentItem=function(){return this.item(this._index)},DKTools.Window.Selectable.prototype.currentSymbol=function(){return this.itemSymbol(this._index)},DKTools.Window.Selectable.prototype.currentExt=function(){return this.itemExt(this._index)},DKTools.Window.Selectable.prototype.cursorUp=function(t=!1){if(this.isHorizontal())return;const e=this._index,i=this.maxItems(),n=this.maxCols();(e>=n||t&&i===this.maxRows()*n)&&this.select((e-n+i)%i)},DKTools.Window.Selectable.prototype.cursorDown=function(t=!1){if(this.isHorizontal())return;const e=this._index,i=this.maxItems(),n=this.maxCols();(e<i-n||t&&i===this.maxRows()*n)&&this.select((e+n)%i)},DKTools.Window.Selectable.prototype.cursorLeft=function(t=!1){const e=Math.max(0,this._index),i=this.maxItems(),n=this.maxCols();this.isHorizontal()?this.selectPrevItem(t,!0):n>=2&&(e>0||t)&&this.select((e-1+i)%i)},DKTools.Window.Selectable.prototype.cursorRight=function(t=!1){const e=this._index,i=this.maxItems(),n=this.maxCols();this.isHorizontal()?this.selectNextItem(t,!0):n>=2&&(e<i-1||t)&&this.select((e+1)%i)},DKTools.Window.Selectable.prototype.drawAll=function(){this.drawAllItems()},DKTools.Window.Selectable.prototype.drawAllItems=function(){const t=this.maxVisibleItems(),e=this.maxItems();let i=this.topIndex();for(let n=0;n<t&&i<e;n++,i++)this.drawItem(i)},DKTools.Window.Selectable.prototype.drawItem=function(t){const e=this.item(t)||{};DKTools.Utils.isFunction(e.drawHandler)?e.drawHandler(t,this):DKTools.Utils.isFunction(this._itemDrawHandler)&&this._itemDrawHandler(t,this)},DKTools.Window.Selectable.prototype.ensureCursorVisible=function(){if(this.isHorizontal()){const t=this.col();t<this.topCol()?this.setTopCol(t):t>this.bottomCol()&&this.setBottomCol(t)}else Window_Selectable.prototype.ensureCursorVisible.apply(this,arguments)},DKTools.Window.Selectable.prototype.findSymbol=function(t){return this._list.findIndex(e=>e.symbol===t)},DKTools.Window.Selectable.prototype.findExt=function(t){return this._list.findIndex(e=>e.ext===t)},DKTools.Window.Selectable.prototype.hasItems=function(){return this.maxItems()>0},DKTools.Window.Selectable.prototype.hasSymbol=function(t){return this._list.some(e=>e.symbol===t)},DKTools.Window.Selectable.prototype.item=function(t){return this._list[t]||null},DKTools.Window.Selectable.prototype.itemName=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.name)?e.name(t,this):e.name},DKTools.Window.Selectable.prototype.itemSymbol=function(t){const e=this.item(t);return e?e.symbol:null},DKTools.Window.Selectable.prototype.itemExt=function(t){const e=this.item(t);return e?e.ext:null},DKTools.Window.Selectable.prototype.itemWidth=function(){return DKTools.Utils.isFunction(this._itemWidth)?this._itemWidth(this):Number.isFinite(this._itemWidth)?this._itemWidth:Window_Selectable.prototype.itemWidth.apply(this,arguments)},DKTools.Window.Selectable.prototype.itemHeight=function(){return DKTools.Utils.isFunction(this._itemHeight)?this._itemHeight(this):Number.isFinite(this._itemHeight)?this._itemHeight:DKTools.Utils.isString(this._itemHeight)?this.lineHeight()*parseFloat(this._itemHeight):Window_Selectable.prototype.itemHeight.apply(this,arguments)},DKTools.Window.Selectable.prototype.itemRect=function(t){const e=this.itemWidth(),i=this.itemHeight(),n=new Rectangle(0,0,e,i);if(this.isHorizontal())n.x=t*(e+this.spacing())-this._scrollX;else{const s=this.maxCols();n.x=t%s*(e+this.spacing())-this._scrollX,n.y=Math.floor(t/s)*i-this._scrollY}return n},DKTools.Window.Selectable.prototype.itemExt=function(t){const e=this.item(t);return e?e.ext:null},DKTools.Window.Selectable.prototype.itemTextAlign=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.align)?e.align(t,this):DKTools.Utils.isFunction(this._itemTextAlign)?this._itemTextAlign(t,this):e.align||this.standardItemTextAlign()},DKTools.Window.Selectable.prototype.itemTextColor=function(t){const e=(this.item(t)||{}).textColor||this._itemTextColor;return DKTools.Utils.isFunction(e)?e(t,this):e||this.normalColor()},DKTools.Window.Selectable.prototype.itemPaintOpacity=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.paintOpacity)?e.paintOpacity(t,this):Number.isFinite(e.paintOpacity)?e.paintOpacity:DKTools.Utils.isFunction(this._itemPaintOpacity)?this._itemPaintOpacity(t,this):this.isItemEnabled(t)?255:this.translucentOpacity()},DKTools.Window.Selectable.prototype.isItemEnabled=function(t){const e=(this.item(t)||{}).enabled;return DKTools.Utils.isFunction(e)?e(t,this):e},DKTools.Window.Selectable.prototype.isCurrentItemEnabled=function(){return this.isItemEnabled(this._index)},DKTools.Window.Selectable.prototype.isCursorVisible=function(){if(this.isHorizontal()){const t=this.col();return t>=this.topCol()&&t<=this.bottomCol()}return Window_Selectable.prototype.isCursorVisible.apply(this,arguments)},DKTools.Window.Selectable.prototype.maxCols=function(){return this._maxCols},DKTools.Window.Selectable.prototype.maxItems=function(){return this._list.length},DKTools.Window.Selectable.prototype.maxPageItems=function(){return this.isHorizontal()?this.maxCols():Window_Selectable.prototype.maxPageItems.apply(this,arguments)},DKTools.Window.Selectable.prototype.maxTopCol=function(){return Math.max(0,this.maxItems()-this.maxCols())},DKTools.Window.Selectable.prototype.maxVisibleItems=function(){return this.isHorizontal()?Math.ceil(this.contentsWidth()/this.itemWidth()):Math.ceil(this.contentsHeight()/this.itemHeight())*this.maxCols()},DKTools.Window.Selectable.prototype.nextIndex=function(t=!1){return this._index<this.maxItems()-1?this._index+1:t?0:-1},DKTools.Window.Selectable.prototype.nextItem=function(t=!1){return this.item(this.nextIndex(t))},DKTools.Window.Selectable.prototype.onTouch=function(t=!1){if(this._stayCount>=10&&this.isHorizontal()){const t=this.canvasToLocalX(TouchInput.x),e=this.canvasToLocalY(TouchInput.y);if(-1===this.hitTest(t,e)){const e=this._index;t<this.padding?this.cursorLeft():t>=this.width-this.padding&&this.cursorRight(),this._index!==e&&SoundManager.playCursor()}else Window_Selectable.prototype.onTouch.apply(this,arguments)}else Window_Selectable.prototype.onTouch.apply(this,arguments)},DKTools.Window.Selectable.prototype.playCursorSound=function(){SoundManager.playCursor()},DKTools.Window.Selectable.prototype.prevIndex=function(t=!1){return this._index>0?this._index-1:t?this.maxItems()-1:-1},DKTools.Window.Selectable.prototype.prevItem=function(t=!1){return this.item(this.prevIndex(t))},DKTools.Window.Selectable.prototype.processCancel=function(){SoundManager.playCancel(),this.updateInputData(),this.deactivate();const t=this.currentItem();t&&DKTools.Utils.isFunction(t.cancelHandler)?t.cancelHandler(this._index,this):this.callCancelHandler()},DKTools.Window.Selectable.prototype.processOk=function(){if(this.isCurrentItemEnabled()){this.playOkSound(),this.updateInputData(),this.deactivate();const t=this.currentItem()||{};DKTools.Utils.isFunction(t.okHandler)?t.okHandler(this._index,this):this.callOkHandler()}else this.playBuzzerSound()},DKTools.Window.Selectable.prototype.processWheel=function(){if(this.isTouchedInsideFrame()){const t=20;TouchInput.wheelY>=t&&(this.isHorizontal()?this.scrollLeft():this.scrollDown()),TouchInput.wheelY<=-t&&(this.isHorizontal()?this.scrollRight():this.scrollUp())}},DKTools.Window.Selectable.prototype._refreshArrows=function(){DKTools.Window.prototype._refreshArrows.apply(this,arguments);const t=this._width,e=this._height,i=24,n=i/2,s=96+i,o=0+i;this._leftArrowSprite.bitmap=this._windowskin,this._leftArrowSprite.anchor.set(.5,.5),this._leftArrowSprite.setFrame(s,o+n,n,i),this._leftArrowSprite.move(n,e/2),this._rightArrowSprite.bitmap=this._windowskin,this._rightArrowSprite.anchor.set(.5,.5),this._rightArrowSprite.setFrame(s+n+i,o+n,n,i),this._rightArrowSprite.move(t-n,e/2)},DKTools.Window.Selectable.prototype.refreshAll=function(){this.createContents(),DKTools.Window.prototype.refreshAll.apply(this,arguments),this.updateCursor()},DKTools.Window.Selectable.prototype.refresh=function(){},DKTools.Window.Selectable.prototype.standardContentsSprite=function(){return new Sprite},DKTools.Window.Selectable.prototype.standardItems=function(){return[]},DKTools.Window.Selectable.prototype.standardMaxCols=function(){return 1},DKTools.Window.Selectable.prototype.standardItemDrawHandler=function(){return function(t){const e=this.itemTextColor(t),i=this.itemPaintOpacity(t),n=this.itemTextAlign(t),s=this.itemRectForText(t);this.changeTextColor(e),this.changePaintOpacity(i),this.contents.drawText(this.itemName(t),s.x,s.y,s.width,s.height,n)}.bind(this)},DKTools.Window.Selectable.prototype.standardItemTextAlign=function(){return"center"},DKTools.Window.Selectable.prototype.setupAll=function(t={}){t=t||{},DKTools.Window.prototype.setupAll.apply(this,arguments),this.setupMaxCols(t.maxCols),this.setupItems(t.items),this.setupItemWidth(t.itemWidth),this.setupItemHeight(t.itemHeight),this.setupItemTextColor(t.itemTextColor),this.setupItemPaintOpacity(t.itemPaintOpacity),this.setupItemAlign(t.itemAlign),this.setupItemDrawHandler(t.itemDrawHandler)},DKTools.Window.Selectable.prototype.setupMaxCols=function(t=1){this._maxCols=t||this.standardMaxCols()},DKTools.Window.Selectable.prototype.setupItems=function(t=[]){this._list=[],(t||this.standardItems()).forEach(t=>{this.addItem(t)})},DKTools.Window.Selectable.prototype.setupItemTextColor=function(t){this._itemTextColor=t},DKTools.Window.Selectable.prototype.setupItemPaintOpacity=function(t){this._itemPaintOpacity=t},DKTools.Window.Selectable.prototype.setupItemAlign=function(t){this._itemAlign=t},DKTools.Window.Selectable.prototype.setupItemDrawHandler=function(t){this._itemDrawHandler=t||this.standardItemDrawHandler()},DKTools.Window.Selectable.prototype.setupItemWidth=function(t){this._itemWidth=t},DKTools.Window.Selectable.prototype.setupItemHeight=function(t){this._itemHeight=t},DKTools.Window.Selectable.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.itemHeight()*parseFloat(e)+2*this._padding),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.Selectable.prototype.setItems=function(t,e=!1){return this._items!=t&&(this.setupItems(t),e||this.start(),!0)},DKTools.Window.Selectable.prototype.setMaxCols=function(t,e=!1){if(this._maxCols===t)return!1;const i=this._maxCols;return this.setupMaxCols(t),this._maxCols!==i&&(e||this.start(),!0)},DKTools.Window.Selectable.prototype.setTopCol=function(t){const e=t.clamp(0,this.maxTopCol())*(this.itemWidth()+this.spacing());this._scrollX!==e&&(this._scrollX=e,this.refreshAll())},DKTools.Window.Selectable.prototype.setTopRow=function(t){const e=t.clamp(0,this.maxTopRow())*this.itemHeight();this._scrollY!==e&&(this._scrollY=e,this.refreshAll())},DKTools.Window.Selectable.prototype.setBottomCol=function(t){this.setTopCol(t-(this.maxCols()-1))},DKTools.Window.Selectable.prototype.select=function(t,e=!1){const i=this.item(t);Window_Selectable.prototype.select.call(this,t),e&&this.playCursorSound(),i&&DKTools.Utils.isFunction(i.selectHandler)&&i.selectHandler(t,this),this.updateSelectEvents()},DKTools.Window.Selectable.prototype.selectSymbol=function(t){const e=this.findSymbol(t);e>=0?this.forceSelect(e):this.forceSelect(0)},DKTools.Window.Selectable.prototype.selectExt=function(t){const e=this.findExt(t);e>=0?this.forceSelect(e):this.forceSelect(0)},DKTools.Window.Selectable.prototype.selectFirstItem=function(t=!1){this.select(0,t)},DKTools.Window.Selectable.prototype.selectLasItem=function(t=!1){const e=this.maxItems()-1;-1!==e&&this.select(e,t)},DKTools.Window.Selectable.prototype.selectPrevItem=function(t=!1,e=!1){const i=this.prevIndex(t);i>=0&&this.select(i,e)},DKTools.Window.Selectable.prototype.selectNextItem=function(t=!1,e=!1){const i=this.nextIndex(t);i>=0&&this.select(i,e)},DKTools.Window.Selectable.prototype.scrollLeft=function(){this.topCol()+1<this.maxItems()&&this.cursorRight()},DKTools.Window.Selectable.prototype.scrollRight=function(){this.col()>0&&this.cursorLeft()},DKTools.Window.Selectable.prototype.topCol=function(){return Math.floor(this._scrollX/(this.itemWidth()+this.spacing()))},DKTools.Window.Selectable.prototype.topIndex=function(){return this.isHorizontal()?this.topCol():Window_Selectable.prototype.topIndex.apply(this,arguments)},DKTools.Window.Selectable.prototype._updateArrows=function(){const t=this.isOpen();this._leftArrowSprite.visible=t&&this.leftArrowVisible,this._rightArrowSprite.visible=t&&this.rightArrowVisible,this._downArrowSprite.visible=t&&this.downArrowVisible,this._upArrowSprite.visible=t&&this.upArrowVisible},DKTools.Window.Selectable.prototype.updateArrows=function(){if(this.isHorizontal()){const t=this.maxTopCol(),e=this.topCol();this.leftArrowVisible=e>0,this.rightArrowVisible=t>0&&e<t,this.downArrowVisible=!1,this.upArrowVisible=!1}else Window_Selectable.prototype.updateArrows.apply(this,arguments),this.leftArrowVisible=!1,this.rightArrowVisible=!1},DKTools.Window.Selectable.prototype.update=function(){Window_Selectable.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.Selectable.prototype.updateSelectEvents=function(){this._eventsManager.updateEventsContainer("select")},DKTools.Scene=function(){this.initialize.apply(this,arguments)},DKTools.Scene.prototype=Object.create(Scene_Base.prototype),DKTools.Scene.prototype.constructor=DKTools.Scene,DKTools.Scene.prototype.initialize=function(){this._eventsManager=new DKTools.EventsManager(this),Scene_Base.prototype.initialize.apply(this,arguments)},DKTools.Scene.prototype.addEvent=function(t){return this._eventsManager.addEvent(t)},DKTools.Scene.prototype.addOneTimeEvent=function(t){return this._eventsManager.addOneTimeEvent(t)},DKTools.Scene.prototype.addAnimation=function(t){this._eventsManager.addAnimation(t)},DKTools.Scene.prototype.create=function(){Scene_Base.prototype.create.apply(this,arguments),this.createBackground(),this.createAllSprites(),this.createWindowLayer(),this.createAllWindows(),this.createForeground()},DKTools.Scene.prototype.createBackground=function(){},DKTools.Scene.prototype.createAllSprites=function(){},DKTools.Scene.prototype.createAllWindows=function(){},DKTools.Scene.prototype.createForeground=function(){},DKTools.Scene.prototype.hasWindowLayer=function(){return!!this._windowLayer},DKTools.Scene.prototype.isChild=function(t){return t instanceof Window&&this.hasWindowLayer()?this._windowLayer.children.includes(t):this.children.includes(t)},DKTools.Scene.prototype.removeWindow=function(t){return!(!this.hasWindowLayer()||!this.isChild(t))&&(this._windowLayer.removeChild(t),!0)},DKTools.Scene.prototype.update=function(){Scene_Base.prototype.update.apply(this,arguments),this.updateEvents()},DKTools.Scene.prototype.updateEvents=function(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()},DKTools.Scene.prototype.updateReadyEvents=function(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")},DKTools.Scene.prototype.updateUpdateEvents=function(){this._eventsManager.updateEventsContainer("update")},DKTools.Scene.prototype.updateQueueEvents=function(){const t=this._eventsManager.getEventsContainerByType("queue")[0];t&&t.update()},DKTools.Scene.Preloader=class{constructor(){this.initialize.apply(this,arguments)}initialize(){this._queue=[],this._finished=!1,this._running=!1,this._errors=0}add(t){t instanceof Bitmap?t=DKTools.Utils.Bitmap.reserveAsync(t):t instanceof WebAudio&&(t=DKTools.Utils.WebAudio.loadAsync(t)),t instanceof Promise&&this._queue.push(t)}finish(){this._queue=[],this._finished=!0,this._running=!1}hasErrors(){return this._errors>0}isRunning(){return this._running}isReady(){return this._finished}_onError(){this._errors++}start(){if(0===this._queue.length)return void this.finish();const t=this._queue.map(t=>t.catch(t=>{throw this._onError(),t}));Promise.all(t).then(()=>this.finish()),this._running=!0,this._finished=!1}};const DKToolsParam=new DKTools.ParameterManager("DKTools");DKTools.PluginCommandManager.set("UpdateFileSystemStamp",()=>{DKTools.IO._createStamp()});const DKTools_window_onload=window.onload;window.onload=function(){DKTools.Utils.initialize(),DKTools.IO.initialize(),DKTools.PreloadManager.initialize(),DKTools_window_onload.call(this),DKTools.PluginManager.initialize()};const DKTools_Utils_isNwjs=Utils.isNwjs;Utils.isNwjs=function(){return void 0===this.__isNwjs__&&(this.__isNwjs__=DKTools_Utils_isNwjs.apply(this,arguments)),this.__isNwjs__};const DKTools_Utils_isMobileDevice=Utils.isMobileDevice;Utils.isMobileDevice=function(){return void 0===this.__isMobileDevice__&&(this.__isMobileDevice__=DKTools_Utils_isMobileDevice.apply(this,arguments)),this.__isMobileDevice__};const DKTools_Utils_isMobileSafari=Utils.isMobileSafari;Utils.isMobileSafari=function(){return void 0===this.__isMobileSafari__&&(this.__isMobileSafari__=DKTools_Utils_isMobileSafari.apply(this,arguments)),this.__isMobileSafari__};const DKTools_Utils_isAndroidChrome=Utils.isAndroidChrome;Utils.isAndroidChrome=function(){return void 0===this.__isAndroidChrome__&&(this.__isAndroidChrome__=DKTools_Utils_isAndroidChrome.apply(this,arguments)),this.__isAndroidChrome__},Utils.isTest=function(){return void 0===this.__isTest__&&(this.__isTest__=!!this.isOptionValid("test")),this.__isTest__},ImageCache.prototype.add=function(t,e){this._items[t]={touch:Date.now(),bitmap:e,key:t}},ImageCache.prototype.reserve=function(t,e,i){this._items[t]={touch:Date.now(),reservationId:i,bitmap:e,key:t},this._truncateCache()};const DKTools_ImageCache_get=ImageCache.prototype.get;ImageCache.prototype.get=function(t){return DKTools_ImageCache_get.call(this,t)||DKTools.PreloadManager.getCachedImageByKey(t)||null},ImageCache.prototype.has=function(t){return!!this._items[t]},ImageCache.prototype.isReserved=function(t,e){const i=this._items[t];return!!i&&(e?i.reservationId===e:i.reservationId>0)},ImageCache.prototype.release=function(t){delete this._items[t]},ImageCache.prototype._truncateCache=function(){const t=this._items,e=Date.now();let i=ImageCache.limit;Object.keys(t).map(e=>t[e]).filter(t=>!this._mustBeHeld(t)).sort((t,e)=>e.touch-t.touch).forEach(n=>{if(DKTools.PreloadManager.isImageCachedByKey(n.key))delete t[n.key];else if(!(n.expiredAt>0&&n.expiredAt>e))if(i>0){const t=n.bitmap;i-=t.width*t.height}else delete t[n.key]})};class AudioCache extends ImageCache{add(t,e){this._items[t]={touch:Date.now(),audio:e,key:t}}get(t){if(this._items[t]){const e=this._items[t];return e.touch=Date.now(),e.audio}return DKTools.PreloadManager.getCachedAudioByKey(t)||null}_mustBeHeld(t){return!(!t.reservationId&&t.audio.isReady())}reserve(t,e,i){this._items[t]={touch:Date.now(),reservationId:i,audio:e,key:t},this._truncateCache()}_truncateCache(){const t=this._items,e=Date.now();let i=AudioCache.limit;Object.keys(t).map(e=>t[e]).filter(t=>!this._mustBeHeld(t)).sort((t,e)=>e.touch-t.touch).forEach(n=>{if(DKTools.PreloadManager.isAudioCachedByKey(n.key))delete t[n.key];else if(!(n.expiredAt>0&&n.expiredAt>e))if(i>0){const t=n.audio;i-=t._totalTime*t._sampleRate}else delete t[n.key]})}}const DKTools_Graphics_initialize=Graphics.initialize;Graphics.initialize=function(t,e,i){DKTools_Graphics_initialize.call(this,t,e,i);const n=DKToolsParam.get("FPS Meter")||{};if(Utils.isTest()&&n.Enabled){const t=this._fpsMeter;t&&(this.showFps(),"FPS"===n.Mode?(t.showFps(),this._fpsMeterToggled=!1):(t.showDuration(),this._fpsMeterToggled=!0))}};const DKTools_Graphics_printError=Graphics.printError;Graphics.printError=function(t,e){DKTools_Graphics_printError.call(this,t,e),this._errorPrinter&&this._updateErrorPrinter()};const DKTools_Graphics_createFPSMeter=Graphics._createFPSMeter;Graphics._createFPSMeter=function(){const t=DKToolsParam.get("FPS Meter")||{};t.Enabled?(this._fpsMeter=new FPSMeter({theme:t.Theme,history:t.History,toggleOn:null,graph:1,decimals:0}),this._fpsMeter.hide()):DKTools_Graphics_createFPSMeter.call(this)},Graphics.printDetailedError=function(t){if(!this._errorPrinter)return;const e=t.stack.split(/(?:\r\n|\r|\n)/).map(t=>t.replace(/[\(](.*[\/])/,"("));this._errorPrinter.innerHTML=this._makeDetailedErrorHtml(t.name,t.message,e),this._applyCanvasFilter(),this._clearUpperCanvas()},Graphics._makeDetailedErrorHtml=function(t,e,i){const n=DKToolsParam.get("Print Detailed Error"),s=DKTools.Utils._getErrorLogData();let o=n["Error Message"],r=n["Restart Message"],a="";return Imported.DKTools_Localization&&(o&&(o=DKTools.Localization.getText(o)),r&&(r=DKTools.Localization.getText(r))),o&&(a='<font color="yellow"><b>'+o+"<br></b></font><br>"),Object.keys(s).length>0&&(a+='<font color="yellow"><b>Reference Information</b></font><br>',_.forEach(s,(t,e)=>{a+='<font color="white">'+e+": "+t+"</font><br>"}),a+="<br>"),a+='<font color="red"><b>'+e+"</b></font><br>",_.forEach(i,t=>{a+='<font color="white">'+t+"</font><br>"}),r&&(a+='<br><font color="yellow"><b>'+r+"</b></font><br><br>"),a};const DKTools_Graphics_updateErrorPrinter=Graphics._updateErrorPrinter;Graphics._updateErrorPrinter=function(){DKTools_Graphics_updateErrorPrinter.apply(this,arguments),this._errorPrinter&&this._errorShowed&&DKToolsParam.get("Print Detailed Error","Enabled")&&(this._errorPrinter.style.textAlign="left",this._errorPrinter.height=.8*this._height,this._centerElement(this._errorPrinter))},Graphics.videoFileExt=function(){return Graphics.canPlayVideoType("video/webm")&&!Utils.isMobileDevice()?".webm":".mp4"},void 0===Input.keyMapper[35]&&(Input.keyMapper[35]="end"),void 0===Input.keyMapper[36]&&(Input.keyMapper[36]="home");const DKTools_TouchInput_initialize=TouchInput.initialize;TouchInput.initialize=function(){DKTools_TouchInput_initialize.apply(this,arguments);const t=DKToolsParam.get("Cursor Graphic")||{};if(t.Enabled){const e=t.Graphic;e&&(document.body.style.cursor=`url('img/system/${e}.png'), default`)}};const DKTools_TouchInput_clear=TouchInput.clear;TouchInput.clear=function(){DKTools_TouchInput_clear.apply(this,arguments),this._moved=!1,this._leftButtonPressed=!1,this._middleButtonPressed=!1,this._rightButtonPressed=!1,this._leftButtonReleased=!1,this._middleButtonReleased=!1,this._rightButtonReleased=!1,this._mouseX=0,this._mouseY=0,this._events.moved=!1,this._events.leftButtonPressed=!1,this._events.middleButtonPressed=!1,this._events.rightButtonPressed=!1,this._events.leftButtonReleased=!1,this._events.middleButtonReleased=!1,this._events.rightButtonReleased=!1};const DKTools_TouchInput_update=TouchInput.update;TouchInput.update=function(){this._moved=this._events.moved,this._leftButtonPressed=this._events.leftButtonPressed,this._middleButtonPressed=this._events.middleButtonPressed,this._rightButtonPressed=this._events.rightButtonPressed,this._leftButtonReleased=this._events.leftButtonReleased,this._middleButtonReleased=this._events.middleButtonReleased,this._rightButtonReleased=this._events.rightButtonReleased,this._events.moved=!1,this._events.leftButtonReleased=!1,this._events.middleButtonReleased=!1,this._events.rightButtonReleased=!1,DKTools_TouchInput_update.apply(this,arguments)},TouchInput.isMoved=function(){return this._moved},TouchInput.isMousePressed=function(){return this.isLeftButtonPressed()||this.isMiddleButtonPressed()||this.isRightButtonPressed()},TouchInput.isMouseReleased=function(){return this.isLeftButtonReleased()||this.isMiddleButtonReleased()||this.isRightButtonReleased()},TouchInput.isLeftButtonPressed=function(){return this._leftButtonPressed},TouchInput.isLeftButtonReleased=function(){return this._leftButtonReleased},TouchInput.isMiddleButtonPressed=function(){return this._middleButtonPressed},TouchInput.isMiddleButtonReleased=function(){return this._middleButtonReleased},TouchInput.isRightButtonPressed=function(){return this._rightButtonPressed},TouchInput.isRightButtonReleased=function(){return this._rightButtonReleased},TouchInput.isScreenPressed=function(){return this._screenPressed};const DKTools_TouchInput_onLeftButtonDown=TouchInput._onLeftButtonDown;TouchInput._onLeftButtonDown=function(t){DKTools_TouchInput_onLeftButtonDown.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);Graphics.isInsideCanvas(e,i)&&(this._events.leftButtonPressed=!0)};const DKTools_TouchInput_onMiddleButtonDown=TouchInput._onMiddleButtonDown;TouchInput._onMiddleButtonDown=function(t){DKTools_TouchInput_onMiddleButtonDown.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);Graphics.isInsideCanvas(e,i)&&(this._events.middleButtonPressed=!0)};const DKTools_TouchInput_onRightButtonDown=TouchInput._onRightButtonDown;TouchInput._onRightButtonDown=function(t){DKTools_TouchInput_onRightButtonDown.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);Graphics.isInsideCanvas(e,i)&&(this._events.rightButtonPressed=!0)};const DKTools_TouchInput_onMouseMove=TouchInput._onMouseMove;TouchInput._onMouseMove=function(t){DKTools_TouchInput_onMouseMove.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);this._mouseX===e&&this._mouseY===i||(this._events.moved=!0,this._date=Date.now(),this._mouseX=e,this._mouseY=i)};const DKTools_TouchInput_onMouseUp=TouchInput._onMouseUp;TouchInput._onMouseUp=function(t){DKTools_TouchInput_onMouseUp.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);this._events.leftButtonPressed=!1,this._events.middleButtonPressed=!1,this._events.rightButtonPressed=!1,Graphics.isInsideCanvas(e,i)&&(0===t.button?this._events.leftButtonReleased=!0:1===t.button?this._events.middleButtonReleased=!0:2===t.button&&(this._events.rightButtonReleased=!0))},Object.defineProperties(TouchInput,{mouseX:{get:function(){return this._mouseX},configurable:!0},mouseY:{get:function(){return this._mouseY},configurable:!0}});const DKTools_Tilemap_initialize=Tilemap.prototype.initialize;Tilemap.prototype.initialize=function(){DKTools_Tilemap_initialize.apply(this,arguments),this._tileWidth=Tilemap.TILE_WIDTH||this._tileWidth,this._tileHeight=Tilemap.TILE_HEIGHT||this._tileHeight},Object.defineProperties(Sprite.prototype,{frame:{get:function(){return this._frame},configurable:!0}}),Object.defineProperties(Window.prototype,{innerWidth:{get:function(){return Math.max(0,this._width-2*this._padding)},configurable:!0},innerHeight:{get:function(){return Math.max(0,this._height-2*this._padding)},configurable:!0},frameOpacity:{get:function(){return 255*this._windowFrameSprite.alpha},set:function(t){this._windowFrameSprite.alpha=t.clamp(0,255)/255},configurable:!0},contentsSprite:{get:function(){return this._windowContentsSprite},configurable:!0}});const DKTools_WebAudio_addLoadListener=WebAudio.prototype.addLoadListener;WebAudio.prototype.addLoadListener=function(t){this.isReady()?t(this):DKTools_WebAudio_addLoadListener.apply(this,arguments)},WebAudio.prototype._onLoad=function(){for(;this._loadListeners.length>0;){this._loadListeners.shift()(this)}};const DKTools_DataManager_isDatabaseLoaded=DataManager.isDatabaseLoaded;DataManager.isDatabaseLoaded=function(){return!!DKTools_DataManager_isDatabaseLoaded.call(this)&&(this.__isDatabaseLoaded||(this.__isDatabaseLoaded=!0,this.onDatabaseLoad()),!0)},DataManager.onDatabaseLoad=function(){},Object.defineProperties(ImageManager,{PARALLAXES_FOLDER:{get:function(){if(void 0===this.__parallaxesFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/parallaxes/";if(t.Enabled){const i=t["Parallaxes Folder"];this.__parallaxesFolder__=i?DKTools.IO.normalizePath(i+"/"):e}else this.__parallaxesFolder__=e}return this.__parallaxesFolder__},configurable:!0},TILESETS_FOLDER:{get:function(){if(void 0===this.__tilesetsFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/tilesets/";if(t.Enabled){const i=t["Tilesets Folder"];this.__tilesetsFolder__=i?DKTools.IO.normalizePath(i+"/"):e}else this.__tilesetsFolder__=e}return this.__tilesetsFolder__},configurable:!0}}),ImageManager.imageFileExt=function(){return".png"},ImageManager.loadParallax=function(t,e){return this.loadBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!0)},ImageManager.loadTileset=function(t,e){return this.loadBitmap(ImageManager.TILESETS_FOLDER,t,e,!1)};const DKTools_ImageManager_loadNormalBitmap=ImageManager.loadNormalBitmap;ImageManager.loadNormalBitmap=function(t,e){return DKTools_ImageManager_loadNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e)},ImageManager.reserveParallax=function(t,e,i){return this.reserveBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!1,i)},ImageManager.reserveTileset=function(t,e,i){return this.reserveBitmap(ImageManager.TILESETS_FOLDER,t,e,!1,i)};const DKTools_ImageManager_reserveNormalBitmap=ImageManager.reserveNormalBitmap;ImageManager.reserveNormalBitmap=function(t,e,i){return DKTools_ImageManager_reserveNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e,i)},ImageManager.requestParallax=function(t,e){return this.requestBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!0)},ImageManager.requestTileset=function(t,e){return this.requestBitmap(ImageManager.TILESETS_FOLDER,t,e,!1)};const DKTools_ImageManager_requestNormalBitmap=ImageManager.requestNormalBitmap;ImageManager.requestNormalBitmap=function(t,e){return DKTools_ImageManager_requestNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e)},ImageManager.isLoaded=function(t,e){return this._imageCache.has(this._generateCacheKey(t,e||0))},ImageManager.isReserved=function(t,e,i){const n=this._generateCacheKey(t,e||0);return this._imageCache.isReserved(n,i)||DKTools.PreloadManager.isImageCachedByKey(n)},ImageManager.releaseBitmap=function(t,e){this._imageCache.release(this._generateCacheKey(t,e||0))},AudioManager._audioCache=new AudioCache,AudioManager._generateCacheKey=function(t,e){return DKTools.IO.reverseSlashes(this._path+t+"/"+encodeURIComponent(e)+this.audioFileExt())},AudioManager.createBuffer=function(t,e,i){const n=this._generateCacheKey(t,e);if(this.shouldUseHtml5Audio()&&"bgm"===t)return this._blobUrl?Html5Audio.setup(this._blobUrl):Html5Audio.setup(n),Html5Audio;{let t=this._audioCache.get(n);return t||(t=new WebAudio(n),this._audioCache.reserve(n,t,i||this._defaultReservationId)),t}},AudioManager.releaseReservation=function(t){this._audioCache.releaseReservation(t)},AudioManager.setDefaultReservationId=function(t){this._defaultReservationId=t},AudioManager.isLoaded=function(t,e){return this._audioCache.has(this._generateCacheKey(t,e))},AudioManager.isReserved=function(t,e,i){if("se"===t&&this._staticBuffers.some(t=>t._reservedSeName===e))return!0;const n=this._generateCacheKey(t,e);return this._audioCache.isReserved(n,i)||DKTools.PreloadManager.isAudioCachedByKey(n)},AudioManager.releaseBuffer=function(t,e){this._audioCache.release(this._generateCacheKey(t,e))};const DKTools_SceneManager_initialize=SceneManager.initialize;SceneManager.initialize=async function(){await DKTools_SceneManager_initialize.apply(this,arguments),await DKTools.StartupManager.initialize();const t=DKToolsParam.get("Initial Preloading","Enabled")&&DKToolsParam.get("Initial Preloading","Progress Bar",{key:"Enabled"})&&DKTools.PreloadManager.getTotal()>0;t&&await this.goto(DKTools.PreloadManager.Scene)};const DKTools_SceneManager_initGraphics=SceneManager.initGraphics;SceneManager.initGraphics=function(){const t=DKToolsParam.get("Screen Resolution")||{};if(t.Enabled){const e=t.Width,i=t.Height;this._boxWidth=e,this._screenWidth=e,this._boxHeight=i,this._screenHeight=i,this.updateResolution()}DKTools_SceneManager_initGraphics.apply(this,arguments)},SceneManager.updateResolution=function(){const t=this._screenWidth-window.innerWidth,e=this._screenHeight-window.innerHeight;0!==t&&0!==e&&(window.moveBy(-1*t/2,-1*e/2),window.resizeBy(t,e))};const DKTools_SceneManager_onKeyDown=SceneManager.onKeyDown;SceneManager.onKeyDown=function(t){if(DKTools_SceneManager_onKeyDown.apply(this,arguments),t.ctrlKey||t.altKey)return;const e=DKToolsParam.get("Quick Load","Key Code"),i=DKToolsParam.get("Screenshots","Key Code"),n=DKToolsParam.get("Grid","Key Code"),s=t.keyCode;switch(s){case e:DKTools.Utils.__quickLoad();break;case i:DKToolsParam.get("Screenshots","Enabled")&&DKTools.Utils.makeScreenshot();break;case n:DKTools.Utils.__showGrid()}};const DKTools_SceneManager_catchException=SceneManager.catchException;SceneManager.catchException=function(t){DKTools_SceneManager_catchException.apply(this,arguments),t instanceof Error&&DKToolsParam.get("Print Detailed Error","Enabled")&&Graphics.printDetailedError(t),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&DKTools.Utils.openConsole()};const DKTools_SceneManager_onError=SceneManager.onError;SceneManager.onError=function(t){DKTools_SceneManager_onError.apply(this,arguments),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&DKTools.Utils.openConsole()},SceneManager.changeScene=function(){this.isSceneChanging()&&!this.isCurrentSceneBusy()&&(this._scene&&(this._scene.terminate(),this._scene.detachReservation(),this._previousClass=this._scene.constructor),this._scene=this._nextScene,this._scene&&(this._scene.attachReservation(),this._scene.startPreloading(),this._sceneCreated=!1,this._sceneStarted=!1,this._nextScene=null,this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate())),this._exiting&&this.terminate())},SceneManager.updateScene=function(){if(this._scene){if(!this._sceneCreated&&this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate()),this._sceneCreated&&!this._sceneStarted)try{this._scene.isReady()&&(this._scene.start(),this._sceneStarted=!0,this.onSceneStart())}catch(t){console.error(t),DKTools.Utils.logError(t),this._scene.start(),this._sceneStarted=!0,this.onSceneStart()}this.isCurrentSceneStarted()&&this._scene.update()}},SceneManager.isCurrentScene=function(t){return!!this._scene&&this._scene.constructor===t};const DKTools_SceneManager_goto=SceneManager.goto;SceneManager.goto=function(t){DKTools_SceneManager_goto.apply(this,arguments),DKTools.Utils.__hideGrid()};const DKTools_Scene_Base_initialize=Scene_Base.prototype.initialize;Scene_Base.prototype.initialize=function(){this._preloader=new DKTools.Scene.Preloader,DKTools_Scene_Base_initialize.apply(this,arguments)};const DKTools_Scene_Base_attachReservation=Scene_Base.prototype.attachReservation;Scene_Base.prototype.attachReservation=function(){DKTools_Scene_Base_attachReservation.apply(this,arguments),this._audioReservationId=this._imageReservationId,AudioManager.setDefaultReservationId(this._audioReservationId)};const DKTools_Scene_Base_detachReservation=Scene_Base.prototype.detachReservation;Scene_Base.prototype.detachReservation=function(){DKTools_Scene_Base_detachReservation.apply(this,arguments),AudioManager.releaseReservation(this._audioReservationId)};const DKTools_Scene_Base_create=Scene_Base.prototype.create;Scene_Base.prototype.create=function(){this!==SceneManager._scene&&this.startPreloading(),DKTools_Scene_Base_create.apply(this,arguments)},Scene_Base.prototype.activate=function(){this._active=!0},Scene_Base.prototype.deactivate=function(){this._active=!1},Scene_Base.prototype.isPreloaded=function(){return this._preloader.isReady()};const DKTools_Scene_Base_isReady=Scene_Base.prototype.isReady;Scene_Base.prototype.isReady=function(){return DKTools_Scene_Base_isReady.apply(this,arguments)&&this.isPreloaded()},Scene_Base.prototype.setupPreloading=function(){},Scene_Base.prototype.startPreloading=function(){this.setupPreloading(),this._preloader.start()};const DKTools_Scene_Base_terminate=Scene_Base.prototype.terminate;Scene_Base.prototype.terminate=function(){DKTools_Scene_Base_terminate.apply(this,arguments),this._preloader.finish()};const DKTools_Scene_Boot_isReady=Scene_Boot.prototype.isReady;Scene_Boot.prototype.isReady=function(){return DKTools_Scene_Boot_isReady.apply(this,arguments)&&DKTools.StartupManager.isReady()};const DKTools_Scene_Boot_start=Scene_Boot.prototype.start;Scene_Boot.prototype.start=function(){const t=DKToolsParam.get("Quick Start")||{};t.Enabled?(DKTools_Scene_Boot_start.call(this),DataManager.isBattleTest()||DataManager.isEventTest()||!t["Skip Saves"]&&DataManager.isAnySavefileExists()||(Scene_Base.prototype.start.call(this),SoundManager.preloadImportantSounds(),this.checkPlayerLocation(),DataManager.setupNewGame(),this.updateDocumentTitle(),SceneManager.goto(window[t["Scene Name"]]))):DKTools_Scene_Boot_start.call(this)},Scene_Map.prototype.setupPreloading=function(){Scene_Base.prototype.setupPreloading.call(this),this._setupMapPreloading()},Scene_Map.prototype._setupMapPreloading=function(){const t=DKToolsParam.get("Maps Preloading")||{};if(!t.Enabled)return;const e=$gamePlayer.isTransferring()?$gamePlayer.newMapId():$gameMap.mapId(),i=_.find(t.Maps,{"Map Id":e});i&&(DKTools.PreloadManager.setDebugging(t.Debugging),i["Audio Files"].forEach(t=>{DKTools.PreloadManager.preloadAudio({path:"audio/"+t})}),i["Image Files"].forEach(t=>{DKTools.PreloadManager.preloadImage({path:"img/"+t.Path,hue:t.Hue})}),0!==DKTools.PreloadManager.getTotal()&&(DKTools.PreloadManager.onFileLoad(()=>{Graphics.updateLoading()}),DKTools.PreloadManager.onFinish(()=>{Graphics.endLoading()}),this._preloader.add(DKTools.PreloadManager.start())))};const DKTools_Scene_Map_isReady=Scene_Map.prototype.isReady;Scene_Map.prototype.isReady=function(){return!!this.isPreloaded()&&DKTools_Scene_Map_isReady.call(this)};const DKTools_Scene_Map_terminate=Scene_Map.prototype.terminate;Scene_Map.prototype.terminate=function(){if(!SceneManager.isNextScene(Scene_Map)){const t=Date.now()+3e4;Object.values(ImageManager._imageCache._items).forEach(e=>{e.reservationId===this._imageReservationId&&(e.expiredAt=t,delete e.reservationId)}),Object.values(AudioManager._audioCache._items).forEach(e=>{e.reservationId===this._audioReservationId&&(e.expiredAt=t,delete e.reservationId)})}DKTools_Scene_Map_terminate.apply(this,arguments)};const DKTools_Game_Map_tileWidth=Game_Map.prototype.tileWidth;Game_Map.prototype.tileWidth=function(){return Tilemap.TILE_WIDTH||DKTools_Game_Map_tileWidth.call(this)};const DKTools_Game_Map_tileHeight=Game_Map.prototype.tileHeight;Game_Map.prototype.tileHeight=function(){return Tilemap.TILE_HEIGHT||DKTools_Game_Map_tileHeight.call(this)};const DKTools_Game_Interpreter_pluginCommand=Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand=function(t,e){DKTools_Game_Interpreter_pluginCommand.call(this,t,e),DKTools.PluginCommandManager.process(this,t,e)};const DKTools_Window_Selectable_processCursorMove=Window_Selectable.prototype.processCursorMove;if(Window_Selectable.prototype.processCursorMove=function(){if(this.isCursorMovable()){const t=this.index();Input.isTriggered("home")&&this.select(0),Input.isTriggered("end")&&this.select(Math.max(0,this.maxItems()-1)),this.index()!==t&&SoundManager.playCursor()}DKTools_Window_Selectable_processCursorMove.apply(this,arguments)},DKToolsParam.get("Font Size","Enabled")&&(Window_Base.prototype.standardFontSize=function(){return DKToolsParam.get("Font Size","Size")}),DKToolsParam.get("Line Height","Enabled")&&(Window_Base.prototype.lineHeight=function(){return DKToolsParam.get("Line Height","Height")}),DKToolsParam.get("Window Padding","Enabled")&&(Window_Base.prototype.standardPadding=function(){return DKToolsParam.get("Window Padding","Padding")}),DKToolsParam.get("Mouse Hover","Enabled")){const t=Window_Selectable.prototype.initialize;Window_Selectable.prototype.initialize=function(e,i,n,s){t.apply(this,arguments),this._lastMouseX=TouchInput.mouseX,this._lastMouseY=TouchInput.mouseY};const e=Window_Selectable.prototype.update;Window_Selectable.prototype.update=function(){if(e.apply(this,arguments),this.isCursorMovable()){const t=TouchInput.mouseX,e=TouchInput.mouseY;if(this._lastMouseX!==t||this._lastMouseY!==e){this._lastMouseX=t,this._lastMouseY=e;const i=this.hitTest(this.canvasToLocalX(t),this.canvasToLocalY(e));i>=0&&this.select(i)}}}}if(DKToolsParam.get("Title Menu Command Window","Enabled")&&(Window_TitleCommand.prototype.windowWidth=function(){return eval(DKToolsParam.get("Title Menu Command Window","Width"))},Window_TitleCommand.prototype.updatePlacement=function(){const params=DKToolsParam.get("Title Menu Command Window");this.x=eval(params.X),this.y=eval(params.Y)}),DKToolsParam.get("Title Menu Exit Command","Enabled")){const t=Window_TitleCommand.prototype.createContents;Window_TitleCommand.prototype.createContents=function(){-1===this.findSymbol("exit")&&this.addCommand(DKToolsParam.get("Title Menu Exit Command","Command Name"),"exit"),this.height=this.windowHeight(),t.apply(this,arguments)};const e=Scene_Title.prototype.createCommandWindow;Scene_Title.prototype.createCommandWindow=function(){e.apply(this,arguments),this._commandWindow&&this._commandWindow.setHandler("exit",this.commandExit.bind(this))},Scene_Title.prototype.commandExit=function(){this.fadeOutAll(),SceneManager.exit()}}DKToolsParam.get("Max Savefiles","Enabled")&&(DataManager.maxSavefiles=function(){return DKToolsParam.get("Max Savefiles","Max Savefiles")||1})},747:t=>{t.exports=require("fs")},537:t=>{t.exports=require("nw.gui")},87:t=>{t.exports=require("os")},622:t=>{t.exports=require("path")}},__webpack_module_cache__={};function __webpack_require__(t){if(__webpack_module_cache__[t])return __webpack_module_cache__[t].exports;var e=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),__webpack_require__(372)})();