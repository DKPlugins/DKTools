/*
Title: DKTools
Author: DKPlugins
Site: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Version: 1.3.5
Release: 10.02.2023
First release: 21.08.2020
*/

/*ru
Название: DKTools
Автор: DKPlugins
Сайт: https://dk-plugins.ru
E-mail: kuznetsovdenis96@gmail.com
Версия: 1.3.5
Релиз: 10.02.2023
Первый релиз: 21.08.2020
*/

/*:
* @plugindesc v.1.3.5 [MZ] Advanced project testing and various settings. Made with ♥ by DKPlugins
* @author DKPlugins
* @url https://dk-plugins.ru
* @target MZ
* @help

 ### Info about plugin ###
 Title: DKTools
 Author: DKPlugins
 Site: https://dk-plugins.ru
 Version: 1.3.5
 Release: 10.02.2023
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
 ### Active in background ###
 Allows you to keep the game active when the focus is switched to another program.

 ###=========================================================================
 ### Command window on the title screen ###
 Allows you to adjust the width of the command window on the title screen.

 ###=========================================================================
 ### Exit command on the title screen ###
 Allows you to add an exit command to the command window on the title screen.
 The command is added to the end of the list.
 This function only works on PC.

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
 ## See also
 ###===========================================================================
 1. Mouse System (https://dk-plugins.ru/mouse-system/)
 Allows you to change the mouse cursor, activate events by clicking, hovering, etc.

 2. Video Player (https://dk-plugins.ru/video-player/)
 Adds video to the title screen, credits, the layers on the map and other.

 3. Events Glow (https://dk-plugins.ru/events-glow/)
 Allows highlighting events on mouse hover.

 4. Pictures Glow (https://dk-plugins.ru/pictures-glow/)
 Allows highlighting pictures on mouse hover.

 ###=========================================================================
 ## Graphics
 ###=========================================================================
 Additional graphics for your project: https://dk-plugins.ru/resources/

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
 Become a subscriber: https://boosty.to/dkplugins



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

 * @param Active In Background
 * @parent Functions
 * @desc Allow the game to be active in the background (for example when using another program)
 * @type struct<ActiveInBackground>
 * @default {"Enabled":"false"}

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
* @plugindesc v.1.3.5 [MZ] Расширенное тестирование проекта и различные настройки. Сделано с ♥ от DKPlugins
* @author DKPlugins
* @url https://dk-plugins.ru
* @target MZ
* @help

 ### Информация о плагине ###
 Название: DKTools
 Автор: DKPlugins
 Сайт: https://dk-plugins.ru
 Версия: 1.3.5
 Релиз: 10.02.2023
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
 ### Активно в фоне ###
 Позволяет оставлять игру активной, когда фокус переключается на другую программу.

 ###=========================================================================
 ### Окно команд на титульном экране ###
 Позволяет вам настроить положение и ширину окна команд на титульном экране.

 ###=========================================================================
 ### Команда выхода на титульном экране ###
 Позволяет вам добавить команду выхода в окно команд на титульном экране.
 Команда добавляется в конец списка.
 Эта функция работает только на ПК.

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

 ###=========================================================================
 ## Смотрите также
 ###=========================================================================
 1. Система Мыши (https://dk-plugins.ru/mouse-system/)
 Позволяет изменять курсор мыши, активировать события нажатием, наведением и др.

 2. Видео плеер (https://dk-plugins.ru/video-player/)
 Добавляет видео перед титульным экраном, титры, слои на карте и другое.

 3. Свечение Событий (https://dk-plugins.ru/events-glow/)
 Позволяет подсвечивать события при наведении мыши.

 4. Свечение Изображений (https://dk-plugins.ru/pictures-glow/)
 Позволяет подсвечивать изображения при наведении мыши.

 ###=========================================================================
 ## Графика
 ###=========================================================================
 Дополнительная графика для вашего проекта: https://dk-plugins.ru/resources/

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
 Стать подписчиком: https://boosty.to/dkplugins



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

 * @param Active In Background
 * @text Активно в фоне
 * @parent Functions
 * @desc Разрешить игре быть активной в фоне (например, когда используется другая программа)
 * @type struct<ActiveInBackground>
 * @default {"Enabled":"false"}

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

/*~struct~ActiveInBackground:

 * @param Enabled
 * @desc Enable function of active game in background ?
 * @type boolean
 * @default false

*/

/*~struct~ActiveInBackground:ru

 * @param Enabled
 * @text Включено
 * @desc Включить функцию активной игры в фоне ?
 * @type boolean
 * @default false

*/

