/*
Title: DKTools
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 10.0.5
Release: 21.01.2021
First release: 13.01.2016
*/

/*ru
Название: DKTools
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 10.0.5
Релиз: 21.01.2021
Первый релиз: 13.01.2016
*/

/*:
* @plugindesc v.10.0.5 [MV] Advanced project testing and various functions. Made with ♥ by DKPlugins.
* @author DKPlugins
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 10.0.5
 Release: 21.01.2021
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
* @plugindesc v.10.0.5 [MV] Расширенное тестирование проекта и различные функции. Сделано с ♥ от DKPlugins.
* @author DKPlugins
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 10.0.5
 Релиз: 21.01.2021
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
