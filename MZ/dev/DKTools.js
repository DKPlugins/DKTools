/*
Title: DKTools
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.1.1
Release: 23.10.2020
First release: 21.08.2020
*/

/*ru
Название: DKTools
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.1.1
Релиз: 23.10.2020
Первый релиз: 21.08.2020
*/

/*:
* @plugindesc v.1.1.1 Advanced project testing and various settings. Made with ♥ by DKPlugins
* @author DKPlugins
* @url https://dk-plugins.ru
* @target MZ
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 1.1.1
 Release: 23.10.2020
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
 To use the plugin in commercial projects, you must be my subscriber on patreon
 https://www.patreon.com/dkplugins

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
 * @default {"Enabled":"false","Debugging":"false","Audio Files":"[]","Image Files":"[]","Progress Bar":"{\"Enabled\":\"false\",\"Background\":\"\",\"Progress Bar X\":\"(Graphics.boxWidth - width) * 2 / 4\",\"Progress Bar Y\":\"(Graphics.boxHeight - height) * 2 / 4\",\"Progress Bar Text\":\"Loading: %1\",\"Progress Bar Text Size\":\"28\",\"Progress Bar Style\":\"colors\",\"Colors Style\":\"\",\"Progress Bar Width\":\"Graphics.boxWidth * 2 / 4\",\"Progress Bar Height\":\"48\",\"Progress Bar Background Color\":\"grey\",\"Progress Bar Progress Color\":\"#33ccff\",\"Images Style\":\"\",\"Progress Bar Background Image\":\"\",\"Progress Bar Progress Image\":\"\"}"}

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
* @plugindesc v.1.1.1 Расширенное тестирование проекта и различные настройки. Сделано с ♥ от DKPlugins
* @author DKPlugins
* @url https://dk-plugins.ru
* @target MZ
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.1.1
 Релиз: 23.10.2020
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
 Для использования плагина в коммерческих проектах необходимо быть моим подписчиком на патреоне
 https://www.patreon.com/dkplugins

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
 * @default {"Enabled":"false","Debugging":"false","Audio Files":"[]","Image Files":"[]","Progress Bar":"{\"Enabled\":\"false\",\"Background\":\"\",\"Progress Bar X\":\"(Graphics.boxWidth - width) * 2 / 4\",\"Progress Bar Y\":\"(Graphics.boxHeight - height) * 2 / 4\",\"Progress Bar Text\":\"Загрузка: %1\",\"Progress Bar Text Size\":\"28\",\"Progress Bar Style\":\"colors\",\"Colors Style\":\"\",\"Progress Bar Width\":\"Graphics.boxWidth * 2 / 4\",\"Progress Bar Height\":\"48\",\"Progress Bar Background Color\":\"grey\",\"Progress Bar Progress Color\":\"#33ccff\",\"Images Style\":\"\",\"Progress Bar Background Image\":\"\",\"Progress Bar Progress Image\":\"\"}"}

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

(()=>{"use strict";var __webpack_modules__={372:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;module=__webpack_require__.nmd(module),window.Imported=window.Imported||{},window.Imported.DKTools="1.1.1",function(){function t(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function e(t,e,n,i){for(var s=-1,o=null==t?0:t.length;++s<o;){var r=t[s];e(i,r,n(r),t)}return i}function n(t,e){for(var n=-1,i=null==t?0:t.length;++n<i&&!1!==e(t[n],n,t););return t}function i(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function s(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(!e(t[n],n,t))return!1;return!0}function o(t,e){for(var n=-1,i=null==t?0:t.length,s=0,o=[];++n<i;){var r=t[n];e(r,n,t)&&(o[s++]=r)}return o}function r(t,e){return!(null==t||!t.length)&&-1<_(t,e,0)}function a(t,e,n){for(var i=-1,s=null==t?0:t.length;++i<s;)if(n(e,t[i]))return!0;return!1}function l(t,e){for(var n=-1,i=null==t?0:t.length,s=Array(i);++n<i;)s[n]=e(t[n],n,t);return s}function u(t,e){for(var n=-1,i=e.length,s=t.length;++n<i;)t[s+n]=e[n];return t}function c(t,e,n,i){var s=-1,o=null==t?0:t.length;for(i&&o&&(n=t[++s]);++s<o;)n=e(n,t[s],s,t);return n}function h(t,e,n,i){var s=null==t?0:t.length;for(i&&s&&(n=t[--s]);s--;)n=e(n,t[s],s,t);return n}function p(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}function d(t,e,n){var i;return n(t,(function(t,n,s){if(e(t,n,s))return i=n,!1})),i}function f(t,e,n,i){var s=t.length;for(n+=i?1:-1;i?n--:++n<s;)if(e(t[n],n,t))return n;return-1}function _(t,e,n){if(e==e)t:{--n;for(var i=t.length;++n<i;)if(t[n]===e){t=n;break t}t=-1}else t=f(t,y,n);return t}function g(t,e,n,i){--n;for(var s=t.length;++n<s;)if(i(t[n],e))return n;return-1}function y(t){return t!=t}function m(t,e){var n=null==t?0:t.length;return n?S(t,e)/n:L}function T(t){return function(e){return null==e?W:e[t]}}function D(t){return function(e){return null==t?W:t[e]}}function v(t,e,n,i,s){return s(t,(function(t,s,o){n=i?(i=!1,t):e(n,t,s,o)})),n}function S(t,e){for(var n,i=-1,s=t.length;++i<s;){var o=e(t[i]);o!==W&&(n=n===W?o:n+o)}return n}function w(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}function b(t){return function(e){return t(e)}}function K(t,e){return l(e,(function(e){return t[e]}))}function E(t,e){return t.has(e)}function O(t,e){for(var n=-1,i=t.length;++n<i&&-1<_(e,t[n],0););return n}function A(t,e){for(var n=t.length;n--&&-1<_(e,t[n],0););return n}function x(t){return"\\"+It[t]}function I(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n}function P(t,e){return function(n){return t(e(n))}}function C(t,e){for(var n=-1,i=t.length,s=0,o=[];++n<i;){var r=t[n];r!==e&&"__lodash_placeholder__"!==r||(t[n]="__lodash_placeholder__",o[s++]=n)}return o}function R(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function B(t){if(Kt.test(t)){for(var e=wt.lastIndex=0;wt.test(t);)++e;t=e}else t=Xt(t);return t}function M(t){return Kt.test(t)?t.match(wt)||[]:t.split("")}var W,F=1/0,L=NaN,j=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],U=/\b__p\+='';/g,k=/\b(__p\+=)''\+/g,N=/(__e\(.*?\)|\b__t\))\+'';/g,H=/&(?:amp|lt|gt|quot|#39);/g,z=/[&<>"']/g,G=RegExp(H.source),V=RegExp(z.source),X=/<%-([\s\S]+?)%>/g,$=/<%([\s\S]+?)%>/g,q=/<%=([\s\S]+?)%>/g,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/[\\^$.*+?()[\]{}|]/g,tt=RegExp(Q.source),et=/^\s+|\s+$/g,nt=/^\s+/,it=/\s+$/,st=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ot=/\{\n\/\* \[wrapped with (.+)\] \*/,rt=/,? & /,at=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lt=/\\(\\)?/g,ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ct=/\w*$/,ht=/^[-+]0x[0-9a-f]+$/i,pt=/^0b[01]+$/i,dt=/^\[object .+?Constructor\]$/,ft=/^0o[0-7]+$/i,_t=/^(?:0|[1-9]\d*)$/,gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yt=/($^)/,mt=/['\n\r\u2028\u2029\\]/g,Tt="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Dt="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+Tt,vt=RegExp("['’]","g"),St=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),wt=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])"+Tt,"g"),bt=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",Dt].join("|"),"g"),Kt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Et=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ot="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),At={};At["[object Float32Array]"]=At["[object Float64Array]"]=At["[object Int8Array]"]=At["[object Int16Array]"]=At["[object Int32Array]"]=At["[object Uint8Array]"]=At["[object Uint8ClampedArray]"]=At["[object Uint16Array]"]=At["[object Uint32Array]"]=!0,At["[object Arguments]"]=At["[object Array]"]=At["[object ArrayBuffer]"]=At["[object Boolean]"]=At["[object DataView]"]=At["[object Date]"]=At["[object Error]"]=At["[object Function]"]=At["[object Map]"]=At["[object Number]"]=At["[object Object]"]=At["[object RegExp]"]=At["[object Set]"]=At["[object String]"]=At["[object WeakMap]"]=!1;var xt={};xt["[object Arguments]"]=xt["[object Array]"]=xt["[object ArrayBuffer]"]=xt["[object DataView]"]=xt["[object Boolean]"]=xt["[object Date]"]=xt["[object Float32Array]"]=xt["[object Float64Array]"]=xt["[object Int8Array]"]=xt["[object Int16Array]"]=xt["[object Int32Array]"]=xt["[object Map]"]=xt["[object Number]"]=xt["[object Object]"]=xt["[object RegExp]"]=xt["[object Set]"]=xt["[object String]"]=xt["[object Symbol]"]=xt["[object Uint8Array]"]=xt["[object Uint8ClampedArray]"]=xt["[object Uint16Array]"]=xt["[object Uint32Array]"]=!0,xt["[object Error]"]=xt["[object Function]"]=xt["[object WeakMap]"]=!1;var It={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Pt=parseFloat,Ct=parseInt,Rt="object"==typeof global&&global&&global.Object===Object&&global,Bt="object"==typeof self&&self&&self.Object===Object&&self,Mt=Rt||Bt||Function("return this")(),Wt=exports&&!exports.nodeType&&exports,Ft=Wt&&module&&!module.nodeType&&module,Lt=Ft&&Ft.exports===Wt,jt=Lt&&Rt.process,Ut=function(){try{var t=Ft&&Ft.require&&Ft.require("util").types;return t||jt&&jt.binding&&jt.binding("util")}catch(t){}}(),kt=Ut&&Ut.isArrayBuffer,Nt=Ut&&Ut.isDate,Ht=Ut&&Ut.isMap,zt=Ut&&Ut.isRegExp,Gt=Ut&&Ut.isSet,Vt=Ut&&Ut.isTypedArray,Xt=T("length"),$t=D({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),qt=D({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),Yt=D({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),Jt=function D(Tt){function Dt(t){if(qi(t)&&!Fr(t)&&!(t instanceof Rt)){if(t instanceof It)return t;if(Fs.call(t,"__wrapped__"))return vi(t)}return new It(t)}function wt(){}function It(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=W}function Rt(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function Wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function Ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function jt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Ft;++e<n;)this.add(t[e])}function Ut(t){this.size=(this.__data__=new Wt(t)).size}function Xt(t,e){var n,i=Fr(t),s=!i&&Wr(t),o=!i&&!s&&jr(t),r=!i&&!s&&!o&&zr(t),a=(s=(i=i||s||o||r)?w(t.length,Ps):[]).length;for(n in t)!e&&!Fs.call(t,n)||i&&("length"==n||o&&("offset"==n||"parent"==n)||r&&("buffer"==n||"byteLength"==n||"byteOffset"==n)||ai(n,a))||s.push(n);return s}function Zt(t){var e=t.length;return e?t[ze(0,e-1)]:W}function Qt(t,e){return yi(vn(t),le(e,0,t.length))}function te(t){return yi(vn(t))}function ee(t,e,n){(n===W||ki(t[e],n))&&(n!==W||e in t)||re(t,e,n)}function ne(t,e,n){var i=t[e];Fs.call(t,e)&&ki(i,n)&&(n!==W||e in t)||re(t,e,n)}function ie(t,e){for(var n=t.length;n--;)if(ki(t[n][0],e))return n;return-1}function se(t,e,n,i){return Wo(t,(function(t,s,o){e(i,t,n(t),o)})),i}function oe(t,e){return t&&Sn(e,us(e),t)}function re(t,e,n){"__proto__"==e&&eo?eo(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function ae(t,e){for(var n=-1,i=e.length,s=bs(i),o=null==t;++n<i;)s[n]=o?W:as(t,e[n]);return s}function le(t,e,n){return t==t&&(n!==W&&(t=t<=n?t:n),e!==W&&(t=t>=e?t:e)),t}function ue(t,e,i,s,o,r){var a,l=1&e,u=2&e,c=4&e;if(i&&(a=o?i(t,s,o,r):i(t)),a!==W)return a;if(!$i(t))return t;if(s=Fr(t)){if(a=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&Fs.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(t),!l)return vn(t,a)}else{var h=Xo(t),p="[object Function]"==h||"[object GeneratorFunction]"==h;if(jr(t))return _n(t,l);if("[object Object]"==h||"[object Arguments]"==h||p&&!o){if(a=u||p?{}:oi(t),!l)return u?function(t,e){return Sn(t,Vo(t),e)}(t,function(t,e){return t&&Sn(e,cs(e),t)}(a,t)):function(t,e){return Sn(t,Go(t),e)}(t,oe(a,t))}else{if(!xt[h])return o?t:{};a=function(t,e,n){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return gn(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return e=n?gn(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return yn(t,n);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return(e=new t.constructor(t.source,ct.exec(t))).lastIndex=t.lastIndex,e;case"[object Set]":return new i;case"[object Symbol]":return Ro?xs(Ro.call(t)):{}}}(t,h,l)}}if(r||(r=new Ut),o=r.get(t))return o;if(r.set(t,a),Hr(t))return t.forEach((function(n){a.add(ue(n,e,i,n,t,r))})),a;if(kr(t))return t.forEach((function(n,s){a.set(s,ue(n,e,i,s,t,r))})),a;u=c?u?Jn:Yn:u?cs:us;var d=s?W:u(t);return n(d||t,(function(n,s){d&&(n=t[s=n]),ne(a,s,ue(n,e,i,s,t,r))})),a}function ce(t,e,n){var i=n.length;if(null==t)return!i;for(t=xs(t);i--;){var s=n[i],o=e[s],r=t[s];if(r===W&&!(s in t)||!o(r))return!1}return!0}function he(t,e,n){if("function"!=typeof t)throw new Cs("Expected a function");return Yo((function(){t.apply(W,n)}),e)}function pe(t,e,n,i){var s=-1,o=r,u=!0,c=t.length,h=[],p=e.length;if(!c)return h;n&&(e=l(e,b(n))),i?(o=a,u=!1):200<=e.length&&(o=E,u=!1,e=new jt(e));t:for(;++s<c;){var d=t[s],f=null==n?d:n(d);d=i||0!==d?d:0;if(u&&f==f){for(var _=p;_--;)if(e[_]===f)continue t;h.push(d)}else o(e,f,i)||h.push(d)}return h}function de(t,e){var n=!0;return Wo(t,(function(t,i,s){return n=!!e(t,i,s)})),n}function fe(t,e,n){for(var i=-1,s=t.length;++i<s;){var o=t[i],r=e(o);if(null!=r&&(a===W?r==r&&!Qi(r):n(r,a)))var a=r,l=o}return l}function _e(t,e){var n=[];return Wo(t,(function(t,i,s){e(t,i,s)&&n.push(t)})),n}function ge(t,e,n,i,s){var o=-1,r=t.length;for(n||(n=ri),s||(s=[]);++o<r;){var a=t[o];0<e&&n(a)?1<e?ge(a,e-1,n,i,s):u(s,a):i||(s[s.length]=a)}return s}function ye(t,e){return t&&Lo(t,e,us)}function me(t,e){return t&&jo(t,e,us)}function Te(t,e){return o(e,(function(e){return Gi(t[e])}))}function De(t,e){for(var n=0,i=(e=dn(e,t)).length;null!=t&&n<i;)t=t[mi(e[n++])];return n&&n==i?t:W}function ve(t,e,n){return e=e(t),Fr(t)?e:u(e,n(t))}function Se(t){if(null==t)return t===W?"[object Undefined]":"[object Null]";if(to&&to in xs(t)){var e=Fs.call(t,to),n=t[to];try{t[to]=W;var i=!0}catch(t){}var s=Us.call(t);i&&(e?t[to]=n:delete t[to]),t=s}else t=Us.call(t);return t}function we(t,e){return t>e}function be(t,e){return null!=t&&Fs.call(t,e)}function Ke(t,e){return null!=t&&e in xs(t)}function Ee(t,e,n){for(var i=n?a:r,s=t[0].length,o=t.length,u=o,c=bs(o),h=1/0,p=[];u--;){var d=t[u];u&&e&&(d=l(d,b(e))),h=fo(d.length,h),c[u]=!n&&(e||120<=s&&120<=d.length)?new jt(u&&d):W}d=t[0];var f=-1,_=c[0];t:for(;++f<s&&p.length<h;){var g=d[f],y=e?e(g):g;g=n||0!==g?g:0;if(_?!E(_,y):!i(p,y,n)){for(u=o;--u;){var m=c[u];if(m?!E(m,y):!i(t[u],y,n))continue t}_&&_.push(y),p.push(g)}}return p}function Oe(e,n,i){return null==(n=null==(e=2>(n=dn(n,e)).length?e:De(e,Je(n,0,-1)))?e:e[mi(Ei(n))])?W:t(n,e,i)}function Ae(t){return qi(t)&&"[object Arguments]"==Se(t)}function xe(t,e,n,i,s){if(t===e)return!0;if(null==t||null==e||!qi(t)&&!qi(e))return t!=t&&e!=e;t:{var o,r,a=Fr(t),l=Fr(e),u="[object Object]"==(o="[object Arguments]"==(o=a?"[object Array]":Xo(t))?"[object Object]":o);l="[object Object]"==(r="[object Arguments]"==(r=l?"[object Array]":Xo(e))?"[object Object]":r);if((r=o==r)&&jr(t)){if(!jr(e)){e=!1;break t}a=!0,u=!1}if(r&&!u)s||(s=new Ut),e=a||zr(t)?$n(t,e,n,i,xe,s):function(t,e,n,i,s,o,r){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!o(new Vs(t),new Vs(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return ki(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=I;case"[object Set]":if(a||(a=R),t.size!=e.size&&!(1&i))break;return(n=r.get(t))?n==e:(i|=2,r.set(t,e),e=$n(a(t),a(e),i,s,o,r),r.delete(t),e);case"[object Symbol]":if(Ro)return Ro.call(t)==Ro.call(e)}return!1}(t,e,o,n,i,xe,s);else{if(!(1&n)&&(a=u&&Fs.call(t,"__wrapped__"),o=l&&Fs.call(e,"__wrapped__"),a||o)){t=a?t.value():t,e=o?e.value():e,s||(s=new Ut),e=xe(t,e,n,i,s);break t}if(r)e:if(s||(s=new Ut),a=1&n,o=Yn(t),l=o.length,r=Yn(e).length,l==r||a){for(u=l;u--;){var c=o[u];if(!(a?c in e:Fs.call(e,c))){e=!1;break e}}if((r=s.get(t))&&s.get(e))e=r==e;else{r=!0,s.set(t,e),s.set(e,t);for(var h=a;++u<l;){var p=t[c=o[u]],d=e[c];if(i)var f=a?i(d,p,c,e,t,s):i(p,d,c,t,e,s);if(f===W?p!==d&&!xe(p,d,n,i,s):!f){r=!1;break}h||(h="constructor"==c)}r&&!h&&((n=t.constructor)!=(i=e.constructor)&&"constructor"in t&&"constructor"in e&&!("function"==typeof n&&n instanceof n&&"function"==typeof i&&i instanceof i)&&(r=!1)),s.delete(t),s.delete(e),e=r}}else e=!1;else e=!1}}return e}function Ie(t,e,n,i){var s=n.length,o=s,r=!i;if(null==t)return!o;for(t=xs(t);s--;){var a=n[s];if(r&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++s<o;){var l=(a=n[s])[0],u=t[l],c=a[1];if(r&&a[2]){if(u===W&&!(l in t))return!1}else{if(a=new Ut,i)var h=i(u,c,l,t,e,a);if(h===W?!xe(c,u,3,i,a):!h)return!1}}return!0}function Pe(t){return!(!$i(t)||js&&js in t)&&(Gi(t)?Hs:dt).test(Ti(t))}function Ce(t){return"function"==typeof t?t:null==t?ys:"object"==typeof t?Fr(t)?Fe(t[0],t[1]):We(t):vs(t)}function Re(t){if(!hi(t))return ho(t);var e,n=[];for(e in xs(t))Fs.call(t,e)&&"constructor"!=e&&n.push(e);return n}function Be(t,e){return t<e}function Me(t,e){var n=-1,i=Ni(t)?bs(t.length):[];return Wo(t,(function(t,s,o){i[++n]=e(t,s,o)})),i}function We(t){var e=ni(t);return 1==e.length&&e[0][2]?pi(e[0][0],e[0][1]):function(n){return n===t||Ie(n,t,e)}}function Fe(t,e){return ui(t)&&e==e&&!$i(e)?pi(mi(t),e):function(n){var i=as(n,t);return i===W&&i===e?ls(n,t):xe(e,i,3)}}function Le(t,e,n,i,s){t!==e&&Lo(e,(function(o,r){if($i(o)){s||(s=new Ut);var a=s,l=fi(t,r),u=fi(e,r);if(!(f=a.get(u))){var c=(f=i?i(l,u,r+"",t,e,a):W)===W;if(c){var h=Fr(u),p=!h&&jr(u),d=!h&&!p&&zr(u),f=u;h||p||d?Fr(l)?f=l:Hi(l)?f=vn(l):p?(c=!1,f=_n(u,!0)):d?(c=!1,f=yn(u,!0)):f=[]:Ji(u)||Wr(u)?(f=l,Wr(l)?f=os(l):$i(l)&&!Gi(l)||(f=oi(u))):c=!1}c&&(a.set(u,f),Le(f,u,n,i,a),a.delete(u))}ee(t,r,f)}else(a=i?i(fi(t,r),o,r+"",t,e,s):W)===W&&(a=o),ee(t,r,a)}),cs)}function je(t,e){var n=t.length;if(n)return ai(e+=0>e?n:0,n)?t[e]:W}function Ue(t,e,n){var i=-1;return e=l(e.length?e:[ys],b(ti())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].c;return t}(t=Me(t,(function(t,n,s){return{a:l(e,(function(e){return e(t)})),b:++i,c:t}})),(function(t,e){var i;t:{i=-1;for(var s=t.a,o=e.a,r=s.length,a=n.length;++i<r;){var l=mn(s[i],o[i]);if(l){if(i>=a){i=l;break t}i=l*("desc"==n[i]?-1:1);break t}}i=t.b-e.b}return i}))}function ke(t,e,n){for(var i=-1,s=e.length,o={};++i<s;){var r=e[i],a=De(t,r);n(a,r)&&qe(o,dn(r,t),a)}return o}function Ne(t,e,n,i){var s=i?g:_,o=-1,r=e.length,a=t;for(t===e&&(e=vn(e)),n&&(a=l(t,b(n)));++o<r;){var u=0,c=e[o];for(c=n?n(c):c;-1<(u=s(a,c,u,i));)a!==t&&Js.call(a,u,1),Js.call(t,u,1)}return t}function He(t,e){for(var n=t?e.length:0,i=n-1;n--;){var s=e[n];if(n==i||s!==o){var o=s;ai(s)?Js.call(t,s,1):rn(t,s)}}return t}function ze(t,e){return t+ro(yo()*(e-t+1))}function Ge(t,e){var n="";if(!t||1>e||9007199254740991<e)return n;do{e%2&&(n+=t),(e=ro(e/2))&&(t+=t)}while(e);return n}function Ve(t,e){return Jo(di(t,e,ys),t+"")}function Xe(t){return Zt(ps(t))}function $e(t,e){var n=ps(t);return yi(n,le(e,0,n.length))}function qe(t,e,n,i){if(!$i(t))return t;for(var s=-1,o=(e=dn(e,t)).length,r=o-1,a=t;null!=a&&++s<o;){var l=mi(e[s]),u=n;if(s!=r){var c=a[l];(u=i?i(c,l,a):W)===W&&(u=$i(c)?c:ai(e[s+1])?[]:{})}ne(a,l,u),a=a[l]}return t}function Ye(t){return yi(ps(t))}function Je(t,e,n){var i=-1,s=t.length;for(0>e&&(e=-e>s?0:s+e),0>(n=n>s?s:n)&&(n+=s),s=e>n?0:n-e>>>0,e>>>=0,n=bs(s);++i<s;)n[i]=t[i+e];return n}function Ze(t,e){var n;return Wo(t,(function(t,i,s){return!(n=e(t,i,s))})),!!n}function Qe(t,e,n){var i=0,s=null==t?i:t.length;if("number"==typeof e&&e==e&&2147483647>=s){for(;i<s;){var o=i+s>>>1,r=t[o];null!==r&&!Qi(r)&&(n?r<=e:r<e)?i=o+1:s=o}return s}return tn(t,e,ys,n)}function tn(t,e,n,i){e=n(e);for(var s=0,o=null==t?0:t.length,r=e!=e,a=null===e,l=Qi(e),u=e===W;s<o;){var c=ro((s+o)/2),h=n(t[c]),p=h!==W,d=null===h,f=h==h,_=Qi(h);(r?i||f:u?f&&(i||p):a?f&&p&&(i||!d):l?f&&p&&!d&&(i||!_):!d&&!_&&(i?h<=e:h<e))?s=c+1:o=c}return fo(o,4294967294)}function en(t,e){for(var n=-1,i=t.length,s=0,o=[];++n<i;){var r=t[n],a=e?e(r):r;if(!n||!ki(a,l)){var l=a;o[s++]=0===r?0:r}}return o}function nn(t){return"number"==typeof t?t:Qi(t)?L:+t}function sn(t){if("string"==typeof t)return t;if(Fr(t))return l(t,sn)+"";if(Qi(t))return Bo?Bo.call(t):"";var e=t+"";return"0"==e&&1/t==-F?"-0":e}function on(t,e,n){var i=-1,s=r,o=t.length,l=!0,u=[],c=u;if(n)l=!1,s=a;else if(200<=o){if(s=e?null:Ho(t))return R(s);l=!1,s=E,c=new jt}else c=e?[]:u;t:for(;++i<o;){var h=t[i],p=e?e(h):h;h=n||0!==h?h:0;if(l&&p==p){for(var d=c.length;d--;)if(c[d]===p)continue t;e&&c.push(p),u.push(h)}else s(c,p,n)||(c!==u&&c.push(p),u.push(h))}return u}function rn(t,e){return null==(t=2>(e=dn(e,t)).length?t:De(t,Je(e,0,-1)))||delete t[mi(Ei(e))]}function an(t,e,n,i){for(var s=t.length,o=i?s:-1;(i?o--:++o<s)&&e(t[o],o,t););return n?Je(t,i?0:o,i?o+1:s):Je(t,i?o+1:0,i?s:o)}function ln(t,e){var n=t;return n instanceof Rt&&(n=n.value()),c(e,(function(t,e){return e.func.apply(e.thisArg,u([t],e.args))}),n)}function un(t,e,n){var i=t.length;if(2>i)return i?on(t[0]):[];for(var s=-1,o=bs(i);++s<i;)for(var r=t[s],a=-1;++a<i;)a!=s&&(o[s]=pe(o[s]||r,t[a],e,n));return on(ge(o,1),e,n)}function cn(t,e,n){for(var i=-1,s=t.length,o=e.length,r={};++i<s;)n(r,t[i],i<o?e[i]:W);return r}function hn(t){return Hi(t)?t:[]}function pn(t){return"function"==typeof t?t:ys}function dn(t,e){return Fr(t)?t:ui(t,e)?[t]:Zo(rs(t))}function fn(t,e,n){var i=t.length;return n=n===W?i:n,!e&&n>=i?t:Je(t,e,n)}function _n(t,e){if(e)return t.slice();var n=t.length;n=Xs?Xs(n):new t.constructor(n);return t.copy(n),n}function gn(t){var e=new t.constructor(t.byteLength);return new Vs(e).set(new Vs(t)),e}function yn(t,e){return new t.constructor(e?gn(t.buffer):t.buffer,t.byteOffset,t.length)}function mn(t,e){if(t!==e){var n=t!==W,i=null===t,s=t==t,o=Qi(t),r=e!==W,a=null===e,l=e==e,u=Qi(e);if(!a&&!u&&!o&&t>e||o&&r&&l&&!a&&!u||i&&r&&l||!n&&l||!s)return 1;if(!i&&!o&&!u&&t<e||u&&n&&s&&!i&&!o||a&&n&&s||!r&&s||!l)return-1}return 0}function Tn(t,e,n,i){var s=-1,o=t.length,r=n.length,a=-1,l=e.length,u=po(o-r,0),c=bs(l+u);for(i=!i;++a<l;)c[a]=e[a];for(;++s<r;)(i||s<o)&&(c[n[s]]=t[s]);for(;u--;)c[a++]=t[s++];return c}function Dn(t,e,n,i){var s=-1,o=t.length,r=-1,a=n.length,l=-1,u=e.length,c=po(o-a,0),h=bs(c+u);for(i=!i;++s<c;)h[s]=t[s];for(c=s;++l<u;)h[c+l]=e[l];for(;++r<a;)(i||s<o)&&(h[c+n[r]]=t[s++]);return h}function vn(t,e){var n=-1,i=t.length;for(e||(e=bs(i));++n<i;)e[n]=t[n];return e}function Sn(t,e,n,i){var s=!n;n||(n={});for(var o=-1,r=e.length;++o<r;){var a=e[o],l=i?i(n[a],t[a],a,n,t):W;l===W&&(l=t[a]),s?re(n,a,l):ne(n,a,l)}return n}function wn(t,n){return function(i,s){var o=Fr(i)?e:se,r=n?n():{};return o(i,t,ti(s,2),r)}}function bn(t){return Ve((function(e,n){var i=-1,s=n.length,o=1<s?n[s-1]:W,r=2<s?n[2]:W;o=3<t.length&&"function"==typeof o?(s--,o):W;for(r&&li(n[0],n[1],r)&&(o=3>s?W:o,s=1),e=xs(e);++i<s;)(r=n[i])&&t(e,r,i,o);return e}))}function Kn(t,e){return function(n,i){if(null==n)return n;if(!Ni(n))return t(n,i);for(var s=n.length,o=e?s:-1,r=xs(n);(e?o--:++o<s)&&!1!==i(r[o],o,r););return n}}function En(t){return function(e,n,i){for(var s=-1,o=xs(e),r=(i=i(e)).length;r--;){var a=i[t?r:++s];if(!1===n(o[a],a,o))break}return e}}function On(t){return function(e){e=rs(e);var n=Kt.test(e)?M(e):W,i=n?n[0]:e.charAt(0);return e=n?fn(n,1).join(""):e.slice(1),i[t]()+e}}function An(t){return function(e){return c(_s(fs(e).replace(vt,"")),t,"")}}function xn(t){return function(){switch((e=arguments).length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var e,n=Mo(t.prototype);return $i(e=t.apply(n,e))?e:n}}function In(e,n,i){var s=xn(e);return function o(){for(var r=arguments.length,a=bs(r),l=r,u=Qn(o);l--;)a[l]=arguments[l];return(r-=(l=3>r&&a[0]!==u&&a[r-1]!==u?[]:C(a,u)).length)<i?kn(e,n,Rn,o.placeholder,W,a,l,W,W,i-r):t(this&&this!==Mt&&this instanceof o?s:e,this,a)}}function Pn(t){return function(e,n,i){var s=xs(e);if(!Ni(e)){var o=ti(n,3);e=us(e),n=function(t){return o(s[t],t,s)}}return-1<(n=t(e,n,i))?s[o?e[n]:n]:W}}function Cn(t){return qn((function(e){var n=e.length,i=n,s=It.prototype.thru;for(t&&e.reverse();i--;){if("function"!=typeof(r=e[i]))throw new Cs("Expected a function");if(s&&!o&&"wrapper"==Zn(r))var o=new It([],!0)}for(i=o?i:n;++i<n;){var r,a="wrapper"==(s=Zn(r=e[i]))?zo(r):W;o=a&&ci(a[0])&&424==a[1]&&!a[4].length&&1==a[9]?o[Zn(a[0])].apply(o,a[3]):1==r.length&&ci(r)?o[s]():o.thru(r)}return function(){var t=(s=arguments)[0];if(o&&1==s.length&&Fr(t))return o.plant(t).value();for(var i=0,s=n?e[i].apply(this,s):t;++i<n;)s=e[i].call(this,s);return s}}))}function Rn(t,e,n,i,s,o,r,a,l,u){var c=128&e,h=1&e,p=2&e,d=24&e,f=512&e,_=p?W:xn(t);return function g(){for(var y=arguments.length,m=bs(y),T=y;T--;)m[T]=arguments[T];if(d){var D,v=Qn(g);T=m.length;for(D=0;T--;)m[T]===v&&++D}if(i&&(m=Tn(m,i,s,d)),o&&(m=Dn(m,o,r,d)),y-=D,d&&y<u)return v=C(m,v),kn(t,e,Rn,g.placeholder,n,m,v,a,l,u-y);if(v=h?n:this,T=p?v[t]:t,y=m.length,a){D=m.length;for(var S=fo(a.length,D),w=vn(m);S--;){var b=a[S];m[S]=ai(b,D)?w[b]:W}}else f&&1<y&&m.reverse();return c&&l<y&&(m.length=l),this&&this!==Mt&&this instanceof g&&(T=_||xn(T)),T.apply(v,m)}}function Bn(t,e){return function(n,i){return function(t,e,n,i){return ye(t,(function(t,s,o){e(i,n(t),s,o)})),i}(n,t,e(i),{})}}function Mn(t,e){return function(n,i){var s;if(n===W&&i===W)return e;if(n!==W&&(s=n),i!==W){if(s===W)return i;"string"==typeof n||"string"==typeof i?(n=sn(n),i=sn(i)):(n=nn(n),i=nn(i)),s=t(n,i)}return s}}function Wn(e){return qn((function(n){return n=l(n,b(ti())),Ve((function(i){var s=this;return e(n,(function(e){return t(e,s,i)}))}))}))}function Fn(t,e){var n=(e=e===W?" ":sn(e)).length;return 2>n?n?Ge(e,t):e:(n=Ge(e,oo(t/B(e))),Kt.test(e)?fn(M(n),0,t).join(""):n.slice(0,t))}function Ln(e,n,i,s){var o=1&n,r=xn(e);return function n(){for(var a=-1,l=arguments.length,u=-1,c=s.length,h=bs(c+l),p=this&&this!==Mt&&this instanceof n?r:e;++u<c;)h[u]=s[u];for(;l--;)h[u++]=arguments[++a];return t(p,o?i:this,h)}}function jn(t){return function(e,n,i){i&&"number"!=typeof i&&li(e,n,i)&&(n=i=W),e=es(e),n===W?(n=e,e=0):n=es(n),i=i===W?e<n?1:-1:es(i);var s=-1;n=po(oo((n-e)/(i||1)),0);for(var o=bs(n);n--;)o[t?n:++s]=e,e+=i;return o}}function Un(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=ss(e),n=ss(n)),t(e,n)}}function kn(t,e,n,i,s,o,r,a,l,u){var c=8&e;return 4&(e=(e|(c?32:64))&~(c?64:32))||(e&=-4),s=[t,e,s,c?o:W,c?r:W,o=c?W:o,r=c?W:r,a,l,u],n=n.apply(W,s),ci(t)&&qo(n,s),n.placeholder=i,_i(n,t,e)}function Nn(t){var e=As[t];return function(t,n){if(t=ss(t),n=null==n?0:fo(ns(n),292)){var i=(rs(t)+"e").split("e");return+((i=(rs(i=e(i[0]+"e"+(+i[1]+n)))+"e").split("e"))[0]+"e"+(+i[1]-n))}return e(t)}}function Hn(t){return function(e){var n=Xo(e);return"[object Map]"==n?I(e):"[object Set]"==n?function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}(e):function(t,e){return l(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function zn(t,e,n,i,s,o,r,a){var l=2&e;if(!l&&"function"!=typeof t)throw new Cs("Expected a function");var u=i?i.length:0;if(u||(e&=-97,i=s=W),r=r===W?r:po(ns(r),0),a=a===W?a:ns(a),u-=s?s.length:0,64&e){var c=i,h=s;i=s=W}var p=l?W:zo(t);return o=[t,e,n,i,s,c,h,o,r,a],p&&(e=(n=o[1])|(t=p[1]),i=128==t&&8==n||128==t&&256==n&&o[7].length<=p[8]||384==t&&p[7].length<=p[8]&&8==n,131>e||i)&&(1&t&&(o[2]=p[2],e|=1&n?0:4),(n=p[3])&&(i=o[3],o[3]=i?Tn(i,n,p[4]):n,o[4]=i?C(o[3],"__lodash_placeholder__"):p[4]),(n=p[5])&&(i=o[5],o[5]=i?Dn(i,n,p[6]):n,o[6]=i?C(o[5],"__lodash_placeholder__"):p[6]),(n=p[7])&&(o[7]=n),128&t&&(o[8]=null==o[8]?p[8]:fo(o[8],p[8])),null==o[9]&&(o[9]=p[9]),o[0]=p[0],o[1]=e),t=o[0],e=o[1],n=o[2],i=o[3],s=o[4],!(a=o[9]=o[9]===W?l?0:t.length:po(o[9]-u,0))&&24&e&&(e&=-25),l=e&&1!=e?8==e||16==e?In(t,e,a):32!=e&&33!=e||s.length?Rn.apply(W,o):Ln(t,e,n,i):function(t,e,n){var i=1&e,s=xn(t);return function e(){return(this&&this!==Mt&&this instanceof e?s:t).apply(i?n:this,arguments)}}(t,e,n),_i((p?Uo:qo)(l,o),t,e)}function Gn(t,e,n,i){return t===W||ki(t,Bs[n])&&!Fs.call(i,n)?e:t}function Vn(t,e,n,i,s,o){return $i(t)&&$i(e)&&(o.set(e,t),Le(t,e,W,Vn,o),o.delete(e)),t}function Xn(t){return Ji(t)?W:t}function $n(t,e,n,i,s,o){var r=1&n,a=t.length;if(a!=(l=e.length)&&!(r&&l>a))return!1;if((l=o.get(t))&&o.get(e))return l==e;var l=-1,u=!0,c=2&n?new jt:W;for(o.set(t,e),o.set(e,t);++l<a;){var h=t[l],d=e[l];if(i)var f=r?i(d,h,l,e,t,o):i(h,d,l,t,e,o);if(f!==W){if(f)continue;u=!1;break}if(c){if(!p(e,(function(t,e){if(!E(c,e)&&(h===t||s(h,t,n,i,o)))return c.push(e)}))){u=!1;break}}else if(h!==d&&!s(h,d,n,i,o)){u=!1;break}}return o.delete(t),o.delete(e),u}function qn(t){return Jo(di(t,W,bi),t+"")}function Yn(t){return ve(t,us,Go)}function Jn(t){return ve(t,cs,Vo)}function Zn(t){for(var e=t.name+"",n=Eo[e],i=Fs.call(Eo,e)?n.length:0;i--;){var s=n[i],o=s.func;if(null==o||o==t)return s.name}return e}function Qn(t){return(Fs.call(Dt,"placeholder")?Dt:t).placeholder}function ti(){var t=(t=Dt.iteratee||ms)===ms?Ce:t;return arguments.length?t(arguments[0],arguments[1]):t}function ei(t,e){var n=t.__data__,i=typeof e;return("string"==i||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==e:null===e)?n["string"==typeof e?"string":"hash"]:n.map}function ni(t){for(var e=us(t),n=e.length;n--;){var i=e[n],s=t[i];e[n]=[i,s,s==s&&!$i(s)]}return e}function ii(t,e){var n=null==t?W:t[e];return Pe(n)?n:W}function si(t,e,n){for(var i=-1,s=(e=dn(e,t)).length,o=!1;++i<s;){var r=mi(e[i]);if(!(o=null!=t&&n(t,r)))break;t=t[r]}return o||++i!=s?o:!!(s=null==t?0:t.length)&&Xi(s)&&ai(r,s)&&(Fr(t)||Wr(t))}function oi(t){return"function"!=typeof t.constructor||hi(t)?{}:Mo($s(t))}function ri(t){return Fr(t)||Wr(t)||!!(Zs&&t&&t[Zs])}function ai(t,e){var n=typeof t;return!!(e=e??9007199254740991)&&("number"==n||"symbol"!=n&&_t.test(t))&&-1<t&&0==t%1&&t<e}function li(t,e,n){if(!$i(n))return!1;var i=typeof e;return!!("number"==i?Ni(n)&&ai(e,n.length):"string"==i&&e in n)&&ki(n[e],t)}function ui(t,e){if(Fr(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Qi(t))||J.test(t)||!Y.test(t)||null!=e&&t in xs(e)}function ci(t){var e=Zn(t),n=Dt[e];return"function"==typeof n&&e in Rt.prototype&&(t===n||!!(e=zo(n))&&t===e[0])}function hi(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Bs)}function pi(t,e){return function(n){return null!=n&&n[t]===e&&(e!==W||t in xs(n))}}function di(e,n,i){return n=po(n===W?e.length-1:n,0),function(){for(var s=arguments,o=-1,r=po(s.length-n,0),a=bs(r);++o<r;)a[o]=s[n+o];for(o=-1,r=bs(n+1);++o<n;)r[o]=s[o];return r[n]=i(a),t(e,this,r)}}function fi(t,e){if("__proto__"!=e)return t[e]}function _i(t,e,n){var i=e+"";e=Jo;var s,o=Di;return n=o(s=(s=i.match(ot))?s[1].split(rt):[],n),(o=n.length)&&(n[s=o-1]=(1<o?"& ":"")+n[s],n=n.join(2<o?", ":" "),i=i.replace(st,"{\n/* [wrapped with "+n+"] */\n")),e(t,i)}function gi(t){var e=0,n=0;return function(){var i=_o(),s=16-(i-n);if(n=i,0<s){if(800<=++e)return arguments[0]}else e=0;return t.apply(W,arguments)}}function yi(t,e){var n=-1,i=(s=t.length)-1;for(e=e===W?s:e;++n<e;){var s,o=t[s=ze(n,i)];t[s]=t[n],t[n]=o}return t.length=e,t}function mi(t){if("string"==typeof t||Qi(t))return t;var e=t+"";return"0"==e&&1/t==-F?"-0":e}function Ti(t){if(null!=t){try{return Ws.call(t)}catch(t){}return t+""}return""}function Di(t,e){return n(j,(function(n){var i="_."+n[0];e&n[1]&&!r(t,i)&&t.push(i)})),t.sort()}function vi(t){if(t instanceof Rt)return t.clone();var e=new It(t.__wrapped__,t.__chain__);return e.__actions__=vn(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Si(t,e,n){var i=null==t?0:t.length;return i?(0>(n=null==n?0:ns(n))&&(n=po(i+n,0)),f(t,ti(e,3),n)):-1}function wi(t,e,n){var i=null==t?0:t.length;if(!i)return-1;var s=i-1;return n!==W&&(s=ns(n),s=0>n?po(i+s,0):fo(s,i-1)),f(t,ti(e,3),s,!0)}function bi(t){return null!=t&&t.length?ge(t,1):[]}function Ki(t){return t&&t.length?t[0]:W}function Ei(t){var e=null==t?0:t.length;return e?t[e-1]:W}function Oi(t,e){return t&&t.length&&e&&e.length?Ne(t,e):t}function Ai(t){return null==t?t:mo.call(t)}function xi(t){if(!t||!t.length)return[];var e=0;return t=o(t,(function(t){if(Hi(t))return e=po(t.length,e),!0})),w(e,(function(e){return l(t,T(e))}))}function Ii(e,n){if(!e||!e.length)return[];var i=xi(e);return null==n?i:l(i,(function(e){return t(n,W,e)}))}function Pi(t){return(t=Dt(t)).__chain__=!0,t}function Ci(t,e){return e(t)}function Ri(t,e){return(Fr(t)?n:Wo)(t,ti(e,3))}function Bi(t,e){return(Fr(t)?i:Fo)(t,ti(e,3))}function Mi(t,e){return(Fr(t)?l:Me)(t,ti(e,3))}function Wi(t,e,n){return e=n?W:e,e=t&&null==e?t.length:e,zn(t,128,W,W,W,W,e)}function Fi(t,e){var n;if("function"!=typeof e)throw new Cs("Expected a function");return t=ns(t),function(){return 0<--t&&(n=e.apply(this,arguments)),1>=t&&(e=W),n}}function Li(t,e,n){function i(e){var n=l,i=u;return l=u=W,f=e,h=t.apply(i,n)}function s(t){var n=t-d;return t-=f,d===W||n>=e||0>n||g&&t>=c}function o(){var t=Kr();if(s(t))return r(t);var n,i=Yo;n=t-f,t=e-(t-d),n=g?fo(t,c-n):t,p=i(o,n)}function r(t){return p=W,y&&l?i(t):(l=u=W,h)}function a(){var t=Kr(),n=s(t);if(l=arguments,u=this,d=t,n){if(p===W)return f=t=d,p=Yo(o,e),_?i(t):h;if(g)return p=Yo(o,e),i(d)}return p===W&&(p=Yo(o,e)),h}var l,u,c,h,p,d,f=0,_=!1,g=!1,y=!0;if("function"!=typeof t)throw new Cs("Expected a function");return e=ss(e)||0,$i(n)&&(_=!!n.leading,c=(g="maxWait"in n)?po(ss(n.maxWait)||0,e):c,y="trailing"in n?!!n.trailing:y),a.cancel=function(){p!==W&&No(p),f=0,l=d=u=p=W},a.flush=function(){return p===W?h:r(Kr())},a}function ji(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new Cs("Expected a function");var n=function(){var i=arguments,s=e?e.apply(this,i):i[0],o=n.cache;return o.has(s)?o.get(s):(i=t.apply(this,i),n.cache=o.set(s,i)||o,i)};return n.cache=new(ji.Cache||Ft),n}function Ui(t){if("function"!=typeof t)throw new Cs("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function ki(t,e){return t===e||t!=t&&e!=e}function Ni(t){return null!=t&&Xi(t.length)&&!Gi(t)}function Hi(t){return qi(t)&&Ni(t)}function zi(t){if(!qi(t))return!1;var e=Se(t);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!Ji(t)}function Gi(t){return!!$i(t)&&("[object Function]"==(t=Se(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function Vi(t){return"number"==typeof t&&t==ns(t)}function Xi(t){return"number"==typeof t&&-1<t&&0==t%1&&9007199254740991>=t}function $i(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function qi(t){return null!=t&&"object"==typeof t}function Yi(t){return"number"==typeof t||qi(t)&&"[object Number]"==Se(t)}function Ji(t){return!(!qi(t)||"[object Object]"!=Se(t))&&(null===(t=$s(t))||"function"==typeof(t=Fs.call(t,"constructor")&&t.constructor)&&t instanceof t&&Ws.call(t)==ks)}function Zi(t){return"string"==typeof t||!Fr(t)&&qi(t)&&"[object String]"==Se(t)}function Qi(t){return"symbol"==typeof t||qi(t)&&"[object Symbol]"==Se(t)}function ts(t){if(!t)return[];if(Ni(t))return Zi(t)?M(t):vn(t);if(Qs&&t[Qs]){t=t[Qs]();for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}return("[object Map]"==(e=Xo(t))?I:"[object Set]"==e?R:ps)(t)}function es(t){return t?(t=ss(t))===F||t===-F?17976931348623157e292*(0>t?-1:1):t==t?t:0:0===t?t:0}function ns(t){var e=(t=es(t))%1;return t==t?e?t-e:t:0}function is(t){return t?le(ns(t),0,4294967295):0}function ss(t){if("number"==typeof t)return t;if(Qi(t))return L;if($i(t)&&(t=$i(t="function"==typeof t.valueOf?t.valueOf():t)?t+"":t),"string"!=typeof t)return 0===t?t:+t;t=t.replace(et,"");var e=pt.test(t);return e||ft.test(t)?Ct(t.slice(2),e?2:8):ht.test(t)?L:+t}function os(t){return Sn(t,cs(t))}function rs(t){return null==t?"":sn(t)}function as(t,e,n){return(t=null==t?W:De(t,e))===W?n:t}function ls(t,e){return null!=t&&si(t,e,Ke)}function us(t){return Ni(t)?Xt(t):Re(t)}function cs(t){if(Ni(t))t=Xt(t,!0);else if($i(t)){var e,n=hi(t),i=[];for(e in t)("constructor"!=e||!n&&Fs.call(t,e))&&i.push(e);t=i}else{if(e=[],null!=t)for(n in xs(t))e.push(n);t=e}return t}function hs(t,e){if(null==t)return{};var n=l(Jn(t),(function(t){return[t]}));return e=ti(e),ke(t,n,(function(t,n){return e(t,n[0])}))}function ps(t){return null==t?[]:K(t,us(t))}function ds(t){return ga(rs(t).toLowerCase())}function fs(t){return(t=rs(t))&&t.replace(gt,$t).replace(St,"")}function _s(t,e,n){return t=rs(t),(e=n?W:e)===W?Et.test(t)?t.match(bt)||[]:t.match(at)||[]:t.match(e)||[]}function gs(t){return function(){return t}}function ys(t){return t}function ms(t){return Ce("function"==typeof t?t:ue(t,1))}function Ts(t,e,i){var s=us(e),o=Te(e,s);null!=i||$i(e)&&(o.length||!s.length)||(i=e,e=t,t=this,o=Te(e,us(e)));var r=!($i(i)&&"chain"in i&&!i.chain),a=Gi(t);return n(o,(function(n){var i=e[n];t[n]=i,a&&(t.prototype[n]=function(){var e=this.__chain__;if(r||e){var n=t(this.__wrapped__);return(n.__actions__=vn(this.__actions__)).push({func:i,args:arguments,thisArg:t}),n.__chain__=e,n}return i.apply(t,u([this.value()],arguments))})})),t}function Ds(){}function vs(t){return ui(t)?T(mi(t)):function(t){return function(e){return De(e,t)}}(t)}function Ss(){return[]}function ws(){return!1}var bs=(Tt=null==Tt?Mt:Jt.defaults(Mt.Object(),Tt,Jt.pick(Mt,Ot))).Array,Ks=Tt.Date,Es=Tt.Error,Os=Tt.Function,As=Tt.Math,xs=Tt.Object,Is=Tt.RegExp,Ps=Tt.String,Cs=Tt.TypeError,Rs=bs.prototype,Bs=xs.prototype,Ms=Tt["__core-js_shared__"],Ws=Os.prototype.toString,Fs=Bs.hasOwnProperty,Ls=0,js=function(){var t=/[^.]+$/.exec(Ms&&Ms.keys&&Ms.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Us=Bs.toString,ks=Ws.call(xs),Ns=Mt._,Hs=Is("^"+Ws.call(Fs).replace(Q,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),zs=Lt?Tt.Buffer:W,Gs=Tt.Symbol,Vs=Tt.Uint8Array,Xs=zs?zs.allocUnsafe:W,$s=P(xs.getPrototypeOf,xs),qs=xs.create,Ys=Bs.propertyIsEnumerable,Js=Rs.splice,Zs=Gs?Gs.isConcatSpreadable:W,Qs=Gs?Gs.iterator:W,to=Gs?Gs.toStringTag:W,eo=function(){try{var t=ii(xs,"defineProperty");return t({},"",{}),t}catch(t){}}(),no=Tt.clearTimeout!==Mt.clearTimeout&&Tt.clearTimeout,io=Ks&&Ks.now!==Mt.Date.now&&Ks.now,so=Tt.setTimeout!==Mt.setTimeout&&Tt.setTimeout,oo=As.ceil,ro=As.floor,ao=xs.getOwnPropertySymbols,lo=zs?zs.isBuffer:W,uo=Tt.isFinite,co=Rs.join,ho=P(xs.keys,xs),po=As.max,fo=As.min,_o=Ks.now,go=Tt.parseInt,yo=As.random,mo=Rs.reverse,To=ii(Tt,"DataView"),Do=ii(Tt,"Map"),vo=ii(Tt,"Promise"),So=ii(Tt,"Set"),wo=ii(Tt,"WeakMap"),bo=ii(xs,"create"),Ko=wo&&new wo,Eo={},Oo=Ti(To),Ao=Ti(Do),xo=Ti(vo),Io=Ti(So),Po=Ti(wo),Co=Gs?Gs.prototype:W,Ro=Co?Co.valueOf:W,Bo=Co?Co.toString:W,Mo=function(){function t(){}return function(e){return $i(e)?qs?qs(e):(t.prototype=e,e=new t,t.prototype=W,e):{}}}();Dt.templateSettings={escape:X,evaluate:$,interpolate:q,variable:"",imports:{_:Dt}},Dt.prototype=wt.prototype,Dt.prototype.constructor=Dt,It.prototype=Mo(wt.prototype),It.prototype.constructor=It,Rt.prototype=Mo(wt.prototype),Rt.prototype.constructor=Rt,Bt.prototype.clear=function(){this.__data__=bo?bo(null):{},this.size=0},Bt.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},Bt.prototype.get=function(t){var e=this.__data__;return bo?"__lodash_hash_undefined__"===(t=e[t])?W:t:Fs.call(e,t)?e[t]:W},Bt.prototype.has=function(t){var e=this.__data__;return bo?e[t]!==W:Fs.call(e,t)},Bt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=bo&&e===W?"__lodash_hash_undefined__":e,this},Wt.prototype.clear=function(){this.__data__=[],this.size=0},Wt.prototype.delete=function(t){var e=this.__data__;return!(0>(t=ie(e,t))||(t==e.length-1?e.pop():Js.call(e,t,1),--this.size,0))},Wt.prototype.get=function(t){var e=this.__data__;return 0>(t=ie(e,t))?W:e[t][1]},Wt.prototype.has=function(t){return-1<ie(this.__data__,t)},Wt.prototype.set=function(t,e){var n=this.__data__,i=ie(n,t);return 0>i?(++this.size,n.push([t,e])):n[i][1]=e,this},Ft.prototype.clear=function(){this.size=0,this.__data__={hash:new Bt,map:new(Do||Wt),string:new Bt}},Ft.prototype.delete=function(t){return t=ei(this,t).delete(t),this.size-=t?1:0,t},Ft.prototype.get=function(t){return ei(this,t).get(t)},Ft.prototype.has=function(t){return ei(this,t).has(t)},Ft.prototype.set=function(t,e){var n=ei(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this},jt.prototype.add=jt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},jt.prototype.has=function(t){return this.__data__.has(t)},Ut.prototype.clear=function(){this.__data__=new Wt,this.size=0},Ut.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},Ut.prototype.get=function(t){return this.__data__.get(t)},Ut.prototype.has=function(t){return this.__data__.has(t)},Ut.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Wt){var i=n.__data__;if(!Do||199>i.length)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Ft(i)}return n.set(t,e),this.size=n.size,this};var Wo=Kn(ye),Fo=Kn(me,!0),Lo=En(),jo=En(!0),Uo=Ko?function(t,e){return Ko.set(t,e),t}:ys,ko=eo?function(t,e){return eo(t,"toString",{configurable:!0,enumerable:!1,value:gs(e),writable:!0})}:ys,No=no||function(t){return Mt.clearTimeout(t)},Ho=So&&1/R(new So([,-0]))[1]==F?function(t){return new So(t)}:Ds,zo=Ko?function(t){return Ko.get(t)}:Ds,Go=ao?function(t){return null==t?[]:(t=xs(t),o(ao(t),(function(e){return Ys.call(t,e)})))}:Ss,Vo=ao?function(t){for(var e=[];t;)u(e,Go(t)),t=$s(t);return e}:Ss,Xo=Se;(To&&"[object DataView]"!=Xo(new To(new ArrayBuffer(1)))||Do&&"[object Map]"!=Xo(new Do)||vo&&"[object Promise]"!=Xo(vo.resolve())||So&&"[object Set]"!=Xo(new So)||wo&&"[object WeakMap]"!=Xo(new wo))&&(Xo=function(t){var e=Se(t);if(t=(t="[object Object]"==e?t.constructor:W)?Ti(t):"")switch(t){case Oo:return"[object DataView]";case Ao:return"[object Map]";case xo:return"[object Promise]";case Io:return"[object Set]";case Po:return"[object WeakMap]"}return e});var $o=Ms?Gi:ws,qo=gi(Uo),Yo=so||function(t,e){return Mt.setTimeout(t,e)},Jo=gi(ko),Zo=function(t){var e=(t=ji(t,(function(t){return 500===e.size&&e.clear(),t}))).cache;return t}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Z,(function(t,n,i,s){e.push(i?s.replace(lt,"$1"):n||t)})),e})),Qo=Ve((function(t,e){return Hi(t)?pe(t,ge(e,1,Hi,!0)):[]})),tr=Ve((function(t,e){var n=Ei(e);return Hi(n)&&(n=W),Hi(t)?pe(t,ge(e,1,Hi,!0),ti(n,2)):[]})),er=Ve((function(t,e){var n=Ei(e);return Hi(n)&&(n=W),Hi(t)?pe(t,ge(e,1,Hi,!0),W,n):[]})),nr=Ve((function(t){var e=l(t,hn);return e.length&&e[0]===t[0]?Ee(e):[]})),ir=Ve((function(t){var e=Ei(t),n=l(t,hn);return e===Ei(n)?e=W:n.pop(),n.length&&n[0]===t[0]?Ee(n,ti(e,2)):[]})),sr=Ve((function(t){var e=Ei(t),n=l(t,hn);return(e="function"==typeof e?e:W)&&n.pop(),n.length&&n[0]===t[0]?Ee(n,W,e):[]})),or=Ve(Oi),rr=qn((function(t,e){var n=null==t?0:t.length,i=ae(t,e);return He(t,l(e,(function(t){return ai(t,n)?+t:t})).sort(mn)),i})),ar=Ve((function(t){return on(ge(t,1,Hi,!0))})),lr=Ve((function(t){var e=Ei(t);return Hi(e)&&(e=W),on(ge(t,1,Hi,!0),ti(e,2))})),ur=Ve((function(t){var e="function"==typeof(e=Ei(t))?e:W;return on(ge(t,1,Hi,!0),W,e)})),cr=Ve((function(t,e){return Hi(t)?pe(t,e):[]})),hr=Ve((function(t){return un(o(t,Hi))})),pr=Ve((function(t){var e=Ei(t);return Hi(e)&&(e=W),un(o(t,Hi),ti(e,2))})),dr=Ve((function(t){var e="function"==typeof(e=Ei(t))?e:W;return un(o(t,Hi),W,e)})),fr=Ve(xi),_r=Ve((function(t){var e="function"==typeof(e=1<(e=t.length)?t[e-1]:W)?(t.pop(),e):W;return Ii(t,e)})),gr=qn((function(t){var e=t.length,n=e?t[0]:0,i=this.__wrapped__,s=function(e){return ae(e,t)};return!(1<e||this.__actions__.length)&&i instanceof Rt&&ai(n)?((i=i.slice(n,+n+(e?1:0))).__actions__.push({func:Ci,args:[s],thisArg:W}),new It(i,this.__chain__).thru((function(t){return e&&!t.length&&t.push(W),t}))):this.thru(s)})),yr=wn((function(t,e,n){Fs.call(t,n)?++t[n]:re(t,n,1)})),mr=Pn(Si),Tr=Pn(wi),Dr=wn((function(t,e,n){Fs.call(t,n)?t[n].push(e):re(t,n,[e])})),vr=Ve((function(e,n,i){var s=-1,o="function"==typeof n,r=Ni(e)?bs(e.length):[];return Wo(e,(function(e){r[++s]=o?t(n,e,i):Oe(e,n,i)})),r})),Sr=wn((function(t,e,n){re(t,n,e)})),wr=wn((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]})),br=Ve((function(t,e){if(null==t)return[];var n=e.length;return 1<n&&li(t,e[0],e[1])?e=[]:2<n&&li(e[0],e[1],e[2])&&(e=[e[0]]),Ue(t,ge(e,1),[])})),Kr=io||function(){return Mt.Date.now()},Er=Ve((function(t,e,n){var i=1;if(n.length){var s=C(n,Qn(Er));i=32|i}return zn(t,i,e,n,s)})),Or=Ve((function(t,e,n){var i=3;if(n.length){var s=C(n,Qn(Or));i=32|i}return zn(e,i,t,n,s)})),Ar=Ve((function(t,e){return he(t,1,e)})),xr=Ve((function(t,e,n){return he(t,ss(e)||0,n)}));ji.Cache=Ft;var Ir=Ve((function(e,n){var i=(n=1==n.length&&Fr(n[0])?l(n[0],b(ti())):l(ge(n,1),b(ti()))).length;return Ve((function(s){for(var o=-1,r=fo(s.length,i);++o<r;)s[o]=n[o].call(this,s[o]);return t(e,this,s)}))})),Pr=Ve((function(t,e){return zn(t,32,W,e,C(e,Qn(Pr)))})),Cr=Ve((function(t,e){return zn(t,64,W,e,C(e,Qn(Cr)))})),Rr=qn((function(t,e){return zn(t,256,W,W,W,e)})),Br=Un(we),Mr=Un((function(t,e){return t>=e})),Wr=Ae(function(){return arguments}())?Ae:function(t){return qi(t)&&Fs.call(t,"callee")&&!Ys.call(t,"callee")},Fr=bs.isArray,Lr=kt?b(kt):function(t){return qi(t)&&"[object ArrayBuffer]"==Se(t)},jr=lo||ws,Ur=Nt?b(Nt):function(t){return qi(t)&&"[object Date]"==Se(t)},kr=Ht?b(Ht):function(t){return qi(t)&&"[object Map]"==Xo(t)},Nr=zt?b(zt):function(t){return qi(t)&&"[object RegExp]"==Se(t)},Hr=Gt?b(Gt):function(t){return qi(t)&&"[object Set]"==Xo(t)},zr=Vt?b(Vt):function(t){return qi(t)&&Xi(t.length)&&!!At[Se(t)]},Gr=Un(Be),Vr=Un((function(t,e){return t<=e})),Xr=bn((function(t,e){if(hi(e)||Ni(e))Sn(e,us(e),t);else for(var n in e)Fs.call(e,n)&&ne(t,n,e[n])})),$r=bn((function(t,e){Sn(e,cs(e),t)})),qr=bn((function(t,e,n,i){Sn(e,cs(e),t,i)})),Yr=bn((function(t,e,n,i){Sn(e,us(e),t,i)})),Jr=qn(ae),Zr=Ve((function(t,e){t=xs(t);var n=-1,i=e.length;for((s=2<i?e[2]:W)&&li(e[0],e[1],s)&&(i=1);++n<i;)for(var s,o=cs(s=e[n]),r=-1,a=o.length;++r<a;){var l=o[r],u=t[l];(u===W||ki(u,Bs[l])&&!Fs.call(t,l))&&(t[l]=s[l])}return t})),Qr=Ve((function(e){return e.push(W,Vn),t(sa,W,e)})),ta=Bn((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Us.call(e)),t[e]=n}),gs(ys)),ea=Bn((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Us.call(e)),Fs.call(t,e)?t[e].push(n):t[e]=[n]}),ti),na=Ve(Oe),ia=bn((function(t,e,n){Le(t,e,n)})),sa=bn((function(t,e,n,i){Le(t,e,n,i)})),oa=qn((function(t,e){var n={};if(null==t)return n;var i=!1;e=l(e,(function(e){return e=dn(e,t),i||(i=1<e.length),e})),Sn(t,Jn(t),n),i&&(n=ue(n,7,Xn));for(var s=e.length;s--;)rn(n,e[s]);return n})),ra=qn((function(t,e){return null==t?{}:function(t,e){return ke(t,e,(function(e,n){return ls(t,n)}))}(t,e)})),aa=Hn(us),la=Hn(cs),ua=An((function(t,e,n){return e=e.toLowerCase(),t+(n?ds(e):e)})),ca=An((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),ha=An((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),pa=On("toLowerCase"),da=An((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()})),fa=An((function(t,e,n){return t+(n?" ":"")+ga(e)})),_a=An((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),ga=On("toUpperCase"),ya=Ve((function(e,n){try{return t(e,W,n)}catch(t){return zi(t)?t:new Es(t)}})),ma=qn((function(t,e){return n(e,(function(e){e=mi(e),re(t,e,Er(t[e],t))})),t})),Ta=Cn(),Da=Cn(!0),va=Ve((function(t,e){return function(n){return Oe(n,t,e)}})),Sa=Ve((function(t,e){return function(n){return Oe(t,n,e)}})),wa=Wn(l),ba=Wn(s),Ka=Wn(p),Ea=jn(),Oa=jn(!0),Aa=Mn((function(t,e){return t+e}),0),xa=Nn("ceil"),Ia=Mn((function(t,e){return t/e}),1),Pa=Nn("floor"),Ca=Mn((function(t,e){return t*e}),1),Ra=Nn("round"),Ba=Mn((function(t,e){return t-e}),0);return Dt.after=function(t,e){if("function"!=typeof e)throw new Cs("Expected a function");return t=ns(t),function(){if(1>--t)return e.apply(this,arguments)}},Dt.ary=Wi,Dt.assign=Xr,Dt.assignIn=$r,Dt.assignInWith=qr,Dt.assignWith=Yr,Dt.at=Jr,Dt.before=Fi,Dt.bind=Er,Dt.bindAll=ma,Dt.bindKey=Or,Dt.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Fr(t)?t:[t]},Dt.chain=Pi,Dt.chunk=function(t,e,n){if(e=(n?li(t,e,n):e===W)?1:po(ns(e),0),!(n=null==t?0:t.length)||1>e)return[];for(var i=0,s=0,o=bs(oo(n/e));i<n;)o[s++]=Je(t,i,i+=e);return o},Dt.compact=function(t){for(var e=-1,n=null==t?0:t.length,i=0,s=[];++e<n;){var o=t[e];o&&(s[i++]=o)}return s},Dt.concat=function(){var t=arguments.length;if(!t)return[];for(var e=bs(t-1),n=arguments[0];t--;)e[t-1]=arguments[t];return u(Fr(n)?vn(n):[n],ge(e,1))},Dt.cond=function(e){var n=null==e?0:e.length,i=ti();return e=n?l(e,(function(t){if("function"!=typeof t[1])throw new Cs("Expected a function");return[i(t[0]),t[1]]})):[],Ve((function(i){for(var s=-1;++s<n;){var o=e[s];if(t(o[0],this,i))return t(o[1],this,i)}}))},Dt.conforms=function(t){return function(t){var e=us(t);return function(n){return ce(n,t,e)}}(ue(t,1))},Dt.constant=gs,Dt.countBy=yr,Dt.create=function(t,e){var n=Mo(t);return null==e?n:oe(n,e)},Dt.curry=function t(e,n,i){return(e=zn(e,8,W,W,W,W,W,n=i?W:n)).placeholder=t.placeholder,e},Dt.curryRight=function t(e,n,i){return(e=zn(e,16,W,W,W,W,W,n=i?W:n)).placeholder=t.placeholder,e},Dt.debounce=Li,Dt.defaults=Zr,Dt.defaultsDeep=Qr,Dt.defer=Ar,Dt.delay=xr,Dt.difference=Qo,Dt.differenceBy=tr,Dt.differenceWith=er,Dt.drop=function(t,e,n){var i=null==t?0:t.length;return i?Je(t,0>(e=n||e===W?1:ns(e))?0:e,i):[]},Dt.dropRight=function(t,e,n){var i=null==t?0:t.length;return i?Je(t,0,0>(e=i-(e=n||e===W?1:ns(e)))?0:e):[]},Dt.dropRightWhile=function(t,e){return t&&t.length?an(t,ti(e,3),!0,!0):[]},Dt.dropWhile=function(t,e){return t&&t.length?an(t,ti(e,3),!0):[]},Dt.fill=function(t,e,n,i){var s=null==t?0:t.length;if(!s)return[];for(n&&"number"!=typeof n&&li(t,e,n)&&(n=0,i=s),s=t.length,0>(n=ns(n))&&(n=-n>s?0:s+n),0>(i=i===W||i>s?s:ns(i))&&(i+=s),i=n>i?0:is(i);n<i;)t[n++]=e;return t},Dt.filter=function(t,e){return(Fr(t)?o:_e)(t,ti(e,3))},Dt.flatMap=function(t,e){return ge(Mi(t,e),1)},Dt.flatMapDeep=function(t,e){return ge(Mi(t,e),F)},Dt.flatMapDepth=function(t,e,n){return n=n===W?1:ns(n),ge(Mi(t,e),n)},Dt.flatten=bi,Dt.flattenDeep=function(t){return null!=t&&t.length?ge(t,F):[]},Dt.flattenDepth=function(t,e){return null!=t&&t.length?ge(t,e=e===W?1:ns(e)):[]},Dt.flip=function(t){return zn(t,512)},Dt.flow=Ta,Dt.flowRight=Da,Dt.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,i={};++e<n;){var s=t[e];i[s[0]]=s[1]}return i},Dt.functions=function(t){return null==t?[]:Te(t,us(t))},Dt.functionsIn=function(t){return null==t?[]:Te(t,cs(t))},Dt.groupBy=Dr,Dt.initial=function(t){return null!=t&&t.length?Je(t,0,-1):[]},Dt.intersection=nr,Dt.intersectionBy=ir,Dt.intersectionWith=sr,Dt.invert=ta,Dt.invertBy=ea,Dt.invokeMap=vr,Dt.iteratee=ms,Dt.keyBy=Sr,Dt.keys=us,Dt.keysIn=cs,Dt.map=Mi,Dt.mapKeys=function(t,e){var n={};return e=ti(e,3),ye(t,(function(t,i,s){re(n,e(t,i,s),t)})),n},Dt.mapValues=function(t,e){var n={};return e=ti(e,3),ye(t,(function(t,i,s){re(n,i,e(t,i,s))})),n},Dt.matches=function(t){return We(ue(t,1))},Dt.matchesProperty=function(t,e){return Fe(t,ue(e,1))},Dt.memoize=ji,Dt.merge=ia,Dt.mergeWith=sa,Dt.method=va,Dt.methodOf=Sa,Dt.mixin=Ts,Dt.negate=Ui,Dt.nthArg=function(t){return t=ns(t),Ve((function(e){return je(e,t)}))},Dt.omit=oa,Dt.omitBy=function(t,e){return hs(t,Ui(ti(e)))},Dt.once=function(t){return Fi(2,t)},Dt.orderBy=function(t,e,n,i){return null==t?[]:(Fr(e)||(e=null==e?[]:[e]),Fr(n=i?W:n)||(n=null==n?[]:[n]),Ue(t,e,n))},Dt.over=wa,Dt.overArgs=Ir,Dt.overEvery=ba,Dt.overSome=Ka,Dt.partial=Pr,Dt.partialRight=Cr,Dt.partition=wr,Dt.pick=ra,Dt.pickBy=hs,Dt.property=vs,Dt.propertyOf=function(t){return function(e){return null==t?W:De(t,e)}},Dt.pull=or,Dt.pullAll=Oi,Dt.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?Ne(t,e,ti(n,2)):t},Dt.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?Ne(t,e,W,n):t},Dt.pullAt=rr,Dt.range=Ea,Dt.rangeRight=Oa,Dt.rearg=Rr,Dt.reject=function(t,e){return(Fr(t)?o:_e)(t,Ui(ti(e,3)))},Dt.remove=function(t,e){var n=[];if(!t||!t.length)return n;var i=-1,s=[],o=t.length;for(e=ti(e,3);++i<o;){var r=t[i];e(r,i,t)&&(n.push(r),s.push(i))}return He(t,s),n},Dt.rest=function(t,e){if("function"!=typeof t)throw new Cs("Expected a function");return Ve(t,e=e===W?e:ns(e))},Dt.reverse=Ai,Dt.sampleSize=function(t,e,n){return e=(n?li(t,e,n):e===W)?1:ns(e),(Fr(t)?Qt:$e)(t,e)},Dt.set=function(t,e,n){return null==t?t:qe(t,e,n)},Dt.setWith=function(t,e,n,i){return i="function"==typeof i?i:W,null==t?t:qe(t,e,n,i)},Dt.shuffle=function(t){return(Fr(t)?te:Ye)(t)},Dt.slice=function(t,e,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&li(t,e,n)?(e=0,n=i):(e=null==e?0:ns(e),n=n===W?i:ns(n)),Je(t,e,n)):[]},Dt.sortBy=br,Dt.sortedUniq=function(t){return t&&t.length?en(t):[]},Dt.sortedUniqBy=function(t,e){return t&&t.length?en(t,ti(e,2)):[]},Dt.split=function(t,e,n){return n&&"number"!=typeof n&&li(t,e,n)&&(e=n=W),(n=n===W?4294967295:n>>>0)?(t=rs(t))&&("string"==typeof e||null!=e&&!Nr(e))&&(!(e=sn(e))&&Kt.test(t))?fn(M(t),0,n):t.split(e,n):[]},Dt.spread=function(e,n){if("function"!=typeof e)throw new Cs("Expected a function");return n=null==n?0:po(ns(n),0),Ve((function(i){var s=i[n];return i=fn(i,0,n),s&&u(i,s),t(e,this,i)}))},Dt.tail=function(t){var e=null==t?0:t.length;return e?Je(t,1,e):[]},Dt.take=function(t,e,n){return t&&t.length?Je(t,0,0>(e=n||e===W?1:ns(e))?0:e):[]},Dt.takeRight=function(t,e,n){var i=null==t?0:t.length;return i?Je(t,0>(e=i-(e=n||e===W?1:ns(e)))?0:e,i):[]},Dt.takeRightWhile=function(t,e){return t&&t.length?an(t,ti(e,3),!1,!0):[]},Dt.takeWhile=function(t,e){return t&&t.length?an(t,ti(e,3)):[]},Dt.tap=function(t,e){return e(t),t},Dt.throttle=function(t,e,n){var i=!0,s=!0;if("function"!=typeof t)throw new Cs("Expected a function");return $i(n)&&(i="leading"in n?!!n.leading:i,s="trailing"in n?!!n.trailing:s),Li(t,e,{leading:i,maxWait:e,trailing:s})},Dt.thru=Ci,Dt.toArray=ts,Dt.toPairs=aa,Dt.toPairsIn=la,Dt.toPath=function(t){return Fr(t)?l(t,mi):Qi(t)?[t]:vn(Zo(rs(t)))},Dt.toPlainObject=os,Dt.transform=function(t,e,i){var s=Fr(t),o=s||jr(t)||zr(t);if(e=ti(e,4),null==i){var r=t&&t.constructor;i=o?s?new r:[]:$i(t)&&Gi(r)?Mo($s(t)):{}}return(o?n:ye)(t,(function(t,n,s){return e(i,t,n,s)})),i},Dt.unary=function(t){return Wi(t,1)},Dt.union=ar,Dt.unionBy=lr,Dt.unionWith=ur,Dt.uniq=function(t){return t&&t.length?on(t):[]},Dt.uniqBy=function(t,e){return t&&t.length?on(t,ti(e,2)):[]},Dt.uniqWith=function(t,e){return e="function"==typeof e?e:W,t&&t.length?on(t,W,e):[]},Dt.unset=function(t,e){return null==t||rn(t,e)},Dt.unzip=xi,Dt.unzipWith=Ii,Dt.update=function(t,e,n){return null!=t&&(t=qe(t,e,(n=pn(n))(De(t,e)),void 0)),t},Dt.updateWith=function(t,e,n,i){return i="function"==typeof i?i:W,null!=t&&(t=qe(t,e,(n=pn(n))(De(t,e)),i)),t},Dt.values=ps,Dt.valuesIn=function(t){return null==t?[]:K(t,cs(t))},Dt.without=cr,Dt.words=_s,Dt.wrap=function(t,e){return Pr(pn(e),t)},Dt.xor=hr,Dt.xorBy=pr,Dt.xorWith=dr,Dt.zip=fr,Dt.zipObject=function(t,e){return cn(t||[],e||[],ne)},Dt.zipObjectDeep=function(t,e){return cn(t||[],e||[],qe)},Dt.zipWith=_r,Dt.entries=aa,Dt.entriesIn=la,Dt.extend=$r,Dt.extendWith=qr,Ts(Dt,Dt),Dt.add=Aa,Dt.attempt=ya,Dt.camelCase=ua,Dt.capitalize=ds,Dt.ceil=xa,Dt.clamp=function(t,e,n){return n===W&&(n=e,e=W),n!==W&&(n=(n=ss(n))==n?n:0),e!==W&&(e=(e=ss(e))==e?e:0),le(ss(t),e,n)},Dt.clone=function(t){return ue(t,4)},Dt.cloneDeep=function(t){return ue(t,5)},Dt.cloneDeepWith=function(t,e){return ue(t,5,e="function"==typeof e?e:W)},Dt.cloneWith=function(t,e){return ue(t,4,e="function"==typeof e?e:W)},Dt.conformsTo=function(t,e){return null==e||ce(t,e,us(e))},Dt.deburr=fs,Dt.defaultTo=function(t,e){return null==t||t!=t?e:t},Dt.divide=Ia,Dt.endsWith=function(t,e,n){t=rs(t),e=sn(e);var i=t.length;i=n=n===W?i:le(ns(n),0,i);return 0<=(n-=e.length)&&t.slice(n,i)==e},Dt.eq=ki,Dt.escape=function(t){return(t=rs(t))&&V.test(t)?t.replace(z,qt):t},Dt.escapeRegExp=function(t){return(t=rs(t))&&tt.test(t)?t.replace(Q,"\\$&"):t},Dt.every=function(t,e,n){var i=Fr(t)?s:de;return n&&li(t,e,n)&&(e=W),i(t,ti(e,3))},Dt.find=mr,Dt.findIndex=Si,Dt.findKey=function(t,e){return d(t,ti(e,3),ye)},Dt.findLast=Tr,Dt.findLastIndex=wi,Dt.findLastKey=function(t,e){return d(t,ti(e,3),me)},Dt.floor=Pa,Dt.forEach=Ri,Dt.forEachRight=Bi,Dt.forIn=function(t,e){return null==t?t:Lo(t,ti(e,3),cs)},Dt.forInRight=function(t,e){return null==t?t:jo(t,ti(e,3),cs)},Dt.forOwn=function(t,e){return t&&ye(t,ti(e,3))},Dt.forOwnRight=function(t,e){return t&&me(t,ti(e,3))},Dt.get=as,Dt.gt=Br,Dt.gte=Mr,Dt.has=function(t,e){return null!=t&&si(t,e,be)},Dt.hasIn=ls,Dt.head=Ki,Dt.identity=ys,Dt.includes=function(t,e,n,i){return t=Ni(t)?t:ps(t),n=n&&!i?ns(n):0,i=t.length,0>n&&(n=po(i+n,0)),Zi(t)?n<=i&&-1<t.indexOf(e,n):!!i&&-1<_(t,e,n)},Dt.indexOf=function(t,e,n){var i=null==t?0:t.length;return i?(0>(n=null==n?0:ns(n))&&(n=po(i+n,0)),_(t,e,n)):-1},Dt.inRange=function(t,e,n){return e=es(e),n===W?(n=e,e=0):n=es(n),(t=ss(t))>=fo(e,n)&&t<po(e,n)},Dt.invoke=na,Dt.isArguments=Wr,Dt.isArray=Fr,Dt.isArrayBuffer=Lr,Dt.isArrayLike=Ni,Dt.isArrayLikeObject=Hi,Dt.isBoolean=function(t){return!0===t||!1===t||qi(t)&&"[object Boolean]"==Se(t)},Dt.isBuffer=jr,Dt.isDate=Ur,Dt.isElement=function(t){return qi(t)&&1===t.nodeType&&!Ji(t)},Dt.isEmpty=function(t){if(null==t)return!0;if(Ni(t)&&(Fr(t)||"string"==typeof t||"function"==typeof t.splice||jr(t)||zr(t)||Wr(t)))return!t.length;var e=Xo(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(hi(t))return!Re(t).length;for(var n in t)if(Fs.call(t,n))return!1;return!0},Dt.isEqual=function(t,e){return xe(t,e)},Dt.isEqualWith=function(t,e,n){var i=(n="function"==typeof n?n:W)?n(t,e):W;return i===W?xe(t,e,W,n):!!i},Dt.isError=zi,Dt.isFinite=function(t){return"number"==typeof t&&uo(t)},Dt.isFunction=Gi,Dt.isInteger=Vi,Dt.isLength=Xi,Dt.isMap=kr,Dt.isMatch=function(t,e){return t===e||Ie(t,e,ni(e))},Dt.isMatchWith=function(t,e,n){return n="function"==typeof n?n:W,Ie(t,e,ni(e),n)},Dt.isNaN=function(t){return Yi(t)&&t!=+t},Dt.isNative=function(t){if($o(t))throw new Es("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Pe(t)},Dt.isNil=function(t){return null==t},Dt.isNull=function(t){return null===t},Dt.isNumber=Yi,Dt.isObject=$i,Dt.isObjectLike=qi,Dt.isPlainObject=Ji,Dt.isRegExp=Nr,Dt.isSafeInteger=function(t){return Vi(t)&&-9007199254740991<=t&&9007199254740991>=t},Dt.isSet=Hr,Dt.isString=Zi,Dt.isSymbol=Qi,Dt.isTypedArray=zr,Dt.isUndefined=function(t){return t===W},Dt.isWeakMap=function(t){return qi(t)&&"[object WeakMap]"==Xo(t)},Dt.isWeakSet=function(t){return qi(t)&&"[object WeakSet]"==Se(t)},Dt.join=function(t,e){return null==t?"":co.call(t,e)},Dt.kebabCase=ca,Dt.last=Ei,Dt.lastIndexOf=function(t,e,n){var i=null==t?0:t.length;if(!i)return-1;var s=i;if(n!==W&&(s=0>(s=ns(n))?po(i+s,0):fo(s,i-1)),e==e)t:{for(n=s+1;n--;)if(t[n]===e){t=n;break t}t=n}else t=f(t,y,s,!0);return t},Dt.lowerCase=ha,Dt.lowerFirst=pa,Dt.lt=Gr,Dt.lte=Vr,Dt.max=function(t){return t&&t.length?fe(t,ys,we):W},Dt.maxBy=function(t,e){return t&&t.length?fe(t,ti(e,2),we):W},Dt.mean=function(t){return m(t,ys)},Dt.meanBy=function(t,e){return m(t,ti(e,2))},Dt.min=function(t){return t&&t.length?fe(t,ys,Be):W},Dt.minBy=function(t,e){return t&&t.length?fe(t,ti(e,2),Be):W},Dt.stubArray=Ss,Dt.stubFalse=ws,Dt.stubObject=function(){return{}},Dt.stubString=function(){return""},Dt.stubTrue=function(){return!0},Dt.multiply=Ca,Dt.nth=function(t,e){return t&&t.length?je(t,ns(e)):W},Dt.noConflict=function(){return Mt._===this&&(Mt._=Ns),this},Dt.noop=Ds,Dt.now=Kr,Dt.pad=function(t,e,n){t=rs(t);var i=(e=ns(e))?B(t):0;return!e||i>=e?t:Fn(ro(e=(e-i)/2),n)+t+Fn(oo(e),n)},Dt.padEnd=function(t,e,n){t=rs(t);var i=(e=ns(e))?B(t):0;return e&&i<e?t+Fn(e-i,n):t},Dt.padStart=function(t,e,n){t=rs(t);var i=(e=ns(e))?B(t):0;return e&&i<e?Fn(e-i,n)+t:t},Dt.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),go(rs(t).replace(nt,""),e||0)},Dt.random=function(t,e,n){if(n&&"boolean"!=typeof n&&li(t,e,n)&&(e=n=W),n===W&&("boolean"==typeof e?(n=e,e=W):"boolean"==typeof t&&(n=t,t=W)),t===W&&e===W?(t=0,e=1):(t=es(t),e===W?(e=t,t=0):e=es(e)),t>e){var i=t;t=e,e=i}return n||t%1||e%1?(n=yo(),fo(t+n*(e-t+Pt("1e-"+((n+"").length-1))),e)):ze(t,e)},Dt.reduce=function(t,e,n){var i=Fr(t)?c:v,s=3>arguments.length;return i(t,ti(e,4),n,s,Wo)},Dt.reduceRight=function(t,e,n){var i=Fr(t)?h:v,s=3>arguments.length;return i(t,ti(e,4),n,s,Fo)},Dt.repeat=function(t,e,n){return e=(n?li(t,e,n):e===W)?1:ns(e),Ge(rs(t),e)},Dt.replace=function(){var t=arguments,e=rs(t[0]);return 3>t.length?e:e.replace(t[1],t[2])},Dt.result=function(t,e,n){var i=-1,s=(e=dn(e,t)).length;for(s||(s=1,t=W);++i<s;){var o=null==t?W:t[mi(e[i])];o===W&&(i=s,o=n),t=Gi(o)?o.call(t):o}return t},Dt.round=Ra,Dt.runInContext=D,Dt.sample=function(t){return(Fr(t)?Zt:Xe)(t)},Dt.size=function(t){if(null==t)return 0;if(Ni(t))return Zi(t)?B(t):t.length;var e=Xo(t);return"[object Map]"==e||"[object Set]"==e?t.size:Re(t).length},Dt.snakeCase=da,Dt.some=function(t,e,n){var i=Fr(t)?p:Ze;return n&&li(t,e,n)&&(e=W),i(t,ti(e,3))},Dt.sortedIndex=function(t,e){return Qe(t,e)},Dt.sortedIndexBy=function(t,e,n){return tn(t,e,ti(n,2))},Dt.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var i=Qe(t,e);if(i<n&&ki(t[i],e))return i}return-1},Dt.sortedLastIndex=function(t,e){return Qe(t,e,!0)},Dt.sortedLastIndexBy=function(t,e,n){return tn(t,e,ti(n,2),!0)},Dt.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=Qe(t,e,!0)-1;if(ki(t[n],e))return n}return-1},Dt.startCase=fa,Dt.startsWith=function(t,e,n){return t=rs(t),n=null==n?0:le(ns(n),0,t.length),e=sn(e),t.slice(n,n+e.length)==e},Dt.subtract=Ba,Dt.sum=function(t){return t&&t.length?S(t,ys):0},Dt.sumBy=function(t,e){return t&&t.length?S(t,ti(e,2)):0},Dt.template=function(t,e,n){var i=Dt.templateSettings;n&&li(t,e,n)&&(e=W),t=rs(t),e=qr({},e,i,Gn);var s,o,r=us(n=qr({},e.imports,i.imports,Gn)),a=K(n,r),l=0;n=e.interpolate||yt;var u="__p+='";n=Is((e.escape||yt).source+"|"+n.source+"|"+(n===q?ut:yt).source+"|"+(e.evaluate||yt).source+"|$","g");var c="sourceURL"in e?"//# sourceURL="+e.sourceURL+"\n":"";if(t.replace(n,(function(e,n,i,r,a,c){return i||(i=r),u+=t.slice(l,c).replace(mt,x),n&&(s=!0,u+="'+__e("+n+")+'"),a&&(o=!0,u+="';"+a+";\n__p+='"),i&&(u+="'+((__t=("+i+"))==null?'':__t)+'"),l=c+e.length,e})),u+="';",(e=e.variable)||(u="with(obj){"+u+"}"),u=(o?u.replace(U,""):u).replace(k,"$1").replace(N,"$1;"),u="function("+(e||"obj")+"){"+(e?"":"obj||(obj={});")+"var __t,__p=''"+(s?",__e=_.escape":"")+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+u+"return __p}",(e=ya((function(){return Os(r,c+"return "+u).apply(W,a)}))).source=u,zi(e))throw e;return e},Dt.times=function(t,e){if(1>(t=ns(t))||9007199254740991<t)return[];var n=4294967295,i=fo(t,4294967295);for(t-=4294967295,i=w(i,e=ti(e));++n<t;)e(n);return i},Dt.toFinite=es,Dt.toInteger=ns,Dt.toLength=is,Dt.toLower=function(t){return rs(t).toLowerCase()},Dt.toNumber=ss,Dt.toSafeInteger=function(t){return t?le(ns(t),-9007199254740991,9007199254740991):0===t?t:0},Dt.toString=rs,Dt.toUpper=function(t){return rs(t).toUpperCase()},Dt.trim=function(t,e,n){return(t=rs(t))&&(n||e===W)?t.replace(et,""):t&&(e=sn(e))?fn(t=M(t),e=O(t,n=M(e)),n=A(t,n)+1).join(""):t},Dt.trimEnd=function(t,e,n){return(t=rs(t))&&(n||e===W)?t.replace(it,""):t&&(e=sn(e))?fn(t=M(t),0,e=A(t,M(e))+1).join(""):t},Dt.trimStart=function(t,e,n){return(t=rs(t))&&(n||e===W)?t.replace(nt,""):t&&(e=sn(e))?fn(t=M(t),e=O(t,M(e))).join(""):t},Dt.truncate=function(t,e){var n=30,i="...";if($i(e)){var s="separator"in e?e.separator:s;n="length"in e?ns(e.length):n,i="omission"in e?sn(e.omission):i}var o=(t=rs(t)).length;if(Kt.test(t)){var r=M(t);o=r.length}if(n>=o)return t;if(1>(o=n-B(i)))return i;if(n=r?fn(r,0,o).join(""):t.slice(0,o),s===W)return n+i;if(r&&(o+=n.length-o),Nr(s)){if(t.slice(o).search(s)){var a=n;for(s.global||(s=Is(s.source,rs(ct.exec(s))+"g")),s.lastIndex=0;r=s.exec(a);)var l=r.index;n=n.slice(0,l===W?o:l)}}else t.indexOf(sn(s),o)!=o&&(-1<(s=n.lastIndexOf(s))&&(n=n.slice(0,s)));return n+i},Dt.unescape=function(t){return(t=rs(t))&&G.test(t)?t.replace(H,Yt):t},Dt.uniqueId=function(t){var e=++Ls;return rs(t)+e},Dt.upperCase=_a,Dt.upperFirst=ga,Dt.each=Ri,Dt.eachRight=Bi,Dt.first=Ki,Ts(Dt,function(){var t={};return ye(Dt,(function(e,n){Fs.call(Dt.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),Dt.VERSION="4.17.11",n("bind bindKey curry curryRight partial partialRight".split(" "),(function(t){Dt[t].placeholder=Dt})),n(["drop","take"],(function(t,e){Rt.prototype[t]=function(n){n=n===W?1:po(ns(n),0);var i=this.__filtered__&&!e?new Rt(this):this.clone();return i.__filtered__?i.__takeCount__=fo(n,i.__takeCount__):i.__views__.push({size:fo(n,4294967295),type:t+(0>i.__dir__?"Right":"")}),i},Rt.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),n(["filter","map","takeWhile"],(function(t,e){var n=e+1,i=1==n||3==n;Rt.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:ti(t,3),type:n}),e.__filtered__=e.__filtered__||i,e}})),n(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Rt.prototype[t]=function(){return this[n](1).value()[0]}})),n(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Rt.prototype[t]=function(){return this.__filtered__?new Rt(this):this[n](1)}})),Rt.prototype.compact=function(){return this.filter(ys)},Rt.prototype.find=function(t){return this.filter(t).head()},Rt.prototype.findLast=function(t){return this.reverse().find(t)},Rt.prototype.invokeMap=Ve((function(t,e){return"function"==typeof t?new Rt(this):this.map((function(n){return Oe(n,t,e)}))})),Rt.prototype.reject=function(t){return this.filter(Ui(ti(t)))},Rt.prototype.slice=function(t,e){t=ns(t);var n=this;return n.__filtered__&&(0<t||0>e)?new Rt(n):(0>t?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==W&&(n=0>(e=ns(e))?n.dropRight(-e):n.take(e-t)),n)},Rt.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Rt.prototype.toArray=function(){return this.take(4294967295)},ye(Rt.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),i=/^(?:head|last)$/.test(e),s=Dt[i?"take"+("last"==e?"Right":""):e],o=i||/^find/.test(e);s&&(Dt.prototype[e]=function(){var e=this.__wrapped__,r=i?[1]:arguments,a=e instanceof Rt,l=r[0],c=a||Fr(e),h=function(t){return t=s.apply(Dt,u([t],r)),i&&p?t[0]:t};c&&n&&"function"==typeof l&&1!=l.length&&(a=c=!1);var p=this.__chain__,d=!!this.__actions__.length;l=o&&!p,a=a&&!d;return!o&&c?(e=a?e:new Rt(this),(e=t.apply(e,r)).__actions__.push({func:Ci,args:[h],thisArg:W}),new It(e,p)):l&&a?t.apply(this,r):(e=this.thru(h),l?i?e.value()[0]:e.value():e)})})),n("pop push shift sort splice unshift".split(" "),(function(t){var e=Rs[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|shift)$/.test(t);Dt.prototype[t]=function(){var t=arguments;if(i&&!this.__chain__){var s=this.value();return e.apply(Fr(s)?s:[],t)}return this[n]((function(n){return e.apply(Fr(n)?n:[],t)}))}})),ye(Rt.prototype,(function(t,e){var n=Dt[e];if(n){var i=n.name+"";(Eo[i]||(Eo[i]=[])).push({name:e,func:n})}})),Eo[Rn(W,2).name]=[{name:"wrapper",func:W}],Rt.prototype.clone=function(){var t=new Rt(this.__wrapped__);return t.__actions__=vn(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=vn(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=vn(this.__views__),t},Rt.prototype.reverse=function(){if(this.__filtered__){var t=new Rt(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Rt.prototype.value=function(){var t,e=this.__wrapped__.value(),n=this.__dir__,i=Fr(e),s=0>n,o=i?e.length:0;t=0;for(var r=o,a=this.__views__,l=-1,u=a.length;++l<u;){var c=a[l],h=c.size;switch(c.type){case"drop":t+=h;break;case"dropRight":r-=h;break;case"take":r=fo(r,t+h);break;case"takeRight":t=po(t,r-h)}}if(r=(t={start:t,end:r}).start,t=(a=t.end)-r,r=s?a:r-1,l=(a=this.__iteratees__).length,u=0,c=fo(t,this.__takeCount__),!i||!s&&o==t&&c==t)return ln(e,this.__actions__);i=[];t:for(;t--&&u<c;){for(s=-1,o=e[r+=n];++s<l;){h=(p=a[s]).type;var p=(0,p.iteratee)(o);if(2==h)o=p;else if(!p){if(1==h)continue t;break t}}i[u++]=o}return i},Dt.prototype.at=gr,Dt.prototype.chain=function(){return Pi(this)},Dt.prototype.commit=function(){return new It(this.value(),this.__chain__)},Dt.prototype.next=function(){this.__values__===W&&(this.__values__=ts(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?W:this.__values__[this.__index__++]}},Dt.prototype.plant=function(t){for(var e,n=this;n instanceof wt;){var i=vi(n);i.__index__=0,i.__values__=W,e?s.__wrapped__=i:e=i;var s=i;n=n.__wrapped__}return s.__wrapped__=t,e},Dt.prototype.reverse=function(){var t=this.__wrapped__;return t instanceof Rt?(this.__actions__.length&&(t=new Rt(this)),(t=t.reverse()).__actions__.push({func:Ci,args:[Ai],thisArg:W}),new It(t,this.__chain__)):this.thru(Ai)},Dt.prototype.toJSON=Dt.prototype.valueOf=Dt.prototype.value=function(){return ln(this.__wrapped__,this.__actions__)},Dt.prototype.first=Dt.prototype.head,Qs&&(Dt.prototype[Qs]=function(){return this}),Dt}();Mt._=Jt,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Jt}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}.call(this),window.DKTools={},Object.defineProperties(DKTools,{SITE:{value:"https://dk-plugins.ru"},VERSION:{value:Imported.DKTools}}),DKTools.Utils=class{constructor(){return DKTools.Utils}static initialize(){this.__tileSize(),DKToolsParam.get("Debugging Console","Enabled")&&SceneManager.showDevTools(),DKToolsParam.get("Check Updates","Enabled")&&this._checkUpdates()}static async _checkUpdates(){if(!Utils.isNwjs()||!Utils.isTest())return;let t=[];try{const e={version:DKTools.VERSION,maker:Utils.RPGMAKER_NAME},n=Object.entries(e).map((([t,e])=>`${t}=${e}`)).join("&");if(t=await DKTools.Network.fetchJson(`${DKTools.SITE}/plugins.php?${n}`)||[],0===t.length)return}catch(t){return void console.error("DKTools cannot check updates")}const e=DKToolsParam.get("Check Updates","Show New Plugins");t.forEach((t=>{const n=t.version;if(DKTools.PluginManager.isRegistered(t.name)){if(!DKTools.PluginManager.checkVersion(t.name,n)){const e=DKTools.PluginManager.getVersion(t.name),i=[`Available a new ${t.beta?"beta ":""}version of ${t.name}: ${n}\n`,`Installed: ${e}\n`,"Visit site: "+t.url];t.download_url&&i.push("\nDownload: "+t.download_url),t.download_demo_url&&i.push("\nDownload demo project: "+t.download_demo_url),console.log.apply(console,i)}}else if(e){const e=[`Try the new plugin: ${t.name}\n`,`Description: ${t.description}\n`,`Visit site: ${t.url} \n`];t.download_url&&e.push("\nDownload: "+t.download_url),t.download_demo_url&&e.push("\nDownload demo project: "+t.download_demo_url),console.log.apply(console,e)}}))}static _getErrorLogData(){const t=SceneManager._scene,e={};if(t&&t.constructor.name&&(e.Scene=t.constructor.name,SceneManager.isCurrentScene(Scene_Map))){const t=$gameMap._interpreter;if(t){if(t._mapId>0&&(e["Map ID"]=t._mapId),t._eventId>0){e["Event ID"]=t._eventId;const n=$gameMap.event(t._eventId);n&&(e["Event Page"]=n._pageIndex+1)}if(t._list&&t._list.length>0){let n=t._list[t._index];n&&0===n.code&&t._index>0&&(n=t._list[t._index-1]),n&&n.code>0&&(e["Last Event Command"]=n.code)}t._params&&t._params.length>0&&(e.Params=JSON.stringify(t._params))}}return e}static __hideGrid(){this._gridSprite&&(SceneManager._scene.removeChild(this._gridSprite),this._gridSprite=null)}static isFunction(t){return"function"==typeof t}static isString(t){return!!t&&"string"==typeof t}static async logError(t){if(!t||!Utils.isNwjs())return;const e=DKToolsParam.get("Errors Log")||{},n=Utils.isTest(),i=e.Enabled;if("None"===i||"Only Game"===i&&n||"Only Test"===i&&!n)return;const s=DKTools.IO.fs,o=DKTools.IO.os;if(!s||!o)return;const r=1024*e["File Size"]*1024,a=e.Filename,l=new DKTools.IO.File(a),u=await l.getStatsAsync().then((t=>t.data));if(u&&u.size>r){const t=DKTools.IO.parsePath(a).name,e=new Date,n=String(e.getDate()).padZero(2),i=String(e.getMonth()+1).padZero(2),s=e.getFullYear(),o=String(e.getHours()).padZero(2),r=String(e.getMinutes()).padZero(2),u=String(e.getSeconds()).padZero(2);await l.renameAsync(`${n}.${i}.${s}_${o}.${r}.${u}_${t}`)}const c=await s.openSync(a,"a"),h=this._getErrorLogData();let p="Date: "+(new Date).toString()+o.EOL;_.forEach(h,((t,e)=>{p+=e+": "+t+o.EOL})),t instanceof Object?(p+="Name: "+t.name+o.EOL,p+="Message: "+t.message+o.EOL,void 0!==t.filename&&(p+="Filename: "+t.filename+o.EOL),void 0!==t.lineNumber&&(p+="Line: "+t.lineNumber+o.EOL),void 0!==t.columnNumber&&(p+="Column: "+t.columnNumber+o.EOL),p+="Stack: "+t.stack+o.EOL+o.EOL):p+="Error: "+t+o.EOL+o.EOL,await s.writeSync(c,p),await s.closeSync(c)}static makeScreenshot(){if(!Utils.isNwjs())return;const t=DKToolsParam.get("Screenshots"),e=t.Path,n=t.Type,i=t.Quality,s=SceneManager.snap().canvas.toDataURL("image/"+n,i),o=new RegExp(`^data:image/${n};base64,`),r=s.replace(o,""),a=new Date;let l=t.Filename;l=l.replace(/%year/gi,a.getFullYear()),l=l.replace(/%month/gi,a.getMonth()+1),l=l.replace(/%day/gi,a.getDate()),l=l.replace(/%hours/gi,a.getHours()),l=l.replace(/%minutes/gi,a.getMinutes()),l=l.replace(/%seconds/gi,a.getSeconds());const u=l+"."+n,c=DKTools.IO.normalizePath(e+"/"+u);new DKTools.IO.File(c).save(r,{createDirectory:!0,options:"base64",onSuccess:()=>{console.log("The screenshot is saved with the name: "+u)}})}static __showGrid(){if(!Utils.isTest()||!DKToolsParam.get("Grid","Enabled"))return;const t=DKToolsParam.get("Grid"),e=t["Grid Sizes"]||[64,48,32,16];if(this._gridSprite)return void(this._gridSprite._gridSizeIndex<e.length-1?(this._gridSprite._gridSizeIndex++,this._gridSprite.refreshAll()):this.__hideGrid());let n=null;this._gridSprite=new DKTools.Sprite.Button(Graphics),this._gridSprite._gridSizeIndex=0,this._gridSprite.addEvent({type:"draw-all",onUpdate:()=>{const i=Graphics.boxWidth,s=Graphics.boxHeight,o=t["Grid Color"],r=t["Grid Width"],a=e[this._gridSprite._gridSizeIndex];_.times(Math.ceil(i/a),(t=>{this._gridSprite.drawLine({x1:a*t,y1:0,x2:a*t,y2:s,color:o,lineWidth:r})})),_.times(Math.ceil(s/a),(t=>{this._gridSprite.drawLine({x1:0,y1:a*t,x2:i,y2:a*t,color:o,lineWidth:r})})),n&&this._gridSprite.drawLine({x1:n.x,y1:n.y,x2:TouchInput.x,y2:TouchInput.y,color:n.color,lineWidth:t["Ruler Width"]})}}),this._gridSprite.addEvent({type:"mouse-inside",onUpdate:()=>{const t=TouchInput.x,e=TouchInput.y,n=Graphics.boxWidth,s=Graphics.boxHeight;let o=t+8,r=e+8;o+i.width>n&&(o=t-i.width-8),r+i.height>s&&(r=e-i.height-8),i.move(o,r),i.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-down-middle",onUpdate:()=>{n||(n={x:TouchInput.x,y:TouchInput.y,color:t["Ruler Color"]||ColorManager.randomColor()}),this._gridSprite.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-up-middle",onUpdate:()=>{n=null,this._gridSprite.refreshAll()}}),this._gridSprite.start(!0);const i=new DKTools.Sprite(0,0,220,"2");i.addEvent({type:"draw-all",onUpdate:()=>{if(n){const t={x:TouchInput.x,y:TouchInput.y},e=Math.floor(Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2)));i.drawText(`line: ${e} (${n.x}, ${n.y})`,{y:"0",align:"left"})}i.drawText(`x: ${TouchInput.x}, y: ${TouchInput.y}`,{y:"1",align:"left"})}}),i.start(),this._gridSprite.addChild(i),this._gridSprite.updateMouseInsideEvents(),SceneManager._scene.addChild(this._gridSprite)}static __tileSize(){const t=DKToolsParam.get("Tile Size")||{};t.Enabled&&(Tilemap.TILE_WIDTH=t.Size,Tilemap.TILE_HEIGHT=t.Size)}static throwError(t){setTimeout((()=>{throw t}),0)}static __quickLoad(){if(!Utils.isTest()||!DKToolsParam.get("Quick Load","Enabled"))return;const t=DKToolsParam.get("Quick Load","Savefile ID"),e=SceneManager._scene;t>0?DataManager.loadGame(t)&&(SoundManager.playLoad(),e instanceof Scene_Base&&e.fadeOutAll(),$gameSystem.versionId()!==$dataSystem.versionId&&($gamePlayer.reserveTransfer($gameMap.mapId(),$gamePlayer.x,$gamePlayer.y),$gamePlayer.requestMapReload()),SceneManager.goto(Scene_Map)):e instanceof Scene_Load||SceneManager.push(Scene_Load)}},DKTools.Utils.WebAudio=class{static load(t,e,n){if(!t)return null;if(t instanceof WebAudio)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener);if(!DKTools.Utils.isString(t))return null;const i=AudioManager.createBuffer(t,e);return DKTools.Utils.isFunction(n)&&i.addLoadListener(n),i}static async loadAsync(t,e,n){return new Promise((i=>{const s=this.load(t,e,n);s?s.addLoadListener((()=>i(s))):i(s)}))}static loadBuffers(t,e,n){if(!DKTools.Utils.isFunction(e))return;t=t.map((t=>this.load(t)));const i=[];let s=0;const o=(o,r)=>{e&&(i[o]=r,s++,DKTools.Utils.isFunction(n)&&n(r,i,t),t.length===s&&(e(t),e=null))};t.forEach(((t,e)=>{t instanceof WebAudio?t.addLoadListener((t=>o(e,t))):o(e,t)}))}static async loadBuffersAsync(t){return Promise.all(t.map((t=>this.loadAsync(t))))}},DKTools.Utils.Bitmap=class{static drawLine(t,e,n,i,s,o="white",r=1){const a=t.context;a.save(),a.strokeStyle=o,a.lineWidth=r,a.beginPath(),a.moveTo(e,n),a.lineTo(i,s),a.stroke(),a.restore(),t.baseTexture.update()}static getBase64(t){return t&&t.canvas?t.canvas.toDataURL("image/png"):null}static load(t,e,n){if(!t)return null;if(t instanceof Bitmap)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener);if(!DKTools.Utils.isString(t))return null;const i=DKTools.IO.normalizePath(t+"/",!0),s=ImageManager.loadBitmap(i,e);return DKTools.Utils.isFunction(n)&&s.addLoadListener(n),s}static async loadAsync(t,e,n){return new Promise((i=>{const s=this.load(t,e,n);s?s.addLoadListener((()=>i(s))):i(s)}))}static loadBitmaps(t,e,n){if(!DKTools.Utils.isFunction(e))return;t=t.map((t=>this.load(t)));const i=[];let s=0;const o=(o,r)=>{e&&(i[o]=r,s++,DKTools.Utils.isFunction(n)&&n(r,i,t),t.length===s&&(e(t),e=null))};t.forEach(((t,e)=>{t instanceof Bitmap?t.addLoadListener((t=>o(e,t))):o(e,t)}))}static async loadBitmapsAsync(t){return Promise.all(t.map((t=>this.loadAsync(t))))}},DKTools.IO=class{constructor(){return DKTools.IO}static initialize(){let t="";Utils.isNwjs()&&(this._fs=__webpack_require__(747),this._os=__webpack_require__(87),this._path=__webpack_require__(622),t=this.joinPath(this._path.dirname(process.mainModule.filename),"/")),this._projectPath=t,this._mode=DKToolsParam.get("File System","Mode"),this._stamp={},this._loadStamp()}static absolutePathExists(t){if(Utils.isNwjs())return this._fs.existsSync(t);if(this.mode===DKTools.IO.MODE_NWJS_STAMP&&t.startsWith(this._projectPath)){if(this.isFile(t))return!0;if(this.isDirectory(t))return!0}return!1}static async _createStamp(){if(!Utils.isTest()||!Utils.isNwjs()||this.mode===DKTools.IO.MODE_NWJS)return;const t=DKToolsParam.get("File System","Ignored Directories").map((t=>new DKTools.IO.Directory(t))),e=DKTools.IO.getRootDirectory(),n=new DKTools.IO.File("data/Stamp.json"),i={},s=async e=>{const n=await e.getAllAsync().then((t=>t.data));for(const o of n){const n=await o.getStatsAsync().then((t=>t.data)),r=o.getFullPath().substring(1).split("\\");o.isFile()?_.set(i,r,{__stats__:{...n,type:"file"}}):_.set(i,r,{__stats__:{...n,type:"directory"}}),o.isDirectory()&&(t.some((t=>t.getFullPath()===e.getFullPath()))||await s(o))}};await s(e),await n.saveJsonAsync(i,{compress:!0}),this._stamp=i}static getRootDirectory(){return new DKTools.IO.Directory}static getAbsolutePath(t){const e=this.joinPath(this._projectPath,t||"");return this.normalizePath(e)}static isFile(t){if(Utils.isNwjs()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this._fs.lstatSync(e).isFile()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){t=decodeURIComponent(t);const e=this.normalizePath(t).split("\\");if(_.last(e).includes("."))return"file"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static isDirectory(t){if(Utils.isNwjs()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this._fs.lstatSync(e).isDirectory()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){t=decodeURIComponent(t);const e=this.normalizePath(t).split("\\").filter((t=>!!t));if(!_.last(e).includes("."))return"directory"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static joinPath(){if(Utils.isNwjs())return this._path.join(...arguments);const t=_.filter(arguments,(t=>DKTools.Utils.isString(t)));let e=t.join("\\");return/^[\\\/]{2}[^\\\/]/.test(t[0])||(e=e.replace(/^[\\\/]{2,}/,"\\")),this.normalizePath(e)}static _loadStamp(){if(Utils.isNwjs()||this.mode===DKTools.IO.MODE_NWJS)return;new DKTools.IO.File("data/Stamp.json").loadJson({sync:!0,decompress:!0,onSuccess:t=>{this._stamp=t.data||this._stamp}})}static normalizePath(t,e=!1){if(Utils.isNwjs()){const n=this._path.normalize(t);return e?n.replace(/\\/g,"/"):n}const n=this._statPath(t),i=n.isUnc,s=n.isAbsolute;let o=n.device,r=n.tail;const a=/[\\\/]$/.test(r),l=_.filter(r.split(/[\\\/]+/),(t=>t&&"."!==t)),u=[];for(const t of l)".."===t?u.length>0&&".."!==u[u.length-1]?u.pop():s||u.push(".."):u.push(t);r=u.join("\\"),r||s||(r="."),r&&a&&(r+="\\"),i&&(o="\\\\"+o.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\"));const c=o+(s?"\\":"")+r;return e?c.replace(/\\/g,"/"):c}static parsePath(t){if(Utils.isNwjs())return this._path.parse(t);const e=this._splitPath(t);return{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}}static pathExists(t){return this.absolutePathExists(this.getAbsolutePath(t))}static reverseSlashes(t){return t.replace(/\\/g,"/")}static _statPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),n=e[1]||"",i=!!n&&":"!==n[1];return{device:n,isUnc:i,isAbsolute:i||!!e[2],tail:e[3]}}static _splitPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),n=(e[1]||"")+(e[2]||""),i=e[3]||"",s=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/.exec(i);return[n,s[1],s[2],s[3]]}},Object.defineProperties(DKTools.IO,{fs:{get:function(){return this._fs},configurable:!0},os:{get:function(){return this._os},configurable:!0},path:{get:function(){return this._path},configurable:!0},sep:{get:function(){return Utils.isNwjs()?this._path.sep:"/"},configurable:!0},projectPath:{get:function(){return this._projectPath},configurable:!0},mode:{get:function(){return this._mode},configurable:!0},stamp:{get:function(){return this._stamp},configurable:!0},OK:{value:0},EXPECT_CALLBACK:{value:1},ERROR_NOT_LOCAL_MODE:{value:2},ERROR_PATH_DOES_NOT_EXIST:{value:3},ERROR_CALLBACK_IS_NOT_AVAILABLE:{value:4},ERROR_DIRECTORY_ALREADY_EXISTS:{value:5},ERROR_DIRECTORY_IS_NOT_EMPTY:{value:6},ERROR_OVERWRITING_IS_NOT_AVAILABLE:{value:7},ERROR_OPTIONS_ARE_NOT_AVAILABLE:{value:8},ERROR_DECOMPRESSING_DATA:{value:9},ERROR_PARSING_DATA:{value:10},MODE_NWJS_STAMP:{value:0},MODE_NWJS:{value:1}}),DKTools.IO.Entity=class{constructor(){this.initialize.apply(this,arguments)}get path(){return this._path}get name(){return this._name}get initialExtension(){return this._initialExtension}get extension(){return this._extension}initialize(t=""){const e=DKTools.IO.parsePath(t);this._path=DKTools.IO.normalizePath(e.dir+"/"),this._name=e.name,this._initialExtension=e.ext,this._extension=e.ext}exists(){return DKTools.IO.absolutePathExists(this.getAbsolutePath())}getPath(){return this._path}getName(){return this._name}getExtension(){return this._extension}getFullPath(){return DKTools.IO.joinPath(this.getPath(),"/",this.getFullName())}getFullName(){return this._name+this._extension}getAbsolutePath(){return DKTools.IO.getAbsolutePath(this.getFullPath())}getStats(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const t=this.getFullPath().split("\\").filter((t=>!!t));return{data:_.get(DKTools.IO.stamp,t.concat("__stats__"),{}),status:DKTools.IO.OK}}const e=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return e.stat(n,((e,n)=>{e?this.__processError(e,t.onError):t.onSuccess({data:n,status:DKTools.IO.OK},this)})),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{return{data:e.statSync(n),status:DKTools.IO.OK}}catch(e){this.__processError(e,t.onError)}}async getStatsAsync(){return new Promise(((t,e)=>{const n=this.getStats({sync:!1,onSuccess:t,onError:e});n.status!==DKTools.IO.EXPECT_CALLBACK&&t(n)}))}hasExtension(){return!!this._extension}isFile(){return this instanceof DKTools.IO.File&&(Utils.isNwjs()?DKTools.IO.isFile(this.getFullPath()):!!this.hasExtension())}isDirectory(){return this instanceof DKTools.IO.Directory&&(Utils.isNwjs()?DKTools.IO.isDirectory(this.getFullPath()):!this.hasExtension())}__processError(t,e){DKTools.Utils.isFunction(e)?e(t,this):DKTools.Utils.throwError(t)}rename(t,e={}){if(e=e||{},!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const n=DKTools.IO.fs,i=this.getAbsolutePath(),s=DKTools.IO.normalizePath(this._path+"/"+t+this._extension),o=DKTools.IO.getAbsolutePath(s);if(!e.overwrite&&DKTools.IO.absolutePathExists(o))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;if(!e.sync)return n.rename(i,o,(n=>{n?this.__processError(n,e.onError):(this._name=t,DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this))})),DKTools.IO.EXPECT_CALLBACK;try{return n.renameSync(i,o),this._name=t,DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async renameAsync(t,e={}){return new Promise(((n,i)=>{const s=this.rename(t,{...e,sync:!1,onSuccess:n,onError:i});s!==DKTools.IO.EXPECT_CALLBACK&&n(s)}))}},DKTools.IO.File=class extends DKTools.IO.Entity{initialize(t=""){super.initialize(t),this._detectExtension()}copy(t,e={}){if(!e)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const n=DKTools.IO.fs,i=this.getAbsolutePath(),s=new DKTools.IO.File(t).getDirectory();if(e.createDirectory&&!s.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;s.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error("Failed to create directory: "+s.getFullPath()),e.onError)}if(!s.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!e.sync)return n.copyFile(i,t,e.flags,(t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return n.copyFileSync(i,t,e.flags),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async copyAsync(t,e={}){return new Promise(((n,i)=>{const s=this.copy(t,{...e,sync:!1,onSuccess:n,onError:i});s!==DKTools.IO.EXPECT_CALLBACK&&n(s)}))}_detectExtension(){let t=this._extension;this.isAudio()?t=AudioManager.audioFileExt():this.isImage()?t=ImageManager.imageFileExt():this.isVideo()&&(t=Video.videoFileExt()),this._extension=t}getExtension(){let t=super.getExtension();return(Utils.hasEncryptedAudio()&&t===AudioManager.audioFileExt()||Utils.hasEncryptedImages()&&".png"===t)&&(t+="_"),t}getDirectory(){return new DKTools.IO.Directory(this._path)}getDirectoryName(){return this.getDirectory().getName()}isAudio(){return".ogg"===this._extension||".ogg_"===this._extension}isJson(){return".json"===this._extension}isTexture(){return".dds"===this._extension}isTxt(){return".txt"===this._extension}isImage(){return".png"===this._extension||".png_"===this._extension||".webp"===this._extension}isVideo(){return".webm"===this._extension||".mp4"===this._extension}isSave(){return".rmmzsave"===this._extension}load(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};const e=this.getAbsolutePath(),n=e=>{if(e){if(t.decompress)try{e=pako.inflate(e,{to:"string"})}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(t.parse)try{e=JSON.parse(e,t.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:e,status:DKTools.IO.OK}};if(Utils.isNwjs()){if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const i=DKTools.IO.fs,s=t.options||{encoding:"utf8"};if(t.sync)try{const t=i.readFileSync(e,s);return n(t)}catch(e){this.__processError(e,t.onError)}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};i.readFile(e,s,((e,i)=>{e?this.__processError(e,t.onError):t.onSuccess(n(i),this)}))}}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP&&"Stamp.json"!==this.getFullName()&&!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const i=new XMLHttpRequest;i.open("GET",e,!t.sync),i.overrideMimeType(t.mimeType||"application/json"),i.onload=()=>{4===i.readyState&&(200===i.status?t.onSuccess(n(i.responseText),this):this.__processError(i,t.onError))},i.onerror=()=>{this.__processError(i,t.onError)};try{i.send()}catch(t){}}return{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async loadAsync(t={}){return new Promise(((e,n)=>{const i=this.load({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}loadAudio(){return this.isAudio()&&(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.WebAudio.load(DKTools.IO.normalizePath(this.getDirectoryName()+"/"),this.getName()):null}async loadAudioAsync(){return DKTools.Utils.WebAudio.loadAsync(this.loadAudio())}loadJson(t){return t?(t.parse||(t.parse=!0),this.load(t)):{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE}}async loadJsonAsync(t={}){return new Promise(((e,n)=>{const i=this.loadJson({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}loadBitmap(t){return t instanceof Object?this.loadBitmap(t.listener):this.isImage()&&(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.Bitmap.load({folder:this.getPath(),filename:this.getName(),listener:t}):null}async loadBitmapAsync(t){return DKTools.Utils.Bitmap.loadAsync(this.loadBitmap(t))}remove(t={}){if(t=t||{},!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const e=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return e.unlink(n,(e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return e.unlinkSync(n),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise(((t,e)=>{const n=this.remove({sync:!1,onSuccess:t,onError:e});n!==DKTools.IO.EXPECT_CALLBACK&&t(n)}))}save(t,e={}){if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;const n=DKTools.IO.fs,i=this.getAbsolutePath(),s=this.getDirectory();if((e=e||{}).createDirectory&&!s.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;s.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error("Failed to create directory: "+s.getFullPath()),e.onError)}if(!s.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(e.stringify&&(t=JSON.stringify(t,e.stringify.replacer,e.stringify.space)),e.compress&&(t=pako.deflate(t,{to:"string",level:1})),!e.sync)return n.writeFile(i,t,e.options,(t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return n.writeFileSync(i,t,e.options),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async saveAsync(t,e={}){return new Promise(((n,i)=>{const s=this.save(t,{...e,sync:!1,onSuccess:n,onError:i});s!==DKTools.IO.EXPECT_CALLBACK&&n(s)}))}saveJson(t,e={}){return(e=e||{}).stringify||(e.stringify={space:"\t"}),this.save(t,e)}async saveJsonAsync(t,e={}){return new Promise(((n,i)=>{const s=this.saveJson(t,{...e,sync:!1,onSuccess:n,onError:i});s!==DKTools.IO.EXPECT_CALLBACK&&n(s)}))}},DKTools.IO.Directory=class extends DKTools.IO.Entity{create(t){if(!t)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE;if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(this.exists())return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;const e=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return e.mkdir(n,t.options,(e=>{e?this.__processError(e,t.onError):t.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return e.mkdirSync(n,t.options),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async createAsync(t={}){return new Promise(((e,n)=>{const i=this.create({...t,sync:!1,onSuccess:e,onError:n});i!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}createDirectory(t,e){const n=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(n).create(e)}async createDirectoryAsync(t,e={}){const n=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(n).createAsync(e)}findFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs())return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,n=[];let i=1,s=0;const o=s=>{_.forEach(s,(s=>{if(s.isFile()){const e=s.getFullName();t.template instanceof RegExp&&t.template.test(e)?n.push(s):t.template&&e!==t.template||n.push(s)}else i<e&&s.isDirectory()&&(i++,r(s))}))},r=e=>{if(t.sync){const n=e.getAll({sync:!0,options:t.options}).data;o(n)}else e.getAll({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{s++,o(e.data),i===s&&t.onSuccess({data:n,status:DKTools.IO.OK})}})};return r(this),t.sync?{data:n,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.findFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}findDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs())return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,n=[];let i=1,s=0;const o=s=>{_.forEach(s,(s=>{const o=s.getFullName();t.template instanceof RegExp&&t.template.test(o)?n.push(s):t.template&&o!==t.template||n.push(s),i<e&&(i++,r(s))}))},r=e=>{if(t.sync){const n=e.getDirectories({sync:!0,options:t.options}).data;o(n)}else e.getDirectories({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{s++,o(e.data),i===s&&t.onSuccess({data:n,status:DKTools.IO.OK})}})};return r(this),t.sync?{data:n,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findDirectoriesAsync(t={}){return new Promise(((e,n)=>{const i=this.findDirectories({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getAll(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=this.getFullPath(),n=n=>{t.template instanceof RegExp?n=n.filter((e=>t.template.test(e))):DKTools.Utils.isString(t.template)&&(n=n.filter((e=>e===t.template)));return{data:n.reduce(((t,n)=>{const i=DKTools.IO.normalizePath(e+"/"+n);return DKTools.IO.isFile(i)?t.push(new DKTools.IO.File(i)):DKTools.IO.isDirectory(i)&&t.push(new DKTools.IO.Directory(i)),t}),[]),status:DKTools.IO.OK}};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.getFullPath().split("\\"),i=_.get(DKTools.IO.stamp,e,{}),s=Object.keys(i);return t.sync?n(s):(t.onSuccess(n(s),this),{data:null,status:DKTools.IO.EXPECT_CALLBACK})}const i=DKTools.IO.fs,s=this.getAbsolutePath();if(!t.sync)return i.readdir(s,t.options,((e,i)=>{e?this.__processError(e,t.onError):t.onSuccess(n(i),this)})),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{const e=i.readdirSync(s,t.options);return n(e)}catch(e){this.__processError(e,t.onError)}}async getAllAsync(t={}){return new Promise(((e,n)=>{const i=this.getAll({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>t.filter((t=>t.isFile()));if(t.sync){const n=this.getAll(t);return n.status===DKTools.IO.OK?{...n,data:e(n.data)}:n}{const n=t.onSuccess;return t.onSuccess=(t,i)=>{t.status===DKTools.IO.OK?n({...t,data:e(t.data)},i):n(t,i)},this.getAll(t)}}async getFilesAsync(t={}){return this.getAllAsync(t).then((t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,(t=>t.isFile()));return{...t,data:e}}return t}))}getDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>_.filter(t,(t=>t.isDirectory()));if(t.sync){const n=this.getAll(t);return n.status===DKTools.IO.OK?{...n,data:e(n.data)}:n}{const n=t.onSuccess;return t.onSuccess=(t,i)=>{t.status===DKTools.IO.OK?n({...t,data:e(t.data)},i):n(t,i)},this.getAll(t)}}async getDirectoriesAsync(t={}){return this.getAllAsync(t).then((t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,(t=>t.isDirectory()));return{...t,data:e}}return t}))}getAudioFiles(t){return this.getFiles({...t,template:/(.ogg)/})}async getAudioFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getAudioFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getJsonFiles(t){return this.getFiles({...t,template:/(.json)/})}async getJsonFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getJsonFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getTxtFiles(t){return this.getFiles({...t,template:/(.txt)/})}async getTxtFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getTxtFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getImageFiles(t){return this.getFiles({...t,template:/(.png|.webp)/})}async getImageFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getImageFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getVideoFiles(t){return this.getFiles({...t,template:/(.webm|.mp4)/})}async getVideoFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getVideoFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getRootDirectory(){return new DKTools.IO.Directory(this.getPath())}isEmpty(){const t=this.getAll({sync:!0}).data;return!t||0===t.length}loadAudioFiles(){const t=this.getAudioFiles({sync:!0});return t.status!==DKTools.IO.OK?[]:t.data.map((t=>t.loadAudio()))}async loadAudioFilesAsync(){const t=await this.getAudioFilesAsync();return t.status!==DKTools.IO.OK?[]:Promise.all(t.data.map((t=>t.loadAudioAsync())))}loadBitmaps(t){const e=this.getImageFiles({sync:!0});return e.status!==DKTools.IO.OK?[]:e.data.map((e=>e.loadBitmap(t)))}async loadBitmapsAsync(t){const e=await this.getImageFilesAsync();return e.status!==DKTools.IO.OK?[]:Promise.all(e.data.map((e=>e.loadBitmapAsync(t))))}remove(t={}){if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!this.isEmpty())return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;const e=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return e.rmdir(n,(e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return e.rmdirSync(n),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise(((t,e)=>{const n=this.remove({sync:!1,onSuccess:t,onError:e});n!==DKTools.IO.EXPECT_CALLBACK&&t(n)}))}},DKTools.IO.WebStorage=class{static exists(t){return localStorage.hasOwnProperty(t)}static load(t,e={}){if(!this.exists(t))return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};let n=localStorage.getItem(t);if(n){if(e.decompress)try{const t=e.decompress instanceof Object?e.decompress:{to:"string"};n=pako.inflate(n,t)}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(e.parse)try{n=JSON.parse(n,e.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:n,status:DKTools.IO.OK}}static remove(t){return this.exists(t)?(localStorage.removeItem(t),DKTools.IO.OK):DKTools.IO.ERROR_PATH_DOES_NOT_EXIST}static rename(t,e,n=!1){if(!this.exists(t))return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!n&&this.exists(e))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;const i=localStorage.getItem(t);return localStorage.setItem(e,i),localStorage.removeItem(t),DKTools.IO.OK}static save(t,e,n={}){n=n||{};if(!_.defaultTo(n.overwrite,!0)&&this.exists(t))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;if(n.stringify&&(e=JSON.stringify(e,n.stringify.replacer,n.stringify.space)),n.compress){const t=n.compress instanceof Object?n.compress:{to:"string",level:1};e=pako.deflate(e,t)}return localStorage.setItem(t,e),DKTools.IO.OK}},DKTools.Network=class{constructor(){return DKTools.Network}static async fetchFile(t,e={}){return fetch(t,e).then((t=>{if(t.ok)return this._toFile(t);throw t}))}static async fetchJson(t,e={}){return e.headers||(e.headers={}),e.headers.Accept="application/json",fetch(t,e).then((t=>{if(t.ok)return this._toJson(t);throw t}))}static async _toFile(t){return t.arrayBuffer().catch((()=>null))}static async _toJson(t){return t.json().catch((()=>null))}},DKTools.ParameterManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._pluginName=t,this._params={},this.initializeParams()}initializeParams(){_.forEach(PluginManager.parameters(this._pluginName),((t,e)=>{this._params[e]=DKTools.ParameterManager.parse(t)}))}change(t,e){_.set(this._params,t,e)}get(t,e,n){if(!DKTools.Utils.isString(t))return void console.error("Parameter name is not a string!",this._pluginName,t,e,n);let i=this._params[t];return void 0!==i?(e instanceof Object?i=_.find(i,e):void 0!==e&&(i=i[e]),i instanceof Object&&(n instanceof Object?(void 0!==n.key&&(i=i[n.key]),void 0!==n.index&&(i=i[n.index])):void 0!==n&&(i=i[n])),i):void 0}static parse(t){try{return"number"==typeof t||"boolean"==typeof t?t:JSON.parse(t,((t,e)=>{if(Array.isArray(e))return e.map((t=>this.parse(t)));try{return this.parse(e)}catch(t){return e}}))}catch(e){return t}}},DKTools.PluginManager=class{constructor(){return DKTools.PluginManager}static initialize(){this._checkRequirements()}static _checkRequirements(){Object.keys(this._requirements).forEach((t=>{const e=this.getVersion(t),n=this._getMaxVersion(t);if(null===e){const e='Required to install the plugin "%1". Minimal version: %2'.format(t,n);throw new Error(e)}if(!this._compareVersions(e,n)){const i='Required to update the plugin "%1" to minimal version %2 (Installed: %3)'.format(t,n,e);throw new Error(i)}}))}static _compareVersions(t,e){if(t===e)return!0;const n=t.split("."),i=e.split(".");for(let t=0;t<n.length;t++){const e=parseInt(n[t]),s=parseInt(i[t]);if(e>s)return!0;if(e<s)return!1}return!0}static checkVersion(t,e){return this._compareVersions(this.getVersion(t),e)}static _getMaxVersion(t){return(this._requirements[t]||[]).slice().sort(((t,e)=>this._compareVersions(t,e)?-1:1))[0]}static getVersion(t){const e=Imported[t];return DKTools.Utils.isString(e)?e:null}static isRegistered(t){return DKTools.Utils.isString(this.getVersion(t))}static requirePlugin(t,e){let n;if(this._requirements[t]||(this._requirements[t]=[]),e instanceof Object)n=e[Utils.RPGMAKER_NAME];else{if(!DKTools.Utils.isString(e))return void console.error(`Unknown version type (${t}): ${typeof e}`);n=e}this._requirements[t].push(n)}},Object.defineProperties(DKTools.PluginManager,{_requirements:{value:{}}}),DKTools.PreloadManager=class{constructor(){return DKTools.PreloadManager}static initialize(){const t=DKToolsParam.get("Initial Preloading")||{};if(!t.Enabled)return void this.start();this.setDebugging(t.Debugging),t["Audio Files"].forEach((t=>{this.preloadAudio({path:"audio/"+t,caching:!0})})),t["Image Files"].forEach((t=>{this.preloadImage({path:"img/"+t,caching:!0})}));this.getTotal()>=30&&console.warn("Too many files to preload! Load only needed files."),this.start()}static clearCache(){this._cache={audio:{},image:{}}}static clearQueue(){this._queue={audio:{},image:{}}}static _finish(){this._finishTime=new Date,this._debugging=!1;const t=(this._finishTime-this._startTime)/1e3,e=this.getTotal();if(e>0&&this._log("Preloading complete! \nLoaded/Skipped/Total: "+this._loaded+"/"+this._skipped+"/"+e+"\nPreloading time: "+t+" sec"),this._finishListeners){const n={loaded:this._loaded,skipped:this._skipped,preloadingTime:t,total:e};for(;this._finishListeners.length>0;){this._finishListeners.shift()(n)}delete this._finishListeners}this._fileLoadListeners&&delete this._fileLoadListeners,this.clearQueue()}static _generateKey(t){return DKTools.IO.normalizePath(t,!0)}static getCachedAudioByKey(t){return this._cache.audio[t]}static getCachedAudioByPath(t){return this.getCachedAudioByKey(this._generateKey(t))}static getCachedImageByKey(t){return this._cache.image[t]}static getCachedImageByPath(t){return this.getCachedImageByKey(this._generateKey(t))}static getTotal(){return _.size(this._queue.audio)+_.size(this._queue.image)}static isAudioCachedByKey(t){return!!this._cache.audio[t]}static isAudioCachedByPath(t){return this.isAudioCachedByKey(this._generateKey(t))}static isFinished(){return!!this._finishTime}static isReady(){return this.isFinished()}static isImageCachedByKey(t){return!!this._cache.image[t]}static isImageCachedByPath(t){return this.isImageCachedByKey(this._generateKey(t))}static isStarted(){return!!this._startTime}static _log(t){this._debugging&&t&&console.log(t)}static _onFileLoad(t){if(this._loaded++,this._log(`Loaded ${t instanceof WebAudio?"audio":"image"}: ${t.url}`),this._fileLoadListeners){const e={file:t,loadded:this._loaded,total:this.getTotal()};this._fileLoadListeners.forEach((t=>{t(e)}))}}static onFileLoad(t){this._fileLoadListeners||(this._fileLoadListeners=[]),this._fileLoadListeners.push(t)}static onFinish(t){this._finishListeners||(this._finishListeners=[]),this._finishListeners.push(t)}static _preload(t,e){if(e instanceof Object&&DKTools.Utils.isString(e.path)){const n=new DKTools.IO.Directory(e.path);if(n.isDirectory()){if(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP)throw new Error("Web browsers and mobile phones cannot load directories!");{const i={sync:!0};let s=[];this._files[e.path]?s=this._files[e.path]:("audio"===t?s=n.getAudioFiles(i).data||[]:"image"===t&&(s=n.getImageFiles(i).data||[]),this._files[e.path]=s),s.forEach((n=>{const i=n.getFullPath();this._queue[t][i]||("audio"===t?this._processAudioFile(n,e):"image"===t&&this._processImageFile(n,e))}))}}else{let n=e.path;n.includes(".")||("image"===t?n+=".png":"audio"===t&&(n+=".ogg"));const i=new DKTools.IO.File(n),s=i.getFullPath();if(this._queue[t][s])return;i.isFile()?"audio"===t?this._processAudioFile(i,e):"image"===t&&this._processImageFile(i,e):console.error("This is not a file: "+s)}}}static _processAudioFile(t,e){const n=t.getFullPath(),i=DKTools.IO.reverseSlashes(n);if(this._queue.audio[i])return;const s=t.getDirectoryName(),o=t.getName();if(e.caching&&this.isAudioCachedByPath(i))return this._log("Audio already preloaded: "+i+". Skipped..."),void("se"===s&&AudioManager.isStaticSe({name:o})&&this.releaseAudioByPath(i));this._queue.audio[i]={...e,path:i}}static _processImageFile(t,e){const n=t.getFullPath(),i=DKTools.IO.reverseSlashes(n);this._queue.image[i]||(e.caching&&this.isImageCachedByPath(i)?this._log("Image already preloaded: "+i+". Skipped..."):this._queue.image[i]={...e,path:i})}static _processLoadAudioFiles(){const t=[];return _.forEach(this._queue.audio,(e=>{const n=new DKTools.IO.File(e.path),i=n.getFullPath();if(n.isFile())if(n.isAudio()){if(this.isAudioCachedByPath(i))return this._skipped++,void this._log("Audio already preloaded: "+i+". Skipped...");const s=n.loadAudio({...e.options});s?(e.caching&&(this._cache.audio[this._generateKey(s.url)]=s),t.push(s)):(this._skipped++,this._log("Cannot load an audio: "+i+". Skipped..."))}else this._skipped++,this._log("This is not an audio: "+i+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")})),t.map((t=>DKTools.Utils.WebAudio.loadAsync(t).then((()=>this._onFileLoad(t)))))}static _processLoadImageFiles(){const t=[];return _.forEach(this._queue.image,(e=>{const n=new DKTools.IO.File(e.path),i=n.getFullPath();if(n.isFile())if(n.isImage()){if(this.isImageCachedByPath(i))return this._skipped++,void this._log("Image already preloaded: "+i+". Skipped...");const s=DKTools.Utils.Bitmap.load({...e.options,folder:n.getPath(),filename:n.getName()});s?(e.caching&&(this._cache.image[this._generateKey(s.url)]=s),t.push(s)):(this._skipped++,this._log("Cannot load an image: "+i+". Skipped..."))}else this._skipped++,this._log("This is not an image: "+i+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")})),t.map((t=>DKTools.Utils.Bitmap.loadAsync(t).then((()=>this._onFileLoad(t)))))}static preloadAudio(t){this._preload("audio",t)}static preloadImage(t){this._preload("image",t)}static releaseAudioByKey(t){delete this._cache.audio[t]}static releaseAudioByPath(t){this.releaseAudioByKey(this._generateKey(t))}static releaseImageByKey(t){delete this._cache.image[t]}static releaseImageByPath(t){this.releaseImageByKey(this._generateKey(t))}static setDebugging(t){this._debugging=t||!1}static start(){const t=this.getTotal();if(this._loaded=0,this._skipped=0,this._startTime=new Date,this._finishTime=null,0===t)return Promise.resolve().then((()=>this._finish()));this._log("DKTools Preload Manager is running... \nTotal files to load: "+t);const e=Promise.all(this._processLoadAudioFiles()),n=Promise.all(this._processLoadImageFiles());return Promise.all([e,n]).then((()=>this._finish()))}},Object.defineProperties(DKTools.PreloadManager,{_queue:{value:{audio:{},image:{}},writable:!0},_cache:{value:{audio:{},image:{}},writable:!0},_files:{value:{}}}),DKTools.StartupManager=class{static async initialize(){this._isReady=!1,await this.checkErrors(),await this.initializeModules(),this._isReady=!0}static async initializeModules(){}static _checkRPGMakerVersion(){const t="1.0.0";if(!Utils.checkRMVersion(t))throw new Error("Required to update RPG Maker MZ to minimal version %1 (Installed: %2)".format(t,Utils.RPGMAKER_VERSION))}static _checkWebStorage(){if(!Utils.isNwjs()&&!window.hasOwnProperty("localStorage"))throw new Error("Your browser does not support localStorage API")}static async checkErrors(){await this._checkRPGMakerVersion(),await this._checkWebStorage()}static isReady(){return this._isReady}},DKTools.Event=class{constructor(){this.initialize.apply(this,arguments)}get id(){return this._id}get target(){return this._target}get manager(){return this._manager}get type(){return this._type}get repeatTime(){return this._repeatTime}get repeats(){return this._repeats}get remainingTime(){return this._remainingTime}set remainingTime(t){this._remainingTime=t}get remainingRepeats(){return this._remainingRepeats}set remainingRepeats(t){this._remainingRepeats=t}get remainingPauseTime(){return this._remainingPauseTime}set remainingPauseTime(t){this._remainingPauseTime=t}initialize(t){t=t||{},this._id=t.id,this._target=t.target,this._type=t.type,this._repeatTime=t.repeatTime||-1,this._repeats=_.defaultTo(t.repeats,-1),this._remainingPauseTime=t.remainingPauseTime||0,this._onStart=t.onStart,this._onUpdate=t.onUpdate,this._onPause=t.onPause,this._onReset=t.onReset,this._onRepeat=t.onRepeat,this._onSuccess=t.onSuccess,this._onFail=t.onFail,this._started=!1,this._resetRemainingTime(),this._resetRemainingRepeats()}_callOnPauseHandler(){this._canCallOnPauseHandler()&&this._onPause(this)}_callOnRepeatHandler(){this._canCallOnRepeatHandler()&&this._onRepeat(this)}_callOnResetHandler(){this._canCallOnResetHandler()&&this._onReset(this)}_callOnStartHandler(){this._canCallOnStartHandler()&&this._onStart(this),this._started=!0}_callOnSuccessHandler(t=!1){(this._canCallOnSuccessHandler()||t&&this.hasOnSuccessHandler())&&this._onSuccess(this)}_callOnUpdateHandler(t){this._canCallOnUpdateHandler()&&this._onUpdate(this,t)}_callOnFailHandler(){this._canCallOnFailHandler()&&this._onFail(this)}_canCallOnPauseHandler(){return this.hasOnPauseHandler()&&this.isPaused()}_canCallOnRepeatHandler(){return this.hasOnRepeatHandler()}_canCallOnResetHandler(){return this.hasOnResetHandler()}_canCallOnStartHandler(){return this.hasOnStartHandler()&&!this.isStarted()}_canCallOnSuccessHandler(){return this.hasOnSuccessHandler()&&this.isFinished()}_canCallOnUpdateHandler(){return this.hasOnUpdateHandler()&&this.isUpdated()}_canCallOnFailHandler(){return this.hasOnFailHandler()}_clearRemainingRepeats(){this._remainingRepeats=0}_clearRemainingTime(){this._remainingTime=0}finish(t=!1){this.isFinished()||t?this._callOnSuccessHandler(t):this._callOnFailHandler(),this._clearRemainingTime(),this._clearRemainingRepeats()}getElapsedRepeats(){return this._repeats-this._remainingRepeats}getElapsedTime(){return this._repeatTime-this._remainingTime}hasManager(){return!!this._manager}hasOnFailHandler(){return!!this._onFail}hasOnPauseHandler(){return!!this._onPause}hasOnRepeatHandler(){return!!this._onRepeat}hasOnResetHandler(){return!!this._onReset}hasOnStartHandler(){return!!this._onStart}hasOnSuccessHandler(){return!!this._onSuccess}hasOnUpdateHandler(){return!!this._onUpdate}hasTarget(){return!!this._target}hasType(){return!!this._type}isAnimation(){return this instanceof DKTools.Animation}isAnimationAction(){return this instanceof DKTools.Animation.Action}isFinished(){return 0===this._remainingTime&&0===this._remainingRepeats}isPaused(){return 0!==this._remainingPauseTime}isStarted(){return this._started}isUpdated(){return this.isStarted()&&!this.isPaused()&&!this.isFinished()}pause(t=-1){this._remainingPauseTime=t}_resetRemainingRepeats(){this._remainingRepeats=this._repeats}_resetRemainingTime(){this._remainingTime=this._repeatTime}remove(){return!this.hasTarget()||this._target.removeEvent(this)}repeat(){this._remainingRepeats>0&&this._remainingRepeats--,this._resetRemainingTime(),this._callOnRepeatHandler()}reset(){this._resetRemainingTime(),this._resetRemainingRepeats(),this._callOnResetHandler()}resume(){this._remainingPauseTime=0}setManager(t){this._manager=t}setOnFailHandler(t){this._onFail=t}setOnPauseHandler(t){this._onPause=t}setOnRepeatHandler(t){this._onRepeat=t}setOnResetHandler(t){this._onReset=t}setOnStartHandler(t){this._onStart=t}setOnSuccessHandler(t){this._onSuccess=t}setOnUpdateHandler(t){this._onUpdate=t}setTarget(t){this._target=t}stop(t=!1){this.finish(t),this.reset()}_update(t){this._callOnUpdateHandler(t),this._updateRemainingRepeats()}_updatePause(){this._callOnPauseHandler(),this._updateRemainingPauseTime()}_updateRemainingPauseTime(){this._remainingPauseTime>0&&this._remainingPauseTime--}_updateRemainingRepeats(){this.isFinished()||(0===this._remainingTime?this.repeat():this._updateRemainingTime())}_updateRemainingTime(){this._remainingTime>0&&this._remainingTime--}update(t){this.isPaused()?this._updatePause():(this._callOnStartHandler(),this._update(t),this.isFinished()&&this.finish())}},DKTools.Animation=class extends DKTools.Event{get actions(){return this._actions}initialize(t){this._actions=[],super.initialize.apply(this,arguments)}addAction(t){t&&(Number.isFinite(t.startTime)||(t.startTime=0),!Number.isFinite(t.endTime)&&Number.isFinite(this._repeatTime)&&(t.endTime=this._repeatTime),t.setAnimation(this),this._actions.push(t))}addActions(t){t.forEach((t=>{this.addAction(t)}))}_canUpdateAction(t){return _.inRange(this.getElapsedTime(),t.startTime,t.endTime)}hasAction(t){return this._actions.includes(t)}hasActions(){return this._actions.length>0}isActionFinished(t){return t.isStarted()&&!t.isPaused()&&this.getElapsedTime()+1>=t.endTime}isActionUpdated(t){return t.isStarted()&&!t.isPaused()&&this._canUpdateAction(t)}isFinished(){return super.isFinished.apply(this,arguments)||!this.hasActions()}removeAction(t){this.hasAction(t)&&_.pull(this._actions,t)}repeat(){this.repeatActions(),super.repeat.apply(this,arguments)}repeatActions(){this._actions.forEach((t=>{t.repeat()}))}reset(){this.resetActions(),super.reset.apply(this,arguments)}resetActions(){_.forEach(this._actions,(function(t){t.reset()}))}_update(t){this._updateActions(),super._update.apply(this,arguments)}_updateAction(t){this._canUpdateAction(t)?t.update():this.getElapsedTime()+1===t.endTime&&this.isActionFinished(t)&&t.finish()}_updateActions(){this._actions.forEach((t=>{this._updateAction(t)}))}},DKTools.Animation.Action=class extends DKTools.Event{static Frame(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,n=e.frame,i=(this._data.x-n.x)/t,s=(this._data.y-n.y)/t,o=(this._data.width-n.width)/t,r=(this._data.height-n.height)/t,a=new Rectangle(n.x+i,n.y+s,n.width+o,n.height+r);e.setFrame(a.x,a.y,a.width,a.height)}.bind(e)),e.setOnSuccessHandler(function(){this.target.setFrame(this._data.x,this._data.y,this._data.width,this._data.height)}.bind(e)),e}static Move(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,n=(this._data.x-e.x)/t,i=(this._data.y-e.y)/t,s=e.x+n,o=e.y+i;e.position.set(s,o)}.bind(e)),e.setOnSuccessHandler(function(){this.target.position.set(this._data.x,this._data.y)}.bind(e)),e}static Opacity(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target;e.opacity=e.opacity+(this._data-e.opacity)/t}.bind(e)),e.setOnSuccessHandler(function(){this.target.opacity=this._data}.bind(e)),e}static Rotation(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,n=(this._data-e.rotation)/t;e.rotation=e.rotation+n}.bind(e)),e.setOnSuccessHandler(function(){this.target.rotation=this._data}.bind(e)),e}static Scale(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,n=e.scale,i=(this._data.x-n.x)/t,s=(this._data.y-n.y)/t,o=n.x+i,r=n.y+s;e.scale.set(o,r)}.bind(e)),e.setOnSuccessHandler(function(){this.target.scale.set(this._data.x,this._data.y)}.bind(e)),e}get animation(){return this._animation}get startTime(){return this._startTime}set startTime(t){this._startTime=t}get endTime(){return this._endTime}set endTime(t){this._endTime=t}get data(){return this._data}get target(){return this._target||(this._animation?this._animation.target:null)}initialize(t){t=t||{},this._animation=null,this._startTime=t.startTime,this._endTime=t.endTime,this._data=t.data,super.initialize.apply(this,arguments)}getElapsedTime(){return this._animation.getElapsedTime()-this._startTime}getRemainingTime(){return this._endTime-this._animation.getElapsedTime()}isFinished(){return this._animation.isActionFinished(this)}isUpdated(){return this._animation.isActionUpdated(this)}remove(){this._animation.removeAction(this)}repeat(){this._callOnRepeatHandler()}reset(){this._callOnResetHandler()}setAnimation(t){this._animation=t}},DKTools.EventsManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._target=t,this._events={}}addAnimation(t){return this.addEventToContainer(t)}addEvent(t){let e;return t instanceof DKTools.Event||t instanceof DKTools.Animation?e=t:t instanceof Object&&(e=new DKTools.Event(t)),this.addEventToContainer(e)}addEventToContainer(t){if(!t)return null;t.hasTarget()||t.setTarget(this._target),t.setManager(this);return this.getEventsContainerByType(t.type).push(t),t}addOneTimeEvent(t){return t.repeatTime=1,t.repeats=0,this.addEvent(t)}_checkEvent(t){return t&&!t.isFinished()}_checkEvents(){_.forEach(this._events,((t,e)=>{this._events[e]=this._checkEventsContainer(t)}))}_checkEventsContainer(t){return t.filter((t=>this._checkEvent(t)))}clearEvents(t){t?Array.isArray(t)?t.forEach((t=>{this._events[t]=[]})):this._events[t]=[]:this._events={}}createEventsContainer(t){return this._events[t]||(this._events[t]=[]),this._events[t]}findAnimation(t,e){return this.getAnimations(e).find((e=>e.id===t))}findEvent(t,e){return this.getEvents(e).find((e=>e.id===t))}finishEvents(t,e=!1){this.iterateEventsContainer(t,(t=>{t.finish(e)}))}getAnimations(t){return this.getEvents(t).filter((t=>t instanceof DKTools.Animation))}getEventIndex(t){return this.getEventsContainerByType(t.type).indexOf(t)}getEvents(t){if(t)return this.getEventsContainerByType(t);let e=[];return Object.values(this._events).forEach((t=>{e=e.concat(t)})),e}getEventsContainerByType(t){return this._events[t]||this.createEventsContainer(t)}hasAnimation(t){return t instanceof DKTools.Animation&&this.getEventIndex(t)>=0}hasAnimations(t){return this.getAnimations(t).length>0}hasEvent(t){return this.getEventIndex(t)>=0}hasEvents(t){return this.getEvents(t).length>0}isEventsPaused(t){return this.getEventsContainerByType(t).every((t=>t.isPaused()))}iterateEventsContainer(t,e){this.getEventsContainerByType(t).forEach(e)}pauseEvents(t,e=-1){this.iterateEventsContainer(t,(t=>{t.pause(e)}))}removeEvent(t){const e=this.getEventIndex(t);if(e>=0){return this.getEventsContainerByType(t.type)[e]=null,!0}return!1}resumeEvents(t){this.iterateEventsContainer(t,(t=>{t.resume()}))}stopEvents(t,e=!1){this.iterateEventsContainer(t,(t=>{t.stop(e)}))}update(){this._checkEvents()}updateEventsContainer(t,e){this.iterateEventsContainer(t,(t=>{t.update(e)}))}},DKTools.Base=class{constructor(){throw new Error("This is an abstract class!")}get mouse(){return this.getLocalPoint(TouchInput.x,TouchInput.y)}get mouseEnterTime(){return this._mouseEnterTime}get touch(){return this.getLocalPoint(TouchInput.x,TouchInput.y)}get wheelX(){return this._wheelX}get wheelY(){return this._wheelY}get eventsManager(){return this._eventsManager}initialize(t,e,n,i){let s;t instanceof Graphics?(n=Graphics.boxWidth,i=Graphics.boxHeight):t instanceof Object?(s=t.x,e=t.y,n=t.width,i=t.height):Number.isFinite(t)&&(s=t),this._clearAll(),this._createEventsManager(),this.move(s,e),this.setupSize(n,i),this.setupAll()}activate(){this.setActive(!0)&&this.updateActivateEvents()}actorName(t){return Window_Base.prototype.actorName.apply(this,arguments)}addAnimation(t){return this._eventsManager.addAnimation(t)}addEvent(t){return this._eventsManager.addEvent(t)}addOneTimeEvent(t){return this._eventsManager.addOneTimeEvent(t)}addFilter(t){t&&(this.filters&&this.filters.length>0?this.filters.push(t):this.filters=[t])}_clearAll(){this._mouseEnterTime=0,this._wheelX=0,this._wheelY=0}_createEventsManager(){this._eventsManager=new DKTools.EventsManager(this)}calcTextHeight(t){return this.hasBitmap()&&t?Window_Base.prototype.calcTextHeight.apply(this,arguments):0}canRedrawAll(){return this.hasBitmap()}checkAll(){this.updateCheckAllEvents()}clear(){return this.clearRect()}clearRect(t,e,n,i){if(!this.hasBitmap())return!1;let s=t;return t instanceof Object&&(s=t.x,e=t.y,n=t.width,i=t.height),DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),DKTools.Utils.isString(i)&&(e=this.lineHeight()*parseFloat(i)),s=s||0,e=e||0,n=n||this.standardDrawingWidth(),i=i||this.standardDrawingHeight(),this.bitmap.clearRect(s,e,n,i),!0}convertEscapeCharacters(t){try{return Window_Base.prototype.convertEscapeCharacters.apply(this,arguments)}catch(e){return t=(t=(t=(t=(t=(t=(t=t.replace(/\\/g,"")).replace(/\x1b\x1b/g,"\\")).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bN\[(\d+)\]/gi,function(){return this.actorName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bP\[(\d+)\]/gi,function(){return this.partyMemberName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bG/gi,TextManager.currencyUnit)}}createAll(){this.updateCreateAllEvents()}deactivate(){this.setActive(!1)&&this.updateDeactivateEvents()}drawAll(){this.updateDrawAllEvents()}drawBitmap(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const n=DKTools.Utils.Bitmap.load(t);if(!n||e.sync&&!n.isReady())return!1;let i=!0;return n.addLoadListener((()=>{const t=DKTools.Utils.isFunction,s=DKTools.Utils.isString,o=this.lineHeight(),{paintOpacity:r,resetPaintOpacity:a}=e;let{source:l,destination:u}=e,c={};t(e.callback)&&(c=e.callback(n,this)),l=l||c.source||{},u=u||c.destination||{},t(l)&&(l=l(n,this)),t(u)&&(u=u(n,this));const h=_.defaultTo(l.x,0),p=_.defaultTo(l.width,n.width);let d=_.defaultTo(l.y,0),f=_.defaultTo(l.height,n.height);const g=_.defaultTo(u.x,0),y=_.defaultTo(u.width,p);let m=_.defaultTo(u.y,0),T=_.defaultTo(u.height,f);0!==p&&0!==f&&0!==y&&0!==T?(s(d)&&(d=o*parseFloat(d)),s(f)&&(f=o*parseFloat(f)),s(m)&&(m=o*parseFloat(m)),s(T)&&(T=o*parseFloat(T)),Number.isFinite(r)&&this.changePaintOpacity(r),this.bitmap.blt(n,h,d,p,f,g,m,y,T),a&&this.resetPaintOpacity()):i=!1})),i}async drawBitmapAsync(t,e={}){if(!t)return!1;const n=await DKTools.Utils.Bitmap.loadAsync(t);return this.drawBitmap(n,e)}drawCharacter(t,e,n={}){if(!this.hasBitmap()||null==t||null==e)return!1;n=n||{};const i=ImageManager.loadCharacter(t),s=ImageManager.isBigCharacter(t),o=i.width/(s?3:12),r=i.height/(s?4:8),a=(e%4*3+1)*o,l=4*Math.floor(e/4)*r,u=new Rectangle(a,l,o,r),c=n.pos;let{x:h,y:p}=n;return c instanceof Object&&(h=c.x,p=c.y),h=h||0,p=p||0,this.drawBitmap(i,{...n,source:u,destination:{x:h,y:p}})}drawCircle(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,radius:n,color:i,paintOpacity:s,resetPaintOpacity:o}=t;let{x:r,y:a}=t;return 0!==n&&(e instanceof Object&&(r=e.x,a=e.y),DKTools.Utils.isString(a)&&(a=this.lineHeight()*parseFloat(a)),Number.isFinite(s)&&this.changePaintOpacity(s),this.bitmap.drawCircle(r||0,a||0,n||1,i||"white"),o&&this.resetPaintOpacity(),!0)}drawFace(t,e,n={}){if(!this.hasBitmap()||null==t||null==e)return!1;n=n||{};const{pos:i,rect:s}=n;let{x:o,y:r,width:a,height:l}=n;i instanceof Object&&(o=i.x,r=i.y),s instanceof Object&&(o=s.x,r=s.y,a=s.width,l=s.height),a=a||ImageManager.faceWidth,l=l||ImageManager.faceHeight;const u=ImageManager.loadFace(t),c=ImageManager.faceWidth,h=ImageManager.faceHeight,p=Math.min(a,c),d=Math.min(l,h),f=e%4*c+(c-p)/2,_=Math.floor(e/4)*h+(h-d)/2,g=new Rectangle(f,_,p,d);return o=Math.floor((o||0)+Math.max(a-c,0)/2),r=Math.floor((r||0)+Math.max(l-h,0)/2),this.drawBitmap(u,{...n,source:g,destination:{x:o,y:r}})}drawGauge(t={}){if(!this.hasBitmap())return!1;const{pos:e,rect:n,reversed:i,gradient:s,paintOpacity:o,resetPaintOpacity:r}=t;let{x:a,y:l,width:u,height:c,type:h,rate:p,backgroundColor:d,color:f,color1:g,color2:y}=t;if(e instanceof Object&&(a=e.x,l=e.y),n instanceof Object&&(a=n.x,l=n.y,u=n.width,c=n.height),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),0===u||0===c)return!1;a=a||0,l=l||0,u=u||this.standardDrawingWidth(),c=c||this.standardDrawingHeight(),d=_.defaultTo(d,"black"),f=_.defaultTo(f,"white"),g=_.defaultTo(g,f),y=_.defaultTo(y,f),h=_.defaultTo(h,"horizontal"),p=_.defaultTo(p,1);const m={x:a,y:l,width:u,height:c};if("horizontal"===h)m.width*=p,i&&(m.x+=u-m.width);else{if("vertical"!==h)return!1;m.height*=p,i&&(m.y+=c-m.height)}return Number.isFinite(o)&&this.changePaintOpacity(o),this.fillRect({x:a,y:l,width:u,height:c,color:d}),this.gradientFillRect({rect:m,color1:g,color2:y,vertical:"vertical"===s}),r&&this.resetPaintOpacity(),!0}drawIcon(t,e={}){if(!this.hasBitmap()||null==t)return!1;const n=ImageManager.loadSystem("IconSet"),i=ImageManager.iconWidth,s=ImageManager.iconHeight,o=t%16*i,r=Math.floor(t/16)*s,a=new Rectangle(o,r,i,s),l=e.pos;let{x:u,y:c}=e;return l instanceof Object&&(u=l.x,c=l.y),this.drawBitmap(n,{...e,source:a,destination:{x:u,y:c}})}drawItemName(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const n=ImageManager.iconWidth+4,{pos:i,iconPos:s,paintOpacity:o,resetPaintOpacity:r}=e;let{x:a,y:l,iconX:u,iconY:c}=e;return i instanceof Object&&(a=i.x,l=i.y),s instanceof Object&&(u=s.x,c=s.y),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),a=a||0,l=l||0,u=_.defaultTo(u,a+2),c=_.defaultTo(c,l+2),Number.isFinite(o)&&this.changePaintOpacity(o),this.drawIcon(t.iconIndex,{x:u,y:c}),this.drawText(t.name,{x:a+n,y:l,width:(e.width||312)-n,height:e.height,align:"left",font:e.font,textColor:e.textColor,resetFont:e.resetFont,resetTextColor:e.resetTextColor}),r&&this.resetPaintOpacity(),!0}drawLine(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos1:e,pos2:n,color:i,lineWidth:s,paintOpacity:o,resetPaintOpacity:r}=t;let{x1:a,y1:l,x2:u,y2:c}=t;return 0!==s&&(e instanceof Object&&(a=e.x,l=e.y),n instanceof Object&&(u=n.x,c=n.y),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),Number.isFinite(o)&&this.changePaintOpacity(o),DKTools.Utils.Bitmap.drawLine(this.bitmap,a||0,l||0,u||0,c||0,i,s),r&&this.resetPaintOpacity(),!0)}drawPolygon(t){if(!this.hasBitmap())return!1;t=t||{};const{points:e,paintOpacity:n,resetPaintOpacity:i}=t;if(!Array.isArray(e)||0===e.length)return!1;Number.isFinite(n)&&this.changePaintOpacity(n);for(let n=0;n<e.length-1;n++){const i=e[n],s=e[n+1];this.drawLine({...t,pos1:i,pos2:s})}return i&&this.resetPaintOpacity(),!0}drawTextEx(t,e={}){if(!this.hasBitmap()||""===t||null==t)return 0;t=String(t),(e=e||{}).wrap instanceof Object&&(t=this.textWrap(t,e.wrap));const{pos:n,startX:i,startY:s}=e;let{x:o,y:r,width:a}=e;n instanceof Object&&(o=n.x,r=n.y),DKTools.Utils.isString(r)&&(r=this.lineHeight()*parseFloat(r)),o=_.defaultTo(o,0),r=_.defaultTo(r,0),a=_.defaultTo(a,0);const l=this.createTextState(t,o,r,a);return l.startX=_.defaultTo(i,l.startX),l.startY=_.defaultTo(s,l.startY),this.processAllText(l),l.outputWidth}fillAll(t){return this.fillRect({color:t})}fillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,rect:n,paintOpacity:i,resetPaintOpacity:s}=t;let{x:o,y:r,width:a,height:l,color:u}=t;return e instanceof Object&&(o=e.x,r=e.y),n instanceof Object&&(o=n.x,r=n.y,a=n.width,l=n.height),DKTools.Utils.isString(r)&&(r=this.lineHeight()*parseFloat(r)),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),0!==a&&0!==l&&(o=o||0,r=r||0,a=a||this.standardDrawingWidth(),l=l||this.standardDrawingHeight(),u=u||"white",Number.isFinite(i)&&this.changePaintOpacity(i),this.bitmap.fillRect(o,r,a,l,u),s&&this.resetPaintOpacity(),!0)}fontHeight(t){let e;return t=t||this.lineHeight(),e=this.hasBitmap()?this.bitmap.fontSize:this._font?this._font.fontSize:DKTools.Utils.isFunction(this.standardFontSize)?this.standardFontSize():$gameSystem.mainFontSize(),t-(t-.7*e)/2}getLocalPoint(t,e){const n=2===arguments.length?new Point(t,e):new Point(t.x,t.y);return this.worldTransform.applyInverse(n)}gradientFillAll(t="black",e="white",n=!1){return this.gradientFillRect({color1:t,color2:e,vertical:n})}gradientFillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{vertical:e,rect:n,paintOpacity:i,resetPaintOpacity:s}=t;let{color1:o,color2:r,x:a,y:l,width:u,height:c}=t;return n instanceof Object&&(a=n.x,l=n.y,u=n.width,c=n.height),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),0!==u&&0!==c&&(a=a||0,l=l||0,u=u||this.standardDrawingWidth(),c=c||this.standardDrawingHeight(),o=o||"black",r=r||"white",Number.isFinite(i)&&this.changePaintOpacity(i),this.bitmap.gradientFillRect(a,l,u,c,o,r,e),s&&this.resetPaintOpacity(),!0)}hasBitmap(){return!!this.bitmap}hasParent(){return!!this.parent}hide(t=!1){this.setVisible(!1)&&this.updateHideEvents(),t||this.deactivate()}isActive(){let t=this;for(;t;){if(!t.visible)return!1;t=t.parent}return this.active}isBusy(){return!this.isReady()}isChild(t){return t?this.children.includes(t):this.hasParent()}isDestroyed(){return this._destroyed}isInside(t,e){const n=this.getLocalPoint(t,e),i=new Rectangle(0,0,this.width,this.height),s=this.mask;if(s&&DKTools.Utils.isFunction(s.containsPoint)&&!s.containsPoint(n))return!1;if(!i.contains(n.x,n.y))return!1;const o=this.hitArea;return!o||o.contains(n.x,n.y)}isMouseInside(){return this.isInside(TouchInput.x,TouchInput.y)}isOutside(t,e){return!this.isInside(t,e)}isParent(t){return!!t&&this.parent===t}isReady(){return this.hasBitmap()&&this.bitmap.isReady()}isStarted(){return this._started}isTouchInside(){return TouchInput.isScreenPressed()&&this.isInside(TouchInput.x,TouchInput.y)}isVisible(){return this.visible}isVisibleAndActive(){return this.isVisible()&&this.isActive()}makeFontBigger(){this.hasBitmap()&&Window_Base.prototype.makeFontBigger.apply(this,arguments)}makeFontSmaller(){this.hasBitmap()&&Window_Base.prototype.makeFontSmaller.apply(this,arguments)}maxFontSizeInLine(t){return this.hasBitmap()?Window_Base.prototype.maxFontSizeInLine.apply(this,arguments):0}move(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.position.set(t||0,e||0)}obtainEscapeCode(t){return Window_Base.prototype.obtainEscapeCode.apply(this,arguments)}obtainEscapeParam(t){return Window_Base.prototype.obtainEscapeParam.apply(this,arguments)}partyMemberName(t){return Window_Base.prototype.partyMemberName.apply(this,arguments)}processAll(){Utils.isMobileDevice()||(this.processMouseEvents(),this.processWheelEvents())}processMouseEvents(){this.isVisibleAndActive()?this.isMouseInside()?(0===this._mouseEnterTime&&this.updateMouseEnterEvents(),this.updateMouseInsideEvents(),TouchInput.isMoved()&&this.updateMouseMoveEvents(),this._mouseEnterTime++):(this._mouseEnterTime>0&&this.updateMouseLeaveEvents(),this.updateMouseOutsideEvents(),this._mouseEnterTime=0):this._mouseEnterTime=0}processWheelEvents(){if(this._wheelX=TouchInput.wheelX,this._wheelY=TouchInput.wheelY,0!==this._wheelX||0!==this._wheelY){let t;t=this.isMouseInside()?"inside":"outside",0!==this._wheelX&&this.updateWheelXEvents(t),0!==this._wheelY&&this.updateWheelYEvents(t)}}processCharacter(t){return Window_Base.prototype.processCharacter.apply(this,arguments)}processAllText(t){return Window_Base.prototype.processAllText.apply(this,arguments)}processControlCharacter(t,e){return Window_Base.prototype.processControlCharacter.apply(this,arguments)}processDrawIcon(t,e){e.drawing&&this.drawIcon(t,{x:e.x+2,y:e.y+2}),e.x+=ImageManager.iconWidth+4}processEscapeCharacter(t,e){try{const n={...e};Window_Base.prototype.processEscapeCharacter.call(this,t,n),Object.assign(e,n)}catch(n){switch(t){case"C":this.changeTextColor(ColorManager.textColor(this.obtainEscapeParam(e)));break;case"I":this.processDrawIcon(this.obtainEscapeParam(e),e);break;case"PX":e.x=this.obtainEscapeParam(e);break;case"PY":e.y=this.obtainEscapeParam(e);break;case"FS":this.changeFont({fontSize:this.obtainEscapeParam(e)});break;case"{":this.makeFontBigger();break;case"}":this.makeFontSmaller()}}}processNewLine(t){return Window_Base.prototype.processNewLine.apply(this,arguments)}redrawAll(){this.clear(),this.drawAll(),this.updateRedrawAllEvents()}refreshAll(){this.updateAll(),this.canRedrawAll()&&this.redrawAll(),this.updateRefreshAllEvents()}removeAll(){this.updateRemoveAllEvents()}removeEvent(t){return this._eventsManager.removeEvent(t)}removeFilter(t){this.filters&&t&&(_.pull(this.filters,t),0===this.filters.length&&(this.filters=null))}removeFromParent(){return!!this.hasParent()&&(this.parent.removeChild(this),!0)}resize(t,e,n=!1){if(DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.width===t&&this.height===e)return!1;const i=this.width,s=this.height;return this.setupSize(t,e),(this.width!==i||this.height!==s)&&(n||this.start(),!0)}standardActive(){return!0}standardDrawingWidth(){return this.hasBitmap()?this.bitmap.width:this instanceof DKTools.Sprite?this._bitmapWidth:this instanceof DKTools.Window?this.innerWidth:0}standardDrawingHeight(){return this.hasBitmap()?this.bitmap.height:this instanceof DKTools.Sprite?this._bitmapHeight:this instanceof DKTools.Window?this.innerHeight:0}standardOpacity(){return 255}standardPivot(){return new Point(0,0)}standardRotation(){return 0}standardScale(){return new Point(1,1)}standardSkew(){return new Point(0,0)}standardVisible(){return!0}standardWindowskin(){return"Window"}setupAll(t={}){t=t||{},this.setupActive(t.active),this.setupVisible(t.visible),this.setupScale(t.scale),this.setupPivot(t.pivot),this.setupSkew(t.skew),this.setupRotation(t.rotation),this.setupOpacity(t.opacity)}setupActive(t){this.active=_.defaultTo(t,this.standardActive())}setupPivot(t,e){let n;n=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardPivot(),this.pivot.copyFrom(n)}setupRotation(t){this.rotation=_.defaultTo(t,this.standardRotation())}setupScale(t,e){let n;n=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardScale(),this.scale.copyFrom(n)}setupSize(t,e){}setupSkew(t,e){let n;n=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardSkew(),this.skew.copyFrom(n)}setupVisible(t){this.visible=_.defaultTo(t,this.standardVisible())}setupOpacity(t){this.opacity=_.defaultTo(t,this.standardOpacity())}setActive(t){if(this.active===t)return!1;const e=this.active;return this.setupActive(t),this.active!==e}setVisible(t){if(this.visible===t)return!1;const e=this.visible;return this.setupVisible(t),this.visible!==e}show(t=!1){this.setVisible(!0)&&this.updateShowEvents(),t&&this.activate()}start(t=!1){this._started=!0,this.removeAll(),this.checkAll(),this.createAll(),this.refreshAll(),this.updateStartEvents(),t&&this.activate()}textFontHeight(t,e={}){return this.textLines(t,e)*this.fontHeight()}textLines(t,e){return e instanceof Object&&(t=this.textWrap(t,e)),t.split("\n").length}textWidth(t){return this.hasBitmap()&&""!==t&&null!=t?Window_Base.prototype.textWidth.apply(this,arguments):0}textHeight(t,e={}){return this.textLines(t,e)*this.lineHeight()}textWrap(t,e={}){if(!this.hasBitmap()||""===t||null==t)return"";e=e||{};const n=(t=String(t)).split("\n"),i=e.maxWidth||this.bitmap.width,s=this.textWidth(" ");let o="",r=1;for(let t=0;t<n.length;t++){const a=n[t].split(" ");let l=i;for(let t=0;t<a.length;t++){const n=a[t],u=this.textSizeEx(n).width;let c=u+s;if(0===u&&(c-=s),0===t||c>l){if(t>0){if(e.maxLines===r)return o;o+="\n",r++}o+=n,l=i-u}else l-=c,o+=" "+n}t<n.length-1&&(o+="\n")}return o}update(){this.processAll(),this.updateEvents()}updateAll(){this.updateUpdateAllEvents()}updateChildren(){for(const t of this.children)t&&t.update&&t.update()}updateActivateEvents(){this._eventsManager.updateEventsContainer("activate")}updateCheckAllEvents(){this._eventsManager.updateEventsContainer("check-all")}updateCreateAllEvents(){this._eventsManager.updateEventsContainer("create-all")}updateDeactivateEvents(){this._eventsManager.updateEventsContainer("deactivate")}updateEvents(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()}updateHideEvents(){this._eventsManager.updateEventsContainer("hide")}updateMouseEnterEvents(){this._eventsManager.updateEventsContainer("mouse-enter")}updateMouseInsideEvents(){this._eventsManager.updateEventsContainer("mouse-inside")}updateMouseLeaveEvents(){this._eventsManager.updateEventsContainer("mouse-leave")}updateMouseMoveEvents(){this._eventsManager.updateEventsContainer("mouse-move")}updateMouseOutsideEvents(){this._eventsManager.updateEventsContainer("mouse-outside")}updateQueueEvents(){const t=this._eventsManager.getEventsContainerByType("queue")[0];t&&t.update()}updateReadyEvents(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")}updateRedrawAllEvents(){this._eventsManager.updateEventsContainer("redraw-all")}updateDrawAllEvents(){this._eventsManager.updateEventsContainer("draw-all")}updateRefreshAllEvents(){this._eventsManager.updateEventsContainer("refresh-all")}updateRemoveAllEvents(){this._eventsManager.updateEventsContainer("remove-all")}updateShowEvents(){this._eventsManager.updateEventsContainer("show")}updateStartEvents(){this.isStarted()&&this._eventsManager.updateEventsContainer("start")}updateUpdateAllEvents(){this._eventsManager.updateEventsContainer("update-all")}updateUpdateEvents(){this._eventsManager.updateEventsContainer("update")}updateWheelXEvents(t){this._eventsManager.updateEventsContainer("wheel-X-"+t)}updateWheelYEvents(t){this._eventsManager.updateEventsContainer("wheel-Y-"+t)}},DKTools.Sprite=function(t,e,n,i){this.initialize.apply(this,arguments)},DKTools.Sprite.prototype=Object.create(Sprite.prototype),Object.defineProperties(DKTools.Sprite.prototype,Object.getOwnPropertyDescriptors(DKTools.Base.prototype)),DKTools.Sprite.prototype.constructor=DKTools.Sprite,Object.defineProperties(DKTools.Sprite.prototype,{contents:{get:function(){return this.bitmap},set:function(t){this.bitmap=t},configurable:!0},windowskin:{get:function(){return this._windowskin},configurable:!0},align:{get:function(){return this._align},configurable:!0},font:{get:function(){return this._font},configurable:!0},textColor:{get:function(){return this._textColor},configurable:!0},paintOpacity:{get:function(){return this._paintOpacity},configurable:!0},fillColor:{get:function(){return this._fillColor},configurable:!0},graphicFolder:{get:function(){return this._graphicFolder},configurable:!0},graphicName:{get:function(){return this._graphicName},configurable:!0}}),DKTools.Sprite.prototype.initialize=function(t,e,n,i){Sprite.prototype.initialize.call(this),DKTools.Base.prototype.initialize.apply(this,arguments),t instanceof Bitmap&&this.setupBitmap(t),this.updateBitmap()},DKTools.Sprite.prototype.canRedrawAll=function(){return DKTools.Base.prototype.canRedrawAll.apply(this,arguments)&&!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype.changeFont=function(t){this.hasBitmap()&&this.updateFont(t)},DKTools.Sprite.prototype.changePaintOpacity=function(t){this.hasBitmap()&&this.updatePaintOpacity(t)},DKTools.Sprite.prototype.changeTextColor=function(t){this.hasBitmap()&&this.updateTextColor(t)},DKTools.Sprite.prototype.createAll=function(){DKTools.Base.prototype.createAll.apply(this,arguments),this.createBitmap()},DKTools.Sprite.prototype.createBitmap=function(){this.hasGraphicName()?this._loadGraphic():this.hasFixedBitmap()||(this.bitmap=new Bitmap(this._bitmapWidth,this._bitmapHeight))},DKTools.Sprite.prototype.createTextBuffer=function(t){return Window_Base.prototype.createTextBuffer.apply(this,arguments)},DKTools.Sprite.prototype.createTextState=function(t,e,n,i){return Window_Base.prototype.createTextState.apply(this,arguments)},DKTools.Sprite.prototype.destroyBitmap=function(){return!(!this.hasBitmap()||this.hasFixedBitmap())&&(this.bitmap.destroy(),!0)},DKTools.Sprite.prototype.drawAll=function(){this.updateFill(),DKTools.Base.prototype.drawAll.apply(this,arguments)},DKTools.Sprite.prototype.drawText=function(t,e={}){if(!this.hasBitmap()||null==t||""===t)return!1;t=String(t),e=e||{};const{pos:n,rect:i,font:s,textColor:o,paintOpacity:r,resetFont:a,resetTextColor:l,resetPaintOpacity:u}=e;let{x:c,y:h,width:p,height:d,align:f}=e;return n instanceof Object&&(c=n.x,h=n.y),i instanceof Object&&(c=i.x,h=i.y,p=i.width,d=i.height),DKTools.Utils.isString(h)&&(h=this.lineHeight()*parseFloat(h)),DKTools.Utils.isString(d)&&(d=this.lineHeight()*parseFloat(d)),0!==p&&0!==d&&(c=c||0,h=h||0,p=p||this.standardDrawingWidth(),d=d||this.lineHeight(),f=f||this.align,s&&this.changeFont(s),o&&this.changeTextColor(o),Number.isFinite(r)&&this.changePaintOpacity(r),this.bitmap.drawText(t,c,h,p,d,f),a&&this.resetFont(),l&&this.resetTextColor(),u&&this.resetPaintOpacity(),!0)},DKTools.Sprite.prototype.flushTextState=function(t){return Window_Base.prototype.flushTextState.apply(this,arguments)},DKTools.Sprite.prototype.getLocalPoint=function(t,e){const n=DKTools.Base.prototype.getLocalPoint.apply(this,arguments),i=this.anchor;return n.x+=this.width*i.x,n.y+=this.height*i.y,n},DKTools.Sprite.prototype.hasFillColor=function(){return!!this._fillColor},DKTools.Sprite.prototype.hasFixedBitmap=function(){return!!this._fixedBitmap},DKTools.Sprite.prototype.hasGraphicFolder=function(){return!!this._graphicFolder},DKTools.Sprite.prototype.hasGraphicName=function(){return!!this._graphicName},DKTools.Sprite.prototype.isResizable=function(){return!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype._loadGraphic=function(){if(this.hasGraphicFolder()&&this.hasGraphicName()){const t=this._graphicFolder,e=this._graphicName,n=this._graphicLoadListener;this.loadBitmap(t,e,n),this.updateReadyEvents()}},DKTools.Sprite.prototype.lineHeight=function(){return Window_Base.prototype.lineHeight.apply(this,arguments)},DKTools.Sprite.prototype.loadBitmap=function(t,e,n){if(t instanceof Object)return this.loadBitmap(t.folder,t.filename,t.listener);const i=DKTools.Utils.Bitmap.load(t,e);return!!this.setBitmap(i)&&(DKTools.Utils.isFunction(n)&&this.hasBitmap()&&this.bitmap.addLoadListener(n),!0)},DKTools.Sprite.prototype.loadSystem=function(t,e){return t instanceof Object?this.loadBitmap("img/system/",t.filename,t.listener):this.loadBitmap("img/system/",t,e)},DKTools.Sprite.prototype.loadWindowskin=function(t,e){return t instanceof Object?this.loadSystem(t.filename||this.standardWindowskin(),t.listener):this.loadSystem(t||this.standardWindowskin(),e)},DKTools.Sprite.prototype.moveWithAnchor=function(t,e){const n=this.anchor;DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.move(t+this.width*n.x,e+this.height*n.y)},DKTools.Sprite.prototype.standardAlign=function(){return"center"},DKTools.Sprite.prototype.standardAnchor=function(){return new Point(0,0)},DKTools.Sprite.prototype.standardFillColor=function(){return null},DKTools.Sprite.prototype.standardFont=function(){return{fontFace:this.standardFontFace(),fontItalic:this.standardFontItalic(),fontSize:this.standardFontSize()}},DKTools.Sprite.prototype.standardFontFace=function(){return $gameSystem.mainFontFace()},DKTools.Sprite.prototype.standardFontItalic=function(){return!1},DKTools.Sprite.prototype.standardFontSize=function(){return $gameSystem.mainFontSize()},DKTools.Sprite.prototype.standardFrame=function(){return new Rectangle(0,0,this.width,this.height)},DKTools.Sprite.prototype.standardGraphicFolder=function(){return"img/system/"},DKTools.Sprite.prototype.standardGraphicName=function(){return""},DKTools.Sprite.prototype.standardPaintOpacity=function(){return 255},DKTools.Sprite.prototype.standardTextColor=function(){return"#ffffff"},DKTools.Sprite.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupBitmap(t),this.setupFrame(t.frame),this.setupAnchor(t.anchor),this.setupAlign(t.align),this.setupFont(t.font),this.setupTextColor(t.textColor),this.setupPaintOpacity(t.paintOpacity),this.setupFillColor(t.fillColor),this.setupGraphicFolder(t.graphicFolder),this.setupGraphicName(t.graphicName)},DKTools.Sprite.prototype.setupAlign=function(t){this._align=t||this.standardAlign()},DKTools.Sprite.prototype.setupAnchor=function(t,e){let n;n=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardAnchor(),this.anchor.copyFrom(n)},DKTools.Sprite.prototype.setupBitmap=function(t){let e=null;t instanceof Object&&(e=DKTools.Utils.Bitmap.load(t.bitmap||t)),e?(this.bitmap=e,this.bitmap.addLoadListener(this.setupSize.bind(this))):this.bitmap=null,this._fixedBitmap=!!this.bitmap},DKTools.Sprite.prototype.setupFillColor=function(t){this._fillColor=null!==t?_.defaultTo(t,this.standardFillColor()):null},DKTools.Sprite.prototype.setupFont=function(t){this._font=Object.assign(this.standardFont(),t)},DKTools.Sprite.prototype.setupFrame=function(t,e,n,i){let s;s=t instanceof Object?t:4===arguments.length?new Rectangle(t,e,n,i):this.standardFrame(),Sprite.prototype.setFrame.call(this,s.x,s.y,s.width,s.height)},DKTools.Sprite.prototype.setupGraphicFolder=function(t){this._graphicFolder=_.defaultTo(t,this.standardGraphicFolder())},DKTools.Sprite.prototype.setupGraphicLoadListener=function(t){this._graphicLoadListener=t||null},DKTools.Sprite.prototype.setupGraphicName=function(t){this._graphicName=null!==t?_.defaultTo(t,this.standardGraphicName()):null},DKTools.Sprite.prototype.setupPaintOpacity=function(t){this._paintOpacity=_.defaultTo(t,this.standardPaintOpacity())},DKTools.Sprite.prototype.setupTextColor=function(t){this._textColor=t||this.standardTextColor()},DKTools.Sprite.prototype.setupSize=function(t,e){"string"==typeof e&&(e=this.lineHeight()*parseFloat(e)),this._bitmapWidth=t,this._bitmapHeight=e},DKTools.Sprite.prototype.setAlign=function(t,e=!1){if(this._align===t)return!1;const n=this._align;return this.setupAlign(t),this._align!==n&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setBitmap=function(t){return this.bitmap!==t&&(this.setupBitmap(t),!0)},DKTools.Sprite.prototype.setFillColor=function(t,e=!1){if(this._fillColor===t)return!1;const n=this._fillColor;return this.setupFillColor(t),this._fillColor!==n&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setFont=function(t,e=!1){if(_.isEqual(this._font,Object.assign(this.standardFont(),t)))return!1;const n={...this._font};return this.setupFont(t),!_.isEqual(this._font,n)&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicFolder=function(t,e=!1){if(this._graphicFolder===t)return!1;const n=this._graphicFolder;return this.setupGraphicFolder(t),this._graphicFolder!==n&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicName=function(t,e=!1){if(this._graphicName===t)return!1;const n=this._graphicName;return this.setupGraphicName(t),this._graphicName!==n&&(e||this.start(),!0)},DKTools.Sprite.prototype.setPaintOpacity=function(t,e=!1){if(this._paintOpacity===t)return!1;const n=this._paintOpacity;return this.setupPaintOpacity(t),this._paintOpacity!==n&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setTextColor=function(t,e=!1){if(this._textColor===t)return!1;const n=this._textColor;return this.setupTextColor(t),this._textColor!==n&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.removeBitmap=function(t=!1){this.hasBitmap()&&(t&&this.bitmap.destroy(),this.setBitmap(null))},DKTools.Sprite.prototype.resetAll=function(){this.resetFont(),this.resetPaintOpacity(),this.resetTextColor()},DKTools.Sprite.prototype.resetFont=function(){this.changeFont(this.font)},DKTools.Sprite.prototype.resetPaintOpacity=function(){this.changePaintOpacity(this.paintOpacity)},DKTools.Sprite.prototype.resetTextColor=function(){this.changeTextColor(this.textColor)},DKTools.Sprite.prototype.resize=function(t,e,n=!1){return!!this.isResizable()&&DKTools.Base.prototype.resize.apply(this,arguments)},DKTools.Sprite.prototype.textSizeEx=function(t){return Window_Base.prototype.textSizeEx.apply(this,arguments)},DKTools.Sprite.prototype.update=function(){DKTools.Base.prototype.update.apply(this,arguments),this.updateChildren()},DKTools.Sprite.prototype.updateAll=function(){DKTools.Base.prototype.updateAll.apply(this,arguments),this.updateBitmap()},DKTools.Sprite.prototype.updateBitmap=function(){this.hasBitmap()&&(this.updateFont(),this.updatePaintOpacity(),this.updateTextColor())},DKTools.Sprite.prototype.updateFill=function(){this.hasFillColor()&&this.fillAll(this.fillColor)},DKTools.Sprite.prototype.updateFont=function(t={}){t=t||{},this.bitmap.fontFace=t.fontFace||this.font.fontFace,this.bitmap.fontItalic=!!t.fontItalic,this.bitmap.fontSize=t.fontSize||this.font.fontSize},DKTools.Sprite.prototype.updatePaintOpacity=function(t){Number.isFinite(t)||(t=this.paintOpacity),this.bitmap.paintOpacity=t},DKTools.Sprite.prototype.updateTextColor=function(t){this.bitmap.textColor=t||this.textColor},DKTools.Sprite.Button=class extends DKTools.Sprite{get longPressInterval(){return this._longPressInterval}get mousePressTime(){return this._mousePressTime}get touchPressTime(){return this._touchPressTime}isLongPressed(){return this._mousePressTime>=this._longPressInterval}isLongTouched(){return this._touchPressTime>=this._longPressInterval}isPressed(){return this._mousePressTime>0&&!this.isLongPressed()}isTouched(){return this._touchPressTime>0&&!this.isLongTouched()}standardActive(){return!1}standardLongPressInterval(){return 18}setupAll(t={}){t=t||{},super.setupAll(t),this.setupLongPressInterval(t.longPressInterval)}setupLongPressInterval(t){this._longPressInterval=t||this.standardLongPressInterval()}processAll(){super.processAll(),Utils.isMobileDevice()?this.processTouch():this.processMousePress()}processMousePress(){if(this.isVisibleAndActive()&&this.isMouseInside())if(TouchInput.isMousePressed()){let t;this._mousePressTime++,TouchInput.isLeftButtonPressed()?t="left":TouchInput.isMiddleButtonPressed()?t="middle":TouchInput.isRightButtonPressed()&&(t="right"),t&&(this.updateMouseDownEvents(t),this.isLongPressed()&&(this._mousePressTime===this._longPressInterval&&this.updateMouseLongPressStartedEvents(t),this.updateMouseLongPressEvents(t)))}else{let t;TouchInput.isLeftButtonReleased()?t="left":TouchInput.isMiddleButtonReleased()?t="middle":TouchInput.isRightButtonReleased()&&(t="right"),t&&(this.isLongPressed()?this.updateMouseLongPressFinishedEvents(t):this.isPressed()&&this.updateMouseClickEvents(t),this._mousePressTime>0&&this.updateMouseUpEvents(t)),this._mousePressTime=0}else this._mousePressTime=0}processTouch(){this.isVisibleAndActive()&&this.isTouchInside()?TouchInput.isScreenPressed()?(this._touchPressTime++,this.updateTouchDownEvents(),this.isLongTouched()&&(this._touchPressTime===this._longPressInterval&&this.updateLongTouchStartedEvents(),this.updateLongTouchEvents())):(this.isLongTouched()?this.updateLongTouchFinishedEvents():this.isTouched()&&this.updateTouchEvents(),this._touchPressTime>0&&this.updateTouchUpEvents(),this._touchPressTime=0):this._touchPressTime=0}update(){super.update.apply(this,arguments),this.updateButtonState()}updateButtonState(){Utils.isMobileDevice()?this._touchPressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents():this._mousePressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents()}updateLongTouchEvents(){this._eventsManager.updateEventsContainer("long-touch")}updateLongTouchFinishedEvents(){this._eventsManager.updateEventsContainer("long-touch-finished")}updateLongTouchStartedEvents(){this._eventsManager.updateEventsContainer("long-touch-started")}updateMouseDownEvents(t){this._eventsManager.updateEventsContainer("mouse-down-"+t)}updateMouseUpEvents(t){this._eventsManager.updateEventsContainer("mouse-up-"+t)}updateMouseClickEvents(t){this._eventsManager.updateEventsContainer("mouse-click-"+t)}updateMouseLongPressEvents(t){this._eventsManager.updateEventsContainer("mouse-long-press-"+t)}updateMouseLongPressStartedEvents(t){this._eventsManager.updateEventsContainer(`mouse-long-press-${t}-started`)}updateMouseLongPressFinishedEvents(t){this._eventsManager.updateEventsContainer(`mouse-long-press-${t}-finished`)}updateStateNormalEvents(){this._eventsManager.updateEventsContainer("state-normal")}updateStatePressedEvents(){this._eventsManager.updateEventsContainer("state-pressed")}updateTouchEvents(){this._eventsManager.updateEventsContainer("touch")}updateTouchDownEvents(){this._eventsManager.updateEventsContainer("touch-down")}updateTouchUpEvents(){this._eventsManager.updateEventsContainer("touch-up")}},DKTools.Window=function(t,e,n,i){this.initialize.apply(this,arguments)},DKTools.Window.prototype=Object.create(Window_Base.prototype),Object.defineProperties(DKTools.Window.prototype,Object.getOwnPropertyDescriptors(DKTools.Base.prototype)),DKTools.Window.prototype.constructor=DKTools.Window,Object.defineProperties(DKTools.Window.prototype,{bitmap:{get:function(){return this.contents},set:function(t){this.contents=t},configurable:!0}}),DKTools.Window.prototype.initialize=function(t,e,n,i){Window.prototype.initialize.apply(this,arguments),DKTools.Base.prototype.initialize.call(this,t,e,n,i),this.loadWindowskin(),this.createContents()},DKTools.Window.prototype.activate=function(){DKTools.Base.prototype.activate.apply(this,arguments),this._contentsSprite instanceof DKTools.Sprite&&this._contentsSprite.activate()},DKTools.Window.prototype._createContentsBackSprite=function(){Window.prototype._createContentsBackSprite.apply(this,arguments),this._contentsBackSprite.bitmap=new Bitmap},DKTools.Window.prototype._createContentsSprite=function(){this._contentsSprite=this.standardContentsSprite(),this._clientArea.addChild(this._contentsSprite)},DKTools.Window.prototype.clear=function(){return this.contentsBack&&this.contentsBack.clear(),DKTools.Base.prototype.clear.apply(this,arguments)},DKTools.Window.prototype.contentsWidth=function(){return"function"==typeof this._contentsWidth?this._contentsWidth(this):this._contentsWidth},DKTools.Window.prototype.contentsHeight=function(){return"function"==typeof this._contentsHeight?this._contentsHeight(this):this._contentsHeight},DKTools.Window.prototype.createContents=function(){const t=this._contentsSprite instanceof DKTools.Sprite,e=this.contentsWidth(),n=this.contentsHeight();t?(this._contentsSprite.destroyBitmap(),this.contentsBack&&this.contentsBack.destroy()):this.destroyContents(),this.contentsBack=new Bitmap(e,n),t?(this._contentsSprite.setupSize(e,n),this._contentsSprite.start()):this.contents=new Bitmap(e,n),this.resetFontSettings()},DKTools.Window.prototype.createAll=function(){DKTools.Base.prototype.createAll.apply(this,arguments),this.createContents()},DKTools.Window.prototype.deactivate=function(){DKTools.Base.prototype.deactivate.apply(this,arguments),this._contentsSprite instanceof DKTools.Sprite&&this._contentsSprite.deactivate()},DKTools.Window.prototype.drawText=function(t,e){arguments.length<=2&&this._contentsSprite instanceof DKTools.Sprite?this._contentsSprite.drawText(t,e):Window_Base.prototype.drawText.apply(this,arguments)},DKTools.Window.prototype.drawTextEx=function(t,e){arguments.length<=2&&this._contentsSprite instanceof DKTools.Sprite?DKTools.Base.prototype.drawTextEx.apply(this,arguments):Window_Base.prototype.drawTextEx.apply(this,arguments)},DKTools.Window.prototype.hideBack=function(){this._backSprite.visible=!1},DKTools.Window.prototype.hideCursor=function(){this.cursorVisible=!1,this._cursorSprite.visible=!1},DKTools.Window.prototype.hideContentsBack=function(){this._contentsBackSprite.visible=!1},DKTools.Window.prototype.hideFrame=function(){this.frameVisible=!1,this._frameSprite.visible=!1},DKTools.Window.prototype.isOpenAndVisible=function(){return this.isOpen()&&this.isVisible()},DKTools.Window.prototype.isOpenAndActive=function(){return this.isOpen()&&this.isActive()},DKTools.Window.prototype.loadWindowskin=function(){this.windowskin=DKTools.Utils.Bitmap.load({folder:"img/system",filename:this.standardWindowskin()})},DKTools.Window.prototype.refreshAll=function(){this._refreshAllParts(),DKTools.Base.prototype.refreshAll.apply(this,arguments)},DKTools.Window.prototype.resetFontSettings=function(){this._contentsSprite instanceof DKTools.Sprite?(this._contentsSprite.resetFont(),this.resetTextColor()):Window_Base.prototype.resetFontSettings.apply(this,arguments)},DKTools.Window.prototype.resetTextColor=function(){this._contentsSprite instanceof DKTools.Sprite?this._contentsSprite.resetTextColor():Window_Base.prototype.resetTextColor.apply(this,arguments)},DKTools.Window.prototype.resize=function(t,e,n=!1){return"string"==typeof e&&(e=this.itemHeight()*parseFloat(e)+2*this._padding),DKTools.Base.prototype.resize.call(this,t,e,n)},DKTools.Window.prototype.standardOpennessSpeed=function(){return 32},DKTools.Window.prototype.standardContentsSprite=function(){return new DKTools.Sprite},DKTools.Window.prototype.standardContentsWidth=function(){return()=>this.innerWidth},DKTools.Window.prototype.standardContentsHeight=function(){return()=>this.innerHeight},DKTools.Window.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupContentsWidth(t.contentsWidth),this.setupContentsHeight(t.contentsHeight),this.setupContentsSprite(t.contentsSprite)},DKTools.Window.prototype.setupSize=function(t,e){"string"==typeof e&&(e=this.lineHeight()*parseFloat(e)+2*this._padding),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.prototype.setupContentsWidth=function(t){this._contentsWidth=t||this.standardContentsWidth()},DKTools.Window.prototype.setupContentsHeight=function(t){this._contentsHeight=t||this.standardContentsHeight()},DKTools.Window.prototype.setupContentsSprite=function(t){this._contentsSprite&&(this._clientArea.removeChild(this._contentsSprite),this._contentsSprite.bitmap&&this._contentsSprite.bitmap.destroy(),this._contentsSprite.destroy()),this._contentsSprite=t||this.standardContentsSprite(),this._clientArea.addChild(this._contentsSprite)},DKTools.Window.prototype.update=function(){Window_Base.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.prototype.updateAll=function(){this.updateContents(),DKTools.Base.prototype.updateAll.apply(this,arguments)},DKTools.Window.prototype.updateContents=function(){"function"==typeof this._contentsSprite.updateAll&&this._contentsSprite.updateAll()},DKTools.Window.prototype.updateOpen=function(){this._opening&&(this.openness+=this.standardOpennessSpeed(),this.isOpen()&&(this._opening=!1,this.updateOpenEvents()))},DKTools.Window.prototype.updateClose=function(){this._closing&&(this.openness-=this.standardOpennessSpeed(),this.isClosed()&&(this._closing=!1,this.updateCloseEvents()))},DKTools.Window.prototype.updateOpenEvents=function(){this._eventsManager.updateEventsContainer("open")},DKTools.Window.prototype.updateCloseEvents=function(){this._eventsManager.updateEventsContainer("close")},DKTools.Window.Selectable=function(t,e,n,i){this.initialize.apply(this,arguments)},DKTools.Window.Selectable.prototype=Object.create(Window_Selectable.prototype),Object.defineProperties(DKTools.Window.Selectable.prototype,Object.getOwnPropertyDescriptors(DKTools.Window.prototype)),DKTools.Window.Selectable.prototype.constructor=DKTools.Window.Selectable,DKTools.Window.Selectable.prototype.addItem=function(t){void 0===t.enabled&&(t.enabled=!0),t.symbol&&"function"==typeof t.handler&&this.setHandler(t.symbol,t.handler),this._list.push(t)},DKTools.Window.Selectable.prototype._clearAll=function(){DKTools.Window.prototype._clearAll.apply(this,arguments),this._index=0,this._cursorFixed=!1,this._cursorAll=!1,this._helpWindow=null,this._handlers={},this._doubleTouch=!1,this._canRepeat=!0,this._scrollX=0,this._scrollY=0,this._scrollBaseX=0,this._scrollBaseY=0,this.clearScrollStatus()},DKTools.Window.Selectable.prototype._createArrowSprites=function(){DKTools.Window.prototype._createArrowSprites.apply(this,arguments),this._leftArrowSprite=new Sprite,this._rightArrowSprite=new Sprite,this.addChild(this._leftArrowSprite),this.addChild(this._rightArrowSprite)},DKTools.Window.Selectable.prototype.callHandler=function(t){this.isHandled(t)&&this._handlers[t](this._index,this)},DKTools.Window.Selectable.prototype.callOkHandler=function(){const t=this.currentSymbol();this.isHandled(t)?this.callHandler(t):this.isHandled("ok")?this.callHandler("ok"):this.activate()},DKTools.Window.Selectable.prototype.col=function(){return this.isHorizontal()?this._index:Math.floor(this._index%this.maxCols())},DKTools.Window.Selectable.prototype.contentsWidth=function(){return this.isHorizontal()?this.innerWidth+this.itemWidth():Window_Selectable.prototype.contentsWidth.apply(this,arguments)},DKTools.Window.Selectable.prototype.currentItem=function(){return this.item(this._index)},DKTools.Window.Selectable.prototype.currentSymbol=function(){return this.itemSymbol(this._index)},DKTools.Window.Selectable.prototype.currentExt=function(){return this.itemExt(this._index)},DKTools.Window.Selectable.prototype.cursorUp=function(t=!1){if(this.isHorizontal())return;const e=this._index,n=this.maxItems(),i=this.maxCols();(e>=i||t&&n===this.maxRows()*i)&&this.smoothSelect((e-i+n)%n)},DKTools.Window.Selectable.prototype.cursorDown=function(t=!1){if(this.isHorizontal())return;const e=this._index,n=this.maxItems(),i=this.maxCols();(e<n-i||t&&n===this.maxRows()*i)&&this.smoothSelect((e+i)%n)},DKTools.Window.Selectable.prototype.cursorLeft=function(t=!1){const e=Math.max(0,this._index),n=this.maxItems(),i=this.maxCols();this.isHorizontal()?this.selectPrevItem(t,!0):i>=2&&(e>0||t)&&this.smoothSelect((e-1+n)%n)},DKTools.Window.Selectable.prototype.cursorRight=function(t=!1){const e=this._index,n=this.maxItems(),i=this.maxCols();this.isHorizontal()?this.selectNextItem(t,!0):i>=2&&(e<n-1||t)&&this.smoothSelect((e+1)%n)},DKTools.Window.Selectable.prototype.drawAll=function(){this.drawAllItems()},DKTools.Window.Selectable.prototype.drawAllItems=function(){const t=this.maxVisibleItems(),e=this.maxItems();let n=this.topIndex();for(let i=0;i<t&&n<e;i++,n++)this.drawItemBackground(n),this.drawItem(n)},DKTools.Window.Selectable.prototype.drawItem=function(t){const e=this.item(t)||{};DKTools.Utils.isFunction(e.drawHandler)?e.drawHandler(t,this):DKTools.Utils.isFunction(this._itemDrawHandler)&&this._itemDrawHandler(t,this)},DKTools.Window.Selectable.prototype.ensureCursorVisible=function(t=!1){if(this.isHorizontal()){const e=this.col(),n=this.innerWidth;if(n>0&&e>=0){const i=this.scrollX(),s=this.itemWidth(),o=e*s,r=o+s-n;i>o?t?this.smoothScrollTo(o,0):this.scrollTo(o,0):i<r&&(t?this.smoothScrollTo(r,0):this.scrollTo(r,0))}}else Window_Selectable.prototype.ensureCursorVisible.apply(this,arguments)},DKTools.Window.Selectable.prototype.findSymbol=function(t){return this._list.findIndex((e=>e.symbol===t))},DKTools.Window.Selectable.prototype.findExt=function(t){return this._list.findIndex((e=>e.ext===t))},DKTools.Window.Selectable.prototype.hasItems=function(){return this.maxItems()>0},DKTools.Window.Selectable.prototype.hasSymbol=function(t){return this._list.some((e=>e.symbol===t))},DKTools.Window.Selectable.prototype.item=function(t){return this._list[t]||null},DKTools.Window.Selectable.prototype.itemName=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.name)?e.name(t,this):e.name},DKTools.Window.Selectable.prototype.itemSymbol=function(t){const e=this.item(t);return e?e.symbol:null},DKTools.Window.Selectable.prototype.itemExt=function(t){const e=this.item(t);return e?e.ext:null},DKTools.Window.Selectable.prototype.itemWidth=function(){return DKTools.Utils.isFunction(this._itemWidth)?this._itemWidth(this):Number.isFinite(this._itemWidth)?this._itemWidth:Window_Selectable.prototype.itemWidth.apply(this,arguments)},DKTools.Window.Selectable.prototype.itemHeight=function(){return"function"==typeof this._itemHeight?this._itemHeight(this):Number.isFinite(this._itemHeight)?this._itemHeight:"string"==typeof this._itemHeight?this.lineHeight()*parseFloat(this._itemHeight):Window_Selectable.prototype.itemHeight.apply(this,arguments)},DKTools.Window.Selectable.prototype.itemRect=function(t){const e=this.itemWidth(),n=this.itemHeight(),i=this.colSpacing(),s=this.rowSpacing(),o=new Rectangle(0,0,e-i,n-s);if(this.isHorizontal())o.x=t*e-this.scrollBaseX();else{const r=this.maxCols(),a=t%r,l=Math.floor(t/r);o.x=a*e+i/2-this.scrollBaseX(),o.y=l*n+s/2-this.scrollBaseY()}return o},DKTools.Window.Selectable.prototype.itemExt=function(t){const e=this.item(t);return e?e.ext:null},DKTools.Window.Selectable.prototype.itemTextAlign=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.align)?e.align(t,this):DKTools.Utils.isFunction(this._itemTextAlign)?this._itemTextAlign(t,this):e.align||this.standardItemTextAlign()},DKTools.Window.Selectable.prototype.itemTextColor=function(t){const e=(this.item(t)||{}).textColor||this._itemTextColor;return DKTools.Utils.isFunction(e)?e(t,this):e||ColorManager.normalColor()},DKTools.Window.Selectable.prototype.itemPaintOpacity=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.paintOpacity)?e.paintOpacity(t,this):Number.isFinite(e.paintOpacity)?e.paintOpacity:"function"==typeof this._itemPaintOpacity?this._itemPaintOpacity(t,this):this.isItemEnabled(t)?255:this.translucentOpacity()},DKTools.Window.Selectable.prototype.isItemEnabled=function(t){const e=(this.item(t)||{}).enabled;return DKTools.Utils.isFunction(e)?e(t,this):e},DKTools.Window.Selectable.prototype.isCurrentItemEnabled=function(){return this.isItemEnabled(this._index)},DKTools.Window.Selectable.prototype.maxCols=function(){return this._maxCols},DKTools.Window.Selectable.prototype.maxItems=function(){return this._list.length},DKTools.Window.Selectable.prototype.maxPageItems=function(){return this.isHorizontal()?this.maxCols():Window_Selectable.prototype.maxPageItems.apply(this,arguments)},DKTools.Window.Selectable.prototype.maxVisibleItems=function(){return this.isHorizontal()?Math.ceil(this.contentsWidth()/this.itemWidth()):Window_Selectable.prototype.maxVisibleItems.apply(this,arguments)},DKTools.Window.Selectable.prototype.nextIndex=function(t=!1){return this._index<this.maxItems()-1?this._index+1:t?0:-1},DKTools.Window.Selectable.prototype.nextItem=function(t=!1){return this.item(this.nextIndex(t))},DKTools.Window.Selectable.prototype.overallWidth=function(){return this.isHorizontal()?this.maxItems()*this.itemWidth():Window_Selectable.prototype.overallWidth.apply(this,arguments)},DKTools.Window.Selectable.prototype.overallHeight=function(){return this.isHorizontal()?this.itemHeight():Window_Selectable.prototype.overallHeight.apply(this,arguments)},DKTools.Window.Selectable.prototype.paint=function(){this.refreshAll()},DKTools.Window.Selectable.prototype.playCursorSound=function(){SoundManager.playCursor()},DKTools.Window.Selectable.prototype.prevIndex=function(t=!1){return this._index>0?this._index-1:t?this.maxItems()-1:-1},DKTools.Window.Selectable.prototype.prevItem=function(t=!1){return this.item(this.prevIndex(t))},DKTools.Window.Selectable.prototype.processCancel=function(){SoundManager.playCancel(),this.updateInputData(),this.deactivate();const t=this.currentItem();t&&DKTools.Utils.isFunction(t.cancelHandler)?t.cancelHandler(this._index,this):this.callCancelHandler()},DKTools.Window.Selectable.prototype.processOk=function(){if(this.isCurrentItemEnabled()){this.playOkSound(),this.updateInputData(),this.deactivate();const t=this.currentItem()||{};DKTools.Utils.isFunction(t.okHandler)?t.okHandler(this._index,this):this.callOkHandler()}else this.playBuzzerSound()},DKTools.Window.Selectable.prototype.processWheelScroll=function(){if(this.isWheelScrollEnabled()&&this.isTouchedInsideFrame()){const t=20;TouchInput.wheelY>=t&&(this.isHorizontal()?this.smoothScrollLeft(1):this.smoothScrollDown(1)),TouchInput.wheelY<=-t&&(this.isHorizontal()?this.smoothScrollRight(1):this.smoothScrollUp(1))}},DKTools.Window.Selectable.prototype._refreshArrows=function(){DKTools.Window.prototype._refreshArrows.apply(this,arguments);const t=this._width,e=this._height,n=24,i=n/2,s=96+n,o=0+n;this._leftArrowSprite.bitmap=this._windowskin,this._leftArrowSprite.anchor.set(.5,.5),this._leftArrowSprite.setFrame(s,o+i,i,n),this._leftArrowSprite.move(i/2,e/2),this._rightArrowSprite.bitmap=this._windowskin,this._rightArrowSprite.anchor.set(.5,.5),this._rightArrowSprite.setFrame(s+i+n,o+i,i,n),this._rightArrowSprite.move(t-i,e/2)},DKTools.Window.Selectable.prototype.refreshAll=function(){DKTools.Window.prototype.refreshAll.apply(this,arguments),this.refreshCursor()},DKTools.Window.Selectable.prototype.standardContentsSprite=function(){return new Sprite},DKTools.Window.Selectable.prototype.standardItems=function(){return[]},DKTools.Window.Selectable.prototype.standardMaxCols=function(){return 1},DKTools.Window.Selectable.prototype.standardItemDrawHandler=function(){return function(t){const e=this.itemTextColor(t),n=this.itemPaintOpacity(t),i=this.itemTextAlign(t),s=this.itemLineRect(t);this.changeTextColor(e),this.changePaintOpacity(n),this.contents.drawText(this.itemName(t),s.x,s.y,s.width,s.height,i)}.bind(this)},DKTools.Window.Selectable.prototype.standardItemTextAlign=function(){return"center"},DKTools.Window.Selectable.prototype.setupAll=function(t={}){t=t||{},DKTools.Window.prototype.setupAll.apply(this,arguments),this.setupMaxCols(t.maxCols),this.setupItems(t.items),this.setupItemWidth(t.itemWidth),this.setupItemHeight(t.itemHeight),this.setupItemTextColor(t.itemTextColor),this.setupItemPaintOpacity(t.itemPaintOpacity),this.setupItemAlign(t.itemAlign),this.setupItemDrawHandler(t.itemDrawHandler)},DKTools.Window.Selectable.prototype.setupMaxCols=function(t=1){this._maxCols=t||this.standardMaxCols()},DKTools.Window.Selectable.prototype.setupItems=function(t=[]){this._list=[],(t||this.standardItems()).forEach((t=>{this.addItem(t)}))},DKTools.Window.Selectable.prototype.setupItemTextColor=function(t){this._itemTextColor=t},DKTools.Window.Selectable.prototype.setupItemPaintOpacity=function(t){this._itemPaintOpacity=t},DKTools.Window.Selectable.prototype.setupItemAlign=function(t){this._itemAlign=t},DKTools.Window.Selectable.prototype.setupItemDrawHandler=function(t){this._itemDrawHandler=t||this.standardItemDrawHandler()},DKTools.Window.Selectable.prototype.setupItemWidth=function(t){this._itemWidth=t},DKTools.Window.Selectable.prototype.setupItemHeight=function(t){this._itemHeight=t},DKTools.Window.Selectable.prototype.setupSize=function(t,e){"string"==typeof e&&(e=this.itemHeight()*parseFloat(e)+2*this._padding),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.Selectable.prototype.setItems=function(t,e=!1){return this._list!=t&&(this.setupItems(t),e||this.start(),!0)},DKTools.Window.Selectable.prototype.setMaxCols=function(t,e=!1){if(this._maxCols===t)return!1;const n=this._maxCols;return this.setupMaxCols(t),this._maxCols!==n&&(e||this.start(),!0)},DKTools.Window.Selectable.prototype.select=function(t,e=!1){const n=this.item(t);Window_Selectable.prototype.select.call(this,t),e&&this.playCursorSound(),n&&"function"==typeof n.selectHandler&&n.selectHandler(t,this),this.updateSelectEvents()},DKTools.Window.Selectable.prototype.selectSymbol=function(t){const e=this.findSymbol(t);e>=0?this.forceSelect(e):this.forceSelect(0)},DKTools.Window.Selectable.prototype.selectExt=function(t){const e=this.findExt(t);e>=0?this.forceSelect(e):this.forceSelect(0)},DKTools.Window.Selectable.prototype.selectFirstItem=function(t=!1,e=!1){t?this.smoothSelect(0):this.forceSelect(0),e&&this.playCursorSound()},DKTools.Window.Selectable.prototype.selectLasItem=function(t=!1,e=!1){const n=this.maxItems()-1;-1!==n&&(t?this.smoothSelect(n):this.forceSelect(n),e&&this.playCursorSound())},DKTools.Window.Selectable.prototype.selectPrevItem=function(t=!1,e=!1,n=!1){const i=this.prevIndex(t);i>=0&&(e?this.smoothSelect(i):this.forceSelect(i),n&&this.playCursorSound())},DKTools.Window.Selectable.prototype.selectNextItem=function(t=!1,e=!1,n=!1){const i=this.nextIndex(t);i>=0&&(e?this.smoothSelect(i):this.forceSelect(i),n&&this.playCursorSound())},DKTools.Window.Selectable.prototype.smoothScrollLeft=function(t){this.smoothScrollBy(this.itemWidth()*t,0)},DKTools.Window.Selectable.prototype.smoothScrollRight=function(t){this.smoothScrollBy(-this.itemWidth()*t,0)},DKTools.Window.Selectable.prototype.topCol=function(){return Math.floor(this.scrollX()/this.itemWidth())},DKTools.Window.Selectable.prototype.topIndex=function(){return this.isHorizontal()?this.topCol():Window_Selectable.prototype.topIndex.apply(this,arguments)},DKTools.Window.Selectable.prototype._updateArrows=function(){const t=this.isOpen();this._leftArrowSprite.visible=t&&this.leftArrowVisible,this._rightArrowSprite.visible=t&&this.rightArrowVisible,this._downArrowSprite.visible=t&&this.downArrowVisible,this._upArrowSprite.visible=t&&this.upArrowVisible},DKTools.Window.Selectable.prototype.updateArrows=function(){this.isHorizontal()?(this.leftArrowVisible=this._scrollX>0,this.rightArrowVisible=this._scrollX<this.maxScrollX(),this.downArrowVisible=!1,this.upArrowVisible=!1):(this.leftArrowVisible=!1,this.rightArrowVisible=!1,this.downArrowVisible=this._scrollY<this.maxScrollY(),this.upArrowVisible=this._scrollY>0)},DKTools.Window.Selectable.prototype.update=function(){Window_Selectable.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.Selectable.prototype.updateSelectEvents=function(){this._eventsManager.updateEventsContainer("select")},DKTools.Scene=function(){this.initialize.apply(this,arguments)},DKTools.Scene.prototype=Object.create(Scene_Base.prototype),DKTools.Scene.prototype.constructor=DKTools.Scene,DKTools.Scene.prototype.initialize=function(){this._eventsManager=new DKTools.EventsManager(this),Scene_Base.prototype.initialize.apply(this,arguments)},DKTools.Scene.prototype.addEvent=function(t){return this._eventsManager.addEvent(t)},DKTools.Scene.prototype.addOneTimeEvent=function(t){return this._eventsManager.addOneTimeEvent(t)},DKTools.Scene.prototype.addAnimation=function(t){this._eventsManager.addAnimation(t)},DKTools.Scene.prototype.create=function(){Scene_Base.prototype.create.apply(this,arguments),this.createBackground(),this.createAllSprites(),this.createWindowLayer(),this.createAllWindows(),ConfigManager.touchUI&&this.createUI(),this.createForeground()},DKTools.Scene.prototype.createBackground=function(){},DKTools.Scene.prototype.createAllSprites=function(){},DKTools.Scene.prototype.createAllWindows=function(){},DKTools.Scene.prototype.createUI=function(){this.needsCancelButton()&&this.createCancelButton(),this.needsPageButtons()&&this.createPageButtons()},DKTools.Scene.prototype.createForeground=function(){},DKTools.Scene.prototype.createCancelButton=function(){this._cancelButton=new Sprite_Button("cancel"),this._cancelButton.move(Graphics.boxWidth-this._cancelButton.width-4,this.buttonY()),this.addWindow(this._cancelButton)},DKTools.Scene.prototype.createPageButtons=function(){const t=this.buttonY();this._pageupButton=new Sprite_Button("pageup"),this._pageupButton.move(4,t),this._pagedownButton=new Sprite_Button("pagedown"),this._pagedownButton.move(this._pageupButton.x+this._pageupButton.width+4,t),this.addWindow(this._pageupButton),this.addWindow(this._pagedownButton),this._pageupButton.setClickHandler(this.onPageUpButton.bind(this)),this._pagedownButton.setClickHandler(this.onPageDownButton.bind(this))},DKTools.Scene.prototype.hasWindowLayer=function(){return!!this._windowLayer},DKTools.Scene.prototype.isChild=function(t){return t instanceof Window&&this.hasWindowLayer()?this._windowLayer.children.includes(t):this.children.includes(t)},DKTools.Scene.prototype.needsCancelButton=function(){return!1},DKTools.Scene.prototype.needsPageButtons=function(){return!1},DKTools.Scene.prototype.onPageUpButton=function(){},DKTools.Scene.prototype.onPageDownButton=function(){},DKTools.Scene.prototype.removeWindow=function(t){return!(!this.hasWindowLayer()||!this.isChild(t))&&(this._windowLayer.removeChild(t),!0)},DKTools.Scene.prototype.update=function(){Scene_Base.prototype.update.apply(this,arguments),this.updateEvents()},DKTools.Scene.prototype.updateEvents=function(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()},DKTools.Scene.prototype.updateReadyEvents=function(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")},DKTools.Scene.prototype.updateUpdateEvents=function(){this._eventsManager.updateEventsContainer("update")},DKTools.Scene.prototype.updateQueueEvents=function(){const t=this._eventsManager.getEventsContainerByType("queue")[0];t&&t.update()},DKTools.Scene.Preloader=class{constructor(){this.initialize.apply(this,arguments)}initialize(){this._queue=[],this._finished=!1,this._running=!1,this._errors=0}add(t){t instanceof Bitmap?t=DKTools.Utils.Bitmap.loadAsync(t):t instanceof WebAudio&&(t=DKTools.Utils.WebAudio.loadAsync(t)),t instanceof Promise&&this._queue.push(t)}finish(){this._queue=[],this._finished=!0,this._running=!1}hasErrors(){return this._errors>0}isRunning(){return this._running}isReady(){return this._finished}_onError(){this._errors++}start(){if(0===this._queue.length)return void this.finish();const t=this._queue.map((t=>t.catch((t=>{throw this._onError(),t}))));Promise.all(t).then((()=>this.finish())),this._running=!0,this._finished=!1}};const DKToolsParam=new DKTools.ParameterManager("DKTools");PluginManager.registerCommand("DKTools","UpdateFileSystemStamp",(()=>{DKTools.IO._createStamp().then((()=>{window.alert("System stamp updated!")}))}));const DKTools_main_onEffekseerLoad=main.onEffekseerLoad;main.onEffekseerLoad=function(){DKTools.Utils.initialize(),DKTools.IO.initialize(),DKTools_main_onEffekseerLoad.apply(this,arguments),DKTools.PreloadManager.initialize(),DKTools.PluginManager.initialize()};const DKTools_Utils_isNwjs=Utils.isNwjs;Utils.isNwjs=function(){return void 0===this.__isNwjs__&&(this.__isNwjs__=DKTools_Utils_isNwjs.apply(this,arguments)),this.__isNwjs__};const DKTools_Utils_isMobileDevice=Utils.isMobileDevice;Utils.isMobileDevice=function(){return void 0===this.__isMobileDevice__&&(this.__isMobileDevice__=DKTools_Utils_isMobileDevice.apply(this,arguments)),this.__isMobileDevice__};const DKTools_Utils_isMobileSafari=Utils.isMobileSafari;Utils.isMobileSafari=function(){return void 0===this.__isMobileSafari__&&(this.__isMobileSafari__=DKTools_Utils_isMobileSafari.apply(this,arguments)),this.__isMobileSafari__};const DKTools_Utils_isAndroidChrome=Utils.isAndroidChrome;Utils.isAndroidChrome=function(){return void 0===this.__isAndroidChrome__&&(this.__isAndroidChrome__=DKTools_Utils_isAndroidChrome.apply(this,arguments)),this.__isAndroidChrome__},Utils.isTest=function(){return void 0===this.__isTest__&&(this.__isTest__=this.isOptionValid("test")),this.__isTest__};const DKTools_Graphics_initialize=Graphics.initialize;Graphics.initialize=function(t,e,n){DKTools_Graphics_initialize.apply(this,arguments);const i=DKToolsParam.get("FPS Meter")||{};if(Utils.isTest()&&i.Enabled){const t=this._fpsCounter;t&&(t._showFps=!1,"FPS"===i.Mode||t.switchMode(),t.switchMode())}return!!this._app};const DKTools_Graphics_printError=Graphics.printError;Graphics.printError=function(t,e,n=null){DKTools_Graphics_printError.apply(this,arguments),this._errorPrinter&&this._updateErrorPrinter()},Graphics.printDetailedError=function(t){if(!this._errorPrinter)return;const e=t.stack.split(/(?:\r\n|\r|\n)/).map((t=>t.replace(/[\(](.*[\/])/,"(")));this._errorPrinter.innerHTML=this._makeDetailedErrorHtml(t.name,t.message,e),this._applyCanvasFilter()},Graphics._makeDetailedErrorHtml=function(t,e,n){const i=DKToolsParam.get("Print Detailed Error"),s=DKTools.Utils._getErrorLogData();let o=i["Error Message"],r=i["Restart Message"],a="";return Imported.DKTools_Localization&&(o&&(o=DKTools.Localization.getText(o)),r&&(r=DKTools.Localization.getText(r))),o&&(a='<font color="yellow"><b>'+o+"<br></b></font><br>"),Object.keys(s).length>0&&(a+='<font color="yellow"><b>Reference Information</b></font><br>',_.forEach(s,((t,e)=>{a+='<font color="white">'+e+": "+t+"</font><br>"})),a+="<br>"),a+='<font color="red"><b>'+e+"</b></font><br>",_.forEach(n,(t=>{a+='<font color="white">'+t+"</font><br>"})),r&&(a+='<br><font color="yellow"><b>'+r+"</b></font><br><br>"),a};const DKTools_Graphics_updateErrorPrinter=Graphics._updateErrorPrinter;Graphics._updateErrorPrinter=function(){DKTools_Graphics_updateErrorPrinter.call(this),this._errorPrinter&&DKToolsParam.get("Print Detailed Error","Enabled")&&(this._errorPrinter.style.textAlign="left",this._errorPrinter.style.height=.8*this._app.view.height+"px")},void 0===Input.keyMapper[35]&&(Input.keyMapper[35]="end"),void 0===Input.keyMapper[36]&&(Input.keyMapper[36]="home");const DKTools_TouchInput_initialize=TouchInput.initialize;TouchInput.initialize=function(){DKTools_TouchInput_initialize.apply(this,arguments);const t=DKToolsParam.get("Cursor Graphic")||{};if(t.Enabled){const e=t.Graphic;e&&(document.body.style.cursor=`url('img/system/${e}.png'), default`)}};const DKTools_TouchInput_clear=TouchInput.clear;TouchInput.clear=function(){DKTools_TouchInput_clear.apply(this,arguments),this._leftButtonPressed=!1,this._middleButtonPressed=!1,this._rightButtonPressed=!1},TouchInput.isMousePressed=function(){return this.isLeftButtonPressed()||this.isMiddleButtonPressed()||this.isRightButtonPressed()},TouchInput.isMouseReleased=function(){return this.isLeftButtonReleased()||this.isMiddleButtonReleased()||this.isRightButtonReleased()},TouchInput.isLeftButtonPressed=function(){return this._leftButtonPressed||!1},TouchInput.isLeftButtonReleased=function(){return this._currentState.leftButtonReleased||!1},TouchInput.isMiddleButtonPressed=function(){return this._middleButtonPressed||!1},TouchInput.isMiddleButtonReleased=function(){return this._currentState.middleButtonReleased||!1},TouchInput.isRightButtonPressed=function(){return this._rightButtonPressed||!1},TouchInput.isRightButtonReleased=function(){return this._currentState.rightButtonReleased||!1},TouchInput.isScreenPressed=function(){return this._screenPressed};const DKTools_TouchInput_onLeftButtonDown=TouchInput._onLeftButtonDown;TouchInput._onLeftButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),n=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onLeftButtonDown.apply(this,arguments),Graphics.isInsideCanvas(e,n)&&(this._leftButtonPressed=!0)};const DKTools_TouchInput_onMiddleButtonDown=TouchInput._onMiddleButtonDown;TouchInput._onMiddleButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),n=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onMiddleButtonDown.apply(this,arguments),Graphics.isInsideCanvas(e,n)&&(this._middleButtonPressed=!0)};const DKTools_TouchInput_onRightButtonDown=TouchInput._onRightButtonDown;TouchInput._onRightButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),n=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onRightButtonDown.apply(this,arguments),Graphics.isInsideCanvas(e,n)&&(this._rightButtonPressed=!0)};const DKTools_TouchInput_onMouseUp=TouchInput._onMouseUp;TouchInput._onMouseUp=function(t){const e=Graphics.pageToCanvasX(t.pageX),n=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onMouseUp.apply(this,arguments),this._leftButtonPressed=!1,this._middleButtonPressed=!1,this._rightButtonPressed=!1,Graphics.isInsideCanvas(e,n)&&(0===t.button?this._newState.leftButtonReleased=!0:1===t.button?this._newState.middleButtonReleased=!0:2===t.button&&(this._newState.rightButtonReleased=!0))};const DKTools_Tilemap_initialize=Tilemap.prototype.initialize;Tilemap.prototype.initialize=function(){DKTools_Tilemap_initialize.call(this),this._tileWidth=Tilemap.TILE_WIDTH||this._tileWidth,this._tileHeight=Tilemap.TILE_HEIGHT||this._tileHeight},Object.defineProperties(Sprite.prototype,{frame:{get:function(){return this._frame},configurable:!0}}),Object.defineProperties(Window.prototype,{frameOpacity:{get:function(){return 255*this._frameSprite.alpha},set:function(t){this._frameSprite.alpha=t.clamp(0,255)/255},configurable:!0},contentsSprite:{get:function(){return this._contentsSprite},configurable:!0}});const DKTools_WebAudio_addLoadListener=WebAudio.prototype.addLoadListener;WebAudio.prototype.addLoadListener=function(t){this.isReady()?t(this):DKTools_WebAudio_addLoadListener.apply(this,arguments)},WebAudio.prototype._onLoad=function(){for(;this._loadListeners.length>0;){this._loadListeners.shift()(this)}},Video.videoFileExt=function(){return Utils.canPlayWebm()?".webm":".mp4"};const DKTools_DataManager_isDatabaseLoaded=DataManager.isDatabaseLoaded;DataManager.isDatabaseLoaded=function(){return!!DKTools_DataManager_isDatabaseLoaded.apply(this,arguments)&&(this.__isDatabaseLoaded||(this.__isDatabaseLoaded=!0,this.onDatabaseLoad()),!0)},DataManager.onDatabaseLoad=function(){},Object.defineProperties(ImageManager,{PARALLAXES_FOLDER:{get:function(){if(void 0===this.__parallaxesFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/parallaxes/";if(t.Enabled){const n=t["Parallaxes Folder"];this.__parallaxesFolder__=n?DKTools.IO.normalizePath(n+"/"):e}else this.__parallaxesFolder__=e}return this.__parallaxesFolder__},configurable:!0},TILESETS_FOLDER:{get:function(){if(void 0===this.__tilesetsFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/tilesets/";if(t.Enabled){const n=t["Tilesets Folder"];this.__tilesetsFolder__=n?DKTools.IO.normalizePath(n+"/"):e}else this.__tilesetsFolder__=e}return this.__tilesetsFolder__},configurable:!0}}),ImageManager.imageFileExt=function(){return".png"},ImageManager.loadParallax=function(t){return this.loadBitmap(ImageManager.PARALLAXES_FOLDER,t)},ImageManager.loadTileset=function(t){return this.loadBitmap(ImageManager.TILESETS_FOLDER,t)},ColorManager.randomColor=function(){return"#"+(16777215*Math.random()<<0).toString(16)};const DKTools_SceneManager_initialize=SceneManager.initialize;SceneManager.initialize=async function(){await DKTools_SceneManager_initialize.apply(this,arguments),await DKTools.StartupManager.initialize()};const DKTools_SceneManager_onKeyDown=SceneManager.onKeyDown;SceneManager.onKeyDown=function(t){if(DKTools_SceneManager_onKeyDown.call(this,t),t.ctrlKey||t.altKey)return;const e=DKToolsParam.get("Quick Load","Key Code"),n=DKToolsParam.get("Screenshots","Key Code"),i=DKToolsParam.get("Grid","Key Code");switch(t.keyCode){case e:DKTools.Utils.__quickLoad();break;case n:DKToolsParam.get("Screenshots","Enabled")&&DKTools.Utils.makeScreenshot();break;case i:DKTools.Utils.__showGrid()}},SceneManager.showDevTools=function(){if(Utils.isTest()&&Utils.isNwjs())try{const t=__webpack_require__(537).Window.get();t.showDevTools(null,(()=>t.focus()))}catch(t){DKTools.Utils.logError(t),console.error("Can not open the dev tools!")}};const DKTools_SceneManager_catchException=SceneManager.catchException;SceneManager.catchException=function(t){DKTools_SceneManager_catchException.apply(this,arguments),t instanceof Error&&DKToolsParam.get("Print Detailed Error","Enabled")&&Graphics.printDetailedError(t),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&this.showDevTools()};const DKTools_SceneManager_onError=SceneManager.onError;SceneManager.onError=function(t){DKTools_SceneManager_onError.apply(this,arguments),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&this.showDevTools()},SceneManager.changeScene=function(){this.isSceneChanging()&&!this.isCurrentSceneBusy()&&(this._scene&&(this._scene.terminate(),this.onSceneTerminate()),this._scene=this._nextScene,this._scene&&(this._scene.startPreloading(),this._sceneCreated=!1,this._nextScene=null,this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate())),this._exiting&&this.terminate())},SceneManager.updateScene=function(){if(this._scene){if(!this._sceneCreated&&this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate()),this._sceneCreated&&!this._scene.isStarted())try{this._scene.isReady()&&(this.onBeforeSceneStart(),this._scene.start(),this.onSceneStart())}catch(t){console.error(t),DKTools.Utils.logError(t),this.onBeforeSceneStart(),this._scene.start(),this.onSceneStart()}this._scene.isStarted()&&this.isGameActive()&&this._scene.update()}},SceneManager.isCurrentScene=function(t){return!!this._scene&&this._scene.constructor===t};const DKTools_SceneManager_goto=SceneManager.goto;SceneManager.goto=function(t){DKTools_SceneManager_goto.call(this,t),DKTools.Utils.__hideGrid()};const DKTools_Scene_Base_initialize=Scene_Base.prototype.initialize;Scene_Base.prototype.initialize=function(){this._preloader=new DKTools.Scene.Preloader,DKTools_Scene_Base_initialize.apply(this,arguments)};const DKTools_Scene_Base_create=Scene_Base.prototype.create;Scene_Base.prototype.create=function(){this!==SceneManager._scene&&this.startPreloading(),DKTools_Scene_Base_create.apply(this,arguments)},Scene_Base.prototype.activate=function(){this._active=!0},Scene_Base.prototype.deactivate=function(){this._active=!1},Scene_Base.prototype.isPreloaded=function(){return this._preloader.isReady()};const DKTools_Scene_Base_isReady=Scene_Base.prototype.isReady;Scene_Base.prototype.isReady=function(){return DKTools_Scene_Base_isReady.apply(this,arguments)&&this.isPreloaded()},Scene_Base.prototype.setupPreloading=function(){},Scene_Base.prototype.startPreloading=function(){this.setupPreloading(),this._preloader.start()};const DKTools_Scene_Base_terminate=Scene_Base.prototype.terminate;Scene_Base.prototype.terminate=function(){this._preloader.finish(),DKTools_Scene_Base_terminate.apply(this,arguments)};const DKTools_Scene_Boot_isReady=Scene_Boot.prototype.isReady;Scene_Boot.prototype.isReady=function(){return DKTools_Scene_Boot_isReady.apply(this,arguments)&&DKTools.StartupManager.isReady()&&DKTools.PreloadManager.isReady()};const DKTools_Scene_Boot_start=Scene_Boot.prototype.start;Scene_Boot.prototype.start=function(){const t=DKToolsParam.get("Quick Start")||{};t.Enabled?(DKTools_Scene_Boot_start.apply(this,arguments),DataManager.isBattleTest()||DataManager.isEventTest()||!t["Skip Saves"]&&DataManager.isAnySavefileExists()||(Scene_Base.prototype.start.apply(this,arguments),SoundManager.preloadImportantSounds(),this.checkPlayerLocation(),DataManager.setupNewGame(),this.resizeScreen(),this.updateDocumentTitle(),SceneManager.goto(window[t["Scene Name"]]))):DKTools_Scene_Boot_start.apply(this,arguments)},Scene_Map.prototype.setupPreloading=function(){Scene_Base.prototype.setupPreloading.apply(this,arguments),this._setupMapPreloading()},Scene_Map.prototype._setupMapPreloading=function(){const t=DKToolsParam.get("Maps Preloading")||{};if(!t.Enabled)return;const e=$gamePlayer.isTransferring()?$gamePlayer.newMapId():$gameMap.mapId(),n=_.find(t.Maps,{"Map Id":e});n&&(DKTools.PreloadManager.setDebugging(t.Debugging),n["Audio Files"].forEach((t=>{DKTools.PreloadManager.preloadAudio({path:"audio/"+t})})),n["Image Files"].forEach((t=>{DKTools.PreloadManager.preloadImage({path:"img/"+t})})),0!==DKTools.PreloadManager.getTotal()&&this._preloader.add(DKTools.PreloadManager.start()))};const DKTools_Scene_Map_isReady=Scene_Map.prototype.isReady;Scene_Map.prototype.isReady=function(){return!!this.isPreloaded()&&DKTools_Scene_Map_isReady.apply(this,arguments)};const DKTools_Game_Map_tileWidth=Game_Map.prototype.tileWidth;Game_Map.prototype.tileWidth=function(){return Tilemap.TILE_WIDTH||DKTools_Game_Map_tileWidth.apply(this,arguments)};const DKTools_Game_Map_tileHeight=Game_Map.prototype.tileHeight;Game_Map.prototype.tileHeight=function(){return Tilemap.TILE_HEIGHT||DKTools_Game_Map_tileHeight.apply(this,arguments)};const DKTools_Window_Selectable_processCursorMove=Window_Selectable.prototype.processCursorMove;if(Window_Selectable.prototype.processCursorMove=function(){if(this.isCursorMovable()){const t=this._index;Input.isTriggered("home")&&this.forceSelect(0),Input.isTriggered("end")&&this.forceSelect(Math.max(0,this.maxItems()-1)),this._index!==t&&SoundManager.playCursor()}DKTools_Window_Selectable_processCursorMove.apply(this,arguments)},DKToolsParam.get("Line Height","Enabled")&&(Window_Base.prototype.lineHeight=function(){return DKToolsParam.get("Line Height","Height")}),DKToolsParam.get("Window Padding","Enabled")&&(Game_System.prototype.windowPadding=function(){return DKToolsParam.get("Window Padding","Padding")}),DKToolsParam.get("Disable Item Background","Enabled")&&(Window_Selectable.prototype.drawItemBackground=function(){}),DKToolsParam.get("Title Menu Command Window","Enabled")){const DKTools_Scene_Title_commandWindowRect=Scene_Title.prototype.commandWindowRect;Scene_Title.prototype.commandWindowRect=function(){const rect=DKTools_Scene_Title_commandWindowRect.apply(this,arguments),offsetX=$dataSystem.titleCommandWindow.offsetX;return rect.width=eval(DKToolsParam.get("Title Menu Command Window","Width")),rect.x=(Graphics.boxWidth-rect.width)/2+offsetX,rect}}if(DKToolsParam.get("Title Menu Exit Command","Enabled")){const t=Window_TitleCommand.prototype.paint;Window_TitleCommand.prototype.paint=function(){-1===this.findSymbol("exit")&&this.addCommand(DKToolsParam.get("Title Menu Exit Command","Command Name"),"exit"),t.apply(this,arguments)};const e=Scene_Title.prototype.createCommandWindow;Scene_Title.prototype.createCommandWindow=function(){e.apply(this,arguments),this._commandWindow&&this._commandWindow.setHandler("exit",this.commandExit.bind(this))},Scene_Title.prototype.commandExit=function(){this.fadeOutAll(),SceneManager.exit()}}DKToolsParam.get("Max Savefiles","Enabled")&&(DataManager.maxSavefiles=function(){return DKToolsParam.get("Max Savefiles","Max Savefiles")||1})},747:t=>{t.exports=require("fs")},537:t=>{t.exports=require("nw.gui")},87:t=>{t.exports=require("os")},622:t=>{t.exports=require("path")}},__webpack_module_cache__={};function __webpack_require__(t){if(__webpack_module_cache__[t])return __webpack_module_cache__[t].exports;var e=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),__webpack_require__(372)})();