(()=>{"use strict";var __webpack_modules__={372:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;module=__webpack_require__.nmd(module),window.Imported=window.Imported||{},window.Imported.DKTools="1.3.5",function(){function t(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function e(t,e,n,i){for(var o=-1,s=null==t?0:t.length;++o<s;){var r=t[o];e(i,r,n(r),t)}return i}function n(t,e){for(var n=-1,i=null==t?0:t.length;++n<i&&!1!==e(t[n],n,t););return t}function i(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function o(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(!e(t[n],n,t))return!1;return!0}function s(t,e){for(var n=-1,i=null==t?0:t.length,o=0,s=[];++n<i;){var r=t[n];e(r,n,t)&&(s[o++]=r)}return s}function r(t,e){return!(null==t||!t.length)&&-1<_(t,e,0)}function a(t,e,n){for(var i=-1,o=null==t?0:t.length;++i<o;)if(n(e,t[i]))return!0;return!1}function l(t,e){for(var n=-1,i=null==t?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o}function u(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}function c(t,e,n,i){var o=-1,s=null==t?0:t.length;for(i&&s&&(n=t[++o]);++o<s;)n=e(n,t[o],o,t);return n}function h(t,e,n,i){var o=null==t?0:t.length;for(i&&o&&(n=t[--o]);o--;)n=e(n,t[o],o,t);return n}function p(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}function d(t,e,n){var i;return n(t,(function(t,n,o){if(e(t,n,o))return i=n,!1})),i}function f(t,e,n,i){var o=t.length;for(n+=i?1:-1;i?n--:++n<o;)if(e(t[n],n,t))return n;return-1}function _(t,e,n){if(e==e)t:{--n;for(var i=t.length;++n<i;)if(t[n]===e){t=n;break t}t=-1}else t=f(t,y,n);return t}function g(t,e,n,i){--n;for(var o=t.length;++n<o;)if(i(t[n],e))return n;return-1}function y(t){return t!=t}function m(t,e){var n=null==t?0:t.length;return n?v(t,e)/n:L}function T(t){return function(e){return null==e?M:e[t]}}function D(t){return function(e){return null==t?M:t[e]}}function S(t,e,n,i,o){return o(t,(function(t,o,s){n=i?(i=!1,t):e(n,t,o,s)})),n}function v(t,e){for(var n,i=-1,o=t.length;++i<o;){var s=e(t[i]);s!==M&&(n=n===M?s:n+s)}return n}function w(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}function b(t){return function(e){return t(e)}}function K(t,e){return l(e,(function(e){return t[e]}))}function E(t,e){return t.has(e)}function O(t,e){for(var n=-1,i=t.length;++n<i&&-1<_(e,t[n],0););return n}function A(t,e){for(var n=t.length;n--&&-1<_(e,t[n],0););return n}function I(t){return"\\"+xt[t]}function x(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n}function P(t,e){return function(n){return t(e(n))}}function R(t,e){for(var n=-1,i=t.length,o=0,s=[];++n<i;){var r=t[n];r!==e&&"__lodash_placeholder__"!==r||(t[n]="__lodash_placeholder__",s[o++]=n)}return s}function C(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function B(t){if(Kt.test(t)){for(var e=wt.lastIndex=0;wt.test(t);)++e;t=e}else t=Xt(t);return t}function W(t){return Kt.test(t)?t.match(wt)||[]:t.split("")}var M,F=1/0,L=NaN,j=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],U=/\b__p\+='';/g,k=/\b(__p\+=)''\+/g,N=/(__e\(.*?\)|\b__t\))\+'';/g,H=/&(?:amp|lt|gt|quot|#39);/g,z=/[&<>"']/g,G=RegExp(H.source),V=RegExp(z.source),X=/<%-([\s\S]+?)%>/g,$=/<%([\s\S]+?)%>/g,q=/<%=([\s\S]+?)%>/g,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/[\\^$.*+?()[\]{}|]/g,tt=RegExp(Q.source),et=/^\s+|\s+$/g,nt=/^\s+/,it=/\s+$/,ot=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,st=/\{\n\/\* \[wrapped with (.+)\] \*/,rt=/,? & /,at=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lt=/\\(\\)?/g,ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ct=/\w*$/,ht=/^[-+]0x[0-9a-f]+$/i,pt=/^0b[01]+$/i,dt=/^\[object .+?Constructor\]$/,ft=/^0o[0-7]+$/i,_t=/^(?:0|[1-9]\d*)$/,gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yt=/($^)/,mt=/['\n\r\u2028\u2029\\]/g,Tt="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Dt="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+Tt,St=RegExp("['’]","g"),vt=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),wt=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])"+Tt,"g"),bt=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",Dt].join("|"),"g"),Kt=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),Et=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ot="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),At={};At["[object Float32Array]"]=At["[object Float64Array]"]=At["[object Int8Array]"]=At["[object Int16Array]"]=At["[object Int32Array]"]=At["[object Uint8Array]"]=At["[object Uint8ClampedArray]"]=At["[object Uint16Array]"]=At["[object Uint32Array]"]=!0,At["[object Arguments]"]=At["[object Array]"]=At["[object ArrayBuffer]"]=At["[object Boolean]"]=At["[object DataView]"]=At["[object Date]"]=At["[object Error]"]=At["[object Function]"]=At["[object Map]"]=At["[object Number]"]=At["[object Object]"]=At["[object RegExp]"]=At["[object Set]"]=At["[object String]"]=At["[object WeakMap]"]=!1;var It={};It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object DataView]"]=It["[object Boolean]"]=It["[object Date]"]=It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object Symbol]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Error]"]=It["[object Function]"]=It["[object WeakMap]"]=!1;var xt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Pt=parseFloat,Rt=parseInt,Ct="object"==typeof global&&global&&global.Object===Object&&global,Bt="object"==typeof self&&self&&self.Object===Object&&self,Wt=Ct||Bt||Function("return this")(),Mt=exports&&!exports.nodeType&&exports,Ft=Mt&&module&&!module.nodeType&&module,Lt=Ft&&Ft.exports===Mt,jt=Lt&&Ct.process,Ut=function(){try{var t=Ft&&Ft.require&&Ft.require("util").types;return t||jt&&jt.binding&&jt.binding("util")}catch(t){}}(),kt=Ut&&Ut.isArrayBuffer,Nt=Ut&&Ut.isDate,Ht=Ut&&Ut.isMap,zt=Ut&&Ut.isRegExp,Gt=Ut&&Ut.isSet,Vt=Ut&&Ut.isTypedArray,Xt=T("length"),$t=D({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),qt=D({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),Yt=D({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),Jt=function D(Tt){function Dt(t){if(qi(t)&&!Fr(t)&&!(t instanceof Ct)){if(t instanceof xt)return t;if(Lo.call(t,"__wrapped__"))return Si(t)}return new xt(t)}function wt(){}function xt(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=M}function Ct(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function Mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function Ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function jt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Ft;++e<n;)this.add(t[e])}function Ut(t){this.size=(this.__data__=new Mt(t)).size}function Xt(t,e){var n,i=Fr(t),o=!i&&Mr(t),s=!i&&!o&&jr(t),r=!i&&!o&&!s&&zr(t),a=(o=(i=i||o||s||r)?w(t.length,Ro):[]).length;for(n in t)!e&&!Lo.call(t,n)||i&&("length"==n||s&&("offset"==n||"parent"==n)||r&&("buffer"==n||"byteLength"==n||"byteOffset"==n)||ai(n,a))||o.push(n);return o}function Zt(t){var e=t.length;return e?t[ze(0,e-1)]:M}function Qt(t,e){return yi(Sn(t),le(e,0,t.length))}function te(t){return yi(Sn(t))}function ee(t,e,n){(n===M||ki(t[e],n))&&(n!==M||e in t)||re(t,e,n)}function ne(t,e,n){var i=t[e];Lo.call(t,e)&&ki(i,n)&&(n!==M||e in t)||re(t,e,n)}function ie(t,e){for(var n=t.length;n--;)if(ki(t[n][0],e))return n;return-1}function oe(t,e,n,i){return Ms(t,(function(t,o,s){e(i,t,n(t),s)})),i}function se(t,e){return t&&vn(e,uo(e),t)}function re(t,e,n){"__proto__"==e&&ns?ns(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function ae(t,e){for(var n=-1,i=e.length,o=Ko(i),s=null==t;++n<i;)o[n]=s?M:ao(t,e[n]);return o}function le(t,e,n){return t==t&&(n!==M&&(t=t<=n?t:n),e!==M&&(t=t>=e?t:e)),t}function ue(t,e,i,o,s,r){var a,l=1&e,u=2&e,c=4&e;if(i&&(a=s?i(t,o,s,r):i(t)),a!==M)return a;if(!$i(t))return t;if(o=Fr(t)){if(a=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&Lo.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(t),!l)return Sn(t,a)}else{var h=Xs(t),p="[object Function]"==h||"[object GeneratorFunction]"==h;if(jr(t))return _n(t,l);if("[object Object]"==h||"[object Arguments]"==h||p&&!s){if(a=u||p?{}:si(t),!l)return u?function(t,e){return vn(t,Vs(t),e)}(t,function(t,e){return t&&vn(e,co(e),t)}(a,t)):function(t,e){return vn(t,Gs(t),e)}(t,se(a,t))}else{if(!It[h])return s?t:{};a=function(t,e,n){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return gn(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return e=n?gn(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return yn(t,n);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return(e=new t.constructor(t.source,ct.exec(t))).lastIndex=t.lastIndex,e;case"[object Set]":return new i;case"[object Symbol]":return Cs?xo(Cs.call(t)):{}}}(t,h,l)}}if(r||(r=new Ut),s=r.get(t))return s;if(r.set(t,a),Hr(t))return t.forEach((function(n){a.add(ue(n,e,i,n,t,r))})),a;if(kr(t))return t.forEach((function(n,o){a.set(o,ue(n,e,i,o,t,r))})),a;u=c?u?Jn:Yn:u?co:uo;var d=o?M:u(t);return n(d||t,(function(n,o){d&&(n=t[o=n]),ne(a,o,ue(n,e,i,o,t,r))})),a}function ce(t,e,n){var i=n.length;if(null==t)return!i;for(t=xo(t);i--;){var o=n[i],s=e[o],r=t[o];if(r===M&&!(o in t)||!s(r))return!1}return!0}function he(t,e,n){if("function"!=typeof t)throw new Co("Expected a function");return Ys((function(){t.apply(M,n)}),e)}function pe(t,e,n,i){var o=-1,s=r,u=!0,c=t.length,h=[],p=e.length;if(!c)return h;n&&(e=l(e,b(n))),i?(s=a,u=!1):200<=e.length&&(s=E,u=!1,e=new jt(e));t:for(;++o<c;){var d=t[o],f=null==n?d:n(d);d=i||0!==d?d:0;if(u&&f==f){for(var _=p;_--;)if(e[_]===f)continue t;h.push(d)}else s(e,f,i)||h.push(d)}return h}function de(t,e){var n=!0;return Ms(t,(function(t,i,o){return n=!!e(t,i,o)})),n}function fe(t,e,n){for(var i=-1,o=t.length;++i<o;){var s=t[i],r=e(s);if(null!=r&&(a===M?r==r&&!Qi(r):n(r,a)))var a=r,l=s}return l}function _e(t,e){var n=[];return Ms(t,(function(t,i,o){e(t,i,o)&&n.push(t)})),n}function ge(t,e,n,i,o){var s=-1,r=t.length;for(n||(n=ri),o||(o=[]);++s<r;){var a=t[s];0<e&&n(a)?1<e?ge(a,e-1,n,i,o):u(o,a):i||(o[o.length]=a)}return o}function ye(t,e){return t&&Ls(t,e,uo)}function me(t,e){return t&&js(t,e,uo)}function Te(t,e){return s(e,(function(e){return Gi(t[e])}))}function De(t,e){for(var n=0,i=(e=dn(e,t)).length;null!=t&&n<i;)t=t[mi(e[n++])];return n&&n==i?t:M}function Se(t,e,n){return e=e(t),Fr(t)?e:u(e,n(t))}function ve(t){if(null==t)return t===M?"[object Undefined]":"[object Null]";if(es&&es in xo(t)){var e=Lo.call(t,es),n=t[es];try{t[es]=M;var i=!0}catch(t){}var o=ko.call(t);i&&(e?t[es]=n:delete t[es]),t=o}else t=ko.call(t);return t}function we(t,e){return t>e}function be(t,e){return null!=t&&Lo.call(t,e)}function Ke(t,e){return null!=t&&e in xo(t)}function Ee(t,e,n){for(var i=n?a:r,o=t[0].length,s=t.length,u=s,c=Ko(s),h=1/0,p=[];u--;){var d=t[u];u&&e&&(d=l(d,b(e))),h=fs(d.length,h),c[u]=!n&&(e||120<=o&&120<=d.length)?new jt(u&&d):M}d=t[0];var f=-1,_=c[0];t:for(;++f<o&&p.length<h;){var g=d[f],y=e?e(g):g;g=n||0!==g?g:0;if(_?!E(_,y):!i(p,y,n)){for(u=s;--u;){var m=c[u];if(m?!E(m,y):!i(t[u],y,n))continue t}_&&_.push(y),p.push(g)}}return p}function Oe(e,n,i){return null==(n=null==(e=2>(n=dn(n,e)).length?e:De(e,Je(n,0,-1)))?e:e[mi(Ei(n))])?M:t(n,e,i)}function Ae(t){return qi(t)&&"[object Arguments]"==ve(t)}function Ie(t,e,n,i,o){if(t===e)return!0;if(null==t||null==e||!qi(t)&&!qi(e))return t!=t&&e!=e;t:{var s,r,a=Fr(t),l=Fr(e),u="[object Object]"==(s="[object Arguments]"==(s=a?"[object Array]":Xs(t))?"[object Object]":s);l="[object Object]"==(r="[object Arguments]"==(r=l?"[object Array]":Xs(e))?"[object Object]":r);if((r=s==r)&&jr(t)){if(!jr(e)){e=!1;break t}a=!0,u=!1}if(r&&!u)o||(o=new Ut),e=a||zr(t)?$n(t,e,n,i,Ie,o):function(t,e,n,i,o,s,r){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!s(new Xo(t),new Xo(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return ki(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=x;case"[object Set]":if(a||(a=C),t.size!=e.size&&!(1&i))break;return(n=r.get(t))?n==e:(i|=2,r.set(t,e),e=$n(a(t),a(e),i,o,s,r),r.delete(t),e);case"[object Symbol]":if(Cs)return Cs.call(t)==Cs.call(e)}return!1}(t,e,s,n,i,Ie,o);else{if(!(1&n)&&(a=u&&Lo.call(t,"__wrapped__"),s=l&&Lo.call(e,"__wrapped__"),a||s)){t=a?t.value():t,e=s?e.value():e,o||(o=new Ut),e=Ie(t,e,n,i,o);break t}if(r)e:if(o||(o=new Ut),a=1&n,s=Yn(t),l=s.length,r=Yn(e).length,l==r||a){for(u=l;u--;){var c=s[u];if(!(a?c in e:Lo.call(e,c))){e=!1;break e}}if((r=o.get(t))&&o.get(e))e=r==e;else{r=!0,o.set(t,e),o.set(e,t);for(var h=a;++u<l;){var p=t[c=s[u]],d=e[c];if(i)var f=a?i(d,p,c,e,t,o):i(p,d,c,t,e,o);if(f===M?p!==d&&!Ie(p,d,n,i,o):!f){r=!1;break}h||(h="constructor"==c)}r&&!h&&((n=t.constructor)!=(i=e.constructor)&&"constructor"in t&&"constructor"in e&&!("function"==typeof n&&n instanceof n&&"function"==typeof i&&i instanceof i)&&(r=!1)),o.delete(t),o.delete(e),e=r}}else e=!1;else e=!1}}return e}function xe(t,e,n,i){var o=n.length,s=o,r=!i;if(null==t)return!s;for(t=xo(t);o--;){var a=n[o];if(r&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<s;){var l=(a=n[o])[0],u=t[l],c=a[1];if(r&&a[2]){if(u===M&&!(l in t))return!1}else{if(a=new Ut,i)var h=i(u,c,l,t,e,a);if(h===M?!Ie(c,u,3,i,a):!h)return!1}}return!0}function Pe(t){return!(!$i(t)||Uo&&Uo in t)&&(Gi(t)?zo:dt).test(Ti(t))}function Re(t){return"function"==typeof t?t:null==t?mo:"object"==typeof t?Fr(t)?Fe(t[0],t[1]):Me(t):vo(t)}function Ce(t){if(!hi(t))return ps(t);var e,n=[];for(e in xo(t))Lo.call(t,e)&&"constructor"!=e&&n.push(e);return n}function Be(t,e){return t<e}function We(t,e){var n=-1,i=Ni(t)?Ko(t.length):[];return Ms(t,(function(t,o,s){i[++n]=e(t,o,s)})),i}function Me(t){var e=ni(t);return 1==e.length&&e[0][2]?pi(e[0][0],e[0][1]):function(n){return n===t||xe(n,t,e)}}function Fe(t,e){return ui(t)&&e==e&&!$i(e)?pi(mi(t),e):function(n){var i=ao(n,t);return i===M&&i===e?lo(n,t):Ie(e,i,3)}}function Le(t,e,n,i,o){t!==e&&Ls(e,(function(s,r){if($i(s)){o||(o=new Ut);var a=o,l=fi(t,r),u=fi(e,r);if(!(f=a.get(u))){var c=(f=i?i(l,u,r+"",t,e,a):M)===M;if(c){var h=Fr(u),p=!h&&jr(u),d=!h&&!p&&zr(u),f=u;h||p||d?Fr(l)?f=l:Hi(l)?f=Sn(l):p?(c=!1,f=_n(u,!0)):d?(c=!1,f=yn(u,!0)):f=[]:Ji(u)||Mr(u)?(f=l,Mr(l)?f=so(l):$i(l)&&!Gi(l)||(f=si(u))):c=!1}c&&(a.set(u,f),Le(f,u,n,i,a),a.delete(u))}ee(t,r,f)}else(a=i?i(fi(t,r),s,r+"",t,e,o):M)===M&&(a=s),ee(t,r,a)}),co)}function je(t,e){var n=t.length;if(n)return ai(e+=0>e?n:0,n)?t[e]:M}function Ue(t,e,n){var i=-1;return e=l(e.length?e:[mo],b(ti())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].c;return t}(t=We(t,(function(t,n,o){return{a:l(e,(function(e){return e(t)})),b:++i,c:t}})),(function(t,e){var i;t:{i=-1;for(var o=t.a,s=e.a,r=o.length,a=n.length;++i<r;){var l=mn(o[i],s[i]);if(l){if(i>=a){i=l;break t}i=l*("desc"==n[i]?-1:1);break t}}i=t.b-e.b}return i}))}function ke(t,e,n){for(var i=-1,o=e.length,s={};++i<o;){var r=e[i],a=De(t,r);n(a,r)&&qe(s,dn(r,t),a)}return s}function Ne(t,e,n,i){var o=i?g:_,s=-1,r=e.length,a=t;for(t===e&&(e=Sn(e)),n&&(a=l(t,b(n)));++s<r;){var u=0,c=e[s];for(c=n?n(c):c;-1<(u=o(a,c,u,i));)a!==t&&Zo.call(a,u,1),Zo.call(t,u,1)}return t}function He(t,e){for(var n=t?e.length:0,i=n-1;n--;){var o=e[n];if(n==i||o!==s){var s=o;ai(o)?Zo.call(t,o,1):rn(t,o)}}return t}function ze(t,e){return t+as(ys()*(e-t+1))}function Ge(t,e){var n="";if(!t||1>e||9007199254740991<e)return n;do{e%2&&(n+=t),(e=as(e/2))&&(t+=t)}while(e);return n}function Ve(t,e){return Js(di(t,e,mo),t+"")}function Xe(t){return Zt(po(t))}function $e(t,e){var n=po(t);return yi(n,le(e,0,n.length))}function qe(t,e,n,i){if(!$i(t))return t;for(var o=-1,s=(e=dn(e,t)).length,r=s-1,a=t;null!=a&&++o<s;){var l=mi(e[o]),u=n;if(o!=r){var c=a[l];(u=i?i(c,l,a):M)===M&&(u=$i(c)?c:ai(e[o+1])?[]:{})}ne(a,l,u),a=a[l]}return t}function Ye(t){return yi(po(t))}function Je(t,e,n){var i=-1,o=t.length;for(0>e&&(e=-e>o?0:o+e),0>(n=n>o?o:n)&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0,n=Ko(o);++i<o;)n[i]=t[i+e];return n}function Ze(t,e){var n;return Ms(t,(function(t,i,o){return!(n=e(t,i,o))})),!!n}function Qe(t,e,n){var i=0,o=null==t?i:t.length;if("number"==typeof e&&e==e&&2147483647>=o){for(;i<o;){var s=i+o>>>1,r=t[s];null!==r&&!Qi(r)&&(n?r<=e:r<e)?i=s+1:o=s}return o}return tn(t,e,mo,n)}function tn(t,e,n,i){e=n(e);for(var o=0,s=null==t?0:t.length,r=e!=e,a=null===e,l=Qi(e),u=e===M;o<s;){var c=as((o+s)/2),h=n(t[c]),p=h!==M,d=null===h,f=h==h,_=Qi(h);(r?i||f:u?f&&(i||p):a?f&&p&&(i||!d):l?f&&p&&!d&&(i||!_):!d&&!_&&(i?h<=e:h<e))?o=c+1:s=c}return fs(s,4294967294)}function en(t,e){for(var n=-1,i=t.length,o=0,s=[];++n<i;){var r=t[n],a=e?e(r):r;if(!n||!ki(a,l)){var l=a;s[o++]=0===r?0:r}}return s}function nn(t){return"number"==typeof t?t:Qi(t)?L:+t}function on(t){if("string"==typeof t)return t;if(Fr(t))return l(t,on)+"";if(Qi(t))return Bs?Bs.call(t):"";var e=t+"";return"0"==e&&1/t==-F?"-0":e}function sn(t,e,n){var i=-1,o=r,s=t.length,l=!0,u=[],c=u;if(n)l=!1,o=a;else if(200<=s){if(o=e?null:Hs(t))return C(o);l=!1,o=E,c=new jt}else c=e?[]:u;t:for(;++i<s;){var h=t[i],p=e?e(h):h;h=n||0!==h?h:0;if(l&&p==p){for(var d=c.length;d--;)if(c[d]===p)continue t;e&&c.push(p),u.push(h)}else o(c,p,n)||(c!==u&&c.push(p),u.push(h))}return u}function rn(t,e){return null==(t=2>(e=dn(e,t)).length?t:De(t,Je(e,0,-1)))||delete t[mi(Ei(e))]}function an(t,e,n,i){for(var o=t.length,s=i?o:-1;(i?s--:++s<o)&&e(t[s],s,t););return n?Je(t,i?0:s,i?s+1:o):Je(t,i?s+1:0,i?o:s)}function ln(t,e){var n=t;return n instanceof Ct&&(n=n.value()),c(e,(function(t,e){return e.func.apply(e.thisArg,u([t],e.args))}),n)}function un(t,e,n){var i=t.length;if(2>i)return i?sn(t[0]):[];for(var o=-1,s=Ko(i);++o<i;)for(var r=t[o],a=-1;++a<i;)a!=o&&(s[o]=pe(s[o]||r,t[a],e,n));return sn(ge(s,1),e,n)}function cn(t,e,n){for(var i=-1,o=t.length,s=e.length,r={};++i<o;)n(r,t[i],i<s?e[i]:M);return r}function hn(t){return Hi(t)?t:[]}function pn(t){return"function"==typeof t?t:mo}function dn(t,e){return Fr(t)?t:ui(t,e)?[t]:Zs(ro(t))}function fn(t,e,n){var i=t.length;return n=n===M?i:n,!e&&n>=i?t:Je(t,e,n)}function _n(t,e){if(e)return t.slice();var n=t.length;n=$o?$o(n):new t.constructor(n);return t.copy(n),n}function gn(t){var e=new t.constructor(t.byteLength);return new Xo(e).set(new Xo(t)),e}function yn(t,e){return new t.constructor(e?gn(t.buffer):t.buffer,t.byteOffset,t.length)}function mn(t,e){if(t!==e){var n=t!==M,i=null===t,o=t==t,s=Qi(t),r=e!==M,a=null===e,l=e==e,u=Qi(e);if(!a&&!u&&!s&&t>e||s&&r&&l&&!a&&!u||i&&r&&l||!n&&l||!o)return 1;if(!i&&!s&&!u&&t<e||u&&n&&o&&!i&&!s||a&&n&&o||!r&&o||!l)return-1}return 0}function Tn(t,e,n,i){var o=-1,s=t.length,r=n.length,a=-1,l=e.length,u=ds(s-r,0),c=Ko(l+u);for(i=!i;++a<l;)c[a]=e[a];for(;++o<r;)(i||o<s)&&(c[n[o]]=t[o]);for(;u--;)c[a++]=t[o++];return c}function Dn(t,e,n,i){var o=-1,s=t.length,r=-1,a=n.length,l=-1,u=e.length,c=ds(s-a,0),h=Ko(c+u);for(i=!i;++o<c;)h[o]=t[o];for(c=o;++l<u;)h[c+l]=e[l];for(;++r<a;)(i||o<s)&&(h[c+n[r]]=t[o++]);return h}function Sn(t,e){var n=-1,i=t.length;for(e||(e=Ko(i));++n<i;)e[n]=t[n];return e}function vn(t,e,n,i){var o=!n;n||(n={});for(var s=-1,r=e.length;++s<r;){var a=e[s],l=i?i(n[a],t[a],a,n,t):M;l===M&&(l=t[a]),o?re(n,a,l):ne(n,a,l)}return n}function wn(t,n){return function(i,o){var s=Fr(i)?e:oe,r=n?n():{};return s(i,t,ti(o,2),r)}}function bn(t){return Ve((function(e,n){var i=-1,o=n.length,s=1<o?n[o-1]:M,r=2<o?n[2]:M;s=3<t.length&&"function"==typeof s?(o--,s):M;for(r&&li(n[0],n[1],r)&&(s=3>o?M:s,o=1),e=xo(e);++i<o;)(r=n[i])&&t(e,r,i,s);return e}))}function Kn(t,e){return function(n,i){if(null==n)return n;if(!Ni(n))return t(n,i);for(var o=n.length,s=e?o:-1,r=xo(n);(e?s--:++s<o)&&!1!==i(r[s],s,r););return n}}function En(t){return function(e,n,i){for(var o=-1,s=xo(e),r=(i=i(e)).length;r--;){var a=i[t?r:++o];if(!1===n(s[a],a,s))break}return e}}function On(t){return function(e){e=ro(e);var n=Kt.test(e)?W(e):M,i=n?n[0]:e.charAt(0);return e=n?fn(n,1).join(""):e.slice(1),i[t]()+e}}function An(t){return function(e){return c(go(_o(e).replace(St,"")),t,"")}}function In(t){return function(){switch((e=arguments).length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var e,n=Ws(t.prototype);return $i(e=t.apply(n,e))?e:n}}function xn(e,n,i){var o=In(e);return function s(){for(var r=arguments.length,a=Ko(r),l=r,u=Qn(s);l--;)a[l]=arguments[l];return(r-=(l=3>r&&a[0]!==u&&a[r-1]!==u?[]:R(a,u)).length)<i?kn(e,n,Cn,s.placeholder,M,a,l,M,M,i-r):t(this&&this!==Wt&&this instanceof s?o:e,this,a)}}function Pn(t){return function(e,n,i){var o=xo(e);if(!Ni(e)){var s=ti(n,3);e=uo(e),n=function(t){return s(o[t],t,o)}}return-1<(n=t(e,n,i))?o[s?e[n]:n]:M}}function Rn(t){return qn((function(e){var n=e.length,i=n,o=xt.prototype.thru;for(t&&e.reverse();i--;){if("function"!=typeof(r=e[i]))throw new Co("Expected a function");if(o&&!s&&"wrapper"==Zn(r))var s=new xt([],!0)}for(i=s?i:n;++i<n;){var r,a="wrapper"==(o=Zn(r=e[i]))?zs(r):M;s=a&&ci(a[0])&&424==a[1]&&!a[4].length&&1==a[9]?s[Zn(a[0])].apply(s,a[3]):1==r.length&&ci(r)?s[o]():s.thru(r)}return function(){var t=(o=arguments)[0];if(s&&1==o.length&&Fr(t))return s.plant(t).value();for(var i=0,o=n?e[i].apply(this,o):t;++i<n;)o=e[i].call(this,o);return o}}))}function Cn(t,e,n,i,o,s,r,a,l,u){var c=128&e,h=1&e,p=2&e,d=24&e,f=512&e,_=p?M:In(t);return function g(){for(var y=arguments.length,m=Ko(y),T=y;T--;)m[T]=arguments[T];if(d){var D,S=Qn(g);T=m.length;for(D=0;T--;)m[T]===S&&++D}if(i&&(m=Tn(m,i,o,d)),s&&(m=Dn(m,s,r,d)),y-=D,d&&y<u)return S=R(m,S),kn(t,e,Cn,g.placeholder,n,m,S,a,l,u-y);if(S=h?n:this,T=p?S[t]:t,y=m.length,a){D=m.length;for(var v=fs(a.length,D),w=Sn(m);v--;){var b=a[v];m[v]=ai(b,D)?w[b]:M}}else f&&1<y&&m.reverse();return c&&l<y&&(m.length=l),this&&this!==Wt&&this instanceof g&&(T=_||In(T)),T.apply(S,m)}}function Bn(t,e){return function(n,i){return function(t,e,n,i){return ye(t,(function(t,o,s){e(i,n(t),o,s)})),i}(n,t,e(i),{})}}function Wn(t,e){return function(n,i){var o;if(n===M&&i===M)return e;if(n!==M&&(o=n),i!==M){if(o===M)return i;"string"==typeof n||"string"==typeof i?(n=on(n),i=on(i)):(n=nn(n),i=nn(i)),o=t(n,i)}return o}}function Mn(e){return qn((function(n){return n=l(n,b(ti())),Ve((function(i){var o=this;return e(n,(function(e){return t(e,o,i)}))}))}))}function Fn(t,e){var n=(e=e===M?" ":on(e)).length;return 2>n?n?Ge(e,t):e:(n=Ge(e,rs(t/B(e))),Kt.test(e)?fn(W(n),0,t).join(""):n.slice(0,t))}function Ln(e,n,i,o){var s=1&n,r=In(e);return function n(){for(var a=-1,l=arguments.length,u=-1,c=o.length,h=Ko(c+l),p=this&&this!==Wt&&this instanceof n?r:e;++u<c;)h[u]=o[u];for(;l--;)h[u++]=arguments[++a];return t(p,s?i:this,h)}}function jn(t){return function(e,n,i){i&&"number"!=typeof i&&li(e,n,i)&&(n=i=M),e=eo(e),n===M?(n=e,e=0):n=eo(n),i=i===M?e<n?1:-1:eo(i);var o=-1;n=ds(rs((n-e)/(i||1)),0);for(var s=Ko(n);n--;)s[t?n:++o]=e,e+=i;return s}}function Un(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=oo(e),n=oo(n)),t(e,n)}}function kn(t,e,n,i,o,s,r,a,l,u){var c=8&e;return 4&(e=(e|(c?32:64))&~(c?64:32))||(e&=-4),o=[t,e,o,c?s:M,c?r:M,s=c?M:s,r=c?M:r,a,l,u],n=n.apply(M,o),ci(t)&&qs(n,o),n.placeholder=i,_i(n,t,e)}function Nn(t){var e=Io[t];return function(t,n){if(t=oo(t),n=null==n?0:fs(no(n),292)){var i=(ro(t)+"e").split("e");return+((i=(ro(i=e(i[0]+"e"+(+i[1]+n)))+"e").split("e"))[0]+"e"+(+i[1]-n))}return e(t)}}function Hn(t){return function(e){var n=Xs(e);return"[object Map]"==n?x(e):"[object Set]"==n?function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}(e):function(t,e){return l(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function zn(t,e,n,i,o,s,r,a){var l=2&e;if(!l&&"function"!=typeof t)throw new Co("Expected a function");var u=i?i.length:0;if(u||(e&=-97,i=o=M),r=r===M?r:ds(no(r),0),a=a===M?a:no(a),u-=o?o.length:0,64&e){var c=i,h=o;i=o=M}var p=l?M:zs(t);return s=[t,e,n,i,o,c,h,s,r,a],p&&(e=(n=s[1])|(t=p[1]),i=128==t&&8==n||128==t&&256==n&&s[7].length<=p[8]||384==t&&p[7].length<=p[8]&&8==n,131>e||i)&&(1&t&&(s[2]=p[2],e|=1&n?0:4),(n=p[3])&&(i=s[3],s[3]=i?Tn(i,n,p[4]):n,s[4]=i?R(s[3],"__lodash_placeholder__"):p[4]),(n=p[5])&&(i=s[5],s[5]=i?Dn(i,n,p[6]):n,s[6]=i?R(s[5],"__lodash_placeholder__"):p[6]),(n=p[7])&&(s[7]=n),128&t&&(s[8]=null==s[8]?p[8]:fs(s[8],p[8])),null==s[9]&&(s[9]=p[9]),s[0]=p[0],s[1]=e),t=s[0],e=s[1],n=s[2],i=s[3],o=s[4],!(a=s[9]=s[9]===M?l?0:t.length:ds(s[9]-u,0))&&24&e&&(e&=-25),l=e&&1!=e?8==e||16==e?xn(t,e,a):32!=e&&33!=e||o.length?Cn.apply(M,s):Ln(t,e,n,i):function(t,e,n){var i=1&e,o=In(t);return function e(){return(this&&this!==Wt&&this instanceof e?o:t).apply(i?n:this,arguments)}}(t,e,n),_i((p?Us:qs)(l,s),t,e)}function Gn(t,e,n,i){return t===M||ki(t,Wo[n])&&!Lo.call(i,n)?e:t}function Vn(t,e,n,i,o,s){return $i(t)&&$i(e)&&(s.set(e,t),Le(t,e,M,Vn,s),s.delete(e)),t}function Xn(t){return Ji(t)?M:t}function $n(t,e,n,i,o,s){var r=1&n,a=t.length;if(a!=(l=e.length)&&!(r&&l>a))return!1;if((l=s.get(t))&&s.get(e))return l==e;var l=-1,u=!0,c=2&n?new jt:M;for(s.set(t,e),s.set(e,t);++l<a;){var h=t[l],d=e[l];if(i)var f=r?i(d,h,l,e,t,s):i(h,d,l,t,e,s);if(f!==M){if(f)continue;u=!1;break}if(c){if(!p(e,(function(t,e){if(!E(c,e)&&(h===t||o(h,t,n,i,s)))return c.push(e)}))){u=!1;break}}else if(h!==d&&!o(h,d,n,i,s)){u=!1;break}}return s.delete(t),s.delete(e),u}function qn(t){return Js(di(t,M,bi),t+"")}function Yn(t){return Se(t,uo,Gs)}function Jn(t){return Se(t,co,Vs)}function Zn(t){for(var e=t.name+"",n=Es[e],i=Lo.call(Es,e)?n.length:0;i--;){var o=n[i],s=o.func;if(null==s||s==t)return o.name}return e}function Qn(t){return(Lo.call(Dt,"placeholder")?Dt:t).placeholder}function ti(){var t=(t=Dt.iteratee||To)===To?Re:t;return arguments.length?t(arguments[0],arguments[1]):t}function ei(t,e){var n=t.__data__,i=typeof e;return("string"==i||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==e:null===e)?n["string"==typeof e?"string":"hash"]:n.map}function ni(t){for(var e=uo(t),n=e.length;n--;){var i=e[n],o=t[i];e[n]=[i,o,o==o&&!$i(o)]}return e}function ii(t,e){var n=null==t?M:t[e];return Pe(n)?n:M}function oi(t,e,n){for(var i=-1,o=(e=dn(e,t)).length,s=!1;++i<o;){var r=mi(e[i]);if(!(s=null!=t&&n(t,r)))break;t=t[r]}return s||++i!=o?s:!!(o=null==t?0:t.length)&&Xi(o)&&ai(r,o)&&(Fr(t)||Mr(t))}function si(t){return"function"!=typeof t.constructor||hi(t)?{}:Ws(qo(t))}function ri(t){return Fr(t)||Mr(t)||!!(Qo&&t&&t[Qo])}function ai(t,e){var n=typeof t;return!!(e=e??9007199254740991)&&("number"==n||"symbol"!=n&&_t.test(t))&&-1<t&&0==t%1&&t<e}function li(t,e,n){if(!$i(n))return!1;var i=typeof e;return!!("number"==i?Ni(n)&&ai(e,n.length):"string"==i&&e in n)&&ki(n[e],t)}function ui(t,e){if(Fr(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Qi(t))||J.test(t)||!Y.test(t)||null!=e&&t in xo(e)}function ci(t){var e=Zn(t),n=Dt[e];return"function"==typeof n&&e in Ct.prototype&&(t===n||!!(e=zs(n))&&t===e[0])}function hi(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Wo)}function pi(t,e){return function(n){return null!=n&&n[t]===e&&(e!==M||t in xo(n))}}function di(e,n,i){return n=ds(n===M?e.length-1:n,0),function(){for(var o=arguments,s=-1,r=ds(o.length-n,0),a=Ko(r);++s<r;)a[s]=o[n+s];for(s=-1,r=Ko(n+1);++s<n;)r[s]=o[s];return r[n]=i(a),t(e,this,r)}}function fi(t,e){if("__proto__"!=e)return t[e]}function _i(t,e,n){var i=e+"";e=Js;var o,s=Di;return n=s(o=(o=i.match(st))?o[1].split(rt):[],n),(s=n.length)&&(n[o=s-1]=(1<s?"& ":"")+n[o],n=n.join(2<s?", ":" "),i=i.replace(ot,"{\n/* [wrapped with "+n+"] */\n")),e(t,i)}function gi(t){var e=0,n=0;return function(){var i=_s(),o=16-(i-n);if(n=i,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(M,arguments)}}function yi(t,e){var n=-1,i=(o=t.length)-1;for(e=e===M?o:e;++n<e;){var o,s=t[o=ze(n,i)];t[o]=t[n],t[n]=s}return t.length=e,t}function mi(t){if("string"==typeof t||Qi(t))return t;var e=t+"";return"0"==e&&1/t==-F?"-0":e}function Ti(t){if(null!=t){try{return Fo.call(t)}catch(t){}return t+""}return""}function Di(t,e){return n(j,(function(n){var i="_."+n[0];e&n[1]&&!r(t,i)&&t.push(i)})),t.sort()}function Si(t){if(t instanceof Ct)return t.clone();var e=new xt(t.__wrapped__,t.__chain__);return e.__actions__=Sn(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function vi(t,e,n){var i=null==t?0:t.length;return i?(0>(n=null==n?0:no(n))&&(n=ds(i+n,0)),f(t,ti(e,3),n)):-1}function wi(t,e,n){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return n!==M&&(o=no(n),o=0>n?ds(i+o,0):fs(o,i-1)),f(t,ti(e,3),o,!0)}function bi(t){return null!=t&&t.length?ge(t,1):[]}function Ki(t){return t&&t.length?t[0]:M}function Ei(t){var e=null==t?0:t.length;return e?t[e-1]:M}function Oi(t,e){return t&&t.length&&e&&e.length?Ne(t,e):t}function Ai(t){return null==t?t:ms.call(t)}function Ii(t){if(!t||!t.length)return[];var e=0;return t=s(t,(function(t){if(Hi(t))return e=ds(t.length,e),!0})),w(e,(function(e){return l(t,T(e))}))}function xi(e,n){if(!e||!e.length)return[];var i=Ii(e);return null==n?i:l(i,(function(e){return t(n,M,e)}))}function Pi(t){return(t=Dt(t)).__chain__=!0,t}function Ri(t,e){return e(t)}function Ci(t,e){return(Fr(t)?n:Ms)(t,ti(e,3))}function Bi(t,e){return(Fr(t)?i:Fs)(t,ti(e,3))}function Wi(t,e){return(Fr(t)?l:We)(t,ti(e,3))}function Mi(t,e,n){return e=n?M:e,e=t&&null==e?t.length:e,zn(t,128,M,M,M,M,e)}function Fi(t,e){var n;if("function"!=typeof e)throw new Co("Expected a function");return t=no(t),function(){return 0<--t&&(n=e.apply(this,arguments)),1>=t&&(e=M),n}}function Li(t,e,n){function i(e){var n=l,i=u;return l=u=M,f=e,h=t.apply(i,n)}function o(t){var n=t-d;return t-=f,d===M||n>=e||0>n||g&&t>=c}function s(){var t=Kr();if(o(t))return r(t);var n,i=Ys;n=t-f,t=e-(t-d),n=g?fs(t,c-n):t,p=i(s,n)}function r(t){return p=M,y&&l?i(t):(l=u=M,h)}function a(){var t=Kr(),n=o(t);if(l=arguments,u=this,d=t,n){if(p===M)return f=t=d,p=Ys(s,e),_?i(t):h;if(g)return p=Ys(s,e),i(d)}return p===M&&(p=Ys(s,e)),h}var l,u,c,h,p,d,f=0,_=!1,g=!1,y=!0;if("function"!=typeof t)throw new Co("Expected a function");return e=oo(e)||0,$i(n)&&(_=!!n.leading,c=(g="maxWait"in n)?ds(oo(n.maxWait)||0,e):c,y="trailing"in n?!!n.trailing:y),a.cancel=function(){p!==M&&Ns(p),f=0,l=d=u=p=M},a.flush=function(){return p===M?h:r(Kr())},a}function ji(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new Co("Expected a function");var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],s=n.cache;return s.has(o)?s.get(o):(i=t.apply(this,i),n.cache=s.set(o,i)||s,i)};return n.cache=new(ji.Cache||Ft),n}function Ui(t){if("function"!=typeof t)throw new Co("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function ki(t,e){return t===e||t!=t&&e!=e}function Ni(t){return null!=t&&Xi(t.length)&&!Gi(t)}function Hi(t){return qi(t)&&Ni(t)}function zi(t){if(!qi(t))return!1;var e=ve(t);return"[object Error]"==e||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!Ji(t)}function Gi(t){return!!$i(t)&&("[object Function]"==(t=ve(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function Vi(t){return"number"==typeof t&&t==no(t)}function Xi(t){return"number"==typeof t&&-1<t&&0==t%1&&9007199254740991>=t}function $i(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function qi(t){return null!=t&&"object"==typeof t}function Yi(t){return"number"==typeof t||qi(t)&&"[object Number]"==ve(t)}function Ji(t){return!(!qi(t)||"[object Object]"!=ve(t))&&(null===(t=qo(t))||"function"==typeof(t=Lo.call(t,"constructor")&&t.constructor)&&t instanceof t&&Fo.call(t)==No)}function Zi(t){return"string"==typeof t||!Fr(t)&&qi(t)&&"[object String]"==ve(t)}function Qi(t){return"symbol"==typeof t||qi(t)&&"[object Symbol]"==ve(t)}function to(t){if(!t)return[];if(Ni(t))return Zi(t)?W(t):Sn(t);if(ts&&t[ts]){t=t[ts]();for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}return("[object Map]"==(e=Xs(t))?x:"[object Set]"==e?C:po)(t)}function eo(t){return t?(t=oo(t))===F||t===-F?17976931348623157e292*(0>t?-1:1):t==t?t:0:0===t?t:0}function no(t){var e=(t=eo(t))%1;return t==t?e?t-e:t:0}function io(t){return t?le(no(t),0,4294967295):0}function oo(t){if("number"==typeof t)return t;if(Qi(t))return L;if($i(t)&&(t=$i(t="function"==typeof t.valueOf?t.valueOf():t)?t+"":t),"string"!=typeof t)return 0===t?t:+t;t=t.replace(et,"");var e=pt.test(t);return e||ft.test(t)?Rt(t.slice(2),e?2:8):ht.test(t)?L:+t}function so(t){return vn(t,co(t))}function ro(t){return null==t?"":on(t)}function ao(t,e,n){return(t=null==t?M:De(t,e))===M?n:t}function lo(t,e){return null!=t&&oi(t,e,Ke)}function uo(t){return Ni(t)?Xt(t):Ce(t)}function co(t){if(Ni(t))t=Xt(t,!0);else if($i(t)){var e,n=hi(t),i=[];for(e in t)("constructor"!=e||!n&&Lo.call(t,e))&&i.push(e);t=i}else{if(e=[],null!=t)for(n in xo(t))e.push(n);t=e}return t}function ho(t,e){if(null==t)return{};var n=l(Jn(t),(function(t){return[t]}));return e=ti(e),ke(t,n,(function(t,n){return e(t,n[0])}))}function po(t){return null==t?[]:K(t,uo(t))}function fo(t){return ga(ro(t).toLowerCase())}function _o(t){return(t=ro(t))&&t.replace(gt,$t).replace(vt,"")}function go(t,e,n){return t=ro(t),(e=n?M:e)===M?Et.test(t)?t.match(bt)||[]:t.match(at)||[]:t.match(e)||[]}function yo(t){return function(){return t}}function mo(t){return t}function To(t){return Re("function"==typeof t?t:ue(t,1))}function Do(t,e,i){var o=uo(e),s=Te(e,o);null!=i||$i(e)&&(s.length||!o.length)||(i=e,e=t,t=this,s=Te(e,uo(e)));var r=!($i(i)&&"chain"in i&&!i.chain),a=Gi(t);return n(s,(function(n){var i=e[n];t[n]=i,a&&(t.prototype[n]=function(){var e=this.__chain__;if(r||e){var n=t(this.__wrapped__);return(n.__actions__=Sn(this.__actions__)).push({func:i,args:arguments,thisArg:t}),n.__chain__=e,n}return i.apply(t,u([this.value()],arguments))})})),t}function So(){}function vo(t){return ui(t)?T(mi(t)):function(t){return function(e){return De(e,t)}}(t)}function wo(){return[]}function bo(){return!1}var Ko=(Tt=null==Tt?Wt:Jt.defaults(Wt.Object(),Tt,Jt.pick(Wt,Ot))).Array,Eo=Tt.Date,Oo=Tt.Error,Ao=Tt.Function,Io=Tt.Math,xo=Tt.Object,Po=Tt.RegExp,Ro=Tt.String,Co=Tt.TypeError,Bo=Ko.prototype,Wo=xo.prototype,Mo=Tt["__core-js_shared__"],Fo=Ao.prototype.toString,Lo=Wo.hasOwnProperty,jo=0,Uo=function(){var t=/[^.]+$/.exec(Mo&&Mo.keys&&Mo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ko=Wo.toString,No=Fo.call(xo),Ho=Wt._,zo=Po("^"+Fo.call(Lo).replace(Q,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Go=Lt?Tt.Buffer:M,Vo=Tt.Symbol,Xo=Tt.Uint8Array,$o=Go?Go.allocUnsafe:M,qo=P(xo.getPrototypeOf,xo),Yo=xo.create,Jo=Wo.propertyIsEnumerable,Zo=Bo.splice,Qo=Vo?Vo.isConcatSpreadable:M,ts=Vo?Vo.iterator:M,es=Vo?Vo.toStringTag:M,ns=function(){try{var t=ii(xo,"defineProperty");return t({},"",{}),t}catch(t){}}(),is=Tt.clearTimeout!==Wt.clearTimeout&&Tt.clearTimeout,os=Eo&&Eo.now!==Wt.Date.now&&Eo.now,ss=Tt.setTimeout!==Wt.setTimeout&&Tt.setTimeout,rs=Io.ceil,as=Io.floor,ls=xo.getOwnPropertySymbols,us=Go?Go.isBuffer:M,cs=Tt.isFinite,hs=Bo.join,ps=P(xo.keys,xo),ds=Io.max,fs=Io.min,_s=Eo.now,gs=Tt.parseInt,ys=Io.random,ms=Bo.reverse,Ts=ii(Tt,"DataView"),Ds=ii(Tt,"Map"),Ss=ii(Tt,"Promise"),vs=ii(Tt,"Set"),ws=ii(Tt,"WeakMap"),bs=ii(xo,"create"),Ks=ws&&new ws,Es={},Os=Ti(Ts),As=Ti(Ds),Is=Ti(Ss),xs=Ti(vs),Ps=Ti(ws),Rs=Vo?Vo.prototype:M,Cs=Rs?Rs.valueOf:M,Bs=Rs?Rs.toString:M,Ws=function(){function t(){}return function(e){return $i(e)?Yo?Yo(e):(t.prototype=e,e=new t,t.prototype=M,e):{}}}();Dt.templateSettings={escape:X,evaluate:$,interpolate:q,variable:"",imports:{_:Dt}},Dt.prototype=wt.prototype,Dt.prototype.constructor=Dt,xt.prototype=Ws(wt.prototype),xt.prototype.constructor=xt,Ct.prototype=Ws(wt.prototype),Ct.prototype.constructor=Ct,Bt.prototype.clear=function(){this.__data__=bs?bs(null):{},this.size=0},Bt.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},Bt.prototype.get=function(t){var e=this.__data__;return bs?"__lodash_hash_undefined__"===(t=e[t])?M:t:Lo.call(e,t)?e[t]:M},Bt.prototype.has=function(t){var e=this.__data__;return bs?e[t]!==M:Lo.call(e,t)},Bt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=bs&&e===M?"__lodash_hash_undefined__":e,this},Mt.prototype.clear=function(){this.__data__=[],this.size=0},Mt.prototype.delete=function(t){var e=this.__data__;return!(0>(t=ie(e,t))||(t==e.length-1?e.pop():Zo.call(e,t,1),--this.size,0))},Mt.prototype.get=function(t){var e=this.__data__;return 0>(t=ie(e,t))?M:e[t][1]},Mt.prototype.has=function(t){return-1<ie(this.__data__,t)},Mt.prototype.set=function(t,e){var n=this.__data__,i=ie(n,t);return 0>i?(++this.size,n.push([t,e])):n[i][1]=e,this},Ft.prototype.clear=function(){this.size=0,this.__data__={hash:new Bt,map:new(Ds||Mt),string:new Bt}},Ft.prototype.delete=function(t){return t=ei(this,t).delete(t),this.size-=t?1:0,t},Ft.prototype.get=function(t){return ei(this,t).get(t)},Ft.prototype.has=function(t){return ei(this,t).has(t)},Ft.prototype.set=function(t,e){var n=ei(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this},jt.prototype.add=jt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},jt.prototype.has=function(t){return this.__data__.has(t)},Ut.prototype.clear=function(){this.__data__=new Mt,this.size=0},Ut.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},Ut.prototype.get=function(t){return this.__data__.get(t)},Ut.prototype.has=function(t){return this.__data__.has(t)},Ut.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Mt){var i=n.__data__;if(!Ds||199>i.length)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new Ft(i)}return n.set(t,e),this.size=n.size,this};var Ms=Kn(ye),Fs=Kn(me,!0),Ls=En(),js=En(!0),Us=Ks?function(t,e){return Ks.set(t,e),t}:mo,ks=ns?function(t,e){return ns(t,"toString",{configurable:!0,enumerable:!1,value:yo(e),writable:!0})}:mo,Ns=is||function(t){return Wt.clearTimeout(t)},Hs=vs&&1/C(new vs([,-0]))[1]==F?function(t){return new vs(t)}:So,zs=Ks?function(t){return Ks.get(t)}:So,Gs=ls?function(t){return null==t?[]:(t=xo(t),s(ls(t),(function(e){return Jo.call(t,e)})))}:wo,Vs=ls?function(t){for(var e=[];t;)u(e,Gs(t)),t=qo(t);return e}:wo,Xs=ve;(Ts&&"[object DataView]"!=Xs(new Ts(new ArrayBuffer(1)))||Ds&&"[object Map]"!=Xs(new Ds)||Ss&&"[object Promise]"!=Xs(Ss.resolve())||vs&&"[object Set]"!=Xs(new vs)||ws&&"[object WeakMap]"!=Xs(new ws))&&(Xs=function(t){var e=ve(t);if(t=(t="[object Object]"==e?t.constructor:M)?Ti(t):"")switch(t){case Os:return"[object DataView]";case As:return"[object Map]";case Is:return"[object Promise]";case xs:return"[object Set]";case Ps:return"[object WeakMap]"}return e});var $s=Mo?Gi:bo,qs=gi(Us),Ys=ss||function(t,e){return Wt.setTimeout(t,e)},Js=gi(ks),Zs=function(t){var e=(t=ji(t,(function(t){return 500===e.size&&e.clear(),t}))).cache;return t}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Z,(function(t,n,i,o){e.push(i?o.replace(lt,"$1"):n||t)})),e})),Qs=Ve((function(t,e){return Hi(t)?pe(t,ge(e,1,Hi,!0)):[]})),tr=Ve((function(t,e){var n=Ei(e);return Hi(n)&&(n=M),Hi(t)?pe(t,ge(e,1,Hi,!0),ti(n,2)):[]})),er=Ve((function(t,e){var n=Ei(e);return Hi(n)&&(n=M),Hi(t)?pe(t,ge(e,1,Hi,!0),M,n):[]})),nr=Ve((function(t){var e=l(t,hn);return e.length&&e[0]===t[0]?Ee(e):[]})),ir=Ve((function(t){var e=Ei(t),n=l(t,hn);return e===Ei(n)?e=M:n.pop(),n.length&&n[0]===t[0]?Ee(n,ti(e,2)):[]})),or=Ve((function(t){var e=Ei(t),n=l(t,hn);return(e="function"==typeof e?e:M)&&n.pop(),n.length&&n[0]===t[0]?Ee(n,M,e):[]})),sr=Ve(Oi),rr=qn((function(t,e){var n=null==t?0:t.length,i=ae(t,e);return He(t,l(e,(function(t){return ai(t,n)?+t:t})).sort(mn)),i})),ar=Ve((function(t){return sn(ge(t,1,Hi,!0))})),lr=Ve((function(t){var e=Ei(t);return Hi(e)&&(e=M),sn(ge(t,1,Hi,!0),ti(e,2))})),ur=Ve((function(t){var e="function"==typeof(e=Ei(t))?e:M;return sn(ge(t,1,Hi,!0),M,e)})),cr=Ve((function(t,e){return Hi(t)?pe(t,e):[]})),hr=Ve((function(t){return un(s(t,Hi))})),pr=Ve((function(t){var e=Ei(t);return Hi(e)&&(e=M),un(s(t,Hi),ti(e,2))})),dr=Ve((function(t){var e="function"==typeof(e=Ei(t))?e:M;return un(s(t,Hi),M,e)})),fr=Ve(Ii),_r=Ve((function(t){var e="function"==typeof(e=1<(e=t.length)?t[e-1]:M)?(t.pop(),e):M;return xi(t,e)})),gr=qn((function(t){var e=t.length,n=e?t[0]:0,i=this.__wrapped__,o=function(e){return ae(e,t)};return!(1<e||this.__actions__.length)&&i instanceof Ct&&ai(n)?((i=i.slice(n,+n+(e?1:0))).__actions__.push({func:Ri,args:[o],thisArg:M}),new xt(i,this.__chain__).thru((function(t){return e&&!t.length&&t.push(M),t}))):this.thru(o)})),yr=wn((function(t,e,n){Lo.call(t,n)?++t[n]:re(t,n,1)})),mr=Pn(vi),Tr=Pn(wi),Dr=wn((function(t,e,n){Lo.call(t,n)?t[n].push(e):re(t,n,[e])})),Sr=Ve((function(e,n,i){var o=-1,s="function"==typeof n,r=Ni(e)?Ko(e.length):[];return Ms(e,(function(e){r[++o]=s?t(n,e,i):Oe(e,n,i)})),r})),vr=wn((function(t,e,n){re(t,n,e)})),wr=wn((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]})),br=Ve((function(t,e){if(null==t)return[];var n=e.length;return 1<n&&li(t,e[0],e[1])?e=[]:2<n&&li(e[0],e[1],e[2])&&(e=[e[0]]),Ue(t,ge(e,1),[])})),Kr=os||function(){return Wt.Date.now()},Er=Ve((function(t,e,n){var i=1;if(n.length){var o=R(n,Qn(Er));i=32|i}return zn(t,i,e,n,o)})),Or=Ve((function(t,e,n){var i=3;if(n.length){var o=R(n,Qn(Or));i=32|i}return zn(e,i,t,n,o)})),Ar=Ve((function(t,e){return he(t,1,e)})),Ir=Ve((function(t,e,n){return he(t,oo(e)||0,n)}));ji.Cache=Ft;var xr=Ve((function(e,n){var i=(n=1==n.length&&Fr(n[0])?l(n[0],b(ti())):l(ge(n,1),b(ti()))).length;return Ve((function(o){for(var s=-1,r=fs(o.length,i);++s<r;)o[s]=n[s].call(this,o[s]);return t(e,this,o)}))})),Pr=Ve((function(t,e){return zn(t,32,M,e,R(e,Qn(Pr)))})),Rr=Ve((function(t,e){return zn(t,64,M,e,R(e,Qn(Rr)))})),Cr=qn((function(t,e){return zn(t,256,M,M,M,e)})),Br=Un(we),Wr=Un((function(t,e){return t>=e})),Mr=Ae(function(){return arguments}())?Ae:function(t){return qi(t)&&Lo.call(t,"callee")&&!Jo.call(t,"callee")},Fr=Ko.isArray,Lr=kt?b(kt):function(t){return qi(t)&&"[object ArrayBuffer]"==ve(t)},jr=us||bo,Ur=Nt?b(Nt):function(t){return qi(t)&&"[object Date]"==ve(t)},kr=Ht?b(Ht):function(t){return qi(t)&&"[object Map]"==Xs(t)},Nr=zt?b(zt):function(t){return qi(t)&&"[object RegExp]"==ve(t)},Hr=Gt?b(Gt):function(t){return qi(t)&&"[object Set]"==Xs(t)},zr=Vt?b(Vt):function(t){return qi(t)&&Xi(t.length)&&!!At[ve(t)]},Gr=Un(Be),Vr=Un((function(t,e){return t<=e})),Xr=bn((function(t,e){if(hi(e)||Ni(e))vn(e,uo(e),t);else for(var n in e)Lo.call(e,n)&&ne(t,n,e[n])})),$r=bn((function(t,e){vn(e,co(e),t)})),qr=bn((function(t,e,n,i){vn(e,co(e),t,i)})),Yr=bn((function(t,e,n,i){vn(e,uo(e),t,i)})),Jr=qn(ae),Zr=Ve((function(t,e){t=xo(t);var n=-1,i=e.length;for((o=2<i?e[2]:M)&&li(e[0],e[1],o)&&(i=1);++n<i;)for(var o,s=co(o=e[n]),r=-1,a=s.length;++r<a;){var l=s[r],u=t[l];(u===M||ki(u,Wo[l])&&!Lo.call(t,l))&&(t[l]=o[l])}return t})),Qr=Ve((function(e){return e.push(M,Vn),t(oa,M,e)})),ta=Bn((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=ko.call(e)),t[e]=n}),yo(mo)),ea=Bn((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=ko.call(e)),Lo.call(t,e)?t[e].push(n):t[e]=[n]}),ti),na=Ve(Oe),ia=bn((function(t,e,n){Le(t,e,n)})),oa=bn((function(t,e,n,i){Le(t,e,n,i)})),sa=qn((function(t,e){var n={};if(null==t)return n;var i=!1;e=l(e,(function(e){return e=dn(e,t),i||(i=1<e.length),e})),vn(t,Jn(t),n),i&&(n=ue(n,7,Xn));for(var o=e.length;o--;)rn(n,e[o]);return n})),ra=qn((function(t,e){return null==t?{}:function(t,e){return ke(t,e,(function(e,n){return lo(t,n)}))}(t,e)})),aa=Hn(uo),la=Hn(co),ua=An((function(t,e,n){return e=e.toLowerCase(),t+(n?fo(e):e)})),ca=An((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),ha=An((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),pa=On("toLowerCase"),da=An((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()})),fa=An((function(t,e,n){return t+(n?" ":"")+ga(e)})),_a=An((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),ga=On("toUpperCase"),ya=Ve((function(e,n){try{return t(e,M,n)}catch(t){return zi(t)?t:new Oo(t)}})),ma=qn((function(t,e){return n(e,(function(e){e=mi(e),re(t,e,Er(t[e],t))})),t})),Ta=Rn(),Da=Rn(!0),Sa=Ve((function(t,e){return function(n){return Oe(n,t,e)}})),va=Ve((function(t,e){return function(n){return Oe(t,n,e)}})),wa=Mn(l),ba=Mn(o),Ka=Mn(p),Ea=jn(),Oa=jn(!0),Aa=Wn((function(t,e){return t+e}),0),Ia=Nn("ceil"),xa=Wn((function(t,e){return t/e}),1),Pa=Nn("floor"),Ra=Wn((function(t,e){return t*e}),1),Ca=Nn("round"),Ba=Wn((function(t,e){return t-e}),0);return Dt.after=function(t,e){if("function"!=typeof e)throw new Co("Expected a function");return t=no(t),function(){if(1>--t)return e.apply(this,arguments)}},Dt.ary=Mi,Dt.assign=Xr,Dt.assignIn=$r,Dt.assignInWith=qr,Dt.assignWith=Yr,Dt.at=Jr,Dt.before=Fi,Dt.bind=Er,Dt.bindAll=ma,Dt.bindKey=Or,Dt.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Fr(t)?t:[t]},Dt.chain=Pi,Dt.chunk=function(t,e,n){if(e=(n?li(t,e,n):e===M)?1:ds(no(e),0),!(n=null==t?0:t.length)||1>e)return[];for(var i=0,o=0,s=Ko(rs(n/e));i<n;)s[o++]=Je(t,i,i+=e);return s},Dt.compact=function(t){for(var e=-1,n=null==t?0:t.length,i=0,o=[];++e<n;){var s=t[e];s&&(o[i++]=s)}return o},Dt.concat=function(){var t=arguments.length;if(!t)return[];for(var e=Ko(t-1),n=arguments[0];t--;)e[t-1]=arguments[t];return u(Fr(n)?Sn(n):[n],ge(e,1))},Dt.cond=function(e){var n=null==e?0:e.length,i=ti();return e=n?l(e,(function(t){if("function"!=typeof t[1])throw new Co("Expected a function");return[i(t[0]),t[1]]})):[],Ve((function(i){for(var o=-1;++o<n;){var s=e[o];if(t(s[0],this,i))return t(s[1],this,i)}}))},Dt.conforms=function(t){return function(t){var e=uo(t);return function(n){return ce(n,t,e)}}(ue(t,1))},Dt.constant=yo,Dt.countBy=yr,Dt.create=function(t,e){var n=Ws(t);return null==e?n:se(n,e)},Dt.curry=function t(e,n,i){return(e=zn(e,8,M,M,M,M,M,n=i?M:n)).placeholder=t.placeholder,e},Dt.curryRight=function t(e,n,i){return(e=zn(e,16,M,M,M,M,M,n=i?M:n)).placeholder=t.placeholder,e},Dt.debounce=Li,Dt.defaults=Zr,Dt.defaultsDeep=Qr,Dt.defer=Ar,Dt.delay=Ir,Dt.difference=Qs,Dt.differenceBy=tr,Dt.differenceWith=er,Dt.drop=function(t,e,n){var i=null==t?0:t.length;return i?Je(t,0>(e=n||e===M?1:no(e))?0:e,i):[]},Dt.dropRight=function(t,e,n){var i=null==t?0:t.length;return i?Je(t,0,0>(e=i-(e=n||e===M?1:no(e)))?0:e):[]},Dt.dropRightWhile=function(t,e){return t&&t.length?an(t,ti(e,3),!0,!0):[]},Dt.dropWhile=function(t,e){return t&&t.length?an(t,ti(e,3),!0):[]},Dt.fill=function(t,e,n,i){var o=null==t?0:t.length;if(!o)return[];for(n&&"number"!=typeof n&&li(t,e,n)&&(n=0,i=o),o=t.length,0>(n=no(n))&&(n=-n>o?0:o+n),0>(i=i===M||i>o?o:no(i))&&(i+=o),i=n>i?0:io(i);n<i;)t[n++]=e;return t},Dt.filter=function(t,e){return(Fr(t)?s:_e)(t,ti(e,3))},Dt.flatMap=function(t,e){return ge(Wi(t,e),1)},Dt.flatMapDeep=function(t,e){return ge(Wi(t,e),F)},Dt.flatMapDepth=function(t,e,n){return n=n===M?1:no(n),ge(Wi(t,e),n)},Dt.flatten=bi,Dt.flattenDeep=function(t){return null!=t&&t.length?ge(t,F):[]},Dt.flattenDepth=function(t,e){return null!=t&&t.length?ge(t,e=e===M?1:no(e)):[]},Dt.flip=function(t){return zn(t,512)},Dt.flow=Ta,Dt.flowRight=Da,Dt.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,i={};++e<n;){var o=t[e];i[o[0]]=o[1]}return i},Dt.functions=function(t){return null==t?[]:Te(t,uo(t))},Dt.functionsIn=function(t){return null==t?[]:Te(t,co(t))},Dt.groupBy=Dr,Dt.initial=function(t){return null!=t&&t.length?Je(t,0,-1):[]},Dt.intersection=nr,Dt.intersectionBy=ir,Dt.intersectionWith=or,Dt.invert=ta,Dt.invertBy=ea,Dt.invokeMap=Sr,Dt.iteratee=To,Dt.keyBy=vr,Dt.keys=uo,Dt.keysIn=co,Dt.map=Wi,Dt.mapKeys=function(t,e){var n={};return e=ti(e,3),ye(t,(function(t,i,o){re(n,e(t,i,o),t)})),n},Dt.mapValues=function(t,e){var n={};return e=ti(e,3),ye(t,(function(t,i,o){re(n,i,e(t,i,o))})),n},Dt.matches=function(t){return Me(ue(t,1))},Dt.matchesProperty=function(t,e){return Fe(t,ue(e,1))},Dt.memoize=ji,Dt.merge=ia,Dt.mergeWith=oa,Dt.method=Sa,Dt.methodOf=va,Dt.mixin=Do,Dt.negate=Ui,Dt.nthArg=function(t){return t=no(t),Ve((function(e){return je(e,t)}))},Dt.omit=sa,Dt.omitBy=function(t,e){return ho(t,Ui(ti(e)))},Dt.once=function(t){return Fi(2,t)},Dt.orderBy=function(t,e,n,i){return null==t?[]:(Fr(e)||(e=null==e?[]:[e]),Fr(n=i?M:n)||(n=null==n?[]:[n]),Ue(t,e,n))},Dt.over=wa,Dt.overArgs=xr,Dt.overEvery=ba,Dt.overSome=Ka,Dt.partial=Pr,Dt.partialRight=Rr,Dt.partition=wr,Dt.pick=ra,Dt.pickBy=ho,Dt.property=vo,Dt.propertyOf=function(t){return function(e){return null==t?M:De(t,e)}},Dt.pull=sr,Dt.pullAll=Oi,Dt.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?Ne(t,e,ti(n,2)):t},Dt.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?Ne(t,e,M,n):t},Dt.pullAt=rr,Dt.range=Ea,Dt.rangeRight=Oa,Dt.rearg=Cr,Dt.reject=function(t,e){return(Fr(t)?s:_e)(t,Ui(ti(e,3)))},Dt.remove=function(t,e){var n=[];if(!t||!t.length)return n;var i=-1,o=[],s=t.length;for(e=ti(e,3);++i<s;){var r=t[i];e(r,i,t)&&(n.push(r),o.push(i))}return He(t,o),n},Dt.rest=function(t,e){if("function"!=typeof t)throw new Co("Expected a function");return Ve(t,e=e===M?e:no(e))},Dt.reverse=Ai,Dt.sampleSize=function(t,e,n){return e=(n?li(t,e,n):e===M)?1:no(e),(Fr(t)?Qt:$e)(t,e)},Dt.set=function(t,e,n){return null==t?t:qe(t,e,n)},Dt.setWith=function(t,e,n,i){return i="function"==typeof i?i:M,null==t?t:qe(t,e,n,i)},Dt.shuffle=function(t){return(Fr(t)?te:Ye)(t)},Dt.slice=function(t,e,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&li(t,e,n)?(e=0,n=i):(e=null==e?0:no(e),n=n===M?i:no(n)),Je(t,e,n)):[]},Dt.sortBy=br,Dt.sortedUniq=function(t){return t&&t.length?en(t):[]},Dt.sortedUniqBy=function(t,e){return t&&t.length?en(t,ti(e,2)):[]},Dt.split=function(t,e,n){return n&&"number"!=typeof n&&li(t,e,n)&&(e=n=M),(n=n===M?4294967295:n>>>0)?(t=ro(t))&&("string"==typeof e||null!=e&&!Nr(e))&&(!(e=on(e))&&Kt.test(t))?fn(W(t),0,n):t.split(e,n):[]},Dt.spread=function(e,n){if("function"!=typeof e)throw new Co("Expected a function");return n=null==n?0:ds(no(n),0),Ve((function(i){var o=i[n];return i=fn(i,0,n),o&&u(i,o),t(e,this,i)}))},Dt.tail=function(t){var e=null==t?0:t.length;return e?Je(t,1,e):[]},Dt.take=function(t,e,n){return t&&t.length?Je(t,0,0>(e=n||e===M?1:no(e))?0:e):[]},Dt.takeRight=function(t,e,n){var i=null==t?0:t.length;return i?Je(t,0>(e=i-(e=n||e===M?1:no(e)))?0:e,i):[]},Dt.takeRightWhile=function(t,e){return t&&t.length?an(t,ti(e,3),!1,!0):[]},Dt.takeWhile=function(t,e){return t&&t.length?an(t,ti(e,3)):[]},Dt.tap=function(t,e){return e(t),t},Dt.throttle=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new Co("Expected a function");return $i(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Li(t,e,{leading:i,maxWait:e,trailing:o})},Dt.thru=Ri,Dt.toArray=to,Dt.toPairs=aa,Dt.toPairsIn=la,Dt.toPath=function(t){return Fr(t)?l(t,mi):Qi(t)?[t]:Sn(Zs(ro(t)))},Dt.toPlainObject=so,Dt.transform=function(t,e,i){var o=Fr(t),s=o||jr(t)||zr(t);if(e=ti(e,4),null==i){var r=t&&t.constructor;i=s?o?new r:[]:$i(t)&&Gi(r)?Ws(qo(t)):{}}return(s?n:ye)(t,(function(t,n,o){return e(i,t,n,o)})),i},Dt.unary=function(t){return Mi(t,1)},Dt.union=ar,Dt.unionBy=lr,Dt.unionWith=ur,Dt.uniq=function(t){return t&&t.length?sn(t):[]},Dt.uniqBy=function(t,e){return t&&t.length?sn(t,ti(e,2)):[]},Dt.uniqWith=function(t,e){return e="function"==typeof e?e:M,t&&t.length?sn(t,M,e):[]},Dt.unset=function(t,e){return null==t||rn(t,e)},Dt.unzip=Ii,Dt.unzipWith=xi,Dt.update=function(t,e,n){return null!=t&&(t=qe(t,e,(n=pn(n))(De(t,e)),void 0)),t},Dt.updateWith=function(t,e,n,i){return i="function"==typeof i?i:M,null!=t&&(t=qe(t,e,(n=pn(n))(De(t,e)),i)),t},Dt.values=po,Dt.valuesIn=function(t){return null==t?[]:K(t,co(t))},Dt.without=cr,Dt.words=go,Dt.wrap=function(t,e){return Pr(pn(e),t)},Dt.xor=hr,Dt.xorBy=pr,Dt.xorWith=dr,Dt.zip=fr,Dt.zipObject=function(t,e){return cn(t||[],e||[],ne)},Dt.zipObjectDeep=function(t,e){return cn(t||[],e||[],qe)},Dt.zipWith=_r,Dt.entries=aa,Dt.entriesIn=la,Dt.extend=$r,Dt.extendWith=qr,Do(Dt,Dt),Dt.add=Aa,Dt.attempt=ya,Dt.camelCase=ua,Dt.capitalize=fo,Dt.ceil=Ia,Dt.clamp=function(t,e,n){return n===M&&(n=e,e=M),n!==M&&(n=(n=oo(n))==n?n:0),e!==M&&(e=(e=oo(e))==e?e:0),le(oo(t),e,n)},Dt.clone=function(t){return ue(t,4)},Dt.cloneDeep=function(t){return ue(t,5)},Dt.cloneDeepWith=function(t,e){return ue(t,5,e="function"==typeof e?e:M)},Dt.cloneWith=function(t,e){return ue(t,4,e="function"==typeof e?e:M)},Dt.conformsTo=function(t,e){return null==e||ce(t,e,uo(e))},Dt.deburr=_o,Dt.defaultTo=function(t,e){return null==t||t!=t?e:t},Dt.divide=xa,Dt.endsWith=function(t,e,n){t=ro(t),e=on(e);var i=t.length;i=n=n===M?i:le(no(n),0,i);return 0<=(n-=e.length)&&t.slice(n,i)==e},Dt.eq=ki,Dt.escape=function(t){return(t=ro(t))&&V.test(t)?t.replace(z,qt):t},Dt.escapeRegExp=function(t){return(t=ro(t))&&tt.test(t)?t.replace(Q,"\\$&"):t},Dt.every=function(t,e,n){var i=Fr(t)?o:de;return n&&li(t,e,n)&&(e=M),i(t,ti(e,3))},Dt.find=mr,Dt.findIndex=vi,Dt.findKey=function(t,e){return d(t,ti(e,3),ye)},Dt.findLast=Tr,Dt.findLastIndex=wi,Dt.findLastKey=function(t,e){return d(t,ti(e,3),me)},Dt.floor=Pa,Dt.forEach=Ci,Dt.forEachRight=Bi,Dt.forIn=function(t,e){return null==t?t:Ls(t,ti(e,3),co)},Dt.forInRight=function(t,e){return null==t?t:js(t,ti(e,3),co)},Dt.forOwn=function(t,e){return t&&ye(t,ti(e,3))},Dt.forOwnRight=function(t,e){return t&&me(t,ti(e,3))},Dt.get=ao,Dt.gt=Br,Dt.gte=Wr,Dt.has=function(t,e){return null!=t&&oi(t,e,be)},Dt.hasIn=lo,Dt.head=Ki,Dt.identity=mo,Dt.includes=function(t,e,n,i){return t=Ni(t)?t:po(t),n=n&&!i?no(n):0,i=t.length,0>n&&(n=ds(i+n,0)),Zi(t)?n<=i&&-1<t.indexOf(e,n):!!i&&-1<_(t,e,n)},Dt.indexOf=function(t,e,n){var i=null==t?0:t.length;return i?(0>(n=null==n?0:no(n))&&(n=ds(i+n,0)),_(t,e,n)):-1},Dt.inRange=function(t,e,n){return e=eo(e),n===M?(n=e,e=0):n=eo(n),(t=oo(t))>=fs(e,n)&&t<ds(e,n)},Dt.invoke=na,Dt.isArguments=Mr,Dt.isArray=Fr,Dt.isArrayBuffer=Lr,Dt.isArrayLike=Ni,Dt.isArrayLikeObject=Hi,Dt.isBoolean=function(t){return!0===t||!1===t||qi(t)&&"[object Boolean]"==ve(t)},Dt.isBuffer=jr,Dt.isDate=Ur,Dt.isElement=function(t){return qi(t)&&1===t.nodeType&&!Ji(t)},Dt.isEmpty=function(t){if(null==t)return!0;if(Ni(t)&&(Fr(t)||"string"==typeof t||"function"==typeof t.splice||jr(t)||zr(t)||Mr(t)))return!t.length;var e=Xs(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(hi(t))return!Ce(t).length;for(var n in t)if(Lo.call(t,n))return!1;return!0},Dt.isEqual=function(t,e){return Ie(t,e)},Dt.isEqualWith=function(t,e,n){var i=(n="function"==typeof n?n:M)?n(t,e):M;return i===M?Ie(t,e,M,n):!!i},Dt.isError=zi,Dt.isFinite=function(t){return"number"==typeof t&&cs(t)},Dt.isFunction=Gi,Dt.isInteger=Vi,Dt.isLength=Xi,Dt.isMap=kr,Dt.isMatch=function(t,e){return t===e||xe(t,e,ni(e))},Dt.isMatchWith=function(t,e,n){return n="function"==typeof n?n:M,xe(t,e,ni(e),n)},Dt.isNaN=function(t){return Yi(t)&&t!=+t},Dt.isNative=function(t){if($s(t))throw new Oo("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Pe(t)},Dt.isNil=function(t){return null==t},Dt.isNull=function(t){return null===t},Dt.isNumber=Yi,Dt.isObject=$i,Dt.isObjectLike=qi,Dt.isPlainObject=Ji,Dt.isRegExp=Nr,Dt.isSafeInteger=function(t){return Vi(t)&&-9007199254740991<=t&&9007199254740991>=t},Dt.isSet=Hr,Dt.isString=Zi,Dt.isSymbol=Qi,Dt.isTypedArray=zr,Dt.isUndefined=function(t){return t===M},Dt.isWeakMap=function(t){return qi(t)&&"[object WeakMap]"==Xs(t)},Dt.isWeakSet=function(t){return qi(t)&&"[object WeakSet]"==ve(t)},Dt.join=function(t,e){return null==t?"":hs.call(t,e)},Dt.kebabCase=ca,Dt.last=Ei,Dt.lastIndexOf=function(t,e,n){var i=null==t?0:t.length;if(!i)return-1;var o=i;if(n!==M&&(o=0>(o=no(n))?ds(i+o,0):fs(o,i-1)),e==e)t:{for(n=o+1;n--;)if(t[n]===e){t=n;break t}t=n}else t=f(t,y,o,!0);return t},Dt.lowerCase=ha,Dt.lowerFirst=pa,Dt.lt=Gr,Dt.lte=Vr,Dt.max=function(t){return t&&t.length?fe(t,mo,we):M},Dt.maxBy=function(t,e){return t&&t.length?fe(t,ti(e,2),we):M},Dt.mean=function(t){return m(t,mo)},Dt.meanBy=function(t,e){return m(t,ti(e,2))},Dt.min=function(t){return t&&t.length?fe(t,mo,Be):M},Dt.minBy=function(t,e){return t&&t.length?fe(t,ti(e,2),Be):M},Dt.stubArray=wo,Dt.stubFalse=bo,Dt.stubObject=function(){return{}},Dt.stubString=function(){return""},Dt.stubTrue=function(){return!0},Dt.multiply=Ra,Dt.nth=function(t,e){return t&&t.length?je(t,no(e)):M},Dt.noConflict=function(){return Wt._===this&&(Wt._=Ho),this},Dt.noop=So,Dt.now=Kr,Dt.pad=function(t,e,n){t=ro(t);var i=(e=no(e))?B(t):0;return!e||i>=e?t:Fn(as(e=(e-i)/2),n)+t+Fn(rs(e),n)},Dt.padEnd=function(t,e,n){t=ro(t);var i=(e=no(e))?B(t):0;return e&&i<e?t+Fn(e-i,n):t},Dt.padStart=function(t,e,n){t=ro(t);var i=(e=no(e))?B(t):0;return e&&i<e?Fn(e-i,n)+t:t},Dt.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),gs(ro(t).replace(nt,""),e||0)},Dt.random=function(t,e,n){if(n&&"boolean"!=typeof n&&li(t,e,n)&&(e=n=M),n===M&&("boolean"==typeof e?(n=e,e=M):"boolean"==typeof t&&(n=t,t=M)),t===M&&e===M?(t=0,e=1):(t=eo(t),e===M?(e=t,t=0):e=eo(e)),t>e){var i=t;t=e,e=i}return n||t%1||e%1?(n=ys(),fs(t+n*(e-t+Pt("1e-"+((n+"").length-1))),e)):ze(t,e)},Dt.reduce=function(t,e,n){var i=Fr(t)?c:S,o=3>arguments.length;return i(t,ti(e,4),n,o,Ms)},Dt.reduceRight=function(t,e,n){var i=Fr(t)?h:S,o=3>arguments.length;return i(t,ti(e,4),n,o,Fs)},Dt.repeat=function(t,e,n){return e=(n?li(t,e,n):e===M)?1:no(e),Ge(ro(t),e)},Dt.replace=function(){var t=arguments,e=ro(t[0]);return 3>t.length?e:e.replace(t[1],t[2])},Dt.result=function(t,e,n){var i=-1,o=(e=dn(e,t)).length;for(o||(o=1,t=M);++i<o;){var s=null==t?M:t[mi(e[i])];s===M&&(i=o,s=n),t=Gi(s)?s.call(t):s}return t},Dt.round=Ca,Dt.runInContext=D,Dt.sample=function(t){return(Fr(t)?Zt:Xe)(t)},Dt.size=function(t){if(null==t)return 0;if(Ni(t))return Zi(t)?B(t):t.length;var e=Xs(t);return"[object Map]"==e||"[object Set]"==e?t.size:Ce(t).length},Dt.snakeCase=da,Dt.some=function(t,e,n){var i=Fr(t)?p:Ze;return n&&li(t,e,n)&&(e=M),i(t,ti(e,3))},Dt.sortedIndex=function(t,e){return Qe(t,e)},Dt.sortedIndexBy=function(t,e,n){return tn(t,e,ti(n,2))},Dt.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var i=Qe(t,e);if(i<n&&ki(t[i],e))return i}return-1},Dt.sortedLastIndex=function(t,e){return Qe(t,e,!0)},Dt.sortedLastIndexBy=function(t,e,n){return tn(t,e,ti(n,2),!0)},Dt.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=Qe(t,e,!0)-1;if(ki(t[n],e))return n}return-1},Dt.startCase=fa,Dt.startsWith=function(t,e,n){return t=ro(t),n=null==n?0:le(no(n),0,t.length),e=on(e),t.slice(n,n+e.length)==e},Dt.subtract=Ba,Dt.sum=function(t){return t&&t.length?v(t,mo):0},Dt.sumBy=function(t,e){return t&&t.length?v(t,ti(e,2)):0},Dt.template=function(t,e,n){var i=Dt.templateSettings;n&&li(t,e,n)&&(e=M),t=ro(t),e=qr({},e,i,Gn);var o,s,r=uo(n=qr({},e.imports,i.imports,Gn)),a=K(n,r),l=0;n=e.interpolate||yt;var u="__p+='";n=Po((e.escape||yt).source+"|"+n.source+"|"+(n===q?ut:yt).source+"|"+(e.evaluate||yt).source+"|$","g");var c="sourceURL"in e?"//# sourceURL="+e.sourceURL+"\n":"";if(t.replace(n,(function(e,n,i,r,a,c){return i||(i=r),u+=t.slice(l,c).replace(mt,I),n&&(o=!0,u+="'+__e("+n+")+'"),a&&(s=!0,u+="';"+a+";\n__p+='"),i&&(u+="'+((__t=("+i+"))==null?'':__t)+'"),l=c+e.length,e})),u+="';",(e=e.variable)||(u="with(obj){"+u+"}"),u=(s?u.replace(U,""):u).replace(k,"$1").replace(N,"$1;"),u="function("+(e||"obj")+"){"+(e?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(s?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+u+"return __p}",(e=ya((function(){return Ao(r,c+"return "+u).apply(M,a)}))).source=u,zi(e))throw e;return e},Dt.times=function(t,e){if(1>(t=no(t))||9007199254740991<t)return[];var n=4294967295,i=fs(t,4294967295);for(t-=4294967295,i=w(i,e=ti(e));++n<t;)e(n);return i},Dt.toFinite=eo,Dt.toInteger=no,Dt.toLength=io,Dt.toLower=function(t){return ro(t).toLowerCase()},Dt.toNumber=oo,Dt.toSafeInteger=function(t){return t?le(no(t),-9007199254740991,9007199254740991):0===t?t:0},Dt.toString=ro,Dt.toUpper=function(t){return ro(t).toUpperCase()},Dt.trim=function(t,e,n){return(t=ro(t))&&(n||e===M)?t.replace(et,""):t&&(e=on(e))?fn(t=W(t),e=O(t,n=W(e)),n=A(t,n)+1).join(""):t},Dt.trimEnd=function(t,e,n){return(t=ro(t))&&(n||e===M)?t.replace(it,""):t&&(e=on(e))?fn(t=W(t),0,e=A(t,W(e))+1).join(""):t},Dt.trimStart=function(t,e,n){return(t=ro(t))&&(n||e===M)?t.replace(nt,""):t&&(e=on(e))?fn(t=W(t),e=O(t,W(e))).join(""):t},Dt.truncate=function(t,e){var n=30,i="...";if($i(e)){var o="separator"in e?e.separator:o;n="length"in e?no(e.length):n,i="omission"in e?on(e.omission):i}var s=(t=ro(t)).length;if(Kt.test(t)){var r=W(t);s=r.length}if(n>=s)return t;if(1>(s=n-B(i)))return i;if(n=r?fn(r,0,s).join(""):t.slice(0,s),o===M)return n+i;if(r&&(s+=n.length-s),Nr(o)){if(t.slice(s).search(o)){var a=n;for(o.global||(o=Po(o.source,ro(ct.exec(o))+"g")),o.lastIndex=0;r=o.exec(a);)var l=r.index;n=n.slice(0,l===M?s:l)}}else t.indexOf(on(o),s)!=s&&(-1<(o=n.lastIndexOf(o))&&(n=n.slice(0,o)));return n+i},Dt.unescape=function(t){return(t=ro(t))&&G.test(t)?t.replace(H,Yt):t},Dt.uniqueId=function(t){var e=++jo;return ro(t)+e},Dt.upperCase=_a,Dt.upperFirst=ga,Dt.each=Ci,Dt.eachRight=Bi,Dt.first=Ki,Do(Dt,function(){var t={};return ye(Dt,(function(e,n){Lo.call(Dt.prototype,n)||(t[n]=e)})),t}(),{chain:!1}),Dt.VERSION="4.17.11",n("bind bindKey curry curryRight partial partialRight".split(" "),(function(t){Dt[t].placeholder=Dt})),n(["drop","take"],(function(t,e){Ct.prototype[t]=function(n){n=n===M?1:ds(no(n),0);var i=this.__filtered__&&!e?new Ct(this):this.clone();return i.__filtered__?i.__takeCount__=fs(n,i.__takeCount__):i.__views__.push({size:fs(n,4294967295),type:t+(0>i.__dir__?"Right":"")}),i},Ct.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),n(["filter","map","takeWhile"],(function(t,e){var n=e+1,i=1==n||3==n;Ct.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:ti(t,3),type:n}),e.__filtered__=e.__filtered__||i,e}})),n(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Ct.prototype[t]=function(){return this[n](1).value()[0]}})),n(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Ct.prototype[t]=function(){return this.__filtered__?new Ct(this):this[n](1)}})),Ct.prototype.compact=function(){return this.filter(mo)},Ct.prototype.find=function(t){return this.filter(t).head()},Ct.prototype.findLast=function(t){return this.reverse().find(t)},Ct.prototype.invokeMap=Ve((function(t,e){return"function"==typeof t?new Ct(this):this.map((function(n){return Oe(n,t,e)}))})),Ct.prototype.reject=function(t){return this.filter(Ui(ti(t)))},Ct.prototype.slice=function(t,e){t=no(t);var n=this;return n.__filtered__&&(0<t||0>e)?new Ct(n):(0>t?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==M&&(n=0>(e=no(e))?n.dropRight(-e):n.take(e-t)),n)},Ct.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Ct.prototype.toArray=function(){return this.take(4294967295)},ye(Ct.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),i=/^(?:head|last)$/.test(e),o=Dt[i?"take"+("last"==e?"Right":""):e],s=i||/^find/.test(e);o&&(Dt.prototype[e]=function(){var e=this.__wrapped__,r=i?[1]:arguments,a=e instanceof Ct,l=r[0],c=a||Fr(e),h=function(t){return t=o.apply(Dt,u([t],r)),i&&p?t[0]:t};c&&n&&"function"==typeof l&&1!=l.length&&(a=c=!1);var p=this.__chain__,d=!!this.__actions__.length;l=s&&!p,a=a&&!d;return!s&&c?(e=a?e:new Ct(this),(e=t.apply(e,r)).__actions__.push({func:Ri,args:[h],thisArg:M}),new xt(e,p)):l&&a?t.apply(this,r):(e=this.thru(h),l?i?e.value()[0]:e.value():e)})})),n("pop push shift sort splice unshift".split(" "),(function(t){var e=Bo[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:pop|shift)$/.test(t);Dt.prototype[t]=function(){var t=arguments;if(i&&!this.__chain__){var o=this.value();return e.apply(Fr(o)?o:[],t)}return this[n]((function(n){return e.apply(Fr(n)?n:[],t)}))}})),ye(Ct.prototype,(function(t,e){var n=Dt[e];if(n){var i=n.name+"";(Es[i]||(Es[i]=[])).push({name:e,func:n})}})),Es[Cn(M,2).name]=[{name:"wrapper",func:M}],Ct.prototype.clone=function(){var t=new Ct(this.__wrapped__);return t.__actions__=Sn(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Sn(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Sn(this.__views__),t},Ct.prototype.reverse=function(){if(this.__filtered__){var t=new Ct(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Ct.prototype.value=function(){var t,e=this.__wrapped__.value(),n=this.__dir__,i=Fr(e),o=0>n,s=i?e.length:0;t=0;for(var r=s,a=this.__views__,l=-1,u=a.length;++l<u;){var c=a[l],h=c.size;switch(c.type){case"drop":t+=h;break;case"dropRight":r-=h;break;case"take":r=fs(r,t+h);break;case"takeRight":t=ds(t,r-h)}}if(r=(t={start:t,end:r}).start,t=(a=t.end)-r,r=o?a:r-1,l=(a=this.__iteratees__).length,u=0,c=fs(t,this.__takeCount__),!i||!o&&s==t&&c==t)return ln(e,this.__actions__);i=[];t:for(;t--&&u<c;){for(o=-1,s=e[r+=n];++o<l;){h=(p=a[o]).type;var p=(0,p.iteratee)(s);if(2==h)s=p;else if(!p){if(1==h)continue t;break t}}i[u++]=s}return i},Dt.prototype.at=gr,Dt.prototype.chain=function(){return Pi(this)},Dt.prototype.commit=function(){return new xt(this.value(),this.__chain__)},Dt.prototype.next=function(){this.__values__===M&&(this.__values__=to(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?M:this.__values__[this.__index__++]}},Dt.prototype.plant=function(t){for(var e,n=this;n instanceof wt;){var i=Si(n);i.__index__=0,i.__values__=M,e?o.__wrapped__=i:e=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,e},Dt.prototype.reverse=function(){var t=this.__wrapped__;return t instanceof Ct?(this.__actions__.length&&(t=new Ct(this)),(t=t.reverse()).__actions__.push({func:Ri,args:[Ai],thisArg:M}),new xt(t,this.__chain__)):this.thru(Ai)},Dt.prototype.toJSON=Dt.prototype.valueOf=Dt.prototype.value=function(){return ln(this.__wrapped__,this.__actions__)},Dt.prototype.first=Dt.prototype.head,ts&&(Dt.prototype[ts]=function(){return this}),Dt}();Wt._=Jt,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Jt}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}.call(this),window.DKTools={},Object.defineProperties(DKTools,{PATREON:{value:"https://boosty.to/dkplugins"},SITE:{value:"https://dk-plugins.ru"},VERSION:{value:Imported.DKTools}}),DKTools.Utils=class{constructor(){return DKTools.Utils}static initialize(){this.__tileSize(),DKToolsParam.get("Debugging Console","Enabled")&&SceneManager.showDevTools(),DKToolsParam.get("Check Updates","Enabled")&&this._checkUpdates()}static async _checkUpdates(){if(!Utils.isNwjs()||!Utils.isTest())return;let t=[];try{const e={version:DKTools.VERSION,maker:Utils.RPGMAKER_NAME},n=Object.entries(e).map((([t,e])=>`${t}=${e}`)).join("&");if(t=await DKTools.Network.fetchJson(`${DKTools.SITE}/plugins.php?${n}`)||[],!t||0===t.length)return}catch(t){return void console.error("DKTools cannot check updates")}const e=DKToolsParam.get("Check Updates","Show New Plugins");t=t.sort(((t,e)=>DKTools.PluginManager.isRegistered(t.name)?DKTools.PluginManager.isRegistered(e.name)?0:-1:1)),t.forEach((t=>{const n=t.version;if(DKTools.PluginManager.isRegistered(t.name)){if(!DKTools.PluginManager.checkVersion(t.name,n)){const e=DKTools.PluginManager.getVersion(t.name),i=[`Available a new ${t.beta?"beta ":""}version of ${t.name}: ${n}\n`,`Installed: ${e}\n`,"Plugin page: "+t.url];t.download_url&&i.push("\nDownload: "+t.download_url),t.download_demo_url&&i.push("\nDownload demo project: "+t.download_demo_url),console.log.apply(console,i)}if(DKTools.PluginManager.compareVersions(t.patreon_version,n)&&!DKTools.PluginManager.checkVersion(t.name,t.patreon_version)){const e=DKTools.PluginManager.getVersion(t.name),n=[`Available a new version of ${t.name} on Patreon: ${t.patreon_version}\n`,`Installed: ${e}\n`,`Patreon page: ${DKTools.PATREON}\n`,"Plugin page: "+t.url];t.patreon_url&&n.push("\nPatreon download: "+t.patreon_url),console.log.apply(console,n)}}else if(e){if(!(0===t.requirements.length||t.requirements.every((t=>DKTools.PluginManager.isRegistered(t)))))return;const e=[`Try the new plugin: ${t.name}\n`,`Description: ${t.description}\n`,`Plugin page: ${t.url} \n`];t.download_url&&e.push("\nDownload: "+t.download_url),t.download_demo_url&&e.push("\nDownload demo project: "+t.download_demo_url),console.log.apply(console,e)}}))}static _getErrorLogData(){const t=SceneManager._scene,e={};if(t&&t.constructor.name&&(e.Scene=t.constructor.name,SceneManager.isCurrentScene(Scene_Map))){const t=$gameMap._interpreter;if(t){if(t._mapId>0&&(e["Map ID"]=t._mapId),t._eventId>0){e["Event ID"]=t._eventId;const n=$gameMap.event(t._eventId);n&&(e["Event Page"]=n._pageIndex+1)}if(t._list&&t._list.length>0){let n=t._list[t._index];n&&0===n.code&&t._index>0&&(n=t._list[t._index-1]),n&&n.code>0&&(e["Last Event Command"]=n.code)}t._params&&t._params.length>0&&(e.Params=JSON.stringify(t._params))}}return e}static __hideGrid(){this._gridSprite&&(SceneManager._scene.removeChild(this._gridSprite),this._gridSprite=null)}static isFunction(t){return"function"==typeof t}static isString(t){return!!t&&"string"==typeof t}static async logError(t){if(!t||!Utils.isNwjs())return;const e=DKToolsParam.get("Errors Log")||{},n=Utils.isTest(),i=e.Enabled;if("None"===i||"Only Game"===i&&n||"Only Test"===i&&!n)return;const o=DKTools.IO.fs,s=DKTools.IO.os;if(!o||!s)return;const r=1024*e["File Size"]*1024,a=e.Filename,l=new DKTools.IO.File(a),u=await l.getStatsAsync().then((t=>t.data));if(u&&u.size>r){const t=DKTools.IO.parsePath(a).name,e=new Date,n=String(e.getDate()).padZero(2),i=String(e.getMonth()+1).padZero(2),o=e.getFullYear(),s=String(e.getHours()).padZero(2),r=String(e.getMinutes()).padZero(2),u=String(e.getSeconds()).padZero(2);await l.renameAsync(`${n}.${i}.${o}_${s}.${r}.${u}_${t}`)}const c=await o.openSync(a,"a"),h=this._getErrorLogData();let p="Date: "+(new Date).toString()+s.EOL;_.forEach(h,((t,e)=>{p+=e+": "+t+s.EOL})),t instanceof Object?(p+="Name: "+t.name+s.EOL,p+="Message: "+t.message+s.EOL,void 0!==t.filename&&(p+="Filename: "+t.filename+s.EOL),void 0!==t.lineNumber&&(p+="Line: "+t.lineNumber+s.EOL),void 0!==t.columnNumber&&(p+="Column: "+t.columnNumber+s.EOL),p+="Stack: "+t.stack+s.EOL+s.EOL):p+="Error: "+t+s.EOL+s.EOL,await o.writeSync(c,p),await o.closeSync(c)}static makeScreenshot(){if(!Utils.isNwjs())return;const t=DKToolsParam.get("Screenshots"),e=t.Path,n=t.Type,i=t.Quality,o=SceneManager.snap().canvas.toDataURL("image/"+n,i),s=new RegExp(`^data:image/${n};base64,`),r=o.replace(s,""),a=new Date;let l=t.Filename;l=l.replace(/%year/gi,a.getFullYear()),l=l.replace(/%month/gi,a.getMonth()+1),l=l.replace(/%day/gi,a.getDate()),l=l.replace(/%hours/gi,a.getHours()),l=l.replace(/%minutes/gi,a.getMinutes()),l=l.replace(/%seconds/gi,a.getSeconds());const u=l+"."+n,c=DKTools.IO.normalizePath(e+"/"+u);new DKTools.IO.File(c).save(r,{createDirectory:!0,options:"base64",onSuccess:()=>{console.log("The screenshot is saved with the name: "+u)}})}static __showGrid(){if(!Utils.isTest()||!DKToolsParam.get("Grid","Enabled"))return;const t=DKToolsParam.get("Grid"),e=t["Grid Sizes"]||[64,48,32,16];if(this._gridSprite)return void(this._gridSprite._gridSizeIndex<e.length-1?(this._gridSprite._gridSizeIndex++,this._gridSprite.refreshAll()):this.__hideGrid());let n=null;this._gridSprite=new DKTools.Sprite.Button(Graphics),this._gridSprite._gridSizeIndex=0,this._gridSprite.addEvent({type:"draw-all",onUpdate:()=>{const i=Graphics.boxWidth,o=Graphics.boxHeight,s=t["Grid Color"],r=t["Grid Width"],a=e[this._gridSprite._gridSizeIndex];_.times(Math.ceil(i/a),(t=>{this._gridSprite.drawLine({x1:a*t,y1:0,x2:a*t,y2:o,color:s,lineWidth:r})})),_.times(Math.ceil(o/a),(t=>{this._gridSprite.drawLine({x1:0,y1:a*t,x2:i,y2:a*t,color:s,lineWidth:r})})),n&&this._gridSprite.drawLine({x1:n.x,y1:n.y,x2:TouchInput.x,y2:TouchInput.y,color:n.color,lineWidth:t["Ruler Width"]})}}),this._gridSprite.addEvent({type:"mouse-inside",onUpdate:()=>{const t=TouchInput.x,e=TouchInput.y,n=Graphics.boxWidth,o=Graphics.boxHeight;let s=t+8,r=e+8;s+i.width>n&&(s=t-i.width-8),r+i.height>o&&(r=e-i.height-8),i.move(s,r),i.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-down-middle",onUpdate:()=>{n||(n={x:TouchInput.x,y:TouchInput.y,color:t["Ruler Color"]||ColorManager.randomColor()}),this._gridSprite.refreshAll()}}),this._gridSprite.addEvent({type:"mouse-up-middle",onUpdate:()=>{n=null,this._gridSprite.refreshAll()}}),this._gridSprite.start(!0);const i=new DKTools.Sprite(0,0,220,"2");i.addEvent({type:"draw-all",onUpdate:()=>{if(n){const t={x:TouchInput.x,y:TouchInput.y},e=Math.floor(Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2)));i.drawText(`line: ${e} (${n.x}, ${n.y})`,{y:"0",align:"left"})}i.drawText(`x: ${TouchInput.x}, y: ${TouchInput.y}`,{y:"1",align:"left"})}}),i.start(),this._gridSprite.addChild(i),this._gridSprite.updateMouseInsideEvents(),SceneManager._scene.addChild(this._gridSprite)}static __tileSize(){const t=DKToolsParam.get("Tile Size")||{};t.Enabled&&(Tilemap.TILE_WIDTH=t.Size,Tilemap.TILE_HEIGHT=t.Size)}static throwError(t,e=0){setTimeout((()=>{throw t}),e)}static __quickLoad(){if(!Utils.isTest()||!DKToolsParam.get("Quick Load","Enabled"))return;const t=DKToolsParam.get("Quick Load","Savefile ID"),e=SceneManager._scene;t>0?DataManager.loadGame(t)&&(SoundManager.playLoad(),e instanceof Scene_Base&&e.fadeOutAll(),$gameSystem.versionId()!==$dataSystem.versionId&&($gamePlayer.reserveTransfer($gameMap.mapId(),$gamePlayer.x,$gamePlayer.y),$gamePlayer.requestMapReload()),SceneManager.goto(Scene_Map)):e instanceof Scene_Load||SceneManager.push(Scene_Load)}},DKTools.Utils.WebAudio=class{static load(t,e,n){if(!t)return null;if(t instanceof WebAudio)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener);if(!DKTools.Utils.isString(t))return null;const i=AudioManager.createBuffer(t,e);return DKTools.Utils.isFunction(n)&&i.addLoadListener(n),i}static async loadAsync(t,e,n){return new Promise((i=>{const o=this.load(t,e,n);o?o.addLoadListener((()=>i(o))):i(o)}))}static loadBuffers(t,e,n){if(!DKTools.Utils.isFunction(e))return;t=t.map((t=>this.load(t)));const i=[];let o=0;const s=(s,r)=>{e&&(i[s]=r,o++,DKTools.Utils.isFunction(n)&&n(r,i,t),t.length===o&&(e(t),e=null))};t.forEach(((t,e)=>{t instanceof WebAudio?t.addLoadListener((t=>s(e,t))):s(e,t)}))}static async loadBuffersAsync(t){return Promise.all(t.map((t=>this.loadAsync(t))))}},DKTools.Utils.Bitmap=class{static drawLine(t,e,n,i,o,s="white",r=1){const a=t.context;a.save(),a.strokeStyle=s,a.lineWidth=r,a.beginPath(),a.moveTo(e,n),a.lineTo(i,o),a.stroke(),a.restore(),t.baseTexture.update()}static getBase64(t){return t&&t.canvas?t.canvas.toDataURL("image/png"):null}static load(t,e,n){if(!t)return null;if(t instanceof Bitmap)return t;if(Array.isArray(t)||"[object Arguments]"===String(t))return this.load.apply(this,t);if(t instanceof Object)return this.load(t.folder,t.filename,t.listener);if(!DKTools.Utils.isString(t))return null;const i=DKTools.IO.normalizePath(t+"/",!0),o=ImageManager.loadBitmap(i,e);return DKTools.Utils.isFunction(n)&&o.addLoadListener(n),o}static async loadAsync(t,e,n){return new Promise((i=>{const o=this.load(t,e,n);o?o.addLoadListener((()=>i(o))):i(o)}))}static loadBitmaps(t,e,n){if(!DKTools.Utils.isFunction(e))return;t=t.map((t=>this.load(t)));const i=[];let o=0;const s=(s,r)=>{e&&(i[s]=r,o++,DKTools.Utils.isFunction(n)&&n(r,i,t),t.length===o&&(e(t),e=null))};t.forEach(((t,e)=>{t instanceof Bitmap?t.addLoadListener((t=>s(e,t))):s(e,t)}))}static async loadBitmapsAsync(t){return Promise.all(t.map((t=>this.loadAsync(t))))}},DKTools.IO=class{constructor(){return DKTools.IO}static initialize(){let t="";this._isReady=!1,Utils.isNwjs()&&(this._fs=__webpack_require__(147),this._os=__webpack_require__(37),this._path=__webpack_require__(17),t=this.joinPath(this._path.dirname(process.mainModule.filename),"/")),this._projectPath=t,this._mode=DKToolsParam.get("File System","Mode"),this._stamp={},this._loadStamp(),this._isReady=!0}static absolutePathExists(t){if(Utils.isNwjs())return this._fs.existsSync(t);if(this.mode===DKTools.IO.MODE_NWJS_STAMP&&t.startsWith(this._projectPath)){if(this.isFile(t))return!0;if(this.isDirectory(t))return!0}return!1}static async _createStamp(){if(!Utils.isTest()||!Utils.isNwjs()||this.mode===DKTools.IO.MODE_NWJS)return;const t=DKToolsParam.get("File System","Ignored Directories").filter((t=>!["locales"].includes(t))).map((t=>new DKTools.IO.Directory(t))),e=DKTools.IO.getRootDirectory(),n=new DKTools.IO.File("data/Stamp.json"),i={},o=async e=>{const n=await e.getAllAsync().then((t=>t.data));for(const e of n){const n=e.isDirectory();if(n&&t.some((t=>t.equals(e))))continue;const s=await e.getStatsAsync().then((t=>t.data)),r=e.getFullPath().substring(1).split(DKTools.IO.sep);n?_.set(i,r,{__stats__:{...s,type:"directory"}}):_.set(i,r,{__stats__:{...s,type:"file"}}),n&&await o(e)}};await o(e),await n.saveJsonAsync(i,{compress:!0}),this._stamp=i}static getRootDirectory(){return new DKTools.IO.Directory}static getAbsolutePath(t){const e=this.joinPath(this._projectPath,t||"");return this.normalizePath(e)}static isFile(t){if(Utils.isNwjs()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this._fs.lstatSync(e).isFile()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){t=decodeURIComponent(t);const e=this.normalizePath(t).split(DKTools.IO.sep).filter((t=>!!t));if(_.last(e).includes("."))return"file"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static isDirectory(t){if(Utils.isNwjs()){const e=this.getAbsolutePath(t);if(this.absolutePathExists(e))return this._fs.lstatSync(e).isDirectory()}else if(this.mode===DKTools.IO.MODE_NWJS_STAMP){t=decodeURIComponent(t);const e=this.normalizePath(t).split(DKTools.IO.sep).filter((t=>!!t));if(!_.last(e).includes("."))return"directory"===_.get(this._stamp,e.concat("__stats__"),{}).type}return!1}static isReady(){return this._isReady}static joinPath(){if(Utils.isNwjs())return this._path.join(...arguments);const t=_.filter(arguments,(t=>DKTools.Utils.isString(t)));let e=t.join("\\");return/^[\\\/]{2}[^\\\/]/.test(t[0])||(e=e.replace(/^[\\\/]{2,}/,"\\")),this.normalizePath(e)}static _loadStamp(){if(Utils.isNwjs()||this.mode===DKTools.IO.MODE_NWJS)return;new DKTools.IO.File("data/Stamp.json").loadJson({sync:!0,decompress:!0,onSuccess:t=>{this._stamp=t.data||this._stamp}})}static normalizePath(t,e=!1){if(Utils.isNwjs()){const n=this._path.normalize(t);return e?n.replace(/\\/g,"/"):n}const n=this._statPath(t),i=n.isAbsolute;let o=n.device,s=n.tail;const r=/[\\\/]$/.test(s),a=_.filter(s.split(/[\\\/]+/),(t=>t&&"."!==t)),l=[];for(const t of a)".."===t?l.length>0&&".."!==l[l.length-1]?l.pop():i||l.push(".."):l.push(t);s=l.join("\\"),s||i||(s="."),s&&r&&(s+="\\"),n.isUnc&&(o="\\\\"+o.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\"));let u=(o+(i?"\\":"")+s).replace(/\\/g,DKTools.IO.sep);return u[0]===DKTools.IO.sep&&(u=u.substring(1)),u}static parsePath(t){if(Utils.isNwjs())return this._path.parse(t);const e=this._splitPath(t);return{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}}static pathExists(t){return this.absolutePathExists(this.getAbsolutePath(t))}static reverseSlashes(t){return t.replace(/\\/g,"/")}static _statPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),n=e[1]||"",i=!!n&&":"!==n[1];return{device:n,isUnc:i,isAbsolute:i||!!e[2],tail:e[3]}}static _splitPath(t){const e=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(t),n=(e[1]||"")+(e[2]||""),i=e[3]||"",o=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/.exec(i);return[n,o[1],o[2],o[3]]}},Object.defineProperties(DKTools.IO,{fs:{get:function(){return this._fs},configurable:!0},os:{get:function(){return this._os},configurable:!0},path:{get:function(){return this._path},configurable:!0},sep:{get:function(){return Utils.isNwjs()?this._path.sep:"/"},configurable:!0},projectPath:{get:function(){return this._projectPath},configurable:!0},mode:{get:function(){return this._mode},configurable:!0},stamp:{get:function(){return this._stamp},configurable:!0},OK:{value:0},EXPECT_CALLBACK:{value:1},ERROR_NOT_LOCAL_MODE:{value:2},ERROR_PATH_DOES_NOT_EXIST:{value:3},ERROR_CALLBACK_IS_NOT_AVAILABLE:{value:4},ERROR_DIRECTORY_ALREADY_EXISTS:{value:5},ERROR_DIRECTORY_IS_NOT_EMPTY:{value:6},ERROR_OVERWRITING_IS_NOT_AVAILABLE:{value:7},ERROR_OPTIONS_ARE_NOT_AVAILABLE:{value:8},ERROR_DECOMPRESSING_DATA:{value:9},ERROR_PARSING_DATA:{value:10},MODE_NWJS_STAMP:{value:0},MODE_NWJS:{value:1}}),DKTools.IO.Entity=class{constructor(){this.initialize.apply(this,arguments)}get path(){return this._path}get name(){return this._name}get initialExtension(){return this._initialExtension}get extension(){return this._extension}initialize(t=""){const e=DKTools.IO.parsePath(t);this._path=e.dir,this._name=e.name,this._initialExtension=e.ext,this._extension=e.ext}equals(t){return this.getFullPath()===t.getFullPath()}exists(){return DKTools.IO.absolutePathExists(this.getAbsolutePath())}getPath(){return this._path}getName(){return this._name}getExtension(){return this._extension}getFullPath(){return DKTools.IO.joinPath(this.getPath(),"/",this.getFullName())}getFullName(){return this.getName()+this.getExtension()}getAbsolutePath(){return DKTools.IO.getAbsolutePath(this.getFullPath())}getStats(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const t=this.getFullPath().split("\\").filter((t=>!!t));return{data:_.get(DKTools.IO.stamp,t.concat("__stats__"),{}),status:DKTools.IO.OK}}const e=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return e.stat(n,((e,n)=>{e?this.__processError(e,t.onError):t.onSuccess({data:n,status:DKTools.IO.OK},this)})),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{return{data:e.statSync(n),status:DKTools.IO.OK}}catch(e){this.__processError(e,t.onError)}}async getStatsAsync(){return new Promise(((t,e)=>{const n=this.getStats({sync:!1,onSuccess:t,onError:e});n.status!==DKTools.IO.EXPECT_CALLBACK&&t(n)}))}hasExtension(){return!!this._extension}isFile(){return this instanceof DKTools.IO.File&&(Utils.isNwjs()?DKTools.IO.isFile(this.getFullPath()):!!this.hasExtension())}isDirectory(){return this instanceof DKTools.IO.Directory&&(Utils.isNwjs()?DKTools.IO.isDirectory(this.getFullPath()):!this.hasExtension())}__processError(t,e){DKTools.Utils.isFunction(e)?e(t,this):DKTools.Utils.throwError(t)}rename(t,e={}){if(e=e||{},!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const n=DKTools.IO.fs,i=this.getAbsolutePath(),o=DKTools.IO.normalizePath(this._path+"/"+t+this._extension),s=DKTools.IO.getAbsolutePath(o);if(!e.overwrite&&DKTools.IO.absolutePathExists(s))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;if(!e.sync)return n.rename(i,s,(n=>{n?this.__processError(n,e.onError):(this._name=t,DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this))})),DKTools.IO.EXPECT_CALLBACK;try{return n.renameSync(i,s),this._name=t,DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async renameAsync(t,e={}){return new Promise(((n,i)=>{const o=this.rename(t,{...e,sync:!1,onSuccess:n,onError:i});o!==DKTools.IO.EXPECT_CALLBACK&&n(o)}))}},DKTools.IO.File=class extends DKTools.IO.Entity{initialize(t=""){super.initialize(t),this._detectExtension()}copy(t,e={}){if(!e)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const n=DKTools.IO.fs,i=this.getAbsolutePath(),o=new DKTools.IO.File(t).getDirectory();if(e.createDirectory&&!o.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;o.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error("Failed to create directory: "+o.getFullPath()),e.onError)}if(!o.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!e.sync)return n.copyFile(i,t,e.flags,(t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return n.copyFileSync(i,t,e.flags),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async copyAsync(t,e={}){return new Promise(((n,i)=>{const o=this.copy(t,{...e,sync:!1,onSuccess:n,onError:i});o!==DKTools.IO.EXPECT_CALLBACK&&n(o)}))}_detectExtension(){let t=this._extension;this.isAudio()?t=AudioManager.audioFileExt():this.isImage()?t=ImageManager.imageFileExt():this.isVideo()&&(t=Video.videoFileExt()),this._extension=t}getDirectory(){return new DKTools.IO.Directory(this._path)}getDirectoryName(){return this.getDirectory().getName()}getExtension(){let t=super.getExtension();return(Utils.hasEncryptedAudio()&&t===AudioManager.audioFileExt()||Utils.hasEncryptedImages()&&t===ImageManager.imageFileExt())&&(t+=Utils.getEncryptedFileExtension()),t}isAudio(){return".ogg"===this._extension||".ogg_"===this._extension}isJson(){return".json"===this._extension}isTexture(){return".dds"===this._extension}isTxt(){return".txt"===this._extension}isImage(){return".png"===this._extension||".png_"===this._extension||".webp"===this._extension}isVideo(){return".webm"===this._extension||".mp4"===this._extension}isSave(){return".rmmzsave"===this._extension}load(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};const e=this.getAbsolutePath(),n=e=>{if(e){if(t.decompress)try{e=pako.inflate(e,{to:"string"})}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(t.parse)try{e=JSON.parse(e,t.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:e,status:DKTools.IO.OK}};if(Utils.isNwjs()){if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const i=DKTools.IO.fs,o=t.options||{encoding:"utf8"};if(t.sync)try{const t=i.readFileSync(e,o);return n(t)}catch(e){this.__processError(e,t.onError)}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};i.readFile(e,o,((e,i)=>{e?this.__processError(e,t.onError):t.onSuccess(n(i),this)}))}}else{if(!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP&&"Stamp.json"!==this.getFullName()&&!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const i=new XMLHttpRequest;i.open("GET",e,!t.sync),i.overrideMimeType(t.mimeType||"application/json"),i.onload=()=>{4===i.readyState&&(0===i.status||200===i.status?t.onSuccess(n(i.responseText),this):this.__processError(i,t.onError))},i.onerror=()=>{this.__processError(i,t.onError)};try{i.send()}catch(t){}}return{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async loadAsync(t={}){return new Promise(((e,n)=>{const i=this.load({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}loadAudio(){return this.isAudio()&&(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.WebAudio.load(this.getDirectoryName(),this.getName()):null}async loadAudioAsync(){return DKTools.Utils.WebAudio.loadAsync(this.loadAudio())}loadJson(t){return t?(t.parse||(t.parse=!0),this.load(t)):{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE}}async loadJsonAsync(t={}){return new Promise(((e,n)=>{const i=this.loadJson({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}loadBitmap(t){return t instanceof Object?this.loadBitmap(t.listener):this.isImage()&&(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP||this.exists())?DKTools.Utils.Bitmap.load({folder:this.getPath(),filename:this.getName(),listener:t}):null}async loadBitmapAsync(t){return DKTools.Utils.Bitmap.loadAsync(this.loadBitmap(t))}remove(t={}){if(t=t||{},!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;const e=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return e.unlink(n,(e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return e.unlinkSync(n),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise(((t,e)=>{const n=this.remove({sync:!1,onSuccess:t,onError:e});n!==DKTools.IO.EXPECT_CALLBACK&&t(n)}))}save(t,e={}){if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;const n=DKTools.IO.fs,i=this.getAbsolutePath(),o=this.getDirectory();if((e=e||{}).createDirectory&&!o.exists()){const t=e.createDirectory instanceof Object?e.createDirectory:null;o.create({sync:!0,options:t})!==DKTools.IO.OK&&this.__processError(new Error("Failed to create directory: "+o.getFullPath()),e.onError)}if(!o.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(e.stringify&&(t=JSON.stringify(t,e.stringify.replacer,e.stringify.space)),e.compress&&(t=pako.deflate(t,{to:"string",level:1})),!e.sync)return n.writeFile(i,t,e.options,(t=>{t?this.__processError(t,e.onError):DKTools.Utils.isFunction(e.onSuccess)&&e.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return n.writeFileSync(i,t,e.options),DKTools.IO.OK}catch(t){this.__processError(t,e.onError)}}async saveAsync(t,e={}){return new Promise(((n,i)=>{const o=this.save(t,{...e,sync:!1,onSuccess:n,onError:i});o!==DKTools.IO.EXPECT_CALLBACK&&n(o)}))}saveJson(t,e={}){return(e=e||{}).stringify||(e.stringify={space:"\t"}),this.save(t,e)}async saveJsonAsync(t,e={}){return new Promise(((n,i)=>{const o=this.saveJson(t,{...e,sync:!1,onSuccess:n,onError:i});o!==DKTools.IO.EXPECT_CALLBACK&&n(o)}))}},DKTools.IO.SaveFile=class extends DKTools.IO.File{initialize(t=""){super.initialize(`save/${t}.rmmzsave`)}},DKTools.IO.Directory=class extends DKTools.IO.Entity{create(t){if(!t)return DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE;if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE;if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(this.exists())return DKTools.IO.ERROR_DIRECTORY_ALREADY_EXISTS;const e=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return e.mkdir(n,t.options,(e=>{e?this.__processError(e,t.onError):t.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return e.mkdirSync(n,t.options),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async createAsync(t={}){return new Promise(((e,n)=>{const i=this.create({...t,sync:!1,onSuccess:e,onError:n});i!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}createDirectory(t,e){const n=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(n).create(e)}async createDirectoryAsync(t,e={}){const n=DKTools.IO.normalizePath(this.getFullPath()+"/"+t);return new DKTools.IO.Directory(n).createAsync(e)}findFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,n=[];let i=1,o=0;const s=o=>{_.forEach(o,(o=>{if(o.isFile()){const e=o.getFullName();t.template instanceof RegExp&&t.template.test(e)?n.push(o):t.template&&e!==t.template||n.push(o)}else i<e&&o.isDirectory()&&(i++,r(o))}))},r=e=>{if(t.sync){const n=e.getAll({sync:!0,options:t.options}).data;s(n)}else e.getAll({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{o++,s(e.data),i===o&&t.onSuccess({data:n,status:DKTools.IO.OK})}})};return r(this),t.sync?{data:n,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.findFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}findDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs())return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=t.searchLimit||1,n=[];let i=1,o=0;const s=o=>{_.forEach(o,(o=>{const s=o.getFullName();t.template instanceof RegExp&&t.template.test(s)?n.push(o):t.template&&s!==t.template||n.push(o),i<e&&(i++,r(o))}))},r=e=>{if(t.sync){const n=e.getDirectories({sync:!0,options:t.options}).data;s(n)}else e.getDirectories({sync:!1,options:t.options,onError:t.onError,onSuccess:e=>{o++,s(e.data),i===o&&t.onSuccess({data:n,status:DKTools.IO.OK})}})};return r(this),t.sync?{data:n,status:DKTools.IO.OK}:{data:null,status:DKTools.IO.EXPECT_CALLBACK}}async findDirectoriesAsync(t={}){return new Promise(((e,n)=>{const i=this.findDirectories({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getAll(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS)return{data:null,status:DKTools.IO.ERROR_NOT_LOCAL_MODE};if(!this.exists())return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};const e=this.getFullPath(),n=n=>{t.template instanceof RegExp?n=n.filter((e=>t.template.test(e))):DKTools.Utils.isString(t.template)&&(n=n.filter((e=>e===t.template)));return{data:n.reduce(((t,n)=>{const i=DKTools.IO.normalizePath(e+"/"+n);return DKTools.IO.isFile(i)?t.push(new DKTools.IO.File(i)):DKTools.IO.isDirectory(i)&&t.push(new DKTools.IO.Directory(i)),t}),[]),status:DKTools.IO.OK}};if(!Utils.isNwjs()&&DKTools.IO.mode===DKTools.IO.MODE_NWJS_STAMP){const e=this.getFullPath().split(DKTools.IO.sep).filter((t=>!!t)),i=_.get(DKTools.IO.stamp,e,{}),o=Object.keys(i);return t.sync?n(o):(t.onSuccess(n(o),this),{data:null,status:DKTools.IO.EXPECT_CALLBACK})}const i=DKTools.IO.fs,o=this.getAbsolutePath();if(!t.sync)return i.readdir(o,t.options,((e,i)=>{e?this.__processError(e,t.onError):t.onSuccess(n(i),this)})),{data:null,status:DKTools.IO.EXPECT_CALLBACK};try{const e=i.readdirSync(o,t.options);return n(e)}catch(e){this.__processError(e,t.onError)}}async getAllAsync(t={}){return new Promise(((e,n)=>{const i=this.getAll({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getFiles(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>t.filter((t=>t.isFile()));if(t.sync){const n=this.getAll(t);return n.status===DKTools.IO.OK?{...n,data:e(n.data)}:n}{const n=t.onSuccess;return t.onSuccess=(t,i)=>{t.status===DKTools.IO.OK?n({...t,data:e(t.data)},i):n(t,i)},this.getAll(t)}}async getFilesAsync(t={}){return this.getAllAsync(t).then((t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,(t=>t.isFile()));return{...t,data:e}}return t}))}getDirectories(t){if(!t)return{data:null,status:DKTools.IO.ERROR_OPTIONS_ARE_NOT_AVAILABLE};if(!t.sync&&!DKTools.Utils.isFunction(t.onSuccess))return{data:null,status:DKTools.IO.ERROR_CALLBACK_IS_NOT_AVAILABLE};const e=t=>_.filter(t,(t=>t.isDirectory()));if(t.sync){const n=this.getAll(t);return n.status===DKTools.IO.OK?{...n,data:e(n.data)}:n}{const n=t.onSuccess;return t.onSuccess=(t,i)=>{t.status===DKTools.IO.OK?n({...t,data:e(t.data)},i):n(t,i)},this.getAll(t)}}async getDirectoriesAsync(t={}){return this.getAllAsync(t).then((t=>{if(t.status===DKTools.IO.OK){const e=_.filter(t.data,(t=>t.isDirectory()));return{...t,data:e}}return t}))}getAudioFiles(t){return this.getFiles({...t,template:/(.ogg)/})}async getAudioFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getAudioFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getJsonFiles(t){return this.getFiles({...t,template:/(.json)/})}async getJsonFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getJsonFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getTxtFiles(t){return this.getFiles({...t,template:/(.txt)/})}async getTxtFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getTxtFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getImageFiles(t){return this.getFiles({...t,template:/(.png|.webp)/})}async getImageFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getImageFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getVideoFiles(t){return this.getFiles({...t,template:/(.webm|.mp4)/})}async getVideoFilesAsync(t={}){return new Promise(((e,n)=>{const i=this.getVideoFiles({...t,sync:!1,onSuccess:e,onError:n});i.status!==DKTools.IO.EXPECT_CALLBACK&&e(i)}))}getRootDirectory(){return new DKTools.IO.Directory(this.getPath())}isEmpty(){const t=this.getAll({sync:!0}).data;return!t||0===t.length}loadAudioFiles(){const t=this.getAudioFiles({sync:!0});return t.status!==DKTools.IO.OK?[]:t.data.map((t=>t.loadAudio()))}async loadAudioFilesAsync(){const t=await this.getAudioFilesAsync();return t.status!==DKTools.IO.OK?[]:Promise.all(t.data.map((t=>t.loadAudioAsync())))}loadBitmaps(t){const e=this.getImageFiles({sync:!0});return e.status!==DKTools.IO.OK?[]:e.data.map((e=>e.loadBitmap(t)))}async loadBitmapsAsync(t){const e=await this.getImageFilesAsync();return e.status!==DKTools.IO.OK?[]:Promise.all(e.data.map((e=>e.loadBitmapAsync(t))))}remove(t={}){if(!Utils.isNwjs())return DKTools.IO.ERROR_NOT_LOCAL_MODE;if(!this.exists())return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!this.isEmpty())return DKTools.IO.ERROR_DIRECTORY_IS_NOT_EMPTY;const e=DKTools.IO.fs,n=this.getAbsolutePath();if(!t.sync)return e.rmdir(n,(e=>{e?this.__processError(e,t.onError):DKTools.Utils.isFunction(t.onSuccess)&&t.onSuccess(DKTools.IO.OK,this)})),DKTools.IO.EXPECT_CALLBACK;try{return e.rmdirSync(n),DKTools.IO.OK}catch(e){this.__processError(e,t.onError)}}async removeAsync(){return new Promise(((t,e)=>{const n=this.remove({sync:!1,onSuccess:t,onError:e});n!==DKTools.IO.EXPECT_CALLBACK&&t(n)}))}},DKTools.IO.WebStorage=class{static exists(t){return localStorage.hasOwnProperty(t)}static load(t,e={}){if(!this.exists(t))return{data:null,status:DKTools.IO.ERROR_PATH_DOES_NOT_EXIST};let n=localStorage.getItem(t);if(n){if(e.decompress)try{const t=e.decompress instanceof Object?e.decompress:{to:"string"};n=pako.inflate(n,t)}catch(t){return{data:null,status:DKTools.IO.ERROR_DECOMPRESSING_DATA,error:t}}if(e.parse)try{n=JSON.parse(n,e.parse.reviver)}catch(t){return{data:null,status:DKTools.IO.ERROR_PARSING_DATA,error:t}}}return{data:n,status:DKTools.IO.OK}}static remove(t){return this.exists(t)?(localStorage.removeItem(t),DKTools.IO.OK):DKTools.IO.ERROR_PATH_DOES_NOT_EXIST}static rename(t,e,n=!1){if(!this.exists(t))return DKTools.IO.ERROR_PATH_DOES_NOT_EXIST;if(!n&&this.exists(e))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;const i=localStorage.getItem(t);return localStorage.setItem(e,i),localStorage.removeItem(t),DKTools.IO.OK}static save(t,e,n={}){n=n||{};if(!_.defaultTo(n.overwrite,!0)&&this.exists(t))return DKTools.IO.ERROR_OVERWRITING_IS_NOT_AVAILABLE;if(n.stringify&&(e=JSON.stringify(e,n.stringify.replacer,n.stringify.space)),n.compress){const t=n.compress instanceof Object?n.compress:{to:"string",level:1};e=pako.deflate(e,t)}return localStorage.setItem(t,e),DKTools.IO.OK}},DKTools.Network=class{constructor(){return DKTools.Network}static async fetchFile(t,e={}){return fetch(t,e).then((t=>{if(t.ok)return this._toFile(t);throw t}))}static async fetchJson(t,e={}){return e.headers||(e.headers={}),e.headers.Accept="application/json",fetch(t,e).then((t=>{if(t.ok)return this._toJson(t);throw t}))}static async _toFile(t){return t.arrayBuffer().catch((()=>null))}static async _toJson(t){return t.json().catch((()=>null))}},DKTools.ParameterManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._pluginName=t,this._params={},this.initializeParams()}initializeParams(){_.forEach(PluginManager.parameters(this._pluginName),((t,e)=>{this._params[e]=DKTools.ParameterManager.parse(t)}))}change(t,e){_.set(this._params,t,e)}get(t,e,n){if(!DKTools.Utils.isString(t))return void console.error("Parameter name is not a string!",this._pluginName,t,e,n);let i=this._params[t];return void 0!==i?(e instanceof Object?i=_.find(i,e):void 0!==e&&(i=i[e]),i instanceof Object&&(n instanceof Object?(void 0!==n.key&&(i=i[n.key]),void 0!==n.index&&(i=i[n.index])):void 0!==n&&(i=i[n])),i):void 0}static parse(t){try{return"number"==typeof t||"boolean"==typeof t?t:JSON.parse(t,((t,e)=>{if(Array.isArray(e))return e.map((t=>this.parse(t)));try{return this.parse(e)}catch(t){return e}}))}catch(e){return t}}},DKTools.PluginManager=class{constructor(){return DKTools.PluginManager}static initialize(){this._checkRequirements()}static _checkRequirements(){Object.keys(this._requirements).forEach((t=>{const e=this.getVersion(t),n=this._getMaxVersion(t);if(null===e){const e='Required to install the plugin "%1". Minimal version: %2'.format(t,n);throw new Error(e)}if(!this.compareVersions(e,n)){const i='Required to update the plugin "%1" to minimal version %2 (Installed: %3)'.format(t,n,e);throw new Error(i)}}))}static compareVersions(t,e){if(t===e)return!0;if(!t||!e)return!1;const n=t.split("."),i=e.split(".");for(let t=0;t<n.length;t++){const e=parseInt(n[t]),o=parseInt(i[t]);if(e>o)return!0;if(e<o)return!1}return!0}static checkVersion(t,e){return this.compareVersions(this.getVersion(t),e)}static _getMaxVersion(t){return(this._requirements[t]||[]).slice().sort(((t,e)=>this.compareVersions(t,e)?-1:1))[0]}static getVersion(t){const e=Imported[t];return DKTools.Utils.isString(e)?e:Number.isFinite(e)?String(e):null}static isRegistered(t){return DKTools.Utils.isString(this.getVersion(t))||$plugins.some((e=>e.name===t&&e.status))}static requirePlugin(t,e){let n;if(this._requirements[t]||(this._requirements[t]=[]),e instanceof Object)n=e[Utils.RPGMAKER_NAME];else{if(!DKTools.Utils.isString(e))return void console.error(`Unknown version type (${t}): ${typeof e}`);n=e}this._requirements[t].push(n)}},Object.defineProperties(DKTools.PluginManager,{_requirements:{value:{}}}),DKTools.PreloadManager=class{constructor(){return DKTools.PreloadManager}static initialize(){const t=DKToolsParam.get("Initial Preloading")||{};if(!t.Enabled)return void this.start();this.setDebugging(t.Debugging),t["Audio Files"].forEach((t=>{this.preloadAudio({path:"audio/"+t,caching:!0})})),t["Image Files"].forEach((t=>{this.preloadImage({path:"img/"+t,caching:!0})}));this.getTotal()>=30&&console.warn("Too many files to preload! Load only needed files."),this.start()}static clearCache(){this._cache={audio:{},image:{}}}static clearQueue(){this._queue={audio:{},image:{}}}static _finish(){this._finishTime=new Date,this._debugging=!1;const t=(this._finishTime-this._startTime)/1e3,e=this.getTotal();if(e>0&&this._log("Preloading complete! \nLoaded/Skipped/Total: "+this._loaded+"/"+this._skipped+"/"+e+"\nPreloading time: "+t+" sec"),this._finishListeners){const n={loaded:this._loaded,skipped:this._skipped,preloadingTime:t,total:e};for(;this._finishListeners.length>0;){this._finishListeners.shift()(n)}delete this._finishListeners}this._fileLoadListeners&&delete this._fileLoadListeners,this.clearQueue()}static _generateKey(t){return DKTools.IO.normalizePath(t,!0)}static getCachedAudioByKey(t){return this._cache.audio[t]}static getCachedAudioByPath(t){return this.getCachedAudioByKey(this._generateKey(t))}static getCachedImageByKey(t){return this._cache.image[t]}static getCachedImageByPath(t){return this.getCachedImageByKey(this._generateKey(t))}static getTotal(){return _.size(this._queue.audio)+_.size(this._queue.image)}static isAudioCachedByKey(t){return!!this._cache.audio[t]}static isAudioCachedByPath(t){return this.isAudioCachedByKey(this._generateKey(t))}static isFinished(){return!!this._finishTime}static isReady(){return this.isFinished()}static isImageCachedByKey(t){return!!this._cache.image[t]}static isImageCachedByPath(t){return this.isImageCachedByKey(this._generateKey(t))}static isStarted(){return!!this._startTime}static _log(t){this._debugging&&t&&console.log(t)}static _onFileLoad(t){if(this._loaded++,this._log(`Loaded ${t instanceof WebAudio?"audio":"image"}: ${t.url}`),this._fileLoadListeners){const e={file:t,loaded:this._loaded,total:this.getTotal()};this._fileLoadListeners.forEach((t=>{t(e)}))}}static onFileLoad(t){this._fileLoadListeners||(this._fileLoadListeners=[]),this._fileLoadListeners.push(t)}static onFinish(t){this._finishListeners||(this._finishListeners=[]),this._finishListeners.push(t)}static _preload(t,e){if(e instanceof Object&&DKTools.Utils.isString(e.path)){const n=new DKTools.IO.Directory(e.path),i=n=>{let i=n.getFullPath();if("audio"===t){const t=DKTools.IO.normalizePath(AudioManager._basePath||AudioManager._path);i.startsWith(t)&&(i=i.slice(t.length))}this._queue[t][i]||(n.isFile()?"audio"===t?this._processAudioFile(n,e):"image"===t&&this._processImageFile(n,e):console.error("This is not a file: "+i))};if(n.isDirectory()){if(!Utils.isNwjs()&&DKTools.IO.mode!==DKTools.IO.MODE_NWJS_STAMP)throw new Error("Web browsers and mobile phones cannot load directories!");{const o={sync:!0};let s=[];this._files[e.path]?s=this._files[e.path]:("audio"===t?s=n.getAudioFiles(o).data||[]:"image"===t&&(s=n.getImageFiles(o).data||[]),this._files[e.path]=s),s.forEach((t=>i(t)))}}else{let n=e.path;n.includes(".")||("image"===t?n+=".png":"audio"===t&&(n+=".ogg")),i(new DKTools.IO.File(n))}}}static _processAudioFile(t,e){const n=t.getFullPath(),i=DKTools.IO.reverseSlashes(n);if(this._queue.audio[i])return;const o=t.getDirectoryName(),s=t.getName();if(e.caching&&this.isAudioCachedByPath(i))return this._log("Audio already preloaded: "+i+". Skipped..."),void("se"===o&&AudioManager.isStaticSe({name:s})&&this.releaseAudioByPath(i));const r=AudioManager._basePath||AudioManager._path;this._queue.audio[i]={...e,path:r+i}}static _processImageFile(t,e){const n=t.getFullPath(),i=DKTools.IO.reverseSlashes(n);this._queue.image[i]||(e.caching&&this.isImageCachedByPath(i)?this._log("Image already preloaded: "+i+". Skipped..."):this._queue.image[i]={...e,path:i})}static _processLoadAudioFiles(){const t=[];return _.forEach(this._queue.audio,(e=>{const n=new DKTools.IO.File(e.path),i=n.getFullPath();if(n.isFile())if(n.isAudio()){if(this.isAudioCachedByPath(i))return this._skipped++,void this._log("Audio already preloaded: "+i+". Skipped...");const o=n.loadAudio({...e.options});o?(e.caching&&(this._cache.audio[this._generateKey(o.url)]=o),t.push(o)):(this._skipped++,this._log("Cannot load an audio: "+i+". Skipped..."))}else this._skipped++,this._log("This is not an audio: "+i+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")})),t.map((t=>DKTools.Utils.WebAudio.loadAsync(t).then((()=>this._onFileLoad(t)))))}static _processLoadImageFiles(){const t=[];return _.forEach(this._queue.image,(e=>{const n=new DKTools.IO.File(e.path),i=n.getFullPath();if(n.isFile())if(n.isImage()){if(this.isImageCachedByPath(i))return this._skipped++,void this._log("Image already preloaded: "+i+". Skipped...");const o=DKTools.Utils.Bitmap.load({...e.options,folder:n.getPath(),filename:n.getName()});o?(e.caching&&(this._cache.image[this._generateKey(o.url)]=o),t.push(o)):(this._skipped++,this._log("Cannot load an image: "+i+". Skipped..."))}else this._skipped++,this._log("This is not an image: "+i+". Skipped...");else this._skipped++,this._log("This is not a file: "+e.path+". Skipped...")})),t.map((t=>DKTools.Utils.Bitmap.loadAsync(t).then((()=>this._onFileLoad(t)))))}static preloadAudio(t){this._preload("audio",t)}static preloadImage(t){this._preload("image",t)}static releaseAudioByKey(t){delete this._cache.audio[t]}static releaseAudioByPath(t){this.releaseAudioByKey(this._generateKey(t))}static releaseImageByKey(t){delete this._cache.image[t]}static releaseImageByPath(t){this.releaseImageByKey(this._generateKey(t))}static setDebugging(t){this._debugging=t||!1}static start(){const t=this.getTotal();if(this._loaded=0,this._skipped=0,this._startTime=new Date,this._finishTime=null,0===t)return Promise.resolve().then((()=>this._finish()));this._log("DKTools Preload Manager is running... \nTotal files to load: "+t);const e=Promise.all(this._processLoadAudioFiles()),n=Promise.all(this._processLoadImageFiles());return Promise.all([e,n]).then((()=>this._finish()))}},Object.defineProperties(DKTools.PreloadManager,{_queue:{value:{audio:{},image:{}},writable:!0},_cache:{value:{audio:{},image:{}},writable:!0},_files:{value:{}}}),DKTools.StartupManager=class{static async initialize(){this._isReady=!1,await this.checkErrors(),await this.initializeModules(),this._isReady=!0}static async initializeModules(){}static _checkRPGMakerVersion(){const t="1.0.0";if(!Utils.checkRMVersion(t))throw new Error("Required to update RPG Maker MZ to minimal version %1 (Installed: %2)".format(t,Utils.RPGMAKER_VERSION))}static _checkWebStorage(){if(!Utils.isNwjs()&&!window.hasOwnProperty("localStorage"))throw new Error("Your browser does not support localStorage API")}static async checkErrors(){await this._checkRPGMakerVersion(),await this._checkWebStorage()}static isReady(){return this._isReady}},DKTools.Event=class{constructor(){this.initialize.apply(this,arguments)}get id(){return this._id}get target(){return this._target}get manager(){return this._manager}get type(){return this._type}get repeatTime(){return this._repeatTime}get repeats(){return this._repeats}get remainingTime(){return this._remainingTime}set remainingTime(t){this._remainingTime=t}get remainingRepeats(){return this._remainingRepeats}set remainingRepeats(t){this._remainingRepeats=t}get remainingPauseTime(){return this._remainingPauseTime}set remainingPauseTime(t){this._remainingPauseTime=t}initialize(t){t=t||{},this._id=t.id,this._target=t.target,this._type=t.type,this._repeatTime=t.repeatTime||-1,this._repeats=_.defaultTo(t.repeats,-1),this._remainingPauseTime=t.remainingPauseTime||0,this._onStart=t.onStart,this._onUpdate=t.onUpdate,this._onPause=t.onPause,this._onReset=t.onReset,this._onRepeat=t.onRepeat,this._onSuccess=t.onSuccess,this._onFail=t.onFail,this._started=!1,this._resetRemainingTime(),this._resetRemainingRepeats()}_callOnPauseHandler(t){this._canCallOnPauseHandler()&&this._onPause(this,t)}_callOnRepeatHandler(t){this._canCallOnRepeatHandler()&&this._onRepeat(this,t)}_callOnResetHandler(t){this._canCallOnResetHandler()&&this._onReset(this,t)}_callOnStartHandler(t){this._canCallOnStartHandler()&&this._onStart(this,t),this._started=!0}_callOnSuccessHandler(t=!1,e){(this._canCallOnSuccessHandler()||t&&this.hasOnSuccessHandler())&&this._onSuccess(this,e)}_callOnUpdateHandler(t){this._canCallOnUpdateHandler()&&this._onUpdate(this,t)}_callOnFailHandler(t){this._canCallOnFailHandler()&&this._onFail(this,t)}_canCallOnPauseHandler(){return this.hasOnPauseHandler()&&this.isPaused()}_canCallOnRepeatHandler(){return this.hasOnRepeatHandler()}_canCallOnResetHandler(){return this.hasOnResetHandler()}_canCallOnStartHandler(){return this.hasOnStartHandler()&&!this.isStarted()}_canCallOnSuccessHandler(){return this.hasOnSuccessHandler()&&this.isFinished()}_canCallOnUpdateHandler(){return this.hasOnUpdateHandler()&&this.isUpdated()}_canCallOnFailHandler(){return this.hasOnFailHandler()}_clearRemainingRepeats(){this._remainingRepeats=0}_clearRemainingTime(){this._remainingTime=0}fail(t){this._callOnFailHandler(t),this._clearRemainingTime(),this._clearRemainingRepeats()}finish(t=!1,e){this.isFinished()||t?this._callOnSuccessHandler(t,e):this._callOnFailHandler(e),this._clearRemainingTime(),this._clearRemainingRepeats()}getElapsedRepeats(){return this._repeats-this._remainingRepeats}getElapsedTime(){return this._repeatTime-this._remainingTime}hasManager(){return!!this._manager}hasOnFailHandler(){return!!this._onFail}hasOnPauseHandler(){return!!this._onPause}hasOnRepeatHandler(){return!!this._onRepeat}hasOnResetHandler(){return!!this._onReset}hasOnStartHandler(){return!!this._onStart}hasOnSuccessHandler(){return!!this._onSuccess}hasOnUpdateHandler(){return!!this._onUpdate}hasTarget(){return!!this._target}hasType(){return!!this._type}isAnimation(){return this instanceof DKTools.Animation}isAnimationAction(){return this instanceof DKTools.Animation.Action}isFinished(){return 0===this._remainingTime&&0===this._remainingRepeats}isPaused(){return 0!==this._remainingPauseTime}isStarted(){return this._started}isUpdated(){return this.isStarted()&&!this.isPaused()&&!this.isFinished()}pause(t=-1){this._remainingPauseTime=t}_resetRemainingRepeats(){this._remainingRepeats=this._repeats}_resetRemainingTime(){this._remainingTime=this._repeatTime}remove(){return!this.hasTarget()||this._target.removeEvent(this)}repeat(){this._remainingRepeats>0&&this._remainingRepeats--,this._resetRemainingTime(),this._callOnRepeatHandler()}reset(){this._resetRemainingTime(),this._resetRemainingRepeats(),this._callOnResetHandler()}resume(){this._remainingPauseTime=0}setManager(t){this._manager=t}setOnFailHandler(t){this._onFail=t}setOnPauseHandler(t){this._onPause=t}setOnRepeatHandler(t){this._onRepeat=t}setOnResetHandler(t){this._onReset=t}setOnStartHandler(t){this._onStart=t}setOnSuccessHandler(t){this._onSuccess=t}setOnUpdateHandler(t){this._onUpdate=t}setTarget(t){this._target=t}stop(t=!1){this.finish(t),this.reset()}_update(t){this._callOnUpdateHandler(t),this._updateRemainingRepeats()}_updatePause(){this._callOnPauseHandler(),this._updateRemainingPauseTime()}_updateRemainingPauseTime(){this._remainingPauseTime>0&&this._remainingPauseTime--}_updateRemainingRepeats(){this.isFinished()||(0===this._remainingTime?this.repeat():this._updateRemainingTime())}_updateRemainingTime(){this._remainingTime>0&&this._remainingTime--}update(t){this.isPaused()?this._updatePause():(this._callOnStartHandler(),this._update(t),this.isFinished()&&this.finish())}},DKTools.Animation=class extends DKTools.Event{get actions(){return this._actions}initialize(t){this._actions=[],super.initialize.apply(this,arguments)}addAction(t){t&&(Number.isFinite(t.startTime)||(t.startTime=0),!Number.isFinite(t.endTime)&&Number.isFinite(this._repeatTime)&&(t.endTime=this._repeatTime),t.setAnimation(this),this._actions.push(t))}addActions(t){t.forEach((t=>{this.addAction(t)}))}_canUpdateAction(t){return _.inRange(this.getElapsedTime(),t.startTime,t.endTime)}hasAction(t){return this._actions.includes(t)}hasActions(){return this._actions.length>0}isActionFinished(t){return t.isStarted()&&!t.isPaused()&&this.getElapsedTime()+1>=t.endTime}isActionUpdated(t){return t.isStarted()&&!t.isPaused()&&this._canUpdateAction(t)}isFinished(){return super.isFinished.apply(this,arguments)||!this.hasActions()}removeAction(t){this.hasAction(t)&&_.pull(this._actions,t)}repeat(){this.repeatActions(),super.repeat.apply(this,arguments)}repeatActions(){this._actions.forEach((t=>{t.repeat()}))}reset(){this.resetActions(),super.reset.apply(this,arguments)}resetActions(){_.forEach(this._actions,(function(t){t.reset()}))}_update(t){this._updateActions(),super._update.apply(this,arguments)}_updateAction(t){this._canUpdateAction(t)?t.update():this.getElapsedTime()+1===t.endTime&&this.isActionFinished(t)&&t.finish()}_updateActions(){this._actions.forEach((t=>{this._updateAction(t)}))}},DKTools.Animation.Action=class extends DKTools.Event{static Frame(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,n=e.frame,i=(this._data.x-n.x)/t,o=(this._data.y-n.y)/t,s=(this._data.width-n.width)/t,r=(this._data.height-n.height)/t,a=new Rectangle(n.x+i,n.y+o,n.width+s,n.height+r);e.setFrame(a.x,a.y,a.width,a.height)}.bind(e)),e.setOnSuccessHandler(function(){this.target.setFrame(this._data.x,this._data.y,this._data.width,this._data.height)}.bind(e)),e}static Move(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,n=(this._data.x-e.x)/t,i=(this._data.y-e.y)/t,o=e.x+n,s=e.y+i;e.position.set(o,s)}.bind(e)),e.setOnSuccessHandler(function(){this.target.position.set(this._data.x,this._data.y)}.bind(e)),e}static Opacity(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target;e.opacity=e.opacity+(this._data-e.opacity)/t}.bind(e)),e.setOnSuccessHandler(function(){this.target.opacity=this._data}.bind(e)),e}static Rotation(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,n=(this._data-e.rotation)/t;e.rotation=e.rotation+n}.bind(e)),e.setOnSuccessHandler(function(){this.target.rotation=this._data}.bind(e)),e}static Scale(t){const e=new DKTools.Animation.Action(t);return e.setOnUpdateHandler(function(){const t=this.getRemainingTime(),e=this.target,n=e.scale,i=(this._data.x-n.x)/t,o=(this._data.y-n.y)/t,s=n.x+i,r=n.y+o;e.scale.set(s,r)}.bind(e)),e.setOnSuccessHandler(function(){this.target.scale.set(this._data.x,this._data.y)}.bind(e)),e}get animation(){return this._animation}get startTime(){return this._startTime}set startTime(t){this._startTime=t}get endTime(){return this._endTime}set endTime(t){this._endTime=t}get data(){return this._data}get target(){return this._target||(this._animation?this._animation.target:null)}initialize(t){t=t||{},this._animation=null,this._startTime=t.startTime,this._endTime=t.endTime,this._data=t.data,super.initialize.apply(this,arguments)}getElapsedTime(){return this._animation.getElapsedTime()-this._startTime}getRemainingTime(){return this._endTime-this._animation.getElapsedTime()}isFinished(){return this._animation.isActionFinished(this)}isUpdated(){return this._animation.isActionUpdated(this)}remove(){this._animation.removeAction(this)}repeat(){this._callOnRepeatHandler()}reset(){this._callOnResetHandler()}setAnimation(t){this._animation=t}},DKTools.EventsManager=class{constructor(){this.initialize.apply(this,arguments)}initialize(t){this._target=t,this._events={}}addAnimation(t){return this.addEventToContainer(t)}addEvent(t){let e;return t instanceof DKTools.Event||t instanceof DKTools.Animation?e=t:t instanceof Object&&(e=new DKTools.Event(t)),this.addEventToContainer(e)}addEventToContainer(t){if(!t)return null;t.hasTarget()||t.setTarget(this._target),t.setManager(this);return this.getEventsContainerByType(t.type).push(t),t}addOneTimeEvent(t){return t.repeatTime=1,t.repeats=0,this.addEvent(t)}_checkEvent(t){return t&&!t.isFinished()}_checkEvents(){_.forEach(this._events,((t,e)=>{this._events[e]=this._checkEventsContainer(t)}))}_checkEventsContainer(t){return t.filter((t=>this._checkEvent(t)))}clearEvents(t){t?Array.isArray(t)?t.forEach((t=>{this._events[t]=[]})):this._events[t]=[]:this._events={}}createEventsContainer(t){return this._events[t]||(this._events[t]=[]),this._events[t]}failEvents(t,e){this.iterateEventsContainer(t,(t=>{t.fail(e)}))}findAnimation(t,e){return this.getAnimations(e).find((e=>e.id===t))}findEvent(t,e){return this.getEvents(e).find((e=>e.id===t))}finishEvents(t,e=!1,n){this.iterateEventsContainer(t,(t=>{t.finish(e,n)}))}getAnimations(t){return this.getEvents(t).filter((t=>t instanceof DKTools.Animation))}getEventIndex(t){return this.getEventsContainerByType(t.type).indexOf(t)}getEvents(t){if(t)return this.getEventsContainerByType(t);let e=[];return Object.values(this._events).forEach((t=>{e=e.concat(t)})),e}getEventsContainerByType(t){return this._events[t]||this.createEventsContainer(t)}hasAnimation(t){return t instanceof DKTools.Animation&&this.getEventIndex(t)>=0}hasAnimations(t){return this.getAnimations(t).length>0}hasEvent(t){return this.getEventIndex(t)>=0}hasEvents(t){return this.getEvents(t).length>0}isEventsPaused(t){return this.getEventsContainerByType(t).every((t=>t.isPaused()))}iterateEventsContainer(t,e){this.getEventsContainerByType(t).forEach(e)}pauseEvents(t,e=-1){this.iterateEventsContainer(t,(t=>{t.pause(e)}))}removeEvent(t){const e=this.getEventIndex(t);if(e>=0){return this.getEventsContainerByType(t.type)[e]=null,!0}return!1}resumeEvents(t){this.iterateEventsContainer(t,(t=>{t.resume()}))}stopEvents(t,e=!1){this.iterateEventsContainer(t,(t=>{t.stop(e)}))}update(){this._checkEvents()}updateEventsContainer(t,e){this.iterateEventsContainer(t,(t=>{t.update(e)}))}},DKTools.Base=class{constructor(){throw new Error("This is an abstract class!")}get mouse(){return this.getLocalPoint(TouchInput.x,TouchInput.y)}get mouseEnterTime(){return this._mouseEnterTime}get touch(){return this.getLocalPoint(TouchInput.x,TouchInput.y)}get wheelX(){return this._wheelX}get wheelY(){return this._wheelY}get eventsManager(){return this._eventsManager}initialize(t,e,n,i){let o;t instanceof Object?(o=t.x,e=t.y,n=t.width,i=t.height):Number.isFinite(t)&&(o=t),this._clearAll(),this._createEventsManager(),this.move(o,e),this.setupSize(n,i),this.setupAll()}activate(){this.setActive(!0)&&this.updateActivateEvents()}actorName(t){return Window_Base.prototype.actorName.apply(this,arguments)}addAnimation(t){return this._eventsManager.addAnimation(t)}addEvent(t){return this._eventsManager.addEvent(t)}addOneTimeEvent(t){return this._eventsManager.addOneTimeEvent(t)}addFilter(t){t&&(this.filters&&this.filters.length>0?this.filters.push(t):this.filters=[t])}_clearAll(){this._mouseEnterTime=0,this._wheelX=0,this._wheelY=0}_createEventsManager(){this._eventsManager||(this._eventsManager=new DKTools.EventsManager(this))}calcTextHeight(t){return this.hasBitmap()&&t?Window_Base.prototype.calcTextHeight.apply(this,arguments):0}canRedrawAll(){return this.hasBitmap()}checkAll(){this.updateCheckAllEvents()}clear(){return this.clearRect()}clearRect(t,e,n,i){if(!this.hasBitmap())return!1;let o=t;return t instanceof Object&&(o=t.x,e=t.y,n=t.width,i=t.height),DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),DKTools.Utils.isString(i)&&(e=this.lineHeight()*parseFloat(i)),o=o||0,e=e||0,n=n||this.standardDrawingWidth(),i=i||this.standardDrawingHeight(),this.bitmap.clearRect(o,e,n,i),!0}convertEscapeCharacters(t){try{return Window_Base.prototype.convertEscapeCharacters.apply(this,arguments)}catch(e){return t=(t=(t=(t=(t=(t=(t=t.replace(/\\/g,"")).replace(/\x1b\x1b/g,"\\")).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bV\[(\d+)\]/gi,function(){return $gameVariables.value(parseInt(arguments[1]))}.bind(this))).replace(/\x1bN\[(\d+)\]/gi,function(){return this.actorName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bP\[(\d+)\]/gi,function(){return this.partyMemberName(parseInt(arguments[1]))}.bind(this))).replace(/\x1bG/gi,TextManager.currencyUnit)}}createAll(){this.updateCreateAllEvents()}deactivate(){this.setActive(!1)&&this.updateDeactivateEvents()}drawAll(){this.updateDrawAllEvents()}drawBitmap(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const n=DKTools.Utils.Bitmap.load(t);if(!n||e.sync&&!n.isReady())return!1;let i=!0;return n.addLoadListener((()=>{const t=DKTools.Utils.isFunction,o=DKTools.Utils.isString,s=this.lineHeight(),{paintOpacity:r,resetPaintOpacity:a}=e;let{source:l,destination:u}=e,c={};t(e.callback)&&(c=e.callback(n,this)),l=l||c.source||{},u=u||c.destination||{},t(l)&&(l=l(n,this)),t(u)&&(u=u(n,this));const h=_.defaultTo(l.x,0),p=_.defaultTo(l.width,n.width);let d=_.defaultTo(l.y,0),f=_.defaultTo(l.height,n.height);const g=_.defaultTo(u.x,0),y=_.defaultTo(u.width,p);let m=_.defaultTo(u.y,0),T=_.defaultTo(u.height,f);0!==p&&0!==f&&0!==y&&0!==T?(o(d)&&(d=s*parseFloat(d)),o(f)&&(f=s*parseFloat(f)),o(m)&&(m=s*parseFloat(m)),o(T)&&(T=s*parseFloat(T)),Number.isFinite(r)&&this.changePaintOpacity(r),this.bitmap.blt(n,h,d,p,f,g,m,y,T),a&&this.resetPaintOpacity()):i=!1})),i}async drawBitmapAsync(t,e={}){if(!t)return!1;const n=await DKTools.Utils.Bitmap.loadAsync(t);return this.drawBitmap(n,e)}drawCharacter(t,e,n={}){if(!this.hasBitmap()||null==t||null==e)return!1;n=n||{};const i=ImageManager.loadCharacter(t),o=ImageManager.isBigCharacter(t),s=i.width/(o?3:12),r=i.height/(o?4:8),a=(e%4*3+1)*s,l=4*Math.floor(e/4)*r,u=new Rectangle(a,l,s,r),c=n.pos;let{x:h,y:p}=n;return c instanceof Object&&(h=c.x,p=c.y),h=h||0,p=p||0,this.drawBitmap(i,{...n,source:u,destination:{x:h,y:p}})}drawCircle(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,radius:n,color:i,paintOpacity:o,resetPaintOpacity:s}=t;let{x:r,y:a}=t;return 0!==n&&(e instanceof Object&&(r=e.x,a=e.y),DKTools.Utils.isString(a)&&(a=this.lineHeight()*parseFloat(a)),Number.isFinite(o)&&this.changePaintOpacity(o),this.bitmap.drawCircle(r||0,a||0,n||1,i||"white"),s&&this.resetPaintOpacity(),!0)}drawFace(t,e,n={}){if(!this.hasBitmap()||null==t||null==e)return!1;n=n||{};const{pos:i,rect:o}=n;let{x:s,y:r,width:a,height:l}=n;i instanceof Object&&(s=i.x,r=i.y),o instanceof Object&&(s=o.x,r=o.y,a=o.width,l=o.height),a=a||ImageManager.faceWidth,l=l||ImageManager.faceHeight;const u=ImageManager.loadFace(t),c=ImageManager.faceWidth,h=ImageManager.faceHeight,p=Math.min(a,c),d=Math.min(l,h),f=e%4*c+(c-p)/2,_=Math.floor(e/4)*h+(h-d)/2,g=new Rectangle(f,_,p,d);return s=Math.floor((s||0)+Math.max(a-c,0)/2),r=Math.floor((r||0)+Math.max(l-h,0)/2),this.drawBitmap(u,{...n,source:g,destination:{x:s,y:r}})}drawGauge(t={}){if(!this.hasBitmap())return!1;const{pos:e,rect:n,reversed:i,gradient:o,paintOpacity:s,resetPaintOpacity:r}=t;let{x:a,y:l,width:u,height:c,type:h,rate:p,gradientPadding:d,backgroundColor:f,color:g,color1:y,color2:m}=t;if(e instanceof Object&&(a=e.x,l=e.y),n instanceof Object&&(a=n.x,l=n.y,u=n.width,c=n.height),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),0===u||0===c)return!1;a=a||0,l=l||0,u=Math.floor(u||this.standardDrawingWidth()),c=Math.floor(c||this.standardDrawingHeight()),d=_.defaultTo(d,1),f=_.defaultTo(f,"black"),g=_.defaultTo(g,"white"),y=_.defaultTo(y,g),m=_.defaultTo(m,g),h=_.defaultTo(h,"horizontal"),p=Math.min(_.defaultTo(p,1),1);const T={x:a,y:l,width:u,height:c};if("horizontal"===h)T.width=Math.floor(T.width*p),i&&(T.x+=u-T.width);else{if("vertical"!==h)return!1;T.height=Math.floor(T.height*p),i&&(T.y+=c-T.height)}return Number.isFinite(d)&&p>0&&(T.x+=d,T.y+=d,T.width-=2*d,T.height-=2*d),Number.isFinite(s)&&this.changePaintOpacity(s),this.fillRect({x:a,y:l,width:u,height:c,color:f}),this.gradientFillRect({rect:T,color1:y,color2:m,vertical:"vertical"===o}),r&&this.resetPaintOpacity(),!0}drawIcon(t,e={}){if(!this.hasBitmap()||null==t)return!1;const n=ImageManager.loadSystem(e.iconSet||"IconSet"),i=ImageManager.iconWidth,o=ImageManager.iconHeight,s=t%16*i,r=Math.floor(t/16)*o,a=new Rectangle(s,r,i,o),l=e.pos;let{x:u,y:c}=e;return l instanceof Object&&(u=l.x,c=l.y),this.drawBitmap(n,{...e,source:a,destination:{x:u,y:c}})}drawItemName(t,e={}){if(!this.hasBitmap()||!t)return!1;e=e||{};const n=ImageManager.iconWidth+4,{pos:i,iconPos:o,paintOpacity:s,resetPaintOpacity:r}=e;let{x:a,y:l,iconX:u,iconY:c}=e;return i instanceof Object&&(a=i.x,l=i.y),o instanceof Object&&(u=o.x,c=o.y),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),a=a||0,l=l||0,u=_.defaultTo(u,a+2),c=_.defaultTo(c,l+2),Number.isFinite(s)&&this.changePaintOpacity(s),this.drawIcon(t.iconIndex,{x:u,y:c}),this.drawText(t.name,{x:a+n,y:l,width:(e.width||312)-n,height:e.height,align:"left",font:e.font,textColor:e.textColor,resetFont:e.resetFont,resetTextColor:e.resetTextColor}),r&&this.resetPaintOpacity(),!0}drawLine(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos1:e,pos2:n,color:i,lineWidth:o,paintOpacity:s,resetPaintOpacity:r}=t;let{x1:a,y1:l,x2:u,y2:c}=t;return 0!==o&&(e instanceof Object&&(a=e.x,l=e.y),n instanceof Object&&(u=n.x,c=n.y),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),Number.isFinite(s)&&this.changePaintOpacity(s),DKTools.Utils.Bitmap.drawLine(this.bitmap,a||0,l||0,u||0,c||0,i,o),r&&this.resetPaintOpacity(),!0)}drawPolygon(t){if(!this.hasBitmap())return!1;t=t||{};const{points:e,paintOpacity:n,resetPaintOpacity:i}=t;if(!Array.isArray(e)||0===e.length)return!1;Number.isFinite(n)&&this.changePaintOpacity(n);for(let n=0;n<e.length-1;n++){const i=e[n],o=e[n+1];this.drawLine({...t,pos1:i,pos2:o})}return i&&this.resetPaintOpacity(),!0}drawTextEx(t,e={}){if(!this.hasBitmap()||""===t||null==t)return 0;t=String(t),(e=e||{}).wrap instanceof Object&&(t=this.textWrap(t,e.wrap));const{pos:n,startX:i,startY:o}=e;let{x:s,y:r,width:a}=e;n instanceof Object&&(s=n.x,r=n.y),DKTools.Utils.isString(r)&&(r=this.lineHeight()*parseFloat(r)),s=_.defaultTo(s,0),r=_.defaultTo(r,0),a=_.defaultTo(a,this.standardDrawingWidth());const l=this.createTextState(t,s,r,a);return l.startX=_.defaultTo(i,l.startX),l.startY=_.defaultTo(o,l.startY),this.processAllText(l),l.outputWidth}fillAll(t){return this.fillRect({color:t})}fillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{pos:e,rect:n,paintOpacity:i,resetPaintOpacity:o}=t;let{x:s,y:r,width:a,height:l,color:u}=t;return e instanceof Object&&(s=e.x,r=e.y),n instanceof Object&&(s=n.x,r=n.y,a=n.width,l=n.height),DKTools.Utils.isString(r)&&(r=this.lineHeight()*parseFloat(r)),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),0!==a&&0!==l&&(s=s||0,r=r||0,a=a||this.standardDrawingWidth(),l=l||this.standardDrawingHeight(),u=u||"white",Number.isFinite(i)&&this.changePaintOpacity(i),this.bitmap.fillRect(s,r,a,l,u),o&&this.resetPaintOpacity(),!0)}fontHeight(t){let e;return t=t||this.lineHeight(),e=this.hasBitmap()?this.bitmap.fontSize:this._font?this._font.fontSize:DKTools.Utils.isFunction(this.standardFontSize)?this.standardFontSize():$gameSystem.mainFontSize(),t-(t-.7*e)/2}getLocalPoint(t,e){const n=2===arguments.length?new Point(t,e):new Point(t.x,t.y);return this.worldTransform.applyInverse(n)}gradientFillAll(t="black",e="white",n=!1){return this.gradientFillRect({color1:t,color2:e,vertical:n})}gradientFillRect(t={}){if(!this.hasBitmap())return!1;t=t||{};const{vertical:e,rect:n,paintOpacity:i,resetPaintOpacity:o}=t;let{color1:s,color2:r,x:a,y:l,width:u,height:c}=t;return n instanceof Object&&(a=n.x,l=n.y,u=n.width,c=n.height),DKTools.Utils.isString(l)&&(l=this.lineHeight()*parseFloat(l)),DKTools.Utils.isString(c)&&(c=this.lineHeight()*parseFloat(c)),0!==u&&0!==c&&(a=a||0,l=l||0,u=u||this.standardDrawingWidth(),c=c||this.standardDrawingHeight(),s=s||"black",r=r||"white",Number.isFinite(i)&&this.changePaintOpacity(i),this.bitmap.gradientFillRect(a,l,u,c,s,r,e),o&&this.resetPaintOpacity(),!0)}hasBitmap(){return!!this.bitmap}hasParent(){return!!this.parent}hide(t=!1){this.setVisible(!1)&&this.updateHideEvents(),t||this.deactivate()}isActive(){let t=this;for(;t;){if(!t.visible)return!1;t=t.parent}return this.active}isBusy(){return!this.isReady()}isChild(t){return t?this.children.includes(t):this.hasParent()}isDestroyed(){return this._destroyed}isInside(t,e){const n=this.getLocalPoint(t,e),i=new Rectangle(0,0,this.width,this.height),o=this.mask;if(o&&DKTools.Utils.isFunction(o.containsPoint)&&!o.containsPoint(n))return!1;if(!i.contains(n.x,n.y))return!1;const s=this.hitArea;return!s||s.contains(n.x,n.y)}isMouseInside(){return this.isInside(TouchInput.x,TouchInput.y)}isOutside(t,e){return!this.isInside(t,e)}isParent(t){return!!t&&this.parent===t}isReady(){return this.hasBitmap()&&this.bitmap.isReady()}isStarted(){return this._started}isTouchInside(){return this.isInside(TouchInput.x,TouchInput.y)}isVisible(){return this.visible}isVisibleAndActive(){return this.isVisible()&&this.isActive()}makeFontBigger(){this.hasBitmap()&&Window_Base.prototype.makeFontBigger.apply(this,arguments)}makeFontSmaller(){this.hasBitmap()&&Window_Base.prototype.makeFontSmaller.apply(this,arguments)}maxFontSizeInLine(t){return this.hasBitmap()?Window_Base.prototype.maxFontSizeInLine.apply(this,arguments):0}move(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.position.set(t||0,e||0)}obtainEscapeCode(t){return Window_Base.prototype.obtainEscapeCode.apply(this,arguments)}obtainEscapeParam(t){return Window_Base.prototype.obtainEscapeParam.apply(this,arguments)}onItemChange(t,e){}partyMemberName(t){return Window_Base.prototype.partyMemberName.apply(this,arguments)}processAll(){Utils.isMobileDevice()||(this.processMouseEvents(),this.processWheelEvents())}processMouseEvents(){this.isVisibleAndActive()?this.isMouseInside()?(0===this._mouseEnterTime&&this.updateMouseEnterEvents(),this.updateMouseInsideEvents(),TouchInput.isMoved()&&this.updateMouseMoveEvents(),this._mouseEnterTime++):(this._mouseEnterTime>0&&this.updateMouseLeaveEvents(),this.updateMouseOutsideEvents(),this._mouseEnterTime=0):this._mouseEnterTime=0}processWheelEvents(){if(this._wheelX=TouchInput.wheelX,this._wheelY=TouchInput.wheelY,0!==this._wheelX||0!==this._wheelY){let t;t=this.isMouseInside()?"inside":"outside",0!==this._wheelX&&this.updateWheelXEvents(t),0!==this._wheelY&&this.updateWheelYEvents(t)}}processCharacter(t){return Window_Base.prototype.processCharacter.apply(this,arguments)}processAllText(t){return Window_Base.prototype.processAllText.apply(this,arguments)}processControlCharacter(t,e){return Window_Base.prototype.processControlCharacter.apply(this,arguments)}processDrawIcon(t,e){e.drawing&&this.drawIcon(t,{x:e.x+2,y:e.y+2}),e.x+=ImageManager.iconWidth+4}processEscapeCharacter(t,e){try{const n={...e};Window_Base.prototype.processEscapeCharacter.call(this,t,n),Object.assign(e,n)}catch(n){switch(t){case"C":this.changeTextColor(ColorManager.textColor(this.obtainEscapeParam(e)));break;case"I":this.processDrawIcon(this.obtainEscapeParam(e),e);break;case"PX":e.x=this.obtainEscapeParam(e);break;case"PY":e.y=this.obtainEscapeParam(e);break;case"FS":this.changeFont({fontSize:this.obtainEscapeParam(e)});break;case"{":this.makeFontBigger();break;case"}":this.makeFontSmaller()}}}processNewLine(t){return Window_Base.prototype.processNewLine.apply(this,arguments)}redrawAll(){this.clear(),this.drawAll(),this.updateRedrawAllEvents()}refreshAll(){this.updateAll(),this.canRedrawAll()&&this.redrawAll(),this.updateRefreshAllEvents()}removeAll(){this.updateRemoveAllEvents()}removeEvent(t){return this._eventsManager.removeEvent(t)}removeFilter(t){this.filters&&t&&(_.pull(this.filters,t),0===this.filters.length&&(this.filters=null))}removeFromParent(){return!!this.hasParent()&&(this.parent.removeChild(this),!0)}resize(t,e,n=!1){if(DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),t=Math.floor(t),e=Math.floor(e),this.width===t&&this.height===e)return!1;const i=this.width,o=this.height;return this.setupSize(t,e),(this.width!==i||this.height!==o)&&(n||this.start(),!0)}standardActive(){return!0}standardDrawingWidth(){return this.hasBitmap()?this.bitmap.width:this instanceof DKTools.Sprite?this._bitmapWidth:this instanceof DKTools.Window?this.innerWidth:0}standardDrawingHeight(){return this.hasBitmap()?this.bitmap.height:this instanceof DKTools.Sprite?this._bitmapHeight:this instanceof DKTools.Window?this.innerHeight:0}standardOpacity(){return 255}standardPivot(){return new Point(0,0)}standardRotation(){return 0}standardScale(){return new Point(1,1)}standardSkew(){return new Point(0,0)}standardVisible(){return!0}standardWindowskin(){return"Window"}setupAll(t={}){t=t||{},this.setupActive(t.active),this.setupVisible(t.visible),this.setupScale(t.scale),this.setupPivot(t.pivot),this.setupSkew(t.skew),this.setupRotation(t.rotation),this.setupOpacity(t.opacity)}setupActive(t){this.active=_.defaultTo(t,this.standardActive())}setupPivot(t,e){let n;n=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardPivot(),this.pivot.copyFrom(n)}setupRotation(t){this.rotation=_.defaultTo(t,this.standardRotation())}setupScale(t,e){let n;n=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardScale(),this.scale.copyFrom(n)}setupSize(t,e){}setupSkew(t,e){let n;n=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardSkew(),this.skew.copyFrom(n)}setupVisible(t){this.visible=_.defaultTo(t,this.standardVisible())}setupOpacity(t){this.opacity=_.defaultTo(t,this.standardOpacity())}setActive(t){if(this.active===t)return!1;const e=this.active;return this.setupActive(t),this.active!==e}setItem(t,e=!1){if(this._item!==t){const n=this._item;this._item=t,this.onItemChange(this._item,n),e||this.start()}}setVisible(t){if(this.visible===t)return!1;const e=this.visible;return this.setupVisible(t),this.visible!==e}show(t=!1){this.setVisible(!0)&&this.updateShowEvents(),t&&this.activate()}start(t=!1){this._started=!0,this.removeAll(),this.checkAll(),this.createAll(),this.refreshAll(),this.updateStartEvents(),t&&this.activate()}textFontHeight(t,e={}){return this.textLines(t,e)*this.fontHeight()}textLines(t,e){return e instanceof Object&&(t=this.textWrap(t,e)),t.split("\n").length}textWidth(t){return this.hasBitmap()&&""!==t&&null!=t?Window_Base.prototype.textWidth.apply(this,arguments):0}textHeight(t,e={}){return this.textLines(t,e)*this.lineHeight()}textSizeEx(t,e=!0){if(e)return Window_Base.prototype.textSizeEx.apply(this,arguments);const n=this.createTextState(t,0,0,0);return n.drawing=!1,this.processAllText(n),{width:n.outputWidth,height:n.outputHeight}}textWrap(t,e={}){if(!this.hasBitmap()||""===t||null==t)return"";t=String(t),e=e||{};const n=this.bitmap.fontSize;this.bitmap.fontSize=e.fontSize||n;const i=t.split("\n"),o=e.maxWidth||this.bitmap.width,s=this.textWidth(" ");let r="",a=1;for(let t=0;t<i.length;t++){const l=i[t].split(" ");let u=o;for(let t=0;t<l.length;t++){const i=l[t],c=this.textSizeEx(i,!1).width;let h=c+s;if(0===c&&(h-=s),0===t||h>u){if(t>0){if(e.maxLines===a)return this.bitmap.fontSize=n,r;r+="\n",a++}r+=i,u=o-c}else u-=h,r+=" "+i}t<i.length-1&&(r+="\n")}return this.bitmap.fontSize=n,r}update(){this.processAll(),this.updateEvents()}updateAll(){this.updateUpdateAllEvents()}updateChildren(){for(const t of this.children)t&&t.update&&t.update()}updateActivateEvents(){this._eventsManager.updateEventsContainer("activate")}updateCheckAllEvents(){this._eventsManager.updateEventsContainer("check-all")}updateCreateAllEvents(){this._eventsManager.updateEventsContainer("create-all")}updateDeactivateEvents(){this._eventsManager.updateEventsContainer("deactivate")}updateEvents(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()}updateHideEvents(){this._eventsManager.updateEventsContainer("hide")}updateMouseEnterEvents(){this._eventsManager.updateEventsContainer("mouse-enter")}updateMouseInsideEvents(){this._eventsManager.updateEventsContainer("mouse-inside")}updateMouseLeaveEvents(){this._eventsManager.updateEventsContainer("mouse-leave")}updateMouseMoveEvents(){this._eventsManager.updateEventsContainer("mouse-move")}updateMouseOutsideEvents(){this._eventsManager.updateEventsContainer("mouse-outside")}updateQueueEvents(){const t=this._eventsManager.getEventsContainerByType("queue")[0];t&&t.update()}updateReadyEvents(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")}updateRedrawAllEvents(){this._eventsManager.updateEventsContainer("redraw-all")}updateDrawAllEvents(){this._eventsManager.updateEventsContainer("draw-all")}updateRefreshAllEvents(){this._eventsManager.updateEventsContainer("refresh-all")}updateRemoveAllEvents(){this._eventsManager.updateEventsContainer("remove-all")}updateShowEvents(){this._eventsManager.updateEventsContainer("show")}updateStartEvents(){this.isStarted()&&this._eventsManager.updateEventsContainer("start")}updateUpdateAllEvents(){this._eventsManager.updateEventsContainer("update-all")}updateUpdateEvents(){this._eventsManager.updateEventsContainer("update")}updateWheelXEvents(t){this._eventsManager.updateEventsContainer("wheel-X-"+t)}updateWheelYEvents(t){this._eventsManager.updateEventsContainer("wheel-Y-"+t)}},DKTools.Sprite=function(t,e,n,i){this.initialize.apply(this,arguments)},DKTools.Sprite.prototype=Object.create(Sprite.prototype),Object.defineProperties(DKTools.Sprite.prototype,Object.getOwnPropertyDescriptors(DKTools.Base.prototype)),DKTools.Sprite.prototype.constructor=DKTools.Sprite,Object.defineProperties(DKTools.Sprite.prototype,{contents:{get:function(){return this.bitmap},set:function(t){this.bitmap=t},configurable:!0},windowskin:{get:function(){return this._windowskin},configurable:!0},align:{get:function(){return this._align},configurable:!0},font:{get:function(){return this._font},configurable:!0},textColor:{get:function(){return this._textColor},configurable:!0},paintOpacity:{get:function(){return this._paintOpacity},configurable:!0},fillColor:{get:function(){return this._fillColor},configurable:!0},graphicFolder:{get:function(){return this._graphicFolder},configurable:!0},graphicName:{get:function(){return this._graphicName},configurable:!0}}),DKTools.Sprite.prototype.initialize=function(t,e,n,i){Sprite.prototype.initialize.call(this),DKTools.Base.prototype.initialize.apply(this,arguments),t instanceof Bitmap&&this.setupBitmap(t),this.updateBitmap()},DKTools.Sprite.prototype.canRedrawAll=function(){return DKTools.Base.prototype.canRedrawAll.apply(this,arguments)&&!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype.changeFont=function(t){this.hasBitmap()&&this.updateFont(t)},DKTools.Sprite.prototype.changePaintOpacity=function(t){this.hasBitmap()&&this.updatePaintOpacity(t)},DKTools.Sprite.prototype.changeTextColor=function(t){this.hasBitmap()&&this.updateTextColor(t)},DKTools.Sprite.prototype.createAll=function(){DKTools.Base.prototype.createAll.apply(this,arguments),this.createBitmap()},DKTools.Sprite.prototype.createBitmap=function(){this.hasGraphicName()?this._loadGraphic():this.hasFixedBitmap()||(this.bitmap=new Bitmap(this._bitmapWidth,this._bitmapHeight))},DKTools.Sprite.prototype.createTextBuffer=function(t){return Window_Base.prototype.createTextBuffer.apply(this,arguments)},DKTools.Sprite.prototype.createTextState=function(t,e,n,i){return Window_Base.prototype.createTextState.apply(this,arguments)},DKTools.Sprite.prototype.destroyBitmap=function(){return!(!this.hasBitmap()||this.hasFixedBitmap())&&(this.bitmap.destroy(),!0)},DKTools.Sprite.prototype.drawAll=function(){this.updateFill(),DKTools.Base.prototype.drawAll.apply(this,arguments)},DKTools.Sprite.prototype.drawText=function(t,e={}){if(!this.hasBitmap()||null==t||""===t)return!1;t=String(t),e=e||{};const{pos:n,rect:i,font:o,textColor:s,paintOpacity:r,resetFont:a,resetTextColor:l,resetPaintOpacity:u}=e;let{x:c,y:h,width:p,height:d,align:f}=e;return n instanceof Object&&(c=n.x,h=n.y),i instanceof Object&&(c=i.x,h=i.y,p=i.width,d=i.height),DKTools.Utils.isString(h)&&(h=this.lineHeight()*parseFloat(h)),DKTools.Utils.isString(d)&&(d=this.lineHeight()*parseFloat(d)),0!==p&&0!==d&&(c=c||0,h=h||0,p=p||this.standardDrawingWidth(),d=d||this.lineHeight(),f=f||this.align,o&&this.changeFont(o),s&&this.changeTextColor(s),Number.isFinite(r)&&this.changePaintOpacity(r),this.bitmap.drawText(t,c,h,p,d,f),a&&this.resetFont(),l&&this.resetTextColor(),u&&this.resetPaintOpacity(),!0)},DKTools.Sprite.prototype.flushTextState=function(t){return Window_Base.prototype.flushTextState.apply(this,arguments)},DKTools.Sprite.prototype.getLocalPoint=function(t,e){const n=DKTools.Base.prototype.getLocalPoint.apply(this,arguments),i=this.anchor;return n.x+=this.width*i.x,n.y+=this.height*i.y,n},DKTools.Sprite.prototype.hasFillColor=function(){return!!this._fillColor},DKTools.Sprite.prototype.hasFixedBitmap=function(){return!!this._fixedBitmap},DKTools.Sprite.prototype.hasGraphicFolder=function(){return!!this._graphicFolder},DKTools.Sprite.prototype.hasGraphicName=function(){return!!this._graphicName},DKTools.Sprite.prototype.isResizable=function(){return!this.hasGraphicName()&&!this.hasFixedBitmap()},DKTools.Sprite.prototype._loadGraphic=function(){if(this.hasGraphicFolder()&&this.hasGraphicName()){const t=this._graphicFolder,e=this._graphicName,n=this._graphicLoadListener;this.loadBitmap(t,e,n),this.updateReadyEvents()}},DKTools.Sprite.prototype.lineHeight=function(){return Window_Base.prototype.lineHeight.apply(this,arguments)},DKTools.Sprite.prototype.loadBitmap=function(t,e,n){if(t instanceof Object)return this.loadBitmap(t.folder,t.filename,t.listener);const i=DKTools.Utils.Bitmap.load(t,e);return!!this.setBitmap(i)&&(DKTools.Utils.isFunction(n)&&this.hasBitmap()&&this.bitmap.addLoadListener(n),!0)},DKTools.Sprite.prototype.loadSystem=function(t,e){return t instanceof Object?this.loadBitmap("img/system/",t.filename,t.listener):this.loadBitmap("img/system/",t,e)},DKTools.Sprite.prototype.loadWindowskin=function(t,e){return t instanceof Object?this.loadSystem(t.filename||this.standardWindowskin(),t.listener):this.loadSystem(t||this.standardWindowskin(),e)},DKTools.Sprite.prototype.moveWithAnchor=function(t,e){const n=this.anchor;DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this.move(t+this.width*n.x,e+this.height*n.y)},DKTools.Sprite.prototype.removeBitmap=function(t=!1){this.hasBitmap()&&(t&&this.bitmap.destroy(),this.setBitmap(null))},DKTools.Sprite.prototype.resetAll=function(){this.resetFont(),this.resetPaintOpacity(),this.resetTextColor()},DKTools.Sprite.prototype.resetFont=function(){this.changeFont(this.font)},DKTools.Sprite.prototype.resetFontSettings=function(){Window_Base.prototype.resetFontSettings.apply(this,arguments)},DKTools.Sprite.prototype.resetPaintOpacity=function(){this.changePaintOpacity(this.paintOpacity)},DKTools.Sprite.prototype.resetTextColor=function(){this.changeTextColor(this.textColor)},DKTools.Sprite.prototype.resize=function(t,e,n=!1){if(!this.isResizable())return!1;if(DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),t=Math.floor(t),e=Math.floor(e),this.width===t&&this.height===e)return!1;const i=this.width,o=this.height;return this.setupSize(t,e),(this._bitmapWidth!==i||this._bitmapHeight!==o)&&(n||this.start(),!0)},DKTools.Sprite.prototype.standardAlign=function(){return"center"},DKTools.Sprite.prototype.standardAnchor=function(){return new Point(0,0)},DKTools.Sprite.prototype.standardFillColor=function(){return null},DKTools.Sprite.prototype.standardFont=function(){return{fontFace:this.standardFontFace(),fontBold:this.standardFontBold(),fontItalic:this.standardFontItalic(),fontSize:this.standardFontSize()}},DKTools.Sprite.prototype.standardFontFace=function(){return $gameSystem.mainFontFace()},DKTools.Sprite.prototype.standardFontBold=function(){return!1},DKTools.Sprite.prototype.standardFontItalic=function(){return!1},DKTools.Sprite.prototype.standardFontSize=function(){return $gameSystem.mainFontSize()},DKTools.Sprite.prototype.standardFrame=function(){return new Rectangle(0,0,this.width,this.height)},DKTools.Sprite.prototype.standardGraphicFolder=function(){return"img/system/"},DKTools.Sprite.prototype.standardGraphicName=function(){return""},DKTools.Sprite.prototype.standardPaintOpacity=function(){return 255},DKTools.Sprite.prototype.standardTextColor=function(){return"#ffffff"},DKTools.Sprite.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupBitmap(t),this.setupFrame(t.frame),this.setupAnchor(t.anchor),this.setupAlign(t.align),this.setupFont(t.font),this.setupTextColor(t.textColor),this.setupPaintOpacity(t.paintOpacity),this.setupFillColor(t.fillColor),this.setupGraphicFolder(t.graphicFolder),this.setupGraphicName(t.graphicName)},DKTools.Sprite.prototype.setupAlign=function(t){this._align=t||this.standardAlign()},DKTools.Sprite.prototype.setupAnchor=function(t,e){let n;n=t instanceof Object?t:2===arguments.length?new Point(t,e):this.standardAnchor(),this.anchor.copyFrom(n)},DKTools.Sprite.prototype.setupBitmap=function(t){let e=null;t instanceof Object&&(e=DKTools.Utils.Bitmap.load(t.bitmap||t)),e?(this.bitmap=e,this.bitmap.addLoadListener(this.setupSize.bind(this))):this.bitmap=null,this._fixedBitmap=!!this.bitmap},DKTools.Sprite.prototype.setupFillColor=function(t){this._fillColor=null!==t?_.defaultTo(t,this.standardFillColor()):null},DKTools.Sprite.prototype.setupFont=function(t){this._font=Object.assign(this.standardFont(),t)},DKTools.Sprite.prototype.setupFrame=function(t,e,n,i){let o;o=t instanceof Object?t:4===arguments.length?new Rectangle(t,e,n,i):this.standardFrame(),Sprite.prototype.setFrame.call(this,o.x,o.y,o.width,o.height)},DKTools.Sprite.prototype.setupGraphicFolder=function(t){this._graphicFolder=_.defaultTo(t,this.standardGraphicFolder())},DKTools.Sprite.prototype.setupGraphicLoadListener=function(t){this._graphicLoadListener=t||null},DKTools.Sprite.prototype.setupGraphicName=function(t){this._graphicName=null!==t?_.defaultTo(t,this.standardGraphicName()):null},DKTools.Sprite.prototype.setupPaintOpacity=function(t){this._paintOpacity=_.defaultTo(t,this.standardPaintOpacity())},DKTools.Sprite.prototype.setupTextColor=function(t){this._textColor=t||this.standardTextColor()},DKTools.Sprite.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)),this._bitmapWidth=t,this._bitmapHeight=e},DKTools.Sprite.prototype.setAlign=function(t,e=!1){if(this._align===t)return!1;const n=this._align;return this.setupAlign(t),this._align!==n&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setBitmap=function(t){return this.bitmap!==t&&(this.setupBitmap(t),!0)},DKTools.Sprite.prototype.setFillColor=function(t,e=!1){if(this._fillColor===t)return!1;const n=this._fillColor;return this.setupFillColor(t),this._fillColor!==n&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setFont=function(t,e=!1){if(_.isEqual(this._font,Object.assign(this.standardFont(),t)))return!1;const n={...this._font};return this.setupFont(t),!_.isEqual(this._font,n)&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicFolder=function(t,e=!1){if(this._graphicFolder===t)return!1;const n=this._graphicFolder;return this.setupGraphicFolder(t),this._graphicFolder!==n&&(e||this.start(),!0)},DKTools.Sprite.prototype.setGraphicName=function(t,e=!1){if(this._graphicName===t)return!1;const n=this._graphicName;return this.setupGraphicName(t),this._graphicName!==n&&(e||this.start(),!0)},DKTools.Sprite.prototype.setPaintOpacity=function(t,e=!1){if(this._paintOpacity===t)return!1;const n=this._paintOpacity;return this.setupPaintOpacity(t),this._paintOpacity!==n&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.setTextColor=function(t,e=!1){if(this._textColor===t)return!1;const n=this._textColor;return this.setupTextColor(t),this._textColor!==n&&(e||this.refreshAll(),!0)},DKTools.Sprite.prototype.update=function(){DKTools.Base.prototype.update.apply(this,arguments),this.updateChildren()},DKTools.Sprite.prototype.updateAll=function(){DKTools.Base.prototype.updateAll.apply(this,arguments),this.updateBitmap()},DKTools.Sprite.prototype.updateBitmap=function(){this.hasBitmap()&&(this.updateFont(),this.updatePaintOpacity(),this.updateTextColor())},DKTools.Sprite.prototype.updateFill=function(){this.hasFillColor()&&this.fillAll(this.fillColor)},DKTools.Sprite.prototype.updateFont=function(t={}){t=t||{},this.bitmap.fontFace=t.fontFace||this.font.fontFace,this.bitmap.fontItalic=!!t.fontItalic,this.bitmap.fontSize=t.fontSize||this.font.fontSize},DKTools.Sprite.prototype.updatePaintOpacity=function(t){Number.isFinite(t)||(t=this.paintOpacity),this.bitmap.paintOpacity=t},DKTools.Sprite.prototype.updateTextColor=function(t){this.bitmap.textColor=t||this.textColor},DKTools.Sprite.Button=class extends DKTools.Sprite{get longPressInterval(){return this._longPressInterval}get mousePressTime(){return this._mousePressTime}get touchPressTime(){return this._touchPressTime}isLongPressed(){return this._mousePressTime>=this._longPressInterval}isLongTouched(){return this._touchPressTime>=this._longPressInterval}isPressed(){return this._mousePressTime>0&&!this.isLongPressed()}isTouched(){return this._touchPressTime>0&&!this.isLongTouched()}standardActive(){return!1}standardLongPressInterval(){return 18}setupAll(t={}){t=t||{},super.setupAll(t),this.setupLongPressInterval(t.longPressInterval)}setupLongPressInterval(t){this._longPressInterval=t||this.standardLongPressInterval()}processAll(){super.processAll(),Utils.isMobileDevice()?this.processTouch():this.processMousePress()}processMousePress(){if(this.isVisibleAndActive()&&this.isMouseInside())if(TouchInput.isMousePressed()){let t;this._mousePressTime++,TouchInput.isLeftButtonPressed()?t="left":TouchInput.isMiddleButtonPressed()?t="middle":TouchInput.isRightButtonPressed()&&(t="right"),t&&(this.updateMouseDownEvents(t),this.isLongPressed()&&(this._mousePressTime===this._longPressInterval&&this.updateMouseLongPressStartedEvents(t),this.updateMouseLongPressEvents(t)))}else{let t;TouchInput.isLeftButtonReleased()?t="left":TouchInput.isMiddleButtonReleased()?t="middle":TouchInput.isRightButtonReleased()&&(t="right"),t&&(this.isLongPressed()?this.updateMouseLongPressFinishedEvents(t):this.isPressed()&&this.updateMouseClickEvents(t),this._mousePressTime>0&&this.updateMouseUpEvents(t)),this._mousePressTime=0}else this._mousePressTime=0}processTouch(){this.isVisibleAndActive()&&this.isTouchInside()?TouchInput.isScreenPressed()?(this._touchPressTime++,this.updateTouchDownEvents(),this.isLongTouched()&&(this._touchPressTime===this._longPressInterval&&this.updateLongTouchStartedEvents(),this.updateLongTouchEvents())):(this.isLongTouched()?this.updateLongTouchFinishedEvents():this.isTouched()&&this.updateTouchEvents(),this._touchPressTime>0&&this.updateTouchUpEvents(),this._touchPressTime=0):this._touchPressTime=0}update(){super.update.apply(this,arguments),this.updateButtonState()}updateButtonState(){Utils.isMobileDevice()?this._touchPressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents():this._mousePressTime>0?this.updateStatePressedEvents():this.updateStateNormalEvents()}updateLongTouchEvents(){this._eventsManager.updateEventsContainer("long-touch")}updateLongTouchFinishedEvents(){this._eventsManager.updateEventsContainer("long-touch-finished")}updateLongTouchStartedEvents(){this._eventsManager.updateEventsContainer("long-touch-started")}updateMouseDownEvents(t){this._eventsManager.updateEventsContainer("mouse-down-"+t)}updateMouseUpEvents(t){this._eventsManager.updateEventsContainer("mouse-up-"+t)}updateMouseClickEvents(t){this._eventsManager.updateEventsContainer("mouse-click-"+t)}updateMouseLongPressEvents(t){this._eventsManager.updateEventsContainer("mouse-long-press-"+t)}updateMouseLongPressStartedEvents(t){this._eventsManager.updateEventsContainer(`mouse-long-press-${t}-started`)}updateMouseLongPressFinishedEvents(t){this._eventsManager.updateEventsContainer(`mouse-long-press-${t}-finished`)}updateStateNormalEvents(){this._eventsManager.updateEventsContainer("state-normal")}updateStatePressedEvents(){this._eventsManager.updateEventsContainer("state-pressed")}updateTouchEvents(){this._eventsManager.updateEventsContainer("touch")}updateTouchDownEvents(){this._eventsManager.updateEventsContainer("touch-down")}updateTouchUpEvents(){this._eventsManager.updateEventsContainer("touch-up")}},DKTools.Window=function(t,e,n,i){this.initialize.apply(this,arguments)},DKTools.Window.prototype=Object.create(Window_Base.prototype),Object.defineProperties(DKTools.Window.prototype,Object.getOwnPropertyDescriptors(DKTools.Base.prototype)),DKTools.Window.prototype.constructor=DKTools.Window,Object.defineProperties(DKTools.Window.prototype,{bitmap:{get:function(){return this.contents},set:function(t){this.contents=t},configurable:!0}}),DKTools.Window.prototype.initialize=function(t,e,n,i){Window.prototype.initialize.apply(this,arguments),DKTools.Base.prototype.initialize.call(this,t,e,n,i),this.loadWindowskin(),this.updateBackOpacity(),this.createContents()},DKTools.Window.prototype.activate=function(){DKTools.Base.prototype.activate.apply(this,arguments),this._contentsSprite instanceof DKTools.Sprite&&this._contentsSprite.activate()},DKTools.Window.prototype._createContentsBackSprite=function(){Window.prototype._createContentsBackSprite.apply(this,arguments),this._contentsBackSprite.bitmap=new Bitmap},DKTools.Window.prototype._createContentsSprite=function(){this._contentsSprite=this.standardContentsSprite(),this._clientArea.addChild(this._contentsSprite)},DKTools.Window.prototype.clear=function(){return this.contentsBack&&this.contentsBack.clear(),DKTools.Base.prototype.clear.apply(this,arguments)},DKTools.Window.prototype.contentsWidth=function(){return DKTools.Utils.isFunction(this._contentsWidth)?this._contentsWidth(this):Number.isFinite(this._contentsWidth)?this._contentsWidth:Window_Base.prototype.contentsWidth.apply(this,arguments)},DKTools.Window.prototype.contentsHeight=function(){return DKTools.Utils.isFunction(this._contentsHeight)?this._contentsHeight(this):Number.isFinite(this._contentsHeight)?this._contentsHeight:DKTools.Utils.isString(this._contentsHeight)?this.lineHeight()*parseFloat(this._contentsHeight):Window_Base.prototype.contentsHeight.apply(this,arguments)},DKTools.Window.prototype.createAll=function(){DKTools.Base.prototype.createAll.apply(this,arguments),this.createContents()},DKTools.Window.prototype.createContents=function(){const t=this._contentsSprite instanceof DKTools.Sprite,e=this.contentsWidth(),n=this.contentsHeight();t?(this._contentsSprite.destroyBitmap(),this.contentsBack&&this.contentsBack.destroy()):this.destroyContents(),this.contentsBack=new Bitmap(e,n),t?(this._contentsSprite.setupSize(e,n),this._contentsSprite.start()):this.contents=new Bitmap(e,n),this.resetFontSettings()},DKTools.Window.prototype.deactivate=function(){DKTools.Base.prototype.deactivate.apply(this,arguments),this._contentsSprite instanceof DKTools.Sprite&&this._contentsSprite.deactivate()},DKTools.Window.prototype.drawText=function(t,e){arguments.length<=2&&this._contentsSprite instanceof DKTools.Sprite?this._contentsSprite.drawText(t,e):Window_Base.prototype.drawText.apply(this,arguments)},DKTools.Window.prototype.drawTextEx=function(t,e){arguments.length<=2&&this._contentsSprite instanceof DKTools.Sprite?DKTools.Base.prototype.drawTextEx.apply(this,arguments):Window_Base.prototype.drawTextEx.apply(this,arguments)},DKTools.Window.prototype.hideBack=function(){this._backSprite.visible=!1},DKTools.Window.prototype.hideCursor=function(){this.cursorVisible=!1,this._cursorSprite.visible=!1},DKTools.Window.prototype.hideContentsBack=function(){this._contentsBackSprite.visible=!1},DKTools.Window.prototype.hideFrame=function(){this.frameVisible=!1,this._frameSprite.visible=!1},DKTools.Window.prototype.isOpenAndVisible=function(){return this.isOpen()&&this.isVisible()},DKTools.Window.prototype.isOpenAndActive=function(){return this.isOpen()&&this.isActive()},DKTools.Window.prototype.loadWindowskin=function(){this.windowskin=DKTools.Utils.Bitmap.load({folder:"img/system",filename:this.standardWindowskin()})},DKTools.Window.prototype.onItemChange=function(t,e){DKTools.Base.prototype.onItemChange.apply(this,arguments),DKTools.Utils.isFunction(this._contentsSprite.setItem)&&this._contentsSprite.setItem(t)},DKTools.Window.prototype.refreshAll=function(){this._refreshAllParts(),DKTools.Base.prototype.refreshAll.apply(this,arguments)},DKTools.Window.prototype.resetFontSettings=function(){this._contentsSprite instanceof DKTools.Sprite?(this._contentsSprite.resetFont(),this.resetTextColor()):Window_Base.prototype.resetFontSettings.apply(this,arguments)},DKTools.Window.prototype.resetTextColor=function(){this._contentsSprite instanceof DKTools.Sprite?this._contentsSprite.resetTextColor():Window_Base.prototype.resetTextColor.apply(this,arguments)},DKTools.Window.prototype.resetPaintOpacity=function(){this.changePaintOpacity(255)},DKTools.Window.prototype.resize=function(t,e,n=!1){return DKTools.Utils.isString(e)&&(e=this.itemHeight()*parseFloat(e)+2*this._padding),DKTools.Base.prototype.resize.call(this,t,e,n)},DKTools.Window.prototype.standardOpennessSpeed=function(){return 32},DKTools.Window.prototype.standardContentsSprite=function(){return new DKTools.Sprite},DKTools.Window.prototype.standardPadding=function(){return $gameSystem.windowPadding()},DKTools.Window.prototype.setupAll=function(t={}){t=t||{},DKTools.Base.prototype.setupAll.call(this,t),this.setupContentsWidth(t.contentsWidth),this.setupContentsHeight(t.contentsHeight),this.setupContentsSprite(t.contentsSprite)},DKTools.Window.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.lineHeight()*parseFloat(e)+2*this._padding),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.prototype.setupContentsWidth=function(t){this._contentsWidth=t},DKTools.Window.prototype.setupContentsHeight=function(t){this._contentsHeight=t},DKTools.Window.prototype.setupContentsSprite=function(t){this._contentsSprite&&(this._clientArea.removeChild(this._contentsSprite),this._contentsSprite.bitmap&&this._contentsSprite.bitmap.destroy(),this._contentsSprite.destroy()),this._contentsSprite=t||this.standardContentsSprite(),this._clientArea.addChild(this._contentsSprite)},DKTools.Window.prototype.update=function(){Window_Base.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.prototype.updateAll=function(){this.updateContents(),DKTools.Base.prototype.updateAll.apply(this,arguments)},DKTools.Window.prototype.updateContents=function(){DKTools.Utils.isFunction(this._contentsSprite.updateAll)&&this._contentsSprite.updateAll()},DKTools.Window.prototype.updateOpen=function(){this._opening&&(this.openness+=this.standardOpennessSpeed(),this.isOpen()?(this._opening=!1,this._eventsManager.finishEvents("open",!0)):this.updateOpenEvents())},DKTools.Window.prototype.updateClose=function(){this._closing&&(this.openness-=this.standardOpennessSpeed(),this.isClosed()?(this._closing=!1,this._eventsManager.finishEvents("close",!0)):this.updateCloseEvents())},DKTools.Window.prototype.updateOpenEvents=function(){this._eventsManager.updateEventsContainer("open")},DKTools.Window.prototype.updateCloseEvents=function(){this._eventsManager.updateEventsContainer("close")},DKTools.Window.Scrollable=function(t,e,n,i){this.initialize.apply(this,arguments)},DKTools.Window.Scrollable.prototype=Object.create(Window_Scrollable.prototype),Object.defineProperties(DKTools.Window.Scrollable.prototype,Object.getOwnPropertyDescriptors(DKTools.Window.prototype)),DKTools.Window.Scrollable.prototype.constructor=DKTools.Window.Scrollable,DKTools.Window.Scrollable.prototype.initialize=function(t,e,n,i){DKTools.Window.prototype.initialize.apply(this,arguments),this.clearScrollStatus()},DKTools.Window.Scrollable.prototype._clearAll=function(){DKTools.Window.prototype._clearAll.apply(this,arguments),this._scrollX=0,this._scrollY=0,this._scrollBaseX=0,this._scrollBaseY=0},DKTools.Window.Scrollable.prototype._createArrowSprites=function(){DKTools.Window.prototype._createArrowSprites.apply(this,arguments),this._leftArrowSprite=new Sprite,this._rightArrowSprite=new Sprite,this.addChild(this._leftArrowSprite),this.addChild(this._rightArrowSprite)},DKTools.Window.Scrollable.prototype.itemWidth=function(){return DKTools.Utils.isFunction(this._itemWidth)?this._itemWidth(this):Number.isFinite(this._itemWidth)?this._itemWidth:Window_Scrollable.prototype.itemWidth.apply(this,arguments)},DKTools.Window.Scrollable.prototype.itemHeight=function(){return DKTools.Utils.isFunction(this._itemHeight)?this._itemHeight(this):Number.isFinite(this._itemHeight)?this._itemHeight:DKTools.Utils.isString(this._itemHeight)?this.lineHeight()*parseFloat(this._itemHeight):Window_Scrollable.prototype.itemHeight.apply(this,arguments)},DKTools.Window.Scrollable.prototype.isHorizontal=function(){return this.maxScrollX()>0},DKTools.Window.Scrollable.prototype.overallWidth=function(){return this.hasBitmap()?this.contents.width:0},DKTools.Window.Scrollable.prototype.overallHeight=function(){return this.hasBitmap()?this.contents.height:0},DKTools.Window.Scrollable.prototype.onItemChange=function(t,e){DKTools.Window.prototype.onItemChange.apply(this,arguments),this.scrollTo(0,0)},DKTools.Window.Scrollable.prototype.processPageScroll=function(){Input.isRepeated("pageup")&&(this.isHorizontal()?this.smoothScrollRight(1):this.smoothScrollUp(1)),Input.isRepeated("pagedown")&&(this.isHorizontal()?this.smoothScrollLeft(1):this.smoothScrollDown(1))},DKTools.Window.Scrollable.prototype.processWheelScroll=function(){if(this.isWheelScrollEnabled()&&this.isTouchedInsideFrame()){const t=20;TouchInput.wheelY>=t&&(this.isHorizontal()?this.smoothScrollLeft(1):this.smoothScrollDown(1)),TouchInput.wheelY<=-t&&(this.isHorizontal()?this.smoothScrollRight(1):this.smoothScrollUp(1))}},DKTools.Window.Scrollable.prototype._refreshArrows=function(){DKTools.Window.prototype._refreshArrows.apply(this,arguments);const t=this._width,e=this._height,n=24,i=n/2,o=96+n,s=0+n;this._leftArrowSprite.bitmap=this._windowskin,this._leftArrowSprite.anchor.set(.5,.5),this._leftArrowSprite.setFrame(o,s+i,i,n),this._leftArrowSprite.move(i/2,e/2),this._rightArrowSprite.bitmap=this._windowskin,this._rightArrowSprite.anchor.set(.5,.5),this._rightArrowSprite.setFrame(o+i+n,s+i,i,n),this._rightArrowSprite.move(t-i,e/2)},DKTools.Window.Scrollable.prototype.setupAll=function(t={}){t=t||{},DKTools.Window.prototype.setupAll.apply(this,arguments),this.setupItemWidth(t.itemWidth),this.setupItemHeight(t.itemHeight)},DKTools.Window.Scrollable.prototype.setupItemWidth=function(t){this._itemWidth=t},DKTools.Window.Scrollable.prototype.setupItemHeight=function(t){this._itemHeight=t},DKTools.Window.Scrollable.prototype.smoothScrollLeft=function(t){this.smoothScrollBy(this.itemWidth()*t,0)},DKTools.Window.Scrollable.prototype.smoothScrollRight=function(t){this.smoothScrollBy(-this.itemWidth()*t,0)},DKTools.Window.Scrollable.prototype._updateArrows=function(){const t=this.isOpen();this._leftArrowSprite.visible=t&&this.leftArrowVisible,this._rightArrowSprite.visible=t&&this.rightArrowVisible,this._downArrowSprite.visible=t&&this.downArrowVisible,this._upArrowSprite.visible=t&&this.upArrowVisible},DKTools.Window.Scrollable.prototype.updateArrows=function(){this.leftArrowVisible=this._scrollX>0,this.rightArrowVisible=this._scrollX<this.maxScrollX(),this.downArrowVisible=this._scrollY<this.maxScrollY(),this.upArrowVisible=this._scrollY>0},DKTools.Window.Scrollable.prototype.updateOrigin=function(){Window_Scrollable.prototype.updateOrigin.apply(this,arguments),this.origin.set(this._scrollX,this._scrollY)},DKTools.Window.Scrollable.prototype.update=function(){Window_Scrollable.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.Selectable=function(t,e,n,i){this.initialize.apply(this,arguments)},DKTools.Window.Selectable.prototype=Object.create(Window_Selectable.prototype),Object.defineProperties(DKTools.Window.Selectable.prototype,Object.getOwnPropertyDescriptors(DKTools.Window.Scrollable.prototype)),DKTools.Window.Selectable.prototype.constructor=DKTools.Window.Selectable,DKTools.Window.Selectable.prototype.addItem=function(t){void 0===t.enabled&&(t.enabled=!0),t.symbol&&DKTools.Utils.isFunction(t.handler)&&this.setHandler(t.symbol,t.handler),this._list.push(t)},DKTools.Window.Selectable.prototype._clearAll=function(){DKTools.Window.Scrollable.prototype._clearAll.apply(this,arguments),this._canRepeat=!0,this._handlers={},this._index=0},DKTools.Window.Selectable.prototype.callHandler=function(t){this.isHandled(t)&&this._handlers[t](this._index,this)},DKTools.Window.Selectable.prototype.callOkHandler=function(){const t=this.currentSymbol();this.isHandled(t)?this.callHandler(t):this.isHandled("ok")?this.callHandler("ok"):this.activate()},DKTools.Window.Selectable.prototype.changePaintOpacity=function(t){"boolean"==typeof t?Window_Selectable.prototype.changePaintOpacity.apply(this,arguments):this.contents.paintOpacity=t},DKTools.Window.Selectable.prototype.col=function(){return this.isHorizontal()?this._index:Math.floor(this._index%this.maxCols())},DKTools.Window.Selectable.prototype.contentsWidth=function(){return this.isHorizontal()?this.innerWidth+this.itemWidth():Window_Selectable.prototype.contentsWidth.apply(this,arguments)},DKTools.Window.Selectable.prototype.currentItem=function(){return this.item(this._index)},DKTools.Window.Selectable.prototype.currentSymbol=function(){return this.itemSymbol(this._index)},DKTools.Window.Selectable.prototype.currentExt=function(){return this.itemExt(this._index)},DKTools.Window.Selectable.prototype.cursorUp=function(t=!1){if(this.isHorizontal())return;const e=this._index,n=this.maxItems(),i=this.maxCols();(e>=i||t&&n===this.maxRows()*i)&&this.smoothSelect((e-i+n)%n)},DKTools.Window.Selectable.prototype.cursorDown=function(t=!1){if(this.isHorizontal())return;const e=this._index,n=this.maxItems(),i=this.maxCols();(e<n-i||t&&n===this.maxRows()*i)&&this.smoothSelect((e+i)%n)},DKTools.Window.Selectable.prototype.cursorLeft=function(t=!1){const e=Math.max(0,this._index),n=this.maxItems(),i=this.maxCols();this.isHorizontal()?this.selectPrevItem(t,!0):i>=2&&(e>0||t)&&this.smoothSelect((e-1+n)%n)},DKTools.Window.Selectable.prototype.cursorRight=function(t=!1){const e=this._index,n=this.maxItems(),i=this.maxCols();this.isHorizontal()?this.selectNextItem(t,!0):i>=2&&(e<n-1||t)&&this.smoothSelect((e+1)%n)},DKTools.Window.Selectable.prototype.disableItemsBackground=function(){this._itemsBackgroundDisabled=!0},DKTools.Window.Selectable.prototype.drawAll=function(){this.drawAllItems()},DKTools.Window.Selectable.prototype.drawAllItems=function(){const t=this.maxVisibleItems(),e=this.maxItems(),n=this.isItemsBackgroundEnabled();let i=this.topIndex();for(let o=0;o<t&&i<e;o++,i++)n&&this.drawItemBackground(i),this.drawItem(i)},DKTools.Window.Selectable.prototype.drawItem=function(t){const e=this.item(t)||{};DKTools.Utils.isFunction(e.drawHandler)?e.drawHandler(t,this):DKTools.Utils.isFunction(this._itemDrawHandler)&&this._itemDrawHandler(t,this)},DKTools.Window.Selectable.prototype.ensureCursorVisible=function(t=!1){if(this.isHorizontal()){const e=this.col(),n=this.innerWidth;if(n>0&&e>=0){const i=this.scrollX(),o=this.itemWidth(),s=e*o,r=s+o-n;i>s?t?this.smoothScrollTo(s,0):this.scrollTo(s,0):i<r&&(t?this.smoothScrollTo(r,0):this.scrollTo(r,0))}}else Window_Selectable.prototype.ensureCursorVisible.apply(this,arguments)},DKTools.Window.Selectable.prototype.findSymbol=function(t){return this._list.findIndex((e=>e.symbol===t))},DKTools.Window.Selectable.prototype.findExt=function(t){return this._list.findIndex((e=>e.ext===t))},DKTools.Window.Selectable.prototype.hasItems=function(){return this.maxItems()>0},DKTools.Window.Selectable.prototype.hasSymbol=function(t){return this._list.some((e=>e.symbol===t))},DKTools.Window.Selectable.prototype.hideCursor=function(){return this.addEvent({type:"update",onUpdate:DKTools.Window.prototype.hideCursor.bind(this)})},DKTools.Window.Selectable.prototype.item=function(t){return this._list[t]||null},DKTools.Window.Selectable.prototype.itemName=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.name)?e.name(t,this):e.name},DKTools.Window.Selectable.prototype.itemSymbol=function(t){const e=this.item(t);return e?e.symbol:null},DKTools.Window.Selectable.prototype.itemExt=function(t){const e=this.item(t);return e?e.ext:null},DKTools.Window.Selectable.prototype.itemWidth=function(){return DKTools.Utils.isFunction(this._itemWidth)?this._itemWidth(this):Number.isFinite(this._itemWidth)?this._itemWidth:Window_Selectable.prototype.itemWidth.apply(this,arguments)},DKTools.Window.Selectable.prototype.itemHeight=function(){return DKTools.Utils.isFunction(this._itemHeight)?this._itemHeight(this):Number.isFinite(this._itemHeight)?this._itemHeight:DKTools.Utils.isString(this._itemHeight)?this.lineHeight()*parseFloat(this._itemHeight):Window_Selectable.prototype.itemHeight.apply(this,arguments)},DKTools.Window.Selectable.prototype.itemRect=function(t){if(!this.isHorizontal())return Window_Selectable.prototype.itemRect.apply(this,arguments);const e=this.itemWidth(),n=this.itemHeight(),i=this.colSpacing(),o=this.rowSpacing(),s=e-i,r=n-o,a=new Rectangle(0,0,s,r);return this.isHorizontal()&&(a.x=t*e+i/2-this.scrollBaseX()),a},DKTools.Window.Selectable.prototype.itemExt=function(t){const e=this.item(t);return e?e.ext:null},DKTools.Window.Selectable.prototype.itemTextAlign=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.align)?e.align(t,this):DKTools.Utils.isFunction(this._itemTextAlign)?this._itemTextAlign(t,this):e.align||this.standardItemTextAlign()},DKTools.Window.Selectable.prototype.itemTextColor=function(t){const e=(this.item(t)||{}).textColor||this._itemTextColor;return DKTools.Utils.isFunction(e)?e(t,this):e||ColorManager.normalColor()},DKTools.Window.Selectable.prototype.itemPaintOpacity=function(t){const e=this.item(t)||{};return DKTools.Utils.isFunction(e.paintOpacity)?e.paintOpacity(t,this):Number.isFinite(e.paintOpacity)?e.paintOpacity:DKTools.Utils.isFunction(this._itemPaintOpacity)?this._itemPaintOpacity(t,this):this.isItemEnabled(t)?255:this.translucentOpacity()},DKTools.Window.Selectable.prototype.isItemEnabled=function(t){const e=(this.item(t)||{}).enabled;return DKTools.Utils.isFunction(e)?e(t,this):e},DKTools.Window.Selectable.prototype.isItemSelected=function(t){return this._index===t},DKTools.Window.Selectable.prototype.isItemsBackgroundEnabled=function(){return!this._itemsBackgroundDisabled},DKTools.Window.Selectable.prototype.isCurrentItemEnabled=function(){return this.isItemEnabled(this._index)},DKTools.Window.Selectable.prototype.isHorizontal=function(){return Window_Selectable.prototype.isHorizontal.apply(this,arguments)},DKTools.Window.Selectable.prototype.isOkEnabled=function(){return!0},DKTools.Window.Selectable.prototype.isRefreshOnSelect=function(){return!!this._refreshOnSelect},DKTools.Window.Selectable.prototype.isScrollEnabled=function(){return Window_Selectable.prototype.isScrollEnabled.apply(this,arguments)},DKTools.Window.Selectable.prototype.maxCols=function(){return this._maxCols},DKTools.Window.Selectable.prototype.maxItems=function(){return this._list.length},DKTools.Window.Selectable.prototype.maxPageItems=function(){return this.isHorizontal()?this.maxCols():Window_Selectable.prototype.maxPageItems.apply(this,arguments)},DKTools.Window.Selectable.prototype.maxVisibleItems=function(){return this.isHorizontal()?Math.ceil(this.contentsWidth()/this.itemWidth()):Window_Selectable.prototype.maxVisibleItems.apply(this,arguments)},DKTools.Window.Selectable.prototype.nextIndex=function(t=!1){return this._index<this.maxItems()-1?this._index+1:t?0:-1},DKTools.Window.Selectable.prototype.nextItem=function(t=!1){return this.item(this.nextIndex(t))},DKTools.Window.Selectable.prototype.overallWidth=function(){return this.isHorizontal()?this.maxItems()*this.itemWidth():Window_Selectable.prototype.overallWidth.apply(this,arguments)},DKTools.Window.Selectable.prototype.overallHeight=function(){return this.isHorizontal()?this.itemHeight():Window_Selectable.prototype.overallHeight.apply(this,arguments)},DKTools.Window.Selectable.prototype.paint=function(){this.refreshAll()},DKTools.Window.Selectable.prototype.playCursorSound=function(){SoundManager.playCursor()},DKTools.Window.Selectable.prototype.prevIndex=function(t=!1){return this._index>0?this._index-1:t?this.maxItems()-1:-1},DKTools.Window.Selectable.prototype.prevItem=function(t=!1){return this.item(this.prevIndex(t))},DKTools.Window.Selectable.prototype.processCancel=function(){SoundManager.playCancel(),this.updateInputData(),this.deactivate();const t=this.currentItem();t&&DKTools.Utils.isFunction(t.cancelHandler)?t.cancelHandler(this._index,this):this.callCancelHandler()},DKTools.Window.Selectable.prototype.processOk=function(){if(this.isCurrentItemEnabled()){this.playOkSound(),this.updateInputData(),this.deactivate();const t=this.currentItem()||{};DKTools.Utils.isFunction(t.okHandler)?t.okHandler(this._index,this):this.callOkHandler()}else this.playBuzzerSound()},DKTools.Window.Selectable.prototype.refreshAll=function(){DKTools.Window.prototype.refreshAll.apply(this,arguments),this.refreshCursor()},DKTools.Window.Selectable.prototype.refreshOnSelect=function(){this._refreshOnSelect=!0},DKTools.Window.Selectable.prototype.standardContentsSprite=function(){return new Sprite},DKTools.Window.Selectable.prototype.standardItems=function(){return[]},DKTools.Window.Selectable.prototype.standardMaxCols=function(){return 1},DKTools.Window.Selectable.prototype.standardItemDrawHandler=function(){return function(t){const e=this.itemTextColor(t),n=this.itemPaintOpacity(t),i=this.itemTextAlign(t),o=this.itemLineRect(t);this.changeTextColor(e),this.changePaintOpacity(n),this.contents.drawText(this.itemName(t),o.x,o.y,o.width,o.height,i)}.bind(this)},DKTools.Window.Selectable.prototype.standardItemTextAlign=function(){return"center"},DKTools.Window.Selectable.prototype.setupAll=function(t={}){t=t||{},DKTools.Window.prototype.setupAll.apply(this,arguments),this.setupMaxCols(t.maxCols),this.setupItems(t.items),this.setupItemTextColor(t.itemTextColor),this.setupItemPaintOpacity(t.itemPaintOpacity),this.setupItemAlign(t.itemAlign),this.setupItemDrawHandler(t.itemDrawHandler)},DKTools.Window.Selectable.prototype.setupMaxCols=function(t=1){this._maxCols=t||this.standardMaxCols()},DKTools.Window.Selectable.prototype.setupItems=function(t){this._list=[],(t||this.standardItems()).forEach((t=>{this.addItem(t)}))},DKTools.Window.Selectable.prototype.setupItemTextColor=function(t){this._itemTextColor=t},DKTools.Window.Selectable.prototype.setupItemPaintOpacity=function(t){this._itemPaintOpacity=t},DKTools.Window.Selectable.prototype.setupItemAlign=function(t){this._itemAlign=t},DKTools.Window.Selectable.prototype.setupItemDrawHandler=function(t){this._itemDrawHandler=t||this.standardItemDrawHandler()},DKTools.Window.Selectable.prototype.setupSize=function(t,e){DKTools.Utils.isString(e)&&(e=this.itemHeight()*parseFloat(e)+2*this._padding),Window.prototype.move.call(this,this.x,this.y,t,e)},DKTools.Window.Selectable.prototype.setItems=function(t,e=!1){return this._list!=t&&(this.setupItems(t),e||this.start(),!0)},DKTools.Window.Selectable.prototype.setMaxCols=function(t,e=!1){if(this._maxCols===t)return!1;const n=this._maxCols;return this.setupMaxCols(t),this._maxCols!==n&&(e||this.start(),!0)},DKTools.Window.Selectable.prototype.select=function(t,e=!1){const n=this.item(t);Window_Selectable.prototype.select.call(this,t),this.isRefreshOnSelect()&&this.refreshAll(),e&&this.playCursorSound(),n&&DKTools.Utils.isFunction(n.selectHandler)&&n.selectHandler(t,this),this.updateSelectEvents()},DKTools.Window.Selectable.prototype.selectSymbol=function(t){const e=this.findSymbol(t);e>=0?this.forceSelect(e):this.forceSelect(0)},DKTools.Window.Selectable.prototype.selectExt=function(t){const e=this.findExt(t);e>=0?this.forceSelect(e):this.forceSelect(0)},DKTools.Window.Selectable.prototype.selectFirstItem=function(t=!1,e=!1){t?this.smoothSelect(0):this.forceSelect(0),e&&this.playCursorSound()},DKTools.Window.Selectable.prototype.selectLasItem=function(t=!1,e=!1){const n=this.maxItems()-1;-1!==n&&(t?this.smoothSelect(n):this.forceSelect(n),e&&this.playCursorSound())},DKTools.Window.Selectable.prototype.selectPrevItem=function(t=!1,e=!1,n=!1){const i=this.prevIndex(t);i>=0&&(e?this.smoothSelect(i):this.forceSelect(i),n&&this.playCursorSound())},DKTools.Window.Selectable.prototype.selectNextItem=function(t=!1,e=!1,n=!1){const i=this.nextIndex(t);i>=0&&(e?this.smoothSelect(i):this.forceSelect(i),n&&this.playCursorSound())},DKTools.Window.Selectable.prototype.topCol=function(){return Math.floor(this.scrollX()/this.itemWidth())},DKTools.Window.Selectable.prototype.topIndex=function(){return this.isHorizontal()?this.topCol():Window_Selectable.prototype.topIndex.apply(this,arguments)},DKTools.Window.Selectable.prototype.updateOrigin=function(){Window_Selectable.prototype.updateOrigin.apply(this,arguments)},DKTools.Window.Selectable.prototype.update=function(){Window_Selectable.prototype.update.apply(this,arguments),DKTools.Base.prototype.update.apply(this,arguments)},DKTools.Window.Selectable.prototype.updateSelectEvents=function(){this._eventsManager.updateEventsContainer("select",this._index)},DKTools.Scene=function(){this.initialize.apply(this,arguments)},DKTools.Scene.prototype=Object.create(Scene_Base.prototype),DKTools.Scene.prototype.constructor=DKTools.Scene,DKTools.Scene.prototype.initialize=function(){this._eventsManager=new DKTools.EventsManager(this),Scene_Base.prototype.initialize.apply(this,arguments)},DKTools.Scene.prototype.addEvent=function(t){return this._eventsManager.addEvent(t)},DKTools.Scene.prototype.addOneTimeEvent=function(t){return this._eventsManager.addOneTimeEvent(t)},DKTools.Scene.prototype.addAnimation=function(t){this._eventsManager.addAnimation(t)},DKTools.Scene.prototype.arePageButtonsEnabled=function(){return!0},DKTools.Scene.prototype.create=function(){Scene_Base.prototype.create.apply(this,arguments),this.createBackground(),this.createAllSprites(),this.createWindowLayer(),ConfigManager.touchUI&&this.createUI(),this.createAllWindows(),this.createForeground()},DKTools.Scene.prototype.createBackground=function(){this.needsBackground()&&Scene_MenuBase.prototype.createBackground.apply(this,arguments)},DKTools.Scene.prototype.createAllSprites=function(){},DKTools.Scene.prototype.createAllWindows=function(){},DKTools.Scene.prototype.createHelpWindow=function(t=Window_Help){this._helpWindow=new t(this.helpWindowRect()),this.addWindow(this._helpWindow)},DKTools.Scene.prototype.createUI=function(){this.needsCancelButton()&&this.createCancelButton(),this.needsPageButtons()&&this.createPageButtons()},DKTools.Scene.prototype.createForeground=function(){},DKTools.Scene.prototype.createCancelButton=function(){this._cancelButton=new Sprite_Button("cancel"),this._cancelButton.move(Graphics.boxWidth-this._cancelButton.width-4,this.buttonY()),this.addWindow(this._cancelButton)},DKTools.Scene.prototype.createPageButtons=function(){const t=this.buttonY();this._pageupButton=new Sprite_Button("pageup"),this._pageupButton.move(4,t),this._pagedownButton=new Sprite_Button("pagedown"),this._pagedownButton.move(this._pageupButton.x+this._pageupButton.width+4,t),this.addWindow(this._pageupButton),this.addWindow(this._pagedownButton),this._pageupButton.setClickHandler(this.onPageUpButton.bind(this)),this._pagedownButton.setClickHandler(this.onPageDownButton.bind(this))},DKTools.Scene.prototype.hasWindowLayer=function(){return!!this._windowLayer},DKTools.Scene.prototype.helpAreaBottom=Scene_MenuBase.prototype.helpAreaBottom,DKTools.Scene.prototype.helpAreaHeight=Scene_MenuBase.prototype.helpAreaHeight,DKTools.Scene.prototype.helpAreaTop=Scene_MenuBase.prototype.helpAreaTop,DKTools.Scene.prototype.helpWindowRect=Scene_MenuBase.prototype.helpWindowRect,DKTools.Scene.prototype.isChild=function(t){return t instanceof Window&&this.hasWindowLayer()?this._windowLayer.children.includes(t):this.children.includes(t)},DKTools.Scene.prototype.mainAreaBottom=Scene_MenuBase.prototype.mainAreaBottom,DKTools.Scene.prototype.mainAreaHeight=Scene_MenuBase.prototype.mainAreaHeight,DKTools.Scene.prototype.mainAreaTop=Scene_MenuBase.prototype.mainAreaTop,DKTools.Scene.prototype.needsBackground=function(){return!1},DKTools.Scene.prototype.needsCancelButton=function(){return!1},DKTools.Scene.prototype.needsPageButtons=function(){return!1},DKTools.Scene.prototype.onPageUpButton=function(){},DKTools.Scene.prototype.onPageDownButton=function(){},DKTools.Scene.prototype.removeWindow=function(t){return!(!this.hasWindowLayer()||!this.isChild(t))&&(this._windowLayer.removeChild(t),!0)},DKTools.Scene.prototype.setBackgroundOpacity=function(t){this._backgroundSprite&&(this._backgroundSprite.opacity=t)},DKTools.Scene.prototype.update=function(){Scene_Base.prototype.update.apply(this,arguments),this.updatePageButtons(),this.updateEvents()},DKTools.Scene.prototype.updatePageButtons=function(){if(this._pageupButton&&this._pagedownButton){const t=this.arePageButtonsEnabled();this._pageupButton.visible=t,this._pagedownButton.visible=t}},DKTools.Scene.prototype.updateEvents=function(){this._eventsManager.update(),this.updateReadyEvents(),this.updateUpdateEvents(),this.updateQueueEvents()},DKTools.Scene.prototype.updateReadyEvents=function(){this.isReady()&&this._eventsManager.updateEventsContainer("ready")},DKTools.Scene.prototype.updateUpdateEvents=function(){this._eventsManager.updateEventsContainer("update")},DKTools.Scene.prototype.updateQueueEvents=function(){const t=this._eventsManager.getEventsContainerByType("queue")[0];t&&t.update()},DKTools.Scene.Preloader=class{constructor(){this.initialize.apply(this,arguments)}initialize(){this._queue=[],this._finished=!1,this._running=!1,this._errors=0}add(t){t instanceof Bitmap?t=DKTools.Utils.Bitmap.loadAsync(t):t instanceof WebAudio&&(t=DKTools.Utils.WebAudio.loadAsync(t)),t instanceof Promise&&this._queue.push(t)}finish(){this._queue=[],this._finished=!0,this._running=!1}hasErrors(){return this._errors>0}isRunning(){return this._running}isReady(){return this._finished}_onError(){this._errors++}start(){if(0===this._queue.length)return void this.finish();const t=this._queue.map((t=>t.catch((t=>{throw this._onError(),t}))));Promise.all(t).then((()=>this.finish())),this._running=!0,this._finished=!1}};const DKToolsParam=new DKTools.ParameterManager("DKTools");PluginManager.registerCommand("DKTools","UpdateFileSystemStamp",(()=>{DKTools.IO._createStamp().then((()=>{window.alert("System stamp updated!")}))}));const DKTools_main_onEffekseerLoad=main.onEffekseerLoad;main.onEffekseerLoad=function(){DKTools.Utils.initialize(),DKTools.IO.initialize(),DKTools_main_onEffekseerLoad.apply(this,arguments),DKTools.PluginManager.initialize()};const DKTools_Utils_isNwjs=Utils.isNwjs;Utils.isNwjs=function(){return void 0===this.__isNwjs__&&(this.__isNwjs__=DKTools_Utils_isNwjs.apply(this,arguments)),this.__isNwjs__};const DKTools_Utils_isMobileDevice=Utils.isMobileDevice;Utils.isMobileDevice=function(){return void 0===this.__isMobileDevice__&&(this.__isMobileDevice__=DKTools_Utils_isMobileDevice.apply(this,arguments)),this.__isMobileDevice__};const DKTools_Utils_isMobileSafari=Utils.isMobileSafari;Utils.isMobileSafari=function(){return void 0===this.__isMobileSafari__&&(this.__isMobileSafari__=DKTools_Utils_isMobileSafari.apply(this,arguments)),this.__isMobileSafari__};const DKTools_Utils_isAndroidChrome=Utils.isAndroidChrome;Utils.isAndroidChrome=function(){return void 0===this.__isAndroidChrome__&&(this.__isAndroidChrome__=DKTools_Utils_isAndroidChrome.apply(this,arguments)),this.__isAndroidChrome__},Utils.isTest=function(){return void 0===this.__isTest__&&(this.__isTest__=this.isOptionValid("test")),this.__isTest__},Utils.getEncryptedFileExtension=function(){return"_"};const DKTools_Graphics_initialize=Graphics.initialize;Graphics.initialize=function(t,e,n){DKTools_Graphics_initialize.apply(this,arguments);const i=DKToolsParam.get("FPS Meter")||{};if(Utils.isTest()&&i.Enabled){const t=this._fpsCounter;t&&(t._showFps=!1,"FPS"===i.Mode||t.switchMode(),t.switchMode())}return!!this._app};const DKTools_Graphics_printError=Graphics.printError;Graphics.printError=function(t,e,n=null){DKTools_Graphics_printError.apply(this,arguments),this._errorPrinter&&this._updateErrorPrinter()},Graphics.printDetailedError=function(t){if(!this._errorPrinter)return;const e=t.stack.split(/(?:\r\n|\r|\n)/).map((t=>t.replace(/[\(](.*[\/])/,"(")));this._errorPrinter.innerHTML=this._makeDetailedErrorHtml(t.name,t.message,e),this._applyCanvasFilter()},Graphics._makeDetailedErrorHtml=function(t,e,n){const i=DKToolsParam.get("Print Detailed Error"),o=DKTools.Utils._getErrorLogData();let s=i["Error Message"],r=i["Restart Message"],a="";return Imported.DKTools_Localization&&(s&&(s=DKTools.Localization.getText(s)),r&&(r=DKTools.Localization.getText(r))),s&&(a='<font color="yellow"><b>'+s+"<br></b></font><br>"),Object.keys(o).length>0&&(a+='<font color="yellow"><b>Reference Information</b></font><br>',_.forEach(o,((t,e)=>{a+='<font color="white">'+e+": "+t+"</font><br>"})),a+="<br>"),a+='<font color="red"><b>'+e+"</b></font><br>",_.forEach(n,(t=>{a+='<font color="white">'+t+"</font><br>"})),r&&(a+='<br><font color="yellow"><b>'+r+"</b></font><br><br>"),a};const DKTools_Graphics_updateErrorPrinter=Graphics._updateErrorPrinter;Graphics._updateErrorPrinter=function(){DKTools_Graphics_updateErrorPrinter.call(this),this._errorPrinter&&DKToolsParam.get("Print Detailed Error","Enabled")&&(this._errorPrinter.style.textAlign="left",this._errorPrinter.style.height=.8*this._app.view.height+"px")},void 0===Input.keyMapper[35]&&(Input.keyMapper[35]="end"),void 0===Input.keyMapper[36]&&(Input.keyMapper[36]="home");const DKTools_TouchInput_initialize=TouchInput.initialize;TouchInput.initialize=function(){DKTools_TouchInput_initialize.apply(this,arguments);const t=DKToolsParam.get("Cursor Graphic")||{};if(t.Enabled){const e=t.Graphic;e&&(document.body.style.cursor=`url('img/system/${e}.png'), default`)}};const DKTools_TouchInput_clear=TouchInput.clear;TouchInput.clear=function(){DKTools_TouchInput_clear.apply(this,arguments),this._leftButtonPressed=!1,this._middleButtonPressed=!1,this._rightButtonPressed=!1},TouchInput.isMousePressed=function(){return this.isLeftButtonPressed()||this.isMiddleButtonPressed()||this.isRightButtonPressed()},TouchInput.isMouseReleased=function(){return this.isLeftButtonReleased()||this.isMiddleButtonReleased()||this.isRightButtonReleased()},TouchInput.isLeftButtonPressed=function(){return this._leftButtonPressed||!1},TouchInput.isLeftButtonReleased=function(){return this._currentState.leftButtonReleased||!1},TouchInput.isMiddleButtonPressed=function(){return this._middleButtonPressed||!1},TouchInput.isMiddleButtonReleased=function(){return this._currentState.middleButtonReleased||!1},TouchInput.isRightButtonPressed=function(){return this._rightButtonPressed||!1},TouchInput.isRightButtonReleased=function(){return this._currentState.rightButtonReleased||!1},TouchInput.isScreenPressed=function(){return this._screenPressed};const DKTools_TouchInput_onLeftButtonDown=TouchInput._onLeftButtonDown;TouchInput._onLeftButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),n=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onLeftButtonDown.apply(this,arguments),Graphics.isInsideCanvas(e,n)&&(this._leftButtonPressed=!0)};const DKTools_TouchInput_onMiddleButtonDown=TouchInput._onMiddleButtonDown;TouchInput._onMiddleButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),n=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onMiddleButtonDown.apply(this,arguments),Graphics.isInsideCanvas(e,n)&&(this._middleButtonPressed=!0)};const DKTools_TouchInput_onRightButtonDown=TouchInput._onRightButtonDown;TouchInput._onRightButtonDown=function(t){const e=Graphics.pageToCanvasX(t.pageX),n=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onRightButtonDown.apply(this,arguments),Graphics.isInsideCanvas(e,n)&&(this._rightButtonPressed=!0)};const DKTools_TouchInput_onMouseUp=TouchInput._onMouseUp;TouchInput._onMouseUp=function(t){const e=Graphics.pageToCanvasX(t.pageX),n=Graphics.pageToCanvasY(t.pageY);DKTools_TouchInput_onMouseUp.apply(this,arguments),this._leftButtonPressed=!1,this._middleButtonPressed=!1,this._rightButtonPressed=!1,Graphics.isInsideCanvas(e,n)&&(0===t.button?this._newState.leftButtonReleased=!0:1===t.button?this._newState.middleButtonReleased=!0:2===t.button&&(this._newState.rightButtonReleased=!0))};const DKTools_Tilemap_initialize=Tilemap.prototype.initialize;Tilemap.prototype.initialize=function(){DKTools_Tilemap_initialize.call(this),this._tileWidth=Tilemap.TILE_WIDTH||this._tileWidth,this._tileHeight=Tilemap.TILE_HEIGHT||this._tileHeight},Object.defineProperties(Sprite.prototype,{frame:{get:function(){return this._frame},set:function(t){this.setFrame(t)},configurable:!0}}),Object.defineProperties(Window.prototype,{frameOpacity:{get:function(){return 255*this._frameSprite.alpha},set:function(t){this._frameSprite.alpha=t.clamp(0,255)/255},configurable:!0},contentsSprite:{get:function(){return this._contentsSprite},configurable:!0}});const DKTools_WebAudio_addLoadListener=WebAudio.prototype.addLoadListener;WebAudio.prototype.addLoadListener=function(t){this.isReady()?t(this):DKTools_WebAudio_addLoadListener.apply(this,arguments)},WebAudio.prototype._onLoad=function(){for(;this._loadListeners.length>0;){this._loadListeners.shift()(this)}},Video.videoFileExt=function(){return Utils.canPlayWebm()?".webm":".mp4"};const DKTools_DataManager_isDatabaseLoaded=DataManager.isDatabaseLoaded;DataManager.isDatabaseLoaded=function(){return!!DKTools_DataManager_isDatabaseLoaded.apply(this,arguments)&&(this.__isDatabaseLoaded||(this.__isDatabaseLoaded=!0,this.onDatabaseLoad()),!0)},DataManager.onDatabaseLoad=function(){},Object.defineProperties(ImageManager,{PARALLAXES_FOLDER:{get:function(){if(void 0===this.__parallaxesFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/parallaxes/";if(t.Enabled){const n=t["Parallaxes Folder"];this.__parallaxesFolder__=n?DKTools.IO.normalizePath(n+"/"):e}else this.__parallaxesFolder__=e}return this.__parallaxesFolder__},configurable:!0},TILESETS_FOLDER:{get:function(){if(void 0===this.__tilesetsFolder__){const t=DKToolsParam.get("Tile Size")||{},e="img/tilesets/";if(t.Enabled){const n=t["Tilesets Folder"];this.__tilesetsFolder__=n?DKTools.IO.normalizePath(n+"/"):e}else this.__tilesetsFolder__=e}return this.__tilesetsFolder__},configurable:!0}}),ImageManager.imageFileExt=function(){return".png"},ImageManager.loadParallax=function(t){return this.loadBitmap(ImageManager.PARALLAXES_FOLDER,t)},ImageManager.loadTileset=function(t){return this.loadBitmap(ImageManager.TILESETS_FOLDER,t)},ColorManager.randomColor=function(){return"#"+(16777215*Math.random()<<0).toString(16)};const DKTools_SceneManager_initialize=SceneManager.initialize;SceneManager.initialize=async function(){await DKTools_SceneManager_initialize.apply(this,arguments),await DKTools.StartupManager.initialize()};const DKTools_SceneManager_onKeyDown=SceneManager.onKeyDown;SceneManager.onKeyDown=function(t){if(DKTools_SceneManager_onKeyDown.call(this,t),t.ctrlKey||t.altKey)return;const e=DKToolsParam.get("Quick Load","Key Code"),n=DKToolsParam.get("Screenshots","Key Code"),i=DKToolsParam.get("Grid","Key Code");switch(t.keyCode){case e:DKTools.Utils.__quickLoad();break;case n:DKToolsParam.get("Screenshots","Enabled")&&DKTools.Utils.makeScreenshot();break;case i:DKTools.Utils.__showGrid()}},SceneManager.showDevTools=function(){if(Utils.isTest()&&Utils.isNwjs())try{const t=__webpack_require__(970).Window.get();t.showDevTools(null,(()=>t.focus()))}catch(t){DKTools.Utils.logError(t),console.error("Can not open the dev tools!")}};const DKTools_SceneManager_catchException=SceneManager.catchException;SceneManager.catchException=function(t){DKTools_SceneManager_catchException.apply(this,arguments),t instanceof Error&&DKToolsParam.get("Print Detailed Error","Enabled")&&Graphics.printDetailedError(t),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&this.showDevTools()};const DKTools_SceneManager_onError=SceneManager.onError;SceneManager.onError=function(t){DKTools_SceneManager_onError.apply(this,arguments),DKTools.Utils.logError(t),DKToolsParam.get("Debugging Console","Open On Error")&&this.showDevTools()},SceneManager.changeScene=function(){this.isSceneChanging()&&!this.isCurrentSceneBusy()&&(this._scene&&(this._scene.terminate(),this.onSceneTerminate()),this._scene=this._nextScene,this._scene&&(this._scene.startPreloading(),this._sceneCreated=!1,this._nextScene=null,this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate())),this._exiting&&this.terminate())},SceneManager.updateScene=function(){if(this._scene&&(this._scene.isStarted()&&this.isGameActive()&&this._scene.update(),!this._sceneCreated&&this._scene.isPreloaded()&&(this._scene.create(),this._sceneCreated=!0,this.onSceneCreate()),this._sceneCreated&&!this._scene.isStarted()))try{this._scene.isReady()&&(this.onBeforeSceneStart(),this._scene.start(),this.onSceneStart())}catch(t){if(console.error(t),DKTools.Utils.logError(t),Array.isArray(t)&&"LoadError"===t[0])throw t;this.onBeforeSceneStart(),this._scene.start(),this.onSceneStart()}},SceneManager.isCurrentScene=function(t){return!!this._scene&&this._scene.constructor===t};const DKTools_SceneManager_goto=SceneManager.goto;SceneManager.goto=function(t){DKTools_SceneManager_goto.call(this,t),DKTools.Utils.__hideGrid()};const DKTools_Scene_Base_initialize=Scene_Base.prototype.initialize;Scene_Base.prototype.initialize=function(){this._preloader=new DKTools.Scene.Preloader,DKTools_Scene_Base_initialize.apply(this,arguments)};const DKTools_Scene_Base_create=Scene_Base.prototype.create;Scene_Base.prototype.create=function(){this!==SceneManager._scene&&this.startPreloading(),DKTools_Scene_Base_create.apply(this,arguments)},Scene_Base.prototype.activate=function(){this._active=!0},Scene_Base.prototype.deactivate=function(){this._active=!1},Scene_Base.prototype.isPreloaded=function(){return this._preloader.isReady()};const DKTools_Scene_Base_isReady=Scene_Base.prototype.isReady;Scene_Base.prototype.isReady=function(){return DKTools_Scene_Base_isReady.apply(this,arguments)&&this.isPreloaded()},Scene_Base.prototype.setupPreloading=function(){},Scene_Base.prototype.startPreloading=function(){this.setupPreloading(),this._preloader.start()};const DKTools_Scene_Base_terminate=Scene_Base.prototype.terminate;Scene_Base.prototype.terminate=function(){this._preloader.finish(),DKTools_Scene_Base_terminate.apply(this,arguments)};const DKTools_Scene_Boot_isReady=Scene_Boot.prototype.isReady;Scene_Boot.prototype.isReady=function(){return DKTools_Scene_Boot_isReady.apply(this,arguments)&&DKTools.StartupManager.isReady()};const DKTools_Scene_Boot_isBusy=Scene_Boot.prototype.isBusy;Scene_Boot.prototype.isBusy=function(){return DKTools_Scene_Boot_isBusy.apply(this,arguments)||!DKTools.PreloadManager.isReady()};const DKTools_Scene_Boot_start=Scene_Boot.prototype.start;Scene_Boot.prototype.start=function(){const t=DKToolsParam.get("Quick Start")||{};t.Enabled?(DKTools_Scene_Boot_start.apply(this,arguments),DataManager.isBattleTest()||DataManager.isEventTest()||!t["Skip Saves"]&&DataManager.isAnySavefileExists()||(Scene_Base.prototype.start.apply(this,arguments),SoundManager.preloadImportantSounds(),this.checkPlayerLocation(),DataManager.setupNewGame(),this.resizeScreen(),this.updateDocumentTitle(),SceneManager.goto(window[t["Scene Name"]]))):DKTools_Scene_Boot_start.apply(this,arguments),DKTools.PreloadManager.initialize()},Scene_Map.prototype.setupPreloading=function(){Scene_Base.prototype.setupPreloading.apply(this,arguments),this._setupMapPreloading()},Scene_Map.prototype._setupMapPreloading=function(){const t=DKToolsParam.get("Maps Preloading")||{};if(!t.Enabled)return;const e=$gamePlayer.isTransferring()?$gamePlayer.newMapId():$gameMap.mapId(),n=_.find(t.Maps,{"Map Id":e});n&&(DKTools.PreloadManager.setDebugging(t.Debugging),n["Audio Files"].forEach((t=>{DKTools.PreloadManager.preloadAudio({path:"audio/"+t})})),n["Image Files"].forEach((t=>{DKTools.PreloadManager.preloadImage({path:"img/"+t})})),0!==DKTools.PreloadManager.getTotal()&&this._preloader.add(DKTools.PreloadManager.start()))};const DKTools_Scene_Map_isReady=Scene_Map.prototype.isReady;Scene_Map.prototype.isReady=function(){return!!this.isPreloaded()&&DKTools_Scene_Map_isReady.apply(this,arguments)};const DKTools_Game_Map_tileWidth=Game_Map.prototype.tileWidth;Game_Map.prototype.tileWidth=function(){return Tilemap.TILE_WIDTH||DKTools_Game_Map_tileWidth.apply(this,arguments)};const DKTools_Game_Map_tileHeight=Game_Map.prototype.tileHeight;Game_Map.prototype.tileHeight=function(){return Tilemap.TILE_HEIGHT||DKTools_Game_Map_tileHeight.apply(this,arguments)},Window_Scrollable.prototype.processPageScroll=function(){Input.isRepeated("pageup")&&this.smoothScrollUp(1),Input.isRepeated("pagedown")&&this.smoothScrollDown(1)};const DKTools_Window_Scrollable_update=Window_Scrollable.prototype.update;Window_Scrollable.prototype.update=function(){DKTools_Window_Scrollable_update.apply(this,arguments),this.processPageScroll()};const DKTools_Window_Selectable_processCursorMove=Window_Selectable.prototype.processCursorMove;if(Window_Selectable.prototype.processCursorMove=function(){if(this.isCursorMovable()){const t=this._index;Input.isTriggered("home")&&this.forceSelect(0),Input.isTriggered("end")&&this.forceSelect(Math.max(0,this.maxItems()-1)),this._index!==t&&SoundManager.playCursor()}DKTools_Window_Selectable_processCursorMove.apply(this,arguments)},DKToolsParam.get("Line Height","Enabled")&&(Window_Base.prototype.lineHeight=function(){return DKToolsParam.get("Line Height","Height")}),DKToolsParam.get("Window Padding","Enabled")&&(Game_System.prototype.windowPadding=function(){return DKToolsParam.get("Window Padding","Padding")}),DKToolsParam.get("Disable Item Background","Enabled")&&(Window_Selectable.prototype.drawItemBackground=function(){}),DKToolsParam.get("Title Menu Command Window","Enabled")){const DKTools_Scene_Title_commandWindowRect=Scene_Title.prototype.commandWindowRect;Scene_Title.prototype.commandWindowRect=function(){const rect=DKTools_Scene_Title_commandWindowRect.apply(this,arguments),offsetX=$dataSystem.titleCommandWindow.offsetX;return rect.width=eval(DKToolsParam.get("Title Menu Command Window","Width")),rect.x=(Graphics.boxWidth-rect.width)/2+offsetX,rect}}if(DKToolsParam.get("Title Menu Exit Command","Enabled")&&Utils.isNwjs()){const t=Window_TitleCommand.prototype.paint;Window_TitleCommand.prototype.paint=function(){-1===this.findSymbol("exit")&&this.addCommand(DKToolsParam.get("Title Menu Exit Command","Command Name"),"exit"),t.apply(this,arguments)};const e=Scene_Title.prototype.createCommandWindow;Scene_Title.prototype.createCommandWindow=function(){e.apply(this,arguments),this._commandWindow&&this._commandWindow.setHandler("exit",this.commandExit.bind(this))},Scene_Title.prototype.commandExit=function(){this.fadeOutAll(),SceneManager.exit()}}DKToolsParam.get("Max Savefiles","Enabled")&&(DataManager.maxSavefiles=function(){return(DKToolsParam.get("Max Savefiles","Max Savefiles")||1)+1}),(Utils.isMobileDevice()||DKToolsParam.get("Active In Background","Enabled"))&&(SceneManager.isGameActive=function(){return!0})},147:t=>{t.exports=require("fs")},970:t=>{t.exports=require("nw.gui")},37:t=>{t.exports=require("os")},17:t=>{t.exports=require("path")}},__webpack_module_cache__={};function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[t]={id:t,loaded:!1,exports:{}};return __webpack_modules__[t].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var __webpack_exports__=__webpack_require__(372)})();