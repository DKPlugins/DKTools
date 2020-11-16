/*
Title: DKTools
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.1.3
Release: 15.11.2020
First release: 21.08.2020
*/

/*ru
Название: DKTools
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.1.3
Релиз: 15.11.2020
Первый релиз: 21.08.2020
*/

/*:
* @plugindesc v.1.1.3 Advanced project testing and various settings. Made with ♥ by DKPlugins
* @author DKPlugins
* @url https://dk-plugins.ru
* @target MZ
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 1.1.3
 Release: 15.11.2020
 First release: 21.08.2020

 ###=========================================================================
 ## Links
 ###=========================================================================

 ### DKTools on DKPlugins ###
 https://dk-plugins.ru/mz/dktools/

 ### DKTools on GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Online documentation ###
 https://dk-plugins.ru/documentation/mz/DKTools/index.html

 ###=========================================================================
 ## Functions and parameters
 ###=========================================================================

 All functions are disabled by default! Turn them on in settings!

 ###=========================================================================
 ### File system ###
 File system modes:
 Nwjs + Stamp - Advanced file system mode (all Platforms)
 Nwjs - standard file system mode (PC only)

 Data must be updated using the plugin command UpdateFileSystemStamp (see below)

 Q. Why do I need Nwjs + Stamp file system mode ?
 A. Browsers and old mobile devices do not provide the ability to check for
 a specific files, in a particular directory, and also do not provide
 a list of files and directories.

 Q. Which mode should I choose ?
 A. Nwjs + Stamp, if your project is designed for all platforms
 (including browsers and mobile devices).

 ## Ignored directories ##
 Only applicable for Nwjs + Stamp mode.
 Ignores specified (and nested) directories when scanning project files.

 ###=========================================================================
 ### Tile size ###
 Allows you to change size of the tiles.
 You can also change folders for tilesets and parallax.

 ###=========================================================================
 ### Cursor graphic ###
 Allows you to change graphic of the mouse cursor.

 ###=========================================================================
 ### Max savefiles ###
 Allows you to change the maximum number of save slots.

 ###=========================================================================
 ### Initial preloading ###
 Allows you to preload audio and image files when starting the game.

 ## Important ##
 Preload only files you really need, for example, interface elements!
 Do not load images and sounds that are used on the game map!
 Use the "Maps preloading" function for this!

 ## Custom paths ##
 To preload a whole folder with resources or a file with a non-standard path,
 you must specify the "Path" in the "Text" tab instead of the "File" tab.

 ###=========================================================================
 ### Maps preloading ###
 Allows you to preload audio and image files on specific maps.

 ## Custom paths ##
 To preload a whole folder with resources or a file with a non-standard path,
 you must specify the "Path" in the "Text" tab instead of the "File" tab.

 ###=========================================================================
 ### Line height of window ###
 Allows you to change the line height of all windows.

 ###=========================================================================
 ### Window padding ###
 Allows you to change the padding from the edge of the window for all windows.

 ###=========================================================================
 ### Check updates ###
 Allows you to check for updated installed plugins from DKPlugins.
 Information about updates is displayed in the debug console (F8).
 You can also enable the display of information about new plugins.

 ###=========================================================================
 ### Debugging console ###
 Allows you to enable automatic opening of the console at the start of the game,
 or when an error occurs.
 The function works only during testing of the game.

 ###=========================================================================
 ### FPS meter ###
 Allows you to enable the display of the FPS counter at the start of the game.
 You can choose the mode (FPS or ms).
 The function works only during testing of the game.

 ###=========================================================================
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

 ###=========================================================================
 ### Detailed error printing ###
 Allows you to customize the detailed display of the error.
 You can customize a message for the user, and specify a message to restart the game.
 For example, you can specify your email, and ask the user to send information about the error.
 If an error occurred on the game map, additional information will be displayed, for example:
 map number, event number, event page, number of the last called command and its parameters.

 ###=========================================================================
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

 ###=========================================================================
 ### Quick load ###
 Allows you to assign a keyboard key to quickly load a game from a specified save file.
 The function works only during testing of the game.

 ###=========================================================================
 ### Quick start ###
 Allows you to change the initial screen of the game.
 The default is Scene_Title - the title screen.
 You can specify any scene for quick start, for example, the map screen is Scene_Map.
 You can also choose to ignore save files.
 If ignore save files is not enabled,
 then if there is at least one save, the title screen will be shown.

 ###=========================================================================
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

 ###=========================================================================
 ### Command window on the title screen ###
 Allows you to adjust the width of the command window on the title screen.

 ###=========================================================================
 ### Exit command on the title screen ###
 Allows you to add an exit command to the command window on the title screen.
 The command is added to the end of the list.

 ###=========================================================================
 ### Disable item background ###
 Disables the background of list items.

 ###=========================================================================
 ## Hidden functions
 ###=========================================================================
 1. You can select the first and last item in the list using the home and end keys

 ###=========================================================================
 ## Plugin commands
 ###=========================================================================
 1. UpdateFileSystemStamp
 Scans project folders (excluding ignored directories) and builds a tree view
 of project folders and files. This is necessary so that browsers and
 mobile devices can check for the existence of folders and files.

 ###===========================================================================
 ## License and terms of use
 ###===========================================================================
 You can:
 -To use the plugin for your non-commercial projects
 -Change code of the plugin

 You cannot:
 -Delete or change any information about the plugin
 -Distribute the plugin and its modifications

 ## Commercial license ##
 Visit the page: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Support
 ###=========================================================================
 Donate: https://dk-plugins.ru/donate
 Become a patron: https://www.patreon.com/dkplugins

 * @command UpdateFileSystemStamp
 * @desc Update file system stamp

 * @param System
 * @default ---------------------------------

 * @param File System
 * @parent System
 * @desc File system parameters
 * @type struct<FileSystem>
 * @default {"Mode":"0","Ignored Directories":"[\"node_modules\"]"}

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
 * @desc Maximum number of save slots.
 * @type struct<MaxSavefiles>
 * @default {"Enabled":"false","Max Savefiles": "20"}

 * @param Preloading
 * @default ---------------------------------

 * @param Initial Preloading
 * @parent Preloading
 * @desc Initial preloading of resources
 * @type struct<InitialPreloading>
 * @default {"Enabled":"false","Debugging":"false","Audio Files":"[]","Image Files":"[]"}

 * @param Maps Preloading
 * @parent Preloading
 * @desc Maps preloading
 * @type struct<MapsPreloading>
 * @default {"Enabled":"false","Debugging":"false","Maps":"[]"}

 * @param Windows
 * @default ---------------------------------

 * @param Line Height
 * @parent Windows
 * @desc Sets the line height for a windows
 * @type struct<LineHeight>
 * @default {"Enabled":"false","Height":"36"}

 * @param Window Padding
 * @parent Windows
 * @desc Sets the padding for a windows
 * @type struct<WindowPadding>
 * @default {"Enabled":"false","Padding":"12"}

 * @param Disable Item Background
 * @parent Windows
 * @desc Disables the background of list items
 * @type struct<DisableItemBackground>
 * @default {"Enabled":"false"}

 * @param Other
 * @default ---------------------------------

 * @param Check Updates
 * @parent Other
 * @desc Checks for updates of my plugins. Information about updates is displayed in the debugging console.
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false","Show New Plugins":"true"}

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
 * @default {"Enabled":"false","Mode":"FPS"}

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
 * @text Grid And Ruler
 * @parent Debugging
 * @desc Displaying the grid on the screen
 * @type struct<Grid>
 * @default {"Enabled":"false","Key Code":"118","Grid Sizes":"[\"64\",\"48\",\"32\",\"16\"]","Grid Color":"white","Grid Width":"1","Ruler Color":"","Ruler Width":"3"}

 * @param Quick Load
 * @parent Debugging
 * @desc Quick load
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
 * @default {"Enabled":"false","Width":"240"}

 * @param Title Menu Exit Command
 * @parent Title Menu
 * @desc Exit command
 * @type struct<TitleMenuExitCommand>
 * @default {"Enabled":"false","Command Name":"Exit"}

*/

/*:ru
* @plugindesc v.1.1.3 Расширенное тестирование проекта и различные настройки. Сделано с ♥ от DKPlugins
* @author DKPlugins
* @url https://dk-plugins.ru
* @target MZ
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.1.3
 Релиз: 15.11.2020
 Первый релиз: 21.08.2020

 ###=========================================================================
 ## Ссылки
 ###=========================================================================

 ### DKTools на DKPlugins ###
 https://dk-plugins.ru/mz/dktools/

 ### DKTools на GitHub ###
 https://github.com/DKPlugins/DKTools

 ### Онлайн документация ###
 https://dk-plugins.ru/documentation/mz/DKTools/index.html

 ###=========================================================================
 ## Функции и параметры
 ###=========================================================================

 Все функцию по умолчанию отключены! Включайте их в настройках плагина!

 ###=========================================================================
 ### Файловая система ###
 Режимы работы файловой системы:
 Nwjs + Stamp - Расширенный режим работы файловой системы (все платформы)
 Nwjs - стандартный режим работы файловой системы (только PC)

 Данные должны быть обновлены с помощью команды плагина UpdateFileSystemStamp (см. ниже)

 Q. Зачем нужен режим работы Nwjs + Stamp ?
 A. Браузеры и старые мобильные устройства не предоставляют возможность проверять наличие конкретных файлов
 в той или иной директории, а также не предоставляют список файлов и директорий.

 Q. Какой режим выбрать мне ?
 A. Nwjs + Stamp, если Ваш проект расчитан на все платформы (включая браузеры и мобильные устройства).

 ## Игнорируемые директории ##
 Применяется только для режима Nwjs + Stamp.
 Игнорирует указанные (и вложенные) директории при сканировании файлов проекта.

 ###=========================================================================
 ### Размера тайла ###
 Позволяет изменить размер тайла.
 Также вы можете изменить папки для тайлсетов и паралакса.

 ###=========================================================================
 ### Графика курсора ###
 Позволяет изменить графику курсора мыши.

 ###=========================================================================
 ### Максимум файлов сохранения ###
 Позволяет изменить максимальное количество слотов сохранения.

 ###=========================================================================
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

 ###=========================================================================
 ### Предзагрузка карт ###
 Позволяет предзагружать аудиофайлы и изображения на конкретных картах.

 ## Нестандартные пути ##
 Чтобы предзагрузить целую папку с ресурсами или файл с нестандартным путем,
 необходимо указывать "Путь" во вкладке "Текст" вместо вкладки "Файл".

 ###=========================================================================
 ### Высота строки окна ###
 Позволяет изменить высоту строки всех окон.

 ###=========================================================================
 ### Отступ окна ###
 Позволяет изменить отступ от края окна для всех окон.

 ###=========================================================================
 ### Проверка обновлений ###
 Позволяет проверить наличие обновление установленных плагинов от DKPlugins.
 Информация об обновлениях выводится в отладочную консоль (F8).
 Вы также можете включить отображение информации о новых плагинах.

 ###=========================================================================
 ### Отладочная консоль ###
 Позволяет включить автоматическое открытие консоли в начале игры, либо
 при появлении ошибки.
 Функция работает только во время тестирования игры.

 ###=========================================================================
 ### Счетчик FPS ###
 Позволяет включить отображение счетчика FPS при старте игры.
 Вы можете выбрать режим (FPS или ms).
 Функция работает только во время тестирования игры.

 ###=========================================================================
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

 ###=========================================================================
 ### Детальное отображение ошибок ###
 Позволяет настроить детальное отображение об ошибке.
 Вы можете настроить сообщение для пользователя, и указать сообщение для перезапуска игры.
 Например, вы можете указать вашу почту, и попросить пользователя прислать информацию об ошибке.
 Если ошибка произошла на карте игры, то будет выведена дополнительная информация, например:
 номер карты, номер события, страница события, номер последней вызванной команды и ее параметры.

 ###=========================================================================
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

 ###=========================================================================
 ### Быстрая загрузка ###
 Позволяет назначить клавишу клавиатуры для быстрой загрузки игры из указанного файла сохранения.
 Функция работает только во время тестирования игры.

 ###=========================================================================
 ### Быстрый старт ###
 Позволяет изменить начальный экран игры.
 По умолчанию используется Scene_Title - титульный экран.
 Вы можете указать любую сцену для быстрого старта, например, экран карты - Scene_Map.
 Вы также можете настроить игнорирование файлов сохранения.
 Если игнорирование файлов сохранения не включено,
 то при наличии хотя бы одного сохранения будет показан титульный экран.

 ###=========================================================================
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

 ###=========================================================================
 ### Окно команд на титульном экране ###
 Позволяет вам настроить положение и ширину окна команд на титульном экране.

 ###=========================================================================
 ### Команда выхода на титульном экране ###
 Позволяет вам добавить команду выхода в окно команд на титульном экране.
 Команда добавляется в конец списка.

 ###=========================================================================
 ### Отключить фон элементов списков ###
 Отключает фон у элементов списков

 ###=========================================================================
 ## Скрытые функции
 ###=========================================================================
 1. Вы можете выбрать первый и последний элемент списка с помощью клавиш home и end

 ###=========================================================================
 ## Команды плагина
 ###=========================================================================
 1. UpdateFileSystemStamp
 Сканирует папки проекта (за исключением игнорируемых директорий) и
 составляет древовидное представление папок и файлов проекта.
 Это необходимо, чтобы браузеры и мобильные устройства могли проверять
 существование папок и файлов.

 ###===========================================================================
 ## Лицензия и правила использования плагина
 ###===========================================================================
 Вы можете:
 -Использовать плагин в некоммерческих проектах
 -Изменять код плагина

 Вы не можете:
 -Удалять или изменять любую информацию о плагине
 -Распространять плагин и его модификации

 ## Коммерческая лицензия ##
 Посетите страницу: https://dk-plugins.ru/commercial-license/

 ###=========================================================================
 ## Поддержка
 ###=========================================================================
 Поддержать: https://dk-plugins.ru/donate
 Стать патроном: https://www.patreon.com/dkplugins

 * @command UpdateFileSystemStamp
 * @desc Обновить штамп файловой системы

 * @param System
 * @text Система
 * @default ---------------------------------

 * @param File System
 * @text Файловая система
 * @parent System
 * @desc Параметры файловой системы
 * @type struct<FileSystem>
 * @default {"Mode":"0","Ignored Directories":"[\"node_modules\"]"}

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

 * @param Max Savefiles
 * @text Максимальное количество сохранений
 * @parent System
 * @desc Максимальное количество файлов сохранения
 * @type struct<MaxSavefiles>
 * @default {"Enabled":"false","Max Savefiles": "20"}

 * @param Preloading
 * @text Предзагрузка
 * @default ---------------------------------

 * @param Initial Preloading
 * @text Начальная предзагрузка
 * @parent Preloading
 * @desc Начальная предзагрузка
 * @type struct<InitialPreloading>
 * @default {"Enabled":"false","Debugging":"false","Audio Files":"[]","Image Files":"[]"}

 * @param Maps Preloading
 * @text Предзагрузка карт
 * @parent Preloading
 * @desc Предварительная загрузка карт
 * @type struct<MapsPreloading>
 * @default {"Enabled":"false","Debugging":"false","Maps":"[]"}

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
 * @default {"Enabled":"false","Padding":"12"}

 * @param Disable Item Background
 * @text Отключение фона списков
 * @parent Windows
 * @desc Отключает фон у элементов списков
 * @type struct<DisableItemBackground>
 * @default {"Enabled":"false"}

 * @param Other
 * @text Разное
 * @default ---------------------------------

 * @param Check Updates
 * @text Проверка обновлений
 * @parent Other
 * @desc Проверка обновлений
 * @type struct<CheckUpdates>
 * @default {"Enabled":"false","Show New Plugins":"true"}

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
 * @default {"Enabled":"false","Mode":"FPS"}

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
 * @text Сетка и линейка
 * @parent Debugging
 * @desc Отображение сетки на экране
 * @type struct<Grid>
 * @default {"Enabled":"false","Key Code":"118","Grid Sizes":"[\"64\",\"48\",\"32\",\"16\"]","Grid Color":"white","Grid Width":"1","Ruler Color":"","Ruler Width":"3"}

 * @param Quick Load
 * @text Быстрая загрузка
 * @parent Functions
 * @desc Быстрая загрузка игры
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
 * @default {"Enabled":"false","Width":"240"}

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

/*~struct~InitialPreloading:

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
 * @type file[]
 * @dir img/
 * @default []
 */

/*~struct~InitialPreloading:ru

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
 * @type file[]
 * @dir img/
 * @default []

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
 * @type file[]
 * @dir img/
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
 * @type file[]
 * @dir img/
 * @default []

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
 * @desc Цвет линейки в Web формате. Подробности в справке (3.2)
 * @default

 * @param Ruler Width
 * @text Ширина линейки
 * @desc Ширина линейки
 * @type number
 * @min 1
 * @default 3

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
 * @default 12

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
 * @default 12

*/

/*~struct~DisableItemBackground:

 * @param Enabled
 * @desc Enable function to disable background of list items ?
 * @type boolean
 * @default false

*/

/*~struct~DisableItemBackground:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию отключения фона у элементов списков ?
 * @type boolean
 * @default false

*/

/*~struct~TitleMenuCommandWindow:

 * @param Enabled
 * @desc Enable function to change the command window options on the title screen ?
 * @type boolean
 * @default false

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

'use strict';

//===========================================================================
// Imported
//===========================================================================

/**
 * @global
 * @type {Object}
 */
window.Imported = window.Imported || {};
window.Imported.DKTools = '1.1.3';



//===========================================================================
// Lodash
//===========================================================================

/* eslint-disable */

/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
    return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
    return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
    --r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
}function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function k(n,t){return c(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Ln[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
}),r}function U(n,t){return function(r){return n(t(r))}}function B(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
}var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,kn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",En=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+kn+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Un={};
    Un["[object Float32Array]"]=Un["[object Float64Array]"]=Un["[object Int8Array]"]=Un["[object Int16Array]"]=Un["[object Int32Array]"]=Un["[object Uint8Array]"]=Un["[object Uint8ClampedArray]"]=Un["[object Uint16Array]"]=Un["[object Uint32Array]"]=true,Un["[object Arguments]"]=Un["[object Array]"]=Un["[object ArrayBuffer]"]=Un["[object Boolean]"]=Un["[object DataView]"]=Un["[object Date]"]=Un["[object Error]"]=Un["[object Function]"]=Un["[object Map]"]=Un["[object Number]"]=Un["[object Object]"]=Un["[object RegExp]"]=Un["[object Set]"]=Un["[object String]"]=Un["[object WeakMap]"]=false;
    var Bn={};Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object DataView]"]=Bn["[object Boolean]"]=Bn["[object Date]"]=Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object Symbol]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,
        Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object WeakMap]"]=false;var Ln={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cn=parseFloat,Dn=parseInt,Mn=typeof global=="object"&&global&&global.Object===Object&&global,Tn=typeof self=="object"&&self&&self.Object===Object&&self,$n=Mn||Tn||Function("return this")(),Fn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nn=Fn&&typeof module=="object"&&module&&!module.nodeType&&module,Pn=Nn&&Nn.exports===Fn,Zn=Pn&&Mn.process,qn=function(){
        try{var n=Nn&&Nn.require&&Nn.require("util").types;return n?n:Zn&&Zn.binding&&Zn.binding("util")}catch(n){}}(),Vn=qn&&qn.isArrayBuffer,Kn=qn&&qn.isDate,Gn=qn&&qn.isMap,Hn=qn&&qn.isRegExp,Jn=qn&&qn.isSet,Yn=qn&&qn.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e",
        "\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a",
        "\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I",
        "\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r",
        "\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ",
        "\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(yu(n)&&!ff(n)&&!(n instanceof Ln)){if(n instanceof On)return n;if(oi.call(n,"__wrapped__"))return Fe(n)}return new On(n)}function kn(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Ln(n){
        this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Mn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Fn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Fn;++t<r;)this.add(n[t]);
    }function Zn(n){this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=ff(n),u=!e&&of(n),i=!e&&!u&&af(n),o=!e&&!u&&!i&&_f(n),u=(e=e||u||i||o)?A(n.length,ni):[],f=u.length;for(r in n)!t&&!oi.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return De(Lr(n),pt(t,0,n.length))}function ut(n){return De(Lr(n))}function it(n,t,r){(r===T||lu(n[t],r))&&(r!==T||t in n)||st(n,t,r);
    }function ot(n,t,r){var e=n[t];oi.call(n,t)&&lu(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(lu(n[r][0],t))return r;return-1}function ct(n,t,r,e){return uo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,Wu(t),n)}function lt(n,t){return n&&Cr(t,Uu(t),n)}function st(n,t,r){"__proto__"==t&&Ai?Ai(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Ku(e),i=null==n;++r<e;)u[r]=i?T:Ru(n,t[r]);return u;
    }function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!du(n))return n;if(u=ff(n)){if(f=me(n),!c)return Lr(n,f)}else{var s=vo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(af(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Bn[s])return i?n:{};f=ke(n,s,c)}}if(o||(o=new Zn),
        i=o.get(n))return i;if(o.set(n,f),pf(n))return n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}),f;if(sf(n))return n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))}),f;var a=l?a?ve:_e:a?Uu:Wu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=Wu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Qu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ti("Expected a function");
        return bo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,E(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return uo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!wu(o):r(o,f)))var f=o,c=i;
    }return c}function jt(n,t){var r=[];return uo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ee),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&oo(n,t,Wu)}function At(n,t){return n&&fo(n,t,Wu)}function kt(n,t){return i(t,function(t){return _u(n[t])})}function Et(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Me(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
        ff(n)?t:a(t,r(n))}function Ot(n){if(null==n)return n===T?"[object Undefined]":"[object Null]";if(mi&&mi in Qu(n)){var t=oi.call(n,mi),r=n[mi];try{n[mi]=T;var e=true}catch(n){}var u=ai.call(n);e&&(t?n[mi]=r:delete n[mi]),n=u}else n=ai.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&oi.call(n,t)}function zt(n,t){return null!=n&&t in Qu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Ku(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,E(t))),s=Ci(p.length,s),
        l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ut(n,t,r,e){return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Bt(t,r,e){return r=Sr(r,t),t=2>r.length?t:Et(t,hr(r,0,-1)),r=null==t?t:t[Me(Ve(r))],null==r?T:n(r,t,e)}function Lt(n){return yu(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
        return yu(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return yu(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)return true;if(null==n||null==t||!yu(n)&&!yu(t))return n!==n&&t!==t;n:{var i=ff(n),o=ff(t),f=i?"[object Array]":vo(n),c=o?"[object Array]":vo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&af(n)){if(!af(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Zn),t=i||_f(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
        if(!(1&r)&&(i=a&&oi.call(n,"__wrapped__"),f=o&&oi.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Zn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Zn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:oi.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
        }c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return yu(n)&&"[object Map]"==vo(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Qu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
    }else{if(f=new Zn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!du(n)||ci&&ci in n)&&(_u(n)?hi:dn).test(Te(n))}function Nt(n){return yu(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return yu(n)&&"[object Set]"==vo(n)}function Zt(n){return yu(n)&&gu(n.length)&&!!Un[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?$u:typeof n=="object"?ff(n)?Jt(n[0],n[1]):Ht(n):Zu(n)}function Vt(n){if(!ze(n))return Bi(n);var t,r=[];for(t in Qu(n))oi.call(n,t)&&"constructor"!=t&&r.push(t);
        return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=su(n)?Ku(n.length):[];return uo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!du(t)?We(Me(n),t):function(r){var e=Ru(r,n);return e===T&&e===t?zu(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&oo(t,function(i,o){if(du(i)){u||(u=new Zn);var f=u,c=Be(n,o),a=Be(t,o),l=f.get(a);if(!l){var l=e?e(c,a,o+"",n,t,f):T,s=l===T;
        if(s){var h=ff(a),p=!h&&af(a),_=!h&&!p&&_f(a),l=a;h||p||_?ff(c)?l=c:hu(c)?l=Lr(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:xu(a)||of(a)?(l=c,of(c)?l=Ou(c):du(c)&&!_u(c)||(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a))}it(n,o,l)}else f=e?e(Be(n,o),i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Uu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[$u],E(ye())),n=Gt(n,function(n,r,u){return{a:c(t,function(t){return t(n)}),
        b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){if(e>=f){e=c;break n}e=c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return zu(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Et(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return Et(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;for(n===t&&(t=Lr(t)),r&&(f=c(n,E(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&xi.call(f,a,1),
        xi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?xi.call(n,u,1):xr(n,u)}}return n}function ir(n,t){return n+Ii(Ti()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Ii(t/2))&&(n+=n);while(t);return r}function fr(n,t){return xo(Ue(n,t,$u),n+"")}function cr(n){return Qn(Lu(n))}function ar(n,t){var r=Lu(n);return De(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!du(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){
        var c=Me(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=du(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return De(Lu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Ku(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return uo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!wu(o)&&(r?o<=t:o<t)?e=i+1:u=i;
    }return u}return vr(n,t,$u,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=wu(t),a=t===T;u<i;){var l=Ii((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=wu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ci(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!lu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:wu(n)?F:+n}function yr(n){
        if(typeof n=="string")return n;if(ff(n))return c(n,yr)+"";if(wu(n))return ro?ro.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:so(n))return L(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),
        n=2>t.length?n:Et(n,hr(t,0,-1)),null==n||delete n[Me(Ve(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Ln&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Ku(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));return br(wt(i,1),t,r)}function Ar(n,t,r){
        for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function kr(n){return hu(n)?n:[]}function Er(n){return typeof n=="function"?n:$u}function Sr(n,t){return ff(n)?n:Ie(n,t)?[n]:jo(Iu(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=gi?gi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new vi(t).set(new vi(n)),t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length);
    }function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=wu(n),o=t!==T,f=null===t,c=t===t,a=wu(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Ur(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Li(i-o,0),l=Ku(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Br(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Li(i-f,0),s=Ku(l+a);
        for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Lr(n,t){var r=-1,e=n.length;for(t||(t=Ku(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,po(n),t)}function Mr(n,t){return Cr(n,_o(n),t)}function Tr(n,r){return function(e,u){var i=ff(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o);
    }}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Qu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!su(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Qu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){var u=-1,i=Qu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
    }return t}}function Pr(n,t,r){function e(){return(this&&this!==$n&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Iu(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Mu(Du(t).replace(En,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
        return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=eo(n.prototype),t=n.apply(r,t);return du(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Ku(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:B(f,a),o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==$n&&this instanceof u?i:t,this,f);
    }var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Qu(t);if(!su(t)){var i=ye(r,3);t=Wu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ti("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?ho(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
        return function(){var n=arguments,e=n[0];if(o&&1==n.length&&ff(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Ku(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Ur(y,e,u,_)),i&&(y=Br(y,i,o,_)),d-=x,_&&d<a)return j=B(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ci(f.length,x),m=Lr(y);w--;){
        var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==$n&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Ut(r,n,t(e),{})}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
        return r=c(r,E(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Oi(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Ku(l+c),h=this&&this!==$n&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
        e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=Au(t),r===T?(r=t,t=0):r=Au(r),e=e===T?t<r?1:-1:Au(e);var u=-1;r=Li(Oi((r-t)/(e||1)),0);for(var i=Ku(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Su(t),r=Su(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&yo(r,u),r.placeholder=e,Le(r,n,t)}function ie(n){
        var t=Yu[n];return function(n,r){if(n=Su(n),r=null==r?0:Ci(ku(r),292)){var e=(Iu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Iu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=vo(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):k(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ti("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Li(ku(o),0),f=f===T?f:ku(f),a-=u?u.length:0,64&t){
        var l=e,s=u;e=u=T}var h=c?T:ho(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Ur(e,r,h[4]):r,i[4]=e?B(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Br(e,r,h[6]):r,i[6]=e?B(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ci(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
        r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Li(i[9]-a,0),!f&&24&t&&(t&=-25),c=t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),Le((h?co:yo)(c,i),n,t)}function ce(n,t,r,e){return n===T||lu(n,ei[r])&&!oi.call(e,r)?t:n}function ae(n,t,r,e,u,i){return du(n)&&du(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return xu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;
        var c=-1,a=true,l=2&r?new Nn:T;for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":
        if(n.byteLength!=t.byteLength||!i(new vi(n),new vi(t)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return lu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=L),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(to)return to.call(n)==to.call(t)}
        return false}function pe(n){return xo(Ue(n,T,Ze),n+"")}function _e(n){return St(n,Wu,po)}function ve(n){return St(n,Uu,_o)}function ge(n){for(var t=n.name+"",r=Gi[t],e=oi.call(Gi,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(oi.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||Fu,n=n===Fu?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
    }function xe(n){for(var t=Wu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!du(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=Me(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&gu(u)&&Se(o,u)&&(ff(n)||of(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&oi.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
        return typeof n.constructor!="function"||ze(n)?{}:eo(di(n))}function ke(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
        case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return to?Qu(to.call(n)):{}}}function Ee(n){return ff(n)||of(n)||!!(ji&&n&&n[ji])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
    }function Oe(n,t,r){if(!du(r))return false;var e=typeof t;return!!("number"==e?su(r)&&Se(t,r.length):"string"==e&&t in r)&&lu(r[t],n)}function Ie(n,t){if(ff(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!wu(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Qu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Ln.prototype&&(n===r||(t=ho(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ei)}function We(n,t){
        return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Qu(r)))}}function Ue(t,r,e){return r=Li(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Li(u.length-r,0),f=Ku(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Ku(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Be(n,t){if("__proto__"!=t)return n[t]}function Le(n,t,r){var e=t+"";t=xo;var u,i=$e;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),
        t(n,e)}function Ce(n){var t=0,r=0;return function(){var e=Di(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function De(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function Me(n){if(typeof n=="string"||wu(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Te(n){if(null!=n){try{return ii.call(n)}catch(n){}return n+""}return""}function $e(n,t){return r(N,function(r){var e="_."+r[0];
        t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function Fe(n){if(n instanceof Ln)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Lr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ne(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),_(n,ye(t,3),r)):-1}function Pe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=ku(r),u=0>r?Li(e+u,0):Ci(u,e-1)),_(n,ye(t,3),u,true)}function Ze(n){return(null==n?0:n.length)?wt(n,1):[];
    }function qe(n){return n&&n.length?n[0]:T}function Ve(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ke(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ge(n){return null==n?n:$i.call(n)}function He(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(hu(n))return t=Li(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function Je(t,r){if(!t||!t.length)return[];var e=He(t);return null==r?e:c(e,function(t){return n(r,T,t)})}function Ye(n){return n=An(n),n.__chain__=true,n;
    }function Qe(n,t){return t(n)}function Xe(){return this}function nu(n,t){return(ff(n)?r:uo)(n,ye(t,3))}function tu(n,t){return(ff(n)?e:io)(n,ye(t,3))}function ru(n,t){return(ff(n)?c:Gt)(n,ye(t,3))}function eu(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function uu(n,t){var r;if(typeof t!="function")throw new ti("Expected a function");return n=ku(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),r}}function iu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=iu.placeholder,
        n}function ou(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=ou.placeholder,n}function fu(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Go();if(u(n))return o(n);var r,e=bo;r=n-_,n=t-(n-p),r=g?Ci(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Go(),r=u(n);if(c=arguments,a=this,p=n,r){if(h===T)return _=n=p,h=bo(i,t),v?e(n):s;if(g)return h=bo(i,t),e(p)}return h===T&&(h=bo(i,t)),
        s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ti("Expected a function");return t=Su(t)||0,du(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Li(Su(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&lo(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Go())},f}function cu(n,t){if(typeof n!="function"||null!=t&&typeof t!="function")throw new ti("Expected a function");var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
        r.cache=i.set(u,e)||i,e)};return r.cache=new(cu.Cache||Fn),r}function au(n){if(typeof n!="function")throw new ti("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function lu(n,t){return n===t||n!==n&&t!==t}function su(n){return null!=n&&gu(n.length)&&!_u(n)}function hu(n){return yu(n)&&su(n)}function pu(n){if(!yu(n))return false;
        var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!xu(n)}function _u(n){return!!du(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function vu(n){return typeof n=="number"&&n==ku(n)}function gu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function du(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function yu(n){return null!=n&&typeof n=="object";
    }function bu(n){return typeof n=="number"||yu(n)&&"[object Number]"==Ot(n)}function xu(n){return!(!yu(n)||"[object Object]"!=Ot(n))&&(n=di(n),null===n||(n=oi.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ii.call(n)==li))}function ju(n){return typeof n=="string"||!ff(n)&&yu(n)&&"[object String]"==Ot(n)}function wu(n){return typeof n=="symbol"||yu(n)&&"[object Symbol]"==Ot(n)}function mu(n){if(!n)return[];if(su(n))return ju(n)?M(n):Lr(n);if(wi&&n[wi]){n=n[wi]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);
        return r}return t=vo(n),("[object Map]"==t?W:"[object Set]"==t?L:Lu)(n)}function Au(n){return n?(n=Su(n),n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function ku(n){n=Au(n);var t=n%1;return n===n?t?n-t:n:0}function Eu(n){return n?pt(ku(n),0,4294967295):0}function Su(n){if(typeof n=="number")return n;if(wu(n))return F;if(du(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=du(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Dn(n.slice(2),t?2:8):vn.test(n)?F:+n;
    }function Ou(n){return Cr(n,Uu(n))}function Iu(n){return null==n?"":yr(n)}function Ru(n,t,r){return n=null==n?T:Et(n,t),n===T?r:n}function zu(n,t){return null!=n&&we(n,t,zt)}function Wu(n){return su(n)?qn(n):Vt(n)}function Uu(n){if(su(n))n=qn(n,true);else if(du(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&oi.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in Qu(n))t.push(r);n=t}return n}function Bu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){
        return t(n,r[0])})}function Lu(n){return null==n?[]:S(n,Wu(n))}function Cu(n){return $f(Iu(n).toLowerCase())}function Du(n){return(n=Iu(n))&&n.replace(xn,Xn).replace(Sn,"")}function Mu(n,t,r){return n=Iu(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Tu(n){return function(){return n}}function $u(n){return n}function Fu(n){return qt(typeof n=="function"?n:_t(n,1))}function Nu(n,t,e){var u=Wu(t),i=kt(t,u);null!=e||du(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=kt(t,Wu(t)));
        var o=!(du(e)&&"chain"in e&&!e.chain),f=_u(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Lr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Pu(){}function Zu(n){return Ie(n)?b(Me(n)):rr(n)}function qu(){return[]}function Vu(){return false}mn=null==mn?$n:rt.defaults($n.Object(),mn,rt.pick($n,Wn));var Ku=mn.Array,Gu=mn.Date,Hu=mn.Error,Ju=mn.Function,Yu=mn.Math,Qu=mn.Object,Xu=mn.RegExp,ni=mn.String,ti=mn.TypeError,ri=Ku.prototype,ei=Qu.prototype,ui=mn["__core-js_shared__"],ii=Ju.prototype.toString,oi=ei.hasOwnProperty,fi=0,ci=function(){
        var n=/[^.]+$/.exec(ui&&ui.keys&&ui.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ai=ei.toString,li=ii.call(Qu),si=$n._,hi=Xu("^"+ii.call(oi).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pi=Pn?mn.Buffer:T,_i=mn.Symbol,vi=mn.Uint8Array,gi=pi?pi.allocUnsafe:T,di=U(Qu.getPrototypeOf,Qu),yi=Qu.create,bi=ei.propertyIsEnumerable,xi=ri.splice,ji=_i?_i.isConcatSpreadable:T,wi=_i?_i.iterator:T,mi=_i?_i.toStringTag:T,Ai=function(){try{var n=je(Qu,"defineProperty");
        return n({},"",{}),n}catch(n){}}(),ki=mn.clearTimeout!==$n.clearTimeout&&mn.clearTimeout,Ei=Gu&&Gu.now!==$n.Date.now&&Gu.now,Si=mn.setTimeout!==$n.setTimeout&&mn.setTimeout,Oi=Yu.ceil,Ii=Yu.floor,Ri=Qu.getOwnPropertySymbols,zi=pi?pi.isBuffer:T,Wi=mn.isFinite,Ui=ri.join,Bi=U(Qu.keys,Qu),Li=Yu.max,Ci=Yu.min,Di=Gu.now,Mi=mn.parseInt,Ti=Yu.random,$i=ri.reverse,Fi=je(mn,"DataView"),Ni=je(mn,"Map"),Pi=je(mn,"Promise"),Zi=je(mn,"Set"),qi=je(mn,"WeakMap"),Vi=je(Qu,"create"),Ki=qi&&new qi,Gi={},Hi=Te(Fi),Ji=Te(Ni),Yi=Te(Pi),Qi=Te(Zi),Xi=Te(qi),no=_i?_i.prototype:T,to=no?no.valueOf:T,ro=no?no.toString:T,eo=function(){
        function n(){}return function(t){return du(t)?yi?yi(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=kn.prototype,An.prototype.constructor=An,On.prototype=eo(kn.prototype),On.prototype.constructor=On,Ln.prototype=eo(kn.prototype),Ln.prototype.constructor=Ln,Mn.prototype.clear=function(){this.__data__=Vi?Vi(null):{},this.size=0},Mn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
        this.size-=n?1:0,n},Mn.prototype.get=function(n){var t=this.__data__;return Vi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):oi.call(t,n)?t[n]:T},Mn.prototype.has=function(n){var t=this.__data__;return Vi?t[n]!==T:oi.call(t,n)},Mn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Vi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():xi.call(t,n,1),
        --this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Fn.prototype.clear=function(){this.size=0,this.__data__={hash:new Mn,map:new(Ni||Tn),string:new Mn}},Fn.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},Fn.prototype.get=function(n){return be(this,n).get(n);
    },Fn.prototype.has=function(n){return be(this,n).has(n)},Fn.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Zn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Zn.prototype.get=function(n){
        return this.__data__.get(n)},Zn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Ni||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Fn(e)}return r.set(n,t),this.size=r.size,this};var uo=Fr(mt),io=Fr(At,true),oo=Nr(),fo=Nr(true),co=Ki?function(n,t){return Ki.set(n,t),n}:$u,ao=Ai?function(n,t){return Ai(n,"toString",{configurable:true,enumerable:false,value:Tu(t),writable:true})}:$u,lo=ki||function(n){
        return $n.clearTimeout(n)},so=Zi&&1/L(new Zi([,-0]))[1]==$?function(n){return new Zi(n)}:Pu,ho=Ki?function(n){return Ki.get(n)}:Pu,po=Ri?function(n){return null==n?[]:(n=Qu(n),i(Ri(n),function(t){return bi.call(n,t)}))}:qu,_o=Ri?function(n){for(var t=[];n;)a(t,po(n)),n=di(n);return t}:qu,vo=Ot;(Fi&&"[object DataView]"!=vo(new Fi(new ArrayBuffer(1)))||Ni&&"[object Map]"!=vo(new Ni)||Pi&&"[object Promise]"!=vo(Pi.resolve())||Zi&&"[object Set]"!=vo(new Zi)||qi&&"[object WeakMap]"!=vo(new qi))&&(vo=function(n){
        var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Te(n):"")switch(n){case Hi:return"[object DataView]";case Ji:return"[object Map]";case Yi:return"[object Promise]";case Qi:return"[object Set]";case Xi:return"[object WeakMap]"}return t});var go=ui?_u:Vu,yo=Ce(co),bo=Si||function(n,t){return $n.setTimeout(n,t)},xo=Ce(ao),jo=function(n){n=cu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
        t.push(e?u.replace(hn,"$1"):r||n)}),t}),wo=fr(function(n,t){return hu(n)?yt(n,wt(t,1,hu,true)):[]}),mo=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),ye(r,2)):[]}),Ao=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),T,r):[]}),ko=fr(function(n){var t=c(n,kr);return t.length&&t[0]===n[0]?Wt(t):[]}),Eo=fr(function(n){var t=Ve(n),r=c(n,kr);return t===Ve(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),So=fr(function(n){var t=Ve(n),r=c(n,kr);return(t=typeof t=="function"?t:T)&&r.pop(),
        r.length&&r[0]===n[0]?Wt(r,T,t):[]}),Oo=fr(Ke),Io=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Ro=fr(function(n){return br(wt(n,1,hu,true))}),zo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),br(wt(n,1,hu,true),ye(t,2))}),Wo=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return br(wt(n,1,hu,true),T,t)}),Uo=fr(function(n,t){return hu(n)?yt(n,t):[]}),Bo=fr(function(n){return mr(i(n,hu))}),Lo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),
        mr(i(n,hu),ye(t,2))}),Co=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return mr(i(n,hu),T,t)}),Do=fr(He),Mo=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return Je(n,t)}),To=pe(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return ht(t,n)};return!(1<t||this.__actions__.length)&&e instanceof Ln&&Se(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qe,args:[u],thisArg:T}),new On(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(T),
        n})):this.thru(u)}),$o=Tr(function(n,t,r){oi.call(n,r)?++n[r]:st(n,r,1)}),Fo=Gr(Ne),No=Gr(Pe),Po=Tr(function(n,t,r){oi.call(n,r)?n[r].push(t):st(n,r,[t])}),Zo=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=su(t)?Ku(t.length):[];return uo(t,function(t){o[++u]=i?n(r,t,e):Bt(t,r,e)}),o}),qo=Tr(function(n,t,r){st(n,r,t)}),Vo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ko=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
        Xt(n,wt(t,1),[])}),Go=Ei||function(){return $n.Date.now()},Ho=fr(function(n,t,r){var e=1;if(r.length)var u=B(r,de(Ho)),e=32|e;return fe(n,e,t,r,u)}),Jo=fr(function(n,t,r){var e=3;if(r.length)var u=B(r,de(Jo)),e=32|e;return fe(t,e,n,r,u)}),Yo=fr(function(n,t){return dt(n,1,t)}),Qo=fr(function(n,t,r){return dt(n,Su(t)||0,r)});cu.Cache=Fn;var Xo=fr(function(t,r){r=1==r.length&&ff(r[0])?c(r[0],E(ye())):c(wt(r,1),E(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ci(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
        return n(t,this,u)})}),nf=fr(function(n,t){return fe(n,32,T,t,B(t,de(nf)))}),tf=fr(function(n,t){return fe(n,64,T,t,B(t,de(tf)))}),rf=pe(function(n,t){return fe(n,256,T,T,T,t)}),ef=ee(It),uf=ee(function(n,t){return n>=t}),of=Lt(function(){return arguments}())?Lt:function(n){return yu(n)&&oi.call(n,"callee")&&!bi.call(n,"callee")},ff=Ku.isArray,cf=Vn?E(Vn):Ct,af=zi||Vu,lf=Kn?E(Kn):Dt,sf=Gn?E(Gn):Tt,hf=Hn?E(Hn):Nt,pf=Jn?E(Jn):Pt,_f=Yn?E(Yn):Zt,vf=ee(Kt),gf=ee(function(n,t){return n<=t}),df=$r(function(n,t){
        if(ze(t)||su(t))Cr(t,Wu(t),n);else for(var r in t)oi.call(t,r)&&ot(n,r,t[r])}),yf=$r(function(n,t){Cr(t,Uu(t),n)}),bf=$r(function(n,t,r,e){Cr(t,Uu(t),n,e)}),xf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),jf=pe(ht),wf=fr(function(n,t){n=Qu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Uu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||lu(a,ei[c])&&!oi.call(n,c))&&(n[c]=u[c])}return n}),mf=fr(function(t){return t.push(T,ae),n(Of,T,t)}),Af=Yr(function(n,t,r){
        null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),n[t]=r},Tu($u)),kf=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),oi.call(n,t)?n[t].push(r):n[t]=[r]},ye),Ef=fr(Bt),Sf=$r(function(n,t,r){Yt(n,t,r)}),Of=$r(function(n,t,r,e){Yt(n,t,r,e)}),If=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),Rf=pe(function(n,t){return null==n?{}:nr(n,t);
    }),zf=oe(Wu),Wf=oe(Uu),Uf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Cu(t):t)}),Bf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Lf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Cf=Zr("toLowerCase"),Df=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Mf=qr(function(n,t,r){return n+(r?" ":"")+$f(t)}),Tf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),$f=Zr("toUpperCase"),Ff=fr(function(t,r){try{return n(t,T,r)}catch(n){return pu(n)?n:new Hu(n)}}),Nf=pe(function(n,t){
        return r(t,function(t){t=Me(t),st(n,t,Ho(n[t],n))}),n}),Pf=Hr(),Zf=Hr(true),qf=fr(function(n,t){return function(r){return Bt(r,n,t)}}),Vf=fr(function(n,t){return function(r){return Bt(n,r,t)}}),Kf=Xr(c),Gf=Xr(u),Hf=Xr(h),Jf=re(),Yf=re(true),Qf=Qr(function(n,t){return n+t},0),Xf=ie("ceil"),nc=Qr(function(n,t){return n/t},1),tc=ie("floor"),rc=Qr(function(n,t){return n*t},1),ec=ie("round"),uc=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ti("Expected a function");
        return n=ku(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=eu,An.assign=df,An.assignIn=yf,An.assignInWith=bf,An.assignWith=xf,An.at=jf,An.before=uu,An.bind=Ho,An.bindAll=Nf,An.bindKey=Jo,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return ff(n)?n:[n]},An.chain=Ye,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Li(ku(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Ku(Oi(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
        var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Ku(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(ff(r)?Lr(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ti("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Tu,
        An.countBy=$o,An.create=function(n,t){var r=eo(n);return null==t?r:at(r,t)},An.curry=iu,An.curryRight=ou,An.debounce=fu,An.defaults=wf,An.defaultsDeep=mf,An.defer=Yo,An.delay=Qo,An.difference=wo,An.differenceBy=mo,An.differenceWith=Ao,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
    },An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=ku(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:ku(e),0>e&&(e+=u),e=r>e?0:Eu(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(ff(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(ru(n,t),1)},An.flatMapDeep=function(n,t){return wt(ru(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:ku(r),
        wt(ru(n,t),r)},An.flatten=Ze,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:ku(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Pf,An.flowRight=Zf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:kt(n,Wu(n))},An.functionsIn=function(n){return null==n?[]:kt(n,Uu(n))},An.groupBy=Po,An.initial=function(n){
        return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=ko,An.intersectionBy=Eo,An.intersectionWith=So,An.invert=Af,An.invertBy=kf,An.invokeMap=Zo,An.iteratee=Fu,An.keyBy=qo,An.keys=Wu,An.keysIn=Uu,An.map=ru,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=cu,
        An.merge=Sf,An.mergeWith=Of,An.method=qf,An.methodOf=Vf,An.mixin=Nu,An.negate=au,An.nthArg=function(n){return n=ku(n),fr(function(t){return Qt(t,n)})},An.omit=If,An.omitBy=function(n,t){return Bu(n,au(ye(t)))},An.once=function(n){return uu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(ff(t)||(t=null==t?[]:[t]),r=e?T:r,ff(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Kf,An.overArgs=Xo,An.overEvery=Gf,An.overSome=Hf,An.partial=nf,An.partialRight=tf,An.partition=Vo,An.pick=Rf,An.pickBy=Bu,An.property=Zu,
        An.propertyOf=function(n){return function(t){return null==n?T:Et(n,t)}},An.pull=Oo,An.pullAll=Ke,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Io,An.range=Jf,An.rangeRight=Yf,An.rearg=rf,An.reject=function(n,t){return(ff(n)?i:jt)(n,au(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
        u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ti("Expected a function");return t=t===T?t:ku(t),fr(n,t)},An.reverse=Ge,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),(ff(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(ff(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
        r=e):(t=null==t?0:ku(t),r=r===T?e:ku(r)),hr(n,t,r)):[]},An.sortBy=Ko,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Iu(n))&&(typeof t=="string"||null!=t&&!hf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ti("Expected a function");return r=null==r?0:Li(ku(r),0),
        fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:ku(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
        n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ti("Expected a function");return du(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),fu(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Qe,An.toArray=mu,An.toPairs=zf,An.toPairsIn=Wf,An.toPath=function(n){return ff(n)?c(n,Me):wu(n)?[n]:Lr(jo(Iu(n)))},An.toPlainObject=Ou,An.transform=function(n,t,e){var u=ff(n),i=u||af(n)||_f(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:du(n)&&_u(o)?eo(di(n)):{};
    }return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return eu(n,1)},An.union=Ro,An.unionBy=zo,An.unionWith=Wo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=He,An.unzipWith=Je,An.update=function(n,t,r){return null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),void 0)),n},An.updateWith=function(n,t,r,e){
        return e=typeof e=="function"?e:T,null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),e)),n},An.values=Lu,An.valuesIn=function(n){return null==n?[]:S(n,Uu(n))},An.without=Uo,An.words=Mu,An.wrap=function(n,t){return nf(Er(t),n)},An.xor=Bo,An.xorBy=Lo,An.xorWith=Co,An.zip=Do,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Mo,An.entries=zf,An.entriesIn=Wf,An.extend=yf,An.extendWith=bf,Nu(An,An),An.add=Qf,An.attempt=Ff,An.camelCase=Uf,An.capitalize=Cu,
        An.ceil=Xf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Su(r),r=r===r?r:0),t!==T&&(t=Su(t),t=t===t?t:0),pt(Su(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,Wu(t))},An.deburr=Du,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=nc,An.endsWith=function(n,t,r){
            n=Iu(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(ku(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=lu,An.escape=function(n){return(n=Iu(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Iu(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=ff(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=Fo,An.findIndex=Ne,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=No,An.findLastIndex=Pe,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
        },An.floor=tc,An.forEach=nu,An.forEachRight=tu,An.forIn=function(n,t){return null==n?n:oo(n,ye(t,3),Uu)},An.forInRight=function(n,t){return null==n?n:fo(n,ye(t,3),Uu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Ru,An.gt=ef,An.gte=uf,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=zu,An.head=qe,An.identity=$u,An.includes=function(n,t,r,e){return n=su(n)?n:Lu(n),r=r&&!e?ku(r):0,e=n.length,0>r&&(r=Li(e+r,0)),ju(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
        },An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=Au(t),r===T?(r=t,t=0):r=Au(r),n=Su(n),n>=Ci(t,r)&&n<Li(t,r)},An.invoke=Ef,An.isArguments=of,An.isArray=ff,An.isArrayBuffer=cf,An.isArrayLike=su,An.isArrayLikeObject=hu,An.isBoolean=function(n){return true===n||false===n||yu(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=af,An.isDate=lf,An.isElement=function(n){return yu(n)&&1===n.nodeType&&!xu(n)},An.isEmpty=function(n){
            if(null==n)return true;if(su(n)&&(ff(n)||typeof n=="string"||typeof n.splice=="function"||af(n)||_f(n)||of(n)))return!n.length;var t=vo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(oi.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=pu,An.isFinite=function(n){return typeof n=="number"&&Wi(n)},An.isFunction=_u,
        An.isInteger=vu,An.isLength=gu,An.isMap=sf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return bu(n)&&n!=+n},An.isNative=function(n){if(go(n))throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=bu,An.isObject=du,An.isObjectLike=yu,An.isPlainObject=xu,An.isRegExp=hf,
        An.isSafeInteger=function(n){return vu(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=pf,An.isString=ju,An.isSymbol=wu,An.isTypedArray=_f,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return yu(n)&&"[object WeakMap]"==vo(n)},An.isWeakSet=function(n){return yu(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Ui.call(n,t)},An.kebabCase=Bf,An.last=Ve,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=ku(r),u=0>u?Li(e+u,0):Ci(u,e-1)),
        t===t)n:{for(r=u+1;r--;)if(n[r]===t){n=r;break n}n=r}else n=_(n,d,u,true);return n},An.lowerCase=Lf,An.lowerFirst=Cf,An.lt=vf,An.lte=gf,An.max=function(n){return n&&n.length?xt(n,$u,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,$u)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,$u,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=qu,An.stubFalse=Vu,An.stubObject=function(){
            return{}},An.stubString=function(){return""},An.stubTrue=function(){return true},An.multiply=rc,An.nth=function(n,t){return n&&n.length?Qt(n,ku(t)):T},An.noConflict=function(){return $n._===this&&($n._=si),this},An.noop=Pu,An.now=Go,An.pad=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Ii(t),r)+n+ne(Oi(t),r))},An.padEnd=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n;
        },An.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Mi(Iu(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=Au(n),t===T?(t=n,n=0):t=Au(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Ti(),Ci(n+r*(t-n+Cn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=ff(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,uo)},An.reduceRight=function(n,t,r){
            var e=ff(n)?s:j,u=3>arguments.length;return e(n,ye(t,4),r,u,io)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),or(Iu(n),t)},An.replace=function(){var n=arguments,t=Iu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[Me(t[e])];i===T&&(e=u,i=r),n=_u(i)?i.call(n):i}return n},An.round=ec,An.runInContext=x,An.sample=function(n){return(ff(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;
            if(su(n))return ju(n)?D(n):n.length;var t=vo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Df,An.some=function(n,t,r){var e=ff(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&lu(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){
            return vr(n,t,ye(r,2),true)},An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(lu(n[r],t))return r}return-1},An.startCase=Mf,An.startsWith=function(n,t,r){return n=Iu(n),r=null==r?0:pt(ku(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=uc,An.sum=function(n){return n&&n.length?m(n,$u):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Iu(n),t=bf({},t,e,ce),r=bf({},t.imports,e.imports,ce);
            var u,i,o=Wu(r),f=S(r,o),c=0;r=t.interpolate||jn;var a="__p+='";r=Xu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),
                a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Ff(function(){return Ju(o,l+"return "+a).apply(T,f)}),t.source=a,pu(t))throw t;return t},An.times=function(n,t){if(n=ku(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ci(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=Au,An.toInteger=ku,An.toLength=Eu,An.toLower=function(n){
            return Iu(n).toLowerCase()},An.toNumber=Su,An.toSafeInteger=function(n){return n?pt(ku(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Iu,An.toUpper=function(n){return Iu(n).toUpperCase()},An.trim=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){
            return(n=Iu(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(du(t))var u="separator"in t?t.separator:u,r="length"in t?ku(t.length):r,e="omission"in t?yr(t.omission):e;n=Iu(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),hf(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=Xu(u.source,Iu(_n.exec(u))+"g")),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Iu(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++fi;return Iu(n)+t},An.upperCase=Tf,An.upperFirst=$f,An.each=nu,An.eachRight=tu,An.first=qe,Nu(An,function(){var n={};return mt(An,function(t,r){oi.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false}),An.VERSION="4.17.11",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){
            An[n].placeholder=An}),r(["drop","take"],function(n,t){Ln.prototype[n]=function(r){r=r===T?1:Li(ku(r),0);var e=this.__filtered__&&!t?new Ln(this):this.clone();return e.__filtered__?e.__takeCount__=Ci(r,e.__takeCount__):e.__views__.push({size:Ci(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Ln.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Ln.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({
            iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Ln.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Ln.prototype[n]=function(){return this.__filtered__?new Ln(this):this[r](1)}}),Ln.prototype.compact=function(){return this.filter($u)},Ln.prototype.find=function(n){return this.filter(n).head()},Ln.prototype.findLast=function(n){return this.reverse().find(n);
        },Ln.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Ln(this):this.map(function(r){return Bt(r,n,t)})}),Ln.prototype.reject=function(n){return this.filter(au(ye(n)))},Ln.prototype.slice=function(n,t){n=ku(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Ln(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=ku(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Ln.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ln.prototype.toArray=function(){return this.take(4294967295);
        },mt(Ln.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Ln,c=o[0],l=f||ff(t),s=function(n){return n=u.apply(An,a([n],o)),e&&h?n[0]:n};l&&r&&typeof c=="function"&&1!=c.length&&(f=l=false);var h=this.__chain__,p=!!this.__actions__.length,c=i&&!h,f=f&&!p;return!i&&l?(t=f?t:new Ln(this),t=n.apply(t,o),t.__actions__.push({
            func:Qe,args:[s],thisArg:T}),new On(t,h)):c&&f?n.apply(this,o):(t=this.thru(s),c?e?t.value()[0]:t.value():t)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ri[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(ff(u)?u:[],n)}return this[r](function(r){return t.apply(ff(r)?r:[],n)})}}),mt(Ln.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";
            (Gi[e]||(Gi[e]=[])).push({name:t,func:r})}}),Gi[Jr(T,2).name]=[{name:"wrapper",func:T}],Ln.prototype.clone=function(){var n=new Ln(this.__wrapped__);return n.__actions__=Lr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Lr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Lr(this.__views__),n},Ln.prototype.reverse=function(){if(this.__filtered__){var n=new Ln(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n;
        },Ln.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=ff(t),u=0>r,i=e?t.length:0;n=0;for(var o=i,f=this.__views__,c=-1,a=f.length;++c<a;){var l=f[c],s=l.size;switch(l.type){case"drop":n+=s;break;case"dropRight":o-=s;break;case"take":o=Ci(o,n+s);break;case"takeRight":n=Li(n,o-s)}}if(n={start:n,end:o},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ci(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=To,An.prototype.chain=function(){return Ye(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=mu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){for(var t,r=this;r instanceof kn;){
            var e=Fe(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Ln?(this.__actions__.length&&(n=new Ln(this)),n=n.reverse(),n.__actions__.push({func:Qe,args:[Ge],thisArg:T}),new On(n,this.__chain__)):this.thru(Ge)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,wi&&(An.prototype[wi]=Xe),
        An}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($n._=rt, define(function(){return rt})):Nn?((Nn.exports=rt)._=rt,Fn._=rt):$n._=rt}).call(this);

/* eslint-enable */



//===========================================================================
// DKTools
//===========================================================================

/**
 * @global
 * @namespace DKTools
 * @type {Object}
 */
window.DKTools = {};

// properties

Object.defineProperties(DKTools, {

    /**
     * DKPlugins site url
     *
     * @constant
     * @type {String}
     * @memberof DKTools
     */
    SITE: { value: 'https://dk-plugins.ru' },

    /**
     * Version of DKTools
     *
     * @constant
     * @type {String}
     * @memberof DKTools
     */
    VERSION: { value: Imported['DKTools'] }

});



//===========================================================================
// DKTools.Utils
//===========================================================================

/**
 * The static class that defines utility methods
 * @class
 * @memberof DKTools
 */
DKTools.Utils = class {

    constructor() {
        return DKTools.Utils;
    }

    // initialize methods

    /**
     * Initializes the utils
     * @static
     */
    static initialize() {

        this.__tileSize();

        if (DKToolsParam.get('Debugging Console', 'Enabled')) {
            SceneManager.showDevTools();
        }

        if (DKToolsParam.get('Check Updates', 'Enabled')) {
            this._checkUpdates();
        }
    }

    // C methods

    /**
     * Checks the updates
     * @private
     * @static
     * @async
     */
    static async _checkUpdates() {
        if (!Utils.isNwjs() || !Utils.isTest()) {
            return;
        }

        let plugins = [];

        try {
            const params = { version: DKTools.VERSION, maker: Utils.RPGMAKER_NAME };
            const queryParams = Object.entries(params)
                                       .map(([key, value]) => `${key}=${value}`)
                                        .join('&');

            plugins = await DKTools.Network.fetchJson(`${DKTools.SITE}/plugins.php?${queryParams}`) || [];

            if (plugins.length === 0) {
                return;
            }
        } catch(e) {
            console.error('DKTools cannot check updates');

            return;
        }

        const showNewPlugins = DKToolsParam.get('Check Updates', 'Show New Plugins');

        plugins.forEach((plugin) => {
            const newVersion = plugin.version;

            if (DKTools.PluginManager.isRegistered(plugin.name)) {
                if (!DKTools.PluginManager.checkVersion(plugin.name, newVersion)) {
                    const currentVersion = DKTools.PluginManager.getVersion(plugin.name);
                    const args = [`Available a new ${plugin.beta ? 'beta ' : ''}version of ${plugin.name}: ${newVersion}\n`,
                        `Installed: ${currentVersion}\n`,
                        `Visit site: ${plugin.url}`];

                    if (plugin.download_url) {
                        args.push(`\nDownload: ${plugin.download_url}`)
                    }

                    if (plugin.download_demo_url) {
                        args.push(`\nDownload demo project: ${plugin.download_demo_url}`);
                    }

                    console.log.apply(console, args);
                }
            } else if (showNewPlugins) {
                const requirementsMet = plugin.requirements.length === 0 ||
                    plugin.requirements.every(
                        pluginName => DKTools.PluginManager.isRegistered(pluginName));

                if (!requirementsMet) {
                    return;
                }

                const args = [
                    `Try the new plugin: ${plugin.name}\n`,
                    `Description: ${plugin.description}\n`,
                    `Visit site: ${plugin.url} \n`];

                if (plugin.download_url) {
                    args.push(`\nDownload: ${plugin.download_url}`)
                }

                if (plugin.download_demo_url) {
                    args.push(`\nDownload demo project: ${plugin.download_demo_url}`);
                }

                console.log.apply(console, args);
            }
        });
    }

    // G methods

    /**
     * Returns the data for error logging
     * @private
     * @static
     * @return {Object} Data for error logging
     */
    static _getErrorLogData() {
        const scene = SceneManager._scene;
        const data = {};

        if (scene && scene.constructor.name) {
            data['Scene'] = scene.constructor.name;

            if (SceneManager.isCurrentScene(Scene_Map)) {
                const interpreter = $gameMap._interpreter;

                if (interpreter) {
                    if (interpreter._mapId > 0) {
                        data['Map ID'] = interpreter._mapId;
                    }

                    if (interpreter._eventId > 0) {
                        data['Event ID'] = interpreter._eventId;

                        const event = $gameMap.event(interpreter._eventId);

                        if (event) {
                            data['Event Page'] = event._pageIndex + 1;
                        }
                    }

                    if (interpreter._list && interpreter._list.length > 0) {
                        let command = interpreter._list[interpreter._index];

                        if (command && command.code === 0 && interpreter._index > 0) {
                            command = interpreter._list[interpreter._index - 1];
                        }

                        if (command && command.code > 0) {
                            data['Last Event Command'] = command.code;
                        }
                    }

                    if (interpreter._params && interpreter._params.length > 0) {
                        data['Params'] = JSON.stringify(interpreter._params);
                    }
                }
            }
        }

        return data;
    }

    // H methods

    /**
     * @private
     * @static
     */
    static __hideGrid() {
        if (this._gridSprite) {
            SceneManager._scene.removeChild(this._gridSprite);

            this._gridSprite = null;
        }
    }

    // I methods

    /**
     * Returns true if the value is a function
     * @static
     * @param {*} value - Value
     * @return {Boolean} Value is a function
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the value is a string
     * @static
     * @param {*} value - Value
     * @return {Boolean} Value is a string
     */
    static isString(value) {
        return !!value && typeof value === 'string';
    }

    // L methods

    /**
     * Logs the error to file
     * @static
     * @async
     * @param {Error | Object | String} error - Error
     * @param {String} error.name
     * @param {String} error.message
     * @param {String} [error.filename]
     * @param {String} [error.lineNumber]
     * @param {String} [error.columnNumber]
     * @param {String} [error.stack]
     */
    static async logError(error) {
        if (!error || !Utils.isNwjs()) {
            return;
        }

        const param = DKToolsParam.get('Errors Log') || {};
        const isTest = Utils.isTest();
        const enabled = param['Enabled'];

        if (enabled === 'None' ||
            enabled === 'Only Game' && isTest ||
            enabled === 'Only Test' && !isTest) {
            return;
        }

        const fs = DKTools.IO.fs;
        const os = DKTools.IO.os;

        if (!fs || !os) {
            return;
        }

        const fileSize = param['File Size'] * 1024 * 1024;
        const filename = param['Filename'];
        const file = new DKTools.IO.File(filename);
        const stats = await file.getStatsAsync().then(result => result.data);

        if (stats && stats.size > fileSize) {
            const newFilename = DKTools.IO.parsePath(filename).name;
            const now = new Date();
            const day = String(now.getDate()).padZero(2);
            const month = String(now.getMonth() + 1).padZero(2);
            const year = now.getFullYear();
            const hours = String(now.getHours()).padZero(2);
            const minutes = String(now.getMinutes()).padZero(2);
            const seconds = String(now.getSeconds()).padZero(2);

            await file.renameAsync(`${day}.${month}.${year}_${hours}.${minutes}.${seconds}_${newFilename}`);
        }

        const fileDescriptor = await fs.openSync(filename, 'a');
        const errorData = this._getErrorLogData();
        let data = `Date: ${new Date().toString()}` + os.EOL;

        _.forEach(errorData, (value, key) => {
            data += key + ': ' + value + os.EOL;
        });

        if (error instanceof Object) {
            data += `Name: ${error.name}` + os.EOL;
            data += `Message: ${error.message}` + os.EOL;

            if (error.filename !== undefined) {
                data += `Filename: ${error.filename}` + os.EOL;
            }

            if (error.lineNumber !== undefined) {
                data += `Line: ${error.lineNumber}` + os.EOL;
            }

            if (error.columnNumber !== undefined) {
                data += `Column: ${error.columnNumber}` + os.EOL;
            }

            data += `Stack: ${error.stack}` + os.EOL + os.EOL;
        } else {
            data += `Error: ${error}` + os.EOL + os.EOL;
        }

        await fs.writeSync(fileDescriptor, data);
        await fs.closeSync(fileDescriptor);
    }

    // M methods

    /**
     * Makes a screenshot
     * @static
     */
    static makeScreenshot() {
        if (!Utils.isNwjs()) {
            return;
        }

        const param = DKToolsParam.get('Screenshots');
        const path = param['Path'];
        const type = param['Type'];
        const quality = param['Quality'];
        const snap = SceneManager.snap();
        const urlData = snap.canvas.toDataURL('image/' + type, quality);
        const regex = new RegExp(`^data:image\/${type};base64,`);
        const data = urlData.replace(regex, '');
        const date = new Date();

        let filename = param['Filename'];

        filename = filename.replace(/%year/gi, date.getFullYear());
        filename = filename.replace(/%month/gi, date.getMonth() + 1);
        filename = filename.replace(/%day/gi, date.getDate());
        filename = filename.replace(/%hours/gi, date.getHours());
        filename = filename.replace(/%minutes/gi, date.getMinutes());
        filename = filename.replace(/%seconds/gi, date.getSeconds());

        const fullName = filename + '.' + type;
        const fullPath = DKTools.IO.normalizePath(path + '/' + fullName);

        const file = new DKTools.IO.File(fullPath);

        file.save(data, {
            createDirectory: true,
            options: 'base64',
            onSuccess: () => {
                console.log('The screenshot is saved with the name: ' + fullName);
            }
        });
    }

    // S methods

    /**
     * @private
     * @static
     */
    static __showGrid() {
        if (!Utils.isTest() || !DKToolsParam.get('Grid', 'Enabled')) {
            return;
        }

        const param = DKToolsParam.get('Grid');
        const sizes = param['Grid Sizes'] || [64, 48, 32, 16];

        if (this._gridSprite) {
            if (this._gridSprite._gridSizeIndex < sizes.length - 1) {
                this._gridSprite._gridSizeIndex++;
                this._gridSprite.refreshAll();
            } else {
                this.__hideGrid();
            }

            return;
        }


        let line = null;

        this._gridSprite = new DKTools.Sprite.Button(Graphics);

        this._gridSprite._gridSizeIndex = 0;

        this._gridSprite.addEvent({
            type: 'draw-all',
            onUpdate: () => {
                const width = Graphics.boxWidth;
                const height = Graphics.boxHeight;
                const color = param['Grid Color'];
                const lineWidth = param['Grid Width'];
                const size = sizes[this._gridSprite._gridSizeIndex];

                _.times(Math.ceil(width / size), (count) => {
                    this._gridSprite.drawLine({
                        x1: size * count,
                        y1: 0,
                        x2: size * count,
                        y2: height,
                        color,
                        lineWidth
                    });
                });

                _.times(Math.ceil(height / size), (count) => {
                    this._gridSprite.drawLine({
                        x1: 0,
                        y1: size * count,
                        x2: width,
                        y2: size * count,
                        color,
                        lineWidth
                    });
                });

                if (line) {
                    this._gridSprite.drawLine({
                        x1: line.x,
                        y1: line.y,
                        x2: TouchInput.x,
                        y2: TouchInput.y,
                        color: line.color,
                        lineWidth: param['Ruler Width']
                    });
                }
            }
        });

        this._gridSprite.addEvent({
            type: 'mouse-inside',
            onUpdate: () => {
                const mouseX = TouchInput.x;
                const mouseY = TouchInput.y;
                const width = Graphics.boxWidth;
                const height = Graphics.boxHeight;

                let x = mouseX + 8;
                let y = mouseY + 8;

                if (x + mouseSprite.width > width) {
                    x = mouseX - mouseSprite.width - 8;
                }

                if (y + mouseSprite.height > height) {
                    y = mouseY - mouseSprite.height - 8;
                }

                mouseSprite.move(x, y);
                mouseSprite.refreshAll();
            }
        });

        this._gridSprite.addEvent({
            type: 'mouse-down-middle',
            onUpdate: () => {
                if (!line) {
                    line = {
                        x: TouchInput.x,
                        y: TouchInput.y,
                        color: param['Ruler Color'] || ColorManager.randomColor()
                    };
                }

                this._gridSprite.refreshAll();
            }
        });

        this._gridSprite.addEvent({
            type: 'mouse-up-middle',
            onUpdate: () => {
                line = null;

                this._gridSprite.refreshAll();
            }
        });

        this._gridSprite.start(true);

        const mouseSprite = new DKTools.Sprite(0, 0, 220, '2');

        mouseSprite.addEvent({
            type: 'draw-all',
            onUpdate: () => {
                if (line) {
                    const mouse = { x: TouchInput.x, y: TouchInput.y };
                    const distance =
                        Math.floor(
                            Math.sqrt(
                                Math.pow(line.x - mouse.x, 2) + Math.pow(line.y - mouse.y, 2)));

                    mouseSprite.drawText(`line: ${distance} (${line.x}, ${line.y})`, { y: '0', align: 'left' });
                }

                mouseSprite.drawText(`x: ${TouchInput.x}, y: ${TouchInput.y}`,
                    { y: '1', align: 'left' });
            }
        });

        mouseSprite.start();

        this._gridSprite.addChild(mouseSprite);

        this._gridSprite.updateMouseInsideEvents();

        SceneManager._scene.addChild(this._gridSprite);
    }

    // T methods

    /**
     * @private
     * @static
     */
    static __tileSize() {
        const param = DKToolsParam.get('Tile Size') || {};

        if (param['Enabled']) {
            Tilemap.TILE_WIDTH = param['Size'];
            Tilemap.TILE_HEIGHT = param['Size'];
        }
    }

    /**
     * Throws the error
     * @static
     * @param {*} error - Error
     */
    static throwError(error) {
        setTimeout(() => {
            throw error;
        }, 0);
    }

    // Q methods

    /**
     * @private
     * @static
     */
    static __quickLoad() {
        if (!Utils.isTest() || !DKToolsParam.get('Quick Load', 'Enabled')) {
            return;
        }

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
    }

};



//===========================================================================
// DKTools.Utils.WebAudio
//===========================================================================

/**
 * The static class that defines utility methods for WebAudio class
 * @class
 * @memberof DKTools.Utils
 */
DKTools.Utils.WebAudio = class {

    // L methods

    /**
     * Loads and returns an audio file
     *
     * @static
     *
     * @param {String | WebAudio | Array | Object} object - Path to file or WebAudio or array with parameters or object with parameters
     * @param {String} [filename] - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading an audio file (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading an audio file
     *
     * @return {WebAudio | null} Loaded audio file or null
     */
    static load(object, filename, listener) {
        if (!object) {
            return null;
        } else if (object instanceof WebAudio) {
            return object;
        } else if (Array.isArray(object) || String(object) === '[object Arguments]') {
            return this.load.apply(this, object);
        } else if (object instanceof Object) {
            return this.load(object.folder, object.filename, object.listener);
        } else if (!DKTools.Utils.isString(object)) {
            return null;
        }

        // object - String (folder)
        const buffer = AudioManager.createBuffer(object, filename);

        if (DKTools.Utils.isFunction(listener)) {
            buffer.addLoadListener(listener);
        }

        return buffer;
    }

    /**
     * Loads and returns an audio file
     * Asynchronous version of DKTools.Utils.WebAudio.load
     * Promise resolves a loaded audio file
     *
     * @static
     * @async
     *
     * @param {String | WebAudio | Array | Object} object - Path to file or WebAudio or array with parameters or object with parameters
     * @param {String} [filename] - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading an audio file (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading an audio file
     *
     * @return {Promise<WebAudio | null>} Loaded audio file or null
     */
    static async loadAsync(object, filename, listener) {
        return new Promise((resolve) => {
            const buffer = this.load(object, filename, listener);

            if (buffer) {
                buffer.addLoadListener(() => resolve(buffer));
            } else {
                resolve(buffer);
            }
        });
    }

    /**
     * Loads a audio files and call the callback function when all audio files are ready
     *
     * @static
     *
     * @param {WebAudio[] | Object[]} buffers - Audio files to load
     * @param {Function} onLoadAllBuffers - Function that is called when all audio files are loaded and ready
     * @param {Function} [onLoadSomeBuffer] - Function that is called when some audio file are loaded and ready
     *
     * @param {String} object[].folder - Path to file
     * @param {String} object[].filename - Name of file
     * @param {Function} [object[].listener] - Function of processing after loading an audio file
     *
     * @example
     * var buffers = [];
     * buffers[0] = AudioManager.createBuffer('bgm', 'Battle1');
     * buffers[1] = {
     *  folder: 'bgm',
     *  filename: 'Battle2'
     * };
     *
     * DKTools.Utils.WebAudio.loadBuffers(buffers, function(allBuffers) {
     *     // all loaded buffers
     * });
     */
    static loadBuffers(buffers, onLoadAllBuffers, onLoadSomeBuffer) {
        if (!DKTools.Utils.isFunction(onLoadAllBuffers)) {
            return;
        }

        buffers = buffers.map(buffer => this.load(buffer));

        const loadedBuffers = [];
        let loaded = 0;

        const loadListener = (index, loadedBuffer) => {
            if (!onLoadAllBuffers) {
                return;
            }

            loadedBuffers[index] = loadedBuffer;
            loaded++;

            if (DKTools.Utils.isFunction(onLoadSomeBuffer)) {
                onLoadSomeBuffer(loadedBuffer, loadedBuffers, buffers);
            }

            if (buffers.length === loaded) {
                onLoadAllBuffers(buffers);

                onLoadAllBuffers = null;
            }
        };

        buffers.forEach((buffer, index) => {
            if (buffer instanceof WebAudio) {
                buffer.addLoadListener(buffer => loadListener(index, buffer));
            } else {
                loadListener(index, buffer);
            }
        });
    }

    /**
     * Asynchronously loads an audio files
     * Promise resolves a loaded audio files
     *
     * @static
     * @async
     *
     * @param {WebAudio[] | Object[]} buffers - Audio files to load
     *
     * @param {String} object[].folder - Path to file
     * @param {String} object[].filename - Name of file
     * @param {Function} [object[].listener] - Function of processing after loading an audio file
     *
     * @return {Promise<WebAudio[]>} Loaded audio files
     */
    static async loadBuffersAsync(buffers) {
        return Promise.all(buffers.map(buffer => this.loadAsync(buffer)));
    }

};



//===========================================================================
// DKTools.Utils.Bitmap
//===========================================================================

/**
 * The static class that defines utility methods for Bitmap class
 * @class
 * @memberof DKTools.Utils
 */
DKTools.Utils.Bitmap = class {

    // D methods

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
     */
    static drawLine(bitmap, x1, y1, x2, y2, color = 'white', lineWidth = 1) {
        const context = bitmap.context;

        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.restore();

        bitmap.baseTexture.update();
    }

    // G methods

    /**
     * Returns base64 of the bitmap
     * @static
     * @param {Bitmap} bitmap - Bitmap
     * @return {String | null} Base64 of the bitmap
     */
    static getBase64(bitmap) {
        if (!bitmap || !bitmap.canvas) {
            return null;
        }

        return bitmap.canvas.toDataURL('image/png');
    }

    // L methods

    /**
     * Loads and returns a bitmap
     *
     * @static
     *
     * @param {String | Bitmap | Object} object - Path to file or Bitmap or object with parameters
     * @param {String | Object} filename - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     *
     * @return {Bitmap | null} Loaded bitmap or null
     */
    static load(object, filename, listener) {
        if (!object) {
            return null;
        } else if (object instanceof Bitmap) {
            return object;
        } else if (Array.isArray(object) || String(object) === '[object Arguments]') {
            return this.load.apply(this, object);
        } else if (object instanceof Object) {
            return this.load(object.folder, object.filename, object.listener);
        } else if (!DKTools.Utils.isString(object)) {
            return null;
        }

        // object - String (folder)
        const folder = DKTools.IO.normalizePath(object + '/', true);
        const bitmap = ImageManager.loadBitmap(folder, filename);

        if (DKTools.Utils.isFunction(listener)) {
            bitmap.addLoadListener(listener);
        }

        return bitmap;
    }

    /**
     * Loads and returns a bitmap
     * Asynchronous version of DKTools.Utils.Bitmap.load
     * Promise resolves a loaded bitmap
     *
     * @static
     * @async
     *
     * @param {String | Bitmap | Object} object - Path to file or Bitmap or object with parameters
     * @param {String | Object} [filename] - Name of file (if object is String)
     * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     *
     * @return {Promise<Bitmap | null>} Loaded bitmap or null
     */
    static async loadAsync(object, filename, listener) {
        return new Promise((resolve) => {
            const bitmap = this.load(object, filename, listener);

            if (bitmap) {
                bitmap.addLoadListener(() => resolve(bitmap));
            } else {
                resolve(bitmap);
            }
        });
    }

    /**
     * Loads a bitmaps and call the callback function when all bitmaps are ready
     *
     * @static
     *
     * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
     * @param {Function} onLoadAllBitmaps - Function that is called when all bitmaps are loaded and ready
     * @param {Function} [onLoadSomeBitmap] - Function that is called when some bitmap are loaded and ready
     *
     * @param {String} bitmaps[].folder - Path to file
     * @param {String} bitmaps[].filename - Name of file
     * @param {Function} [bitmaps[].listener] - Function of processing after loading a bitmap
     *
     * @example
     * var bitmaps = [];
     * bitmaps[0] = ImageManager.loadSystem('Window');
     * bitmaps[1] = {
     *  folder: 'img/system/',
     *  filename: 'IconSet'
     * };
     *
     * DKTools.Utils.Bitmap.loadBitmaps(bitmaps, (allBitmaps) => {
     *     // all loaded bitmaps
     * });
     */
    static loadBitmaps(bitmaps, onLoadAllBitmaps, onLoadSomeBitmap) {
        if (!DKTools.Utils.isFunction(onLoadAllBitmaps)) {
            return;
        }

        bitmaps = bitmaps.map(bitmap => this.load(bitmap));

        const loadedBitmaps = [];
        let loaded = 0;

        const loadListener = (index, loadedBitmap) => {
            if (!onLoadAllBitmaps) {
                return;
            }

            loadedBitmaps[index] = loadedBitmap;
            loaded++;

            if (DKTools.Utils.isFunction(onLoadSomeBitmap)) {
                onLoadSomeBitmap(loadedBitmap, loadedBitmaps, bitmaps);
            }

            if (bitmaps.length === loaded) {
                onLoadAllBitmaps(bitmaps);

                onLoadAllBitmaps = null;
            }
        };

        bitmaps.forEach((bitmap, index) => {
            if (bitmap instanceof Bitmap) {
                bitmap.addLoadListener(bitmap => loadListener(index, bitmap));
            } else {
                loadListener(index, bitmap);
            }
        });
    }

    /**
     * Asynchronously loads a bitmaps
     * Promise resolves a loaded bitmaps
     *
     * @static
     * @async
     *
     * @param {Bitmap[] | Object[]} bitmaps - Bitmaps to load
     *
     * @param {String} bitmaps[].folder - Path to file
     * @param {String} bitmaps[].filename - Name of file
     * @param {Function} [bitmaps[].listener] - Function of processing after loading a bitmap
     *
     * @return {Promise<Bitmap[]>} Loaded bitmaps
     */
    static async loadBitmapsAsync(bitmaps) {
        return Promise.all(bitmaps.map(bitmap => this.loadAsync(bitmap)));
    }

};



//===========================================================================
// DKTools.IO
//===========================================================================

/**
 * File system class
 * @class
 * @memberof DKTools
 */
DKTools.IO = class {

    constructor() {
        return DKTools.IO;
    }

    // initialize methods

    /**
     * @static
     */
    static initialize() {
        let projectPath = '';

        if (Utils.isNwjs()) {
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
            this._os = require('os');

            /**
             * @private
             * @readonly
             * @type {Object}
             */
            this._path = require('path');

            projectPath = this.joinPath(this._path.dirname(process.mainModule.filename), '/');
        }

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._projectPath = projectPath;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._mode = DKToolsParam.get('File System', 'Mode');

        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._stamp = {};

        this._loadStamp();
    }

    // A methods

    /**
     * Returns true if the absolute path exists
     * @static
     * @param {String} path - Path
     * @return {Boolean} Absolute path exists
     */
    static absolutePathExists(path) {
        if (Utils.isNwjs()) {
            return this._fs.existsSync(path);
        } else if (this.mode === DKTools.IO.MODE_NWJS_STAMP && path.startsWith(this._projectPath)) {
            if (this.isFile(path)) {
                return true;
            } else if (this.isDirectory(path)) {
                return true;
            }
        }

        return false;
    }

    // C methods

    /**
     * Creates the file system stamp
     * @private
     * @static
     */
    static async _createStamp() {
        if (!Utils.isTest() || !Utils.isNwjs() || this.mode === DKTools.IO.MODE_NWJS) {
            return;
        }

        const ignoredDirectories = DKToolsParam.get('File System', 'Ignored Directories')
                                                .map(path => new DKTools.IO.Directory(path));
        const directory = DKTools.IO.getRootDirectory();
        const file = new DKTools.IO.File('data/Stamp.json');
        const stamp = {};

        const processDirectory = async (directory) => {
            const entities = await directory.getAllAsync().then(result => result.data);

            for (const entity of entities) {
                const stats = await entity.getStatsAsync().then(result => result.data);
                const fullPath = entity.getFullPath().substring(1).split('\\');

                if (entity.isFile()) {
                    _.set(stamp, fullPath, { __stats__: { ...stats, type: 'file' } });
                } else {
                    _.set(stamp, fullPath, { __stats__: { ...stats, type: 'directory' } });
                }

                if (entity.isDirectory()) {
                    if (!ignoredDirectories.some(dir => dir.getFullPath() === directory.getFullPath())) {
                        await processDirectory(entity);
                    }
                }
            }
        };

        await processDirectory(directory);
        await file.saveJsonAsync(stamp, { compress: true });

        this._stamp = stamp;
    }

    // G methods

    /**
     * Returns the project directory
     * @static
     * @return {DKTools.IO.Directory} Project directory
     */
    static getRootDirectory() {
        return new DKTools.IO.Directory();
    }

    /**
     * Returns the absolute path to file or directory
     * @static
     * @param {String} path - Path
     * @return {String} Absolute path to file or directory
     */
    static getAbsolutePath(path) {
        const absolutePath = this.joinPath(this._projectPath, (path || ''));

        return this.normalizePath(absolutePath);
    }

    // I methods

    /**
     * Returns true if the full path is a file
     * @version 1.1.1
     * @static
     * @param {String} fullPath - Path to file
     * @return {Boolean} Full path is a file
     */
    static isFile(fullPath) {
        if (Utils.isNwjs()) {
            const absolutePath = this.getAbsolutePath(fullPath);

            if (this.absolutePathExists(absolutePath)) {
                return this._fs.lstatSync(absolutePath).isFile();
            }
        } else if (this.mode === DKTools.IO.MODE_NWJS_STAMP) {
            fullPath = decodeURIComponent(fullPath);

            const parts = this.normalizePath(fullPath).split('\\');
            const extension = _.last(parts);

            if (extension.includes('.')) {
                return _.get(this._stamp, parts.concat('__stats__'), {}).type === 'file';
            }
        }

        return false;
    }

    /**
     * Returns true if the full path is a directory
     * @version 1.1.1
     * @static
     * @param {String} fullPath - Path to directory
     * @return {Boolean} Full path is a directory
     */
    static isDirectory(fullPath) {
        if (Utils.isNwjs()) {
            const absolutePath = this.getAbsolutePath(fullPath);

            if (this.absolutePathExists(absolutePath)) {
                return this._fs.lstatSync(absolutePath).isDirectory();
            }
        } else if (this.mode === DKTools.IO.MODE_NWJS_STAMP) {
            fullPath = decodeURIComponent(fullPath);

            const parts = this.normalizePath(fullPath).split('\\').filter(part => !!part);
            const extension = _.last(parts);

            if (!extension.includes('.')) {
                return _.get(this._stamp, parts.concat('__stats__'), {}).type === 'directory';
            }
        }

        return false;
    }

    // J methods

    /**
     * Joins all given path segments together using the platform specific separator as a delimiter,
     * then normalizes the resulting path.
     * @static
     * @param {...String} paths - Path segments
     * @return {String}
     */
    static joinPath() {
        if (Utils.isNwjs()) {
            return this._path.join(...arguments);
        }

        const paths = _.filter(arguments, arg => DKTools.Utils.isString(arg));
        let joined = paths.join('\\');

        if (!/^[\\\/]{2}[^\\\/]/.test(paths[0])) {
            joined = joined.replace(/^[\\\/]{2,}/, '\\');
        }

        return this.normalizePath(joined);
    }

    // L methods

    /**
     * Loads the file system stamp
     * @private
     * @static
     */
    static _loadStamp() {
        if (Utils.isNwjs() || this.mode === DKTools.IO.MODE_NWJS) {
            return;
        }

        const file = new DKTools.IO.File('data/Stamp.json');

        file.loadJson({
            sync: true,
            decompress: true,
            onSuccess: (result) => {
                this._stamp = result.data || this._stamp;
            }
        });
    }

    // N methods

    /**
     * Returns a normalized path
     * @static
     * @param {String} path - Path for normalize
     * @param {Boolean} [reverseSlash=false] - Reversing slash
     * @return {String} Normalized path
     */
    static normalizePath(path, reverseSlash = false) {
        if (Utils.isNwjs()) {
            const normalizedPath = this._path.normalize(path);

            if (!reverseSlash) {
                return normalizedPath;
            }

            return normalizedPath.replace(/\\/g, '/');
        }

        const result = this._statPath(path),
            isUnc = result.isUnc,
            isAbsolute = result.isAbsolute;

        let device = result.device,
            tail = result.tail;

        const trailingSlash = /[\\\/]$/.test(tail);
        const parts = _.filter(tail.split(/[\\\/]+/), part => part && part !== '.');
        const tailParts = [];

        for (const p of parts) {
            if (p === '..') {
                if (tailParts.length > 0 && tailParts[tailParts.length - 1] !== '..') {
                    tailParts.pop();
                } else if (!isAbsolute) {
                    tailParts.push('..');
                }
            } else {
                tailParts.push(p);
            }
        }

        tail = tailParts.join('\\');

        if (!tail && !isAbsolute) {
            tail = '.';
        }

        if (tail && trailingSlash) {
            tail += '\\';
        }

        if (isUnc) {
            device = '\\\\' + device.replace(/^[\\\/]+/, '').replace(/[\\\/]+/g, '\\');
        }

        const normalizedPath = device + (isAbsolute ? '\\' : '') + tail;

        if (!reverseSlash) {
            return normalizedPath;
        }

        return normalizedPath.replace(/\\/g, '/');
    }

    // P methods

    /**
     * Returns an object whose properties represent significant elements of the path.
     * Trailing directory separators are ignored.
     * @static
     * @param {String} path - Path
     * @return {{ root: String, dir: String, base: String, ext: String, name: String }}
     */
    static parsePath(path) {
        if (Utils.isNwjs()) {
            return this._path.parse(path);
        }

        const allParts = this._splitPath(path);

        return {
            root: allParts[0],
            dir: allParts[0] + allParts[1].slice(0, -1),
            base: allParts[2],
            ext: allParts[3],
            name: allParts[2].slice(0, allParts[2].length - allParts[3].length)
        };
    }

    /**
     * Returns true if the path exists
     *
     * @static
     *
     * @param {String} path - Path
     *
     * @example
     * DKTools.IO.pathExists('img/system/'); // => true
     *
     * @return {Boolean} Path exists
     */
    static pathExists(path) {
        return this.absolutePathExists(this.getAbsolutePath(path));
    }

    // R methods

    /**
     * Reverses slashes on "/"
     * @static
     * @param {String} path - Path
     * @return {String} Path with reversed slashes "/"
     */
    static reverseSlashes(path) {
        return path.replace(/\\/g, '/');
    }

    // S methods

    /**
     * Returns the stats of the path
     * @private
     * @static
     * @param {String} path - Path
     * @return {{ device: String, isUnc: Boolean, isAbsolute: Boolean, tail: String }}
     */
    static _statPath(path) {
        const deviceRegex = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
            result = deviceRegex.exec(path),
            device = result[1] || '',
            isUnc = !!device && device[1] !== ':';

        return { device, isUnc, isAbsolute: isUnc || !!result[2], tail: result[3] };
    }

    /**
     * Splits the path
     * @private
     * @static
     * @param {String} path - Path
     * @return {String[]} Splitted path
     */
    static _splitPath(path) {
        const deviceRegex = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
            tailRegex = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/;

        const result = deviceRegex.exec(path),
            device = (result[1] || '') + (result[2] || ''),
            tail = result[3] || '';

        const result2 = tailRegex.exec(tail),
            dir = result2[1],
            basename = result2[2],
            ext = result2[3];

        return [device, dir, basename, ext];
    }

};

// properties

Object.defineProperties(DKTools.IO, {

    /**
     * File system
     * @readonly
     * @type {Object}
     * @memberof DKTools.IO
     */
    fs: {
        get: function() {
            return this._fs;
        },
        configurable: true
    },

    /**
     * OS
     * @readonly
     * @type {Object}
     * @memberof DKTools.IO
     */
    os: {
        get: function() {
            return this._os;
        },
        configurable: true
    },

    /**
     * Path
     * @readonly
     * @type {Object}
     * @memberof DKTools.IO
     */
    path: {
        get: function() {
            return this._path;
        },
        configurable: true
    },

    /**
     * Provides the platform-specific path segment separator
     * For mobile phones and browsers always return '/'
     * @readonly
     * @type {String}
     * @memberof DKTools.IO
     */
    sep: {
        get: function() {
            return Utils.isNwjs() ? this._path.sep : '/';
        },
        configurable: true
    },

    /**
     * Path to the project folder
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
     * File system mode
     * @readonly
     * @type {Number}
     * @memberof DKTools.IO
     */
    mode: {
        get: function() {
            return this._mode;
        },
        configurable: true
    },

    /**
     * File system stamp
     * @readonly
     * @type {Object}
     * @memberof DKTools.IO
     */
    stamp: {
        get: function() {
            return this._stamp;
        },
        configurable: true
    },

    /**
     * Operation completed successfully
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    OK: { value: 0 },

    /**
     * Expect until an asynchronous operation calls the callback function
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    EXPECT_CALLBACK: { value: 1 },

    /**
     * Platform is not equal to NW.js
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_NOT_LOCAL_MODE: { value: 2 },

    /**
     * Path does not exist
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_PATH_DOES_NOT_EXIST: { value: 3 },

    /**
     * The callback function is not available for an asynchronous operation
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_CALLBACK_IS_NOT_AVAILABLE: { value: 4 },

    /**
     * Directory already exists
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DIRECTORY_ALREADY_EXISTS: { value: 5 },

    /**
     * Directory is not empty
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DIRECTORY_IS_NOT_EMPTY: { value: 6 },

    /**
     * Overwriting is not available
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_OVERWRITING_IS_NOT_AVAILABLE: { value: 7 },

    /**
     * The options are not available for an operation
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_OPTIONS_ARE_NOT_AVAILABLE: { value: 8 },

    /**
     * Failed decompressing data
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_DECOMPRESSING_DATA: { value: 9 },

    /**
     * Failed parsing data
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    ERROR_PARSING_DATA: { value: 10 },

    /**
     * Nwjs + Stamp file system mode
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    MODE_NWJS_STAMP: { value: 0 },

    /**
     * Nwjs file system mode
     * @constant
     * @type {Number}
     * @memberof DKTools.IO
     */
    MODE_NWJS: { value: 1 }

});



//===========================================================================
// DKTools.IO.Entity
//===========================================================================

/**
 * Abstract class of entity (file or directory)
 *
 * @class
 * @abstract
 * @memberof DKTools.IO
 *
 * @example
 * var file = new DKTools.IO.File('index.html');
 *
 * @example
 * var directory = new DKTools.IO.Directory('img/system/');
 */
DKTools.IO.Entity = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // properties

    /**
     * Gets path of the entity
     * @return {String} Path of the entity
     */
    get path() {
        return this._path;
    }

    /**
     * Gets name of the entity
     * @return {String} Name of the entity
     */
    get name() {
        return this._name;
    }

    /**
     * Gets initial extension of the entity
     * @return {String} Initial extension of the entity
     */
    get initialExtension() {
        return this._initialExtension;
    }

    /**
     * Gets extension of the entity
     * @return {String} Extension of the entity
     */
    get extension() {
        return this._extension;
    }

    // initialize

    /**
     * Initializes the entity
     *
     * @param {String} fullPath - Path to entity
     */
    initialize(fullPath = '') {
        const data = DKTools.IO.parsePath(fullPath);

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
        this._initialExtension = data.ext;

        /**
         * @private
         * @readonly
         * @type {String}
         */
        this._extension = data.ext;
    }

    // E methods

    /**
     * Returns true if the entity exists
     * @return {Boolean} Entity exists
     */
    exists() {
        return DKTools.IO.absolutePathExists(this.getAbsolutePath());
    }

    // G methods

    /**
     * Returns the path
     * @return {String} Path
     */
    getPath() {
        return this._path;
    }

    /**
     * Returns the name of the entity without an extension
     * @return {String} Name of the entity without an extension
     */
    getName() {
        return this._name;
    }

    /**
     * Returns the extension of the entity
     * @return {String} Extension of the entity
     */
    getExtension() {
        return this._extension;
    }

    /**
     * Returns the full path
     * @return {String} Full Path
     */
    getFullPath() {
        return DKTools.IO.joinPath(this.getPath(), '/', this.getFullName());
    }

    /**
     * Returns the full name
     * @return {String} Full name
     */
    getFullName() {
        return this._name + this._extension;
    }

    /**
     * Returns the absolute path
     * @return {String} Absolute path
     */
    getAbsolutePath() {
        return DKTools.IO.getAbsolutePath(this.getFullPath());
    }

    /**
     * Returns a stats
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of stat
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: Object }} Loaded stats
     */
    getStats(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        if (!Utils.isNwjs() && DKTools.IO.mode === DKTools.IO.MODE_NWJS) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        if (!Utils.isNwjs() && DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) {
            const parts = this.getFullPath().split('\\').filter(part => !!part);
            const data = _.get(DKTools.IO.stamp, parts.concat('__stats__'), {});

            return { data, status: DKTools.IO.OK };
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                const data = fs.statSync(absolutePath);

                return { data, status: DKTools.IO.OK };
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.stat(absolutePath, (error, data) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    object.onSuccess({ data, status: DKTools.IO.OK }, this);
                }
            });

            return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
        }
    }

    /**
     * Returns a stats
     * Asynchronous version of DKTools.IO.Entity.prototype.getStats
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Loaded data
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     * @return {Promise<Object>} Loaded stats
     */
    async getStatsAsync() {
        return new Promise((resolve, reject) => {
            const result = this.getStats({
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    // H methods

    /**
     * Returns true if the entity has an extension
     * @return {Boolean} Entity has an extension
     */
    hasExtension() {
        return !!this._extension;
    }

    // I methods

    /**
     * Returns true if the entity is a file
     *
     * @return {Boolean} Entity is a file
     */
    isFile() {
        if (this instanceof DKTools.IO.File) {
            if (Utils.isNwjs()) {
                return DKTools.IO.isFile(this.getFullPath());
            } else {
                return !!this.hasExtension();
            }
        }

        return false;
    }

    /**
     * Returns true if the entity is a directory
     *
     * @return {Boolean} Entity is a directory
     */
    isDirectory() {
        if (this instanceof DKTools.IO.Directory) {
            if (Utils.isNwjs()) {
                return DKTools.IO.isDirectory(this.getFullPath());
            } else {
                return !this.hasExtension();
            }
        }

        return false;
    }

    // P methods

    /**
     * @private
     *
     * @param {*} error - Error
     * @param {Function} [onError] - Callback function upon completion of an operation with error
     */
    __processError(error, onError) {
        if (DKTools.Utils.isFunction(onError)) {
            onError(error, this);
        } else {
            DKTools.Utils.throwError(error);
        }
    }

    // R methods

    /**
     * Renames the entity (file or directory)
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE
     *
     * @param {String} newName - New name of entity (file or directory) without the extension
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of rename
     * @param {Boolean} [object.overwrite] - Overwrite existing entity
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {Number} Code of the result of an operation
     */
    rename(newName, object = {}) {
        object = object || {};

        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const oldAbsolutePath = this.getAbsolutePath();
        const newPath = DKTools.IO.normalizePath(this._path + '/' + newName + this._extension);
        const newAbsolutePath = DKTools.IO.getAbsolutePath(newPath);

        if (!object.overwrite && DKTools.IO.absolutePathExists(newAbsolutePath)) {
            return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;
        }

        if (object.sync) {
            try {
                fs.renameSync(oldAbsolutePath, newAbsolutePath);

                this._name = newName;

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.rename(oldAbsolutePath, newAbsolutePath, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    this._name = newName;

                    if (DKTools.Utils.isFunction(object.onSuccess)) {
                        object.onSuccess(DKTools.IO.OK, this);
                    }
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Renames the entity (file or directory)
     * Asynchronous version of DKTools.IO.Entity.prototype.rename
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE
     *
     * @async
     *
     * @param {String} newName - New name of entity without the extension
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.overwrite] - Overwrite existing entity
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async renameAsync(newName, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.rename(newName, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

};



//===========================================================================
// DKTools.IO.File
//===========================================================================

/**
 * File class
 * @class
 * @extends DKTools.IO.Entity
 * @memberof DKTools.IO
 */
DKTools.IO.File = class extends DKTools.IO.Entity {

    // initialize methods

    /**
     * Initializes the file
     *
     * @override
     *
     * @param {String} fullPath - Path to file
     */
    initialize(fullPath = '') {
        super.initialize(fullPath);

        this._detectExtension();
    }

    // C methods

    /**
     * Copies file
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     *
     * @param {String} destination - Destination filename of the copy operation
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.copyFile
     * @param {Boolean | Object} [object.createDirectory] - Create a directory for the file
     * @param {Number} [object.flags] - Modifiers for copy operation
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Object} [object.createDirectory.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.createDirectory.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.createDirectory.options.mode] - Directory permission
     *
     * @return {Number} Code of the result of an operation
     */
    copy(destination, object = {}) {
        if (!object) {
            return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;
        }

        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();
        const file = new DKTools.IO.File(destination);
        const directory = file.getDirectory();

        if (object.createDirectory && !directory.exists()) {
            const options = (object.createDirectory instanceof Object ? object.createDirectory : null);
            const status = directory.create({ sync: true, options });

            if (status !== DKTools.IO.OK) {
                this.__processError(new Error(`Failed to create directory: ${directory.getFullPath()}`), object.onError);
            }
        }

        if (!directory.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (object.sync) {
            try {
                fs.copyFileSync(absolutePath, destination, object.flags);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.copyFile(absolutePath, destination, object.flags, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Copies file
     * Asynchronous version of DKTools.IO.File.prototype.copy
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {String} destination - Destination filename of the copy operation
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean | Object} [object.createDirectory] - Create a directory for the file
     * @param {Number} [object.flags] - Modifiers for copy operation
     *
     * @param {Object} [object.createDirectory.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.createDirectory.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.createDirectory.options.mode] - Directory permission
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async copyAsync(destination, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.copy(destination, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

    // D methods

    /**
     * Detects the extension
     *
     * @private
     */
    _detectExtension() {
        let newExtension = this._extension;

        if (this.isAudio()) {
            newExtension = AudioManager.audioFileExt();
        } else if (this.isImage()) {
            newExtension = ImageManager.imageFileExt();
        } else if (this.isVideo()) {
            newExtension = Video.videoFileExt();
        }

        this._extension = newExtension;
    }

    // G methods

    /**
     * Returns the extension of the file
     *
     * @override
     * @return {String} Extension of the file
     */
    getExtension() {
        let extension = super.getExtension();

        if (Utils.hasEncryptedAudio() && extension === AudioManager.audioFileExt() || Utils.hasEncryptedImages() && extension === '.png') {
            extension += '_';
        }

        return extension;
    }

    /**
     * Returns the directory of the file
     *
     * @return {DKTools.IO.Directory} Directory of the file
     */
    getDirectory() {
        return new DKTools.IO.Directory(this._path);
    }

    /**
     * Returns the directory name
     * @return {String} Directory name
     */
    getDirectoryName() {
        return this.getDirectory().getName();
    }

    // I methods

    /**
     * Returns true if an extension of the file is equal to .ogg or .ogg_
     * @return {Boolean} Extension of the file is equal to .ogg or .ogg_
     */
    isAudio() {
        return this._extension === '.ogg' || this._extension === '.ogg_';
    }

    /**
     * Returns true if an extension of the file is equal to .json
     * @return {Boolean} Extension of the file is equal to .json
     */
    isJson() {
        return this._extension === '.json';
    }

    /**
     * Returns true if an extension of the file is equal to .dds
     * @since 1.1.0
     * @return {Boolean} Extension of the file is equal to .dds
     */
    isTexture() {
        return this._extension === '.dds';
    }

    /**
     * Returns true if an extension of the file is equal to .txt
     * @return {Boolean} Extension of the file is equal to .txt
     */
    isTxt() {
        return this._extension === '.txt';
    }

    /**
     * Returns true if an extension of the file is equal to .png, .png_ or .webp
     * @return {Boolean} Extension of the file is equal to .png, .png_ or .webp
     */
    isImage() {
        return this._extension === '.png'
            || this._extension === '.png_'
            || this._extension === '.webp';
    }

    /**
     * Returns true if an extension of the file is equal to .mp4 or .webm
     * @return {Boolean} Extension of the file is equal to .mp4 or .webm
     */
    isVideo() {
        return this._extension === '.webm' || this._extension === '.mp4';
    }

    /**
     * Returns true if an extension of the file is equal to .rmmzsave
     * @return {Boolean} Extension of the file is equal to .rmmzsave
     */
    isSave() {
        return this._extension === '.rmmzsave';
    }

    // L methods

    /**
     * Loads and returns a data
     *
     * Returns an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error of an operation
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readFile
     * @param {String | Object} [object.options] - Options for FileSystem.readFile or FileSystem.readFileSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     * @param {String} [object.mimeType] - Mime type (only for XMLHttpRequest)
     *
     * @param {String} [object.options.encoding] - Encoding
     * @param {String} [object.options.flag] - File system flag
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     * const result = file.load({ sync: true, parse: true });
     *
     * if (result.status === DKTools.IO.OK) {
     *     console.log(result.data); // data loaded synchronously
     * }
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     *
     * file.load({
     *      sync: false,
     *      parse: true,
     *      onSuccess: function(result, file) {
     *          if (result.status === DKTools.IO.OK) {
     *              console.log(result.data); // data loaded asynchronously
     *          }
     *      }
     * });
     *
     * @return {{ data: String | Buffer | Object | null, status: Number, error: Error | undefined }} Loaded data
     */
    load(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        const absolutePath = this.getAbsolutePath();
        const processData = (data) => {
            if (data) {
                if (object.decompress) {
                    try {
                        data = pako.inflate(data, { to: 'string' });
                    } catch (error) {
                        return { data: null, status: DKTools.IO.ERROR_DECOMPRESSING_DATA, error };
                    }
                }

                if (object.parse) {
                    try {
                        data = JSON.parse(data, object.parse.reviver);
                    } catch (error) {
                        return { data: null, status: DKTools.IO.ERROR_PARSING_DATA, error };
                    }
                }
            }

            return { data, status: DKTools.IO.OK };
        };

        if (Utils.isNwjs()) {
            if (!this.exists()) {
                return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
            }

            const fs = DKTools.IO.fs;
            const options = object.options || { encoding: 'utf8' };

            if (object.sync) {
                try {
                    const data = fs.readFileSync(absolutePath, options);

                    return processData(data);
                } catch (error) {
                    this.__processError(error, object.onError);
                }
            } else {
                if (!DKTools.Utils.isFunction(object.onSuccess)) {
                    return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
                }

                fs.readFile(absolutePath, options, (error, data) => {
                    if (error) {
                        this.__processError(error, object.onError);
                    } else {
                        object.onSuccess(processData(data), this);
                    }
                });
            }
        } else {
            if (!DKTools.Utils.isFunction(object.onSuccess)) {
                return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
            }

            if (DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP && this.getFullName() !== 'Stamp.json' && !this.exists()) {
                return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
            }

            const xhr = new XMLHttpRequest();

            xhr.open('GET', absolutePath, !object.sync);
            xhr.overrideMimeType(object.mimeType || 'application/json');

            xhr.onload = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        object.onSuccess(processData(xhr.responseText), this);
                    } else {
                        this.__processError(xhr, object.onError);
                    }
                }
            };

            xhr.onerror = () => {
                this.__processError(xhr, object.onError);
            };

            try {
                xhr.send();
            } catch (e) { // eslint-disable-line no-empty
            }
        }

        return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
    }

    /**
     * Loads and returns a data
     * Asynchronous version of DKTools.IO.File.prototype.load
     * Promise resolves a loaded data or null
     *
     * Promise resolves an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error of an operation
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readFile
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {String} [object.options.encoding] - Encoding
     * @param {String} [object.options.flag] - File system flag
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @return {Promise<{ status: Number, data: * | null }>} Loaded data
     */
    async loadAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.load({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Loads an audio file and returns a WebAudio
     * @return {WebAudio | null} Audio file or null
     */
    loadAudio() {
        if (!this.isAudio()) {
            return null;
        }

        if ((Utils.isNwjs() || DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) && !this.exists()) {
            return null;
        }

        return DKTools.Utils.WebAudio.load(
            DKTools.IO.normalizePath(this.getDirectoryName() + '/'), this.getName());
    }

    /**
     * Loads an audio file and returns a WebAudio
     * Asynchronous version of DKTools.IO.File.prototype.loadAudio
     * Promise resolves a loaded audio file or null
     * @async
     * @return {Promise<WebAudio | null>} Loaded audio file or null
     */
    async loadAudioAsync() {
        return DKTools.Utils.WebAudio.loadAsync(this.loadAudio());
    }

    /**
     * Loads the JSON data
     *
     * Returns an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error of an operation
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readFile
     * @param {String | Object} [object.options] - Options for FileSystem.readFile or FileSystem.readFileSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {String} [object.options.encoding] - Encoding
     * @param {String} [object.options.flag] - File system flag
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     * const result = file.loadJson({ sync: true });
     *
     * if (result.status === DKTools.IO.OK) {
     *     console.log(result.data); // data loaded synchronously
     * }
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     *
     * file.loadJson({
     *      sync: false,
     *      onSuccess: function(result, file) {
     *          if (result.status === DKTools.IO.OK) {
     *              console.log(result.data); // data loaded asynchronously
     *          }
     *      }
     * });
     *
     * @return {{ data: Object | null, status: Number, error: Error | undefined }} Loaded data
     */
    loadJson(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.parse) {
            object.parse = true;
        }

        return this.load(object);
    }

    /**
     * Loads the JSON data
     * Asynchronous version of DKTools.IO.File.prototype.loadJson
     *
     * Promise resolves an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error of an operation
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readFile or FileSystem.readFileSync
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {String} [object.options.encoding] - Encoding
     * @param {String} [object.options.flag] - File system flag
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @example
     * const file = new DKTools.IO.File('data/System.json');
     * const data = await file.loadJsonAsync();
     *
     * @return {Promise<{ status: Number, data: * | null, error: Error | undefined }>} Loaded data
     */
    async loadJsonAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.loadJson({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Loads and returns a bitmap
     *
     * @param {Function | Object} object - Function of processing after loading a bitmap or object with parameters
     *
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     *
     * @example
     * const file = new DKTools.IO.File('img/system/Window.png');
     * const bitmap = file.loadBitmap();
     *
     * @return {Bitmap | null} Loaded bitmap or null
     */
    loadBitmap(object) {
        if (object instanceof Object) {
            return this.loadBitmap(object.listener);
        }

        if (!this.isImage()) {
            return null;
        }

        if ((Utils.isNwjs() || DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) && !this.exists()) {
            return null;
        }

        return DKTools.Utils.Bitmap.load({
            folder: this.getPath(),
            filename: this.getName(),
            listener: object
        });
    }

    /**
     * Loads and returns a bitmap
     * Asynchronous version of DKTools.IO.File.prototype.loadBitmap
     * Promise resolves a loaded bitmap or null
     * @async
     * @param {Function | Object} object - Function of processing after loading a bitmap or object with parameters
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     *
     * @example
     * const file = new DKTools.IO.File('img/system/Window.png');
     * const bitmap = await file.loadBitmapAsync();
     *
     * @return {Promise<Bitmap>} Loaded bitmap or null
     */
    async loadBitmapAsync(object) {
        return DKTools.Utils.Bitmap.loadAsync(this.loadBitmap(object));
    }

    // R methods

    /**
     * Removes the file
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.unlink
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {Number} Code of the result of an operation
     */
    remove(object = {}) {
        object = object || {};

        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                fs.unlinkSync(absolutePath);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.unlink(absolutePath, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Removes the file
     * Asynchronous version of DKTools.IO.File.prototype.remove
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     * @return {Promise<Number>} Code of the result of an operation
     */
    async removeAsync() {
        return new Promise((resolve, reject) => {
            const status = this.remove({
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

    // S methods

    /**
     * Saves the data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @param {*} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean | Object} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean | Object} [object.createDirectory] - Create a directory for the file
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.writeFile
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile or FileSystem.writeFileSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @param {Object} [object.createDirectory.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.createDirectory.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.createDirectory.options.mode] - Directory permission
     *
     * @example
     * const file = new DKTools.IO.File('test.txt');
     * const status = file.save('Hello world!', { sync: true });
     *
     * if (status === DKTools.IO.OK) {
     *     console.log('saved!'); // data saved synchronously
     * }
     *
     * @example
     * const file = new DKTools.IO.File('test.txt');
     *
     * file.save('Hello world!', {
     *      sync: false,
     *      onSuccess: function(status, file) {
     *          if (status === DKTools.IO.OK) {
     *              console.log('saved!'); // data saved asynchronously
     *          }
     *      }
     * });
     *
     * @return {Number} Code of the result of an operation
     */
    save(data, object = {}) {
        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();
        const directory = this.getDirectory();

        object = object || {};

        if (object.createDirectory && !directory.exists()) {
            const options = (object.createDirectory instanceof Object ? object.createDirectory : null);
            const status = directory.create({ sync: true, options });

            if (status !== DKTools.IO.OK) {
                this.__processError(new Error(`Failed to create directory: ${directory.getFullPath()}`), object.onError);
            }
        }

        if (!directory.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (object.stringify) {
            data = JSON.stringify(data, object.stringify.replacer, object.stringify.space);
        }

        if (object.compress) {
            data = pako.deflate(data, { to: 'string', level: 1 });
        }

        if (object.sync) {
            try {
                fs.writeFileSync(absolutePath, data, object.options);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.writeFile(absolutePath, data, object.options, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Saves the data
     * Asynchronous version of DKTools.IO.File.prototype.save
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {*} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean} [object.createDirectory] - Create a directory for the file
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async saveAsync(data, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.save(data, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

    /**
     * Saves the JSON data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @param {Array | Object} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Object} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean} [object.createDirectory] - Create a directory for the file
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.writeFile
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @example
     * const data = { message: 'Hello world' };
     * const file = new DKTools.IO.File('test.json');
     * const status = file.saveJson(data, { sync: true });
     *
     * if (status === DKTools.IO.OK) {
     *     console.log('saved!'); // data saved synchronously
     * }
     *
     * @example
     * const data = { message: 'Hello world' };
     * const file = new DKTools.IO.File('test.json');
     *
     * file.saveJson(data, {
     *      sync: false,
     *      onSuccess: function(status, file) {
     *          if (status === DKTools.IO.OK) {
     *              console.log('saved!'); // data saved asynchronously
     *          }
     *      }
     * });
     *
     * @return {Number} Code of the result of an operation
     */
    saveJson(data, object = {}) {
        object = object || {};

        if (!object.stringify) {
            object.stringify = { space: '\t' };
        }

        return this.save(data, object);
    }

    /**
     * Saves the JSON data
     * Asynchronous version of DKTools.IO.File.prototype.saveJson
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Array | Object} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Object} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     * @param {Boolean} [object.createDirectory] - Create a directory for the file
     * @param {String | Object} [object.options] - Options for FileSystem.writeFile
     *
     * @param {Function | Array} [object.stringify.replacer] - A function that transforms the results
     * @param {Number | String} [object.stringify.space] - Insert white space into the output JSON string for readability purposes
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async saveJsonAsync(data, object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.saveJson(data, {
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

};





//===========================================================================
// DKTools.IO.Directory
//===========================================================================

/**
 * Directory class
 * @class
 * @extends DKTools.IO.Entity
 * @memberof DKTools.IO
 */
DKTools.IO.Directory = class extends DKTools.IO.Entity {

    // C methods

    /**
     * Creates the directory
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.mkdir
     * @param {Object} [object.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Boolean} [object.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.options.mode] - Directory permission
     *
     * @example
     * const directory = new DKTools.IO.Directory('test/');
     * const status = directory.create({ sync: true });
     *
     * if (status === DKTools.IO.OK) {
     *      console.log('created!');
     * }
     *
     * @return {Number} Code of the result of an operation
     */
    create(object) {
        if (!object) {
            return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE;
        }

        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (this.exists()) {
            return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                fs.mkdirSync(absolutePath, object.options);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.mkdir(absolutePath, object.options, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Creates the directory
     * Asynchronous version of DKTools.IO.Directory.prototype.create
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.options.mode] - Directory permission
     *
     * @example
     * const directory = new DKTools.IO.Directory('test/');
     * const status = await directory.createAsync();
     *
     * if (status === DKTools.IO.OK) {
     *      console.log('created!');
     * }
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async createAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const status = this.create({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

    /**
     * Creates the new directory
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     *
     * @param {String} name - Name of the directory
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.mkdir
     * @param {Object} [object.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @param {Boolean} [object.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.options.mode] - Directory permission
     *
     * @example
     * const directory = new DKTools.IO.Directory('save/');
     * const status = directory.createDirectory('backup', { sync: true });
     *
     * if (status === DKTools.IO.OK) {
     *      console.log('created!');
     * }
     *
     * @return {Number} Code of the result of an operation
     */
    createDirectory(name, object) {
        const fullPath = DKTools.IO.normalizePath(this.getFullPath() + '/' + name);
        const directory = new DKTools.IO.Directory(fullPath);

        return directory.create(object);
    }

    /**
     * Creates the new directory
     * Asynchronous version of DKTools.IO.Directory.prototype.createDirectory
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS
     *
     * @async
     *
     * @param {String} name - Name of the directory
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.mkdir or FileSystem.mkdirSync
     *
     * @param {Boolean} [object.options.recursive] - Parent folders should be created
     * @param {Number | String} [object.options.mode] - Directory permission
     *
     * @example
     * const directory = new DKTools.IO.Directory('save/');
     * const status = await directory.createDirectoryAsync('backup');
     *
     * if (status === DKTools.IO.OK) {
     *      console.log('created!');
     * }
     *
     * @return {Promise<Number>} Code of the result of an operation
     */
    async createDirectoryAsync(name, object = {}) {
        const fullPath = DKTools.IO.normalizePath(this.getFullPath() + '/' + name);
        const directory = new DKTools.IO.Directory(fullPath);

        return directory.createAsync(object);
    }

    // F methods

    /**
     * Finds the files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Number} [object.searchLimit] - Search limit
     *
     * @example
     * const directory = new DKTools.IO.Directory('img/');
     * const result = directory.findFiles({ sync: true, template: 'Window.png' });
     *
     * if (result.status === DKTools.IO.OK) {
     *     console.log(result.data);
     * }
     *
     * @return {{ data: Object | null, status: Number }} All files
     */
    findFiles(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        if (!Utils.isNwjs()) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        const searchLimit = object.searchLimit || 1;
        const files = [];
        let total = 1, processed = 0;

        const processData = (data) => {
            _.forEach(data, (entity) => {
                if (entity.isFile()) {
                    const fullName = entity.getFullName();

                    if (object.template instanceof RegExp && object.template.test(fullName)) {
                        files.push(entity);
                    } else if (!object.template || fullName === object.template) {
                        files.push(entity);
                    }
                } else if (total < searchLimit && entity.isDirectory()) {
                    total++;

                    processDirectory(entity);
                }
            });
        };

        const processDirectory = (directory) => {
            if (object.sync) {
                const data = directory.getAll({ sync: true, options: object.options }).data;

                processData(data);
            } else {
                directory.getAll({
                    sync: false,
                    options: object.options,
                    onError: object.onError,
                    onSuccess: (result) => {
                        processed++;

                        processData(result.data);

                        if (total === processed) {
                            object.onSuccess({ data: files, status: DKTools.IO.OK });
                        }
                    }
                });
            }
        };

        processDirectory(this);

        if (object.sync) {
            return { data: files, status: DKTools.IO.OK };
        } else {
            return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
        }
    }

    /**
     * Finds the files
     * Asynchronous version of DKTools.IO.Directory.prototype.findFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Number} [object.searchLimit] - Search limit
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All files
     */
    async findFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.findFiles({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Finds the directories
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     * @param {Number} [object.searchLimit] - Search limit
     *
     * @example
     * const directory = new DKTools.IO.Directory('img/');
     * const result = directory.findDirectories({ sync: true, template: 'system' });
     *
     * if (result.status === DKTools.IO.OK) {
     *     console.log(result.data);
     * }
     *
     * @return {{ data: DKTools.IO.Directory[] | null, status: Number }} All directories
     */
    findDirectories(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        if (!Utils.isNwjs()) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        const searchLimit = object.searchLimit || 1;
        const directories = [];
        let total = 1, processed = 0;

        const processData = (data) => {
            _.forEach(data, (directory) => {
                const fullName = directory.getFullName();

                if (object.template instanceof RegExp && object.template.test(fullName)) {
                    directories.push(directory);
                } else if (!object.template || fullName === object.template) {
                    directories.push(directory);
                }

                if (total < searchLimit) {
                    total++;

                    processDirectory(directory);
                }
            });
        };

        const processDirectory = (directory) => {
            if (object.sync) {
                const data = directory.getDirectories({
                    sync: true,
                    options: object.options
                }).data;

                processData(data);
            } else {
                directory.getDirectories({
                    sync: false,
                    options: object.options,
                    onError: object.onError,
                    onSuccess: (result) => {
                        processed++;

                        processData(result.data);

                        if (total === processed) {
                            object.onSuccess({ data: directories, status: DKTools.IO.OK });
                        }
                    }
                });
            }
        };

        processDirectory(this);

        if (object.sync) {
            return { data: directories, status: DKTools.IO.OK };
        } else {
            return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
        }
    }

    /**
     * Finds the directories
     * Asynchronous version of DKTools.IO.Directory.prototype.findDirectories
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Number} [object.searchLimit] - Search limit
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.Directory[] | null }>} All directories
     */
    async findDirectoriesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.findDirectories({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    // G methods

    /**
     * Returns all files and directories
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files and directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp | String} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ data: DKTools.IO.Entity[] | null, status: Number }} All files and directories
     */
    getAll(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        if (!Utils.isNwjs() && DKTools.IO.mode === DKTools.IO.MODE_NWJS) {
            return { data: null, status: DKTools.IO.ERROR_NOT_LOCAL_MODE };
        }

        if (!this.exists()) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        const path = this.getFullPath();

        const processData = (names) => {
            if (object.template instanceof RegExp) {
                names = names.filter(name => object.template.test(name));
            } else if (DKTools.Utils.isString(object.template)) {
                names = names.filter(name => name === object.template);
            }

            const data = names.reduce((acc, name) => {
                const fullPath = DKTools.IO.normalizePath(path + '/' + name);

                if (DKTools.IO.isFile(fullPath)) {
                    acc.push(new DKTools.IO.File(fullPath));
                } else if (DKTools.IO.isDirectory(fullPath)) {
                    acc.push(new DKTools.IO.Directory(fullPath));
                }

                return acc;
            }, []);

            return { data, status: DKTools.IO.OK };
        };

        if (!Utils.isNwjs() && DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) {
            const parts = this.getFullPath().split('\\');
            const temp = _.get(DKTools.IO.stamp, parts, {});
            const names = Object.keys(temp);

            if (object.sync) {
                return processData(names);
            } else {
                object.onSuccess(processData(names), this);

                return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
            }
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                const names = fs.readdirSync(absolutePath, object.options);

                return processData(names);
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.readdir(absolutePath, object.options, (error, names) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else {
                    object.onSuccess(processData(names), this);
                }
            });

            return { data: null, status: DKTools.IO.EXPECT_CALLBACK };
        }
    }

    /**
     * Returns all files and directories
     * Asynchronous version of DKTools.IO.Directory.prototype.getAll
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files and directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.Entity[] | null }>} All files and directories
     */
    async getAllAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getAll({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Returns all files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All files
     */
    getFiles(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        const processData =
            (entities) => entities.filter(entity => entity.isFile());

        if (object.sync) {
            const result = this.getAll(object);

            if (result.status === DKTools.IO.OK) {
                return { ...result, data: processData(result.data) };
            }

            return result;
        } else {
            const onSuccess = object.onSuccess;

            object.onSuccess = (result, directory) => {
                if (result.status === DKTools.IO.OK) {
                    onSuccess({ ...result, data: processData(result.data) }, directory);
                } else {
                    onSuccess(result, directory);
                }
            };

            return this.getAll(object);
        }
    }

    /**
     * Returns all files
     * Asynchronous version of DKTools.IO.Directory.prototype.getFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All files
     */
    async getFilesAsync(object = {}) {
        return this.getAllAsync(object).then((result) => {
            if (result.status === DKTools.IO.OK) {
                const data = _.filter(result.data, entity => entity.isFile());

                return { ...result, data };
            }

            return result;
        });
    }

    /**
     * Returns all directories
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {RegExp} [object.template] - Template for filtering
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.Directory[] | null }} All directories
     */
    getDirectories(object) {
        if (!object) {
            return { data: null, status: DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE };
        }

        if (!object.sync && !DKTools.Utils.isFunction(object.onSuccess)) {
            return { data: null, status: DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE };
        }

        const processData = (entities) => _.filter(entities, entity => entity.isDirectory());

        if (object.sync) {
            const result = this.getAll(object);

            if (result.status === DKTools.IO.OK) {
                return { ...result, data: processData(result.data) };
            }

            return result;
        } else {
            const onSuccess = object.onSuccess;

            object.onSuccess = (result, directory) => {
                if (result.status === DKTools.IO.OK) {
                    onSuccess({ ...result, data: processData(result.data) }, directory);
                } else {
                    onSuccess(result, directory);
                }
            };

            return this.getAll(object);
        }
    }

    /**
     * Returns all directories
     * Asynchronous version of DKTools.IO.Directory.prototype.getDirectories
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with directories
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @param {RegExp | String} [object.template] - Template for filtering
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.Directory[] | null }>} All directories
     */
    async getDirectoriesAsync(object = {}) {
        return this.getAllAsync(object).then((result) => {
            if (result.status === DKTools.IO.OK) {
                const data = _.filter(result.data, entity => entity.isDirectory());

                return { ...result, data };
            }

            return result;
        });
    }

    /**
     * Returns all audio files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All audio files
     */
    getAudioFiles(object) {
        return this.getFiles({ ...object, template: /(.ogg)/ });
    }

    /**
     * Returns all audio files
     * Asynchronous version of DKTools.IO.Directory.prototype.getAudioFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All audio files
     */
    async getAudioFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getAudioFiles({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Returns all JSON files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All JSON files
     */
    getJsonFiles(object) {
        return this.getFiles({ ...object, template: /(.json)/ });
    }

    /**
     * Returns all JSON files
     * Asynchronous version of DKTools.IO.Directory.prototype.getJsonFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     * @param {Object} [object={}] - Options of an operation
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All JSON files
     */
    async getJsonFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getJsonFiles({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Returns all txt files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All txt files
     */
    getTxtFiles(object) {
        return this.getFiles({ ...object, template: /(.txt)/ });
    }

    /**
     * Returns all txt files
     * Asynchronous version of DKTools.IO.Directory.prototype.getTxtFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All txt files
     */
    async getTxtFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getTxtFiles({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Returns all image files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ status: Number, data: DKTools.IO.File[] | null }} All image files
     */
    getImageFiles(object) {
        return this.getFiles({ ...object, template: /(.png|.webp)/ });
    }

    /**
     * Returns all image files
     * Asynchronous version of DKTools.IO.Directory.prototype.getImageFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All image files
     */
    async getImageFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getImageFiles({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Returns all video files
     *
     * Returns an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE
     * DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE
     *
     * @param {Object} object - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.readdir
     * @param {String | Object} [object.options] - Options for FileSystem.readdir or FileSystem.readdirSync
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {{ data: DKTools.IO.File[] | null, status: Number }} All video files
     */
    getVideoFiles(object) {
        return this.getFiles({ ...object, template: /(.webm|.mp4)/ });
    }

    /**
     * Returns all video files
     * Asynchronous version of DKTools.IO.Directory.prototype.getVideoFiles
     *
     * Promise resolves an object with 2 properties:
     * status - Result of an operation
     * data - Array with files
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @async
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {String | Object} [object.options] - Options for FileSystem.readdir
     *
     * @return {Promise<{ status: Number, data: DKTools.IO.File[] | null }>} All video files
     */
    async getVideoFilesAsync(object = {}) {
        return new Promise((resolve, reject) => {
            const result = this.getVideoFiles({
                ...object,
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (result.status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(result);
            }
        });
    }

    /**
     * Returns the root directory
     * @return {DKTools.IO.Directory} Root directory
     */
    getRootDirectory() {
        return new DKTools.IO.Directory(this.getPath());
    }

    // I methods

    /**
     * Returns true if the directory does not contain files and other directories
     * @return {Boolean} Directory does not contain files and other directories
     */
    isEmpty() {
        const data = this.getAll({ sync: true }).data;

        return !data || data.length === 0;
    }

    // L methods

    /**
     * Loads and returns an audio files
     * @return {WebAudio[]} Loaded audio files
     */
    loadAudioFiles() {
        const result = this.getAudioFiles({ sync: true });

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return result.data.map(file => file.loadAudio());
    }

    /**
     * Loads and returns an audio files
     * Asynchronous version of DKTools.IO.Directory.prototype.loadAudioFiles
     * Promise resolves a loaded audio files (WebAudio[])
     * @async
     * @return {Promise<WebAudio[]>} Loaded audio files
     */
    async loadAudioFilesAsync() {
        const result = await this.getAudioFilesAsync();

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return Promise.all(result.data.map(file => file.loadAudioAsync()));
    }

    /**
     * Loads and returns a bitmaps
     * @param {Function | Object} [object] - Function of processing after loading a bitmap or object with parameter
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @return {Bitmap[]} Loaded bitmaps
     */
    loadBitmaps(object) {
        const result = this.getImageFiles({ sync: true });

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return result.data.map(file => file.loadBitmap(object));
    }

    /**
     * Loads and returns a bitmaps
     * Asynchronous version of DKTools.IO.Directory.prototype.loadBitmaps
     * Promise resolves a loaded bitmaps (Bitmap[])
     * @async
     * @param {Function | Object} [object] - Function of processing after loading a bitmap or object with parameter
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     * @return {Promise<Bitmap[]>} Loaded bitmaps
     */
    async loadBitmapsAsync(object) {
         const result = await this.getImageFilesAsync();

        if (result.status !== DKTools.IO.OK) {
            return [];
        }

        return Promise.all(result.data.map(file => file.loadBitmapAsync(object)));
    }

    // R methods

    /**
     * Removes the directory
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.EXPECT_CALLBACK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY
     *
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.sync] - Use synchronous version of FileSystem.rmdir
     * @param {Function} [object.onSuccess] - Callback function upon completion of an operation (only for object.sync == false)
     * @param {Function} [object.onError] - Callback function upon completion of an operation with error (only for object.sync == false)
     *
     * @return {Number} Code of the result of an operation
     */
    remove(object = {}) {
        if (!Utils.isNwjs()) {
            return DKTools.IO.ERROR_NOT_LOCAL_MODE;
        }

        if (!this.exists()) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (!this.isEmpty()) {
            return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;
        }

        const fs = DKTools.IO.fs;
        const absolutePath = this.getAbsolutePath();

        if (object.sync) {
            try {
                fs.rmdirSync(absolutePath);

                return DKTools.IO.OK;
            } catch (error) {
                this.__processError(error, object.onError);
            }
        } else {
            fs.rmdir(absolutePath, (error) => {
                if (error) {
                    this.__processError(error, object.onError);
                } else if (DKTools.Utils.isFunction(object.onSuccess)) {
                    object.onSuccess(DKTools.IO.OK, this);
                }
            });

            return DKTools.IO.EXPECT_CALLBACK;
        }
    }

    /**
     * Removes the directory
     * Asynchronous version of DKTools.IO.Directory.prototype.remove
     * Promise resolves a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_NOT_LOCAL_MODE
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY
     *
     * @async
     * @return {Promise<Number>} Code of the result of an operation
     */
    async removeAsync() {
        return new Promise((resolve, reject) => {
            const status = this.remove({
                sync: false,
                onSuccess: resolve,
                onError: reject
            });

            if (status !== DKTools.IO.EXPECT_CALLBACK) {
                resolve(status);
            }
        });
    }

};





//===========================================================================
// DKTools.IO.WebStorage
//===========================================================================

/**
 * Web storage class
 * @class
 * @memberof DKTools.IO
 */
DKTools.IO.WebStorage = class {

    // E methods

    /**
     * Returns true if the key exists
     * @static
     * @param {String} key - Key
     * @return {Boolean} Key exists
     */
    static exists(key) {
        return localStorage.hasOwnProperty(key);
    }

    // L methods

    /**
     * Loads a data
     *
     * Returns an object with 3 properties:
     * status - Result of an operation
     * data - Loaded data
     * error - Error
     * if the status is not equal to DKTools.IO.OK then data will be null
     *
     * Possible statuses:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_DECOMPRESSING_DATA
     * DKTools.IO.ERROR_PARSING_DATA
     *
     * @static
     *
     * @param {String} key - Key
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.decompress] - Use LZString.decompressFromBase64 for a data
     * @param {Boolean | Object} [object.parse] - Use JSON.parse for a data
     *
     * @param {Function} [object.parse.reviver] - A function that transforms the results
     *
     * @return {{ data: String | Object | null, status: Number, error: Error | undefined }} Loaded data
     */
    static load(key, object = {}) {
        if (!this.exists(key)) {
            return { data: null, status: DKTools.IO.ERROR_PATH_DOES_NOT_EXIST };
        }

        let data = localStorage.getItem(key);

        if (data) {
            if (object.decompress) {
                try {
                    const decompress = (object.decompress instanceof Object ?
                        object.decompress : { to: 'string' });

                    data = pako.inflate(data, decompress);
                } catch (error) {
                    return { data: null, status: DKTools.IO.ERROR_DECOMPRESSING_DATA, error };
                }
            }

            if (object.parse) {
                try {
                    data = JSON.parse(data, object.parse.reviver);
                } catch (error) {
                    return { data: null, status: DKTools.IO.ERROR_PARSING_DATA, error };
                }
            }
        }

        return { data, status: DKTools.IO.OK };
    }

    // R methods

    /**
     * Removes a data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     *
     * @static
     * @param {String} key - Key
     * @return {Number} Code of the result of an operation
     */
    static remove(key) {
        if (!this.exists(key)) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        localStorage.removeItem(key);

        return DKTools.IO.OK;
    }

    /**
     * Renames a data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_PATH_DOES_NOT_EXIST
     * DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE
     *
     * @static
     *
     * @param {String} oldKey - Old key
     * @param {String} newKey - New key
     * @param {Boolean} [overwrite=false] - Overwrite the data
     *
     * @return {Number} Code of the result of an operation
     */
    static rename(oldKey, newKey, overwrite = false) {
        if (!this.exists(oldKey)) {
            return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;
        }

        if (!overwrite && this.exists(newKey)) {
            return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;
        }

        const data = localStorage.getItem(oldKey);

        localStorage.setItem(newKey, data);
        localStorage.removeItem(oldKey);

        return DKTools.IO.OK;
    }

    // S methods

    /**
     * Saves the data
     * Returns a code of the result of an operation
     *
     * Possible results:
     * DKTools.IO.OK
     * DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE
     *
     * @static
     *
     * @param {String} key - Key
     * @param {*} data - Data to save
     * @param {Object} [object={}] - Options of an operation
     *
     * @param {Boolean} [object.overwrite=true] - Overwrite the data
     * @param {Boolean} [object.stringify] - Use JSON.stringify for the data
     * @param {Boolean} [object.compress] - Use LZString.compressToBase64 for the data
     *
     * @return {Number} Code of the result of an operation
     */
    static save(key, data, object = {}) {
        object = object || {};

        const overwrite = _.defaultTo(object.overwrite, true);

        if (!overwrite && this.exists(key)) {
            return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;
        }

        if (object.stringify) {
            data = JSON.stringify(data, object.stringify.replacer, object.stringify.space);
        }

        if (object.compress) {
            const compress = (object.compress instanceof Object ?
                object.compress : { to: 'string', level: 1 });

            data = pako.deflate(data, compress);
        }

        localStorage.setItem(key, data);

        return DKTools.IO.OK;
    }

};






//===========================================================================
// DKTools.Network
//===========================================================================

/**
 * Network class
 * @class
 * @memberof DKTools
 */
DKTools.Network = class {

    constructor() {
        return DKTools.Network;
    }

    // F methods

    /**
     * Executes the request
     * Promise resolves an ArrayBuffer
     * @static
     * @async
     * @param {String | Request} url - URL or Request
     * @param {Object} [options={}] - Options of request
     * @return {Promise<ArrayBuffer | null>} ArrayBuffer
     */
    static async fetchFile(url, options = {}) {
        return fetch(url, options).then((response) => {
            if (response.ok) {
                return this._toFile(response);
            }

            throw response;
        });
    }

    /**
     * Executes the request
     * Promise resolves a JSON data
     * @static
     * @async
     * @param {String | Request} url - URL or Request
     * @param {Object} [options={}] - Options of request
     * @return {Promise<* | null>} JSON data
     */
    static async fetchJson(url, options = {}) {
        if (!options.headers) {
            options.headers = {};
        }

        options.headers.Accept = 'application/json';

        return fetch(url, options).then((response) => {
            if (response.ok) {
                return this._toJson(response);
            }

            throw response;
        });
    }

    // T methods

    /**
     * Promise resolves an ArrayBuffer
     * @private
     * @static
     * @async
     * @param {Response} response - Response
     * @return {Promise<ArrayBuffer | null>} ArrayBuffer
     */
    static async _toFile(response) {
        return response.arrayBuffer().catch(() => null);
    }

    /**
     * Promise resolves a JSON data
     * @private
     * @static
     * @async
     * @param {Response} response - Response
     * @return {Promise<* | null>} JSON data
     */
    static async _toJson(response) {
        return response.json().catch(() => null);
    }

};



//===========================================================================
// DKTools.ParameterManager
//===========================================================================

/**
 * Class of plugin parameters
 * Manages plugin parameters (supports all types of parameters)
 * @class
 * @memberof DKTools
 * @param {String} pluginName - Name of the plugin
 * @example
 * const params = new DKTools.ParameterManager('DKTools');
 */
DKTools.ParameterManager = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the manager
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
        this._params = {};

        this.initializeParams();
    }

    /**
     * Initializes plugin parameters
     */
    initializeParams() {
        _.forEach(PluginManager.parameters(this._pluginName), (value, key) => {
            this._params[key] = DKTools.ParameterManager.parse(value);
        });
    }

    // C methods

    /**
     * Changes the parameter value
     * @param {String[]} path - Path to parameter
     * @param {*} value - New value
     */
    change(path, value) {
        _.set(this._params, path, value);
    }

    // G methods

    /**
     * Returns a parameter by its name
     *
     * @param {String} parameterName - Name of parameter
     * @param {Number | String | Object} [item] - Index (for an array) or property (for an object) or object with properties to find
     * @param {Object} [options] - Options for found item
     *
     * @param {String} [options.key] - Key (property) of item
     * @param {Number} [options.index] - Index of item
     *
     * @return {* | undefined} Parameter by its name or undefined
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
    }

    // P methods

    /**
     * Parse a string (supports escape characters of the RPG Maker 1.5+)
     * @static
     * @param {String} string - String to parse
     * @return {Object | String} Parsed string
     */
    static parse(string) {
        try {
            if (typeof string === 'number' || typeof string === 'boolean') {
                return string;
            }

            return JSON.parse(string, (key, value) => {
                if (Array.isArray(value)) {
                    return value.map(val => this.parse(val));
                } else {
                    try {
                        return this.parse(value);
                    } catch (e) {
                        return value;
                    }
                }
            });
        } catch (e) {
            return string;
        }
    }

};



//===========================================================================
// DKTools.PluginManager
//===========================================================================

/**
 * Plugin manager class
 * @class
 * @memberof DKTools
 */
DKTools.PluginManager = class {

    constructor() {
        return DKTools.PluginManager;
    }

    // initialize methods

    /**
     * Checks the requirements for the plugins
     * @static
     */
    static initialize() {
        this._checkRequirements();
    }

    // C methods

    /**
     * Checks the requirements for plugins
     * @private
     * @static
     */
    static _checkRequirements() {
        Object.keys(this._requirements).forEach((pluginName) => {
            const pluginVersion = this.getVersion(pluginName);
            const maxVersion = this._getMaxVersion(pluginName);

            if (pluginVersion === null) {
                const error = 'Required to install the plugin "%1". Minimal version: %2'
                    .format(pluginName, maxVersion);

                throw new Error(error);
            } else if (!this._compareVersions(pluginVersion, maxVersion)) {
                const error = 'Required to update the plugin "%1" to minimal version %2 (Installed: %3)'
                    .format(pluginName, maxVersion, pluginVersion);

                throw new Error(error);
            }
        });
    }

    /**
     * @private
     * @static
     * @param {String} v1 - First version
     * @param {String} v2 - Second version
     * @return {Boolean}
     */
    static _compareVersions(v1, v2) {
        if (v1 === v2) {
            return true;
        }

        if (!v1 || !v2) {
            return false;
        }

        const array1 = v1.split('.');
        const array2 = v2.split('.');

        for (let i = 0; i < array1.length; i++) {
            const v1 = parseInt(array1[i]);
            const v2 = parseInt(array2[i]);

            if (v1 > v2) {
                return true;
            } else if (v1 < v2) {
                return false;
            }
        }

        return true;
    }

    /**
     * Checks the plugin version
     * Returns true if the current version is greater than or equal to the given version
     * @static
     * @param {String} pluginName - Plugin name
     * @param {String} version - Plugin version
     * @return {Boolean} Current version is greater than or equal to the given version
     */
    static checkVersion(pluginName, version) {
        return this._compareVersions(this.getVersion(pluginName), version);
    }

    // G methods

    /**
     * @private
     * @static
     * @param {String} pluginName - Plugin name
     * @return {String | undefined}
     */
    static _getMaxVersion(pluginName) {
        return (this._requirements[pluginName] || [])
            .slice()
            .sort((a, b) => (this._compareVersions(a, b) ? -1 : 1))[0];
    }

    /**
     * Returns a version of plugin
     * @static
     * @param {String} pluginName - Plugin name
     * @example
     * DKTools.PluginManager.getVersion('DKTools');
     * @return {String | undefined} Version of plugin
     */
    static getVersion(pluginName) {
        const version = Imported[pluginName];

        return DKTools.Utils.isString(version) ?
            version : null;
    }

    // I methods

    /**
     * Returns true if plugin is registered
     * @version 1.1.3
     * @static
     * @param {String} pluginName - Name of plugin
     * @return {Boolean} Plugin is registered
     */
    static isRegistered(pluginName) {
        return DKTools.Utils.isString(this.getVersion(pluginName)) ||
            $plugins.some(plugin => plugin.name === pluginName && plugin.status);
    }

    // R methods

    /**
     * Registers a requirement of minimum version of plugin
     * @static
     * @param {String} pluginName - Name of plugin
     * @param {String | Object} data - Plugin version or versions (RPG Maker MV and MZ)
     * @example
     * // Plugin only for RPG Maker MZ
     * DKTools.PluginManager.requirePlugin('DKTools', '1.1.0');
     * @example
     * // Plugin for RPG Maker MV and MZ
     * DKTools.PluginManager.requirePlugin('DKTools', {
     *     MV: '10.0.0',
     *     MZ: '1.1.0'
     * });
     */
    static requirePlugin(pluginName, data) {
        if (!this._requirements[pluginName]) {
            this._requirements[pluginName] = [];
        }

        let minVersion;

        if (data instanceof Object) {
            minVersion = data[Utils.RPGMAKER_NAME];
        } else if (DKTools.Utils.isString(data)) {
            minVersion = data;
        } else {
            console.error(`Unknown version type (${pluginName}): ${typeof data}`);

            return;
        }

        this._requirements[pluginName].push(minVersion);
    }

};

// properties

Object.defineProperties(DKTools.PluginManager, {

    /**
     * List of registered requirements
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PluginManager
     */
    _requirements: { value: {} }

});



//===========================================================================
// DKTools.PreloadManager
//===========================================================================

/**
 * Preload manager class
 * @class
 * @memberof DKTools
 */
DKTools.PreloadManager = class {

    constructor() {
        return DKTools.PreloadManager;
    }

    // initialize methods

    /**
     * Initializes preloading
     * @static
     */
    static initialize() {
        const params = DKToolsParam.get('Initial Preloading') || {};

        if (!params['Enabled']) {
            this.start();

            return;
        }

        this.setDebugging(params['Debugging']);

        params['Audio Files'].forEach((path) => {
            this.preloadAudio({
                path: 'audio/' + path,
                caching: true
            });
        });

        params['Image Files'].forEach((path) => {
            this.preloadImage({
                path: 'img/' + path,
                caching: true
            });
        });

        const total = this.getTotal();

        if (total >= 30) {
            console.warn('Too many files to preload! Load only needed files.');
        }

        this.start();
    }

    // C methods

    /**
     * Clears the cache
     * @static
     */
    static clearCache() {
        /**
         * @private
         * @readonly
         * @type {Object}
         */
        this._cache = { audio: {}, image: {} };
    }

    /**
     * Clears the preload queue
     * @static
     */
    static clearQueue() {
        /**
         * @private
         * @readonly
         * @type {Object[]}
         */
        this._queue = { audio: {}, image: {} };
    }

    // F methods

    /**
     * Finishes the preloading
     * @private
     * @static
     */
    static _finish() {
        this._finishTime = new Date();
        this._debugging = false;

        const preloadingTime = (this._finishTime - this._startTime) / 1000;
        const total = this.getTotal();

        if (total > 0) {
            this._log('Preloading complete! \n' +
                'Loaded/Skipped/Total: ' + this._loaded + '/' + this._skipped + '/' + total + '\n' +
                'Preloading time: ' + preloadingTime + ' sec');
        }

        if (this._finishListeners) {
            const data = {
                loaded: this._loaded,
                skipped: this._skipped,
                preloadingTime,
                total
            };

            while (this._finishListeners.length > 0) {
                const handler = this._finishListeners.shift();

                handler(data);
            }

            delete this._finishListeners;
        }

        if (this._fileLoadListeners) {
            delete this._fileLoadListeners;
        }

        this.clearQueue();
    }

    // G methods

    /**
     * Generates an audio key
     * @private
     * @static
     * @param {String} path - Path
     * @return {String} Generated key
     */
    static _generateKey(path) {
        return DKTools.IO.normalizePath(path, true);
    }

    /**
     * Returns a cached audio by key
     * @static
     * @param {String} key - Key of the cached audio
     * @return {WebAudio | undefined} Cached audio by key
     */
    static getCachedAudioByKey(key) {
        return this._cache.audio[key];
    }

    /**
     * Returns a cached audio by path
     * @static
     * @param {String} path - Path of the cached audio
     * @return {WebAudio | undefined} Cached audio by path
     */
    static getCachedAudioByPath(path) {
        return this.getCachedAudioByKey(this._generateKey(path));
    }

    /**
     * Returns a cached image by key
     * @static
     * @param {String} key - Key of the cached image
     * @return {Bitmap | undefined} Cached bitmap or null
     */
    static getCachedImageByKey(key) {
        return this._cache.image[key];
    }

    /**
     * Returns a cached image by path
     * @static
     * @param {String} path - Path of the cached image
     * @return {Bitmap | undefined} Cached image or null
     */
    static getCachedImageByPath(path) {
        return this.getCachedImageByKey(this._generateKey(path));
    }

    /**
     * Returns the total amount of resources to preload
     * @static
     * @return {Number} Total amount of resources to preload
     */
    static getTotal() {
        return _.size(this._queue.audio) + _.size(this._queue.image);
    }

    // I methods

    /**
     * Returns true if the audio by key is cached
     * @static
     * @param {String} key - Key of the cached audio
     * @return {Boolean} Audio by key is cached
     */
    static isAudioCachedByKey(key) {
        return !!this._cache.audio[key];
    }

    /**
     * Returns true if the audio by path is cached
     * @static
     * @param {String} path - Path of the cached audio
     * @return {Boolean} Audio by path is cached
     */
    static isAudioCachedByPath(path) {
        return this.isAudioCachedByKey(this._generateKey(path));
    }

    /**
     * Returns true if the preloading is finished
     * @static
     * @return {Boolean} Preloading is finished
     */
    static isFinished() {
        return !!this._finishTime;
    }

    /**
     * Returns true if the preload manager is ready
     * @return {Boolean} Preload manager is ready
     */
    static isReady() {
        return this.isFinished();
    }

    /**
     * Returns true if the image by key is cached
     * @static
     * @param {String} key - Key of the cached image
     * @return {Boolean} Image by key is cached
     */
    static isImageCachedByKey(key) {
        return !!this._cache.image[key];
    }

    /**
     * Returns true if the image by path is cached
     * @static
     * @param {String} path - Path of the cached image
     * @return {Boolean} Image by path is cached
     */
    static isImageCachedByPath(path) {
        return this.isImageCachedByKey(this._generateKey(path));
    }

    /**
     * Returns true if the preloading is started
     * @static
     * @return {Boolean} Preloading is started
     */
    static isStarted() {
        return !!this._startTime;
    }

    // L methods

    /**
     * Logs the message in the console
     * @private
     * @static
     * @param {String} message - Message
     */
    static _log(message) {
        if (!this._debugging || !message) {
            return;
        }

        console.log(message);
    }

    // O methods

    /**
     * Processes the loading of the data
     * @private
     * @static
     * @param {WebAudio | Bitmap} data - Data
     */
    static _onFileLoad(data) {
        this._loaded++;

        this._log(`Loaded ${data instanceof WebAudio ? 'audio': 'image'}: ${data.url}`);

        if (this._fileLoadListeners) {
            const obj = {
                file: data,
                loadded: this._loaded,
                total: this.getTotal()
            };

            this._fileLoadListeners.forEach((callback) => {
                callback(obj);
            });
        }
    }

    /**
     * Adds a callback function to handle file load
     * All callback functions will be cleared after the preload is finished
     * Callback function takes 1 argument - object with following properties:
     * file (WebAudio or Bitmap), loaded, total
     *
     * @static
     *
     * @param {Function} callback - Callback
     *
     * @example
     * DKTools.PreloadManager.onFileLoad(() => {
     *     Graphics.updateLoading();
     * });
     */
    static onFileLoad(callback) {
        if (!this._fileLoadListeners) {
            this._fileLoadListeners = [];
        }

        this._fileLoadListeners.push(callback);
    }

    /**
     * Adds a callback function to handle finish of preloading
     * All callback functions will be cleared after the preload is finished
     * Callback function takes 1 argument - object with following properties:
     * loaded, skipped, preloadingTime (seconds), total
     *
     * @static
     *
     * @param {Function} callback - Callback
     *
     * @example
     * DKTools.PreloadManager.onFinish(() => {
     *     Graphics.endLoading();
     * });
     */
    static onFinish(callback) {
        if (!this._finishListeners) {
            this._finishListeners = [];
        }

        this._finishListeners.push(callback);
    }

    // P methods

    /**
     * Adds the object to preload queue
     *
     * @private
     * @static
     *
     * @param {String} type - Type (audio or image)
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory
     * @param {Boolean} [object.caching] - Caching
     */
    static _preload(type, object) {
        if (object instanceof Object && DKTools.Utils.isString(object.path)) {
            const entity = new DKTools.IO.Directory(object.path);

            if (entity.isDirectory()) {
                if (Utils.isNwjs() || DKTools.IO.mode === DKTools.IO.MODE_NWJS_STAMP) {
                    const options = { sync: true };
                    let files = [];

                    if (this._files[object.path]) {
                        files = this._files[object.path];
                    } else {
                        if (type === 'audio') {
                            files = entity.getAudioFiles(options).data || [];
                        } else if (type === 'image') {
                            files = entity.getImageFiles(options).data || [];
                        }

                        this._files[object.path] = files;
                    }

                    files.forEach((file) => {
                        const fullPath = file.getFullPath();

                        if (this._queue[type][fullPath]) {
                            return;
                        }

                        if (type === 'audio') {
                            this._processAudioFile(file, object);
                        } else if (type === 'image') {
                            this._processImageFile(file, object);
                        }
                    });
                } else {
                    throw new Error('Web browsers and mobile phones cannot load directories!');
                }
            } else {
                let path = object.path;

                if (!path.includes('.')) {
                    if (type === 'image') {
                        path += '.png';
                    } else if (type === 'audio') {
                        path += '.ogg';
                    }
                }

                const file = new DKTools.IO.File(path);
                const fullPath = file.getFullPath();

                if (this._queue[type][fullPath]) {
                    return;
                }

                if (file.isFile()) {
                    if (type === 'audio') {
                        this._processAudioFile(file, object);
                    } else if (type === 'image') {
                        this._processImageFile(file, object);
                    }
                } else {
                    console.error('This is not a file: ' + fullPath);
                }
            }
        }
    }

    /**
     * @private
     * @param {DKTools.IO.File} file
     * @param {Object} object
     */
    static _processAudioFile(file, object) {
        const fullPath = file.getFullPath();
        const normalizedPath = DKTools.IO.reverseSlashes(fullPath);

        if (this._queue.audio[normalizedPath]) {
            return;
        }

        const folder = file.getDirectoryName();
        const name = file.getName();

        if (object.caching) {
            if (this.isAudioCachedByPath(normalizedPath)) {
                this._log('Audio already preloaded: ' + normalizedPath + '. Skipped...');

                if (folder === 'se' && AudioManager.isStaticSe({ name })) {
                    this.releaseAudioByPath(normalizedPath);
                }

                return;
            }
        }

        this._queue.audio[normalizedPath] = { ...object, path: normalizedPath };
    }

    /**
     * @private
     * @param {DKTools.IO.File} file
     * @param {Object} object
     */
    static _processImageFile(file, object) {
        const fullPath = file.getFullPath();
        const normalizedPath = DKTools.IO.reverseSlashes(fullPath);

        if (this._queue.image[normalizedPath]) {
            return;
        }

        if (object.caching) {
            if (this.isImageCachedByPath(normalizedPath)) {
                this._log('Image already preloaded: ' + normalizedPath + '. Skipped...');

                return;
            }
        }

        this._queue.image[normalizedPath] = { ...object, path: normalizedPath };
    }

    /**
     * Processes audio loading
     * @static
     * @private
     * @return {Promise[]} Loaded audio files
     */
    static _processLoadAudioFiles() {
        const buffers = [];

        _.forEach(this._queue.audio, (data) => {
            const file = new DKTools.IO.File(data.path);
            const fullPath = file.getFullPath();

            if (file.isFile()) {
                if (file.isAudio()) {
                    if (this.isAudioCachedByPath(fullPath)) {
                        this._skipped++;
                        this._log('Audio already preloaded: ' + fullPath + '. Skipped...');

                        return;
                    }

                    const webAudio = file.loadAudio({ ...data.options });

                    if (webAudio) {
                        if (data.caching) {
                            this._cache.audio[this._generateKey(webAudio.url)] = webAudio;
                        }

                        buffers.push(webAudio);
                    } else {
                        this._skipped++;
                        this._log('Cannot load an audio: ' + fullPath + '. Skipped...');
                    }
                } else {
                    this._skipped++;
                    this._log('This is not an audio: ' + fullPath + '. Skipped...');
                }
            } else {
                this._skipped++;
                this._log('This is not a file: ' + data.path + '. Skipped...');
            }
        });

        return buffers.map(buffer => DKTools.Utils.WebAudio.loadAsync(buffer).then(() => this._onFileLoad(buffer)));
    }

    /**
     * Processes image loading
     * @static
     * @private
     * @return {Promise[]} Loaded image files
     */
    static _processLoadImageFiles() {
        const bitmaps = [];

        _.forEach(this._queue.image, (data) => {
            const file = new DKTools.IO.File(data.path);
            const fullPath = file.getFullPath();

            if (file.isFile()) {
                if (file.isImage()) {
                    if (this.isImageCachedByPath(fullPath)) {
                        this._skipped++;
                        this._log('Image already preloaded: ' + fullPath + '. Skipped...');

                        return;
                    }

                    const bitmap = DKTools.Utils.Bitmap.load({
                        ...data.options,
                        folder: file.getPath(),
                        filename: file.getName()
                    });

                    if (bitmap) {
                        if (data.caching) {
                            this._cache.image[this._generateKey(bitmap.url)] = bitmap;
                        }

                        bitmaps.push(bitmap);
                    } else {
                        this._skipped++;
                        this._log('Cannot load an image: ' + fullPath + '. Skipped...');
                    }
                } else {
                    this._skipped++;
                    this._log('This is not an image: ' + fullPath + '. Skipped...');
                }
            } else {
                this._skipped++;
                this._log('This is not a file: ' + data.path + '. Skipped...');
            }
        });

        return bitmaps.map(bitmap =>
            DKTools.Utils.Bitmap.loadAsync(bitmap)
                .then(() => this._onFileLoad(bitmap)));
    }

    /**
     * Adds the audio to preload queue
     * @static
     *
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory (only for local mode)
     * @param {Boolean} [object.caching] - Caching
     *
     * @example
     * // folder preloading
     * const path = 'audio/se/';
     *
     * DKTools.PreloadManager.preloadAudio({
     *     path: path,
     *     caching: false
     * });
     *
     * DKTools.PreloadManager.start();
     *
     * @example
     * // file preloading
     * // auto converts extension for mobile devices
     * const path = 'audio/se/Cancel1.ogg';
     *
     * DKTools.PreloadManager.preloadAudio({
     *     path: path,
     *     caching: false
     * });
     *
     * DKTools.PreloadManager.start();
     */
    static preloadAudio(object) {
        this._preload('audio', object);
    }

    /**
     * Adds the image to preload queue
     * @static
     *
     * @param {Object} object - Object with parameters
     *
     * @param {String} object.path - Path to file or directory (only for local mode)
     * @param {Boolean} [object.caching] - Caching
     *
     * @example
     * // folder preloading
     * const path = 'img/system/';
     *
     * DKTools.PreloadManager.preloadImage({
     *     path: path,
     *     caching: false
     * });
     *
     * DKTools.PreloadManager.start();
     *
     * @example
     * // file preloading
     * const path = 'img/system/Window.png';
     *
     * DKTools.PreloadManager.preloadImage({
     *     path: path,
     *     caching: false
     * });
     *
     * DKTools.PreloadManager.start();
     */
    static preloadImage(object) {
        this._preload('image', object);
    }

    // R methods

    /**
     * Releases the audio by key from a cache
     * @static
     * @param {String} key - Key of the cached audio
     */
    static releaseAudioByKey(key) {
        delete this._cache.audio[key];
    }

    /**
     * Releases the audio by path from a cache
     * @static
     * @param {String} path - Path of the cached audio
     */
    static releaseAudioByPath(path) {
        this.releaseAudioByKey(this._generateKey(path));
    }

    /**
     * Releases the image by key from a cache
     * @static
     * @param {String} key - Key of the cached image
     */
    static releaseImageByKey(key) {
        delete this._cache.image[key];
    }

    /**
     * Releases the image by path from a cache
     * @static
     * @param {String} path - Path of the cached image
     */
    static releaseImageByPath(path) {
        this.releaseImageByKey(this._generateKey(path));
    }

    // S methods

    /**
     * Sets the output of debugging information to the console
     * Each finish resets debugging
     * @static
     * @param {Boolean} enabled - Enable output
     */
    static setDebugging(enabled) {
        this._debugging = enabled || false;
    }

    /**
     * Starts the preloading
     * Returns the promise
     * @static
     * @return {Promise}
     */
    static start() {
        const total = this.getTotal();

        this._loaded = 0;
        this._skipped = 0;
        this._startTime = new Date();
        this._finishTime = null;

        if (total === 0) {
            return Promise.resolve()
                .then(() => this._finish());
        }

        this._log('DKTools Preload Manager is running... \n' +
            'Total files to load: ' + total);

        const audioPromise = Promise.all(this._processLoadAudioFiles());
        const imagePromise = Promise.all(this._processLoadImageFiles());

        return Promise.all([audioPromise, imagePromise])
            .then(() => this._finish());
    }

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
        value: { audio: {}, image: {} },
        writable: true
    },

    /**
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PreloadManager
     */
    _cache: {
        value: { audio: {}, image: {} },
        writable: true
    },

    /**
     * @private
     * @readonly
     * @type {Object}
     * @memberof DKTools.PreloadManager
     */
    _files: {
        value: {}
    }

});



//===========================================================================
// DKTools.StartupManager
//===========================================================================

/**
 * Startup manager class
 * @class
 * @memberof DKTools
 */
DKTools.StartupManager = class {

    // initialize methods

    /**
     * Initializes the manager
     *
     * @static
     * @async
     */
    static async initialize() {

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._isReady = false;

        await this.checkErrors();
        await this.initializeModules();

        this._isReady = true;
    }

    /**
     * Initializes modules
     * @static
     * @async
     */
    static async initializeModules() {
        // to be overridden by plugins
    }

    // C methods

    /**
     * Checks the minimal version of RPG Maker
     * @private
     * @static
     */
    static _checkRPGMakerVersion() {
        const version = '1.0.0';

        if (!Utils.checkRMVersion(version)) {
            throw new Error('Required to update RPG Maker MZ to minimal version %1 (Installed: %2)'
                .format(version, Utils.RPGMAKER_VERSION));
        }
    }

    /**
     * Checks whether the browser can use the "localStorage API"
     * @private
     * @static
     */
    static _checkWebStorage() {
        if (!Utils.isNwjs() && !window.hasOwnProperty('localStorage')) {
            throw new Error('Your browser does not support localStorage API');
        }
    }

    /**
     * Checks the possible errors
     * @static
     * @async
     */
    static async checkErrors() {
        await this._checkRPGMakerVersion();
        await this._checkWebStorage();
    }

    // I methods

    /**
     * Returns true if the manager is ready
     * @static
     * @return {Boolean} Manager is ready
     */
    static isReady() {
        return this._isReady;
    }

};



//===========================================================================
// DKTools.Event
//===========================================================================

/**
 * Event class
 * @class
 * @memberof DKTools
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
DKTools.Event = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // properties

    /**
     * Gets id of the event
     * @return {Number | String} Id of the event
     */
    get id() {
        return this._id;
    }

    /**
     * Gets target of the event
     * @return {DKTools.Sprite | DKTools.Window | DKTools.Scene} Target of the event
     */
    get target() {
        return this._target;
    }

    /**
     * Gets manager of the event
     * @return {DKTools.EventsManager} Manager of the event
     */
    get manager() {
        return this._manager;
    }

    /**
     * Gets type of the event
     * @return {String} Type of the event
     */
    get type() {
        return this._type;
    }

    /**
     * Gets time of one repeat
     * @return {Number} Time of one repeat
     */
    get repeatTime() {
        return this._repeatTime;
    }

    /**
     * Gets amount of repeats
     * @return {Number} Amount of repeats
     */
    get repeats() {
        return this._repeats;
    }

    /**
     * Gets remaining time of current repeat
     * @return {Number} Remaining time of current repeat
     */
    get remainingTime() {
        return this._remainingTime;
    }

    /**
     * Sets remaining time of current repeat
     * @param {Number} value - Value
     */
    set remainingTime(value) {
        this._remainingTime = value;
    }

    /**
     * Remaining amount of repeats
     * @return {Number} Remaining amount of repeats
     */
    get remainingRepeats() {
        return this._remainingRepeats;
    }

    /**
     * Sets remaining amount of repeats
     * @param {Number} value - Value
     */
    set remainingRepeats(value) {
        this._remainingRepeats = value;
    }

    /**
     * Gets remaining time of pause
     * @return {Number} remaining time of pause
     */
    get remainingPauseTime() {
        return this._remainingPauseTime;
    }

    /**
     * Sets remaining time of pause
     * @param {Number} value - Value
     */
    set remainingPauseTime(value) {
        this._remainingPauseTime = value;
    }

    // initialize methods

    /**
     * Initializes the event
     *
     * @param {Object} [object] - Parameters
     *
     * @param {Number | String} [object.id] - ID of the event
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
         * @type {Number | String | *}
         */
        this._id = object.id;

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
        this._repeats = _.defaultTo(object.repeats, -1);

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
    }

    // C methods

    /**
     * Calls on pause handler
     * @private
     */
    _callOnPauseHandler() {
        if (this._canCallOnPauseHandler()) {
            this._onPause(this);
        }
    }

    /**
     * Calls on repeat handler
     * @private
     */
    _callOnRepeatHandler() {
        if (this._canCallOnRepeatHandler()) {
            this._onRepeat(this);
        }
    }

    /**
     * Calls on reset handler
     * @private
     */
    _callOnResetHandler() {
        if (this._canCallOnResetHandler()) {
            this._onReset(this);
        }
    }

    /**
     * Calls on start handler
     * @private
     */
    _callOnStartHandler() {
        if (this._canCallOnStartHandler()) {
            this._onStart(this);
        }

        this._started = true;
    }

    /**
     * Calls on success handler
     * @private
     * @param {Boolean} [forcedSuccess=false]
     */
    _callOnSuccessHandler(forcedSuccess = false) {
        if (this._canCallOnSuccessHandler() || forcedSuccess && this.hasOnSuccessHandler()) {
            this._onSuccess(this);
        }
    }

    /**
     * Calls on update handler
     * @private
     * @param {*} [data] - Data
     */
    _callOnUpdateHandler(data) {
        if (this._canCallOnUpdateHandler()) {
            this._onUpdate(this, data);
        }
    }

    /**
     * Calls on failure handler
     * @private
     */
    _callOnFailHandler() {
        if (this._canCallOnFailHandler()) {
            this._onFail(this);
        }
    }

    /**
     * Returns true if can call on pause handler
     * @private
     * @return {Boolean} Can call on pause handler
     */
    _canCallOnPauseHandler() {
        return this.hasOnPauseHandler() && this.isPaused();
    }

    /**
     * Returns true if can call on repeat handler
     * @private
     * @return {Boolean} Can call on repeat handler
     */
    _canCallOnRepeatHandler() {
        return this.hasOnRepeatHandler();
    }

    /**
     * Returns true if can call on reset handler
     * @private
     * @return {Boolean} Can call on reset handler
     */
    _canCallOnResetHandler() {
        return this.hasOnResetHandler();
    }

    /**
     * Returns true if can call on start handler
     * @private
     * @return {Boolean} Can call on start handler
     */
    _canCallOnStartHandler() {
        return this.hasOnStartHandler() && !this.isStarted();
    }

    /**
     * Returns true if can call on success handler
     * @private
     * @return {Boolean} Can call on success handler
     */
    _canCallOnSuccessHandler() {
        return this.hasOnSuccessHandler() && this.isFinished();
    }

    /**
     * Returns true if can call on update handler
     * @private
     * @return {Boolean} Can call on update handler
     */
    _canCallOnUpdateHandler() {
        return this.hasOnUpdateHandler() && this.isUpdated();
    }

    /**
     * Returns true if can call on failure handler
     * @private
     * @return {Boolean} Can call on failure handler
     */
    _canCallOnFailHandler() {
        return this.hasOnFailHandler();
    }

    /**
     * Clears the remaining time of the event repeat
     * @private
     */
    _clearRemainingRepeats() {
        this._remainingRepeats = 0;
    }

    /**
     * Clears the remaining time of the event repeat
     * @private
     */
    _clearRemainingTime() {
        this._remainingTime = 0;
    }

    // F methods

    /**
     * Finishes the event
     * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
     */
    finish(forcedSuccess = false) {
        if (this.isFinished() || forcedSuccess) {
            this._callOnSuccessHandler(forcedSuccess);
        } else {
            this._callOnFailHandler();
        }

        this._clearRemainingTime();
        this._clearRemainingRepeats();
    }

    // G methods

    /**
     * Returns the elapsed repeats
     * @return {Number} Elapsed repeats
     */
    getElapsedRepeats() {
        return this._repeats - this._remainingRepeats;
    }

    /**
     * Returns the elapsed time
     * @return {Number} Elapsed time
     */
    getElapsedTime() {
        return this._repeatTime - this._remainingTime;
    }

    // H methods

    /**
     * Returns true if the event has the manager
     * @return {Boolean} Event has the manager
     */
    hasManager() {
        return !!this._manager;
    }

    /**
     * Returns true if the event has the on failure handler
     *
     * @return {Boolean} Event has the on failure handler
     */
    hasOnFailHandler() {
        return !!this._onFail;
    }

    /**
     * Returns true if the event has the on pause handler
     * @return {Boolean} Event has the on pause handler
     */
    hasOnPauseHandler() {
        return !!this._onPause;
    }

    /**
     * Returns true if the event has the on repeat handler
     * @return {Boolean} Event has the on repeat handler
     */
    hasOnRepeatHandler() {
        return !!this._onRepeat;
    }

    /**
     * Returns true if the event has the on reset handler
     * @return {Boolean} Event has the on reset handler
     */
    hasOnResetHandler() {
        return !!this._onReset;
    }

    /**
     * Returns true if the event has the on start handler
     * @return {Boolean} Event has the on start handler
     */
    hasOnStartHandler() {
        return !!this._onStart;
    }

    /**
     * Returns true if the event has the on success handler
     * @return {Boolean} Event has the on success handler
     */
    hasOnSuccessHandler() {
        return !!this._onSuccess;
    }

    /**
     * Returns true if the event has the on update handler
     * @return {Boolean} Event has the on update handler
     */
    hasOnUpdateHandler() {
        return !!this._onUpdate;
    }

    /**
     * Returns true if the event has the target
     * @return {Boolean} Event has the target
     */
    hasTarget() {
        return !!this._target;
    }

    /**
     * Returns true if the event has the type
     * @return {Boolean} Event has the type
     */
    hasType() {
        return !!this._type;
    }

    // I methods

    /**
     * Returns true if the event is animation
     *
     * @return {Boolean} Event is animation
     */
    isAnimation() {
        return this instanceof DKTools.Animation;
    }

    /**
     * Returns true if the event is action of an animation
     *
     * @return {Boolean} Event is action of an animation
     */
    isAnimationAction() {
        return this instanceof DKTools.Animation.Action;
    }

    /**
     * Returns true if the event if finished
     *
     * @return {Boolean} Event if finished
     */
    isFinished() {
        return this._remainingTime === 0 && this._remainingRepeats === 0;
    }

    /**
     * Returns true if the event is paused
     *
     * @return {Boolean} Event is paused
     */
    isPaused() {
        return this._remainingPauseTime !== 0;
    }

    /**
     * Returns true if the event is started
     *
     * @return {Boolean} Event is started
     */
    isStarted() {
        return this._started;
    }

    /**
     * Returns true if the event is updated
     *
     * @return {Boolean} Event is updated
     */
    isUpdated() {
        return this.isStarted() && !this.isPaused() && !this.isFinished();
    }

    // P methods

    /**
     * Pauses the event
     *
     * @param {Number} [duration=-1] - Duration of pause
     */
    pause(duration = -1) {
        this._remainingPauseTime = duration;
    }

    // R methods

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
    }

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
    }

    /**
     * Removes the event
     * Returns true if the event was removed
     * @return {Boolean} Event was removed
     */
    remove() {
        if (this.hasTarget()) {
            return this._target.removeEvent(this);
        }

        return true;
    }

    /**
     * Repeats the event
     */
    repeat() {
        if (this._remainingRepeats > 0) {
            this._remainingRepeats--;
        }

        this._resetRemainingTime();
        this._callOnRepeatHandler();
    }

    /**
     * Resets the event
     */
    reset() {
        this._resetRemainingTime();
        this._resetRemainingRepeats();
        this._callOnResetHandler();
    }

    /**
     * Resumes the event
     */
    resume() {
        this._remainingPauseTime = 0;
    }

    // S methods

    /**
     * Sets the manager
     * @param {DKTools.EventsManager} manager - Manager
     */
    setManager(manager) {
        /**
         * @private
         * @readonly
         * @type {DKTools.EventsManager}
         */
        this._manager = manager;
    }

    /**
     * Sets the on failure handler
     * @param {Function} handler - Handler
     */
    setOnFailHandler(handler) {
        this._onFail = handler;
    }

    /**
     * Sets the on pause handler
     * @param {Function} handler - Handler
     */
    setOnPauseHandler(handler) {
        this._onPause = handler;
    }

    /**
     * Sets the on repeat handler
     * @param {Function} handler - Handler
     */
    setOnRepeatHandler(handler) {
        this._onRepeat = handler;
    }

    /**
     * Sets the on reset handler
     * @param {Function} handler - Handler
     */
    setOnResetHandler(handler) {
        this._onReset = handler;
    }

    /**
     * Sets the on start handler
     * @param {Function} handler - Handler
     */
    setOnStartHandler(handler) {
        this._onStart = handler;
    }

    /**
     * Sets the on success handler
     *
     * @param {Function} handler - Handler
     */
    setOnSuccessHandler(handler) {
        this._onSuccess = handler;
    }

    /**
     * Sets the on update handler
     * @param {Function} handler - Handler
     */
    setOnUpdateHandler(handler) {
        this._onUpdate = handler;
    }

    /**
     * Sets the target
     * @param {DKTools.Sprite | DKTools.Window | *} target - Target
     */
    setTarget(target) {
        this._target = target;
    }

    /**
     * Stops the event
     * @param {Boolean} [forcedSuccess=false] - Forced successful completion of the event
     */
    stop(forcedSuccess = false) {
        this.finish(forcedSuccess);
        this.reset();
    }

    // U methods

    /**
     * Updates the event
     * @private
     * @param {*} [data] - Data
     */
    _update(data) {
        this._callOnUpdateHandler(data);
        this._updateRemainingRepeats();
    }

    /**
     * Updates the pause
     *
     * @private
     */
    _updatePause() {
        this._callOnPauseHandler();
        this._updateRemainingPauseTime();
    }

    /**
     * Updates the remaining pause time
     *
     * @private
     */
    _updateRemainingPauseTime() {
        if (this._remainingPauseTime > 0) {
            this._remainingPauseTime--;
        }
    }

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
    }

    /**
     * Updates the remaining time
     *
     * @private
     */
    _updateRemainingTime() {
        if (this._remainingTime > 0) {
            this._remainingTime--;
        }
    }

    /**
     * Updates the event
     * @param {*} [data] - Data
     */
    update(data) {
        if (!this.isPaused()) {
            this._callOnStartHandler();
            this._update(data);

            if (this.isFinished()) {
                this.finish();
            }
        } else {
            this._updatePause();
        }
    }

};



//===========================================================================
// DKTools.Animation
//===========================================================================

/**
 * Animation class
 * @class
 * @extends DKTools.Event
 * @memberof DKTools
 * @param {Object} object - object with parameters
 */
DKTools.Animation = class extends DKTools.Event {

    // properties

    /**
     * Gets actions of the animation
     * @return {DKTools.Animation.Action[]} Actions of the animation
     */
    get actions() {
        return this._actions;
    }

    // initialize methods

    /**
     * Initializes the animation
     * @override
     * @param {DKTools.Animation | Object} [object] - DKTools.Animation or parameters
     */
    initialize(object) {

        /**
         * @private
         * @readonly
         * @type {Array}
         */
        this._actions = [];

        super.initialize.apply(this, arguments);
    }

    // A methods

    /**
     * Adds the action
     * @param {DKTools.Animation.Action} action - Action
     */
    addAction(action) {
        if (!action) {
            return;
        }

        if (!Number.isFinite(action.startTime)) {
            action.startTime = 0;
        }

        if (!Number.isFinite(action.endTime) && Number.isFinite(this._repeatTime)) {
            action.endTime = this._repeatTime;
        }

        action.setAnimation(this);

        this._actions.push(action);
    }

    /**
     * Adds the actions
     * @param {DKTools.Animation.Action[]} actions - Actions
     */
    addActions(actions) {
        actions.forEach((action) => {
            this.addAction(action);
        });
    }

    // C methods

    /**
     * Returns true if can update the action
     *
     * @private
     * @return {Boolean} Can update the action
     */
    _canUpdateAction(action) {
        return _.inRange(this.getElapsedTime(), action.startTime, action.endTime);
    }

    // H methods

    /**
     * Returns true if the animation has the action
     * @param {DKTools.Animation.Action} action - Action
     * @return {Boolean} Animation has the action
     */
    hasAction(action) {
        return this._actions.includes(action);
    }

    /**
     * Returns true if the animation has the actions
     * @return {Boolean} Animation has the actions
     */
    hasActions() {
        return this._actions.length > 0;
    }

    // I methods

    /**
     * Returns true if the action is finished
     * @param {DKTools.Animation.Action} action - Action
     * @return {Boolean} Action is finished
     */
    isActionFinished(action) {
        return action.isStarted() && !action.isPaused() && this.getElapsedTime() + 1 >= action.endTime;
    }

    /**
     * Returns true if the action is updated
     * @param {DKTools.Animation.Action} action - Action
     * @return {Boolean} Action is updated
     */
    isActionUpdated(action) {
        return action.isStarted() && !action.isPaused() && this._canUpdateAction(action);
    }

    /**
     * Returns true if the animation if finished
     * @override
     * @return {Boolean} Animation if finished
     */
    isFinished() {
        return super.isFinished.apply(this, arguments) || !this.hasActions();
    }

    // R methods

    /**
     * Removes the action
     * @version 1.1.0
     * @param {DKTools.Animation.Action} action - Action
     */
    removeAction(action) {
        if (this.hasAction(action)) {
            _.pull(this._actions, action);
        }
    }

    /**
     * Repeats the animation
     * @override
     */
    repeat() {
        this.repeatActions();

        super.repeat.apply(this, arguments);
    }

    /**
     * Repeats the actions
     */
    repeatActions() {
        this._actions.forEach((action) => {
            action.repeat();
        });
    }

    /**
     * Resets the animation
     * @override
     */
    reset() {
        this.resetActions();

        super.reset.apply(this, arguments);
    }

    /**
     * Resets the actions
     */
    resetActions() {
        _.forEach(this._actions, function(action) {
            action.reset();
        });
    }

    // U methods

    /**
     * Updates the animation
     * @private
     * @override
     * @param {*} [data] - Data
     */
    _update(data) {
        this._updateActions();

        super._update.apply(this, arguments);
    }

    /**
     * Updates the action
     * @private
     * @param {DKTools.Animation.Action} action - Action
     */
    _updateAction(action) {
        if (this._canUpdateAction(action)) {
            action.update();
        } else if (this.getElapsedTime() + 1 === action.endTime && this.isActionFinished(action)) {
            action.finish();
        }
    }

    /**
     * Updates the actions
     * @private
     */
    _updateActions() {
        this._actions.forEach((action) => {
            this._updateAction(action);
        });
    }

};



//===========================================================================
// DKTools.Animation.Action
//===========================================================================

/**
 * Animation action class
 * @class
 * @extends DKTools.Event
 * @memberof DKTools.Animation
 * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
 */
DKTools.Animation.Action = class extends DKTools.Event {

    // actions

    /**
     * Creates an action to change the frame of a target
     * Returns the action
     * Only for sprites
     * @version 1.1.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Frame(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;
            const frame = target.frame;

            const x = (this._data.x - frame.x) / remainingTime;
            const y = (this._data.y - frame.y) / remainingTime;
            const width = (this._data.width - frame.width) / remainingTime;
            const height = (this._data.height - frame.height) / remainingTime;
            const newFrame = new Rectangle(frame.x + x, frame.y + y,
                frame.width + width, frame.height + height);

            target.setFrame(newFrame.x, newFrame.y, newFrame.width, newFrame.height);
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.setFrame(
                this._data.x, this._data.y, this._data.width, this._data.height);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to move a target
     * Returns the action
     * @version 1.1.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Move(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;

            const x = (this._data.x - target.x) / remainingTime;
            const y = (this._data.y - target.y) / remainingTime;
            const newX = target.x + x;
            const newY = target.y + y;

            target.position.set(newX, newY);
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.position.set(this._data.x, this._data.y);
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the opacity of a target
     * Returns the action
     * @version 1.1.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Opacity(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;

            target.opacity = target.opacity + (this._data - target.opacity) / remainingTime;
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.opacity = this._data;
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to rotate a target
     * Returns the action
     * @version 1.1.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Rotation(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;
            const rotation = (this._data - target.rotation) / remainingTime;

            target.rotation = target.rotation + rotation;
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.rotation = this._data;
        }.bind(action));

        return action;
    }

    /**
     * Creates an action to change the scale of a target
     * Returns the action
     * Only for sprites
     * @version 1.1.0
     * @static
     * @param {DKTools.Animation.Action | Object} object - Action or object with parameters
     * @return {DKTools.Animation.Action} Action
     */
    static Scale(object) {
        const action = new DKTools.Animation.Action(object);

        action.setOnUpdateHandler(function() {
            const remainingTime = this.getRemainingTime();
            const target = this.target;
            const scale = target.scale;

            const x = (this._data.x - scale.x) / remainingTime;
            const y = (this._data.y - scale.y) / remainingTime;
            const newX = scale.x + x;
            const newY = scale.y + y;

            target.scale.set(newX, newY);
        }.bind(action));

        action.setOnSuccessHandler(function() {
            this.target.scale.set(this._data.x, this._data.y);
        }.bind(action));

        return action;
    }

    // properties

    /**
     * Gets animation
     * @return {DKTools.Animation} Animation
     */
    get animation() {
        return this._animation;
    }

    /**
     * Gets start time of the action
     * @return {Number} Start time of the action
     */
    get startTime() {
        return this._startTime;
    }

    /**
     * Sets start time of the action
     * @param {Number} value - Value
     */
    set startTime(value) {
        this._startTime = value;
    }

    /**
     * Gets end time of the action
     * @return {Number} End time of the action
     */
    get endTime() {
        return this._endTime;
    }

    /**
     * Sets end time of the action
     * @param {Number} value - Value
     */
    set endTime(value) {
        this._endTime = value;
    }

    /**
     * Gets data of the action
     * @return {*} Data of the action
     */
    get data() {
        return this._data;
    }

    /**
     * Gets the target
     * @return {DKTools.Sprite | DKTools.Window | DKTools.Scene | null} Target
     */
    get target() {
        return this._target || (this._animation ? this._animation.target : null);
    }

    // initialize methods

    /**
     * Initializes the action
     * @override
     * @param {Object} object - Parameters
     * @param {Number} object.startTime - Start time of the action
     * @param {Number} object.endTime - End time of the action
     * @param {*} object.data - Data of the action
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

        super.initialize.apply(this, arguments);
    }

    // G methods

    /**
     * Returns the elapsed time
     * @override
     * @return {Number} Elapsed time
     */
    getElapsedTime() {
        return this._animation.getElapsedTime() - this._startTime;
    }

    /**
     * Returns the remaining time
     * @override
     * @return {Number} Remaining time
     */
    getRemainingTime() {
        return this._endTime - this._animation.getElapsedTime();
    }

    // I methods

    /**
     * Returns true if the action if finished
     * @override
     * @return {Boolean} Action if finished
     */
    isFinished() {
        return this._animation.isActionFinished(this);
    }

    /**
     * Returns true if the action is updated
     * @override
     * @return {Boolean} Action is updated
     */
    isUpdated() {
        return this._animation.isActionUpdated(this);
    }

    // R methods

    /**
     * Removes the action
     * @override
     */
    remove() {
        this._animation.removeAction(this);
    }

    /**
     * Repeats the action
     * @override
     */
    repeat() {
        this._callOnRepeatHandler();
    }

    /**
     * Resets the action
     * @override
     */
    reset() {
        this._callOnResetHandler();
    }

    // S methods

    /**
     * Sets the animation
     * @param {DKTools.Animation} animation - Animation
     */
    setAnimation(animation) {
        this._animation = animation;
    }

};



//===========================================================================
// DKTools.EventsManager
//===========================================================================

/**
 * Event manager class
 * @class
 * @memberof DKTools
 */
DKTools.EventsManager = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the event manager
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
    }

    // A methods

    /**
     * Adds the animation
     * @param {DKTools.Animation} animation - Animation to add
     * @return {DKTools.Animation | null} Added animation or null
     */
    addAnimation(animation) {
        return this.addEventToContainer(animation);
    }

    /**
     * Adds the event
     *
     * @param {DKTools.Event | DKTools.Animation | Object} object - Event or object with parameters for the event
     *
     * @param {Number | String | *} [object.id] - ID of the event
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
     * @return {DKTools.Event | DKTools.Animation | null} Added event or null
     */
    addEvent(object) {
        let event;

        if (object instanceof DKTools.Event || object instanceof DKTools.Animation) {
            event = object;
        } else if (object instanceof Object) {
            event = new DKTools.Event(object);
        }

        return this.addEventToContainer(event);
    }

    /**
     * Adds the event to container
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @return {DKTools.Event | DKTools.Animation | null} Added event or null
     */
    addEventToContainer(event) {
        if (!event) {
            return null;
        }

        if (!event.hasTarget()) {
            event.setTarget(this._target);
        }

        event.setManager(this);

        const container = this.getEventsContainerByType(event.type);

        container.push(event);

        return event;
    }

    /**
     * Adds the one time event
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {Number | String | *} [object.id] - ID of the event
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
     * @return {DKTools.Event} Added event
     */
    addOneTimeEvent(object) {
        object.repeatTime = 1;
        object.repeats = 0;

        return this.addEvent(object);
    }

    // C methods

    /**
     * Checks the event
     * @private
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @return {Boolean}
     */
    _checkEvent(event) {
        return event && !event.isFinished();
    }

    /**
     * Checks the events
     * @private
     */
    _checkEvents() {
        _.forEach(this._events, (container, type) => {
            this._events[type] = this._checkEventsContainer(container);
        });
    }

    /**
     * Checks a container with the events and removes the completed events
     * @private
     * @param {Array} container - Container for the events
     * @return {Array} Filtered array
     */
    _checkEventsContainer(container) {
        return container.filter(event => this._checkEvent(event));
    }

    /**
     * Clears the events
     * @param {String[] | String} [object] - Array with event types or event type
     */
    clearEvents(object) {
        if (object) {
            if (Array.isArray(object)) {
                object.forEach((type) => {
                    this._events[type] = [];
                });
            } else { // object - String
                this._events[object] = [];
            }
        } else {
            this._events = {};
        }
    }

    /**
     * Creates a container for the events
     *
     * @param {String} type - Type of the events
     * @return {Array} Container for the events
     */
    createEventsContainer(type) {
        if (!this._events[type]) {
            this._events[type] = [];
        }

        return this._events[type];
    }

    // F methods

    /**
     * Returns the found animation
     * @param {Number | String | *} id - ID of the animation
     * @param {String} [type] - Type of the animation
     * @return {DKTools.Animation | undefined} Animation
     */
    findAnimation(id, type) {
        return this.getAnimations(type)
                    .find(animation => animation.id === id);
    }

    /**
     * Returns the found event
     * @param {Number | String | *} id - ID of the event
     * @param {String} [type] - Type of the event
     * @return {DKTools.Event | DKTools.Animation | undefined} Event
     */
    findEvent(id, type) {
        return this.getEvents(type)
                    .find(event => event.id === id);
    }

    /**
     * Finishes the events
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess=false] - Forced success for the finish of the events
     */
    finishEvents(type, forcedSuccess = false) {
        this.iterateEventsContainer(type, (event) => {
            event.finish(forcedSuccess);
        });
    }

    // G methods

    /**
     * Returns an array with the all animations or animations of a certain type
     * @param {String} [type] - Type of animation
     * @return {Array} Array with the animations
     */
    getAnimations(type) {
        return this.getEvents(type)
                    .filter(event => event instanceof DKTools.Animation);
    }

    /**
     * Returns an index of the event in its container
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @return {Number} Index of the event in its container
     */
    getEventIndex(event) {
        return this.getEventsContainerByType(event.type).indexOf(event);
    }

    /**
     * Returns an array with the all events or events of a certain type
     * @param {String} [type] - Type of the events
     * @return {Array} Array with the events
     */
    getEvents(type) {
        if (type) {
            return this.getEventsContainerByType(type);
        }

        let events = [];

        Object.values(this._events).forEach((container) => {
            events = events.concat(container);
        });

        return events;
    }

    /**
     * Returns a container for the events by event type
     * @param {String} type - Type of the events
     * @return {Array} Container for the events
     */
    getEventsContainerByType(type) {
        return this._events[type] || this.createEventsContainer(type);
    }

    // H methods

    /**
     * Checks for existence of the animation in the object
     * Returns true if the animation exists
     * @param {DKTools.Animation} animation - Animation
     * @return {Boolean} Animation exists
     */
    hasAnimation(animation) {
        return animation instanceof DKTools.Animation
            && this.getEventIndex(animation) >= 0;
    }

    /**
     * Checks for existence of the animations of a certain type
     * Returns true if the animations exists
     * @param {String} [type] - Type of the animations
     * @return {Boolean} Animations exists
     */
    hasAnimations(type) {
        return this.getAnimations(type).length > 0;
    }

    /**
     * Checks for existence of the event in the object
     * Returns true if the event exists
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @return {Boolean} Event exists
     */
    hasEvent(event) {
        return this.getEventIndex(event) >= 0;
    }

    /**
     * Checks for existence of the events of a certain type
     * Returns true if the events exists
     * @param {String} [type] - Type of the events
     * @return {Boolean} Events exists
     */
    hasEvents(type) {
        return this.getEvents(type).length > 0;
    }

    // I methods

    /**
     * Checks the events for pause
     * Returns the conjunction of pauses of the events
     * @param {String} type - Type of the events
     * @return {Boolean} Conjunction of pauses of the events
     */
    isEventsPaused(type) {
        return this.getEventsContainerByType(type)
                    .every(event => event.isPaused());
    }

    /**
     * Performs a callback function for the events
     * @param {String} type - Type of the events
     * @param {Function} callback - Event processing function
     */
    iterateEventsContainer(type, callback) {
        this.getEventsContainerByType(type).forEach(callback);
    }

    // P methods

    /**
     * Pauses the events
     * @param {String} type - Type of the events
     * @param {Number} [duration=-1] - Duration of the pause
     */
    pauseEvents(type, duration = -1) {
        this.iterateEventsContainer(type, (event) => {
            event.pause(duration);
        });
    }

    // R methods

    /**
     * Removes the event from a container
     * Returns true if the event was removed
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @return {Boolean} Event was removed
     */
    removeEvent(event) {
        const index = this.getEventIndex(event);

        if (index >= 0) {
            const container = this.getEventsContainerByType(event.type);

            container[index] = null;

            return true;
        }

        return false;
    }

    /**
     * Resumes the events
     * @param {String} type - Type of the events
     */
    resumeEvents(type) {
        this.iterateEventsContainer(type, (event) => {
            event.resume();
        });
    }

    // S methods

    /**
     * Stops the events
     * @param {String} type - Type of the events
     * @param {Boolean} [forcedSuccess=false] - Forced success for the finish of the events
     */
    stopEvents(type, forcedSuccess = false) {
        this.iterateEventsContainer(type, (event) => {
            event.stop(forcedSuccess);
        });
    }

    // U methods

    /**
     * Updates the manager
     */
    update() {
        this._checkEvents();
    }

    /**
     * Updates the events from container
     * @param {String} type - Type of the events
     * @param {*} [data] - Data
     */
    updateEventsContainer(type, data) {
        this.iterateEventsContainer(type, (event) => {
            event.update(data);
        });
    }

};



//===========================================================================
// DKTools.Base
//===========================================================================

/**
 * Abstract base class for sprite and window
 * @class
 * @abstract
 * @mixin
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
 */
DKTools.Base = class {

    constructor() {
        throw new Error('This is an abstract class!');
    }

    // properties

    /**
     * Gets the coordinates of mouse inside the object
     * @return {PIXI.Point} Coordinates of mouse inside the object
     */
    get mouse() {
        return this.getLocalPoint(TouchInput.x, TouchInput.y);
    }

    /**
     * Gets time of mouse enter inside the object
     * @return {Number} Time of mouse enter inside the object
     */
    get mouseEnterTime() {
        return this._mouseEnterTime;
    }

    /**
     * Gets the coordinates of touch inside the object
     * @return {Point} Coordinates of touch inside the object
     */
    get touch() {
        return this.getLocalPoint(TouchInput.x, TouchInput.y);
    }

    /**
     * Gets number of pixels scrolling mouse on X axis
     * @return {Number} Number of pixels scrolling mouse on X axis
     */
    get wheelX() {
        return this._wheelX;
    }

    /**
     * Gets number of pixels scrolling mouse on Y axis
     * @return {Number} Number of pixels scrolling mouse on Y axis
     */
    get wheelY() {
        return this._wheelY;
    }

    /**
     * Gets events manager
     * @return {DKTools.EventsManager} Events manager
     */
    get eventsManager() {
        return this._eventsManager;
    }

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
     * @param {Number | String} [object.height] - The height of the object
     *
     * @example
     * const sprite = new DKTools.Sprite(0, 0, 100, 100);
     * => x = 0; y = 0; width = 100; height = 100;
     *
     * @example
     * const sprite = new DKTools.Sprite(Graphics);
     * => x = 0; y = 0; width = Graphics.boxWidth; height = Graphic.boxHeight;
     *
     * @example
     * const sprite = new DKTools.Sprite({ x: 0, y: 0, width: 100, height: 100 });
     * => x = 0; y = 0; width = 100; height = 100;
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
        } else if (Number.isFinite(object)) {
            x = object;
        }

        this._clearAll();
        this._createEventsManager();

        this.move(x, y);
        this.setupSize(width, height);
        this.setupAll();
    }

    // A methods

    /**
     * Activates the object
     */
    activate() {
        if (this.setActive(true)) {
            this.updateActivateEvents();
        }
    }

    /**
     * Returns the name of the actor
     * @param {Number} n - Number of the actor
     * @return {String} Name of the actor
     */
    actorName(n) {
        return Window_Base.prototype.actorName.apply(this, arguments);
    }

    /**
     * Adds the animation
     * @param {DKTools.Animation} animation - Animation to add
     * @return {DKTools.Animation} Animation
     */
    addAnimation(animation) {
        return this._eventsManager.addAnimation(animation);
    }

    /**
     * Adds the event
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {Number | String | *} [object.id] - ID of the event
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
     * @example
     * const sprite = new DKTools.Sprite();
     *
     * sprite.addEvent({
     *      type: 'update',
     *      onUpdate: () => {
     *          // code
     *      }
     * });
     *
     * @example
     * const sprite = new DKTools.Sprite();
     *
     * sprite.addEvent({
     *      type: 'update',
     *      repeats: 0,
     *      repeatTime: 60,
     *      onSuccess: () => {
     *          // code
     *      }
     * });
     *
     * @return {DKTools.Event} Added event
     */
    addEvent(object) {
        return this._eventsManager.addEvent(object);
    }

    /**
     * Adds the one time event
     *
     * @param {DKTools.Event | Object} object - Event or object with parameters for the event
     *
     * @param {Number | String | *} [object.id] - ID of the event
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
     * @return {DKTools.Event} Added event
     */
    addOneTimeEvent(object) {
        return this._eventsManager.addOneTimeEvent(object);
    }

    /**
     * Adds the filter
     * @param {*} filter - Filter
     */
    addFilter(filter) {
        if (!filter) {
            return;
        }

        if (this.filters && this.filters.length > 0) {
            this.filters.push(filter);
        } else {
            this.filters = [filter];
        }
    }

    // С methods

    /**
     * Clears all data
     * @private
     */
    _clearAll() {
        this._mouseEnterTime = 0;

        this._wheelX = 0;
        this._wheelY = 0;
    }

    /**
     * Creates the event manager
     * @private
     */
    _createEventsManager() {
        this._eventsManager = new DKTools.EventsManager(this);
    }

    /**
     * @param {Object} textState - Text state
     * @return {Number} Text height
     */
    calcTextHeight(textState) {
        if (!this.hasBitmap() || !textState) {
            return 0;
        }

        return Window_Base.prototype.calcTextHeight.apply(this, arguments);
    }

    /**
     * Returns true if the object can be updated and redrawn
     * @return {Boolean} Object can be updated and redrawn
     */
    canRedrawAll() {
        return this.hasBitmap();
    }

    /**
     * Checks all
     */
    checkAll() {
        this.updateCheckAllEvents();
    }

    /**
     * Clears the bitmap
     * Returns true if successfully completed
     * @return {Boolean} Successfully completed
     */
    clear() {
        return this.clearRect();
    }

    /**
     * Clears a rectangle
     * Returns true if successfully completed
     *
     * @param {Number | Rectangle | Object} [object] - The X coordinate or Rectangle or object with parameters
     * @param {Number | String} [y] - The Y coordinate or line number (String) (if object is Number)
     * @param {Number} [width] - Width of the rectangle (if object is Number)
     * @param {Number | String} [height] - Height of the rectangle or number of lines (String) (if object is Number)
     *
     * @param {Number} [object.x] - The X coordinate
     * @param {Number | String} [object.y] - The Y coordinate or line number (String)
     * @param {Number} [object.width] - Width of the rectangle
     * @param {Number | String} [object.height] - Height of the rectangle or number of lines (String)
     *
     * @return {Boolean} Successfully completed
     */
    clearRect(object, y, width, height) {
        if (!this.hasBitmap()) {
            return false;
        }

        let x = object; // object - Number

        if (object instanceof Object) {
            x = object.x;
            y = object.y;
            width = object.width;
            height = object.height;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.lineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            y = this.lineHeight() * parseFloat(height);
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();

        this.bitmap.clearRect(x, y, width, height);

        return true;
    }

    /**
     * Converts the escape characters
     * Returns the text with converted the escaped characters
     * @param {String} text - Text
     * @return {String} Text with converted the escaped characters
     */
    convertEscapeCharacters(text) {
        try {
            return Window_Base.prototype.convertEscapeCharacters.apply(this, arguments);
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
    }

    /**
     * Creates all objects
     */
    createAll() {
        this.updateCreateAllEvents();
    }

    // D methods

    /**
     * Deactivates the object
     */
    deactivate() {
        if (this.setActive(false)) {
            this.updateDeactivateEvents();
        }
    }

    /**
     * Draws all
     */
    drawAll() {
        this.updateDrawAllEvents();
    }

    /**
     * Draws a bitmap
     * Returns true if successfully completed
     *
     * @param {Bitmap | Object} object - Bitmap or object with parameters
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     *
     * @param {Boolean} [options.sync] - Draw if the bitmap is ready
     * @param {Function | Rectangle | Object} [options.source] - Source from bitmap. Function or Rectangle or object with parameters
     * @param {Function | Rectangle | Object} [options.destination] - Destination to bitmap. Function or  Rectangle or object with parameters
     * @param {Function} [options.callback] - Callback function, which should return an object with source and destination
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.source.x] - The X coordinate
     * @param {Number | String} [options.source.y] - The Y coordinate or line number (String)
     * @param {Number} [options.source.width] - Width of the rectangle
     * @param {Number | String} [options.source.height] - Height of the rectangle or number of lines (String)
     *
     * @param {Number} [options.destination.x] - The X coordinate
     * @param {Number | String} [options.destination.y] - The Y coordinate or line number (String)
     * @param {Number} [options.destination.width] - Width of the rectangle
     * @param {Number | String} [options.destination.height] - Height of the rectangle or number of lines (String)
     *
     * @example
     * Drawing half of the bitmap
     *
     * const sprite = new DKTools.Sprite(0, 0, 200, 200);
     *
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
     * @return {Boolean} Successfully completed
     */
    drawBitmap(object, options = {}) {
        if (!this.hasBitmap() || !object) {
            return false;
        }

        options = options || {};

        const bitmap = DKTools.Utils.Bitmap.load(object);

        if (!bitmap || options.sync && !bitmap.isReady()) {
            return false;
        }

        let result = true;

        bitmap.addLoadListener(() => {
            const isFunction = DKTools.Utils.isFunction;
            const isString = DKTools.Utils.isString;
            const lineHeight = this.lineHeight();
            const { paintOpacity, resetPaintOpacity } = options;
            let { source, destination } = options;
            let callbackResult = {};

            if (isFunction(options.callback)) {
                callbackResult = options.callback(bitmap, this);
            }

            source = source || callbackResult.source || {};
            destination = destination || callbackResult.destination || {};

            if (isFunction(source)) {
                source = source(bitmap, this);
            }

            if (isFunction(destination)) {
                destination = destination(bitmap, this);
            }

            const sx =  _.defaultTo(source.x, 0);
            const sw =  _.defaultTo(source.width, bitmap.width);
            let sy   =  _.defaultTo(source.y, 0);
            let sh   =  _.defaultTo(source.height, bitmap.height);

            const dx =  _.defaultTo(destination.x, 0);
            const dw =  _.defaultTo(destination.width, sw);
            let dy   =  _.defaultTo(destination.y, 0);
            let dh   =  _.defaultTo(destination.height, sh);

            if (sw === 0 || sh === 0 || dw === 0 || dh === 0) {
                result = false;

                return;
            }

            if (isString(sy)) { // line number
                sy = lineHeight * parseFloat(sy);
            }

            if (isString(sh)) { // number of lines
                sh = lineHeight * parseFloat(sh);
            }

            if (isString(dy)) { // line number
                dy = lineHeight * parseFloat(dy);
            }

            if (isString(dh)) { // number of lines
                dh = lineHeight * parseFloat(dh);
            }

            if (Number.isFinite(paintOpacity)) {
                this.changePaintOpacity(paintOpacity);
            }

            this.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh);

            if (resetPaintOpacity) {
                this.resetPaintOpacity();
            }
        });

        return result;
    }

    /**
     * Draws a bitmap
     * Asynchronous version of DKTools.Base.prototype.drawBitmap
     * Returns true if successfully completed
     *
     * @async
     *
     * @param {Bitmap | Object} object - Bitmap or object with parameters
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {String} object.folder - Path to file
     * @param {String} object.filename - Name of file
     * @param {Function} [object.listener] - Function of processing after loading a bitmap
     *
     * @param {Function | Rectangle | Object} [options.source] - Source from bitmap. Function or Rectangle or object with parameters
     * @param {Function | Rectangle | Object} [options.destination] - Destination to bitmap. Function or Rectangle or object with parameters
     * @param {Function} [options.callback] - Callback function, which should return an object with source and destination
     *
     * @param {Number} [options.source.x] - The X coordinate
     * @param {Number | String} [options.source.y] - The Y coordinate or line number (String)
     * @param {Number} [options.source.width] - Width of the rectangle
     * @param {Number | String} [options.source.height] - Height of the rectangle or number of lines (String)
     *
     * @param {Number} [options.destination.x] - The X coordinate
     * @param {Number | String} [options.destination.y] - The Y coordinate or line number (String)
     * @param {Number} [options.destination.width] - Width of the rectangle
     * @param {Number | String} [options.destination.height] - Height of the rectangle or number of lines (String)
     *
     * @return {Boolean} Successfully completed
     */
    async drawBitmapAsync(object, options = {}) {
        if (!object) {
            return false;
        }

        const bitmap = await DKTools.Utils.Bitmap.loadAsync(object);

        return this.drawBitmap(bitmap, options);
    }

    /**
     * Draws a character
     * Returns true if successfully completed
     *
     * @param {String} characterName - Character filename
     * @param {Number} characterIndex - Character index
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawCharacter(characterName, characterIndex, options = {}) {
        if (!this.hasBitmap() || characterName == null || characterIndex == null) {
            return false;
        }

        options = options || {};

        const bitmap = ImageManager.loadCharacter(characterName);
        const big = ImageManager.isBigCharacter(characterName);
        const pw = bitmap.width / (big ? 3 : 12);
        const ph = bitmap.height / (big ? 4 : 8);
        const sx = (characterIndex % 4 * 3 + 1) * pw;
        const sy = (Math.floor(characterIndex / 4) * 4) * ph;
        const source = new Rectangle(sx, sy, pw, ph);
        const pos = options.pos;
        let { x, y } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        x = x || 0;
        y = y || 0;

        return this.drawBitmap(bitmap, { ...options, source, destination: { x, y } });
    }

    /**
     * Draws a circle
     * Returns true if successfully completed
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.radius] - Radius of the circle
     * @param {String} [options.color] - Color of the circle
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawCircle(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos, radius, color, paintOpacity, resetPaintOpacity} = options;
        let { x, y } = options;

        if (radius === 0) {
            return false;
        }

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.lineHeight() * parseFloat(y);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.bitmap.drawCircle(x || 0, y || 0, radius || 1, color || 'white');

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a character face
     * Returns true if successfully completed
     *
     * @param {String} faceName - Face filename
     * @param {Number} faceIndex - Face index
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the face
     * @param {Number | String} [options.height] - Height of the face or number of lines (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, pos)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.rect.x] - The X coordinate
     * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
     * @param {Number} [options.rect.width] - Width of the face
     * @param {Number | String} [options.rect.height] -  Height of the face or number of lines (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawFace(faceName, faceIndex, options = {}) {
        if (!this.hasBitmap() || faceName == null || faceIndex == null) {
            return false;
        }

        options = options || {};

        const { pos, rect } = options;
        let { x, y, width, height } = options;

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

        width = width || ImageManager.faceWidth;
        height = height || ImageManager.faceHeight;

        const bitmap = ImageManager.loadFace(faceName);
        const pw = ImageManager.faceWidth;
        const ph = ImageManager.faceHeight;
        const sw = Math.min(width, pw);
        const sh = Math.min(height, ph);
        const sx = faceIndex % 4 * pw + (pw - sw) / 2;
        const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
        const source = new Rectangle(sx, sy, sw, sh);

        x = Math.floor((x || 0) + Math.max(width - pw, 0) / 2);
        y = Math.floor((y || 0) + Math.max(height - ph, 0) / 2);

        return this.drawBitmap(bitmap, { ...options, source, destination: { x, y } });
    }

    /**
     * Draws a gauge
     * Returns true if successfully completed
     *
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
     * @param {Number} [options.rate] - Gauge width rate
     * @param {String} [options.type] - Gauge type (horizontal or vertical)
     * @param {Boolean} [options.reversed] - Reversed gauge
     * @param {String} [options.gradient] - Gradient type (horizontal or vertical)
     * @param {String} [options.backgroundColor] - Background fill color
     * @param {String} [options.color] - Fill color
     * @param {String} [options.color1] - First gradient color (ignores other parameters: color)
     * @param {String} [options.color2] - Second gradient color (ignores other parameters: color)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.rect.x] - The X coordinate
     * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
     * @param {Number} [options.rect.width] - Width of the rectangle
     * @param {Number | String} [options.rect.height] - Height of the rectangle or number of lines (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawGauge(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        const { pos, rect, reversed, gradient, paintOpacity, resetPaintOpacity } = options;
        let { x, y, width, height, type, rate, backgroundColor, color, color1, color2 } = options;

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
            y = this.lineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.lineHeight() * parseFloat(height);
        }

        if (width === 0 || height === 0) {
            return false;
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        backgroundColor = _.defaultTo(backgroundColor, 'black');
        color = _.defaultTo(color, 'white');
        color1 = _.defaultTo(color1, color);
        color2 = _.defaultTo(color2, color);
        type = _.defaultTo(type, 'horizontal');
        rate = _.defaultTo(rate, 1);

        const gradientRect = { x, y, width, height };

        if (type === 'horizontal') {
            gradientRect.width *= rate;

            if (reversed) {
                gradientRect.x += width - gradientRect.width;
            }
        } else if (type === 'vertical') {
            gradientRect.height *= rate;

            if (reversed) {
                gradientRect.y += height - gradientRect.height;
            }
        } else {
            return false;
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.fillRect({ x, y, width, height, color: backgroundColor });

        this.gradientFillRect({ rect: gradientRect, color1, color2, vertical: gradient === 'vertical' });

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws an icon
     * Returns true if successfully completed
     *
     * @param {Number} iconIndex - Icon index
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawIcon(iconIndex, options = {}) {
        if (!this.hasBitmap() || iconIndex == null) {
            return false;
        }

        const bitmap = ImageManager.loadSystem('IconSet');
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = iconIndex % 16 * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        const source = new Rectangle(sx, sy, pw, ph);
        const pos = options.pos;
        let { x, y } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        return this.drawBitmap(bitmap, { ...options, source, destination: { x, y } });
    }

    /**
     * Draws a name of the item
     * Returns true if successfully completed
     *
     * @param {Object} item - Item
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Number} [options.iconX] - The X coordinate of the icon
     * @param {Number | String} [options.iconY] - The Y coordinate of the icon or line number (String)
     * @param {Point | Object} [options.iconPos] - Position of the icon (ignores other parameters of position: iconX, iconY)
     * @param {Number} [options.width] - Width of the item name
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.iconPos.x] - The X coordinate
     * @param {Number | String} [options.iconPos.y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawItemName(item, options = {}) {
        if (!this.hasBitmap() || !item) {
            return false;
        }

        options = options || {};

        const iconBoxWidth = ImageManager.iconWidth + 4;
        const { pos, iconPos, paintOpacity, resetPaintOpacity } = options;
        let { x, y, iconX, iconY } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (iconPos instanceof Object) {
            iconX = iconPos.x;
            iconY = iconPos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.lineHeight() * parseFloat(y);
        }

        x = x || 0;
        y = y || 0;
        iconX = _.defaultTo(iconX, x + 2);
        iconY = _.defaultTo(iconY, y + 2);

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.drawIcon(item.iconIndex, { x: iconX, y: iconY });

        this.drawText(item.name, {
            x: x + iconBoxWidth,
            y,
            width: (options.width || 312) - iconBoxWidth,
            height: options.height,
            align: 'left',
            font: options.font,
            textColor: options.textColor,
            resetFont: options.resetFont,
            resetTextColor: options.resetTextColor
        });

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a line
     * Returns true if successfully completed
     *
     * @param {Object} [options=0] - Options for drawing
     *
     * @param {Number} [options.x1] - The X coordinate of start of the line
     * @param {Number | String} [options.y1] - The Y coordinate of start of the line or line number (String)
     * @param {Number} [options.x2] - The X coordinate of end of the line
     * @param {Number | String} [options.y2] - The Y coordinate of end of the line or line number (String)
     * @param {Point | Object} [options.pos1] - Position for drawing (ignores other parameters of position: x1, y1)
     * @param {Point | Object} [options.pos2] - Position for drawing (ignores other parameters of position: x2, y2)
     * @param {String} [options.color] - Line color
     * @param {Number} [options.lineWidth] - Line width
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos1.x] - The X coordinate of start of the line
     * @param {Number | String} [options.pos1.y] - The Y coordinate of start of the line or line number (String)
     *
     * @param {Number} [options.pos2.x] - The X coordinate of start of the line
     * @param {Number | String} [options.pos2.y] - The Y coordinate of start of the line or line number (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawLine(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos1, pos2, color, lineWidth, paintOpacity, resetPaintOpacity } = options;
        let { x1, y1, x2, y2 } = options;

        if (lineWidth === 0) {
            return false;
        }

        if (pos1 instanceof Object) {
            x1 = pos1.x;
            y1 = pos1.y;
        }

        if (pos2 instanceof Object) {
            x2 = pos2.x;
            y2 = pos2.y;
        }

        if (DKTools.Utils.isString(y1)) { // line number
            y1 = this.lineHeight() * parseFloat(y1);
        }

        if (DKTools.Utils.isString(y2)) { // line number
            y2 = this.lineHeight() * parseFloat(y2);
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        DKTools.Utils.Bitmap.drawLine(this.bitmap, x1 || 0, y1 || 0, x2 || 0, y2 || 0, color, lineWidth);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a polygon
     * Returns true if successfully completed
     *
     * @param {Object} options - Options for drawing
     *
     * @param {Point[] | Object[]} [options.points] - Points or objects with parameters
     * @param {String} [options.color] - Line color
     * @param {Number} [options.lineWidth] - Line width
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.points[].x] - The X coordinate
     * @param {Number | String} [options.points[].y] - The Y coordinate or line number (String)
     *
     * @return {Boolean} Successfully completed
     */
    drawPolygon(options) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { points, paintOpacity, resetPaintOpacity } = options;

        if (!Array.isArray(points) || points.length === 0) {
            return false;
        }

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        for (let i = 0; i < points.length - 1; i++) {
            const point = points[i], nextPoint = points[i + 1];

            this.drawLine({ ...options, pos1: point, pos2: nextPoint });
        }

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Draws a text (special characters are supported)
     * Returns the width of the text
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Options for drawing
     *
     * @param {Object} [options.wrap] - Options for text wrap
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Point | Object} [options.pos] - Position of the text (ignores other parameters of position: x, y)
     * @param {Number} [options.startX] - Start X
     * @param {Number} [options.startY] - Start Y
     *
     * @param {Number} [options.wrap.maxWidth] - Max width of a text line
     * @param {Number} [options.wrap.maxLines] - Max lines
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @return {Number} Width of the text
     */
    drawTextEx(text, options = {}) {
        if (!this.hasBitmap() || text === '' || text == null) {
            return 0;
        }

        text = String(text);
        options = options || {};

        if (options.wrap instanceof Object) {
            text = this.textWrap(text, options.wrap);
        }

        const { pos, startX, startY } = options;
        let { x, y, width } = options;

        if (pos instanceof Object) {
            x = pos.x;
            y = pos.y;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.lineHeight() * parseFloat(y);
        }

        x     = _.defaultTo(x, 0);
        y     = _.defaultTo(y, 0);
        width = _.defaultTo(width, 0);

        const textState = this.createTextState(text, x, y, width);

        textState.startX = _.defaultTo(startX, textState.startX);
        textState.startY = _.defaultTo(startY, textState.startY);

        this.processAllText(textState);

        return textState.outputWidth;
    }

    // F methods

    /**
     * Fills the bitmap with color
     * Returns true if successfully completed
     * @param {String} [color] - Color of fill
     * @return {Boolean} Successfully completed
     */
    fillAll(color) {
        return this.fillRect({ color });
    }

    /**
     * Fills a rectangle with color
     * Returns true if successfully completed
     *
     * @param {Object} [options={}] - Parameters for drawing
     *
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {Point | Object} [options.pos] - Position for drawing (ignores other parameters of position: x, y)
     * @param {Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
     * @param {String} [options.color] - Fill color
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @param {Number} [options.pos.x] - The X coordinate
     * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
     *
     * @param {Number} [options.rect.x] - The X coordinate
     * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
     * @param {Number} [options.rect.width] - Width of the rectangle
     * @param {Number | String} [options.rect.height] - Height of the rectangle or number of lines (String)
     *
     * @return {Boolean} Successfully completed
     */
    fillRect(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { pos, rect, paintOpacity, resetPaintOpacity } = options;
        let { x, y, width, height, color } = options;

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
            y = this.lineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.lineHeight() * parseFloat(height);
        }

        if (width === 0 || height === 0) {
            return false;
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        color = color || 'white';

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.bitmap.fillRect(x, y, width, height, color);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    /**
     * Returns the font height for the line height
     * @since 1.1.0
     * @param {Number} [lineHeight] - Line height
     * @return {Number} Font height for the line height
     */
    fontHeight(lineHeight) {
        let fontSize;

        lineHeight = lineHeight || this.lineHeight();

        if (this.hasBitmap()) {
            fontSize = this.bitmap.fontSize;
        } else if (this._font) {
            fontSize = this._font.fontSize;
        } else if (DKTools.Utils.isFunction(this.standardFontSize)) {
            fontSize = this.standardFontSize();
        } else {
            fontSize = $gameSystem.mainFontSize();
        }

        return lineHeight - (lineHeight - fontSize * 0.7) / 2;
    }

    // G methods

    /**
     * Returns the local point (coordinates inside the object)
     *
     * @version 1.1.0
     *
     * @param {Number | Point} [object] - The X coordinate or Point
     * @param {Number} [y] - The Y coordinate (if object is Number)
     *
     * @return {PIXI.Point} Local point (coordinates inside the object)
     */
    getLocalPoint(object, y) {
        const point = arguments.length === 2 ?
            new Point(object, y) : new Point(object.x, object.y);

        return this.worldTransform.applyInverse(point);
    }

    /**
     * Fills the bitmap with gradient
     * Returns true if successfully completed
     * @param {String} [color1='black'] - First color
     * @param {String} [color2='white'] - Second color
     * @param {Boolean} [vertical=false] - Vertical gradient
     * @return {Boolean} Successfully completed
     */
    gradientFillAll(color1 = 'black', color2 = 'white', vertical = false) {
        return this.gradientFillRect({ color1, color2, vertical });
    }

    /**
     * Fills a rectangle with a gradient
     * Returns true if successfully completed
     *
     * @param {Object} [options={}] - Parameters for drawing
     *
     * @param {String} [options.color1] - First color
     * @param {String} [options.color2] - Second color
     * @param {Boolean} [options.vertical] - Vertical gradient
     * @param {Number} [options.x] - The X coordinate
     * @param {Number | String} [options.y] - The Y coordinate or line number (String)
     * @param {Number} [options.width] - Width of the rectangle
     * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
     * @param {Rectangle} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height)
     * @param {Number} [options.paintOpacity] - Change paint opacity
     * @param {Boolean} [options.resetPaintOpacity] - Reset paint opacity
     *
     * @return {Boolean} Successfully completed
     */
    gradientFillRect(options = {}) {
        if (!this.hasBitmap()) {
            return false;
        }

        options = options || {};

        const { vertical, rect, paintOpacity, resetPaintOpacity } = options;
        let { color1, color2, x, y, width, height } = options;

        if (rect instanceof Object) {
            x = rect.x;
            y = rect.y;
            width = rect.width;
            height = rect.height;
        }

        if (DKTools.Utils.isString(y)) { // line number
            y = this.lineHeight() * parseFloat(y);
        }

        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.lineHeight() * parseFloat(height);
        }

        if (width === 0 || height === 0) {
            return false;
        }

        x = x || 0;
        y = y || 0;
        width = width || this.standardDrawingWidth();
        height = height || this.standardDrawingHeight();
        color1 = color1 || 'black';
        color2 = color2 || 'white';

        if (Number.isFinite(paintOpacity)) {
            this.changePaintOpacity(paintOpacity);
        }

        this.bitmap.gradientFillRect(x, y, width, height, color1, color2, vertical);

        if (resetPaintOpacity) {
            this.resetPaintOpacity();
        }

        return true;
    }

    // H methods

    /**
     * Returns true if the object has the bitmap
     * @return {Boolean} Object has the bitmap
     */
    hasBitmap() {
        return !!this.bitmap;
    }

    /**
     * Returns true if the object has a parent
     * @return {Boolean} Object has a parent
     */
    hasParent() {
        return !!this.parent;
    }

    /**
     * Hides the object
     * @param {Boolean} [blockDeactivate=false] - Blocking deactivates of the object
     */
    hide(blockDeactivate = false) {
        if (this.setVisible(false)) {
            this.updateHideEvents();
        }

        if (!blockDeactivate) {
            this.deactivate();
        }
    }

    // I methods

    /**
     * Returns true if the object is active
     * @return {Boolean} Object is active
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
    }

    /**
     * Returns true if the object is busy
     * @return {Boolean} Object is busy
     */
    isBusy() {
        return !this.isReady();
    }

    /**
     * Returns true if the object has a parent (if parameter is null or undefined)
     * Returns true if the object (parameter) is child of this object
     * @param {Sprite | Window} [object] - Object
     * @return {Boolean} Object (parameter) is child of this object or object has a parent (if parameter is null or undefined)
     */
    isChild(object) {
        return object ?
            this.children.includes(object) : this.hasParent();
    }

    /**
     * Returns true if the object was destroyed
     * @return {Boolean} Object was destroyed
     */
    isDestroyed() {
        return this._destroyed;
    }

    /**
     * Returns true if the coordinates is inside the object
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @return {Boolean} Coordinates is inside the object
     */
    isInside(x, y) {
        const point = this.getLocalPoint(x, y);
        const frame = new Rectangle(0, 0, this.width, this.height);
        const mask = this.mask;

        if (mask && DKTools.Utils.isFunction(mask.containsPoint)) {
            if (!mask.containsPoint(point)) {
                return false;
            }
        }

        if (!frame.contains(point.x, point.y)) {
            return false;
        }

        const area = this.hitArea;

        if (!area) {
            return true;
        }

        return area.contains(point.x, point.y);
    }

    /**
     * Returns true if the mouse is inside the object
     * @return {Boolean} Mouse is inside the object
     */
    isMouseInside() {
        return this.isInside(TouchInput.x, TouchInput.y);
    }

    /**
     * Returns true if the coordinates is not inside the object
     * @param {Number} x - The X coordinate
     * @param {Number} y - The Y coordinate
     * @return {Boolean} Coordinates are not inside the object
     */
    isOutside(x, y) {
        return !this.isInside(x, y);
    }

    /**
     * Returns true if the object (parameter) is parent of this object
     * @param {Sprite | Window} object - Object
     * @return {Boolean} Object (parameter) is parent of this object
     */
    isParent(object) {
        return !!object && this.parent === object;
    }

    /**
     * Returns true if the bitmap is ready
     * @return {Boolean} Bitmap is ready
     */
    isReady() {
        return this.hasBitmap() && this.bitmap.isReady();
    }

    /**
     * Returns true if the object is started
     * @return {Boolean} Object is started
     */
    isStarted() {
        return this._started;
    }

    /**
     * Returns true if the touch is inside the object
     * @return {Boolean} Touch is inside the object
     */
    isTouchInside() {
        return TouchInput.isScreenPressed() && this.isInside(TouchInput.x, TouchInput.y);
    }

    /**
     * Returns true if the object is visible
     * @return {Boolean} Object is visible
     */
    isVisible() {
        return this.visible;
    }

    /**
     * Returns true if the object is visible and active
     * @return {Boolean} Object is visible and active
     */
    isVisibleAndActive() {
        return this.isVisible() && this.isActive();
    }

    // M methods

    /**
     * Makes the font size bigger
     */
    makeFontBigger() {
        if (this.hasBitmap()) {
            Window_Base.prototype.makeFontBigger.apply(this, arguments);
        }
    }

    /**
     * Makes the font size smaller
     */
    makeFontSmaller() {
        if (this.hasBitmap()) {
            Window_Base.prototype.makeFontSmaller.apply(this, arguments);
        }
    }

    /**
     * Returns max font size in line
     * @param {String} line - Line
     * @return {Number} Max font size in line
     */
    maxFontSizeInLine(line) {
        if (!this.hasBitmap()) {
            return 0;
        }

        return Window_Base.prototype.maxFontSizeInLine.apply(this, arguments);
    }

    /**
     * Moves the object
     * @version 1.1.0
     * @param {Number} [x] - The X coordinate
     * @param {Number | String} [y] - The Y coordinate or line number (String)
     * @example
     * const sprite = new DKTools.Sprite();
     * sprite.move(100, 100);
     * @example
     * const sprite = new DKTools.Sprite();
     * sprite.move(100, '2');
     */
    move(x, y) {
        if (DKTools.Utils.isString(y)) { // line number
            y = this.lineHeight() * parseFloat(y);
        }

        this.position.set(x || 0, y || 0);
    }

    // O methods

    /**
     * @param {Object} textState
     * @return {String}
     */
    obtainEscapeCode(textState) {
        return Window_Base.prototype.obtainEscapeCode.apply(this, arguments);
    }

    /**
     * @param {Object} textState
     * @return {Number | String}
     */
    obtainEscapeParam(textState) {
        return Window_Base.prototype.obtainEscapeParam.apply(this, arguments);
    }

    // P methods

    /**
     * Returns the name of the actor
     * @param {Number} n - Number of the actor in the party
     * @return {String | null} Name of the actor
     */
    partyMemberName(n) {
        return Window_Base.prototype.partyMemberName.apply(this, arguments);
    }

    /**
     * Processes all
     */
    processAll() {
        if (!Utils.isMobileDevice()) {
            this.processMouseEvents();
            this.processWheelEvents();
        }
    }

    /**
     * Processes a mouse
     * @since 1.1.0
     */
    processMouseEvents() {
        if (this.isVisibleAndActive()) {
            if (this.isMouseInside()) {
                if (this._mouseEnterTime === 0) {
                    this.updateMouseEnterEvents();
                }

                this.updateMouseInsideEvents();

                if (TouchInput.isMoved()) {
                    this.updateMouseMoveEvents();
                }

                this._mouseEnterTime++;
            } else {
                if (this._mouseEnterTime > 0) {
                    this.updateMouseLeaveEvents();
                }

                this.updateMouseOutsideEvents();

                this._mouseEnterTime = 0;
            }
        } else {
            this._mouseEnterTime = 0;
        }
    }

    /**
     * Processes a wheel
     * @since 1.1.0
     */
    processWheelEvents() {
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
    }

    /**
     * @param {Object} textState
     */
    processCharacter(textState) {
        return Window_Base.prototype.processCharacter.apply(this, arguments);
    }

    /**
     * @param {Object} textState
     */
    processAllText(textState) {
        return Window_Base.prototype.processAllText.apply(this, arguments);
    }

    /**
     * @param {Object} textState
     * @param {String} c
     */
    processControlCharacter(textState, c) {
        return Window_Base.prototype.processControlCharacter.apply(this, arguments);
    }

    /**
     * @param {Number} iconIndex - Icon index
     * @param {Object} textState - Text state
     */
    processDrawIcon(iconIndex, textState) {
        if (textState.drawing) {
            this.drawIcon(iconIndex, { x: textState.x + 2, y: textState.y + 2 });
        }

        textState.x += ImageManager.iconWidth + 4;
    }

    /**
     * @param {String} code
     * @param {Object} textState
     */
    processEscapeCharacter(code, textState) {
        try {
            const state = { ...textState };

            Window_Base.prototype.processEscapeCharacter.call(this, code, state);

            Object.assign(textState, state);
        } catch(e) {
            switch (code) {
                case 'C':
                    this.changeTextColor(
                        ColorManager.textColor(
                            this.obtainEscapeParam(textState)));
                    break;
                case 'I':
                    this.processDrawIcon(this.obtainEscapeParam(textState), textState);
                    break;
                case 'PX':
                    textState.x = this.obtainEscapeParam(textState);
                    break;
                case 'PY':
                    textState.y = this.obtainEscapeParam(textState);
                    break;
                case 'FS':
                    this.changeFont({ fontSize: this.obtainEscapeParam(textState) });
                    break;
                case '{':
                    this.makeFontBigger();
                    break;
                case '}':
                    this.makeFontSmaller();
                    break;
            }
        }
    }

    /**
     * @param {Object} textState
     */
    processNewLine(textState) {
        return Window_Base.prototype.processNewLine.apply(this, arguments);
    }

    // R methods

    /**
     * Redraws all
     */
    redrawAll() {
        this.clear();
        this.drawAll();
        this.updateRedrawAllEvents();
    }

    /**
     * Updates and redraws all
     */
    refreshAll() {
        this.updateAll();

        if (this.canRedrawAll()) {
            this.redrawAll();
        }

        this.updateRefreshAllEvents();
    }

    /**
     * Removes all
     */
    removeAll() {
        this.updateRemoveAllEvents();
    }

    /**
     * Removes the event from a container
     * Returns true if the event was removed
     * @param {DKTools.Event | DKTools.Animation} event - Event
     * @return {Boolean} Event was removed
     */
    removeEvent(event) {
        return this._eventsManager.removeEvent(event);
    }

    /**
     * Removes the filter
     * @version 1.1.0
     * @param {*} filter - Filter
     */
    removeFilter(filter) {
        if (!this.filters || !filter) {
            return;
        }

        _.pull(this.filters, filter);

        if (this.filters.length === 0) {
            this.filters = null;
        }
    }

    /**
     * Removes the object from the parent object, if possible
     * Returns true if the deletion was successful
     * @return {Boolean} Deletion was successful
     */
    removeFromParent() {
        if (this.hasParent()) {
            this.parent.removeChild(this);

            return true;
        }

        return false;
    }

    /**
     * Changes the width and height of the object
     * Returns true if the change occurred
     * @since 1.1.0
     * @param {Number} width - Width of the object
     * @param {Number | String} height - Height of the object or number of lines (String)
     * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
     * @return {Boolean} Change occurred
     */
    resize(width, height, blockStart = false) {
        if (DKTools.Utils.isString(height)) { // number of lines
            height = this.lineHeight() * parseFloat(height);
        }

        if (this.width === width && this.height === height) {
            return false;
        }

        const lastWidth = this.width;
        const lastHeight = this.height;

        this.setupSize(width, height);

        if (this.width === lastWidth && this.height === lastHeight) {
            return false;
        }

        if (!blockStart) {
            this.start();
        }

        return true;
    }

    // S methods

    // standard methods

    /**
     * Returns the standard activity of the object
     * @return {Boolean} Standard activity of the object
     */
    standardActive() {
        return true;
    }

    /**
     * Returns the standard width of the drawing
     * @version 1.1.0
     * @return {Number} Standard width of the drawing or null
     */
    standardDrawingWidth() {
        if (this.hasBitmap()) {
            return this.bitmap.width;
        } else if (this instanceof DKTools.Sprite) {
            return this._bitmapWidth;
        } else if (this instanceof DKTools.Window) {
            return this.innerWidth;
        }

        return 0;
    }

    /**
     * Returns the standard height of the drawing
     * @version 1.1.0
     * @return {Number} Standard height of the drawing or null
     */
    standardDrawingHeight() {
        if (this.hasBitmap()) {
            return this.bitmap.height;
        } else if (this instanceof DKTools.Sprite) {
            return this._bitmapHeight;
        } else if (this instanceof DKTools.Window) {
            return this.innerHeight;
        }

        return 0;
    }

    /**
     * Returns the standard opacity of the object
     * @since 1.1.0
     * @return {Number} Standard opacity of the object
     */
    standardOpacity() {
        return 255;
    }

    /**
     * Returns the standard pivot of the object
     * @return {Point} Standard pivot of the object
     */
    standardPivot() {
        return new Point(0, 0);
    }

    /**
     * Returns the standard rotation of the object
     * @return {Number} Standard rotation of the object
     */
    standardRotation() {
        return 0;
    }

    /**
     * Returns the standard scale of the object
     * @return {Point} Standard scale of the object
     */
    standardScale() {
        return new Point(1, 1);
    }

    /**
     * Returns the standard skew of the object
     * @return {Point} Standard skew of the object
     */
    standardSkew() {
        return new Point(0, 0);
    }

    /**
     * Returns the standard visibility of the object
     * @return {Boolean} Standard visibility of the object
     */
    standardVisible() {
        return true;
    }

    /**
     * Returns the standard window skin
     * @return {String} Standard window skin
     */
    standardWindowskin() {
        return 'Window';
    }

    // setup methods

    /**
     * Sets all parameters
     * @version 1.1.0
     * @param {Object} [object={}] - Parameters
     *
     * @param {Boolean} [object.visible] - Visibility of the object
     * @param {Boolean} [object.active] - Activity of the object
     * @param {Point} [object.scale] - Scale of the object
     * @param {Point} [object.pivot] - Pivot of the object
     * @param {Point} [object.skew] - Skew of the object
     * @param {Number} [object.rotation] - Rotation of the object
     * @param {Number} [object.opacity] - Opacity of the object
     */
    setupAll(object = {}) {
        object = object || {};

        this.setupActive(object.active);
        this.setupVisible(object.visible);
        this.setupScale(object.scale);
        this.setupPivot(object.pivot);
        this.setupSkew(object.skew);
        this.setupRotation(object.rotation);
        this.setupOpacity(object.opacity);
    }

    /**
     * Sets the activity of the object
     * @param {Boolean} [active] - Activity of the object
     */
    setupActive(active) {
        /**
         * @type {Boolean}
         */
        this.active = _.defaultTo(active, this.standardActive());
    }

    /**
     * Sets the pivot of the object
     * @version 1.1.0
     * @param {Number | Point} [object] - The X coordinate or Point
     * @param {Number} [y] - The Y coordinate (if object is Number)
     */
    setupPivot(object, y) {
        let pivot;

        if (object instanceof Object) {
            pivot = object;
        } else if (arguments.length === 2) {
            pivot = new Point(object, y);
        } else {
            pivot = this.standardPivot();
        }

        this.pivot.copyFrom(pivot);
    }

    /**
     * Sets the rotation of the object
     *
     * @param {Number} [rotation] - Rotation of the object
     */
    setupRotation(rotation) {
        /**
         * @type {Number}
         */
        this.rotation = _.defaultTo(rotation, this.standardRotation());
    }

    /**
     * Sets the scale of the object
     * @version 1.1.0
     * @param {Number | Point} [object] - The X coordinate or Point
     * @param {Number} [y] - The Y coordinate (if object is Number)
     */
    setupScale(object, y) {
        let scale;

        if (object instanceof Object) {
            scale = object;
        } else if (arguments.length === 2) {
            scale = new Point(object, y);
        } else {
            scale = this.standardScale();
        }

        this.scale.copyFrom(scale);
    }

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
        // to be overridden by plugins
    }

    /**
     * Sets the skew of the object
     * @version 1.1.0
     * @param {Number | Point} [object] - The X coordinate or Point
     * @param {Number} [y] - The Y coordinate (if object is Number)
     */
    setupSkew(object, y) {
        let skew;

        if (object instanceof Object) {
            skew = object;
        } else if (arguments.length === 2) {
            skew = new Point(object, y);
        } else {
            skew = this.standardSkew();
        }

        this.skew.copyFrom(skew);
    }

    /**
     * Sets the visibility of the object
     *
     * @param {Boolean} [visible] - Visibility of the object
     */
    setupVisible(visible) {
        /**
         * @type {Boolean}
         */
        this.visible = _.defaultTo(visible, this.standardVisible());
    }

    /**
     * Sets the opacity of the object
     * @since 1.1.0
     * @param {Number} [opacity] - Opacity of the object
     */
    setupOpacity(opacity) {
        this.opacity = _.defaultTo(opacity, this.standardOpacity());
    }

    // set methods

    /**
     * Changes the activity of the object
     * Returns true if the change occurred
     * @param {Boolean} [active] - Activity of the object
     * @return {Boolean} Change occurred
     */
    setActive(active) {
        if (this.active === active) {
            return false;
        }

        const lastActive = this.active;

        this.setupActive(active);

        return this.active !== lastActive;
    }

    /**
     * Changes the visibility of the object
     * Returns true if the change occurred
     * @param {Boolean} [visible] - Visibility of the object
     * @return {Boolean} Change occurred
     */
    setVisible(visible) {
        if (this.visible === visible) {
            return false;
        }

        const lastVisible = this.visible;

        this.setupVisible(visible);

        return this.visible !== lastVisible;
    }

    // other S methods

    /**
     * Shows the object
     * @param {Boolean} [activate=false] - Activates the object
     */
    show(activate = false) {
        if (this.setVisible(true)) {
            this.updateShowEvents();
        }

        if (activate) {
            this.activate();
        }
    }

    /**
     * Starts the object
     * @version 1.1.0
     * @param {Boolean} [activate] - Activates the object
     */
    start(activate = false) {
        this._started = true;

        this.removeAll();
        this.checkAll();
        this.createAll();
        this.refreshAll();
        this.updateStartEvents();

        if (activate) {
            this.activate();
        }
    }

    // T methods

    /**
     * Returns the height of the text (taking into account the font)
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap={}] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     *
     * @return {Number} Height of the text (taking into account the font)
     */
    textFontHeight(text, wrap = {}) {
        return this.textLines(text, wrap) * this.fontHeight();
    }

    /**
     * Returns the number of lines of the text
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     *
     * @return {Number} Number of lines of the text
     */
    textLines(text, wrap) {
        if (wrap instanceof Object) {
            text = this.textWrap(text, wrap);
        }

        return text.split('\n').length;
    }

    /**
     * Returns the width of the text
     * @param {String} text - Text
     * @return {Number} Width of the text
     */
    textWidth(text) {
        if (!this.hasBitmap() || text === '' || text == null) {
            return 0;
        }

        return Window_Base.prototype.textWidth.apply(this, arguments);
    }

    /**
     * Returns the height of the text
     *
     * @param {String | Number} text - Text
     * @param {Object} [wrap={}] - Wrap options
     *
     * @param {Number} [wrap.maxWidth] - Max width of a text line
     * @param {Number} [wrap.maxLines] - Max lines
     *
     * @return {Number} Height of the text
     */
    textHeight(text, wrap = {}) {
        return this.textLines(text, wrap) * this.lineHeight();
    }

    /**
     * Makes a text wrap
     *
     * @param {String} text - Text
     * @param {Object} [options={}] - Wrap options
     *
     * @param {Number} [options.maxWidth] - Max width of a text line
     * @param {Number} [options.maxLines] - Max lines
     *
     * @return {String} Wrapped text
     */
    textWrap(text, options = {}) {
        if (!this.hasBitmap() || text === '' || text == null) {
            return '';
        }

        text = String(text);
        options = options || {};

        const lines = text.split('\n');
        const maxWidth = options.maxWidth || this.bitmap.width;
        const spaceWidth = this.textWidth(' ');
        let result = '', newLines = 1;

        for (let i = 0; i < lines.length; i++) {
            const words = lines[i].split(' ');
            let spaceLeft = maxWidth;

            for (let j = 0; j < words.length; j++) {
                const word = words[j];
                const wordWidth = this.textSizeEx(word).width;
                let wordWidthWithSpace = wordWidth + spaceWidth;

                if (wordWidth === 0) {
                    wordWidthWithSpace -= spaceWidth;
                }

                if (j === 0 || wordWidthWithSpace > spaceLeft) {
                    if (j > 0) {
                        if (options.maxLines === newLines) {
                            return result;
                        }

                        result += '\n';
                        newLines++;
                    }

                    result += word;
                    spaceLeft = maxWidth - wordWidth;
                } else {
                    spaceLeft -= wordWidthWithSpace;
                    result += ' ' + word;
                }
            }

            if (i < lines.length - 1) {
                result += '\n';
            }
        }

        return result;
    }

    // U methods

    /**
     * Updates the object
     */
    update() {
        this.processAll();
        this.updateEvents();
    }

    /**
     * Updates all
     * @version 1.1.0
     */
    updateAll() {
        this.updateUpdateAllEvents();
    }

    /**
     * Updates the child objects
     */
    updateChildren() {
        for (const child of this.children) {
            if (child && child.update) {
                child.update();
            }
        }
    }

    // events methods

    /**
     * Updates the events with type: activate
     */
    updateActivateEvents() {
        this._eventsManager.updateEventsContainer('activate');
    }

    /**
     * Updates the events with type: check-all
     */
    updateCheckAllEvents() {
        this._eventsManager.updateEventsContainer('check-all');
    }

    /**
     * Updates the events with type: create-all
     */
    updateCreateAllEvents() {
        this._eventsManager.updateEventsContainer('create-all');
    }

    /**
     * Updates the events with type: deactivate
     */
    updateDeactivateEvents() {
        this._eventsManager.updateEventsContainer('deactivate');
    }

    /**
     * Updates the events
     */
    updateEvents() {
        this._eventsManager.update();

        this.updateReadyEvents();
        this.updateUpdateEvents();
        this.updateQueueEvents();
    }

    /**
     * Updates the events with type: hide
     */
    updateHideEvents() {
        this._eventsManager.updateEventsContainer('hide');
    }

    /**
     * Updates the events with type: mouse-enter
     */
    updateMouseEnterEvents() {
        this._eventsManager.updateEventsContainer('mouse-enter');
    }

    /**
     * Updates the events with type: mouse-inside
     */
    updateMouseInsideEvents() {
        this._eventsManager.updateEventsContainer('mouse-inside');
    }

    /**
     * Updates the events with type: mouse-leave
     */
    updateMouseLeaveEvents() {
        this._eventsManager.updateEventsContainer('mouse-leave');
    }

    /**
     * Updates the events with type: mouse-move
     */
    updateMouseMoveEvents() {
        this._eventsManager.updateEventsContainer('mouse-move');
    }

    /**
     * Updates the events with type: mouse-outside
     */
    updateMouseOutsideEvents() {
        this._eventsManager.updateEventsContainer('mouse-outside');
    }

    /**
     * Updates the events with type: queue
     */
    updateQueueEvents() {
        const container = this._eventsManager.getEventsContainerByType('queue');
        const event = container[0];

        if (event) {
            event.update();
        }
    }

    /**
     * Updates the events with type: ready
     */
    updateReadyEvents() {
        if (this.isReady()) {
            this._eventsManager.updateEventsContainer('ready');
        }
    }

    /**
     * Updates the events with type: redraw-all
     */
    updateRedrawAllEvents() {
        this._eventsManager.updateEventsContainer('redraw-all');
    }

    /**
     * Updates the events with type: draw-all
     */
    updateDrawAllEvents() {
        this._eventsManager.updateEventsContainer('draw-all');
    }

    /**
     * Updates the events with type: refresh-all
     */
    updateRefreshAllEvents() {
        this._eventsManager.updateEventsContainer('refresh-all');
    }

    /**
     * Updates the events with type: remove-all
     */
    updateRemoveAllEvents() {
        this._eventsManager.updateEventsContainer('remove-all');
    }

    /**
     * Updates the events with type: show
     */
    updateShowEvents() {
        this._eventsManager.updateEventsContainer('show');
    }

    /**
     * Updates the events with type: start
     */
    updateStartEvents() {
        if (this.isStarted()) {
            this._eventsManager.updateEventsContainer('start');
        }
    }

    /**
     * Updates the events with type: update-all
     */
    updateUpdateAllEvents() {
        this._eventsManager.updateEventsContainer('update-all');
    }

    /**
     * Updates the events with type: update
     */
    updateUpdateEvents() {
        this._eventsManager.updateEventsContainer('update');
    }

    /**
     * Updates the events with type: wheel-X-inside or wheel-X-outside
     * @param {String} type - Type of the wheel event (inside or outside)
     */
    updateWheelXEvents(type) {
        this._eventsManager.updateEventsContainer('wheel-X-' + type);
    }

    /**
     * Updates the events with type: wheel-Y-inside or wheel-Y-outside
     * @param {String} type - Type of the wheel event (inside or outside)
     */
    updateWheelYEvents(type) {
        this._eventsManager.updateEventsContainer('wheel-Y-' + type);
    }

};



//===========================================================================
// DKTools.Sprite
//===========================================================================

/**
 * @class
 * @extends Sprite
 * @mixes DKTools.Base
 */
DKTools.Sprite = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Sprite.prototype = Object.create(Sprite.prototype);
Object.defineProperties(DKTools.Sprite.prototype,
    Object.getOwnPropertyDescriptors(DKTools.Base.prototype));
DKTools.Sprite.prototype.constructor = DKTools.Sprite;

// properties

Object.defineProperties(DKTools.Sprite.prototype, {

    /**
     * Bitmap of the sprite
     * To support functions from DKTools.Base
     *
     * @type {Bitmap | null}
     * @memberof DKTools.Sprite.prototype
     */
    contents: {
        get: function() {
            return this.bitmap;
        },
        set: function(value) {
            this.bitmap = value;
        },
        configurable: true
    },

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
 * @override
 *
 * @param {Number | DKTools.Sprite | Bitmap | Rectangle | Object} [object] - The X coordinate or Sprite or Bitmap or Rectangle or object with properties
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
 */
DKTools.Sprite.prototype.initialize = function(object, y, width, height) {
	Sprite.prototype.initialize.call(this);
    DKTools.Base.prototype.initialize.apply(this, arguments);

    if (object instanceof Bitmap) {
        this.setupBitmap(object);
    }

    this.updateBitmap();
};

// C methods

/**
 * Returns true if the sprite can be updated and redrawn
 * @override
 * @return {Boolean} Sprite can be updated and redrawn
 */
DKTools.Sprite.prototype.canRedrawAll = function() {
    return DKTools.Base.prototype.canRedrawAll.apply(this, arguments)
        && !this.hasGraphicName() && !this.hasFixedBitmap();
};

/**
 * Changes the font of the bitmap
 *
 * @param {Object} font - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 */
DKTools.Sprite.prototype.changeFont = function(font) {
    if (this.hasBitmap()) {
        this.updateFont(font);
    }
};

/**
 * Changes the paint opacity of the bitmap
 * @param {Number} paintOpacity - Paint opacity
 */
DKTools.Sprite.prototype.changePaintOpacity = function(paintOpacity) {
    if (this.hasBitmap()) {
        this.updatePaintOpacity(paintOpacity);
    }
};

/**
 * Changes the text color of the bitmap
 * @param {String} textColor - Text color
 */
DKTools.Sprite.prototype.changeTextColor = function(textColor) {
    if (this.hasBitmap()) {
        this.updateTextColor(textColor);
    }
};

/**
 * Creates all objects
 * @override
 */
DKTools.Sprite.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.apply(this, arguments);
    this.createBitmap();
};

/**
 * Loads an image by graphic name (if exists) or create the bitmap (if the fixed bitmap does not exist)
 */
DKTools.Sprite.prototype.createBitmap = function() {
    if (this.hasGraphicName()) {
        this._loadGraphic();
    } else if (!this.hasFixedBitmap()) {
        this.bitmap = new Bitmap(this._bitmapWidth, this._bitmapHeight);
    }
};

/**
 * @param {Boolean} rtl
 * @return {String}
 */
DKTools.Sprite.prototype.createTextBuffer = function(rtl) {
    return Window_Base.prototype.createTextBuffer.apply(this, arguments);
};

/**
 * @param {String} text
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @return {Object}
 */
DKTools.Sprite.prototype.createTextState = function(text, x, y, width) {
    return Window_Base.prototype.createTextState.apply(this, arguments);
};

// D methods

/**
 * Destroys the bitmap
 * Return true if the bitmap destroyed
 * @return {Boolean} Bitmap destroyed
 */
DKTools.Sprite.prototype.destroyBitmap = function() {
    if (!this.hasBitmap() || this.hasFixedBitmap()) {
        return false;
    }

    this.bitmap.destroy();

    return true;
};

/**
 * Draws all
 * @override
 */
DKTools.Sprite.prototype.drawAll = function() {
    this.updateFill();
    DKTools.Base.prototype.drawAll.apply(this, arguments);
};

/**
 * Draws a text
 * Returns true if successfully completed
 *
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 *
 * @param {Object} [options.font] - Use custom font
 * @param {String} [options.textColor] - Use custom text color
 * @param {Number} [options.paintOpacity] - Use custom paint opacity
 * @param {String} [options.align] - Align
 * @param {Boolean} [options.resetFont] - Use standard font after drawing the text
 * @param {String} [options.resetTextColor] - Use standard text color after drawing the text
 * @param {String} [options.resetPaintOpacity] - Use standard paint opacity after drawing the text
 * @param {Number} [options.x] - The X coordinate
 * @param {Number | String} [options.y] - The Y coordinate or line number (String)
 * @param {Number} [options.width] - Width of the rectangle
 * @param {Number | String} [options.height] - Height of the rectangle or number of lines (String)
 * @param {Point | Object} [options.pos] - Position of the text (ignores other parameters of position: x, y)
 * @param {Rectangle | Object} [options.rect] - Rectangle for drawing (ignores other parameters of position: x, y, width, height, pos)
 *
 * @param {Number} [options.pos.x] - The X coordinate
 * @param {Number | String} [options.pos.y] - The Y coordinate or line number (String)
 *
 * @param {Number} [options.rect.x] - The X coordinate
 * @param {Number | String} [options.rect.y] - The Y coordinate or line number (String)
 * @param {Number | String} [options.rect.width] - Width of the rectangle
 * @param {Number | String} [options.rect.height] - Height of the rectangle or number of lines (String)
 *
 * @example
 * var sprite = new DKTools.Sprite(0, 0, 100, 36);
 * sprite.start();
 * sprite.drawText('Text', { y: '1' });
 *
 * @return {Boolean} Successfully completed
 */
DKTools.Sprite.prototype.drawText = function(text, options = {}) {
    if (!this.hasBitmap() || text == null || text === '') {
        return false;
    }

    text = String(text);
    options = options || {};

    const { pos, rect, font, textColor, paintOpacity, resetFont, resetTextColor, resetPaintOpacity } = options;
    let { x, y, width, height, align } = options;

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
        y = this.lineHeight() * parseFloat(y);
    }

    if (DKTools.Utils.isString(height)) { // number of lines
        height = this.lineHeight() * parseFloat(height);
    }

    if (width === 0 || height === 0) {
        return false;
    }

    x = x || 0;
    y = y || 0;
    width = width || this.standardDrawingWidth();
    height = height || this.lineHeight();
    align = align || this.align;

    if (font) {
        this.changeFont(font);
    }

    if (textColor) {
        this.changeTextColor(textColor);
    }

    if (Number.isFinite(paintOpacity)) {
        this.changePaintOpacity(paintOpacity);
    }

    this.bitmap.drawText(text, x, y, width, height, align);

    if (resetFont) {
        this.resetFont();
    }

    if (resetTextColor) {
        this.resetTextColor();
    }

    if (resetPaintOpacity) {
        this.resetPaintOpacity();
    }

    return true;
};

// F methods

/**
 * @param {Object} textState
 */
DKTools.Sprite.prototype.flushTextState = function(textState) {
    return Window_Base.prototype.flushTextState.apply(this, arguments);
};

// G methods

/**
 * Returns the local point (coordinates inside the sprite)
 *
 * @override
 *
 * @param {Number | Point | Object} [object] - The X coordinate or Point or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 *
 * @return {PIXI.Point} Local point (coordinates inside the sprite)
 */
DKTools.Sprite.prototype.getLocalPoint = function(object, y) {
    const localPoint = DKTools.Base.prototype.getLocalPoint.apply(this, arguments);
    const anchor = this.anchor;

    localPoint.x += this.width * anchor.x;
    localPoint.y += this.height * anchor.y;

    return localPoint;
};

// H methods

/**
 * Returns true if the sprite has the fill color
 * @return {Boolean} Sprite has the fill color
 */
DKTools.Sprite.prototype.hasFillColor = function() {
    return !!this._fillColor;
};

/**
 * Returns true if the sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 * @return {Boolean} Sprite has fixed bitmap (setted using setupBitmap or setBitmap)
 */
DKTools.Sprite.prototype.hasFixedBitmap = function() {
    return !!this._fixedBitmap;
};

/**
 * Returns true if the sprite has the graphic folder
 * @return {Boolean} Sprite has the graphic folder
 */
DKTools.Sprite.prototype.hasGraphicFolder = function() {
    return !!this._graphicFolder;
};

/**
 * Returns true if the sprite has the graphic name
 * @return {Boolean} Sprite has the graphic name
 */
DKTools.Sprite.prototype.hasGraphicName = function() {
    return !!this._graphicName;
};

// I methods

/**
 * Returns true if you can change the size of the sprite
 * @return {Boolean} You can change the size of the sprite
 */
DKTools.Sprite.prototype.isResizable = function() {
    return !this.hasGraphicName() && !this.hasFixedBitmap();
};

// L methods

/**
 * Loads the graphic (using graphic folder and graphic name)
 * @private
 */
DKTools.Sprite.prototype._loadGraphic = function() {
    if (this.hasGraphicFolder() && this.hasGraphicName()) {
        const folder = this._graphicFolder;
        const filename = this._graphicName;
        const listener = this._graphicLoadListener;

        this.loadBitmap(folder, filename, listener);
        this.updateReadyEvents();
    }
};

/**
 * Returns the height of the line
 * @return {Number} Height of the line
 */
DKTools.Sprite.prototype.lineHeight = function() {
    return Window_Base.prototype.lineHeight.apply(this, arguments);
};

/**
 * Loads a bitmap
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Path to file or object with parameters
 * @param {String} filename - Name of file (if object is String)
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 *
 * @return {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadBitmap = function(object, filename, listener) {
    if (object instanceof Object) {
        return this.loadBitmap(
            object.folder,
            object.filename,
            object.listener);
    }

    // object - String (folder)
    const bitmap = DKTools.Utils.Bitmap.load(object, filename);

    if (this.setBitmap(bitmap)) {
        if (DKTools.Utils.isFunction(listener) && this.hasBitmap()) {
            this.bitmap.addLoadListener(listener);
        }

        return true;
    }

    return false;
};

/**
 * Loads a bitmap from img/system/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 *
 * @return {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadSystem = function(object, listener) {
    if (object instanceof Object) {
        return this.loadBitmap(
            'img/system/',
            object.filename,
            object.listener);
    }

    // object - String
    return this.loadBitmap('img/system/', object, listener);
};

/**
 * Loads a window skin from img/system/
 * Returns true if the bitmap has been changed
 *
 * @param {String | Object} object - Name of file or object with parameters
 * @param {Function} [listener] - Function of processing after loading a bitmap (if object is String)
 *
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 *
 * @return {Boolean} Bitmap has been changed
 */
DKTools.Sprite.prototype.loadWindowskin = function(object, listener) {
    if (object instanceof Object) {
        return this.loadSystem(
            object.filename || this.standardWindowskin(),
            object.listener);
    }

    // object - String
    return this.loadSystem(object || this.standardWindowskin(), listener);
};

// M methods

/**
 * Moves the sprite (taking into account the anchor)
 * @version 1.1.0
 * @since 5.0.0
 * @param {Number} [x] - The X coordinate or Point or object with parameters
 * @param {Number | String} [y] - The Y coordinate or line number (String) (if object is Number)
 */
DKTools.Sprite.prototype.moveWithAnchor = function(x, y) {
    const anchor = this.anchor;

    if (DKTools.Utils.isString(y)) { // line number
        y = this.lineHeight() * parseFloat(y);
    }

    this.move(x + this.width * anchor.x, y + this.height * anchor.y);
};

// S methods

// standard methods

/**
 * Returns the standard text align
 * @return {String} Standard text align
 */
DKTools.Sprite.prototype.standardAlign = function() {
    return 'center';
};

/**
 * Returns the standard anchor
 * @return {Point} Standard anchor
 */
DKTools.Sprite.prototype.standardAnchor = function() {
    return new Point(0, 0);
};

/**
 * Returns the standard fill color
 * @return {String | null} Standard fill color
 */
DKTools.Sprite.prototype.standardFillColor = function() {
    return null;
};

/**
 * Returns the standard font
 * @return {{ fontFace: String, fontSize: Number, fontItalic: Boolean }} Standard font
 */
DKTools.Sprite.prototype.standardFont = function() {
    return {
        fontFace: this.standardFontFace(),
        fontItalic: this.standardFontItalic(),
        fontSize: this.standardFontSize()
    };
};

/**
 * Returns the standard font face
 * @return {String} Standard font face
 */
DKTools.Sprite.prototype.standardFontFace = function() {
    return $gameSystem.mainFontFace();
};

/**
 * Returns the standard font italic
 * @return {Boolean} Standard font italic
 */
DKTools.Sprite.prototype.standardFontItalic = function() {
    return false;
};

/**
 * Returns the standard font size
 * @return {String} Standard font size
 */
DKTools.Sprite.prototype.standardFontSize = function() {
    return $gameSystem.mainFontSize();
};

/**
 * Returns the standard frame
 * @return {Rectangle} Standard frame
 */
DKTools.Sprite.prototype.standardFrame = function() {
    return new Rectangle(0, 0, this.width, this.height);
};

/**
 * Returns the standard graphic folder
 * @return {String} Standard graphic folder
 */
DKTools.Sprite.prototype.standardGraphicFolder = function() {
    return 'img/system/';
};

/**
 * Returns the standard graphic name
 * @return {String} standard graphic name
 */
DKTools.Sprite.prototype.standardGraphicName = function() {
    return '';
};

/**
 * Returns the standard paint opacity
 * @return {Number} Standard paint opacity
 */
DKTools.Sprite.prototype.standardPaintOpacity = function() {
    return 255;
};

/**
 * Returns the standard text color
 * @return {String} Standard text color
 */
DKTools.Sprite.prototype.standardTextColor = function() {
    return '#ffffff';
};

// setup methods

/**
 * Sets all parameters
 *
 * @version 1.1.0
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Bitmap | Object} [object.bitmap] - Bitmap or object with parameters
 * @param {Rectangle} [object.frame] - Frame of the sprite
 * @param {Point} [object.anchor] - Anchor of the sprite
 * @param {String} [object.align] - Text align
 * @param {Object} [object.font] - Text font
 * @param {String} [object.textColor] - Text color
 * @param {Number} [object.paintOpacity] - Paint opacity
 * @param {String} [object.fillColor] - Fill color
 * @param {String} [object.graphicFolder] - Graphic folder
 * @param {String} [object.graphicName] - Graphic name
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 *
 * @param {String} [object.font.fontFace] - Font face
 * @param {Number} [object.font.fontSize] - Font size
 * @param {Boolean} [object.font.fontItalic] - Font italic
 */
DKTools.Sprite.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Base.prototype.setupAll.call(this, object);

    this.setupBitmap(object);
    this.setupFrame(object.frame);
    this.setupAnchor(object.anchor);
    this.setupAlign(object.align);
    this.setupFont(object.font);
    this.setupTextColor(object.textColor);
    this.setupPaintOpacity(object.paintOpacity);
    this.setupFillColor(object.fillColor);
    this.setupGraphicFolder(object.graphicFolder);
    this.setupGraphicName(object.graphicName);
};

/**
 * Sets the align
 * @param {String} [align=this.standardAlign()] - Text align
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
 * Sets the anchor of the sprite
 * @version 1.1.0
 * @param {Number | Point} [object] - The X coordinate or Point
 * @param {Number} [y] - The Y coordinate (if object is Number)
 */
DKTools.Sprite.prototype.setupAnchor = function(object, y) {
    let anchor;

    if (object instanceof Object) {
        anchor = object;
    } else if (arguments.length === 2) {
        anchor = new Point(object, y);
    } else {
        anchor = this.standardAnchor();
    }

    this.anchor.copyFrom(anchor);
};

/**
 * Sets the bitmap
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 * @param {Number} [object.hue] - Hue of bitmap
 * @param {Boolean} [object.smooth] - Smooth of bitmap
 */
DKTools.Sprite.prototype.setupBitmap = function(object) {
    let bitmap = null;

    if (object instanceof Object) {
        bitmap = DKTools.Utils.Bitmap.load(object.bitmap || object);
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
 * Sets the fill color
 * @param {String} [color] - Fill color
 */
DKTools.Sprite.prototype.setupFillColor = function(color) {
    /**
     * @private
     * @readonly
     * @type {String | null}
     */
    this._fillColor = (color !== null ? _.defaultTo(color, this.standardFillColor()) : null);
};

/**
 * Sets the font of the bitmap
 *
 * @param {Object} [font] - Text font
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
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
 * Sets the frame of the sprite
 * @version 1.1.0
 * @param {Number | Rectangle} [object] - The X coordinate or Rectangle
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the frame (if object is Number)
 * @param {Number} [height] - Height of the frame (if object is Number)
 */
DKTools.Sprite.prototype.setupFrame = function(object, y, width, height) {
    let frame;

    if (object instanceof Object) {
        frame = object;
    } else if (arguments.length === 4) {
        frame = new Rectangle(object, y, width, height);
    } else {
        frame = this.standardFrame();
    }

    Sprite.prototype.setFrame.call(this, frame.x, frame.y, frame.width, frame.height);
};

/**
 * Sets the graphic folder
 * @param {String} [folder] - Path to folder
 */
DKTools.Sprite.prototype.setupGraphicFolder = function(folder) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicFolder = _.defaultTo(folder, this.standardGraphicFolder());
};

/**
 * Sets the listener on load of graphic
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

/**
 * Sets the graphic name
 * @param {String} [graphicName] - Graphic name
 */
DKTools.Sprite.prototype.setupGraphicName = function(graphicName) {
    /**
     * @private
     * @readonly
     * @type {String}
     */
    this._graphicName = (graphicName !== null ? _.defaultTo(graphicName, this.standardGraphicName()) : null);
};

/**
 * Sets the paint opacity
 * @param {Number} [opacity] - Paint opacity
 */
DKTools.Sprite.prototype.setupPaintOpacity = function(opacity) {
    /**
     * @private
     * @readonly
     * @type {Number}
     */
    this._paintOpacity = _.defaultTo(opacity, this.standardPaintOpacity());
};

/**
 * Sets the color of the text
 * @param {String} [color] - Text color
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
 * Sets the size of the bitmap
 * @version 1.1.0
 * @param {Number} [width] - Width of the bitmap
 * @param {Number | String} [height] - Height of the bitmap
 */
DKTools.Sprite.prototype.setupSize = function(width, height) {
    if (typeof height === 'string') { // number of lines
        height = this.lineHeight() * parseFloat(height);
    }

    this._bitmapWidth = width;
    this._bitmapHeight = height;
};

// set methods

/**
 * Changes the align
 * Returns true if the change occurred
 * @param {String} [align] - Text align
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setAlign = function(align, blockRefreshAll = false) {
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
 * Changes the bitmap
 * Returns true if the change occurred
 *
 * @param {Bitmap | Object} [object] - Bitmap or object with parameters
 *
 * @param {String} object.folder - Path to file
 * @param {String} object.filename - Name of file
 * @param {Function} [object.listener] - Function of processing after loading a bitmap
 *
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setBitmap = function(object) {
    if (this.bitmap === object) {
        return false;
    }

    this.setupBitmap(object);

    return true;
};

/**
 * Changes the fill color
 * Returns true if the change occurred
 * @param {String} [color] - Fill color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFillColor = function(color, blockRefreshAll = false) {
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
 * Changes the font of the bitmap
 * Returns true if the change occurred
 *
 * @param {Object} [font] - Text font
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 *
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 *
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setFont = function(font, blockStart = false) {
    if (_.isEqual(this._font, Object.assign(this.standardFont(), font))) {
        return false;
    }

    const lastFont = { ...this._font };

    this.setupFont(font);

    if (_.isEqual(this._font, lastFont)) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Changes the graphic folder
 * Returns true if the change occurred
 * @param {String} [folder] - Graphic folder
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setGraphicFolder = function(folder, blockStart = false) {
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
 * @param {String} [graphicName] - Graphic name
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setGraphicName = function(graphicName, blockStart = false) {
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
 * Changes the paint opacity
 * Returns true if the change occurred
 * @param {Number} [opacity] - Paint opacity
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setPaintOpacity = function(opacity, blockRefreshAll = false) {
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
 * Changes the text color
 * Returns true if the change occurred
 * @param {String} [color] - Text color
 * @param {Boolean} [blockRefreshAll=false] - Blocking the call of the "refreshAll" function
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.setTextColor = function(color, blockRefreshAll = false) {
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

// R methods

/**
 * Removes the bitmap
 * @version 1.1.0
 * @param {Boolean} [destroy=false] - Destroy the bitmap
 */
DKTools.Sprite.prototype.removeBitmap = function(destroy = false) {
    if (this.hasBitmap()) {
        if (destroy) {
            this.bitmap.destroy();
        }

        this.setBitmap(null);
    }
};

/**
 * Resets all
 */
DKTools.Sprite.prototype.resetAll = function() {
    this.resetFont();
    this.resetPaintOpacity();
    this.resetTextColor();
};

/**
 * Resets the font of the bitmap
 */
DKTools.Sprite.prototype.resetFont = function() {
    this.changeFont(this.font);
};

/**
 * Resets the paint opacity of the bitmap
 */
DKTools.Sprite.prototype.resetPaintOpacity = function() {
    this.changePaintOpacity(this.paintOpacity);
};

/**
 * Resets the text color of the bitmap
 */
DKTools.Sprite.prototype.resetTextColor = function() {
    this.changeTextColor(this.textColor);
};

/**
 * Changes the width and height of the sprite
 * Returns true if the change occurred
 * @version 1.1.0
 * @override
 * @param {Number} width - Width of the sprite
 * @param {Number | String} height - Height of the sprite or number of lines (String)
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Sprite.prototype.resize = function(width, height, blockStart = false) {
    if (!this.isResizable()) {
        return false;
    }

    return DKTools.Base.prototype.resize.apply(this, arguments);
};

// T methods

/**
 * Returns the size of the text (special characters are supported)
 * @param {String} text - Text
 * @return {{ width: Number, height: Number }} Size of the text
 */
DKTools.Sprite.prototype.textSizeEx = function(text) {
    return Window_Base.prototype.textSizeEx.apply(this, arguments);
}

// U methods

/**
 * Updates the sprite
 * @override
 */
DKTools.Sprite.prototype.update = function() {
    DKTools.Base.prototype.update.apply(this, arguments);
    this.updateChildren();
};

/**
 * Updates all
 * @override
 */
DKTools.Sprite.prototype.updateAll = function() {
    DKTools.Base.prototype.updateAll.apply(this, arguments);
    this.updateBitmap();
};

/**
 * Updates the bitmap
 */
DKTools.Sprite.prototype.updateBitmap = function() {
    if (this.hasBitmap()) {
        this.updateFont();
        this.updatePaintOpacity();
        this.updateTextColor();
    }
};

/**
 * Updates the fill of the sprite
 */
DKTools.Sprite.prototype.updateFill = function() {
    if (this.hasFillColor()) {
        this.fillAll(this.fillColor);
    }
};

/**
 * Updates the font of the bitmap
 * @param {Object} [font={}] - Text font
 * @param {String} [font.fontFace] - Font face
 * @param {Number} [font.fontSize] - Font size
 * @param {Boolean} [font.fontItalic] - Font italic
 */
DKTools.Sprite.prototype.updateFont = function(font = {}) {
    font = font || {};

    this.bitmap.fontFace = font.fontFace || this.font.fontFace;
    this.bitmap.fontItalic = !!font.fontItalic;
    this.bitmap.fontSize = font.fontSize || this.font.fontSize;
};

/**
 * Updates the paint opacity
 * @param {Number} [paintOpacity] - Paint opacity
 */
DKTools.Sprite.prototype.updatePaintOpacity = function(paintOpacity) {
    if (!Number.isFinite(paintOpacity)) {
        paintOpacity = this.paintOpacity;
    }

    this.bitmap.paintOpacity = paintOpacity;
};

/**
 * Updates the text color
 * @param {String} [textColor] - Text color
 */
DKTools.Sprite.prototype.updateTextColor = function(textColor) {
    this.bitmap.textColor = textColor || this.textColor;
};



//===========================================================================
// Sprites based on DKTools.Sprite
//===========================================================================



//===========================================================================
// DKTools.Sprite.Button
//===========================================================================

/**
 * Button class
 * @class
 * @extends DKTools.Sprite
 * @memberof DKTools.Sprite
 */
DKTools.Sprite.Button = class extends DKTools.Sprite {

    // properties

    /**
     * Gets interval of long pressing
     * @return {Number} Interval of long pressing
     */
    get longPressInterval() {
        return this._longPressInterval;
    }

    /**
     * Gets mouse press time
     * @return {Number} Mouse press time
     */
    get mousePressTime() {
        return this._mousePressTime;
    }

    /**
     * Gets touch press time
     * @return {Number} Touch press time
     */
    get touchPressTime() {
        return this._touchPressTime;
    }

    // I methods

    /**
     * Returns true if the button is pressed longer than the long press interval
     * @return {Boolean} Button is pressed longer than the long press interval
     */
    isLongPressed() {
        return this._mousePressTime >= this._longPressInterval;
    }

    /**
     * Returns true if touched longer than the long press interval
     * @return {Boolean} Touched longer than the long press interval
     */
    isLongTouched() {
        return this._touchPressTime >= this._longPressInterval;
    }

    /**
     * Returns true if the button is pressed
     * @return {Boolean} Button is pressed
     */
    isPressed() {
        return this._mousePressTime > 0 && !this.isLongPressed();
    }

    /**
     * Returns true if touched
     * @return {Boolean} Touched
     */
    isTouched() {
        return this._touchPressTime > 0 && !this.isLongTouched();
    }

    // S methods

    // standard methods

    /**
     * Returns the standard activity of the button
     * @override
     * @return {Boolean} Standard activity of the button
     */
    standardActive() {
        return false;
    }

    /**
     * Returns the standard interval of long pressing
     * @return {Number} Standard interval of long pressing
     */
    standardLongPressInterval() {
        return 18;
    }

    // setup methods

    /**
     * Sets all parameters
     * @override
     * @param {Object} [object={}] - Parameters
     * @param {Number} [object.longPressInterval] - Interval of long pressing
     */
    setupAll(object = {}) {
        object = object || {};

        super.setupAll(object);

        this.setupLongPressInterval(object.longPressInterval);
    }

    /**
     * Sets the interval of long pressing
     * @param {Number} [interval=this.standardLongPressInterval()] - Interval of long pressing
     */
    setupLongPressInterval(interval) {
        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._longPressInterval = interval || this.standardLongPressInterval();
    }

    // P methods

    /**
     * Processes all
     * @override
     */
    processAll() {
        super.processAll();

        if (Utils.isMobileDevice()) {
            this.processTouch();
        } else {
            this.processMousePress();
        }
    }

    /**
     * Processes a mouse press
     */
    processMousePress() {
        if (this.isVisibleAndActive() && this.isMouseInside()) {
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

                this._mousePressTime = 0;
            }
        } else {
            this._mousePressTime = 0;
        }
    }

    /**
     * Processes a touches
     */
    processTouch() {
        if (this.isVisibleAndActive() && this.isTouchInside()) {
            if (TouchInput.isScreenPressed()) {
                this._touchPressTime++;

                this.updateTouchDownEvents();

                if (this.isLongTouched()) {
                    if (this._touchPressTime === this._longPressInterval) {
                        this.updateLongTouchStartedEvents();
                    }

                    this.updateLongTouchEvents();
                }
            } else {
                if (this.isLongTouched()) {
                    this.updateLongTouchFinishedEvents();
                } else if (this.isTouched()) {
                    this.updateTouchEvents();
                }

                if (this._touchPressTime > 0) {
                    this.updateTouchUpEvents();
                }

                this._touchPressTime = 0;
            }
        } else {
            this._touchPressTime = 0;
        }
    }

    // U methods

    /**
     * Updates the button
     * @version 1.1.0
     * @override
     */
    update() {
        super.update.apply(this, arguments);
        this.updateButtonState();
    }

    /**
     * Updates the button state
     */
    updateButtonState() {
        if (Utils.isMobileDevice()) {
            if (this._touchPressTime > 0) {
                this.updateStatePressedEvents();
            } else {
                this.updateStateNormalEvents();
            }
        } else {
            if (this._mousePressTime > 0) {
                this.updateStatePressedEvents();
            } else {
                this.updateStateNormalEvents();
            }
        }
    }

    // events methods

    /**
     * Updates the events with type: long-touch
     */
    updateLongTouchEvents() {
        this._eventsManager.updateEventsContainer('long-touch');
    }

    /**
     * Updates the events with type: mouse-long-press-finished
     */
    updateLongTouchFinishedEvents() {
        this._eventsManager.updateEventsContainer('long-touch-finished');
    }

    /**
     * Updates the events with type: mouse-long-press-started
     */
    updateLongTouchStartedEvents() {
        this._eventsManager.updateEventsContainer('long-touch-started');
    }

    /**
     * Updates the events with type: mouse-down-button
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseDownEvents(button) {
        this._eventsManager.updateEventsContainer('mouse-down-' + button);
    }

    /**
     * Updates the events with type: mouse-up-button
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseUpEvents(button) {
        this._eventsManager.updateEventsContainer('mouse-up-' + button);
    }

    /**
     * Updates the events with type: mouse-click-button
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseClickEvents(button) {
        this._eventsManager.updateEventsContainer('mouse-click-' + button);
    }

    /**
     * Updates the events with type: mouse-long-press-button
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseLongPressEvents(button) {
        this._eventsManager.updateEventsContainer('mouse-long-press-' + button);
    }

    /**
     * Updates the events with type: mouse-long-press-button-started
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseLongPressStartedEvents(button) {
        this._eventsManager.updateEventsContainer(`mouse-long-press-${button}-started`);
    }

    /**
     * Updates the events with type: mouse-long-press-button-finished
     * @param {String} button - Mouse button (left, middle or right)
     */
    updateMouseLongPressFinishedEvents(button) {
        this._eventsManager.updateEventsContainer(`mouse-long-press-${button}-finished`);
    }

    /**
     * Updates the events with type: state-normal
     */
    updateStateNormalEvents() {
        this._eventsManager.updateEventsContainer('state-normal');
    }

    /**
     * Updates the events with type: state-pressed
     */
    updateStatePressedEvents() {
        this._eventsManager.updateEventsContainer('state-pressed');
    }

    /**
     * Updates the events with type: touch
     */
    updateTouchEvents() {
        this._eventsManager.updateEventsContainer('touch');
    }

    /**
     * Updates the events with type: touch-down
     */
    updateTouchDownEvents() {
        this._eventsManager.updateEventsContainer('touch-down');
    }

    /**
     * Updates the events with type: touch-up
     */
    updateTouchUpEvents() {
        this._eventsManager.updateEventsContainer('touch-up');
    }

};



//===========================================================================
// DKTools.Window
//===========================================================================

/**
 * @class
 * @extends Window_Base
 * @mixes DKTools.Base
 */
DKTools.Window = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Window.prototype = Object.create(Window_Base.prototype);
Object.defineProperties(DKTools.Window.prototype,
    Object.getOwnPropertyDescriptors(DKTools.Base.prototype));
DKTools.Window.prototype.constructor = DKTools.Window;

// properties

Object.defineProperties(DKTools.Window.prototype, {

    /**
     * Bitmap of the contents sprite
     * To support functions from DKTools.Base
     * @type {Bitmap | null}
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
 * Initializes a window
 *
 * @override
 *
 * @param {Number | Graphics | Object} [object] - The X coordinate or Graphics or object with parameters
 * @param {Number} [y] - The Y coordinate (if object is Number)
 * @param {Number} [width] - Width of the window (if object is Number)
 * @param {Number | String} [height] - Height of the window or number of lines (String) (if object is Number)
 *
 * @param {Number} [object.x] - The X coordinate
 * @param {Number} [object.y] - The Y coordinate
 * @param {Number} [object.width] - Width of the window
 * @param {Number | String} [object.height] - Height of the window or number of lines (String)
 *
 * @example
 * const window = new DKTools.Window(0, 0, 100, 100);
 *
 * @example
 * const window = new DKTools.Window(Graphics);
 *
 * @example
 * const window = new DKTools.Window({ x: 0, y: 0, width: 200, height: 200 });
 *
 * @example
 * const window = new DKTools.Window(50, 50, 400, '2');
 */
DKTools.Window.prototype.initialize = function(object, y, width, height) {
    Window.prototype.initialize.apply(this, arguments);
    DKTools.Base.prototype.initialize.call(this, object, y, width, height);
    this.loadWindowskin();
    this.createContents();
};

// A methods

/**
 * Activates the window
 * @override
 */
DKTools.Window.prototype.activate = function() {
    DKTools.Base.prototype.activate.apply(this, arguments);

    if (this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.activate();
    }
};

// C methods

/**
 * Creates the contents background sprite
 * @private
 * @override
 */
DKTools.Window.prototype._createContentsBackSprite = function() {
    Window.prototype._createContentsBackSprite.apply(this, arguments);
    this._contentsBackSprite.bitmap = new Bitmap();
};

/**
 * Creates the contents sprite
 * @override
 * @private
 */
DKTools.Window.prototype._createContentsSprite = function() {
    this._contentsSprite = this.standardContentsSprite();
    this._clientArea.addChild(this._contentsSprite);
};

/**
 * Clears the window
 * Returns true if successfully completed
 * @override
 * @return {Boolean} Successfully completed
 */
DKTools.Window.prototype.clear = function() {
    if (this.contentsBack) {
        this.contentsBack.clear();
    }

    return DKTools.Base.prototype.clear.apply(this, arguments);
};

/**
 * Returns the width of the contents
 * @override
 * @return {Number} Width of the contents
 */
DKTools.Window.prototype.contentsWidth = function() {
    if (typeof this._contentsWidth === 'function') {
        return this._contentsWidth(this);
    }

    return this._contentsWidth;
};

/**
 * Returns the height of the contents
 * @override
 * @return {Number} Height of the contents
 */
DKTools.Window.prototype.contentsHeight = function() {
    if (typeof this._contentsHeight === 'function') {
        return this._contentsHeight(this);
    }

    return this._contentsHeight;
};

/**
 * Creates the contents
 * @override
 */
DKTools.Window.prototype.createContents = function() {
    const instanceOf = this._contentsSprite instanceof DKTools.Sprite;
    const width = this.contentsWidth();
    const height = this.contentsHeight();

    if (instanceOf) {
        this._contentsSprite.destroyBitmap();

        if (this.contentsBack) {
            this.contentsBack.destroy();
        }
    } else {
        this.destroyContents();
    }

    this.contentsBack = new Bitmap(width, height);

    if (instanceOf) {
        this._contentsSprite.setupSize(width, height);
        this._contentsSprite.start();
    } else {
        this.contents = new Bitmap(width, height);
    }

    this.resetFontSettings();
};

/**
 * Creates all objects
 * @override
 */
DKTools.Window.prototype.createAll = function() {
    DKTools.Base.prototype.createAll.apply(this, arguments);
    this.createContents();
}

// D methods

/**
 * Deactivates the window
 * @override
 */
DKTools.Window.prototype.deactivate = function() {
    DKTools.Base.prototype.deactivate.apply(this, arguments);

    if (this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.deactivate();
    }
};

/**
 * Draws the text
 * Returns true if successfully completed
 * @override
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 */
DKTools.Window.prototype.drawText = function(text, options) {
    if (arguments.length <= 2 && this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.drawText(text, options);
    } else {
        Window_Base.prototype.drawText.apply(this, arguments);
    }
};

/**
 * Draws the text
 * @version 1.1.0
 * @override
 * @param {String} text - Text
 * @param {Object} [options={}] - Options for drawing
 */
DKTools.Window.prototype.drawTextEx = function(text, options) {
    if (arguments.length <= 2 && this._contentsSprite instanceof DKTools.Sprite) {
        DKTools.Base.prototype.drawTextEx.apply(this, arguments);
    } else {
        Window_Base.prototype.drawTextEx.apply(this, arguments);
    }
};

// H methods

/**
 * Hides the background
 */
DKTools.Window.prototype.hideBack = function() {
    this._backSprite.visible = false;
};

/**
 * Hides the cursor
 */
DKTools.Window.prototype.hideCursor = function() {
    this.cursorVisible = false;

    this._cursorSprite.visible = false;
};

/**
 * Hides the contents background
 */
DKTools.Window.prototype.hideContentsBack = function() {
    this._contentsBackSprite.visible = false;
};

/**
 * Hides the frame
 */
DKTools.Window.prototype.hideFrame = function() {
    this.frameVisible = false;

    this._frameSprite.visible = false;
};

// I method

/**
 * Returns true if the window is open and visible
 * @return {Boolean} Window is open and visible
 */
DKTools.Window.prototype.isOpenAndVisible = function() {
    return this.isOpen() && this.isVisible();
};

/**
 * Returns true if the window is open and active
 * @return {Boolean} Window is open and active
 */
DKTools.Window.prototype.isOpenAndActive = function() {
    return this.isOpen() && this.isActive();
};

// L methods

/**
 * Loads the window skin
 * @override
 */
DKTools.Window.prototype.loadWindowskin = function() {
    this.windowskin = DKTools.Utils.Bitmap.load({
        folder: 'img/system',
        filename: this.standardWindowskin()
    });
};

// R methods

/**
 * Updates and redraws all
 * @override
 */
DKTools.Window.prototype.refreshAll = function() {
    this._refreshAllParts();
    DKTools.Base.prototype.refreshAll.apply(this, arguments);
};

/**
 * Resets the font settings
 * @override
 */
DKTools.Window.prototype.resetFontSettings = function() {
    if (this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.resetFont();

        this.resetTextColor();
    } else {
        Window_Base.prototype.resetFontSettings.apply(this, arguments);
    }
};

/**
 * Resets the text color
 * @override
 */
DKTools.Window.prototype.resetTextColor = function() {
    if (this._contentsSprite instanceof DKTools.Sprite) {
        this._contentsSprite.resetTextColor();
    } else {
        Window_Base.prototype.resetTextColor.apply(this, arguments);
    }
};

/**
 * Changes the size of the window
 * Returns true if the change occurred
 * @override
 * @param {Number} width - Width of the window
 * @param {Number | String} height - Height of the window or number of lines (String)
 * @param {Boolean} [blockStart=false] - Blocking the call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Window.prototype.resize = function(width, height, blockStart = false) {
    if (typeof height === 'string') { // number of lines
        height = this.itemHeight() * parseFloat(height) + this._padding * 2;
    }

    return DKTools.Base.prototype.resize.call(this, width, height, blockStart);
};

// S methods

/**
 * Returns the standard openness speed of the window
 * @return {Number} Standard openness speed of the window
 */
DKTools.Window.prototype.standardOpennessSpeed = function() {
    return 32;
};

/**
 * Returns the standard sprite of the contents
 * @return {DKTools.Sprite | Sprite} Standard sprite of the contents
 */
DKTools.Window.prototype.standardContentsSprite = function() {
    return new DKTools.Sprite();
};

/**
 * Returns the standard width of the contents
 * @return {Function} Standard width of the contents
 */
DKTools.Window.prototype.standardContentsWidth = function() {
    return () => this.innerWidth;
};

/**
 * Returns the standard height of the contents
 * @return {Function} Standard height of the contents
 */
DKTools.Window.prototype.standardContentsHeight = function() {
    return () => this.innerHeight;
};

// setup methods

/**
 * Sets all parameters
 * @version 1.1.0
 * @override
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Function | Number} [object.contentsWidth] - Width of the contents
 * @param {Function | Number} [object.contentsHeight] - Height of the contents
 * @param {Sprite} [object.contentsSprite] - Contents sprite
 */
DKTools.Window.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Base.prototype.setupAll.call(this, object);

    this.setupContentsWidth(object.contentsWidth);
    this.setupContentsHeight(object.contentsHeight);
    this.setupContentsSprite(object.contentsSprite);
};

/**
 * Sets the size of the window
 * @version 1.1.0
 * @param {Number | Object} [width] - Width of the window
 * @param {Number | String} [height] - Height of the window or number of lines (String)
 */
DKTools.Window.prototype.setupSize = function(width, height) {
    if (typeof height === 'string') { // number of lines
        height = this.lineHeight() * parseFloat(height) + this._padding * 2;
    }

    Window.prototype.move.call(this, this.x, this.y, width, height);
};

/**
 * Sets the width of the contents
 * @param {Function | Number} [contentsWidth=this.standardContentsWidth()] - Width of the contents
 */
DKTools.Window.prototype.setupContentsWidth = function(contentsWidth) {
    this._contentsWidth = contentsWidth || this.standardContentsWidth();
};

/**
 * Sets the height of the contents
 * @param {Function | Number} [contentsHeight=this.standardContentsHeight()] - Height of the contents
 */
DKTools.Window.prototype.setupContentsHeight = function(contentsHeight) {
    this._contentsHeight = contentsHeight || this.standardContentsHeight();
};

/**
 * Sets the sprite of the contents
 * @param {DKTools.Sprite | *} [contentsSprite=this.standardContentsSprite()] - Contents sprite
 */
DKTools.Window.prototype.setupContentsSprite = function(contentsSprite) {
    if (this._contentsSprite) {
        this._clientArea.removeChild(this._contentsSprite);

        if (this._contentsSprite.bitmap) {
            this._contentsSprite.bitmap.destroy();
        }

        this._contentsSprite.destroy();
    }

    /**
     * @private
     * @readonly
     * @type {DKTools.Sprite | *}
     */
    this._contentsSprite = contentsSprite || this.standardContentsSprite();

    this._clientArea.addChild(this._contentsSprite);
};

// U methods

/**
 * Updates the window
 * @override
 */
DKTools.Window.prototype.update = function() {
    Window_Base.prototype.update.apply(this, arguments);
    DKTools.Base.prototype.update.apply(this, arguments);
};

/**
 * Updates all
 * @override
 */
DKTools.Window.prototype.updateAll = function() {
    this.updateContents();
    DKTools.Base.prototype.updateAll.apply(this, arguments);
};

/**
 * Updates the contents
 */
DKTools.Window.prototype.updateContents = function() {
    if (typeof this._contentsSprite.updateAll === 'function') {
        this._contentsSprite.updateAll();
    }
};

/**
 * Updates the opening of the window
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

// events methods

/**
 * Updates the events with type: open
 */
DKTools.Window.prototype.updateOpenEvents = function() {
    this._eventsManager.updateEventsContainer('open');
};

/**
 * Updates the events with type: close
 */
DKTools.Window.prototype.updateCloseEvents = function() {
    this._eventsManager.updateEventsContainer('close');
};



//===========================================================================
// DKTools.Window.Selectable
//===========================================================================

/**
 * @class
 * @extends Window_Selectable
 * @mixes DKTools.Window
 */
DKTools.Window.Selectable = function(object, y, width, height) {
    this.initialize.apply(this, arguments);
};

DKTools.Window.Selectable.prototype = Object.create(Window_Selectable.prototype);
Object.defineProperties(DKTools.Window.Selectable.prototype,
    Object.getOwnPropertyDescriptors(DKTools.Window.prototype));
DKTools.Window.Selectable.prototype.constructor = DKTools.Window.Selectable;

// A methods

/**
 * Adds an item
 * @since 1.1.1
 * @param {Object} item - Item
 */
DKTools.Window.Selectable.prototype.addItem = function(item) {
    if (item.enabled === undefined) {
        item.enabled = true;
    }

    if (item.symbol && typeof item.handler === 'function') {
        this.setHandler(item.symbol, item.handler);
    }

    this._list.push(item);
};

// C methods

/**
 * Clears all
 * @private
 * @override
 */
DKTools.Window.Selectable.prototype._clearAll = function() {
    DKTools.Window.prototype._clearAll.apply(this, arguments);

    this._index = 0;
    this._cursorFixed = false;
    this._cursorAll = false;
    this._helpWindow = null;
    this._handlers = {};
    this._doubleTouch = false;
    this._canRepeat = true;
    this._scrollX = 0;
    this._scrollY = 0;
    this._scrollBaseX = 0;
    this._scrollBaseY = 0;

    this.clearScrollStatus();
};

/**
 * @override
 */
DKTools.Window.Selectable.prototype._createArrowSprites = function() {
    DKTools.Window.prototype._createArrowSprites.apply(this, arguments);

    this._leftArrowSprite = new Sprite();
    this._rightArrowSprite = new Sprite();

    this.addChild(this._leftArrowSprite);
    this.addChild(this._rightArrowSprite);
};

/**
 * Calls the handler of the symbol
 * @override
 * @param {String} symbol - Symbol
 */
DKTools.Window.Selectable.prototype.callHandler = function(symbol) {
    if (this.isHandled(symbol)) {
        this._handlers[symbol](this._index, this);
    }
};

/**
 * Calls the handler of the Ok
 */
DKTools.Window.Selectable.prototype.callOkHandler = function() {
    const symbol = this.currentSymbol();

    if (this.isHandled(symbol)) {
        this.callHandler(symbol);
    } else if (this.isHandled('ok')) {
        this.callHandler('ok');
    } else {
        this.activate();
    }
};

/**
 * Changes the paint opacity
 * @override
 * @param {Boolean | Number} paintOpacity - Paint opacity
 */
DKTools.Window.Selectable.prototype.changePaintOpacity = function(paintOpacity) {
    if (typeof paintOpacity === 'boolean') {
        Window_Selectable.prototype.changePaintOpacity.apply(this, arguments);
    } else {
        this.contents.paintOpacity = paintOpacity;
    }
};

/**
 * Returns the current column
 * @since 1.1.0
 * @return {Number} Current column
 */
DKTools.Window.Selectable.prototype.col = function() {
    return this.isHorizontal() ?
        this._index : Math.floor(this._index % this.maxCols());
};

/**
 * Returns width of the contents
 * @override
 * @return {Number} Width of the contents
 */
DKTools.Window.Selectable.prototype.contentsWidth = function() {
    return this.isHorizontal() ?
        this.innerWidth + this.itemWidth() :
        Window_Selectable.prototype.contentsWidth.apply(this, arguments);
};

/**
 * Returns the current item (selected item)
 * @return {Object | null} Current item (selected item) or null
 */
DKTools.Window.Selectable.prototype.currentItem = function() {
    return this.item(this._index);
};

/**
 * Returns the current symbol
 * @since 1.1.1
 * @return {* | null} Symbol or null
 */
DKTools.Window.Selectable.prototype.currentSymbol = function() {
    return this.itemSymbol(this._index);
};

/**
 * Returns the current ext
 * @since 1.1.1
 * @return {* | null} Ext or null
 */
DKTools.Window.Selectable.prototype.currentExt = function() {
    return this.itemExt(this._index);
};

/**
 * Moves the cursor to up
 * @override
 * @param {Boolean} [wrap=false] - Wrap cursor
 */
DKTools.Window.Selectable.prototype.cursorUp = function(wrap = false) {
    if (this.isHorizontal()) {
        return;
    }

    const index = this._index;
    const maxItems = this.maxItems();
    const maxCols = this.maxCols();

    if (index >= maxCols || (wrap && (maxItems === this.maxRows() * maxCols))) {
        this.smoothSelect((index - maxCols + maxItems) % maxItems);
    }
};

/**
 * Moves the cursor to down
 * @override
 * @param {Boolean} [wrap=false] - Wrap cursor
 */
DKTools.Window.Selectable.prototype.cursorDown = function(wrap = false) {
    if (this.isHorizontal()) {
        return;
    }

    const index = this._index;
    const maxItems = this.maxItems();
    const maxCols = this.maxCols();

    if (index < maxItems - maxCols || (wrap && (maxItems === this.maxRows() * maxCols))) {
        this.smoothSelect((index + maxCols) % maxItems);
    }
};

/**
 * Moves the cursor to left
 * @override
 * @param {Boolean} [wrap=false] - Wrap cursor
 */
DKTools.Window.Selectable.prototype.cursorLeft = function(wrap = false) {
    const index = Math.max(0, this._index);
    const maxItems = this.maxItems();
    const maxCols = this.maxCols();
    const horizontal = this.isHorizontal();

    if (!horizontal) {
        if (maxCols >= 2 && (index > 0 || wrap)) {
            this.smoothSelect((index - 1 + maxItems) % maxItems);
        }
    } else {
        this.selectPrevItem(wrap, true);
    }
};

/**
 * Moves the cursor to right
 * @override
 * @param {Boolean} [wrap=false] - Wrap cursor
 */
DKTools.Window.Selectable.prototype.cursorRight = function(wrap = false) {
    const index = this._index;
    const maxItems = this.maxItems();
    const maxCols = this.maxCols();
    const horizontal = this.isHorizontal();

    if (!horizontal) {
        if (maxCols >= 2 && (index < maxItems - 1 || wrap)) {
            this.smoothSelect((index + 1) % maxItems);
        }
    } else {
        this.selectNextItem(wrap, true);
    }
};

// D methods

/**
 * Draws all
 * @override
 */
DKTools.Window.Selectable.prototype.drawAll = function() {
    this.drawAllItems();
};

/**
 * Draws all items
 * @override
 */
DKTools.Window.Selectable.prototype.drawAllItems = function() {
    const maxVisibleItems = this.maxVisibleItems();
    const maxItems = this.maxItems();
    let index = this.topIndex();

    for (let i = 0; i < maxVisibleItems && index < maxItems; i++, index++) {
        this.drawItemBackground(index);
        this.drawItem(index);
    }
};

/**
 * Draws the item
 * @override
 * @param {Number} index - Index
 */
DKTools.Window.Selectable.prototype.drawItem = function(index) {
    const item = this.item(index) || {};

    if (DKTools.Utils.isFunction(item.drawHandler)) {
        item.drawHandler(index, this);
    } else if (DKTools.Utils.isFunction(this._itemDrawHandler)) {
        this._itemDrawHandler(index, this);
    }
};

// E methods

/**
 * @override
 * @param {Boolean} [smooth=false] - Smooth
 */
DKTools.Window.Selectable.prototype.ensureCursorVisible = function(smooth = false) {
    if (this.isHorizontal()) {
        const currentCol = this.col();
        const innerWidth = this.innerWidth;

        if (innerWidth > 0 && currentCol >= 0) {
            const scrollX = this.scrollX();
            const itemWidth = this.itemWidth();
            const itemTop = currentCol * itemWidth;
            const itemBottom = itemTop + itemWidth;
            const scrollMin = itemBottom - innerWidth;

            if (scrollX > itemTop) {
                if (smooth) {
                    this.smoothScrollTo(itemTop, 0);
                } else {
                    this.scrollTo(itemTop, 0);
                }
            } else if (scrollX < scrollMin) {
                if (smooth) {
                    this.smoothScrollTo(scrollMin, 0);
                } else {
                    this.scrollTo(scrollMin, 0);
                }
            }
        }
    } else {
        Window_Selectable.prototype.ensureCursorVisible.apply(this, arguments);
    }
};

// F methods

/**
 * Finds the symbol
 * Returns index
 * @param {String} symbol - Symbol
 * @return {Number} Index
 */
DKTools.Window.Selectable.prototype.findSymbol = function(symbol) {
    return this._list.findIndex(item => item.symbol === symbol);
};

/**
 * Finds the ext
 * Returns index
 * @param {*} ext - Ext
 * @return {Number} Index
 */
DKTools.Window.Selectable.prototype.findExt = function(ext) {
    return this._list.findIndex(item => item.ext === ext);
};

// H methods

/**
 * Returns true if the items exists
 * @return {Boolean} Items exists
 */
DKTools.Window.Selectable.prototype.hasItems = function() {
    return this.maxItems() > 0;
};

/**
 * Returns true if the item with symbol exists
 * @param {String} symbol - Symbol
 * @return {Boolean} Item with symbol exists
 */
DKTools.Window.Selectable.prototype.hasSymbol = function(symbol) {
    return this._list.some(item => item.symbol === symbol);
};

// I methods

/**
 * Returns the item by index
 * @since 1.1.0
 * @param {Number} index - Index
 * @return {Object | null} Item or null
 */
DKTools.Window.Selectable.prototype.item = function(index) {
    return this._list[index] || null;
};

/**
 * Returns the name of the item
 * @since 1.1.1
 * @param {Number} index - Index
 * @return {String | undefined} Name of the item
 */
DKTools.Window.Selectable.prototype.itemName = function(index) {
    const item = this.item(index) || {};

    if (DKTools.Utils.isFunction(item.name)) {
        return item.name(index, this);
    }

    return item.name;
};

/**
 * Returns the command symbol
 * @since 1.1.1
 * @param {Number} index - Index
 * @return {String | null} Command symbol
 */
DKTools.Window.Selectable.prototype.itemSymbol = function(index) {
    const item = this.item(index);

    return item ? item.symbol : null;
};

/**
 * Returns the command ext
 * @since 1.1.1
 * @param {Number} index - Index
 * @return {* | null} Command ext
 */
DKTools.Window.Selectable.prototype.itemExt = function(index) {
    const item = this.item(index);

    return item ? item.ext : null;
};

/**
 * Returns the width of the item
 * @override
 * @return {Number} Width of the item
 */
DKTools.Window.Selectable.prototype.itemWidth = function() {
    if (DKTools.Utils.isFunction(this._itemWidth)) {
        return this._itemWidth(this);
    } else if (Number.isFinite(this._itemWidth)) {
        return this._itemWidth;
    }

    return Window_Selectable.prototype.itemWidth.apply(this, arguments);
};

/**
 * Returns the height of the item
 * @override
 * @return {Number} Height of the item
 */
DKTools.Window.Selectable.prototype.itemHeight = function() {
    if (typeof this._itemHeight === 'function') {
        return this._itemHeight(this);
    } else if (Number.isFinite(this._itemHeight)) {
        return this._itemHeight;
    } else if (typeof this._itemHeight === 'string') { // number of lines
        return this.lineHeight() * parseFloat(this._itemHeight);
    }

    return Window_Selectable.prototype.itemHeight.apply(this, arguments);
};

/**
 * @override
 * @param {Number} index - Item index
 */
DKTools.Window.Selectable.prototype.itemRect = function(index) {
    const itemWidth = this.itemWidth();
    const itemHeight = this.itemHeight();
    const colSpacing = this.colSpacing();
    const rowSpacing = this.rowSpacing();
    const width = itemWidth - colSpacing;
    const height = itemHeight - rowSpacing;
    const rect = new Rectangle(0, 0, width, height);

    if (this.isHorizontal()) {
        rect.x = index * itemWidth - this.scrollBaseX();
    } else {
        const maxCols = this.maxCols();
        const col = index % maxCols;
        const row = Math.floor(index / maxCols);

        rect.x = col * itemWidth + colSpacing / 2 - this.scrollBaseX();
        rect.y = row * itemHeight + rowSpacing / 2 - this.scrollBaseY();
    }

    return rect;
};

/**
 * Returns the ext of the item by index
 * @param {Number} index - Index
 * @return {* | null} Ext of the item by index or null
 */
DKTools.Window.Selectable.prototype.itemExt = function(index) {
    const item = this.item(index);

    return item ? item.ext : null;
};

/**
 * Returns the align of the item
 * @override
 * @param {Number} index - Index
 * @return {String} Align of the item
 */
DKTools.Window.Selectable.prototype.itemTextAlign = function(index) {
    const item = this.item(index) || {};

    if (DKTools.Utils.isFunction(item.align)) {
        return item.align(index, this);
    }

    if (DKTools.Utils.isFunction(this._itemTextAlign)) {
        return this._itemTextAlign(index, this);
    }

    return item.align || this.standardItemTextAlign();
};

/**
 * Returns the text color of the item
 * @param {Number} index - Index
 * @return {String} Text color of the item
 */
DKTools.Window.Selectable.prototype.itemTextColor = function(index) {
    const item = this.item(index) || {};
    const itemTextColor = item.textColor || this._itemTextColor;

    if (DKTools.Utils.isFunction(itemTextColor)) {
        return itemTextColor(index, this);
    }

    return itemTextColor || ColorManager.normalColor();
};

/**
 * Returns the paint opacity of the item
 * @param {Number} index - Index
 * @return {Number} Paint opacity of the item
 */
DKTools.Window.Selectable.prototype.itemPaintOpacity = function(index) {
    const item = this.item(index) || {};

    if (DKTools.Utils.isFunction(item.paintOpacity)) {
        return item.paintOpacity(index, this);
    } else if (Number.isFinite(item.paintOpacity)) {
        return item.paintOpacity;
    } else if (typeof this._itemPaintOpacity === 'function') {
        return this._itemPaintOpacity(index, this);
    }

    return this.isItemEnabled(index) ?
        255 : this.translucentOpacity();
};

/**
 * Returns true if the item is enabled
 * @param {Number} index - Index
 * @return {Boolean} Item is enabled
 */
DKTools.Window.Selectable.prototype.isItemEnabled = function(index) {
    const item = this.item(index) || {};
    const itemEnabled = item.enabled;

    if (DKTools.Utils.isFunction(itemEnabled)) {
        return itemEnabled(index, this);
    }

    return itemEnabled;
};

/**
 * Returns true if the current item (selected item) is enabled
 * @override
 * @return {Boolean} Current item (selected item) is enabled
 */
DKTools.Window.Selectable.prototype.isCurrentItemEnabled = function() {
    return this.isItemEnabled(this._index);
};

// M methods

/**
 * Returns max cols
 * @override
 * @return {Number} Max cols
 */
DKTools.Window.Selectable.prototype.maxCols = function() {
    return this._maxCols;
};

/**
 * Returns max items
 * @override
 * @return {Number} Max items
 */
DKTools.Window.Selectable.prototype.maxItems = function() {
    return this._list.length;
};

/**
 * Returns page items
 * @override
 * @return {Number} Page items
 */
DKTools.Window.Selectable.prototype.maxPageItems = function() {
    return this.isHorizontal() ?
        this.maxCols() : Window_Selectable.prototype.maxPageItems.apply(this, arguments);
};

/**
 * Returns max visible items
 * @override
 * @return {Number} Max visible items
 */
DKTools.Window.Selectable.prototype.maxVisibleItems = function() {
    return this.isHorizontal() ?
        Math.ceil(this.contentsWidth() / this.itemWidth()):
        Window_Selectable.prototype.maxVisibleItems.apply(this, arguments);

};

// N methods

/**
 * Returns the next index
 * @since 1.1.0
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @return {Number} Next index
 */
DKTools.Window.Selectable.prototype.nextIndex = function(wrap = false) {
    if (this._index < this.maxItems() - 1) {
        return this._index + 1;
    } else if (wrap) {
        return 0;
    }

    return -1;
};

/**
 * Returns the next item
 * @since 1.1.0
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @return {Object | null} Next item or null
 */
DKTools.Window.Selectable.prototype.nextItem = function(wrap = false) {
    return this.item(this.nextIndex(wrap));
};

// O methods

/**
 * Returns the overall width
 * @override
 * @return {Number} Overall width
 */
DKTools.Window.Selectable.prototype.overallWidth = function() {
    return this.isHorizontal() ?
        this.maxItems() * this.itemWidth() :
        Window_Selectable.prototype.overallWidth.apply(this, arguments);
};

/**
 * Returns the overall height
 * @override
 * @return {Number} Overall height
 */
DKTools.Window.Selectable.prototype.overallHeight = function() {
    return this.isHorizontal() ?
        this.itemHeight() : Window_Selectable.prototype.overallHeight.apply(this, arguments);
};

// P methods

/**
 * @override
 */
DKTools.Window.Selectable.prototype.paint = function() {
    this.refreshAll();
};

/**
 * Plays "cursor" sound
 */
DKTools.Window.Selectable.prototype.playCursorSound = function() {
    SoundManager.playCursor();
};

/**
 * Returns the previous index
 * @since 1.1.0
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @return {Number} Previous index
 */
DKTools.Window.Selectable.prototype.prevIndex = function(wrap = false) {
    if (this._index > 0) {
        return this._index - 1;
    } else if (wrap) {
        return this.maxItems() - 1;
    }

    return -1;
};

/**
 * Returns the previous item
 * @since 1.1.0
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @return {Object | null} Previous item or null
 */
DKTools.Window.Selectable.prototype.prevItem = function(wrap = false) {
    return this.item(this.prevIndex(wrap));
};

/**
 * Processes cancel
 * @override
 */
DKTools.Window.Selectable.prototype.processCancel = function() {
    SoundManager.playCancel();

    this.updateInputData();
    this.deactivate();

    const item = this.currentItem();

    if (item && DKTools.Utils.isFunction(item.cancelHandler)) {
        item.cancelHandler(this._index, this);
    } else {
        this.callCancelHandler();
    }
};

/**
 * Processes ok
 * @override
 */
DKTools.Window.Selectable.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.deactivate();

        const item = this.currentItem() || {};

        if (DKTools.Utils.isFunction(item.okHandler)) {
            item.okHandler(this._index, this);
        } else {
            this.callOkHandler();
        }
    } else {
        this.playBuzzerSound();
    }
};

/**
 * Processes wheel scroll
 * @override
 */
DKTools.Window.Selectable.prototype.processWheelScroll = function() {
    if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
        const threshold = 20;

        if (TouchInput.wheelY >= threshold) {
            if (this.isHorizontal()) {
                this.smoothScrollLeft(1);
            } else {
                this.smoothScrollDown(1);
            }
        }

        if (TouchInput.wheelY <= -threshold) {
            if (this.isHorizontal()) {
                this.smoothScrollRight(1);
            } else {
                this.smoothScrollUp(1);
            }
        }
    }
};

// R methods

/**
 * Refreshes arrows
 * @override
 */
DKTools.Window.Selectable.prototype._refreshArrows = function() {
    DKTools.Window.prototype._refreshArrows.apply(this, arguments);

    const w = this._width;
    const h = this._height;
    const p = 24;
    const q = p / 2;
    const sx = 96 + p;
    const sy = 0 + p;

    this._leftArrowSprite.bitmap = this._windowskin;
    this._leftArrowSprite.anchor.set(0.5, 0.5);
    this._leftArrowSprite.setFrame(sx, sy + q, q, p);
    this._leftArrowSprite.move(q / 2, h / 2);

    this._rightArrowSprite.bitmap = this._windowskin;
    this._rightArrowSprite.anchor.set(0.5, 0.5);
    this._rightArrowSprite.setFrame(sx + q + p, sy + q, q, p);
    this._rightArrowSprite.move(w - q, h / 2);
};

/**
 * Refreshes the window
 * @override
 */
DKTools.Window.Selectable.prototype.refreshAll = function() {
    DKTools.Window.prototype.refreshAll.apply(this, arguments);
    this.refreshCursor();
};

// S methods

// standard methods

/**
 * Returns the standard sprite of the contents
 * @override
 * @return {Sprite} Standard sprite of the contents
 */
DKTools.Window.Selectable.prototype.standardContentsSprite = function() {
    return new Sprite();
};

/**
 * Returns the standard items
 * @return {Object[]} Standard items
 */
DKTools.Window.Selectable.prototype.standardItems = function() {
    return [];
};

/**
 * Returns the standard number of the columns
 * @return {Number} Standard number of the columns
 */
DKTools.Window.Selectable.prototype.standardMaxCols = function() {
    return 1;
};

/**
 * Returns the standard handler of draw of the item
 * @version 1.1.0
 * @return {Function} Standard handler of draw of the item
 */
DKTools.Window.Selectable.prototype.standardItemDrawHandler = function() {
    return function(index) {
        const textColor = this.itemTextColor(index);
        const paintOpacity = this.itemPaintOpacity(index);
        const align = this.itemTextAlign(index);
        const rect = this.itemLineRect(index);

        this.changeTextColor(textColor);
        this.changePaintOpacity(paintOpacity);

        this.contents.drawText(
            this.itemName(index), rect.x, rect.y, rect.width, rect.height, align);
    }.bind(this);
};

/**
 * Returns the standard text align
 * @since 1.1.1
 * @return {String} Standard text align
 */
DKTools.Window.Selectable.prototype.standardItemTextAlign = function() {
    return 'center';
};

// setup methods

/**
 * Sets all parameters
 *
 * @param {Object} [object={}] - Parameters
 *
 * @param {Number} [object.index] - Index
 * @param {Number} [object.maxCols] - Number of the columns
 * @param {Object[]} [object.items] - List of the items
 * @param {Function} [object.drawItemHandler] - Handler of draw of the item
 * @param {Function | Number} [object.itemWidth] - Width of the item
 * @param {Function | Number} [object.itemHeight] - Height of the item
 * @param {Function | Object} [object.itemFont] - Font of the item
 * @param {Function | String} [object.itemTextColor] - Text color of the item
 * @param {Function | Number} [object.itemPaintOpacity] - Paint opacity of the item
 * @param {Function | String} [object.itemAlign] - Align of the item
 * @param {Function} [object.itemDrawHandler] - Handler of draw of the item
 */
DKTools.Window.Selectable.prototype.setupAll = function(object = {}) {
    object = object || {};

    DKTools.Window.prototype.setupAll.apply(this, arguments);

    this.setupMaxCols(object.maxCols);
    this.setupItems(object.items);
    this.setupItemWidth(object.itemWidth);
    this.setupItemHeight(object.itemHeight);
    this.setupItemTextColor(object.itemTextColor);
    this.setupItemPaintOpacity(object.itemPaintOpacity);
    this.setupItemAlign(object.itemAlign);
    this.setupItemDrawHandler(object.itemDrawHandler);
};

/**
 * Sets the number of the columns
 * @param {Number} [cols=this.standardMaxCols()] - Number of the columns
 */
DKTools.Window.Selectable.prototype.setupMaxCols = function(cols = 1) {
    this._maxCols = cols || this.standardMaxCols();
};

/**
 * Sets the list of the items
 *
 * @param {Object[]} [items] - Items
 *
 * @param {Function | String} [items[].name] - Item name
 * @param {Function | String} [items[].align] - Item align
 * @param {Function | String} [items[].textColor] - Item text color
 * @param {Function | Number} [items[].paintOpacity] - Item paint opacity
 * @param {Function | Boolean} [items[].enabled] - Item activity
 * @param {String} [items[].symbol] - Item symbol
 * @param {Function} [items[].handler] - Symbol handler
 * @param {Function} [items[].drawHandler] - Handler of draw of the item
 * @param {Function} [items[].selectHandler] - Item select handler
 * @param {Function} [items[].okHandler] - Item ok handler
 * @param {Function} [items[].cancelHandler] - Item cancel handler
 */
DKTools.Window.Selectable.prototype.setupItems = function(items) {
    this._list = [];

    (items || this.standardItems()).forEach((item) => {
        this.addItem(item);
    });
};

/**
 * Sets the text color of the item
 * @param {Function | String} [itemTextColor] - Text color of the item
 */
DKTools.Window.Selectable.prototype.setupItemTextColor = function(itemTextColor) {
    /**
     * @private
     * @readonly
     * @type {Function | String}
     */
    this._itemTextColor = itemTextColor;
};

/**
 * Sets the paint opacity of the item
 * @param {Function | Number} [itemPaintOpacity] - Paint opacity of the item
 */
DKTools.Window.Selectable.prototype.setupItemPaintOpacity = function(itemPaintOpacity) {
    /**
     * @private
     * @readonly
     * @type {Function | Number}
     */
    this._itemPaintOpacity = itemPaintOpacity;
};

/**
 * Sets the align of the item
 * @param {Function | String} itemAlign - Align of the item
 */
DKTools.Window.Selectable.prototype.setupItemAlign = function(itemAlign) {
    this._itemAlign = itemAlign;
};

/**
 * Sets the handler of draw of the item
 * @param {Function} [handler] - Handler of draw of the item
 */
DKTools.Window.Selectable.prototype.setupItemDrawHandler = function(handler) {
    this._itemDrawHandler = handler || this.standardItemDrawHandler();
};

/**
 * Sets the width of the item
 * @param {Function | Number} [itemWidth] - Width of the item
 */
DKTools.Window.Selectable.prototype.setupItemWidth = function(itemWidth) {
    this._itemWidth = itemWidth;
};

/**
 * Sets the height of the item
 * @param {Function | Number} [itemHeight] - Height of the item
 */
DKTools.Window.Selectable.prototype.setupItemHeight = function(itemHeight) {
    this._itemHeight = itemHeight;
};

/**
 * Sets the size of the window
 * @override
 * @param {Number | Object} [width] - Width of the window
 * @param {Number | String} [height] - Height of the window or number of lines (String)
 */
DKTools.Window.Selectable.prototype.setupSize = function(width, height) {
    if (typeof height === 'string') { // number of lines
        height = this.itemHeight() * parseFloat(height) + this._padding * 2;
    }

    Window.prototype.move.call(this, this.x, this.y, width, height);
};

// set methods

/**
 * Sets the items
 * Returns true if the change occurred
 * @param {Object[]} items - Items
 * @param {Boolean} [blockStart=false] - Blocking call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Window.Selectable.prototype.setItems = function(items, blockStart = false) {
    if (this._list == items) {
        return false;
    }

    this.setupItems(items);

    if (!blockStart) {
        this.start();
    }

    return true;
};

/**
 * Sets the max cols
 * Returns true if the change occurred
 * @param {Number} maxCols - Max cols
 * @param {Boolean} [blockStart=false] - Blocking call of the "start" function
 * @return {Boolean} Change occurred
 */
DKTools.Window.Selectable.prototype.setMaxCols = function(maxCols, blockStart = false) {
    if (this._maxCols === maxCols) {
        return false;
    }

    const lastMaxCols = this._maxCols;

    this.setupMaxCols(maxCols);

    if (this._maxCols === lastMaxCols) {
        return false;
    }

    if (!blockStart) {
        this.start();
    }

    return true;
};

// other S methods

/**
 * Selects the item
 * @override
 * @param {Number} index - Index
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.select = function(index, playCursor = false) {
    const item = this.item(index);

    Window_Selectable.prototype.select.call(this, index);

    if (playCursor) {
        this.playCursorSound();
    }

    if (item && typeof item.selectHandler === 'function') {
        item.selectHandler(index, this);
    }

    this.updateSelectEvents();
};

/**
 * Select symbol
 * @param {String} symbol - Symbol
 */
DKTools.Window.Selectable.prototype.selectSymbol = function(symbol) {
    const index = this.findSymbol(symbol);

    if (index >= 0) {
        this.forceSelect(index);
    } else {
        this.forceSelect(0);
    }
};

/**
 * Selects ext
 * @param {*} ext - Ext
 */
DKTools.Window.Selectable.prototype.selectExt = function(ext) {
    const index = this.findExt(ext);

    if (index >= 0) {
        this.forceSelect(index);
    } else {
        this.forceSelect(0);
    }
};

/**
 * Selects the first item
 * @param {Boolean} [smooth=false] - Smooth select
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.selectFirstItem = function(smooth = false, playCursor = false) {
    if (smooth) {
        this.smoothSelect(0);
    } else {
        this.forceSelect(0);
    }

    if (playCursor) {
        this.playCursorSound();
    }
};

/**
 * Selects the last item
 * @param {Boolean} [smooth=false] - Smooth select
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.selectLasItem = function(smooth = false, playCursor = false) {
    const index = this.maxItems() - 1;

    if (index === -1) {
        return;
    }

    if (smooth) {
        this.smoothSelect(index);
    } else {
        this.forceSelect(index);
    }

    if (playCursor) {
        this.playCursorSound();
    }
};

/**
 * Selects the previous item
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @param {Boolean} [smooth=false] - Smooth select
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.selectPrevItem = function(wrap = false, smooth = false, playCursor = false) {
    const index = this.prevIndex(wrap);

    if (index >= 0) {
        if (smooth) {
            this.smoothSelect(index);
        } else {
            this.forceSelect(index);
        }

        if (playCursor) {
            this.playCursorSound();
        }
    }
};

/**
 * Selects the next item
 * @param {Boolean} [wrap=false] - Wrap cursor
 * @param {Boolean} [smooth=false] - Smooth select
 * @param {Boolean} [playCursor=false] - Play "cursor" sound
 */
DKTools.Window.Selectable.prototype.selectNextItem = function(wrap = false, smooth = false, playCursor = false) {
    const index = this.nextIndex(wrap);

    if (index >= 0) {
        if (smooth) {
            this.smoothSelect(index);
        } else {
            this.forceSelect(index);
        }

        if (playCursor) {
            this.playCursorSound();
        }
    }
};

/**
 * Smooth scrolls to left
 * @param {Number} cols - Cols to scroll
 */
DKTools.Window.Selectable.prototype.smoothScrollLeft = function(cols) {
    this.smoothScrollBy(this.itemWidth() * cols, 0);
};

/**
 * Smooth scrolls to right
 * @param {Number} cols - Cols to scroll
 */
DKTools.Window.Selectable.prototype.smoothScrollRight = function(cols) {
    this.smoothScrollBy(-this.itemWidth() * cols, 0);
};

// T methods

/**
 * Returns the top column
 * @return {Number} Top column
 */
DKTools.Window.Selectable.prototype.topCol = function() {
    return Math.floor(this.scrollX() / this.itemWidth());
};

/**
 * Returns the top index
 * @override
 * @return {Number} Top index
 */
DKTools.Window.Selectable.prototype.topIndex = function() {
   return this.isHorizontal() ?
       this.topCol() : Window_Selectable.prototype.topIndex.apply(this, arguments);
};

// U methods

/**
 * @override
 * @private
 */
DKTools.Window.Selectable.prototype._updateArrows = function() {
    const isOpen = this.isOpen();

    this._leftArrowSprite.visible = isOpen && this.leftArrowVisible;
    this._rightArrowSprite.visible = isOpen && this.rightArrowVisible;
    this._downArrowSprite.visible = isOpen && this.downArrowVisible;
    this._upArrowSprite.visible = isOpen && this.upArrowVisible;
};

/**
 * Updates the arrows
 * @override
 */
DKTools.Window.Selectable.prototype.updateArrows = function() {
    if (this.isHorizontal()) {
        this.leftArrowVisible = this._scrollX > 0;
        this.rightArrowVisible = this._scrollX < this.maxScrollX();
        this.downArrowVisible = false;
        this.upArrowVisible = false;
    } else {
        this.leftArrowVisible = false;
        this.rightArrowVisible = false;
        this.downArrowVisible = this._scrollY < this.maxScrollY();
        this.upArrowVisible = this._scrollY > 0;
    }
};

/**
 * Updates the window
 * @override
 */
DKTools.Window.Selectable.prototype.update = function() {
    Window_Selectable.prototype.update.apply(this, arguments);
    DKTools.Base.prototype.update.apply(this, arguments);
};

// events methods

/**
 * Updates the events with type: select
 */
DKTools.Window.Selectable.prototype.updateSelectEvents = function() {
    this._eventsManager.updateEventsContainer('select');
};



//===========================================================================
// DKTools.Scene
//===========================================================================

/**
 * @class
 * @extends Scene_Base
 */
DKTools.Scene = function() {
    this.initialize.apply(this, arguments);
};

DKTools.Scene.prototype = Object.create(Scene_Base.prototype);
DKTools.Scene.prototype.constructor = DKTools.Scene;

// initialize

/**
 * Initializes a class object
 * @override
 */
DKTools.Scene.prototype.initialize = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.EventsManager}
     */
    this._eventsManager = new DKTools.EventsManager(this);

    Scene_Base.prototype.initialize.apply(this, arguments);
};

// A methods

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
 * @return {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addEvent = function(object) {
    return this._eventsManager.addEvent(object);
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
 * @return {DKTools.Event} Added event
 */
DKTools.Scene.prototype.addOneTimeEvent = function(object) {
    return this._eventsManager.addOneTimeEvent(object);
};

/**
 * Adds the animation
 * @param {DKTools.Animation} animation - Animation to add
 */
DKTools.Scene.prototype.addAnimation = function(animation) {
    this._eventsManager.addAnimation(animation);
};

// C methods

/**
 * Creates all
 * @override
 */
DKTools.Scene.prototype.create = function() {
    Scene_Base.prototype.create.apply(this, arguments);
    this.createBackground();
    this.createAllSprites();
    this.createWindowLayer();
    this.createAllWindows();

    if (ConfigManager.touchUI) {
        this.createUI();
    }

    this.createForeground();
};

/**
 * Creates the background
 */
DKTools.Scene.prototype.createBackground = function() {
    // to be overridden by plugins
};

/**
 * Creates all sprites
 */
DKTools.Scene.prototype.createAllSprites = function() {
    // to be overridden by plugins
};

/**
 * Creates all windows
 */
DKTools.Scene.prototype.createAllWindows = function() {
    // to be overridden by plugins
};

/**
 * Creates the mobile UI
 */
DKTools.Scene.prototype.createUI = function() {
    if (this.needsCancelButton()) {
        this.createCancelButton();
    }

    if (this.needsPageButtons()) {
        this.createPageButtons();
    }
};

/**
 * Creates the foreground
 */
DKTools.Scene.prototype.createForeground = function() {
    // to be overridden by plugins
};

/**
 * Creates the cancel button
 */
DKTools.Scene.prototype.createCancelButton = function() {
    this._cancelButton = new Sprite_Button('cancel');
    this._cancelButton.move(
        Graphics.boxWidth - this._cancelButton.width - 4, this.buttonY());

    this.addWindow(this._cancelButton);
};

/**
 * Creates the page buttons
 */
DKTools.Scene.prototype.createPageButtons = function() {
    const buttonY = this.buttonY();

    this._pageupButton = new Sprite_Button('pageup');
    this._pageupButton.move(4, buttonY);

    this._pagedownButton = new Sprite_Button('pagedown');
    this._pagedownButton.move(
        this._pageupButton.x + this._pageupButton.width + 4, buttonY);

    this.addWindow(this._pageupButton);
    this.addWindow(this._pagedownButton);

    this._pageupButton.setClickHandler(this.onPageUpButton.bind(this));
    this._pagedownButton.setClickHandler(this.onPageDownButton.bind(this));
};

// H methods

/**
 * Returns true if the scene has the layer of windows
 * @return {Boolean} Scene has the layer of windows
 */
DKTools.Scene.prototype.hasWindowLayer = function() {
    return !!this._windowLayer;
};

// I methods

/**
 * Returns true if the object (parameter) is child of scene
 * @param {Sprite | Window} object - Object
 * @return {Boolean} Object (parameter) is child of scene
 */
DKTools.Scene.prototype.isChild = function(object) {
    if (object instanceof Window && this.hasWindowLayer()) {
        return this._windowLayer.children.includes(object);
    }

    return this.children.includes(object);
};

// N methods

/**
 * Returns true if needs create the cancel button
 * @return {Boolean} Needs create the cancel button
 */
DKTools.Scene.prototype.needsCancelButton = function() {
    return false;
};

/**
 * Returns true if needs create the page buttons
 * @return {Boolean} Needs create the page buttons
 */
DKTools.Scene.prototype.needsPageButtons = function() {
    return false;
};

// O methods

DKTools.Scene.prototype.onPageUpButton = function() {
    // to be overridden by plugins
};

DKTools.Scene.prototype.onPageDownButton = function() {
    // to be overridden by plugins
};

// R methods

/**
 * Removes the window from the scene
 * Returns true if the window is removed
 * @param {DKTools.Window | *} window - Window to remove
 * @return {Boolean} Window is removed
 */
DKTools.Scene.prototype.removeWindow = function(window) {
    if (this.hasWindowLayer() && this.isChild(window)) {
        this._windowLayer.removeChild(window);

        return true;
    }

    return false;
};

// U methods

/**
 * Updates the scene
 * @override
 */
DKTools.Scene.prototype.update = function() {
    Scene_Base.prototype.update.apply(this, arguments);
    this.updateEvents();
};

/**
 * Updates the events
 */
DKTools.Scene.prototype.updateEvents = function() {
    this._eventsManager.update();
    this.updateReadyEvents();
    this.updateUpdateEvents();
    this.updateQueueEvents();
};

/**
 * Updates the events with type: ready
 */
DKTools.Scene.prototype.updateReadyEvents = function() {
    if (this.isReady()) {
        this._eventsManager.updateEventsContainer('ready');
    }
};

/**
 * Updates the events with type: update
 */
DKTools.Scene.prototype.updateUpdateEvents = function() {
    this._eventsManager.updateEventsContainer('update');
};

/**
 * Updates the events with type: queue
 */
DKTools.Scene.prototype.updateQueueEvents = function() {
    const container = this._eventsManager.getEventsContainerByType('queue');
    const event = container[0];

    if (event) {
        event.update();
    }
};



//===========================================================================
// DKTools.ScenePreloader
//===========================================================================

/**
 * Scene preloader class
 * @class
 * @memberof DKTools.Scene
 */
DKTools.Scene.Preloader = class {

    constructor() {
        this.initialize.apply(this, arguments);
    }

    // initialize methods

    /**
     * Initializes the preloader
     */
    initialize() {

        /**
         * @private
         * @readonly
         * @type {Promise[]}
         */
        this._queue = [];

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._finished = false;

        /**
         * @private
         * @readonly
         * @type {Boolean}
         */
        this._running = false;

        /**
         * @private
         * @readonly
         * @type {Number}
         */
        this._errors = 0;
    }

    // A methods

    /**
     * Adds the resource to preloading
     * @param {Promise | Bitmap | WebAudio} resource - Resource
     */
    add(resource) {
        if (resource instanceof Bitmap) {
            resource = DKTools.Utils.Bitmap.loadAsync(resource);
        } else if (resource instanceof WebAudio) {
            resource = DKTools.Utils.WebAudio.loadAsync(resource);
        }

        if (resource instanceof Promise) {
            this._queue.push(resource);
        }
    }

    // F methods

    /**
     * Finishes the preloading
     */
    finish() {
        this._queue = [];
        this._finished = true;
        this._running = false;
    }

    // H methods

    /**
     * Returns true if the preloader has errors
     * @return {Boolean} Preloader has errors
     */
    hasErrors() {
        return this._errors > 0;
    }

    // I methods

    /**
     * Returns true if the preloader is running
     * @return {Boolean} Preloader is running
     */
    isRunning() {
        return this._running;
    }

    /**
     * Returns true if the preloader is ready
     * @return {Boolean} Preloader is ready
     */
    isReady() {
        return this._finished;
    }

    // O methods

    /**
     * Processes the loading error
     * @private
     */
    _onError() {
        this._errors++;
    }

    // S methods

    /**
     * Starts the preloading
     */
    start() {
        if (this._queue.length === 0) {
            this.finish();

            return;
        }

        const promises = this._queue.map((promise) => {
            return promise.catch((result) => {
                this._onError();

                throw result;
            });
        });

        Promise.all(promises).then(() => this.finish());

        this._running = true;
        this._finished = false;
    }

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
// initialize plugin commands
//===========================================================================

PluginManager.registerCommand('DKTools', 'UpdateFileSystemStamp', () => {
    DKTools.IO._createStamp().then(() => {
        window.alert('System stamp updated!');
    });
});



//===========================================================================
// window
//===========================================================================

const DKTools_main_onEffekseerLoad = main.onEffekseerLoad;
main.onEffekseerLoad = function() {
    DKTools.Utils.initialize();
    DKTools.IO.initialize();
    DKTools_main_onEffekseerLoad.apply(this, arguments);
    DKTools.PreloadManager.initialize();
    DKTools.PluginManager.initialize();
};



//===========================================================================
// Utils
//===========================================================================
const DKTools_Utils_isNwjs = Utils.isNwjs;
Utils.isNwjs = function() {
    if (this.__isNwjs__ === undefined) {
        this.__isNwjs__ = DKTools_Utils_isNwjs.apply(this, arguments);
    }

    return this.__isNwjs__;
};

const DKTools_Utils_isMobileDevice = Utils.isMobileDevice;
Utils.isMobileDevice = function() {
    if (this.__isMobileDevice__ === undefined) {
        this.__isMobileDevice__ = DKTools_Utils_isMobileDevice.apply(this, arguments);
    }

    return this.__isMobileDevice__;
};

const DKTools_Utils_isMobileSafari = Utils.isMobileSafari;
Utils.isMobileSafari = function() {
    if (this.__isMobileSafari__ === undefined) {
        this.__isMobileSafari__ = DKTools_Utils_isMobileSafari.apply(this, arguments);
    }

    return this.__isMobileSafari__;
};

const DKTools_Utils_isAndroidChrome = Utils.isAndroidChrome;
Utils.isAndroidChrome = function() {
    if (this.__isAndroidChrome__ === undefined) {
        this.__isAndroidChrome__ = DKTools_Utils_isAndroidChrome.apply(this, arguments);
    }

    return this.__isAndroidChrome__;
};

Utils.isTest = function() {
    if (this.__isTest__ === undefined) {
        this.__isTest__ = this.isOptionValid('test');
    }

    return this.__isTest__;
};



//===========================================================================
// Graphics
//===========================================================================

const DKTools_Graphics_initialize = Graphics.initialize;
Graphics.initialize = function(width, height, type) {
    DKTools_Graphics_initialize.apply(this, arguments);

    const param = DKToolsParam.get('FPS Meter') || {};

    if (Utils.isTest() && param['Enabled']) {
        const fpsMeter = this._fpsCounter;

        if (fpsMeter) {
            fpsMeter._showFps = false;

            if (param['Mode'] === 'FPS') {
                fpsMeter.switchMode();
            } else {
                fpsMeter.switchMode();
                fpsMeter.switchMode();
            }
        }
    }

    return !!this._app;
};

const DKTools_Graphics_printError = Graphics.printError;
Graphics.printError = function(name, message, error = null) {
    DKTools_Graphics_printError.apply(this, arguments);

    if (this._errorPrinter) {
        this._updateErrorPrinter();
    }
};

Graphics.printDetailedError = function(error) {
    if (!this._errorPrinter) {
        return;
    }

    const stack = error.stack.split(/(?:\r\n|\r|\n)/).map((value) => {
        return value.replace(/[\(](.*[\/])/, '(');
    });

    this._errorPrinter.innerHTML = this._makeDetailedErrorHtml(error.name, error.message, stack);

    this._applyCanvasFilter();
};

Graphics._makeDetailedErrorHtml = function(name, message, stack) {
    const params = DKToolsParam.get('Print Detailed Error');
    const referenceInfo = DKTools.Utils._getErrorLogData();
    let errorMessage = params['Error Message'];
    let restartMessage = params['Restart Message'];
    let text = '';

    if (Imported['DKTools_Localization']) {
        if (errorMessage) {
            errorMessage = DKTools.Localization.getText(errorMessage);
        }

        if (restartMessage) {
            restartMessage = DKTools.Localization.getText(restartMessage);
        }
    }

    if (errorMessage) {
        text = '<font color="yellow"><b>' + errorMessage + '<br>' + '</b></font><br>';
    }

    if (Object.keys(referenceInfo).length > 0) {
        text += '<font color="yellow"><b>' + 'Reference Information' + '</b></font><br>';

        _.forEach(referenceInfo, (value, key) => {
            text += '<font color="white">' + key + ': ' + value + '</font><br>';
        });

        text += '<br>';
    }

    text += '<font color="red"><b>' + message + '</b></font><br>';

    _.forEach(stack, (value) => {
        text += '<font color="white">' + value + '</font><br>';
    });

    if (restartMessage) {
        text += '<br><font color="yellow"><b>' + restartMessage + '</b></font><br><br>';
    }

    return text;
};

const DKTools_Graphics_updateErrorPrinter = Graphics._updateErrorPrinter;
Graphics._updateErrorPrinter = function() {
    DKTools_Graphics_updateErrorPrinter.call(this);

    if (!this._errorPrinter || !DKToolsParam.get('Print Detailed Error', 'Enabled')) {
        return;
    }

    this._errorPrinter.style.textAlign = 'left';
    this._errorPrinter.style.height = (this._app.view.height * 0.8) + 'px';
};



//===========================================================================
// Input
//===========================================================================

if (Input.keyMapper['35'] === undefined) {
    Input.keyMapper['35'] = 'end';
}

if (Input.keyMapper['36'] === undefined) {
    Input.keyMapper['36'] = 'home';
}



//===========================================================================
// TouchInput
//===========================================================================

const DKTools_TouchInput_initialize = TouchInput.initialize;
TouchInput.initialize = function() {
    DKTools_TouchInput_initialize.apply(this, arguments);

    const param = DKToolsParam.get('Cursor Graphic') || {};

    if (param['Enabled']) {
        const graphicName = param['Graphic'];

        if (graphicName) {
            document.body.style.cursor = `url('img/system/${graphicName}.png'), default`;
        }
    }
};

const DKTools_TouchInput_clear = TouchInput.clear;
TouchInput.clear = function() {
    DKTools_TouchInput_clear.apply(this, arguments);

    this._leftButtonPressed = false;
    this._middleButtonPressed = false;
    this._rightButtonPressed = false;
};

// is methods

/**
 * Returns true if the mouse is pressed (left, middle or right button)
 * @static
 * @returns {Boolean} Mouse is pressed (left, middle or right button)
 */
TouchInput.isMousePressed = function() {
    return this.isLeftButtonPressed() || this.isMiddleButtonPressed() || this.isRightButtonPressed();
};

/**
 * Returns true if the mouse is released (left, middle or right button is released)
 * @static
 * @returns {Boolean} Mouse is released (left, middle or right button is released)
 */
TouchInput.isMouseReleased = function() {
    return this.isLeftButtonReleased() || this.isMiddleButtonReleased() || this.isRightButtonReleased();
};

/**
 * Returns true if the left mouse button is pressed
 * @static
 * @returns {Boolean} Left mouse button is pressed
 */
TouchInput.isLeftButtonPressed = function() {
    return this._leftButtonPressed || false;
};

/**
 * Returns true if the left mouse button is released
 * @static
 * @returns {Boolean} Left mouse button is released
 */
TouchInput.isLeftButtonReleased = function() {
    return this._currentState.leftButtonReleased || false;
};

/**
 * Returns true if the middle mouse button is pressed
 * @static
 * @returns {Boolean} Middle mouse button is pressed
 */
TouchInput.isMiddleButtonPressed = function() {
    return this._middleButtonPressed || false;
};

/**
 * Returns true if the middle mouse button is released
 * @static
 * @returns {Boolean} Middle mouse button is released
 */
TouchInput.isMiddleButtonReleased = function() {
    return this._currentState.middleButtonReleased || false;
};

/**
 * Returns true if the right mouse button is pressed
 * @static
 * @returns {Boolean} Right mouse button is pressed
 */
TouchInput.isRightButtonPressed = function() {
    return this._rightButtonPressed || false;
};

/**
 * Returns true if the right mouse button is released
 * @static
 * @returns {Boolean} Right mouse button is released
 */
TouchInput.isRightButtonReleased = function() {
    return this._currentState.rightButtonReleased || false;
};

/**
 * Returns true if the screen is pressed (for mobile devices)
 * @static
 * @returns {Boolean} Screen is pressed (for mobile devices)
 */
TouchInput.isScreenPressed = function() {
    return this._screenPressed;
};

// event methods

const DKTools_TouchInput_onLeftButtonDown = TouchInput._onLeftButtonDown;
TouchInput._onLeftButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onLeftButtonDown.apply(this, arguments);

    if (Graphics.isInsideCanvas(x, y)) {
        this._leftButtonPressed = true;
    }
};

const DKTools_TouchInput_onMiddleButtonDown = TouchInput._onMiddleButtonDown;
TouchInput._onMiddleButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMiddleButtonDown.apply(this, arguments);

    if (Graphics.isInsideCanvas(x, y)) {
        this._middleButtonPressed = true;
    }
};

const DKTools_TouchInput_onRightButtonDown = TouchInput._onRightButtonDown;
TouchInput._onRightButtonDown = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onRightButtonDown.apply(this, arguments);

    if (Graphics.isInsideCanvas(x, y)) {
        this._rightButtonPressed = true;
    }
};

const DKTools_TouchInput_onMouseUp = TouchInput._onMouseUp;
TouchInput._onMouseUp = function(event) {
    const x = Graphics.pageToCanvasX(event.pageX);
    const y = Graphics.pageToCanvasY(event.pageY);

    DKTools_TouchInput_onMouseUp.apply(this, arguments);

    this._leftButtonPressed = false;
    this._middleButtonPressed = false;
    this._rightButtonPressed = false;

    if (Graphics.isInsideCanvas(x, y)) {
        if (event.button === 0) { // left button
            this._newState.leftButtonReleased = true;
        } else if (event.button === 1) { // middle button
            this._newState.middleButtonReleased = true;
        } else if (event.button === 2) { // right button
            this._newState.rightButtonReleased = true;
        }
    }
};



//===========================================================================
// Tilemap
//===========================================================================

const DKTools_Tilemap_initialize = Tilemap.prototype.initialize;
Tilemap.prototype.initialize = function() {
    DKTools_Tilemap_initialize.call(this);

    this._tileWidth = Tilemap.TILE_WIDTH || this._tileWidth;
    this._tileHeight = Tilemap.TILE_HEIGHT || this._tileHeight;
};



//===========================================================================
// Sprite
//===========================================================================

Object.defineProperties(Sprite.prototype, {

    frame: {
        get: function() {
            return this._frame;
        },
        configurable: true
    }

});



//===========================================================================
// Window
//===========================================================================

Object.defineProperties(Window.prototype, {

    frameOpacity: {
        get: function() {
            return this._frameSprite.alpha * 255;
        },
        set: function(value) {
            this._frameSprite.alpha = value.clamp(0, 255) / 255;
        },
        configurable: true
    },

    contentsSprite: {
        get: function() {
            return this._contentsSprite;
        },
        configurable: true
    }

});



//===========================================================================
// WebAudio
//===========================================================================

const DKTools_WebAudio_addLoadListener = WebAudio.prototype.addLoadListener;
WebAudio.prototype.addLoadListener = function(listener) {
    if (this.isReady()) {
        listener(this);
    } else {
        DKTools_WebAudio_addLoadListener.apply(this, arguments);
    }
};

WebAudio.prototype._onLoad = function() {
    while (this._loadListeners.length > 0) {
        const listener = this._loadListeners.shift();

        listener(this);
    }
};



//===========================================================================
// Video
//===========================================================================

Video.videoFileExt = function() {
    if (Utils.canPlayWebm()) {
        return '.webm';
    }

    return '.mp4';
};



//===========================================================================
// DataManager
//===========================================================================

const DKTools_DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!DKTools_DataManager_isDatabaseLoaded.apply(this, arguments)) {
        return false;
    }

    if (!this.__isDatabaseLoaded) {
        this.__isDatabaseLoaded = true;

        this.onDatabaseLoad();
    }

    return true;
};

DataManager.onDatabaseLoad = function() {
    // to be overridden by plugins
};



//===========================================================================
// ImageManager
//===========================================================================

Object.defineProperties(ImageManager, {

    /**
     * Parallaxes folder
     *
     * @readonly
     * @type {String}
     * @memberof ImageManager
     */
    PARALLAXES_FOLDER: {
        get: function() {
            if (this.__parallaxesFolder__ === undefined) {
                const param = DKToolsParam.get('Tile Size') || {};
                const defaultFolder = 'img/parallaxes/';

                if (param['Enabled']) {
                    const folder = param['Parallaxes Folder'];

                    this.__parallaxesFolder__ = (folder ?
                        DKTools.IO.normalizePath(folder + '/') : defaultFolder);
                } else {
                    this.__parallaxesFolder__ = defaultFolder;
                }
            }

            return this.__parallaxesFolder__;
        },
        configurable: true
    },

    /**
     * Tilesets folder
     *
     * @readonly
     * @type {String}
     * @memberof ImageManager
     */
    TILESETS_FOLDER: {
        get: function() {
            if (this.__tilesetsFolder__ === undefined) {
                const param = DKToolsParam.get('Tile Size') || {};
                const defaultFolder = 'img/tilesets/';

                if (param['Enabled']) {
                    const folder = param['Tilesets Folder'];

                    this.__tilesetsFolder__ = (folder ?
                        DKTools.IO.normalizePath(folder + '/') : defaultFolder);
                } else {
                    this.__tilesetsFolder__ = defaultFolder;
                }
            }

            return this.__tilesetsFolder__;
        },
        configurable: true
    }

});

ImageManager.imageFileExt = function() {
    return '.png';
};

ImageManager.loadParallax = function(filename) {
    return this.loadBitmap(ImageManager.PARALLAXES_FOLDER, filename);
};

ImageManager.loadTileset = function(filename) {
    return this.loadBitmap(ImageManager.TILESETS_FOLDER, filename);
};



//===========================================================================
// ColorManager
//===========================================================================

ColorManager.randomColor = function() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
};



//===========================================================================
// SceneManager
//===========================================================================

const DKTools_SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = async function() {
    await DKTools_SceneManager_initialize.apply(this, arguments);
    await DKTools.StartupManager.initialize();
};

const DKTools_SceneManager_onKeyDown = SceneManager.onKeyDown;
SceneManager.onKeyDown = function(event) {
    DKTools_SceneManager_onKeyDown.call(this, event);

    if (event.ctrlKey || event.altKey) {
        return;
    }

    const quickLoadKeyCode = DKToolsParam.get('Quick Load', 'Key Code');
    const screenshotKeyCode = DKToolsParam.get('Screenshots', 'Key Code');
    const gridKeyCode = DKToolsParam.get('Grid', 'Key Code');
    const keyCode = event.keyCode;

    switch (keyCode) {
        case quickLoadKeyCode: {
            DKTools.Utils.__quickLoad();

            break;
        }

        case screenshotKeyCode: {
            if (DKToolsParam.get('Screenshots', 'Enabled')) {
                DKTools.Utils.makeScreenshot();
            }

            break;
        }

        case gridKeyCode: {
            DKTools.Utils.__showGrid();

            break;
        }
    }
};

SceneManager.showDevTools = function() {
    if (!Utils.isTest() || !Utils.isNwjs()) {
        return;
    }

    try {
        const window = require('nw.gui').Window.get();

        window.showDevTools(null, () => window.focus());
    } catch (e) {
        DKTools.Utils.logError(e);

        console.error('Can not open the dev tools!');
    }
};

const DKTools_SceneManager_catchException = SceneManager.catchException;
SceneManager.catchException = function(error) {
    DKTools_SceneManager_catchException.apply(this, arguments);

    if (error instanceof Error && DKToolsParam.get('Print Detailed Error', 'Enabled')) {
        Graphics.printDetailedError(error);
    }

    DKTools.Utils.logError(error);

    if (DKToolsParam.get('Debugging Console', 'Open On Error')) {
        this.showDevTools();
    }
};

const DKTools_SceneManager_onError = SceneManager.onError;
SceneManager.onError = function(error) {
    DKTools_SceneManager_onError.apply(this, arguments);

    DKTools.Utils.logError(error);

    if (DKToolsParam.get('Debugging Console', 'Open On Error')) {
        this.showDevTools();
    }
};

SceneManager.changeScene = function() {
    if (this.isSceneChanging() && !this.isCurrentSceneBusy()) {
        if (this._scene) {
            this._scene.terminate();

            this.onSceneTerminate();
        }

        this._scene = this._nextScene;

        if (this._scene) {
            this._scene.startPreloading();

            this._sceneCreated = false;
            this._nextScene = null;

            if (this._scene.isPreloaded()) {
                this._scene.create();

                this._sceneCreated = true;

                this.onSceneCreate();
            }
        }

        if (this._exiting) {
            this.terminate();
        }
    }
};

SceneManager.updateScene = function() {
    if (this._scene) {
        if (!this._sceneCreated && this._scene.isPreloaded()) {
            this._scene.create();

            this._sceneCreated = true;

            this.onSceneCreate();
        }

        if (this._sceneCreated && !this._scene.isStarted()) {
            try {
                if (this._scene.isReady()) {
                    this.onBeforeSceneStart();

                    this._scene.start();

                    this.onSceneStart();
                }
            } catch (e) {
                console.error(e);

                DKTools.Utils.logError(e);

                this.onBeforeSceneStart();

                this._scene.start();

                this.onSceneStart();
            }
        }

        if (this._scene.isStarted() && this.isGameActive()) {
            this._scene.update();
        }
    }
};

SceneManager.isCurrentScene = function(sceneClass) {
    return !!this._scene && this._scene.constructor === sceneClass;
};

const DKTools_SceneManager_goto = SceneManager.goto;
SceneManager.goto = function(sceneClass) {
    DKTools_SceneManager_goto.call(this, sceneClass);
    DKTools.Utils.__hideGrid();
};



//===========================================================================
// Scene_Base
//===========================================================================

const DKTools_Scene_Base_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
    /**
     * @private
     * @readonly
     * @type {DKTools.Scene.Preloader}
     */
    this._preloader = new DKTools.Scene.Preloader();

    DKTools_Scene_Base_initialize.apply(this, arguments);
};

const DKTools_Scene_Base_create = Scene_Base.prototype.create;
Scene_Base.prototype.create = function() {
    if (this !== SceneManager._scene) {
        this.startPreloading();
    }

    DKTools_Scene_Base_create.apply(this, arguments);
};

Scene_Base.prototype.activate = function() {
    this._active = true;
};

Scene_Base.prototype.deactivate = function() {
    this._active = false;
};

/**
 * Returns true if the scene is preloaded
 * @returns {Boolean} Scene is preloaded
 */
Scene_Base.prototype.isPreloaded = function() {
    return this._preloader.isReady();
};

const DKTools_Scene_Base_isReady = Scene_Base.prototype.isReady;
Scene_Base.prototype.isReady = function() {
    return DKTools_Scene_Base_isReady.apply(this, arguments) && this.isPreloaded();
};

/**
 * Setups for the preloading
 *
 * @example
 * var bitmap = ImageManager.loadSystem('Window')
 *
 * this._preloader.add(bitmap);
 */
Scene_Base.prototype.setupPreloading = function() {
    // to be overridden by plugins
};

/**
 * Starts the preloading
 */
Scene_Base.prototype.startPreloading = function() {
    this.setupPreloading();

    this._preloader.start();
};

const DKTools_Scene_Base_terminate = Scene_Base.prototype.terminate;
Scene_Base.prototype.terminate = function() {
    this._preloader.finish();

    DKTools_Scene_Base_terminate.apply(this, arguments);
};



//===========================================================================
// Scene_Boot
//===========================================================================

const DKTools_Scene_Boot_isReady = Scene_Boot.prototype.isReady;
Scene_Boot.prototype.isReady = function() {
    return DKTools_Scene_Boot_isReady.apply(this, arguments)
        && DKTools.StartupManager.isReady()
        && DKTools.PreloadManager.isReady();
};

const DKTools_Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    const quickStart = DKToolsParam.get('Quick Start') || {};

    if (quickStart['Enabled']) {
        DKTools_Scene_Boot_start.apply(this, arguments);

        if (!DataManager.isBattleTest() && !DataManager.isEventTest() &&
            (quickStart['Skip Saves'] || !DataManager.isAnySavefileExists())) {
            Scene_Base.prototype.start.apply(this, arguments);
            SoundManager.preloadImportantSounds();

            this.checkPlayerLocation();

            DataManager.setupNewGame();

            this.resizeScreen();
            this.updateDocumentTitle();

            SceneManager.goto(window[quickStart['Scene Name']]);
        }
    } else {
        DKTools_Scene_Boot_start.apply(this, arguments);
    }
};



//===========================================================================
// Scene_Map
//===========================================================================

Scene_Map.prototype.setupPreloading = function() {
    Scene_Base.prototype.setupPreloading.apply(this, arguments);
    this._setupMapPreloading();
};

Scene_Map.prototype._setupMapPreloading = function() {
    const params = DKToolsParam.get('Maps Preloading') || {};

    if (!params['Enabled']) {
        return;
    }

    const mapId = ($gamePlayer.isTransferring() ? $gamePlayer.newMapId() : $gameMap.mapId());
    const preset = _.find(params['Maps'], { 'Map Id': mapId });

    if (!preset) {
        return;
    }

    DKTools.PreloadManager.setDebugging(params['Debugging']);

    preset['Audio Files'].forEach((path) => {
        DKTools.PreloadManager.preloadAudio({ path: 'audio/' + path });
    });

    preset['Image Files'].forEach((path) => {
        DKTools.PreloadManager.preloadImage({ path: 'img/' + path });
    });

    if (DKTools.PreloadManager.getTotal() === 0) {
        return;
    }

    this._preloader.add(DKTools.PreloadManager.start());
};

const DKTools_Scene_Map_isReady = Scene_Map.prototype.isReady;
Scene_Map.prototype.isReady = function() {
    if (!this.isPreloaded()) {
        return false;
    }

    return DKTools_Scene_Map_isReady.apply(this, arguments);
};



//===========================================================================
// Game_Map
//===========================================================================

const DKTools_Game_Map_tileWidth = Game_Map.prototype.tileWidth;
Game_Map.prototype.tileWidth = function() {
    return Tilemap.TILE_WIDTH || DKTools_Game_Map_tileWidth.apply(this, arguments);
};

const DKTools_Game_Map_tileHeight = Game_Map.prototype.tileHeight;
Game_Map.prototype.tileHeight = function() {
    return Tilemap.TILE_HEIGHT || DKTools_Game_Map_tileHeight.apply(this, arguments);
};



//===========================================================================
// Window_Selectable
//===========================================================================

const DKTools_Window_Selectable_processCursorMove =
    Window_Selectable.prototype.processCursorMove;
Window_Selectable.prototype.processCursorMove = function() {
    if (this.isCursorMovable()) {
        const lastIndex = this._index;

        if (Input.isTriggered('home')) {
            this.forceSelect(0);
        }

        if (Input.isTriggered('end')) {
            this.forceSelect(Math.max(0, this.maxItems() - 1));
        }

        if (this._index !== lastIndex) {
            SoundManager.playCursor();
        }
    }

    DKTools_Window_Selectable_processCursorMove.apply(this, arguments);
};



//===========================================================================
// applying plugin parameters
//===========================================================================

if (DKToolsParam.get('Line Height', 'Enabled')) {

    Window_Base.prototype.lineHeight = function() {
        return DKToolsParam.get('Line Height', 'Height');
    };

}

if (DKToolsParam.get('Window Padding', 'Enabled')) {

    Game_System.prototype.windowPadding = function() {
        return DKToolsParam.get('Window Padding', 'Padding');
    };

}

if (DKToolsParam.get('Disable Item Background', 'Enabled')) {

    Window_Selectable.prototype.drawItemBackground = function() {};

}

if (DKToolsParam.get('Title Menu Command Window', 'Enabled')) {

    const DKTools_Scene_Title_commandWindowRect = Scene_Title.prototype.commandWindowRect;
    Scene_Title.prototype.commandWindowRect = function() {
        const rect = DKTools_Scene_Title_commandWindowRect.apply(this, arguments);
        const offsetX = $dataSystem.titleCommandWindow.offsetX;

        rect.width = eval(DKToolsParam.get('Title Menu Command Window', 'Width'));
        rect.x = (Graphics.boxWidth - rect.width) / 2 + offsetX;

        return rect;
    };

}

if (DKToolsParam.get('Title Menu Exit Command', 'Enabled')) {

    const DKTools_Window_TitleCommand_paint = Window_TitleCommand.prototype.paint;
    Window_TitleCommand.prototype.paint = function() {
        if (this.findSymbol('exit') === -1) {
            // add here because the exit command should always be the last in the list
            this.addCommand(
                DKToolsParam.get('Title Menu Exit Command', 'Command Name'),
                'exit');
        }

        DKTools_Window_TitleCommand_paint.apply(this, arguments);
    };

    const DKTools_Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        DKTools_Scene_Title_createCommandWindow.apply(this, arguments);

        if (this._commandWindow) {
            this._commandWindow.setHandler('exit', this.commandExit.bind(this));
        }
    };

    Scene_Title.prototype.commandExit = function() {
        this.fadeOutAll();
        SceneManager.exit();
    };

}

if (DKToolsParam.get('Max Savefiles', 'Enabled')) {

    DataManager.maxSavefiles = function() {
        return DKToolsParam.get('Max Savefiles', 'Max Savefiles') || 1;
    };

}
