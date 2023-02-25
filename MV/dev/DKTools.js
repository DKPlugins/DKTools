/*
Title: DKTools
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 11.2.4
Release: 10.02.2023
First release: 13.01.2016
*/

/*ru
Название: DKTools
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 11.2.4
Релиз: 10.02.2023
Первый релиз: 13.01.2016
*/

/*:
* @plugindesc v.11.2.4 [MV] Advanced project testing and various functions. Made with ♥ by DKPlugins.
* @author DKPlugins
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 11.2.4
 Release: 10.02.2023
 First release: 13.01.2016

 ###===========================================================================
 ## Links
 ###===========================================================================

 ### DKTools on DKPlugins ###
 https://dk-plugins.ru/mv/dktools/

 ### DKTools on GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Online documentation ###
 https://dk-plugins.ru/documentation/mv/DKTools/index.html

 ### MZ version ###
 https://dk-plugins.ru/mz/dktools/

 ###===========================================================================
 ## Requirements and dependencies
 ###===========================================================================
 RPG Maker and project version 1.6+

 ###===========================================================================
 ## Compatibility with other plugins
 ###===========================================================================
 Place the following plugins ABOVE in the plugins list (if you are using them):
 1. AudioStreaming

 ###===========================================================================
 ## Functions and parameters
 ###===========================================================================

 All functions are disabled by default! Turn them on in settings!

 ###===========================================================================
 ### File system ###
 File system modes:
 Nwjs + Stamp - Advanced file system mode (all Platforms)
 Nwjs - standard file system mode (PC only)

 In the Nwjs + Stamp mode, each time you start a game TEST, the plugin scans
 project files and saves data to the file "data/Stamp.json"
 This function may cause a slight delay (FPS lag) when starting the game TEST, so
 you can disable this feature using the "Disable auto create stamp" parameter.
 In this case, the data can be manually updated using the plugin command UpdateFileSystemStamp

 Q. Why do I need Nwjs + Stamp file system mode ?
 A. Browsers and old mobile devices do not provide the ability to check for specific files.
 in a particular directory, and also do not provide a list of files and directories.

 Q. Which mode should I choose ?
 A. Nwjs + Stamp, if your project is designed for all platforms (including browsers and mobile devices).

 ## Ignored directories ##
 Only applicable for Nwjs + Stamp mode.
 Ignores specified (and nested) directories when scanning project files.

 ## Disable auto create stamp ##
 Disables automatic file system stamp creation.
 To manually update data use the plugin command UpdateFileSystemStamp

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
 This function only works on PC.

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
 Visit the page: https://dk-plugins.ru/commercial-license/

 ###===========================================================================
 ## Support
 ###===========================================================================
 Donate: https://dk-plugins.ru/donate
 Become a patron: https://www.patreon.com/dkplugins

 * @param System
 * @default ---------------------------------

 * @param File System
 * @parent System
 * @desc File system parameters
 * @type struct<FileSystem>
 * @default {"Mode":"0","Ignored Directories":"[\"node_modules\"]","Disable Auto Create Stamp":"false"}

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
* @plugindesc v.11.2.4 [MV] Расширенное тестирование проекта и различные функции. Сделано с ♥ от DKPlugins.
* @author DKPlugins
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 11.2.4
 Релиз: 10.02.2023
 Первый релиз: 13.01.2016

 ###===========================================================================
 ## Ссылки
 ###===========================================================================

 ### DKTools на DKPlugins ###
 https://dk-plugins.ru/mv/dktools/

 ### DKTools на GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Онлайн документация ###
 https://dk-plugins.ru/documentation/DKTools/index.html

 ### MZ версия ###
 https://dk-plugins.ru/mz/dktools/

 ###===========================================================================
 ## Требования и зависимости
 ###===========================================================================
 Версия мейкера и проекта 1.6+

 ###===========================================================================
 ## Совместимость с другими плагинами
 ###===========================================================================
 Разместите следующие плагины ВЫШЕ в списке плагинов (если вы их используете):
 1. AudioStreaming

 ###===========================================================================
 ## Функции и параметры
 ###===========================================================================

 Все функцию по умолчанию отключены! Включайте их в настройках плагина!

 ###===========================================================================
 ### Файловая система ###
 Режимы работы файловой системы:
 Nwjs + Stamp - Расширенный режим работы файловой системы (все платформы)
 Nwjs - стандартный режим работы файловой системы (только PC)

 В режиме Nwjs + Stamp каждый раз при запуске ТЕСТА игры плагин сканирует
 файлы проекта и сохраняет данные в файл "data/Stamp.json".
 Эта функция может вызвать небольшую задержку при запуске ТЕСТА игры, поэтому
 вы можете отключить эту функцию с помощью параметра "Отключить автоматическое создания штампа".
 В таком случае данные могут быть обновлены вручную с помощью команды плагина UpdateFileSystemStamp

 Q. Зачем нужен режим работы Nwjs + Stamp ?
 A. Браузеры и старые мобильные устройства не предоставляют возможность проверять наличие конкретных файлов
 в той или иной директории, а также не предоставляют список файлов и директорий.

 Q. Какой режим выбрать мне ?
 A. Nwjs + Stamp, если Ваш проект расчитан на все платформы (включая браузеры и мобильные устройства).

 ## Игнорируемые директории ##
 Применяется только для режима Nwjs + Stamp.
 Игнорирует указанные (и вложенные) директории при сканировании файлов проекта.

 ## Отключить автоматическое создания штампа ##
 Отключает автоматическое создание штампа файловой системы.
 Для ручного обновления данных используйте команду плагина UpdateFileSystemStamp

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
 Эта функция работает только на ПК.

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
 Посетите страницу: https://dk-plugins.ru/commercial-license/

 ###===========================================================================
 ## Поддержка
 ###===========================================================================
 Поддержать: https://dk-plugins.ru/donate
 Стать патроном: https://www.patreon.com/dkplugins

 * @param System
 * @text Система
 * @default ---------------------------------

 * @param File System
 * @text Файловая система
 * @parent System
 * @desc Параметры файловой системы
 * @type struct<FileSystem>
 * @default {"Mode":"0","Ignored Directories":"[\"node_modules\"]","Disable Auto Create Stamp":"false"}

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

 * @param Disable Auto Create Stamp
 * @desc Disable auto create stamp
 * @type boolean
 * @default false

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

 * @param Disable Auto Create Stamp
 * @text Отключить автоматическое создания штампа
 * @desc Отключить автоматическое создания штампа
 * @type boolean
 * @default false

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
 * @default {"Enabled":"false","Background":"","Progress Bar X":"(Graphics.boxWidth - width) * 2 / 4","Progress Bar Y":"(Graphics.boxHeight - height) * 2 / 4","Progress Bar Text":"Loading: %1","Progress Bar Text Size":"28","Progress Bar Style":"colors","Colors Style":"","Progress Bar Width":"Graphics.boxWidth * 2 / 4","Progress Bar Height":"48","Progress Bar Background Color":"grey","Progress Bar Progress Color":"#33ccff","Preparation Text":"Preparing...","Images Style":"","Progress Bar Background Image":"","Progress Bar Progress Image":""}

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
 * @default {"Enabled":"false","Background":"","Progress Bar X":"(Graphics.boxWidth - width) * 2 / 4","Progress Bar Y":"(Graphics.boxHeight - height) * 2 / 4","Progress Bar Text":"Загрузка: %1","Progress Bar Text Size":"28","Progress Bar Style":"colors","Colors Style":"","Progress Bar Width":"Graphics.boxWidth * 2 / 4","Progress Bar Height":"48","Progress Bar Background Color":"grey","Progress Bar Progress Color":"#33ccff","Preparation Text":"Подготовка...","Images Style":"","Progress Bar Background Image":"","Progress Bar Progress Image":""}

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

 * @param Preparation Text
 * @parent Colors Style
 * @desc Preparation text for preloading
 * @default Preparing...

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

 * @param Preparation Text
 * @text Текст подготовки
 * @parent Colors Style
 * @desc Текст подготовки для предварительной нагрузки
 * @default Подготовка...

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
 * @desc Grid line color in hex format
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
 * @desc Цвет сетки в hex формате
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

(()=>{"use strict";var __webpack_modules__={372:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;module=__webpack_require__.nmd(module),window.Imported=window.Imported||{},window.Imported.DKTools="11.2.4",function(){function t(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}function e(t,e,i,n){for(var o=-1,s=null==t?0:t.length;++o<s;){var r=t[o];e(n,r,i(r),t)}return n}function i(t,e){for(var i=-1,n=null==t?0:t.length;++i<n&&!1!==e(t[i],i,t););return t}function n(t,e){for(var i=null==t?0:t.length;i--&&!1!==e(t[i],i,t););return t}function o(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(!e(t[i],i,t))return!1;return!0}function s(t,e){for(var i=-1,n=null==t?0:t.length,o=0,s=[];++i<n;){var r=t[i];e(r,i,t)&&(s[o++]=r)}return s}function r(t,e){return!(null==t||!t.length)&&-1<_(t,e,0)}function a(t,e,i){for(var n=-1,o=null==t?0:t.length;++n<o;)if(i(e,t[n]))return!0;return!1}function l(t,e){for(var i=-1,n=null==t?0:t.length,o=Array(n);++i<n;)o[i]=e(t[i],i,t);return o}function u(t,e){for(var i=-1,n=e.length,o=t.length;++i<n;)t[o+i]=e[i];return t}function c(t,e,i,n){var o=-1,s=null==t?0:t.length;for(n&&s&&(i=t[++o]);++o<s;)i=e(i,t[o],o,t);return i}function h(t,e,i,n){var o=null==t?0:t.length;for(n&&o&&(i=t[--o]);o--;)i=e(i,t[o],o,t);return i}function p(t,e){for(var i=-1,n=null==t?0:t.length;++i<n;)if(e(t[i],i,t))return!0;return!1}function d(t,e,i){var n;return i(t,(function(t,i,o){if(e(t,i,o))return n=i,!1})),n}function f(t,e,i,n){var o=t.length;for(i+=n?1:-1;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}function _(t,e,i){if(e==e)t:{--i;for(var n=t.length;++i<n;)if(t[i]===e){t=i;break t}t=-1}else t=f(t,m,i);return t}function g(t,e,i,n){--i;for(var o=t.length;++i<o;)if(n(t[i],e))return i;return-1}function m(t){return t!=t}function y(t,e){var i=null==t?0:t.length;return i?v(t,e)/i:F}function T(t){return function(e){return null==e?W:e[t]}}function D(t){return function(e){return null==t?W:t[e]}}function w(t,e,i,n,o){return o(t,(function(t,o,s){i=n?(n=!1,t):e(i,t,o,s)})),i}function v(t,e){for(var i,n=-1,o=t.length;++n<o;){var s=e(t[n]);s!==W&&(i=i===W?s:i+s)}return i}function S(t,e){for(var i=-1,n=Array(t);++i<t;)n[i]=e(i);return n}function K(t){return function(e){return t(e)}}function b(t,e){return l(e,(function(e){return t[e]}))}function A(t,e){return t.has(e)}function E(t,e){for(var i=-1,n=t.length;++i<n&&-1<_(e,t[i],0););return i}function I(t,e){for(var i=t.length;i--&&-1<_(e,t[i],0););return i}function O(t){return"\\"+xt[t]}function x(t){var e=-1,i=Array(t.size);return t.forEach((function(t,n){i[++e]=[n,t]})),i}function C(t,e){return function(i){return t(e(i))}}function P(t,e){for(var i=-1,n=t.length,o=0,s=[];++i<n;){var r=t[i];r!==e&&"__lodash_placeholder__"!==r||(t[i]="__lodash_placeholder__",s[o++]=i)}return s}function M(t){var e=-1,i=Array(t.size);return t.forEach((function(t){i[++e]=t})),i}function B(t){if(bt.test(t)){for(var e=St.lastIndex=0;St.test(t);)++e;t=e}else t=Vt(t);return t}function R(t){return bt.test(t)?t.match(St)||[]:t.split("")}var W,L=1/0,F=NaN,j=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],H=/\b__p\+='';/g,N=/\b(__p\+=)''\+/g,U=/(__e\(.*?\)|\b__t\))\+'';/g,k=/&(?:amp|lt|gt|quot|#39);/g,z=/[&<>"']/g,G=RegExp(k.source),X=RegExp(z.source),V=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,$=/<%=([\s\S]+?)%>/g,q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/[\\^$.*+?()[\]{}|]/g,tt=RegExp(Q.source),et=/^\s+|\s+$/g,it=/^\s+/,nt=/\s+$/,ot=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,st=/\{\n\/\* \[wrapped with (.+)\] \*/,rt=/,? & /,at=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lt=/\\(\\)?/g,ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ct=/\w*$/,ht=/^[-+]0x[0-9a-f]+$/i,pt=/^0b[01]+$/i,dt=/^\[object .+?Constructor\]$/,ft=/^0o[0-7]+$/i,_t=/^(?:0|[1-9]\d*)$/,gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,mt=/($^)/,yt=/['\n\r\u2028\u2029\\]/g,Tt="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Dt="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+Tt,wt=RegExp("['’]","g"),vt=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),St=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])"+Tt,"g"),Kt=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",Dt].join("|"),"g"),bt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),At=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Et="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),It={};It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;var Ot={};Ot["[object Arguments]"]=Ot["[object Array]"]=Ot["[object ArrayBuffer]"]=Ot["[object DataView]"]=Ot["[object Boolean]"]=Ot["[object Date]"]=Ot["[object Float32Array]"]=Ot["[object Float64Array]"]=Ot["[object Int8Array]"]=Ot["[object Int16Array]"]=Ot["[object Int32Array]"]=Ot["[object Map]"]=Ot["[object Number]"]=Ot["[object Object]"]=Ot["[object RegExp]"]=Ot["[object Set]"]=Ot["[object String]"]=Ot["[object Symbol]"]=Ot["[object Uint8Array]"]=Ot["[object Uint8ClampedArray]"]=Ot["[object Uint16Array]"]=Ot["[object Uint32Array]"]=!0,Ot["[object Error]"]=Ot["[object Function]"]=Ot["[object WeakMap]"]=!1;var xt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ct=parseFloat,Pt=parseInt,Mt="object"==typeof global&&global&&global.Object===Object&&global,Bt="object"==typeof self&&self&&self.Object===Object&&self,Rt=Mt||Bt||Function("return this")(),Wt=exports&&!exports.nodeType&&exports,Lt=Wt&&module&&!module.nodeType&&module,Ft=Lt&&Lt.exports===Wt,jt=Ft&&Mt.process,Ht=function(){try{var t=Lt&&Lt.require&&Lt.require("util").types;return t||jt&&jt.binding&&jt.binding("util")}catch(t){}}(),Nt=Ht&&Ht.isArrayBuffer,Ut=Ht&&Ht.isDate,kt=Ht&&Ht.isMap,zt=Ht&&Ht.isRegExp,Gt=Ht&&Ht.isSet,Xt=Ht&&Ht.isTypedArray,Vt=T("length"),Yt=D({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),$t=D({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),qt=D({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),Jt=function D(Tt){function Dt(t){if($n(t)&&!Lr(t)&&!(t instanceof Mt)){if(t instanceof xt)return t;if(Fo.call(t,"__wrapped__"))return wn(t)}return new xt(t)}function St(){}function xt(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=W}function Mt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Bt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function Wt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function Lt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var n=t[e];this.set(n[0],n[1])}}function jt(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new Lt;++e<i;)this.add(t[e])}function Ht(t){this.size=(this.__data__=new Wt(t)).size}function Vt(t,e){var i,n=Lr(t),o=!n&&Wr(t),s=!n&&!o&&jr(t),r=!n&&!o&&!s&&zr(t),a=(o=(n=n||o||s||r)?S(t.length,Po):[]).length;for(i in t)!e&&!Fo.call(t,i)||n&&("length"==i||s&&("offset"==i||"parent"==i)||r&&("buffer"==i||"byteLength"==i||"byteOffset"==i)||an(i,a))||o.push(i);return o}function Zt(t){var e=t.length;return e?t[ze(0,e-1)]:W}function Qt(t,e){return mn(Di(t),le(e,0,t.length))}function te(t){return mn(Di(t))}function ee(t,e,i){(i===W||Nn(t[e],i))&&(i!==W||e in t)||re(t,e,i)}function ie(t,e,i){var n=t[e];Fo.call(t,e)&&Nn(n,i)&&(i!==W||e in t)||re(t,e,i)}function ne(t,e){for(var i=t.length;i--;)if(Nn(t[i][0],e))return i;return-1}function oe(t,e,i,n){return Ws(t,(function(t,o,s){e(n,t,i(t),s)})),n}function se(t,e){return t&&wi(e,uo(e),t)}function re(t,e,i){"__proto__"==e&&is?is(t,e,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[e]=i}function ae(t,e){for(var i=-1,n=e.length,o=bo(n),s=null==t;++i<n;)o[i]=s?W:ao(t,e[i]);return o}function le(t,e,i){return t==t&&(i!==W&&(t=t<=i?t:i),e!==W&&(t=t>=e?t:e)),t}function ue(t,e,n,o,s,r){var a,l=1&e,u=2&e,c=4&e;if(n&&(a=s?n(t,o,s,r):n(t)),a!==W)return a;if(!Yn(t))return t;if(o=Lr(t)){if(a=function(t){var e=t.length,i=new t.constructor(e);return e&&"string"==typeof t[0]&&Fo.call(t,"index")&&(i.index=t.index,i.input=t.input),i}(t),!l)return Di(t,a)}else{var h=Vs(t),p="[object Function]"==h||"[object GeneratorFunction]"==h;if(jr(t))return fi(t,l);if("[object Object]"==h||"[object Arguments]"==h||p&&!s){if(a=u||p?{}:sn(t),!l)return u?function(t,e){return wi(t,Xs(t),e)}(t,function(t,e){return t&&wi(e,co(e),t)}(a,t)):function(t,e){return wi(t,Gs(t),e)}(t,se(a,t))}else{if(!Ot[h])return s?t:{};a=function(t,e,i){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return _i(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return e=i?_i(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return gi(t,i);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return(e=new t.constructor(t.source,ct.exec(t))).lastIndex=t.lastIndex,e;case"[object Set]":return new n;case"[object Symbol]":return Ms?xo(Ms.call(t)):{}}}(t,h,l)}}if(r||(r=new Ht),s=r.get(t))return s;if(r.set(t,a),kr(t))return t.forEach((function(i){a.add(ue(i,e,n,i,t,r))})),a;if(Nr(t))return t.forEach((function(i,o){a.set(o,ue(i,e,n,o,t,r))})),a;u=c?u?qi:$i:u?co:uo;var d=o?W:u(t);return i(d||t,(function(i,o){d&&(i=t[o=i]),ie(a,o,ue(i,e,n,o,t,r))})),a}function ce(t,e,i){var n=i.length;if(null==t)return!n;for(t=xo(t);n--;){var o=i[n],s=e[o],r=t[o];if(r===W&&!(o in t)||!s(r))return!1}return!0}function he(t,e,i){if("function"!=typeof t)throw new Mo("Expected a function");return qs((function(){t.apply(W,i)}),e)}function pe(t,e,i,n){var o=-1,s=r,u=!0,c=t.length,h=[],p=e.length;if(!c)return h;i&&(e=l(e,K(i))),n?(s=a,u=!1):200<=e.length&&(s=A,u=!1,e=new jt(e));t:for(;++o<c;){var d=t[o],f=null==i?d:i(d);d=n||0!==d?d:0;if(u&&f==f){for(var _=p;_--;)if(e[_]===f)continue t;h.push(d)}else s(e,f,n)||h.push(d)}return h}function de(t,e){var i=!0;return Ws(t,(function(t,n,o){return i=!!e(t,n,o)})),i}function fe(t,e,i){for(var n=-1,o=t.length;++n<o;){var s=t[n],r=e(s);if(null!=r&&(a===W?r==r&&!Qn(r):i(r,a)))var a=r,l=s}return l}function _e(t,e){var i=[];return Ws(t,(function(t,n,o){e(t,n,o)&&i.push(t)})),i}function ge(t,e,i,n,o){var s=-1,r=t.length;for(i||(i=rn),o||(o=[]);++s<r;){var a=t[s];0<e&&i(a)?1<e?ge(a,e-1,i,n,o):u(o,a):n||(o[o.length]=a)}return o}function me(t,e){return t&&Fs(t,e,uo)}function ye(t,e){return t&&js(t,e,uo)}function Te(t,e){return s(e,(function(e){return Gn(t[e])}))}function De(t,e){for(var i=0,n=(e=pi(e,t)).length;null!=t&&i<n;)t=t[yn(e[i++])];return i&&i==n?t:W}function we(t,e,i){return e=e(t),Lr(t)?e:u(e,i(t))}function ve(t){if(null==t)return t===W?"[object Undefined]":"[object Null]";if(es&&es in xo(t)){var e=Fo.call(t,es),i=t[es];try{t[es]=W;var n=!0}catch(t){}var o=No.call(t);n&&(e?t[es]=i:delete t[es]),t=o}else t=No.call(t);return t}function Se(t,e){return t>e}function Ke(t,e){return null!=t&&Fo.call(t,e)}function be(t,e){return null!=t&&e in xo(t)}function Ae(t,e,i){for(var n=i?a:r,o=t[0].length,s=t.length,u=s,c=bo(s),h=1/0,p=[];u--;){var d=t[u];u&&e&&(d=l(d,K(e))),h=fs(d.length,h),c[u]=!i&&(e||120<=o&&120<=d.length)?new jt(u&&d):W}d=t[0];var f=-1,_=c[0];t:for(;++f<o&&p.length<h;){var g=d[f],m=e?e(g):g;g=i||0!==g?g:0;if(_?!A(_,m):!n(p,m,i)){for(u=s;--u;){var y=c[u];if(y?!A(y,m):!n(t[u],m,i))continue t}_&&_.push(m),p.push(g)}}return p}function Ee(e,i,n){return null==(i=null==(e=2>(i=pi(i,e)).length?e:De(e,Je(i,0,-1)))?e:e[yn(An(i))])?W:t(i,e,n)}function Ie(t){return $n(t)&&"[object Arguments]"==ve(t)}function Oe(t,e,i,n,o){if(t===e)return!0;if(null==t||null==e||!$n(t)&&!$n(e))return t!=t&&e!=e;t:{var s,r,a=Lr(t),l=Lr(e),u="[object Object]"==(s="[object Arguments]"==(s=a?"[object Array]":Vs(t))?"[object Object]":s);l="[object Object]"==(r="[object Arguments]"==(r=l?"[object Array]":Vs(e))?"[object Object]":r);if((r=s==r)&&jr(t)){if(!jr(e)){e=!1;break t}a=!0,u=!1}if(r&&!u)o||(o=new Ht),e=a||zr(t)?Vi(t,e,i,n,Oe,o):function(t,e,i,n,o,s,r){switch(i){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!s(new Vo(t),new Vo(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return Nn(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=x;case"[object Set]":if(a||(a=M),t.size!=e.size&&!(1&n))break;return(i=r.get(t))?i==e:(n|=2,r.set(t,e),e=Vi(a(t),a(e),n,o,s,r),r.delete(t),e);case"[object Symbol]":if(Ms)return Ms.call(t)==Ms.call(e)}return!1}(t,e,s,i,n,Oe,o);else{if(!(1&i)&&(a=u&&Fo.call(t,"__wrapped__"),s=l&&Fo.call(e,"__wrapped__"),a||s)){t=a?t.value():t,e=s?e.value():e,o||(o=new Ht),e=Oe(t,e,i,n,o);break t}if(r)e:if(o||(o=new Ht),a=1&i,s=$i(t),l=s.length,r=$i(e).length,l==r||a){for(u=l;u--;){var c=s[u];if(!(a?c in e:Fo.call(e,c))){e=!1;break e}}if((r=o.get(t))&&o.get(e))e=r==e;else{r=!0,o.set(t,e),o.set(e,t);for(var h=a;++u<l;){var p=t[c=s[u]],d=e[c];if(n)var f=a?n(d,p,c,e,t,o):n(p,d,c,t,e,o);if(f===W?p!==d&&!Oe(p,d,i,n,o):!f){r=!1;break}h||(h="constructor"==c)}r&&!h&&((i=t.constructor)!=(n=e.constructor)&&"constructor"in t&&"constructor"in e&&!("function"==typeof i&&i instanceof i&&"function"==typeof n&&n instanceof n)&&(r=!1)),o.delete(t),o.delete(e),e=r}}else e=!1;else e=!1}}return e}function xe(t,e,i,n){var o=i.length,s=o,r=!n;if(null==t)return!s;for(t=xo(t);o--;){var a=i[o];if(r&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<s;){var l=(a=i[o])[0],u=t[l],c=a[1];if(r&&a[2]){if(u===W&&!(l in t))return!1}else{if(a=new Ht,n)var h=n(u,c,l,t,e,a);if(h===W?!Oe(c,u,3,n,a):!h)return!1}}return!0}function Ce(t){return!(!Yn(t)||Ho&&Ho in t)&&(Gn(t)?zo:dt).test(Tn(t))}function Pe(t){return"function"==typeof t?t:null==t?yo:"object"==typeof t?Lr(t)?Le(t[0],t[1]):We(t):vo(t)}function Me(t){if(!hn(t))return ps(t);var e,i=[];for(e in xo(t))Fo.call(t,e)&&"constructor"!=e&&i.push(e);return i}function Be(t,e){return t<e}function Re(t,e){var i=-1,n=Un(t)?bo(t.length):[];return Ws(t,(function(t,o,s){n[++i]=e(t,o,s)})),n}function We(t){var e=en(t);return 1==e.length&&e[0][2]?pn(e[0][0],e[0][1]):function(i){return i===t||xe(i,t,e)}}function Le(t,e){return un(t)&&e==e&&!Yn(e)?pn(yn(t),e):function(i){var n=ao(i,t);return n===W&&n===e?lo(i,t):Oe(e,n,3)}}function Fe(t,e,i,n,o){t!==e&&Fs(e,(function(s,r){if(Yn(s)){o||(o=new Ht);var a=o,l=fn(t,r),u=fn(e,r);if(!(f=a.get(u))){var c=(f=n?n(l,u,r+"",t,e,a):W)===W;if(c){var h=Lr(u),p=!h&&jr(u),d=!h&&!p&&zr(u),f=u;h||p||d?Lr(l)?f=l:kn(l)?f=Di(l):p?(c=!1,f=fi(u,!0)):d?(c=!1,f=gi(u,!0)):f=[]:Jn(u)||Wr(u)?(f=l,Wr(l)?f=so(l):Yn(l)&&!Gn(l)||(f=sn(u))):c=!1}c&&(a.set(u,f),Fe(f,u,i,n,a),a.delete(u))}ee(t,r,f)}else(a=n?n(fn(t,r),s,r+"",t,e,o):W)===W&&(a=s),ee(t,r,a)}),co)}function je(t,e){var i=t.length;if(i)return an(e+=0>e?i:0,i)?t[e]:W}function He(t,e,i){var n=-1;return e=l(e.length?e:[yo],K(Qi())),function(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].c;return t}(t=Re(t,(function(t,i,o){return{a:l(e,(function(e){return e(t)})),b:++n,c:t}})),(function(t,e){var n;t:{n=-1;for(var o=t.a,s=e.a,r=o.length,a=i.length;++n<r;){var l=mi(o[n],s[n]);if(l){if(n>=a){n=l;break t}n=l*("desc"==i[n]?-1:1);break t}}n=t.b-e.b}return n}))}function Ne(t,e,i){for(var n=-1,o=e.length,s={};++n<o;){var r=e[n],a=De(t,r);i(a,r)&&$e(s,pi(r,t),a)}return s}function Ue(t,e,i,n){var o=n?g:_,s=-1,r=e.length,a=t;for(t===e&&(e=Di(e)),i&&(a=l(t,K(i)));++s<r;){var u=0,c=e[s];for(c=i?i(c):c;-1<(u=o(a,c,u,n));)a!==t&&Zo.call(a,u,1),Zo.call(t,u,1)}return t}function ke(t,e){for(var i=t?e.length:0,n=i-1;i--;){var o=e[i];if(i==n||o!==s){var s=o;an(o)?Zo.call(t,o,1):si(t,o)}}return t}function ze(t,e){return t+as(ms()*(e-t+1))}function Ge(t,e){var i="";if(!t||1>e||9007199254740991<e)return i;do{e%2&&(i+=t),(e=as(e/2))&&(t+=t)}while(e);return i}function Xe(t,e){return Js(dn(t,e,yo),t+"")}function Ve(t){return Zt(po(t))}function Ye(t,e){var i=po(t);return mn(i,le(e,0,i.length))}function $e(t,e,i,n){if(!Yn(t))return t;for(var o=-1,s=(e=pi(e,t)).length,r=s-1,a=t;null!=a&&++o<s;){var l=yn(e[o]),u=i;if(o!=r){var c=a[l];(u=n?n(c,l,a):W)===W&&(u=Yn(c)?c:an(e[o+1])?[]:{})}ie(a,l,u),a=a[l]}return t}function qe(t){return mn(po(t))}function Je(t,e,i){var n=-1,o=t.length;for(0>e&&(e=-e>o?0:o+e),0>(i=i>o?o:i)&&(i+=o),o=e>i?0:i-e>>>0,e>>>=0,i=bo(o);++n<o;)i[n]=t[n+e];return i}function Ze(t,e){var i;return Ws(t,(function(t,n,o){return!(i=e(t,n,o))})),!!i}function Qe(t,e,i){var n=0,o=null==t?n:t.length;if("number"==typeof e&&e==e&&2147483647>=o){for(;n<o;){var s=n+o>>>1,r=t[s];null!==r&&!Qn(r)&&(i?r<=e:r<e)?n=s+1:o=s}return o}return ti(t,e,yo,i)}function ti(t,e,i,n){e=i(e);for(var o=0,s=null==t?0:t.length,r=e!=e,a=null===e,l=Qn(e),u=e===W;o<s;){var c=as((o+s)/2),h=i(t[c]),p=h!==W,d=null===h,f=h==h,_=Qn(h);(r?n||f:u?f&&(n||p):a?f&&p&&(n||!d):l?f&&p&&!d&&(n||!_):!d&&!_&&(n?h<=e:h<e))?o=c+1:s=c}return fs(s,4294967294)}function ei(t,e){for(var i=-1,n=t.length,o=0,s=[];++i<n;){var r=t[i],a=e?e(r):r;if(!i||!Nn(a,l)){var l=a;s[o++]=0===r?0:r}}return s}function ii(t){return"number"==typeof t?t:Qn(t)?F:+t}function ni(t){if("string"==typeof t)return t;if(Lr(t))return l(t,ni)+"";if(Qn(t))return Bs?Bs.call(t):"";var e=t+"";return"0"==e&&1/t==-L?"-0":e}function oi(t,e,i){var n=-1,o=r,s=t.length,l=!0,u=[],c=u;if(i)l=!1,o=a;else if(200<=s){if(o=e?null:ks(t))return M(o);l=!1,o=A,c=new jt}else c=e?[]:u;t:for(;++n<s;){var h=t[n],p=e?e(h):h;h=i||0!==h?h:0;if(l&&p==p){for(var d=c.length;d--;)if(c[d]===p)continue t;e&&c.push(p),u.push(h)}else o(c,p,i)||(c!==u&&c.push(p),u.push(h))}return u}function si(t,e){return null==(t=2>(e=pi(e,t)).length?t:De(t,Je(e,0,-1)))||delete t[yn(An(e))]}function ri(t,e,i,n){for(var o=t.length,s=n?o:-1;(n?s--:++s<o)&&e(t[s],s,t););return i?Je(t,n?0:s,n?s+1:o):Je(t,n?s+1:0,n?o:s)}function ai(t,e){var i=t;return i instanceof Mt&&(i=i.value()),c(e,(function(t,e){return e.func.apply(e.thisArg,u([t],e.args))}),i)}function li(t,e,i){var n=t.length;if(2>n)return n?oi(t[0]):[];for(var o=-1,s=bo(n);++o<n;)for(var r=t[o],a=-1;++a<n;)a!=o&&(s[o]=pe(s[o]||r,t[a],e,i));return oi(ge(s,1),e,i)}function ui(t,e,i){for(var n=-1,o=t.length,s=e.length,r={};++n<o;)i(r,t[n],n<s?e[n]:W);return r}function ci(t){return kn(t)?t:[]}function hi(t){return"function"==typeof t?t:yo}function pi(t,e){return Lr(t)?t:un(t,e)?[t]:Zs(ro(t))}function di(t,e,i){var n=t.length;return i=i===W?n:i,!e&&i>=n?t:Je(t,e,i)}function fi(t,e){if(e)return t.slice();var i=t.length;i=Yo?Yo(i):new t.constructor(i);return t.copy(i),i}function _i(t){var e=new t.constructor(t.byteLength);return new Vo(e).set(new Vo(t)),e}function gi(t,e){return new t.constructor(e?_i(t.buffer):t.buffer,t.byteOffset,t.length)}function mi(t,e){if(t!==e){var i=t!==W,n=null===t,o=t==t,s=Qn(t),r=e!==W,a=null===e,l=e==e,u=Qn(e);if(!a&&!u&&!s&&t>e||s&&r&&l&&!a&&!u||n&&r&&l||!i&&l||!o)return 1;if(!n&&!s&&!u&&t<e||u&&i&&o&&!n&&!s||a&&i&&o||!r&&o||!l)return-1}return 0}function yi(t,e,i,n){var o=-1,s=t.length,r=i.length,a=-1,l=e.length,u=ds(s-r,0),c=bo(l+u);for(n=!n;++a<l;)c[a]=e[a];for(;++o<r;)(n||o<s)&&(c[i[o]]=t[o]);for(;u--;)c[a++]=t[o++];return c}function Ti(t,e,i,n){var o=-1,s=t.length,r=-1,a=i.length,l=-1,u=e.length,c=ds(s-a,0),h=bo(c+u);for(n=!n;++o<c;)h[o]=t[o];for(c=o;++l<u;)h[c+l]=e[l];for(;++r<a;)(n||o<s)&&(h[c+i[r]]=t[o++]);return h}function Di(t,e){var i=-1,n=t.length;for(e||(e=bo(n));++i<n;)e[i]=t[i];return e}function wi(t,e,i,n){var o=!i;i||(i={});for(var s=-1,r=e.length;++s<r;){var a=e[s],l=n?n(i[a],t[a],a,i,t):W;l===W&&(l=t[a]),o?re(i,a,l):ie(i,a,l)}return i}function vi(t,i){return function(n,o){var s=Lr(n)?e:oe,r=i?i():{};return s(n,t,Qi(o,2),r)}}function Si(t){return Xe((function(e,i){var n=-1,o=i.length,s=1<o?i[o-1]:W,r=2<o?i[2]:W;s=3<t.length&&"function"==typeof s?(o--,s):W;for(r&&ln(i[0],i[1],r)&&(s=3>o?W:s,o=1),e=xo(e);++n<o;)(r=i[n])&&t(e,r,n,s);return e}))}function Ki(t,e){return function(i,n){if(null==i)return i;if(!Un(i))return t(i,n);for(var o=i.length,s=e?o:-1,r=xo(i);(e?s--:++s<o)&&!1!==n(r[s],s,r););return i}}function bi(t){return function(e,i,n){for(var o=-1,s=xo(e),r=(n=n(e)).length;r--;){var a=n[t?r:++o];if(!1===i(s[a],a,s))break}return e}}function Ai(t){return function(e){e=ro(e);var i=bt.test(e)?R(e):W,n=i?i[0]:e.charAt(0);return e=i?di(i,1).join(""):e.slice(1),n[t]()+e}}function Ei(t){return function(e){return c(go(_o(e).replace(wt,"")),t,"")}}function Ii(t){return function(){switch((e=arguments).length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var e,i=Rs(t.prototype);return Yn(e=t.apply(i,e))?e:i}}function Oi(e,i,n){var o=Ii(e);return function s(){for(var r=arguments.length,a=bo(r),l=r,u=Zi(s);l--;)a[l]=arguments[l];return(r-=(l=3>r&&a[0]!==u&&a[r-1]!==u?[]:P(a,u)).length)<n?Hi(e,i,Pi,s.placeholder,W,a,l,W,W,n-r):t(this&&this!==Rt&&this instanceof s?o:e,this,a)}}function xi(t){return function(e,i,n){var o=xo(e);if(!Un(e)){var s=Qi(i,3);e=uo(e),i=function(t){return s(o[t],t,o)}}return-1<(i=t(e,i,n))?o[s?e[i]:i]:W}}function Ci(t){return Yi((function(e){var i=e.length,n=i,o=xt.prototype.thru;for(t&&e.reverse();n--;){if("function"!=typeof(r=e[n]))throw new Mo("Expected a function");if(o&&!s&&"wrapper"==Ji(r))var s=new xt([],!0)}for(n=s?n:i;++n<i;){var r,a="wrapper"==(o=Ji(r=e[n]))?zs(r):W;s=a&&cn(a[0])&&424==a[1]&&!a[4].length&&1==a[9]?s[Ji(a[0])].apply(s,a[3]):1==r.length&&cn(r)?s[o]():s.thru(r)}return function(){var t=(o=arguments)[0];if(s&&1==o.length&&Lr(t))return s.plant(t).value();for(var n=0,o=i?e[n].apply(this,o):t;++n<i;)o=e[n].call(this,o);return o}}))}function Pi(t,e,i,n,o,s,r,a,l,u){var c=128&e,h=1&e,p=2&e,d=24&e,f=512&e,_=p?W:Ii(t);return function g(){for(var m=arguments.length,y=bo(m),T=m;T--;)y[T]=arguments[T];if(d){var D,w=Zi(g);T=y.length;for(D=0;T--;)y[T]===w&&++D}if(n&&(y=yi(y,n,o,d)),s&&(y=Ti(y,s,r,d)),m-=D,d&&m<u)return w=P(y,w),Hi(t,e,Pi,g.placeholder,i,y,w,a,l,u-m);if(w=h?i:this,T=p?w[t]:t,m=y.length,a){D=y.length;for(var v=fs(a.length,D),S=Di(y);v--;){var K=a[v];y[v]=an(K,D)?S[K]:W}}else f&&1<m&&y.reverse();return c&&l<m&&(y.length=l),this&&this!==Rt&&this instanceof g&&(T=_||Ii(T)),T.apply(w,y)}}function Mi(t,e){return function(i,n){return function(t,e,i,n){return me(t,(function(t,o,s){e(n,i(t),o,s)})),n}(i,t,e(n),{})}}function Bi(t,e){return function(i,n){var o;if(i===W&&n===W)return e;if(i!==W&&(o=i),n!==W){if(o===W)return n;"string"==typeof i||"string"==typeof n?(i=ni(i),n=ni(n)):(i=ii(i),n=ii(n)),o=t(i,n)}return o}}function Ri(e){return Yi((function(i){return i=l(i,K(Qi())),Xe((function(n){var o=this;return e(i,(function(e){return t(e,o,n)}))}))}))}function Wi(t,e){var i=(e=e===W?" ":ni(e)).length;return 2>i?i?Ge(e,t):e:(i=Ge(e,rs(t/B(e))),bt.test(e)?di(R(i),0,t).join(""):i.slice(0,t))}function Li(e,i,n,o){var s=1&i,r=Ii(e);return function i(){for(var a=-1,l=arguments.length,u=-1,c=o.length,h=bo(c+l),p=this&&this!==Rt&&this instanceof i?r:e;++u<c;)h[u]=o[u];for(;l--;)h[u++]=arguments[++a];return t(p,s?n:this,h)}}function Fi(t){return function(e,i,n){n&&"number"!=typeof n&&ln(e,i,n)&&(i=n=W),e=eo(e),i===W?(i=e,e=0):i=eo(i),n=n===W?e<i?1:-1:eo(n);var o=-1;i=ds(rs((i-e)/(n||1)),0);for(var s=bo(i);i--;)s[t?i:++o]=e,e+=n;return s}}function ji(t){return function(e,i){return"string"==typeof e&&"string"==typeof i||(e=oo(e),i=oo(i)),t(e,i)}}function Hi(t,e,i,n,o,s,r,a,l,u){var c=8&e;return 4&(e=(e|(c?32:64))&~(c?64:32))||(e&=-4),o=[t,e,o,c?s:W,c?r:W,s=c?W:s,r=c?W:r,a,l,u],i=i.apply(W,o),cn(t)&&$s(i,o),i.placeholder=n,_n(i,t,e)}function Ni(t){var e=Oo[t];return function(t,i){if(t=oo(t),i=null==i?0:fs(io(i),292)){var n=(ro(t)+"e").split("e");return+((n=(ro(n=e(n[0]+"e"+(+n[1]+i)))+"e").split("e"))[0]+"e"+(+n[1]-i))}return e(t)}}function Ui(t){return function(e){var i=Vs(e);return"[object Map]"==i?x(e):"[object Set]"==i?function(t){var e=-1,i=Array(t.size);return t.forEach((function(t){i[++e]=[t,t]})),i}(e):function(t,e){return l(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function ki(t,e,i,n,o,s,r,a){var l=2&e;if(!l&&"function"!=typeof t)throw new Mo("Expected a function");var u=n?n.length:0;if(u||(e&=-97,n=o=W),r=r===W?r:ds(io(r),0),a=a===W?a:io(a),u-=o?o.length:0,64&e){var c=n,h=o;n=o=W}var p=l?W:zs(t);return s=[t,e,i,n,o,c,h,s,r,a],p&&(e=(i=s[1])|(t=p[1]),n=128==t&&8==i||128==t&&256==i&&s[7].length<=p[8]||384==t&&p[7].length<=p[8]&&8==i,131>e||n)&&(1&t&&(s[2]=p[2],e|=1&i?0:4),(i=p[3])&&(n=s[3],s[3]=n?yi(n,i,p[4]):i,s[4]=n?P(s[3],"__lodash_placeholder__"):p[4]),(i=p[5])&&(n=s[5],s[5]=n?Ti(n,i,p[6]):i,s[6]=n?P(s[5],"__lodash_placeholder__"):p[6]),(i=p[7])&&(s[7]=i),128&t&&(s[8]=null==s[8]?p[8]:fs(s[8],p[8])),null==s[9]&&(s[9]=p[9]),s[0]=p[0],s[1]=e),t=s[0],e=s[1],i=s[2],n=s[3],o=s[4],!(a=s[9]=s[9]===W?l?0:t.length:ds(s[9]-u,0))&&24&e&&(e&=-25),l=e&&1!=e?8==e||16==e?Oi(t,e,a):32!=e&&33!=e||o.length?Pi.apply(W,s):Li(t,e,i,n):function(t,e,i){var n=1&e,o=Ii(t);return function e(){return(this&&this!==Rt&&this instanceof e?o:t).apply(n?i:this,arguments)}}(t,e,i),_n((p?Hs:$s)(l,s),t,e)}function zi(t,e,i,n){return t===W||Nn(t,Ro[i])&&!Fo.call(n,i)?e:t}function Gi(t,e,i,n,o,s){return Yn(t)&&Yn(e)&&(s.set(e,t),Fe(t,e,W,Gi,s),s.delete(e)),t}function Xi(t){return Jn(t)?W:t}function Vi(t,e,i,n,o,s){var r=1&i,a=t.length;if(a!=(l=e.length)&&!(r&&l>a))return!1;if((l=s.get(t))&&s.get(e))return l==e;var l=-1,u=!0,c=2&i?new jt:W;for(s.set(t,e),s.set(e,t);++l<a;){var h=t[l],d=e[l];if(n)var f=r?n(d,h,l,e,t,s):n(h,d,l,t,e,s);if(f!==W){if(f)continue;u=!1;break}if(c){if(!p(e,(function(t,e){if(!A(c,e)&&(h===t||o(h,t,i,n,s)))return c.push(e)}))){u=!1;break}}else if(h!==d&&!o(h,d,i,n,s)){u=!1;break}}return s.delete(t),s.delete(e),u}function Yi(t){return Js(dn(t,W,Kn),t+"")}function $i(t){return we(t,uo,Gs)}function qi(t){return we(t,co,Xs)}function Ji(t){for(var e=t.name+"",i=As[e],n=Fo.call(As,e)?i.length:0;n--;){var o=i[n],s=o.func;if(null==s||s==t)return o.name}return e}function Zi(t){return(Fo.call(Dt,"placeholder")?Dt:t).placeholder}function Qi(){var t=(t=Dt.iteratee||To)===To?Pe:t;return arguments.length?t(arguments[0],arguments[1]):t}function tn(t,e){var i=t.__data__,n=typeof e;return("string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?i["string"==typeof e?"string":"hash"]:i.map}function en(t){for(var e=uo(t),i=e.length;i--;){var n=e[i],o=t[n];e[i]=[n,o,o==o&&!Yn(o)]}return e}function nn(t,e){var i=null==t?W:t[e];return Ce(i)?i:W}function on(t,e,i){for(var n=-1,o=(e=pi(e,t)).length,s=!1;++n<o;){var r=yn(e[n]);if(!(s=null!=t&&i(t,r)))break;t=t[r]}return s||++n!=o?s:!!(o=null==t?0:t.length)&&Vn(o)&&an(r,o)&&(Lr(t)||Wr(t))}function sn(t){return"function"!=typeof t.constructor||hn(t)?{}:Rs($o(t))}function rn(t){return Lr(t)||Wr(t)||!!(Qo&&t&&t[Qo])}function an(t,e){var i=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==i||"symbol"!=i&&_t.test(t))&&-1<t&&0==t%1&&t<e}function ln(t,e,i){if(!Yn(i))return!1;var n=typeof e;return!!("number"==n?Un(i)&&an(e,i.length):"string"==n&&e in i)&&Nn(i[e],t)}function un(t,e){if(Lr(t))return!1;var i=typeof t;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=t&&!Qn(t))||J.test(t)||!q.test(t)||null!=e&&t in xo(e)}function cn(t){var e=Ji(t),i=Dt[e];return"function"==typeof i&&e in Mt.prototype&&(t===i||!!(e=zs(i))&&t===e[0])}function hn(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ro)}function pn(t,e){return function(i){return null!=i&&i[t]===e&&(e!==W||t in xo(i))}}function dn(e,i,n){return i=ds(i===W?e.length-1:i,0),function(){for(var o=arguments,s=-1,r=ds(o.length-i,0),a=bo(r);++s<r;)a[s]=o[i+s];for(s=-1,r=bo(i+1);++s<i;)r[s]=o[s];return r[i]=n(a),t(e,this,r)}}function fn(t,e){if("__proto__"!=e)return t[e]}function _n(t,e,i){var n=e+"";e=Js;var o,s=Dn;return i=s(o=(o=n.match(st))?o[1].split(rt):[],i),(s=i.length)&&(i[o=s-1]=(1<s?"& ":"")+i[o],i=i.join(2<s?", ":" "),n=n.replace(ot,"{\n/* [wrapped with "+i+"] */\n")),e(t,n)}function gn(t){var e=0,i=0;return function(){var n=_s(),o=16-(n-i);if(i=n,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(W,arguments)}}function mn(t,e){var i=-1,n=(o=t.length)-1;for(e=e===W?o:e;++i<e;){var o,s=t[o=ze(i,n)];t[o]=t[i],t[i]=s}return t.length=e,t}function yn(t){if("string"==typeof t||Qn(t))return t;var e=t+"";return"0"==e&&1/t==-L?"-0":e}function Tn(t){if(null!=t){try{return Lo.call(t)}catch(t){}return t+""}return""}function Dn(t,e){return i(j,(function(i){var n="_."+i[0];e&i[1]&&!r(t,n)&&t.push(n)})),t.sort()}function wn(t){if(t instanceof Mt)return t.clone();var e=new xt(t.__wrapped__,t.__chain__);return e.__actions__=Di(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function vn(t,e,i){var n=null==t?0:t.length;return n?(0>(i=null==i?0:io(i))&&(i=ds(n+i,0)),f(t,Qi(e,3),i)):-1}function Sn(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var o=n-1;return i!==W&&(o=io(i),o=0>i?ds(n+o,0):fs(o,n-1)),f(t,Qi(e,3),o,!0)}function Kn(t){return null!=t&&t.length?ge(t,1):[]}function bn(t){return t&&t.length?t[0]:W}function An(t){var e=null==t?0:t.length;return e?t[e-1]:W}function En(t,e){return t&&t.length&&e&&e.length?Ue(t,e):t}function In(t){return null==t?t:ys.call(t)}function On(t){if(!t||!t.length)return[];var e=0;return t=s(t,(function(t){if(kn(t))return e=ds(t.length,e),!0})),S(e,(function(e){return l(t,T(e))}))}function xn(e,i){if(!e||!e.length)return[];var n=On(e);return null==i?n:l(n,(function(e){return t(i,W,e)}))}function Cn(t){return(t=Dt(t)).__chain__=!0,t}function Pn(t,e){return e(t)}function Mn(t,e){return(Lr(t)?i:Ws)(t,Qi(e,3))}function Bn(t,e){return(Lr(t)?n:Ls)(t,Qi(e,3))}function Rn(t,e){return(Lr(t)?l:Re)(t,Qi(e,3))}function Wn(t,e,i){return e=i?W:e,e=t&&null==e?t.length:e,ki(t,128,W,W,W,W,e)}function Ln(t,e){var i;if("function"!=typeof e)throw new Mo("Expected a function");return t=io(t),function(){return 0<--t&&(i=e.apply(this,arguments)),1>=t&&(e=W),i}}function Fn(t,e,i){function n(e){var i=l,n=u;return l=u=W,f=e,h=t.apply(n,i)}function o(t){var i=t-d;return t-=f,d===W||i>=e||0>i||g&&t>=c}function s(){var t=br();if(o(t))return r(t);var i,n=qs;i=t-f,t=e-(t-d),i=g?fs(t,c-i):t,p=n(s,i)}function r(t){return p=W,m&&l?n(t):(l=u=W,h)}function a(){var t=br(),i=o(t);if(l=arguments,u=this,d=t,i){if(p===W)return f=t=d,p=qs(s,e),_?n(t):h;if(g)return p=qs(s,e),n(d)}return p===W&&(p=qs(s,e)),h}var l,u,c,h,p,d,f=0,_=!1,g=!1,m=!0;if("function"!=typeof t)throw new Mo("Expected a function");return e=oo(e)||0,Yn(i)&&(_=!!i.leading,c=(g="maxWait"in i)?ds(oo(i.maxWait)||0,e):c,m="trailing"in i?!!i.trailing:m),a.cancel=function(){p!==W&&Us(p),f=0,l=d=u=p=W},a.flush=function(){return p===W?h:r(br())},a}function jn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new Mo("Expected a function");var i=function(){var n=arguments,o=e?e.apply(this,n):n[0],s=i.cache;return s.has(o)?s.get(o):(n=t.apply(this,n),i.cache=s.set(o,n)||s,n)};return i.cache=new(jn.Cache||Lt),i}function Hn(t){if("function"!=typeof t)throw new Mo("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Nn(t,e){return t===e||t!=t&&e!=e}function Un(t){return null!=t&&Vn(t.length)&&!Gn(t)}function kn(t){return $n(t)&&Un(t)}function zn(t){if(!$n(t))return!1;var e=ve(t);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!Jn(t)}function Gn(t){return!!Yn(t)&&("[object Function]"==(t=ve(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function Xn(t){return"number"==typeof t&&t==io(t)}function Vn(t){return"number"==typeof t&&-1<t&&0==t%1&&9007199254740991>=t}function Yn(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function $n(t){return null!=t&&"object"==typeof t}function qn(t){return"number"==typeof t||$n(t)&&"[object Number]"==ve(t)}function Jn(t){return!(!$n(t)||"[object Object]"!=ve(t))&&(null===(t=$o(t))||"function"==typeof(t=Fo.call(t,"constructor")&&t.constructor)&&t instanceof t&&Lo.call(t)==Uo)}function Zn(t){return"string"==typeof t||!Lr(t)&&$n(t)&&"[object String]"==ve(t)}function Qn(t){return"symbol"==typeof t||$n(t)&&"[object Symbol]"==ve(t)}function to(t){if(!t)return[];if(Un(t))return Zn(t)?R(t):Di(t);if(ts&&t[ts]){t=t[ts]();for(var e,i=[];!(e=t.next()).done;)i.push(e.value);return i}return("[object Map]"==(e=Vs(t))?x:"[object Set]"==e?M:po)(t)}function eo(t){return t?(t=oo(t))===L||t===-L?17976931348623157e292*(0>t?-1:1):t==t?t:0:0===t?t:0}function io(t){var e=(t=eo(t))%1;return t==t?e?t-e:t:0}function no(t){return t?le(io(t),0,4294967295):0}function oo(t){if("number"==typeof t)return t;if(Qn(t))return F;if(Yn(t)&&(t=Yn(t="function"==typeof t.valueOf?t.valueOf():t)?t+"":t),"string"!=typeof t)return 0===t?t:+t;t=t.replace(et,"");var e=pt.test(t);return e||ft.test(t)?Pt(t.slice(2),e?2:8):ht.test(t)?F:+t}function so(t){return wi(t,co(t))}function ro(t){return null==t?"":ni(t)}function ao(t,e,i){return(t=null==t?W:De(t,e))===W?i:t}function lo(t,e){return null!=t&&on(t,e,be)}function uo(t){return Un(t)?Vt(t):Me(t)}function co(t){if(Un(t))t=Vt(t,!0);else if(Yn(t)){var e,i=hn(t),n=[];for(e in t)("constructor"!=e||!i&&Fo.call(t,e))&&n.push(e);t=n}else{if(e=[],null!=t)for(i in xo(t))e.push(i);t=e}return t}function ho(t,e){if(null==t)return{};var i=l(qi(t),(function(t){return[t]}));return e=Qi(e),Ne(t,i,(function(t,i){return e(t,i[0])}))}function po(t){return null==t?[]:b(t,uo(t))}function fo(t){return ga(ro(t).toLowerCase())}function _o(t){return(t=ro(t))&&t.replace(gt,Yt).replace(vt,"")}function go(t,e,i){return t=ro(t),(e=i?W:e)===W?At.test(t)?t.match(Kt)||[]:t.match(at)||[]:t.match(e)||[]}function mo(t){return function(){return t}}function yo(t){return t}function To(t){return Pe("function"==typeof t?t:ue(t,1))}function Do(t,e,n){var o=uo(e),s=Te(e,o);null!=n||Yn(e)&&(s.length||!o.length)||(n=e,e=t,t=this,s=Te(e,uo(e)));var r=!(Yn(n)&&"chain"in n&&!n.chain),a=Gn(t);return i(s,(function(i){var n=e[i];t[i]=n,a&&(t.prototype[i]=function(){var e=this.__chain__;if(r||e){var i=t(this.__wrapped__);return(i.__actions__=Di(this.__actions__)).push({func:n,args:arguments,thisArg:t}),i.__chain__=e,i}return n.apply(t,u([this.value()],arguments))})})),t}function wo(){}function vo(t){return un(t)?T(yn(t)):function(t){return function(e){return De(e,t)}}(t)}function So(){return[]}function Ko(){return!1}var bo=(Tt=null==Tt?Rt:Jt.defaults(Rt.Object(),Tt,Jt.pick(Rt,Et))).Array,Ao=Tt.Date,Eo=Tt.Error,Io=Tt.Function,Oo=Tt.Math,xo=Tt.Object,Co=Tt.RegExp,Po=Tt.String,Mo=Tt.TypeError,Bo=bo.prototype,Ro=xo.prototype,Wo=Tt["__core-js_shared__"],Lo=Io.prototype.toString,Fo=Ro.hasOwnProperty,jo=0,Ho=function(){var t=/[^.]+$/.exec(Wo&&Wo.keys&&Wo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),No=Ro.toString,Uo=Lo.call(xo),ko=Rt._,zo=Co("^"+Lo.call(Fo).replace(Q,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Go=Ft?Tt.Buffer:W,Xo=Tt.Symbol,Vo=Tt.Uint8Array,Yo=Go?Go.allocUnsafe:W,$o=C(xo.getPrototypeOf,xo),qo=xo.create,Jo=Ro.propertyIsEnumerable,Zo=Bo.splice,Qo=Xo?Xo.isConcatSpreadable:W,ts=Xo?Xo.iterator:W,es=Xo?Xo.toStringTag:W,is=function(){try{var t=nn(xo,"defineProperty");return t({},"",{}),t}catch(t){}}(),ns=Tt.clearTimeout!==Rt.clearTimeout&&Tt.clearTimeout,os=Ao&&Ao.now!==Rt.Date.now&&Ao.now,ss=Tt.setTimeout!==Rt.setTimeout&&Tt.setTimeout,rs=Oo.ceil,as=Oo.floor,ls=xo.getOwnPropertySymbols,us=Go?Go.isBuffer:W,cs=Tt.isFinite,hs=Bo.join,ps=C(xo.keys,xo),ds=Oo.max,fs=Oo.min,_s=Ao.now,gs=Tt.parseInt,ms=Oo.random,ys=Bo.reverse,Ts=nn(Tt,"DataView"),Ds=nn(Tt,"Map"),ws=nn(Tt,"Promise"),vs=nn(Tt,"Set"),Ss=nn(Tt,"WeakMap"),Ks=nn(xo,"create"),bs=Ss&&new Ss,As={},Es=Tn(Ts),Is=Tn(Ds),Os=Tn(ws),xs=Tn(vs),Cs=Tn(Ss),Ps=Xo?Xo.prototype:W,Ms=Ps?Ps.valueOf:W,Bs=Ps?Ps.toString:W,Rs=function(){function t(){}return function(e){return Yn(e)?qo?qo(e):(t.prototype=e,e=new t,t.prototype=W,e):{}}}();Dt.templateSettings={escape:V,evaluate:Y,interpolate:$,variable:"",imports:{_:Dt}},Dt.prototype=St.prototype,Dt.prototype.constructor=Dt,xt.prototype=Rs(St.prototype),xt.prototype.constructor=xt,Mt.prototype=Rs(St.prototype),Mt.prototype.constructor=Mt,Bt.prototype.clear=function(){this.__data__=Ks?Ks(null):{},this.size=0},Bt.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},Bt.prototype.get=function(t){var e=this.__data__;return Ks?"__lodash_hash_undefined__"===(t=e[t])?W:t:Fo.call(e,t)?e[t]:W},Bt.prototype.has=function(t){var e=this.__data__;return Ks?e[t]!==W:Fo.call(e,t)},Bt.prototype.set=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Ks&&e===W?"__lodash_hash_undefined__":e,this},Wt.prototype.clear=function(){this.__data__=[],this.size=0},Wt.prototype.delete=function(t){var e=this.__data__;return!(0>(t=ne(e,t))||(t==e.length-1?e.pop():Zo.call(e,t,1),--this.size,0))},Wt.prototype.get=function(t){var e=this.__data__;return 0>(t=ne(e,t))?W:e[t][1]},Wt.prototype.has=function(t){return-1<ne(this.__data__,t)},Wt.prototype.set=function(t,e){var i=this.__data__,n=ne(i,t);return 0>n?(++this.size,i.push([t,e])):i[n][1]=e,this},Lt.prototype.clear=function(){this.size=0,this.__data__={hash:new Bt,map:new(Ds||Wt),string:new Bt}},Lt.prototype.delete=function(t){return t=tn(this,t).delete(t),this.size-=t?1:0,t},Lt.prototype.get=function(t){return tn(this,t).get(t)},Lt.prototype.has=function(t){return tn(this,t).has(t)},Lt.prototype.set=function(t,e){var i=tn(this,t),n=i.size;return i.set(t,e),this.size+=i.size==n?0:1,this},jt.prototype.add=jt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},jt.prototype.has=function(t){return this.__data__.has(t)},Ht.prototype.clear=function(){this.__data__=new Wt,this.size=0},Ht.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},Ht.prototype.get=function(t){return this.__data__.get(t)},Ht.prototype.has=function(t){return this.__data__.has(t)},Ht.prototype.set=function(t,e){var i=this.__data__;if(i instanceof Wt){var n=i.__data__;if(!Ds||199>n.length)return n.push([t,e]),this.size=++i.size,this;i=this.__data__=new Lt(n)}return i.set(t,e),this.size=i.size,this};var Ws=Ki(me),Ls=Ki(ye,!0),Fs=bi(),js=bi(!0),Hs=bs?function(t,e){return bs.set(t,e),t}:yo,Ns=is?function(t,e){return is(t,"toString",{configurable:!0,enumerable:!1,value:mo(e),writable:!0})}:yo,Us=ns||function(t){return Rt.clearTimeout(t)},ks=vs&&1/M(new vs([,-0]))[1]==L?function(t){return new vs(t)}:wo,zs=bs?function(t){return bs.get(t)}:wo,Gs=ls?function(t){return null==t?[]:(t=xo(t),s(ls(t),(function(e){return Jo.call(t,e)})))}:So,Xs=ls?function(t){for(var e=[];t;)u(e,Gs(t)),t=$o(t);return e}:So,Vs=ve;(Ts&&"[object DataView]"!=Vs(new Ts(new ArrayBuffer(1)))||Ds&&"[object Map]"!=Vs(new Ds)||ws&&"[object Promise]"!=Vs(ws.resolve())||vs&&"[object Set]"!=Vs(new vs)||Ss&&"[object WeakMap]"!=Vs(new Ss))&&(Vs=function(t){var e=ve(t);if(t=(t="[object Object]"==e?t.constructor:W)?Tn(t):"")switch(t){case Es:return"[object DataView]";case Is:return"[object Map]";case Os:return"[object Promise]";case xs:return"[object Set]";case Cs:return"[object WeakMap]"}return e});var Ys=Wo?Gn:Ko,$s=gn(Hs),qs=ss||function(t,e){return Rt.setTimeout(t,e)},Js=gn(Ns),Zs=function(t){var e=(t=jn(t,(function(t){return 500===e.size&&e.clear(),t}))).cache;return t}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Z,(function(t,i,n,o){e.push(n?o.replace(lt,"$1"):i||t)})),e})),Qs=Xe((function(t,e){return kn(t)?pe(t,ge(e,1,kn,!0)):[]})),tr=Xe((function(t,e){var i=An(e);return kn(i)&&(i=W),kn(t)?pe(t,ge(e,1,kn,!0),Qi(i,2)):[]})),er=Xe((function(t,e){var i=An(e);return kn(i)&&(i=W),kn(t)?pe(t,ge(e,1,kn,!0),W,i):[]})),ir=Xe((function(t){var e=l(t,ci);return e.length&&e[0]===t[0]?Ae(e):[]})),nr=Xe((function(t){var e=An(t),i=l(t,ci);return e===An(i)?e=W:i.pop(),i.length&&i[0]===t[0]?Ae(i,Qi(e,2)):[]})),or=Xe((function(t){var e=An(t),i=l(t,ci);return(e="function"==typeof e?e:W)&&i.pop(),i.length&&i[0]===t[0]?Ae(i,W,e):[]})),sr=Xe(En),rr=Yi((function(t,e){var i=null==t?0:t.length,n=ae(t,e);return ke(t,l(e,(function(t){return an(t,i)?+t:t})).sort(mi)),n})),ar=Xe((function(t){return oi(ge(t,1,kn,!0))})),lr=Xe((function(t){var e=An(t);return kn(e)&&(e=W),oi(ge(t,1,kn,!0),Qi(e,2))})),ur=Xe((function(t){var e="function"==typeof(e=An(t))?e:W;return oi(ge(t,1,kn,!0),W,e)})),cr=Xe((function(t,e){return kn(t)?pe(t,e):[]})),hr=Xe((function(t){return li(s(t,kn))})),pr=Xe((function(t){var e=An(t);return kn(e)&&(e=W),li(s(t,kn),Qi(e,2))})),dr=Xe((function(t){var e="function"==typeof(e=An(t))?e:W;return li(s(t,kn),W,e)})),fr=Xe(On),_r=Xe((function(t){var e="function"==typeof(e=1<(e=t.length)?t[e-1]:W)?(t.pop(),e):W;return xn(t,e)})),gr=Yi((function(t){var e=t.length,i=e?t[0]:0,n=this.__wrapped__,o=function(e){return ae(e,t)};return!(1<e||this.__actions__.length)&&n instanceof Mt&&an(i)?((n=n.slice(i,+i+(e?1:0))).__actions__.push({func:Pn,args:[o],thisArg:W}),new xt(n,this.__chain__).thru((function(t){return e&&!t.length&&t.push(W),t}))):this.thru(o)})),mr=vi((function(t,e,i){Fo.call(t,i)?++t[i]:re(t,i,1)})),yr=xi(vn),Tr=xi(Sn),Dr=vi((function(t,e,i){Fo.call(t,i)?t[i].push(e):re(t,i,[e])})),wr=Xe((function(e,i,n){var o=-1,s="function"==typeof i,r=Un(e)?bo(e.length):[];return Ws(e,(function(e){r[++o]=s?t(i,e,n):Ee(e,i,n)})),r})),vr=vi((function(t,e,i){re(t,i,e)})),Sr=vi((function(t,e,i){t[i?0:1].push(e)}),(function(){return[[],[]]})),Kr=Xe((function(t,e){if(null==t)return[];var i=e.length;return 1<i&&ln(t,e[0],e[1])?e=[]:2<i&&ln(e[0],e[1],e[2])&&(e=[e[0]]),He(t,ge(e,1),[])})),br=os||function(){return Rt.Date.now()},Ar=Xe((function(t,e,i){var n=1;if(i.length){var o=P(i,Zi(Ar));n=32|n}return ki(t,n,e,i,o)})),Er=Xe((function(t,e,i){var n=3;if(i.length){var o=P(i,Zi(Er));n=32|n}return ki(e,n,t,i,o)})),Ir=Xe((function(t,e){return he(t,1,e)})),Or=Xe((function(t,e,i){return he(t,oo(e)||0,i)}));jn.Cache=Lt;var xr=Xe((function(e,i){var n=(i=1==i.length&&Lr(i[0])?l(i[0],K(Qi())):l(ge(i,1),K(Qi()))).length;return Xe((function(o){for(var s=-1,r=fs(o.length,n);++s<r;)o[s]=i[s].call(this,o[s]);return t(e,this,o)}))})),Cr=Xe((function(t,e){return ki(t,32,W,e,P(e,Zi(Cr)))})),Pr=Xe((function(t,e){return ki(t,64,W,e,P(e,Zi(Pr)))})),Mr=Yi((function(t,e){return ki(t,256,W,W,W,e)})),Br=ji(Se),Rr=ji((function(t,e){return t>=e})),Wr=Ie(function(){return arguments}())?Ie:function(t){return $n(t)&&Fo.call(t,"callee")&&!Jo.call(t,"callee")},Lr=bo.isArray,Fr=Nt?K(Nt):function(t){return $n(t)&&"[object ArrayBuffer]"==ve(t)},jr=us||Ko,Hr=Ut?K(Ut):function(t){return $n(t)&&"[object Date]"==ve(t)},Nr=kt?K(kt):function(t){return $n(t)&&"[object Map]"==Vs(t)},Ur=zt?K(zt):function(t){return $n(t)&&"[object RegExp]"==ve(t)},kr=Gt?K(Gt):function(t){return $n(t)&&"[object Set]"==Vs(t)},zr=Xt?K(Xt):function(t){return $n(t)&&Vn(t.length)&&!!It[ve(t)]},Gr=ji(Be),Xr=ji((function(t,e){return t<=e})),Vr=Si((function(t,e){if(hn(e)||Un(e))wi(e,uo(e),t);else for(var i in e)Fo.call(e,i)&&ie(t,i,e[i])})),Yr=Si((function(t,e){wi(e,co(e),t)})),$r=Si((function(t,e,i,n){wi(e,co(e),t,n)})),qr=Si((function(t,e,i,n){wi(e,uo(e),t,n)})),Jr=Yi(ae),Zr=Xe((function(t,e){t=xo(t);var i=-1,n=e.length;for((o=2<n?e[2]:W)&&ln(e[0],e[1],o)&&(n=1);++i<n;)for(var o,s=co(o=e[i]),r=-1,a=s.length;++r<a;){var l=s[r],u=t[l];(u===W||Nn(u,Ro[l])&&!Fo.call(t,l))&&(t[l]=o[l])}return t})),Qr=Xe((function(e){return e.push(W,Gi),t(oa,W,e)})),ta=Mi((function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=No.call(e)),t[e]=i}),mo(yo)),ea=Mi((function(t,e,i){null!=e&&"function"!=typeof e.toString&&(e=No.call(e)),Fo.call(t,e)?t[e].push(i):t[e]=[i]}),Qi),ia=Xe(Ee),na=Si((function(t,e,i){Fe(t,e,i)})),oa=Si((function(t,e,i,n){Fe(t,e,i,n)})),sa=Yi((function(t,e){var i={};if(null==t)return i;var n=!1;e=l(e,(function(e){return e=pi(e,t),n||(n=1<e.length),e})),wi(t,qi(t),i),n&&(i=ue(i,7,Xi));for(var o=e.length;o--;)si(i,e[o]);return i})),ra=Yi((function(t,e){return null==t?{}:function(t,e){return Ne(t,e,(function(e,i){return lo(t,i)}))}(t,e)})),aa=Ui(uo),la=Ui(co),ua=Ei((function(t,e,i){return e=e.toLowerCase(),t+(i?fo(e):e)})),ca=Ei((function(t,e,i){return t+(i?"-":"")+e.toLowerCase()})),ha=Ei((function(t,e,i){return t+(i?" ":"")+e.toLowerCase()})),pa=Ai("toLowerCase"),da=Ei((function(t,e,i){return t+(i?"_":"")+e.toLowerCase()})),fa=Ei((function(t,e,i){return t+(i?" ":"")+ga(e)})),_a=Ei((function(t,e,i){return t+(i?" ":"")+e.toUpperCase()})),ga=Ai("toUpperCase"),ma=Xe((function(e,i){try{return t(e,W,i)}catch(t){return zn(t)?t:new Eo(t)}})),ya=Yi((function(t,e){return i(e,(function(e){e=yn(e),re(t,e,Ar(t[e],t))})),t})),Ta=Ci(),Da=Ci(!0),wa=Xe((function(t,e){return function(i){return Ee(i,t,e)}})),va=Xe((function(t,e){return function(i){return Ee(t,i,e)}})),Sa=Ri(l),Ka=Ri(o),ba=Ri(p),Aa=Fi(),Ea=Fi(!0),Ia=Bi((function(t,e){return t+e}),0),Oa=Ni("ceil"),xa=Bi((function(t,e){return t/e}),1),Ca=Ni("floor"),Pa=Bi((function(t,e){return t*e}),1),Ma=Ni("round"),Ba=Bi((function(t,e){return t-e}),0);return Dt.after=function(t,e){if("function"!=typeof e)throw new Mo("Expected a function");return t=io(t),function(){if(1>--t)return e.apply(this,arguments)}},Dt.ary=Wn,Dt.assign=Vr,Dt.assignIn=Yr,Dt.assignInWith=$r,Dt.assignWith=qr,Dt.at=Jr,Dt.before=Ln,Dt.bind=Ar,Dt.bindAll=ya,Dt.bindKey=Er,Dt.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Lr(t)?t:[t]},Dt.chain=Cn,Dt.chunk=function(t,e,i){if(e=(i?ln(t,e,i):e===W)?1:ds(io(e),0),!(i=null==t?0:t.length)||1>e)return[];for(var n=0,o=0,s=bo(rs(i/e));n<i;)s[o++]=Je(t,n,n+=e);return s},Dt.compact=function(t){for(var e=-1,i=null==t?0:t.length,n=0,o=[];++e<i;){var s=t[e];s&&(o[n++]=s)}return o},Dt.concat=function(){var t=arguments.length;if(!t)return[];for(var e=bo(t-1),i=arguments[0];t--;)e[t-1]=arguments[t];return u(Lr(i)?Di(i):[i],ge(e,1))},Dt.cond=function(e){var i=null==e?0:e.length,n=Qi();return e=i?l(e,(function(t){if("function"!=typeof t[1])throw new Mo("Expected a function");return[n(t[0]),t[1]]})):[],Xe((function(n){for(var o=-1;++o<i;){var s=e[o];if(t(s[0],this,n))return t(s[1],this,n)}}))},Dt.conforms=function(t){return function(t){var e=uo(t);return function(i){return ce(i,t,e)}}(ue(t,1))},Dt.constant=mo,Dt.countBy=mr,Dt.create=function(t,e){var i=Rs(t);return null==e?i:se(i,e)},Dt.curry=function t(e,i,n){return(e=ki(e,8,W,W,W,W,W,i=n?W:i)).placeholder=t.placeholder,e},Dt.curryRight=function t(e,i,n){return(e=ki(e,16,W,W,W,W,W,i=n?W:i)).placeholder=t.placeholder,e},Dt.debounce=Fn,Dt.defaults=Zr,Dt.defaultsDeep=Qr,Dt.defer=Ir,Dt.delay=Or,Dt.difference=Qs,Dt.differenceBy=tr,Dt.differenceWith=er,Dt.drop=function(t,e,i){var n=null==t?0:t.length;return n?Je(t,0>(e=i||e===W?1:io(e))?0:e,n):[]},Dt.dropRight=function(t,e,i){var n=null==t?0:t.length;return n?Je(t,0,0>(e=n-(e=i||e===W?1:io(e)))?0:e):[]},Dt.dropRightWhile=function(t,e){return t&&t.length?ri(t,Qi(e,3),!0,!0):[]},Dt.dropWhile=function(t,e){return t&&t.length?ri(t,Qi(e,3),!0):[]},Dt.fill=function(t,e,i,n){var o=null==t?0:t.length;if(!o)return[];for(i&&"number"!=typeof i&&ln(t,e,i)&&(i=0,n=o),o=t.length,0>(i=io(i))&&(i=-i>o?0:o+i),0>(n=n===W||n>o?o:io(n))&&(n+=o),n=i>n?0:no(n);i<n;)t[i++]=e;return t},Dt.filter=function(t,e){return(Lr(t)?s:_e)(t,Qi(e,3))},Dt.flatMap=function(t,e){return ge(Rn(t,e),1)},Dt.flatMapDeep=function(t,e){return ge(Rn(t,e),L)},Dt.flatMapDepth=function(t,e,i){return i=i===W?1:io(i),ge(Rn(t,e),i)},Dt.flatten=Kn,Dt.flattenDeep=function(t){return null!=t&&t.length?ge(t,L):[]},Dt.flattenDepth=function(t,e){return null!=t&&t.length?ge(t,e=e===W?1:io(e)):[]},Dt.flip=function(t){return ki(t,512)},Dt.flow=Ta,Dt.flowRight=Da,Dt.fromPairs=function(t){for(var e=-1,i=null==t?0:t.length,n={};++e<i;){var o=t[e];n[o[0]]=o[1]}return n},Dt.functions=function(t){return null==t?[]:Te(t,uo(t))},Dt.functionsIn=function(t){return null==t?[]:Te(t,co(t))},Dt.groupBy=Dr,Dt.initial=function(t){return null!=t&&t.length?Je(t,0,-1):[]},Dt.intersection=ir,Dt.intersectionBy=nr,Dt.intersectionWith=or,Dt.invert=ta,Dt.invertBy=ea,Dt.invokeMap=wr,Dt.iteratee=To,Dt.keyBy=vr,Dt.keys=uo,Dt.keysIn=co,Dt.map=Rn,Dt.mapKeys=function(t,e){var i={};return e=Qi(e,3),me(t,(function(t,n,o){re(i,e(t,n,o),t)})),i},Dt.mapValues=function(t,e){var i={};return e=Qi(e,3),me(t,(function(t,n,o){re(i,n,e(t,n,o))})),i},Dt.matches=function(t){return We(ue(t,1))},Dt.matchesProperty=function(t,e){return Le(t,ue(e,1))},Dt.memoize=jn,Dt.merge=na,Dt.mergeWith=oa,Dt.method=wa,Dt.methodOf=va,Dt.mixin=Do,Dt.negate=Hn,Dt.nthArg=function(t){return t=io(t),Xe((function(e){return je(e,t)}))},Dt.omit=sa,Dt.omitBy=function(t,e){return ho(t,Hn(Qi(e)))},Dt.once=function(t){return Ln(2,t)},Dt.orderBy=function(t,e,i,n){return null==t?[]:(Lr(e)||(e=null==e?[]:[e]),Lr(i=n?W:i)||(i=null==i?[]:[i]),He(t,e,i))},Dt.over=Sa,Dt.overArgs=xr,Dt.overEvery=Ka,Dt.overSome=ba,Dt.partial=Cr,Dt.partialRight=Pr,Dt.partition=Sr,Dt.pick=ra,Dt.pickBy=ho,Dt.property=vo,Dt.propertyOf=function(t){return function(e){return null==t?W:De(t,e)}},Dt.pull=sr,Dt.pullAll=En,Dt.pullAllBy=function(t,e,i){return t&&t.length&&e&&e.length?Ue(t,e,Qi(i,2)):t},Dt.pullAllWith=function(t,e,i){return t&&t.length&&e&&e.length?Ue(t,e,W,i):t},Dt.pullAt=rr,Dt.range=Aa,Dt.rangeRight=Ea,Dt.rearg=Mr,Dt.reject=function(t,e){return(Lr(t)?s:_e)(t,Hn(Qi(e,3)))},Dt.remove=function(t,e){var i=[];if(!t||!t.length)return i;var n=-1,o=[],s=t.length;for(e=Qi(e,3);++n<s;){var r=t[n];e(r,n,t)&&(i.push(r),o.push(n))}return ke(t,o),i},Dt.rest=function(t,e){if("function"!=typeof t)throw new Mo("Expected a function");return Xe(t,e=e===W?e:io(e))},Dt.reverse=In,Dt.sampleSize=function(t,e,i){return e=(i?ln(t,e,i):e===W)?1:io(e),(Lr(t)?Qt:Ye)(t,e)},Dt.set=function(t,e,i){return null==t?t:$e(t,e,i)},Dt.setWith=function(t,e,i,n){return n="function"==typeof n?n:W,null==t?t:$e(t,e,i,n)},Dt.shuffle=function(t){return(Lr(t)?te:qe)(t)},Dt.slice=function(t,e,i){var n=null==t?0:t.length;return n?(i&&"number"!=typeof i&&ln(t,e,i)?(e=0,i=n):(e=null==e?0:io(e),i=i===W?n:io(i)),Je(t,e,i)):[]},Dt.sortBy=Kr,Dt.sortedUniq=function(t){return t&&t.length?ei(t):[]},Dt.sortedUniqBy=function(t,e){return t&&t.length?ei(t,Qi(e,2)):[]},Dt.split=function(t,e,i){return i&&"number"!=typeof i&&ln(t,e,i)&&(e=i=W),(i=i===W?4294967295:i>>>0)?(t=ro(t))&&("string"==typeof e||null!=e&&!Ur(e))&&(!(e=ni(e))&&bt.test(t))?di(R(t),0,i):t.split(e,i):[]},Dt.spread=function(e,i){if("function"!=typeof e)throw new Mo("Expected a function");return i=null==i?0:ds(io(i),0),Xe((function(n){var o=n[i];return n=di(n,0,i),o&&u(n,o),t(e,this,n)}))},Dt.tail=function(t){var e=null==t?0:t.length;return e?Je(t,1,e):[]},Dt.take=function(t,e,i){return t&&t.length?Je(t,0,0>(e=i||e===W?1:io(e))?0:e):[]},Dt.takeRight=function(t,e,i){var n=null==t?0:t.length;return n?Je(t,0>(e=n-(e=i||e===W?1:io(e)))?0:e,n):[]},Dt.takeRightWhile=function(t,e){return t&&t.length?ri(t,Qi(e,3),!1,!0):[]},Dt.takeWhile=function(t,e){return t&&t.length?ri(t,Qi(e,3)):[]},Dt.tap=function(t,e){return e(t),t},Dt.throttle=function(t,e,i){var n=!0,o=!0;if("function"!=typeof t)throw new Mo("Expected a function");return Yn(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),Fn(t,e,{leading:n,maxWait:e,trailing:o})},Dt.thru=Pn,Dt.toArray=to,Dt.toPairs=aa,Dt.toPairsIn=la,Dt.toPath=function(t){return Lr(t)?l(t,yn):Qn(t)?[t]:Di(Zs(ro(t)))},Dt.toPlainObject=so,Dt.transform=function(t,e,n){var o=Lr(t),s=o||jr(t)||zr(t);if(e=Qi(e,4),null==n){var r=t&&t.constructor;n=s?o?new r:[]:Yn(t)&&Gn(r)?Rs($o(t)):{}}return(s?i:me)(t,(function(t,i,o){return e(n,t,i,o)})),n},Dt.unary=function(t){return Wn(t,1)},Dt.union=ar,Dt.unionBy=lr,Dt.unionWith=ur,Dt.uniq=function(t){return t&&t.length?oi(t):[]},Dt.uniqBy=function(t,e){return t&&t.length?oi(t,Qi(e,2)):[]},Dt.uniqWith=function(t,e){return e="function"==typeof e?e:W,t&&t.length?oi(t,W,e):[]},Dt.unset=function(t,e){return null==t||si(t,e)},Dt.unzip=On,Dt.unzipWith=xn,Dt.update=function(t,e,i){return null!=t&&(t=$e(t,e,(i=hi(i))(De(t,e)),void 0)),t},Dt.updateWith=function(t,e,i,n){return n="function"==typeof n?n:W,null!=t&&(t=$e(t,e,(i=hi(i))(De(t,e)),n)),t},Dt.values=po,Dt.valuesIn=function(t){return null==t?[]:b(t,co(t))},Dt.without=cr,Dt.words=go,Dt.wrap=function(t,e){return Cr(hi(e),t)},Dt.xor=hr,Dt.xorBy=pr,Dt.xorWith=dr,Dt.zip=fr,Dt.zipObject=function(t,e){return ui(t||[],e||[],ie)},Dt.zipObjectDeep=function(t,e){return ui(t||[],e||[],$e)},Dt.zipWith=_r,Dt.entries=aa,Dt.entriesIn=la,Dt.extend=Yr,Dt.extendWith=$r,Do(Dt,Dt),Dt.add=Ia,Dt.attempt=ma,Dt.camelCase=ua,Dt.capitalize=fo,Dt.ceil=Oa,Dt.clamp=function(t,e,i){return i===W&&(i=e,e=W),i!==W&&(i=(i=oo(i))==i?i:0),e!==W&&(e=(e=oo(e))==e?e:0),le(oo(t),e,i)},Dt.clone=function(t){return ue(t,4)},Dt.cloneDeep=function(t){return ue(t,5)},Dt.cloneDeepWith=function(t,e){return ue(t,5,e="function"==typeof e?e:W)},Dt.cloneWith=function(t,e){return ue(t,4,e="function"==typeof e?e:W)},Dt.conformsTo=function(t,e){return null==e||ce(t,e,uo(e))},Dt.deburr=_o,Dt.defaultTo=function(t,e){return null==t||t!=t?e:t},Dt.divide=xa,Dt.endsWith=function(t,e,i){t=ro(t),e=ni(e);var n=t.length;n=i=i===W?n:le(io(i),0,n);return 0<=(i-=e.length)&&t.slice(i,n)==e},Dt.eq=Nn,Dt.escape=function(t){return(t=ro(t))&&X.test(t)?t.replace(z,$t):t},Dt.escapeRegExp=function(t){return(t=ro(t))&&tt.test(t)?t.replace(Q,"\\$&"):t},Dt.every=function(t,e,i){var n=Lr(t)?o:de;return i&&ln(t,e,i)&&(e=W),n(t,Qi(e,3))},Dt.find=yr,Dt.findIndex=vn,Dt.findKey=function(t,e){return d(t,Qi(e,3),me)},Dt.findLast=Tr,Dt.findLastIndex=Sn,Dt.findLastKey=function(t,e){return d(t,Qi(e,3),ye)},Dt.floor=Ca,Dt.forEach=Mn,Dt.forEachRight=Bn,Dt.forIn=function(t,e){return null==t?t:Fs(t,Qi(e,3),co)},Dt.forInRight=function(t,e){return null==t?t:js(t,Qi(e,3),co)},Dt.forOwn=function(t,e){return t&&me(t,Qi(e,3))},Dt.forOwnRight=function(t,e){return t&&ye(t,Qi(e,3))},Dt.get=ao,Dt.gt=Br,Dt.gte=Rr,Dt.has=function(t,e){return null!=t&&on(t,e,Ke)},Dt.hasIn=lo,Dt.head=bn,Dt.identity=yo,Dt.includes=function(t,e,i,n){return t=Un(t)?t:po(t),i=i&&!n?io(i):0,n=t.length,0>i&&(i=ds(n+i,0)),Zn(t)?i<=n&&-1<t.indexOf(e,i):!!n&&-1<_(t,e,i)},Dt.indexOf=function(t,e,i){var n=null==t?0:t.length;return n?(0>(i=null==i?0:io(i))&&(i=ds(n+i,0)),_(t,e,i)):-1},Dt.inRange=function(t,e,i){return e=eo(e),i===W?(i=e,e=0):i=eo(i),(t=oo(t))>=fs(e,i)&&t<ds(e,i)},Dt.invoke=ia,Dt.isArguments=Wr,Dt.isArray=Lr,Dt.isArrayBuffer=Fr,Dt.isArrayLike=Un,Dt.isArrayLikeObject=kn,Dt.isBoolean=function(t){return!0===t||!1===t||$n(t)&&"[object Boolean]"==ve(t)},Dt.isBuffer=jr,Dt.isDate=Hr,Dt.isElement=function(t){return $n(t)&&1===t.nodeType&&!Jn(t)},Dt.isEmpty=function(t){if(null==t)return!0;if(Un(t)&&(Lr(t)||"string"==typeof t||"function"==typeof t.splice||jr(t)||zr(t)||Wr(t)))return!t.length;var e=Vs(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(hn(t))return!Me(t).length;for(var i in t)if(Fo.call(t,i))return!1;return!0},Dt.isEqual=function(t,e){return Oe(t,e)},Dt.isEqualWith=function(t,e,i){var n=(i="function"==typeof i?i:W)?i(t,e):W;return n===W?Oe(t,e,W,i):!!n},Dt.isError=zn,Dt.isFinite=function(t){return"number"==typeof t&&cs(t)},Dt.isFunction=Gn,Dt.isInteger=Xn,Dt.isLength=Vn,Dt.isMap=Nr,Dt.isMatch=function(t,e){return t===e||xe(t,e,en(e))},Dt.isMatchWith=function(t,e,i){return i="function"==typeof i?i:W,xe(t,e,en(e),i)},Dt.isNaN=function(t){return qn(t)&&t!=+t},Dt.isNative=function(t){if(Ys(t))throw new Eo("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ce(t)},Dt.isNil=function(t){return null==t},Dt.isNull=function(t){return null===t},Dt.isNumber=qn,Dt.isObject=Yn,Dt.isObjectLike=$n,Dt.isPlainObject=Jn,Dt.isRegExp=Ur,Dt.isSafeInteger=function(t){return Xn(t)&&-9007199254740991<=t&&9007199254740991>=t},Dt.isSet=kr,Dt.isString=Zn,Dt.isSymbol=Qn,Dt.isTypedArray=zr,Dt.isUndefined=function(t){return t===W},Dt.isWeakMap=function(t){return $n(t)&&"[object WeakMap]"==Vs(t)},Dt.isWeakSet=function(t){return $n(t)&&"[object WeakSet]"==ve(t)},Dt.join=function(t,e){return null==t?"":hs.call(t,e)},Dt.kebabCase=ca,Dt.last=An,Dt.lastIndexOf=function(t,e,i){var n=null==t?0:t.length;if(!n)return-1;var o=n;if(i!==W&&(o=0>(o=io(i))?ds(n+o,0):fs(o,n-1)),e==e)t:{for(i=o+1;i--;)if(t[i]===e){t=i;break t}t=i}else t=f(t,m,o,!0);return t},Dt.lowerCase=ha,Dt.lowerFirst=pa,Dt.lt=Gr,Dt.lte=Xr,Dt.max=function(t){return t&&t.length?fe(t,yo,Se):W},Dt.maxBy=function(t,e){return t&&t.length?fe(t,Qi(e,2),Se):W},Dt.mean=function(t){return y(t,yo)},Dt.meanBy=function(t,e){return y(t,Qi(e,2))},Dt.min=function(t){return t&&t.length?fe(t,yo,Be):W},Dt.minBy=function(t,e){return t&&t.length?fe(t,Qi(e,2),Be):W},Dt.stubArray=So,Dt.stubFalse=Ko,Dt.stubObject=function(){return{}},Dt.stubString=function(){return""},Dt.stubTrue=function(){return!0},Dt.multiply=Pa,Dt.nth=function(t,e){return t&&t.length?je(t,io(e)):W},Dt.noConflict=function(){return Rt._===this&&(Rt._=ko),this},Dt.noop=wo,Dt.now=br,Dt.pad=function(t,e,i){t=ro(t);var n=(e=io(e))?B(t):0;return!e||n>=e?t:Wi(as(e=(e-n)/2),i)+t+Wi(rs(e),i)},Dt.padEnd=function(t,e,i){t=ro(t);var n=(e=io(e))?B(t):0;return e&&n<e?t+Wi(e-n,i):t},Dt.padStart=function(t,e,i){t=ro(t);var n=(e=io(e))?B(t):0;return e&&n<e?Wi(e-n,i)+t:t},Dt.parseInt=function(t,e,i){return i||null==e?e=0:e&&(e=+e),gs(ro(t).replace(it,""),e||0)},Dt.random=function(t,e,i){if(i&&"boolean"!=typeof i&&ln(t,e,i)&&(e=i=W),i===W&&("boolean"==typeof e?(i=e,e=W):"boolean"==typeof t&&(i=t,t=W)),t===W&&e===W?(t=0,e=1):(t=eo(t),e===W?(e=t,t=0):e=eo(e)),t>e){var n=t;t=e,e=n}return i||t%1||e%1?(i=ms(),fs(t+i*(e-t+Ct("1e-"+((i+"").length-1))),e)):ze(t,e)},Dt.reduce=function(t,e,i){var n=Lr(t)?c:w,o=3>arguments.length;return n(t,Qi(e,4),i,o,Ws)},Dt.reduceRight=function(t,e,i){var n=Lr(t)?h:w,o=3>arguments.length;return n(t,Qi(e,4),i,o,Ls)},Dt.repeat=function(t,e,i){return e=(i?ln(t,e,i):e===W)?1:io(e),Ge(ro(t),e)},Dt.replace=function(){var t=arguments,e=ro(t[0]);return 3>t.length?e:e.replace(t[1],t[2])},Dt.result=function(t,e,i){var n=-1,o=(e=pi(e,t)).length;for(o||(o=1,t=W);++n<o;){var s=null==t?W:t[yn(e[n])];s===W&&(n=o,s=i),t=Gn(s)?s.call(t):s}return t},Dt.round=Ma,Dt.runInContext=D,Dt.sample=function(t){return(Lr(t)?Zt:Ve)(t)},Dt.size=function(t){if(null==t)return 0;if(Un(t))return Zn(t)?B(t):t.length;var e=Vs(t);return"[object Map]"==e||"[object Set]"==e?t.size:Me(t).length},Dt.snakeCase=da,Dt.some=function(t,e,i){var n=Lr(t)?p:Ze;return i&&ln(t,e,i)&&(e=W),n(t,Qi(e,3))},Dt.sortedIndex=function(t,e){return Qe(t,e)},Dt.sortedIndexBy=function(t,e,i){return ti(t,e,Qi(i,2))},Dt.sortedIndexOf=function(t,e){var i=null==t?0:t.length;if(i){var n=Qe(t,e);if(n<i&&Nn(t[n],e))return n}return-1},Dt.sortedLastIndex=function(t,e){return Qe(t,e,!0)},Dt.sortedLastIndexBy=function(t,e,i){return ti(t,e,Qi(i,2),!0)},Dt.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var i=Qe(t,e,!0)-1;if(Nn(t[i],e))return i}return-1},Dt.startCase=fa,Dt.startsWith=function(t,e,i){return t=ro(t),i=null==i?0:le(io(i),0,t.length),e=ni(e),t.slice(i,i+e.length)==e},Dt.subtract=Ba,Dt.sum=function(t){return t&&t.length?v(t,yo):0},Dt.sumBy=function(t,e){return t&&t.length?v(t,Qi(e,2)):0},Dt.template=function(t,e,i){var n=Dt.templateSettings;i&&ln(t,e,i)&&(e=W),t=ro(t),e=$r({},e,n,zi);var o,s,r=uo(i=$r({},e.imports,n.imports,zi)),a=b(i,r),l=0;i=e.interpolate||mt;var u="__p+='";i=Co((e.escape||mt).source+"|"+i.source+"|"+(i===$?ut:mt).source+"|"+(e.evaluate||mt).source+"|$","g");var c="sourceURL"in e?"//# sourceURL="+e.sourceURL+"\n":"";if(t.replace(i,(function(e,i,n,r,a,c){return n||(n=r),u+=t.slice(l,c).replace(yt,O),i&&(o=!0,u+="'+__e("+i+")+'"),a&&(s=!0,u+="';"+a+";\n__p+='"),n&&(u+="'+((__t=("+n+"))==null?'':__t)+'"),l=c+e.length,e})),u+="';",(e=e.variable)||(u="with(obj){"+u+"}"),u=(s?u.replace(H,""):u).replace(N,"$1").replace(U,"$1;"),u="function("+(e||"obj")+"){"+(e?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(s?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+u+"return __p}",(e=ma((function(){return Io(r,c+"return "+u).apply(W,a)}))).source=u,zn(e))throw e;return e},Dt.times=function(t,e){if(1>(t=io(t))||9007199254740991<t)return[];var i=4294967295,n=fs(t,4294967295);for(t-=4294967295,n=S(n,e=Qi(e));++i<t;)e(i);return n},Dt.toFinite=eo,Dt.toInteger=io,Dt.toLength=no,Dt.toLower=function(t){return ro(t).toLowerCase()},Dt.toNumber=oo,Dt.toSafeInteger=function(t){return t?le(io(t),-9007199254740991,9007199254740991):0===t?t:0},Dt.toString=ro,Dt.toUpper=function(t){return ro(t).toUpperCase()},Dt.trim=function(t,e,i){return(t=ro(t))&&(i||e===W)?t.replace(et,""):t&&(e=ni(e))?di(t=R(t),e=E(t,i=R(e)),i=I(t,i)+1).join(""):t},Dt.trimEnd=function(t,e,i){return(t=ro(t))&&(i||e===W)?t.replace(nt,""):t&&(e=ni(e))?di(t=R(t),0,e=I(t,R(e))+1).join(""):t},Dt.trimStart=function(t,e,i){return(t=ro(t))&&(i||e===W)?t.replace(it,""):t&&(e=ni(e))?di(t=R(t),e=E(t,R(e))).join(""):t},Dt.truncate=function(t,e){var i=30,n="...";if(Yn(e)){var o="separator"in e?e.separator:o;i="length"in e?io(e.length):i,n="omission"in e?ni(e.omission):n}var s=(t=ro(t)).length;if(bt.test(t)){var r=R(t);s=r.length}if(i>=s)return t;if(1>(s=i-B(n)))return n;if(i=r?di(r,0,s).join(""):t.slice(0,s),o===W)return i+n;if(r&&(s+=i.length-s),Ur(o)){if(t.slice(s).search(o)){var a=i;for(o.global||(o=Co(o.source,ro(ct.exec(o))+"g")),o.lastIndex=0;r=o.exec(a);)var l=r.index;i=i.slice(0,l===W?s:l)}}else t.indexOf(ni(o),s)!=s&&(-1<(o=i.lastIndexOf(o))&&(i=i.slice(0,o)));return i+n},Dt.unescape=function(t){return(t=ro(t))&&G.test(t)?t.replace(k,qt):t},Dt.uniqueId=function(t){var e=++jo;return ro(t)+e},Dt.upperCase=_a,Dt.upperFirst=ga,Dt.each=Mn,Dt.eachRight=Bn,Dt.first=bn,Do(Dt,function(){var t={};return me(Dt,(function(e,i){Fo.call(Dt.prototype,i)||(t[i]=e)})),t}(),{chain:!1}),Dt.VERSION="4.17.11",i("bind bindKey curry curryRight partial partialRight".split(" "),(function(t){Dt[t].placeholder=Dt})),i(["drop","take"],(function(t,e){Mt.prototype[t]=function(i){i=i===W?1:ds(io(i),0);var n=this.__filtered__&&!e?new Mt(this):this.clone();return n.__filtered__?n.__takeCount__=fs(i,n.__takeCount__):n.__views__.push({size:fs(i,4294967295),type:t+(0>n.__dir__?"Right":"")}),n},Mt.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),i(["filter","map","takeWhile"],(function(t,e){var i=e+1,n=1==i||3==i;Mt.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:Qi(t,3),type:i}),e.__filtered__=e.__filtered__||n,e}})),i(["head","last"],(function(t,e){var i="take"+(e?"Right":"");Mt.prototype[t]=function(){return this[i](1).value()[0]}})),i(["initial","tail"],(function(t,e){var i="drop"+(e?"":"Right");Mt.prototype[t]=function(){return this.__filtered__?new Mt(this):this[i](1)}})),Mt.prototype.compact=function(){return this.filter(yo)},Mt.prototype.find=function(t){return this.filter(t).head()},Mt.prototype.findLast=function(t){return this.reverse().find(t)},Mt.prototype.invokeMap=Xe((function(t,e){return"function"==typeof t?new Mt(this):this.map((function(i){return Ee(i,t,e)}))})),Mt.prototype.reject=function(t){return this.filter(Hn(Qi(t)))},Mt.prototype.slice=function(t,e){t=io(t);var i=this;return i.__filtered__&&(0<t||0>e)?new Mt(i):(0>t?i=i.takeRight(-t):t&&(i=i.drop(t)),e!==W&&(i=0>(e=io(e))?i.dropRight(-e):i.take(e-t)),i)},Mt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Mt.prototype.toArray=function(){return this.take(4294967295)},me(Mt.prototype,(function(t,e){var i=/^(?:filter|find|map|reject)|While$/.test(e),n=/^(?:head|last)$/.test(e),o=Dt[n?"take"+("last"==e?"Right":""):e],s=n||/^find/.test(e);o&&(Dt.prototype[e]=function(){var e=this.__wrapped__,r=n?[1]:arguments,a=e instanceof Mt,l=r[0],c=a||Lr(e),h=function(t){return t=o.apply(Dt,u([t],r)),n&&p?t[0]:t};c&&i&&"function"==typeof l&&1!=l.length&&(a=c=!1);var p=this.__chain__,d=!!this.__actions__.length;l=s&&!p,a=a&&!d;return!s&&c?(e=a?e:new Mt(this),(e=t.apply(e,r)).__actions__.push({func:Pn,args:[h],thisArg:W}),new xt(e,p)):l&&a?t.apply(this,r):(e=this.thru(h),l?n?e.value()[0]:e.value():e)})})),i("pop push shift sort splice unshift".split(" "),(function(t){var e=Bo[t],i=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",n=/^(?:pop|shift)$/.test(t);Dt.prototype[t]=function(){var t=arguments;if(n&&!this.__chain__){var o=this.value();return e.apply(Lr(o)?o:[],t)}return this[i]((function(i){return e.apply(Lr(i)?i:[],t)}))}})),me(Mt.prototype,(function(t,e){var i=Dt[e];if(i){var n=i.name+"";(As[n]||(As[n]=[])).push({name:e,func:i})}})),As[Pi(W,2).name]=[{name:"wrapper",func:W}],Mt.prototype.clone=function(){var t=new Mt(this.__wrapped__);return t.__actions__=Di(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Di(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Di(this.__views__),t},Mt.prototype.reverse=function(){if(this.__filtered__){var t=new Mt(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Mt.prototype.value=function(){var t,e=this.__wrapped__.value(),i=this.__dir__,n=Lr(e),o=0>i,s=n?e.length:0;t=0;for(var r=s,a=this.__views__,l=-1,u=a.length;++l<u;){var c=a[l],h=c.size;switch(c.type){case"drop":t+=h;break;case"dropRight":r-=h;break;case"take":r=fs(r,t+h);break;case"takeRight":t=ds(t,r-h)}}if(r=(t={start:t,end:r}).start,t=(a=t.end)-r,r=o?a:r-1,l=(a=this.__iteratees__).length,u=0,c=fs(t,this.__takeCount__),!n||!o&&s==t&&c==t)return ai(e,this.__actions__);n=[];t:for(;t--&&u<c;){for(o=-1,s=e[r+=i];++o<l;){h=(p=a[o]).type;var p=(0,p.iteratee)(s);if(2==h)s=p;else if(!p){if(1==h)continue t;break t}}n[u++]=s}return n},Dt.prototype.at=gr,Dt.prototype.chain=function(){return Cn(this)},Dt.prototype.commit=function(){return new xt(this.value(),this.__chain__)},Dt.prototype.next=function(){this.__values__===W&&(this.__values__=to(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?W:this.__values__[this.__index__++]}},Dt.prototype.plant=function(t){for(var e,i=this;i instanceof St;){var n=wn(i);n.__index__=0,n.__values__=W,e?o.__wrapped__=n:e=n;var o=n;i=i.__wrapped__}return o.__wrapped__=t,e},Dt.prototype.reverse=function(){var t=this.__wrapped__;return t instanceof Mt?(this.__actions__.length&&(t=new Mt(this)),(t=t.reverse()).__actions__.push({func:Pn,args:[In],thisArg:W}),new xt(t,this.__chain__)):this.thru(In)},Dt.prototype.toJSON=Dt.prototype.valueOf=Dt.prototype.value=function(){return ai(this.__wrapped__,this.__actions__)},Dt.prototype.first=Dt.prototype.head,ts&&(Dt.prototype[ts]=function(){return this}),Dt}();Rt._=Jt,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Jt}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}.call(this),window.DKTools={},Object.defineProperties(DKTools,{PATREON:{value:"https://www.patreon.com/dkplugins"},SITE:{value:"https://dk-plugins.ru"},VERSION:{value:Imported.DKTools}}),DKTools.Utils=class{constructor(){return DKTools.Utils}static initialize(){this.__tileSize(),this.__audioCacheLimit(),this.__imageCacheLimit(),DKToolsParam.get("Debugging Console","Enabled")&&this.openConsole(),DKToolsParam.get("Check Updates","Enabled")&&this._checkUpdates()}static __audioCacheLimit(){const t=DKToolsParam.get("Audio Cache Limit")||{};t.Enabled?AudioCache.limit=t.Limit:AudioCache.limit=1e7}static async _checkUpdates(){if(!Utils.isNwjs()||!Utils.isTest())return;let t=[];try{const e={version:DKTools.VERSION,maker:Utils.RPGMAKER_NAME},i=Object.entries(e).map(([t,e])=>`${t}=${e}`).join("&");if(t=await DKTools.Network.fetchJson(`${DKTools.SITE}/plugins.php?${i}`)||[],!t||0===t.length)return}catch(t){return void console.error("DKTools can not check updates")}const e=DKToolsParam.get("Check Updates","Show New Plugins");t=t.sort((t,e)=>DKTools.PluginManager.isRegistered(t.name)?DKTools.PluginManager.isRegistered(e.name)?0:-1:1),t.forEach(t=>{const i=t.version;if(DKTools.PluginManager.isRegistered(t.name)){if(!DKTools.PluginManager.checkVersion(t.name,i)){const e=DKTools.PluginManager.getVersion(t.name),n=[`Available a new ${t.beta?"beta ":""}version of ${t.name}: ${i}\n`,`Installed: ${e}\n`,"Plugin page: "+t.url];t.download_url&&n.push("\nDownload: "+t.download_url),console.log.apply(console,n)}if(DKTools.PluginManager.compareVersions(t.patreon_version,i)&&!DKTools.PluginManager.checkVersion(t.name,t.patreon_version)){const e=DKTools.PluginManager.getVersion(t.name),i=[`Available a new version of ${t.name} on Patreon: ${t.patreon_version}\n`,`Installed: ${e}\n`,`Patreon page: ${DKTools.PATREON}\n`,"Plugin page: "+t.url];t.patreon_url&&i.push("\nPatreon download: "+t.patreon_url),console.log.apply(console,i)}}else if(e){if(!(0===t.requirements.length||t.requirements.every(t=>DKTools.PluginManager.isRegistered(t))))return;const e=[`Try the new plugin: ${t.name}\n`,`Description: ${t.description}\n`,`Plugin page: ${t.url} \n`];t.download_url&&e.push("\nDownload: "+t.download_url),console.log.apply(console,e)}})}static _getErrorLogData(){const t=SceneManager._scene,e={};if(t&&t.constructor.name&&(e.Scene=t.constructor.name,SceneManager.isCurrentScene(Scene_Map))){const t=$gameMap._interpreter;if(t){if(t._mapId>0&&(e["Map ID"]=t._mapId),t._eventId>0){e["Event ID"]=t._eventId;const i=$gameMap.event(t._eventId);i&&(e["Event Page"]=i._pageIndex+1)}if(t._list&&t._list.length>0){let i=t._list[t._index];i&&0===i.code&&t._index>0&&(i=t._list[t._index-1]),i&&i.code>0&&(e["Last Event Command"]=i.code)}t._params&&t._params.length>0&&(e.Params=JSON.stringify(t._params))}}return e}static __hideGrid(){this._gridSprite&&(SceneManager._scene.removeChild(this._gridSprite),this._gridSprite=null)}static __imageCacheLimit(){const t=DKToolsParam.get("Image Cache Limit")||{};t.Enabled&&(ImageCache.limit=t.Limit)}static isFunction(t){return"function"==typeof t}static isString(t){return!!t&&"string"==typeof t}static async logError(t){if(!t||!Utils.isNwjs())return;const e=DKToolsParam.get("Errors Log")||{},i=Utils.isTest(),n=e.Enabled;if("None"===n||"Only Game"===n&&i||"Only Test"===n&&!i)return;const o=DKTools.IO.fs,s=DKTools.IO.os;if(!o||!s)return;const r=1024*e["File Size"]*1024,a=e.Filename,l=new DKTools.IO.File(a),u=await l.getStatsAsync().then(t=>t.data);if(u&&u.size>r){const t=DKTools.IO.parsePath(a).name,e=new Date,i=String(e.getDate()).padZero(2),n=String(e.getMonth()+1).padZero(2),o=e.getFullYear(),s=String(e.getHours()).padZero(2),r=String(e.getMinutes()).padZero(2),u=String(e.getSeconds()).padZero(2);await l.renameAsync(`${i}.${n}.${o}_${s}.${r}.${u}_${t}`)}const c=await o.openSync(a,"a"),h=this._getErrorLogData();let p="Date: "+(new Date).toString()+s.EOL;_.forEach(h,(t,e)=>{p+=e+": "+t+s.EOL}),t instanceof Object?(p+="Name: "+t.name+s.EOL,p+="Message: "+t.message+s.EOL,void 0!==t.filename&&(p+="Filename: "+t.filename+s.EOL),void 0!==t.lineNumber&&(p+="Line: "+t.lineNumber+s.EOL),void 0!==t.columnNumber&&(p+="Column: "+t.columnNumber+s.EOL),p+="Stack: "+t.stack+s.EOL+s.EOL):p+="Error: "+t+s.EOL+s.EOL,await o.writeSync(c,p),await o.closeSync(c)}static makeScreenshot(){if(!Utils.isNwjs())return;const t=DKToolsParam.get("Screenshots"),e=t.Path,i=t.Type,n=t.Quality,o=SceneManager.snap().canvas.toDataURL("image/"+i,n),s=new RegExp(`^data:image/${i};base64,`),r=o.replace(s,""),a=new Date;let l=t.Filename;l=l.replace(/%year/gi,a.getFullYear()),l=l.replace(/%month/gi,a.getMonth()+1),l=l.replace(/%day/gi,a.getDate()),l=l.replace(/%hours/gi,a.getHours()),l=l.replace(/%minutes/gi,a.getMinutes()),l=l.replace(/%seconds/gi,a.getSeconds());const u=l+"."+i,c=DKTools.IO.normalizePath(e+"/"+u);new DKTools.IO.File(c).save(r,{createDirectory:!0,options:"base64",onSuccess:()=>{console.log("The screenshot is saved with the name: "+u)}})}static openConsole(){if(Utils.isTest()&&Utils.isNwjs())try{const t=__webpack_require__(970).Window.get();t.showDevTools(null,()=>t.focus())}catch(t){this.logError(t),console.error("DKTools can not open the console!")}}static __showGrid(){if(!Utils.isTest()||!DKToolsParam.get("Grid","Enabled"))return;const t=DKToolsParam.get("Grid"),e=t["Grid Sizes"]||[64,48,32,16];if(this._gridSprite)return void(this._gridSprite._gridSizeIndex<e.length-1?(this._gridSprite._gridSizeIndex++,this._gridSprite.refreshAll()):this.__hideGrid());let i=null;this._gridSprite=new DKTools.Sprite.Button(Graphics),this._gridSprite._gridSizeIndex=0,this._gridSprite.addEvent({type:"draw-all",onUpdate:()=>{const n=Graphics.boxWidth,o=Graphics.boxHeight,s=t["Grid Color"],r=t["Grid Width"],a=e[this._gridSprite._gridSizeIndex];_.times(Math.ceil(n/a),t=>{this._gridSprite.drawLine({x1:a*t,y1:0,x2:a*t,y2:o,color:s,lineWidth:r})}),_.times(Math.ceil(o/a),t=>{this._gridSprite.drawLine({x1:0,y1:a*t,x2:n,y2:a*t,color:s,lineWidth:r})}),i&&this._gridSprite.drawLine({x1:i.x,y1:i.y,x2:TouchInput.mouseX,y2:TouchInput.mouseY,color:i.color,lineWidth:t["Ruler Width"]})}}),this._gridSprite.addEvent({type:"mouse-inside",onUpdate:()=>{const t=TouchInput.mouseX,e=TouchInput.mouseY,i=Graphics.boxWidth,o=Graphics.boxHeight;let s=t+8,r=e+8;s+n.width>i&&(s=t-n.width-8),r+n.height>o&&(r=e-n.height-8),n.move(s,r),n.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-down-middle",onUpdate:()=>{i||(i={x:TouchInput.mouseX,y:TouchInput.mouseY,color:t["Ruler Color"]||"#"+(16777215*Math.random()<<0).toString(16)}),this._gridSprite.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-up-middle",onUpdate:()=>{i=null,this._gridSprite.refreshAll()}}),this._gridSprite.start(!0);const n=new DKTools.Sprite(0,0,220,"2");n.addEvent({type:"draw-all",onUpdate:()=>{if(i){const t={x:TouchInput.mouseX,y:TouchInput.mouseY},e=Math.floor(Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2)));n.drawText(`line: ${e} (${i.x}, ${i.y})`,{y:"0",align:"left"})}n.drawText(`x: ${TouchInput.mouseX}, y: ${TouchInput.mouseY}`,{y:"1",align:"left"})}}),n.start(),this._gridSprite.addChild(n),this._gridSprite.updateMouseInsideEvents(),SceneManager._scene.addChild(this._gridSprite)}static __tileSize(){const t=DKToolsParam.get("Tile Size")||{};t.Enabled&&(Tilemap.TILE_WIDTH=t.Size,Tilemap.TILE_HEIGHT=t.Size)}static throwError(t,e=0){setTimeout(()=>{throw t},e)}static __quickLoad(){if(!Utils.isTest()||!DKToolsParam.get("Quick Load","Enabled"))return;const t=DKToolsParam.get("Quick Load","Savefile ID"),e=SceneManager._scene;t>0?DataManager.loadGame(t)&&(SoundManager.playLoad(),e instanceof Scene_Base&&e.fadeOutAll(),$gameSystem.versionId()!==$dataSystem.versionId&&($gamePlayer.reserveTransfer($gameMap.mapId(),$gamePlayer.x,$gamePlayer.y),$gamePlayer.requestMapReload()),SceneManager.goto(Scene_Map)):e instanceof Scene_Load||SceneManager.push(Scene_Load)}},DKTools.Utils.WebAudio=class{static load(t,e,i){if(!t)return null;if(t instanceof WebAudio)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener);if(!DKTools.Utils.isString(t))return null;const n=AudioManager.createBuffer(t,e);return DKTools.Utils.isFunction(i)&&n.addLoadListener(i),n}static async loadAsync(t,e,i){return new Promise(n=>{const o=this.load(t,e,i);o?o.addLoadListener(()=>n(o)):n(o)})}static loadBuffers(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=t.map(t=>this.load(t));const n=[];let o=0;const s=(s,r)=>{e&&(n[s]=r,o++,DKTools.Utils.isFunction(i)&&i(r,n,t),t.length===o&&(e(t),e=null))};t.forEach((t,e)=>{t instanceof WebAudio?t.addLoadListener(t=>s(e,t)):s(e,t)})}static async loadBuffersAsync(t){return Promise.all(t.map(t=>this.loadAsync(t)))}},DKTools.Utils.Bitmap=class{static drawLine(t,e,i,n,o,s="white",r=1){const a=t.context;a.save(),a.strokeStyle=s,a.lineWidth=r,a.beginPath(),a.moveTo(e,i),a.lineTo(n,o),a.stroke(),a.restore(),t._setDirty()}static getBase64(t){return t&&t.canvas?t.canvas.toDataURL("image/png"):null}static load(t,e,i,n,o){if(!t)return null;if(t instanceof Bitmap)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener,t.hue,t.smooth);if(!DKTools.Utils.isString(t))return null;const s=DKTools.IO.normalizePath(t+"/",!0),r=ImageManager.loadBitmap(s,e,n,o);return DKTools.Utils.isFunction(i)&&r.addLoadListener(i),r}static async loadAsync(t,e,i,n,o){return new Promise(s=>{const r=this.load(t,e,i,n,o);r?r.addLoadListener(()=>s(r)):s(r)})}static loadBitmaps(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=t.map(t=>this.load(t));const n=[];let o=0;const s=(s,r)=>{e&&(n[s]=r,o++,DKTools.Utils.isFunction(i)&&i(r,n,t),t.length===o&&(e(t),e=null))};t.forEach((t,e)=>{t instanceof Bitmap?t.addLoadListener(t=>s(e,t)):s(e,t)})}static async loadBitmapsAsync(t){return Promise.all(t.map(t=>this.loadAsync(t)))}static reserve(t,e,i,n,o,s){if(!t)return null;if(t instanceof Bitmap)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.reserve.apply(this,t);if(t instanceof Object)return this.reserve(t.folder,t.filename,t.listener,t.hue,t.smooth,t.reservationId);if(!DKTools.Utils.isString(t))return null;const r=DKTools.IO.normalizePath(t+"/",!0),a=ImageManager.reserveBitmap(r,e,n,o,s);return DKTools.Utils.isFunction(i)&&a.addLoadListener(i),a}static async reserveAsync(t,e,i,n,o,s){return new Promise(r=>{const a=this.reserve(t,e,i,n,o,s);a?a.addLoadListener(()=>r(a)):r(a)})}static reserveBitmaps(t,e,i){if(!DKTools.Utils.isFunction(e))return;t=t.map(t=>this.reserve(t));const n=[];let o=0;const s=(s,r)=>{e&&(n[s]=r,o++,DKTools.Utils.isFunction(i)&&i(r,n,t),t.length===o&&(e(t),e=null))};t.forEach((t,e)=>{t instanceof Bitmap?t.addLoadListener(t=>s(e,t)):s(e,t)})}static async reserveBitmapsAsync(t){return Promise.all(t.map(t=>this.reserveAsync(t)))}},DKTools.IO=class{constructor(){return DKTools.IO}static initialize(){let t="";this._isReady=!1,Utils.isNwjs()&&(this._fs=__webpack_require__(147),this._os=__webpack_require__(37),this._path=__webpack_require__(17),t=this.joinPath(this.path.dirname(process.mainModule.filename),"/")),this._projectPath=t,this._mode=DKToolsParam.get("File System","Mode"),this._stamp={},this._loadStamp(),DKToolsParam.get("File System","Disable Auto Create Stamp")||this._createStamp(),this._isReady=!0}static absolutePathExists(t){if(Utils.isNwjs())return this.fs.existsSync(t);if(this.mode===DKTools.IO.MODE_NWJS_STAMP&&t.startsWith(this._projectPath)){if(this.isFile(t))return!0;if(this.isDirectory(t))return!0}return!1}static async _createStamp(){if(!Utils.isTest()||!Utils.isNwjs()||this.mode===DKTools.IO.MODE_NWJS)return;const t=DKToolsParam.get("File System","Ignored Directories").filter(t=>!["locales"].includes(t)).map(t=>new DKTools.IO.Directory(t)),e=DKTools.IO.getRootDirectory(),i=new DKTools.IO.File("data/Stamp.json"),n={},o=async e=>{const i=await e.getAllAsync().then(t=>t.data);for(const e of i){const i=e.isDirectory();if(i&&t.some(t=>t.equals(e)))continue;const s=await e.getStatsAsync().then(t=>t.data),r=e.getFullPath().substring(1).split(DKTools.IO.sep);i?_.set(n,r,{__stats__:{...s,type:"directory"}}):_.set(n,r,{__stats__:{...s,type:"file"}}),i&&await o(e)}};await o(e),await i.saveJsonAsync(n,{compress:!0}),this._stamp=n}static getRootDirectory(){return new DKTools.IO.Directory}static getAbsolutePath(t){const e=this.joinPath(this._projectPath,t||"");return this.normalizePath(e)}static isFile(t){if(Utils.isNwjs()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this.fs.lstatSync(e).isFile()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.normalizePath(t).split(DKTools.IO.sep).filter(t=>!!t);if(_.last(e).includes("."))return"file"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static isDirectory(t){if(Utils.isNwjs()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this.fs.lstatSync(e).isDirectory()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.normalizePath(t).split(DKTools.IO.sep).filter(t=>!!t);if(!_.last(e).includes("."))return"directory"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static isReady(){return this._isReady}static joinPath(){if(Utils.isNwjs())return this.path.join(...arguments);const t=_.filter(arguments,t=>DKTools.Utils.isString(t));let e=t.join("\\");return/^[\\\/]{2}[^\\\/]/.test(t[0])||(e=e.replace(/^[\\\/]{2,}/,"\\")),this.normalizePath(e)}static _loadStamp(){if(Utils.isNwjs()||this.mode===DKTools.IO.MODE_NWJS)return;new DKTools.IO.File("data/Stamp.json").loadJson({sync:!0,decompress:!0,onSuccess:t=>{this._stamp=t.data||this._stamp}})}static normalizePath(t,e=!1){if(Utils.isNwjs()){const i=this.path.normalize(t);return e?i.replace(/\\/g,"/"):i}const i=this._statPath(t),n=i.isAbsolute;let o=i.device,s=i.tail;const r=/[\\\/]$/.test(s),a=_.filter(s.split(/[\\\/]+/),t=>t&&"."!==t),l=[];for(const t of a)".."===t?l.length>0&&".."!==l[l.length-1]?l.pop():n||l.push(".."):l.push(t);s=l.join("\\"),s||n||(s="."),s&&r&&(s+="\\"),i.isUnc&&(o="\\\\"+o.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\"));let u=(o+(n?"\\":"")+s).replace(/\\/g,DKTools.IO.sep);return u[0]===DKTools.IO.sep&&(u=u.substring(1)),u}static parsePath(t){if(Utils.isNwjs())return this.path.parse(t);const e=this._splitPath(t);return{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}}static pathExists(t){return this.absolutePathExists(this.getAbsolutePath(t))}static reverseSlashes(t){return t.replace(/\\/g,"/")}static _statPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),i=e[1]||"",n=!!i&&":"!==i[1];return{device:i,isUnc:n,isAbsolute:n||!!e[2],tail:e[3]}}static _splitPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),i=(e[1]||"")+(e[2]||""),n=e[3]||"",o=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/.exec(n);return[i,o[1],o[2],o[3]]}},Object.defineProperties(DKTools.IO,{fs:{get:function(){return this._fs},configurable:!0},os:{get:function(){return this._os},configurable:!0},path:{get:function(){return this._path},configurable:!0},sep:{get:function(){return Utils.isNwjs()?this.path.sep:"/"},configurable:!0},projectPath:{get:function(){return this._projectPath},configurable:!0},mode:{get:function(){return this._mode},configurable:!0},stamp:{get:function(){return this._stamp},configurable:!0},OK:{value:0},EXPECT_CALLBACK:{value:1},ERROR_NOT_LOCAL_MODE:{value:2},ERROR_PATH_DOES_NOT_EXIST:{value:3},ERROR_CALLBACK_IS_NOT_AVAILABLE:{value:4},ERROR_DIRECTORY_ALREADY_EXISTS:{value:5},ERROR_DIRECTORY_IS_NOT_EMPTY:{value:6},ERROR_OVERWRITING_IS_NOT_AVAILABLE:{value:7},ERROR_OPTIONS_ARE_NOT_AVAILABLE:{value:8},ERROR_DECOMPRESSING_DATA:{value:9},ERROR_PARSING_DATA:{value:10},MODE_NWJS_STAMP:{value:0},MODE_NWJS:{value:1}}),DKTools.IO.Entity=class{constructor(){this.initialize.apply(this,arguments)}get path(){return this._path}get name(){return this._name}get initialExtension(){return this._initialExtension}get extension(){return this._extension}initialize(t=""){const e=DKTools.IO.parsePath(t);this._path=e.dir,this._name=e.name,this._initialExtension=e.ext,this._extension=e.ext}equals(t){return this.getFullPath()===t.getFullPath()}exists(){return DKTools.IO.absolutePathExists(this.getAbsolutePath())}getPath(){return this._path}getName(){return this._name}getExtension(){return this._extension}getFullPath(){return DKTools.IO.joinPath(this.getPath(),"/",this.getFullName())}getFullName(){return this.getName()+this.getExtension()}getAbsolutePath(){return DKTools.IO.getAbsolutePath(this.getFullPath())}getStats(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const t=this.getFullPath().split("\\").filter(t=>!!t);return{data:_.get(DKTools.IO.stamp,t.concat("__stats__"),{}),status:DKTools.IO.OK}}const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.stat(i,(e,i)=>{e?this.__processError(e,t.onError):t.onSuccess({data:i,status:DKTools.IO.OK},this)}),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{return{data:e.statSync(i),status:DKTools.IO.OK}}catch(e){this.__processError(e,t.onError)}}async getStatsAsync(){return new Promise((t,e)=>{const i=this.getStats({sync:!1,onSuccess:t,onError:e});i.status!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}hasExtension(){return!!this._extension}isFile(){if(this instanceof DKTools.IO.File){if(Utils.isNwjs()){if(Decrypter.hasEncryptedAudio&&this.isAudio()||Decrypter.hasEncryptedImages&&this.isImage()){const t=DKTools.IO.normalizePath(this.getPath()+"/"+Decrypter.extToEncryptExt(this.getFullName()));return DKTools.IO.isFile(t)}return DKTools.IO.isFile(this.getFullPath())}return!!this.hasExtension()}return!1}isDirectory(){return this instanceof DKTools.IO.Directory&&(Utils.isNwjs()?DKTools.IO.isDirectory(this.getFullPath()):!this.hasExtension())}__processError(t,e){DKTools.Utils.isFunction(e)?e(t,this):DKTools.Utils.throwError(t)}rename(t,e={}){if(e=e||{},!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const i=DKTools.IO.fs,n=this.getAbsolutePath(),o=DKTools.IO.normalizePath(this._path+"/"+t+this._extension),s=DKTools.IO.getAbsolutePath(o);if(!e.overwrite&&DKTools.IO.absolutePathExists(s))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;if(!e.sync)return i.rename(n,s,i=>{i?this.__processError(i,e.onError):(this._name=t,DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this))}),DKTools.IO.EXPECT_CALLBACK;try{return i.renameSync(n,s),this._name=t,DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async renameAsync(t,e={}){return new Promise((i,n)=>{const o=this.rename(t,{...e,sync:!1,onSuccess:i,onError:n});o!==DKTools.IO.EXPECT_CALLBACK&&i(o)})}},DKTools.IO.File=class extends DKTools.IO.Entity{initialize(t=""){super.initialize(t),this._detectExtension()}copy(t,e={}){if(!e)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const i=DKTools.IO.fs,n=this.getAbsolutePath(),o=new DKTools.IO.File(t).getDirectory();if(e.createDirectory&&!o.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;o.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error("Failed to create directory: "+o.getFullPath()),e.onError)}if(!o.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!e.sync)return i.copyFile(n,t,e.flags,t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return i.copyFileSync(n,t,e.flags),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async copyAsync(t,e={}){return new Promise((i,n)=>{const o=this.copy(t,{...e,sync:!1,onSuccess:i,onError:n});o!==DKTools.IO.EXPECT_CALLBACK&&i(o)})}_detectExtension(){let t=this._extension;this.isAudio()?t=AudioManager.audioFileExt():this.isImage()?t=ImageManager.imageFileExt():this.isVideo()&&(t=Graphics.videoFileExt()),this._extension=t}getDirectory(){return new DKTools.IO.Directory(this._path)}getDirectoryName(){return this.getDirectory().getName()}getExtension(){let t=super.getExtension();return(Decrypter.hasEncryptedAudio&&t===AudioManager.audioFileExt()||Decrypter.hasEncryptedImages&&t===ImageManager.imageFileExt())&&(t=Decrypter.extToEncryptExt(t)),t}isAudio(){return".ogg"===this._extension||".m4a"===this._extension||".rpgmvo"===this._extension}isJson(){return".json"===this._extension}isTexture(){return".dds"===this._extension}isTxt(){return".txt"===this._extension}isImage(){return".png"===this._extension||".rpgmvp"===this._extension||".webp"===this._extension}isVideo(){return".webm"===this._extension||".mp4"===this._extension}isSave(){return".rpgsave"===this._extension}load(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};const e=this.getAbsolutePath(),i=e=>{if(e){if(t.decompress)try{e=LZString.decompressFromBase64(e)}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(t.parse)try{e=JSON.parse(e,t.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:e,status:DKTools.IO.OK}};if(Utils.isNwjs()){if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const n=DKTools.IO.fs,o=t.options||{encoding:"utf8"};if(t.sync)try{const t=n.readFileSync(e,o);return i(t)}catch(e){this.__processError(e,t.onError)}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};n.readFile(e,o,(e,n)=>{e?this.__processError(e,t.onError):t.onSuccess(i(n),this)})}}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP&&"Stamp.json"!==this.getFullName()&&!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const n=new XMLHttpRequest;n.open("GET",e,!t.sync),n.overrideMimeType(t.mimeType||"application/json"),n.onload=()=>{4===n.readyState&&(200===n.status?t.onSuccess(i(n.responseText),this):this.__processError(n,t.onError))},n.onerror=()=>{this.__processError(n,t.onError)};try{n.send()}catch(t){}}return{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async loadAsync(t={}){return new Promise((e,i)=>{const n=this.load({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}loadAudio(){return this.isAudio()&&(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.WebAudio.load(this.getDirectoryName(),this.getName()):null}async loadAudioAsync(){return DKTools.Utils.WebAudio.loadAsync(this.loadAudio())}loadJson(t){return t?(t.parse||(t.parse=!0),this.load(t)):{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE}}async loadJsonAsync(t={}){return new Promise((e,i)=>{const n=this.loadJson({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}loadBitmap(t,e,i){return t instanceof Object?this.loadBitmap(t.listener,t.hue,t.smooth):this.isImage()&&(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.Bitmap.load({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i}):null}async loadBitmapAsync(t,e,i){return DKTools.Utils.Bitmap.loadAsync(this.loadBitmap(t,e,i))}remove(t={}){if(t=t||{},!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.unlink(i,e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.unlinkSync(i),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise((t,e)=>{const i=this.remove({sync:!1,onSuccess:t,onError:e});i!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}reserveBitmap(t,e,i,n){return t instanceof Object?this.reserveBitmap(t.listener,t.hue,t.smooth,t.reservationId):this.isImage()&&this.exists()?DKTools.Utils.Bitmap.reserve({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i,reservationId:n}):null}async reserveBitmapAsync(t,e,i,n){return t instanceof Object?this.reserveBitmapAsync(t.listener,t.hue,t.smooth,t.reservationId):this.isImage()&&this.exists()?DKTools.Utils.Bitmap.reserveAsync({folder:this.getPath(),filename:this.getName(),listener:t,hue:e,smooth:i,reservationId:n}):null}save(t,e={}){if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;const i=DKTools.IO.fs,n=this.getAbsolutePath(),o=this.getDirectory();if((e=e||{}).createDirectory&&!o.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;o.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error("Failed to create directory: "+o.getFullPath()),e.onError)}if(!o.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(e.stringify&&(t=JSON.stringify(t,e.stringify.replacer,e.stringify.space)),e.compress&&(t=LZString.compressToBase64(t)),!e.sync)return i.writeFile(n,t,e.options,t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return i.writeFileSync(n,t,e.options),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async saveAsync(t,e={}){return new Promise((i,n)=>{const o=this.save(t,{...e,sync:!1,onSuccess:i,onError:n});o!==DKTools.IO.EXPECT_CALLBACK&&i(o)})}saveJson(t,e={}){return(e=e||{}).stringify||(e.stringify={space:"\t"}),this.save(t,e)}async saveJsonAsync(t,e={}){return new Promise((i,n)=>{const o=this.saveJson(t,{...e,sync:!1,onSuccess:i,onError:n});o!==DKTools.IO.EXPECT_CALLBACK&&i(o)})}},DKTools.IO.SaveFile=class extends DKTools.IO.File{initialize(t=""){super.initialize(`save/${t}.rpgsave`)}},DKTools.IO.Directory=class extends DKTools.IO.Entity{create(t){if(!t)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE;if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(this.exists())return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.mkdir(i,t.options,e=>{e?this.__processError(e,t.onError):t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.mkdirSync(i,t.options),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async createAsync(t={}){return new Promise((e,i)=>{const n=this.create({...t,sync:!1,onSuccess:e,onError:i});n!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}createDirectory(t,e){const i=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(i).create(e)}async createDirectoryAsync(t,e={}){const i=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(i).createAsync(e)}findFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,i=[];let n=1,o=0;const s=o=>{_.forEach(o,o=>{if(o.isFile()){const e=o.getFullName();t.template instanceof RegExp&&t.template.test(e)?i.push(o):t.template&&e!==t.template||i.push(o)}else n<e&&o.isDirectory()&&(n++,r(o))})},r=e=>{if(t.sync){const i=e.getAll({sync:!0,options:t.options}).data;s(i)}else e.getAll({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{o++,s(e.data),n===o&&t.onSuccess({data:i,status:DKTools.IO.OK})}})};return r(this),t.sync?{data:i,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findFilesAsync(t={}){return new Promise((e,i)=>{const n=this.findFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}findDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs())return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,i=[];let n=1,o=0;const s=o=>{_.forEach(o,o=>{const s=o.getFullName();t.template instanceof RegExp&&t.template.test(s)?i.push(o):t.template&&s!==t.template||i.push(o),n<e&&(n++,r(o))})},r=e=>{if(t.sync){const i=e.getDirectories({sync:!0,options:t.options}).data;s(i)}else e.getDirectories({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{o++,s(e.data),n===o&&t.onSuccess({data:i,status:DKTools.IO.OK})}})};return r(this),t.sync?{data:i,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findDirectoriesAsync(t={}){return new Promise((e,i)=>{const n=this.findDirectories({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getAll(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=this.getFullPath(),i=i=>{t.template instanceof RegExp?i=i.filter(e=>t.template.test(e)):DKTools.Utils.isString(t.template)&&(i=i.filter(e=>e===t.template));return{data:i.reduce((t,i)=>{const n=DKTools.IO.normalizePath(e+"/"+i);return DKTools.IO.isFile(n)?t.push(new DKTools.IO.File(n)):DKTools.IO.isDirectory(n)&&t.push(new DKTools.IO.Directory(n)),t},[]),status:DKTools.IO.OK}};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.getFullPath().split(DKTools.IO.sep).filter(t=>!!t),n=_.get(DKTools.IO.stamp,e,{}),o=Object.keys(n);return t.sync?i(o):(t.onSuccess(i(o),this),{data:null,status:DKTools.IO.EXPECT_CALLBACK})}const n=DKTools.IO.fs,o=this.getAbsolutePath();if(!t.sync)return n.readdir(o,t.options,(e,n)=>{e?this.__processError(e,t.onError):t.onSuccess(i(n),this)}),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{const e=n.readdirSync(o,t.options);return i(e)}catch(e){this.__processError(e,t.onError)}}async getAllAsync(t={}){return new Promise((e,i)=>{const n=this.getAll({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>t.filter(t=>t.isFile());if(t.sync){const i=this.getAll(t);return i.status===DKTools.IO.OK?{...i,data:e(i.data)}:i}{const i=t.onSuccess;return t.onSuccess=(t,n)=>{t.status===DKTools.IO.OK?i({...t,data:e(t.data)},n):i(t,n)},this.getAll(t)}}async getFilesAsync(t={}){return this.getAllAsync(t).then(t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,t=>t.isFile());return{...t,data:e}}return t})}getDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>_.filter(t,t=>t.isDirectory());if(t.sync){const i=this.getAll(t);return i.status===DKTools.IO.OK?{...i,data:e(i.data)}:i}{const i=t.onSuccess;return t.onSuccess=(t,n)=>{t.status===DKTools.IO.OK?i({...t,data:e(t.data)},n):i(t,n)},this.getAll(t)}}async getDirectoriesAsync(t={}){return this.getAllAsync(t).then(t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,t=>t.isDirectory());return{...t,data:e}}return t})}getAudioFiles(t){return this.getFiles({...t,template:/(.ogg|.rpgmvo)/})}async getAudioFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getAudioFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getJsonFiles(t){return this.getFiles({...t,template:/(.json)/})}async getJsonFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getJsonFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getTxtFiles(t){return this.getFiles({...t,template:/(.txt)/})}async getTxtFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getTxtFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getImageFiles(t){return this.getFiles({...t,template:/(.png|.webp|.rpgmvp)/})}async getImageFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getImageFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getVideoFiles(t){return this.getFiles({...t,template:/(.webm|.mp4)/})}async getVideoFilesAsync(t={}){return new Promise((e,i)=>{const n=this.getVideoFiles({...t,sync:!1,onSuccess:e,onError:i});n.status!==DKTools.IO.EXPECT_CALLBACK&&e(n)})}getRootDirectory(){return new DKTools.IO.Directory(this.getPath())}isEmpty(){const t=this.getAll({sync:!0}).data;return!t||0===t.length}loadAudioFiles(){const t=this.getAudioFiles({sync:!0});return t.status!==DKTools.IO.OK?[]:t.data.map(t=>t.loadAudio())}async loadAudioFilesAsync(){const t=await this.getAudioFilesAsync();return t.status!==DKTools.IO.OK?[]:Promise.all(t.data.map(t=>t.loadAudioAsync()))}loadBitmaps(t,e,i){const n=this.getImageFiles({sync:!0});return n.status!==DKTools.IO.OK?[]:n.data.map(n=>n.loadBitmap(t,e,i))}async loadBitmapsAsync(t,e,i){const n=await this.getImageFilesAsync();return n.status!==DKTools.IO.OK?[]:Promise.all(n.data.map(n=>n.loadBitmapAsync(t,e,i)))}remove(t={}){if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!this.isEmpty())return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;const e=DKTools.IO.fs,i=this.getAbsolutePath();if(!t.sync)return e.rmdir(i,e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)}),DKTools.IO.EXPECT_CALLBACK;try{return e.rmdirSync(i),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise((t,e)=>{const i=this.remove({sync:!1,onSuccess:t,onError:e});i!==DKTools.IO.EXPECT_CALLBACK&&t(i)})}reserveBitmaps(t,e,i,n){const o=this.getImageFiles({sync:!0});return o.status!==DKTools.IO.OK?[]:_.map(o.data,o=>o.reserveBitmap(t,e,i,n))}async reserveBitmapsAsync(t,e,i,n){const o=await this.getImageFilesAsync();return o.status!==DKTools.IO.OK?[]:Promise.all(o.data.map(o=>o.reserveBitmapAsync(t,e,i,n)))}},DKTools.IO.WebStorage=class{static exists(t){return localStorage.hasOwnProperty(t)}static load(t,e={}){if(!this.exists(t))return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};let i=localStorage.getItem(t);if(i){if(e.decompress)try{i=LZString.decompressFromBase64(i)}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(e.parse)try{i=JSON.parse(i,e.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:i,status:DKTools.IO.OK}}static remove(t){return this.exists(t)?(localStorage.removeItem(t),DKTools.IO.OK):DKTools.IO.ERROR_PATH_DOES_NOT_EXIST}static rename(t,e,i=!1){if(!this.exists(t))return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!i&&this.exists(e))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;const n=localStorage.getItem(t);return localStorage.setItem(e,n),localStorage.removeItem(t),DKTools.IO.OK}static save(t,e,i={}){i=i||{};return!_.defaultTo(i.overwrite,!0)&&this.exists(t)?DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE:(i.stringify&&(e=JSON.stringify(e,i.stringify.replacer,i.stringify.space)),i.compress&&(e=LZString.compressToBase64(e)),localStorage.setItem(t,e),DKTools.IO.OK)}},DKTools.Network=class{constructor(){return DKTools.Network}static async fetchFile(t,e={}){return fetch(t,e).then(t=>{if(t.ok)return this._toFile(t);throw t})}static async fetchJson(t,e={}){return e.headers||(e.headers={}),e.headers.Accept="application/json",fetch(t,e).then(t=>{if(t.ok)return this._toJson(t);throw t})}static async _toFile(t){return t.arrayBuffer().catch(()=>null)}static async _toJson(t){return t.json().catch(()=>null)}},DKTools.ParameterManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._pluginName=t,this._params={},this.initializeParams()}initializeParams(){_.forEach(PluginManager.parameters(this._pluginName),(t,e)=>{this._params[e]=DKTools.ParameterManager.parse(t)})}change(t,e){_.set(this._params,t,e)}get(t,e,i){if(!DKTools.Utils.isString(t))return void console.error("Parameter name is not a string!",this._pluginName,t,e,i);let n=this._params[t];return void 0!==n?(e instanceof Object?n=_.find(n,e):void 0!==e&&(n=n[e]),n instanceof Object&&(i instanceof Object?(void 0!==i.key&&(n=n[i.key]),void 0!==i.index&&(n=n[i.index])):void 0!==i&&(n=n[i])),n):void 0}static parse(t){try{return"number"==typeof t||"boolean"==typeof t?t:JSON.parse(t,(t,e)=>{if(Array.isArray(e))return e.map(t=>this.parse(t));try{return this.parse(e)}catch(t){return e}})}catch(e){return t}}},DKTools.PluginManager=class{constructor(){return DKTools.PluginManager}static initialize(){this._checkRequirements()}static _checkRequirements(){Object.keys(this._requirements).forEach(t=>{const e=this.getVersion(t),i=this._getMaxVersion(t);if(null===e){const e='Required to install the plugin "%1". Minimal version: %2'.format(t,i);throw new Error(e)}if(!this.compareVersions(e,i)){const n='Required to update the plugin "%1" to minimal version %2 (Installed: %3)'.format(t,i,e);throw new Error(n)}})}static compareVersions(t,e){if(t===e)return!0;if(!t||!e)return!1;const i=t.split("."),n=e.split(".");for(let t=0;t<i.length;t++){const e=parseInt(i[t]),o=parseInt(n[t]);if(e>o)return!0;if(e<o)return!1}return!0}static checkVersion(t,e){return this.compareVersions(this.getVersion(t),e)}static _getMaxVersion(t){return(this._requirements[t]||[]).slice().sort((t,e)=>this.compareVersions(t,e)?-1:1)[0]}static getVersion(t){const e=Imported[t];return DKTools.Utils.isString(e)?e:Number.isFinite(e)?String(e):null}static isRegistered(t){return DKTools.Utils.isString(this.getVersion(t))||$plugins.some(e=>e.name===t&&e.status)}static orderAfter(t,e){const i=$plugins.filter(t=>t.status);return i.findIndex(e=>e.name===t)<i.findIndex(t=>t.name===e)&&DKTools.Utils.throwError(new Error(`Plugin "${t}" must be located after the plugin "${e}"`),500),!0}static orderBefore(t,e){const i=$plugins.filter(t=>t.status);return i.findIndex(e=>e.name===t)>i.findIndex(t=>t.name===e)&&DKTools.Utils.throwError(new Error(`Plugin "${t}" must be located before the plugin "${e}"`),500),!0}static requirePlugin(t,e){let i;if(this._requirements[t]||(this._requirements[t]=[]),e instanceof Object)i=e[Utils.RPGMAKER_NAME];else{if(!DKTools.Utils.isString(e))return void console.error(`Unknown version type (${t}): ${typeof e}`);i=e}this._requirements[t].push(i)}},Object.defineProperties(DKTools.PluginManager,{_requirements:{value:{}}}),DKTools.PluginCommandManager=class{constructor(){return DKTools.PluginCommandManager}static has(t){return!!this._pluginCommands[t.toLowerCase()]}static process(t,e,i){if(!e)throw new Error("Empty plugin command!");const n=this._pluginCommands[e.toLowerCase()];DKTools.Utils.isFunction(n)&&n.call(t,i)}static set(t,e){this._pluginCommands[t.toLowerCase()]=e}},Object.defineProperties(DKTools.PluginCommandManager,{_pluginCommands:{value:{}}}),DKTools.PreloadManager=class{constructor(){return DKTools.PreloadManager}static initialize(){const t=DKToolsParam.get("Initial Preloading")||{};if(!t.Enabled)return void this.start();this.setDebugging(t.Debugging),t["Audio Files"].forEach(t=>{this.preloadAudio({path:"audio/"+t,caching:!0})}),t["Image Files"].forEach(t=>{this.preloadImage({path:"img/"+t.Path,hue:t.Hue,caching:!0})});this.getTotal()>=30&&console.warn("Too many files to preload! Load only needed files.");let e=!1;(t["Progress Bar"]||{}).Enabled||(e=!0,this.onFileLoad(()=>{Graphics.updateLoading()}),this.onFinish(()=>{Graphics.endLoading()})),e&&this.start()}static canPreloadAudioFiles(){return!DKTools.PluginManager.isRegistered("AudioStreaming")}static canPreloadImageFiles(){return!0}static clearCache(){this._cache={audio:{},image:{}}}static clearQueue(){this._queue={audio:{},image:{}}}static _finish(){this._finishTime=new Date,this._debugging=!1;const t=(this._finishTime-this._startTime)/1e3,e=this.getTotal();if(e>0&&this._log("Preloading complete! \nLoaded/Skipped/Total: "+this._loaded+"/"+this._skipped+"/"+e+"\nPreloading time: "+t+" sec"),this._finishListeners){const i={loaded:this._loaded,skipped:this._skipped,preloadingTime:t,total:e};for(;this._finishListeners.length>0;){this._finishListeners.shift()(i)}delete this._finishListeners}this._fileLoadListeners&&delete this._fileLoadListeners,this.clearQueue()}static _generateAudioKey(t){return DKTools.IO.normalizePath(t,!0)}static _generateImageKey(t,e=0){return DKTools.IO.normalizePath(ImageManager._generateCacheKey(t,e||0),!0)}static getCachedAudioByKey(t){return this._cache.audio[t]}static getCachedAudioByPath(t){return this.getCachedAudioByKey(this._generateAudioKey(t))}static getCachedImageByKey(t){return this._cache.image[t]}static getCachedImageByPath(t){return this.getCachedImageByKey(this._generateImageKey(t))}static getTotal(){return _.size(this._queue.audio)+_.size(this._queue.image)}static isAudioCachedByKey(t){return!!this._cache.audio[t]}static isAudioCachedByPath(t){return this.isAudioCachedByKey(this._generateAudioKey(t))}static isFinished(){return!!this._finishTime}static isReady(){return this.isFinished()}static isImageCachedByKey(t){return!!this._cache.image[t]}static isImageCachedByPath(t,e){return this.isImageCachedByKey(this._generateImageKey(t,e))}static isStarted(){return!!this._startTime}static _log(t){this._debugging&&t&&console.log(t)}static _onFileLoad(t){if(this._loaded++,this._log(`Loaded ${t instanceof WebAudio?"audio":"image"}: ${t.url}`),this._fileLoadListeners){const e={file:t,loaded:this._loaded,total:this.getTotal()};this._fileLoadListeners.forEach(t=>{t(e)})}}static onFileLoad(t){this._fileLoadListeners||(this._fileLoadListeners=[]),this._fileLoadListeners.push(t)}static onFinish(t){this._finishListeners||(this._finishListeners=[]),this._finishListeners.push(t)}static _preload(t,e){if(e instanceof Object&&DKTools.Utils.isString(e.path)){const i=new DKTools.IO.Directory(e.path),n=i=>{let n=i.getFullPath();if("audio"===t){const t=DKTools.IO.normalizePath(AudioManager._basePath||AudioManager._path);n.startsWith(t)&&(n=n.slice(t.length))}this._queue[t][n]||(i.isFile()?"audio"===t?(Imported.DKTools_Localization||(i=new DKTools.IO.File(n)),this._processAudioFile(i,e)):"image"===t&&this._processImageFile(i,e):console.error("This is not a file: "+n))};if(i.isDirectory()){if(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP)throw new Error("Web browsers and mobile phones cannot load directories!");{const o={sync:!0};let s=[];this._files[e.path]?s=this._files[e.path]:("audio"===t?s=i.getAudioFiles(o).data||[]:"image"===t&&(s=i.getImageFiles(o).data||[]),this._files[e.path]=s),s.forEach(t=>n(t))}}else{let i=e.path;i.includes(".")||("image"===t?i+=".png":"audio"===t&&(i+=".ogg")),n(new DKTools.IO.File(i))}}}static _processAudioFile(t,e){const i=t.getFullPath(),n=DKTools.IO.reverseSlashes(i);if(this._queue.audio[n])return;const o=t.getDirectoryName(),s=t.getName();if(e.caching){if(this.isAudioCachedByPath(n))return this._log("Audio already preloaded: "+n+". Skipped..."),void("se"===o&&AudioManager.isStaticSe({name:s})&&this.releaseAudioByPath(n));if(AudioManager.isLoaded(o,s)){if("se"!==o||!AudioManager.isStaticSe({name:s})){const t=AudioManager.createBuffer(o,s);this._cache.audio[this._generateAudioKey(n)]=t,AudioManager.releaseBuffer(o,s)}return void this._log("Audio already preloaded: "+n+". Skipped...")}}else{const t=AudioManager.isReserved(o,s),e=AudioManager.isLoaded(o,s);if(t||!e||"se"===o&&AudioManager.isStaticSe({name:s})||AudioManager._audioCache.reserve(AudioManager._generateCacheKey(o,s),AudioManager.createBuffer(o,s),AudioManager._defaultReservationId),t||e)return void this._log("Audio already preloaded: "+n+". Skipped...")}const r=AudioManager._basePath||AudioManager._path;this._queue.audio[n]={...e,path:r+n}}static _processImageFile(t,e){const i=t.getFullPath(),n=DKTools.IO.reverseSlashes(i);if(!this._queue.image[n]){if(e.caching){if(this.isImageCachedByPath(n,e.hue))return void this._log("Image already preloaded: "+n+". Skipped...");if(ImageManager.isLoaded(n,e.hue)){const t=ImageManager.loadNormalBitmap(n,e.hue);return this._cache.image[this._generateImageKey(t.url,e.hue)]=t,ImageManager.releaseBitmap(n),void this._log("Image already preloaded: "+n+". Skipped...")}}else{const t=ImageManager.isReserved(n,e.hue),i=ImageManager.isLoaded(n,e.hue);if(!t&&i&&ImageManager._imageCache.reserve(ImageManager._generateCacheKey(n,e.hue),ImageManager.loadNormalBitmap(n,e.hue),ImageManager._defaultReservationId),t||i)return void this._log("Image already preloaded: "+n+". Skipped...")}this._queue.image[n]={...e,path:n}}}static _processLoadAudioFiles(){const t=[];return _.forEach(this._queue.audio,e=>{const i=new DKTools.IO.File(e.path),n=i.getFullPath();if(i.isFile())if(i.isAudio()){if(this.isAudioCachedByPath(n))return this._skipped++,void this._log("Audio already preloaded: "+n+". Skipped...");const o=i.loadAudio({...e.options});o?(e.caching&&(this._cache.audio[this._generateAudioKey(o.url)]=o),t.push(o)):(this._skipped++,this._log("Cannot load an audio: "+n+". Skipped..."))}else this._skipped++,this._log("This is not an audio: "+n+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")}),t.map(t=>DKTools.Utils.WebAudio.loadAsync(t).then(()=>this._onFileLoad(t)))}static _processLoadImageFiles(){const t=[];return _.forEach(this._queue.image,e=>{const i=new DKTools.IO.File(e.path),n=i.getFullPath();if(i.isFile())if(i.isImage()){if(this.isImageCachedByPath(n,e.hue))return this._skipped++,void this._log("Image already preloaded: "+n+". Skipped...");let o;o=e.caching?DKTools.Utils.Bitmap.load({...e.options,folder:i.getPath(),filename:i.getName(),hue:e.hue}):DKTools.Utils.Bitmap.reserve({...e.options,folder:i.getPath(),filename:i.getName(),hue:e.hue}),o?(e.caching&&(this._cache.image[this._generateImageKey(o.url,e.hue)]=o),t.push(o)):(this._skipped++,this._log("Cannot load an image: "+n+". Skipped..."))}else this._skipped++,this._log("This is not an image: "+n+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")}),t.map(t=>DKTools.Utils.Bitmap.loadAsync(t).then(()=>this._onFileLoad(t)))}static preloadAudio(t){this.canPreloadAudioFiles()&&this._preload("audio",t)}static preloadImage(t){this.canPreloadImageFiles()&&this._preload("image",t)}static releaseAudioByKey(t){delete this._cache.audio[t]}static releaseAudioByPath(t){this.releaseAudioByKey(this._generateAudioKey(t))}static releaseImageByKey(t){delete this._cache.image[t]}static releaseImageByPath(t,e){this.releaseImageByKey(this._generateImageKey(t,e))}static setDebugging(t){this._debugging=t||!1}static start(){const t=this.getTotal();if(this._loaded=0,this._skipped=0,this._startTime=new Date,this._finishTime=null,0===t)return Promise.resolve().then(()=>this._finish());this._log("DKTools Preload Manager is running... \nTotal files to load: "+t);const e=Promise.all(this._processLoadAudioFiles()),i=Promise.all(this._processLoadImageFiles());return Promise.all([e,i]).then(()=>this._finish())}},Object.defineProperties(DKTools.PreloadManager,{_queue:{value:{audio:{},image:{}},writable:!0},_cache:{value:{audio:{},image:{}},writable:!0},_files:{value:{}}}),DKTools.PreloadManager.Scene=function(){this.initialize.apply(this,arguments)},DKTools.PreloadManager.Scene.prototype=Object.create(Scene_Base.prototype),DKTools.PreloadManager.Scene.prototype.constructor=DKTools.PreloadManager.Scene,DKTools.PreloadManager.Scene.prototype.initialize=function(){Scene_Base.prototype.initialize.apply(this,arguments),this._params=DKToolsParam.get("Initial Preloading","Progress Bar"),this._total=DKTools.PreloadManager.getTotal(),this._nextScene=Scene_Boot,this._counter=0},DKTools.PreloadManager.Scene.prototype.prepare=function(t){this._nextScene=t},DKTools.PreloadManager.Scene.prototype.setupPreloading=function(){Scene_Base.prototype.setupPreloading.apply(this,arguments),"images"===this._params["Progress Bar Style"]&&(this._preloader.add(DKTools.Utils.Bitmap.reserveAsync({folder:"img/system/",filename:this._params["Progress Bar Background Image"]}).then(t=>{this._backgroundBitmap=t})),this._preloader.add(DKTools.Utils.Bitmap.reserveAsync({folder:"img/system/",filename:this._params["Progress Bar Progress Image"]}).then(t=>{this._progressBitmap=t})))},DKTools.PreloadManager.Scene.prototype.isGameFontLoaded=Scene_Boot.prototype.isGameFontLoaded,DKTools.PreloadManager.Scene.prototype.create=function(){0!==this._total?(this._params.Background&&this.createBackground(),this.createProgressBar()):SceneManager.goto(this._nextScene)},DKTools.PreloadManager.Scene.prototype.createBackground=function(){this._background=new Sprite(ImageManager.loadSystem(this._params.Background)),this.addChild(this._background)},DKTools.PreloadManager.Scene.prototype.createProgressBar=function(){const params=this._params,style=params["Progress Bar Style"]||"colors";let width,height;"colors"===style?(width=eval(params["Progress Bar Width"]),height=eval(params["Progress Bar Height"])):(this._backgroundBitmap.width!==this._progressBitmap.width&&console.warn("PreloadManager: different width of background and progress!"),this._backgroundBitmap.height!==this._progressBitmap.height&&console.warn("PreloadManager: different height of background and progress!"),width=Math.max(this._backgroundBitmap.width,this._progressBitmap.width),height=Math.max(this._backgroundBitmap.height,this._progressBitmap.height));const x=eval(params["Progress Bar X"])||0,y=eval(params["Progress Bar Y"])||0;this._progressBar=new DKTools.Sprite(x,y,width,height),this._progressBar.setupFont({fontSize:params["Progress Bar Text Size"]}),"colors"===style?this._progressBar.addEvent({type:"draw-all",onUpdate:()=>{this._progressBar.fillAll(params["Progress Bar Background Color"]),this._progressBar.fillRect({width:this._progressBar.width*this._counter/this._total,color:params["Progress Bar Progress Color"]})}}):this._progressBar.addEvent({type:"draw-all",onUpdate:()=>{this._progressBar.drawBitmap(this._backgroundBitmap),this._progressBar.drawBitmap(this._progressBitmap,{source:t=>({width:t.width*this._counter/this._total})})}}),params["Progress Bar Text"]&&this._progressBar.addEvent({type:"draw-all",onUpdate:()=>{if(!this._progressBar.progressData){const t=params["Preparation Text"]||"Preparing...";return void this._progressBar.drawText(t,{height:this._progressBar.height})}const t=params["Progress Bar Text"].format(...this._progressBar.progressData,Math.floor(100*this._counter/this._total).clamp(0,100));this._progressBar.drawText(t,{height:this._progressBar.height})}}),this._progressBar.start(),this.addChild(this._progressBar)},DKTools.PreloadManager.Scene.prototype.isReady=function(){return Scene_Base.prototype.isReady.apply(this,arguments)&&DKTools.StartupManager.isReady()&&this.isGameFontLoaded()},DKTools.PreloadManager.Scene.prototype.start=function(){const t=this._total,e=t>180?1:Math.ceil(180/t);DKTools.PreloadManager.onFileLoad(t=>{this._progressBar.addEvent({type:"queue",repeats:0,repeatTime:e,onStart:()=>{this._counter++,this._progressBar.progressData=[t.file.url,t.loaded,t.total],this._progressBar.refreshAll()}})}),this._progressBar.addEvent({type:"update",onUpdate:()=>{this._counter>=t&&SceneManager.goto(this._nextScene)}}),DKTools.PreloadManager.start()},DKTools.StartupManager=class{static async initialize(){this._isReady=!1,await this.checkErrors(),await this.initializeModules(),await DKTools.PreloadManager.initialize(),this._isReady=!0}static async initializeModules(){}static _checkRPGMakerVersion(){if(Utils.RPGMAKER_VERSION<"1.6.0")throw new Error("Required to update RPG Maker MV to minimal version 1.6.0 (Installed: %1)".format(Utils.RPGMAKER_VERSION))}static _checkWebStorage(){if(!Utils.isNwjs()&&!window.hasOwnProperty("localStorage"))throw new Error("Your browser does not support localStorage API")}static async checkErrors(){await this._checkRPGMakerVersion(),await this._checkWebStorage()}static isReady(){return this._isReady}},DKTools.Event=class{constructor(){this.initialize.apply(this,arguments)}get id(){return this._id}get target(){return this._target}get manager(){return this._manager}get type(){return this._type}get repeatTime(){return this._repeatTime}get repeats(){return this._repeats}get remainingTime(){return this._remainingTime}set remainingTime(t){this._remainingTime=t}get remainingRepeats(){return this._remainingRepeats}set remainingRepeats(t){this._remainingRepeats=t}get remainingPauseTime(){return this._remainingPauseTime}set remainingPauseTime(t){this._remainingPauseTime=t}initialize(t){t=t||{},this._id=t.id,this._target=t.target,this._type=t.type,this._repeatTime=t.repeatTime||-1,this._repeats=_.defaultTo(t.repeats,-1),this._remainingPauseTime=t.remainingPauseTime||0,this._onStart=t.onStart,this._onUpdate=t.onUpdate,this._onPause=t.onPause,this._onReset=t.onReset,this._onRepeat=t.onRepeat,this._onSuccess=t.onSuccess,this._onFail=t.onFail,this._started=!1,this._resetRemainingTime(),this._resetRemainingRepeats()}_callOnPauseHandler(t){this._canCallOnPauseHandler()&&this._onPause(this,t)}_callOnRepeatHandler(t){this._canCallOnRepeatHandler()&&this._onRepeat(this,t)}_callOnResetHandler(t){this._canCallOnResetHandler()&&this._onReset(this,t)}_callOnStartHandler(t){this._canCallOnStartHandler()&&this._onStart(this,t),this._started=!0}_callOnSuccessHandler(t=!1,e){(this._canCallOnSuccessHandler()||t&&this.hasOnSuccessHandler())&&this._onSuccess(this,e)}_callOnUpdateHandler(t){this._canCallOnUpdateHandler()&&this._onUpdate(this,t)}_callOnFailHandler(t){this._canCallOnFailHandler()&&this._onFail(this,t)}_canCallOnPauseHandler(){return this.hasOnPauseHandler()&&this.isPaused()}_canCallOnRepeatHandler(){return this.hasOnRepeatHandler()}_canCallOnResetHandler(){return this.hasOnResetHandler()}_canCallOnStartHandler(){return this.hasOnStartHandler()&&!this.isStarted()}_canCallOnSuccessHandler(){return this.hasOnSuccessHandler()&&this.isFinished()}_canCallOnUpdateHandler(){return this.hasOnUpdateHandler()&&this.isUpdated()}_canCallOnFailHandler(){return this.hasOnFailHandler()}_clearRemainingRepeats(){this._remainingRepeats=0}_clearRemainingTime(){this._remainingTime=0}fail(t){this._callOnFailHandler(t),this._clearRemainingTime(),this._clearRemainingRepeats()}finish(t=!1,e){this.isFinished()||t?this._callOnSuccessHandler(t,e):this._callOnFailHandler(e),this._clearRemainingTime(),this._clearRemainingRepeats()}getElapsedRepeats(){return this._repeats-this._remainingRepeats}getElapsedTime(){return this._repeatTime-this._remainingTime}hasManager(){return!!this._manager}hasOnFailHandler(){return!!this._onFail}hasOnPauseHandler(){return!!this._onPause}hasOnRepeatHandler(){return!!this._onRepeat}hasOnResetHandler(){return!!this._onReset}hasOnStartHandler(){return!!this._onStart}hasOnSuccessHandler(){return!!this._onSuccess}hasOnUpdateHandler(){return!!this._onUpdate}hasTarget(){return!!this._target}hasType(){return!!this._type}isAnimation(){return this instanceof DKTools.Animation}isAnimationAction(){return this instanceof DKTools.Animation.Action}isFinished(){return 0===this._remainingTime&&0===this._remainingRepeats}isPaused(){return 0!==this._remainingPauseTime}isStarted(){return this._started}isUpdated(){return this.isStarted()&&!this.isPaused()&&!this.isFinished()}pause(t=-1){this._remainingPauseTime=t}_resetRemainingRepeats(){this._remainingRepeats=this._repeats}_resetRemainingTime(){this._remainingTime=this._repeatTime}remove(){return!this.hasTarget()||this._target.removeEvent(this)}repeat(){this._remainingRepeats>0&&this._remainingRepeats--,this._resetRemainingTime(),this._callOnRepeatHandler()}reset(){this._resetRemainingTime(),this._resetRemainingRepeats(),this._callOnResetHandler()}resume(){this._remainingPauseTime=0}setManager(t){this._manager=t}setOnFailHandler(t){this._onFail=t}setOnPauseHandler(t){this._onPause=t}setOnRepeatHandler(t){this._onRepeat=t}setOnResetHandler(t){this._onReset=t}setOnStartHandler(t){this._onStart=t}setOnSuccessHandler(t){this._onSuccess=t}setOnUpdateHandler(t){this._onUpdate=t}setTarget(t){this._target=t}stop(t=!1){this.finish(t),this.reset()}_update(t){this._callOnUpdateHandler(t),this._updateRemainingRepeats()}_updatePause(){this._callOnPauseHandler(),this._updateRemainingPauseTime()}_updateRemainingPauseTime(){this._remainingPauseTime>0&&this._remainingPauseTime--}_updateRemainingRepeats(){this.isFinished()||(0===this._remainingTime?this.repeat():this._updateRemainingTime())}_updateRemainingTime(){this._remainingTime>0&&this._remainingTime--}update(t){this.isPaused()?this._updatePause():(this._callOnStartHandler(),this._update(t),this.isFinished()&&this.finish())}},DKTools.Animation=class extends DKTools.Event{get actions(){return this._actions}initialize(t){this._actions=[],super.initialize.apply(this,arguments)}addAction(t){t&&(Number.isFinite(t.startTime)||(t.startTime=0),!Number.isFinite(t.endTime)&&Number.isFinite(this._repeatTime)&&(t.endTime=this._repeatTime),t.setAnimation(this),this._actions.push(t))}addActions(t){t.forEach(t=>{this.addAction(t)})}_canUpdateAction(t){return _.inRange(this.getElapsedTime(),t.startTime,t.endTime)}hasAction(t){return this._actions.includes(t)}hasActions(){return this._actions.length>0}isActionFinished(t){return t.isStarted()&&!t.isPaused()&&this.getElapsedTime()+1>=t.endTime}isActionUpdated(t){return t.isStarted()&&!t.isPaused()&&this._canUpdateAction(t)}isFinished(){return super.isFinished.apply(this,arguments)||!this.hasActions()}removeAction(t){this.hasAction(t)&&_.pull(this._actions,t)}repeat(){this.repeatActions(),super.repeat.apply(this,arguments)}repeatActions(){this._actions.forEach(t=>{t.repeat()})}reset(){this.resetActions(),super.reset.apply(this,arguments)}resetActions(){_.forEach(this._actions,(function(t){t.reset()}))}_update(t){this._updateActions(),super._update.apply(this,arguments)}_updateAction(t){this._canUpdateAction(t)?t.update():this.getElapsedTime()+1===t.endTime&&this.isActionFinished(t)&&t.finish()}_updateActions(){this._actions.forEach(t=>{this._updateAction(t)})}},DKTools.Animation.Action=class extends DKTools.Event{static Frame(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,i=e.frame,n=(this._data.x-i.x)/t,o=(this._data.y-i.y)/t,s=(this._data.width-i.width)/t,r=(this._data.height-i.height)/t,a=new Rectangle(i.x+n,i.y+o,i.width+s,i.height+r);e.setFrame(a.x,a.y,a.width,a.height)}.bind(e)),e.setOnSuccessHandler(function(){this.target.setFrame(this._data.x,this._data.y,this._data.width,this._data.height)}.bind(e)),e}static Move(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,i=(this._data.x-e.x)/t,n=(this._data.y-e.y)/t,o=e.x+i,s=e.y+n;e.position.set(o,s)}.bind(e)),e.setOnSuccessHandler(function(){this.target.position.set(this._data.x,this._data.y)}.bind(e)),e}static Opacity(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target;e.opacity=e.opacity+(this._data-e.opacity)/t}.bind(e)),e.setOnSuccessHandler(function(){this.target.opacity=this._data}.bind(e)),e}static Rotation(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,i=(this._data-e.rotation)/t;e.rotation=e.rotation+i}.bind(e)),e.setOnSuccessHandler(function(){this.target.rotation=this._data}.bind(e)),e}static Scale(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,i=e.scale,n=(this._data.x-i.x)/t,o=(this._data.y-i.y)/t,s=i.x+n,r=i.y+o;e.scale.set(s,r)}.bind(e)),e.setOnSuccessHandler(function(){this.target.scale.set(this._data.x,this._data.y)}.bind(e)),e}get animation(){return this._animation}get startTime(){return this._startTime}set startTime(t){this._startTime=t}get endTime(){return this._endTime}set endTime(t){this._endTime=t}get data(){return this._data}get target(){return this._target||(this._animation?this._animation.target:null)}initialize(t){t=t||{},this._animation=null,this._startTime=t.startTime,this._endTime=t.endTime,this._data=t.data,super.initialize.apply(this,arguments)}getElapsedTime(){return this._animation.getElapsedTime()-this._startTime}getRemainingTime(){return this._endTime-this._animation.getElapsedTime()}isFinished(){return this._animation.isActionFinished(this)}isUpdated(){return this._animation.isActionUpdated(this)}remove(){this._animation.removeAction(this)}repeat(){this._callOnRepeatHandler()}reset(){this._callOnResetHandler()}setAnimation(t){this._animation=t}},DKTools.EventsManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._target=t,this._events={}}addAnimation(t){return this.addEventToContainer(t)}addEvent(t){let e;return t instanceof DKTools.Event||t instanceof DKTools.Animation?e=t:t instanceof Object&&(e=new DKTools.Event(t)),this.addEventToContainer(e)}addEventToContainer(t){if(!t)return null;t.hasTarget()||t.setTarget(this._target),t.setManager(this);return this.getEventsContainerByType(t.type).push(t),t}addOneTimeEvent(t){return t.repeatTime=1,t.repeats=0,this.addEvent(t)}_checkEvent(t){return t&&!t.isFinished()}_checkEvents(){_.forEach(this._events,(t,e)=>{this._events[e]=this._checkEventsContainer(t)})}_checkEventsContainer(t){return t.filter(t=>this._checkEvent(t))}clearEvents(t){t?Array.isArray(t)?t.forEach(t=>{this._events[t]=[]}):this._events[t]=[]:this._events={}}createEventsContainer(t){return this._events[t]||(this._events[t]=[]),this._events[t]}failEvents(t,e){this.iterateEventsContainer(t,t=>{t.fail(e)})}findAnimation(t,e){return this.getAnimations(e).find(e=>e.id===t)}findEvent(t,e){return this.getEvents(e).find(e=>e.id===t)}finishEvents(t,e=!1,i){this.iterateEventsContainer(t,t=>{t.finish(e,i)})}getAnimations(t){return this.getEvents(t).filter(t=>t instanceof DKTools.Animation)}getEventIndex(t){return this.getEventsContainerByType(t.type).indexOf(t)}getEvents(t){if(t)return this.getEventsContainerByType(t);let e=[];return Object.values(this._events).forEach(t=>{e=e.concat(t)}),e}getEventsContainerByType(t){return this._events[t]||this.createEventsContainer(t)}hasAnimation(t){return t instanceof DKTools.Animation&&this.getEventIndex(t)>=0}hasAnimations(t){return this.getAnimations(t).length>0}hasEvent(t){return this.getEventIndex(t)>=0}hasEvents(t){return this.getEvents(t).length>0}isEventsPaused(t){return this.getEventsContainerByType(t).every(t=>t.isPaused())}iterateEventsContainer(t,e){this.getEventsContainerByType(t).forEach(e)}pauseEvents(t,e=-1){this.iterateEventsContainer(t,t=>{t.pause(e)})}removeEvent(t){const e=this.getEventIndex(t);if(e>=0){return this.getEventsContainerByType(t.type)[e]=null,!0}return!1}resumeEvents(t){this.iterateEventsContainer(t,t=>{t.resume()})}stopEvents(t,e=!1){this.iterateEventsContainer(t,t=>{t.stop(e)})}update(){this._checkEvents()}updateEventsContainer(t,e){this.iterateEventsContainer(t,t=>{t.update(e)})}},DKTools.Base=class{constructor(){throw new Error("This is an abstract class!")}get mouse(){return this.getLocalPoint(TouchInput.mouseX,TouchInput.mouseY)}get mouseEnterTime(){return this._mouseEnterTime}get touch(){return this.getLocalPoint(TouchInput.x,TouchInput.y)}get wheelX(){return this._wheelX}get wheelY(){return this._wheelY}get eventsManager(){return this._eventsManager}initialize(t,e,i,n){let o;t instanceof Object?(o=t.x,e=t.y,i=t.width,n=t.height):Number.isFinite(t)&&(o=t),this._clearAll(),this._createEventsManager(),this.move(o,e),this.setupSize(i,n),this.setupAll()}activate(){this.setActive(!0)&&this.updateActivateEvents()}actorName(t){return Window_Base.prototype.actorName.apply(this,arguments)}addAnimation(t){return this._eventsManager.addAnimation(t)}addEvent(t){return this._eventsManager.addEvent(t)}addOneTimeEvent(t){return this._eventsManager.addOneTimeEvent(t)}addFilter(t){if(!t)return;const e=this.filters;e&&e.length>0?(e.push(t),this.filters=e):this.filters=[t]}_clearAll(){this._mouseEnterTime=0,this._wheelX=0,this._wheelY=0}_createEventsManager(){this._eventsManager||(this._eventsManager=new DKTools.EventsManager(this))}calcTextHeight(t,e=!1){return this.hasBitmap()&&t?Window_Base.prototype.calcTextHeight.apply(this,arguments):0}canRedrawAll(){return this.hasBitmap()}checkAll(){this.updateCheckAllEvents()}clear(){return this.clearRect()}clearRect(t,e,i,n){if(!this.hasBitmap())return!1;let o=t;return t instanceof Object&&(o=t.x,e=t.y,i=t.width,n=t.height),DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),DKTools.Utils.isString(n)&&(e=this.lineHeight()*parseFloat(n)),o=o||0,e=e||0,i=i||this.standardDrawingWidth(),n=n||this.standardDrawingHeight(),this.bitmap.clearRect(o,e,i,n),!0}convertEscapeCharacters(t){try{return Window_Base.prototype.convertEscapeCharacters.apply(this,arguments)}catch(e){return t=(t=(t=(t=(t=(t=(t=t.replace(/\\/g,"")).replace(/\x1b\x1b/g,"\\")).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bN\[(\d+)\]/gi,function(){return this.actorName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bP\[(\d+)\]/gi,function(){return this.partyMemberName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bG/gi,TextManager.currencyUnit)}}createAll(){this.updateCreateAllEvents()}deactivate(){this.setActive(!1)&&this.updateDeactivateEvents()}drawAll(){this.updateDrawAllEvents()}drawBitmap(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const i=DKTools.Utils.Bitmap.load(t);if(!i||e.sync&&!i.isReady())return!1;let n=!0;return i.addLoadListener(()=>{const t=DKTools.Utils.isFunction,o=DKTools.Utils.isString,s=this.lineHeight(),{paintOpacity:r,resetPaintOpacity:a}=e;let{source:l,destination:u}=e,c={};t(e.callback)&&(c=e.callback(i,this)),l=l||c.source||{},u=u||c.destination||{},t(l)&&(l=l(i,this)),t(u)&&(u=u(i,this));const h=_.defaultTo(l.x,0),p=_.defaultTo(l.width,i.width);let d=_.defaultTo(l.y,0),f=_.defaultTo(l.height,i.height);const g=_.defaultTo(u.x,0),m=_.defaultTo(u.width,p);let y=_.defaultTo(u.y,0),T=_.defaultTo(u.height,f);0!==p&&0!==f&&0!==m&&0!==T?(o(d)&&(d=s*parseFloat(d)),o(f)&&(f=s*parseFloat(f)),o(y)&&(y=s*parseFloat(y)),o(T)&&(T=s*parseFloat(T)),Number.isFinite(r)&&this.changePaintOpacity(r),this.bitmap.blt(i,h,d,p,f,g,y,m,T),a&&this.resetPaintOpacity()):n=!1}),n}async drawBitmapAsync(t,e={}){if(!t)return!1;const i=await DKTools.Utils.Bitmap.loadAsync(t);return this.drawBitmap(i,e)}drawCharacter(t,e,i={}){if(!this.hasBitmap()||null==t||null==e)return!1;i=i||{};const n=ImageManager.loadCharacter(t),o=ImageManager.isBigCharacter(t),s=n.width/(o?3:12),r=n.height/(o?4:8),a=(e%4*3+1)*s,l=4*Math.floor(e/4)*r,u=new Rectangle(a,l,s,r),c=i.pos;let{x:h,y:p}=i;return c instanceof Object&&(h=c.x,p=c.y),h=h||0,p=p||0,this.drawBitmap(n,{...i,source:u,destination:{x:h,y:p}})}drawCircle(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,radius:i,color:n,paintOpacity:o,resetPaintOpacity:s}=t;let{x:r,y:a}=t;return 0!==i&&(e instanceof Object&&(r=e.x,a=e.y),DKTools.Utils.isString(a)&&(a=this.lineHeight()*parseFloat(a)),Number.isFinite(o)&&this.changePaintOpacity(o),this.bitmap.drawCircle(r||0,a||0,i||1,n||"white"),s&&this.resetPaintOpacity(),!0)}drawFace(t,e,i={}){if(!this.hasBitmap()||null==t||null==e)return!1;i=i||{};const{pos:n,rect:o}=i;let{x:s,y:r,width:a,height:l}=i;n instanceof Object&&(s=n.x,r=n.y),o instanceof Object&&(s=o.x,r=o.y,a=o.width,l=o.height),a=a||Window_Base._faceWidth,l=l||Window_Base._faceHeight;const u=ImageManager.loadFace(t),c=Window_Base._faceWidth,h=Window_Base._faceHeight,p=Math.min(a,c),d=Math.min(l,h),f=e%4*c+(c-p)/2,_=Math.floor(e/4)*h+(h-d)/2,g=new Rectangle(f,_,p,d);return s=Math.floor((s||0)+Math.max(a-c,0)/2),r=Math.floor((r||0)+Math.max(l-h,0)/2),this.drawBitmap(u,{...i,source:g,destination:{x:s,y:r}})}drawGauge(t={}){if(!this.hasBitmap())return!1;const{pos:e,rect:i,reversed:n,gradient:o,paintOpacity:s,resetPaintOpacity:r}=t;let{x:a,y:l,width:u,height:c,type:h,rate:p,backgroundColor:d,color:f,color1:g,color2:m}=t;if(e instanceof Object&&(a=e.x,l=e.y),i instanceof Object&&(a=i.x,l=i.y,u=i.width,c=i.height),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),0===u||0===c)return!1;a=a||0,l=l||0,u=u||this.standardDrawingWidth(),c=c||this.standardDrawingHeight(),d=_.defaultTo(d,"black"),f=_.defaultTo(f,"white"),g=_.defaultTo(g,f),m=_.defaultTo(m,f),h=_.defaultTo(h,"horizontal"),p=_.defaultTo(p,1);const y={x:a,y:l,width:u,height:c};if("horizontal"===h)y.width*=p,n&&(y.x+=u-y.width);else{if("vertical"!==h)return!1;y.height*=p,n&&(y.y+=c-y.height)}return Number.isFinite(s)&&this.changePaintOpacity(s),this.fillRect({x:a,y:l,width:u,height:c,color:d}),this.gradientFillRect({rect:y,color1:g,color2:m,vertical:"vertical"===o}),r&&this.resetPaintOpacity(),!0}drawIcon(t,e={}){if(!this.hasBitmap()||null==t)return!1;const i=ImageManager.loadSystem("IconSet"),n=Window_Base._iconWidth,o=Window_Base._iconHeight,s=t%16*n,r=Math.floor(t/16)*o,a=new Rectangle(s,r,n,o),l=e.pos;let{x:u,y:c}=e;return l instanceof Object&&(u=l.x,c=l.y),this.drawBitmap(i,{...e,source:a,destination:{x:u,y:c}})}drawItemName(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const i=Window_Base._iconWidth+4,{pos:n,iconPos:o,paintOpacity:s,resetPaintOpacity:r}=e;let{x:a,y:l,iconX:u,iconY:c}=e;return n instanceof Object&&(a=n.x,l=n.y),o instanceof Object&&(u=o.x,c=o.y),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),a=a||0,l=l||0,u=_.defaultTo(u,a+2),c=_.defaultTo(c,l+2),Number.isFinite(s)&&this.changePaintOpacity(s),this.drawIcon(t.iconIndex,{x:u,y:c}),this.drawText(t.name,{x:a+i,y:l,width:(e.width||312)-i,height:e.height,align:"left",font:e.font,textColor:e.textColor,resetFont:e.resetFont,resetTextColor:e.resetTextColor}),r&&this.resetPaintOpacity(),!0}drawLine(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos1:e,pos2:i,color:n,lineWidth:o,paintOpacity:s,resetPaintOpacity:r}=t;let{x1:a,y1:l,x2:u,y2:c}=t;return 0!==o&&(e instanceof Object&&(a=e.x,l=e.y),i instanceof Object&&(u=i.x,c=i.y),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),Number.isFinite(s)&&this.changePaintOpacity(s),DKTools.Utils.Bitmap.drawLine(this.bitmap,a||0,l||0,u||0,c||0,n,o),r&&this.resetPaintOpacity(),!0)}drawPolygon(t){if(!this.hasBitmap())return!1;t=t||{};const{points:e,paintOpacity:i,resetPaintOpacity:n}=t;if(!Array.isArray(e)||0===e.length)return!1;Number.isFinite(i)&&this.changePaintOpacity(i);for(let i=0;i<e.length-1;i++){const n=e[i],o=e[i+1];this.drawLine({...t,pos1:n,pos2:o})}return n&&this.resetPaintOpacity(),!0}drawTextEx(t,e={}){if(!this.hasBitmap()||""===t||null==t)return 0;t=String(t),(e=e||{}).wrap instanceof Object&&(t=this.textWrap(t,e.wrap));const i=e.pos;let{x:n,y:o,index:s,left:r}=e;i instanceof Object&&(n=i.x,o=i.y),DKTools.Utils.isString(o)&&(o=this.lineHeight()*parseFloat(o)),n=_.defaultTo(n,0),o=_.defaultTo(o,0),s=_.defaultTo(s,0),r=_.defaultTo(r,n);const a={x:n,y:o,index:s,left:r};for(a.text=this.convertEscapeCharacters(t),a.height=this.calcTextHeight(a,!1);a.index<a.text.length;)this.processCharacter(a);return a.width||a.x-n}fillAll(t){return this.fillRect({color:t})}fillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,rect:i,paintOpacity:n,resetPaintOpacity:o}=t;let{x:s,y:r,width:a,height:l,color:u}=t;return e instanceof Object&&(s=e.x,r=e.y),i instanceof Object&&(s=i.x,r=i.y,a=i.width,l=i.height),DKTools.Utils.isString(r)&&(r=this.lineHeight()*parseFloat(r)),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),0!==a&&0!==l&&(s=s||0,r=r||0,a=a||this.standardDrawingWidth(),l=l||this.standardDrawingHeight(),u=u||"white",Number.isFinite(n)&&this.changePaintOpacity(n),this.bitmap.fillRect(s,r,a,l,u),o&&this.resetPaintOpacity(),!0)}fontHeight(t){let e;return t=t||this.lineHeight(),e=this.hasBitmap()?this.bitmap.fontSize:this._font.fontSize||this.standardFontSize(),t-(t-.7*e)/2}getLocalPoint(t,e){const i=2===arguments.length?new Point(t,e):new Point(t.x,t.y);return this.worldTransform.applyInverse(i)}getWindowskinTextColor(t){const e=96+t%8*12+6,i=144+12*Math.floor(t/8)+6;return this.hasWindowskin()||(this._windowskin=ImageManager.loadSystem(this.standardWindowskin())),this.windowskin.getPixel(e,i)}gradientFillAll(t="black",e="white",i=!1){return this.gradientFillRect({color1:t,color2:e,vertical:i})}gradientFillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{vertical:e,rect:i,paintOpacity:n,resetPaintOpacity:o}=t;let{color1:s,color2:r,x:a,y:l,width:u,height:c}=t;return i instanceof Object&&(a=i.x,l=i.y,u=i.width,c=i.height),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),0!==u&&0!==c&&(a=a||0,l=l||0,u=u||this.standardDrawingWidth(),c=c||this.standardDrawingHeight(),s=s||"black",r=r||"white",Number.isFinite(n)&&this.changePaintOpacity(n),this.bitmap.gradientFillRect(a,l,u,c,s,r,e),o&&this.resetPaintOpacity(),!0)}hasBitmap(){return!!this.bitmap}hasParent(){return!!this.parent}hasWindowskin(){return!!this.windowskin}hide(t=!1){this.setVisible(!1)&&this.updateHideEvents(),t||this.deactivate()}isActive(){let t=this;for(;t;){if(!t.visible)return!1;t=t.parent}return this.active}isBusy(){return!this.isReady()}isChild(t){return t?this.children.includes(t):this.hasParent()}isDestroyed(){return this._destroyed}isInside(t,e){const i=this.getLocalPoint(t,e),n=new Rectangle(0,0,this.width,this.height),o=this.mask;if(o&&DKTools.Utils.isFunction(o.containsPoint)&&!o.containsPoint(i))return!1;if(!n.contains(i.x,i.y))return!1;const s=this.hitArea;return!s||s.contains(i.x,i.y)}isMouseInside(){return this.isInside(TouchInput.mouseX,TouchInput.mouseY)}isOutside(t,e){return!this.isInside(t,e)}isParent(t){return!!t&&this.parent===t}isReady(){return this.hasBitmap()&&this.bitmap.isReady()}isStarted(){return this._started||!1}isTouchInside(){return this.isInside(TouchInput.x,TouchInput.y)}isVisible(){return this.visible}isVisibleAndActive(){return this.isVisible()&&this.isActive()}makeFontBigger(){this.hasBitmap()&&Window_Base.prototype.makeFontBigger.apply(this,arguments)}makeFontSmaller(){this.hasBitmap()&&Window_Base.prototype.makeFontSmaller.apply(this,arguments)}move(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.position.set(t||0,e||0)}obtainEscapeCode(t){return Window_Base.prototype.obtainEscapeCode.apply(this,arguments)}obtainEscapeParam(t){return Window_Base.prototype.obtainEscapeParam.apply(this,arguments)}onItemChange(t,e){}partyMemberName(t){return Window_Base.prototype.partyMemberName.apply(this,arguments)}processAll(){Utils.isMobileDevice()||(this.processMouseEvents(),this.processWheelEvents())}processCharacter(t){return Window_Base.prototype.processCharacter.apply(this,arguments)}processDrawIcon(t,e){this.drawIcon(t,{x:e.x+2,y:e.y+2}),e.x+=Window_Base._iconWidth+4}processEscapeCharacter(t,e){try{const i={...e};Window_Base.prototype.processEscapeCharacter.call(this,t,i),Object.assign(e,i)}catch(i){switch(t){case"C":this.changeTextColor(this.getWindowskinTextColor(this.obtainEscapeParam(e)));break;case"I":this.processDrawIcon(this.obtainEscapeParam(e),e);break;case"{":this.makeFontBigger();break;case"}":this.makeFontSmaller()}}}processMouseEvents(){this.isVisibleAndActive()?this.isMouseInside()?(0===this._mouseEnterTime&&this.updateMouseEnterEvents(),this.updateMouseInsideEvents(),TouchInput.isMoved()&&this.updateMouseMoveEvents(),this._mouseEnterTime++):(this._mouseEnterTime>0&&this.updateMouseLeaveEvents(),this.updateMouseOutsideEvents(),this._mouseEnterTime=0):this._mouseEnterTime=0}processNewLine(t){return t.width?t.width<t.x&&(t.width=t.x):t.width=t.x,Window_Base.prototype.processNewLine.call(this,t)}processNewPage(t){Window_Base.prototype.processNewPage.apply(this,arguments)}processNormalCharacter(t){const e=t.text[t.index++],i=this.textWidth(e);this.drawText(e,{align:"left",pos:t,width:2*i,height:t.height}),t.x+=i}processWheelEvents(){if(this._wheelX=TouchInput.wheelX,this._wheelY=TouchInput.wheelY,0!==this._wheelX||0!==this._wheelY){let t;t=this.isMouseInside()?"inside":"outside",0!==this._wheelX&&this.updateWheelXEvents(t),0!==this._wheelY&&this.updateWheelYEvents(t)}}redrawAll(){this.clear(),this.drawAll(),this.updateRedrawAllEvents()}refreshAll(){this.updateAll(),this.canRedrawAll()&&this.redrawAll(),this.updateRefreshAllEvents()}removeAll(){this.updateRemoveAllEvents()}removeEvent(t){return this._eventsManager.removeEvent(t)}removeFilter(t){if(!this.filters||!t)return;const e=this.filters;_.pull(e,t),e.length>0?this.filters=e:0===e.length&&(this.filters=null)}removeFromParent(){return!!this.hasParent()&&(this.parent.removeChild(this),!0)}resize(t,e,i=!1){if(DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.width===t&&this.height===e)return!1;const n=this.width,o=this.height;return this.setupSize(t,e),(this.width!==n||this.height!==o)&&(i||this.start(),!0)}standardActive(){return!0}standardDrawingWidth(){return this.hasBitmap()?this.bitmap.width:this.isSprite()?this._bitmapWidth:this.isWindow()?this.width:0}standardDrawingHeight(){return this.hasBitmap()?this.bitmap.height:this instanceof DKTools.Sprite?this._bitmapHeight:this instanceof DKTools.Window?this.height:0}standardOpacity(){return 255}standardPivot(){return new Point(0,0)}standardRotation(){return 0}standardScale(){return new Point(1,1)}standardSkew(){return new Point(0,0)}standardVisible(){return!0}standardWindowskin(){return"Window"}setupAll(t={}){t=t||{},this.setupActive(t.active),this.setupVisible(t.visible),this.setupScale(t.scale),this.setupPivot(t.pivot),this.setupSkew(t.skew),this.setupRotation(t.rotation),this.setupOpacity(t.opacity)}setupActive(t){this.active=_.defaultTo(t,this.standardActive())}setupPivot(t,e){let i;i=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardPivot(),this.pivot.copy(i)}setupRotation(t){this.rotation=_.defaultTo(t,this.standardRotation())}setupScale(t,e){let i;i=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardScale(),this.scale.copy(i)}setupSize(t,e){}setupSkew(t,e){let i;i=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardSkew(),this.skew.copy(i)}setupVisible(t){this.visible=_.defaultTo(t,this.standardVisible())}setupOpacity(t){this.opacity=_.defaultTo(t,this.standardOpacity())}setActive(t){if(this.active===t)return!1;const e=this.active;return this.setupActive(t),this.active!==e}setItem(t,e=!1){if(this._item!==t){const i=this._item;this._item=t,this.onItemChange(this._item,i),e||this.start()}}setVisible(t){if(this.visible===t)return!1;const e=this.visible;return this.setupVisible(t),this.visible!==e}show(t=!1){this.setVisible(!0)&&this.updateShowEvents(),t&&this.activate()}start(t=!1){this._started=!0,this.removeAll(),this.checkAll(),this.createAll(),this.refreshAll(),this.updateStartEvents(),t&&this.activate()}textFontHeight(t,e={}){return this.textLines(t,e)*this.fontHeight()}textLines(t,e){return e instanceof Object&&(t=this.textWrap(t,e)),t.split("\n").length}textWidth(t){return this.hasBitmap()&&""!==t&&null!=t?Window_Base.prototype.textWidth.apply(this,arguments):0}textWidthEx(t,e={}){try{return this.drawTextEx(t,{...e,x:-Number.MAX_SAFE_INTEGER,y:-Number.MAX_SAFE_INTEGER})}catch(t){return 0}}textHeight(t,e={}){return this.textLines(t,e)*this.lineHeight()}textHeightEx(t,e={}){return e instanceof Object&&e.wrap instanceof Object&&(t=this.textWrap(t,e.wrap)),this.calcTextHeight({text:t,index:0},!0)}textWrap(t,e={}){if(!this.hasBitmap()||""===t||null==t)return"";e=e||{};const i=(t=String(t)).split("\n"),n=e.maxWidth||this.bitmap.width,o=this.textWidth(" ");let s="",r=1;for(let t=0;t<i.length;t++){const a=i[t].split(" ");let l=n;for(let t=0;t<a.length;t++){const i=a[t],u=this.textWidthEx(i);let c=u+o;if(0===u&&(c-=o),0===t||c>l){if(t>0){if(e.maxLines===r)return s;s+="\n",r++}s+=i,l=n-u}else l-=c,s+=" "+i}t<i.length-1&&(s+="\n")}return s}update(){this.processAll(),this.updateEvents()}updateAll(){this.updateUpdateAllEvents()}updateChildren(){for(const t of this.children)t&&t.update&&t.update()}updateActivateEvents(){this._eventsManager.updateEventsContainer("activate")}updateCheckAllEvents(){this._eventsManager.updateEventsContainer("check-all")}updateCreateAllEvents(){this._eventsManager.updateEventsContainer("create-all")}updateDeactivateEvents(){this._eventsManager.updateEventsContainer("deactivate")}updateEvents(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()}updateHideEvents(){this._eventsManager.updateEventsContainer("hide")}updateMouseEnterEvents(){this._eventsManager.updateEventsContainer("mouse-enter")}updateMouseInsideEvents(){this._eventsManager.updateEventsContainer("mouse-inside")}updateMouseLeaveEvents(){this._eventsManager.updateEventsContainer("mouse-leave")}updateMouseMoveEvents(){this._eventsManager.updateEventsContainer("mouse-move")}updateMouseOutsideEvents(){this._eventsManager.updateEventsContainer("mouse-outside")}updateQueueEvents(){const t=this._eventsManager.getEventsContainerByType("queue")[0];t&&t.update()}updateReadyEvents(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")}updateRedrawAllEvents(){this._eventsManager.updateEventsContainer("redraw-all")}updateDrawAllEvents(){this._eventsManager.updateEventsContainer("draw-all")}updateRefreshAllEvents(){this._eventsManager.updateEventsContainer("refresh-all")}updateRemoveAllEvents(){this._eventsManager.updateEventsContainer("remove-all")}updateShowEvents(){this._eventsManager.updateEventsContainer("show")}updateStartEvents(){this.isStarted()&&this._eventsManager.updateEventsContainer("start")}updateUpdateAllEvents(){this._eventsManager.updateEventsContainer("update-all")}updateUpdateEvents(){this._eventsManager.updateEventsContainer("update")}updateWheelXEvents(t){this._eventsManager.updateEventsContainer("wheel-X-"+t)}updateWheelYEvents(t){this._eventsManager.updateEventsContainer("wheel-Y-"+t)}},DKTools.Sprite=function(t,e,i,n){this.initialize.apply(this,arguments)},DKTools.Sprite.prototype=Object.create(Sprite.prototype),Object.defineProperties(DKTools.Sprite.prototype,Object.getOwnPropertyDescriptors(DKTools.Base.prototype)),DKTools.Sprite.prototype.constructor=DKTools.Sprite,Object.defineProperties(DKTools.Sprite.prototype,{contents:{get:function(){return this.bitmap},set:function(t){this.bitmap=t},configurable:!0},windowskin:{get:function(){return this._windowskin},configurable:!0},align:{get:function(){return this._align},configurable:!0},font:{get:function(){return this._font},configurable:!0},textColor:{get:function(){return this._textColor},configurable:!0},paintOpacity:{get:function(){return this._paintOpacity},configurable:!0},fillColor:{get:function(){return this._fillColor},configurable:!0},graphicFolder:{get:function(){return this._graphicFolder},configurable:!0},graphicName:{get:function(){return this._graphicName},configurable:!0}}),DKTools.Sprite.prototype.initialize=function(t,e,i,n){Sprite.prototype.initialize.call(this),DKTools.Base.prototype.initialize.apply(this,arguments),t instanceof Bitmap&&this.setupBitmap(t),this.updateBitmap()},DKTools.Sprite.prototype.canRedrawAll=function(){return DKTools.Base.prototype.canRedrawAll.apply(this,arguments)&&!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype.changeFont=function(t){this.hasBitmap()&&this.updateFont(t)},DKTools.Sprite.prototype.changePaintOpacity=function(t){this.hasBitmap()&&this.updatePaintOpacity(t)},DKTools.Sprite.prototype.changeTextColor=function(t){this.hasBitmap()&&this.updateTextColor(t)},DKTools.Sprite.prototype.createAll=function(){DKTools.Base.prototype.createAll.apply(this,arguments),this.createBitmap()},DKTools.Sprite.prototype.createBitmap=function(){this.hasGraphicName()?this._loadGraphic():this.hasFixedBitmap()||(this.bitmap=new Bitmap(this._bitmapWidth,this._bitmapHeight))},DKTools.Sprite.prototype.drawAll=function(){this.updateFill(),DKTools.Base.prototype.drawAll.apply(this,arguments)},DKTools.Sprite.prototype.drawText=function(t,e={}){if(!this.hasBitmap()||null==t||""===t)return!1;t=String(t),e=e||{};const{pos:i,rect:n,font:o,textColor:s,paintOpacity:r,resetFont:a,resetTextColor:l,resetPaintOpacity:u}=e;let{x:c,y:h,width:p,height:d,align:f}=e;return i instanceof Object&&(c=i.x,h=i.y),n instanceof Object&&(c=n.x,h=n.y,p=n.width,d=n.height),DKTools.Utils.isString(h)&&(h=this.lineHeight()*parseFloat(h)),DKTools.Utils.isString(d)&&(d=this.lineHeight()*parseFloat(d)),0!==p&&0!==d&&(c=c||0,h=h||0,p=p||this.standardDrawingWidth(),d=d||this.lineHeight(),f=f||this.align,o&&this.changeFont(o),s&&this.changeTextColor(s),Number.isFinite(r)&&this.changePaintOpacity(r),this.bitmap.drawText(t,c,h,p,d,f),a&&this.resetFont(),l&&this.resetTextColor(),u&&this.resetPaintOpacity(),!0)},DKTools.Sprite.prototype.getLocalPoint=function(t,e){const i=DKTools.Base.prototype.getLocalPoint.apply(this,arguments),n=this.anchor;return i.x+=this.width*n.x,i.y+=this.height*n.y,i},DKTools.Sprite.prototype.hasFillColor=function(){return!!this._fillColor},DKTools.Sprite.prototype.hasFixedBitmap=function(){return!!this._fixedBitmap},DKTools.Sprite.prototype.hasGraphicFolder=function(){return!!this._graphicFolder},DKTools.Sprite.prototype.hasGraphicName=function(){return!!this._graphicName},DKTools.Sprite.prototype.isResizable=function(){return!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype._loadGraphic=function(){if(this.hasGraphicFolder()&&this.hasGraphicName()){const t=this._graphicFolder,e=this._graphicName,i=this._graphicLoadListener;this.loadBitmap(t,e,i),this.updateReadyEvents()}},DKTools.Sprite.prototype.lineHeight=function(){try{return Window_Base.prototype.lineHeight.apply(this,arguments)}catch(t){return 36}},DKTools.Sprite.prototype.loadBitmap=function(t,e,i,n,o){if(t instanceof Object)return this.loadBitmap(t.folder,t.filename,t.listener,t.hue,t.smooth);const s=DKTools.Utils.Bitmap.load(t,e,null,n,o);return!!this.setBitmap(s)&&(DKTools.Utils.isFunction(i)&&this.hasBitmap()&&this.bitmap.addLoadListener(i),!0)},DKTools.Sprite.prototype.loadSystem=function(t,e,i,n){return t instanceof Object?this.loadBitmap("img/system/",t.filename,t.listener,t.hue,t.smooth):this.loadBitmap("img/system/",t,e,i,n)},DKTools.Sprite.prototype.loadWindowskin=function(t,e,i,n){return t instanceof Object?this.loadSystem(t.filename||this.standardWindowskin(),t.listener,t.hue,t.smooth):this.loadSystem(t||this.standardWindowskin(),e,i,n)},DKTools.Sprite.prototype.moveWithAnchor=function(t,e){const i=this.anchor;DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.move(t+this.width*i.x,e+this.height*i.y)},DKTools.Sprite.prototype.standardAlign=function(){return"center"},DKTools.Sprite.prototype.standardAnchor=function(){return new Point(0,0)},DKTools.Sprite.prototype.standardFillColor=function(){return null},DKTools.Sprite.prototype.standardFont=function(){return{fontFace:this.standardFontFace(),fontBold:this.standardFontBold(),fontItalic:this.standardFontItalic(),fontSize:this.standardFontSize()}},DKTools.Sprite.prototype.standardFontFace=function(){try{return Window_Base.prototype.standardFontFace.apply(this,arguments)}catch(t){return"GameFont"}},DKTools.Sprite.prototype.standardFontBold=function(){return!1},DKTools.Sprite.prototype.standardFontItalic=function(){return!1},DKTools.Sprite.prototype.standardFontSize=function(){try{return Window_Base.prototype.standardFontSize.apply(this,arguments)}catch(t){return 28}},DKTools.Sprite.prototype.standardFrame=function(){return new Rectangle(0,0,this.width,this.height)},DKTools.Sprite.prototype.standardGraphicFolder=function(){return"img/system/"},DKTools.Sprite.prototype.standardGraphicName=function(){return""},DKTools.Sprite.prototype.standardPaintOpacity=function(){return 255},DKTools.Sprite.prototype.standardTextColor=function(){return"#ffffff"},DKTools.Sprite.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupBitmap(t),this.setupFrame(t.frame),this.setupAnchor(t.anchor),this.setupAlign(t.align),this.setupFont(t.font),this.setupTextColor(t.textColor),this.setupPaintOpacity(t.paintOpacity),this.setupFillColor(t.fillColor),this.setupGraphicFolder(t.graphicFolder),this.setupGraphicName(t.graphicName)},DKTools.Sprite.prototype.setupAlign=function(t){this._align=t||this.standardAlign()},DKTools.Sprite.prototype.setupAnchor=function(t,e){let i;i=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardAnchor(),this.anchor.copy(i)},DKTools.Sprite.prototype.setupBitmap=function(t){let e=null;t instanceof Object&&(e=DKTools.Utils.Bitmap.load(t.bitmap||t)),e?(this.bitmap=e,this.bitmap.addLoadListener(this.setupSize.bind(this))):this.bitmap=null,this._fixedBitmap=!!this.bitmap},DKTools.Sprite.prototype.setupFillColor=function(t){this._fillColor=null!==t?_.defaultTo(t,this.standardFillColor()):null},DKTools.Sprite.prototype.setupFont=function(t){this._font=Object.assign(this.standardFont(),t)},DKTools.Sprite.prototype.setupFrame=function(t,e,i,n){let o;o=t instanceof Object?t:4===arguments.length?new Rectangle(t,e,i,n):this.standardFrame(),Sprite.prototype.setFrame.call(this,o.x,o.y,o.width,o.height)},DKTools.Sprite.prototype.setupGraphicFolder=function(t){this._graphicFolder=_.defaultTo(t,this.standardGraphicFolder())},DKTools.Sprite.prototype.setupGraphicLoadListener=function(t){this._graphicLoadListener=t||null},DKTools.Sprite.prototype.setupGraphicName=function(t){this._graphicName=null!==t?_.defaultTo(t,this.standardGraphicName()):null},DKTools.Sprite.prototype.setupPaintOpacity=function(t){this._paintOpacity=_.defaultTo(t,this.standardPaintOpacity())},DKTools.Sprite.prototype.setupTextColor=function(t){this._textColor=t||this.standardTextColor()},DKTools.Sprite.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this._bitmapWidth=t,this._bitmapHeight=e},DKTools.Sprite.prototype.setAlign=function(t,e=!1){if(this._align===t)return!1;const i=this._align;return this.setupAlign(t),this._align!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setBitmap=function(t){return this.bitmap!==t&&(this.setupBitmap(t),!0)},DKTools.Sprite.prototype.setFillColor=function(t,e=!1){if(this._fillColor===t)return!1;const i=this._fillColor;return this.setupFillColor(t),this._fillColor!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setFont=function(t,e=!1){if(_.isEqual(this._font,Object.assign(this.standardFont(),t)))return!1;const i={...this._font};return this.setupFont(t),!_.isEqual(this._font,i)&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicFolder=function(t,e=!1){if(this._graphicFolder===t)return!1;const i=this._graphicFolder;return this.setupGraphicFolder(t),this._graphicFolder!==i&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicName=function(t,e=!1){if(this._graphicName===t)return!1;const i=this._graphicName;return this.setupGraphicName(t),this._graphicName!==i&&(e||this.start(),!0)},DKTools.Sprite.prototype.setPaintOpacity=function(t,e=!1){if(this._paintOpacity===t)return!1;const i=this._paintOpacity;return this.setupPaintOpacity(t),this._paintOpacity!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setTextColor=function(t,e=!1){if(this._textColor===t)return!1;const i=this._textColor;return this.setupTextColor(t),this._textColor!==i&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.removeBitmap=function(){this.hasBitmap()&&this.setBitmap(null)},DKTools.Sprite.prototype.reserveBitmap=function(t,e,i,n,o,s){if(t instanceof Object)return this.reserveBitmap(t.folder,t.filename,t.listener,t.hue,t.smooth,t.reservationId);const r=DKTools.Utils.Bitmap.reserve(t,e,null,n,o,s);return!!this.setBitmap(r)&&(DKTools.Utils.isFunction(i)&&this.hasBitmap()&&this.bitmap.addLoadListener(i),!0)},DKTools.Sprite.prototype.reserveSystem=function(t,e,i,n,o){return t instanceof Object?this.reserveBitmap("img/system/",t.filename,t.listener,t.hue,t.smooth,t.reservationId):this.reserveBitmap("img/system/",t,e,i,n,o)},DKTools.Sprite.prototype.resetAll=function(){this.resetFont(),this.resetPaintOpacity(),this.resetTextColor()},DKTools.Sprite.prototype.resetFont=function(){this.changeFont(this.font)},DKTools.Sprite.prototype.resetPaintOpacity=function(){this.changePaintOpacity(this.paintOpacity)},DKTools.Sprite.prototype.resetTextColor=function(){this.changeTextColor(this.textColor)},DKTools.Sprite.prototype.resize=function(t,e,i=!1){if(!this.isResizable())return!1;if(DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),t=Math.floor(t),e=Math.floor(e),this.width===t&&this.height===e)return!1;const n=this.width,o=this.height;return this.setupSize(t,e),(this._bitmapWidth!==n||this._bitmapHeight!==o)&&(i||this.start(),!0)},DKTools.Sprite.prototype.update=function(){DKTools.Base.prototype.update.apply(this,arguments),this.updateChildren()},DKTools.Sprite.prototype.updateAll=function(){DKTools.Base.prototype.updateAll.apply(this,arguments),this.updateBitmap()},DKTools.Sprite.prototype.updateBitmap=function(){this.hasBitmap()&&(this.updateFont(),this.updatePaintOpacity(),this.updateTextColor())},DKTools.Sprite.prototype.updateFill=function(){this.hasFillColor()&&this.fillAll(this.fillColor)},DKTools.Sprite.prototype.updateFont=function(t={}){t=t||{},this.bitmap.fontFace=t.fontFace||this.font.fontFace,this.bitmap.fontItalic=!!t.fontItalic,this.bitmap.fontSize=t.fontSize||this.font.fontSize},DKTools.Sprite.prototype.updatePaintOpacity=function(t){Number.isFinite(t)||(t=this.paintOpacity),this.bitmap.paintOpacity=t},DKTools.Sprite.prototype.updateTextColor=function(t){this.bitmap.textColor=t||this.textColor},DKTools.Sprite.Button=class extends DKTools.Sprite{get longPressInterval(){return this._longPressInterval}get mousePressTime(){return this._mousePressTime}get touchPressTime(){return this._touchPressTime}isLongPressed(){return this._mousePressTime>=this._longPressInterval}isLongTouched(){return this._touchPressTime>=this._longPressInterval}isPressed(){return this._mousePressTime>0&&!this.isLongPressed()}isTouched(){return this._touchPressTime>0&&!this.isLongTouched()}standardActive(){return!1}standardLongPressInterval(){return 18}setupAll(t={}){t=t||{},super.setupAll(t),this.setupLongPressInterval(t.longPressInterval)}setupLongPressInterval(t){this._longPressInterval=t||this.standardLongPressInterval()}processAll(){super.processAll(),Utils.isMobileDevice()?this.processTouch():this.processMousePress()}processMousePress(){if(this.isVisibleAndActive()&&this.isMouseInside())if(TouchInput.isMousePressed()){let t;this._mousePressTime++,TouchInput.isLeftButtonPressed()?t="left":TouchInput.isMiddleButtonPressed()?t="middle":TouchInput.isRightButtonPressed()&&(t="right"),t&&(this.updateMouseDownEvents(t),this.isLongPressed()&&(this._mousePressTime===this._longPressInterval&&this.updateMouseLongPressStartedEvents(t),this.updateMouseLongPressEvents(t)))}else{let t;TouchInput.isLeftButtonReleased()?t="left":TouchInput.isMiddleButtonReleased()?t="middle":TouchInput.isRightButtonReleased()&&(t="right"),t&&(this.isLongPressed()?this.updateMouseLongPressFinishedEvents(t):this.isPressed()&&this.updateMouseClickEvents(t),this._mousePressTime>0&&this.updateMouseUpEvents(t)),this._mousePressTime=0}else this._mousePressTime=0}processTouch(){this.isVisibleAndActive()&&this.isTouchInside()?TouchInput.isScreenPressed()?(this._touchPressTime++,this.updateTouchDownEvents(),this.isLongTouched()&&(this._touchPressTime===this._longPressInterval&&this.updateLongTouchStartedEvents(),this.updateLongTouchEvents())):(this.isLongTouched()?this.updateLongTouchFinishedEvents():this.isTouched()&&this.updateTouchEvents(),this._touchPressTime>0&&this.updateTouchUpEvents(),this._touchPressTime=0):this._touchPressTime=0}update(){super.update.apply(this,arguments),this.updateButtonState()}updateButtonState(){Utils.isMobileDevice()?this._touchPressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents():this._mousePressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents()}updateLongTouchEvents(){this._eventsManager.updateEventsContainer("long-touch")}updateLongTouchFinishedEvents(){this._eventsManager.updateEventsContainer("long-touch-finished")}updateLongTouchStartedEvents(){this._eventsManager.updateEventsContainer("long-touch-started")}updateMouseDownEvents(t){this._eventsManager.updateEventsContainer("mouse-down-"+t)}updateMouseUpEvents(t){this._eventsManager.updateEventsContainer("mouse-up-"+t)}updateMouseClickEvents(t){this._eventsManager.updateEventsContainer("mouse-click-"+t)}updateMouseLongPressEvents(t){this._eventsManager.updateEventsContainer("mouse-long-press-"+t)}updateMouseLongPressStartedEvents(t){this._eventsManager.updateEventsContainer(`mouse-long-press-${t}-started`)}updateMouseLongPressFinishedEvents(t){this._eventsManager.updateEventsContainer(`mouse-long-press-${t}-finished`)}updateStateNormalEvents(){this._eventsManager.updateEventsContainer("state-normal")}updateStatePressedEvents(){this._eventsManager.updateEventsContainer("state-pressed")}updateTouchEvents(){this._eventsManager.updateEventsContainer("touch")}updateTouchDownEvents(){this._eventsManager.updateEventsContainer("touch-down")}updateTouchUpEvents(){this._eventsManager.updateEventsContainer("touch-up")}},DKTools.Window=function(t,e,i,n){this.initialize.apply(this,arguments)},DKTools.Window.prototype=Object.create(Window_Base.prototype),Object.defineProperties(DKTools.Window.prototype,Object.getOwnPropertyDescriptors(DKTools.Base.prototype)),DKTools.Window.prototype.constructor=DKTools.Window,Object.defineProperties(DKTools.Window.prototype,{bitmap:{get:function(){return this.contents},set:function(t){this.contents=t},configurable:!0}}),DKTools.Window.prototype.initialize=function(t,e,i,n){Window_Base.prototype.initialize.apply(this,arguments),DKTools.Base.prototype.initialize.call(this,t,e,i,n),this.createContents()},DKTools.Window.prototype.activate=function(){DKTools.Base.prototype.activate.apply(this,arguments),this._windowContentsSprite instanceof DKTools.Sprite&&this._windowContentsSprite.activate()},DKTools.Window.prototype._createAllParts=function(){Window_Base.prototype._createAllParts.apply(this,arguments),this._createArrowSprites()},DKTools.Window.prototype._createArrowSprites=function(){},DKTools.Window.prototype.deactivate=function(){DKTools.Base.prototype.deactivate.apply(this,arguments),this._windowContentsSprite instanceof DKTools.Sprite&&this._windowContentsSprite.deactivate()},DKTools.Window.prototype.drawText=function(t,e){arguments.length<=2&&this._windowContentsSprite instanceof DKTools.Sprite?this._windowContentsSprite.drawText(t,e):Window_Base.prototype.drawText.apply(this,arguments)},DKTools.Window.prototype.drawTextEx=function(t,e){arguments.length<=2&&this._windowContentsSprite instanceof DKTools.Sprite?DKTools.Base.prototype.drawTextEx.apply(this,arguments):Window_Base.prototype.drawTextEx.apply(this,arguments)},DKTools.Window.prototype.contentsWidth=function(){return DKTools.Utils.isFunction(this._contentsWidth)?this._contentsWidth(this):this._contentsWidth},DKTools.Window.prototype.contentsHeight=function(){return DKTools.Utils.isFunction(this._contentsHeight)?this._contentsHeight(this):this._contentsHeight},DKTools.Window.prototype.createContents=function(){const t=this.contentsWidth(),e=this.contentsHeight();this._windowContentsSprite instanceof DKTools.Sprite?(this._windowContentsSprite.setupSize(t,e),this._windowContentsSprite.start()):this.contents=new Bitmap(t,e),this.resetFontSettings()},DKTools.Window.prototype.hideBack=function(){this._windowBackSprite.visible=!1},DKTools.Window.prototype.hideCursor=function(){this._windowCursorSprite.visible=!1},DKTools.Window.prototype.hideFrame=function(){this._windowFrameSprite.visible=!1},DKTools.Window.prototype.isOpenAndVisible=function(){return this.isOpen()&&this.isVisible()},DKTools.Window.prototype.isOpenAndActive=function(){return this.isOpen()&&this.isActive()},DKTools.Window.prototype.onItemChange=function(t,e){DKTools.Base.prototype.onItemChange.apply(this,arguments),DKTools.Utils.isFunction(this._windowContentsSprite.setItem)&&this._windowContentsSprite.setItem(t)},DKTools.Window.prototype.refreshAll=function(){this._refreshAllParts(),DKTools.Base.prototype.refreshAll.apply(this,arguments)},DKTools.Window.prototype.resetFontSettings=function(){this._windowContentsSprite instanceof DKTools.Sprite?(this._windowContentsSprite.resetFont(),this.resetTextColor()):Window_Base.prototype.resetFontSettings.apply(this,arguments)},DKTools.Window.prototype.resetTextColor=function(){this._windowContentsSprite instanceof DKTools.Sprite?this._windowContentsSprite.resetTextColor():Window_Base.prototype.resetTextColor.apply(this,arguments)},DKTools.Window.prototype.resize=function(t,e,i=!1){return DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)+2*this._padding),DKTools.Base.prototype.resize.call(this,t,e,i)},DKTools.Window.prototype.standardOpennessSpeed=function(){return 32},DKTools.Window.prototype.standardContentsSprite=function(){return new DKTools.Sprite},DKTools.Window.prototype.standardContentsWidth=function(){return()=>this._width-2*this._padding},DKTools.Window.prototype.standardContentsHeight=function(){return()=>this._height-2*this._padding},DKTools.Window.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupContentsWidth(t.contentsWidth),this.setupContentsHeight(t.contentsHeight),this.setupContentsSprite(t.contentsSprite)},DKTools.Window.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)+2*this._padding),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.prototype.setupContentsWidth=function(t){this._contentsWidth=t||this.standardContentsWidth()},DKTools.Window.prototype.setupContentsHeight=function(t){this._contentsHeight=t||this.standardContentsHeight()},DKTools.Window.prototype.setupContentsSprite=function(t){this._windowContentsSprite&&this.removeChild(this._windowContentsSprite),this._windowContentsSprite=t||this.standardContentsSprite(),this.addChildAt(this._windowContentsSprite,this.children.indexOf(this._windowCursorSprite))},DKTools.Window.prototype.update=function(){Window_Base.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.prototype.updateAll=function(){this.updateContents(),DKTools.Base.prototype.updateAll.apply(this,arguments)},DKTools.Window.prototype.updateContents=function(){DKTools.Utils.isFunction(this._windowContentsSprite.updateAll)&&this._windowContentsSprite.updateAll()},DKTools.Window.prototype.updateOpen=function(){this._opening&&(this.openness+=this.standardOpennessSpeed(),this.isOpen()?(this._opening=!1,this._eventsManager.finishEvents("open",!0)):this.updateOpenEvents())},DKTools.Window.prototype.updateClose=function(){this._closing&&(this.openness-=this.standardOpennessSpeed(),this.isClosed()?(this._closing=!1,this._eventsManager.finishEvents("close",!0)):this.updateCloseEvents())},DKTools.Window.prototype.updateOpenEvents=function(){this._eventsManager.updateEventsContainer("open")},DKTools.Window.prototype.updateCloseEvents=function(){this._eventsManager.updateEventsContainer("close")},DKTools.Window.Scrollable=function(t,e,i,n){this.initialize.apply(this,arguments)},DKTools.Window.Scrollable.prototype=Object.create(Window_Base.prototype),Object.defineProperties(DKTools.Window.Scrollable.prototype,Object.getOwnPropertyDescriptors(DKTools.Window.prototype)),DKTools.Window.Scrollable.prototype.constructor=DKTools.Window.Scrollable,DKTools.Window.Scrollable.prototype._clearAll=function(){DKTools.Window.prototype._clearAll.apply(this,arguments),this._scrollX=0,this._scrollY=0,this._scrollBaseX=0,this._scrollBaseY=0,this.clearScrollStatus()},DKTools.Window.Scrollable.prototype._createArrowSprites=function(){DKTools.Window.prototype._createArrowSprites.apply(this,arguments),this._leftArrowSprite=new Sprite,this._rightArrowSprite=new Sprite,this.addChild(this._leftArrowSprite),this.addChild(this._rightArrowSprite)},DKTools.Window.Scrollable.prototype.clearScrollStatus=function(){this._scrollTargetX=0,this._scrollTargetY=0,this._scrollDuration=0,this._scrollAccelX=0,this._scrollAccelY=0,this._scrollTouching=!1,this._scrollLastTouchX=0,this._scrollLastTouchY=0},DKTools.Window.Scrollable.prototype.itemWidth=function(){return"function"==typeof this._itemWidth?this._itemWidth(this):Number.isFinite(this._itemWidth)?this._itemWidth:this.innerWidth},DKTools.Window.Scrollable.prototype.itemHeight=function(){return"function"==typeof this._itemHeight?this._itemHeight(this):Number.isFinite(this._itemHeight)?this._itemHeight:"string"==typeof this._itemHeight?this.lineHeight()*parseFloat(this._itemHeight):this.lineHeight()},DKTools.Window.Scrollable.prototype.isHorizontal=function(){return this.maxScrollX()>0},DKTools.Window.Scrollable.prototype.isScrollEnabled=function(){return!0},DKTools.Window.Scrollable.prototype.isTouchedInsideFrame=function(){const t=new Point(TouchInput.mouseX,TouchInput.mouseY),e=this.worldTransform.applyInverse(t);return this.innerRect.contains(e.x,e.y)},DKTools.Window.Scrollable.prototype.isTouchScrollEnabled=function(){return this.isScrollEnabled()},DKTools.Window.Scrollable.prototype.isWheelScrollEnabled=function(){return this.isScrollEnabled()},DKTools.Window.Scrollable.prototype.maxScrollX=function(){return Math.max(0,this.overallWidth()-this.innerWidth)},DKTools.Window.Scrollable.prototype.maxScrollY=function(){return Math.max(0,this.overallHeight()-this.innerHeight)},DKTools.Window.Scrollable.prototype.onTouchScrollStart=function(){this._scrollTouching=!0,this._scrollLastTouchX=TouchInput.mouseX,this._scrollLastTouchY=TouchInput.mouseY,this.setScrollAccel(0,0)},DKTools.Window.Scrollable.prototype.onTouchScroll=function(){const t=this._scrollLastTouchX-TouchInput.mouseX,e=this._scrollLastTouchY-TouchInput.mouseY;this.setScrollAccel(t,e),this._scrollLastTouchX=TouchInput.mouseX,this._scrollLastTouchY=TouchInput.mouseY},DKTools.Window.Scrollable.prototype.onTouchScrollEnd=function(){this._scrollTouching=!1},DKTools.Window.Scrollable.prototype.overallWidth=function(){return this.hasBitmap()?this.contents.width:0},DKTools.Window.Scrollable.prototype.overallHeight=function(){return this.hasBitmap()?this.contents.height:0},DKTools.Window.Scrollable.prototype.processPageScroll=function(){Input.isRepeated("pageup")&&(this.isHorizontal()?this.smoothScrollRight(1):this.smoothScrollUp(1)),Input.isRepeated("pagedown")&&(this.isHorizontal()?this.smoothScrollLeft(1):this.smoothScrollDown(1))},DKTools.Window.Scrollable.prototype.processTouchScroll=function(){this.isTouchScrollEnabled()&&(TouchInput.isTriggered()&&this.isTouchedInsideFrame()&&this.onTouchScrollStart(),this._scrollTouching&&(TouchInput.isReleased()?this.onTouchScrollEnd():TouchInput.isMouseMoved()&&this.onTouchScroll()))},DKTools.Window.Scrollable.prototype.processWheelScroll=function(){if(this.isWheelScrollEnabled()&&this.isTouchedInsideFrame()){const t=20;TouchInput.wheelY>=t&&(this.isHorizontal()?this.smoothScrollLeft(1):this.smoothScrollDown(1)),TouchInput.wheelY<=-t&&(this.isHorizontal()?this.smoothScrollRight(1):this.smoothScrollUp(1))}},DKTools.Window.Scrollable.prototype._refreshArrows=function(){DKTools.Window.prototype._refreshArrows.apply(this,arguments);const t=this._width,e=this._height,i=24,n=i/2,o=96+i,s=0+i;this._leftArrowSprite.bitmap=this._windowskin,this._leftArrowSprite.anchor.set(.5,.5),this._leftArrowSprite.setFrame(o,s+n,n,i),this._leftArrowSprite.move(n/2,e/2),this._rightArrowSprite.bitmap=this._windowskin,this._rightArrowSprite.anchor.set(.5,.5),this._rightArrowSprite.setFrame(o+n+i,s+n,n,i),this._rightArrowSprite.move(t-n,e/2)},DKTools.Window.Scrollable.prototype.setupAll=function(t={}){t=t||{},DKTools.Window.prototype.setupAll.apply(this,arguments),this.setupItemWidth(t.itemWidth),this.setupItemHeight(t.itemHeight)},DKTools.Window.Scrollable.prototype.setupItemWidth=function(t){this._itemWidth=t},DKTools.Window.Scrollable.prototype.setupItemHeight=function(t){this._itemHeight=t},DKTools.Window.Scrollable.prototype.setScrollAccel=function(t,e){this._scrollAccelX=t,this._scrollAccelY=e},DKTools.Window.Scrollable.prototype.scrollBlockWidth=function(){return this.itemWidth()},DKTools.Window.Scrollable.prototype.scrollBlockHeight=function(){return this.itemHeight()},DKTools.Window.Scrollable.prototype.scrollBaseX=function(){return this._scrollBaseX},DKTools.Window.Scrollable.prototype.scrollBaseY=function(){return this._scrollBaseY},DKTools.Window.Scrollable.prototype.scrollBy=function(t,e){this.scrollTo(this._scrollX+t,this._scrollY+e)},DKTools.Window.Scrollable.prototype.scrollTo=function(t,e){const i=t.clamp(0,this.maxScrollX()),n=e.clamp(0,this.maxScrollY());this._scrollX===i&&this._scrollY===n||(this._scrollX=i,this._scrollY=n,this.updateOrigin())},DKTools.Window.Scrollable.prototype.scrollX=function(){return this._scrollX},DKTools.Window.Scrollable.prototype.scrollY=function(){return this._scrollY},DKTools.Window.Scrollable.prototype.smoothScrollBy=function(t,e){0===this._scrollDuration&&(this._scrollTargetX=this.scrollX(),this._scrollTargetY=this.scrollY()),this.smoothScrollTo(this._scrollTargetX+t,this._scrollTargetY+e)},DKTools.Window.Scrollable.prototype.smoothScrollDown=function(t){this.smoothScrollBy(0,this.itemHeight()*t)},DKTools.Window.Scrollable.prototype.smoothScrollLeft=function(t){this.smoothScrollBy(this.itemWidth()*t,0)},DKTools.Window.Scrollable.prototype.smoothScrollRight=function(t){this.smoothScrollBy(-this.itemWidth()*t,0)},DKTools.Window.Scrollable.prototype.smoothScrollTo=function(t,e){this._scrollTargetX=t.clamp(0,this.maxScrollX()),this._scrollTargetY=e.clamp(0,this.maxScrollY()),this._scrollDuration=Input.keyRepeatInterval},DKTools.Window.Scrollable.prototype.smoothScrollUp=function(t){this.smoothScrollBy(0,-this.itemHeight()*t)},DKTools.Window.Scrollable.prototype._updateArrows=function(){const t=this.isOpen();this._leftArrowSprite.visible=t&&this.leftArrowVisible,this._rightArrowSprite.visible=t&&this.rightArrowVisible,this._downArrowSprite.visible=t&&this.downArrowVisible,this._upArrowSprite.visible=t&&this.upArrowVisible},DKTools.Window.Scrollable.prototype.updateArrows=function(){this.leftArrowVisible=this._scrollX>0,this.rightArrowVisible=this._scrollX<this.maxScrollX(),this.downArrowVisible=this._scrollY<this.maxScrollY(),this.upArrowVisible=this._scrollY>0},DKTools.Window.Scrollable.prototype.updateOrigin=function(){const t=this.scrollBlockWidth()||1,e=this.scrollBlockHeight()||1,i=this._scrollX-this._scrollX%t,n=this._scrollY-this._scrollY%e;i===this._scrollBaseX&&n===this._scrollBaseY||this.updateScrollBase(i,n),this.origin.set(this._scrollX,this._scrollY)},DKTools.Window.Scrollable.prototype.updateSmoothScroll=function(){if(this._scrollDuration>0){const t=this._scrollDuration,e=(this._scrollTargetX-this._scrollX)/t,i=(this._scrollTargetY-this._scrollY)/t;this.scrollBy(e,i),this._scrollDuration--}},DKTools.Window.Scrollable.prototype.updateScrollAccel=function(){0===this._scrollAccelX&&0===this._scrollAccelY||(this.scrollBy(this._scrollAccelX,this._scrollAccelY),this._scrollAccelX*=.92,this._scrollAccelY*=.92,Math.abs(this._scrollAccelX)<1&&(this._scrollAccelX=0),Math.abs(this._scrollAccelY)<1&&(this._scrollAccelY=0))},DKTools.Window.Scrollable.prototype.updateScrollBase=function(t,e){const i=t-this._scrollBaseX,n=e-this._scrollBaseY;this._scrollBaseX=t,this._scrollBaseY=e,this.moveInnerChildrenBy(-i,-n)},DKTools.Window.Scrollable.prototype.update=function(){Window_Base.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments),this.processWheelScroll(),this.processTouchScroll(),this.processPageScroll(),this.updateSmoothScroll(),this.updateScrollAccel(),this.updateArrows(),this.updateOrigin()},DKTools.Window.Selectable=function(t,e,i,n){this.initialize.apply(this,arguments)},DKTools.Window.Selectable.prototype=Object.create(Window_Selectable.prototype),Object.defineProperties(DKTools.Window.Selectable.prototype,Object.getOwnPropertyDescriptors(DKTools.Window.prototype)),DKTools.Window.Selectable.prototype.constructor=DKTools.Window.Selectable,DKTools.Window.Selectable.prototype.initialize=function(t,e,i,n){this._createEventsManager(),Window_Selectable.prototype.initialize.apply(this,arguments),DKTools.Base.prototype.initialize.apply(this,arguments),this.refreshAll(),this.select(0)},DKTools.Window.Selectable.prototype.addItem=function(t){void 0===t.enabled&&(t.enabled=!0),t.symbol&&"function"==typeof t.handler&&this.setHandler(t.symbol,t.handler),this._list.push(t)},DKTools.Window.Selectable.prototype.bottomCol=function(){return Math.max(0,this.topCol()+this.maxCols()-1)},DKTools.Window.Selectable.prototype._createAllParts=function(){Window_Selectable.prototype._createAllParts.apply(this,arguments),this._leftArrowSprite=new Sprite,this._rightArrowSprite=new Sprite,this.addChild(this._leftArrowSprite),this.addChild(this._rightArrowSprite)},DKTools.Window.Selectable.prototype.callHandler=function(t){this.isHandled(t)&&this._handlers[t](this._index,this)},DKTools.Window.Selectable.prototype.callOkHandler=function(){const t=this.currentSymbol();this.isHandled(t)?this.callHandler(t):this.isHandled("ok")?this.callHandler("ok"):this.activate()},DKTools.Window.Selectable.prototype.changePaintOpacity=function(t){"boolean"==typeof t?Window_Selectable.prototype.changePaintOpacity.apply(this,arguments):this.contents.paintOpacity=t},DKTools.Window.Selectable.prototype.col=function(){return this.isHorizontal()?this._index:Math.floor(this._index%this.maxCols())},DKTools.Window.Selectable.prototype.currentItem=function(){return this.item(this._index)},DKTools.Window.Selectable.prototype.currentSymbol=function(){return this.itemSymbol(this._index)},DKTools.Window.Selectable.prototype.currentExt=function(){return this.itemExt(this._index)},DKTools.Window.Selectable.prototype.cursorUp=function(t=!1){if(this.isHorizontal())return;const e=this._index,i=this.maxItems(),n=this.maxCols();(e>=n||t&&i===this.maxRows()*n)&&this.select((e-n+i)%i)},DKTools.Window.Selectable.prototype.cursorDown=function(t=!1){if(this.isHorizontal())return;const e=this._index,i=this.maxItems(),n=this.maxCols();(e<i-n||t&&i===this.maxRows()*n)&&this.select((e+n)%i)},DKTools.Window.Selectable.prototype.cursorLeft=function(t=!1){const e=Math.max(0,this._index),i=this.maxItems(),n=this.maxCols();this.isHorizontal()?this.selectPrevItem(t,!0):n>=2&&(e>0||t)&&this.select((e-1+i)%i)},DKTools.Window.Selectable.prototype.cursorRight=function(t=!1){const e=this._index,i=this.maxItems(),n=this.maxCols();this.isHorizontal()?this.selectNextItem(t,!0):n>=2&&(e<i-1||t)&&this.select((e+1)%i)},DKTools.Window.Selectable.prototype.drawAll=function(){this.drawAllItems()},DKTools.Window.Selectable.prototype.drawAllItems=function(){const t=this.maxVisibleItems(),e=this.maxItems();let i=this.topIndex();for(let n=0;n<t&&i<e;n++,i++)this.drawItem(i)},DKTools.Window.Selectable.prototype.drawItem=function(t){const e=this.item(t)||{};"function"==typeof e.drawHandler?e.drawHandler(t,this):"function"==typeof this._itemDrawHandler&&this._itemDrawHandler(t,this)},DKTools.Window.Selectable.prototype.ensureCursorVisible=function(){if(this.isHorizontal()){const t=this.col();t<this.topCol()?this.setTopCol(t):t>this.bottomCol()&&this.setBottomCol(t)}else Window_Selectable.prototype.ensureCursorVisible.apply(this,arguments)},DKTools.Window.Selectable.prototype.findSymbol=function(t){return this._list.findIndex(e=>e.symbol===t)},DKTools.Window.Selectable.prototype.findExt=function(t){return this._list.findIndex(e=>e.ext===t)},DKTools.Window.Selectable.prototype.hasItems=function(){return this.maxItems()>0},DKTools.Window.Selectable.prototype.hasSymbol=function(t){return this._list.some(e=>e.symbol===t)},DKTools.Window.Selectable.prototype.item=function(t){return this._list[t]||null},DKTools.Window.Selectable.prototype.itemName=function(t){const e=this.item(t)||{};return"function"==typeof e.name?e.name(t,this):e.name},DKTools.Window.Selectable.prototype.itemSymbol=function(t){const e=this.item(t);return e?e.symbol:null},DKTools.Window.Selectable.prototype.itemExt=function(t){const e=this.item(t);return e?e.ext:null},DKTools.Window.Selectable.prototype.itemWidth=function(){return"function"==typeof this._itemWidth?this._itemWidth(this):Number.isFinite(this._itemWidth)?this._itemWidth:Window_Selectable.prototype.itemWidth.apply(this,arguments)},DKTools.Window.Selectable.prototype.itemHeight=function(){return"function"==typeof this._itemHeight?this._itemHeight(this):Number.isFinite(this._itemHeight)?this._itemHeight:"string"==typeof this._itemHeight?this.lineHeight()*parseFloat(this._itemHeight):Window_Selectable.prototype.itemHeight.apply(this,arguments)},DKTools.Window.Selectable.prototype.itemRect=function(t){const e=this.itemWidth(),i=this.itemHeight(),n=new Rectangle(0,0,e,i);if(this.isHorizontal())n.x=t*(e+this.spacing())-this._scrollX;else{const o=this.maxCols();n.x=t%o*(e+this.spacing())-this._scrollX,n.y=Math.floor(t/o)*i-this._scrollY}return n},DKTools.Window.Selectable.prototype.itemExt=function(t){const e=this.item(t);return e?e.ext:null},DKTools.Window.Selectable.prototype.itemTextAlign=function(t){const e=this.item(t)||{};return"function"==typeof e.align?e.align(t,this):"function"==typeof this._itemTextAlign?this._itemTextAlign(t,this):e.align||this.standardItemTextAlign()},DKTools.Window.Selectable.prototype.itemTextColor=function(t){const e=(this.item(t)||{}).textColor||this._itemTextColor;return"function"==typeof e?e(t,this):e||this.normalColor()},DKTools.Window.Selectable.prototype.itemPaintOpacity=function(t){const e=this.item(t)||{};return"function"==typeof e.paintOpacity?e.paintOpacity(t,this):Number.isFinite(e.paintOpacity)?e.paintOpacity:"function"==typeof this._itemPaintOpacity?this._itemPaintOpacity(t,this):this.isItemEnabled(t)?255:this.translucentOpacity()},DKTools.Window.Selectable.prototype.itemPadding=function(){return 0},DKTools.Window.Selectable.prototype.isItemEnabled=function(t){const e=(this.item(t)||{}).enabled;return"function"==typeof e?e(t,this):e},DKTools.Window.Selectable.prototype.isCurrentItemEnabled=function(){return this.isItemEnabled(this._index)},DKTools.Window.Selectable.prototype.isCursorVisible=function(){if(this.isHorizontal()){const t=this.col();return t>=this.topCol()&&t<=this.bottomCol()}return Window_Selectable.prototype.isCursorVisible.apply(this,arguments)},DKTools.Window.Selectable.prototype.maxCols=function(){return this._maxCols},DKTools.Window.Selectable.prototype.maxItems=function(){return this._list.length},DKTools.Window.Selectable.prototype.maxPageItems=function(){return this.isHorizontal()?this.maxCols():Window_Selectable.prototype.maxPageItems.apply(this,arguments)},DKTools.Window.Selectable.prototype.maxTopCol=function(){return Math.max(0,this.maxItems()-this.maxCols())},DKTools.Window.Selectable.prototype.maxVisibleItems=function(){return this.isHorizontal()?Math.ceil(this.contentsWidth()/this.itemWidth()):Math.ceil(this.contentsHeight()/this.itemHeight())*this.maxCols()},DKTools.Window.Selectable.prototype.nextIndex=function(t=!1){return this._index<this.maxItems()-1?this._index+1:t?0:-1},DKTools.Window.Selectable.prototype.nextItem=function(t=!1){return this.item(this.nextIndex(t))},DKTools.Window.Selectable.prototype.onTouch=function(t=!1){if(this._stayCount>=10&&this.isHorizontal()){const t=this.canvasToLocalX(TouchInput.x),e=this.canvasToLocalY(TouchInput.y);if(-1===this.hitTest(t,e)){const e=this._index;t<this.padding?this.cursorLeft():t>=this.width-this.padding&&this.cursorRight(),this._index!==e&&SoundManager.playCursor()}else Window_Selectable.prototype.onTouch.apply(this,arguments)}else Window_Selectable.prototype.onTouch.apply(this,arguments)},DKTools.Window.Selectable.prototype.playCursorSound=function(){SoundManager.playCursor()},DKTools.Window.Selectable.prototype.prevIndex=function(t=!1){return this._index>0?this._index-1:t?this.maxItems()-1:-1},DKTools.Window.Selectable.prototype.prevItem=function(t=!1){return this.item(this.prevIndex(t))},DKTools.Window.Selectable.prototype.processCancel=function(){SoundManager.playCancel(),this.updateInputData(),this.deactivate();const t=this.currentItem();t&&"function"==typeof t.cancelHandler?t.cancelHandler(this._index,this):this.callCancelHandler()},DKTools.Window.Selectable.prototype.processOk=function(){if(this.isCurrentItemEnabled()){this.playOkSound(),this.updateInputData(),this.deactivate();const t=this.currentItem()||{};"function"==typeof t.okHandler?t.okHandler(this._index,this):this.callOkHandler()}else this.playBuzzerSound()},DKTools.Window.Selectable.prototype.processWheel=function(){if(this.isTouchedInsideFrame()){const t=20;TouchInput.wheelY>=t&&(this.isHorizontal()?this.scrollLeft():this.scrollDown()),TouchInput.wheelY<=-t&&(this.isHorizontal()?this.scrollRight():this.scrollUp())}},DKTools.Window.Selectable.prototype._refreshArrows=function(){DKTools.Window.prototype._refreshArrows.apply(this,arguments);const t=this._width,e=this._height,i=24,n=i/2,o=96+i,s=0+i;this._leftArrowSprite.bitmap=this._windowskin,this._leftArrowSprite.anchor.set(.5,.5),this._leftArrowSprite.setFrame(o,s+n,n,i),this._leftArrowSprite.move(n,e/2),this._rightArrowSprite.bitmap=this._windowskin,this._rightArrowSprite.anchor.set(.5,.5),this._rightArrowSprite.setFrame(o+n+i,s+n,n,i),this._rightArrowSprite.move(t-n,e/2)},DKTools.Window.Selectable.prototype.refreshAll=function(){this.createContents(),DKTools.Window.prototype.refreshAll.apply(this,arguments),this.updateCursor()},DKTools.Window.Selectable.prototype.refresh=function(){},DKTools.Window.Selectable.prototype.standardContentsSprite=function(){return new Sprite},DKTools.Window.Selectable.prototype.standardItems=function(){return[]},DKTools.Window.Selectable.prototype.standardMaxCols=function(){return 1},DKTools.Window.Selectable.prototype.standardItemDrawHandler=function(){return function(t){const e=this.itemTextColor(t),i=this.itemPaintOpacity(t),n=this.itemTextAlign(t),o=this.itemRectForText(t);this.changeTextColor(e),this.changePaintOpacity(i),this.contents.drawText(this.itemName(t),o.x,o.y,o.width,o.height,n)}.bind(this)},DKTools.Window.Selectable.prototype.standardItemTextAlign=function(){return"center"},DKTools.Window.Selectable.prototype.setupAll=function(t={}){t=t||{},DKTools.Window.prototype.setupAll.apply(this,arguments),this.setupMaxCols(t.maxCols),this.setupItems(t.items),this.setupItemWidth(t.itemWidth),this.setupItemHeight(t.itemHeight),this.setupItemTextColor(t.itemTextColor),this.setupItemPaintOpacity(t.itemPaintOpacity),this.setupItemAlign(t.itemAlign),this.setupItemDrawHandler(t.itemDrawHandler)},DKTools.Window.Selectable.prototype.setupMaxCols=function(t=1){this._maxCols=t||this.standardMaxCols()},DKTools.Window.Selectable.prototype.setupItems=function(t){this._list=[],(t||this.standardItems()).forEach(t=>{this.addItem(t)})},DKTools.Window.Selectable.prototype.setupItemTextColor=function(t){this._itemTextColor=t},DKTools.Window.Selectable.prototype.setupItemPaintOpacity=function(t){this._itemPaintOpacity=t},DKTools.Window.Selectable.prototype.setupItemAlign=function(t){this._itemAlign=t},DKTools.Window.Selectable.prototype.setupItemDrawHandler=function(t){this._itemDrawHandler=t||this.standardItemDrawHandler()},DKTools.Window.Selectable.prototype.setupItemWidth=function(t){this._itemWidth=t},DKTools.Window.Selectable.prototype.setupItemHeight=function(t){this._itemHeight=t},DKTools.Window.Selectable.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.itemHeight()*parseFloat(e)+2*this._padding),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.Selectable.prototype.setItems=function(t,e=!1){return this._items!=t&&(this.setupItems(t),e||this.start(),!0)},DKTools.Window.Selectable.prototype.setMaxCols=function(t,e=!1){if(this._maxCols===t)return!1;const i=this._maxCols;return this.setupMaxCols(t),this._maxCols!==i&&(e||this.start(),!0)},DKTools.Window.Selectable.prototype.setTopCol=function(t){const e=t.clamp(0,this.maxTopCol())*(this.itemWidth()+this.spacing());this._scrollX!==e&&(this._scrollX=e,this.refreshAll())},DKTools.Window.Selectable.prototype.setTopRow=function(t){const e=t.clamp(0,this.maxTopRow())*this.itemHeight();this._scrollY!==e&&(this._scrollY=e,this.refreshAll())},DKTools.Window.Selectable.prototype.setBottomCol=function(t){this.setTopCol(t-(this.maxCols()-1))},DKTools.Window.Selectable.prototype.select=function(t,e=!1){const i=this.item(t);Window_Selectable.prototype.select.call(this,t),e&&this.playCursorSound(),i&&"function"==typeof i.selectHandler&&i.selectHandler(t,this),this.updateSelectEvents()},DKTools.Window.Selectable.prototype.selectSymbol=function(t){const e=this.findSymbol(t);e>=0?this.select(e):this.select(0)},DKTools.Window.Selectable.prototype.selectExt=function(t){const e=this.findExt(t);e>=0?this.select(e):this.select(0)},DKTools.Window.Selectable.prototype.selectFirstItem=function(t=!1){this.select(0,t)},DKTools.Window.Selectable.prototype.selectLasItem=function(t=!1){const e=this.maxItems()-1;-1!==e&&this.select(e,t)},DKTools.Window.Selectable.prototype.selectPrevItem=function(t=!1,e=!1){const i=this.prevIndex(t);i>=0&&this.select(i,e)},DKTools.Window.Selectable.prototype.selectNextItem=function(t=!1,e=!1){const i=this.nextIndex(t);i>=0&&this.select(i,e)},DKTools.Window.Selectable.prototype.scrollLeft=function(){this.topCol()+1<this.maxItems()&&this.cursorRight()},DKTools.Window.Selectable.prototype.scrollRight=function(){this.col()>0&&this.cursorLeft()},DKTools.Window.Selectable.prototype.topCol=function(){return Math.floor(this._scrollX/(this.itemWidth()+this.spacing()))},DKTools.Window.Selectable.prototype.topIndex=function(){return this.isHorizontal()?this.topCol():Window_Selectable.prototype.topIndex.apply(this,arguments)},DKTools.Window.Selectable.prototype._updateArrows=function(){const t=this.isOpen();this._leftArrowSprite.visible=t&&this.leftArrowVisible,this._rightArrowSprite.visible=t&&this.rightArrowVisible,this._downArrowSprite.visible=t&&this.downArrowVisible,this._upArrowSprite.visible=t&&this.upArrowVisible},DKTools.Window.Selectable.prototype.updateArrows=function(){if(this.isHorizontal()){const t=this.maxTopCol(),e=this.topCol();this.leftArrowVisible=e>0,this.rightArrowVisible=t>0&&e<t,this.downArrowVisible=!1,this.upArrowVisible=!1}else Window_Selectable.prototype.updateArrows.apply(this,arguments),this.leftArrowVisible=!1,this.rightArrowVisible=!1},DKTools.Window.Selectable.prototype.update=function(){Window_Selectable.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.Selectable.prototype.updateSelectEvents=function(){this._eventsManager.updateEventsContainer("select",this._index)},DKTools.Scene=function(){this.initialize.apply(this,arguments)},DKTools.Scene.prototype=Object.create(Scene_Base.prototype),DKTools.Scene.prototype.constructor=DKTools.Scene,DKTools.Scene.prototype.initialize=function(){this._eventsManager=new DKTools.EventsManager(this),Scene_Base.prototype.initialize.apply(this,arguments)},DKTools.Scene.prototype.addEvent=function(t){return this._eventsManager.addEvent(t)},DKTools.Scene.prototype.addOneTimeEvent=function(t){return this._eventsManager.addOneTimeEvent(t)},DKTools.Scene.prototype.addAnimation=function(t){this._eventsManager.addAnimation(t)},DKTools.Scene.prototype.calcWindowHeight=function(t=1,e=!1){return e?Window_Selectable.prototype.fittingHeight(t):Window_Base.prototype.fittingHeight(t)},DKTools.Scene.prototype.create=function(){Scene_Base.prototype.create.apply(this,arguments),this.createBackground(),this.createAllSprites(),this.createWindowLayer(),this.createAllWindows(),this.createForeground()},DKTools.Scene.prototype.createBackground=function(){this.needsBackground()&&Scene_MenuBase.prototype.createBackground.apply(this,arguments)},DKTools.Scene.prototype.createAllSprites=function(){},DKTools.Scene.prototype.createAllWindows=function(){},DKTools.Scene.prototype.createHelpWindow=function(t=Window_Help,e=2){if(t===Window_Help)this._helpWindow=new Window_Help(e);else{const i=this.helpWindowRect(e);this._helpWindow=new t(i.x,i.y,i.width,i.height)}this.addWindow(this._helpWindow)},DKTools.Scene.prototype.createForeground=function(){},DKTools.Scene.prototype.hasWindowLayer=function(){return!!this._windowLayer},DKTools.Scene.prototype.helpAreaTop=function(){return 0},DKTools.Scene.prototype.helpAreaBottom=function(){return this.helpAreaTop()+this.helpAreaHeight()},DKTools.Scene.prototype.helpAreaHeight=function(){return this.calcWindowHeight(2,!1)},DKTools.Scene.prototype.helpWindowRect=function(t){return new Rectangle(0,0,Graphics.boxWidth,this.calcWindowHeight(t))},DKTools.Scene.prototype.isChild=function(t){return t instanceof Window&&this.hasWindowLayer()?this._windowLayer.children.includes(t):this.children.includes(t)},DKTools.Scene.prototype.mainAreaTop=function(){return this.helpAreaBottom()},DKTools.Scene.prototype.mainAreaBottom=function(){return this.mainAreaTop()+this.mainAreaHeight()},DKTools.Scene.prototype.mainAreaHeight=function(){return Graphics.boxHeight-this.helpAreaHeight()},DKTools.Scene.prototype.needsBackground=function(){return!1},DKTools.Scene.prototype.removeWindow=function(t){return!(!this.hasWindowLayer()||!this.isChild(t))&&(this._windowLayer.removeChild(t),!0)},DKTools.Scene.prototype.update=function(){Scene_Base.prototype.update.apply(this,arguments),this.updateEvents()},DKTools.Scene.prototype.updateEvents=function(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()},DKTools.Scene.prototype.updateReadyEvents=function(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")},DKTools.Scene.prototype.updateUpdateEvents=function(){this._eventsManager.updateEventsContainer("update")},DKTools.Scene.prototype.updateQueueEvents=function(){const t=this._eventsManager.getEventsContainerByType("queue")[0];t&&t.update()},DKTools.Scene.Preloader=class{constructor(){this.initialize.apply(this,arguments)}initialize(){this._queue=[],this._finished=!1,this._running=!1,this._errors=0}add(t){t instanceof Bitmap?t=DKTools.Utils.Bitmap.reserveAsync(t):t instanceof WebAudio&&(t=DKTools.Utils.WebAudio.loadAsync(t)),t instanceof Promise&&this._queue.push(t)}finish(){this._queue=[],this._finished=!0,this._running=!1}hasErrors(){return this._errors>0}isRunning(){return this._running}isReady(){return this._finished}_onError(){this._errors++}start(){if(0===this._queue.length)return void this.finish();const t=this._queue.map(t=>t.catch(t=>{throw this._onError(),t}));Promise.all(t).then(()=>this.finish()),this._running=!0,this._finished=!1}};const DKToolsParam=new DKTools.ParameterManager("DKTools");function ColorManager(){throw new Error("This is a static class")}DKTools.PluginCommandManager.set("UpdateFileSystemStamp",()=>{DKTools.IO._createStamp()}),ColorManager.initialize=function(){this._window=new Window_Base},ColorManager.textColor=function(t){return this._window.textColor(t)},ColorManager.normalColor=function(){return this.textColor(0)},ColorManager.systemColor=function(){return this.textColor(16)},ColorManager.crisisColor=function(){return this.textColor(17)},ColorManager.deathColor=function(){return this.textColor(18)},ColorManager.gaugeBackColor=function(){return this.textColor(19)},ColorManager.hpGaugeColor1=function(){return this.textColor(20)},ColorManager.hpGaugeColor2=function(){return this.textColor(21)},ColorManager.mpGaugeColor1=function(){return this.textColor(22)},ColorManager.mpGaugeColor2=function(){return this.textColor(23)},ColorManager.mpCostColor=function(){return this.textColor(23)},ColorManager.powerUpColor=function(){return this.textColor(24)},ColorManager.powerDownColor=function(){return this.textColor(25)},ColorManager.ctGaugeColor1=function(){return this.textColor(26)},ColorManager.ctGaugeColor2=function(){return this.textColor(27)},ColorManager.tpGaugeColor1=function(){return this.textColor(28)},ColorManager.tpGaugeColor2=function(){return this.textColor(29)},ColorManager.tpCostColor=function(){return this.textColor(29)},ColorManager.pendingColor=function(){return this._window.pendingColor()},ColorManager.hpColor=function(t){return t?t.isDead()?this.deathColor():t.isDying()?this.crisisColor():this.normalColor():this.normalColor()},ColorManager.mpColor=function(){return this.normalColor()},ColorManager.tpColor=function(){return this.normalColor()},ColorManager.paramchangeTextColor=function(t){return t>0?this.powerUpColor():t<0?this.powerDownColor():this.normalColor()},ColorManager.damageColor=function(t){switch(t){case 0:return"#ffffff";case 1:return"#b9ffb5";case 2:return"#ffff90";case 3:return"#80b0ff";default:return"#808080"}},ColorManager.outlineColor=function(){return"rgba(0, 0, 0, 0.6)"},ColorManager.dimColor1=function(){return"rgba(0, 0, 0, 0.6)"},ColorManager.dimColor2=function(){return"rgba(0, 0, 0, 0)"},ColorManager.itemBackColor1=function(){return"rgba(32, 32, 32, 0.5)"},ColorManager.itemBackColor2=function(){return"rgba(0, 0, 0, 0.5)"};const DKTools_window_onload=window.onload;window.onload=function(){DKTools.Utils.initialize(),DKTools.IO.initialize(),DKTools_window_onload.call(this),DKTools.PluginManager.initialize()};const DKTools_Utils_isNwjs=Utils.isNwjs;Utils.isNwjs=function(){return void 0===this.__isNwjs__&&(this.__isNwjs__=DKTools_Utils_isNwjs.apply(this,arguments)),this.__isNwjs__};const DKTools_Utils_isMobileDevice=Utils.isMobileDevice;Utils.isMobileDevice=function(){return void 0===this.__isMobileDevice__&&(this.__isMobileDevice__=DKTools_Utils_isMobileDevice.apply(this,arguments)),this.__isMobileDevice__};const DKTools_Utils_isMobileSafari=Utils.isMobileSafari;Utils.isMobileSafari=function(){return void 0===this.__isMobileSafari__&&(this.__isMobileSafari__=DKTools_Utils_isMobileSafari.apply(this,arguments)),this.__isMobileSafari__};const DKTools_Utils_isAndroidChrome=Utils.isAndroidChrome;Utils.isAndroidChrome=function(){return void 0===this.__isAndroidChrome__&&(this.__isAndroidChrome__=DKTools_Utils_isAndroidChrome.apply(this,arguments)),this.__isAndroidChrome__},Utils.isTest=function(){return void 0===this.__isTest__&&(this.__isTest__=!!this.isOptionValid("test")),this.__isTest__},ImageCache.prototype.add=function(t,e){this._items[t]={touch:Date.now(),bitmap:e,key:t}},ImageCache.prototype.reserve=function(t,e,i){this._items[t]={touch:Date.now(),reservationId:i,bitmap:e,key:t},this._truncateCache()};const DKTools_ImageCache_get=ImageCache.prototype.get;ImageCache.prototype.get=function(t){return DKTools_ImageCache_get.call(this,t)||DKTools.PreloadManager.getCachedImageByKey(t)||null},ImageCache.prototype.has=function(t){return!!this._items[t]},ImageCache.prototype.isReserved=function(t,e){const i=this._items[t];return!!i&&(e?i.reservationId===e:i.reservationId>0)},ImageCache.prototype.release=function(t){delete this._items[t]},ImageCache.prototype._truncateCache=function(){const t=this._items,e=Date.now();let i=ImageCache.limit;Object.keys(t).map(e=>t[e]).filter(t=>!this._mustBeHeld(t)).sort((t,e)=>e.touch-t.touch).forEach(n=>{if(DKTools.PreloadManager.isImageCachedByKey(n.key))delete t[n.key];else if(!(n.expiredAt>0&&n.expiredAt>e))if(i>0){const t=n.bitmap;i-=t.width*t.height}else delete t[n.key]})};class AudioCache extends ImageCache{add(t,e){this._items[t]={touch:Date.now(),audio:e,key:t}}get(t){if(this._items[t]){const e=this._items[t];return e.touch=Date.now(),e.audio}return DKTools.PreloadManager.getCachedAudioByKey(t)||null}_mustBeHeld(t){return!(!t.reservationId&&t.audio.isReady())}reserve(t,e,i){this._items[t]={touch:Date.now(),reservationId:i,audio:e,key:t},this._truncateCache()}_truncateCache(){const t=this._items,e=Date.now();let i=AudioCache.limit;Object.keys(t).map(e=>t[e]).filter(t=>!this._mustBeHeld(t)).sort((t,e)=>e.touch-t.touch).forEach(n=>{if(DKTools.PreloadManager.isAudioCachedByKey(n.key))delete t[n.key];else if(!(n.expiredAt>0&&n.expiredAt>e))if(i>0){const t=n.audio;i-=t._totalTime*t._sampleRate}else delete t[n.key]})}}const DKTools_Graphics_initialize=Graphics.initialize;Graphics.initialize=function(t,e,i){DKTools_Graphics_initialize.call(this,t,e,i);const n=DKToolsParam.get("FPS Meter")||{};if(Utils.isTest()&&n.Enabled){const t=this._fpsMeter;t&&(this.showFps(),"FPS"===n.Mode?(t.showFps(),this._fpsMeterToggled=!1):(t.showDuration(),this._fpsMeterToggled=!0))}};const DKTools_Graphics_printError=Graphics.printError;Graphics.printError=function(t,e){DKTools_Graphics_printError.call(this,t,e),this._errorPrinter&&this._updateErrorPrinter()};const DKTools_Graphics_createFPSMeter=Graphics._createFPSMeter;Graphics._createFPSMeter=function(){const t=DKToolsParam.get("FPS Meter")||{};t.Enabled?(this._fpsMeter=new FPSMeter({theme:t.Theme,history:t.History,toggleOn:null,graph:1,decimals:0}),this._fpsMeter.hide()):DKTools_Graphics_createFPSMeter.call(this)},Graphics.printDetailedError=function(t){if(!this._errorPrinter)return;const e=t.stack.split(/(?:\r\n|\r|\n)/).map(t=>t.replace(/[\(](.*[\/])/,"("));this._errorPrinter.innerHTML=this._makeDetailedErrorHtml(t.name,t.message,e),this._applyCanvasFilter(),this._clearUpperCanvas()},Graphics._makeDetailedErrorHtml=function(t,e,i){const n=DKToolsParam.get("Print Detailed Error"),o=DKTools.Utils._getErrorLogData();let s=n["Error Message"],r=n["Restart Message"],a="";return Imported.DKTools_Localization&&(s&&(s=DKTools.Localization.getText(s)),r&&(r=DKTools.Localization.getText(r))),s&&(a='<font color="yellow"><b>'+s+"<br></b></font><br>"),Object.keys(o).length>0&&(a+='<font color="yellow"><b>Reference Information</b></font><br>',_.forEach(o,(t,e)=>{a+='<font color="white">'+e+": "+t+"</font><br>"}),a+="<br>"),a+='<font color="red"><b>'+e+"</b></font><br>",_.forEach(i,t=>{a+='<font color="white">'+t+"</font><br>"}),r&&(a+='<br><font color="yellow"><b>'+r+"</b></font><br><br>"),a};const DKTools_Graphics_updateErrorPrinter=Graphics._updateErrorPrinter;Graphics._updateErrorPrinter=function(){DKTools_Graphics_updateErrorPrinter.apply(this,arguments),this._errorPrinter&&this._errorShowed&&DKToolsParam.get("Print Detailed Error","Enabled")&&(this._errorPrinter.style.textAlign="left",this._errorPrinter.height=.8*this._height,this._centerElement(this._errorPrinter))},Graphics.videoFileExt=function(){return Graphics.canPlayVideoType("video/webm")&&!Utils.isMobileDevice()?".webm":".mp4"},void 0===Input.keyMapper[35]&&(Input.keyMapper[35]="end"),void 0===Input.keyMapper[36]&&(Input.keyMapper[36]="home"),TouchInput.moveThreshold=10;const DKTools_TouchInput_initialize=TouchInput.initialize;TouchInput.initialize=function(){DKTools_TouchInput_initialize.apply(this,arguments);const t=DKToolsParam.get("Cursor Graphic")||{};if(t.Enabled){const e=t.Graphic;e&&(document.body.style.cursor=`url('img/system/${e}.png'), default`)}};const DKTools_TouchInput_clear=TouchInput.clear;TouchInput.clear=function(){DKTools_TouchInput_clear.apply(this,arguments),this._mouseMoved=!1,this._leftButtonPressed=!1,this._middleButtonPressed=!1,this._rightButtonPressed=!1,this._leftButtonReleased=!1,this._middleButtonReleased=!1,this._rightButtonReleased=!1,this._mouseX=0,this._mouseY=0,this._events.moved=!1,this._events.leftButtonPressed=!1,this._events.middleButtonPressed=!1,this._events.rightButtonPressed=!1,this._events.leftButtonReleased=!1,this._events.middleButtonReleased=!1,this._events.rightButtonReleased=!1};const DKTools_TouchInput_update=TouchInput.update;TouchInput.update=function(){this._mouseMoved=this._events.mouseMoved,this._leftButtonPressed=this._events.leftButtonPressed,this._middleButtonPressed=this._events.middleButtonPressed,this._rightButtonPressed=this._events.rightButtonPressed,this._leftButtonReleased=this._events.leftButtonReleased,this._middleButtonReleased=this._events.middleButtonReleased,this._rightButtonReleased=this._events.rightButtonReleased,this._events.mouseMoved=!1,this._events.leftButtonReleased=!1,this._events.middleButtonReleased=!1,this._events.rightButtonReleased=!1,DKTools_TouchInput_update.apply(this,arguments)},TouchInput.isMouseMoved=function(){return this._mouseMoved},TouchInput.isMousePressed=function(){return this.isLeftButtonPressed()||this.isMiddleButtonPressed()||this.isRightButtonPressed()},TouchInput.isMouseReleased=function(){return this.isLeftButtonReleased()||this.isMiddleButtonReleased()||this.isRightButtonReleased()},TouchInput.isLeftButtonPressed=function(){return this._leftButtonPressed},TouchInput.isLeftButtonReleased=function(){return this._leftButtonReleased},TouchInput.isMiddleButtonPressed=function(){return this._middleButtonPressed},TouchInput.isMiddleButtonReleased=function(){return this._middleButtonReleased},TouchInput.isRightButtonPressed=function(){return this._rightButtonPressed},TouchInput.isRightButtonReleased=function(){return this._rightButtonReleased},TouchInput.isScreenPressed=function(){return this._screenPressed};const DKTools_TouchInput_onLeftButtonDown=TouchInput._onLeftButtonDown;TouchInput._onLeftButtonDown=function(t){DKTools_TouchInput_onLeftButtonDown.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);Graphics.isInsideCanvas(e,i)&&(this._events.leftButtonPressed=!0)};const DKTools_TouchInput_onMiddleButtonDown=TouchInput._onMiddleButtonDown;TouchInput._onMiddleButtonDown=function(t){DKTools_TouchInput_onMiddleButtonDown.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);Graphics.isInsideCanvas(e,i)&&(this._events.middleButtonPressed=!0)};const DKTools_TouchInput_onRightButtonDown=TouchInput._onRightButtonDown;TouchInput._onRightButtonDown=function(t){DKTools_TouchInput_onRightButtonDown.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);Graphics.isInsideCanvas(e,i)&&(this._events.rightButtonPressed=!0)};const DKTools_TouchInput_onMouseMove=TouchInput._onMouseMove;TouchInput._onMouseMove=function(t){DKTools_TouchInput_onMouseMove.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY),n=Math.abs(this._mouseX-e),o=Math.abs(this._mouseY-i);(n>this.moveThreshold||o>this.moveThreshold)&&(this._events.mouseMoved=!0,this._date=Date.now(),this._mouseX=e,this._mouseY=i)};const DKTools_TouchInput_onMouseUp=TouchInput._onMouseUp;TouchInput._onMouseUp=function(t){DKTools_TouchInput_onMouseUp.apply(this,arguments);const e=Graphics.pageToCanvasX(t.pageX),i=Graphics.pageToCanvasY(t.pageY);this._events.leftButtonPressed=!1,this._events.middleButtonPressed=!1,this._events.rightButtonPressed=!1,Graphics.isInsideCanvas(e,i)&&(0===t.button?this._events.leftButtonReleased=!0:1===t.button?this._events.middleButtonReleased=!0:2===t.button&&(this._events.rightButtonReleased=!0))},Object.defineProperties(TouchInput,{mouseX:{get:function(){return this._mouseX},configurable:!0},mouseY:{get:function(){return this._mouseY},configurable:!0}});const DKTools_Tilemap_initialize=Tilemap.prototype.initialize;Tilemap.prototype.initialize=function(){DKTools_Tilemap_initialize.apply(this,arguments),this._tileWidth=Tilemap.TILE_WIDTH||this._tileWidth,this._tileHeight=Tilemap.TILE_HEIGHT||this._tileHeight},Object.defineProperties(Sprite.prototype,{frame:{get:function(){return this._frame},set:function(t){this.setFrame(t)},configurable:!0}}),Object.defineProperties(Window.prototype,{innerWidth:{get:function(){return Math.max(0,this._width-2*this._padding)},configurable:!0},innerHeight:{get:function(){return Math.max(0,this._height-2*this._padding)},configurable:!0},innerRect:{get:function(){return new Rectangle(this._padding,this._padding,this.innerWidth,this.innerHeight)},configurable:!0},frameOpacity:{get:function(){return 255*this._windowFrameSprite.alpha},set:function(t){this._windowFrameSprite.alpha=t.clamp(0,255)/255},configurable:!0},contentsSprite:{get:function(){return this._windowContentsSprite},configurable:!0}});const DKTools_Window_initialize=Window.prototype.initialize;Window.prototype.initialize=function(){this._innerChildren=[],DKTools_Window_initialize.apply(this,arguments)};const DKTools_Window_createAllParts=Window.prototype._createAllParts;Window.prototype._createAllParts=function(){DKTools_Window_createAllParts.apply(this,arguments),this._createInnerChildrenContainer()},Window.prototype._createInnerChildrenContainer=function(){const t=new PIXI.Graphics;this._windowInnerChildrenContainer=new Sprite,this._windowInnerChildrenContainer.mask=t,this._windowInnerChildrenContainer.addChild(t),this.addChild(this._windowInnerChildrenContainer)};const DKTools_Window_updateTransform=Window.prototype.updateTransform;Window.prototype.updateTransform=function(){this._updateInnerChildrenContainer(),DKTools_Window_updateTransform.apply(this,arguments)},Window.prototype._updateInnerChildrenContainer=function(){const t=this._windowInnerChildrenContainer.mask;t.clear(),t.beginFill(),t.drawRect(0,0,this.innerWidth,this.innerHeight),t.endFill(),this._windowInnerChildrenContainer.move(this._padding,this._padding)},Window.prototype.addInnerChild=function(t){return this._innerChildren.push(t),this._windowInnerChildrenContainer.addChild(t)},Window.prototype.moveInnerChildrenBy=function(t,e){for(const i of this._innerChildren)i.x+=t,i.y+=e};const DKTools_WebAudio_addLoadListener=WebAudio.prototype.addLoadListener;WebAudio.prototype.addLoadListener=function(t){this.isReady()?t(this):DKTools_WebAudio_addLoadListener.apply(this,arguments)},WebAudio.prototype._onLoad=function(){for(this._autoPlay&&this.play(this._loop,this._offset);this._loadListeners.length>0;)this._loadListeners.shift()(this)};const DKTools_DataManager_createGameObjects=DataManager.createGameObjects;DataManager.createGameObjects=function(){DKTools_DataManager_createGameObjects.apply(this,arguments),ColorManager.initialize()};const DKTools_DataManager_isDatabaseLoaded=DataManager.isDatabaseLoaded;DataManager.isDatabaseLoaded=function(){return!!DKTools_DataManager_isDatabaseLoaded.call(this)&&(this.__isDatabaseLoaded||(this.__isDatabaseLoaded=!0,this.onDatabaseLoad()),!0)},DataManager.onDatabaseLoad=function(){},Object.defineProperties(ImageManager,{PARALLAXES_FOLDER:{get:function(){if(void 0===this.__parallaxesFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/parallaxes/";if(t.Enabled){const i=t["Parallaxes Folder"];this.__parallaxesFolder__=i?DKTools.IO.normalizePath(i+"/"):e}else this.__parallaxesFolder__=e}return this.__parallaxesFolder__},configurable:!0},TILESETS_FOLDER:{get:function(){if(void 0===this.__tilesetsFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/tilesets/";if(t.Enabled){const i=t["Tilesets Folder"];this.__tilesetsFolder__=i?DKTools.IO.normalizePath(i+"/"):e}else this.__tilesetsFolder__=e}return this.__tilesetsFolder__},configurable:!0}}),ImageManager.imageFileExt=function(){return".png"},ImageManager.loadParallax=function(t,e){return this.loadBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!0)},ImageManager.loadTileset=function(t,e){return this.loadBitmap(ImageManager.TILESETS_FOLDER,t,e,!1)};const DKTools_ImageManager_loadNormalBitmap=ImageManager.loadNormalBitmap;ImageManager.loadNormalBitmap=function(t,e){return DKTools_ImageManager_loadNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e)},ImageManager.reserveParallax=function(t,e,i){return this.reserveBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!1,i)},ImageManager.reserveTileset=function(t,e,i){return this.reserveBitmap(ImageManager.TILESETS_FOLDER,t,e,!1,i)};const DKTools_ImageManager_reserveNormalBitmap=ImageManager.reserveNormalBitmap;ImageManager.reserveNormalBitmap=function(t,e,i){return DKTools_ImageManager_reserveNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e,i)},ImageManager.requestParallax=function(t,e){return this.requestBitmap(ImageManager.PARALLAXES_FOLDER,t,e,!0)},ImageManager.requestTileset=function(t,e){return this.requestBitmap(ImageManager.TILESETS_FOLDER,t,e,!1)};const DKTools_ImageManager_requestNormalBitmap=ImageManager.requestNormalBitmap;ImageManager.requestNormalBitmap=function(t,e){return DKTools_ImageManager_requestNormalBitmap.call(this,DKTools.IO.reverseSlashes(t),e)},ImageManager.isLoaded=function(t,e){return this._imageCache.has(this._generateCacheKey(t,e||0))},ImageManager.isReserved=function(t,e,i){const n=this._generateCacheKey(t,e||0);return this._imageCache.isReserved(n,i)||DKTools.PreloadManager.isImageCachedByKey(n)},ImageManager.releaseBitmap=function(t,e){this._imageCache.release(this._generateCacheKey(t,e||0))},AudioManager._audioCache=new AudioCache,AudioManager._generateCacheKey=function(t,e){return DKTools.IO.reverseSlashes((this._path||this._basePath)+t+"/"+encodeURIComponent(e)+this.audioFileExt())},DKTools.PluginManager.isRegistered("AudioStreaming")||(AudioManager.createBuffer=function(t,e,i){const n=this._generateCacheKey(t,e);if(this.shouldUseHtml5Audio()&&"bgm"===t)return this._blobUrl?Html5Audio.setup(this._blobUrl):Html5Audio.setup(n),Html5Audio;{let t=this._audioCache.get(n);return t||(t=new WebAudio(n),this._audioCache.reserve(n,t,i||this._defaultReservationId)),t}}),AudioManager.releaseReservation=function(t){this._audioCache.releaseReservation(t)},AudioManager.setDefaultReservationId=function(t){this._defaultReservationId=t},AudioManager.isLoaded=function(t,e){return this._audioCache.has(this._generateCacheKey(t,e))},AudioManager.isReserved=function(t,e,i){if("se"===t&&this._staticBuffers.some(t=>t._reservedSeName===e))return!0;const n=this._generateCacheKey(t,e);return this._audioCache.isReserved(n,i)||DKTools.PreloadManager.isAudioCachedByKey(n)},AudioManager.releaseBuffer=function(t,e){this._audioCache.release(this._generateCacheKey(t,e))};const DKTools_SceneManager_initialize=SceneManager.initialize;SceneManager.initialize=async function(){await DKTools_SceneManager_initialize.apply(this,arguments),await DKTools.StartupManager.initialize();const t=DKToolsParam.get("Initial Preloading","Enabled")&&DKToolsParam.get("Initial Preloading","Progress Bar",{key:"Enabled"})&&DKTools.PreloadManager.getTotal()>0;t&&await this.goto(DKTools.PreloadManager.Scene)};const DKTools_SceneManager_initGraphics=SceneManager.initGraphics;SceneManager.initGraphics=function(){const t=DKToolsParam.get("Screen Resolution")||{};if(t.Enabled){const e=t.Width,i=t.Height;this._boxWidth=e,this._screenWidth=e,this._boxHeight=i,this._screenHeight=i,this.updateResolution()}DKTools_SceneManager_initGraphics.apply(this,arguments)},SceneManager.updateResolution=function(){const t=this._screenWidth-window.innerWidth,e=this._screenHeight-window.innerHeight;0!==t&&0!==e&&(window.moveBy(-1*t/2,-1*e/2),window.resizeBy(t,e))};const DKTools_SceneManager_onKeyDown=SceneManager.onKeyDown;SceneManager.onKeyDown=function(t){if(DKTools_SceneManager_onKeyDown.apply(this,arguments),t.ctrlKey||t.altKey)return;const e=DKToolsParam.get("Quick Load","Key Code"),i=DKToolsParam.get("Screenshots","Key Code"),n=DKToolsParam.get("Grid","Key Code"),o=t.keyCode;switch(o){case e:DKTools.Utils.__quickLoad();break;case i:DKToolsParam.get("Screenshots","Enabled")&&DKTools.Utils.makeScreenshot();break;case n:DKTools.Utils.__showGrid()}};const DKTools_SceneManager_catchException=SceneManager.catchException;SceneManager.catchException=function(t){DKTools_SceneManager_catchException.apply(this,arguments),t instanceof Error&&DKToolsParam.get("Print Detailed Error","Enabled")&&Graphics.printDetailedError(t),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&DKTools.Utils.openConsole()};const DKTools_SceneManager_onError=SceneManager.onError;SceneManager.onError=function(t){DKTools_SceneManager_onError.apply(this,arguments),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&DKTools.Utils.openConsole()},SceneManager.changeScene=function(){this.isSceneChanging()&&!this.isCurrentSceneBusy()&&(this._scene&&(this._scene.terminate(),this._scene.detachReservation(),this._previousClass=this._scene.constructor),this._scene=this._nextScene,this._scene&&(this._scene.attachReservation(),this._scene.startPreloading(),this._sceneCreated=!1,this._sceneStarted=!1,this._nextScene=null,this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate())),this._exiting&&this.terminate())},SceneManager.updateScene=function(){if(this._scene){if(!this._sceneCreated&&this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate()),this._sceneCreated&&!this._sceneStarted)try{this._scene.isReady()&&(this._scene.start(),this._sceneStarted=!0,this.onSceneStart())}catch(t){console.error(t),DKTools.Utils.logError(t),this._scene.start(),this._sceneStarted=!0,this.onSceneStart()}this.isCurrentSceneStarted()&&this._scene.update()}},SceneManager.isCurrentScene=function(t){return!!this._scene&&this._scene.constructor===t};const DKTools_SceneManager_goto=SceneManager.goto;SceneManager.goto=function(t){DKTools_SceneManager_goto.apply(this,arguments),DKTools.Utils.__hideGrid()};const DKTools_Scene_Base_initialize=Scene_Base.prototype.initialize;Scene_Base.prototype.initialize=function(){this._preloader=new DKTools.Scene.Preloader,DKTools_Scene_Base_initialize.apply(this,arguments)};const DKTools_Scene_Base_attachReservation=Scene_Base.prototype.attachReservation;Scene_Base.prototype.attachReservation=function(){DKTools_Scene_Base_attachReservation.apply(this,arguments),this._audioReservationId=this._imageReservationId,AudioManager.setDefaultReservationId(this._audioReservationId)};const DKTools_Scene_Base_detachReservation=Scene_Base.prototype.detachReservation;Scene_Base.prototype.detachReservation=function(){DKTools_Scene_Base_detachReservation.apply(this,arguments),AudioManager.releaseReservation(this._audioReservationId)};const DKTools_Scene_Base_create=Scene_Base.prototype.create;Scene_Base.prototype.create=function(){this!==SceneManager._scene&&this.startPreloading(),DKTools_Scene_Base_create.apply(this,arguments)},Scene_Base.prototype.activate=function(){this._active=!0},Scene_Base.prototype.deactivate=function(){this._active=!1},Scene_Base.prototype.isPreloaded=function(){return this._preloader.isReady()};const DKTools_Scene_Base_isReady=Scene_Base.prototype.isReady;Scene_Base.prototype.isReady=function(){return DKTools_Scene_Base_isReady.apply(this,arguments)&&this.isPreloaded()},Scene_Base.prototype.setupPreloading=function(){},Scene_Base.prototype.startPreloading=function(){this.setupPreloading(),this._preloader.start()};const DKTools_Scene_Base_terminate=Scene_Base.prototype.terminate;Scene_Base.prototype.terminate=function(){DKTools_Scene_Base_terminate.apply(this,arguments),this._preloader.finish()};const DKTools_Scene_Boot_isReady=Scene_Boot.prototype.isReady;Scene_Boot.prototype.isReady=function(){return DKTools_Scene_Boot_isReady.apply(this,arguments)&&DKTools.StartupManager.isReady()};const DKTools_Scene_Boot_start=Scene_Boot.prototype.start;Scene_Boot.prototype.start=function(){const t=DKToolsParam.get("Quick Start")||{};t.Enabled?(DKTools_Scene_Boot_start.apply(this,arguments),DataManager.isBattleTest()||DataManager.isEventTest()||!t["Skip Saves"]&&DataManager.isAnySavefileExists()||(Scene_Base.prototype.start.call(this),SoundManager.preloadImportantSounds(),this.checkPlayerLocation(),DataManager.setupNewGame(),this.updateDocumentTitle(),SceneManager.goto(window[t["Scene Name"]]))):DKTools_Scene_Boot_start.apply(this,arguments)},Scene_Map.prototype.setupPreloading=function(){Scene_Base.prototype.setupPreloading.call(this),this._setupMapPreloading()},Scene_Map.prototype._setupMapPreloading=function(){const t=DKToolsParam.get("Maps Preloading")||{};if(!t.Enabled)return;const e=$gamePlayer.isTransferring()?$gamePlayer.newMapId():$gameMap.mapId(),i=_.find(t.Maps,{"Map Id":e});i&&(DKTools.PreloadManager.setDebugging(t.Debugging),i["Audio Files"].forEach(t=>{DKTools.PreloadManager.preloadAudio({path:"audio/"+t})}),i["Image Files"].forEach(t=>{DKTools.PreloadManager.preloadImage({path:"img/"+t.Path,hue:t.Hue})}),0!==DKTools.PreloadManager.getTotal()&&(DKTools.PreloadManager.onFileLoad(()=>{Graphics.updateLoading()}),DKTools.PreloadManager.onFinish(()=>{Graphics.endLoading()}),this._preloader.add(DKTools.PreloadManager.start())))};const DKTools_Scene_Map_isReady=Scene_Map.prototype.isReady;Scene_Map.prototype.isReady=function(){return!!this.isPreloaded()&&DKTools_Scene_Map_isReady.apply(this,arguments)};const DKTools_Scene_Map_terminate=Scene_Map.prototype.terminate;Scene_Map.prototype.terminate=function(){if(!SceneManager.isNextScene(Scene_Map)){const t=Date.now()+3e4;Object.values(ImageManager._imageCache._items).forEach(e=>{e.reservationId===this._imageReservationId&&(e.expiredAt=t,delete e.reservationId)}),Object.values(AudioManager._audioCache._items).forEach(e=>{e.reservationId===this._audioReservationId&&(e.expiredAt=t,delete e.reservationId)})}DKTools_Scene_Map_terminate.apply(this,arguments)};const DKTools_Game_Map_tileWidth=Game_Map.prototype.tileWidth;Game_Map.prototype.tileWidth=function(){return Tilemap.TILE_WIDTH||DKTools_Game_Map_tileWidth.call(this)};const DKTools_Game_Map_tileHeight=Game_Map.prototype.tileHeight;Game_Map.prototype.tileHeight=function(){return Tilemap.TILE_HEIGHT||DKTools_Game_Map_tileHeight.call(this)};const DKTools_Game_Interpreter_pluginCommand=Game_Interpreter.prototype.pluginCommand;Game_Interpreter.prototype.pluginCommand=function(t,e){DKTools_Game_Interpreter_pluginCommand.call(this,t,e),DKTools.PluginCommandManager.process(this,t,e)};const DKTools_Window_Selectable_processCursorMove=Window_Selectable.prototype.processCursorMove;if(Window_Selectable.prototype.processCursorMove=function(){if(this.isCursorMovable()){const t=this.index();Input.isTriggered("home")&&this.select(0),Input.isTriggered("end")&&this.select(Math.max(0,this.maxItems()-1)),this.index()!==t&&SoundManager.playCursor()}DKTools_Window_Selectable_processCursorMove.apply(this,arguments)},DKToolsParam.get("Font Size","Enabled")&&(Window_Base.prototype.standardFontSize=function(){return DKToolsParam.get("Font Size","Size")}),DKToolsParam.get("Line Height","Enabled")&&(Window_Base.prototype.lineHeight=function(){return DKToolsParam.get("Line Height","Height")}),DKToolsParam.get("Window Padding","Enabled")&&(Window_Base.prototype.standardPadding=function(){return DKToolsParam.get("Window Padding","Padding")}),DKToolsParam.get("Mouse Hover","Enabled")){const t=Window_Selectable.prototype.initialize;Window_Selectable.prototype.initialize=function(e,i,n,o){t.apply(this,arguments),this._lastMouseX=TouchInput.mouseX,this._lastMouseY=TouchInput.mouseY};const e=Window_Selectable.prototype.update;Window_Selectable.prototype.update=function(){if(e.apply(this,arguments),this.isCursorMovable()){const t=TouchInput.mouseX,e=TouchInput.mouseY;if(this._lastMouseX!==t||this._lastMouseY!==e){this._lastMouseX=t,this._lastMouseY=e;const i=this.hitTest(this.canvasToLocalX(t),this.canvasToLocalY(e));i>=0&&this.select(i)}}}}if(DKToolsParam.get("Title Menu Command Window","Enabled")&&(Window_TitleCommand.prototype.windowWidth=function(){return eval(DKToolsParam.get("Title Menu Command Window","Width"))},Window_TitleCommand.prototype.updatePlacement=function(){const params=DKToolsParam.get("Title Menu Command Window");this.x=eval(params.X),this.y=eval(params.Y)}),DKToolsParam.get("Title Menu Exit Command","Enabled")&&Utils.isNwjs()){const t=Window_TitleCommand.prototype.createContents;Window_TitleCommand.prototype.createContents=function(){-1===this.findSymbol("exit")&&this.addCommand(DKToolsParam.get("Title Menu Exit Command","Command Name"),"exit"),this.height=this.windowHeight(),t.apply(this,arguments)};const e=Scene_Title.prototype.createCommandWindow;Scene_Title.prototype.createCommandWindow=function(){e.apply(this,arguments),this._commandWindow&&this._commandWindow.setHandler("exit",this.commandExit.bind(this))},Scene_Title.prototype.commandExit=function(){this.fadeOutAll(),SceneManager.exit()}}DKToolsParam.get("Max Savefiles","Enabled")&&(DataManager.maxSavefiles=function(){return DKToolsParam.get("Max Savefiles","Max Savefiles")||1})},147:t=>{t.exports=require("fs")},970:t=>{t.exports=require("nw.gui")},37:t=>{t.exports=require("os")},17:t=>{t.exports=require("path")}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var i=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t].call(i.exports,i,i.exports,__webpack_require__),i.loaded=!0,i.exports}__webpack_require__.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var __webpack_exports__=__webpack_require__(372)})();